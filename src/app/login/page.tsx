'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  AtSign,
  Building2,
  CheckCircle2,
  Copy,
  GraduationCap,
  KeyRound,
  Lock,
  Mail,
  RefreshCw,
  Sparkles,
  User,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import { generateAlphanumericInviteCode } from '@/lib/progressSync';
import { AVATAR_PRESETS } from '@/lib/avatarPresets';
import UserAvatar from '@/components/UserAvatar';
import type { OrganizationType } from '@/lib/supabase/types';

function localizeLoginCode(code: string, isKo: boolean): string {
  switch (code) {
    case 'INVALID_CREDENTIALS':
      return isKo
        ? '아이디(또는 이메일)와 비밀번호를 다시 확인해 주세요.'
        : 'Invalid username/email or password.';
    case 'USERNAME_LOGIN_UNAVAILABLE':
      return isKo
        ? 'ID 로그인 DB 함수가 아직 적용되지 않았습니다. 최신 SQL 마이그레이션을 실행하거나 이메일로 로그인해 주세요.'
        : 'Username login SQL migration is not applied yet. Please sign in with email.';
    case 'EMAIL_NOT_CONFIRMED':
      return isKo
        ? '이메일 인증이 완료되지 않았습니다. 받은편지함을 확인해 주세요.'
        : 'Email not confirmed yet. Please check your inbox.';
    case 'RATE_LIMITED':
      return isKo
        ? '로그인 시도가 너무 많습니다. 잠시 후 다시 시도해 주세요.'
        : 'Too many attempts. Please wait a moment.';
    default:
      return isKo
        ? '로그인 처리 중 오류가 발생했습니다. 다시 시도해 주세요.'
        : 'Could not complete sign-in. Please try again.';
  }
}

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const { user, refreshSessionAndProfile } = useAuth();
  const isKo = language === 'ko';

  const rawNext = searchParams.get('next');
  const safeNext =
    rawNext && rawNext.startsWith('/') && !rawNext.startsWith('//')
      ? rawNext
      : null;
  const oauthError = searchParams.get('error');

  const urlMode = searchParams.get('mode');

  // Sign-up or password reset mode inside /login
  const [mode, setMode] = useState<'login' | 'signup' | 'reset'>(() =>
    urlMode === 'reset' ? 'reset' : 'login'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  // Login fields
  const [identifier, setIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Reset password fields
  const [resetPassword, setResetPassword] = useState('');
  const [resetConfirmPassword, setResetConfirmPassword] = useState('');

  // Sign-up fields
  const [signupAccountType, setSignupAccountType] = useState<'student' | 'instructor'>('student');
  const [assignedInviteCode, setAssignedInviteCode] = useState<string>(() =>
    generateAlphanumericInviteCode(8)
  );
  const [copiedInvite, setCopiedInvite] = useState(false);
  const [instructorOrgType, setInstructorOrgType] = useState<OrganizationType>('school');
  const [instructorOrgName, setInstructorOrgName] = useState('');
  const [instructorClassName, setInstructorClassName] = useState('');
  const [agreeGroupPlanNotice, setAgreeGroupPlanNotice] = useState(true);
  const [studentInviteCode, setStudentInviteCode] = useState('');

  const [loginId, setLoginId] = useState('');
  const [idCheckStatus, setIdCheckStatus] = useState<
    'idle' | 'checking' | 'available' | 'taken' | 'invalid'
  >('idle');
  const [checkedIdValue, setCheckedIdValue] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [avatarPreset, setAvatarPreset] = useState('fox');
  const [signupEmail, setSignupEmail] = useState('');
  const [emailCheckStatus, setEmailCheckStatus] = useState<
    'idle' | 'checking' | 'available' | 'taken' | 'invalid'
  >('idle');
  const [checkedEmailValue, setCheckedEmailValue] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  useEffect(() => {
    if (oauthError === 'oauth') {
      setErrorMessage(
        isKo
          ? '소셜 또는 이메일 인증을 완료하지 못했습니다. 다시 시도해 주세요.'
          : 'Social or email verification could not be completed. Please try again.'
      );
    }
  }, [oauthError, isKo]);

  useEffect(() => {
    if (urlMode === 'reset') {
      setMode('reset');
    }
  }, [urlMode]);

  useEffect(() => {
    if (!isSupabaseConfigured()) return;
    const supabase = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setMode('reset');
        setErrorMessage(null);
        setInfoMessage(null);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user && mode !== 'reset' && urlMode !== 'reset') {
      router.replace(safeNext || '/languages');
    }
  }, [user, mode, urlMode, safeNext, router]);

  const buildCallbackUrl = (customTarget?: string) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const target = customTarget || safeNext || '/languages';
    return `${origin}/auth/callback?next=${encodeURIComponent(target)}`;
  };

  const checkUsernameAvailability = async (rawValue?: string): Promise<boolean> => {
    const candidate = (rawValue ?? loginId).trim().toLowerCase();
    if (!/^[a-z0-9_]{4,20}$/.test(candidate)) {
      setIdCheckStatus('invalid');
      return false;
    }

    if (!isSupabaseConfigured()) {
      setIdCheckStatus('available');
      setCheckedIdValue(candidate);
      return true;
    }

    setIdCheckStatus('checking');
    try {
      const supabase = createClient();
      const { data, error } = await supabase.rpc('check_username_available', {
        p_username: candidate,
      });

      let isAvailable = Boolean(data);
      if (error) {
        // Graceful fallback if SQL migration hasn't been executed yet
        const { data: existingRow } = await supabase
          .from('profiles')
          .select('id')
          .ilike('username', candidate)
          .maybeSingle();
        isAvailable = !existingRow;
      }

      setIdCheckStatus(isAvailable ? 'available' : 'taken');
      if (isAvailable) {
        setCheckedIdValue(candidate);
      }
      return isAvailable;
    } catch {
      setIdCheckStatus('idle');
      return false;
    }
  };

  const checkEmailAvailability = async (rawValue?: string): Promise<boolean> => {
    const candidate = (rawValue ?? signupEmail).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate)) {
      setEmailCheckStatus('invalid');
      return false;
    }

    if (!isSupabaseConfigured()) {
      setEmailCheckStatus('available');
      setCheckedEmailValue(candidate);
      return true;
    }

    setEmailCheckStatus('checking');
    try {
      const supabase = createClient();
      const { data, error } = await supabase.rpc('check_email_available', {
        p_email: candidate,
      });

      let isAvailable = Boolean(data);
      if (error) {
        const { data: existingRow } = await supabase
          .from('profiles')
          .select('id')
          .ilike('email', candidate)
          .maybeSingle();
        isAvailable = !existingRow;
      }

      setEmailCheckStatus(isAvailable ? 'available' : 'taken');
      if (isAvailable) {
        setCheckedEmailValue(candidate);
      }
      return isAvailable;
    } catch {
      setEmailCheckStatus('idle');
      return true;
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);

    const cleanIdentifier = identifier.trim();
    if (!cleanIdentifier || !loginPassword) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identifier: cleanIdentifier,
          password: loginPassword,
        }),
      });
      const payload = (await res.json()) as { ok?: boolean; code?: string };

      if (!res.ok || !payload.ok) {
        setErrorMessage(localizeLoginCode(payload.code || '', isKo));
        return;
      }

      await refreshSessionAndProfile();
      router.replace(safeNext || '/languages');
      router.refresh();
    } catch {
      setErrorMessage(
        isKo
          ? '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
          : 'Network error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);

    if (!isSupabaseConfigured()) {
      setErrorMessage(
        isKo
          ? '.env.local에 Supabase 설정이 필요합니다.'
          : 'Supabase environment variables are missing.'
      );
      return;
    }

    const cleanId = loginId.trim().toLowerCase();
    const cleanName = displayName.trim();
    const cleanEmail = signupEmail.trim().toLowerCase();

    if (!/^[a-z0-9_]{4,20}$/.test(cleanId)) {
      setIdCheckStatus('invalid');
      setErrorMessage(
        isKo
          ? '로그인 ID는 영문 소문자, 숫자, 밑줄(_) 조합 4~20자로 입력해 주세요.'
          : 'Login ID must be 4–20 lowercase letters, numbers, or underscores.'
      );
      return;
    }

    if (!cleanName) {
      setErrorMessage(
        isKo ? '닉네임을 입력해 주세요.' : 'Please enter a nickname.'
      );
      return;
    }

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setEmailCheckStatus('invalid');
      setErrorMessage(
        isKo
          ? '가입을 위해 유효한 이메일 주소를 필수로 입력해 주세요.'
          : 'A valid email address is required to sign up.'
      );
      return;
    }

    if (signupPassword.length < 6) {
      setErrorMessage(
        isKo
          ? '비밀번호는 최소 6자 이상이어야 합니다.'
          : 'Password must be at least 6 characters.'
      );
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      setErrorMessage(
        isKo
          ? '비밀번호와 비밀번호 확인이 일치하지 않습니다.'
          : 'Passwords do not match.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const available =
        idCheckStatus === 'available' && checkedIdValue === cleanId
          ? true
          : await checkUsernameAvailability(cleanId);

      if (!available) {
        setErrorMessage(
          isKo
            ? '이미 사용 중인 로그인 ID입니다. 다른 ID를 입력해 주세요.'
            : 'That Login ID is already taken. Please choose another.'
        );
        return;
      }

      const emailAvailable =
        emailCheckStatus === 'available' && checkedEmailValue === cleanEmail
          ? true
          : await checkEmailAvailability(cleanEmail);

      if (!emailAvailable) {
        setErrorMessage(
          isKo
            ? '이미 가입된 이메일입니다. 로그인 화면에서 로그인해 주세요.'
            : 'This email is already registered. Please sign in.'
        );
        return;
      }

      const isInstructorSignup = signupAccountType === 'instructor';
      if (isInstructorSignup && !agreeGroupPlanNotice) {
        setErrorMessage(
          isKo
            ? '강사 계정 가입을 위해 단체 구독제 및 학급 운영 안내에 동의해 주세요.'
            : 'Please confirm the group subscription plan notice for instructor accounts.'
        );
        return;
      }

      const supabase = createClient();
      const targetRedirectAfterSignup =
        safeNext || (isInstructorSignup ? '/lms' : '/languages');

      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password: signupPassword,
        options: {
          data: {
            login_id: cleanId,
            username: cleanId,
            name: cleanName,
            full_name: cleanName,
            avatar_preset: avatarPreset,
            account_role: isInstructorSignup ? 'instructor' : 'student',
            instructor_invite_code: isInstructorSignup ? assignedInviteCode : null,
            instructor_org_type: isInstructorSignup ? instructorOrgType : null,
            instructor_org_name:
              isInstructorSignup && instructorOrgName.trim()
                ? instructorOrgName.trim()
                : null,
            instructor_class_name:
              isInstructorSignup
                ? instructorClassName.trim() || `${cleanName} 강사님의 기본 학습반`
                : null,
            instructor_plan_seats: isInstructorSignup ? 30 : null,
            student_invite_code:
              !isInstructorSignup && studentInviteCode.trim()
                ? studentInviteCode.trim().toUpperCase()
                : null,
          },
          emailRedirectTo: buildCallbackUrl(targetRedirectAfterSignup),
        },
      });

      if (error) {
        const lower = error.message.toLowerCase();
        if (lower.includes('already registered')) {
          setErrorMessage(
            isKo
              ? '이미 가입된 이메일입니다. 로그인 화면에서 로그인해 주세요.'
              : 'This email is already registered. Please sign in.'
          );
        } else {
          setErrorMessage(error.message);
        }
        return;
      }

      // Supabase returns empty identities[] when email already exists in auth.users
      if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
        setEmailCheckStatus('taken');
        setErrorMessage(
          isKo
            ? '이미 가입된 이메일입니다. 로그인 화면에서 로그인해 주세요.'
            : 'This email is already registered. Please sign in.'
        );
        return;
      }

      if (data.session && data.user) {
        // Ensure profile row carries email, username, display_name, and avatar_preset immediately
        await supabase
          .from('profiles')
          .update({
            email: cleanEmail,
            username: cleanId,
            display_name: cleanName,
            avatar_preset: avatarPreset,
          })
          .eq('id', data.user.id);

        await refreshSessionAndProfile();
        router.replace(targetRedirectAfterSignup);
        router.refresh();
      } else {
        setInfoMessage(
          isInstructorSignup
            ? isKo
              ? `강사 계정 인증 이메일을 발송했습니다! 배정된 학급 초대코드 [${assignedInviteCode}]는 이메일 인증 후 강사용 LMS 리더보드에서 바로 확인하실 수 있습니다.`
              : `Verification email sent! Your assigned invite code [${assignedInviteCode}] will be active once verified.`
            : isKo
            ? '인증 이메일을 발송했습니다. 메일함의 확인 링크를 클릭하면 가입이 완료됩니다!'
            : 'Verification email sent! Click the link in your inbox to finish signing up.'
        );
      }
    } catch {
      setErrorMessage(
        isKo
          ? '회원가입 처리 중 오류가 발생했습니다. 다시 시도해 주세요.'
          : 'An error occurred during sign-up. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOAuthLogin = async (provider: 'github' | 'google') => {
    setErrorMessage(null);
    setInfoMessage(null);

    if (!isSupabaseConfigured()) return;

    setIsSubmitting(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: buildCallbackUrl(),
        },
      });
      if (error) {
        setErrorMessage(error.message);
        setIsSubmitting(false);
      }
    } catch {
      setErrorMessage(
        isKo ? '소셜 로그인 연결에 실패했습니다.' : 'Failed to start social sign-in.'
      );
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    setErrorMessage(null);
    setInfoMessage(null);

    const candidate = identifier.trim();
    if (!candidate || !candidate.includes('@')) {
      setErrorMessage(
        isKo
          ? '비밀번호 재설정 링크를 받으려면 입력란에 가입하신 이메일 주소를 입력해 주세요.'
          : 'Please enter your registered email address above to receive a reset link.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.resetPasswordForEmail(candidate, {
        redirectTo: buildCallbackUrl('/login?mode=reset'),
      });
      if (error) {
        setErrorMessage(error.message);
      } else {
        setInfoMessage(
          isKo
            ? '비밀번호 재설정 링크를 이메일로 보냈습니다. 메일의 링크를 누르면 이 사이트에서 새 비밀번호를 설정할 수 있습니다.'
            : 'Password reset link has been sent to your email. Click the link to set your new password here.'
        );
      }
    } catch {
      setErrorMessage(
        isKo ? '이메일 발송 중 오류가 발생했습니다.' : 'Failed to send reset email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);

    if (resetPassword.length < 6) {
      setErrorMessage(
        isKo
          ? '새 비밀번호는 6자 이상으로 입력해 주세요.'
          : 'New password must be at least 6 characters.'
      );
      return;
    }

    if (resetPassword !== resetConfirmPassword) {
      setErrorMessage(
        isKo
          ? '새 비밀번호와 비밀번호 확인이 일치하지 않습니다.'
          : 'New passwords do not match.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({
        password: resetPassword,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setResetPassword('');
      setResetConfirmPassword('');
      await refreshSessionAndProfile();
      setInfoMessage(
        isKo
          ? '비밀번호가 성공적으로 변경되었습니다. 학습 페이지로 이동합니다.'
          : 'Your password has been updated. Redirecting...'
      );
      setTimeout(() => {
        router.replace(safeNext || '/languages');
      }, 900);
    } catch {
      setErrorMessage(
        isKo
          ? '비밀번호 변경 중 오류가 발생했습니다. 재설정 링크를 다시 요청해 주세요.'
          : 'Failed to update password. Please request a new reset link.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px 12px 42px',
    background: '#f8fafc',
    border: '1.5px solid #cbd5e1',
    borderRadius: '12px',
    color: '#0f172a',
    fontSize: '0.92rem',
    outline: 'none',
    transition: 'border-color 0.15s ease, background-color 0.15s ease',
  };

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px 80px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: mode === 'signup' ? '520px' : '460px',
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '26px',
          padding: '36px 32px',
          boxShadow: '0 16px 40px -8px rgba(15, 23, 42, 0.1)',
          color: '#0f172a',
          transition: 'max-width 0.2s ease',
        }}
      >
        {/* Top back link */}
        <div style={{ marginBottom: '16px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#64748b',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={14} />
            <span>{isKo ? '홈으로' : 'Home'}</span>
          </Link>
        </div>

        {/* Minimal Header */}
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 22px',
            textAlign: 'center',
          }}
        >
          {mode === 'login'
            ? isKo
              ? '로그인'
              : 'Sign In'
            : mode === 'reset'
            ? isKo
              ? '새 비밀번호 설정'
              : 'Reset Password'
            : isKo
            ? '회원가입'
            : 'Sign Up'}
        </h1>

        {/* Redirect notice when coming from a protected learning page */}
        {safeNext && !errorMessage && !infoMessage && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              padding: '10px 14px',
              borderRadius: '12px',
              background: '#f0f9ff',
              border: '1px solid #bae6fd',
              color: '#0369a1',
              fontSize: '0.83rem',
              fontWeight: 600,
              marginBottom: '18px',
            }}
          >
            <AlertCircle size={16} style={{ flexShrink: 0, color: '#0284c7' }} />
            <span>
              {isKo
                ? '로그인이 필요한 서비스입니다.'
                : 'Please sign in to continue.'}
            </span>
          </div>
        )}

        {errorMessage && (
          <div
            role="alert"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              padding: '11px 14px',
              borderRadius: '12px',
              background: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#b91c1c',
              fontSize: '0.83rem',
              fontWeight: 600,
              lineHeight: 1.45,
              marginBottom: '18px',
            }}
          >
            <AlertCircle size={16} style={{ flexShrink: 0, color: '#dc2626' }} />
            <span>{errorMessage}</span>
          </div>
        )}

        {infoMessage && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              padding: '11px 14px',
              borderRadius: '12px',
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              color: '#047857',
              fontSize: '0.83rem',
              fontWeight: 600,
              lineHeight: 1.45,
              marginBottom: '18px',
            }}
          >
            <CheckCircle2 size={16} style={{ flexShrink: 0, color: '#059669' }} />
            <span>{infoMessage}</span>
          </div>
        )}

        {mode === 'reset' ? (
          <form
            onSubmit={handleResetPasswordSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                }}
              >
                {isKo ? '새 비밀번호' : 'New Password'}
              </label>
              <div style={{ position: 'relative' }}>
                <Lock
                  size={16}
                  style={{ position: 'absolute', left: '14px', top: '14px', color: '#64748b' }}
                />
                <input
                  type="password"
                  required
                  minLength={6}
                  autoComplete="new-password"
                  placeholder={isKo ? '새 비밀번호 (6자 이상)' : 'New password (6+ chars)'}
                  value={resetPassword}
                  onChange={(e) => setResetPassword(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#0891b2')}
                  onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                }}
              >
                {isKo ? '새 비밀번호 확인' : 'Confirm New Password'}
              </label>
              <div style={{ position: 'relative' }}>
                <Lock
                  size={16}
                  style={{ position: 'absolute', left: '14px', top: '14px', color: '#64748b' }}
                />
                <input
                  type="password"
                  required
                  minLength={6}
                  autoComplete="new-password"
                  placeholder={isKo ? '새 비밀번호 다시 입력' : 'Re-enter new password'}
                  value={resetConfirmPassword}
                  onChange={(e) => setResetConfirmPassword(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#0891b2')}
                  onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="tactile-btn tactile-btn-primary"
              style={{
                width: '100%',
                padding: '13px 20px',
                fontSize: '0.95rem',
                fontWeight: 800,
                marginTop: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              <span>
                {isSubmitting
                  ? isKo
                    ? '변경 중...'
                    : 'Updating...'
                  : isKo
                  ? '비밀번호 변경 완료'
                  : 'Update Password'}
              </span>
              <ArrowRight size={16} />
            </button>
          </form>
        ) : mode === 'login' ? (
          <form
            onSubmit={handleLoginSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                }}
              >
                {isKo ? '아이디 또는 이메일' : 'ID or Email'}
              </label>
              <div style={{ position: 'relative' }}>
                <User
                  size={16}
                  style={{ position: 'absolute', left: '14px', top: '14px', color: '#64748b' }}
                />
                <input
                  type="text"
                  required
                  autoComplete="username"
                  placeholder={isKo ? '아이디 또는 이메일' : 'ID or email'}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#0891b2')}
                  onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                }}
              >
                {isKo ? '비밀번호' : 'Password'}
              </label>
              <div style={{ position: 'relative' }}>
                <Lock
                  size={16}
                  style={{ position: 'absolute', left: '14px', top: '14px', color: '#64748b' }}
                />
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder={isKo ? '비밀번호' : 'Password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#0891b2')}
                  onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '7px',
                }}
              >
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleForgotPassword}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#0284c7',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {isKo ? '비밀번호 재설정' : 'Forgot?'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="tactile-btn tactile-btn-primary"
              style={{
                width: '100%',
                padding: '13px 20px',
                fontSize: '0.95rem',
                fontWeight: 800,
                marginTop: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              <span>
                {isSubmitting
                  ? isKo
                    ? '로그인 중...'
                    : 'Signing in...'
                  : isKo
                  ? '로그인'
                  : 'Sign In'}
              </span>
              <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleSignupSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            {/* 0. Account Type Selector: 일반 학습자 vs 강사 · 교육기관 계정 */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                }}
              >
                {isKo ? '가입 계정 유형 선택' : 'Select Account Type'}
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setSignupAccountType('student')}
                  style={{
                    padding: '12px 12px',
                    borderRadius: '14px',
                    border:
                      signupAccountType === 'student'
                        ? '2px solid #0891b2'
                        : '1.5px solid #cbd5e1',
                    background:
                      signupAccountType === 'student'
                        ? 'rgba(8, 145, 178, 0.08)'
                        : '#f8fafc',
                    color: '#0f172a',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      color: signupAccountType === 'student' ? '#0e7490' : '#0f172a',
                    }}
                  >
                    <User size={16} />
                    <span>{isKo ? '일반 학습자 계정' : 'Learner Account'}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      color: '#64748b',
                      marginTop: '4px',
                      lineHeight: 1.35,
                      fontWeight: 600,
                    }}
                  >
                    {isKo
                      ? '개인 코딩 학습 및 학급 초대코드 입장'
                      : 'Individual learning & join classes'}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSignupAccountType('instructor')}
                  style={{
                    padding: '12px 12px',
                    borderRadius: '14px',
                    border:
                      signupAccountType === 'instructor'
                        ? '2px solid #059669'
                        : '1.5px solid #cbd5e1',
                    background:
                      signupAccountType === 'instructor'
                        ? 'rgba(5, 150, 105, 0.09)'
                        : '#f8fafc',
                    color: '#0f172a',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      color: signupAccountType === 'instructor' ? '#047857' : '#0f172a',
                    }}
                  >
                    <GraduationCap size={16} />
                    <span>{isKo ? '강사 · 기관 계정' : 'Instructor Account'}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      color: '#64748b',
                      marginTop: '4px',
                      lineHeight: 1.35,
                      fontWeight: 600,
                    }}
                  >
                    {isKo
                      ? '단체 구독 학급 개설 · 초대코드 발급 · LMS'
                      : 'Group plan, invite code & LMS board'}
                  </div>
                </button>
              </div>
            </div>

            {/* 0-B. Instructor Account: Group Subscription Plan Notice & Assigned Alphanumeric Invite Code */}
            {signupAccountType === 'instructor' ? (
              <div
                style={{
                  borderRadius: '16px',
                  background: 'linear-gradient(180deg, #ecfdf5 0%, #f0fdf4 100%)',
                  border: '1.5px solid #6ee7b7',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontWeight: 900,
                      fontSize: '0.88rem',
                      color: '#065f46',
                    }}
                  >
                    <Sparkles size={15} color="#059669" />
                    <span>
                      {isKo
                        ? 'B2B · B2G 강사 단체 구독제 안내 & 초대코드 배정'
                        : 'B2B/B2G Group Subscription & Assigned Invite Code'}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      background: '#059669',
                      color: '#ffffff',
                    }}
                  >
                    {isKo ? '기본 30석 제공' : '30 Seats Default'}
                  </span>
                </div>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '18px',
                    fontSize: '0.78rem',
                    color: '#065f46',
                    lineHeight: 1.55,
                    fontWeight: 600,
                  }}
                >
                  <li>
                    <strong>단체 구독제(좌석제 라이선스):</strong> 학교(B2G)·학원·기업(B2B) 단위로 학생 좌석을 배정하여 전 과정 커리큘럼과 LMS 대시보드를 이용할 수 있습니다.
                  </li>
                  <li>
                    <strong>강사용 LMS 리더보드 제공:</strong> 담당 학생들의 현재 학습 커리큘럼, 진도율, 연속 출석 스트릭을 한눈에 관리하고 학생별 학습 레벨 초기화(<code>Lv.1</code>) 및 특정 레벨(<code>Lv.K</code>) 지정을 지원합니다.
                  </li>
                </ul>

                {/* Assigned Alphanumeric Invite Code Box */}
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: '1.5px solid #34d399',
                    padding: '11px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '0.73rem',
                        fontWeight: 800,
                        color: '#047857',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <KeyRound size={13} />
                      <span>
                        {isKo
                          ? '배정된 내 학급 초대코드 (영문+숫자 8자리)'
                          : 'Assigned Classroom Invite Code (Alphanumeric)'}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.22rem',
                        fontWeight: 900,
                        letterSpacing: '0.12em',
                        color: '#0f172a',
                        marginTop: '2px',
                      }}
                    >
                      {assignedInviteCode}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof navigator !== 'undefined' && navigator.clipboard) {
                          void navigator.clipboard.writeText(assignedInviteCode);
                          setCopiedInvite(true);
                          setTimeout(() => setCopiedInvite(false), 1800);
                        }
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 10px',
                        borderRadius: '8px',
                        border: '1px solid #a7f3d0',
                        background: '#ecfdf5',
                        color: '#065f46',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                      }}
                    >
                      <Copy size={12} />
                      <span>{copiedInvite ? '복사됨!' : '복사'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setAssignedInviteCode(generateAlphanumericInviteCode(8));
                        setCopiedInvite(false);
                      }}
                      title={isKo ? '새 초대코드 재발급' : 'Regenerate code'}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px 8px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        background: '#f8fafc',
                        color: '#475569',
                        cursor: 'pointer',
                      }}
                    >
                      <RefreshCw size={13} />
                    </button>
                  </div>
                </div>

                {/* Organization & Initial Classroom Name Inputs */}
                <div style={{ display: 'grid', gridTemplateColumns: '125px 1fr', gap: '8px' }}>
                  <select
                    value={instructorOrgType}
                    onChange={(e) => setInstructorOrgType(e.target.value as OrganizationType)}
                    style={{
                      padding: '9px 10px',
                      borderRadius: '10px',
                      border: '1px solid #6ee7b7',
                      background: '#ffffff',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#0f172a',
                    }}
                  >
                    <option value="school">학교 (B2G)</option>
                    <option value="academy">학원 (B2B)</option>
                    <option value="company">기업 (B2B)</option>
                    <option value="government">공공기관</option>
                  </select>

                  <div style={{ position: 'relative' }}>
                    <Building2
                      size={15}
                      style={{ position: 'absolute', left: '11px', top: '11px', color: '#059669' }}
                    />
                    <input
                      type="text"
                      maxLength={60}
                      placeholder={
                        isKo
                          ? '소속 학교/학원/기관명 (예: 서울코딩고)'
                          : 'Organization / School name'
                      }
                      value={instructorOrgName}
                      onChange={(e) => setInstructorOrgName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '9px 12px 9px 34px',
                        borderRadius: '10px',
                        border: '1px solid #6ee7b7',
                        background: '#ffffff',
                        fontSize: '0.83rem',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    maxLength={60}
                    placeholder={
                      isKo
                        ? '기본 개설 학급명 (예: 1학년 3반 파이썬 기초 — 미입력 시 자동 생성)'
                        : 'Initial classroom name (optional)'
                    }
                    value={instructorClassName}
                    onChange={(e) => setInstructorClassName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '10px',
                      border: '1px solid #6ee7b7',
                      background: '#ffffff',
                      fontSize: '0.83rem',
                    }}
                  />
                </div>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '0.77rem',
                    fontWeight: 700,
                    color: '#065f46',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={agreeGroupPlanNotice}
                    onChange={(e) => setAgreeGroupPlanNotice(e.target.checked)}
                    style={{ accentColor: '#059669' }}
                  />
                  <span>
                    {isKo
                      ? '단체 구독제 안내 및 배정된 초대코드(영문+숫자) 학급 개설에 동의합니다.'
                      : 'I confirm the group subscription plan and classroom invite code assignment.'}
                  </span>
                </label>
              </div>
            ) : (
              /* Student Optional Classroom Invite Code Input */
              <div
                style={{
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155' }}>
                  🏫 강사님께 받은 <strong>학급 초대코드</strong>가 있나요? (선택)
                </div>
                <input
                  type="text"
                  maxLength={10}
                  placeholder="영문+숫자 코드"
                  value={studentInviteCode}
                  onChange={(e) =>
                    setStudentInviteCode(
                      e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')
                    )
                  }
                  style={{
                    width: '130px',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    textAlign: 'center',
                    letterSpacing: '0.06em',
                  }}
                />
              </div>
            )}

            {/* 1. Login ID with duplicate check */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                }}
              >
                {isKo ? '아이디' : 'ID'}
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <AtSign
                    size={16}
                    style={{ position: 'absolute', left: '14px', top: '14px', color: '#64748b' }}
                  />
                  <input
                    type="text"
                    required
                    maxLength={20}
                    autoComplete="username"
                    placeholder={isKo ? '영문 소문자, 숫자, _ (4~20자)' : '4-20 chars (a-z, 0-9, _)'}
                    value={loginId}
                    onChange={(e) => {
                      const next = e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '');
                      setLoginId(next);
                      setIdCheckStatus('idle');
                    }}
                    onBlur={() => {
                      if (loginId.length >= 4) {
                        void checkUsernameAvailability(loginId);
                      }
                    }}
                    style={inputStyle}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => void checkUsernameAvailability(loginId)}
                  disabled={isSubmitting || loginId.length < 4}
                  style={{
                    padding: '0 14px',
                    borderRadius: '12px',
                    background: 'rgba(8, 145, 178, 0.12)',
                    border: '1.5px solid rgba(8, 145, 178, 0.35)',
                    color: '#0891b2',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: loginId.length < 4 ? 'not-allowed' : 'pointer',
                    opacity: loginId.length < 4 ? 0.5 : 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {idCheckStatus === 'checking'
                    ? isKo
                      ? '확인 중...'
                      : 'Checking...'
                    : isKo
                    ? '중복 확인'
                    : 'Check'}
                </button>
              </div>
              {idCheckStatus === 'available' && (
                <div style={{ fontSize: '0.76rem', color: '#059669', marginTop: '5px', fontWeight: 700 }}>
                  {isKo ? '사용 가능한 아이디입니다.' : 'Available.'}
                </div>
              )}
              {idCheckStatus === 'taken' && (
                <div style={{ fontSize: '0.76rem', color: '#dc2626', marginTop: '5px', fontWeight: 700 }}>
                  {isKo ? '이미 사용 중인 아이디입니다.' : 'Already taken.'}
                </div>
              )}
              {idCheckStatus === 'invalid' && (
                <div style={{ fontSize: '0.76rem', color: '#d97706', marginTop: '5px', fontWeight: 700 }}>
                  {isKo
                    ? '영문 소문자, 숫자, _ 조합 4~20자로 입력해 주세요.'
                    : 'Use 4–20 lowercase letters, numbers, or underscores.'}
                </div>
              )}
            </div>

            {/* 2. Nickname */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                }}
              >
                {isKo ? '닉네임' : 'Nickname'}
              </label>
              <div style={{ position: 'relative' }}>
                <User
                  size={16}
                  style={{ position: 'absolute', left: '14px', top: '14px', color: '#64748b' }}
                />
                <input
                  type="text"
                  required
                  maxLength={24}
                  placeholder={isKo ? '닉네임' : 'Nickname'}
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* 3. Built-in Default Profile Icon Picker */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                {isKo ? '프로필 아이콘' : 'Profile Icon'}
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '8px',
                  padding: '10px',
                  borderRadius: '14px',
                  background: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                }}
              >
                {AVATAR_PRESETS.map((preset) => {
                  const selected = avatarPreset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      title={isKo ? preset.labelKo : preset.labelEn}
                      onClick={() => setAvatarPreset(preset.id)}
                      style={{
                        padding: '6px',
                        borderRadius: '12px',
                        boxSizing: 'border-box',
                        background: selected ? 'rgba(8, 145, 178, 0.14)' : '#ffffff',
                        border: selected
                          ? '2px solid #0891b2'
                          : '2px solid #e2e8f0',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        outline: 'none',
                        transition: 'background-color 0.15s ease, border-color 0.15s ease',
                      }}
                    >
                      <UserAvatar avatarPreset={preset.id} size={38} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Email (Mandatory) */}
            <div>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#334155',
                  marginBottom: '6px',
                }}
              >
                <span>{isKo ? '이메일' : 'Email'}</span>
                <span style={{ color: '#dc2626', fontSize: '0.76rem', fontWeight: 800 }}>
                  {isKo ? '(필수)' : '(Required)'}
                </span>
              </label>
              <div style={{ position: 'relative' }}>
                <Mail
                  size={16}
                  style={{ position: 'absolute', left: '14px', top: '14px', color: '#64748b' }}
                />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={isKo ? '이메일 주소 (비밀번호 재설정 및 계정 식별 필수)' : 'you@example.com (required)'}
                  value={signupEmail}
                  onChange={(e) => {
                    setSignupEmail(e.target.value);
                    setEmailCheckStatus('idle');
                  }}
                  onBlur={() => {
                    if (signupEmail.trim().length > 3) {
                      void checkEmailAvailability(signupEmail);
                    }
                  }}
                  style={inputStyle}
                />
              </div>
              {emailCheckStatus === 'available' && (
                <div style={{ fontSize: '0.76rem', color: '#059669', marginTop: '5px', fontWeight: 700 }}>
                  {isKo ? '사용 가능한 이메일입니다.' : 'Email is available.'}
                </div>
              )}
              {emailCheckStatus === 'taken' && (
                <div style={{ fontSize: '0.76rem', color: '#dc2626', marginTop: '5px', fontWeight: 700 }}>
                  {isKo ? '이미 가입된 이메일입니다.' : 'This email is already registered.'}
                </div>
              )}
              {emailCheckStatus === 'invalid' && (
                <div style={{ fontSize: '0.76rem', color: '#d97706', marginTop: '5px', fontWeight: 700 }}>
                  {isKo ? '유효한 이메일 형식을 입력해 주세요.' : 'Please enter a valid email address.'}
                </div>
              )}
            </div>

            {/* 5. Password & Confirm */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#334155',
                    marginBottom: '6px',
                  }}
                >
                  {isKo ? '비밀번호' : 'Password'}
                </label>
                <div style={{ position: 'relative' }}>
                  <Lock
                    size={16}
                    style={{ position: 'absolute', left: '13px', top: '14px', color: '#64748b' }}
                  />
                  <input
                    type="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    placeholder={isKo ? '6자 이상' : '6+ chars'}
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    style={{ ...inputStyle, paddingLeft: '38px' }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#334155',
                    marginBottom: '6px',
                  }}
                >
                  {isKo ? '비밀번호 확인' : 'Confirm'}
                </label>
                <div style={{ position: 'relative' }}>
                  <Lock
                    size={16}
                    style={{ position: 'absolute', left: '13px', top: '14px', color: '#64748b' }}
                  />
                  <input
                    type="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    placeholder={isKo ? '비밀번호 확인' : 'Re-enter'}
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                    style={{ ...inputStyle, paddingLeft: '38px' }}
                  />
                </div>
              </div>
            </div>

            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                color: '#475569',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                style={{ accentColor: '#0891b2' }}
              />
              <span>
                {isKo
                  ? '이용약관 및 개인정보 처리방침 동의'
                  : 'Agree to Terms & Privacy Policy'}
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="tactile-btn tactile-btn-primary"
              style={{
                width: '100%',
                padding: '13px 20px',
                fontSize: '0.95rem',
                fontWeight: 800,
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              <span>
                {isSubmitting
                  ? isKo
                    ? '처리 중...'
                    : 'Creating...'
                  : isKo
                  ? '회원가입'
                  : 'Sign Up'}
              </span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        {/* Social OAuth Section */}
        {mode !== 'reset' && (
        <div style={{ marginTop: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '12px',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
              {isKo ? '소셜 로그인' : 'Social'}
            </span>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => void handleOAuthLogin('github')}
              style={{
                padding: '11px',
                borderRadius: '12px',
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
              }}
            >
              <img
                src="/icons/github.svg"
                alt=""
                width={18}
                height={18}
                style={{ display: 'block', flexShrink: 0 }}
              />
              <span>GitHub</span>
            </button>

            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => void handleOAuthLogin('google')}
              style={{
                padding: '11px',
                borderRadius: '12px',
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
              }}
            >
              <img
                src="/icons/google.svg"
                alt=""
                width={18}
                height={18}
                style={{ display: 'block', flexShrink: 0 }}
              />
              <span>Google</span>
            </button>
          </div>
        </div>
        )}

        {/* Mode Switcher Footer */}
        <div
          style={{
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid #e2e8f0',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#475569',
            fontWeight: 500,
          }}
        >
          {mode === 'login' ? (
            <>
              <span>{isKo ? '계정이 없으신가요? ' : 'No account? '}</span>
              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setErrorMessage(null);
                  setInfoMessage(null);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0284c7',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                {isKo ? '회원가입' : 'Sign Up'}
              </button>
            </>
          ) : (
            <>
              <span>{isKo ? '이미 계정이 있으신가요? ' : 'Have an account? '}</span>
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setErrorMessage(null);
                  setInfoMessage(null);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0284c7',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                {isKo ? '로그인' : 'Sign In'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
      <LoginPageContent />
    </Suspense>
  );
}

