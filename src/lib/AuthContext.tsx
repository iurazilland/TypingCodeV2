'use client';

import React, {
  Suspense,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import type { UserProfile } from '@/lib/supabase/types';
import { ensureUserProfile, syncProgressOnLogin } from '@/lib/progressSync';
import { useLanguage } from '@/lib/LanguageContext';
import AuthModal from '@/components/AuthModal';

const PROTECTED_PREFIXES = ['/practice', '/problems', '/challenges', '/compiler'];

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

interface OpenAuthModalOptions {
  tab?: 'login' | 'signup';
  nextPath?: string | null;
  notice?: string | null;
}

interface AuthContextValue {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  openAuthModal: (options?: OpenAuthModalOptions) => void;
  closeAuthModal: () => void;
  refreshProfile: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function AuthQueryListener({
  onRequireLogin,
  onLoginError,
}: {
  onRequireLogin: (nextPath: string | null) => void;
  onLoginError: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const loginFlag = searchParams.get('login');
    if (!loginFlag) return;

    const nextParam = searchParams.get('next');
    const safeNext =
      nextParam && nextParam.startsWith('/') && !nextParam.startsWith('//')
        ? nextParam
        : null;

    if (loginFlag === 'required') {
      onRequireLogin(safeNext);
    } else if (loginFlag === 'error') {
      onLoginError();
    }

    const params = new URLSearchParams(searchParams.toString());
    params.delete('login');
    params.delete('next');
    const rest = params.toString();
    router.replace(`${pathname}${rest ? `?${rest}` : ''}`, { scroll: false });
  }, [searchParams, pathname, router, onRequireLogin, onLoginError]);

  return null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { language } = useLanguage();

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');
  const [authModalNextPath, setAuthModalNextPath] = useState<string | null>(null);
  const [authModalNotice, setAuthModalNotice] = useState<string | null>(null);

  const syncedUserIdRef = useRef<string | null>(null);

  const hydrateUserAndProfile = useCallback(async (nextUser: User | null) => {
    setUser(nextUser);
    if (!nextUser) {
      setProfile(null);
      syncedUserIdRef.current = null;
      return;
    }

    const loadedProfile = await ensureUserProfile(nextUser);
    setProfile(loadedProfile);

    if (syncedUserIdRef.current !== nextUser.id) {
      syncedUserIdRef.current = nextUser.id;
      await syncProgressOnLogin(nextUser);
      const refreshedProfile = await ensureUserProfile(nextUser);
      setProfile(refreshedProfile);
    }
  }, []);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setIsLoading(false);
      return;
    }

    const supabase = createClient();
    let mounted = true;

    supabase.auth.getUser().then(async ({ data }) => {
      if (!mounted) return;
      await hydrateUserAndProfile(data.user ?? null);
      if (mounted) setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      void hydrateUserAndProfile(session?.user ?? null);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [hydrateUserAndProfile]);

  const handleRequireLogin = useCallback(
    (safeNext: string | null) => {
      setAuthModalTab('login');
      setAuthModalNextPath(safeNext);
      setAuthModalNotice(
        language === 'ko'
          ? '실습·컴파일러·문제풀이 기능을 이용하려면 로그인이 필요합니다.'
          : 'Please sign in to access practice, compiler, and coding challenges.'
      );
      setIsAuthModalOpen(true);
    },
    [language]
  );

  const handleLoginError = useCallback(() => {
    setAuthModalTab('login');
    setAuthModalNotice(
      language === 'ko'
        ? '소셜/이메일 인증 처리 중 문제가 발생했습니다. 다시 로그인해 주세요.'
        : 'Authentication could not be completed. Please try signing in again.'
    );
    setIsAuthModalOpen(true);
  }, [language]);

  const openAuthModal = useCallback((options?: OpenAuthModalOptions) => {
    setAuthModalTab(options?.tab ?? 'login');
    setAuthModalNextPath(options?.nextPath ?? null);
    setAuthModalNotice(options?.notice ?? null);
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
    setAuthModalNotice(null);
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!user) return;
    const updated = await ensureUserProfile(user);
    setProfile(updated);
  }, [user]);

  const signOut = useCallback(async () => {
    if (!isSupabaseConfigured()) return;
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    syncedUserIdRef.current = null;

    if (typeof window !== 'undefined' && isProtectedPath(window.location.pathname)) {
      router.push('/');
    }
    router.refresh();
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        openAuthModal,
        closeAuthModal,
        refreshProfile,
        signOut,
      }}
    >
      <Suspense fallback={null}>
        <AuthQueryListener
          onRequireLogin={handleRequireLogin}
          onLoginError={handleLoginError}
        />
      </Suspense>
      {children}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        initialTab={authModalTab}
        nextPath={authModalNextPath}
        noticeMessage={authModalNotice}
      />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}
