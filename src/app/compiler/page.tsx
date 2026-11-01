'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Check,
  Code2,
  Copy,
  Download,
  FolderOpen,
  Play,
  RotateCcw,
  Save,
  Terminal as TerminalIcon,
  Trash2,
  X,
} from 'lucide-react';
import { executeCode } from '@/lib/runner';
import { SupportedLanguage } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';
import CodeEditorArea from '@/components/CodeEditorArea';
import {
  deleteUserSnippet,
  fetchSavedSnippets,
  saveUserSnippet,
} from '@/lib/progressSync';
import type { UserSavedSnippetRow } from '@/lib/supabase/types';

const FILE_NAMES: Record<SupportedLanguage, string> = {
  python: 'main.py',
  c: 'main.c',
  cpp: 'main.cpp',
  csharp: 'Program.cs',
  go: 'main.go',
  rust: 'main.rs',
  java: 'Main.java',
  swift: 'main.swift',
  javascript: 'main.js',
  sql: 'query.sql',
  web: 'index.html',
  linux: 'script.sh',
  vb: 'Program.vb',
};

const LANGUAGE_TABS: ReadonlyArray<{ id: SupportedLanguage; label: string }> = [
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
];

const DEFAULT_SNIPPETS: Record<SupportedLanguage, string> = {
  python: `squares = [x ** 2 for x in range(1, 6)]
print("1~5 제곱:", squares)
print("합계:", sum(squares))
`,
  c: `#include <stdio.h>

int main(void) {
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
  java: `public class Main {
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
    console.log('테마 색상 변경:', c);
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

function getDraftStorageKey(lang: SupportedLanguage): string {
  return `compiler_draft_v2_${lang}`;
}

function buildWebPreviewDoc(rawHtml: string): string {
  const consoleBridge = `<script>
(function(){
  var send = function(level, args) {
    try {
      var text = Array.prototype.slice.call(args).map(function(a){
        return typeof a === 'object' ? JSON.stringify(a) : String(a);
      }).join(' ');
      parent.postMessage({ source: 'tc-web-preview', level: level, text: text }, '*');
    } catch (_) {}
  };
  var origLog = console.log, origErr = console.error;
  console.log = function(){ send('log', arguments); origLog.apply(console, arguments); };
  console.error = function(){ send('error', arguments); origErr.apply(console, arguments); };
  window.addEventListener('error', function(e){ send('error', [e.message]); });
})();
</script>`;
  return consoleBridge + rawHtml;
}

export default function CompilerPage() {
  const { language: uiLang } = useLanguage();
  const isKo = uiLang === 'ko';

  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>('python');
  const [code, setCode] = useState<string>(DEFAULT_SNIPPETS.python);
  const [stdin, setStdin] = useState<string>('');
  const [showStdin, setShowStdin] = useState<boolean>(false);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [stdout, setStdout] = useState<string>('');
  const [stderr, setStderr] = useState<string>('');
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [exitCode, setExitCode] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Web preview live render key + console logs
  const [webRenderKey, setWebRenderKey] = useState<number>(0);
  const [webLogs, setWebLogs] = useState<Array<{ level: string; text: string }>>([]);

  // Cloud Saved Snippets state
  const [savedSnippets, setSavedSnippets] = useState<UserSavedSnippetRow[]>([]);
  const [activeSnippetId, setActiveSnippetId] = useState<string | null>(null);
  const [snippetTitle, setSnippetTitle] = useState<string>('');
  const [showSaveBar, setShowSaveBar] = useState<boolean>(false);
  const [showSnippetsDrawer, setShowSnippetsDrawer] = useState<boolean>(false);
  const [isSavingSnippet, setIsSavingSnippet] = useState<boolean>(false);
  const [saveNotice, setSaveNotice] = useState<string | null>(null);

  const loadDraftOrDefault = useCallback((lang: SupportedLanguage): string => {
    if (typeof window !== 'undefined') {
      const savedDraft = localStorage.getItem(getDraftStorageKey(lang));
      if (savedDraft !== null) {
        return savedDraft;
      }
    }
    return DEFAULT_SNIPPETS[lang];
  }, []);

  useEffect(() => {
    setCode(loadDraftOrDefault('python'));
    fetchSavedSnippets().then((rows) => {
      setSavedSnippets(rows);
    });
  }, [loadDraftOrDefault]);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data && e.data.source === 'tc-web-preview') {
        setWebLogs((prev) => [
          ...prev.slice(-49),
          { level: String(e.data.level || 'log'), text: String(e.data.text || '') },
        ]);
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const handleCodeChange = (nextCode: string) => {
    setCode(nextCode);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(getDraftStorageKey(selectedLang), nextCode);
      } catch {
        // Non-fatal
      }
    }
  };

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setSelectedLang(lang);
    setCode(loadDraftOrDefault(lang));
    setActiveSnippetId(null);
    setSnippetTitle('');
    setStdout('');
    setStderr('');
    setExecutionTime(null);
    setExitCode(null);
    setWebLogs([]);
  };

  const handleRun = async () => {
    if (selectedLang === 'web') {
      setWebLogs([]);
      setWebRenderKey((k) => k + 1);
      return;
    }

    setIsRunning(true);
    setStdout('');
    setStderr('');

    try {
      const res = await executeCode(selectedLang, code, stdin);
      setStdout(res.stdout || (res.exitCode === 0 ? '(출력 없음)' : ''));
      setStderr(res.stderr);
      setExecutionTime(res.executionTimeMs ?? null);
      setExitCode(res.exitCode);
    } catch (err: unknown) {
      setStderr(err instanceof Error ? err.message : '실행 오류가 발생했습니다.');
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

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = FILE_NAMES[selectedLang];
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    const def = DEFAULT_SNIPPETS[selectedLang];
    setCode(def);
    setActiveSnippetId(null);
    setSnippetTitle('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem(getDraftStorageKey(selectedLang));
    }
    setStdout('');
    setStderr('');
    setExecutionTime(null);
    setExitCode(null);
    setWebLogs([]);
  };

  const openSavePrompt = () => {
    if (!snippetTitle.trim()) {
      setSnippetTitle(FILE_NAMES[selectedLang]);
    }
    setShowSaveBar(true);
    setShowSnippetsDrawer(false);
  };

  const handleSaveSnippet = async (asNew = false) => {
    if (isSavingSnippet) return;
    setIsSavingSnippet(true);
    try {
      const saved = await saveUserSnippet({
        id: asNew ? null : activeSnippetId,
        title: snippetTitle.trim() || FILE_NAMES[selectedLang],
        language: selectedLang,
        code,
        stdin,
      });
      if (saved) {
        setActiveSnippetId(saved.id);
        setSnippetTitle(saved.title);
        setSavedSnippets((prev) => [
          saved,
          ...prev.filter((item) => item.id !== saved.id),
        ]);
        setShowSaveBar(false);
        setSaveNotice(isKo ? '저장됨' : 'Saved');
        setTimeout(() => setSaveNotice(null), 1800);
      }
    } finally {
      setIsSavingSnippet(false);
    }
  };

  const handleLoadSnippet = (item: UserSavedSnippetRow) => {
    const lang = (LANGUAGE_TABS.some((t) => t.id === item.language)
      ? item.language
      : 'python') as SupportedLanguage;
    setSelectedLang(lang);
    setCode(item.code);
    setStdin(item.stdin || '');
    setShowStdin(Boolean(item.stdin));
    setActiveSnippetId(item.id);
    setSnippetTitle(item.title);
    setShowSnippetsDrawer(false);
    setStdout('');
    setStderr('');
    setExecutionTime(null);
    setExitCode(null);
    setWebLogs([]);
  };

  const handleDeleteSnippet = async (id: string) => {
    await deleteUserSnippet(id);
    setSavedSnippets((prev) => prev.filter((s) => s.id !== id));
    if (activeSnippetId === id) {
      setActiveSnippetId(null);
      setSnippetTitle('');
    }
  };

  const webSrcDoc = useMemo(() => buildWebPreviewDoc(code), [code]);

  return (
    <div style={{ maxWidth: '1560px', margin: '0 auto', padding: '28px 36px 80px', color: '#0f172a' }}>
      {/* Minimal Single-Row Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '14px',
        }}
      >
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
          {isKo ? '컴파일러' : 'Compiler'}
        </h1>

        {/* Language Tabs & Run Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div
            style={{
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
            }}
          >
            {LANGUAGE_TABS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleLanguageChange(id)}
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
            type="button"
            onClick={() => void handleRun()}
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.22fr 1fr',
          gap: '20px',
          minHeight: '620px',
        }}
      >
        {/* Left: Code Editor Pane */}
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          }}
        >
          {/* Editor Header Toolbar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '8px',
              padding: '10px 16px',
              background: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <Code2 size={15} color="#0891b2" />
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-mono), monospace' }}>
                {snippetTitle.trim() ? snippetTitle : FILE_NAMES[selectedLang]}
              </span>
              {saveNotice && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '2px 7px',
                    borderRadius: '6px',
                    background: '#d1fae5',
                    color: '#047857',
                  }}
                >
                  {saveNotice}
                </span>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              {selectedLang !== 'web' && (
                <button
                  type="button"
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
              )}

              <button
                type="button"
                onClick={openSavePrompt}
                style={{
                  padding: '5px 10px',
                  borderRadius: '8px',
                  border: showSaveBar ? '1px solid rgba(8, 145, 178, 0.4)' : '1px solid #cbd5e1',
                  background: showSaveBar ? 'rgba(8, 145, 178, 0.12)' : '#ffffff',
                  color: showSaveBar ? '#0891b2' : '#475569',
                  fontSize: '0.77rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Save size={13} />
                <span>저장</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowSnippetsDrawer(!showSnippetsDrawer);
                  setShowSaveBar(false);
                }}
                style={{
                  padding: '5px 10px',
                  borderRadius: '8px',
                  border: showSnippetsDrawer ? '1px solid rgba(8, 145, 178, 0.4)' : '1px solid #cbd5e1',
                  background: showSnippetsDrawer ? 'rgba(8, 145, 178, 0.12)' : '#ffffff',
                  color: showSnippetsDrawer ? '#0891b2' : '#475569',
                  fontSize: '0.77rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <FolderOpen size={13} />
                <span>내 코드{savedSnippets.length > 0 ? ` (${savedSnippets.length})` : ''}</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                title="파일 다운로드"
                style={{
                  padding: '5px 9px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#475569',
                  fontSize: '0.77rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Download size={13} />
              </button>

              <button
                type="button"
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {copied ? <Check size={13} color="#059669" /> : <Copy size={13} />}
              </button>

              <button
                type="button"
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <RotateCcw size={13} />
              </button>
            </div>
          </div>

          {/* Inline Cloud Save Bar */}
          {showSaveBar && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: '#f1f5f9',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <input
                type="text"
                value={snippetTitle}
                onChange={(e) => setSnippetTitle(e.target.value)}
                placeholder="코드 제목 입력"
                maxLength={80}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    void handleSaveSnippet(false);
                  }
                }}
                style={{
                  flex: 1,
                  padding: '7px 11px',
                  borderRadius: '8px',
                  border: '1.5px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  outline: 'none',
                }}
              />
              <button
                type="button"
                onClick={() => void handleSaveSnippet(false)}
                disabled={isSavingSnippet}
                style={{
                  padding: '7px 13px',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#0891b2',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                {activeSnippetId ? '덮어쓰기' : '저장'}
              </button>
              {activeSnippetId && (
                <button
                  type="button"
                  onClick={() => void handleSaveSnippet(true)}
                  disabled={isSavingSnippet}
                  style={{
                    padding: '7px 12px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#334155',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  새로 저장
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowSaveBar(false)}
                style={{
                  padding: '6px',
                  borderRadius: '7px',
                  border: 'none',
                  background: 'transparent',
                  color: '#64748b',
                  cursor: 'pointer',
                  display: 'inline-flex',
                }}
              >
                <X size={15} />
              </button>
            </div>
          )}

          {/* Saved Snippets Drawer */}
          {showSnippetsDrawer && (
            <div
              style={{
                maxHeight: '210px',
                overflowY: 'auto',
                padding: '10px 16px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              {savedSnippets.length === 0 ? (
                <div style={{ padding: '12px 4px', fontSize: '0.83rem', color: '#64748b', fontWeight: 600, textAlign: 'center' }}>
                  저장된 코드가 없습니다.
                </div>
              ) : (
                savedSnippets.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      background:
                        activeSnippetId === item.id
                          ? 'rgba(8, 145, 178, 0.1)'
                          : '#ffffff',
                      border:
                        activeSnippetId === item.id
                          ? '1.5px solid #0891b2'
                          : '1px solid #e2e8f0',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleLoadSnippet(item)}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        border: 'none',
                        background: 'transparent',
                        textAlign: 'left',
                        cursor: 'pointer',
                        padding: 0,
                        minWidth: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '2px 7px',
                          borderRadius: '6px',
                          background: '#f1f5f9',
                          color: '#0284c7',
                          textTransform: 'uppercase',
                          flexShrink: 0,
                        }}
                      >
                        {item.language}
                      </span>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.title}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => void handleDeleteSnippet(item.id)}
                      title="삭제"
                      style={{
                        border: 'none',
                        background: 'transparent',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'inline-flex',
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Multi-Line Stdin Area */}
          {showStdin && selectedLang !== 'web' && (
            <div style={{ padding: '10px 16px', background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
              <textarea
                placeholder="표준 입력값 (여러 줄 입력 가능)"
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
                rows={3}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1.5px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>
          )}

          {/* Lightweight IDE Code Editor */}
          <CodeEditorArea
            value={code}
            onChange={handleCodeChange}
            onRunShortcut={() => void handleRun()}
            onSaveShortcut={openSavePrompt}
            minHeight={500}
          />
        </div>

        {/* Right: Live Execution Output Pane */}
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 18px',
              background: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <TerminalIcon size={15} color="#059669" />
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>
                {selectedLang === 'web' ? '미리보기' : '실행 결과'}
              </span>
            </div>

            {selectedLang !== 'web' && executionTime !== null && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.77rem' }}>
                <span style={{ color: exitCode === 0 ? '#059669' : '#dc2626', fontWeight: 800 }}>
                  {exitCode === 0 ? '● Exit 0' : `● Exit ${exitCode}`}
                </span>
                <span style={{ color: '#94a3b8' }}>·</span>
                <span style={{ color: '#64748b', fontWeight: 600 }}>{executionTime}ms</span>
              </div>
            )}
          </div>

          {/* Web Preview Mode (+ Captured Console) */}
          {selectedLang === 'web' ? (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <iframe
                key={webRenderKey}
                title="Web Preview"
                srcDoc={webSrcDoc}
                sandbox="allow-scripts"
                style={{
                  flex: 1,
                  width: '100%',
                  minHeight: webLogs.length > 0 ? '390px' : '500px',
                  border: 'none',
                  background: '#f8fafc',
                }}
              />
              {webLogs.length > 0 && (
                <div
                  style={{
                    maxHeight: '130px',
                    overflowY: 'auto',
                    borderTop: '1px solid #e2e8f0',
                    background: '#f8fafc',
                    padding: '10px 14px',
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: '0.8rem',
                  }}
                >
                  {webLogs.map((entry, idx) => (
                    <div
                      key={idx}
                      style={{
                        color: entry.level === 'error' ? '#dc2626' : '#0f172a',
                        padding: '2px 0',
                      }}
                    >
                      {entry.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Terminal Standard Output */
            <div
              style={{
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
              }}
            >
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
                <div
                  style={{
                    color: '#dc2626',
                    background: '#fef2f2',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid #fecaca',
                    fontWeight: 600,
                  }}
                >
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
