'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isEn = language === 'en';

  // Do not render footer inside fullscreen practice/coding studio or code-typing arena
  const pathSegments = pathname?.split('/').filter(Boolean) || [];
  if (
    (pathSegments[0] === 'practice' && pathSegments.length >= 3) ||
    pathSegments[0] === 'code-typing'
  ) {
    return null;
  }

  const linkColor = '#475569';
  const copyrightColor = '#94a3b8';
  const borderColor = '#cbd5e1';
  const bgColor = '#e2eff6';

  return (
    <footer style={{
      background: bgColor,
      borderTop: `1.5px solid ${borderColor}`,
      padding: '28px 24px',
      transition: 'background-color 0.2s ease, border-color 0.2s ease',
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            flexShrink: 0,
          }}>
            ⌨️
          </div>
          <span style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            letterSpacing: '-0.4px',
            color: '#0f172a',
          }}>
            Typing<span style={{ color: '#0891b2' }}>Code</span>
          </span>
        </Link>

        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          {[
            { href: '/languages', ko: '언어학습', en: 'Learn' },
            { href: '/code-typing', ko: '코드타자', en: 'Code Typing' },
            { href: '/problems', ko: '문제풀이', en: 'Problems' },
            { href: '/compiler', ko: '컴파일러', en: 'Compiler' },
            { href: '/ranking', ko: '리더보드', en: 'Leaderboard' },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              style={{
                color: linkColor,
                textDecoration: 'none',
                fontSize: '0.86rem',
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

        <div style={{ fontSize: '0.8rem', color: copyrightColor }}>
          &copy; 2026 TypingCode
        </div>
      </div>
    </footer>
  );
}
