import { NextResponse } from 'next/server';

const WANDBOX_COMPILE_URL = 'https://wandbox.org/api/compile.json';
const WANDBOX_LIST_URL = 'https://wandbox.org/api/list.json';

const DEFAULT_COMPILERS: Record<string, string> = {
  python: 'cpython-3.12.7',
  c: 'gcc-13.2.0-c',
  cpp: 'gcc-13.2.0',
  go: 'go-1.23.2',
  rust: 'rust-1.82.0',
  csharp: 'mono-6.12.0.199',
  swift: 'swift-6.0.1',
  java: 'openjdk-jdk-22+36',
  sql: 'sqlite-3.46.1',
  javascript: 'nodejs-20.17.0',
  linux: 'bash',
};

const COMPILER_PREFIX_FALLBACK: Record<string, { lang: string; prefix: string }> = {
  python: { lang: 'Python', prefix: 'cpython-3.' },
  c: { lang: 'C', prefix: 'gcc-' },
  cpp: { lang: 'C++', prefix: 'gcc-' },
  go: { lang: 'Go', prefix: 'go-' },
  rust: { lang: 'Rust', prefix: 'rust-' },
  csharp: { lang: 'C#', prefix: 'mono-' },
  swift: { lang: 'Swift', prefix: 'swift-' },
  java: { lang: 'Java', prefix: 'openjdk-' },
  sql: { lang: 'SQL', prefix: 'sqlite-' },
  javascript: { lang: 'JavaScript', prefix: 'nodejs-' },
  linux: { lang: 'Bash script', prefix: 'bash' },
};

let cachedCompilerNames: Array<{ name: string; language: string }> | null = null;
let cachedAt = 0;

async function resolveFallbackCompiler(languageKey: string): Promise<string | null> {
  const now = Date.now();
  if (!cachedCompilerNames || now - cachedAt > 3600_000) {
    try {
      const res = await fetch(WANDBOX_LIST_URL, { cache: 'no-store' });
      if (res.ok) {
        cachedCompilerNames = (await res.json()) as Array<{
          name: string;
          language: string;
        }>;
        cachedAt = now;
      }
    } catch {
      return null;
    }
  }
  if (!cachedCompilerNames) return null;

  const spec = COMPILER_PREFIX_FALLBACK[languageKey];
  if (!spec) return null;

  const found = cachedCompilerNames.find(
    (c) =>
      c.language === spec.lang &&
      c.name.startsWith(spec.prefix) &&
      !c.name.includes('head')
  );
  return found ? found.name : null;
}

function normalizeSourceForSandbox(languageKey: string, rawCode: string): string {
  if (languageKey === 'java') {
    // Wandbox saves Java source as prog.java, so top-level `public class Main` fails javac unless package-private
    return rawCode.replace(/\bpublic\s+class\s+/g, 'class ');
  }
  return rawCode;
}

async function runWandbox(compiler: string, code: string, stdin: string) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);
  try {
    return await fetch(WANDBOX_COMPILE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ compiler, code, stdin }),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(req: Request) {
  const startedAt = Date.now();
  try {
    const body = (await req.json()) as {
      language?: string;
      code?: string;
      stdin?: string;
    };

    const lang = String(body.language || 'python').toLowerCase();
    const rawCode = typeof body.code === 'string' ? body.code : '';
    const stdin = typeof body.stdin === 'string' ? body.stdin : '';

    if (rawCode.length > 60000 || stdin.length > 20000) {
      return NextResponse.json(
        {
          stdout: '',
          stderr: '코드 또는 입력값 길이가 허용 범위를 초과했습니다.',
          exitCode: 1,
          executionTimeMs: Date.now() - startedAt,
        },
        { status: 400 }
      );
    }

    const compiler = DEFAULT_COMPILERS[lang] || DEFAULT_COMPILERS.python;
    const preparedCode = normalizeSourceForSandbox(lang, rawCode);

    let res = await runWandbox(compiler, preparedCode, stdin);
    if (!res.ok) {
      const fallback = await resolveFallbackCompiler(lang);
      if (fallback && fallback !== compiler) {
        DEFAULT_COMPILERS[lang] = fallback;
        res = await runWandbox(fallback, preparedCode, stdin);
      }
    }

    if (!res.ok) {
      return NextResponse.json(
        {
          stdout: '',
          stderr: `샌드박스 실행 서버 응답 오류 (HTTP ${res.status})`,
          exitCode: 1,
          executionTimeMs: Date.now() - startedAt,
        },
        { status: 502 }
      );
    }

    const data = (await res.json()) as {
      program_output?: string;
      compiler_output?: string;
      program_error?: string;
      compiler_error?: string;
      status?: string;
    };

    const stdout = (data.program_output || data.compiler_output || '').replace(
      /\r\n/g,
      '\n'
    );
    const stderr = (data.program_error || data.compiler_error || '').replace(
      /\r\n/g,
      '\n'
    );
    const parsedStatus = parseInt(data.status || '0', 10);
    const exitCode = Number.isNaN(parsedStatus) ? (stderr ? 1 : 0) : parsedStatus;

    return NextResponse.json({
      stdout: stdout.trimEnd(),
      stderr: stderr.trim(),
      exitCode,
      executionTimeMs: Date.now() - startedAt,
    });
  } catch (err: unknown) {
    const isAbort = err instanceof Error && err.name === 'AbortError';
    return NextResponse.json(
      {
        stdout: '',
        stderr: isAbort
          ? '실행 시간 초과 (9초 제한)'
          : err instanceof Error
          ? err.message
          : '코드 실행 중 오류가 발생했습니다.',
        exitCode: 1,
        executionTimeMs: Date.now() - startedAt,
      },
      { status: 500 }
    );
  }
}
