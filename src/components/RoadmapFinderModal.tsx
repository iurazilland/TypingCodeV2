'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Compass, Lock, RotateCcw, X } from 'lucide-react';
import {
  FinderAnswers,
  findCurriculumModuleById,
  recommendRoadmap,
} from '@/lib/curriculum';
import LanguageIcon from '@/components/LanguageIcon';

interface RoadmapFinderModalProps {
  isOpen: boolean;
  isEn: boolean;
  onClose: () => void;
  onSelectRoadmap: (roadmapId: string) => void;
}

const EXPERIENCE_OPTIONS: Array<{
  value: FinderAnswers['experience'];
  ko: string;
  en: string;
}> = [
  { value: 'none', ko: '코딩이 완전 처음이에요', en: 'Complete beginner' },
  { value: 'basic', ko: '기초 문법은 조금 본 적 있어요', en: 'Know a little basic syntax' },
  { value: 'experienced', ko: '다른 언어를 다뤄본 적 있어요', en: 'Have experience in another language' },
];

const GOAL_OPTIONS: Array<{
  value: FinderAnswers['goal'];
  icon: string;
  ko: string;
  en: string;
}> = [
  { value: 'starter', icon: '🌱', ko: '가볍게 코딩 첫걸음 · 기초 체득', en: 'First steps & core coding basics' },
  { value: 'ai-data', icon: '🤖', ko: 'AI · 데이터 분석 · 자동화', en: 'AI, data analytics & automation' },
  { value: 'frontend', icon: '🌐', ko: '웹사이트 · 프론트엔드 제작', en: 'Websites & frontend UI' },
  { value: 'backend', icon: '🖥️', ko: '백엔드 서버 · 데이터베이스', en: 'Backend servers & databases' },
  { value: 'cs-algo', icon: '🎓', ko: '전공 기초 · 코딩테스트 대비', en: 'CS fundamentals & coding tests' },
  { value: 'game-mobile', icon: '🎮', ko: '게임 개발 · 모바일 앱', en: 'Game dev & mobile apps' },
];

const STYLE_OPTIONS: Array<{
  value: FinderAnswers['style'];
  ko: string;
  en: string;
}> = [
  { value: 'practical', ko: '직접 타이핑하고 실행 결과를 바로 확인', en: 'Hands-on typing with instant execution' },
  { value: 'fundamental', ko: '기초 원리부터 단계별로 차근차근', en: 'Step-by-step from core fundamentals' },
];

export default function RoadmapFinderModal({
  isOpen,
  isEn,
  onClose,
  onSelectRoadmap,
}: RoadmapFinderModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [answers, setAnswers] = useState<FinderAnswers>({
    experience: 'none',
    goal: 'starter',
    style: 'practical',
  });

  useEffect(() => {
    if (!isOpen) return;
    setStep(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const result = recommendRoadmap(answers);
  const resolvedSteps = result.roadmap.moduleIds
    .map((id) => findCurriculumModuleById(id))
    .filter((item): item is NonNullable<typeof item> => item !== null);
  const firstUnlocked = resolvedSteps.find((s) => !s.module.isLocked);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '540px',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1.5px solid #cbd5e1',
          boxShadow: '0 24px 48px -12px rgba(15, 23, 42, 0.22)',
          padding: '24px',
          color: '#0f172a',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={19} color="#0891b2" />
            <span style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a' }}>
              {isEn ? 'Course Path Finder' : '맞춤 학습 순서 추천'}
            </span>
            {step < 3 && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#0891b2',
                  background: '#ecfeff',
                  border: '1px solid #a5f3fc',
                  padding: '2px 8px',
                  borderRadius: '999px',
                }}
              >
                {step + 1} / 3
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '10px',
              width: '32px',
              height: '32px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#475569',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Step 0: Experience */}
        {step === 0 && (
          <div>
            <h3 style={{ fontSize: '1.12rem', fontWeight: 800, margin: '0 0 14px 0' }}>
              {isEn ? '1. What is your coding experience?' : '1. 현재 코딩 경험이 어느 정도인가요?'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {EXPERIENCE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, experience: opt.value }));
                    setStep(1);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'border-color 0.15s ease, background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0891b2';
                    e.currentTarget.style.background = '#f0f9ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.background = '#f8fafc';
                  }}
                >
                  <span>{isEn ? opt.en : opt.ko}</span>
                  <ArrowRight size={16} color="#64748b" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Goal */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '1.12rem', fontWeight: 800, margin: '0 0 14px 0' }}>
              {isEn ? '2. Which area interests you most?' : '2. 어떤 목표에 가장 관심이 있나요?'}
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '10px',
                marginBottom: '14px',
              }}
            >
              {GOAL_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, goal: opt.value }));
                    setStep(2);
                  }}
                  style={{
                    textAlign: 'left',
                    padding: '13px 14px',
                    borderRadius: '14px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'border-color 0.15s ease, background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0891b2';
                    e.currentTarget.style.background = '#f0f9ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.background = '#f8fafc';
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{opt.icon}</span>
                  <span>{isEn ? opt.en : opt.ko}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(0)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 0',
              }}
            >
              <ArrowLeft size={14} />
              <span>{isEn ? 'Back' : '이전 질문'}</span>
            </button>
          </div>
        )}

        {/* Step 2: Learning Style */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '1.12rem', fontWeight: 800, margin: '0 0 14px 0' }}>
              {isEn ? '3. How do you prefer to learn?' : '3. 선호하는 학습 방식은 무엇인가요?'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
              {STYLE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, style: opt.value }));
                    setStep(3);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'border-color 0.15s ease, background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0891b2';
                    e.currentTarget.style.background = '#f0f9ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.background = '#f8fafc';
                  }}
                >
                  <span>{isEn ? opt.en : opt.ko}</span>
                  <ArrowRight size={16} color="#64748b" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 0',
              }}
            >
              <ArrowLeft size={14} />
              <span>{isEn ? 'Back' : '이전 질문'}</span>
            </button>
          </div>
        )}

        {/* Step 3: Recommendation Result */}
        {step === 3 && (
          <div>
            <div
              style={{
                padding: '16px',
                borderRadius: '16px',
                background: '#f0f9ff',
                border: '1.5px solid #bae6fd',
                marginBottom: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '1.35rem' }}>{result.roadmap.icon}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                  {isEn
                    ? `${result.roadmap.title_en} Roadmap`
                    : `${result.roadmap.title_ko} 로드맵`}
                </h3>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                {isEn ? result.reason_en : result.reason_ko}
              </p>
            </div>

            {/* Ordered Steps Preview */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '14px',
                maxHeight: '240px',
                overflowY: 'auto',
              }}
            >
              {resolvedSteps.map(({ track, module }, idx) => {
                const locked = Boolean(module.isLocked);
                return (
                  <div
                    key={module.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      background: locked ? '#f8fafc' : '#ffffff',
                      border: locked ? '1.5px solid #e2e8f0' : '1.5px solid #10b981',
                      opacity: locked ? 0.78 : 1,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          fontFamily: 'var(--font-mono)',
                          color: locked ? '#64748b' : '#059669',
                          background: locked ? '#e2e8f0' : '#d1fae5',
                          padding: '2px 7px',
                          borderRadius: '6px',
                          flexShrink: 0,
                        }}
                      >
                        STEP {String(idx + 1).padStart(2, '0')}
                      </span>
                      <LanguageIcon language={track.id} size={20} />
                      <span
                        style={{
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {(isEn ? module.title_en : module.title_ko).split(' (')[0]}
                      </span>
                    </div>

                    {locked ? (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#64748b',
                          flexShrink: 0,
                        }}
                      >
                        <Lock size={12} />
                        {isEn ? 'Soon' : '준비 중'}
                      </span>
                    ) : (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: '#059669',
                          flexShrink: 0,
                        }}
                      >
                        <CheckCircle2 size={13} />
                        {isEn ? 'Open' : '학습 가능'}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {!firstUnlocked && (
              <div
                style={{
                  fontSize: '0.8rem',
                  color: '#475569',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '9px 12px',
                  marginBottom: '14px',
                }}
              >
                {isEn
                  ? 'This track is opening soon. You can start core coding basics now with Python Basics.'
                  : '해당 트랙은 순차 오픈 예정입니다. 현재 오픈된 파이썬 베이직으로 기초를 먼저 시작할 수 있습니다.'}
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setStep(0)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 4px',
                }}
              >
                <RotateCcw size={14} />
                <span>{isEn ? 'Retry' : '다시 선택'}</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    onSelectRoadmap(result.roadmap.id);
                    onClose();
                  }}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  {isEn ? 'Apply Roadmap' : '이 로드맵 보기'}
                </button>

                <button
                  onClick={() => {
                    onSelectRoadmap(result.roadmap.id);
                    onClose();
                    router.push(firstUnlocked ? firstUnlocked.module.practiceUrl : '/practice/python_basic');
                  }}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '12px',
                    background: '#0891b2',
                    border: '1.5px solid #0891b2',
                    color: '#ffffff',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(8, 145, 178, 0.28)',
                  }}
                >
                  <span>
                    {firstUnlocked
                      ? (isEn ? 'Start Step 1 Now' : '1단계 바로 시작')
                      : (isEn ? 'Start Python Basics' : '파이썬 베이직 시작')}
                  </span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
