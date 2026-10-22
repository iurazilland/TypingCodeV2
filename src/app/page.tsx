'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import UnifiedHeroCard from '@/components/UnifiedHeroCard';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageIcon from '@/components/LanguageIcon';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: '1560px', margin: '0 auto', padding: '24px 40px 100px' }}>
      {/* 1. Main Hero Slogan Header */}
      <section style={{
        textAlign: 'center',
        maxWidth: '960px',
        margin: '20px auto 40px',
        padding: '0 20px',
      }}>
        <h1 style={{
          fontSize: '3.3rem',
          fontWeight: 900,
          letterSpacing: '0.01em',
          wordSpacing: '0.08em',
          color: '#ffffff',
          lineHeight: 1.2,
          marginBottom: '16px',
          textTransform: 'uppercase',
        }}>
          JUST TYPE IT{' '}
          <span style={{
            color: '#38bdf8',
            display: 'inline-block',
          }}>
            AND CODE IT.
          </span>
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: '#94a3b8',
          lineHeight: 1.65,
          maxWidth: '960px',
          margin: '0 auto',
          fontWeight: 500,
          wordBreak: 'keep-all',
        }}>
          {t.slogan.subtitle}
        </p>
      </section>

      {/* 2. Unified Hero Card Studio */}
      <section style={{ marginBottom: '84px' }}>
        <UnifiedHeroCard />
      </section>

      {/* 2. "Why can you learn coding just by typing?" 4 Core Advantages */}
      <section style={{
        background: 'var(--bg-surface, #131f3d)',
        border: '2px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '28px',
        padding: '52px 40px',
        marginBottom: '72px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '1150px', margin: '0 auto 40px' }}>
          <div style={{
            display: 'inline-block',
            padding: '5px 16px',
            borderRadius: '16px',
            background: 'rgba(56, 189, 248, 0.15)',
            color: '#38bdf8',
            fontSize: '0.85rem',
            fontWeight: 800,
            marginBottom: '12px',
          }}>
            {t.why.tag}
          </div>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            {t.why.title}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '1100px', margin: '0 auto', wordBreak: 'keep-all' }}>
            {t.why.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {/* Card 1 */}
          <div style={{
            background: '#131e33',
            border: '2px solid rgba(59, 130, 246, 0.4)',
            borderRadius: '22px',
            padding: '30px 26px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '14px',
            minHeight: '345px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'rgba(59, 130, 246, 0.2)',
              border: '1.5px solid rgba(96, 165, 250, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              flexShrink: 0,
            }}>
              ⌨️
            </div>
            <div style={{ minHeight: '64px', display: 'flex', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.24rem', fontWeight: 800, color: '#ffffff', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
                {t.why.card1Title}
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7, minHeight: '115px', margin: 0 }}>
              {t.why.card1Desc}
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            background: '#131e33',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '22px',
            padding: '30px 26px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '14px',
            minHeight: '345px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1.5px solid rgba(52, 211, 153, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              flexShrink: 0,
            }}>
              💡
            </div>
            <div style={{ minHeight: '64px', display: 'flex', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.24rem', fontWeight: 800, color: '#ffffff', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
                {t.why.card2Title}
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7, minHeight: '115px', margin: 0 }}>
              {t.why.card2Desc}
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            background: '#131e33',
            border: '2px solid rgba(249, 115, 22, 0.4)',
            borderRadius: '22px',
            padding: '30px 26px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '14px',
            minHeight: '345px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'rgba(249, 115, 22, 0.2)',
              border: '1.5px solid rgba(251, 146, 60, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              flexShrink: 0,
            }}>
              🎯
            </div>
            <div style={{ minHeight: '64px', display: 'flex', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.24rem', fontWeight: 800, color: '#ffffff', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
                {t.why.card3Title}
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7, minHeight: '115px', margin: 0 }}>
              {t.why.card3Desc}
            </p>
          </div>

          {/* Card 4 */}
          <div style={{
            background: '#131e33',
            border: '2px solid rgba(139, 92, 246, 0.4)',
            borderRadius: '22px',
            padding: '30px 26px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '14px',
            minHeight: '345px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'rgba(139, 92, 246, 0.2)',
              border: '1.5px solid rgba(167, 139, 250, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              flexShrink: 0,
            }}>
              🚀
            </div>
            <div style={{ minHeight: '64px', display: 'flex', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.24rem', fontWeight: 800, color: '#ffffff', whiteSpace: 'pre-line', lineHeight: 1.35, margin: 0 }}>
                {t.why.card4Title}
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7, minHeight: '115px', margin: 0 }}>
              {t.why.card4Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Simple & Colorful Course Selection Cards */}
      <section style={{ marginBottom: '72px' }}>
        <div style={{ textAlign: 'center', marginBottom: '38px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
            {t.courses.title}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
            {t.courses.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
        }}>
          {/* Card 1: Python */}
          <div className="quest-card" style={{
            padding: '34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '340px',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            background: '#131e33',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <LanguageIcon language="python" size={44} />
                <span style={{
                  padding: '5px 14px',
                  borderRadius: '16px',
                  background: 'rgba(59, 130, 246, 0.25)',
                  color: '#60a5fa',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  border: '1px solid rgba(96, 165, 250, 0.4)',
                }}>
                  {t.courses.pyBadge}
                </span>
              </div>

              <div style={{ minHeight: '38px', display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  {t.courses.pyTitle}
                </h3>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.96rem', lineHeight: 1.6, minHeight: '74px', margin: '14px 0 20px' }}>
                {t.courses.pyDesc}
              </p>
            </div>

            <Link
              href="/practice/python/1"
              className="tactile-btn tactile-btn-blue"
              style={{ padding: '14px 20px', width: '100%', fontSize: '1.02rem', borderRadius: '14px' }}
            >
              <span>{t.courses.pyBtn}</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Card 2: Web */}
          <div className="quest-card" style={{
            padding: '34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '340px',
            border: '2px solid rgba(249, 115, 22, 0.3)',
            background: '#131e33',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <LanguageIcon language="web" size={44} />
                <span style={{
                  padding: '5px 14px',
                  borderRadius: '16px',
                  background: 'rgba(249, 115, 22, 0.25)',
                  color: '#fb923c',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  border: '1px solid rgba(251, 146, 60, 0.4)',
                }}>
                  {t.courses.webBadge}
                </span>
              </div>

              <div style={{ minHeight: '38px', display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  {t.courses.webTitle}
                </h3>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.96rem', lineHeight: 1.6, minHeight: '74px', margin: '14px 0 20px' }}>
                {t.courses.webDesc}
              </p>
            </div>

            <Link
              href="/practice/web/1"
              className="tactile-btn tactile-btn-orange"
              style={{ padding: '14px 20px', width: '100%', fontSize: '1.02rem', borderRadius: '14px' }}
            >
              <span>{t.courses.webBtn}</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Card 3: C Language */}
          <div className="quest-card" style={{
            padding: '34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '340px',
            border: '2px solid rgba(6, 182, 212, 0.3)',
            background: '#131e33',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <LanguageIcon language="c" size={44} />
                <span style={{
                  padding: '5px 14px',
                  borderRadius: '16px',
                  background: 'rgba(6, 182, 212, 0.25)',
                  color: '#22d3ee',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  border: '1px solid rgba(34, 211, 238, 0.4)',
                }}>
                  {t.courses.cBadge}
                </span>
              </div>

              <div style={{ minHeight: '38px', display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  {t.courses.cTitle}
                </h3>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.96rem', lineHeight: 1.6, minHeight: '74px', margin: '14px 0 20px' }}>
                {t.courses.cDesc}
              </p>
            </div>

            <Link
              href="/practice/c/1"
              className="tactile-btn tactile-btn-primary"
              style={{ padding: '14px 20px', width: '100%', fontSize: '1.02rem', borderRadius: '14px' }}
            >
              <span>{t.courses.cBtn}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Recommendation Box */}
      <section style={{
        background: 'rgba(15, 23, 42, 0.7)',
        border: '1.5px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '38px 40px',
        marginBottom: '72px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '24px' }}>
          🎯 {t.audience.title}
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: '20px',
          width: '100%',
          textAlign: 'left',
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '20px 22px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            minHeight: '110px',
          }}>
            <span style={{ fontSize: '1.5rem' }}>🧒</span>
            <div>
              <div style={{ fontWeight: 800, color: '#f8fafc', marginBottom: '4px', minHeight: '24px' }}>
                {t.audience.card1Title}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', minHeight: '44px' }}>
                {t.audience.card1Desc}
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '20px 22px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            minHeight: '110px',
          }}>
            <span style={{ fontSize: '1.5rem' }}>⌨️</span>
            <div>
              <div style={{ fontWeight: 800, color: '#f8fafc', marginBottom: '4px', minHeight: '24px' }}>
                {t.audience.card2Title}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', minHeight: '44px' }}>
                {t.audience.card2Desc}
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '20px 22px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            minHeight: '110px',
          }}>
            <span style={{ fontSize: '1.5rem' }}>📖</span>
            <div>
              <div style={{ fontWeight: 800, color: '#f8fafc', marginBottom: '4px', minHeight: '24px' }}>
                {t.audience.card3Title}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', minHeight: '44px' }}>
                {t.audience.card3Desc}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Invitation Card */}
      <section style={{
        background: 'var(--bg-surface, #131f3d)',
        border: '2px solid rgba(52, 211, 153, 0.35)',
        borderRadius: '28px',
        padding: '54px 36px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '14px' }}>🚀</div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
          {t.cta.title}
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '780px', margin: '0 auto 28px', whiteSpace: 'pre-line', lineHeight: 1.65 }}>
          {t.cta.subtitle}
        </p>

        <Link
          href="/practice/python/1"
          className="tactile-btn tactile-btn-primary"
          style={{
            padding: '18px 36px',
            fontSize: '1.15rem',
            borderRadius: '16px',
            display: 'inline-flex',
          }}
        >
          <Sparkles size={22} />
          <span>{t.cta.btn}</span>
        </Link>
      </section>
    </div>
  );
}
