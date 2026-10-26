'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, ChevronRight, ChevronLeft, X } from 'lucide-react';

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
    targetId: 'tour-col-mission',
    title_ko: '학습 미션 및 상태 안내',
    title_en: 'Mission & Status',
    description_ko: '해결해야 할 미션 목표와 힌트, 남은 하트 및 단계별 진행률을 확인합니다.',
    description_en: 'Check your current objective, hints, remaining hearts, and step progress.',
    placement: 'bottom',
  },
  {
    targetId: 'tour-col-toolbox',
    title_ko: '코드 블록 도구함',
    title_en: 'Block Toolbox',
    description_ko: '문제 해결에 필요한 파이썬 함수와 제어문 블록을 제공합니다. 블록을 클릭하거나 드래그하여 캔버스로 가져옵니다.',
    description_en: 'Provides Python function and control blocks. Click or drag blocks onto the canvas.',
    placement: 'right',
  },
  {
    targetId: 'tour-col-canvas',
    title_ko: '블록 조립 캔버스',
    title_en: 'Assembly Canvas',
    description_ko: '도구함에서 꺼낸 블록을 시작(Start) 블록 아래에 순서대로 결합하여 알고리즘을 완성합니다.',
    description_en: 'Snap blocks sequentially beneath the Start block to construct your algorithm.',
    placement: 'inside-top-right',
  },
  {
    targetId: 'tour-col-terminal',
    title_ko: '터미널 및 실행 제어',
    title_en: 'Terminal & Run Controls',
    description_ko: '코드 작성을 마친 후 [▶ 실행] 버튼을 클릭하면 실제 파이썬 엔진이 동작하여 결과와 오류를 출력합니다.',
    description_en: 'Click [▶ Run] after assembling your code to execute in the Python engine and view results.',
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

  // Calculate Popover Position relative to targetRect
  let popoverStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 10002,
    width: '380px',
    maxWidth: 'calc(100vw - 32px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  if (targetRect) {
    const pad = 14;
    const cardWidth = 380;
    const cardHeight = 220;
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
            <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
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
