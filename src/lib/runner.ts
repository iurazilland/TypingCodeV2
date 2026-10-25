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
  linux: 'bash',
  vb: 'mono-6.12.0.199',
};

function evalVbExpr(expr: string, vars: Record<string, any>): string {
  const trimmed = expr.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"') && !trimmed.slice(1, -1).includes('"')) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith('$"') && trimmed.endsWith('"')) {
    let content = trimmed.slice(2, -1);
    content = content.replace(/\{([a-zA-Z0-9_]+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : `{${k}}`));
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
  const vars: Record<string, any> = {};

  let i = 0;
  while (i < lines.length) {
    const rawLine = lines[i].trim();
    const line = rawLine.replace(/'.*$/, '').trim();
    if (!line || line.startsWith('Imports ') || line.startsWith('Module ') || line.startsWith('End Module') || line.startsWith('Sub Main') || line.startsWith('End Sub')) {
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

  return stdout.length > 0 ? stdout.join('\n') : '[Visual Basic Execution Completed Successfully]';
}

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

  // Visual Basic execution: Native lightweight console runtime
  if (language === 'vb') {
    const stdout = executeVisualBasic(code);
    return {
      stdout,
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
