'use client';

import React, { useState, useEffect } from 'react';
import { Play, CheckCircle2, XCircle } from 'lucide-react';
import { executeCode } from '@/lib/runner';
import { useLanguage } from '@/lib/LanguageContext';
import { fetchSolvedProblemIds, recordProblemSolve } from '@/lib/progressSync';

interface Problem {
  id: number;
  title: string;
  difficulty: '입문' | '중급' | '심화';
  diffColor: string;
  category: string;
  description: string;
  inputDesc: string;
  outputDesc: string;
  sampleInput: string;
  sampleOutput: string;
  starterCode: string;
}

const PROBLEMS: Problem[] = [
  {
    id: 1,
    title: '두 수의 합 구하기',
    difficulty: '입문',
    diffColor: '#059669',
    category: '기초 연산',
    description: '두 정수 a와 b를 입력받아 두 수의 합을 출력하는 프로그램을 작성하세요.',
    inputDesc: '첫 번째 줄에 정수 a와 b가 공백으로 구분되어 입력됩니다. (예: 5 7)',
    outputDesc: 'a와 b의 합을 한 줄에 출력합니다.',
    sampleInput: '5 7',
    sampleOutput: '12',
    starterCode: `# 두 수를 입력받아 합을 출력하세요
a, b = map(int, input().split())
print(a + b)
`,
  },
  {
    id: 2,
    title: '짝수와 홀수 판별기',
    difficulty: '입문',
    diffColor: '#059669',
    category: '조건문',
    description: '정수 n을 입력받아 짝수이면 "Even", 홀수이면 "Odd"를 출력하는 프로그램을 작성하세요.',
    inputDesc: '첫 번째 줄에 정수 n이 주어집니다.',
    outputDesc: '짝수면 Even, 홀수면 Odd를 출력합니다.',
    sampleInput: '8',
    sampleOutput: 'Even',
    starterCode: `n = int(input())
# 여기에 조건문을 작성하세요
if n % 2 == 0:
    print("Even")
else:
    print("Odd")
`,
  },
  {
    id: 3,
    title: '1부터 N까지의 합 구하기',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '반복문',
    description: '정수 n이 주어졌을 때, 1부터 n까지의 정수의 합을 구하여 출력하세요.',
    inputDesc: '첫 번째 줄에 정수 n (1 <= n <= 1000)이 주어집니다.',
    outputDesc: '1부터 n까지 합을 출력합니다.',
    sampleInput: '10',
    sampleOutput: '55',
    starterCode: `n = int(input())
# 반복문 또는 수학 공식을 사용해 1부터 n까지의 합을 구하세요
total = sum(range(1, n + 1))
print(total)
`,
  },
  {
    id: 4,
    title: '단어 뒤집기',
    difficulty: '중급',
    diffColor: '#0284c7',
    category: '문자열',
    description: '알파벳 문자열을 입력받아 거꾸로 뒤집어서 출력하는 프로그램을 작성하세요.',
    inputDesc: '첫 번째 줄에 단어가 주어집니다. (예: python)',
    outputDesc: '뒤집힌 단어를 출력합니다. (예: nohtyp)',
    sampleInput: 'python',
    sampleOutput: 'nohtyp',
    starterCode: `word = input().strip()
# 문자열을 뒤집어 출력하세요
print(word[::-1])
`,
  },
  {
    id: 5,
    title: '최댓값과 최솟값 찾기',
    difficulty: '심화',
    diffColor: '#7c3aed',
    category: '자료구조 & 리스트',
    description: '공백으로 구분된 여러 개의 숫자 중 가장 큰 수와 가장 작은 수를 찾아 "최소 최대" 형식으로 출력하세요.',
    inputDesc: '정수 리스트 (예: 20 10 35 30 7)',
    outputDesc: '최솟값과 최댓값을 공백으로 구분하여 출력합니다. (예: 7 35)',
    sampleInput: '20 10 35 30 7',
    sampleOutput: '7 35',
    starterCode: `nums = list(map(int, input().split()))
print(f"{min(nums)} {max(nums)}")
`,
  },
];

export default function ProblemsPage() {
  const { language } = useLanguage();
  const [selectedProblem, setSelectedProblem] = useState<Problem>(PROBLEMS[0]);
  const [userCode, setUserCode] = useState<string>(PROBLEMS[0].starterCode);
  const [isGrading, setIsGrading] = useState<boolean>(false);
  const [resultStatus, setResultStatus] = useState<'idle' | 'pass' | 'fail'>('idle');
  const [actualOutput, setActualOutput] = useState<string>('');
  const [solvedIds, setSolvedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetchSolvedProblemIds().then((ids) => {
      if (ids.length > 0) {
        setSolvedIds(new Set(ids));
      }
    });
  }, []);

  const handleSelectProblem = (p: Problem) => {
    setSelectedProblem(p);
    setUserCode(p.starterCode);
    setResultStatus('idle');
    setActualOutput('');
  };

  const handleTestAndSubmit = async () => {
    setIsGrading(true);
    setResultStatus('idle');
    setActualOutput('');

    try {
      const res = await executeCode('python', userCode, selectedProblem.sampleInput);
      const cleanedActual = (res.stdout || '').trim();
      const cleanedExpected = selectedProblem.sampleOutput.trim();

      setActualOutput(cleanedActual);

      if (cleanedActual === cleanedExpected && res.exitCode === 0) {
        setResultStatus('pass');
        setSolvedIds((prev) => new Set(prev).add(selectedProblem.id));
        void recordProblemSolve(selectedProblem.id, 'python');
      } else {
        setResultStatus('fail');
      }
    } catch (err: any) {
      setActualOutput(err.message || '채점 도중 오류가 발생했습니다.');
      setResultStatus('fail');
    } finally {
      setIsGrading(false);
    }
  };

  return (
    <div style={{ maxWidth: '1560px', margin: '0 auto', padding: '28px 40px 80px', color: '#0f172a' }}>
      {/* Minimal Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
          {language === 'ko' ? '문제풀이' : 'Problems'}
        </h1>
        <span style={{
          fontSize: '0.8rem',
          fontWeight: 800,
          padding: '5px 12px',
          borderRadius: '10px',
          background: '#ffffff',
          color: '#059669',
          border: '1.5px solid #cbd5e1',
        }}>
          {language === 'ko' ? `${solvedIds.size} / ${PROBLEMS.length} 해결` : `${solvedIds.size} / ${PROBLEMS.length} Solved`}
        </span>
      </div>

      {/* Main Grid: Problem Selector + Problem Detail & Editor */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '20px' }}>
        {/* Left: Problem List Sidebar */}
        <div style={{
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '20px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxHeight: '740px',
          overflowY: 'auto',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        }}>
          {PROBLEMS.map((p) => {
            const isSelected = selectedProblem.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectProblem(p)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '13px 14px',
                  borderRadius: '12px',
                  boxSizing: 'border-box',
                  border: isSelected ? '2px solid #0891b2' : '2px solid #e2e8f0',
                  background: isSelected ? 'rgba(8, 145, 178, 0.1)' : '#f8fafc',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease, border-color 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 800, color: isSelected ? '#0e7490' : '#0f172a', minWidth: 0 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {p.id}. {p.title}
                  </span>
                  {solvedIds.has(p.id) && (
                    <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                  )}
                </div>

                <span style={{
                  flexShrink: 0,
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '8px',
                  background: `${p.diffColor}16`,
                  color: p.diffColor,
                  border: `1px solid ${p.diffColor}40`,
                }}>
                  {p.difficulty}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Problem Statement & Live Code Solver */}
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '16px' }}>
          {/* Problem Statement Card */}
          <div style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '20px',
            padding: '22px 26px',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                {selectedProblem.id}. {selectedProblem.title}
              </h2>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '2px 9px',
                borderRadius: '8px',
                background: `${selectedProblem.diffColor}16`,
                color: selectedProblem.diffColor,
                border: `1px solid ${selectedProblem.diffColor}40`,
              }}>
                {selectedProblem.difficulty}
              </span>
            </div>

            <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.55, marginBottom: '16px', fontWeight: 500 }}>
              {selectedProblem.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '12px 16px', borderRadius: '12px' }}>
              <div>
                <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0284c7', marginBottom: '4px' }}>예제 입력</div>
                <pre style={{ margin: 0, fontSize: '0.9rem', fontFamily: 'var(--font-mono), monospace', color: '#0f172a', fontWeight: 600 }}>{selectedProblem.sampleInput}</pre>
              </div>
              <div>
                <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#059669', marginBottom: '4px' }}>예제 출력</div>
                <pre style={{ margin: 0, fontSize: '0.9rem', fontFamily: 'var(--font-mono), monospace', color: '#0f172a', fontWeight: 600 }}>{selectedProblem.sampleOutput}</pre>
              </div>
            </div>
          </div>

          {/* Interactive Code Editor & Submission Card */}
          <div style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          }}>
            {/* Editor Toolbar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 18px',
              background: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
            }}>
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-mono)' }}>
                Python
              </span>

              <button
                onClick={handleTestAndSubmit}
                disabled={isGrading}
                className="tactile-btn tactile-btn-primary"
                style={{
                  padding: '8px 18px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                }}
              >
                <Play size={14} fill="currentColor" />
                <span>{isGrading ? '채점 중...' : '채점하기'}</span>
              </button>
            </div>

            {/* Code Textarea */}
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              spellCheck={false}
              style={{
                width: '100%',
                height: '250px',
                padding: '18px 20px',
                background: '#ffffff',
                color: '#0f172a',
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontVariantLigatures: 'none',
                fontFeatureSettings: '"liga" 0, "calt" 0',
                fontSize: '0.95rem',
                lineHeight: 1.65,
                border: 'none',
                outline: 'none',
                resize: 'none',
              }}
            />

            {/* Test Result Grading Banner */}
            {resultStatus !== 'idle' && (
              <div style={{
                padding: '13px 18px',
                borderTop: '1px solid #e2e8f0',
                background: resultStatus === 'pass' ? '#ecfdf5' : '#fef2f2',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                {resultStatus === 'pass' ? (
                  <>
                    <CheckCircle2 size={20} color="#059669" />
                    <span style={{ fontWeight: 800, color: '#059669', fontSize: '0.92rem' }}>정답입니다</span>
                  </>
                ) : (
                  <>
                    <XCircle size={20} color="#dc2626" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '0.86rem' }}>
                      <span style={{ fontWeight: 800, color: '#dc2626' }}>오답</span>
                      <span style={{ color: '#475569', fontWeight: 600 }}>
                        출력: <code style={{ color: '#b91c1c', fontWeight: 700 }}>{actualOutput || '(없음)'}</code> · 정답: <code style={{ color: '#0f172a', fontWeight: 700 }}>{selectedProblem.sampleOutput}</code>
                      </span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
