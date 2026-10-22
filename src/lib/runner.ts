import { SupportedLanguage, ExecutionResult } from './types';

const WANDBOX_ENDPOINT = 'https://wandbox.org/api/compile.json';

// Production compiler mappings for Wandbox multi-language sandbox runtime
const COMPILER_MAP: Record<SupportedLanguage, string> = {
  python: 'cpython-3.10.15',
  c: 'gcc-13.2.0-c',
  cpp: 'gcc-13.2.0',
  go: 'go-1.23.2',
  rust: 'rust-1.82.0',
  csharp: 'mono-6.12.0.199',
  swift: 'swift-6.0.1',
  java: 'openjdk-jdk-22+36',
  sql: 'sqlite-3.46.1',
  javascript: 'nodejs-20.12.2',
  web: 'web',
};

export async function executeCode(
  language: SupportedLanguage,
  code: string,
  stdin: string = ''
): Promise<ExecutionResult> {
  const startTime = performance.now();

  // Web execution: Handled directly in browser iframe
  if (language === 'web') {
    return {
      stdout: '[Web DOM Preview Updated]',
      stderr: '',
      exitCode: 0,
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  }

  // Compiler mapping for Wandbox public execution sandbox
  const compiler = COMPILER_MAP[language] || 'cpython-3.10.15';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const response = await fetch(WANDBOX_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        compiler,
        code,
        stdin,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Execution server responded with status: ${response.status}`);
    }

    const data = await response.json();

    const stdout = data.program_output || data.compiler_output || '';
    const stderr = data.program_error || data.compiler_error || '';
    const exitCode = parseInt(data.status || '0', 10);

    return {
      stdout: stdout.trim(),
      stderr: stderr.trim(),
      exitCode,
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  } catch (err: any) {
    const isTimeout = err.name === 'AbortError';
    return {
      stdout: '',
      stderr: isTimeout
        ? '[Execution Timed Out] (Server did not respond within 8s)'
        : `[Execution Notice] ${err.message || 'Connecting to sandbox runtime...'}`,
      exitCode: 1,
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  }
}
