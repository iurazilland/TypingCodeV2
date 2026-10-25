'use client';

import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal as TerminalIcon, Sparkles, Code2, Globe } from 'lucide-react';
import { executeCode } from '@/lib/runner';
import { SupportedLanguage } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

const DEFAULT_SNIPPETS: Record<SupportedLanguage, string> = {
  python: `# 🐍 TypingCode Python 3.10 Playground (Colab Style)
def greet(name):
    return f"안녕하세요, {name}님! TypingCode 온라인 컴파일러에 오신 것을 환영합니다."

print(greet("코딩 러너"))
squares = [x ** 2 for x in range(1, 6)]
print("1~5의 제곱 수 리스트:", squares)
print(f"제곱 수들의 총합: {sum(squares)}")
`,
  c: `// ⚡ TypingCode GCC 13.2 C Language Playground
#include <stdio.h>

int main() {
    printf("=== C언어 온라인 컴파일러 ===\\n");
    int a = 15, b = 27;
    printf("변수 a = %d, b = %d\\n", a, b);
    printf("두 수의 합: %d\\n", a + b);
    return 0;
}
`,
  cpp: `// ⚙️ Modern C++20 Playground
#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::cout << "=== 모던 C++20 온라인 컴파일러 ===" << std::endl;
    std::vector<int> numbers = {10, 20, 30, 40, 50};
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "벡터 요소의 총합: " << sum << std::endl;
    return 0;
}
`,
  csharp: `// 🎯 C# .NET 8 Playground
using System;
using System.Linq;

class Program {
    static void Main() {
        Console.WriteLine("=== C# .NET 온라인 컴파일러 ===");
        var scores = new int[] { 85, 92, 78, 95, 88 };
        Console.WriteLine($"최고 점수: {scores.Max()}점, 평균: {scores.Average()}점");
    }
}
`,
  go: `// 🐹 Go 1.23 Playground
package main

import "fmt"

func main() {
    fmt.Println("=== Go 온라인 컴파일러 ===")
    languages := []string{"Go", "Python", "Rust", "C#"}
    for idx, lang := range languages {
        fmt.Printf("[%d] %s 언어로 코딩하기\\n", idx+1, lang)
    }
}
`,
  rust: `// 🦀 Rust 1.82 Playground
fn main() {
    println!("=== Rust 온라인 컴파일러 ===");
    let numbers = [1, 2, 3, 4, 5];
    let sum: i32 = numbers.iter().sum();
    println!("배열의 합계: {}", sum);
}
`,
  java: `// ☕ Java 22 Playground
class Main {
    public static void main(String[] args) {
        System.out.println("=== Java 온라인 컴파일러 ===");
        java.util.List<String> list = java.util.List.of("객체지향", "강력한 타입", "스프링 백엔드");
        list.forEach(item -> System.out.println("• " + item));
    }
}
`,
  swift: `// 🍎 Swift 6.0 Playground
import Foundation

print("=== Swift 온라인 컴파일러 ===")
let greeting = "Hello, Swift!"
print(greeting)
`,
  javascript: `// ✨ Modern JavaScript (ES2024 / Node.js)
console.log("=== JavaScript 샌드박스 ===");
const fruits = ["사과", "바나나", "체리"];
const formatted = fruits.map((f, i) => \`\${i + 1}. \${f}\`).join(", ");
console.log("과일 목록:", formatted);
`,
  sql: `-- 🗄️ SQL & SQLite 3.46 Playground
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    score INTEGER
);

INSERT INTO students VALUES (1, '김코딩', 95), (2, '박파이', 88), (3, '이고랭', 92);

SELECT name, score FROM students WHERE score >= 90 ORDER BY score DESC;
`,
  web: `<!-- 🌐 Modern Web Sandbox (HTML / CSS / JS) -->
<div class="card">
  <h2>✨ 나만의 웹 인터랙션</h2>
  <p>HTML/CSS/JS를 브라우저에서 즉시 렌더링합니다.</p>
  <button onclick="changeColor()">🎨 배경 색상 바꾸기</button>
</div>

<style>
  body { font-family: sans-serif; background: #0b1329; color: #fff; padding: 20px; }
  .card { background: rgba(255,255,255,0.08); padding: 24px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); max-width: 400px; text-align: center; }
  h2 { color: #38bdf8; margin-bottom: 8px; }
  button { margin-top: 14px; padding: 10px 18px; border-radius: 8px; border: none; background: #10b981; color: #fff; font-weight: bold; cursor: pointer; }
</style>

<script>
  function changeColor() {
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.card').style.borderColor = randomColor;
    document.querySelector('h2').style.color = randomColor;
  }
</script>
`,
  linux: `#!/bin/bash
# 🐧 Linux CLI & Bash Shell Scripting Playground
echo "=== Linux CLI & Shell Script Playground ==="
echo "Current Date: $(date)"
echo "Current User: $(whoami)"
echo "Kernel Release: $(uname -r)"

echo ""
echo "Creating demo files and listing them..."
for i in {1..3}; do
  echo "Log entry $i generated at $(date +%H:%M:%S)" > "sample_$i.txt"
done

ls -la sample_*.txt
cat sample_1.txt
`,
  vb: `' 🔷 Visual Basic (VB.NET & VBA 기초) Playground
Imports System

Module Program
    Sub Main()
        Console.WriteLine("=== Visual Basic 콘솔 플레이그라운드 ===")
        
        ' 1. 변수 선언 (Dim)
        Dim title As String = "엑셀 VBA로 이어지는 비주얼 베이직"
        Dim level As Integer = 1
        Dim isReady As Boolean = True
        
        Console.WriteLine($"학습 과정: {title}")
        Console.WriteLine($"시작 레벨: {level}, 준비 상태: {isReady}")
        
        ' 2. 반복문 (For...Next)
        Console.WriteLine()
        Console.WriteLine("[1부터 5까지 단계별 출력]")
        For i As Integer = 1 To 5
            Console.WriteLine($"  - Step {i}: 비주얼 베이직 코딩 실습")
        Next
    End Sub
End Module
`,
};

export default function CompilerPage() {
  const { language: uiLang } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>('python');
  const [code, setCode] = useState(DEFAULT_SNIPPETS.python);
  const [stdin, setStdin] = useState('');
  const [showStdin, setShowStdin] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [stdout, setStdout] = useState('▶ 상단의 [코드 실행] 버튼을 누르면 실시간 결과가 여기에 출력됩니다.');
  const [stderr, setStderr] = useState('');
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [exitCode, setExitCode] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setSelectedLang(lang);
    setCode(DEFAULT_SNIPPETS[lang]);
    setStdout('▶ 상단의 [코드 실행] 버튼을 누르면 실시간 결과가 여기에 출력됩니다.');
    setStderr('');
    setExecutionTime(null);
    setExitCode(null);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setStdout('⚡ 서버에서 코드를 컴파일하고 실행하는 중입니다...');
    setStderr('');

    try {
      const res = await executeCode(selectedLang, code, stdin);
      setStdout(res.stdout || (res.exitCode === 0 ? '(출력 결과가 없습니다 - 정상 종료)' : ''));
      setStderr(res.stderr);
      setExecutionTime(res.executionTimeMs ?? null);
      setExitCode(res.exitCode);
    } catch (err: any) {
      setStderr(err.message || '코드 실행 중 오류가 발생했습니다.');
      setExitCode(1);
    } finally {
      setIsRunning(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleReset = () => {
    setCode(DEFAULT_SNIPPETS[selectedLang]);
    setStdout('코드가 초기 템플릿으로 리셋되었습니다.');
    setStderr('');
  };

  return (
    <div style={{ maxWidth: '1560px', margin: '0 auto', padding: '24px 40px 80px' }}>
      {/* Header Info */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '1.6rem' }}>⚡</span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              {uiLang === 'ko' ? '자유코딩 (Code Sandbox)' : 'TypingCode Free Sandbox'}
            </h1>
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '10px',
              background: 'rgba(56, 189, 248, 0.2)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.4)',
            }}>
              FREE PLAYGROUND
            </span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem', margin: 0 }}>
            {uiLang === 'ko'
              ? '설치 없이 브라우저에서 직접 코드를 자유롭게 작성하고 실시간 런타임(CPython, GCC)으로 즉시 실행하세요.'
              : 'Write and run Python, C, and Web code directly in your browser with real server-side runtimes.'}
          </p>
        </div>

        {/* Language Tabs & Run Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Language Selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '4px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflowX: 'auto',
            maxWidth: '750px',
            scrollbarWidth: 'none',
          }}>
            {([
              { id: 'python', label: '🐍 Python' },
              { id: 'c', label: '⚡ C' },
              { id: 'cpp', label: '⚙️ C++' },
              { id: 'csharp', label: '🎯 C#' },
              { id: 'go', label: '🐹 Go' },
              { id: 'rust', label: '🦀 Rust' },
              { id: 'java', label: '☕ Java' },
              { id: 'swift', label: '🍎 Swift' },
              { id: 'javascript', label: '✨ JS' },
              { id: 'sql', label: '🗄️ SQL' },
              { id: 'web', label: '🌐 Web' },
              { id: 'linux', label: '🐧 Linux' },
              { id: 'vb', label: '🔷 VB' },
            ] as const).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleLanguageChange(id as SupportedLanguage)}
                style={{
                  padding: '7px 12px',
                  borderRadius: '8px',
                  border: 'none',
                  background: selectedLang === id ? 'rgba(56, 189, 248, 0.25)' : 'transparent',
                  color: selectedLang === id ? '#38bdf8' : '#94a3b8',
                  fontWeight: selectedLang === id ? 700 : 500,
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Run Button */}
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="tactile-btn tactile-btn-primary"
            style={{
              padding: '10px 22px',
              fontSize: '0.95rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: isRunning ? 'not-allowed' : 'pointer',
              opacity: isRunning ? 0.7 : 1,
            }}
          >
            <Play size={16} fill="currentColor" />
            <span>{isRunning ? '실행 중...' : '코드 실행 (Run)'}</span>
          </button>
        </div>
      </div>

      {/* Editor & Terminal Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '20px',
        minHeight: '620px',
      }}>
        {/* Left: Code Editor Pane */}
        <div style={{
          background: 'rgba(11, 19, 41, 0.95)',
          border: '1.5px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        }}>
          {/* Editor Header Toolbar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 18px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Code2 size={16} color="#38bdf8" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                main.{selectedLang === 'python' ? 'py' : selectedLang === 'c' ? 'c' : selectedLang === 'vb' ? 'vb' : selectedLang === 'linux' ? 'sh' : 'txt'}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                (자유롭게 편집 가능)
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setShowStdin(!showStdin)}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: showStdin ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                  color: showStdin ? '#38bdf8' : '#94a3b8',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                표준입력(stdin) {showStdin ? '숨기기' : '열기'}
              </button>
              <button
                onClick={handleCopy}
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'transparent',
                  color: '#94a3b8',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                <span>{copied ? '복사됨' : '복사'}</span>
              </button>
              <button
                onClick={handleReset}
                title="기본 코드로 초기화"
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'transparent',
                  color: '#94a3b8',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <RotateCcw size={13} />
                <span>리셋</span>
              </button>
            </div>
          </div>

          {/* Stdin Area (Optional) */}
          {showStdin && (
            <div style={{ padding: '10px 18px', background: 'rgba(0, 0, 0, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.78rem', color: '#38bdf8', marginBottom: '4px', fontWeight: 600 }}>
                표준 입력값 (Standard Input - input() 또는 scanf 호출 시 전달)
              </div>
              <input
                type="text"
                placeholder="입력할 값을 적어주세요 (엔터로 구분)"
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(15, 23, 42, 0.9)',
                  color: '#f8fafc',
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                }}
              />
            </div>
          )}

          {/* Code Textarea Editor */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => {
              if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                handleRun();
              }
            }}
            spellCheck={false}
            style={{
              flex: 1,
              width: '100%',
              minHeight: '480px',
              padding: '20px',
              background: 'transparent',
              color: '#f8fafc',
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '0.96rem',
              lineHeight: 1.6,
              border: 'none',
              outline: 'none',
              resize: 'none',
              whiteSpace: 'pre',
            }}
          />
        </div>

        {/* Right: Live Execution Output Pane */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1.5px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        }}>
          {/* Terminal Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 18px',
            background: 'rgba(0, 0, 0, 0.35)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TerminalIcon size={16} color="#10b981" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                실행 결과 터미널 (Terminal Output)
              </span>
            </div>

            {executionTime !== null && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem' }}>
                <span style={{ color: exitCode === 0 ? '#10b981' : '#f43f5e', fontWeight: 700 }}>
                  {exitCode === 0 ? '● Exit 0' : `● Exit ${exitCode}`}
                </span>
                <span style={{ color: '#64748b' }}>·</span>
                <span style={{ color: '#94a3b8' }}>{executionTime}ms</span>
              </div>
            )}
          </div>

          {/* Web Preview Mode */}
          {selectedLang === 'web' ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.02)', fontSize: '0.75rem', color: '#64748b' }}>
                실시간 웹 렌더링 화면 (Sandboxed Iframe)
              </div>
              <iframe
                title="Web Preview"
                srcDoc={code}
                sandbox="allow-scripts"
                style={{
                  flex: 1,
                  width: '100%',
                  minHeight: '440px',
                  border: 'none',
                  background: '#0b1329',
                }}
              />
            </div>
          ) : (
            /* Terminal Standard Output */
            <div style={{
              flex: 1,
              padding: '20px',
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '0.92rem',
              lineHeight: 1.6,
              overflowY: 'auto',
              whiteSpace: 'pre-wrap',
            }}>
              {stdout && (
                <div style={{ color: '#38bdf8', marginBottom: stderr ? '16px' : 0 }}>
                  {stdout}
                </div>
              )}
              {stderr && (
                <div style={{ color: '#f43f5e', background: 'rgba(244, 63, 94, 0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
                  <div style={{ fontWeight: 800, marginBottom: '4px' }}>⚠️ 실행 에러 / 경고:</div>
                  {stderr}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
