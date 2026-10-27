'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import UnifiedHeroCard from '@/components/UnifiedHeroCard';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageIcon from '@/components/LanguageIcon';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '32px 32px 120px' }}>
      {/* 1. Main Hero Slogan Header */}
      <section style={{
        textAlign: 'center',
        maxWidth: '880px',
        margin: '20px auto 44px',
        padding: '0 20px',
      }}>
        {/* Subtle Eyebrow Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '20px',
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            display: 'inline-block',
          }} />
          <span style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#94a3b8',
            fontFamily: 'var(--font-mono)',
          }}>
            Interactive Code Learning Studio
          </span>
        </div>

        {/* Clean, Authoritative Slogan */}
        <h1 style={{
          fontSize: '3.4rem',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          color: '#ffffff',
          lineHeight: 1.15,
          marginBottom: '18px',
        }}>
          JUST TYPE IT{' '}
          <span style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}>
            AND CODE IT.
          </span>
        </h1>

        <p style={{
          fontSize: '1.14rem',
          color: '#94a3b8',
          lineHeight: 1.7,
          maxWidth: '740px',
          margin: '0 auto',
          fontWeight: 400,
          wordBreak: 'keep-all',
        }}>
          {t.slogan.subtitle}
        </p>
      </section>

      {/* 2. Unified Hero Card Studio */}
      <section style={{ marginBottom: '88px' }}>
        <UnifiedHeroCard />
      </section>

      {/* 3. "Why can you learn coding just by typing?" 4 Core Advantages */}
      <section style={{
        background: '#121622',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '54px 40px',
        marginBottom: '88px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 44px' }}>
          <div className="studio-badge" style={{ marginBottom: '14px' }}>
            {t.why.tag}
          </div>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', marginBottom: '12px', letterSpacing: '-0.015em' }}>
            {t.why.title}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.02rem', lineHeight: 1.65, margin: '0 auto', wordBreak: 'keep-all' }}>
            {t.why.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {/* Card 1 */}
          <div className="studio-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(59, 130, 246, 0.12)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
              }}>
                ⌨️
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                01
              </span>
            </div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#f8fafc', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
              {t.why.card1Title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
              {t.why.card1Desc}
            </p>
          </div>

          {/* Card 2 */}
          <div className="studio-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
              }}>
                💡
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                02
              </span>
            </div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#f8fafc', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
              {t.why.card2Title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
              {t.why.card2Desc}
            </p>
          </div>

          {/* Card 3 */}
          <div className="studio-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
              }}>
                🎯
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                03
              </span>
            </div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#f8fafc', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
              {t.why.card3Title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
              {t.why.card3Desc}
            </p>
          </div>

          {/* Card 4 */}
          <div className="studio-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(139, 92, 246, 0.12)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
              }}>
                🚀
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                04
              </span>
            </div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#f8fafc', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
              {t.why.card4Title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
              {t.why.card4Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Curriculum Tracks */}
      <section style={{ marginBottom: '88px' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div className="studio-badge" style={{ marginBottom: '14px' }}>
            Curriculum Tracks
          </div>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#f8fafc', marginBottom: '12px', letterSpacing: '-0.015em' }}>
            {t.courses.title}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.02rem', lineHeight: 1.6 }}>
            {t.courses.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {/* Card 1: Python */}
          <div className="studio-card" style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '340px',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <LanguageIcon language="python" size={40} />
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  background: 'rgba(59, 130, 246, 0.12)',
                  color: '#93c5fd',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                }}>
                  {t.courses.pyBadge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 12px' }}>
                {t.courses.pyTitle}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.65, margin: '0 0 24px' }}>
                {t.courses.pyDesc}
              </p>
            </div>

            <Link
              href="/practice/python/1"
              className="studio-btn"
              style={{
                width: '100%',
                background: 'rgba(59, 130, 246, 0.12)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                color: '#93c5fd',
              }}
            >
              <span>{t.courses.pyBtn}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2: Web */}
          <div className="studio-card" style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '340px',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <LanguageIcon language="web" size={40} />
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  background: 'rgba(249, 115, 22, 0.12)',
                  color: '#fdba74',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid rgba(249, 115, 22, 0.25)',
                }}>
                  {t.courses.webBadge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 12px' }}>
                {t.courses.webTitle}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.65, margin: '0 0 24px' }}>
                {t.courses.webDesc}
              </p>
            </div>

            <Link
              href="/practice/web/1"
              className="studio-btn"
              style={{
                width: '100%',
                background: 'rgba(249, 115, 22, 0.12)',
                borderColor: 'rgba(249, 115, 22, 0.3)',
                color: '#fdba74',
              }}
            >
              <span>{t.courses.webBtn}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3: C Language */}
          <div className="studio-card" style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '340px',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <LanguageIcon language="c" size={40} />
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  background: 'rgba(6, 182, 212, 0.12)',
                  color: '#67e8f9',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                }}>
                  {t.courses.cBadge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 12px' }}>
                {t.courses.cTitle}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.65, margin: '0 0 24px' }}>
                {t.courses.cDesc}
              </p>
            </div>

            <Link
              href="/practice/c/1"
              className="studio-btn"
              style={{
                width: '100%',
                background: 'rgba(6, 182, 212, 0.12)',
                borderColor: 'rgba(6, 182, 212, 0.3)',
                color: '#67e8f9',
              }}
            >
              <span>{t.courses.cBtn}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Target Audience Section */}
      <section style={{
        background: '#121622',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        padding: '36px 36px',
        marginBottom: '88px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '26px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            🎯 {t.audience.title}
          </h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '20px 22px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
          }}>
            <span style={{ fontSize: '1.4rem' }}>🧒</span>
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '4px', fontSize: '0.96rem' }}>
                {t.audience.card1Title}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55 }}>
                {t.audience.card1Desc}
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '20px 22px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
          }}>
            <span style={{ fontSize: '1.4rem' }}>⌨️</span>
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '4px', fontSize: '0.96rem' }}>
                {t.audience.card2Title}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55 }}>
                {t.audience.card2Desc}
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '20px 22px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
          }}>
            <span style={{ fontSize: '1.4rem' }}>📖</span>
            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '4px', fontSize: '0.96rem' }}>
                {t.audience.card3Title}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55 }}>
                {t.audience.card3Desc}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Invitation Card (CTA) */}
      <section style={{
        background: 'linear-gradient(180deg, #151b28 0%, #10141e 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '56px 36px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          background: 'rgba(37, 99, 235, 0.15)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          marginBottom: '20px',
        }}>
          🚀
        </div>

        <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.015em' }}>
          {t.cta.title}
        </h2>
        <p style={{
          fontSize: '1.05rem',
          color: '#94a3b8',
          maxWidth: '680px',
          margin: '0 auto 32px',
          whiteSpace: 'pre-line',
          lineHeight: 1.65,
        }}>
          {t.cta.subtitle}
        </p>

        <Link
          href="/practice/python/1"
          className="studio-btn studio-btn-primary"
          style={{
            padding: '16px 36px',
            fontSize: '1.08rem',
            borderRadius: '14px',
          }}
        >
          <span>{t.cta.btn}</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
