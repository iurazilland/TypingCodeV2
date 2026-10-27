import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Play, Lock, BookOpen, Star, Trophy, Sparkles } from 'lucide-react';
import { getLanguage, getLevelsForLanguage } from '@/lib/content';
import { SupportedLanguage } from '@/lib/types';

interface PageProps {
  params: {
    language: string;
  };
}

export default function LanguageLevelsPage({ params }: PageProps) {
  const langKey = params.language as SupportedLanguage;
  const language = getLanguage(langKey);

  if (!language) {
    notFound();
  }

  const activeLevels = getLevelsForLanguage(langKey);

  const emoji = langKey === 'python' ? '🐍' : langKey === 'web' ? '🌐' : '⚡';
  const buttonClass = langKey === 'python' ? 'tactile-btn-blue' : langKey === 'web' ? 'tactile-btn-orange' : 'tactile-btn-primary';

  // 10 Milestones in Phase 1
  const roadmapMilestones = [
    { num: 1, title: 'Hello World와 출력', desc: '컴퓨터와 첫 대화! 화면에 글자 띄우기', type: 'practice' },
    { num: 2, title: '변수와 기본 계산', desc: '데이터를 그릇에 담고 사칙연산하기', type: 'practice' },
    { num: 3, title: '문자열과 포맷팅', desc: '이름과 점수를 멋지게 꾸며 출력하기', type: 'practice' },
    { num: 4, title: '사용자 입력받기', desc: '키보드로 입력받아 대화형 프로그램 만들기', type: 'practice' },
    { num: 5, title: '🏆 [챌린지] 기초 문법 마스터', desc: '배운 실력을 뽐내는 10문항 실전 테스트!', type: 'challenge' },
    { num: 6, title: '숫자 변환과 계산 심화', desc: '문자를 숫자로 바꾸고 몫과 나머지 구하기', type: 'practice' },
    { num: 7, title: '크기 비교와 참/거짓', desc: '어떤 값이 더 큰지 컴퓨터에게 물어보기', type: 'practice' },
    { num: 8, title: '만약에(IF) 조건문', desc: '조건에 따라 다르게 행동하는 똑똑한 코드', type: 'practice' },
    { num: 9, title: 'IF-ELSE 두 갈래 길', desc: '합격과 불합격을 나누는 갈림길 제어', type: 'practice' },
    { num: 10, title: '🏆 [챌린지] 스마트 판독기', desc: '조건문을 완벽 마스터하는 실전 챌린지!', type: 'challenge' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#e2eff6' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 32px 80px' }}>
        {/* Back button */}
        <Link
          href="/languages"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#475569',
            fontSize: '0.92rem',
            fontWeight: 700,
            marginBottom: '24px',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={16} />
          <span>전체 언어 목록으로 돌아가기</span>
        </Link>

        {/* Language Header Banner */}
        <div style={{
          padding: '36px',
          borderRadius: '24px',
          background: '#ffffff',
          border: '2px solid #94a3b8',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.08)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              fontSize: '52px',
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: '#f8fafc',
              border: '2px solid #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {emoji}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  {language.name} 스테이지 맵
                </h1>
                <span style={{
                  padding: '3px 10px',
                  borderRadius: '8px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: '#2563eb',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  border: '1px solid rgba(59, 130, 246, 0.35)',
                }}>
                  {language.badge}
                </span>
              </div>
              <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '640px', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                {language.description}
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: '#f8fafc',
            padding: '16px 24px',
            borderRadius: '16px',
            border: '1.5px solid #cbd5e1',
          }}>
            <Trophy size={32} color="#f59e0b" />
            <div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>도전 과제</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                총 50 스테이지
              </div>
            </div>
          </div>
        </div>

        {/* Phase 1 Stage Cards Grid */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <Sparkles size={22} color="#10b981" />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Phase 1: 기초 문법과 첫 코딩 (Lv.1 ~ Lv.10)
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}>
            {roadmapMilestones.map((milestone) => {
              const activeLevel = activeLevels.find((l) => l.levelNumber === milestone.num);
              const isAvailable = !!activeLevel;
              const isChallenge = milestone.type === 'challenge';

              return (
                <div
                  key={milestone.num}
                  className="light-mode-card"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '200px',
                    border: isChallenge
                      ? '2px solid #f59e0b'
                      : isAvailable
                      ? '2px solid #94a3b8'
                      : '1.5px solid #cbd5e1',
                    background: isChallenge
                      ? '#fffbeb'
                      : isAvailable
                      ? '#ffffff'
                      : '#f1f5f9',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        color: isChallenge ? '#d97706' : '#0284c7',
                      }}>
                        STAGE {milestone.num.toString().padStart(2, '0')}
                      </span>

                      <span style={{
                        padding: '3px 8px',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        background: isChallenge ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.12)',
                        color: isChallenge ? '#d97706' : '#15803d',
                        border: isChallenge ? '1px solid #fcd34d' : '1px solid #86efac',
                      }}>
                        {isChallenge ? '⭐ 실전 챌린지' : '연습'}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                      {activeLevel ? activeLevel.title_ko : milestone.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                      {activeLevel ? activeLevel.description_ko : milestone.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                    {isAvailable ? (
                      <Link
                        href={`/practice/${langKey}/${milestone.num}`}
                        className={`tactile-btn ${isChallenge ? 'tactile-btn-orange' : buttonClass}`}
                        style={{
                          padding: '10px 18px',
                          fontSize: '0.88rem',
                          width: '100%',
                          borderRadius: '12px',
                        }}
                      >
                        <Play size={14} fill="#fff" />
                        <span>{isChallenge ? '챌린지 도전하기!' : '스테이지 시작'}</span>
                      </Link>
                    ) : (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        color: '#64748b',
                        fontSize: '0.85rem',
                        padding: '8px',
                        width: '100%',
                        background: '#e2e8f0',
                        borderRadius: '10px',
                      }}>
                        <Lock size={14} />
                        <span>준비 중인 스테이지</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
