'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import type { UserProfile } from '@/lib/supabase/types';
import {
  ensureUserProfile,
  PROGRESS_SYNCED_EVENT,
  syncProgressOnLogin,
} from '@/lib/progressSync';

const PROTECTED_PREFIXES = [
  '/practice',
  '/problems',
  '/code-typing',
  '/challenges',
  '/compiler',
  '/profile',
];

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

interface AuthContextValue {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  redirectToLogin: (nextPath?: string | null) => void;
  refreshSessionAndProfile: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const redirectToLogin = useCallback(
    (nextPath?: string | null) => {
      const safeNext =
        nextPath && nextPath.startsWith('/') && !nextPath.startsWith('//')
          ? nextPath
          : null;
      router.push(
        safeNext ? `/login?next=${encodeURIComponent(safeNext)}` : '/login'
      );
    },
    [router]
  );

  const refreshSessionAndProfile = useCallback(async () => {
    if (!isSupabaseConfigured()) return;
    const supabase = createClient();
    const { data } = await supabase.auth.getUser();
    await hydrateUserAndProfile(data.user ?? null);
  }, [hydrateUserAndProfile]);

  const refreshProfile = useCallback(async () => {
    if (!user) return;
    const updated = await ensureUserProfile(user);
    setProfile(updated);
  }, [user]);

  useEffect(() => {
    if (typeof window === 'undefined' || !user) return;
    const handleSynced = () => {
      void refreshProfile();
    };
    window.addEventListener(PROGRESS_SYNCED_EVENT, handleSynced);
    return () => {
      window.removeEventListener(PROGRESS_SYNCED_EVENT, handleSynced);
    };
  }, [user, refreshProfile]);

  const signOut = useCallback(async () => {
    if (!isSupabaseConfigured()) return;
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    syncedUserIdRef.current = null;

    if (typeof window !== 'undefined') {
      try {
        const keysToRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && (k.startsWith('cleared_levels_') || k.startsWith('section_feedback_'))) {
            keysToRemove.push(k);
          }
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k));
        window.dispatchEvent(new Event(PROGRESS_SYNCED_EVENT));
      } catch {
        // Ignore storage errors
      }
    }

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
        redirectToLogin,
        refreshSessionAndProfile,
        refreshProfile,
        signOut,
      }}
    >
      {children}
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
