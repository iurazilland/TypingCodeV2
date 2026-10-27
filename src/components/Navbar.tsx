'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, CheckSquare, Code2, Trophy, User, Sparkles, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import AuthModal from '@/components/AuthModal';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dedicated fullscreen practice studio has its own dedicated top header & controls
  // Only hide the global Navbar when inside an active practice/coding room (e.g. /practice/[language]/[level])
  const pathSegments = pathname?.split('/').filter(Boolean) || [];
  if (pathSegments[0] === 'practice' && pathSegments.length >= 3) {
    return null;
  }

  const openLogin = () => {
    setAuthModalTab('login');
    setIsAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      label: t.nav.learn,
      href: '/languages',
      icon: BookOpen,
      isActive: pathname.startsWith('/languages') || pathname.startsWith('/learn') || pathname.startsWith('/practice'),
    },
    {
      label: t.nav.problems,
      href: '/problems',
      icon: CheckSquare,
      isActive: pathname.startsWith('/problems'),
    },
    {
      label: t.nav.compiler,
      href: '/compiler',
      icon: Code2,
      isActive: pathname.startsWith('/compiler'),
    },
    {
      label: t.nav.ranking,
      href: '/ranking',
      icon: Trophy,
      isActive: pathname.startsWith('/ranking'),
    },
  ];

  return (
    <>
      <header className="navbar-header">
        {/* Left Side: Brand Logo & Title (Clean & Simple) */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
                fontSize: '20px',
                flexShrink: 0,
              }}
            >
              ⌨️
            </div>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.5px', color: '#f8fafc', whiteSpace: 'nowrap' }}>
              Typing<span style={{ color: '#10b981' }}>Code</span>
            </span>
          </Link>
        </div>

        {/* Center: Main Navigation Menus (학습하기, 문제풀이, 자유코딩, 리더보드) */}
        <nav
          className="desktop-nav-center"
          style={{
            flex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '5px 8px',
              borderRadius: '16px',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)',
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link-item"
                  title={item.label}
                  style={{
                    fontWeight: item.isActive ? 700 : 500,
                    color: item.isActive ? '#ffffff' : '#94a3b8',
                    background: item.isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    border: item.isActive ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                    boxShadow: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    if (!item.isActive) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!item.isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#94a3b8';
                    }
                  }}
                >
                  <Icon size={16} style={{ color: item.isActive ? '#60a5fa' : '#64748b', flexShrink: 0 }} />
                  <span className="nav-link-text">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Side: Language Switcher + Login Button + Mobile Toggle */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
          {/* Language Selector: KO / EN */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '3px',
              gap: '2px',
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => setLanguage('ko')}
              aria-label="한국어로 변경"
              style={{
                padding: '5px 11px',
                borderRadius: '7px',
                border: language === 'ko' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                background: language === 'ko' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: language === 'ko' ? '#ffffff' : '#64748b',
                fontWeight: language === 'ko' ? 700 : 500,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              KO
            </button>
            <button
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
              style={{
                padding: '5px 11px',
                borderRadius: '7px',
                border: language === 'en' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                background: language === 'en' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: language === 'en' ? '#ffffff' : '#64748b',
                fontWeight: language === 'en' ? 700 : 500,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              EN
            </button>
          </div>

          {/* Login Button (Responsive: icon-only on narrow screens) */}
          <button
            onClick={openLogin}
            className="tactile-btn login-btn"
            title={t.nav.login}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '8px 18px',
              fontSize: '0.88rem',
              fontWeight: 700,
              borderRadius: '12px',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1.5px solid rgba(56, 189, 248, 0.45)',
              color: '#38bdf8',
              boxShadow: '0 4px 14px rgba(56, 189, 248, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(56, 189, 248, 0.35)';
              e.currentTarget.style.borderColor = '#38bdf8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(56, 189, 248, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.45)';
            }}
          >
            <User size={15} style={{ flexShrink: 0 }} />
            <span className="login-btn-text">{t.nav.login}</span>
          </button>

          {/* Mobile Hamburger Toggle Button (<= 768px) */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 토글"
            style={{
              display: 'none',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#f8fafc',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Drawer (<= 768px) */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            zIndex: 999,
            background: 'rgba(11, 19, 41, 0.98)',
            borderBottom: '1.5px solid rgba(56, 189, 248, 0.3)',
            padding: '20px 24px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            animation: 'slideUp 0.2s ease',
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: item.isActive ? '#38bdf8' : '#cbd5e1',
                  background: item.isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: item.isActive ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
                  textDecoration: 'none',
                }}
              >
                <Icon size={18} style={{ color: item.isActive ? '#38bdf8' : '#94a3b8' }} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      {/* Auth Modal (Login / Sign Up) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialTab={authModalTab}
      />
    </>
  );
}

