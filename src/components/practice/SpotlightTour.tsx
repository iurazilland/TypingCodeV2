'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Sparkles,
  Code2,
  Play,
  Bug,
  Zap,
  Check,
  X,
  Keyboard,
  Terminal,
  Box,
  Layers,
  Heart,
} from 'lucide-react';

export interface TourStep {
  id: string;
  targetId: string;
  title_ko: string;
  title_en: string;
  description_ko: string;
  description_en: string;
}

export const TOUR_STEPS: TourStep[] = [
  {
    id: 'terminal',
    targetId: 'tour-terminal-console',
    title_ko: '1. 터미널 콘솔 & 실행/디버깅 제어',
    title_en: '1. Terminal Console & Run/Debug Controls',
    description_ko:
      '코드 실행 결과(print)와 입력(input)을 확인하며, 디버깅(1x)·일반 모드와 배속을 제어합니다.',
    description_en:
      'View print/input results and control Debug (1x) or Normal execution mode and speed.',
  },
  {
    id: 'memory',
    targetId: 'tour-memory-visualizer',
    title_ko: '2. 실시간 메모리 시각화 (RAM Box)',
    title_en: '2. Live Memory Visualizer (RAM)',
    description_ko:
      '실행 중 생성·변경되는 변수의 이름, 자료형, 저장 값을 실시간 메모리 상자로 관찰합니다.',
    description_en:
      'Observe variable names, types, and values in real-time RAM boxes during execution.',
  },
  {
    id: 'toolbox',
    targetId: 'tour-col-toolbox',
    title_ko: '3. 코드 블록 도구함',
    title_en: '3. Code Block Toolbox',
    description_ko:
      '함수·제어문·변수 블록을 드래그하여 캔버스에 배치하거나, 불필요한 블록을 드래그해 삭제합니다.',
    description_en:
      'Drag function, control, and variable blocks onto the canvas, or drop blocks back to delete.',
  },
  {
    id: 'mission',
    targetId: 'tour-col-mission',
    title_ko: '4. 미션 목표 · 진행도 · 하트 생명 · 단계 이동',
    title_en: '4. Mission Goal, Progress, Hearts & Step Nav',
    description_ko:
      '현재 문제의 지시문과 힌트, 진행률 게이지, 남은 하트(5개) 및 문제 단계 이동을 확인합니다.',
    description_en:
      'Check the mission prompt, hints, progress bar, remaining hearts (5), and step navigation.',
  },
  {
    id: 'canvas',
    targetId: 'tour-col-canvas',
    title_ko: '5. 블록 조립 캔버스 & 실전 타이핑 스테이지',
    title_en: '5. Block Assembly Canvas & Typing Stage',
    description_ko:
      '블록 퍼즐 조립과 실전 코드 타이핑을 교차 학습하며, Tab 이동과 Ctrl+Enter 단축키로 빠르게 실습합니다.',
    description_en:
      'Alternate between block assembly and code typing with fast Tab navigation and Ctrl+Enter execution.',
  },
];

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
  stepNav: DOMRect | null;
  canvas: DOMRect | null;
  debugMode: DOMRect | null;
  runBtn: DOMRect | null;
}

const EMPTY_RECTS: RegionRects = {
  terminal: null,
  memory: null,
  toolbox: null,
  mission: null,
  stepNav: null,
  canvas: null,
  debugMode: null,
  runBtn: null,
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
      stepNav: getRect('tour-step-nav'),
      canvas: getRect('tour-col-canvas'),
      debugMode: getRect('tour-debug-mode'),
      runBtn: getRect('tour-run-btn'),
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

  const renderRegionHighlight = (
    rect: DOMRect | null,
    borderColor: string,
    glowColor: string,
    insetPx = 3
  ) => {
    if (!rect) return null;
    return (
      <div
        style={{
          position: 'fixed',
          top: rect.top + insetPx,
          left: rect.left + insetPx,
          width: Math.max(0, rect.width - insetPx * 2),
          height: Math.max(0, rect.height - insetPx * 2),
          borderRadius: '12px',
          border: `2px solid ${borderColor}`,
          boxShadow: `0 0 20px ${glowColor}, inset 0 0 16px ${glowColor}`,
          pointerEvents: 'none',
          zIndex: 10002,
          transition: 'all 0.15s ease-out',
        }}
      />
    );
  };

  const badgeStyle = (bg: string, border: string, color: string): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '3px 9px',
    borderRadius: '999px',
    background: bg,
    border: `1px solid ${border}`,
    color,
    fontSize: '0.72rem',
    fontWeight: 900,
    fontFamily: 'var(--font-mono)',
    flexShrink: 0,
  });

  const keycapStyle = (accentColor: string, bg: string): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 10px',
    borderRadius: '7px',
    background: bg,
    border: `1.5px solid ${accentColor}`,
    boxShadow: `0 3px 0 ${accentColor}, 0 0 12px rgba(56, 189, 248, 0.25)`,
    color: '#ffffff',
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '0.84rem',
    fontWeight: 900,
    letterSpacing: '0.02em',
    lineHeight: 1.1,
    whiteSpace: 'nowrap',
  });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(3, 7, 18, 0.72)',
        backdropFilter: 'blur(2.5px)',
        userSelect: 'none',
        pointerEvents: isHoverMode ? 'none' : 'auto',
      }}
      onClick={isHoverMode ? undefined : handleFinish}
    >
      {/* ====================================================================
          1. LIVE REGION HIGHLIGHT OUTLINES (Mapped to exact DOM Rects)
          ==================================================================== */}
      {renderRegionHighlight(
        rects.terminal,
        '#38bdf8',
        'rgba(56, 189, 248, 0.28)'
      )}
      {renderRegionHighlight(
        rects.memory,
        '#a855f7',
        'rgba(168, 85, 247, 0.28)'
      )}
      {renderRegionHighlight(
        rects.toolbox,
        '#fb923c',
        'rgba(251, 146, 60, 0.25)'
      )}
      {renderRegionHighlight(
        rects.mission,
        '#f43f5e',
        'rgba(244, 63, 94, 0.25)'
      )}
      {renderRegionHighlight(
        rects.stepNav,
        '#38bdf8',
        'rgba(56, 189, 248, 0.35)',
        -2
      )}
      {renderRegionHighlight(
        rects.canvas,
        '#10b981',
        'rgba(16, 185, 129, 0.25)'
      )}

      {/* Highlight rings around the actual Debug/Normal switch & Run button */}
      {rects.debugMode && (
        <div
          style={{
            position: 'fixed',
            top: rects.debugMode.top - 3,
            left: rects.debugMode.left - 3,
            width: rects.debugMode.width + 6,
            height: rects.debugMode.height + 6,
            borderRadius: '9px',
            border: '2px solid #fb923c',
            boxShadow: '0 0 14px rgba(251, 146, 60, 0.85)',
            pointerEvents: 'none',
            zIndex: 10004,
          }}
        />
      )}
      {rects.runBtn && (
        <div
          style={{
            position: 'fixed',
            top: rects.runBtn.top - 3,
            left: rects.runBtn.left - 3,
            width: rects.runBtn.width + 6,
            height: rects.runBtn.height + 6,
            borderRadius: '8px',
            border: '2px solid #34d399',
            boxShadow: '0 0 14px rgba(52, 211, 153, 0.85)',
            pointerEvents: 'none',
            zIndex: 10004,
          }}
        />
      )}

      {/* ====================================================================
          2. CARD ①: TERMINAL CONSOLE & DEBUG/RUN CONTROLS (Mapped to #tour-terminal-console)
          ==================================================================== */}
      {rects.terminal && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: Math.max(rects.terminal.top + 54, rects.terminal.top + 12),
            left: rects.terminal.left + 12,
            width: Math.max(240, rects.terminal.width - 24),
            maxHeight: Math.max(140, rects.terminal.height - 64),
            overflowY: 'auto',
            background: 'rgba(15, 23, 42, 0.96)',
            border: '1.5px solid rgba(56, 189, 248, 0.55)',
            borderRadius: '14px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.75)',
            padding: '14px 16px',
            color: '#f8fafc',
            zIndex: 10005,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={badgeStyle('rgba(56, 189, 248, 0.18)', 'rgba(56, 189, 248, 0.5)', '#38bdf8')}>
              <Terminal size={12} />
              <span>AREA 01</span>
            </span>
            <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#ffffff' }}>
              {isEn ? 'Terminal Console & Run/Debug Controls' : '터미널 콘솔 & 디버깅/실행 제어'}
            </span>
          </div>

          <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.5, color: '#cbd5e1', wordBreak: 'keep-all' }}>
            {isEn
              ? 'Displays print() output and interactive input() prompts right next to the output text.'
              : 'print() 출력 결과와 오류 메시지를 확인하며, input() 실행 시 안내 문구 바로 옆에 값을 직접 입력합니다.'}
          </p>

          <div
            style={{
              background: 'rgba(2, 6, 23, 0.78)',
              border: '1px solid rgba(251, 146, 60, 0.35)',
              borderRadius: '10px',
              padding: '8px 10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              fontSize: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  padding: '2px 7px',
                  borderRadius: '5px',
                  background: 'rgba(234, 88, 12, 0.28)',
                  border: '1px solid #fb923c',
                  color: '#fb923c',
                  fontWeight: 800,
                }}
              >
                <Bug size={11} />
                <span>{isEn ? 'Debug (0.2x~3x)' : '디버깅 (0.2x~3x)'}</span>
              </span>
              <span style={{ color: '#fdba74', fontWeight: 700 }}>
                {isEn ? 'Step-by-step line & memory trace' : '한 줄씩 순차 실행 및 메모리 변화 추적'}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  padding: '2px 7px',
                  borderRadius: '5px',
                  background: 'rgba(56, 189, 248, 0.22)',
                  border: '1px solid #38bdf8',
                  color: '#38bdf8',
                  fontWeight: 800,
                }}
              >
                <Zap size={11} />
                <span>{isEn ? 'Normal (0ms)' : '일반 (0ms)'}</span>
              </span>
              <span style={{ color: '#7dd3fc', fontWeight: 700 }}>
                {isEn ? 'Instant full execution without delay' : '대기 없이 전체 코드 즉시 실행'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          3. CARD ②: MEMORY VISUALIZER (Mapped to #tour-memory-visualizer)
          ==================================================================== */}
      {rects.memory && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: Math.max(rects.memory.top + 52, rects.memory.top + 12),
            left: rects.memory.left + 12,
            width: Math.max(240, rects.memory.width - 24),
            maxHeight: Math.max(120, rects.memory.height - 62),
            overflowY: 'auto',
            background: 'rgba(15, 23, 42, 0.96)',
            border: '1.5px solid rgba(168, 85, 247, 0.55)',
            borderRadius: '14px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.75)',
            padding: '13px 16px',
            color: '#f8fafc',
            zIndex: 10005,
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={badgeStyle('rgba(168, 85, 247, 0.2)', 'rgba(168, 85, 247, 0.55)', '#c084fc')}>
              <Box size={12} />
              <span>AREA 02</span>
            </span>
            <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#ffffff' }}>
              {isEn ? 'Live Memory Visualizer (RAM Box)' : '실시간 메모리 시각화 (RAM Box)'}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.5, color: '#cbd5e1', wordBreak: 'keep-all' }}>
            {isEn
              ? 'Variables created or updated during execution appear inside RAM boxes with their data type (int, str, list) and value.'
              : '코드가 실행될 때 생성·변경되는 변수의 이름, 자료형(int, str, list 등), 실제 저장 값이 RAM 상자에 실시간으로 표시됩니다.'}
          </p>
        </div>
      )}

      {/* ====================================================================
          4. CARD ③: BLOCK TOOLBOX (Mapped to #tour-col-toolbox)
          ==================================================================== */}
      {rects.toolbox && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: rects.toolbox.top + 16,
            left: rects.toolbox.left + 10,
            width: Math.max(180, rects.toolbox.width - 20),
            maxHeight: Math.max(180, rects.toolbox.height - 32),
            overflowY: 'auto',
            background: 'rgba(15, 23, 42, 0.96)',
            border: '1.5px solid rgba(251, 146, 60, 0.6)',
            borderRadius: '14px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.78)',
            padding: '14px 13px',
            color: '#f8fafc',
            zIndex: 10005,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={badgeStyle('rgba(251, 146, 60, 0.2)', 'rgba(251, 146, 60, 0.55)', '#fb923c')}>
              <Layers size={12} />
              <span>AREA 03</span>
            </span>
            <span style={{ fontSize: '0.88rem', fontWeight: 900, color: '#ffffff' }}>
              {isEn ? 'Block Toolbox' : '코드 블록 도구함'}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '0.78rem', lineHeight: 1.5, color: '#cbd5e1', wordBreak: 'keep-all' }}>
            {isEn
              ? 'Drag blocks onto the right canvas to snap them together. Drop unused blocks back here or into the trash icon to remove them.'
              : '필요한 블록을 우측 캔버스로 드래그해 자석처럼 결합합니다. 변수/함수 생성 시 선언 블록과 호출 블록이 함께 제공되며, 캔버스 블록을 이곳으로 다시 드래그하면 삭제됩니다.'}
          </p>
        </div>
      )}

      {/* ====================================================================
          5. CARD ④ & ⑤: MISSION BAR + CANVAS / KEYBOARD SHORTCUTS (Mapped to #tour-col-canvas)
          ==================================================================== */}
      {rects.canvas && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: rects.canvas.top + 14,
            left: rects.canvas.left + 16,
            width: Math.max(320, rects.canvas.width - 32),
            maxHeight: Math.max(240, rects.canvas.height - 28),
            overflowY: 'auto',
            background: 'rgba(15, 23, 42, 0.97)',
            border: '1.5px solid rgba(16, 185, 129, 0.6)',
            borderRadius: '16px',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.85), 0 0 32px rgba(16, 185, 129, 0.15)',
            padding: '16px 20px',
            color: '#f8fafc',
            zIndex: 10005,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {/* Sub-section A: Area 04 Mission / Hearts / Step Nav summary */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              flexWrap: 'wrap',
              paddingBottom: '10px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={badgeStyle('rgba(244, 63, 94, 0.18)', 'rgba(244, 63, 94, 0.5)', '#fb7185')}>
                <Heart size={11} />
                <span>AREA 04 · 상단 미션 바</span>
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0' }}>
                {isEn
                  ? 'Mission Prompt · Progress Bar · 5 Hearts · Hint · Step Nav (Top Right)'
                  : '미션 목표 지시문 · 진행도 게이지 · 하트 생명(5개) · 힌트 · 우측 상단 단계 이동(01/15)'}
              </span>
            </div>
          </div>

          {/* Sub-section B: Area 05 Canvas & Typing Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={badgeStyle('rgba(16, 185, 129, 0.2)', 'rgba(16, 185, 129, 0.55)', '#34d399')}>
              <Sparkles size={12} />
              <span>AREA 05 · 메인 실습 영역</span>
            </span>
            <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff' }}>
              {isEn
                ? 'Block Assembly Canvas & Hands-on Typing Stage'
                : '블록 조립 캔버스 & 실전 타이핑 스테이지'}
            </span>
          </div>

          {/* PROMINENT KEYBOARD SHORTCUT BANNER (Tab & Ctrl + Enter) */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(14, 116, 144, 0.35) 0%, rgba(30, 58, 138, 0.4) 100%)',
              border: '2px solid #38bdf8',
              borderRadius: '14px',
              padding: '12px 16px',
              boxShadow: '0 0 24px rgba(56, 189, 248, 0.25), inset 0 0 12px rgba(56, 189, 248, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.82rem',
                fontWeight: 900,
                color: '#7dd3fc',
              }}
            >
              <Keyboard size={15} color="#38bdf8" />
              <span>
                {isEn
                  ? '⚡ Essential Keyboard Shortcuts (Block & Typing Canvas)'
                  : '⚡ 캔버스 필수 키보드 단축키 (빠른 학습 핵심 기능)'}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '10px',
              }}
            >
              {/* Shortcut 1: Tab */}
              <div
                style={{
                  background: 'rgba(2, 6, 23, 0.82)',
                  border: '1.5px solid rgba(56, 189, 248, 0.5)',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                  <span style={keycapStyle('#0284c7', '#0369a1')}>Tab ⇥</span>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 900, color: '#ffffff' }}>
                    {isEn ? 'Jump to Next Input Slot' : '다음 빈칸 입력창으로 즉시 이동'}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.35 }}>
                    {isEn
                      ? 'Move across block input slots in visual order without clicking (Shift+Tab: previous)'
                      : '마우스 클릭 없이 블록 내 다음 입력칸으로 바로 이동합니다 (Shift+Tab: 이전 칸)'}
                  </div>
                </div>
              </div>

              {/* Shortcut 2: Ctrl + Enter */}
              <div
                style={{
                  background: 'rgba(2, 6, 23, 0.82)',
                  border: '1.5px solid rgba(16, 185, 129, 0.55)',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                  <span style={keycapStyle('#059669', '#047857')}>Ctrl</span>
                  <span style={{ color: '#94a3b8', fontWeight: 900, fontSize: '0.8rem' }}>+</span>
                  <span style={keycapStyle('#059669', '#047857')}>Enter ↵</span>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 900, color: '#34d399' }}>
                    {isEn ? 'Run Code Immediately' : '작성한 코드 즉시 실행'}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.35 }}>
                    {isEn
                      ? 'Executes assembled blocks or typed code right away without clicking Run'
                      : '실행 버튼을 클릭하지 않아도 블록·타이핑 코드를 즉시 실행하고 채점합니다'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dual Mode Mini Preview (Block Mode + Typing Mode) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '10px',
            }}
          >
            {/* Block Mode Box */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '10px 12px',
                background: '#090e1a',
                borderRadius: '10px',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.76rem',
              }}
            >
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-sans)' }}>
                {isEn ? '🧩 Block Assembly Mode' : '🧩 블록 조립 모드 (홀수 단계)'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '2px 8px',
                    borderRadius: '5px',
                    background: '#059669',
                    color: '#ffffff',
                    fontWeight: 800,
                  }}
                >
                  <Play size={9} fill="#ffffff" />
                  <span>실행</span>
                </div>
                <span style={{ color: '#64748b' }}>→</span>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    padding: '2px 8px',
                    borderRadius: '5px',
                    background: '#0284c7',
                    color: '#ffffff',
                    fontWeight: 800,
                  }}
                >
                  <span>print(</span>
                  <span style={{ background: '#ffffff', color: '#0f172a', padding: '0 4px', borderRadius: '3px', fontWeight: 900 }}>
                    10
                  </span>
                  <span>)</span>
                </div>
              </div>
              <span style={{ fontSize: '0.71rem', color: '#94a3b8', fontFamily: 'var(--font-sans)' }}>
                {isEn
                  ? '• Snap blocks together & press Tab to fill values.'
                  : '• 블록을 결합하고 Tab 키로 빈칸을 채워 원리를 익힙니다.'}
              </span>
            </div>

            {/* Typing Mode Box */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '10px 12px',
                background: '#0b1120',
                borderRadius: '10px',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.76rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                <span style={{ fontWeight: 800, color: '#34d399' }}>
                  {isEn ? '⌨️ Hands-on Typing Mode' : '⌨️ 실전 타이핑 · 퀴즈 모드'}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#64748b' }}>
                  <Code2 size={11} color="#10b981" />
                  <span>main.py</span>
                </span>
              </div>
              <div style={{ color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <span style={{ color: '#475569', marginRight: '6px' }}>01</span>
                <span style={{ color: '#dcdcaa' }}>print</span>
                <span>(</span>
                <span
                  style={{
                    background: 'rgba(56, 189, 248, 0.25)',
                    border: '1px solid #38bdf8',
                    color: '#38bdf8',
                    padding: '0 5px',
                    borderRadius: '3px',
                    fontWeight: 900,
                  }}
                >
                  10
                </span>
                <span>)</span>
              </div>
              <span style={{ fontSize: '0.71rem', color: '#34d399', fontFamily: 'var(--font-sans)' }}>
                {isEn
                  ? '• Type code directly to fill blanks, fix bugs, or write lines.'
                  : '• 빈칸 채우기·버그 수정·한 줄 작성으로 실전 코딩을 완성합니다.'}
              </span>
            </div>
          </div>

          {/* Single-Page Tour Footer: Don't Show Again + Start Button (Shown when pinned/auto-opened) */}
          {!isHoverMode && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap',
                paddingTop: '10px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <label
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#cbd5e1',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  style={{ accentColor: '#38bdf8', width: '15px', height: '15px', cursor: 'pointer' }}
                />
                <span>{isEn ? "Don't show automatically next time" : '다음부터 자동으로 띄우지 않기'}</span>
              </label>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={handleFinish}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 18px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #10b981 0%, #0284c7 100%)',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(16, 185, 129, 0.35)',
                  }}
                >
                  <Check size={15} />
                  <span>{isEn ? 'Got It · Start Learning (Enter / ESC)' : '한눈에 확인 완료 · 학습 시작하기 (Enter / ESC)'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleFinish}
                  title={isEn ? 'Close' : '닫기'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '34px',
                    height: '34px',
                    borderRadius: '9px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
