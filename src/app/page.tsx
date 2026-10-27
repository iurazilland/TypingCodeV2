'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Terminal as TerminalIcon, BookOpen, Layers } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageIcon from '@/components/LanguageIcon';

export default function HomePage() {
  const { t } = useLanguage();

  // Dynamic light body background for Brilliant Editorial Theme on homepage
  useEffect(() => {
    document.body.style.backgroundColor = '#f8fafc';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div style={{
      background: '#f8fafc',
      color: '#0f172a',
      minHeight: '100vh',
      marginTop: '-70px',
      paddingTop: '70px',
      overflowX: 'hidden',
    }}>
      {/* Background Subtle Ambience */}
      <div style={{
        position: 'relative',
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '36px 32px 120px',
      }}>
        {/* Subtle decorative lighting */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '420px',
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59, 130, 246, 0.08), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* 1. Main Hero Editorial Header */}
        <section style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '860px',
          margin: '36px auto 64px',
          padding: '0 20px',
        }}>
          {/* Authoritative Editorial Title */}
          <h1 style={{
            fontSize: '3.6rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#0f172a',
            lineHeight: 1.18,
            marginBottom: '20px',
          }}>
            JUST TYPE IT{' '}
            <span style={{
              color: '#2563eb',
              display: 'inline-block',
            }}>
              AND CODE IT.
            </span>
          </h1>

          <p style={{
            fontSize: '1.22rem',
            color: '#475569',
            lineHeight: 1.75,
            maxWidth: '740px',
            margin: '0 auto',
            fontWeight: 400,
            wordBreak: 'keep-all',
          }}>
            {t.slogan.subtitle}
          </p>
        </section>

        {/* 2. "Why can you learn coding just by typing?" 4 Core Advantages (Brilliant Grid) */}
        <section style={{
          position: 'relative',
          zIndex: 1,
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '24px',
          padding: '56px 44px',
          marginBottom: '84px',
          boxShadow: '0 4px 24px -6px rgba(15, 23, 42, 0.04)',
        }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 44px' }}>
            <div className="brilliant-badge" style={{ marginBottom: '14px' }}>
              {t.why.tag}
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}>
              {t.why.title}
            </h2>
            <p style={{
              color: '#475569',
              fontSize: '1.05rem',
              lineHeight: 1.65,
              margin: '0 auto',
              wordBreak: 'keep-all',
            }}>
              {t.why.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {/* Card 1 */}
            <div className="brilliant-card" style={{ padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#eff6ff',
                  border: '1px solid #dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                }}>
                  ⌨️
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                  01
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
                {t.why.card1Title}
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                {t.why.card1Desc}
              </p>
            </div>

            {/* Card 2 */}
            <div className="brilliant-card" style={{ padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                }}>
                  💡
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                  02
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
                {t.why.card2Title}
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                {t.why.card2Desc}
              </p>
            </div>

            {/* Card 3 */}
            <div className="brilliant-card" style={{ padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#fffbeb',
                  border: '1px solid #fde68a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                }}>
                  🎯
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                  03
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
                {t.why.card3Title}
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                {t.why.card3Desc}
              </p>
            </div>

            {/* Card 4 */}
            <div className="brilliant-card" style={{ padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#faf5ff',
                  border: '1px solid #e9d5ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                }}>
                  🚀
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                  04
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
                {t.why.card4Title}
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                {t.why.card4Desc}
              </p>
            </div>
          </div>
        </section>

        {/* 4. Core Curriculum Tracks */}
        <section id="tracks" style={{ position: 'relative', zIndex: 1, marginBottom: '84px' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            <div className="brilliant-badge" style={{ marginBottom: '14px' }}>
              Curriculum Tracks
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}>
              {t.courses.title}
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {t.courses.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}>
            {/* Card 1: Python */}
            <div className="brilliant-card" style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '350px',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                  <LanguageIcon language="python" size={42} />
                  <span style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    background: '#eff6ff',
                    color: '#2563eb',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid #bfdbfe',
                  }}>
                    {t.courses.pyBadge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.38rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px' }}>
                  {t.courses.pyTitle}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, margin: '0 0 24px' }}>
                  {t.courses.pyDesc}
                </p>
              </div>

              <Link
                href="/practice/python/1"
                className="brilliant-btn brilliant-btn-dark"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '13px 20px',
                }}
              >
                <span>{t.courses.pyBtn}</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Card 2: Web */}
            <div className="brilliant-card" style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '350px',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                  <LanguageIcon language="web" size={42} />
                  <span style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    background: '#fff7ed',
                    color: '#c2410c',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid #fed7aa',
                  }}>
                    {t.courses.webBadge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.38rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px' }}>
                  {t.courses.webTitle}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, margin: '0 0 24px' }}>
                  {t.courses.webDesc}
                </p>
              </div>

              <Link
                href="/practice/web/1"
                className="brilliant-btn brilliant-btn-dark"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '13px 20px',
                }}
              >
                <span>{t.courses.webBtn}</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Card 3: C Language */}
            <div className="brilliant-card" style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '350px',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                  <LanguageIcon language="c" size={42} />
                  <span style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    background: '#ecfeff',
                    color: '#0e7490',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid #a5f3fc',
                  }}>
                    {t.courses.cBadge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.38rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px' }}>
                  {t.courses.cTitle}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, margin: '0 0 24px' }}>
                  {t.courses.cDesc}
                </p>
              </div>

              <Link
                href="/practice/c/1"
                className="brilliant-btn brilliant-btn-dark"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '13px 20px',
                }}
              >
                <span>{t.courses.cBtn}</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Target Audience Section */}
        <section style={{
          position: 'relative',
          zIndex: 1,
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '20px',
          padding: '40px 36px',
          marginBottom: '84px',
          boxShadow: '0 2px 16px -4px rgba(15, 23, 42, 0.03)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.38rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              🎯 {t.audience.title}
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}>
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '22px 24px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
            }}>
              <span style={{ fontSize: '1.5rem' }}>🧒</span>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px', fontSize: '0.98rem' }}>
                  {t.audience.card1Title}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>
                  {t.audience.card1Desc}
                </div>
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '22px 24px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
            }}>
              <span style={{ fontSize: '1.5rem' }}>⌨️</span>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px', fontSize: '0.98rem' }}>
                  {t.audience.card2Title}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>
                  {t.audience.card2Desc}
                </div>
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '22px 24px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
            }}>
              <span style={{ fontSize: '1.5rem' }}>📖</span>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px', fontSize: '0.98rem' }}>
                  {t.audience.card3Title}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>
                  {t.audience.card3Desc}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Bottom Invitation Card (CTA) */}
        <section style={{
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '24px',
          padding: '60px 40px',
          textAlign: 'center',
          boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.25)',
          overflow: 'hidden',
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            marginBottom: '20px',
          }}>
            🚀
          </div>

          <h2 style={{
            fontSize: '2.3rem',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '14px',
            letterSpacing: '-0.02em',
          }}>
            {t.cta.title}
          </h2>
          <p style={{
            fontSize: '1.08rem',
            color: '#cbd5e1',
            maxWidth: '680px',
            margin: '0 auto 34px',
            whiteSpace: 'pre-line',
            lineHeight: 1.65,
          }}>
            {t.cta.subtitle}
          </p>

          <Link
            href="/practice/python/1"
            className="brilliant-btn brilliant-btn-primary"
            style={{
              padding: '16px 36px',
              fontSize: '1.08rem',
              borderRadius: '14px',
              boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)',
            }}
          >
            <span>{t.cta.btn}</span>
            <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </div>
  );
}
