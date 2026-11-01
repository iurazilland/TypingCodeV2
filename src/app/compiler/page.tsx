'use client';

import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal as TerminalIcon, Code2 } from 'lucide-react';
import { executeCode } from '@/lib/runner';
import { SupportedLanguage } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

const FILE_EXTENSIONS: Record<SupportedLanguage, string> = {
  python: 'py',
  c: 'c',
  cpp: 'cpp',
  csharp: 'cs',
  go: 'go',
  rust: 'rs',
  java: 'java',
  swift: 'swift',
  javascript: 'js',
  sql: 'sql',
  web: 'html',
  linux: 'sh',
  vb: 'vb',
};

const DEFAULT_SNIPPETS: Record<SupportedLanguage, string> = {
  python: `squares = [x ** 2 for x in range(1, 6)]
print("1~5 제곱:", squares)
print("합계:", sum(squares))
`,
  c: `#include <stdio.h>

int main() {
    int a = 15, b = 27;
    printf("%d + %d = %d\\n", a, b, a + b);
    return 0;
}
`,
  cpp: `#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::vector<int> nums = {10, 20, 30, 40, 50};
    std::cout << "합계: " << std::accumulate(nums.begin(), nums.end(), 0) << std::endl;
    return 0;
}
`,
  csharp: `using System;
using System.Linq;

class Program {
    static void Main() {
        var scores = new int[] { 85, 92, 78, 95, 88 };
        Console.WriteLine($"최고: {scores.Max()} / 평균: {scores.Average()}");
    }
}
`,
  go: `package main

import "fmt"

func main() {
    langs := []string{"Go", "Python", "Rust"}
    for i, lang := range langs {
        fmt.Printf("%d. %s\\n", i+1, lang)
    }
}
`,
  rust: `fn main() {
    let numbers = [1, 2, 3, 4, 5];
    let sum: i32 = numbers.iter().sum();
    println!("합계: {}", sum);
}
`,
  java: `class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 5; i++) sum += i;
        System.out.println("1~5 합계: " + sum);
    }
}
`,
  swift: `import Foundation

let nums = [10, 20, 30]
print("합계:", nums.reduce(0, +))
`,
  javascript: `const fruits = ["사과", "바나나", "체리"];
console.log(fruits.map((f, i) => \`\${i + 1}. \${f}\`).join(", "));
`,
  sql: `CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    score INTEGER
);

INSERT INTO students VALUES (1, '김코딩', 95), (2, '박파이', 88), (3, '이고랭', 92);

SELECT name, score FROM students WHERE score >= 90 ORDER BY score DESC;
`,
  web: `<div class="card">
  <h2>Web Preview</h2>
  <button onclick="changeColor()">색상 변경</button>
</div>

<style>
  body { font-family: sans-serif; background: #f8fafc; color: #0f172a; padding: 24px; }
  .card { background: #ffffff; padding: 24px; border-radius: 16px; border: 2px solid #cbd5e1; max-width: 320px; text-align: center; }
  h2 { color: #0284c7; margin: 0 0 12px; }
  button { padding: 9px 16px; border-radius: 9px; border: none; background: #10b981; color: #fff; font-weight: bold; cursor: pointer; }
</style>

<script>
  function changeColor() {
    const colors = ['#0284c7', '#059669', '#d97706', '#db2777', '#7c3aed'];
    const c = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.card').style.borderColor = c;
    document.querySelector('h2').style.color = c;
  }
</script>
`,
  linux: `#!/bin/bash
echo "User: $(whoami)"
echo "Date: $(date)"
ls -la
`,
  vb: `Imports System

Module Program
    Sub Main()
        For i As Integer = 1 To 5
            Console.WriteLine($"Step {i}")
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
  const [stdout, setStdout] = useState('');
  const [stderr, setStderr] = useState('');
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [exitCode, setExitCode] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setSelectedLang(lang);
    setCode(DEFAULT_SNIPPETS[lang]);
    setStdout('');
    setStderr('');
    setExecutionTime(null);
    setExitCode(null);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setStdout('');
    setStderr('');

    try {
      const res = await executeCode(selectedLang, code, stdin);
      setStdout(res.stdout || (res.exitCode === 0 ? '(출력 없음)' : ''));
      setStderr(res.stderr);
      setExecutionTime(res.executionTimeMs ?? null);
      setExitCode(res.exitCode);
    } catch (err: any) {
      setStderr(err.message || '실행 오류가 발생했습니다.');
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
    setStdout('');
    setStderr('');
    setExecutionTime(null);
    setExitCode(null);
  };

  return (
    <div style={{ maxWidth: '1560px', margin: '0 auto', padding: '28px 40px 80px', color: '#0f172a' }}>
      {/* Minimal Single-Row Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '14px' }}>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
          {uiLang === 'ko' ? '컴파일러' : 'Compiler'}
        </h1>

        {/* Language Tabs & Run Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#ffffff',
            padding: '4px',
            borderRadius: '13px',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            overflowX: 'auto',
            maxWidth: '780px',
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
                  padding: '6px 11px',
                  borderRadius: '9px',
                  border: 'none',
                  background: selectedLang === id ? 'rgba(8, 145, 178, 0.14)' : 'transparent',
                  color: selectedLang === id ? '#0891b2' : '#475569',
                  fontWeight: selectedLang === id ? 800 : 600,
                  fontSize: '0.83rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease, color 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="tactile-btn tactile-btn-primary"
            style={{
              padding: '9px 20px',
              fontSize: '0.9rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              cursor: isRunning ? 'not-allowed' : 'pointer',
              opacity: isRunning ? 0.7 : 1,
            }}
          >
            <Play size={15} fill="currentColor" />
            <span>{isRunning ? '실행 중...' : '실행'}</span>
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
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        }}>
          {/* Editor Header Toolbar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 18px',
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <Code2 size={15} color="#0891b2" />
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-mono), monospace' }}>
                main.{FILE_EXTENSIONS[selectedLang]}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={() => setShowStdin(!showStdin)}
                style={{
                  padding: '5px 10px',
                  borderRadius: '8px',
                  border: showStdin ? '1px solid rgba(8, 145, 178, 0.4)' : '1px solid #cbd5e1',
                  background: showStdin ? 'rgba(8, 145, 178, 0.12)' : '#ffffff',
                  color: showStdin ? '#0891b2' : '#475569',
                  fontSize: '0.77rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                입력값
              </button>
              <button
                onClick={handleCopy}
                style={{
                  padding: '5px 9px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#475569',
                  fontSize: '0.77rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {copied ? <Check size={13} color="#059669" /> : <Copy size={13} />}
                <span>{copied ? '복사됨' : '복사'}</span>
              </button>
              <button
                onClick={handleReset}
                style={{
                  padding: '5px 9px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#475569',
                  fontSize: '0.77rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <RotateCcw size={13} />
                <span>초기화</span>
              </button>
            </div>
          </div>

          {/* Stdin Area (Optional) */}
          {showStdin && (
            <div style={{ padding: '10px 18px', background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
              <input
                type="text"
                placeholder="표준 입력값 (stdin)"
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1.5px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono), monospace',
                  outline: 'none',
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
              minHeight: '500px',
              padding: '20px',
              background: '#ffffff',
              color: '#0f172a',
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontVariantLigatures: 'none',
              fontFeatureSettings: '"liga" 0, "calt" 0',
              fontSize: '0.96rem',
              lineHeight: 1.65,
              border: 'none',
              outline: 'none',
              resize: 'none',
              whiteSpace: 'pre',
            }}
          />
        </div>

        {/* Right: Live Execution Output Pane */}
        <div style={{
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        }}>
          {/* Terminal Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 18px',
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <TerminalIcon size={15} color="#059669" />
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>
                {selectedLang === 'web' ? '미리보기' : '실행 결과'}
              </span>
            </div>

            {executionTime !== null && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.77rem' }}>
                <span style={{ color: exitCode === 0 ? '#059669' : '#dc2626', fontWeight: 800 }}>
                  {exitCode === 0 ? '● Exit 0' : `● Exit ${exitCode}`}
                </span>
                <span style={{ color: '#94a3b8' }}>·</span>
                <span style={{ color: '#64748b', fontWeight: 600 }}>{executionTime}ms</span>
              </div>
            )}
          </div>

          {/* Web Preview Mode */}
          {selectedLang === 'web' ? (
            <iframe
              title="Web Preview"
              srcDoc={code}
              sandbox="allow-scripts"
              style={{
                flex: 1,
                width: '100%',
                minHeight: '500px',
                border: 'none',
                background: '#f8fafc',
              }}
            />
          ) : (
            /* Terminal Standard Output */
            <div style={{
              flex: 1,
              padding: '20px',
              background: '#fcfdfe',
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontVariantLigatures: 'none',
              fontFeatureSettings: '"liga" 0, "calt" 0',
              fontSize: '0.92rem',
              lineHeight: 1.65,
              overflowY: 'auto',
              whiteSpace: 'pre-wrap',
            }}>
              {isRunning && (
                <div style={{ color: '#64748b', fontWeight: 600 }}>실행 중...</div>
              )}
              {!isRunning && !stdout && !stderr && (
                <div style={{ color: '#94a3b8', fontWeight: 500 }}>
                  실행 결과가 여기에 표시됩니다.
                </div>
              )}
              {stdout && (
                <div style={{ color: '#0f172a', fontWeight: 600, marginBottom: stderr ? '14px' : 0 }}>
                  {stdout}
                </div>
              )}
              {stderr && (
                <div style={{ color: '#dc2626', background: '#fef2f2', padding: '12px 14px', borderRadius: '10px', border: '1px solid #fecaca', fontWeight: 600 }}>
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
