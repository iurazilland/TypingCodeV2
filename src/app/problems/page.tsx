'use client';

import React, { useState, useEffect } from 'react';
import { CheckSquare, Play, Sparkles, CheckCircle2, XCircle, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';
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
    <div style={{ maxWidth: '1560px', margin: '0 auto', padding: '32px 40px 80px', color: '#0f172a' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.6rem' }}>🎯</span>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
            {language === 'ko' ? '알고리즘 & 미션 문제 풀이' : 'Problem Solving & Coding Quizzes'}
          </h1>
          <span style={{
            fontSize: '0.73rem',
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: '12px',
            background: '#ffffff',
            color: '#059669',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
          }}>
            PRACTICE MISSIONS
          </span>
        </div>
        <p style={{ color: '#475569', fontSize: '0.96rem', margin: 0, fontWeight: 500 }}>
          {language === 'ko'
            ? '문제를 읽고 조건에 맞는 코드를 작성하여 테스트 케이스를 통과시켜보세요. 실전 코딩 사고력을 기를 수 있습니다.'
            : 'Read problem requirements, write code, and pass test cases to sharpen your programming problem solving.'}
        </p>
      </div>

      {/* Main Grid: Problem Selector + Problem Detail & Editor */}
      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '22px' }}>
        {/* Left: Problem List Sidebar */}
        <div style={{
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '20px',
          padding: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxHeight: '740px',
          overflowY: 'auto',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#475569', padding: '0 6px 8px', borderBottom: '1px solid #e2e8f0' }}>
            문제 목록 ({PROBLEMS.length}개)
          </div>

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
                  padding: '14px 16px',
                  borderRadius: '12px',
                  boxSizing: 'border-box',
                  border: isSelected ? '2px solid #0891b2' : '2px solid #e2e8f0',
                  background: isSelected ? 'rgba(8, 145, 178, 0.1)' : '#f8fafc',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease, border-color 0.15s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.92rem', fontWeight: 800, color: isSelected ? '#0e7490' : '#0f172a', marginBottom: '4px' }}>
                    <span>#{p.id}. {p.title}</span>
                    {solvedIds.has(p.id) && (
                      <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                    )}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                    {p.category}
                  </div>
                </div>

                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '3px 8px',
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
            padding: '24px 28px',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                #{selectedProblem.id}. {selectedProblem.title}
              </h2>
              <span style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '8px',
                background: `${selectedProblem.diffColor}16`,
                color: selectedProblem.diffColor,
                border: `1px solid ${selectedProblem.diffColor}40`,
              }}>
                {selectedProblem.difficulty}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                분류: {selectedProblem.category}
              </span>
            </div>

            <p style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '16px', fontWeight: 500 }}>
              {selectedProblem.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '14px 18px', borderRadius: '12px' }}>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0284c7', marginBottom: '4px' }}>예제 입력 1</div>
                <pre style={{ margin: 0, fontSize: '0.9rem', fontFamily: 'var(--font-mono), monospace', color: '#0f172a', fontWeight: 600 }}>{selectedProblem.sampleInput}</pre>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#059669', marginBottom: '4px' }}>예제 출력 1</div>
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
              padding: '12px 20px',
              background: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
            }}>
              <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
                🐍 Python 3.10 코드 작성
              </span>

              <button
                onClick={handleTestAndSubmit}
                disabled={isGrading}
                className="tactile-btn tactile-btn-primary"
                style={{
                  padding: '9px 20px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Play size={15} fill="currentColor" />
                <span>{isGrading ? '채점 진행 중...' : '제출 및 채점하기 (Submit)'}</span>
              </button>
            </div>

            {/* Code Textarea */}
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              spellCheck={false}
              style={{
                width: '100%',
                height: '240px',
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
                padding: '16px 20px',
                borderTop: '1px solid #e2e8f0',
                background: resultStatus === 'pass' ? '#ecfdf5' : '#fef2f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {resultStatus === 'pass' ? (
                    <>
                      <CheckCircle2 size={24} color="#059669" />
                      <div>
                        <div style={{ fontWeight: 800, color: '#059669', fontSize: '0.95rem' }}>정답입니다! (Accepted 🎉)</div>
                        <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>예제 테스트 케이스를 완벽하게 통과했습니다.</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle size={24} color="#dc2626" />
                      <div>
                        <div style={{ fontWeight: 800, color: '#dc2626', fontSize: '0.95rem' }}>오답 또는 런타임 에러 (Wrong Answer)</div>
                        <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>
                          실제 출력값: <code style={{ color: '#b91c1c', fontWeight: 700 }}>{actualOutput || '(빈 출력)'}</code> | 정답: <code style={{ color: '#0f172a', fontWeight: 700 }}>{selectedProblem.sampleOutput}</code>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {resultStatus === 'pass' && (
                  <span style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 800 }}>
                    +100 XP 획득!
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
