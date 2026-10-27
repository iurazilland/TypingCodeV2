'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isEn = language === 'en';

  // Do not render footer inside fullscreen practice/coding studio
  const pathSegments = pathname?.split('/').filter(Boolean) || [];
  if (pathSegments[0] === 'practice' && pathSegments.length >= 3) {
    return null;
  }

  const isLightPage =
    pathname === '/' ||
    pathname === '/languages' ||
    pathname?.startsWith('/learn') ||
    (pathSegments[0] === 'practice' && pathSegments.length <= 2);

  const linkColor = isLightPage ? '#475569' : '#94a3b8';
  const mutedColor = isLightPage ? '#64748b' : '#64748b';
  const copyrightColor = isLightPage ? '#94a3b8' : '#475569';
  const borderColor = isLightPage ? '#cbd5e1' : 'rgba(255, 255, 255, 0.08)';
  const bgColor = isLightPage ? '#e2eff6' : '#0e121a';

  return (
    <footer style={{
      background: bgColor,
      borderTop: `1.5px solid ${borderColor}`,
      padding: '48px 24px 40px',
      transition: 'background-color 0.2s ease, border-color 0.2s ease',
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
        {/* Top Row: Brand & Quick Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
                fontSize: '16px',
                flexShrink: 0,
              }}>
                ⌨️
              </div>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                color: isLightPage ? '#0f172a' : '#f8fafc',
              }}>
                Typing<span style={{ color: '#0891b2' }}>Code</span>
              </span>
            </Link>
            <p style={{
              margin: 0,
              fontSize: '0.88rem',
              color: mutedColor,
              lineHeight: 1.5,
              maxWidth: '480px',
            }}>
              {isEn 
                ? 'Type, run, and master programming directly in your browser with real-time feedback.'
                : '키보드로 직접 따라치며 손으로 완성하는 차세대 실전 인터랙티브 코딩 플랫폼.'}
            </p>
          </div>

          {/* Nav Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}>
            {[
              { href: '/languages', ko: '커리큘럼', en: 'Curriculum' },
              { href: '/problems', ko: '문제풀이', en: 'Practice' },
              { href: '/compiler', ko: '샌드박스', en: 'Sandbox' },
              { href: '/ranking', ko: '리더보드', en: 'Leaderboard' },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                style={{
                  color: linkColor,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#0891b2'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = linkColor; }}
              >
                {isEn ? item.en : item.ko}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Row: Platform notes & Copyright */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          paddingTop: '20px',
          borderTop: `1px solid ${isLightPage ? 'rgba(203, 213, 225, 0.6)' : 'rgba(255, 255, 255, 0.05)'}`,
          fontSize: '0.82rem',
          color: copyrightColor,
        }}>
          <div>
            {isEn 
              ? 'Python · C · HTML/CSS · JavaScript · Java · SQL 13-Language Runtime'
              : '파이썬, C, 웹, 자바스크립트 등 13개 언어 브라우저 실시간 실행 지원'}
          </div>
          <div>
            &copy; 2026 TypingCode. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
