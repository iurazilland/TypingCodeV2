'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, ChevronRight, ChevronLeft, X, Code2, Play } from 'lucide-react';

export interface TourStep {
  targetId: string;
  title_ko: string;
  title_en: string;
  description_ko: string;
  description_en: string;
  placement?: 'bottom' | 'right' | 'left' | 'top' | 'inside-top-right';
}

export const TOUR_STEPS: TourStep[] = [
  {
    targetId: 'tour-mission-prompt',
    title_ko: '1. 학습 미션 안내',
    title_en: '1. Mission Objective',
    description_ko: '현재 단계에서 해결해야 할 목표와 지시 사항을 명확히 확인합니다.',
    description_en: 'Review the required goal and output instructions for the current mission.',
    placement: 'bottom',
  },
  {
    targetId: 'tour-step-nav',
    title_ko: '2. 단계별 순차 이동',
    title_en: '2. Step Navigation',
    description_ko: '이전 및 다음 문제로 이동할 수 있으며, 현재 단계를 통과하면 다음 단계 잠금이 자동으로 해제됩니다.',
    description_en: 'Navigate between problems. Successfully passing a step automatically unlocks the next level.',
    placement: 'bottom',
  },
  {
    targetId: 'tour-progress-bar',
    title_ko: '3. 라운드 학습 진행도',
    title_en: '3. Round Progress Bar',
    description_ko: '현재 라운드의 총 10개 문제 중 전체 진행률을 실시간 게이지 바로 확인합니다.',
    description_en: 'Displays your real-time learning progress across the 10 steps of the round.',
    placement: 'bottom',
  },
  {
    targetId: 'tour-hearts-system',
    title_ko: '4. 하트 생명 시스템',
    title_en: '4. Heart Life System',
    description_ko: '문제당 5개의 하트가 주어지며, 오답 제출 시 1개씩 차감됩니다. 모두 소진되면 1단계부터 재도전합니다.',
    description_en: 'You have 5 hearts per round. 1 heart is lost on wrong runs. Depleting all hearts restarts from Step 1.',
    placement: 'bottom',
  },
  {
    targetId: 'tour-col-toolbox',
    title_ko: '5. 코드 블록 도구함',
    title_en: '5. Block Toolbox',
    description_ko: '문제 해결에 필요한 파이썬 함수와 제어문 블록을 제공합니다. 블록을 클릭하거나 드래그하여 캔버스로 가져옵니다.',
    description_en: 'Provides Python function and control blocks. Click or drag blocks onto the canvas.',
    placement: 'right',
  },
  {
    targetId: 'tour-col-canvas',
    title_ko: '6. 블록 조립 캔버스 및 타이핑 모드',
    title_en: '6. Assembly Canvas & Typing Mode',
    description_ko: '1~5단계는 블록을 조립하여 알고리즘 개념을 익히고, 6~10단계는 타이핑 모드로 전환되어 실전 코드를 직접 완성합니다.',
    description_en: 'Steps 1~5 assemble blocks to learn concepts; steps 6~10 transition to typing mode for hands-on coding.',
    placement: 'inside-top-right',
  },
  {
    targetId: 'tour-debug-mode',
    title_ko: '7. 디버깅 모드 및 속도 제어',
    title_en: '7. Debug Mode & Speed',
    description_ko: '디버깅 모드를 켜면 코드가 한 줄씩 순차 실행되며, 속도(0.2x~3x)를 조절하여 코드 동작 과정을 면밀히 관찰합니다.',
    description_en: 'In Debug Mode, code runs line-by-line. Adjust speed (0.2x~3x) to trace logic step-by-step.',
    placement: 'bottom',
  },
  {
    targetId: 'tour-run-btn',
    title_ko: '8. 코드 실행 및 정지',
    title_en: '8. Run & Stop Controls',
    description_ko: '작성한 코드를 파이썬 엔진에서 즉시 실행합니다. 키보드 단축키 Ctrl+Enter를 누르면 즉시 실행할 수 있습니다.',
    description_en: 'Executes your code in the Python engine immediately. Press shortcut Ctrl+Enter for instant execution.',
    placement: 'bottom',
  },
  {
    targetId: 'tour-terminal-console',
    title_ko: '9. 터미널 콘솔 출력',
    title_en: '9. Terminal Console',
    description_ko: '파이썬 코드의 print() 출력 결과와 오류 메시지를 실제 터미널 환경과 동일하게 출력하여 확인합니다.',
    description_en: 'Displays real standard output from print() statements and error diagnostics in real-time.',
    placement: 'right',
  },
  {
    targetId: 'tour-memory-visualizer',
    title_ko: '10. 메모리 시각화 (RAM Box)',
    title_en: '10. Memory Visualizer (RAM)',
    description_ko: '프로그램 실행 중 생성되거나 변경되는 변수의 이름, 데이터 타입, 저장 값을 실시간 메모리 상자로 관찰합니다.',
    description_en: 'Visualizes variable identifiers, data types, and stored values inside animated RAM storage boxes.',
    placement: 'right',
  },
];

interface SpotlightTourProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'ko' | 'en';
}

export default function SpotlightTour({ isOpen, onClose, language }: SpotlightTourProps) {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(true);
  const [canvasPreviewTab, setCanvasPreviewTab] = useState<'block' | 'typing'>('block');

  const isEn = language === 'en';
  const currentStep = TOUR_STEPS[stepIndex] || TOUR_STEPS[0];

  // Update target element bounding rect
  const updateRect = useCallback(() => {
    if (!isOpen) return;
    const el = document.getElementById(currentStep.targetId);
    if (el) {
      setTargetRect(el.getBoundingClientRect());
    } else {
      setTargetRect(null);
    }
  }, [isOpen, currentStep.targetId]);

  useEffect(() => {
    if (!isOpen) return;
    updateRect();
    const handleResize = () => updateRect();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize, true);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize, true);
    };
  }, [isOpen, updateRect]);

  // Keyboard navigation (Esc to close, Arrow keys to navigate)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleFinish();
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (stepIndex < TOUR_STEPS.length - 1) {
          setStepIndex((prev) => prev + 1);
        } else {
          handleFinish();
        }
      } else if (e.key === 'ArrowLeft' && stepIndex > 0) {
        setStepIndex((prev) => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, stepIndex, dontShowAgain]);

  const handleFinish = () => {
    if (dontShowAgain) {
      try {
        localStorage.setItem('typingcode_tour_seen_v1', 'true');
      } catch { }
    }
    onClose();
  };

  if (!isOpen) return null;

  const isCanvasStep = currentStep.targetId === 'tour-col-canvas';
  const cardWidth = isCanvasStep ? 440 : 380;
  const cardHeight = isCanvasStep ? 340 : 210;

  // Calculate Popover Position relative to targetRect
  let popoverStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 10002,
    width: `${cardWidth}px`,
    maxWidth: 'calc(100vw - 32px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  if (targetRect) {
    const pad = 14;
    const placement = currentStep.placement || 'bottom';

    let top = 0;
    let left = 0;

    if (placement === 'bottom') {
      top = targetRect.bottom + pad;
      left = targetRect.left + (targetRect.width - cardWidth) / 2;
    } else if (placement === 'right') {
      top = targetRect.top + (targetRect.height - cardHeight) / 2;
      left = targetRect.right + pad;
    } else if (placement === 'left') {
      top = targetRect.top + (targetRect.height - cardHeight) / 2;
      left = targetRect.left - cardWidth - pad;
    } else if (placement === 'top') {
      top = targetRect.top - cardHeight - pad;
      left = targetRect.left + (targetRect.width - cardWidth) / 2;
    } else if (placement === 'inside-top-right') {
      top = targetRect.top + 24;
      left = targetRect.right - cardWidth - 28;
    }

    // Boundary constraints
    const maxLeft = typeof window !== 'undefined' ? window.innerWidth - cardWidth - 16 : 1000;
    const maxTop = typeof window !== 'undefined' ? window.innerHeight - cardHeight - 16 : 800;

    left = Math.max(16, Math.min(left, maxLeft));
    top = Math.max(16, Math.min(top, maxTop));

    popoverStyle.top = `${top}px`;
    popoverStyle.left = `${left}px`;
  } else {
    // Center fallback if target element not found
    popoverStyle.top = '50%';
    popoverStyle.left = '50%';
    popoverStyle.transform = 'translate(-50%, -50%)';
  }

  const highlightPad = 6;
  const highlightStyle: React.CSSProperties | null = targetRect
    ? {
        position: 'fixed',
        top: Math.max(0, targetRect.top - highlightPad),
        left: Math.max(0, targetRect.left - highlightPad),
        width: targetRect.width + highlightPad * 2,
        height: targetRect.height + highlightPad * 2,
        borderRadius: '12px',
        boxShadow: '0 0 0 9999px rgba(3, 7, 18, 0.78), 0 0 24px rgba(56, 189, 248, 0.45)',
        border: '2px solid #38bdf8',
        pointerEvents: 'none',
        zIndex: 10001,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }
    : null;

  return (
    <>
      {/* 1. Backdrop Highlight Hole */}
      {highlightStyle ? (
        <div style={highlightStyle} />
      ) : (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(3, 7, 18, 0.78)',
            zIndex: 10001,
          }}
        />
      )}

      {/* 2. Floating Interactive Tour Card */}
      <div
        style={{
          ...popoverStyle,
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          borderRadius: '16px',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.85), 0 0 30px rgba(56, 189, 248, 0.15)',
          padding: '20px',
          color: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {/* Card Header: Step Badge + Title + Close Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 8px',
                borderRadius: '999px',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                fontSize: '0.72rem',
                fontWeight: 900,
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Sparkles size={11} />
              {stepIndex + 1} / {TOUR_STEPS.length}
            </span>
            <h4 style={{ margin: 0, fontSize: '0.96rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
              {isEn ? currentStep.title_en : currentStep.title_ko}
            </h4>
          </div>

          <button
            onClick={handleFinish}
            title={isEn ? 'Close Tour' : '가이드 닫기'}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.15s ease',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Card Body: Formal Instructional Description */}
        <p
          style={{
            margin: 0,
            fontSize: '0.86rem',
            lineHeight: 1.6,
            color: '#cbd5e1',
            wordBreak: 'keep-all',
          }}
        >
          {isEn ? currentStep.description_en : currentStep.description_ko}
        </p>

        {/* Special Interactive Mode Preview for Assembly Canvas */}
        {isCanvasStep && (
          <div
            style={{
              background: 'rgba(2, 6, 23, 0.75)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '12px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {/* Mode Switch Tabs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '8px',
                padding: '3px',
                gap: '4px',
              }}
            >
              <button
                type="button"
                onClick={() => setCanvasPreviewTab('block')}
                style={{
                  flex: 1,
                  padding: '5px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  background: canvasPreviewTab === 'block' ? 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)' : 'transparent',
                  color: canvasPreviewTab === 'block' ? '#ffffff' : '#94a3b8',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  transition: 'all 0.2s ease',
                }}
              >
                {isEn ? '🧩 Steps 1~5: Block Mode' : '🧩 1~5단계: 블록 조립'}
              </button>
              <button
                type="button"
                onClick={() => setCanvasPreviewTab('typing')}
                style={{
                  flex: 1,
                  padding: '5px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  background: canvasPreviewTab === 'typing' ? 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' : 'transparent',
                  color: canvasPreviewTab === 'typing' ? '#ffffff' : '#94a3b8',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  transition: 'all 0.2s ease',
                }}
              >
                {isEn ? '⌨️ Steps 6~10: Typing Mode' : '⌨️ 6~10단계: 실전 타이핑'}
              </button>
            </div>

            {/* Mode Visual Demonstration */}
            {canvasPreviewTab === 'block' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  padding: '10px 14px',
                  background: '#090e1a',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '0.8rem',
                }}
              >
                {/* Mock Start Block */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: '#059669',
                    color: '#ffffff',
                    fontWeight: 800,
                    boxShadow: '0 2px 0 #047857',
                  }}
                >
                  <Play size={11} fill="#ffffff" />
                  <span>시작 (Start)</span>
                </div>
                {/* Mock Snapped print Block */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 10px',
                    marginLeft: '8px',
                    borderRadius: '6px',
                    background: '#0284c7',
                    color: '#ffffff',
                    fontWeight: 800,
                    boxShadow: '0 2px 0 #0369a1',
                  }}
                >
                  <span>print(</span>
                  <span
                    style={{
                      background: '#ffffff',
                      color: '#0f172a',
                      padding: '1px 6px',
                      borderRadius: '4px',
                      fontWeight: 900,
                    }}
                  >
                    10
                  </span>
                  <span>)</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '4px', fontFamily: 'sans-serif' }}>
                  {isEn ? '• Assemble blocks like puzzle pieces to build the algorithm.' : '• 블록을 퍼즐처럼 결합하여 알고리즘의 기초를 다집니다.'}
                </span>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '10px 14px',
                  background: '#0b1120',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '0.82rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.70rem' }}>
                  <Code2 size={12} color="#10b981" />
                  <span>main.py</span>
                  <span style={{ color: '#10b981' }}>✓ typing mode</span>
                </div>
                <div style={{ color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <span style={{ color: '#475569', marginRight: '6px' }}>1</span>
                  <span style={{ color: '#dcdcaa' }}>print</span>
                  <span>(</span>
                  <span
                    style={{
                      background: 'rgba(56, 189, 248, 0.25)',
                      border: '1px solid #38bdf8',
                      color: '#38bdf8',
                      padding: '0 6px',
                      borderRadius: '4px',
                      fontWeight: 900,
                    }}
                  >
                    10
                  </span>
                  <span>)</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#34d399', marginTop: '2px', fontFamily: 'sans-serif' }}>
                  {isEn ? '• Fill in the blanks or fix typos with keyboard typing.' : '• 가이드 코드의 빈칸을 채우거나 오타를 수정하며 실전 코딩을 완성합니다.'}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Card Footer: "Don't show again" + [Prev / Next] Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            marginTop: '4px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.76rem',
              color: '#94a3b8',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              style={{
                accentColor: '#38bdf8',
                cursor: 'pointer',
              }}
            />
            <span>{isEn ? "Don't show again" : '다시 보지 않기'}</span>
          </label>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {stepIndex > 0 && (
              <button
                type="button"
                onClick={() => setStepIndex((prev) => Math.max(0, prev - 1))}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#e2e8f0',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                }}
              >
                <ChevronLeft size={13} />
                <span>{isEn ? 'Prev' : '이전'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                if (stepIndex < TOUR_STEPS.length - 1) {
                  setStepIndex((prev) => prev + 1);
                } else {
                  handleFinish();
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(56, 189, 248, 0.3)',
                transition: 'opacity 0.15s ease',
              }}
            >
              <span>{stepIndex === TOUR_STEPS.length - 1 ? (isEn ? 'Start' : '시작하기') : (isEn ? 'Next' : '다음')}</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
