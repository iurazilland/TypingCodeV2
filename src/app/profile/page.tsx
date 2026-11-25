'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  AlertCircle,
  AtSign,
  Award,
  Calendar,
  Camera,
  CheckCircle2,
  Flame,
  Lock,
  RotateCcw,
  Save,
  Trophy,
  User,
  X,
  Zap,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import { createClient } from '@/lib/supabase/client';
import {
  AVATAR_PRESETS,
  encodeAvatarPresetWithBadge,
} from '@/lib/avatarPresets';
import UserAvatar from '@/components/UserAvatar';
import {
  deleteUploadedAvatar,
  uploadCompressedAvatar,
} from '@/lib/avatarCompression';
import {
  BADGE_CATEGORY_TABS,
  type BadgeCategory,
  evaluateUserBadges,
  getRepresentativeBadge,
} from '@/lib/badges';
import { CURRICULUM_TRACKS } from '@/lib/curriculum';
import { getClearedLevelsLocal } from '@/lib/progressSync';

const PRIMARY_LANG_OPTIONS = [
  'Python',
  'Web (JS)',
  'C언어',
  'C++',
  'Java',
  'Go',
  'Rust',
  'SQL',
];

export default function ProfilePage() {
  const { language } = useLanguage();
  const { user, profile, isLoading, refreshProfile } = useAuth();
  const isKo = language === 'ko';
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [displayName, setDisplayName] = useState('');
  const [primaryLanguage, setPrimaryLanguage] = useState('Python');
  const [selectedPreset, setSelectedPreset] = useState('fox');
  const [selectedBadge, setSelectedBadge] = useState<string>('auto');
  const [badgeCategoryFilter, setBadgeCategoryFilter] = useState<'all' | BadgeCategory>('all');
  const [isEquippingBadge, setIsEquippingBadge] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  // One-time Login ID setup for OAuth / V1 legacy accounts without a username
  const [newUsername, setNewUsername] = useState('');
  const [usernameStatus, setUsernameStatus] = useState<
    'idle' | 'checking' | 'available' | 'taken' | 'invalid'
  >('idle');

  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordModalError, setPasswordModalError] = useState<string | null>(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [statusBanner, setStatusBanner] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const [courseSummaries, setCourseSummaries] = useState<
    Array<{ id: string; title: string; cleared: number; total: number }>
  >([]);

  useEffect(() => {
    if (!profile) return;
    setDisplayName(profile.display_name || '');
    setPrimaryLanguage(profile.primary_language || 'Python');
    setSelectedPreset(profile.avatar_preset || 'fox');
    setSelectedBadge(profile.selected_badge || 'auto');
    setAvatarUrl(profile.avatar_url || null);
  }, [profile]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const summaries: Array<{
      id: string;
      title: string;
      cleared: number;
      total: number;
    }> = [];

    for (const track of CURRICULUM_TRACKS) {
      for (const mod of track.modules) {
        if (mod.isLocked || !mod.practiceUrl.startsWith('/practice/')) continue;
        const rawLang = mod.practiceUrl.replace(/^\/practice\//, '');
        const clearedList = getClearedLevelsLocal(rawLang);
        if (clearedList.length > 0) {
          summaries.push({
            id: mod.id,
            title: isKo ? mod.title_ko : mod.title_en,
            cleared: clearedList.length,
            total: mod.totalLevels,
          });
        }
      }
    }
    setCourseSummaries(summaries);
  }, [profile, isKo]);

  const handleSelectBuiltInIcon = (presetId: string) => {
    setSelectedPreset(presetId);
    // Selecting a built-in icon clears custom avatar_url so the preset shows
    setAvatarUrl(null);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !user) return;

    setStatusBanner(null);
    setIsUploadingAvatar(true);
    try {
      const { publicUrl } = await uploadCompressedAvatar(
        user.id,
        file
      );
      setAvatarUrl(publicUrl);

      const supabase = createClient();
      const { error } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id);

      if (error) {
        throw new Error(error.message);
      }

      await refreshProfile();
      setStatusBanner({
        type: 'success',
        text: isKo
          ? '프로필 이미지가 변경되었습니다.'
          : 'Profile image updated.',
      });
    } catch (err) {
      setStatusBanner({
        type: 'error',
        text:
          err instanceof Error
            ? err.message
            : isKo
            ? '이미지 업로드에 실패했습니다.'
            : 'Failed to upload image.',
      });
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  const handleResetToPresetAvatar = async () => {
    if (!user) return;
    setStatusBanner(null);
    setAvatarUrl(null);
    try {
      await deleteUploadedAvatar(user.id);
    } catch {
      // Non-fatal if no Storage object existed
    }
  };

  const checkNewUsername = async (): Promise<boolean> => {
    const clean = newUsername.trim().toLowerCase();
    if (!/^[a-z0-9_]{4,20}$/.test(clean)) {
      setUsernameStatus('invalid');
      return false;
    }

    setUsernameStatus('checking');
    try {
      const supabase = createClient();
      const { data, error } = await supabase.rpc('check_username_available', {
        p_username: clean,
      });

      let available = Boolean(data);
      if (error) {
        const { data: row } = await supabase
          .from('profiles')
          .select('id')
          .ilike('username', clean)
          .maybeSingle();
        available = !row;
      }

      setUsernameStatus(available ? 'available' : 'taken');
      return available;
    } catch {
      setUsernameStatus('idle');
      return false;
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setStatusBanner(null);

    const cleanName = displayName.trim();
    if (!cleanName) {
      setStatusBanner({
        type: 'error',
        text: isKo ? '닉네임을 입력해 주세요.' : 'Please enter a nickname.',
      });
      return;
    }

    const updatePayload: Record<string, unknown> = {
      display_name: cleanName,
      avatar_preset: encodeAvatarPresetWithBadge(selectedPreset, selectedBadge),
      avatar_url: avatarUrl,
      primary_language: primaryLanguage,
    };

    if (!profile?.username && newUsername.trim()) {
      const cleanId = newUsername.trim().toLowerCase();
      const ok = await checkNewUsername();
      if (!ok) {
        setStatusBanner({
          type: 'error',
          text: isKo
            ? '사용 가능한 로그인 ID인지 확인해 주세요.'
            : 'Please verify that your Login ID is valid and available.',
        });
        return;
      }
      updatePayload.username = cleanId;
    }

    setIsSaving(true);
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('profiles')
        .update(updatePayload)
        .eq('id', user.id);

      if (error) {
        throw new Error(error.message);
      }

      setNewUsername('');
      setUsernameStatus('idle');
      await refreshProfile();
      setStatusBanner({
        type: 'success',
        text: isKo
          ? '내 정보가 성공적으로 저장되었습니다!'
          : 'Your profile has been updated!',
      });
    } catch (err) {
      setStatusBanner({
        type: 'error',
        text:
          err instanceof Error
            ? err.message
            : isKo
            ? '프로필 저장 중 오류가 발생했습니다.'
            : 'Failed to save profile.',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const isOAuthOnlyUser = Boolean(
    user?.app_metadata?.provider &&
      user.app_metadata.provider !== 'email' &&
      !(user.app_metadata.providers || []).includes('email')
  );

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.email) return;
    setPasswordModalError(null);
    setStatusBanner(null);

    if (!isOAuthOnlyUser && !currentPassword) {
      setPasswordModalError(
        isKo ? '현재 비밀번호를 입력해 주세요.' : 'Please enter your current password.'
      );
      return;
    }

    if (newPassword.length < 6) {
      setPasswordModalError(
        isKo ? '새 비밀번호는 6자 이상으로 입력해 주세요.' : 'New password must be at least 6 characters.'
      );
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordModalError(
        isKo ? '새 비밀번호와 비밀번호 확인이 일치하지 않습니다.' : 'New passwords do not match.'
      );
      return;
    }

    if (!isOAuthOnlyUser && currentPassword === newPassword) {
      setPasswordModalError(
        isKo ? '기존 비밀번호와 다른 새 비밀번호를 입력해 주세요.' : 'Please choose a password different from your current one.'
      );
      return;
    }

    setIsChangingPassword(true);
    try {
      const supabase = createClient();

      if (!isOAuthOnlyUser) {
        const { error: verifyErr } = await supabase.auth.signInWithPassword({
          email: user.email,
          password: currentPassword,
        });
        if (verifyErr) {
          setPasswordModalError(
            isKo ? '현재 비밀번호가 일치하지 않습니다.' : 'Current password is incorrect.'
          );
          return;
        }
      }

      const { error: updateErr } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateErr) {
        throw new Error(updateErr.message);
      }

      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setPasswordModalError(null);
      setIsPasswordModalOpen(false);
      setStatusBanner({
        type: 'success',
        text: isKo ? '비밀번호가 안전하게 변경되었습니다!' : 'Your password has been updated!',
      });
    } catch (err) {
      setPasswordModalError(
        err instanceof Error
          ? err.message
          : isKo
          ? '비밀번호 변경 중 오류가 발생했습니다.'
          : 'Failed to update password.'
      );
    } finally {
      setIsChangingPassword(false);
    }
  };

  const badges = evaluateUserBadges(profile);
  const unlockedBadgesCount = badges.filter((b) => b.unlocked).length;
  const activeRepBadge = getRepresentativeBadge(
    profile
      ? {
          ...profile,
          selected_badge: selectedBadge === 'auto' ? null : selectedBadge,
        }
      : null,
    isKo
  );

  const handleEquipBadge = async (targetBadgeId: string) => {
    setSelectedBadge(targetBadgeId);
    if (!user) return;
    setStatusBanner(null);
    setIsEquippingBadge(true);
    try {
      const supabase = createClient();
      const encodedPreset = encodeAvatarPresetWithBadge(
        selectedPreset,
        targetBadgeId
      );
      const { error } = await supabase
        .from('profiles')
        .update({ avatar_preset: encodedPreset })
        .eq('id', user.id);

      if (error) {
        throw new Error(error.message);
      }

      await refreshProfile();
      const chosenObj =
        targetBadgeId === 'auto'
          ? null
          : badges.find((b) => b.id === targetBadgeId);
      const chosenLabel = chosenObj
        ? `${chosenObj.icon} ${isKo ? chosenObj.titleKo : chosenObj.titleEn}`
        : isKo
        ? '최고 업적 자동 장착'
        : 'Auto-equip Best';

      setStatusBanner({
        type: 'success',
        text: isKo
          ? `대표 업적(뱃지)이 '${chosenLabel}'(으)로 설정되었습니다!`
          : `Representative achievement badge set to '${chosenLabel}'!`,
      });
    } catch (err) {
      setStatusBanner({
        type: 'error',
        text:
          err instanceof Error
            ? err.message
            : isKo
            ? '대표 업적(뱃지) 변경 중 오류가 발생했습니다.'
            : 'Failed to update achievement badge.',
      });
    } finally {
      setIsEquippingBadge(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '60px 24px', color: '#64748b', fontWeight: 600 }}>
        {isKo ? '내 정보를 불러오는 중...' : 'Loading your profile...'}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '28px 24px 90px', color: '#0f172a' }}>
      {/* Minimal Header */}
      <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: '0 0 22px', letterSpacing: '-0.02em' }}>
        {isKo ? '내 정보' : 'My Profile'}
      </h1>

      {/* Top 4 Activity Stat Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '14px',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid rgba(234, 88, 12, 0.35)',
            borderRadius: '18px',
            padding: '18px 20px',
            boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#ea580c', fontSize: '0.8rem', fontWeight: 800 }}>
            <Flame size={15} />
            <span>{isKo ? '연속 출석' : 'Streak'}</span>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, marginTop: '6px', color: '#0f172a' }}>
            {profile?.current_streak || 0}
            <span style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '4px' }}>
              {isKo ? '일' : 'd'}
            </span>
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid rgba(2, 132, 199, 0.32)',
            borderRadius: '18px',
            padding: '18px 20px',
            boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#0284c7', fontSize: '0.8rem', fontWeight: 800 }}>
            <Calendar size={15} />
            <span>{isKo ? '누적 출석' : 'Attendance'}</span>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, marginTop: '6px', color: '#0f172a' }}>
            {profile?.total_attendance_days || 0}
            <span style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '4px' }}>
              {isKo ? '일' : 'd'}
            </span>
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid rgba(5, 150, 105, 0.32)',
            borderRadius: '18px',
            padding: '18px 20px',
            boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#059669', fontSize: '0.8rem', fontWeight: 800 }}>
            <Trophy size={15} />
            <span>{isKo ? '완료 레벨' : 'Cleared'}</span>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, marginTop: '6px', color: '#0f172a' }}>
            {profile?.cleared_levels_count || 0}
            <span style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '4px' }}>
              {isKo ? '개' : 'lvls'}
            </span>
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid rgba(124, 58, 237, 0.32)',
            borderRadius: '18px',
            padding: '18px 20px',
            boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#7c3aed', fontSize: '0.8rem', fontWeight: 800 }}>
            <Zap size={15} />
            <span>{isKo ? '최고 타수' : 'Best CPM'}</span>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, marginTop: '6px', color: '#0f172a' }}>
            {profile?.best_typing_cpm || 0}
            <span style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '4px' }}>CPM</span>
          </div>
        </div>
      </div>

      {statusBanner && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            borderRadius: '14px',
            marginBottom: '20px',
            background:
              statusBanner.type === 'success'
                ? '#ecfdf5'
                : '#fef2f2',
            border:
              statusBanner.type === 'success'
                ? '1.5px solid #a7f3d0'
                : '1.5px solid #fecaca',
            color: statusBanner.type === 'success' ? '#047857' : '#b91c1c',
            fontSize: '0.86rem',
            fontWeight: 700,
          }}
        >
          {statusBanner.type === 'success' ? (
            <CheckCircle2 size={17} style={{ color: '#059669', flexShrink: 0 }} />
          ) : (
            <AlertCircle size={17} style={{ color: '#dc2626', flexShrink: 0 }} />
          )}
          <span>{statusBanner.text}</span>
        </div>
      )}

      {/* Main Profile Edit Form */}
      <form
        onSubmit={handleSaveProfile}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '22px',
          marginBottom: '28px',
        }}
      >
        {/* Left Card: Avatar Preset & Custom Upload */}
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '22px',
            padding: '24px',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          }}
        >
          <h2 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', margin: '0 0 16px' }}>
            {isKo ? '프로필 이미지' : 'Profile Image'}
          </h2>

          {/* Current Avatar Preview + Upload Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '14px 16px',
              borderRadius: '16px',
              background: '#f8fafc',
              border: '1.5px solid #e2e8f0',
              marginBottom: '18px',
              flexWrap: 'wrap',
            }}
          >
            <UserAvatar
              avatarUrl={avatarUrl}
              avatarPreset={selectedPreset}
              size={64}
              borderColor="#0891b2"
              alt={displayName || 'Avatar'}
            />

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={(e) => void handleFileChange(e)}
              style={{ display: 'none' }}
            />

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                disabled={isUploadingAvatar}
                onClick={() => fileInputRef.current?.click()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 13px',
                  borderRadius: '10px',
                  background: 'rgba(8, 145, 178, 0.12)',
                  border: '1.5px solid rgba(8, 145, 178, 0.35)',
                  color: '#0891b2',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: isUploadingAvatar ? 'not-allowed' : 'pointer',
                }}
              >
                <Camera size={14} />
                <span>
                  {isUploadingAvatar
                    ? isKo
                      ? '업로드 중...'
                      : 'Uploading...'
                    : isKo
                    ? '이미지 업로드'
                    : 'Upload'}
                </span>
              </button>

              <button
                type="button"
                disabled={!avatarUrl}
                onClick={() => void handleResetToPresetAvatar()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  border: '1.5px solid #cbd5e1',
                  color: '#475569',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  opacity: avatarUrl ? 1 : 0.45,
                  cursor: avatarUrl ? 'pointer' : 'default',
                }}
              >
                <RotateCcw size={13} />
                <span>{isKo ? '초기화' : 'Reset'}</span>
              </button>
            </div>
          </div>

          {/* 12 Built-in Presets Grid (Fixed 2px border -> zero click wobble) */}
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '10px' }}>
            {isKo ? '기본 아이콘' : 'Default Icons'}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
            }}
          >
            {AVATAR_PRESETS.map((preset) => {
              const isSelected = !avatarUrl && selectedPreset === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectBuiltInIcon(preset.id)}
                  style={{
                    padding: '10px 6px',
                    borderRadius: '14px',
                    boxSizing: 'border-box',
                    outline: 'none',
                    transform: 'none',
                    background: isSelected
                      ? 'rgba(8, 145, 178, 0.12)'
                      : '#f8fafc',
                    border: isSelected
                      ? '2px solid #0891b2'
                      : '2px solid #e2e8f0',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'background-color 0.15s ease, border-color 0.15s ease',
                  }}
                >
                  <UserAvatar avatarPreset={preset.id} size={44} />
                  <span style={{ fontSize: '0.73rem', fontWeight: 800, color: isSelected ? '#0891b2' : '#475569' }}>
                    {isKo ? preset.labelKo : preset.labelEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Card: Account Fields */}
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '22px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '18px',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {isKo ? '계정 정보' : 'Account'}
            </h2>

            {/* Email (Read-only) */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#64748b', marginBottom: '6px' }}>
                {isKo ? '이메일' : 'Email'}
              </label>
              <div
                style={{
                  padding: '11px 14px',
                  borderRadius: '12px',
                  background: '#f1f5f9',
                  border: '1.5px solid #e2e8f0',
                  color: '#64748b',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                {user?.email || '-'}
              </div>
            </div>

            {/* Login ID */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                {isKo ? '아이디' : 'ID'}
              </label>
              {profile?.username ? (
                <div
                  style={{
                    padding: '11px 14px',
                    borderRadius: '12px',
                    background: '#f0f9ff',
                    border: '1.5px solid #bae6fd',
                    color: '#0f172a',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                  }}
                >
                  @{profile.username}
                </div>
              ) : (
                <div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <AtSign
                        size={16}
                        style={{ position: 'absolute', left: '13px', top: '13px', color: '#64748b' }}
                      />
                      <input
                        type="text"
                        maxLength={20}
                        placeholder={isKo ? '영문 소문자, 숫자, _ (4~20자)' : '4-20 chars'}
                        value={newUsername}
                        onChange={(e) => {
                          setNewUsername(
                            e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '')
                          );
                          setUsernameStatus('idle');
                        }}
                        style={{
                          width: '100%',
                          padding: '11px 14px 11px 38px',
                          borderRadius: '12px',
                          background: '#f8fafc',
                          border: '1.5px solid #cbd5e1',
                          color: '#0f172a',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      disabled={newUsername.length < 4}
                      onClick={() => void checkNewUsername()}
                      style={{
                        padding: '0 14px',
                        borderRadius: '12px',
                        background: 'rgba(8, 145, 178, 0.12)',
                        border: '1.5px solid rgba(8, 145, 178, 0.35)',
                        color: '#0891b2',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        cursor: newUsername.length < 4 ? 'not-allowed' : 'pointer',
                        opacity: newUsername.length < 4 ? 0.5 : 1,
                      }}
                    >
                      {isKo ? '중복 확인' : 'Check'}
                    </button>
                  </div>
                  {usernameStatus === 'available' && (
                    <div style={{ fontSize: '0.75rem', color: '#059669', marginTop: '5px', fontWeight: 700 }}>
                      {isKo ? '사용 가능한 아이디입니다.' : 'Available.'}
                    </div>
                  )}
                  {usernameStatus === 'taken' && (
                    <div style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '5px', fontWeight: 700 }}>
                      {isKo ? '이미 사용 중인 아이디입니다.' : 'Already taken.'}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Editable Nickname */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                {isKo ? '닉네임' : 'Nickname'}
              </label>
              <div style={{ position: 'relative' }}>
                <User
                  size={16}
                  style={{ position: 'absolute', left: '14px', top: '13px', color: '#64748b' }}
                />
                <input
                  type="text"
                  required
                  maxLength={24}
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px 11px 40px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Primary Language */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                {isKo ? '주력 언어' : 'Language'}
              </label>
              <select
                value={primaryLanguage}
                onChange={(e) => setPrimaryLanguage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  outline: 'none',
                }}
              >
                {PRIMARY_LANG_OPTIONS.map((langOpt) => (
                  <option key={langOpt} value={langOpt} style={{ background: '#ffffff', color: '#0f172a' }}>
                    {langOpt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
            }}
          >
            <button
              type="button"
              onClick={() => {
                setPasswordModalError(null);
                setCurrentPassword('');
                setNewPassword('');
                setConfirmNewPassword('');
                setIsPasswordModalOpen(true);
              }}
              style={{
                width: '100%',
                padding: '13px 16px',
                fontSize: '0.92rem',
                fontWeight: 800,
                borderRadius: '14px',
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease, border-color 0.15s ease',
              }}
            >
              <Lock size={15} style={{ color: '#0891b2' }} />
              <span>{isKo ? '비밀번호 변경' : 'Change Password'}</span>
            </button>

            <button
              type="submit"
              disabled={isSaving}
              className="tactile-btn tactile-btn-primary"
              style={{
                width: '100%',
                padding: '13px 16px',
                fontSize: '0.92rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                cursor: isSaving ? 'not-allowed' : 'pointer',
                opacity: isSaving ? 0.7 : 1,
              }}
            >
              <Save size={16} />
              <span>
                {isSaving
                  ? isKo
                    ? '저장 중...'
                    : 'Saving...'
                  : isKo
                  ? '저장'
                  : 'Save'}
              </span>
            </button>
          </div>
        </div>
      </form>

      {/* Password Change Modal */}
      {isPasswordModalOpen && (
        <div
          onClick={() => {
            if (!isChangingPassword) {
              setIsPasswordModalOpen(false);
            }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '420px',
              background: '#ffffff',
              border: '1.5px solid #cbd5e1',
              borderRadius: '22px',
              padding: '24px',
              boxShadow: '0 24px 48px -12px rgba(15, 23, 42, 0.22)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={18} style={{ color: '#0891b2' }} />
                <h2 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  {isKo ? '비밀번호 변경' : 'Change Password'}
                </h2>
              </div>
              <button
                type="button"
                disabled={isChangingPassword}
                onClick={() => setIsPasswordModalOpen(false)}
                aria-label={isKo ? '닫기' : 'Close'}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  background: '#f8fafc',
                  color: '#64748b',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: isChangingPassword ? 'not-allowed' : 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {isOAuthOnlyUser && (
              <p style={{ margin: '0 0 14px', fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                {isKo
                  ? '소셜 로그인 계정에 비밀번호를 새로 설정할 수 있습니다.'
                  : 'You can set a password for your social-login account.'}
              </p>
            )}

            {passwordModalError && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  marginBottom: '14px',
                  background: '#fef2f2',
                  border: '1.5px solid #fecaca',
                  color: '#b91c1c',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                }}
              >
                <AlertCircle size={15} style={{ color: '#dc2626', flexShrink: 0 }} />
                <span>{passwordModalError}</span>
              </div>
            )}

            <form
              onSubmit={handleChangePassword}
              style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
            >
              {!isOAuthOnlyUser && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    {isKo ? '현재 비밀번호' : 'Current Password'}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={15} style={{ position: 'absolute', left: '13px', top: '13px', color: '#64748b' }} />
                    <input
                      type="password"
                      required
                      autoComplete="current-password"
                      placeholder={isKo ? '현재 비밀번호' : 'Current password'}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 14px 11px 38px',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  {isKo ? '새 비밀번호' : 'New Password'}
                </label>
                <div style={{ position: 'relative' }}>
                  <Lock size={15} style={{ position: 'absolute', left: '13px', top: '13px', color: '#64748b' }} />
                  <input
                    type="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    placeholder={isKo ? '6자 이상 입력' : '6+ characters'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px 11px 38px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1.5px solid #cbd5e1',
                      color: '#0f172a',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  {isKo ? '새 비밀번호 확인' : 'Confirm New Password'}
                </label>
                <div style={{ position: 'relative' }}>
                  <Lock size={15} style={{ position: 'absolute', left: '13px', top: '13px', color: '#64748b' }} />
                  <input
                    type="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    placeholder={isKo ? '새 비밀번호 다시 입력' : 'Re-enter new password'}
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px 11px 38px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1.5px solid #cbd5e1',
                      color: '#0f172a',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  marginTop: '6px',
                }}
              >
                <button
                  type="button"
                  disabled={isChangingPassword}
                  onClick={() => setIsPasswordModalOpen(false)}
                  style={{
                    height: '44px',
                    borderRadius: '12px',
                    border: '1.5px solid #cbd5e1',
                    background: '#f8fafc',
                    color: '#475569',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    cursor: isChangingPassword ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isKo ? '취소' : 'Cancel'}
                </button>

                <button
                  type="submit"
                  disabled={isChangingPassword}
                  className="tactile-btn tactile-btn-primary"
                  style={{
                    height: '44px',
                    padding: '0 16px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '7px',
                    cursor: isChangingPassword ? 'not-allowed' : 'pointer',
                    opacity: isChangingPassword ? 0.7 : 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Lock size={15} />
                  <span>
                    {isChangingPassword
                      ? isKo
                        ? '변경 중...'
                        : 'Updating...'
                      : isKo
                      ? '변경하기'
                      : 'Update'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Course Progress Summary (if any started) */}
      {courseSummaries.length > 0 && (
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '22px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          }}
        >
          <h2 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
            {isKo ? '학습 진도' : 'Progress'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '12px' }}>
            {courseSummaries.map((c) => {
              const pct = Math.min(100, Math.round((c.cleared / Math.max(1, c.total)) * 100));
              return (
                <Link
                  key={c.id}
                  href={`/practice/${c.id}`}
                  style={{
                    padding: '13px 15px',
                    borderRadius: '14px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    textDecoration: 'none',
                    color: '#0f172a',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', marginBottom: '6px', color: '#0f172a' }}>
                    {c.title}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: '#64748b', fontWeight: 600, marginBottom: '6px' }}>
                    <span>
                      {c.cleared} / {c.total}
                    </span>
                    <span style={{ color: '#0284c7', fontWeight: 800 }}>{pct}%</span>
                  </div>
                  <div style={{ height: '6px', borderRadius: '3px', background: '#e2e8f0', overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, #0891b2, #10b981)' }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Achievement Badges Grid (업적 = 뱃지) */}
      <div
        id="achievements-section"
        style={{
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '22px',
          padding: '24px',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Award size={19} style={{ color: '#d97706' }} />
            <h2 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {isKo ? '업적 (뱃지)' : 'Achievements (Badges)'}
            </h2>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 10px',
                borderRadius: '999px',
                background: `${activeRepBadge.color}14`,
                border: `1.5px solid ${activeRepBadge.color}4d`,
                color: activeRepBadge.color,
                fontSize: '0.76rem',
                fontWeight: 800,
              }}
            >
              {isKo ? `현재 대표 업적: ${activeRepBadge.label}` : `Equipped: ${activeRepBadge.label}`}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              disabled={isEquippingBadge}
              onClick={() => void handleEquipBadge('auto')}
              style={{
                padding: '5px 11px',
                borderRadius: '10px',
                border:
                  selectedBadge === 'auto'
                    ? '1.5px solid #0891b2'
                    : '1.5px solid #cbd5e1',
                background:
                  selectedBadge === 'auto'
                    ? 'rgba(8, 145, 178, 0.12)'
                    : '#f8fafc',
                color: selectedBadge === 'auto' ? '#0891b2' : '#475569',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: isEquippingBadge ? 'wait' : 'pointer',
              }}
            >
              {isKo ? '✨ 최고 업적 자동 장착' : '✨ Auto-equip Best'}
            </button>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '10px',
                background: '#fffbeb',
                border: '1px solid #fcd34d',
                color: '#d97706',
                fontSize: '0.78rem',
                fontWeight: 800,
              }}
            >
              {unlockedBadgesCount} / {badges.length}
            </span>
          </div>
        </div>

        <p style={{ margin: '0 0 14px', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
          {isKo
            ? '획득한 업적(뱃지) 카드를 클릭하면 리더보드와 내 프로필에 표시되는 대표 업적으로 즉시 장착됩니다.'
            : 'Click any unlocked achievement badge card below to equip it as your representative title on the leaderboard.'}
        </p>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
            marginBottom: '16px',
          }}
        >
          {BADGE_CATEGORY_TABS.map((tab) => {
            const isTabActive = badgeCategoryFilter === tab.id;
            const catBadges =
              tab.id === 'all'
                ? badges
                : badges.filter((b) => b.category === tab.id);
            const catUnlocked = catBadges.filter((b) => b.unlocked).length;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setBadgeCategoryFilter(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  border: isTabActive
                    ? '1.5px solid #0891b2'
                    : '1.5px solid #cbd5e1',
                  background: isTabActive
                    ? 'rgba(8, 145, 178, 0.12)'
                    : '#f8fafc',
                  color: isTabActive ? '#0891b2' : '#475569',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                <span>{isKo ? tab.labelKo : tab.labelEn}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '1px 6px',
                    borderRadius: '999px',
                    background: isTabActive
                      ? 'rgba(8, 145, 178, 0.16)'
                      : '#e2e8f0',
                    color: isTabActive ? '#0891b2' : '#64748b',
                  }}
                >
                  {catUnlocked}/{catBadges.length}
                </span>
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '12px',
          }}
        >
          {badges
            .filter(
              (b) =>
                badgeCategoryFilter === 'all' ||
                b.category === badgeCategoryFilter
            )
            .map((badge) => {
            const isEquipped = activeRepBadge.id === badge.id;
            const isManuallySelected = selectedBadge === badge.id;
            return (
              <button
                key={badge.id}
                type="button"
                disabled={!badge.unlocked || isEquippingBadge}
                onClick={() => {
                  if (badge.unlocked) {
                    void handleEquipBadge(badge.id);
                  }
                }}
                style={{
                  padding: '14px',
                  borderRadius: '16px',
                  boxSizing: 'border-box',
                  textAlign: 'left',
                  userSelect: 'none',
                  cursor: badge.unlocked
                    ? isEquippingBadge
                      ? 'wait'
                      : 'pointer'
                    : 'not-allowed',
                  background: isEquipped
                    ? `${badge.color}10`
                    : badge.unlocked
                    ? '#ffffff'
                    : '#f8fafc',
                  border: isEquipped
                    ? `2px solid ${badge.color}`
                    : badge.unlocked
                    ? `2px solid ${badge.color}55`
                    : '2px solid #e2e8f0',
                  opacity: badge.unlocked ? 1 : 0.6,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  boxShadow: isEquipped
                    ? `0 6px 18px -4px ${badge.color}33`
                    : badge.unlocked
                    ? '0 2px 10px rgba(15, 23, 42, 0.04)'
                    : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{badge.icon}</span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      background: isEquipped
                        ? badge.color
                        : badge.unlocked
                        ? `${badge.color}18`
                        : '#e2e8f0',
                      color: isEquipped
                        ? '#ffffff'
                        : badge.unlocked
                        ? badge.color
                        : '#64748b',
                    }}
                  >
                    {isEquipped
                      ? isManuallySelected
                        ? isKo
                          ? '✓ 대표 장착중'
                          : '✓ Equipped'
                        : isKo
                        ? '✓ 자동 장착중'
                        : '✓ Auto'
                      : badge.unlocked
                      ? isKo
                        ? '클릭하여 장착'
                        : 'Click to equip'
                      : `🔒 ${badge.progressText}`}
                  </span>
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0f172a', lineHeight: 1.3 }}>
                  {isKo ? badge.titleKo : badge.titleEn}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748b', lineHeight: 1.35, fontWeight: 600 }}>
                  {isKo ? badge.descKo : badge.descEn}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

