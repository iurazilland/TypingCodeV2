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
      current += ch;
      if (ch === inQuote && str[i - 1] !== '\\') {
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

// 0ms Safe Local Block AST Evaluator with infinite loop protection
export function evaluateBlocksLocally(blocks: any[]): EvaluationResult {
  try {
    const scope: Record<string, any> = {};
    const functions: Record<string, any> = {};
    let stdoutBuffer = '';
    let maxSteps = 500;

    const evalExpr = (rawExpr: string): any => {
      const expr = (rawExpr || '').trim();
      if (!expr) return null;

      // String literals
      if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
        return expr.slice(1, -1);
      }
      if (expr === 'True' || expr === 'true') return true;
      if (expr === 'False' || expr === 'false') return false;
      if (expr === 'None' || expr === 'null') return null;

      // Numbers
      if (/^-?\d+$/.test(expr)) return parseInt(expr, 10);
      if (/^-?\d+\.\d+$/.test(expr)) return parseFloat(expr);

      // List literals: [1, 2, 3]
      if (expr.startsWith('[') && expr.endsWith(']')) {
        const inner = expr.slice(1, -1).trim();
        if (!inner) return [];
        return splitTopLevelArgs(inner).map((s) => evalExpr(s));
      }

      // Tuple literals: (1, 2, 3)
      if (expr.startsWith('(') && expr.endsWith(')') && expr.includes(',')) {
        const inner = expr.slice(1, -1).trim();
        return splitTopLevelArgs(inner).map((s) => evalExpr(s));
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

      // Function calls: len(x), sum(x), func(x)
      const callMatch = expr.match(/^([a-zA-Z_]\w*)\s*\(([\s\S]*)\)$/);
      if (callMatch) {
        const fnName = callMatch[1];
        const fnArgs = splitTopLevelArgs(callMatch[2]).map((a) => evalExpr(a));

        if (fnName === 'len') {
          const target = fnArgs[0];
          if (typeof target === 'string' || Array.isArray(target)) return target.length;
          if (target && typeof target === 'object') return Object.keys(target).length;
          return 0;
        }
        if (fnName === 'int') {
          const target = fnArgs[0];
          const parsed = parseInt(String(target), 10);
          return isNaN(parsed) ? 0 : parsed;
        }
        if (fnName === 'input') {
          return fnArgs[0] !== undefined ? String(fnArgs[0]) : '';
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
      }

      // Method call: "hello".split() or my_list.append(10)
      const methodMatch = expr.match(/^(.+?)\.([a-zA-Z_]\w*)\s*\(([\s\S]*)\)$/);
      if (methodMatch) {
        const targetVal = evalExpr(methodMatch[1]);
        const mName = methodMatch[2];
        const mArgs = splitTopLevelArgs(methodMatch[3]).map((a) => evalExpr(a));

        if (typeof targetVal === 'string') {
          if (mName === 'split') {
            const sep = mArgs[0] !== undefined ? String(mArgs[0]) : ' ';
            return targetVal.split(sep);
          }
          if (mName === 'upper') return targetVal.toUpperCase();
          if (mName === 'lower') return targetVal.toLowerCase();
          if (mName === 'strip') return targetVal.trim();
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
        return expr;
      }

      // Mathematical & boolean expressions
      let js = expr
        .replace(/\/\//g, '___INTDIV___')
        .replace(/\*\*/g, '___POW___')
        .replace(/\bTrue\b/g, 'true')
        .replace(/\bFalse\b/g, 'false')
        .replace(/\bNone\b/g, 'null')
        .replace(/\band\b/g, '&&')
        .replace(/\bor\b/g, '||')
        .replace(/\bnot\b/g, '!');

      const varNames = Object.keys(scope).sort((a, b) => b.length - a.length);
      for (const vn of varNames) {
        const regex = new RegExp(`\\b${vn}\\b`, 'g');
        const val = scope[vn];
        const rep = typeof val === 'object' ? JSON.stringify(val) : typeof val === 'string' ? JSON.stringify(val) : String(val);
        js = js.replace(regex, rep);
      }

      while (js.includes('___INTDIV___')) {
        js = js.replace(/(\(?[^/()]+?\)?)\s*___INTDIV___\s*(\(?[^/()]+?\)?)/, 'Math.floor(($1) / ($2))');
      }
      while (js.includes('___POW___')) {
        js = js.replace(/(\(?[^()*]+?\)?)\s*___POW___\s*(\(?[^()*]+?\)?)/, 'Math.pow(($1), ($2))');
      }

      if (!/^[0-9+\-*/%().\s,Mathfloorpow"'[\]{}><=!&|]+$/.test(js)) {
        return expr;
      }

      try {
        const fn = new Function(`"use strict"; return (${js})`);
        return fn();
      } catch {
        return expr;
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
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '0');
        const parsed = parseInt(String(inner), 10);
        val = isNaN(parsed) ? 0 : parsed;
      } else if (b.type === 'float') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '0.0');
        const parsed = parseFloat(String(inner));
        val = isNaN(parsed) ? 0.0 : parsed;
      } else if (b.type === 'str') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '');
        val = String(inner ?? '');
      } else if (b.type === 'type') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '');
        if (Array.isArray(inner)) val = "<class 'list'>";
        else if (inner !== null && typeof inner === 'object') val = "<class 'dict'>";
        else if (typeof inner === 'number') val = Number.isInteger(inner) ? "<class 'int'>" : "<class 'float'>";
        else if (typeof inner === 'string') val = "<class 'str'>";
        else if (typeof inner === 'boolean') val = "<class 'bool'>";
        else val = `<class '${typeof inner}'>`;
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
        val = b.argBlock ? evalBlockAsExpr(b.argBlock) : (b.content || '');
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
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || 'False');
        val = Boolean(inner && inner !== '0' && inner !== 'False' && inner !== '[]');
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
        val = Array.isArray(inner) ? inner.every(Boolean) : Boolean(inner);
      } else if (b.type === 'any') {
        const inner = b.argBlock ? evalBlockAsExpr(b.argBlock) : evalExpr(b.content || '[]');
        val = Array.isArray(inner) ? inner.some(Boolean) : Boolean(inner);
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
            const sep = (m.content || '').trim();
            val = sep ? strVal.split(sep.replace(/^['"]|['"]$/g, '')) : strVal.split(/\s+/).filter(Boolean);
          } else if (mName === 'strip') {
            val = String(val ?? '').trim();
          } else if (mName === 'upper') {
            val = String(val ?? '').toUpperCase();
          } else if (mName === 'lower') {
            val = String(val ?? '').toLowerCase();
          } else if (mName === 'replace') {
            const parts = (m.content || '').split(',').map((s: string) => s.trim().replace(/^['"]|['"]$/g, ''));
            val = String(val ?? '').replaceAll(parts[0] || '', parts[1] || '');
          } else if (mName === 'join') {
            const sep = String(val ?? '');
            const arg = (m.content || '').trim();
            const listVal = scope[arg] || evalExpr(arg);
            val = Array.isArray(listVal) ? listVal.join(sep) : '';
          } else if (mName === 'count') {
            const sub = (m.content || '').trim().replace(/^['"]|['"]$/g, '');
            if (typeof val === 'string') val = (val.match(new RegExp(sub, 'g')) || []).length;
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
        if (!blk || blk.type === 'start') continue;
        if (--maxSteps <= 0) {
          stdoutBuffer += '\n⚠️ 무한 루프 감지: 500회 이상 실행되어 안전을 위해 자동 중단되었습니다.\n';
          return;
        }

        if (blk.type === 'variable') {
          const vName = blk.varName || 'x';
          if (blk.argBlock) {
            scope[vName] = evalBlockAsExpr(blk.argBlock);
          } else {
            scope[vName] = evalExpr(blk.content || '0');
          }
        } else if ([
          'int', 'float', 'str', 'bool', 'type', 'input', 'len', 'round', 'abs',
          'sum', 'min', 'max', 'range', 'map', 'sorted', 'iter', 'enumerate',
          'zip', 'all', 'any', 'reversed', 'open'
        ].includes(blk.type)) {
          evalBlockAsExpr(blk);
        } else if (blk.type === 'math') {
          // math pseudo-block placed directly in statement list: safe no-op
        } else if (blk.type === 'list') {
          const vName = blk.varName || 'my_list';
          scope[vName] = (blk.items || []).filter((i: string) => i.trim().length > 0).map((i: string) => evalExpr(i));
        } else if (blk.type === 'tuple') {
          const vName = blk.varName || 'my_tuple';
          scope[vName] = (blk.items || []).filter((i: string) => i.trim().length > 0).map((i: string) => evalExpr(i));
        } else if (blk.type === 'set') {
          const vName = blk.varName || 'my_set';
          scope[vName] = new Set((blk.items || []).filter((i: string) => i.trim().length > 0).map((i: string) => evalExpr(i)));
        } else if (blk.type === 'dict') {
          const vName = blk.varName || 'my_dict';
          const dictObj: Record<string, any> = {};
          (blk.dictPairs || []).forEach((p: any) => {
            if (p.key.trim()) dictObj[p.key.trim()] = evalExpr(p.value.trim() || 'None');
          });
          scope[vName] = dictObj;
        } else if (blk.type === 'def') {
          const fName = blk.varName || 'my_func';
          functions[fName] = {
            args: blk.content || '',
            innerBlocks: blk.innerBlocks || [],
            hasReturn: blk.hasReturn,
            returnVal: blk.returnVal,
          };
        } else if (blk.type === 'print') {
          if (blk.argBlock) {
            const val = evalBlockAsExpr(blk.argBlock);
            if (val === null || val === undefined) stdoutBuffer += 'None\n';
            else if (typeof val === 'boolean') stdoutBuffer += (val ? 'True' : 'False') + '\n';
            else if (Array.isArray(val)) stdoutBuffer += `[${val.map((v) => (typeof v === 'string' ? `'${v}'` : String(v))).join(', ')}]\n`;
            else stdoutBuffer += String(val) + '\n';
          } else {
            const raw = (blk.content || '').trim();
          if (!raw) {
            stdoutBuffer += '\n';
          } else {
            const args = splitTopLevelArgs(raw);
            let sep = ' ';
            let end = '\n';
            const posArgs: string[] = [];

            for (const arg of args) {
              const sepMatch = arg.match(/^sep\s*=\s*(.+)$/);
              const endMatch = arg.match(/^end\s*=\s*(.+)$/);
              if (sepMatch) {
                const val = evalExpr(sepMatch[1]);
                sep = String(val ?? '').replace(/\\n/g, '\n').replace(/\\t/g, '\t');
              } else if (endMatch) {
                const val = evalExpr(endMatch[1]);
                end = String(val ?? '').replace(/\\n/g, '\n').replace(/\\t/g, '\t');
              } else {
                posArgs.push(arg);
              }
            }

            const printed = posArgs.map((arg) => {
              const val = evalExpr(arg);
              if (val === null || val === undefined) return 'None';
              if (typeof val === 'boolean') return val ? 'True' : 'False';
              if (typeof val === 'number') {
                if (arg.includes('/') && !arg.includes('//') && Number.isInteger(val)) {
                  return val.toFixed(1);
                }
                return String(val);
              }
              if (Array.isArray(val)) return `[${val.map((v) => (typeof v === 'string' ? `'${v}'` : String(v))).join(', ')}]`;
              if (val instanceof Set) return `{${Array.from(val).map((v) => (typeof v === 'string' ? `'${v}'` : String(v))).join(', ')}}`;
              if (typeof val === 'object') {
                const entries = Object.entries(val).map(([k, v]) => `'${k}': ${typeof v === 'string' ? `'${v}'` : String(v)}`);
                return `{${entries.join(', ')}}`;
              }
              return String(val);
            });
            stdoutBuffer += printed.join(sep) + end;
          }
        }
      } else if (blk.type === 'break') {
          return 'break';
        } else if (blk.type === 'continue') {
          return 'continue';
        } else if (blk.type === 'for_range' || blk.type === 'for_in') {
          const vName = blk.varName || (blk.type === 'for_range' ? 'i' : 'item');
          let seqVal: any = null;
          if (blk.argBlock) {
            seqVal = evalBlockAsExpr(blk.argBlock);
          } else if (blk.content) {
            seqVal = evalExpr(blk.content);
          } else {
            seqVal = blk.type === 'for_range' ? [0, 1, 2, 3, 4] : [];
          }
          const arr = Array.isArray(seqVal)
            ? seqVal
            : typeof seqVal === 'number'
            ? Array.from({ length: Math.max(0, Math.min(seqVal, 100)) }, (_, i) => i)
            : typeof seqVal === 'string'
            ? seqVal.split('')
            : [seqVal];
          for (const item of arr) {
            if (maxSteps <= 0) break;
            scope[vName] = item;
            if (blk.innerBlocks) {
              const sig = runBlockList(blk.innerBlocks);
              if (sig === 'break') break;
            }
          }
        } else if (blk.type === 'while') {
          const condRaw = (blk.content || '').trim() || 'False';
          let loopGuard = 200;
          while (Boolean(evalExpr(condRaw)) && loopGuard-- > 0) {
            if (--maxSteps <= 0) {
              stdoutBuffer += '\n⚠️ 무한 루프 감지: 500회 이상 실행되어 안전을 위해 자동 중단되었습니다.\n';
              break;
            }
            if (blk.innerBlocks) {
              const sig = runBlockList(blk.innerBlocks);
              if (sig === 'break') break;
            }
          }
        } else if (blk.type === 'if') {
          const branches = (blk.branches && blk.branches.length > 0)
            ? blk.branches
            : [{ id: 'br-if-0', kind: 'if', condition: blk.content || 'False', innerBlocks: blk.innerBlocks || [] }];

          for (const br of branches) {
            if (br.kind === 'if' || br.kind === 'elif') {
              const cond = Boolean(evalExpr(br.condition || 'False'));
              if (cond) {
                if (br.innerBlocks) {
                  const sig = runBlockList(br.innerBlocks);
                  if (sig === 'break') return 'break';
                  if (sig === 'continue') return 'continue';
                }
                break;
              }
            } else if (br.kind === 'else') {
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
    };
  } catch (err: any) {
    return { success: false, stdout: '', stderr: String(err?.message || ''), scope: {} };
  }
}

// Local python evaluator for simple typing mode lines (falls back to remote runner for complex code)
export function evaluatePythonLocally(code: string): EvaluationResult {
  const trimmed = code.trim();
  // Complex control flows should be delegated to remote Wandbox runner for 100% exact output
  if (/(\bfor\b|\bwhile\b|\bif\b|\bdef\b|\bclass\b)/.test(trimmed)) {
    return { success: false, stdout: '', stderr: '', requiresRemote: true };
  }

  const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean);
  const blocks: any[] = [];

  for (const line of lines) {
    const printMatch = line.match(/^print\s*\(([\s\S]*)\)$/);
    if (printMatch) {
      blocks.push({ type: 'print', content: printMatch[1] });
      continue;
    }
    const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
    if (assignMatch) {
      blocks.push({ type: 'variable', varName: assignMatch[1], content: assignMatch[2] });
      continue;
    }
    // Default fallback: variable or expression
    blocks.push({ type: 'variable', varName: '_', content: line });
  }

  return evaluateBlocksLocally(blocks);
}

// Scratch execution chain order: traverses starting only from 'start' hat block
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

  return ordered;
}

