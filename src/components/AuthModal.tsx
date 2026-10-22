'use client';

import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, User, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'signup';
}

export default function AuthModal({ isOpen, onClose, initialTab = 'login' }: AuthModalProps) {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(initialTab);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: true,
    agreeTerms: true,
  });

  useEffect(() => {
    setActiveTab(initialTab);
    setIsSuccess(false);
  }, [initialTab, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
    }, 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(5, 10, 24, 0.78)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          background: '#131e33',
          border: '1.5px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '24px',
          padding: '32px 30px',
          boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.7), 0 0 40px rgba(56, 189, 248, 0.1)',
          position: 'relative',
          color: '#f8fafc',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="닫기"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#94a3b8';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '2px solid #10b981',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              {activeTab === 'login' ? '로그인 성공!' : '회원가입 완료!'}
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              {activeTab === 'login' ? '환영합니다! 코딩 타자 모험을 즐겨보세요.' : 'TypingCode의 회원이 되신 것을 축하합니다!'}
            </p>
          </div>
        ) : (
          <>
            {/* Header Title & Badge */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                }}
              >
                <Sparkles size={13} />
                <span>TYPINGCODE ACCOUNT</span>
              </div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                {activeTab === 'login' ? t.auth.loginTitle : t.auth.signupTitle}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.45 }}>
                {activeTab === 'login' ? t.auth.loginSubtitle : t.auth.signupSubtitle}
              </p>
            </div>

            {/* Tab Switcher: 로그인 | 회원가입 */}
            <div
              style={{
                display: 'flex',
                background: 'rgba(11, 19, 41, 0.7)',
                borderRadius: '12px',
                padding: '4px',
                marginBottom: '22px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                style={{
                  flex: 1,
                  padding: '9px 0',
                  borderRadius: '9px',
                  border: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: activeTab === 'login' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                  color: activeTab === 'login' ? '#38bdf8' : '#94a3b8',
                  borderBottom: activeTab === 'login' ? '2px solid #38bdf8' : '2px solid transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                {t.auth.loginTab}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('signup')}
                style={{
                  flex: 1,
                  padding: '9px 0',
                  borderRadius: '9px',
                  border: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: activeTab === 'signup' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                  color: activeTab === 'signup' ? '#38bdf8' : '#94a3b8',
                  borderBottom: activeTab === 'signup' ? '2px solid #38bdf8' : '2px solid transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                {t.auth.signupTab}
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {activeTab === 'signup' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                    {t.auth.nameLabel}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} style={{ position: 'absolute', left: '14px', top: '13px', color: '#64748b' }} />
                    <input
                      type="text"
                      required
                      placeholder={t.auth.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px 11px 40px',
                        background: 'rgba(11, 19, 41, 0.8)',
                        border: '1.5px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '12px',
                        color: '#f8fafc',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#38bdf8')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                  {t.auth.emailLabel}
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '14px', top: '13px', color: '#64748b' }} />
                  <input
                    type="email"
                    required
                    placeholder={t.auth.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px 11px 40px',
                      background: 'rgba(11, 19, 41, 0.8)',
                      border: '1.5px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#38bdf8')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                  {t.auth.passwordLabel}
                </label>
                <div style={{ position: 'relative' }}>
                  <Lock size={16} style={{ position: 'absolute', left: '14px', top: '13px', color: '#64748b' }} />
                  <input
                    type="password"
                    required
                    placeholder={t.auth.passwordPlaceholder}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px 11px 40px',
                      background: 'rgba(11, 19, 41, 0.8)',
                      border: '1.5px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#38bdf8')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>
              </div>

              {activeTab === 'signup' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                    {t.auth.confirmPasswordLabel}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={16} style={{ position: 'absolute', left: '14px', top: '13px', color: '#64748b' }} />
                    <input
                      type="password"
                      required
                      placeholder={t.auth.confirmPasswordPlaceholder}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px 11px 40px',
                        background: 'rgba(11, 19, 41, 0.8)',
                        border: '1.5px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '12px',
                        color: '#f8fafc',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#38bdf8')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>
                </div>
              )}

              {/* Extras: Remember / Forgot for login, Terms for signup */}
              {activeTab === 'login' ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                      style={{ accentColor: '#38bdf8' }}
                    />
                    <span>{t.auth.rememberMe}</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => alert(language === 'ko' ? '비밀번호 재설정 링크가 이메일로 전송되었습니다.' : 'Password reset link sent!')}
                    style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    {t.auth.forgotPassword}
                  </button>
                </div>
              ) : (
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#94a3b8', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    style={{ accentColor: '#38bdf8' }}
                  />
                  <span>{t.auth.agreeTerms}</span>
                </label>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="tactile-btn tactile-btn-primary"
                style={{
                  width: '100%',
                  padding: '13px 20px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  marginTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span>{activeTab === 'login' ? t.auth.loginBtn : t.auth.signupBtn}</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Social Logins */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{t.auth.orSocial}</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#e2e8f0',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
                >
                  <span>🐙</span>
                  <span>GitHub</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#e2e8f0',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
                >
                  <span>🔍</span>
                  <span>Google</span>
                </button>
              </div>
            </div>

            {/* Bottom Switcher: "회원가입은 로그인으로 들어가면 나오도록 하자" */}
            <div
              style={{
                marginTop: '22px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center',
                fontSize: '0.84rem',
                color: '#94a3b8',
              }}
            >
              {activeTab === 'login' ? (
                <div>
                  <span>{t.auth.noAccount} </span>
                  <button
                    type="button"
                    onClick={() => setActiveTab('signup')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#38bdf8',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: '0.84rem',
                      textDecoration: 'underline',
                      padding: 0,
                    }}
                  >
                    {t.auth.signupTab}하기
                  </button>
                </div>
              ) : (
                <div>
                  <span>{t.auth.haveAccount} </span>
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#38bdf8',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: '0.84rem',
                      textDecoration: 'underline',
                      padding: 0,
                    }}
                  >
                    {t.auth.loginTab}하기
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
