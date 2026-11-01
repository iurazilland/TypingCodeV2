import { SupportedLanguage, ExecutionResult } from './types';

const WANDBOX_ENDPOINT = 'https://wandbox.org/api/compile.json';

// Production compiler mappings for Wandbox multi-language sandbox runtime
const COMPILER_MAP: Record<SupportedLanguage, string> = {
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
  web: 'web',
  linux: 'bash',
  vb: 'mono-6.12.0.199',
};

function evalVbExpr(expr: string, vars: Record<string, unknown>): string {
  const trimmed = expr.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"') && !trimmed.slice(1, -1).includes('"')) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith('$"') && trimmed.endsWith('"')) {
    let content = trimmed.slice(2, -1);
    content = content.replace(/\{([a-zA-Z0-9_]+)\}/g, (_, k) =>
      vars[k] !== undefined ? String(vars[k]) : `{${k}}`
    );
    return content;
  }
  if (vars[trimmed] !== undefined) {
    return String(vars[trimmed]);
  }
  if (trimmed.includes('&') || trimmed.includes('+')) {
    const parts = trimmed.split(/\s*&\s*|\s*\+\s*/);
    return parts.map((p) => evalVbExpr(p, vars)).join('');
  }
  return trimmed;
}

function executeVisualBasic(code: string): string {
  const lines = code.split('\n');
  const stdout: string[] = [];
  const vars: Record<string, unknown> = {};

  let i = 0;
  while (i < lines.length) {
    const rawLine = lines[i].trim();
    const line = rawLine.replace(/'.*$/, '').trim();
    if (
      !line ||
      line.startsWith('Imports ') ||
      line.startsWith('Module ') ||
      line.startsWith('End Module') ||
      line.startsWith('Sub Main') ||
      line.startsWith('End Sub')
    ) {
      i++;
      continue;
    }

    const cwMatch = line.match(/^Console\.WriteLine\((.*)\)$/i);
    if (cwMatch) {
      const expr = cwMatch[1].trim();
      stdout.push(expr ? evalVbExpr(expr, vars) : '');
      i++;
      continue;
    }

    const dimMatch = line.match(/^Dim\s+([a-zA-Z0-9_]+)(?:\s+As\s+[a-zA-Z0-9_]+)?(?:\s*=\s*(.*))?$/i);
    if (dimMatch) {
      const varName = dimMatch[1];
      const valExpr = dimMatch[2];
      vars[varName] = valExpr ? evalVbExpr(valExpr.trim(), vars) : 0;
      i++;
      continue;
    }

    const forMatch = line.match(/^For\s+([a-zA-Z0-9_]+)(?:\s+As\s+[a-zA-Z0-9_]+)?\s*=\s*(.+?)\s+To\s+(.+)$/i);
    if (forMatch) {
      const loopVar = forMatch[1];
      const startVal = Number(evalVbExpr(forMatch[2], vars)) || 0;
      const endVal = Number(evalVbExpr(forMatch[3], vars)) || 0;
      const loopBody: string[] = [];
      let depth = 1;
      let j = i + 1;
      while (j < lines.length && depth > 0) {
        const l = lines[j].trim();
        if (/^For\s/i.test(l)) depth++;
        if (/^Next/i.test(l)) depth--;
        if (depth > 0) loopBody.push(lines[j]);
        j++;
      }
      for (let cur = startVal; cur <= endVal; cur++) {
        vars[loopVar] = cur;
        for (const bl of loopBody) {
          const bTrim = bl.replace(/'.*$/, '').trim();
          const bcw = bTrim.match(/^Console\.WriteLine\((.*)\)$/i);
          if (bcw) {
            stdout.push(evalVbExpr(bcw[1].trim(), vars));
          }
        }
      }
      i = j;
      continue;
    }

    i++;
  }

  return stdout.length > 0 ? stdout.join('\n') : '';
}

function normalizeCodeForWandbox(language: SupportedLanguage, code: string): string {
  if (language === 'java') {
    return code.replace(/\bpublic\s+class\s+/g, 'class ');
  }
  return code;
}

export async function executeCode(
  language: SupportedLanguage,
  code: string,
  stdin: string = ''
): Promise<ExecutionResult> {
  const startTime = performance.now();

  if (language === 'web') {
    return {
      stdout: '',
      stderr: '',
      exitCode: 0,
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  }

  if (language === 'vb') {
    const stdout = executeVisualBasic(code);
    return {
      stdout,
      stderr: '',
      exitCode: 0,
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  }

  // Prefer server proxy route (/api/execute) when running in browser to avoid CORS/version drift
  if (typeof window !== 'undefined') {
    try {
      const proxyRes = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, code, stdin }),
      });
      if (proxyRes.ok || proxyRes.status === 400) {
        const payload = (await proxyRes.json()) as ExecutionResult;
        return {
          stdout: payload.stdout || '',
          stderr: payload.stderr || '',
          exitCode: typeof payload.exitCode === 'number' ? payload.exitCode : 0,
          executionTimeMs:
            payload.executionTimeMs ?? Math.round(performance.now() - startTime),
        };
      }
    } catch {
      // Fall back to direct Wandbox request below
    }
  }

  const compiler = COMPILER_MAP[language] || 'cpython-3.12.7';
  const preparedCode = normalizeCodeForWandbox(language, code);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000);

    const response = await fetch(WANDBOX_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        compiler,
        code: preparedCode,
        stdin,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`실행 서버 응답 오류 (HTTP ${response.status})`);
    }

    const data = await response.json();
    const stdout = (data.program_output || data.compiler_output || '').replace(
      /\r\n/g,
      '\n'
    );
    const stderr = (data.program_error || data.compiler_error || '').replace(
      /\r\n/g,
      '\n'
    );
    const exitCode = parseInt(data.status || '0', 10);

    return {
      stdout: stdout.trimEnd(),
      stderr: stderr.trim(),
      exitCode: Number.isNaN(exitCode) ? (stderr ? 1 : 0) : exitCode,
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  } catch (err: unknown) {
    const isTimeout = err instanceof Error && err.name === 'AbortError';
    return {
      stdout: '',
      stderr: isTimeout
        ? '실행 시간 초과 (9초 제한)'
        : err instanceof Error
        ? err.message
        : '실행 중 오류가 발생했습니다.',
      exitCode: 1,
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  }
}
