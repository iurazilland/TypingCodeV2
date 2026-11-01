'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Check, CheckCircle2, Play, RotateCcw, Send, XCircle } from 'lucide-react';
import { executeCode } from '@/lib/runner';
import { useLanguage } from '@/lib/LanguageContext';
import {
  fetchSolvedProblemsData,
  recordProblemSolve,
} from '@/lib/progressSync';
import CodeEditorArea from '@/components/CodeEditorArea';
import {
  getStarterSkeleton,
  JUDGE_LANGUAGES,
  PROBLEMS_BANK,
  type JudgeLanguage,
  type JudgeProblem,
} from '@/data/problemsBank';

type FilterMode = 'all' | '입문' | '중급' | '심화' | 'unsolved';

interface CaseVerdict {
  index: number;
  isSample: boolean;
  passed: boolean;
  actual: string;
  expected: string;
  stderr: string;
  timeMs: number;
}

function normalizeJudgeOutput(text: string): string {
  return text
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trim();
}

function getDraftKey(problemId: number, lang: JudgeLanguage): string {
  return `problem_draft_v2_${problemId}_${lang}`;
}

export default function ProblemsPage() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [selectedProblem, setSelectedProblem] = useState<JudgeProblem>(PROBLEMS_BANK[0]);
  const [judgeLang, setJudgeLang] = useState<JudgeLanguage>('python');
  const [userCode, setUserCode] = useState<string>(() =>
    getStarterSkeleton('python')
  );

  const [solvedIds, setSolvedIds] = useState<Set<number>>(new Set());
  const [solutionsByProblem, setSolutionsByProblem] = useState<
    Record<number, Record<string, string>>
  >({});

  const [busyMode, setBusyMode] = useState<'idle' | 'sample' | 'submit'>('idle');
  const [verdictMode, setVerdictMode] = useState<'idle' | 'sample' | 'submit'>('idle');
  const [caseVerdicts, setCaseVerdicts] = useState<CaseVerdict[]>([]);

  const resolveInitialCode = useCallback(
    (
      problemId: number,
      lang: JudgeLanguage,
      dbSolutions: Record<number, Record<string, string>>
    ): string => {
      if (typeof window !== 'undefined') {
        const draft = localStorage.getItem(getDraftKey(problemId, lang));
        if (draft && draft.trim()) {
          return draft;
        }
      }
      const savedAccepted = dbSolutions[problemId]?.[lang];
      if (savedAccepted && savedAccepted.trim()) {
        return savedAccepted;
      }
      return getStarterSkeleton(lang);
    },
    []
  );

  useEffect(() => {
    let mounted = true;
    fetchSolvedProblemsData().then(({ solvedIds: ids, solutionsByProblem: map }) => {
      if (!mounted) return;
      if (ids.length > 0) {
        setSolvedIds(new Set(ids));
      }
      setSolutionsByProblem(map);
      setUserCode(resolveInitialCode(PROBLEMS_BANK[0].id, 'python', map));
    });
    return () => {
      mounted = false;
    };
  }, [resolveInitialCode]);

  const handleCodeChange = (next: string) => {
    setUserCode(next);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(getDraftKey(selectedProblem.id, judgeLang), next);
      } catch {
        // Non-fatal
      }
    }
  };

  const handleSelectProblem = (p: JudgeProblem) => {
    setSelectedProblem(p);
    setUserCode(resolveInitialCode(p.id, judgeLang, solutionsByProblem));
    setVerdictMode('idle');
    setCaseVerdicts([]);
  };

  const handleSelectLang = (nextLang: JudgeLanguage) => {
    setJudgeLang(nextLang);
    setUserCode(resolveInitialCode(selectedProblem.id, nextLang, solutionsByProblem));
    setVerdictMode('idle');
    setCaseVerdicts([]);
  };

  const handleResetCode = () => {
    const skeleton = getStarterSkeleton(judgeLang);
    setUserCode(skeleton);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(getDraftKey(selectedProblem.id, judgeLang));
    }
    setVerdictMode('idle');
    setCaseVerdicts([]);
  };

  const handleLoadAcceptedCode = () => {
    const saved = solutionsByProblem[selectedProblem.id]?.[judgeLang];
    if (!saved) return;
    setUserCode(saved);
    if (typeof window !== 'undefined') {
      localStorage.setItem(getDraftKey(selectedProblem.id, judgeLang), saved);
    }
  };

  const handleRunSample = async () => {
    if (busyMode !== 'idle') return;
    setBusyMode('sample');
    setVerdictMode('idle');
    setCaseVerdicts([]);

    const sample = selectedProblem.testCases[0];
    try {
      const res = await executeCode(judgeLang, userCode, sample.input + '\n');
      const actual = normalizeJudgeOutput(res.stdout || '');
      const expected = normalizeJudgeOutput(sample.output);
      const passed = res.exitCode === 0 && actual === expected;

      setCaseVerdicts([
        {
          index: 1,
          isSample: true,
          passed,
          actual,
          expected,
          stderr: res.stderr || '',
          timeMs: res.executionTimeMs ?? 0,
        },
      ]);
      setVerdictMode('sample');
    } finally {
      setBusyMode('idle');
    }
  };

  const handleSubmitJudge = async () => {
    if (busyMode !== 'idle') return;
    setBusyMode('submit');
    setVerdictMode('idle');
    setCaseVerdicts([]);

    const cases = selectedProblem.testCases;
    try {
      // 1) Run Case 1 first to short-circuit compile/syntax errors without wasting sandbox calls
      const firstRes = await executeCode(
        judgeLang,
        userCode,
        cases[0].input + '\n'
      );
      const firstActual = normalizeJudgeOutput(firstRes.stdout || '');
      const firstExpected = normalizeJudgeOutput(cases[0].output);
      const firstPassed = firstRes.exitCode === 0 && firstActual === firstExpected;

      const firstVerdict: CaseVerdict = {
        index: 1,
        isSample: true,
        passed: firstPassed,
        actual: firstActual,
        expected: firstExpected,
        stderr: firstRes.stderr || '',
        timeMs: firstRes.executionTimeMs ?? 0,
      };

      // Stop early on compile/runtime error
      if (firstRes.exitCode !== 0 && firstRes.stderr) {
        setCaseVerdicts([firstVerdict]);
        setVerdictMode('submit');
        return;
      }

      // 2) Run hidden test cases in parallel
      const restVerdicts = await Promise.all(
        cases.slice(1).map(async (tc, idx) => {
          const res = await executeCode(judgeLang, userCode, tc.input + '\n');
          const actual = normalizeJudgeOutput(res.stdout || '');
          const expected = normalizeJudgeOutput(tc.output);
          return {
            index: idx + 2,
            isSample: false,
            passed: res.exitCode === 0 && actual === expected,
            actual,
            expected,
            stderr: res.stderr || '',
            timeMs: res.executionTimeMs ?? 0,
          } satisfies CaseVerdict;
        })
      );

      const allVerdicts = [firstVerdict, ...restVerdicts];
      setCaseVerdicts(allVerdicts);
      setVerdictMode('submit');

      const allPassed = allVerdicts.every((v) => v.passed);
      if (allPassed) {
        const maxTimeMs = Math.max(...allVerdicts.map((v) => v.timeMs), 0);
        setSolvedIds((prev) => new Set(prev).add(selectedProblem.id));
        setSolutionsByProblem((prev) => ({
          ...prev,
          [selectedProblem.id]: {
            ...(prev[selectedProblem.id] || {}),
            [judgeLang]: userCode,
          },
        }));
        void recordProblemSolve(
          selectedProblem.id,
          judgeLang,
          userCode,
          maxTimeMs
        );
      }
    } finally {
      setBusyMode('idle');
    }
  };

  const filteredProblems = useMemo(() => {
    return PROBLEMS_BANK.filter((p) => {
      if (filterMode === 'all') return true;
      if (filterMode === 'unsolved') return !solvedIds.has(p.id);
      return p.difficulty === filterMode;
    });
  }, [filterMode, solvedIds]);

  const sampleCase = selectedProblem.testCases[0];
  const hasSavedSolutionForLang = Boolean(
    solutionsByProblem[selectedProblem.id]?.[judgeLang]
  );

  const allPassed =
    caseVerdicts.length > 0 && caseVerdicts.every((v) => v.passed);
  const firstFailed = caseVerdicts.find((v) => !v.passed) || null;
  const maxExecMs =
    caseVerdicts.length > 0
      ? Math.max(...caseVerdicts.map((v) => v.timeMs))
      : 0;

  return (
    <div style={{ maxWidth: '1560px', margin: '0 auto', padding: '28px 36px 80px', color: '#0f172a' }}>
      {/* Minimal Single-Row Header: Title + Filters + Solved Counter */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
          {isKo ? '문제풀이' : 'Problems'}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'inline-flex',
              gap: '4px',
              padding: '4px',
              borderRadius: '12px',
              background: '#ffffff',
              border: '1.5px solid #cbd5e1',
            }}
          >
            {(
              [
                { id: 'all', label: isKo ? '전체' : 'All' },
                { id: '입문', label: isKo ? '입문' : 'Easy' },
                { id: '중급', label: isKo ? '중급' : 'Medium' },
                { id: '심화', label: isKo ? '심화' : 'Hard' },
                { id: 'unsolved', label: isKo ? '미해결' : 'Unsolved' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterMode(tab.id)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: 'none',
                  background:
                    filterMode === tab.id ? 'rgba(8, 145, 178, 0.14)' : 'transparent',
                  color: filterMode === tab.id ? '#0891b2' : '#475569',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              padding: '7px 13px',
              borderRadius: '11px',
              background: '#ffffff',
              color: '#059669',
              border: '1.5px solid #cbd5e1',
            }}
          >
            {isKo
              ? `${solvedIds.size} / ${PROBLEMS_BANK.length} 해결`
              : `${solvedIds.size} / ${PROBLEMS_BANK.length} Solved`}
          </span>
        </div>
      </div>

      {/* Main Grid: Problem List + Problem Detail & Code Judge */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '20px', alignItems: 'start' }}>
        {/* Left: Problem List Sidebar */}
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '20px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
            maxHeight: '760px',
            overflowY: 'auto',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          }}
        >
          {filteredProblems.length === 0 ? (
            <div style={{ padding: '28px 12px', textAlign: 'center', color: '#64748b', fontSize: '0.86rem', fontWeight: 600 }}>
              {isKo ? '해당 조건의 문제가 없습니다.' : 'No matching problems.'}
            </div>
          ) : (
            filteredProblems.map((p) => {
              const isSelected = selectedProblem.id === p.id;
              const isSolved = solvedIds.has(p.id);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectProblem(p)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    padding: '11px 13px',
                    borderRadius: '11px',
                    boxSizing: 'border-box',
                    border: isSelected ? '2px solid #0891b2' : '2px solid #e2e8f0',
                    background: isSelected ? 'rgba(8, 145, 178, 0.1)' : '#f8fafc',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease, border-color 0.15s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: isSelected ? '#0e7490' : '#0f172a',
                      minWidth: 0,
                    }}
                  >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {p.id}. {p.title}
                    </span>
                    {isSolved && (
                      <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0 }} />
                    )}
                  </div>

                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: '0.71rem',
                      fontWeight: 800,
                      padding: '2px 7px',
                      borderRadius: '7px',
                      background: `${p.diffColor}16`,
                      color: p.diffColor,
                      border: `1px solid ${p.diffColor}40`,
                    }}
                  >
                    {p.difficulty}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Right: Problem Statement & Multi-Language Judge */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>
          {/* Problem Statement Card */}
          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid #cbd5e1',
              borderRadius: '20px',
              padding: '20px 24px',
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                {selectedProblem.id}. {selectedProblem.title}
              </h2>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '7px',
                  background: `${selectedProblem.diffColor}16`,
                  color: selectedProblem.diffColor,
                  border: `1px solid ${selectedProblem.diffColor}40`,
                }}
              >
                {selectedProblem.difficulty}
              </span>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '7px',
                  background: '#f1f5f9',
                  color: '#475569',
                }}
              >
                {selectedProblem.category}
              </span>
            </div>

            <p style={{ color: '#1e293b', fontSize: '0.94rem', lineHeight: 1.6, margin: '0 0 12px', fontWeight: 500 }}>
              {selectedProblem.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.82rem', color: '#475569', marginBottom: '14px' }}>
              <div>
                <strong style={{ color: '#0f172a' }}>입력:</strong> {selectedProblem.inputDesc}
              </div>
              <div>
                <strong style={{ color: '#0f172a' }}>출력:</strong> {selectedProblem.outputDesc}
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '12px 16px',
                borderRadius: '12px',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284c7', marginBottom: '4px' }}>
                  예제 입력
                </div>
                <pre
                  style={{
                    margin: 0,
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-mono), monospace',
                    color: '#0f172a',
                    fontWeight: 600,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {sampleCase.input}
                </pre>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#059669', marginBottom: '4px' }}>
                  예제 출력
                </div>
                <pre
                  style={{
                    margin: 0,
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-mono), monospace',
                    color: '#0f172a',
                    fontWeight: 600,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {sampleCase.output}
                </pre>
              </div>
            </div>
          </div>

          {/* Interactive Code Editor & Multi-Testcase Judge Card */}
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
            {/* Editor Toolbar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
                padding: '10px 16px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              {/* Language Switcher */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {JUDGE_LANGUAGES.map((langOpt) => {
                  const active = judgeLang === langOpt.id;
                  const langSolved = Boolean(
                    solutionsByProblem[selectedProblem.id]?.[langOpt.id]
                  );
                  return (
                    <button
                      key={langOpt.id}
                      type="button"
                      onClick={() => handleSelectLang(langOpt.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '5px 11px',
                        borderRadius: '8px',
                        border: active
                          ? '1.5px solid #0891b2'
                          : '1.5px solid #cbd5e1',
                        background: active ? 'rgba(8, 145, 178, 0.12)' : '#ffffff',
                        color: active ? '#0891b2' : '#475569',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                      }}
                    >
                      <span>{langOpt.label}</span>
                      {langSolved && <Check size={12} color="#059669" />}
                    </button>
                  );
                })}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {hasSavedSolutionForLang && (
                  <button
                    type="button"
                    onClick={handleLoadAcceptedCode}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '8px',
                      border: '1px solid rgba(5, 150, 105, 0.35)',
                      background: '#ecfdf5',
                      color: '#059669',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    내 통과 코드
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleResetCode}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#475569',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <RotateCcw size={13} />
                  <span>초기화</span>
                </button>

                <button
                  type="button"
                  onClick={() => void handleRunSample()}
                  disabled={busyMode !== 'idle'}
                  style={{
                    padding: '7px 13px',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#0f172a',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    cursor: busyMode !== 'idle' ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    opacity: busyMode !== 'idle' ? 0.65 : 1,
                  }}
                >
                  <Play size={13} />
                  <span>{busyMode === 'sample' ? '실행 중...' : '예제 실행'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => void handleSubmitJudge()}
                  disabled={busyMode !== 'idle'}
                  className="tactile-btn tactile-btn-primary"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: busyMode !== 'idle' ? 'not-allowed' : 'pointer',
                    opacity: busyMode !== 'idle' ? 0.65 : 1,
                  }}
                >
                  <Send size={13} />
                  <span>{busyMode === 'submit' ? '채점 중...' : '채점하기'}</span>
                </button>
              </div>
            </div>

            {/* Lightweight IDE Editor with Line Numbers & Tab Indentation */}
            <CodeEditorArea
              value={userCode}
              onChange={handleCodeChange}
              onRunShortcut={() => void handleSubmitJudge()}
              minHeight={310}
              height={320}
            />

            {/* Grading Verdict Banner */}
            {verdictMode !== 'idle' && caseVerdicts.length > 0 && (
              <div
                style={{
                  padding: '14px 18px',
                  borderTop: '1px solid #e2e8f0',
                  background: allPassed ? '#ecfdf5' : '#fef2f2',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {allPassed ? (
                      <>
                        <CheckCircle2 size={19} color="#059669" />
                        <span style={{ fontWeight: 800, color: '#059669', fontSize: '0.92rem' }}>
                          {verdictMode === 'sample'
                            ? '예제 통과'
                            : `정답입니다 (${caseVerdicts.length}/${caseVerdicts.length} 통과)`}
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle size={19} color="#dc2626" />
                        <span style={{ fontWeight: 800, color: '#dc2626', fontSize: '0.92rem' }}>
                          {firstFailed?.stderr
                            ? '컴파일 / 런타임 오류'
                            : verdictMode === 'sample'
                            ? '예제 불일치'
                            : `오답 (테스트케이스 #${firstFailed?.index} 실패)`}
                        </span>
                      </>
                    )}
                  </div>

                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    {maxExecMs}ms
                  </span>
                </div>

                {/* Testcase Pills on Full Submission */}
                {verdictMode === 'submit' && caseVerdicts.length > 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    {caseVerdicts.map((v) => (
                      <span
                        key={v.index}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '3px 9px',
                          borderRadius: '7px',
                          background: v.passed ? '#d1fae5' : '#fee2e2',
                          color: v.passed ? '#047857' : '#b91c1c',
                        }}
                      >
                        {v.isSample ? '예제' : `히든 ${v.index - 1}`} · {v.passed ? '통과' : '실패'}
                      </span>
                    ))}
                  </div>
                )}

                {/* Error or Sample Diff Output */}
                {firstFailed && firstFailed.stderr ? (
                  <pre
                    style={{
                      margin: 0,
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: '#ffffff',
                      border: '1px solid #fecaca',
                      color: '#b91c1c',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono), monospace',
                      whiteSpace: 'pre-wrap',
                      maxHeight: '140px',
                      overflowY: 'auto',
                    }}
                  >
                    {firstFailed.stderr}
                  </pre>
                ) : (
                  firstFailed &&
                  firstFailed.isSample && (
                    <div style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 600 }}>
                      출력:{' '}
                      <code style={{ color: '#b91c1c', fontWeight: 700 }}>
                        {firstFailed.actual || '(출력 없음)'}
                      </code>{' '}
                      · 정답:{' '}
                      <code style={{ color: '#0f172a', fontWeight: 700 }}>
                        {firstFailed.expected}
                      </code>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
