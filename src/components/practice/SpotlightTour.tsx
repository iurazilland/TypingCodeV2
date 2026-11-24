'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Check,
  X,
  Terminal,
  Box,
  Layers,
  Heart,
  Code2,
} from 'lucide-react';

interface SpotlightTourProps {
  isOpen: boolean;
  isHoverMode?: boolean;
  onClose: () => void;
  language: 'ko' | 'en';
  storageKey?: string;
}

interface RegionRects {
  terminal: DOMRect | null;
  memory: DOMRect | null;
  toolbox: DOMRect | null;
  mission: DOMRect | null;
  canvas: DOMRect | null;
}

const EMPTY_RECTS: RegionRects = {
  terminal: null,
  memory: null,
  toolbox: null,
  mission: null,
  canvas: null,
};

export default function SpotlightTour({
  isOpen,
  isHoverMode = false,
  onClose,
  language,
  storageKey = 'typingcode_tour_seen_v2_guest',
}: SpotlightTourProps) {
  const [rects, setRects] = useState<RegionRects>(EMPTY_RECTS);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(true);
  const isEn = language === 'en';

  const measureAllRegions = useCallback(() => {
    if (!isOpen || typeof document === 'undefined') return;
    const getRect = (id: string): DOMRect | null => {
      const el = document.getElementById(id);
      return el ? el.getBoundingClientRect() : null;
    };

    setRects({
      terminal: getRect('tour-terminal-console'),
      memory: getRect('tour-memory-visualizer'),
      toolbox: getRect('tour-col-toolbox'),
      mission: getRect('tour-col-mission'),
      canvas: getRect('tour-col-canvas'),
    });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    setDontShowAgain(true);
    measureAllRegions();
    const rafId = requestAnimationFrame(() => measureAllRegions());
    const timerId = window.setTimeout(() => measureAllRegions(), 80);

    const handleResizeOrScroll = () => measureAllRegions();
    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll, true);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => measureAllRegions());
      ro.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(timerId);
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll, true);
      ro?.disconnect();
    };
  }, [isOpen, measureAllRegions]);

  const handleFinish = useCallback(() => {
    try {
      if (dontShowAgain) {
        localStorage.setItem(storageKey, 'true');
      } else {
        localStorage.removeItem(storageKey);
      }
    } catch {}
    onClose();
  }, [dontShowAgain, storageKey, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isOpen, handleFinish]);

  if (!isOpen) return null;

  const renderRegionBox = (
    rect: DOMRect | null,
    accentColor: string,
    stepNum: string,
    icon: React.ReactNode,
    title: string,
    desc: string,
    extraContent?: React.ReactNode,
    alignTop = false
  ) => {
    if (!rect || rect.width < 60 || rect.height < 40) return null;
    return (
      <div
        style={{
          position: 'fixed',
          top: rect.top + 3,
          left: rect.left + 3,
          width: Math.max(0, rect.width - 6),
          height: Math.max(0, rect.height - 6),
          borderRadius: '12px',
          border: `2px solid ${accentColor}`,
          background: 'rgba(15, 23, 42, 0.35)',
          pointerEvents: 'none',
          zIndex: 10002,
          display: 'flex',
          alignItems: alignTop ? 'flex-start' : 'center',
          justifyContent: 'center',
          padding: alignTop ? '10px 14px' : '14px',
          boxSizing: 'border-box',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            pointerEvents: isHoverMode ? 'none' : 'auto',
            width: '100%',
            maxWidth: extraContent ? '460px' : '320px',
            background: 'rgba(15, 23, 42, 0.96)',
            border: `1.5px solid ${accentColor}`,
            borderRadius: '14px',
            boxShadow: '0 14px 32px rgba(0, 0, 0, 0.65)',
            padding: '14px 16px',
            color: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '7px',
                background: accentColor,
                color: '#0f172a',
                fontSize: '0.8rem',
                fontWeight: 900,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {stepNum}
            </span>
            <span style={{ color: accentColor, display: 'inline-flex', alignItems: 'center' }}>
              {icon}
            </span>
            <span style={{ fontSize: '0.94rem', fontWeight: 900, color: '#ffffff' }}>
              {title}
            </span>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: '0.82rem',
              lineHeight: 1.5,
              color: '#cbd5e1',
              wordBreak: 'keep-all',
            }}
          >
            {desc}
          </p>

          {extraContent}
        </div>
      </div>
    );
  };

  const kbdStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px 8px',
    borderRadius: '6px',
    background: '#1e293b',
    border: '1px solid #475569',
    color: '#38bdf8',
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '0.76rem',
    fontWeight: 800,
    whiteSpace: 'nowrap',
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(2, 6, 23, 0.52)',
        userSelect: 'none',
        pointerEvents: isHoverMode ? 'none' : 'auto',
      }}
      onClick={isHoverMode ? undefined : handleFinish}
    >
      {/* ① 터미널 콘솔 & 실행 제어 */}
      {renderRegionBox(
        rects.terminal,
        '#38bdf8',
        '1',
        <Terminal size={16} />,
        isEn ? 'Terminal & Run Mode' : '터미널 & 실행 제어',
        isEn
          ? 'Check print() output and enter input() values. Switch between Debug (step-by-step) and Normal (instant) run.'
          : '코드 실행 결과(print)와 키보드 입력(input)을 처리합니다. 상단에서 디버깅(한 줄씩 실행)과 일반(즉시 실행)을 전환할 수 있습니다.'
      )}

      {/* ② 실시간 메모리 (RAM) */}
      {renderRegionBox(
        rects.memory,
        '#c084fc',
        '2',
        <Box size={16} />,
        isEn ? 'Live Memory (RAM)' : '실시간 메모리 (RAM)',
        isEn
          ? 'Shows variables, data types, and stored values in real time while code runs.'
          : '코드가 실행될 때 만들어지거나 바뀌는 변수의 이름, 자료형, 저장된 값을 실시간으로 보여줍니다.'
      )}

      {/* ③ 코드 블록 도구함 (블록 모드일 때만 영역이 존재) */}
      {renderRegionBox(
        rects.toolbox,
        '#fb923c',
        '3',
        <Layers size={16} />,
        isEn ? 'Block Toolbox' : '코드 블록 도구함',
        isEn
          ? 'Drag blocks to the right canvas to assemble code. Drag blocks back here to delete them.'
          : '블록을 오른쪽 캔버스로 끌어다 조립합니다. 필요 없는 블록은 다시 이곳으로 끌어오면 삭제됩니다.'
      )}

      {/* ④ 상단 미션 바 (높이가 낮은 헤더 영역이므로 한 줄 가로형 캡슐로 깔끔하게 표시) */}
      {rects.mission && rects.mission.width >= 60 && (
        <div
          style={{
            position: 'fixed',
            top: rects.mission.top + 3,
            left: rects.mission.left + 3,
            width: Math.max(0, rects.mission.width - 6),
            height: Math.max(0, rects.mission.height - 6),
            borderRadius: '12px',
            border: '2px solid #fb7185',
            background: 'rgba(15, 23, 42, 0.35)',
            pointerEvents: 'none',
            zIndex: 10002,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 14px',
            boxSizing: 'border-box',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              pointerEvents: isHoverMode ? 'none' : 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(15, 23, 42, 0.96)',
              border: '1.5px solid #fb7185',
              borderRadius: '999px',
              boxShadow: '0 10px 24px rgba(0, 0, 0, 0.65)',
              padding: '8px 16px',
              color: '#f8fafc',
              maxWidth: '100%',
            }}
          >
            <span
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '999px',
                background: '#fb7185',
                color: '#0f172a',
                fontSize: '0.78rem',
                fontWeight: 900,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {rects.toolbox && rects.toolbox.width >= 60 ? '4' : '3'}
            </span>
            <Heart size={15} color="#fb7185" />
            <span style={{ fontSize: '0.88rem', fontWeight: 900, color: '#ffffff', whiteSpace: 'nowrap' }}>
              {isEn ? 'Mission Bar' : '상단 미션 바'}
            </span>
            <span style={{ color: '#475569' }}>|</span>
            <span style={{ fontSize: '0.81rem', color: '#cbd5e1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {isEn
                ? 'Problem prompt, hints, progress bar, and 5 hearts'
                : '문제 목표 지시문 · 힌트 · 진행도 게이지 · 남은 하트(5개) 확인'}
            </span>
          </div>
        </div>
      )}

      {/* ⑤ 메인 실습 캔버스 (블록 조립 & 타이핑 스테이지) */}
      {renderRegionBox(
        rects.canvas,
        '#34d399',
        rects.toolbox && rects.toolbox.width >= 60 ? '5' : '4',
        <Code2 size={16} />,
        isEn ? 'Practice Canvas & Shortcuts' : '메인 실습 캔버스 & 필수 단축키',
        isEn
          ? 'Assemble puzzle blocks or type Python code directly on the editor.'
          : '블록 퍼즐을 조립하거나 파이썬 코드를 직접 타이핑하여 문제를 해결합니다.',
        <div
          style={{
            marginTop: '4px',
            padding: '10px 12px',
            borderRadius: '10px',
            background: 'rgba(2, 6, 23, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
            fontSize: '0.79rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ color: '#e2e8f0', fontWeight: 700 }}>
              {isEn ? 'Run / Submit Code' : '코드 즉시 실행 · 채점'}
            </span>
            <span style={kbdStyle}>Ctrl + Enter ↵</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ color: '#e2e8f0', fontWeight: 700 }}>
              {isEn ? 'Next Input Slot (Block Mode)' : '다음 블록 빈칸으로 이동'}
            </span>
            <span style={kbdStyle}>Tab ⇥</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ color: '#e2e8f0', fontWeight: 700 }}>
              {isEn ? 'Undo / Redo (Typing Mode)' : '타이핑 실행 취소 / 다시 실행'}
            </span>
            <span style={kbdStyle}>Ctrl + Z / Ctrl + Shift + Z</span>
          </div>

          {!isHoverMode && (
            <div
              style={{
                marginTop: '6px',
                paddingTop: '10px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <label
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  color: '#94a3b8',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  style={{ accentColor: '#38bdf8', width: '14px', height: '14px', cursor: 'pointer' }}
                />
                <span>{isEn ? "Don't auto-open next time" : '다음부터 자동 표시 안 함'}</span>
              </label>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  type="button"
                  onClick={handleFinish}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: '#10b981',
                    border: 'none',
                    color: '#0f172a',
                    fontSize: '0.8rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                  }}
                >
                  <Check size={14} strokeWidth={3} />
                  <span>{isEn ? 'Got It (ESC)' : '확인 완료 (ESC)'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleFinish}
                  title={isEn ? 'Close' : '닫기'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                  }}
                >
                  <X size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
