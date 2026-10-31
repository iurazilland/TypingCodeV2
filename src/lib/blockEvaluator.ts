// ============================================================================
// Safe 0ms Local AST Evaluator for Practice Blocks & Python
// ============================================================================

export interface EvaluationResult {
  success: boolean;
  stdout: string;
  stderr: string;
  scope?: Record<string, any>;
  requiresRemote?: boolean;
}

export interface ExecutionStep {
  blockId?: string;
  lineIndex?: number;
  scope: Record<string, any>;
  stdout: string;
  stderr?: string;
}

export interface TraceEvaluationResult {
  success: boolean;
  stdout: string;
  stderr: string;
  scope: Record<string, any>;
  steps: ExecutionStep[];
}

export function splitTopLevelArgs(str: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuote: string | null = null;
  let parenDepth = 0;
  let bracketDepth = 0;
  let braceDepth = 0;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (inQuote) {
      if (ch === '\\' && i + 1 < str.length) {
        current += ch + str[i + 1];
        i++;
        continue;
      }
      current += ch;
      if (ch === inQuote) {
        inQuote = null;
      }
    } else if (ch === '"' || ch === "'") {
      inQuote = ch;
      current += ch;
    } else if (ch === '(') {
      parenDepth++;
      current += ch;
    } else if (ch === ')') {
      parenDepth = Math.max(0, parenDepth - 1);
      current += ch;
    } else if (ch === '[') {
      bracketDepth++;
      current += ch;
    } else if (ch === ']') {
      bracketDepth = Math.max(0, bracketDepth - 1);
      current += ch;
    } else if (ch === '{') {
      braceDepth++;
      current += ch;
    } else if (ch === '}') {
      braceDepth = Math.max(0, braceDepth - 1);
      current += ch;
    } else if (ch === ',' && parenDepth === 0 && bracketDepth === 0 && braceDepth === 0) {
      result.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim().length > 0) {
    result.push(current.trim());
  }
  return result;
}

export function unescapePythonString(str: string): string {
  return str.replace(/\\([nrtbfv\\'"])/g, (match, char) => {
    switch (char) {
      case 'n': return '\n';
      case 'r': return '\r';
      case 't': return '\t';
      case 'b': return '\b';
      case 'f': return '\f';
      case 'v': return '\v';
      case '\\': return '\\';
      case "'": return "'";
      case '"': return '"';
      default: return match;
    }
  });
}

const PYTHON_RESERVED_WORDS = new Set([
  'False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break',
  'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally',
  'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal',
  'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield',
]);

function isValidPythonIdentifier(name: string): boolean {
  return /^[a-zA-Z_]\w*$/.test(name) && !PYTHON_RESERVED_WORDS.has(name);
}

export function stripPythonComment(line: string): string {
  let inQuote: string | null = null;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuote) {
      if (ch === '\\' && i + 1 < line.length) {
        i++;
        continue;
      }
      if (ch === inQuote) inQuote = null;
    } else if (ch === '"' || ch === "'") {
      inQuote = ch;
    } else if (ch === '#') {
      return line.slice(0, i);
    }
  }
  return line;
}

function findBalancedOuterCall(expr: string): { fnName: string; argsStr: string } | null {
  const head = expr.match(/^([a-zA-Z_]\w*)\s*\(/);
  if (!head || !expr.endsWith(')')) return null;
  const openIdx = head[0].length - 1;
  let depth = 0;
  let q: string | null = null;
  for (let i = openIdx; i < expr.length; i++) {
    const ch = expr[i];
    if (q) {
      if (ch === '\\' && i + 1 < expr.length) { i++; continue; }
      if (ch === q) q = null;
    } else if (ch === '"' || ch === "'") {
      q = ch;
    } else if (ch === '(') {
      depth++;
    } else if (ch === ')') {
      depth--;
      if (depth === 0) {
        if (i === expr.length - 1) {
          return { fnName: head[1], argsStr: expr.slice(openIdx + 1, -1) };
        }
        return null;
      }
    }
  }
  return null;
}

function hasTopLevelOperator(str: string): boolean {
  let q: string | null = null;
  let p = 0, b = 0, c = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (q) {
      if (ch === '\\' && i + 1 < str.length) { i++; continue; }
      if (ch === q) q = null;
      continue;
    }
    if (ch === '"' || ch === "'") { q = ch; continue; }
    if (ch === '(') { p++; continue; }
    if (ch === ')') { p = Math.max(0, p - 1); continue; }
    if (ch === '[') { b++; continue; }
    if (ch === ']') { b = Math.max(0, b - 1); continue; }
    if (ch === '{') { c++; continue; }
    if (ch === '}') { c = Math.max(0, c - 1); continue; }
    if (p === 0 && b === 0 && c === 0) {
      if (/[+\-*/%<>=!,]/.test(ch)) return true;
      if (/\b(?:and|or|not|in|is)\b/.test(str.slice(i))) {
        const prev = i > 0 ? str[i - 1] : ' ';
        if (!/[a-zA-Z0-9_.]/.test(prev)) {
          const m = str.slice(i).match(/^(?:and|or|not|in|is)\b/);
          if (m) return true;
        }
      }
    }
  }
  return false;
}

function findBalancedMethodCall(expr: string): { receiver: string; methodName: string; argsStr: string } | null {
  if (!expr.endsWith(')')) return null;
  let q: string | null = null;
  let p = 0, b = 0, c = 0;
  let lastTopOpenParen = -1;
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (q) {
      if (ch === '\\' && i + 1 < expr.length) { i++; continue; }
      if (ch === q) q = null;
      continue;
    }
    if (ch === '"' || ch === "'") { q = ch; continue; }
    if (ch === '[') { b++; continue; }
    if (ch === ']') { b = Math.max(0, b - 1); continue; }
    if (ch === '{') { c++; continue; }
    if (ch === '}') { c = Math.max(0, c - 1); continue; }
    if (ch === '(') {
      if (p === 0 && b === 0 && c === 0) lastTopOpenParen = i;
      p++;
    } else if (ch === ')') {
      p--;
      if (p < 0) return null;
    }
  }
  if (p !== 0 || q || lastTopOpenParen <= 0) return null;
  const prefix = expr.slice(0, lastTopOpenParen).trimEnd();
  const dotMatch = prefix.match(/^([\s\S]+)\.\s*([a-zA-Z_]\w*)$/);
  if (!dotMatch) return null;
  const receiver = dotMatch[1].trim();
  if (!receiver || hasTopLevelOperator(receiver)) return null;
  return {
    receiver,
    methodName: dotMatch[2],
    argsStr: expr.slice(lastTopOpenParen + 1, -1),
  };
}

function findStandaloneAssignIndex(line: string): number {
  let q: string | null = null;
  let p = 0, b = 0, c = 0;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (q) {
      if (ch === '\\' && i + 1 < line.length) { i++; continue; }
      if (ch === q) q = null;
      continue;
    }
    if (ch === '"' || ch === "'") { q = ch; continue; }
    if (ch === '(') { p++; continue; }
    if (ch === ')') { p = Math.max(0, p - 1); continue; }
    if (ch === '[') { b++; continue; }
    if (ch === ']') { b = Math.max(0, b - 1); continue; }
    if (ch === '{') { c++; continue; }
    if (ch === '}') { c = Math.max(0, c - 1); continue; }
    if (p === 0 && b === 0 && c === 0 && ch === '=') {
      const prev = i > 0 ? line[i - 1] : '';
      const next = i + 1 < line.length ? line[i + 1] : '';
      if (next !== '=' && !/[!<>=+\-*/%]/.test(prev)) {
        return i;
      }
    }
  }
  return -1;
}

function validateRawPythonExprSyntax(expr: string): void {
  let q: string | null = null;
  let p = 0, b = 0, c = 0;
  let stripped = '';
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (q) {
      if (ch === '\\' && i + 1 < expr.length) { i++; continue; }
      if (ch === q) q = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      q = ch;
      stripped += '""';
      continue;
    }
    if (ch === '(') p++;
    else if (ch === ')') { p--; if (p < 0) throw new Error('SyntaxError: unmatched \')\''); }
    else if (ch === '[') b++;
    else if (ch === ']') { b--; if (b < 0) throw new Error('SyntaxError: unmatched \']\''); }
    else if (ch === '{') c++;
    else if (ch === '}') { c--; if (c < 0) throw new Error('SyntaxError: unmatched \'}\''); }
    stripped += ch;
  }
  if (q) throw new Error('SyntaxError: EOL while scanning string literal');
  if (p !== 0 || b !== 0 || c !== 0) throw new Error('SyntaxError: invalid syntax');
  // Disallow C/JS logical/equality operators and standalone assignment '=' inside expressions
  if (/&&|\|\||===|!==/.test(stripped)) {
    throw new Error('SyntaxError: invalid syntax');
  }
  for (let i = 0; i < stripped.length; i++) {
    if (stripped[i] === '!' && stripped[i + 1] !== '=') {
      throw new Error('SyntaxError: invalid syntax');
    }
    if (stripped[i] === '=') {
      const prev = i > 0 ? stripped[i - 1] : '';
      const next = i + 1 < stripped.length ? stripped[i + 1] : '';
      if (next !== '=' && !/[!<>=]/.test(prev)) {
        throw new Error('SyntaxError: invalid syntax');
      }
    }
  }
}

function replaceEqualityOpsOutsideStrings(js: string): string {
  let out = '';
  let q: string | null = null;
  for (let i = 0; i < js.length; i++) {
    const ch = js[i];
    if (q) {
      if (ch === '\\' && i + 1 < js.length) {
        out += ch + js[i + 1];
        i++;
        continue;
      }
      out += ch;
      if (ch === q) q = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      q = ch;
      out += ch;
      continue;
    }
    if (ch === '=' && js[i + 1] === '=' && js[i + 2] !== '=') {
      out += '===';
      i++;
      continue;
    }
    if (ch === '!' && js[i + 1] === '=' && js[i + 2] !== '=') {
      out += '!==';
      i++;
      continue;
    }
    out += ch;
  }
  return out;
}

function expandChainedComparisons(js: string): string {
  // Recursively expand inner parenthesized expressions first
  let expanded = '';
  let q: string | null = null;
  let i = 0;
  while (i < js.length) {
    const ch = js[i];
    if (q) {
      if (ch === '\\' && i + 1 < js.length) {
        expanded += ch + js[i + 1];
        i += 2;
        continue;
      }
      expanded += ch;
      if (ch === q) q = null;
      i++;
      continue;
    }
    if (ch === '"' || ch === "'") {
      q = ch;
      expanded += ch;
      i++;
      continue;
    }
    if (ch === '(') {
      let depth = 1;
      let k = i + 1;
      let innerQ: string | null = null;
      while (k < js.length && depth > 0) {
        const kc = js[k];
        if (innerQ) {
          if (kc === '\\' && k + 1 < js.length) { k += 2; continue; }
          if (kc === innerQ) innerQ = null;
        } else if (kc === '"' || kc === "'") {
          innerQ = kc;
        } else if (kc === '(') depth++;
        else if (kc === ')') depth--;
        k++;
      }
      const innerContent = js.slice(i + 1, k - 1);
      expanded += '(' + expandChainedComparisons(innerContent) + ')';
      i = k;
      continue;
    }
    expanded += ch;
    i++;
  }

  // Split at top-level && and ||
  const clauses: string[] = [];
  const logicOps: string[] = [];
  let start = 0;
  let p = 0, b = 0, c = 0;
  q = null;
  for (let idx = 0; idx < expanded.length; idx++) {
    const ch = expanded[idx];
    if (q) {
      if (ch === '\\' && idx + 1 < expanded.length) { idx++; continue; }
      if (ch === q) q = null;
      continue;
    }
    if (ch === '"' || ch === "'") { q = ch; continue; }
    if (ch === '(') p++;
    else if (ch === ')') p--;
    else if (ch === '[') b++;
    else if (ch === ']') b--;
    else if (ch === '{') c++;
    else if (ch === '}') c--;
    else if (p === 0 && b === 0 && c === 0) {
      if ((ch === '&' && expanded[idx + 1] === '&') || (ch === '|' && expanded[idx + 1] === '|')) {
        clauses.push(expanded.slice(start, idx));
        logicOps.push(expanded.slice(idx, idx + 2));
        idx++;
        start = idx + 1;
      }
    }
  }
  clauses.push(expanded.slice(start));

  const rewriteClause = (clause: string): string => {
    const parts: string[] = [];
    const ops: string[] = [];
    let cStart = 0;
    let cp = 0, cb = 0, cc = 0;
    let cq: string | null = null;
    for (let k = 0; k < clause.length; k++) {
      const ch = clause[k];
      if (cq) {
        if (ch === '\\' && k + 1 < clause.length) { k++; continue; }
        if (ch === cq) cq = null;
        continue;
      }
      if (ch === '"' || ch === "'") { cq = ch; continue; }
      if (ch === '(') cp++;
      else if (ch === ')') cp--;
      else if (ch === '[') cb++;
      else if (ch === ']') cb--;
      else if (ch === '{') cc++;
      else if (ch === '}') cc--;
      else if (cp === 0 && cb === 0 && cc === 0) {
        if ((ch === '=' || ch === '!') && clause[k + 1] === '=' && clause[k + 2] === '=') {
          parts.push(clause.slice(cStart, k).trim());
          ops.push(clause.slice(k, k + 3));
          k += 2;
          cStart = k + 1;
        } else if ((ch === '<' || ch === '>') && clause[k + 1] === '=') {
          parts.push(clause.slice(cStart, k).trim());
          ops.push(clause.slice(k, k + 2));
          k += 1;
          cStart = k + 1;
        } else if (ch === '<' || ch === '>') {
          parts.push(clause.slice(cStart, k).trim());
          ops.push(ch);
          cStart = k + 1;
        }
      }
    }
    if (ops.length < 2) return clause;
    parts.push(clause.slice(cStart).trim());
    const pairs: string[] = [];
    for (let m = 0; m < ops.length; m++) {
      pairs.push(`(${parts[m]} ${ops[m]} ${parts[m + 1]})`);
    }
    return `(${pairs.join(' && ')})`;
  };

  let result = rewriteClause(clauses[0]);
  for (let m = 0; m < logicOps.length; m++) {
    result += ` ${logicOps[m]} ${rewriteClause(clauses[m + 1])}`;
  }
  return result;
}

// 0ms Safe Local Block AST Evaluator with trace generation, stdin, and loop cycling support
export function evaluateBlocksWithTrace(blocks: any[], stdin: string = ''): TraceEvaluationResult {
  try {
    const scope: Record<string, any> = {};
    const floatVars = new Set<string>();
    const functions: Record<string, any> = {};
    let stdoutBuffer = '';
    let maxSteps = 500;
    const steps: ExecutionStep[] = [];
    const stdinLines = stdin.length > 0 ? stdin.replace(/\r\n/g, '\n').split('\n') : [];
    let stdinIdx = 0;

    const readInputLine = (promptArg?: any): string => {
      if (promptArg !== undefined && promptArg !== null && promptArg !== '') {
        stdoutBuffer += String(promptArg);
      }
      if (stdinIdx < stdinLines.length) {
        return stdinLines[stdinIdx++];
      }
      return '';
    };

    const isPythonTruthy = (val: any): boolean => {
      if (val === null || val === undefined || val === false || val === 0 || val === '') return false;
      if (typeof val === 'number' && Number.isNaN(val)) return false;
      if (Array.isArray(val)) return val.length > 0;
      if (val instanceof Set) return val.size > 0;
      if (typeof val === 'object') return Object.keys(val).length > 0;
      return Boolean(val);
    };

    const isExprFloat = (rawExpr: string, val: any): boolean => {
      if (typeof val !== 'number') return false;
      if (!Number.isInteger(val)) return true;
      const stripped = (rawExpr || '').trim().replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, '""');
      const outer = findBalancedOuterCall(stripped);
      if (outer) {
        if (['int', 'len', 'bool', 'round'].includes(outer.fnName)) return false;
        if (outer.fnName === 'float') return true;
      }
      if (/\bfloat\s*\(/.test(stripped)) return true;
      if (/(?:^|[^\w.])\d+\.\d*(?:[^\w.]|$)/.test(stripped)) return true;
      if (/(^|[^/])\/([^/]|$)/.test(stripped)) return true;
      const floatVarList = Array.from(floatVars);
      for (let fIdx = 0; fIdx < floatVarList.length; fIdx++) {
        if (new RegExp(`\\b${floatVarList[fIdx]}\\b`).test(stripped)) return true;
      }
      return false;
    };

    const getPythonTypeString = (val: any, rawExpr?: string, forceFloat?: boolean): string => {
      if (val === null || val === undefined) return "<class 'NoneType'>";
      if (typeof val === 'boolean') return "<class 'bool'>";
      if (typeof val === 'number') {
        return (forceFloat || !Number.isInteger(val) || (rawExpr ? isExprFloat(rawExpr, val) : false))
          ? "<class 'float'>"
          : "<class 'int'>";
      }
      if (typeof val === 'string') return "<class 'str'>";
      if (Array.isArray(val)) return "<class 'list'>";
      if (val instanceof Set) return "<class 'set'>";
      if (typeof val === 'object') return "<class 'dict'>";
      return `<class '${typeof val}'>`;
    };

    const formatPythonValue = (val: any, rawExpr?: string, forceFloat?: boolean): string => {
      if (val === null || val === undefined) return 'None';
      if (typeof val === 'boolean') return val ? 'True' : 'False';
      if (typeof val === 'number') {
        if (!Number.isInteger(val)) return String(val);
        if (forceFloat || (rawExpr && isExprFloat(rawExpr, val))) return val.toFixed(1);
        return String(val);
      }
      if (Array.isArray(val)) {
        return `[${val.map((v) => (typeof v === 'string' ? `'${v}'` : formatPythonValue(v))).join(', ')}]`;
      }
      if (val instanceof Set) {
        return `{${Array.from(val).map((v) => (typeof v === 'string' ? `'${v}'` : formatPythonValue(v))).join(', ')}}`;
      }
      if (typeof val === 'object') {
        const entries = Object.entries(val).map(([k, v]) => `'${k}': ${typeof v === 'string' ? `'${v}'` : formatPythonValue(v)}`);
        return `{${entries.join(', ')}}`;
      }
      return String(val);
    };

    const pyInt = (target: any): number => {
      if (target === undefined) return 0;
      if (typeof target === 'boolean') return target ? 1 : 0;
      if (typeof target === 'number') return Math.trunc(target);
      if (typeof target === 'string') {
        const t = target.trim();
        if (/^[+-]?\d+$/.test(t)) return parseInt(t, 10);
        throw new Error(`ValueError: invalid literal for int() with base 10: '${target}'`);
      }
      throw new Error('TypeError: int() argument must be a string or a real number');
    };

    const pyFloat = (target: any): number => {
      if (target === undefined) return 0.0;
      if (typeof target === 'boolean') return target ? 1.0 : 0.0;
      if (typeof target === 'number') return target;
      if (typeof target === 'string') {
        const t = target.trim();
        if (/^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(t)) return parseFloat(t);
        throw new Error(`ValueError: could not convert string to float: '${target}'`);
      }
      throw new Error('TypeError: float() argument must be a string or a real number');
    };

    const cloneScope = (s: Record<string, any>) => {
      const res: Record<string, any> = {};
      for (const k of Object.keys(s)) {
        const val = s[k];
        if (Array.isArray(val)) res[k] = [...val];
        else if (val instanceof Set) res[k] = new Set(val);
        else if (val !== null && typeof val === 'object') res[k] = { ...val };
        else res[k] = val;
      }
      return res;
    };

    const recordStep = (b: any) => {
      steps.push({
        blockId: b.id,
        lineIndex: b.lineIndex,
        scope: cloneScope(scope),
        stdout: stdoutBuffer.replace(/\r?\n$/, ''),
      });
    };

    const evalExpr = (rawExpr: string): any => {
      const expr = (rawExpr || '').trim();
      if (!expr) return null;

      // Unwrap balanced outer parentheses (excluding tuples with top-level commas)
      if (expr.startsWith('(') && expr.endsWith(')')) {
        let depth = 0;
        let q: string | null = null;
        let hasTopComma = false;
        let wrapsAll = true;
        for (let k = 0; k < expr.length; k++) {
          const c = expr[k];
          if (q) {
            if (c === '\\' && k + 1 < expr.length) { k++; continue; }
            if (c === q) q = null;
          } else if (c === '"' || c === "'") {
            q = c;
          } else if (c === '(') {
            depth++;
          } else if (c === ')') {
            depth--;
            if (depth === 0 && k < expr.length - 1) {
              wrapsAll = false;
              break;
            }
          } else if (c === ',' && depth === 1) {
            hasTopComma = true;
          }
        }
        if (wrapsAll && depth === 0 && !q && !hasTopComma) {
          return evalExpr(expr.slice(1, -1));
        }
      }

      // String literals (triple quotes and standalone single/double quotes)
      if (
        (expr.length >= 6 && expr.startsWith('"""') && expr.endsWith('"""') && expr.indexOf('"""', 3) === expr.length - 3) ||
        (expr.length >= 6 && expr.startsWith("'''") && expr.endsWith("'''") && expr.indexOf("'''", 3) === expr.length - 3)
      ) {
        return unescapePythonString(expr.slice(3, -3));
      }
      if (expr.length >= 2 && (expr[0] === '"' || expr[0] === "'") && expr[expr.length - 1] === expr[0]) {
        const quoteChar = expr[0];
        let k = 1;
        let closedAt = -1;
        while (k < expr.length) {
          if (expr[k] === '\\' && k + 1 < expr.length) {
            k += 2;
            continue;
          }
          if (expr[k] === quoteChar) {
            closedAt = k;
            break;
          }
          k++;
        }
        if (closedAt === expr.length - 1) {
          return unescapePythonString(expr.slice(1, -1));
        }
      }
      if (expr === '\\n') return '\n';
      if (expr === '\\t') return '\t';
      if (expr === 'True') return true;
      if (expr === 'False') return false;
      if (expr === 'None') return null;

      // Numbers
      if (/^[+-]?\d+$/.test(expr)) return parseInt(expr, 10);
      if (/^[+-]?\d+\.\d+$/.test(expr)) return parseFloat(expr);

      // Python string concatenation (+) and repetition (*) with strict TypeError checking
      const mayContainString =
        expr.includes('"') ||
        expr.includes("'") ||
        /\b(?:str|input|type)\s*\(/.test(expr) ||
        Object.keys(scope).some((vn) => typeof scope[vn] === 'string' && new RegExp(`\\b${vn}\\b`).test(expr));

      if (mayContainString) {
        let q: string | null = null;
        let pDepth = 0, bDepth = 0, cDepth = 0;
        let hasTopCompareOrLogic = false;
        const addSplits: { idx: number; op: '+' | '-' }[] = [];
        const mulSplits: number[] = [];

        for (let k = 0; k < expr.length; k++) {
          const c = expr[k];
          if (q) {
            if (c === '\\' && k + 1 < expr.length) { k++; continue; }
            if (c === q) q = null;
            continue;
          }
          if (c === '"' || c === "'") { q = c; continue; }
          if (c === '(') { pDepth++; continue; }
          if (c === ')') { pDepth = Math.max(0, pDepth - 1); continue; }
          if (c === '[') { bDepth++; continue; }
          if (c === ']') { bDepth = Math.max(0, bDepth - 1); continue; }
          if (c === '{') { cDepth++; continue; }
          if (c === '}') { cDepth = Math.max(0, cDepth - 1); continue; }

          if (pDepth === 0 && bDepth === 0 && cDepth === 0) {
            if (c === '=' || c === '<' || c === '>' || c === '!' || c === '&' || c === '|') {
              hasTopCompareOrLogic = true;
              break;
            }
            const prevCh = k > 0 ? expr[k - 1] : ' ';
            if (!/[a-zA-Z0-9_.]/.test(prevCh) && /^(?:and|or|not|in|is)\b/.test(expr.slice(k))) {
              hasTopCompareOrLogic = true;
              break;
            }
            if (c === '+' || c === '-') {
              const prevNonSpace = expr.slice(0, k).trimEnd().slice(-1);
              const isUnary = !prevNonSpace || /[+\-*/%(,[:]/.test(prevNonSpace);
              if (!isUnary) {
                addSplits.push({ idx: k, op: c });
              }
            } else if (c === '*' && expr[k + 1] !== '*' && expr[k - 1] !== '*') {
              mulSplits.push(k);
            }
          }
        }

        if (q) {
          throw new Error('SyntaxError: EOL while scanning string literal');
        }

        if (!hasTopCompareOrLogic && addSplits.length > 0) {
          let acc = evalExpr(expr.slice(0, addSplits[0].idx));
          for (let s = 0; s < addSplits.length; s++) {
            const nextEnd = s + 1 < addSplits.length ? addSplits[s + 1].idx : expr.length;
            const rhs = evalExpr(expr.slice(addSplits[s].idx + 1, nextEnd));
            if (addSplits[s].op === '+') {
              if (typeof acc === 'string' && typeof rhs === 'string') acc = acc + rhs;
              else if (typeof acc === 'number' && typeof rhs === 'number') acc = acc + rhs;
              else if (Array.isArray(acc) && Array.isArray(rhs)) acc = [...acc, ...rhs];
              else throw new Error('TypeError: can only concatenate str (not "int") to str');
            } else {
              if (typeof acc === 'number' && typeof rhs === 'number') acc = acc - rhs;
              else throw new Error('TypeError: unsupported operand type(s) for -');
            }
          }
          return acc;
        }

        if (!hasTopCompareOrLogic && mulSplits.length > 0) {
          let acc = evalExpr(expr.slice(0, mulSplits[0]));
          for (let s = 0; s < mulSplits.length; s++) {
            const nextEnd = s + 1 < mulSplits.length ? mulSplits[s + 1] : expr.length;
            const rhs = evalExpr(expr.slice(mulSplits[s] + 1, nextEnd));
            if (typeof acc === 'string' && typeof rhs === 'number' && Number.isInteger(rhs)) {
              acc = acc.repeat(Math.max(0, rhs));
            } else if (typeof acc === 'number' && Number.isInteger(acc) && typeof rhs === 'string') {
              acc = rhs.repeat(Math.max(0, acc));
            } else if (typeof acc === 'number' && typeof rhs === 'number') {
              acc = acc * rhs;
            } else {
              throw new Error("TypeError: can't multiply sequence by non-int");
            }
          }
          return acc;
        }
      }

      // List literals: [1, 2, 3]
      if (expr.startsWith('[') && expr.endsWith(']')) {
        let bDepth = 0;
        let q: string | null = null;
        let wrapsList = true;
        for (let k = 0; k < expr.length; k++) {
          const ch = expr[k];
          if (q) {
            if (ch === '\\' && k + 1 < expr.length) { k++; continue; }
            if (ch === q) q = null;
          } else if (ch === '"' || ch === "'") q = ch;
          else if (ch === '[') bDepth++;
          else if (ch === ']') {
            bDepth--;
            if (bDepth === 0 && k < expr.length - 1) { wrapsList = false; break; }
          }
        }
        if (wrapsList && bDepth === 0 && !q) {
          const inner = expr.slice(1, -1).trim();
          if (!inner) return [];
          return splitTopLevelArgs(inner).map((s) => evalExpr(s));
        }
      }

      // Tuple literals: (1, 2, 3)
      if (expr.startsWith('(') && expr.endsWith(')') && expr.includes(',')) {
        let pDepth = 0;
        let q: string | null = null;
        let wrapsTuple = true;
        let hasTopComma = false;
        for (let k = 0; k < expr.length; k++) {
          const ch = expr[k];
          if (q) {
            if (ch === '\\' && k + 1 < expr.length) { k++; continue; }
            if (ch === q) q = null;
          } else if (ch === '"' || ch === "'") q = ch;
          else if (ch === '(') pDepth++;
          else if (ch === ')') {
            pDepth--;
            if (pDepth === 0 && k < expr.length - 1) { wrapsTuple = false; break; }
          } else if (ch === ',' && pDepth === 1) hasTopComma = true;
        }
        if (wrapsTuple && hasTopComma && pDepth === 0 && !q) {
          const inner = expr.slice(1, -1).trim();
          return splitTopLevelArgs(inner).map((s) => evalExpr(s));
        }
      }

      // Dict / Set literals: {...}
      if (expr.startsWith('{') && expr.endsWith('}')) {
        const inner = expr.slice(1, -1).trim();
        if (!inner) return {};
        if (inner.includes(':')) {
          const dictObj: Record<string, any> = {};
          const pairs = splitTopLevelArgs(inner);
          for (const p of pairs) {
            const colonIdx = p.indexOf(':');
            if (colonIdx > 0) {
              const k = evalExpr(p.slice(0, colonIdx).trim());
              const v = evalExpr(p.slice(colonIdx + 1).trim());
              dictObj[String(k)] = v;
            }
          }
          return dictObj;
        } else {
          return new Set(splitTopLevelArgs(inner).map((s) => evalExpr(s)));
        }
      }

      // Function calls: len(x), int(x), float(x), str(x), bool(x), type(x), input(), etc.
      const outerCall = findBalancedOuterCall(expr);
      if (outerCall) {
        const fnName = outerCall.fnName;
        const rawArgs = splitTopLevelArgs(outerCall.argsStr);

        if (fnName === 'type') {
          if (rawArgs.length !== 1) throw new Error('TypeError: type() takes 1 argument');
          const argVal = evalExpr(rawArgs[0]);
          return getPythonTypeString(argVal, rawArgs[0]);
        }
        if (fnName === 'str') {
          if (rawArgs.length === 0) return '';
          const argVal = evalExpr(rawArgs[0]);
          return formatPythonValue(argVal, rawArgs[0]);
        }

        const fnArgs = rawArgs.map((a) => evalExpr(a));

        if (fnName === 'len') {
          const target = fnArgs[0];
          if (typeof target === 'string' || Array.isArray(target)) return target.length;
          if (target instanceof Set) return target.size;
          if (target && typeof target === 'object') return Object.keys(target).length;
          throw new Error(`TypeError: object of type '${typeof target}' has no len()`);
        }
        if (fnName === 'int') {
          return pyInt(fnArgs[0]);
        }
        if (fnName === 'float') {
          return pyFloat(fnArgs[0]);
        }
        if (fnName === 'bool') {
          return fnArgs.length === 0 ? false : isPythonTruthy(fnArgs[0]);
        }
        if (fnName === 'abs') {
          return Math.abs(Number(fnArgs[0]));
        }
        if (fnName === 'round') {
          const num = Number(fnArgs[0]);
          if (fnArgs.length >= 2 && typeof fnArgs[1] === 'number') {
            const factor = Math.pow(10, fnArgs[1]);
            return Math.round(num * factor) / factor;
          }
          return Math.round(num);
        }
        if (fnName === 'min') {
          const arr = fnArgs.length === 1 && Array.isArray(fnArgs[0]) ? fnArgs[0] : fnArgs;
          return Math.min(...arr.map(Number));
        }
        if (fnName === 'max') {
          const arr = fnArgs.length === 1 && Array.isArray(fnArgs[0]) ? fnArgs[0] : fnArgs;
          return Math.max(...arr.map(Number));
        }
        if (fnName === 'input') {
          return readInputLine(fnArgs[0]);
        }
        if (fnName === 'range') {
          let start = 0, stop = 0, step = 1;
          if (fnArgs.length === 1) {
            stop = Number(fnArgs[0]) || 0;
          } else if (fnArgs.length === 2) {
            start = Number(fnArgs[0]) || 0;
            stop = Number(fnArgs[1]) || 0;
          } else if (fnArgs.length >= 3) {
            start = Number(fnArgs[0]) || 0;
            stop = Number(fnArgs[1]) || 0;
            step = Number(fnArgs[2]) || 1;
          }
          const rList: number[] = [];
          if (step > 0) {
            for (let i = start; i < stop; i += step) {
              if (rList.length >= 500) break;
              rList.push(i);
            }
          } else if (step < 0) {
            for (let i = start; i > stop; i += step) {
              if (rList.length >= 500) break;
              rList.push(i);
            }
          }
          return rList;
        }
        if (fnName === 'sum') {
          const list = Array.isArray(fnArgs[0]) ? fnArgs[0] : [];
          return list.reduce((acc: number, cur: any) => acc + (Number(cur) || 0), 0);
        }
        if (fnName in functions) {
          return executeFunction(functions[fnName], fnArgs);
        }
        throw new Error(`NameError: name '${fnName}' is not defined`);
      }

      // Method call: "hello".split(), input().split(), or my_list.append(10)
      const methodCall = findBalancedMethodCall(expr);
      if (methodCall) {
        const targetVal = evalExpr(methodCall.receiver);
        const mName = methodCall.methodName;
        const mArgs = splitTopLevelArgs(methodCall.argsStr).map((a) => evalExpr(a));

        if (typeof targetVal === 'string') {
          if (mName === 'split') {
            if (mArgs[0] !== undefined && mArgs[0] !== null) {
              return targetVal.split(String(mArgs[0]));
            }
            const trimmedStr = targetVal.trim();
            return trimmedStr.length === 0 ? [] : trimmedStr.split(/\s+/);
          }
          if (mName === 'upper') return targetVal.toUpperCase();
          if (mName === 'lower') return targetVal.toLowerCase();
          if (mName === 'strip') return targetVal.trim();
          if (mName === 'replace') return targetVal.replaceAll(String(mArgs[0] ?? ''), String(mArgs[1] ?? ''));
          if (mName === 'count') {
            const sub = String(mArgs[0] ?? '');
            return sub ? targetVal.split(sub).length - 1 : targetVal.length + 1;
          }
        }
        if (Array.isArray(targetVal)) {
          if (mName === 'append') {
            targetVal.push(mArgs[0]);
            return null;
          }
          if (mName === 'pop') return targetVal.pop();
        }
      }

      // Variable reference
      if (/^[a-zA-Z_]\w*$/.test(expr)) {
        if (expr in scope) return scope[expr];
        throw new Error(`NameError: name '${expr}' is not defined`);
      }

      // Validate raw Python expression syntax (rejects &&, ||, standalone !, standalone =, unmatched quotes/parens)
      validateRawPythonExprSyntax(expr);

      // Resolve inline builtin/function calls inside compound arithmetic or boolean expressions
      // e.g. int(a) + int(b), len(pw) >= 4 and pw != "0000", int(input()) * 2
      const resolveInlineCalls = (src: string): string => {
        let out = '';
        let q: string | null = null;
        let idx = 0;
        const inlineBuiltins = new Set([
          'int', 'float', 'str', 'bool', 'len', 'type', 'input',
          'abs', 'round', 'sum', 'min', 'max', ...Object.keys(functions),
        ]);
        while (idx < src.length) {
          const ch = src[idx];
          if (q) {
            if (ch === '\\' && idx + 1 < src.length) {
              out += ch + src[idx + 1];
              idx += 2;
              continue;
            }
            out += ch;
            if (ch === q) q = null;
            idx++;
            continue;
          }
          if (ch === '"' || ch === "'") {
            q = ch;
            out += ch;
            idx++;
            continue;
          }
          const prevCh = idx > 0 ? src[idx - 1] : ' ';
          if (/[a-zA-Z_]/.test(ch) && !/[a-zA-Z0-9_.]/.test(prevCh)) {
            const idMatch = src.slice(idx).match(/^([a-zA-Z_]\w*)(\s*)\(/);
            if (idMatch && inlineBuiltins.has(idMatch[1])) {
              const openParenIdx = idx + idMatch[0].length - 1;
              let depth = 0;
              let k = openParenIdx;
              let cq: string | null = null;
              while (k < src.length) {
                const kc = src[k];
                if (cq) {
                  if (kc === '\\' && k + 1 < src.length) { k += 2; continue; }
                  if (kc === cq) cq = null;
                } else if (kc === '"' || kc === "'") cq = kc;
                else if (kc === '(') depth++;
                else if (kc === ')') {
                  depth--;
                  if (depth === 0) break;
                }
                k++;
              }
              if (depth === 0 && k < src.length) {
                const callSubstr = src.slice(idx, k + 1);
                const val = evalExpr(callSubstr);
                const lit =
                  val === null || val === undefined
                    ? 'None'
                    : typeof val === 'boolean'
                    ? (val ? 'True' : 'False')
                    : typeof val === 'string'
                    ? JSON.stringify(val)
                    : typeof val === 'object'
                    ? JSON.stringify(val)
                    : String(val);
                out += lit;
                idx = k + 1;
                continue;
              }
            }
          }
          out += ch;
          idx++;
        }
        return out;
      };

      const exprWithResolvedCalls = resolveInlineCalls(expr);

      // Transform Python tokens & variables ONLY outside string literals
      const transformOutsideQuotes = (src: string, fn: (chunk: string) => string): string => {
        let out = '';
        let chunkStart = 0;
        let q: string | null = null;
        for (let idx = 0; idx < src.length; idx++) {
          const ch = src[idx];
          if (q) {
            if (ch === '\\' && idx + 1 < src.length) { idx++; continue; }
            if (ch === q) {
              out += src.slice(chunkStart, idx + 1);
              chunkStart = idx + 1;
              q = null;
            }
          } else if (ch === '"' || ch === "'") {
            if (idx > chunkStart) {
              out += fn(src.slice(chunkStart, idx));
            }
            chunkStart = idx;
            q = ch;
          }
        }
        if (chunkStart < src.length) {
          out += q ? src.slice(chunkStart) : fn(src.slice(chunkStart));
        }
        return out;
      };

      let js = transformOutsideQuotes(exprWithResolvedCalls, (chunk) => {
        const withOps = chunk
          .replace(/\/\//g, ' ___INTDIV___ ')
          .replace(/\*\*/g, ' ___POW___ ');

        return withOps.replace(/\b([a-zA-Z_]\w*)\b/g, (ident) => {
          if (ident === '___INTDIV___' || ident === '___POW___') return ident;
          if (ident === 'True') return 'true';
          if (ident === 'False') return 'false';
          if (ident === 'None') return 'null';
          if (ident === 'and') return '&&';
          if (ident === 'or') return '||';
          if (ident === 'not') return '___PYNOT___';
          if (Object.prototype.hasOwnProperty.call(scope, ident)) {
            const val = scope[ident];
            return typeof val === 'object'
              ? JSON.stringify(val)
              : typeof val === 'string'
              ? JSON.stringify(val)
              : String(val);
          }
          return ident;
        });
      });

      js = replaceEqualityOpsOutsideStrings(js);
      js = expandChainedComparisons(js);

      // Rewrite Python 'not <comparison>' with lower precedence than comparisons (e.g. not x == 0 -> !__truthy(x === 0))
      const applyPythonNot = (src: string): string => {
        if (!src.includes('___PYNOT___')) return src;
        // Recursively process parenthesized groups first
        let pOut = '';
        let q: string | null = null;
        let idx = 0;
        while (idx < src.length) {
          const ch = src[idx];
          if (q) {
            if (ch === '\\' && idx + 1 < src.length) { pOut += ch + src[idx + 1]; idx += 2; continue; }
            pOut += ch;
            if (ch === q) q = null;
            idx++;
            continue;
          }
          if (ch === '"' || ch === "'") { q = ch; pOut += ch; idx++; continue; }
          if (ch === '(') {
            let depth = 1;
            let k = idx + 1;
            let iq: string | null = null;
            while (k < src.length && depth > 0) {
              const kc = src[k];
              if (iq) {
                if (kc === '\\' && k + 1 < src.length) { k += 2; continue; }
                if (kc === iq) iq = null;
              } else if (kc === '"' || kc === "'") iq = kc;
              else if (kc === '(') depth++;
              else if (kc === ')') depth--;
              k++;
            }
            pOut += '(' + applyPythonNot(src.slice(idx + 1, k - 1)) + ')';
            idx = k;
            continue;
          }
          pOut += ch;
          idx++;
        }

        // Split at top-level && and || so ___PYNOT___ wraps the entire comparison clause
        const parts: string[] = [];
        const ops: string[] = [];
        let start = 0;
        let p = 0, b = 0, c = 0;
        q = null;
        for (let k = 0; k < pOut.length; k++) {
          const ch = pOut[k];
          if (q) {
            if (ch === '\\' && k + 1 < pOut.length) { k++; continue; }
            if (ch === q) q = null;
            continue;
          }
          if (ch === '"' || ch === "'") { q = ch; continue; }
          if (ch === '(') p++;
          else if (ch === ')') p--;
          else if (ch === '[') b++;
          else if (ch === ']') b--;
          else if (ch === '{') c++;
          else if (ch === '}') c--;
          else if (p === 0 && b === 0 && c === 0) {
            if ((ch === '&' && pOut[k + 1] === '&') || (ch === '|' && pOut[k + 1] === '|')) {
              parts.push(pOut.slice(start, k));
              ops.push(pOut.slice(k, k + 2));
              k++;
              start = k + 1;
            }
          }
        }
        parts.push(pOut.slice(start));

        const wrapNotClause = (cl: string): string => {
          const m = cl.match(/^(\s*)___PYNOT___\s*([\s\S]+)$/);
          if (!m) return cl;
          return `${m[1]}(!__truthy(${wrapNotClause(m[2])}))`;
        };

        let res = wrapNotClause(parts[0]);
        for (let m = 0; m < ops.length; m++) {
          res += ` ${ops[m]} ${wrapNotClause(parts[m + 1])}`;
        }
        return res;
      };

      js = applyPythonNot(js);

      let powGuard = 20;
      while (js.includes('___POW___') && powGuard-- > 0) {
        const nextJs = js.replace(
          /(\([^()]+\)|[a-zA-Z0-9_.]+)\s*___POW___\s*(\([^()]+\)|-?[a-zA-Z0-9_.]+)/,
          'Math.pow($1, $2)'
        );
        if (nextJs === js) break;
        js = nextJs;
      }
      let divGuard = 20;
      while (js.includes('___INTDIV___') && divGuard-- > 0) {
        const nextJs = js.replace(
          /(\([^()]+\)|Math\.pow\([^()]+\)|[a-zA-Z0-9_.]+)\s*___INTDIV___\s*(\([^()]+\)|Math\.pow\([^()]+\)|-?[a-zA-Z0-9_.]+)/,
          'Math.floor(($1) / ($2))'
        );
        if (nextJs === js) break;
        js = nextJs;
      }

      // Strip string literals to validate remaining code syntax safely
      const codeWithoutStrings = js.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, '""');

      // Check for undefined identifiers outside string literals
      const identMatches = codeWithoutStrings.match(/\b([a-zA-Z_]\w*)\b/g) || [];
      for (const word of identMatches) {
        if (!['Math', 'true', 'false', 'null', 'floor', 'pow', '__truthy'].includes(word)) {
          if (/\d\s+[a-zA-Z_]/.test(codeWithoutStrings) || /[a-zA-Z_]\s+\d/.test(codeWithoutStrings) || codeWithoutStrings.includes(':')) {
            throw new Error(`SyntaxError: invalid syntax`);
          }
          throw new Error(`NameError: name '${word}' is not defined`);
        }
      }

      if (!/^[0-9+\-*/%().\s,Mathfloorpow_truefalsny"'[\]{}><=!&|]+$/.test(codeWithoutStrings)) {
        throw new Error(`SyntaxError: invalid syntax`);
      }

      try {
        const fn = new Function('__truthy', `"use strict"; return (${js})`);
        const evaluated = fn(isPythonTruthy);
        // Python boolean operators 'and'/'or' with booleans or comparisons return boolean
        return evaluated;
      } catch {
        throw new Error(`SyntaxError: invalid syntax`);
      }
    };

    const executeFunction = (fnDef: any, callArgs: any[]): any => {
      const localScope = { ...scope };
      const paramNames = fnDef.args.split(',').map((s: string) => s.trim()).filter((s: string) => s.length > 0);
      paramNames.forEach((name: string, idx: number) => {
        localScope[name] = callArgs[idx] ?? null;
      });

      if (fnDef.innerBlocks) {
        for (const child of fnDef.innerBlocks) {
          if (child.type === 'return') {
            return evalExpr(child.content || '');
          }
          if (child.type === 'print') {
            stdoutBuffer += (evalExpr(child.content || '') ?? '') + '\n';
          }
        }
      }
      if (fnDef.hasReturn && fnDef.returnVal) {
        return evalExpr(fnDef.returnVal);
      }
      return null;
    };

    const evalBlockAsExpr = (b: any): any => {
      if (!b) return null;
      let val: any = null;
      if (b.type === 'int') {
        const inner = b.argBlock
          ? evalBlockAsExpr(b.argBlock)
          : (b.content || '').trim()
          ? evalExpr(b.content)
          : undefined;
        val = pyInt(inner);
      } else if (b.type === 'float') {
        const inner = b.argBlock
          ? evalBlockAsExpr(b.argBlock)
          : (b.content || '').trim()
          ? evalExpr(b.content)
          : undefined;
        val = pyFloat(inner);
      } else if (b.type === 'str') {
        if (b.argBlock) {
          const inner = evalBlockAsExpr(b.argBlock);
          val = formatPythonValue(inner, undefined, b.argBlock.type === 'float');
        } else {
          const rawStr = (b.content || '').trim();
          val = rawStr ? formatPythonValue(evalExpr(rawStr), rawStr) : '';
        }
      } else if (b.type === 'type') {
        if (b.argBlock) {
          const inner = evalBlockAsExpr(b.argBlock);
          val = getPythonTypeString(inner, undefined, b.argBlock.type === 'float');
        } else {
          const rawArg = (b.content || '').trim();
          if (!rawArg) throw new Error('TypeError: type() takes 1 argument');
          const inner = evalExpr(rawArg);
          val = getPythonTypeString(inner, rawArg);
        }
      } else if (b.type === 'round') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '0');
        val = Math.round(Number(inner) || 0);
      } else if (b.type === 'abs') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '0');
        val = Math.abs(Number(inner) || 0);
      } else if (b.type === 'sum') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        if (Array.isArray(inner)) val = inner.reduce((acc: number, cur: any) => acc + (Number(cur) || 0), 0);
        else val = Number(inner) || 0;
      } else if (b.type === 'min') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        if (Array.isArray(inner) && inner.length > 0) val = Math.min(...inner.map(Number));
        else val = Number(inner) || 0;
      } else if (b.type === 'max') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        if (Array.isArray(inner) && inner.length > 0) val = Math.max(...inner.map(Number));
        else val = Number(inner) || 0;
      } else if (b.type === 'input') {
        const promptArg = b.argBlock
          ? evalBlockAsExpr(b.argBlock)
          : (b.content || '').trim()
          ? evalExpr(b.content)
          : undefined;
        val = readInputLine(promptArg);
      } else if (b.type === 'len') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '');
        if (typeof inner === 'string' || Array.isArray(inner)) val = inner.length;
        else if (inner && typeof inner === 'object') val = Object.keys(inner).length;
        else val = 0;
      } else if (b.type === 'print') {
        val = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '');
      } else if (b.type === 'variable') {
        val = b.varName in scope ? scope[b.varName] : evalExpr(b.content || '0');
      } else if (b.type === 'bool') {
        if (b.argBlock) {
          val = isPythonTruthy(evalBlockAsExpr(b.argBlock));
        } else {
          const rawB = (b.content || '').trim();
          val = rawB ? isPythonTruthy(evalExpr(rawB)) : false;
        }
      } else if (b.type === 'range') {
        const raw = b.argBlock ? evalBlockAsExpr(b.argBlock) : (b.content || '0');
        const parts = String(raw).split(',').map((s) => parseInt(s.trim(), 10)).filter((n) => !isNaN(n));
        let start = 0, stop = 0, step = 1;
        if (parts.length === 1) stop = parts[0];
        else if (parts.length === 2) { start = parts[0]; stop = parts[1]; }
        else if (parts.length >= 3) { start = parts[0]; stop = parts[1]; step = parts[2]; }
        const rList: number[] = [];
        if (step > 0) {
          for (let i = start; i < stop; i += step) rList.push(i);
        } else if (step < 0) {
          for (let i = start; i > stop; i += step) rList.push(i);
        }
        val = rList;
      } else if (b.type === 'sorted') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        if (Array.isArray(inner)) {
          val = [...inner].sort((a, b) => (typeof a === 'number' && typeof b === 'number' ? a - b : String(a).localeCompare(String(b))));
        } else {
          val = [];
        }
      } else if (b.type === 'reversed') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        val = Array.isArray(inner) ? [...inner].reverse() : [];
      } else if (b.type === 'all') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        val = Array.isArray(inner) ? inner.every(isPythonTruthy) : isPythonTruthy(inner);
      } else if (b.type === 'any') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        val = Array.isArray(inner) ? inner.some(isPythonTruthy) : isPythonTruthy(inner);
      } else if (b.type === 'enumerate') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        val = Array.isArray(inner) ? inner.map((item, idx) => [idx, item]) : [];
      } else if (b.type === 'zip') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        val = Array.isArray(inner) ? inner : [];
      } else if (b.type === 'map') {
        val = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
      } else if (b.type === 'math') {
        val = null;
      } else {
        val = evalExpr(b.content || '');
      }

      if (b.attachedMethodId) {
        const m = blocks.find((item: any) => item.id === b.attachedMethodId);
        if (m && m.type === 'method') {
          const mName = m.methodName || 'method';
          if (mName === 'split') {
            const strVal = String(val ?? '');
            const sepRaw = (m.content || '').trim();
            if (sepRaw) {
              const sepVal = evalExpr(sepRaw);
              val = strVal.split(String(sepVal));
            } else {
              const t = strVal.trim();
              val = t.length === 0 ? [] : t.split(/\s+/);
            }
          } else if (mName === 'strip') {
            val = String(val ?? '').trim();
          } else if (mName === 'upper') {
            val = String(val ?? '').toUpperCase();
          } else if (mName === 'lower') {
            val = String(val ?? '').toLowerCase();
          } else if (mName === 'replace') {
            const parts = splitTopLevelArgs(m.content || '').map((s: string) => String(evalExpr(s) ?? ''));
            val = String(val ?? '').replaceAll(parts[0] || '', parts[1] || '');
          } else if (mName === 'join') {
            const sep = String(val ?? '');
            const arg = (m.content || '').trim();
            const listVal = scope[arg] || evalExpr(arg);
            val = Array.isArray(listVal) ? listVal.join(sep) : '';
          } else if (mName === 'count') {
            const subRaw = (m.content || '').trim();
            const sub = subRaw ? String(evalExpr(subRaw)) : '';
            if (typeof val === 'string') val = sub ? val.split(sub).length - 1 : val.length + 1;
            else if (Array.isArray(val)) val = val.filter((x) => String(x) === sub).length;
          } else if (mName === 'append') {
            const item = evalExpr(m.content || '0');
            if (Array.isArray(val)) val.push(item);
          } else if (mName === 'pop') {
            if (Array.isArray(val)) val = val.pop();
          } else if (mName === 'reverse') {
            if (Array.isArray(val)) val.reverse();
          } else if (mName === 'sort') {
            if (Array.isArray(val)) val.sort((a, b) => (typeof a === 'number' && typeof b === 'number' ? a - b : String(a).localeCompare(String(b))));
          } else if (mName === 'keys') {
            if (val && typeof val === 'object') val = Object.keys(val);
          } else if (mName === 'values') {
            if (val && typeof val === 'object') val = Object.values(val);
          } else if (mName === 'items') {
            if (val && typeof val === 'object') val = Object.entries(val);
          }
        }
      }
      return val;
    };

    const runBlockList = (list: any[]): 'break' | 'continue' | void => {
      for (const blk of list) {
        if (!blk || blk.type === 'start' || blk.attachedToBlockId) continue;
        if (--maxSteps <= 0) {
          stdoutBuffer += '\n⚠️ 무한 루프 감지: 500회 이상 실행되어 안전을 위해 자동 중단되었습니다.\n';
          return;
        }

        if (blk.type === 'variable') {
          if (blk._isExprStmt) {
            evalExpr(blk.content || '');
            recordStep(blk);
            continue;
          }

          const rawVarName = (blk.varName ?? '').trim();
          const op = blk.assignOp || '=';
          const rawRhs = (blk.content ?? '').trim();

          if (!rawVarName) {
            throw new Error('SyntaxError: invalid syntax');
          }

          // Multiple assignment / tuple unpacking: a, b = 10, 20 or a, b = input().split()
          if (rawVarName.includes(',')) {
            if (op !== '=') {
              throw new Error('SyntaxError: illegal expression for augmented assignment');
            }
            const targetNames = rawVarName.split(',').map((s: string) => s.trim());
            for (const tn of targetNames) {
              if (!isValidPythonIdentifier(tn)) {
                throw new Error('SyntaxError: invalid syntax');
              }
            }

            let unpackedItems: { val: any; isFloat: boolean }[] = [];
            if (blk.argBlock) {
              const res = evalBlockAsExpr(blk.argBlock);
              if (Array.isArray(res)) {
                unpackedItems = res.map((v) => ({ val: v, isFloat: typeof v === 'number' && !Number.isInteger(v) }));
              } else if (typeof res === 'string') {
                unpackedItems = res.split('').map((c) => ({ val: c, isFloat: false }));
              } else {
                throw new Error(`TypeError: cannot unpack non-iterable ${typeof res} object`);
              }
            } else {
              if (!rawRhs) throw new Error('SyntaxError: invalid syntax');
              const rhsParts = splitTopLevelArgs(rawRhs);
              if (rhsParts.length > 1) {
                // Evaluate ALL RHS items before mutating scope (enables x, y = y, x swap!)
                unpackedItems = rhsParts.map((part) => {
                  const val = evalExpr(part);
                  return { val, isFloat: isExprFloat(part, val) };
                });
              } else {
                const singleVal = evalExpr(rhsParts[0]);
                if (Array.isArray(singleVal)) {
                  unpackedItems = singleVal.map((v) => ({
                    val: v,
                    isFloat: typeof v === 'number' && !Number.isInteger(v),
                  }));
                } else if (typeof singleVal === 'string') {
                  unpackedItems = singleVal.split('').map((c) => ({ val: c, isFloat: false }));
                } else {
                  throw new Error(`TypeError: cannot unpack non-iterable ${typeof singleVal} object`);
                }
              }
            }

            if (unpackedItems.length < targetNames.length) {
              throw new Error(
                `ValueError: not enough values to unpack (expected ${targetNames.length}, got ${unpackedItems.length})`
              );
            }
            if (unpackedItems.length > targetNames.length) {
              throw new Error(`ValueError: too many values to unpack (expected ${targetNames.length})`);
            }

            targetNames.forEach((tn: string, idx: number) => {
              scope[tn] = unpackedItems[idx].val;
              if (unpackedItems[idx].isFloat) floatVars.add(tn);
              else floatVars.delete(tn);
            });
            recordStep(blk);
            continue;
          }

          // Single variable assignment or compound assignment
          if (!isValidPythonIdentifier(rawVarName)) {
            throw new Error('SyntaxError: invalid syntax');
          }

          let rhsVal: any;
          let rhsIsFloat = false;
          if (blk.argBlock) {
            rhsVal = evalBlockAsExpr(blk.argBlock);
            rhsIsFloat =
              blk.argBlock.type === 'float' ||
              (typeof rhsVal === 'number' && !Number.isInteger(rhsVal));
          } else {
            if (!rawRhs) throw new Error('SyntaxError: invalid syntax');
            rhsVal = evalExpr(rawRhs);
            rhsIsFloat = isExprFloat(rawRhs, rhsVal);
          }

          if (op === '=') {
            if (blk.attachedMethodId && !blk.argBlock && !rawRhs) {
              // e.g. my_list.append(10) via horizontal method block on variable
              evalBlockAsExpr(blk);
            } else {
              scope[rawVarName] = rhsVal;
              if (typeof rhsVal === 'number' && rhsIsFloat) floatVars.add(rawVarName);
              else floatVars.delete(rawVarName);
            }
          } else {
            if (!(rawVarName in scope)) {
              throw new Error(`NameError: name '${rawVarName}' is not defined`);
            }
            const lhsVal = scope[rawVarName];
            const lhsIsFloat =
              floatVars.has(rawVarName) || (typeof lhsVal === 'number' && !Number.isInteger(lhsVal));

            if (op === '+=') {
              if (typeof lhsVal === 'string' && typeof rhsVal === 'string') {
                scope[rawVarName] = lhsVal + rhsVal;
                floatVars.delete(rawVarName);
              } else if (typeof lhsVal === 'number' && typeof rhsVal === 'number') {
                scope[rawVarName] = lhsVal + rhsVal;
                if (lhsIsFloat || rhsIsFloat) floatVars.add(rawVarName);
                else floatVars.delete(rawVarName);
              } else if (Array.isArray(lhsVal) && Array.isArray(rhsVal)) {
                scope[rawVarName] = [...lhsVal, ...rhsVal];
                floatVars.delete(rawVarName);
              } else {
                throw new Error(`TypeError: unsupported operand type(s) for +=`);
              }
            } else if (op === '-=') {
              if (typeof lhsVal === 'number' && typeof rhsVal === 'number') {
                scope[rawVarName] = lhsVal - rhsVal;
                if (lhsIsFloat || rhsIsFloat) floatVars.add(rawVarName);
                else floatVars.delete(rawVarName);
              } else {
                throw new Error(`TypeError: unsupported operand type(s) for -=`);
              }
            } else if (op === '*=') {
              if (typeof lhsVal === 'string' && typeof rhsVal === 'number' && Number.isInteger(rhsVal)) {
                scope[rawVarName] = lhsVal.repeat(Math.max(0, rhsVal));
                floatVars.delete(rawVarName);
              } else if (typeof lhsVal === 'number' && Number.isInteger(lhsVal) && typeof rhsVal === 'string') {
                scope[rawVarName] = rhsVal.repeat(Math.max(0, lhsVal));
                floatVars.delete(rawVarName);
              } else if (typeof lhsVal === 'number' && typeof rhsVal === 'number') {
                scope[rawVarName] = lhsVal * rhsVal;
                if (lhsIsFloat || rhsIsFloat) floatVars.add(rawVarName);
                else floatVars.delete(rawVarName);
              } else {
                throw new Error(`TypeError: unsupported operand type(s) for *=`);
              }
            } else if (op === '/=') {
              if (typeof lhsVal === 'number' && typeof rhsVal === 'number') {
                if (rhsVal === 0) throw new Error('ZeroDivisionError: float division by zero');
                scope[rawVarName] = lhsVal / rhsVal;
                floatVars.add(rawVarName);
              } else {
                throw new Error(`TypeError: unsupported operand type(s) for /=`);
              }
            } else if (op === '//=') {
              if (typeof lhsVal === 'number' && typeof rhsVal === 'number') {
                if (rhsVal === 0) throw new Error('ZeroDivisionError: integer division or modulo by zero');
                scope[rawVarName] = Math.floor(lhsVal / rhsVal);
                if (lhsIsFloat || rhsIsFloat) floatVars.add(rawVarName);
                else floatVars.delete(rawVarName);
              } else {
                throw new Error(`TypeError: unsupported operand type(s) for //=`);
              }
            } else if (op === '%=') {
              if (typeof lhsVal === 'number' && typeof rhsVal === 'number') {
                if (rhsVal === 0) throw new Error('ZeroDivisionError: integer division or modulo by zero');
                scope[rawVarName] = ((lhsVal % rhsVal) + rhsVal) % rhsVal;
                if (lhsIsFloat || rhsIsFloat) floatVars.add(rawVarName);
                else floatVars.delete(rawVarName);
              } else {
                throw new Error(`TypeError: unsupported operand type(s) for %=`);
              }
            } else if (op === '**=') {
              if (typeof lhsVal === 'number' && typeof rhsVal === 'number') {
                scope[rawVarName] = Math.pow(lhsVal, rhsVal);
                if (lhsIsFloat || rhsIsFloat) floatVars.add(rawVarName);
                else floatVars.delete(rawVarName);
              } else {
                throw new Error(`TypeError: unsupported operand type(s) for **=`);
              }
            }
          }
          recordStep(blk);
        } else if ([
          'int', 'float', 'str', 'bool', 'type', 'input', 'len', 'round', 'abs',
          'sum', 'min', 'max', 'range', 'map', 'sorted', 'iter', 'enumerate',
          'zip', 'all', 'any', 'reversed', 'open'
        ].includes(blk.type)) {
          evalBlockAsExpr(blk);
          recordStep(blk);
        } else if (blk.type === 'math') {
          // math pseudo-block placed directly in statement list: safe no-op
        } else if (blk.type === 'list') {
          const vName = blk.varName || 'my_list';
          scope[vName] = (blk.items || []).filter((i: string) => i.trim().length > 0).map((i: string) => evalExpr(i));
          recordStep(blk);
        } else if (blk.type === 'tuple') {
          const vName = blk.varName || 'my_tuple';
          scope[vName] = (blk.items || []).filter((i: string) => i.trim().length > 0).map((i: string) => evalExpr(i));
          recordStep(blk);
        } else if (blk.type === 'set') {
          const vName = blk.varName || 'my_set';
          scope[vName] = new Set((blk.items || []).filter((i: string) => i.trim().length > 0).map((i: string) => evalExpr(i)));
          recordStep(blk);
        } else if (blk.type === 'dict') {
          const vName = blk.varName || 'my_dict';
          const dictObj: Record<string, any> = {};
          (blk.dictPairs || []).forEach((p: any) => {
            if (p.key.trim()) dictObj[p.key.trim()] = evalExpr(p.value.trim() || 'None');
          });
          scope[vName] = dictObj;
          recordStep(blk);
        } else if (blk.type === 'comment') {
          // Pure comment block: does not affect scope or stdout
          recordStep(blk);
        } else if (blk.type === 'def') {
          const fName = blk.varName || 'my_func';
          functions[fName] = {
            args: blk.content || '',
            innerBlocks: blk.innerBlocks || [],
            hasReturn: blk.hasReturn,
            returnVal: blk.returnVal,
          };
          recordStep(blk);
        } else if (blk.type === 'print') {
          let sep = ' ';
          let end = '\n';

          const applySepExpr = (exprStr: string) => {
            const val = evalExpr(exprStr);
            if (val === null || val === undefined) {
              sep = ' ';
            } else if (typeof val !== 'string') {
              throw new Error(`TypeError: sep must be None or a string, not ${typeof val}`);
            } else {
              sep = val;
            }
          };

          const applyEndExpr = (exprStr: string) => {
            const val = evalExpr(exprStr);
            if (val === null || val === undefined) {
              end = '\n';
            } else if (typeof val !== 'string') {
              throw new Error(`TypeError: end must be None or a string, not ${typeof val}`);
            } else {
              end = val;
            }
          };

          if (blk.hasSep) {
            const rawSep = (blk.sepVal ?? '').trim().replace(/^sep\s*=\s*/, '');
            if (rawSep.length === 0) {
              throw new Error('SyntaxError: invalid syntax');
            }
            applySepExpr(rawSep);
          }
          if (blk.hasEnd) {
            const rawEnd = (blk.endVal ?? '').trim().replace(/^end\s*=\s*/, '');
            if (rawEnd.length === 0) {
              throw new Error('SyntaxError: invalid syntax');
            }
            applyEndExpr(rawEnd);
          }

          if (blk.argBlock) {
            const val = evalBlockAsExpr(blk.argBlock);
            stdoutBuffer += formatPythonValue(val, undefined, blk.argBlock.type === 'float') + end;
          } else {
            const raw = (blk.content || '').trim();
            if (!raw) {
              stdoutBuffer += end;
            } else {
              const args = splitTopLevelArgs(raw);
              const posArgs: string[] = [];
              let seenKeyword = false;

              for (const arg of args) {
                const kwMatch = arg.match(/^([a-zA-Z_]\w*)\s*=(?!=)\s*([\s\S]+)$/);
                if (kwMatch) {
                  seenKeyword = true;
                  const kwName = kwMatch[1];
                  const kwExpr = kwMatch[2];
                  if (kwName === 'sep') {
                    applySepExpr(kwExpr);
                  } else if (kwName === 'end') {
                    applyEndExpr(kwExpr);
                  } else {
                    throw new Error(`TypeError: '${kwName}' is an invalid keyword argument for print()`);
                  }
                } else {
                  if (seenKeyword) {
                    throw new Error('SyntaxError: positional argument follows keyword argument');
                  }
                  posArgs.push(arg);
                }
              }

              const printed = posArgs.map((arg) => {
                const val = evalExpr(arg);
                return formatPythonValue(val, arg);
              });
              stdoutBuffer += printed.join(sep) + end;
            }
          }
          recordStep(blk);
        } else if (blk.type === 'break') {
          recordStep(blk);
          return 'break';
        } else if (blk.type === 'continue') {
          recordStep(blk);
          return 'continue';
        } else if (blk.type === 'for_range' || blk.type === 'for_in') {
          const vName = blk.varName || (blk.type === 'for_range' ? 'i' : 'item');
          let seqVal: any = null;
          let seqLabel = 'range(5)';

          if (blk.argBlock) {
            seqVal = evalBlockAsExpr(blk.argBlock);
            seqLabel = blk.argBlock.type || 'seq';
          } else if (blk.content) {
            seqVal = evalExpr(blk.content);
            const contentTrimmed = (blk.content || '').trim();
            if (
              contentTrimmed.startsWith('range(') ||
              contentTrimmed.startsWith('enumerate(') ||
              contentTrimmed.startsWith('zip(') ||
              contentTrimmed.startsWith('reversed(') ||
              contentTrimmed.startsWith('sorted(')
            ) {
              seqLabel = contentTrimmed;
            } else if (blk.type === 'for_range') {
              seqLabel = `range(${contentTrimmed})`;
            } else {
              seqLabel = contentTrimmed;
            }
          } else {
            seqVal = blk.type === 'for_range' ? [0, 1, 2, 3, 4] : [];
            seqLabel = 'range(5)';
          }

          const arr = Array.isArray(seqVal)
            ? seqVal
            : typeof seqVal === 'number'
            ? Array.from({ length: Math.max(0, Math.min(seqVal, 100)) }, (_, i) => i)
            : typeof seqVal === 'string'
            ? seqVal.split('')
            : [seqVal];

          // 1. Expose generated sequence in memory scope
          if (!(seqLabel in scope)) {
            scope[seqLabel] = arr;
          }

          for (const item of arr) {
            if (maxSteps <= 0) break;
            scope[vName] = item;
            // Record step for loop header cycling on every iteration!
            recordStep(blk);
            if (blk.innerBlocks && blk.innerBlocks.length > 0) {
              const sig = runBlockList(blk.innerBlocks);
              if (sig === 'break') break;
            }
          }
        } else if (blk.type === 'while') {
          const condRaw = (blk.content || '').trim() || 'False';
          let loopGuard = 100;
          while (isPythonTruthy(evalExpr(condRaw)) && loopGuard-- > 0) {
            if (--maxSteps <= 0) {
              stdoutBuffer += '\n⚠️ 무한 루프 감지: 500회 이상 실행되어 안전을 위해 자동 중단되었습니다.\n';
              break;
            }
            // Record step for while header cycling on every iteration!
            recordStep(blk);
            if (blk.innerBlocks && blk.innerBlocks.length > 0) {
              const sig = runBlockList(blk.innerBlocks);
              if (sig === 'break') break;
            }
          }
        } else if (blk.type === 'if') {
          const branches = (blk.branches && blk.branches.length > 0)
            ? blk.branches
            : [{ id: 'br-if-0', kind: 'if', condition: blk.content || 'False', innerBlocks: blk.innerBlocks || [] }];

          for (const br of branches) {
            const branchStepRef = { id: blk.id, lineIndex: (br as any).lineIndex ?? blk.lineIndex };
            if (br.kind === 'if' || br.kind === 'elif') {
              const rawCond = (br.condition ?? '').trim();
              if (!rawCond) {
                throw new Error('SyntaxError: invalid syntax');
              }
              const cond = isPythonTruthy(evalExpr(rawCond));
              if (cond) {
                recordStep(branchStepRef);
                if (br.innerBlocks) {
                  const sig = runBlockList(br.innerBlocks);
                  if (sig === 'break') return 'break';
                  if (sig === 'continue') return 'continue';
                }
                break;
              }
            } else if (br.kind === 'else') {
              recordStep(branchStepRef);
              if (br.innerBlocks) {
                const sig = runBlockList(br.innerBlocks);
                if (sig === 'break') return 'break';
                if (sig === 'continue') return 'continue';
              }
              break;
            }
          }
        }
      }
    };

    runBlockList(blocks);

    return {
      success: true,
      stdout: stdoutBuffer.replace(/\r?\n$/, ''),
      stderr: '',
      scope,
      steps,
    };
  } catch (err: any) {
    return {
      success: false,
      stdout: '',
      stderr: String(err?.message || ''),
      scope: {},
      steps: [],
    };
  }
}

// Synchronous 0ms wrapper for standard evaluation
export function evaluateBlocksLocally(blocks: any[], stdin: string = ''): EvaluationResult {
  const res = evaluateBlocksWithTrace(blocks, stdin);
  return {
    success: res.success,
    stdout: res.stdout,
    stderr: res.stderr,
    scope: res.scope,
  };
}

// Lightweight AST parser for Python code in Typing Mode (preserves lineIndex, branches, and loops)
export function parsePythonCodeToBlocks(code: string): any[] {
  const rawLines = code.replace(/\r\n/g, '\n').split('\n');
  let i = 0;

  const getIndent = (str: string) => {
    const match = str.match(/^(\s*)/);
    return match ? match[1].length : 0;
  };

  const peekNextActiveLineIndex = (fromIdx: number): number => {
    let k = fromIdx;
    while (k < rawLines.length) {
      const stripped = stripPythonComment(rawLines[k]).trim();
      if (stripped.length > 0) return k;
      k++;
    }
    return -1;
  };

  const parseBlock = (minIndent: number, exactBlockIndent?: number): any[] => {
    const list: any[] = [];
    let blockIndent: number | undefined = exactBlockIndent;

    while (i < rawLines.length) {
      const line = rawLines[i];
      const codeOnly = stripPythonComment(line);
      const trimmed = codeOnly.trim();

      // Skip blank lines and pure comments
      if (!trimmed) {
        i++;
        continue;
      }

      const indent = getIndent(line);
      if (indent < minIndent) {
        break; // Return back to parent indentation level
      }
      if (blockIndent === undefined) {
        blockIndent = indent;
      } else if (indent !== blockIndent) {
        throw new Error('IndentationError: unexpected indent');
      }

      const lineIndex = i;
      i++;

      // Catch orphan elif / else or malformed headers
      if (/^(?:elif|else)\b/.test(trimmed)) {
        throw new Error('SyntaxError: invalid syntax');
      }
      if (/^(?:if|for|while)\b/.test(trimmed) && !trimmed.endsWith(':')) {
        throw new Error('SyntaxError: expected \':\'');
      }

      if (trimmed === 'pass') {
        list.push({ id: `py-line-${lineIndex}`, type: 'comment', content: 'pass', lineIndex });
        continue;
      }
      if (trimmed === 'break') {
        list.push({ id: `py-line-${lineIndex}`, type: 'break', lineIndex });
        continue;
      }
      if (trimmed === 'continue') {
        list.push({ id: `py-line-${lineIndex}`, type: 'continue', lineIndex });
        continue;
      }

      // 1. for loop: for <var> in <range/seq>:
      const forMatch = trimmed.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+([\s\S]+?)\s*:$/);
      if (forMatch) {
        const inner = parseBlock(indent + 1);
        if (inner.length === 0) {
          throw new Error('IndentationError: expected an indented block');
        }
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'for_in',
          varName: forMatch[1],
          content: forMatch[2],
          lineIndex,
          innerBlocks: inner,
        });
        continue;
      }

      // 2. while loop: while <condition>:
      const whileMatch = trimmed.match(/^while\s+([\s\S]+?)\s*:$/);
      if (whileMatch) {
        const inner = parseBlock(indent + 1);
        if (inner.length === 0) {
          throw new Error('IndentationError: expected an indented block');
        }
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'while',
          content: whileMatch[1],
          lineIndex,
          innerBlocks: inner,
        });
        continue;
      }

      // 3. if / elif / else multi-branch block
      const ifMatch = trimmed.match(/^if\s+([\s\S]+?)\s*:$/);
      if (ifMatch) {
        const firstInner = parseBlock(indent + 1);
        if (firstInner.length === 0) {
          throw new Error('IndentationError: expected an indented block');
        }
        const branches: any[] = [
          {
            id: `br-if-${lineIndex}`,
            kind: 'if',
            condition: ifMatch[1],
            lineIndex,
            innerBlocks: firstInner,
          },
        ];

        let seenElse = false;
        while (true) {
          const nextIdx = peekNextActiveLineIndex(i);
          if (nextIdx === -1) break;
          const nextLine = rawLines[nextIdx];
          const nextIndent = getIndent(nextLine);
          if (nextIndent !== indent) break;
          const nextTrimmed = stripPythonComment(nextLine).trim();

          if (/^else\s+if\b/.test(nextTrimmed)) {
            throw new Error('SyntaxError: invalid syntax');
          }

          if (/^elif\b/.test(nextTrimmed)) {
            if (seenElse || !nextTrimmed.endsWith(':')) {
              throw new Error('SyntaxError: invalid syntax');
            }
            const elifMatch = nextTrimmed.match(/^elif\s+([\s\S]+?)\s*:$/);
            if (!elifMatch) {
              throw new Error('SyntaxError: invalid syntax');
            }
            i = nextIdx + 1;
            const elifInner = parseBlock(indent + 1);
            if (elifInner.length === 0) {
              throw new Error('IndentationError: expected an indented block');
            }
            branches.push({
              id: `br-elif-${nextIdx}`,
              kind: 'elif',
              condition: elifMatch[1],
              lineIndex: nextIdx,
              innerBlocks: elifInner,
            });
            continue;
          }

          if (/^else\b/.test(nextTrimmed)) {
            if (seenElse || nextTrimmed !== 'else:') {
              throw new Error('SyntaxError: invalid syntax');
            }
            seenElse = true;
            i = nextIdx + 1;
            const elseInner = parseBlock(indent + 1);
            if (elseInner.length === 0) {
              throw new Error('IndentationError: expected an indented block');
            }
            branches.push({
              id: `br-else-${nextIdx}`,
              kind: 'else',
              lineIndex: nextIdx,
              innerBlocks: elseInner,
            });
            continue;
          }

          break;
        }

        list.push({
          id: `py-line-${lineIndex}`,
          type: 'if',
          content: ifMatch[1],
          lineIndex,
          innerBlocks: firstInner,
          branches,
        });
        continue;
      }

      // 4. print function: print(...)
      const outerCall = findBalancedOuterCall(trimmed);
      if (outerCall && outerCall.fnName === 'print') {
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'print',
          content: outerCall.argsStr,
          lineIndex,
        });
        continue;
      }

      // 5. Compound assignment: x += 10, hp -= 5, a *= 2, n /= 4, n //= 2, n %= 3, n **= 2
      const compoundMatch = trimmed.match(/^([^=+\-*/%]+?)\s*(\+=|-=|\*=|\/=|\/\/=|%=|\*\*=)\s*([\s\S]*)$/);
      if (compoundMatch) {
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'variable',
          varName: compoundMatch[1].trim(),
          assignOp: compoundMatch[2],
          content: compoundMatch[3].trim(),
          lineIndex,
        });
        continue;
      }

      // 6. Standard or multiple assignment: x = 10 or a, b = 10, 20
      const eqIdx = findStandaloneAssignIndex(trimmed);
      if (eqIdx > 0) {
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'variable',
          varName: trimmed.slice(0, eqIdx).trim(),
          assignOp: '=',
          content: trimmed.slice(eqIdx + 1).trim(),
          lineIndex,
        });
        continue;
      }

      // 7. Generic expression statement / method call (e.g. my_list.append(10))
      list.push({
        id: `py-line-${lineIndex}`,
        type: 'variable',
        varName: '_',
        _isExprStmt: true,
        content: trimmed,
        lineIndex,
      });
    }

    return list;
  };

  return parseBlock(0, 0);
}

// Local python evaluator for simple, conditional & loop typing mode lines
export function evaluatePythonLocally(code: string, stdin: string = ''): EvaluationResult {
  try {
    const blocks = parsePythonCodeToBlocks(code);
    return evaluateBlocksLocally(blocks, stdin);
  } catch (err: any) {
    return {
      success: false,
      stdout: '',
      stderr: String(err?.message || 'SyntaxError: invalid syntax'),
      scope: {},
    };
  }
}

// Local python trace evaluator with step-by-step loop & branch cycling
export function evaluatePythonWithTrace(code: string, stdin: string = ''): TraceEvaluationResult {
  try {
    const blocks = parsePythonCodeToBlocks(code);
    return evaluateBlocksWithTrace(blocks, stdin);
  } catch (err: any) {
    return {
      success: false,
      stdout: '',
      stderr: String(err?.message || 'SyntaxError: invalid syntax'),
      scope: {},
      steps: [],
    };
  }
}

// Scratch execution chain order: traverses starting from 'start' hat block (+ includes horizontally attached method blocks for lookup)
export function getOrderedCanvasBlocks<T extends { id: string; type: string; nextBlockId?: string }>(blocks: T[]): T[] {
  const blockMap = new Map<string, T>();
  blocks.forEach((b) => blockMap.set(b.id, b));

  const startBlock = blocks.find((b) => b.type === 'start');
  if (!startBlock) return [];

  const ordered: T[] = [startBlock];
  let currId = startBlock.nextBlockId;
  const visited = new Set<string>([startBlock.id]);

  while (currId && blockMap.has(currId) && !visited.has(currId)) {
    visited.add(currId);
    const currBlock = blockMap.get(currId)!;
    ordered.push(currBlock);
    currId = currBlock.nextBlockId;
  }

  for (const b of blocks) {
    if ((b as any).attachedToBlockId && !visited.has(b.id)) {
      visited.add(b.id);
      ordered.push(b);
    }
  }

  return ordered;
}

