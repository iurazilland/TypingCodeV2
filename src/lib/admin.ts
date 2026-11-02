import type { User } from '@supabase/supabase-js';
import type { UserProfile } from '@/lib/supabase/types';

/**
 * 기본 지정 관리자 ID 목록 (로그인 ID, 이메일 앞자리, 또는 전체 이메일, 소문자 기준)
 * 추가 관리자 ID는 아래 배열에 추가하거나 .env.local 의 NEXT_PUBLIC_ADMIN_IDS 에 콤마(,)로 구분해 지정할 수 있습니다.
 */
export const DEFAULT_ADMIN_IDS: readonly string[] = [
  'iurazilland@gmail.com',
  'iurazilland',
  'admin',
  'easyp',
  'typingcode',
  'master',
];

export function getConfiguredAdminIds(): string[] {
  const envRaw = process.env.NEXT_PUBLIC_ADMIN_IDS || '';
  const envIds = envRaw
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  return Array.from(new Set([...DEFAULT_ADMIN_IDS.map((s) => s.toLowerCase()), ...envIds]));
}

/**
 * 현재 로그인한 사용자가 지정된 관리자 ID인지 판별합니다.
 */
export function isAdminUser(
  profile?: UserProfile | null,
  user?: User | null
): boolean {
  if (!user && !profile) return false;

  const adminSet = new Set(getConfiguredAdminIds());
  const candidates: string[] = [];

  if (profile?.username) {
    candidates.push(profile.username.trim().toLowerCase());
  }

  if (user?.email) {
    const cleanEmail = user.email.trim().toLowerCase();
    candidates.push(cleanEmail);
    const emailPrefix = cleanEmail.split('@')[0];
    if (emailPrefix) {
      candidates.push(emailPrefix);
    }
  }

  const meta = user?.user_metadata;
  if (meta) {
    for (const key of ['username', 'user_name', 'preferred_username']) {
      const val = meta[key];
      if (typeof val === 'string' && val.trim()) {
        candidates.push(val.trim().toLowerCase());
      }
    }
  }

  return candidates.some((id) => adminSet.has(id));
}

