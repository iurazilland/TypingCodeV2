'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, CheckSquare, Code2, Trophy, User, LogOut, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { user, profile, openAuthModal, signOut } = useAuth();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dedicated fullscreen practice studio has its own dedicated top header & controls
  // Only hide the global Navbar when inside an active practice/coding room (e.g. /practice/[language]/[level])
  const pathSegments = pathname?.split('/').filter(Boolean) || [];
  if (pathSegments[0] === 'practice' && pathSegments.length >= 3) {
    return null;
  }

  const isLightPage =
    pathname === '/' ||
    pathname === '/languages' ||
    pathname?.startsWith('/learn') ||
    (pathSegments[0] === 'practice' && pathSegments.length <= 2);

  const openLogin = (nextPath?: string) => {
    openAuthModal({
      tab: 'login',
      nextPath: nextPath ?? null,
      notice: nextPath
        ? language === 'ko'
          ? '실습·컴파일러·문제풀이 기능을 이용하려면 로그인이 필요합니다.'
          : 'Please sign in to access practice, compiler, and coding challenges.'
        : null,
    });
    setIsMobileMenuOpen(false);
  };

  const displayName =
    profile?.display_name ||
    (typeof user?.user_metadata?.name === 'string' && user.user_metadata.name) ||
    (user?.email ? user.email.split('@')[0] : 'Coder');

  const navItems = [
    {
      label: t.nav.learn,
      href: '/languages',
      icon: BookOpen,
      isActive: pathname.startsWith('/languages') || pathname.startsWith('/learn') || pathname.startsWith('/practice'),
      requiresAuth: false,
    },
    {
      label: t.nav.problems,
      href: '/problems',
      icon: CheckSquare,
      isActive: pathname.startsWith('/problems'),
      requiresAuth: true,
    },
    {
      label: t.nav.compiler,
      href: '/compiler',
      icon: Code2,
      isActive: pathname.startsWith('/compiler'),
      requiresAuth: true,
    },
    {
      label: t.nav.ranking,
      href: '/ranking',
      icon: Trophy,
      isActive: pathname.startsWith('/ranking'),
      requiresAuth: false,
    },
  ];

  return (
    <>
      <header
        className={`navbar-header ${isLightPage ? 'navbar-header-home' : ''}`}
        style={
          isLightPage
            ? {
                background: 'rgba(226, 239, 246, 0.9)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom: '1px solid #cbd5e1',
                boxShadow: '0 2px 12px -2px rgba(15, 23, 42, 0.05)',
              }
            : undefined
        }
      >
        {/* Left Side: Brand Logo & Title (Clean & Simple) */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(6, 182, 212, 0.35)',
                fontSize: '20px',
                flexShrink: 0,
              }}
            >
              ⌨️
            </div>
            <span
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                color: isLightPage ? '#0f172a' : '#f8fafc',
                whiteSpace: 'nowrap',
              }}
            >
              Typing<span style={{ color: '#0891b2' }}>Code</span>
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
              background: isLightPage ? '#f1f5f9' : 'rgba(255, 255, 255, 0.04)',
              border: isLightPage ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.08)',
              padding: '5px 8px',
              borderRadius: '14px',
              boxShadow: isLightPage ? 'none' : 'inset 0 1px 3px rgba(0, 0, 0, 0.2)',
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link-item ${item.isActive ? 'active' : ''}`}
                  title={item.label}
                  onClick={(e) => {
                    if (item.requiresAuth && !user) {
                      e.preventDefault();
                      openLogin(item.href);
                    }
                  }}
                >
                  <Icon size={16} style={{ flexShrink: 0 }} />
                  <span className="nav-link-text">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Side: Language Switcher + Login / User Profile + Mobile Toggle */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
          {/* Language Selector: KO / EN */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: isLightPage ? '#f1f5f9' : 'rgba(255, 255, 255, 0.04)',
              border: isLightPage ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.08)',
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
                border:
                  language === 'ko'
                    ? isLightPage
                      ? '1px solid #cbd5e1'
                      : '1px solid rgba(255, 255, 255, 0.12)'
                    : '1px solid transparent',
                background:
                  language === 'ko'
                    ? isLightPage
                      ? '#ffffff'
                      : 'rgba(255, 255, 255, 0.1)'
                    : 'transparent',
                color:
                  language === 'ko'
                    ? isLightPage
                      ? '#0f172a'
                      : '#ffffff'
                    : '#64748b',
                fontWeight: language === 'ko' ? 700 : 500,
                fontSize: '0.8rem',
                cursor: 'pointer',
                boxShadow: language === 'ko' && isLightPage ? '0 1px 2px rgba(15, 23, 42, 0.06)' : 'none',
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
                border:
                  language === 'en'
                    ? isLightPage
                      ? '1px solid #cbd5e1'
                      : '1px solid rgba(255, 255, 255, 0.12)'
                    : '1px solid transparent',
                background:
                  language === 'en'
                    ? isLightPage
                      ? '#ffffff'
                      : 'rgba(255, 255, 255, 0.1)'
                    : 'transparent',
                color:
                  language === 'en'
                    ? isLightPage
                      ? '#0f172a'
                      : '#ffffff'
                    : '#64748b',
                fontWeight: language === 'en' ? 700 : 500,
                fontSize: '0.8rem',
                cursor: 'pointer',
                boxShadow: language === 'en' && isLightPage ? '0 1px 2px rgba(15, 23, 42, 0.06)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              EN
            </button>
          </div>

          {user ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <div
                title={user.email || displayName}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '6px 12px',
                  borderRadius: '11px',
                  background: isLightPage ? '#ffffff' : 'rgba(56, 189, 248, 0.12)',
                  border: isLightPage ? '1px solid #cbd5e1' : '1px solid rgba(56, 189, 248, 0.3)',
                  color: isLightPage ? '#0f172a' : '#f8fafc',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  maxWidth: '170px',
                }}
              >
                <span style={{ fontSize: '1rem', lineHeight: 1 }}>
                  {profile?.avatar_emoji || '🦊'}
                </span>
                <span
                  className="login-btn-text"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {displayName}
                </span>
              </div>

              <button
                type="button"
                onClick={() => void signOut()}
                title={language === 'ko' ? '로그아웃' : 'Sign Out'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 12px',
                  borderRadius: '11px',
                  background: isLightPage ? '#f1f5f9' : 'rgba(255, 255, 255, 0.06)',
                  border: isLightPage ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)',
                  color: isLightPage ? '#475569' : '#cbd5e1',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ef4444';
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isLightPage ? '#475569' : '#cbd5e1';
                  e.currentTarget.style.borderColor = isLightPage
                    ? '#cbd5e1'
                    : 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <LogOut size={15} style={{ flexShrink: 0 }} />
                <span className="login-btn-text">
                  {language === 'ko' ? '로그아웃' : 'Sign Out'}
                </span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => openLogin()}
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
                background: '#0891b2',
                border: '1px solid #0891b2',
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(8, 145, 178, 0.35)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.background = '#0e7490';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(8, 145, 178, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#0891b2';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(8, 145, 178, 0.35)';
              }}
            >
              <User size={15} style={{ flexShrink: 0 }} />
              <span className="login-btn-text">{t.nav.login}</span>
            </button>
          )}

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
              color: isLightPage ? '#0f172a' : '#f8fafc',
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
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (item.requiresAuth && !user) {
                    e.preventDefault();
                    openLogin(item.href);
                  }
                }}
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

          {user && (
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                void signOut();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '12px',
                fontSize: '0.96rem',
                fontWeight: 700,
                color: '#fca5a5',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                cursor: 'pointer',
              }}
            >
              <LogOut size={18} />
              <span>
                {displayName} · {language === 'ko' ? '로그아웃' : 'Sign Out'}
              </span>
            </button>
          )}
        </div>
      )}
    </>
  );
}
