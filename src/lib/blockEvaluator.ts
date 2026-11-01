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

export function makeTuple(arr: any[]): any[] {
  const t = [...arr];
  Object.defineProperty(t, '__isTuple', { value: true, enumerable: false });
  return t;
}

export function isTuple(val: any): boolean {
  return Array.isArray(val) && Boolean((val as any).__isTuple);
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
  if (PYTHON_RESERVED_WORDS.has(head[1])) return null;
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
      if (/[+\-*/%<>=!,&|^]/.test(ch)) return true;
      if (/\b(?:and|or|not|in|is|if|else|for|lambda)\b/.test(str.slice(i))) {
        const prev = i > 0 ? str[i - 1] : ' ';
        if (!/[a-zA-Z0-9_.]/.test(prev)) {
          const m = str.slice(i).match(/^(?:and|or|not|in|is|if|else|for|lambda)\b/);
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
  if (/^[+-]?\d+$/.test(receiver)) return null; // float literal like 3.14 is not a method receiver
  return {
    receiver,
    methodName: dotMatch[2],
    argsStr: expr.slice(lastTopOpenParen + 1, -1),
  };
}

function findBalancedPostfixBracket(expr: string): { receiver: string; bracketContent: string } | null {
  if (!expr.endsWith(']')) return null;
  let q: string | null = null;
  let p = 0, b = 0, c = 0;
  let lastTopOpenBracket = -1;
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (q) {
      if (ch === '\\' && i + 1 < expr.length) { i++; continue; }
      if (ch === q) q = null;
      continue;
    }
    if (ch === '"' || ch === "'") { q = ch; continue; }
    if (ch === '(') { p++; continue; }
    if (ch === ')') { p--; if (p < 0) return null; continue; }
    if (ch === '{') { c++; continue; }
    if (ch === '}') { c--; if (c < 0) return null; continue; }
    if (ch === '[') {
      if (p === 0 && b === 0 && c === 0) lastTopOpenBracket = i;
      b++;
    } else if (ch === ']') {
      b--;
      if (b < 0) return null;
    }
  }
  if (b !== 0 || q || lastTopOpenBracket <= 0) return null;
  const receiver = expr.slice(0, lastTopOpenBracket).trim();
  if (!receiver || hasTopLevelOperator(receiver)) return null;
  return {
    receiver,
    bracketContent: expr.slice(lastTopOpenBracket + 1, -1),
  };
}

function findBalancedPostfixAttr(expr: string): { receiver: string; attrName: string } | null {
  let q: string | null = null;
  let p = 0, b = 0, c = 0;
  let lastTopDot = -1;
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (q) {
      if (ch === '\\' && i + 1 < expr.length) { i++; continue; }
      if (ch === q) q = null;
      continue;
    }
    if (ch === '"' || ch === "'") { q = ch; continue; }
    if (ch === '(') { p++; continue; }
    if (ch === ')') { p--; if (p < 0) return null; continue; }
    if (ch === '[') { b++; continue; }
    if (ch === ']') { b--; if (b < 0) return null; continue; }
    if (ch === '{') { c++; continue; }
    if (ch === '}') { c--; if (c < 0) return null; continue; }
    if (ch === '.' && p === 0 && b === 0 && c === 0) {
      lastTopDot = i;
    }
  }
  if (p !== 0 || b !== 0 || c !== 0 || q || lastTopDot <= 0) return null;
  const receiver = expr.slice(0, lastTopDot).trim();
  const attrName = expr.slice(lastTopDot + 1).trim();
  if (!receiver || !/^[a-zA-Z_]\w*$/.test(attrName)) return null;
  if (/^[+-]?\d+$/.test(receiver) || hasTopLevelOperator(receiver)) return null;
  return { receiver, attrName };
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
  const strippedDepths: number[] = [];
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
      strippedDepths.push(p, p);
      continue;
    }
    if (ch === '(') p++;
    else if (ch === ')') { p--; if (p < 0) throw new Error("SyntaxError: unmatched ')'"); }
    else if (ch === '[') b++;
    else if (ch === ']') { b--; if (b < 0) throw new Error("SyntaxError: unmatched ']'"); }
    else if (ch === '{') c++;
    else if (ch === '}') { c--; if (c < 0) throw new Error("SyntaxError: unmatched '}'"); }
    stripped += ch;
    strippedDepths.push(p);
  }
  if (q) throw new Error('SyntaxError: EOL while scanning string literal');
  if (p !== 0 || b !== 0 || c !== 0) throw new Error('SyntaxError: invalid syntax');
  if (/&&|\|\||===|!==/.test(stripped)) {
    throw new Error('SyntaxError: invalid syntax');
  }
  for (let i = 0; i < stripped.length; i++) {
    if (stripped[i] === '!' && stripped[i + 1] !== '=') {
      throw new Error('SyntaxError: invalid syntax');
    }
    if (stripped[i] === '=' && strippedDepths[i] === 0) {
      const prev = i > 0 ? stripped[i - 1] : '';
      const next = i + 1 < stripped.length ? stripped[i + 1] : '';
      if (next !== '=' && !/[!<>=]/.test(prev)) {
        throw new Error('SyntaxError: invalid syntax');
      }
    }
  }
}

function splitTopLevelColon(str: string): string[] | null {
  const parts: string[] = [];
  let q: string | null = null;
  let p = 0, b = 0, c = 0;
  let start = 0;
  let foundColon = false;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (q) {
      if (ch === '\\' && i + 1 < str.length) { i++; continue; }
      if (ch === q) q = null;
      continue;
    }
    if (ch === '"' || ch === "'") { q = ch; continue; }
    if (ch === '(') p++;
    else if (ch === ')') p = Math.max(0, p - 1);
    else if (ch === '[') b++;
    else if (ch === ']') b = Math.max(0, b - 1);
    else if (ch === '{') c++;
    else if (ch === '}') c = Math.max(0, c - 1);
    else if (ch === ':' && p === 0 && b === 0 && c === 0) {
      foundColon = true;
      parts.push(str.slice(start, i));
      start = i + 1;
    }
  }
  if (!foundColon) return null;
  parts.push(str.slice(start));
  return parts;
}

type ReturnSignal = { __isReturn: true; value: any };
type LoopOrReturnSignal = 'break' | 'continue' | ReturnSignal | void;

// 0ms Safe Local Block AST Evaluator with trace generation, stdin, and loop cycling support
export function evaluateBlocksWithTrace(blocks: any[], stdin: string = ''): TraceEvaluationResult {
  try {
    const scope: Record<string, any> = {};
    let currentScope: Record<string, any> = scope;
    const floatVars = new Set<string>();
    const functions: Record<string, any> = {};
    const classes: Record<
      string,
      {
        __isClass: true;
        name: string;
        parentName?: string;
        methods: Record<string, any>;
        classAttrs: Record<string, any>;
      }
    > = {};
    const BUILTIN_TYPE_NAMES = new Set(['int', 'float', 'str', 'bool', 'list', 'tuple', 'dict', 'set']);
    let activeCaughtException: Error | null = null;
    let stdoutBuffer = '';
    let maxSteps = 500;
    const steps: ExecutionStep[] = [];
    const stdinLines = stdin.length > 0 ? stdin.replace(/\r\n/g, '\n').split('\n') : [];
    let stdinIdx = 0;

    const isInstanceObj = (val: any): boolean =>
      Boolean(val && typeof val === 'object' && val.__isInstance);

    const isSpecialPyObject = (val: any): boolean =>
      Boolean(
        val &&
          typeof val === 'object' &&
          (val.__isInstance || val.__isClass || val.__isLambda || val.__isBuiltinType)
      );

    const lookupClassMethod = (className: string, methodName: string): any | null => {
      let curr: string | undefined = className;
      const visited = new Set<string>();
      while (curr && !visited.has(curr)) {
        visited.add(curr);
        const cls: any = classes[curr];
        if (!cls) break;
        if (Object.prototype.hasOwnProperty.call(cls.methods, methodName)) {
          return cls.methods[methodName];
        }
        curr = cls.parentName;
      }
      return null;
    };

    const lookupClassAttr = (className: string, attrName: string): { found: boolean; value: any } => {
      let curr: string | undefined = className;
      const visited = new Set<string>();
      while (curr && !visited.has(curr)) {
        visited.add(curr);
        const cls: any = classes[curr];
        if (!cls) break;
        if (Object.prototype.hasOwnProperty.call(cls.classAttrs, attrName)) {
          return { found: true, value: cls.classAttrs[attrName] };
        }
        curr = cls.parentName;
      }
      return { found: false, value: undefined };
    };

    const isSubclassOf = (childName: string, targetName: string): boolean => {
      let curr: string | undefined = childName;
      const visited = new Set<string>();
      while (curr && !visited.has(curr)) {
        visited.add(curr);
        if (curr === targetName) return true;
        curr = classes[curr]?.parentName;
      }
      return false;
    };

    const checkSingleIsInstance = (obj: any, clsSpec: any): boolean => {
      if (clsSpec && typeof clsSpec === 'object' && clsSpec.__isBuiltinType) {
        const t = clsSpec.name;
        if (t === 'bool') return typeof obj === 'boolean';
        if (t === 'int') return typeof obj === 'boolean' || (typeof obj === 'number' && Number.isInteger(obj));
        if (t === 'float') return typeof obj === 'number' && !Number.isInteger(obj);
        if (t === 'str') return typeof obj === 'string';
        if (t === 'tuple') return isTuple(obj);
        if (t === 'list') return Array.isArray(obj) && !isTuple(obj);
        if (t === 'set') return obj instanceof Set;
        if (t === 'dict') {
          return Boolean(obj && typeof obj === 'object' && !Array.isArray(obj) && !(obj instanceof Set) && !isSpecialPyObject(obj));
        }
        return false;
      }
      if (clsSpec && typeof clsSpec === 'object' && clsSpec.__isClass) {
        return isInstanceObj(obj) && isSubclassOf(obj.__className, clsSpec.name);
      }
      throw new Error('TypeError: isinstance() arg 2 must be a type or tuple of types');
    };

    const checkIsInstance = (obj: any, clsSpec: any): boolean => {
      if (isTuple(clsSpec)) {
        return clsSpec.some((item: any) => checkIsInstance(obj, item));
      }
      return checkSingleIsInstance(obj, clsSpec);
    };

    const hasVar = (name: string): boolean =>
      Object.prototype.hasOwnProperty.call(currentScope, name) ||
      Object.prototype.hasOwnProperty.call(scope, name);

    const getVar = (name: string): any =>
      Object.prototype.hasOwnProperty.call(currentScope, name) ? currentScope[name] : scope[name];

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
      if (isSpecialPyObject(val)) return true;
      if (Array.isArray(val)) return val.length > 0;
      if (val instanceof Set) return val.size > 0;
      if (typeof val === 'object') return Object.keys(val).length > 0;
      return Boolean(val);
    };

    const isNumOrBool = (val: any): boolean =>
      typeof val === 'number' || typeof val === 'boolean';

    const pyEquals = (a: any, b: any): boolean => {
      if (isNumOrBool(a) && isNumOrBool(b)) return Number(a) === Number(b);
      if (typeof a !== typeof b) return false;
      if (a === null || b === null || a === undefined || b === undefined) return a === b;
      if (isSpecialPyObject(a) || isSpecialPyObject(b)) {
        if (a?.__isBuiltinType && b?.__isBuiltinType) return a.name === b.name;
        return a === b;
      }
      if (Array.isArray(a) && Array.isArray(b)) {
        if (isTuple(a) !== isTuple(b)) return false;
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
          if (!pyEquals(a[i], b[i])) return false;
        }
        return true;
      }
      if (a instanceof Set && b instanceof Set) {
        if (a.size !== b.size) return false;
        const bArr = Array.from(b);
        return Array.from(a).every((x) => bArr.some((y) => pyEquals(x, y)));
      }
      if (typeof a === 'object' && typeof b === 'object') {
        const ka = Object.keys(a);
        const kb = Object.keys(b);
        if (ka.length !== kb.length) return false;
        return ka.every((k) => Object.prototype.hasOwnProperty.call(b, k) && pyEquals(a[k], b[k]));
      }
      return a === b;
    };

    const pyCompare = (a: any, b: any, op: '<' | '<=' | '>' | '>='): boolean => {
      let cmp = 0;
      if (isNumOrBool(a) && isNumOrBool(b)) {
        const na = Number(a), nb = Number(b);
        cmp = na < nb ? -1 : na > nb ? 1 : 0;
      } else if (typeof a === 'string' && typeof b === 'string') {
        cmp = a < b ? -1 : a > b ? 1 : 0;
      } else if (Array.isArray(a) && Array.isArray(b) && isTuple(a) === isTuple(b)) {
        const minL = Math.min(a.length, b.length);
        for (let i = 0; i < minL; i++) {
          if (!pyEquals(a[i], b[i])) {
            return pyCompare(a[i], b[i], op);
          }
        }
        cmp = a.length < b.length ? -1 : a.length > b.length ? 1 : 0;
      } else {
        throw new Error(`TypeError: '${op}' not supported between instances of '${typeof a}' and '${typeof b}'`);
      }
      if (op === '<') return cmp < 0;
      if (op === '<=') return cmp <= 0;
      if (op === '>') return cmp > 0;
      return cmp >= 0;
    };

    const pyIn = (item: any, container: any): boolean => {
      if (typeof container === 'string') {
        if (typeof item !== 'string') {
          throw new Error("TypeError: 'in <string>' requires string as left operand");
        }
        return container.includes(item);
      }
      if (Array.isArray(container)) {
        return container.some((el) => pyEquals(item, el));
      }
      if (container instanceof Set) {
        return Array.from(container).some((el) => pyEquals(item, el));
      }
      if (container && typeof container === 'object' && !isSpecialPyObject(container)) {
        return Object.prototype.hasOwnProperty.call(container, String(item));
      }
      throw new Error('TypeError: argument is not iterable');
    };

    const toIterableArray = (val: any): any[] => {
      if (Array.isArray(val)) return [...val];
      if (typeof val === 'string') return val.split('');
      if (val instanceof Set) return Array.from(val);
      if (val && typeof val === 'object' && !isSpecialPyObject(val)) return Object.keys(val);
      throw new Error(`TypeError: '${typeof val}' object is not iterable`);
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
      if (currentScope === scope) {
        const floatVarList = Array.from(floatVars);
        for (let fIdx = 0; fIdx < floatVarList.length; fIdx++) {
          if (new RegExp(`\\b${floatVarList[fIdx]}\\b`).test(stripped)) return true;
        }
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
      if (isTuple(val)) return "<class 'tuple'>";
      if (Array.isArray(val)) return "<class 'list'>";
      if (val instanceof Set) return "<class 'set'>";
      if (isInstanceObj(val)) return `<class '__main__.${val.__className}'>`;
      if (val && typeof val === 'object' && (val.__isClass || val.__isBuiltinType)) return "<class 'type'>";
      if (val && typeof val === 'object' && val.__isLambda) return "<class 'function'>";
      if (typeof val === 'object') return "<class 'dict'>";
      return `<class '${typeof val}'>`;
    };

    const formatPythonRepr = (v: any): string =>
      typeof v === 'string' ? `'${v}'` : formatPythonValue(v);

    const formatPythonValue = (val: any, rawExpr?: string, forceFloat?: boolean): string => {
      if (val === null || val === undefined) return 'None';
      if (typeof val === 'boolean') return val ? 'True' : 'False';
      if (typeof val === 'number') {
        if (!Number.isInteger(val)) return String(val);
        if (forceFloat || (rawExpr && isExprFloat(rawExpr, val))) return val.toFixed(1);
        return String(val);
      }
      if (isInstanceObj(val)) {
        const strMethod = lookupClassMethod(val.__className, '__str__');
        if (strMethod) {
          const strRes = executeFunction(strMethod, [], [], val);
          if (typeof strRes !== 'string') {
            throw new Error(`TypeError: __str__ returned non-string (type ${typeof strRes})`);
          }
          return strRes;
        }
        return `<${val.__className} object>`;
      }
      if (val && typeof val === 'object' && val.__isClass) return `<class '${val.name}'>`;
      if (val && typeof val === 'object' && val.__isBuiltinType) return `<class '${val.name}'>`;
      if (val && typeof val === 'object' && val.__isLambda) return '<function <lambda>>';
      if (isTuple(val)) {
        const items = val.map((v: any) => formatPythonRepr(v));
        if (items.length === 1) return `(${items[0]},)`;
        return `(${items.join(', ')})`;
      }
      if (Array.isArray(val)) {
        return `[${val.map((v) => formatPythonRepr(v)).join(', ')}]`;
      }
      if (val instanceof Set) {
        if (val.size === 0) return 'set()';
        return `{${Array.from(val).map((v) => formatPythonRepr(v)).join(', ')}}`;
      }
      if (typeof val === 'object') {
        const entries = Object.entries(val).map(([k, v]) => `'${k}': ${formatPythonRepr(v)}`);
        return `{${entries.join(', ')}}`;
      }
      return String(val);
    };

    const pyInt = (target: any, base?: number): number => {
      if (target === undefined) return 0;
      if (base !== undefined) {
        if (typeof target !== 'string') {
          throw new Error("TypeError: int() can't convert non-string with explicit base");
        }
        const parsed = parseInt(target.trim(), base);
        if (Number.isNaN(parsed)) {
          throw new Error(`ValueError: invalid literal for int() with base ${base}: '${target}'`);
        }
        return parsed;
      }
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
        if (isTuple(val)) res[k] = makeTuple(val);
        else if (Array.isArray(val)) res[k] = [...val];
        else if (val instanceof Set) res[k] = new Set(val);
        else if (isInstanceObj(val)) {
          res[k] = {
            __isInstance: true,
            __className: val.__className,
            __attrs: { ...(val.__attrs || {}) },
          };
        } else if (val !== null && typeof val === 'object') res[k] = { ...val };
        else res[k] = val;
      }
      return res;
    };

    const recordStep = (b: any) => {
      const merged = currentScope === scope
        ? cloneScope(scope)
        : { ...cloneScope(scope), ...cloneScope(currentScope) };
      steps.push({
        blockId: b.id,
        lineIndex: b.lineIndex,
        scope: merged,
        stdout: stdoutBuffer.replace(/\r?\n$/, ''),
      });
    };

    const evalNonEmpty = (sub: string): any => {
      const t = (sub || '').trim();
      if (!t) throw new Error('SyntaxError: invalid syntax');
      return evalExpr(t);
    };

    const invokeLambda = (lam: any, args: any[]): any => {
      const params: string[] = lam.params || [];
      if (args.length !== params.length) {
        throw new Error(`TypeError: <lambda>() takes ${params.length} positional arguments but ${args.length} were given`);
      }
      const lamScope: Record<string, any> = { ...(lam.closureScope || {}) };
      for (let idx = 0; idx < params.length; idx++) {
        lamScope[params[idx]] = args[idx];
      }
      const prevScope = currentScope;
      currentScope = lamScope;
      try {
        return evalNonEmpty(lam.bodyExpr);
      } finally {
        currentScope = prevScope;
      }
    };

    const resolveCallable = (rawSpec: string): ((...args: any[]) => any) => {
      const trimmed = rawSpec.trim();
      if (trimmed === 'int') return (x: any) => pyInt(x);
      if (trimmed === 'float') return (x: any) => pyFloat(x);
      if (trimmed === 'str') return (x: any) => formatPythonValue(x);
      if (trimmed === 'bool') return (x: any) => isPythonTruthy(x);
      if (trimmed === 'len') return (x: any) => {
        if (typeof x === 'string' || Array.isArray(x)) return x.length;
        if (x instanceof Set) return x.size;
        if (x && typeof x === 'object' && !isSpecialPyObject(x)) return Object.keys(x).length;
        throw new Error(`TypeError: object of type '${typeof x}' has no len()`);
      };
      if (trimmed === 'abs') return (x: any) => Math.abs(Number(x));
      if (trimmed === 'round') return (x: any) => Math.round(Number(x));
      if (trimmed === 'ord') return (x: any) => {
        const s = String(x);
        if (s.length !== 1) throw new Error('TypeError: ord() expected a character');
        return s.codePointAt(0);
      };
      if (trimmed === 'chr') return (x: any) => String.fromCodePoint(pyInt(x));
      if (trimmed in functions) return (...args: any[]) => executeFunction(functions[trimmed], args);
      const val = evalNonEmpty(trimmed);
      if (val && typeof val === 'object' && val.__isLambda) {
        return (...args: any[]) => invokeLambda(val, args);
      }
      if (val && typeof val === 'object' && val.__isBuiltinType) {
        return resolveCallable(val.name);
      }
      throw new Error('TypeError: object is not callable');
    };

    const pySortArray = (arr: any[], reverse: boolean = false, keyFn?: (item: any) => any): any[] => {
      const decorated = arr.map((item, idx) => ({
        item,
        key: keyFn ? keyFn(item) : item,
        idx,
      }));
      decorated.sort((a, b) => {
        if (pyEquals(a.key, b.key)) return a.idx - b.idx;
        const lt = pyCompare(a.key, b.key, '<');
        const cmp = lt ? -1 : 1;
        return reverse ? -cmp : cmp;
      });
      for (let i = 0; i < decorated.length; i++) {
        arr[i] = decorated[i].item;
      }
      return arr;
    };

    const evalBracketOperation = (target: any, bracketContent: string): any => {
      const sliceParts = splitTopLevelColon(bracketContent);
      if (sliceParts) {
        if (sliceParts.length > 3) throw new Error('SyntaxError: invalid syntax');
        if (typeof target !== 'string' && !Array.isArray(target)) {
          throw new Error(`TypeError: '${typeof target}' object is not subscriptable`);
        }
        const len = target.length;
        const step = sliceParts.length === 3 && sliceParts[2].trim() !== ''
          ? pyInt(evalNonEmpty(sliceParts[2]))
          : 1;
        if (step === 0) throw new Error('ValueError: slice step cannot be zero');

        const out: any[] = [];
        if (step > 0) {
          let start = sliceParts[0].trim() === '' ? 0 : pyInt(evalNonEmpty(sliceParts[0]));
          let stop = sliceParts[1].trim() === '' ? len : pyInt(evalNonEmpty(sliceParts[1]));
          start = start < 0 ? Math.max(0, len + start) : Math.min(len, start);
          stop = stop < 0 ? Math.max(0, len + stop) : Math.min(len, stop);
          for (let idx = start; idx < stop; idx += step) {
            out.push(target[idx]);
          }
        } else {
          let start = sliceParts[0].trim() === '' ? len - 1 : pyInt(evalNonEmpty(sliceParts[0]));
          if (start < 0) start = len + start;
          if (start >= len) start = len - 1;
          let stop: number;
          if (sliceParts[1].trim() === '') {
            stop = -1;
          } else {
            stop = pyInt(evalNonEmpty(sliceParts[1]));
            if (stop < 0) stop = len + stop;
          }
          const lowerBound = Math.max(-1, stop);
          for (let idx = start; idx > lowerBound; idx += step) {
            if (idx >= 0 && idx < len) out.push(target[idx]);
          }
        }
        if (typeof target === 'string') return out.join('');
        if (isTuple(target)) return makeTuple(out);
        return out;
      }

      const keyVal = evalNonEmpty(bracketContent);
      if (typeof target === 'string' || Array.isArray(target)) {
        if (typeof keyVal !== 'number' || !Number.isInteger(keyVal)) {
          throw new Error('TypeError: indices must be integers or slices');
        }
        const idx = keyVal < 0 ? target.length + keyVal : keyVal;
        if (idx < 0 || idx >= target.length) {
          throw new Error('IndexError: index out of range');
        }
        return target[idx];
      }
      if (target && typeof target === 'object' && !(target instanceof Set) && !isSpecialPyObject(target)) {
        const k = String(keyVal);
        if (!Object.prototype.hasOwnProperty.call(target, k)) {
          throw new Error(`KeyError: '${k}'`);
        }
        return target[k];
      }
      throw new Error(`TypeError: '${typeof target}' object is not subscriptable`);
    };

    const applyMethodCall = (targetVal: any, mName: string, rawArgsStr: string): any => {
      const rawArgs = splitTopLevelArgs(rawArgsStr);

      if (isInstanceObj(targetVal)) {
        const methodDef = lookupClassMethod(targetVal.__className, mName);
        if (methodDef) {
          const hasKw = rawArgs.some((a) => findStandaloneAssignIndex(a) > 0);
          const posArgs = hasKw ? [] : rawArgs.map((a) => evalNonEmpty(a));
          return executeFunction(methodDef, posArgs, rawArgs, targetVal);
        }
        if (
          Object.prototype.hasOwnProperty.call(targetVal.__attrs, mName) &&
          targetVal.__attrs[mName]?.__isLambda
        ) {
          return invokeLambda(targetVal.__attrs[mName], rawArgs.map((a) => evalNonEmpty(a)));
        }
        throw new Error(`AttributeError: '${targetVal.__className}' object has no attribute '${mName}'`);
      }

      if (typeof targetVal === 'string') {
        const mArgs = rawArgs.map((a) => evalNonEmpty(a));
        if (mName === 'split') {
          const maxSplit = mArgs.length >= 2 && mArgs[1] !== null ? pyInt(mArgs[1]) : undefined;
          if (mArgs.length === 0 || mArgs[0] === null) {
            const trimmedStr = targetVal.trim();
            if (trimmedStr.length === 0) return [];
            if (maxSplit !== undefined && maxSplit >= 0) {
              const parts: string[] = [];
              let rest = trimmedStr;
              for (let c = 0; c < maxSplit; c++) {
                const m = rest.match(/\s+/);
                if (!m || m.index === undefined) break;
                parts.push(rest.slice(0, m.index));
                rest = rest.slice(m.index + m[0].length);
              }
              parts.push(rest);
              return parts;
            }
            return trimmedStr.split(/\s+/);
          }
          const sep = String(mArgs[0]);
          if (sep === '') throw new Error('ValueError: empty separator');
          if (maxSplit !== undefined && maxSplit >= 0) {
            const allParts = targetVal.split(sep);
            if (allParts.length <= maxSplit + 1) return allParts;
            return [...allParts.slice(0, maxSplit), allParts.slice(maxSplit).join(sep)];
          }
          return targetVal.split(sep);
        }
        if (mName === 'strip' || mName === 'lstrip' || mName === 'rstrip') {
          if (mArgs.length === 0 || mArgs[0] === null) {
            if (mName === 'lstrip') return targetVal.trimStart();
            if (mName === 'rstrip') return targetVal.trimEnd();
            return targetVal.trim();
          }
          const chars = new Set(String(mArgs[0]).split(''));
          let s = 0, e = targetVal.length;
          if (mName !== 'rstrip') while (s < e && chars.has(targetVal[s])) s++;
          if (mName !== 'lstrip') while (e > s && chars.has(targetVal[e - 1])) e--;
          return targetVal.slice(s, e);
        }
        if (mName === 'upper') return targetVal.toUpperCase();
        if (mName === 'lower') return targetVal.toLowerCase();
        if (mName === 'capitalize') {
          return targetVal.length > 0 ? targetVal[0].toUpperCase() + targetVal.slice(1).toLowerCase() : '';
        }
        if (mName === 'title') {
          return targetVal.replace(/[a-zA-Z]+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
        }
        if (mName === 'swapcase') {
          return targetVal.split('').map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join('');
        }
        if (mName === 'replace') {
          const oldSub = String(mArgs[0] ?? '');
          const newSub = String(mArgs[1] ?? '');
          if (mArgs.length >= 3 && typeof mArgs[2] === 'number') {
            let count = pyInt(mArgs[2]);
            if (count <= 0) return targetVal;
            let res = targetVal;
            let searchFrom = 0;
            while (count-- > 0) {
              const idx = res.indexOf(oldSub, searchFrom);
              if (idx === -1) break;
              res = res.slice(0, idx) + newSub + res.slice(idx + oldSub.length);
              searchFrom = idx + newSub.length;
            }
            return res;
          }
          return targetVal.replaceAll(oldSub, newSub);
        }
        if (mName === 'count') {
          const sub = String(mArgs[0] ?? '');
          return sub ? targetVal.split(sub).length - 1 : targetVal.length + 1;
        }
        if (mName === 'find') {
          const sub = String(mArgs[0] ?? '');
          const start = mArgs.length >= 2 ? pyInt(mArgs[1]) : 0;
          return targetVal.indexOf(sub, start);
        }
        if (mName === 'index') {
          const sub = String(mArgs[0] ?? '');
          const start = mArgs.length >= 2 ? pyInt(mArgs[1]) : 0;
          const idx = targetVal.indexOf(sub, start);
          if (idx === -1) throw new Error('ValueError: substring not found');
          return idx;
        }
        if (mName === 'startswith') return targetVal.startsWith(String(mArgs[0] ?? ''));
        if (mName === 'endswith') return targetVal.endsWith(String(mArgs[0] ?? ''));
        if (mName === 'isdigit') return targetVal.length > 0 && /^[0-9]+$/.test(targetVal);
        if (mName === 'isalpha') return targetVal.length > 0 && /^[a-zA-Z\uac00-\ud7a3]+$/.test(targetVal);
        if (mName === 'isalnum') return targetVal.length > 0 && /^[a-zA-Z0-9\uac00-\ud7a3]+$/.test(targetVal);
        if (mName === 'islower') return /[a-z]/.test(targetVal) && targetVal === targetVal.toLowerCase();
        if (mName === 'isupper') return /[A-Z]/.test(targetVal) && targetVal === targetVal.toUpperCase();
        if (mName === 'isspace') return targetVal.length > 0 && /^\s+$/.test(targetVal);
        if (mName === 'join') {
          const seq = toIterableArray(mArgs[0]);
          return seq.map((v) => {
            if (typeof v !== 'string') throw new Error('TypeError: sequence item: expected str instance');
            return v;
          }).join(targetVal);
        }
        throw new Error(`AttributeError: 'str' object has no attribute '${mName}'`);
      }

      if (Array.isArray(targetVal)) {
        if (mName === 'index') {
          const needle = evalNonEmpty(rawArgs[0] || '');
          const foundIdx = targetVal.findIndex((item) => pyEquals(item, needle));
          if (foundIdx === -1) throw new Error('ValueError: value is not in sequence');
          return foundIdx;
        }
        if (mName === 'count') {
          const needle = evalNonEmpty(rawArgs[0] || '');
          return targetVal.filter((item) => pyEquals(item, needle)).length;
        }
        if (isTuple(targetVal)) {
          throw new Error(`AttributeError: 'tuple' object has no attribute '${mName}'`);
        }
        if (mName === 'sort') {
          let rev = false;
          let keyFn: ((item: any) => any) | undefined;
          for (const ra of rawArgs) {
            const revKw = ra.match(/^reverse\s*=(?!=)\s*([\s\S]+)$/);
            const keyKw = ra.match(/^key\s*=(?!=)\s*([\s\S]+)$/);
            if (revKw) rev = isPythonTruthy(evalNonEmpty(revKw[1]));
            else if (keyKw) keyFn = resolveCallable(keyKw[1]);
            else throw new Error('TypeError: sort() takes no positional arguments');
          }
          pySortArray(targetVal, rev, keyFn);
          return null;
        }
        const mArgs = rawArgs.map((a) => evalNonEmpty(a));
        if (mName === 'append') {
          if (mArgs.length !== 1) throw new Error('TypeError: list.append() takes exactly one argument');
          targetVal.push(mArgs[0]);
          return null;
        }
        if (mName === 'insert') {
          if (mArgs.length !== 2) throw new Error('TypeError: insert expected 2 arguments');
          let idx = pyInt(mArgs[0]);
          idx = idx < 0 ? Math.max(0, targetVal.length + idx) : Math.min(targetVal.length, idx);
          targetVal.splice(idx, 0, mArgs[1]);
          return null;
        }
        if (mName === 'extend') {
          if (mArgs.length !== 1) throw new Error('TypeError: list.extend() takes exactly one argument');
          targetVal.push(...toIterableArray(mArgs[0]));
          return null;
        }
        if (mName === 'pop') {
          if (targetVal.length === 0) throw new Error('IndexError: pop from empty list');
          if (mArgs.length === 0) return targetVal.pop();
          let idx = pyInt(mArgs[0]);
          if (idx < 0) idx = targetVal.length + idx;
          if (idx < 0 || idx >= targetVal.length) throw new Error('IndexError: pop index out of range');
          return targetVal.splice(idx, 1)[0];
        }
        if (mName === 'remove') {
          if (mArgs.length !== 1) throw new Error('TypeError: list.remove() takes exactly one argument');
          const foundIdx = targetVal.findIndex((item) => pyEquals(item, mArgs[0]));
          if (foundIdx === -1) throw new Error('ValueError: list.remove(x): x not in list');
          targetVal.splice(foundIdx, 1);
          return null;
        }
        if (mName === 'reverse') {
          targetVal.reverse();
          return null;
        }
        if (mName === 'clear') {
          targetVal.length = 0;
          return null;
        }
        if (mName === 'copy') {
          return [...targetVal];
        }
        throw new Error(`AttributeError: 'list' object has no attribute '${mName}'`);
      }

      if (targetVal instanceof Set) {
        const mArgs = rawArgs.map((a) => evalNonEmpty(a));
        if (mName === 'add') {
          if (mArgs.length !== 1) throw new Error('TypeError: set.add() takes exactly one argument');
          if (!Array.from(targetVal).some((x) => pyEquals(x, mArgs[0]))) {
            targetVal.add(mArgs[0]);
          }
          return null;
        }
        if (mName === 'remove') {
          if (mArgs.length !== 1) throw new Error('TypeError: set.remove() takes exactly one argument');
          const existing = Array.from(targetVal).find((x) => pyEquals(x, mArgs[0]));
          if (existing === undefined && !targetVal.has(mArgs[0])) {
            throw new Error(`KeyError: ${formatPythonValue(mArgs[0])}`);
          }
          targetVal.delete(existing !== undefined ? existing : mArgs[0]);
          return null;
        }
        if (mName === 'discard') {
          if (mArgs.length !== 1) throw new Error('TypeError: set.discard() takes exactly one argument');
          const existing = Array.from(targetVal).find((x) => pyEquals(x, mArgs[0]));
          if (existing !== undefined) targetVal.delete(existing);
          else targetVal.delete(mArgs[0]);
          return null;
        }
        if (mName === 'pop') {
          if (targetVal.size === 0) throw new Error("KeyError: 'pop from an empty set'");
          const first = Array.from(targetVal)[0];
          targetVal.delete(first);
          return first;
        }
        if (mName === 'clear') {
          targetVal.clear();
          return null;
        }
        if (mName === 'copy') {
          return new Set(targetVal);
        }
        if (mName === 'union') {
          const other = toIterableArray(mArgs[0]);
          const out = new Set(targetVal);
          for (const item of other) {
            if (!Array.from(out).some((x) => pyEquals(x, item))) out.add(item);
          }
          return out;
        }
        if (mName === 'intersection') {
          const other = toIterableArray(mArgs[0]);
          return new Set(Array.from(targetVal).filter((x) => other.some((y) => pyEquals(x, y))));
        }
        if (mName === 'difference') {
          const other = toIterableArray(mArgs[0]);
          return new Set(Array.from(targetVal).filter((x) => !other.some((y) => pyEquals(x, y))));
        }
        throw new Error(`AttributeError: 'set' object has no attribute '${mName}'`);
      }

      if (targetVal && typeof targetVal === 'object') {
        const mArgs = rawArgs.map((a) => evalNonEmpty(a));
        if (mName === 'get') {
          if (mArgs.length < 1) throw new Error('TypeError: get expected at least 1 argument');
          const k = String(mArgs[0]);
          if (Object.prototype.hasOwnProperty.call(targetVal, k)) return targetVal[k];
          return mArgs.length >= 2 ? mArgs[1] : null;
        }
        if (mName === 'keys') return Object.keys(targetVal);
        if (mName === 'values') return Object.values(targetVal);
        if (mName === 'items') return Object.entries(targetVal).map(([k, v]) => makeTuple([k, v]));
        if (mName === 'pop') {
          if (mArgs.length < 1) throw new Error('TypeError: pop expected at least 1 argument');
          const k = String(mArgs[0]);
          if (Object.prototype.hasOwnProperty.call(targetVal, k)) {
            const v = targetVal[k];
            delete targetVal[k];
            return v;
          }
          if (mArgs.length >= 2) return mArgs[1];
          throw new Error(`KeyError: '${k}'`);
        }
        if (mName === 'update') {
          if (mArgs[0] && typeof mArgs[0] === 'object' && !Array.isArray(mArgs[0]) && !(mArgs[0] instanceof Set)) {
            Object.assign(targetVal, mArgs[0]);
            return null;
          }
          throw new Error('TypeError: cannot convert dictionary update sequence');
        }
        if (mName === 'clear') {
          for (const k of Object.keys(targetVal)) delete targetVal[k];
          return null;
        }
        if (mName === 'copy') return { ...targetVal };
        throw new Error(`AttributeError: 'dict' object has no attribute '${mName}'`);
      }

      throw new Error(`AttributeError: '${typeof targetVal}' object has no attribute '${mName}'`);
    };

    const evalFStringContent = (body: string): string => {
      let out = '';
      let idx = 0;
      let litChunk = '';
      while (idx < body.length) {
        const ch = body[idx];
        if (ch === '{') {
          if (body[idx + 1] === '{') {
            litChunk += '{';
            idx += 2;
            continue;
          }
          out += unescapePythonString(litChunk);
          litChunk = '';
          let braceDepth = 1;
          let k = idx + 1;
          let q: string | null = null;
          while (k < body.length && braceDepth > 0) {
            const kc = body[k];
            if (q) {
              if (kc === '\\' && k + 1 < body.length) { k += 2; continue; }
              if (kc === q) q = null;
            } else if (kc === '"' || kc === "'") {
              q = kc;
            } else if (kc === '{') {
              braceDepth++;
            } else if (kc === '}') {
              braceDepth--;
              if (braceDepth === 0) break;
            }
            k++;
          }
          if (braceDepth !== 0) {
            throw new Error("SyntaxError: f-string: expecting '}'");
          }
          const rawField = body.slice(idx + 1, k).trim();
          if (!rawField) {
            throw new Error('SyntaxError: f-string: empty expression not allowed');
          }
          const fieldParts = splitTopLevelColon(rawField);
          const fieldExpr = fieldParts ? fieldParts[0].trim() : rawField;
          const fmtSpec = fieldParts ? fieldParts.slice(1).join(':').trim() : '';
          const val = evalNonEmpty(fieldExpr);
          if (fmtSpec) {
            const floatFmt = fmtSpec.match(/^\.(\d+)f$/);
            const commaFloatFmt = fmtSpec.match(/^,\.(\d+)f$/);
            const padIntFmt = fmtSpec.match(/^0(\d+)d$/);
            const addCommas = (numStr: string): string => {
              const parts = numStr.split('.');
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              return parts.join('.');
            };
            if (floatFmt) {
              out += Number(val).toFixed(parseInt(floatFmt[1], 10));
            } else if (commaFloatFmt) {
              out += addCommas(Number(val).toFixed(parseInt(commaFloatFmt[1], 10)));
            } else if (fmtSpec === ',') {
              out += addCommas(formatPythonValue(val, fieldExpr));
            } else if (padIntFmt) {
              const width = parseInt(padIntFmt[1], 10);
              const iv = pyInt(val);
              out += iv < 0
                ? '-' + String(Math.abs(iv)).padStart(Math.max(0, width - 1), '0')
                : String(iv).padStart(width, '0');
            } else {
              out += formatPythonValue(val, fieldExpr);
            }
          } else {
            out += formatPythonValue(val, fieldExpr);
          }
          idx = k + 1;
          continue;
        }
        if (ch === '}') {
          if (body[idx + 1] === '}') {
            litChunk += '}';
            idx += 2;
            continue;
          }
          throw new Error("SyntaxError: f-string: single '}' is not allowed");
        }
        litChunk += ch;
        idx++;
      }
      if (litChunk) out += unescapePythonString(litChunk);
      return out;
    };

    const evalExpr = (rawExpr: string): any => {
      const expr = (rawExpr || '').trim();
      if (!expr) return null;

      // Empty tuple ()
      if (expr === '()') return makeTuple([]);

      // Parenthesized expressions & Tuple literals
      if (expr.startsWith('(') && expr.endsWith(')')) {
        let pDepth = 0, bDepth = 0, cDepth = 0;
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
          } else if (c === '[') bDepth++;
          else if (c === ']') bDepth = Math.max(0, bDepth - 1);
          else if (c === '{') cDepth++;
          else if (c === '}') cDepth = Math.max(0, cDepth - 1);
          else if (c === '(') {
            pDepth++;
          } else if (c === ')') {
            pDepth--;
            if (pDepth === 0 && k < expr.length - 1) {
              wrapsAll = false;
              break;
            }
          } else if (c === ',' && pDepth === 1 && bDepth === 0 && cDepth === 0) {
            hasTopComma = true;
          }
        }
        if (wrapsAll && pDepth === 0 && !q) {
          const inner = expr.slice(1, -1).trim();
          if (hasTopComma) {
            return makeTuple(splitTopLevelArgs(inner).map((s) => evalNonEmpty(s)));
          }
          return evalNonEmpty(inner);
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

      // Standalone f-string literals: f"..." or f'...'
      if (
        expr.length >= 3 &&
        (expr[0] === 'f' || expr[0] === 'F') &&
        (expr[1] === '"' || expr[1] === "'") &&
        expr[expr.length - 1] === expr[1]
      ) {
        const quoteChar = expr[1];
        let k = 2;
        let closedAt = -1;
        let braceDepth = 0;
        let innerQ: string | null = null;
        while (k < expr.length) {
          const kc = expr[k];
          if (braceDepth > 0) {
            if (innerQ) {
              if (kc === '\\' && k + 1 < expr.length) { k += 2; continue; }
              if (kc === innerQ) innerQ = null;
            } else if (kc === '"' || kc === "'") {
              innerQ = kc;
            } else if (kc === '{') {
              braceDepth++;
            } else if (kc === '}') {
              braceDepth--;
            }
            k++;
            continue;
          }
          if (kc === '\\' && k + 1 < expr.length) {
            k += 2;
            continue;
          }
          if (kc === '{' && expr[k + 1] !== '{') {
            braceDepth = 1;
            k++;
            continue;
          }
          if (kc === '{' && expr[k + 1] === '{') {
            k += 2;
            continue;
          }
          if (kc === quoteChar) {
            closedAt = k;
            break;
          }
          k++;
        }
        if (closedAt === expr.length - 1) {
          return evalFStringContent(expr.slice(2, -1));
        }
      }

      if (expr === '\\n') return '\n';
      if (expr === '\\t') return '\t';
      if (expr === 'True') return true;
      if (expr === 'False') return false;
      if (expr === 'None') return null;

      // Pure positive numeric literals
      if (/^\d+$/.test(expr)) return parseInt(expr, 10);
      if (/^(?:\d+\.\d*|\.\d+)$/.test(expr)) return parseFloat(expr);

      // Validate raw Python expression syntax (rejects &&, ||, ===, !==, standalone !, top-level =, unmatched quotes/brackets)
      validateRawPythonExprSyntax(expr);

      // Helper to scan top-level characters (outside quotes, parens, brackets, braces)
      const scanTopLevel = (
        visitor: (ch: string, idx: number) => boolean | void
      ) => {
        let q: string | null = null;
        let p = 0, b = 0, c = 0;
        for (let i = 0; i < expr.length; i++) {
          const ch = expr[i];
          if (q) {
            if (ch === '\\' && i + 1 < expr.length) { i++; continue; }
            if (ch === q) q = null;
            continue;
          }
          if (ch === '"' || ch === "'") { q = ch; continue; }
          if (ch === '(') { p++; continue; }
          if (ch === ')') { p--; continue; }
          if (ch === '[') { b++; continue; }
          if (ch === ']') { b--; continue; }
          if (ch === '{') { c++; continue; }
          if (ch === '}') { c--; continue; }
          if (p === 0 && b === 0 && c === 0) {
            if (visitor(ch, i) === true) return;
          }
        }
      };

      const isWordBoundaryBefore = (idx: number) =>
        idx === 0 || !/[a-zA-Z0-9_.]/.test(expr[idx - 1]);
      const isWordBoundaryAfter = (endIdx: number) =>
        endIdx >= expr.length || !/[a-zA-Z0-9_]/.test(expr[endIdx]);

      // 0a. Lambda expression: lambda x, y: x + y
      if (/^lambda(?![a-zA-Z0-9_])/.test(expr)) {
        let colonIdx = -1;
        scanTopLevel((ch, i) => {
          if (ch === ':') {
            colonIdx = i;
            return true;
          }
        });
        if (colonIdx === -1) throw new Error('SyntaxError: invalid syntax');
        const rawParams = expr.slice(6, colonIdx).trim();
        const bodyExpr = expr.slice(colonIdx + 1).trim();
        if (!bodyExpr) throw new Error('SyntaxError: invalid syntax');
        const params: string[] = [];
        if (rawParams) {
          for (const p of rawParams.split(',')) {
            const pn = p.trim();
            if (!isValidPythonIdentifier(pn)) throw new Error('SyntaxError: invalid syntax');
            params.push(pn);
          }
        }
        return {
          __isLambda: true,
          params,
          bodyExpr,
          closureScope: { ...scope, ...currentScope },
        };
      }

      // 0b. Ternary conditional expression: trueExpr if condExpr else falseExpr
      let firstTernaryIf = -1;
      let matchingTernaryElse = -1;
      let ternaryDepth = 0;
      let ternarySkip = -1;
      scanTopLevel((ch, i) => {
        if (i < ternarySkip) return;
        if (ch === 'i' && expr.slice(i, i + 2) === 'if' && isWordBoundaryBefore(i) && isWordBoundaryAfter(i + 2)) {
          if (ternaryDepth === 0) firstTernaryIf = i;
          ternaryDepth++;
          ternarySkip = i + 2;
        } else if (ch === 'e' && expr.slice(i, i + 4) === 'else' && isWordBoundaryBefore(i) && isWordBoundaryAfter(i + 4)) {
          if (ternaryDepth <= 0) {
            throw new Error('SyntaxError: invalid syntax');
          }
          ternaryDepth--;
          ternarySkip = i + 4;
          if (ternaryDepth === 0) {
            matchingTernaryElse = i;
            return true;
          }
        }
      });
      if (firstTernaryIf !== -1) {
        if (matchingTernaryElse === -1) {
          throw new Error("SyntaxError: expected 'else' after 'if' expression");
        }
        const truePart = expr.slice(0, firstTernaryIf).trim();
        const condPart = expr.slice(firstTernaryIf + 2, matchingTernaryElse).trim();
        const falsePart = expr.slice(matchingTernaryElse + 4).trim();
        if (!truePart || !condPart || !falsePart) {
          throw new Error('SyntaxError: invalid syntax');
        }
        return isPythonTruthy(evalNonEmpty(condPart))
          ? evalNonEmpty(truePart)
          : evalNonEmpty(falsePart);
      }

      // 1. Boolean 'or' (lowest boolean precedence, short-circuit)
      const orIndices: number[] = [];
      scanTopLevel((ch, i) => {
        if (ch === 'o' && expr.slice(i, i + 2) === 'or' && isWordBoundaryBefore(i) && isWordBoundaryAfter(i + 2)) {
          orIndices.push(i);
        }
      });
      if (orIndices.length > 0) {
        let start = 0;
        for (const idx of orIndices) {
          const val = evalNonEmpty(expr.slice(start, idx));
          if (isPythonTruthy(val)) return val;
          start = idx + 2;
        }
        return evalNonEmpty(expr.slice(start));
      }

      // 2. Boolean 'and' (short-circuit)
      const andIndices: number[] = [];
      scanTopLevel((ch, i) => {
        if (ch === 'a' && expr.slice(i, i + 3) === 'and' && isWordBoundaryBefore(i) && isWordBoundaryAfter(i + 3)) {
          andIndices.push(i);
        }
      });
      if (andIndices.length > 0) {
        let start = 0;
        for (const idx of andIndices) {
          const val = evalNonEmpty(expr.slice(start, idx));
          if (!isPythonTruthy(val)) return val;
          start = idx + 3;
        }
        return evalNonEmpty(expr.slice(start));
      }

      // 3. Boolean prefix 'not'
      const notPrefixMatch = expr.match(/^not(?![a-zA-Z0-9_])\s*([\s\S]*)$/);
      if (notPrefixMatch) {
        return !isPythonTruthy(evalNonEmpty(notPrefixMatch[1]));
      }

      // 4. Comparisons & Chained Comparisons (==, !=, <=, >=, <, >, in, not in, is, is not)
      const cmpTokens: { start: number; end: number; op: string }[] = [];
      let skipUntil = -1;
      scanTopLevel((ch, i) => {
        if (i < skipUntil) return;
        if ((ch === '=' || ch === '!' || ch === '<' || ch === '>') && expr[i + 1] === '=') {
          cmpTokens.push({ start: i, end: i + 2, op: expr.slice(i, i + 2) });
          skipUntil = i + 2;
        } else if (ch === '<' || ch === '>') {
          cmpTokens.push({ start: i, end: i + 1, op: ch });
        } else if (ch === 'n' && isWordBoundaryBefore(i)) {
          const m = expr.slice(i).match(/^not\s+in(?![a-zA-Z0-9_])/);
          if (m) {
            cmpTokens.push({ start: i, end: i + m[0].length, op: 'not in' });
            skipUntil = i + m[0].length;
          }
        } else if (ch === 'i' && isWordBoundaryBefore(i)) {
          const isNotM = expr.slice(i).match(/^is\s+not(?![a-zA-Z0-9_])/);
          if (isNotM) {
            cmpTokens.push({ start: i, end: i + isNotM[0].length, op: 'is not' });
            skipUntil = i + isNotM[0].length;
          } else if (expr.slice(i, i + 2) === 'in' && isWordBoundaryAfter(i + 2)) {
            cmpTokens.push({ start: i, end: i + 2, op: 'in' });
            skipUntil = i + 2;
          } else if (expr.slice(i, i + 2) === 'is' && isWordBoundaryAfter(i + 2)) {
            cmpTokens.push({ start: i, end: i + 2, op: 'is' });
            skipUntil = i + 2;
          }
        }
      });
      if (cmpTokens.length > 0) {
        let leftVal = evalNonEmpty(expr.slice(0, cmpTokens[0].start));
        for (let cIdx = 0; cIdx < cmpTokens.length; cIdx++) {
          const nextEnd = cIdx + 1 < cmpTokens.length ? cmpTokens[cIdx + 1].start : expr.length;
          const rightVal = evalNonEmpty(expr.slice(cmpTokens[cIdx].end, nextEnd));
          const op = cmpTokens[cIdx].op;
          let ok = false;
          if (op === '==') ok = pyEquals(leftVal, rightVal);
          else if (op === '!=') ok = !pyEquals(leftVal, rightVal);
          else if (op === '<' || op === '<=' || op === '>' || op === '>=') ok = pyCompare(leftVal, rightVal, op);
          else if (op === 'in') ok = pyIn(leftVal, rightVal);
          else if (op === 'not in') ok = !pyIn(leftVal, rightVal);
          else if (op === 'is') ok = leftVal === rightVal;
          else if (op === 'is not') ok = leftVal !== rightVal;
          if (!ok) return false;
          leftVal = rightVal;
        }
        return true;
      }

      // 5. Set / Bitwise OR '|'
      const bitOrIndices: number[] = [];
      scanTopLevel((ch, i) => {
        if (ch === '|' && expr[i - 1] !== '|' && expr[i + 1] !== '|') bitOrIndices.push(i);
      });
      if (bitOrIndices.length > 0) {
        let acc = evalNonEmpty(expr.slice(0, bitOrIndices[0]));
        for (let s = 0; s < bitOrIndices.length; s++) {
          const nextEnd = s + 1 < bitOrIndices.length ? bitOrIndices[s + 1] : expr.length;
          const rhs = evalNonEmpty(expr.slice(bitOrIndices[s] + 1, nextEnd));
          if (acc instanceof Set && rhs instanceof Set) {
            const out = new Set(acc);
            for (const item of Array.from(rhs)) {
              if (!Array.from(out).some((x) => pyEquals(x, item))) out.add(item);
            }
            acc = out;
          } else if (isNumOrBool(acc) && isNumOrBool(rhs)) {
            acc = Number(acc) | Number(rhs);
          } else {
            throw new Error("TypeError: unsupported operand type(s) for |");
          }
        }
        return acc;
      }

      // 6. Set / Bitwise XOR '^'
      const bitXorIndices: number[] = [];
      scanTopLevel((ch, i) => {
        if (ch === '^') bitXorIndices.push(i);
      });
      if (bitXorIndices.length > 0) {
        let acc = evalNonEmpty(expr.slice(0, bitXorIndices[0]));
        for (let s = 0; s < bitXorIndices.length; s++) {
          const nextEnd = s + 1 < bitXorIndices.length ? bitXorIndices[s + 1] : expr.length;
          const rhs = evalNonEmpty(expr.slice(bitXorIndices[s] + 1, nextEnd));
          if (acc instanceof Set && rhs instanceof Set) {
            const out = new Set<any>();
            for (const x of Array.from(acc)) if (!Array.from(rhs).some((y) => pyEquals(x, y))) out.add(x);
            for (const y of Array.from(rhs)) if (!Array.from(acc).some((x) => pyEquals(x, y))) out.add(y);
            acc = out;
          } else if (isNumOrBool(acc) && isNumOrBool(rhs)) {
            acc = Number(acc) ^ Number(rhs);
          } else {
            throw new Error("TypeError: unsupported operand type(s) for ^");
          }
        }
        return acc;
      }

      // 7. Set / Bitwise AND '&'
      const bitAndIndices: number[] = [];
      scanTopLevel((ch, i) => {
        if (ch === '&' && expr[i - 1] !== '&' && expr[i + 1] !== '&') bitAndIndices.push(i);
      });
      if (bitAndIndices.length > 0) {
        let acc = evalNonEmpty(expr.slice(0, bitAndIndices[0]));
        for (let s = 0; s < bitAndIndices.length; s++) {
          const nextEnd = s + 1 < bitAndIndices.length ? bitAndIndices[s + 1] : expr.length;
          const rhs = evalNonEmpty(expr.slice(bitAndIndices[s] + 1, nextEnd));
          if (acc instanceof Set && rhs instanceof Set) {
            const rhsArr = Array.from(rhs);
            acc = new Set(Array.from(acc).filter((x) => rhsArr.some((y) => pyEquals(x, y))));
          } else if (isNumOrBool(acc) && isNumOrBool(rhs)) {
            acc = Number(acc) & Number(rhs);
          } else {
            throw new Error("TypeError: unsupported operand type(s) for &");
          }
        }
        return acc;
      }

      // 8. Additive '+' and '-' (binary only)
      const addSplits: { idx: number; op: '+' | '-' }[] = [];
      scanTopLevel((ch, i) => {
        if (ch === '+' || ch === '-') {
          const prevNonSpace = expr.slice(0, i).trimEnd().slice(-1);
          const isUnary = !prevNonSpace || /[+\-*/%(,[:]/.test(prevNonSpace);
          if (!isUnary) {
            addSplits.push({ idx: i, op: ch });
          }
        }
      });
      if (addSplits.length > 0) {
        let acc = evalNonEmpty(expr.slice(0, addSplits[0].idx));
        for (let s = 0; s < addSplits.length; s++) {
          const nextEnd = s + 1 < addSplits.length ? addSplits[s + 1].idx : expr.length;
          const rhs = evalNonEmpty(expr.slice(addSplits[s].idx + 1, nextEnd));
          if (addSplits[s].op === '+') {
            if (typeof acc === 'string' && typeof rhs === 'string') acc = acc + rhs;
            else if (isNumOrBool(acc) && isNumOrBool(rhs)) acc = Number(acc) + Number(rhs);
            else if (Array.isArray(acc) && Array.isArray(rhs) && isTuple(acc) === isTuple(rhs)) {
              acc = isTuple(acc) ? makeTuple([...acc, ...rhs]) : [...acc, ...rhs];
            } else if (typeof acc === 'string' || typeof rhs === 'string') {
              throw new Error('TypeError: can only concatenate str (not "int") to str');
            } else {
              throw new Error('TypeError: unsupported operand type(s) for +');
            }
          } else {
            if (isNumOrBool(acc) && isNumOrBool(rhs)) acc = Number(acc) - Number(rhs);
            else if (acc instanceof Set && rhs instanceof Set) {
              const rhsArr = Array.from(rhs);
              acc = new Set(Array.from(acc).filter((x) => !rhsArr.some((y) => pyEquals(x, y))));
            } else {
              throw new Error('TypeError: unsupported operand type(s) for -');
            }
          }
        }
        return acc;
      }

      // 9. Multiplicative '*', '/', '//', '%'
      const mulSplits: { start: number; end: number; op: '*' | '/' | '//' | '%' }[] = [];
      let mulSkip = -1;
      scanTopLevel((ch, i) => {
        if (i < mulSkip) return;
        if (ch === '*' && expr[i + 1] !== '*' && expr[i - 1] !== '*') {
          mulSplits.push({ start: i, end: i + 1, op: '*' });
        } else if (ch === '/' && expr[i + 1] === '/') {
          mulSplits.push({ start: i, end: i + 2, op: '//' });
          mulSkip = i + 2;
        } else if (ch === '/' && expr[i + 1] !== '/' && expr[i - 1] !== '/') {
          mulSplits.push({ start: i, end: i + 1, op: '/' });
        } else if (ch === '%') {
          mulSplits.push({ start: i, end: i + 1, op: '%' });
        }
      });
      if (mulSplits.length > 0) {
        let acc = evalNonEmpty(expr.slice(0, mulSplits[0].start));
        for (let s = 0; s < mulSplits.length; s++) {
          const nextEnd = s + 1 < mulSplits.length ? mulSplits[s + 1].start : expr.length;
          const rhs = evalNonEmpty(expr.slice(mulSplits[s].end, nextEnd));
          const op = mulSplits[s].op;
          if (op === '*') {
            if (isNumOrBool(acc) && isNumOrBool(rhs)) {
              acc = Number(acc) * Number(rhs);
            } else if (typeof acc === 'string' && isNumOrBool(rhs) && Number.isInteger(Number(rhs))) {
              acc = acc.repeat(Math.max(0, Number(rhs)));
            } else if (isNumOrBool(acc) && Number.isInteger(Number(acc)) && typeof rhs === 'string') {
              acc = rhs.repeat(Math.max(0, Number(acc)));
            } else if (Array.isArray(acc) && isNumOrBool(rhs) && Number.isInteger(Number(rhs))) {
              const count = Math.max(0, Number(rhs));
              const out: any[] = [];
              for (let r = 0; r < count; r++) out.push(...acc);
              acc = isTuple(acc) ? makeTuple(out) : out;
            } else if (isNumOrBool(acc) && Number.isInteger(Number(acc)) && Array.isArray(rhs)) {
              const count = Math.max(0, Number(acc));
              const out: any[] = [];
              for (let r = 0; r < count; r++) out.push(...rhs);
              acc = isTuple(rhs) ? makeTuple(out) : out;
            } else {
              throw new Error("TypeError: can't multiply sequence by non-int");
            }
          } else if (op === '/') {
            if (!isNumOrBool(acc) || !isNumOrBool(rhs)) throw new Error('TypeError: unsupported operand type(s) for /');
            if (Number(rhs) === 0) throw new Error('ZeroDivisionError: division by zero');
            acc = Number(acc) / Number(rhs);
          } else if (op === '//') {
            if (!isNumOrBool(acc) || !isNumOrBool(rhs)) throw new Error('TypeError: unsupported operand type(s) for //');
            if (Number(rhs) === 0) throw new Error('ZeroDivisionError: integer division or modulo by zero');
            acc = Math.floor(Number(acc) / Number(rhs));
          } else if (op === '%') {
            if (!isNumOrBool(acc) || !isNumOrBool(rhs)) throw new Error('TypeError: unsupported operand type(s) for %');
            const nb = Number(rhs);
            if (nb === 0) throw new Error('ZeroDivisionError: integer division or modulo by zero');
            acc = ((Number(acc) % nb) + nb) % nb;
          }
        }
        return acc;
      }

      // 10. Unary '+' / '-' (lower precedence than '**' so -2 ** 2 == -4)
      if (expr[0] === '+' || expr[0] === '-') {
        const innerVal = evalNonEmpty(expr.slice(1));
        if (!isNumOrBool(innerVal)) {
          throw new Error(`TypeError: bad operand type for unary ${expr[0]}`);
        }
        return expr[0] === '-' ? -Number(innerVal) : +Number(innerVal);
      }

      // 11. Power '**' (right-associative: split at FIRST top-level '**')
      let firstPowIdx = -1;
      scanTopLevel((ch, i) => {
        if (ch === '*' && expr[i + 1] === '*') {
          firstPowIdx = i;
          return true;
        }
      });
      if (firstPowIdx !== -1) {
        const base = evalNonEmpty(expr.slice(0, firstPowIdx));
        const exp = evalNonEmpty(expr.slice(firstPowIdx + 2));
        if (!isNumOrBool(base) || !isNumOrBool(exp)) {
          throw new Error('TypeError: unsupported operand type(s) for **');
        }
        return Math.pow(Number(base), Number(exp));
      }

      // 12. List literals & List Comprehensions: [1, 2, 3] or [expr for v in seq if cond]
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

          // Detect top-level list comprehension 'for' clauses inside [...]
          const forIndices: number[] = [];
          {
            let iq: string | null = null;
            let ip = 0, ib = 0, ic = 0;
            for (let k = 0; k < inner.length; k++) {
              const ch = inner[k];
              if (iq) {
                if (ch === '\\' && k + 1 < inner.length) { k++; continue; }
                if (ch === iq) iq = null;
                continue;
              }
              if (ch === '"' || ch === "'") { iq = ch; continue; }
              if (ch === '(') { ip++; continue; }
              if (ch === ')') { ip--; continue; }
              if (ch === '[') { ib++; continue; }
              if (ch === ']') { ib--; continue; }
              if (ch === '{') { ic++; continue; }
              if (ch === '}') { ic--; continue; }
              if (
                ip === 0 && ib === 0 && ic === 0 &&
                ch === 'f' &&
                inner.slice(k, k + 3) === 'for' &&
                (k === 0 || !/[a-zA-Z0-9_.]/.test(inner[k - 1])) &&
                (k + 3 >= inner.length || !/[a-zA-Z0-9_]/.test(inner[k + 3]))
              ) {
                forIndices.push(k);
              }
            }
          }

          if (forIndices.length > 0) {
            const eltExpr = inner.slice(0, forIndices[0]).trim();
            if (!eltExpr) throw new Error('SyntaxError: invalid syntax');

            const clauses: { vars: string[]; iterExpr: string; condExprs: string[] }[] = [];
            for (let fIdx = 0; fIdx < forIndices.length; fIdx++) {
              const segEnd = fIdx + 1 < forIndices.length ? forIndices[fIdx + 1] : inner.length;
              const seg = inner.slice(forIndices[fIdx], segEnd).trim();
              const clauseM = seg.match(/^for\s+([a-zA-Z_]\w*(?:\s*,\s*[a-zA-Z_]\w*)*)\s+in\s+([\s\S]+)$/);
              if (!clauseM) throw new Error('SyntaxError: invalid syntax');
              const vars = clauseM[1].split(',').map((s) => s.trim());
              for (const v of vars) {
                if (!isValidPythonIdentifier(v)) throw new Error('SyntaxError: invalid syntax');
              }
              const rest = clauseM[2].trim();
              // Split rest at top-level 'if' filter clauses (in Python comprehension grammar, iterable is or_test so top-level 'if' is always a filter)
              const ifSplits: number[] = [];
              let rq: string | null = null;
              let rp = 0, rb = 0, rc = 0;
              for (let k = 0; k < rest.length; k++) {
                const ch = rest[k];
                if (rq) {
                  if (ch === '\\' && k + 1 < rest.length) { k++; continue; }
                  if (ch === rq) rq = null;
                  continue;
                }
                if (ch === '"' || ch === "'") { rq = ch; continue; }
                if (ch === '(') { rp++; continue; }
                if (ch === ')') { rp--; continue; }
                if (ch === '[') { rb++; continue; }
                if (ch === ']') { rb--; continue; }
                if (ch === '{') { rc++; continue; }
                if (ch === '}') { rc--; continue; }
                if (
                  rp === 0 && rb === 0 && rc === 0 &&
                  ch === 'i' &&
                  rest.slice(k, k + 2) === 'if' &&
                  (k === 0 || !/[a-zA-Z0-9_.]/.test(rest[k - 1])) &&
                  (k + 2 >= rest.length || !/[a-zA-Z0-9_]/.test(rest[k + 2]))
                ) {
                  ifSplits.push(k);
                }
              }
              const iterExpr = (ifSplits.length > 0 ? rest.slice(0, ifSplits[0]) : rest).trim();
              if (!iterExpr) throw new Error('SyntaxError: invalid syntax');
              const condExprs: string[] = [];
              for (let sIdx = 0; sIdx < ifSplits.length; sIdx++) {
                const cEnd = sIdx + 1 < ifSplits.length ? ifSplits[sIdx + 1] : rest.length;
                const cExpr = rest.slice(ifSplits[sIdx] + 2, cEnd).trim();
                if (!cExpr) throw new Error('SyntaxError: invalid syntax');
                condExprs.push(cExpr);
              }
              clauses.push({ vars, iterExpr, condExprs });
            }

            const compOut: any[] = [];
            const prevScope = currentScope;
            const compScope: Record<string, any> = { ...currentScope };
            currentScope = compScope;
            try {
              const runClause = (cIdx: number) => {
                if (cIdx >= clauses.length) {
                  compOut.push(evalNonEmpty(eltExpr));
                  return;
                }
                const cl = clauses[cIdx];
                const seqItems = toIterableArray(evalNonEmpty(cl.iterExpr));
                for (const item of seqItems) {
                  if (--maxSteps <= 0) {
                    throw new Error('RuntimeError: maximum comprehension steps exceeded');
                  }
                  if (cl.vars.length === 1) {
                    compScope[cl.vars[0]] = item;
                  } else {
                    const unpacked = toIterableArray(item);
                    if (unpacked.length !== cl.vars.length) {
                      throw new Error(`ValueError: cannot unpack ${unpacked.length} values into ${cl.vars.length}`);
                    }
                    cl.vars.forEach((vn, idx) => {
                      compScope[vn] = unpacked[idx];
                    });
                  }
                  let passFilter = true;
                  for (const condE of cl.condExprs) {
                    if (!isPythonTruthy(evalNonEmpty(condE))) {
                      passFilter = false;
                      break;
                    }
                  }
                  if (passFilter) {
                    runClause(cIdx + 1);
                  }
                }
              };
              runClause(0);
            } finally {
              currentScope = prevScope;
            }
            return compOut;
          }

          return splitTopLevelArgs(inner).map((s) => evalNonEmpty(s));
        }
      }

      // 13. Dict / Set literals: {...}
      if (expr.startsWith('{') && expr.endsWith('}')) {
        let cDepth = 0;
        let q: string | null = null;
        let wrapsBraces = true;
        for (let k = 0; k < expr.length; k++) {
          const ch = expr[k];
          if (q) {
            if (ch === '\\' && k + 1 < expr.length) { k++; continue; }
            if (ch === q) q = null;
          } else if (ch === '"' || ch === "'") q = ch;
          else if (ch === '{') cDepth++;
          else if (ch === '}') {
            cDepth--;
            if (cDepth === 0 && k < expr.length - 1) { wrapsBraces = false; break; }
          }
        }
        if (wrapsBraces && cDepth === 0 && !q) {
          const inner = expr.slice(1, -1).trim();
          if (!inner) return {};
          const items = splitTopLevelArgs(inner);
          const firstColon = splitTopLevelColon(items[0]);
          if (firstColon) {
            const dictObj: Record<string, any> = {};
            for (const p of items) {
              const kv = splitTopLevelColon(p);
              if (!kv || kv.length !== 2) throw new Error('SyntaxError: invalid syntax');
              const k = evalNonEmpty(kv[0]);
              const v = evalNonEmpty(kv[1]);
              dictObj[String(k)] = v;
            }
            return dictObj;
          } else {
            const outSet = new Set<any>();
            for (const s of items) {
              const itemVal = evalNonEmpty(s);
              if (!Array.from(outSet).some((x) => pyEquals(x, itemVal))) outSet.add(itemVal);
            }
            return outSet;
          }
        }
      }

      // 14. Postfix Indexing / Slicing: receiver[idx] or receiver[a:b:c]
      const postfixBracket = findBalancedPostfixBracket(expr);
      if (postfixBracket) {
        const targetVal = evalNonEmpty(postfixBracket.receiver);
        return evalBracketOperation(targetVal, postfixBracket.bracketContent);
      }

      // 15. Function calls: len(x), int(x), map(int, ...), sorted(...), ClassName(...), user_fn(...), etc.
      const outerCall = findBalancedOuterCall(expr);
      if (outerCall) {
        const fnName = outerCall.fnName;
        const rawArgs = splitTopLevelArgs(outerCall.argsStr);

        if (fnName === 'type') {
          if (rawArgs.length !== 1) throw new Error('TypeError: type() takes 1 argument');
          const argVal = evalNonEmpty(rawArgs[0]);
          return getPythonTypeString(argVal, rawArgs[0]);
        }
        if (fnName === 'str') {
          if (rawArgs.length === 0) return '';
          const argVal = evalNonEmpty(rawArgs[0]);
          return formatPythonValue(argVal, rawArgs[0]);
        }
        if (fnName === 'sorted') {
          if (rawArgs.length < 1) throw new Error('TypeError: sorted expected 1 argument, got 0');
          let rev = false;
          let keyFn: ((item: any) => any) | undefined = undefined;
          for (let aIdx = 1; aIdx < rawArgs.length; aIdx++) {
            const eqIdx = findStandaloneAssignIndex(rawArgs[aIdx]);
            if (eqIdx <= 0) throw new Error('TypeError: sorted() takes 1 positional argument');
            const kwName = rawArgs[aIdx].slice(0, eqIdx).trim();
            const kwExpr = rawArgs[aIdx].slice(eqIdx + 1).trim();
            if (kwName === 'reverse') rev = isPythonTruthy(evalNonEmpty(kwExpr));
            else if (kwName === 'key') keyFn = resolveCallable(kwExpr);
            else throw new Error(`TypeError: '${kwName}' is an invalid keyword argument for sorted()`);
          }
          const arr = toIterableArray(evalNonEmpty(rawArgs[0]));
          return pySortArray(arr, rev, keyFn);
        }
        if (fnName === 'min' || fnName === 'max') {
          let keyFn: ((item: any) => any) | undefined = undefined;
          const posRaw: string[] = [];
          for (const ra of rawArgs) {
            const eqIdx = findStandaloneAssignIndex(ra);
            if (eqIdx > 0) {
              const kwName = ra.slice(0, eqIdx).trim();
              const kwExpr = ra.slice(eqIdx + 1).trim();
              if (kwName === 'key') keyFn = resolveCallable(kwExpr);
              else throw new Error(`TypeError: '${kwName}' is an invalid keyword argument for ${fnName}()`);
            } else {
              posRaw.push(ra);
            }
          }
          const posVals = posRaw.map((a) => evalNonEmpty(a));
          const arr = posVals.length === 1 && (Array.isArray(posVals[0]) || posVals[0] instanceof Set)
            ? toIterableArray(posVals[0])
            : posVals;
          if (arr.length === 0) throw new Error(`ValueError: ${fnName}() arg is an empty sequence`);
          let best = arr[0];
          let bestKey = keyFn ? keyFn(best) : best;
          for (let idx = 1; idx < arr.length; idx++) {
            const curKey = keyFn ? keyFn(arr[idx]) : arr[idx];
            if (pyCompare(curKey, bestKey, fnName === 'min' ? '<' : '>')) {
              best = arr[idx];
              bestKey = curKey;
            }
          }
          return best;
        }
        if (fnName === 'map') {
          if (rawArgs.length < 2) throw new Error('TypeError: map() must have at least two arguments');
          const fn = resolveCallable(rawArgs[0]);
          const seqs = rawArgs.slice(1).map((a) => toIterableArray(evalNonEmpty(a)));
          const minLen = Math.min(...seqs.map((s) => s.length));
          const mapped: any[] = [];
          for (let idx = 0; idx < minLen; idx++) {
            const rowArgs = seqs.map((s) => s[idx]);
            mapped.push(fn(...rowArgs));
          }
          return mapped;
        }

        if (fnName in classes) {
          const inst: any = {
            __isInstance: true,
            __className: fnName,
            __attrs: {},
          };
          const initMethod = lookupClassMethod(fnName, '__init__');
          if (initMethod) {
            const hasKw = rawArgs.some((a) => findStandaloneAssignIndex(a) > 0);
            const posArgs = hasKw ? [] : rawArgs.map((a) => evalNonEmpty(a));
            executeFunction(initMethod, posArgs, rawArgs, inst);
          } else if (rawArgs.length > 0) {
            throw new Error(`TypeError: ${fnName}() takes no arguments`);
          }
          return inst;
        }

        if (fnName in functions) {
          const hasKw = rawArgs.some((a) => findStandaloneAssignIndex(a) > 0);
          const posArgs = hasKw ? [] : rawArgs.map((a) => evalNonEmpty(a));
          return executeFunction(functions[fnName], posArgs, rawArgs);
        }

        if (hasVar(fnName)) {
          const candidate = getVar(fnName);
          if (candidate && typeof candidate === 'object' && candidate.__isLambda) {
            const posArgs = rawArgs.map((a) => evalNonEmpty(a));
            return invokeLambda(candidate, posArgs);
          }
        }

        if (fnName === 'dict') {
          const obj: Record<string, any> = {};
          for (const rawA of rawArgs) {
            const eqIdx = findStandaloneAssignIndex(rawA);
            if (eqIdx > 0) {
              const kwKey = rawA.slice(0, eqIdx).trim();
              if (!isValidPythonIdentifier(kwKey)) throw new Error('SyntaxError: invalid keyword argument');
              obj[kwKey] = evalNonEmpty(rawA.slice(eqIdx + 1));
            } else {
              const argVal = evalNonEmpty(rawA);
              if (argVal && typeof argVal === 'object' && !Array.isArray(argVal) && !(argVal instanceof Set) && !isSpecialPyObject(argVal)) {
                Object.assign(obj, argVal);
              } else {
                for (const pair of toIterableArray(argVal)) {
                  const arr = toIterableArray(pair);
                  if (arr.length !== 2) throw new Error('ValueError: dictionary update sequence element has length != 2');
                  obj[String(arr[0])] = arr[1];
                }
              }
            }
          }
          return obj;
        }

        const fnArgs = rawArgs.map((a) => evalNonEmpty(a));

        if (fnName === 'isinstance') {
          if (fnArgs.length !== 2) throw new Error('TypeError: isinstance expected 2 arguments');
          return checkIsInstance(fnArgs[0], fnArgs[1]);
        }
        if (fnName === 'len') {
          if (fnArgs.length !== 1) throw new Error('TypeError: len() takes exactly one argument');
          const target = fnArgs[0];
          if (typeof target === 'string' || Array.isArray(target)) return target.length;
          if (target instanceof Set) return target.size;
          if (target && typeof target === 'object' && !isSpecialPyObject(target)) return Object.keys(target).length;
          throw new Error(`TypeError: object of type '${typeof target}' has no len()`);
        }
        if (fnName === 'int') {
          return fnArgs.length >= 2 ? pyInt(fnArgs[0], pyInt(fnArgs[1])) : pyInt(fnArgs[0]);
        }
        if (fnName === 'float') {
          return pyFloat(fnArgs[0]);
        }
        if (fnName === 'bool') {
          return fnArgs.length === 0 ? false : isPythonTruthy(fnArgs[0]);
        }
        if (fnName === 'abs') {
          if (fnArgs.length !== 1) throw new Error('TypeError: abs() takes exactly one argument');
          return Math.abs(Number(fnArgs[0]));
        }
        if (fnName === 'round') {
          if (fnArgs.length < 1) throw new Error('TypeError: round() missing required argument');
          const num = Number(fnArgs[0]);
          if (fnArgs.length >= 2 && typeof fnArgs[1] === 'number') {
            const factor = Math.pow(10, fnArgs[1]);
            return Math.round(num * factor) / factor;
          }
          return Math.round(num);
        }
        if (fnName === 'input') {
          return readInputLine(fnArgs[0]);
        }
        if (fnName === 'range') {
          if (fnArgs.length === 0) throw new Error('TypeError: range expected at least 1 argument, got 0');
          let start = 0, stop = 0, step = 1;
          if (fnArgs.length === 1) {
            stop = pyInt(fnArgs[0]);
          } else if (fnArgs.length === 2) {
            start = pyInt(fnArgs[0]);
            stop = pyInt(fnArgs[1]);
          } else {
            start = pyInt(fnArgs[0]);
            stop = pyInt(fnArgs[1]);
            step = pyInt(fnArgs[2]);
          }
          if (step === 0) throw new Error('ValueError: range() arg 3 must not be zero');
          const rList: number[] = [];
          if (step > 0) {
            for (let i = start; i < stop; i += step) {
              if (rList.length >= 500) break;
              rList.push(i);
            }
          } else {
            for (let i = start; i > stop; i += step) {
              if (rList.length >= 500) break;
              rList.push(i);
            }
          }
          return rList;
        }
        if (fnName === 'sum') {
          if (fnArgs.length < 1) throw new Error('TypeError: sum() takes at least 1 positional argument');
          const list = toIterableArray(fnArgs[0]);
          const init = fnArgs.length >= 2 ? Number(fnArgs[1]) : 0;
          return list.reduce((acc: number, cur: any) => acc + Number(cur), init);
        }
        if (fnName === 'list') {
          return fnArgs.length === 0 ? [] : [...toIterableArray(fnArgs[0])];
        }
        if (fnName === 'tuple') {
          return fnArgs.length === 0 ? makeTuple([]) : makeTuple(toIterableArray(fnArgs[0]));
        }
        if (fnName === 'set') {
          if (fnArgs.length === 0) return new Set();
          const out = new Set<any>();
          for (const item of toIterableArray(fnArgs[0])) {
            if (!Array.from(out).some((x) => pyEquals(x, item))) out.add(item);
          }
          return out;
        }
        if (fnName === 'dict') {
          if (fnArgs.length === 0) return {};
          const obj: Record<string, any> = {};
          for (const pair of toIterableArray(fnArgs[0])) {
            const arr = toIterableArray(pair);
            if (arr.length !== 2) throw new Error('ValueError: dictionary update sequence element has length != 2');
            obj[String(arr[0])] = arr[1];
          }
          return obj;
        }
        if (fnName === 'reversed') {
          if (fnArgs.length !== 1) throw new Error('TypeError: reversed() takes exactly one argument');
          return [...toIterableArray(fnArgs[0])].reverse();
        }
        if (fnName === 'enumerate') {
          if (fnArgs.length < 1) throw new Error('TypeError: enumerate() missing required argument');
          const startIdx = fnArgs.length >= 2 ? pyInt(fnArgs[1]) : 0;
          return toIterableArray(fnArgs[0]).map((v, idx) => makeTuple([startIdx + idx, v]));
        }
        if (fnName === 'zip') {
          if (fnArgs.length === 0) return [];
          const seqs = fnArgs.map((a) => toIterableArray(a));
          const minLen = Math.min(...seqs.map((s) => s.length));
          return Array.from({ length: minLen }, (_, idx) => makeTuple(seqs.map((s) => s[idx])));
        }
        if (fnName === 'all') {
          if (fnArgs.length !== 1) throw new Error('TypeError: all() takes exactly one argument');
          return toIterableArray(fnArgs[0]).every(isPythonTruthy);
        }
        if (fnName === 'any') {
          if (fnArgs.length !== 1) throw new Error('TypeError: any() takes exactly one argument');
          return toIterableArray(fnArgs[0]).some(isPythonTruthy);
        }
        if (fnName === 'chr') {
          return String.fromCodePoint(pyInt(fnArgs[0]));
        }
        if (fnName === 'ord') {
          const s = String(fnArgs[0]);
          if (s.length !== 1) throw new Error('TypeError: ord() expected a character');
          return s.codePointAt(0);
        }
        if (fnName in functions) {
          return executeFunction(functions[fnName], fnArgs, rawArgs);
        }
        throw new Error(`NameError: name '${fnName}' is not defined`);
      }

      // 16. Method call: "hello".split(), input().split(), my_list.append(10), d.bark(), etc.
      const methodCall = findBalancedMethodCall(expr);
      if (methodCall) {
        const targetVal = evalNonEmpty(methodCall.receiver);
        return applyMethodCall(targetVal, methodCall.methodName, methodCall.argsStr);
      }

      // 16.5. Postfix attribute access: self.name, dog.hp, Dog.species
      const attrAccess = findBalancedPostfixAttr(expr);
      if (attrAccess) {
        const targetVal = evalNonEmpty(attrAccess.receiver);
        const attr = attrAccess.attrName;
        if (isInstanceObj(targetVal)) {
          if (Object.prototype.hasOwnProperty.call(targetVal.__attrs, attr)) {
            return targetVal.__attrs[attr];
          }
          const clsAttr = lookupClassAttr(targetVal.__className, attr);
          if (clsAttr.found) return clsAttr.value;
          throw new Error(`AttributeError: '${targetVal.__className}' object has no attribute '${attr}'`);
        }
        if (targetVal && typeof targetVal === 'object' && targetVal.__isClass) {
          const clsAttr = lookupClassAttr(targetVal.name, attr);
          if (clsAttr.found) return clsAttr.value;
          throw new Error(`AttributeError: type object '${targetVal.name}' has no attribute '${attr}'`);
        }
        throw new Error(`AttributeError: '${typeof targetVal}' object has no attribute '${attr}'`);
      }

      // 17. Variable / Class / Builtin Type reference
      if (/^[a-zA-Z_]\w*$/.test(expr)) {
        if (hasVar(expr)) return getVar(expr);
        if (expr in classes) return classes[expr];
        if (BUILTIN_TYPE_NAMES.has(expr)) return { __isBuiltinType: true, name: expr };
        throw new Error(`NameError: name '${expr}' is not defined`);
      }

      throw new Error('SyntaxError: invalid syntax');
    };

    const executeFunction = (fnDef: any, callArgs: any[], rawCallArgs?: string[], boundSelf?: any): any => {
      const fnLocalScope: Record<string, any> = {};
      const paramSpecs = splitTopLevelArgs(fnDef.args || '');
      const parsedParams: { name: string; defaultExpr?: string; isVarArgs?: boolean }[] = [];
      let varArgsIndex = -1;

      for (const spec of paramSpecs) {
        const trimmedSpec = spec.trim();
        if (trimmedSpec.startsWith('*') && !trimmedSpec.startsWith('**')) {
          if (varArgsIndex !== -1) throw new Error('SyntaxError: invalid syntax');
          const pName = trimmedSpec.slice(1).trim();
          if (!isValidPythonIdentifier(pName)) throw new Error('SyntaxError: invalid syntax');
          varArgsIndex = parsedParams.length;
          parsedParams.push({ name: pName, isVarArgs: true });
          continue;
        }
        const eqIdx = findStandaloneAssignIndex(spec);
        if (eqIdx > 0) {
          const pName = spec.slice(0, eqIdx).trim();
          const pDef = spec.slice(eqIdx + 1).trim();
          if (!isValidPythonIdentifier(pName) || !pDef) throw new Error('SyntaxError: invalid syntax');
          parsedParams.push({ name: pName, defaultExpr: pDef });
        } else {
          if (!isValidPythonIdentifier(trimmedSpec)) throw new Error('SyntaxError: invalid syntax');
          parsedParams.push({ name: trimmedSpec });
        }
      }

      // Bind boundSelf (if method call), positional arguments, and keyword arguments
      const kwBound = new Set<string>();
      let posStart = 0;
      const posValues: any[] = [];

      if (boundSelf !== undefined) {
        if (parsedParams.length === 0) {
          throw new Error('TypeError: method takes 0 positional arguments but 1 was given');
        }
        if (parsedParams[0].isVarArgs) {
          posValues.push(boundSelf);
        } else {
          fnLocalScope[parsedParams[0].name] = boundSelf;
          kwBound.add(parsedParams[0].name);
          posStart = 1;
        }
      }

      if (rawCallArgs && rawCallArgs.some((a) => findStandaloneAssignIndex(a) > 0)) {
        let seenKw = false;
        for (const ra of rawCallArgs) {
          const eqIdx = findStandaloneAssignIndex(ra);
          if (eqIdx > 0) {
            seenKw = true;
            const kName = ra.slice(0, eqIdx).trim();
            const kVal = evalNonEmpty(ra.slice(eqIdx + 1));
            const targetParam = parsedParams.find((p) => p.name === kName && !p.isVarArgs);
            if (!targetParam) {
              throw new Error(`TypeError: unexpected keyword argument '${kName}'`);
            }
            if (kwBound.has(kName)) {
              throw new Error(`TypeError: got multiple values for argument '${kName}'`);
            }
            fnLocalScope[kName] = kVal;
            kwBound.add(kName);
          } else {
            if (seenKw) throw new Error('SyntaxError: positional argument follows keyword argument');
            posValues.push(evalNonEmpty(ra));
          }
        }
      } else {
        posValues.push(...callArgs);
      }

      if (varArgsIndex === -1) {
        if (posStart + posValues.length > parsedParams.length) {
          throw new Error(`TypeError: function takes ${parsedParams.length} positional arguments but ${posStart + posValues.length} were given`);
        }
        for (let idx = 0; idx < posValues.length; idx++) {
          const p = parsedParams[posStart + idx];
          if (kwBound.has(p.name)) {
            throw new Error(`TypeError: got multiple values for argument '${p.name}'`);
          }
          fnLocalScope[p.name] = posValues[idx];
          kwBound.add(p.name);
        }
      } else {
        const fixedBefore = Math.max(0, varArgsIndex - posStart);
        const bindCount = Math.min(fixedBefore, posValues.length);
        for (let idx = 0; idx < bindCount; idx++) {
          const p = parsedParams[posStart + idx];
          if (kwBound.has(p.name)) {
            throw new Error(`TypeError: got multiple values for argument '${p.name}'`);
          }
          fnLocalScope[p.name] = posValues[idx];
          kwBound.add(p.name);
        }
        const varParam = parsedParams[varArgsIndex];
        fnLocalScope[varParam.name] = makeTuple(posValues.slice(fixedBefore));
        kwBound.add(varParam.name);
      }

      for (const p of parsedParams) {
        if (kwBound.has(p.name)) continue;
        if (p.isVarArgs) {
          fnLocalScope[p.name] = makeTuple([]);
        } else if (p.defaultExpr !== undefined) {
          fnLocalScope[p.name] = evalNonEmpty(p.defaultExpr);
        } else {
          throw new Error(`TypeError: missing required positional argument: '${p.name}'`);
        }
      }

      const prevScope = currentScope;
      currentScope = fnLocalScope;
      try {
        if (fnDef.innerBlocks && fnDef.innerBlocks.length > 0) {
          const sig = runBlockList(fnDef.innerBlocks);
          if (sig && typeof sig === 'object' && sig.__isReturn) {
            return sig.value;
          }
        }
        if (fnDef.hasReturn) {
          const rawRet = (fnDef.returnVal ?? '').trim();
          if (!rawRet) throw new Error('SyntaxError: invalid syntax');
          const parts = splitTopLevelArgs(rawRet);
          return parts.length > 1
            ? makeTuple(parts.map((p) => evalNonEmpty(p)))
            : evalNonEmpty(rawRet);
        }
        return null;
      } finally {
        currentScope = prevScope;
      }
    };

    const evalBlockAsExpr = (b: any): any => {
      if (!b) return null;
      let val: any = null;
      if (b.type === 'int') {
        const inner = b.argBlock
          ? evalBlockAsExpr(b.argBlock)
          : (b.content || '').trim()
          ? evalNonEmpty(b.content)
          : undefined;
        val = pyInt(inner);
      } else if (b.type === 'float') {
        const inner = b.argBlock
          ? evalBlockAsExpr(b.argBlock)
          : (b.content || '').trim()
          ? evalNonEmpty(b.content)
          : undefined;
        val = pyFloat(inner);
      } else if (b.type === 'str') {
        if (b.argBlock) {
          const inner = evalBlockAsExpr(b.argBlock);
          val = formatPythonValue(inner, undefined, b.argBlock.type === 'float');
        } else {
          const rawStr = (b.content || '').trim();
          val = rawStr ? formatPythonValue(evalNonEmpty(rawStr), rawStr) : '';
        }
      } else if (b.type === 'type') {
        if (b.argBlock) {
          const inner = evalBlockAsExpr(b.argBlock);
          val = getPythonTypeString(inner, undefined, b.argBlock.type === 'float');
        } else {
          const rawArg = (b.content || '').trim();
          if (!rawArg) throw new Error('TypeError: type() takes 1 argument');
          const inner = evalNonEmpty(rawArg);
          val = getPythonTypeString(inner, rawArg);
        }
      } else if (b.type === 'isinstance') {
        val = evalNonEmpty(`isinstance(${b.content || ''})`);
      } else if (b.type === 'ord') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalNonEmpty(b.content || '');
        const s = String(inner);
        if (s.length !== 1) throw new Error('TypeError: ord() expected a character');
        val = s.codePointAt(0);
      } else if (b.type === 'chr') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalNonEmpty(b.content || '');
        val = String.fromCodePoint(pyInt(inner));
      } else if (b.type === 'round') {
        if (b.argBlock) {
          val = Math.round(Number(evalBlockAsExpr(b.argBlock)));
        } else {
          val = evalNonEmpty(`round(${b.content || ''})`);
        }
      } else if (b.type === 'abs') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalNonEmpty(b.content || '');
        val = Math.abs(Number(inner));
      } else if (b.type === 'sum') {
        if (b.argBlock) {
          const inner = toIterableArray(evalBlockAsExpr(b.argBlock));
          val = inner.reduce((acc: number, cur: any) => acc + Number(cur), 0);
        } else {
          val = evalNonEmpty(`sum(${b.content || ''})`);
        }
      } else if (b.type === 'min' || b.type === 'max') {
        if (b.argBlock) {
          const arr = toIterableArray(evalBlockAsExpr(b.argBlock));
          if (arr.length === 0) throw new Error(`ValueError: ${b.type}() arg is an empty sequence`);
          let best = arr[0];
          for (let idx = 1; idx < arr.length; idx++) {
            if (pyCompare(arr[idx], best, b.type === 'min' ? '<' : '>')) best = arr[idx];
          }
          val = best;
        } else {
          val = evalNonEmpty(`${b.type}(${b.content || ''})`);
        }
      } else if (b.type === 'input') {
        const promptArg = b.argBlock
          ? evalBlockAsExpr(b.argBlock)
          : (b.content || '').trim()
          ? evalNonEmpty(b.content)
          : undefined;
        val = readInputLine(promptArg);
      } else if (b.type === 'len') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalNonEmpty(b.content || '');
        if (typeof inner === 'string' || Array.isArray(inner)) val = inner.length;
        else if (inner instanceof Set) val = inner.size;
        else if (inner && typeof inner === 'object' && !isSpecialPyObject(inner)) val = Object.keys(inner).length;
        else throw new Error(`TypeError: object of type '${typeof inner}' has no len()`);
      } else if (b.type === 'print') {
        val = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '');
      } else if (b.type === 'variable') {
        const vn = (b.varName || '').trim();
        if (!vn) throw new Error('SyntaxError: invalid syntax');
        val = hasVar(vn) ? getVar(vn) : evalNonEmpty(vn);
      } else if (b.type === 'call') {
        const fnName = (b.varName || '').trim();
        if (!/^[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*$/.test(fnName)) {
          throw new Error('SyntaxError: invalid syntax');
        }
        if (b.argBlock) {
          const argVal = evalBlockAsExpr(b.argBlock);
          const dotIdx = fnName.lastIndexOf('.');
          if (dotIdx > 0) {
            const recv = evalNonEmpty(fnName.slice(0, dotIdx));
            const mName = fnName.slice(dotIdx + 1);
            if (isInstanceObj(recv)) {
              const mDef = lookupClassMethod(recv.__className, mName);
              if (!mDef) throw new Error(`AttributeError: '${recv.__className}' object has no attribute '${mName}'`);
              val = executeFunction(mDef, [argVal], undefined, recv);
            } else {
              throw new Error(`AttributeError: object has no attribute '${mName}'`);
            }
          } else if (fnName in functions) {
            val = executeFunction(functions[fnName], [argVal]);
          } else if (fnName in classes) {
            const inst: any = { __isInstance: true, __className: fnName, __attrs: {} };
            const initM = lookupClassMethod(fnName, '__init__');
            if (initM) executeFunction(initM, [argVal], undefined, inst);
            else throw new Error(`TypeError: ${fnName}() takes no arguments`);
            val = inst;
          } else {
            throw new Error(`NameError: name '${fnName}' is not defined`);
          }
        } else {
          val = evalNonEmpty(`${fnName}(${(b.content || '').trim()})`);
        }
      } else if (b.type === 'bool') {
        if (b.argBlock) {
          val = isPythonTruthy(evalBlockAsExpr(b.argBlock));
        } else {
          const rawB = (b.content || '').trim();
          val = rawB ? isPythonTruthy(evalNonEmpty(rawB)) : false;
        }
      } else if (b.type === 'range') {
        if (b.argBlock) {
          const stop = pyInt(evalBlockAsExpr(b.argBlock));
          const rList: number[] = [];
          for (let i = 0; i < stop && rList.length < 500; i++) rList.push(i);
          val = rList;
        } else {
          const rawR = (b.content || '').trim();
          if (!rawR) throw new Error('TypeError: range expected at least 1 argument, got 0');
          val = evalNonEmpty(`range(${rawR})`);
        }
      } else if (b.type === 'sorted') {
        if (b.argBlock) {
          val = pySortArray(toIterableArray(evalBlockAsExpr(b.argBlock)), false);
        } else {
          val = evalNonEmpty(`sorted(${b.content || ''})`);
        }
      } else if (b.type === 'reversed') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalNonEmpty(b.content || '');
        val = [...toIterableArray(inner)].reverse();
      } else if (b.type === 'all') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalNonEmpty(b.content || '');
        val = toIterableArray(inner).every(isPythonTruthy);
      } else if (b.type === 'any') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalNonEmpty(b.content || '');
        val = toIterableArray(inner).some(isPythonTruthy);
      } else if (b.type === 'enumerate') {
        if (b.argBlock) {
          val = toIterableArray(evalBlockAsExpr(b.argBlock)).map((item, idx) => makeTuple([idx, item]));
        } else {
          val = evalNonEmpty(`enumerate(${b.content || ''})`);
        }
      } else if (b.type === 'zip') {
        if (b.argBlock) {
          val = toIterableArray(evalBlockAsExpr(b.argBlock)).map((item) => makeTuple([item]));
        } else {
          val = evalNonEmpty(`zip(${b.content || ''})`);
        }
      } else if (b.type === 'map') {
        val = evalNonEmpty(`map(${b.content || ''})`);
      } else if (b.type === 'math') {
        throw new Error('SyntaxError: select a math function from the dropdown');
      } else {
        val = evalExpr(b.content || '');
      }

      // Traverse chained horizontal method blocks
      let currMId = b.attachedMethodId;
      const visitedM = new Set<string>();
      while (currMId && !visitedM.has(currMId)) {
        visitedM.add(currMId);
        const m = blocks.find((item: any) => item.id === currMId);
        if (!m || m.type !== 'method') break;
        const mName = m.methodName || 'method';
        if (mName === 'method') {
          throw new Error('SyntaxError: select a method from the dropdown');
        }
        val = applyMethodCall(val, mName, m.content || '');
        currMId = m.attachedMethodId;
      }
      return val;
    };

    const applyCompoundValue = (lhsVal: any, op: string, rhsVal: any): any => {
      if (op === '+=') {
        if (typeof lhsVal === 'string' && typeof rhsVal === 'string') return lhsVal + rhsVal;
        if (isNumOrBool(lhsVal) && isNumOrBool(rhsVal)) return Number(lhsVal) + Number(rhsVal);
        if (Array.isArray(lhsVal) && Array.isArray(rhsVal) && isTuple(lhsVal) === isTuple(rhsVal)) {
          return isTuple(lhsVal) ? makeTuple([...lhsVal, ...rhsVal]) : [...lhsVal, ...rhsVal];
        }
        throw new Error('TypeError: unsupported operand type(s) for +=');
      }
      if (op === '-=') {
        if (isNumOrBool(lhsVal) && isNumOrBool(rhsVal)) return Number(lhsVal) - Number(rhsVal);
        if (lhsVal instanceof Set && rhsVal instanceof Set) {
          const rhsArr = Array.from(rhsVal);
          return new Set(Array.from(lhsVal).filter((x) => !rhsArr.some((y) => pyEquals(x, y))));
        }
        throw new Error('TypeError: unsupported operand type(s) for -=');
      }
      if (op === '*=') {
        if (typeof lhsVal === 'string' && isNumOrBool(rhsVal) && Number.isInteger(Number(rhsVal))) {
          return lhsVal.repeat(Math.max(0, Number(rhsVal)));
        }
        if (isNumOrBool(lhsVal) && Number.isInteger(Number(lhsVal)) && typeof rhsVal === 'string') {
          return rhsVal.repeat(Math.max(0, Number(lhsVal)));
        }
        if (isNumOrBool(lhsVal) && isNumOrBool(rhsVal)) return Number(lhsVal) * Number(rhsVal);
        throw new Error('TypeError: unsupported operand type(s) for *=');
      }
      if (op === '/=') {
        if (isNumOrBool(lhsVal) && isNumOrBool(rhsVal)) {
          if (Number(rhsVal) === 0) throw new Error('ZeroDivisionError: float division by zero');
          return Number(lhsVal) / Number(rhsVal);
        }
        throw new Error('TypeError: unsupported operand type(s) for /=');
      }
      if (op === '//=') {
        if (isNumOrBool(lhsVal) && isNumOrBool(rhsVal)) {
          if (Number(rhsVal) === 0) throw new Error('ZeroDivisionError: integer division or modulo by zero');
          return Math.floor(Number(lhsVal) / Number(rhsVal));
        }
        throw new Error('TypeError: unsupported operand type(s) for //=');
      }
      if (op === '%=') {
        if (isNumOrBool(lhsVal) && isNumOrBool(rhsVal)) {
          const nb = Number(rhsVal);
          if (nb === 0) throw new Error('ZeroDivisionError: integer division or modulo by zero');
          return ((Number(lhsVal) % nb) + nb) % nb;
        }
        throw new Error('TypeError: unsupported operand type(s) for %=');
      }
      if (op === '**=') {
        if (isNumOrBool(lhsVal) && isNumOrBool(rhsVal)) return Math.pow(Number(lhsVal), Number(rhsVal));
        throw new Error('TypeError: unsupported operand type(s) for **=');
      }
      throw new Error('SyntaxError: invalid assignment operator');
    };

    const runBlockList = (list: any[]): LoopOrReturnSignal => {
      for (const blk of list) {
        if (!blk || blk.type === 'start' || blk.attachedToBlockId) continue;
        if (--maxSteps <= 0) {
          stdoutBuffer += '\n⚠️ 무한 루프 감지: 500회 이상 실행되어 안전을 위해 자동 중단되었습니다.\n';
          return;
        }

        if (blk.type === 'variable') {
          if (blk._isExprStmt) {
            evalNonEmpty(blk.content || '');
            recordStep(blk);
            continue;
          }

          const rawVarName = (blk.varName ?? '').trim();
          const op = blk.assignOp || '=';
          const rawRhs = (blk.content ?? '').trim();

          if (!rawVarName) {
            throw new Error('SyntaxError: invalid syntax');
          }

          // Pure method call statement via horizontal method block on variable: e.g. nums.append(10)
          if (op === '=' && blk.attachedMethodId && !blk.argBlock && !rawRhs) {
            evalBlockAsExpr(blk);
            recordStep(blk);
            continue;
          }

          // Multiple assignment / tuple unpacking: a, b = 10, 20 or a, b = input().split()
          const topLhsParts = splitTopLevelArgs(rawVarName);
          if (topLhsParts.length > 1) {
            if (op !== '=') {
              throw new Error('SyntaxError: illegal expression for augmented assignment');
            }
            for (const tn of topLhsParts) {
              if (!isValidPythonIdentifier(tn)) {
                throw new Error('SyntaxError: invalid syntax');
              }
            }

            let unpackedItems: { val: any; isFloat: boolean }[] = [];
            if (blk.argBlock) {
              const res = toIterableArray(evalBlockAsExpr(blk.argBlock));
              unpackedItems = res.map((v) => ({ val: v, isFloat: typeof v === 'number' && !Number.isInteger(v) }));
            } else {
              if (!rawRhs) throw new Error('SyntaxError: invalid syntax');
              const rhsParts = splitTopLevelArgs(rawRhs);
              if (rhsParts.length > 1) {
                unpackedItems = rhsParts.map((part) => {
                  const val = evalNonEmpty(part);
                  return { val, isFloat: isExprFloat(part, val) };
                });
              } else {
                const singleVal = toIterableArray(evalNonEmpty(rhsParts[0]));
                unpackedItems = singleVal.map((v) => ({
                  val: v,
                  isFloat: typeof v === 'number' && !Number.isInteger(v),
                }));
              }
            }

            if (unpackedItems.length < topLhsParts.length) {
              throw new Error(
                `ValueError: not enough values to unpack (expected ${topLhsParts.length}, got ${unpackedItems.length})`
              );
            }
            if (unpackedItems.length > topLhsParts.length) {
              throw new Error(`ValueError: too many values to unpack (expected ${topLhsParts.length})`);
            }

            topLhsParts.forEach((tn: string, idx: number) => {
              currentScope[tn] = unpackedItems[idx].val;
              if (currentScope === scope) {
                if (unpackedItems[idx].isFloat) floatVars.add(tn);
                else floatVars.delete(tn);
              }
            });
            recordStep(blk);
            continue;
          }

          // Evaluate RHS (supporting unparenthesized comma tuple like t = 10, 20)
          let rhsVal: any;
          let rhsIsFloat = false;
          if (blk.argBlock) {
            rhsVal = evalBlockAsExpr(blk.argBlock);
            rhsIsFloat =
              blk.argBlock.type === 'float' ||
              (typeof rhsVal === 'number' && !Number.isInteger(rhsVal));
          } else {
            if (!rawRhs) throw new Error('SyntaxError: invalid syntax');
            const rhsParts = splitTopLevelArgs(rawRhs);
            if (rhsParts.length > 1) {
              rhsVal = makeTuple(rhsParts.map((p) => evalNonEmpty(p)));
            } else {
              rhsVal = evalNonEmpty(rawRhs);
              rhsIsFloat = isExprFloat(rawRhs, rhsVal);
            }
            if (blk.attachedMethodId) {
              let currMId = blk.attachedMethodId;
              const visitedM = new Set<string>();
              while (currMId && !visitedM.has(currMId)) {
                visitedM.add(currMId);
                const m = blocks.find((item: any) => item.id === currMId);
                if (!m || m.type !== 'method') break;
                const mName = m.methodName || 'method';
                if (mName === 'method') throw new Error('SyntaxError: select a method from the dropdown');
                rhsVal = applyMethodCall(rhsVal, mName, m.content || '');
                currMId = m.attachedMethodId;
              }
            }
          }

          // Indexed / Keyed LHS assignment: nums[0] = 99, grid[0][1] = 5, d["a"] += 1
          const lhsBracket = findBalancedPostfixBracket(rawVarName);
          if (lhsBracket) {
            const container = evalNonEmpty(lhsBracket.receiver);
            if (isTuple(container) || typeof container === 'string') {
              throw new Error('TypeError: object does not support item assignment');
            }
            const keyVal = evalNonEmpty(lhsBracket.bracketContent);
            if (Array.isArray(container)) {
              if (typeof keyVal !== 'number' || !Number.isInteger(keyVal)) {
                throw new Error('TypeError: list indices must be integers');
              }
              const idx = keyVal < 0 ? container.length + keyVal : keyVal;
              if (idx < 0 || idx >= container.length) {
                throw new Error('IndexError: list assignment index out of range');
              }
              container[idx] = op === '=' ? rhsVal : applyCompoundValue(container[idx], op, rhsVal);
            } else if (container && typeof container === 'object' && !(container instanceof Set) && !isSpecialPyObject(container)) {
              const k = String(keyVal);
              if (op === '=') {
                container[k] = rhsVal;
              } else {
                if (!Object.prototype.hasOwnProperty.call(container, k)) {
                  throw new Error(`KeyError: '${k}'`);
                }
                container[k] = applyCompoundValue(container[k], op, rhsVal);
              }
            } else {
              throw new Error('TypeError: object does not support item assignment');
            }
            recordStep(blk);
            continue;
          }

          // Attribute LHS assignment: self.hp = 100, self.hp += 10, dog.name = "초코"
          const lhsAttr = findBalancedPostfixAttr(rawVarName);
          if (lhsAttr) {
            const targetObj = evalNonEmpty(lhsAttr.receiver);
            const attr = lhsAttr.attrName;
            if (isInstanceObj(targetObj)) {
              if (op === '=') {
                targetObj.__attrs[attr] = rhsVal;
              } else {
                let prevVal: any;
                if (Object.prototype.hasOwnProperty.call(targetObj.__attrs, attr)) {
                  prevVal = targetObj.__attrs[attr];
                } else {
                  const clsAttr = lookupClassAttr(targetObj.__className, attr);
                  if (!clsAttr.found) {
                    throw new Error(`AttributeError: '${targetObj.__className}' object has no attribute '${attr}'`);
                  }
                  prevVal = clsAttr.value;
                }
                targetObj.__attrs[attr] = applyCompoundValue(prevVal, op, rhsVal);
              }
            } else if (targetObj && typeof targetObj === 'object' && targetObj.__isClass) {
              if (op === '=') {
                targetObj.classAttrs[attr] = rhsVal;
              } else {
                const clsAttr = lookupClassAttr(targetObj.name, attr);
                if (!clsAttr.found) {
                  throw new Error(`AttributeError: type object '${targetObj.name}' has no attribute '${attr}'`);
                }
                targetObj.classAttrs[attr] = applyCompoundValue(clsAttr.value, op, rhsVal);
              }
            } else {
              throw new Error(`AttributeError: '${typeof targetObj}' object has no attribute '${attr}'`);
            }
            recordStep(blk);
            continue;
          }

          // Single identifier assignment or compound assignment
          if (!isValidPythonIdentifier(rawVarName)) {
            throw new Error('SyntaxError: invalid syntax');
          }

          if (op === '=') {
            currentScope[rawVarName] = rhsVal;
            if (currentScope === scope) {
              if (typeof rhsVal === 'number' && rhsIsFloat) floatVars.add(rawVarName);
              else floatVars.delete(rawVarName);
            }
          } else {
            if (!hasVar(rawVarName)) {
              throw new Error(`NameError: name '${rawVarName}' is not defined`);
            }
            const lhsVal = getVar(rawVarName);
            const lhsIsFloat =
              (currentScope === scope && floatVars.has(rawVarName)) ||
              (typeof lhsVal === 'number' && !Number.isInteger(lhsVal));
            const nextVal = applyCompoundValue(lhsVal, op, rhsVal);
            currentScope[rawVarName] = nextVal;
            if (currentScope === scope) {
              if (op === '/=' || (typeof nextVal === 'number' && (lhsIsFloat || rhsIsFloat))) {
                floatVars.add(rawVarName);
              } else {
                floatVars.delete(rawVarName);
              }
            }
          }
          recordStep(blk);
        } else if (blk.type === 'call') {
          evalBlockAsExpr(blk);
          recordStep(blk);
        } else if (blk.type === 'return') {
          const rawRet = (blk.content ?? '').trim();
          let retVal: any = null;
          if (rawRet) {
            const parts = splitTopLevelArgs(rawRet);
            retVal = parts.length > 1 ? makeTuple(parts.map((p) => evalNonEmpty(p))) : evalNonEmpty(rawRet);
          }
          recordStep(blk);
          return { __isReturn: true, value: retVal };
        } else if (blk.type === 'del') {
          const targetExpr = (blk.content ?? '').trim();
          if (!targetExpr) throw new Error('SyntaxError: invalid syntax');
          const delBracket = findBalancedPostfixBracket(targetExpr);
          if (delBracket) {
            const container = evalNonEmpty(delBracket.receiver);
            if (isTuple(container) || typeof container === 'string') {
              throw new Error("TypeError: object doesn't support item deletion");
            }
            const keyVal = evalNonEmpty(delBracket.bracketContent);
            if (Array.isArray(container)) {
              const idx = pyInt(keyVal) < 0 ? container.length + pyInt(keyVal) : pyInt(keyVal);
              if (idx < 0 || idx >= container.length) throw new Error('IndexError: list assignment index out of range');
              container.splice(idx, 1);
            } else if (container && typeof container === 'object' && !(container instanceof Set)) {
              const k = String(keyVal);
              if (!Object.prototype.hasOwnProperty.call(container, k)) throw new Error(`KeyError: '${k}'`);
              delete container[k];
            } else {
              throw new Error("TypeError: object doesn't support item deletion");
            }
          } else if (isValidPythonIdentifier(targetExpr)) {
            if (Object.prototype.hasOwnProperty.call(currentScope, targetExpr)) {
              delete currentScope[targetExpr];
            } else {
              throw new Error(`NameError: name '${targetExpr}' is not defined`);
            }
          } else {
            throw new Error('SyntaxError: invalid syntax');
          }
          recordStep(blk);
        } else if ([
          'int', 'float', 'str', 'bool', 'type', 'isinstance', 'ord', 'chr',
          'input', 'len', 'round', 'abs', 'sum', 'min', 'max', 'range', 'map',
          'sorted', 'iter', 'enumerate', 'zip', 'all', 'any', 'reversed', 'open'
        ].includes(blk.type)) {
          evalBlockAsExpr(blk);
          recordStep(blk);
        } else if (blk.type === 'math') {
          throw new Error('SyntaxError: select a math function from the dropdown');
        } else if (blk.type === 'list') {
          const vName = (blk.varName ?? '').trim();
          if (!isValidPythonIdentifier(vName)) throw new Error('SyntaxError: invalid syntax');
          currentScope[vName] = (blk.items || []).filter((i: string) => i.trim().length > 0).map((i: string) => evalNonEmpty(i));
          recordStep(blk);
        } else if (blk.type === 'tuple') {
          const vName = (blk.varName ?? '').trim();
          if (!isValidPythonIdentifier(vName)) throw new Error('SyntaxError: invalid syntax');
          currentScope[vName] = makeTuple((blk.items || []).filter((i: string) => i.trim().length > 0).map((i: string) => evalNonEmpty(i)));
          recordStep(blk);
        } else if (blk.type === 'set') {
          const vName = (blk.varName ?? '').trim();
          if (!isValidPythonIdentifier(vName)) throw new Error('SyntaxError: invalid syntax');
          const outSet = new Set<any>();
          for (const rawItem of (blk.items || []).filter((i: string) => i.trim().length > 0)) {
            const iv = evalNonEmpty(rawItem);
            if (!Array.from(outSet).some((x) => pyEquals(x, iv))) outSet.add(iv);
          }
          currentScope[vName] = outSet;
          recordStep(blk);
        } else if (blk.type === 'dict') {
          const vName = (blk.varName ?? '').trim();
          if (!isValidPythonIdentifier(vName)) throw new Error('SyntaxError: invalid syntax');
          const dictObj: Record<string, any> = {};
          for (const p of blk.dictPairs || []) {
            const rk = (p.key || '').trim();
            const rv = (p.value || '').trim();
            if (!rk && !rv) continue;
            if (!rk || !rv) throw new Error('SyntaxError: invalid syntax');
            const kVal = (/^['"].*['"]$/.test(rk) || /^[+-]?\d+(\.\d+)?$/.test(rk) || hasVar(rk))
              ? evalNonEmpty(rk)
              : rk;
            dictObj[String(kVal)] = evalNonEmpty(rv);
          }
          currentScope[vName] = dictObj;
          recordStep(blk);
        } else if (blk.type === 'comment') {
          recordStep(blk);
        } else if (blk.type === 'def') {
          const fName = (blk.varName ?? '').trim();
          if (!isValidPythonIdentifier(fName)) throw new Error('SyntaxError: invalid syntax');
          functions[fName] = {
            args: blk.content || '',
            innerBlocks: blk.innerBlocks || [],
            hasReturn: blk.hasReturn,
            returnVal: blk.returnVal,
          };
          recordStep(blk);
        } else if (blk.type === 'class') {
          const rawHeader = (blk.varName ?? '').trim();
          let cName = rawHeader;
          let parentName = (blk.content ?? '').trim();
          const inlineParentMatch = rawHeader.match(/^([a-zA-Z_]\w*)\s*\(\s*([a-zA-Z_]\w*)?\s*\)$/);
          if (inlineParentMatch) {
            cName = inlineParentMatch[1];
            if (!parentName && inlineParentMatch[2]) parentName = inlineParentMatch[2];
          }
          if (!isValidPythonIdentifier(cName)) throw new Error('SyntaxError: invalid syntax');
          if (parentName) {
            if (!isValidPythonIdentifier(parentName)) throw new Error('SyntaxError: invalid syntax');
            if (!(parentName in classes)) throw new Error(`NameError: name '${parentName}' is not defined`);
          }
          const methods: Record<string, any> = {};
          const classAttrs: Record<string, any> = {};
          for (const inner of blk.innerBlocks || []) {
            if (!inner) continue;
            if (inner.type === 'def') {
              const mName = (inner.varName ?? '').trim();
              if (!isValidPythonIdentifier(mName)) throw new Error('SyntaxError: invalid syntax');
              methods[mName] = {
                args: inner.content || '',
                innerBlocks: inner.innerBlocks || [],
                hasReturn: inner.hasReturn,
                returnVal: inner.returnVal,
              };
            } else if (inner.type === 'variable' && !inner._isExprStmt) {
              const attrName = (inner.varName ?? '').trim();
              if (!isValidPythonIdentifier(attrName)) throw new Error('SyntaxError: invalid syntax');
              const rhs = (inner.content ?? '').trim();
              if (!rhs && !inner.argBlock) throw new Error('SyntaxError: invalid syntax');
              classAttrs[attrName] = inner.argBlock ? evalBlockAsExpr(inner.argBlock) : evalNonEmpty(rhs);
            }
          }
          classes[cName] = {
            __isClass: true,
            name: cName,
            parentName: parentName || undefined,
            methods,
            classAttrs,
          };
          recordStep(blk);
        } else if (blk.type === 'raise') {
          const rawRaise = (blk.content ?? '').trim();
          recordStep(blk);
          if (!rawRaise) {
            if (activeCaughtException) throw activeCaughtException;
            throw new Error('RuntimeError: No active exception to reraise');
          }
          const callM = findBalancedOuterCall(rawRaise);
          if (callM && /^[A-Z][a-zA-Z0-9_]*$/.test(callM.fnName)) {
            const rArgs = splitTopLevelArgs(callM.argsStr).map((a) => formatPythonValue(evalNonEmpty(a), a));
            const msg = rArgs.join(', ');
            throw new Error(msg ? `${callM.fnName}: ${msg}` : callM.fnName);
          }
          if (/^[A-Z][a-zA-Z0-9_]*$/.test(rawRaise)) {
            throw new Error(rawRaise);
          }
          const evaluated = evalNonEmpty(rawRaise);
          throw new Error(String(evaluated));
        } else if (blk.type === 'print') {
          let sep = ' ';
          let end = '\n';

          const applySepExpr = (exprStr: string) => {
            const val = evalNonEmpty(exprStr);
            if (val === null || val === undefined) {
              sep = ' ';
            } else if (typeof val !== 'string') {
              throw new Error(`TypeError: sep must be None or a string, not ${typeof val}`);
            } else {
              sep = val;
            }
          };

          const applyEndExpr = (exprStr: string) => {
            const val = evalNonEmpty(exprStr);
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
            if (rawSep.length === 0) throw new Error('SyntaxError: invalid syntax');
            applySepExpr(rawSep);
          }
          if (blk.hasEnd) {
            const rawEnd = (blk.endVal ?? '').trim().replace(/^end\s*=\s*/, '');
            if (rawEnd.length === 0) throw new Error('SyntaxError: invalid syntax');
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
                const val = evalNonEmpty(arg);
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
          const rawLoopVar = (blk.varName ?? '').trim();
          if (!rawLoopVar) throw new Error('SyntaxError: invalid syntax');
          const loopVarNames = rawLoopVar.split(',').map((s: string) => s.trim());
          for (const lv of loopVarNames) {
            if (!isValidPythonIdentifier(lv)) throw new Error('SyntaxError: invalid syntax');
          }

          let seqVal: any = null;
          if (blk.argBlock) {
            seqVal = evalBlockAsExpr(blk.argBlock);
          } else {
            const contentTrimmed = (blk.content ?? '').trim();
            if (!contentTrimmed) throw new Error('SyntaxError: invalid syntax');
            if (blk.type === 'for_range' && !contentTrimmed.startsWith('range(')) {
              seqVal = evalNonEmpty(`range(${contentTrimmed})`);
            } else {
              seqVal = evalNonEmpty(contentTrimmed);
            }
          }

          const arr = toIterableArray(seqVal);

          for (const item of arr) {
            if (maxSteps <= 0) break;
            if (loopVarNames.length === 1) {
              currentScope[loopVarNames[0]] = item;
            } else {
              const unpacked = toIterableArray(item);
              if (unpacked.length !== loopVarNames.length) {
                throw new Error(`ValueError: cannot unpack ${unpacked.length} values into ${loopVarNames.length}`);
              }
              loopVarNames.forEach((lv: string, idx: number) => {
                currentScope[lv] = unpacked[idx];
              });
            }
            recordStep(blk);
            if (blk.innerBlocks && blk.innerBlocks.length > 0) {
              const sig = runBlockList(blk.innerBlocks);
              if (sig === 'break') break;
              if (sig && typeof sig === 'object' && sig.__isReturn) return sig;
            }
          }
        } else if (blk.type === 'while') {
          const condRaw = (blk.content ?? '').trim();
          if (!condRaw) throw new Error('SyntaxError: invalid syntax');
          let loopGuard = 200;
          while (isPythonTruthy(evalNonEmpty(condRaw)) && loopGuard-- > 0) {
            if (--maxSteps <= 0) {
              stdoutBuffer += '\n⚠️ 무한 루프 감지: 500회 이상 실행되어 안전을 위해 자동 중단되었습니다.\n';
              break;
            }
            recordStep(blk);
            if (blk.innerBlocks && blk.innerBlocks.length > 0) {
              const sig = runBlockList(blk.innerBlocks);
              if (sig === 'break') break;
              if (sig && typeof sig === 'object' && sig.__isReturn) return sig;
            }
          }
        } else if (blk.type === 'if') {
          const branches = (blk.branches && blk.branches.length > 0)
            ? blk.branches
            : [{ id: 'br-if-0', kind: 'if', condition: blk.content ?? '', innerBlocks: blk.innerBlocks || [] }];

          for (const br of branches) {
            const branchStepRef = { id: blk.id, lineIndex: (br as any).lineIndex ?? blk.lineIndex };
            if (br.kind === 'if' || br.kind === 'elif') {
              const rawCond = (br.condition ?? '').trim();
              if (!rawCond) {
                throw new Error('SyntaxError: invalid syntax');
              }
              const cond = isPythonTruthy(evalNonEmpty(rawCond));
              if (cond) {
                recordStep(branchStepRef);
                if (br.innerBlocks) {
                  const sig = runBlockList(br.innerBlocks);
                  if (sig === 'break') return 'break';
                  if (sig === 'continue') return 'continue';
                  if (sig && typeof sig === 'object' && sig.__isReturn) return sig;
                }
                break;
              }
            } else if (br.kind === 'else') {
              recordStep(branchStepRef);
              if (br.innerBlocks) {
                const sig = runBlockList(br.innerBlocks);
                if (sig === 'break') return 'break';
                if (sig === 'continue') return 'continue';
                if (sig && typeof sig === 'object' && sig.__isReturn) return sig;
              }
              break;
            }
          }
        } else if (blk.type === 'try') {
          const branches = (blk.branches && blk.branches.length > 0)
            ? blk.branches
            : [{ id: 'br-try-0', kind: 'try', innerBlocks: blk.innerBlocks || [] }];
          const tryBranch = branches.find((b: any) => b.kind === 'try');
          const exceptBranches = branches.filter((b: any) => b.kind === 'except');
          const elseBranch = branches.find((b: any) => b.kind === 'else');
          const finallyBranch = branches.find((b: any) => b.kind === 'finally');

          if (!tryBranch || (exceptBranches.length === 0 && !finallyBranch)) {
            throw new Error('SyntaxError: expected except or finally block');
          }

          let pendingSignal: LoopOrReturnSignal = undefined;
          let unhandledError: any = null;
          let trySucceededNormal = false;

          try {
            recordStep({ id: blk.id, lineIndex: (tryBranch as any).lineIndex ?? blk.lineIndex });
            if (tryBranch.innerBlocks && tryBranch.innerBlocks.length > 0) {
              pendingSignal = runBlockList(tryBranch.innerBlocks);
            }
            if (!pendingSignal) {
              trySucceededNormal = true;
            }
          } catch (tryErr: any) {
            const errMsg = String(tryErr?.message || '');
            const colonPos = errMsg.indexOf(':');
            const thrownType = colonPos !== -1 ? errMsg.slice(0, colonPos).trim() : errMsg.trim();
            const thrownDetail = colonPos !== -1 ? errMsg.slice(colonPos + 1).trim() : errMsg.trim();

            let handled = false;
            for (const exBr of exceptBranches) {
              const rawCond = (exBr.condition ?? '').trim();
              let typeSpec = rawCond;
              let aliasName: string | null = null;
              if (rawCond) {
                const asMatch = rawCond.match(/^([\s\S]+?)\s+as\s+([a-zA-Z_]\w*)$/);
                if (asMatch) {
                  typeSpec = asMatch[1].trim();
                  aliasName = asMatch[2];
                }
              }

              let matches = false;
              if (!typeSpec) {
                matches = true;
              } else {
                const innerSpec = (typeSpec.startsWith('(') && typeSpec.endsWith(')'))
                  ? typeSpec.slice(1, -1).trim()
                  : typeSpec;
                const targetTypes = splitTopLevelArgs(innerSpec).map((s) => s.trim()).filter(Boolean);
                if (targetTypes.length === 0) throw new Error('SyntaxError: invalid syntax');
                for (const tt of targetTypes) {
                  if (!/^[A-Z][a-zA-Z0-9_]*$/.test(tt)) {
                    throw new Error(`NameError: name '${tt}' is not defined`);
                  }
                  if (
                    tt === 'Exception' ||
                    tt === 'BaseException' ||
                    (tt === 'ArithmeticError' && thrownType === 'ZeroDivisionError') ||
                    (tt === 'LookupError' && (thrownType === 'IndexError' || thrownType === 'KeyError')) ||
                    tt === thrownType
                  ) {
                    matches = true;
                  }
                }
              }

              if (matches) {
                handled = true;
                const prevCaught = activeCaughtException;
                activeCaughtException = tryErr instanceof Error ? tryErr : new Error(errMsg);
                try {
                  if (aliasName) {
                    currentScope[aliasName] = thrownDetail || thrownType;
                  }
                  recordStep({ id: blk.id, lineIndex: (exBr as any).lineIndex ?? blk.lineIndex });
                  if (exBr.innerBlocks && exBr.innerBlocks.length > 0) {
                    pendingSignal = runBlockList(exBr.innerBlocks);
                  }
                } catch (handlerErr: any) {
                  unhandledError = handlerErr;
                } finally {
                  activeCaughtException = prevCaught;
                }
                break;
              }
            }

            if (!handled) {
              unhandledError = tryErr;
            }
          }

          if (trySucceededNormal && !unhandledError && elseBranch) {
            try {
              recordStep({ id: blk.id, lineIndex: (elseBranch as any).lineIndex ?? blk.lineIndex });
              if (elseBranch.innerBlocks && elseBranch.innerBlocks.length > 0) {
                pendingSignal = runBlockList(elseBranch.innerBlocks);
              }
            } catch (elseErr: any) {
              unhandledError = elseErr;
            }
          }

          if (finallyBranch) {
            recordStep({ id: blk.id, lineIndex: (finallyBranch as any).lineIndex ?? blk.lineIndex });
            if (finallyBranch.innerBlocks && finallyBranch.innerBlocks.length > 0) {
              const finSig = runBlockList(finallyBranch.innerBlocks);
              if (finSig) {
                pendingSignal = finSig;
                unhandledError = null;
              }
            }
          }

          if (unhandledError) {
            throw unhandledError;
          }
          if (pendingSignal === 'break') return 'break';
          if (pendingSignal === 'continue') return 'continue';
          if (pendingSignal && typeof pendingSignal === 'object' && pendingSignal.__isReturn) return pendingSignal;
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

// Lightweight AST parser for Python code in Typing Mode (preserves lineIndex, branches, loops, and functions)
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

      if (!trimmed) {
        i++;
        continue;
      }

      const indent = getIndent(line);
      if (indent < minIndent) {
        break;
      }
      if (blockIndent === undefined) {
        blockIndent = indent;
      } else if (indent !== blockIndent) {
        throw new Error('IndentationError: unexpected indent');
      }

      const lineIndex = i;
      i++;

      if (/^(?:elif|else|except|finally)\b/.test(trimmed)) {
        throw new Error('SyntaxError: invalid syntax');
      }
      if (/^(?:if|for|while|def|class|try|except|finally)\b/.test(trimmed) && !trimmed.endsWith(':')) {
        throw new Error("SyntaxError: expected ':'");
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

      // 0a. class definition: class <Name>[(<Parent>)]:
      const classMatch = trimmed.match(/^class\s+([a-zA-Z_]\w*)(?:\s*\(\s*([a-zA-Z_]\w*)?\s*\))?\s*:$/);
      if (classMatch) {
        const inner = parseBlock(indent + 1);
        if (inner.length === 0) {
          throw new Error('IndentationError: expected an indented block');
        }
        const parentStr = (classMatch[2] || '').trim();
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'class',
          varName: classMatch[1],
          content: parentStr || undefined,
          lineIndex,
          innerBlocks: inner,
        });
        continue;
      }

      // 0. def function: def <name>(<params>):
      const defMatch = trimmed.match(/^def\s+([a-zA-Z_]\w*)\s*\(([\s\S]*)\)\s*:$/);
      if (defMatch) {
        const inner = parseBlock(indent + 1);
        if (inner.length === 0) {
          throw new Error('IndentationError: expected an indented block');
        }
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'def',
          varName: defMatch[1],
          content: defMatch[2].trim(),
          lineIndex,
          innerBlocks: inner,
        });
        continue;
      }

      // 0b. return statement
      const retMatch = trimmed.match(/^return(?:\s+([\s\S]+))?$/);
      if (retMatch) {
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'return',
          content: (retMatch[1] || '').trim(),
          lineIndex,
        });
        continue;
      }

      // 0b2. raise statement
      const raiseMatch = trimmed.match(/^raise(?:\s+([\s\S]+))?$/);
      if (raiseMatch) {
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'raise',
          content: (raiseMatch[1] || '').trim(),
          lineIndex,
        });
        continue;
      }

      // 0d. try / except / else / finally multi-branch block
      if (trimmed === 'try:') {
        const tryInner = parseBlock(indent + 1);
        if (tryInner.length === 0) {
          throw new Error('IndentationError: expected an indented block');
        }
        const branches: any[] = [
          {
            id: `br-try-${lineIndex}`,
            kind: 'try',
            lineIndex,
            innerBlocks: tryInner,
          },
        ];

        let seenExcept = false;
        let seenElse = false;
        let seenFinally = false;
        while (true) {
          const nextIdx = peekNextActiveLineIndex(i);
          if (nextIdx === -1) break;
          const nextLine = rawLines[nextIdx];
          const nextIndent = getIndent(nextLine);
          if (nextIndent !== indent) break;
          const nextTrimmed = stripPythonComment(nextLine).trim();

          if (/^except\b/.test(nextTrimmed)) {
            if (seenElse || seenFinally || !nextTrimmed.endsWith(':')) {
              throw new Error('SyntaxError: invalid syntax');
            }
            const exMatch = nextTrimmed.match(/^except(?:\s+([\s\S]+?))?\s*:$/);
            if (!exMatch) {
              throw new Error('SyntaxError: invalid syntax');
            }
            seenExcept = true;
            i = nextIdx + 1;
            const exInner = parseBlock(indent + 1);
            if (exInner.length === 0) {
              throw new Error('IndentationError: expected an indented block');
            }
            const exCond = exMatch[1] ? exMatch[1].trim() : undefined;
            branches.push({
              id: `br-except-${nextIdx}`,
              kind: 'except',
              condition: exCond,
              lineIndex: nextIdx,
              innerBlocks: exInner,
            });
            continue;
          }

          if (/^else\b/.test(nextTrimmed)) {
            if (!seenExcept || seenElse || seenFinally || nextTrimmed !== 'else:') {
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

          if (/^finally\b/.test(nextTrimmed)) {
            if (seenFinally || nextTrimmed !== 'finally:') {
              throw new Error('SyntaxError: invalid syntax');
            }
            seenFinally = true;
            i = nextIdx + 1;
            const finInner = parseBlock(indent + 1);
            if (finInner.length === 0) {
              throw new Error('IndentationError: expected an indented block');
            }
            branches.push({
              id: `br-finally-${nextIdx}`,
              kind: 'finally',
              lineIndex: nextIdx,
              innerBlocks: finInner,
            });
            continue;
          }

          break;
        }

        if (!seenExcept && !seenFinally) {
          throw new Error('SyntaxError: expected except or finally block');
        }

        list.push({
          id: `py-line-${lineIndex}`,
          type: 'try',
          lineIndex,
          innerBlocks: tryInner,
          branches,
        });
        continue;
      }

      // 0c. del statement
      const delMatch = trimmed.match(/^del\s+([\s\S]+)$/);
      if (delMatch) {
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'del',
          content: delMatch[1].trim(),
          lineIndex,
        });
        continue;
      }

      // 1. for loop: for <var(s)> in <range/seq>:
      const forMatch = trimmed.match(/^for\s+([a-zA-Z_]\w*(?:\s*,\s*[a-zA-Z_]\w*)*)\s+in\s+([\s\S]+?)\s*:$/);
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

      // 5. Compound assignment (including indexed LHS like d["k"] += 1 or nums[0] += 5)
      let compOpPos = -1;
      let compOpStr = '';
      {
        let q: string | null = null;
        let p = 0, b = 0, c = 0;
        for (let k = 0; k < trimmed.length; k++) {
          const ch = trimmed[k];
          if (q) {
            if (ch === '\\' && k + 1 < trimmed.length) { k++; continue; }
            if (ch === q) q = null;
            continue;
          }
          if (ch === '"' || ch === "'") { q = ch; continue; }
          if (ch === '(') p++;
          else if (ch === ')') p = Math.max(0, p - 1);
          else if (ch === '[') b++;
          else if (ch === ']') b = Math.max(0, b - 1);
          else if (ch === '{') c++;
          else if (ch === '}') c = Math.max(0, c - 1);
          else if (p === 0 && b === 0 && c === 0) {
            const three = trimmed.slice(k, k + 3);
            const two = trimmed.slice(k, k + 2);
            if (three === '//=' || three === '**=') {
              compOpPos = k;
              compOpStr = three;
              break;
            }
            if (['+=', '-=', '*=', '/=', '%='].includes(two)) {
              compOpPos = k;
              compOpStr = two;
              break;
            }
          }
        }
      }
      if (compOpPos > 0) {
        list.push({
          id: `py-line-${lineIndex}`,
          type: 'variable',
          varName: trimmed.slice(0, compOpPos).trim(),
          assignOp: compOpStr,
          content: trimmed.slice(compOpPos + compOpStr.length).trim(),
          lineIndex,
        });
        continue;
      }

      // 6. Standard, multiple, or indexed assignment: x = 10, a, b = 10, 20, nums[0] = 99
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

      // 7. Generic expression statement / method call / user function call
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

// Local python evaluator for simple, conditional, loop & function typing mode lines
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
