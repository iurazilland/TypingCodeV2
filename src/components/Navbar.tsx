'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  CheckSquare,
  ChevronDown,
  Code2,
  Flame,
  Keyboard,
  LogOut,
  Menu,
  Settings,
  Trophy,
  User,
  X,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import UserAvatar from '@/components/UserAvatar';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { user, profile, signOut } = useAuth();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsProfileMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Hide global Navbar inside fullscreen practice studio (/practice/[language]/[level])
  const pathSegments = pathname?.split('/').filter(Boolean) || [];
  if (pathSegments[0] === 'practice' && pathSegments.length >= 3) {
    return null;
  }

  // Unified Light Editorial Theme across all top-level pages (dark mode is strictly inside fullscreen /practice/[language]/[level])
  const isLightPage = true;

  const displayName =
    profile?.display_name ||
    (typeof user?.user_metadata?.name === 'string' && user.user_metadata.name) ||
    (user?.email ? user.email.split('@')[0] : 'Coder');

  const currentStreak = profile?.current_streak || 0;
  const totalAttendance = profile?.total_attendance_days || 0;
  const codeTypingLabel =
    (t.nav as Record<string, string>).codeTyping ||
    (language === 'ko' ? '코드타자' : 'Code Typing');

  const navItems = [
    {
      label: t.nav.learn,
      href: '/languages',
      icon: BookOpen,
      isActive:
        pathname.startsWith('/languages') ||
        pathname.startsWith('/learn') ||
        pathname.startsWith('/practice'),
    },
    {
      label: codeTypingLabel,
      href: '/code-typing',
      icon: Keyboard,
      isActive:
        pathname.startsWith('/code-typing') || pathname.startsWith('/challenges'),
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

  const loginHref =
    pathname && pathname !== '/' && pathname !== '/login'
      ? `/login?next=${encodeURIComponent(pathname)}`
      : '/login';

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
        {/* Left Side: Brand Logo */}
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

        {/* Center: Main Navigation Menus */}
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
              gap: '5px',
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
                >
                  <Icon size={16} style={{ flexShrink: 0 }} />
                  <span className="nav-link-text">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Side: Language Switcher + Login / User Profile Dropdown */}
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
                padding: '5px 10px',
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
              }}
            >
              KO
            </button>
            <button
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
              style={{
                padding: '5px 10px',
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
              }}
            >
              EN
            </button>
          </div>

          {user ? (
            <div ref={profileMenuRef} style={{ position: 'relative', flexShrink: 0 }}>
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                aria-label={language === 'ko' ? '내 정보 메뉴 열기' : 'Open profile menu'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '5px 10px 5px 6px',
                  borderRadius: '13px',
                  background: isLightPage ? '#ffffff' : 'rgba(15, 23, 42, 0.78)',
                  border: isLightPage
                    ? '1.5px solid #cbd5e1'
                    : '1.5px solid rgba(56, 189, 248, 0.32)',
                  color: isLightPage ? '#0f172a' : '#f8fafc',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: isLightPage
                    ? '0 2px 6px rgba(15, 23, 42, 0.05)'
                    : '0 4px 12px rgba(0, 0, 0, 0.25)',
                  transition: 'background-color 0.15s ease, border-color 0.15s ease',
                }}
              >
                <UserAvatar
                  avatarUrl={profile?.avatar_url}
                  avatarPreset={profile?.avatar_preset}
                  size={28}
                  alt={displayName}
                />
                <span
                  title={
                    language === 'ko'
                      ? `연속 출석 ${currentStreak}일 (누적 ${totalAttendance}일)`
                      : `${currentStreak}-day streak (${totalAttendance} total days)`
                  }
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    padding: '3px 8px',
                    borderRadius: '8px',
                    background: 'rgba(249, 115, 22, 0.15)',
                    color: isLightPage ? '#ea580c' : '#fb923c',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Flame size={12} />
                  <span>
                    {currentStreak}
                    {language === 'ko' ? '일' : 'd'}
                  </span>
                </span>
                <ChevronDown
                  size={14}
                  style={{
                    color: '#94a3b8',
                    transform: isProfileMenuOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.15s ease',
                  }}
                />
              </button>

              {isProfileMenuOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    width: '240px',
                    borderRadius: '18px',
                    background: '#ffffff',
                    border: '1.5px solid #cbd5e1',
                    boxShadow: '0 20px 44px -8px rgba(15, 23, 42, 0.16)',
                    padding: '10px',
                    zIndex: 1100,
                    color: '#0f172a',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px 12px',
                      borderBottom: '1px solid #e2e8f0',
                      marginBottom: '6px',
                    }}
                  >
                    <UserAvatar
                      avatarUrl={profile?.avatar_url}
                      avatarPreset={profile?.avatar_preset}
                      size={38}
                      alt={displayName}
                    />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          color: '#0f172a',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {displayName}
                      </div>
                      <div
                        style={{
                          fontSize: '0.74rem',
                          color: '#64748b',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {profile?.username ? `@${profile.username}` : user.email}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '6px',
                      padding: '4px 6px 10px',
                      borderBottom: '1px solid #e2e8f0',
                      marginBottom: '6px',
                      fontSize: '0.74rem',
                    }}
                  >
                    <div
                      style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '9px',
                        padding: '7px 8px',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ color: '#64748b' }}>
                        {language === 'ko' ? '완료 레벨' : 'Cleared'}
                      </div>
                      <div style={{ fontWeight: 800, color: '#0284c7', fontSize: '0.88rem' }}>
                        {profile?.cleared_levels_count || 0}
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '9px',
                        padding: '7px 8px',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ color: '#64748b' }}>
                        {language === 'ko' ? '연속 출석' : 'Streak'}
                      </div>
                      <div style={{ fontWeight: 800, color: '#ea580c', fontSize: '0.88rem' }}>
                        🔥 {profile?.current_streak || 0}
                        {language === 'ko' ? '일' : 'd'}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setIsProfileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '9px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = 'rgba(8, 145, 178, 0.1)')
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <Settings size={15} style={{ color: '#0891b2' }} />
                    <span>{language === 'ko' ? '내 정보' : 'My Profile'}</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      void signOut();
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '9px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: 'transparent',
                      border: 'none',
                      color: '#dc2626',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textAlign: 'left',
                      marginTop: '2px',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)')
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <LogOut size={15} />
                    <span>{language === 'ko' ? '로그아웃' : 'Sign Out'}</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href={loginHref}
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
                textDecoration: 'none',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              <User size={15} style={{ flexShrink: 0 }} />
              <span className="login-btn-text">{t.nav.login}</span>
            </Link>
          )}

          {/* Mobile Hamburger Toggle */}
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            zIndex: 999,
            background: 'rgba(255, 255, 255, 0.98)',
            borderBottom: '1.5px solid #cbd5e1',
            padding: '20px 24px',
            boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
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
                  color: item.isActive ? '#0891b2' : '#334155',
                  background: item.isActive
                    ? 'rgba(8, 145, 178, 0.1)'
                    : '#f8fafc',
                  border: item.isActive
                    ? '1px solid rgba(8, 145, 178, 0.35)'
                    : '1px solid #e2e8f0',
                  textDecoration: 'none',
                }}
              >
                <Icon size={18} style={{ color: item.isActive ? '#0891b2' : '#64748b' }} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {user ? (
            <>
              <Link
                href="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  textDecoration: 'none',
                }}
              >
                <Settings size={18} style={{ color: '#0891b2' }} />
                <span>{language === 'ko' ? '내 정보' : 'My Profile'}</span>
              </Link>
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
                  color: '#dc2626',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  cursor: 'pointer',
                }}
              >
                <LogOut size={18} />
                <span>{language === 'ko' ? '로그아웃' : 'Sign Out'}</span>
              </button>
            </>
          ) : (
            <Link
              href={loginHref}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 16px',
                borderRadius: '12px',
                fontSize: '0.96rem',
                fontWeight: 800,
                color: '#ffffff',
                background: '#0891b2',
                textDecoration: 'none',
              }}
            >
              <User size={18} />
              <span>{t.nav.login}</span>
            </Link>
          )}
        </div>
      )}
    </>
  );
}
