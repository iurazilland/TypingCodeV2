'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  Flame,
  GraduationCap,
  MessageSquareText,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Users,
  X,
} from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { useLanguage } from '@/lib/LanguageContext';
import { getConfiguredAdminIds, isAdminUser } from '@/lib/admin';
import { createClient } from '@/lib/supabase/client';
import {
  fetchAdminSectionFeedbacks,
  normalizeProfileRow,
  setStudentLearningLevel,
} from '@/lib/progressSync';
import UserAvatar from '@/components/UserAvatar';
import type {
  ClassroomRow,
  OrganizationRow,
  OrganizationType,
  UserProfile,
} from '@/lib/supabase/types';

const PYTHON_TOTAL_LEVELS = 113;

function formatKstDate(iso: string | null | undefined): string {
  if (!iso) return '-';
  try {
    return new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

export default function AdminConsolePage() {
  const { user, profile, isLoading: authLoading } = useAuth();
  const { language } = useLanguage();
  const isEn = language === 'en';

  const isAdmin = useMemo(() => isAdminUser(profile, user), [profile, user]);

  const [activeTab, setActiveTab] = useState<'users' | 'orgs'>('users');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [organizations, setOrganizations] = useState<OrganizationRow[]>([]);
  const [classrooms, setClassrooms] = useState<ClassroomRow[]>([]);
  const [feedbackCount, setFeedbackCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // User search & level input state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [levelInputs, setLevelInputs] = useState<Record<string, number>>({});
  const [updatingUserId, setUpdatingUserId] = useState<string | null>(null);

  // Organization creation state
  const [orgName, setOrgName] = useState<string>('');
  const [orgType, setOrgType] = useState<OrganizationType>('school');
  const [orgSeats, setOrgSeats] = useState<number>(30);
  const [isCreatingOrg, setIsCreatingOrg] = useState<boolean>(false);

  const [banner, setBanner] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const loadAllAdminData = useCallback(async () => {
    setIsLoading(true);
    try {
      const supabase = createClient();
      const [profilesRes, orgsRes, classesRes, fbRes] = await Promise.all([
        supabase
          .from('profiles')
          .select('*')
          .order('created_at', { ascending: false }),
        supabase
          .from('organizations')
          .select('*')
          .order('created_at', { ascending: false }),
        supabase
          .from('classrooms')
          .select('*')
          .order('created_at', { ascending: false }),
        fetchAdminSectionFeedbacks(),
      ]);

      if (Array.isArray(profilesRes.data)) {
        const normalized = profilesRes.data.map((r) =>
          normalizeProfileRow(r as Record<string, unknown>)
        );
        setUsers(normalized);
        const initLvls: Record<string, number> = {};
        normalized.forEach((u) => {
          initLvls[u.id] = u.current_level || 1;
        });
        setLevelInputs(initLvls);
      }
      if (Array.isArray(orgsRes.data)) {
        setOrganizations(orgsRes.data as OrganizationRow[]);
      }
      if (Array.isArray(classesRes.data)) {
        setClassrooms(classesRes.data as ClassroomRow[]);
      }
      setFeedbackCount(fbRes.items.length);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authLoading && isAdmin) {
      void loadAllAdminData();
    } else if (!authLoading) {
      setIsLoading(false);
    }
  }, [authLoading, isAdmin, loadAllAdminData]);

  const handleSetUserLevel = async (u: UserProfile, targetLevel: number) => {
    const safeLvl = Math.max(
      1,
      Math.min(PYTHON_TOTAL_LEVELS, Math.round(targetLevel))
    );
    setUpdatingUserId(u.id);
    setBanner(null);

    try {
      const updated = await setStudentLearningLevel(u.id, 'py-basic', safeLvl);
      if (!updated) {
        throw new Error('학습 레벨 변경에 실패했습니다.');
      }

      setUsers((prev) =>
        prev.map((row) => (row.id === u.id ? updated : row))
      );
      setLevelInputs((prev) => ({
        ...prev,
        [u.id]: safeLvl,
      }));
      setBanner({
        type: 'success',
        text:
          safeLvl === 1
            ? `✅ '${u.display_name}' 회원의 진도를 Lv.1부터 다시 시작하도록 초기화했습니다.`
            : `✅ '${u.display_name}' 회원의 진도를 Lv.${safeLvl}부터 학습하도록 지정했습니다.`,
      });
    } catch (err) {
      setBanner({
        type: 'error',
        text: err instanceof Error ? err.message : '레벨 변경 중 오류가 발생했습니다.',
      });
    } finally {
      setUpdatingUserId(null);
    }
  };

  const handleCreateOrganization = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !orgName.trim()) return;
    setIsCreatingOrg(true);
    setBanner(null);

    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('organizations')
        .insert({
          name: orgName.trim(),
          org_type: orgType,
          owner_id: user.id,
          max_seats: Math.max(1, Math.min(10000, Number(orgSeats) || 30)),
        })
        .select('*')
        .single();

      if (error || !data) {
        throw new Error(error?.message || '기관 등록에 실패했습니다.');
      }

      setOrganizations((prev) => [data as OrganizationRow, ...prev]);
      setOrgName('');
      setOrgSeats(30);
      setBanner({
        type: 'success',
        text: `새 B2B/B2G 기관 '${(data as OrganizationRow).name}'이 등록되었습니다.`,
      });
    } catch (err) {
      setBanner({
        type: 'error',
        text: err instanceof Error ? err.message : '기관 등록 중 오류가 발생했습니다.',
      });
    } finally {
      setIsCreatingOrg(false);
    }
  };

  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        (u.display_name || '').toLowerCase().includes(q) ||
        (u.username || '').toLowerCase().includes(q) ||
        (u.email || '').toLowerCase().includes(q) ||
        (u.role || '').toLowerCase().includes(q)
    );
  }, [users, searchQuery]);

  const stats = useMemo(() => {
    const totalUsers = users.length;
    const withEmail = users.filter((u) => Boolean(u.email)).length;
    const totalCleared = users.reduce(
      (acc, cur) => acc + (cur.cleared_levels_count || 0),
      0
    );
    const completedUsers = users.filter(
      (u) =>
        (u.cleared_levels?.['py-basic'] || []).length >= PYTHON_TOTAL_LEVELS ||
        (u.completed_tracks || []).includes('py-basic')
    ).length;

    return {
      totalUsers,
      withEmail,
      totalCleared,
      completedUsers,
      orgCount: organizations.length,
      classCount: classrooms.length,
      feedbackCount,
    };
  }, [users, organizations, classrooms, feedbackCount]);

  if (authLoading) {
    return (
      <main
        style={{
          minHeight: 'calc(100vh - 70px)',
          background: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#475569',
          fontWeight: 700,
        }}
      >
        {isEn ? 'Checking admin authorization...' : '관리자 권한 확인 중...'}
      </main>
    );
  }

  if (!user || !isAdmin) {
    const currentId =
      profile?.username ||
      (user?.email ? user.email.split('@')[0] : null) ||
      'unknown';

    return (
      <main
        style={{
          minHeight: 'calc(100vh - 70px)',
          background: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}
      >
        <div
          style={{
            maxWidth: '520px',
            width: '100%',
            background: '#ffffff',
            borderRadius: '20px',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: '#fef2f2',
              border: '1px solid #fecaca',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#dc2626',
              marginBottom: '16px',
            }}
          >
            <ShieldAlert size={28} />
          </div>
          <h1
            style={{
              fontSize: '1.35rem',
              fontWeight: 900,
              color: '#0f172a',
              margin: '0 0 10px',
            }}
          >
            {isEn ? 'Admin Access Only' : '지정된 관리자 전용 페이지입니다'}
          </h1>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 0 18px',
            }}
          >
            현재 접속한 계정(@{currentId})은 관리자로 등록되지 않았습니다.
            <br />
            등록된 관리자: {getConfiguredAdminIds().join(', ')}
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 20px',
              borderRadius: '12px',
              background: '#0891b2',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} />
            {isEn ? 'Back to Home' : '홈으로 돌아가기'}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 70px)',
        background: '#f8fafc',
        padding: '32px 20px 80px',
        color: '#0f172a',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '22px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 11px',
                borderRadius: '999px',
                background: '#fffbeb',
                border: '1px solid #fde68a',
                color: '#b45309',
                fontSize: '0.75rem',
                fontWeight: 800,
                marginBottom: '8px',
              }}
            >
              <ShieldCheck size={14} />
              <span>TYPINGCODE V2 ADMIN CONSOLE</span>
              <span style={{ color: '#f59e0b' }}>•</span>
              <span>{user.email}</span>
            </div>
            <h1
              style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                margin: 0,
                color: '#0f172a',
              }}
            >
              {isEn
                ? 'Platform Admin & User Management Console'
                : '관리자 통합 콘솔 (회원 · 진도 · B2B/B2G 기관 관리)'}
            </h1>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#64748b',
                margin: '4px 0 0',
                fontWeight: 500,
              }}
            >
              전체 회원 계정 현황, 이메일 연동 상태, 코스별 학습 레벨 조정/초기화 및 강사용 LMS·설문 대시보드를 통합 관리합니다.
            </p>
          </div>

          <button
            type="button"
            onClick={() => void loadAllAdminData()}
            disabled={isLoading}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '9px 16px',
              borderRadius: '12px',
              border: '1.5px solid #cbd5e1',
              background: '#ffffff',
              color: '#0f172a',
              fontSize: '0.86rem',
              fontWeight: 800,
              cursor: isLoading ? 'wait' : 'pointer',
            }}
          >
            <RefreshCw
              size={15}
              style={{
                color: '#0891b2',
                animation: isLoading ? 'spin 1s linear infinite' : 'none',
              }}
            />
            <span>{isEn ? 'Refresh' : '새로고침'}</span>
          </button>
        </div>

        {/* Quick Navigation Banner Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
            marginBottom: '22px',
          }}
        >
          <Link
            href="/lms"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              padding: '18px 22px',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
              border: '1.5px solid #6ee7b7',
              color: '#065f46',
              textDecoration: 'none',
              boxShadow: '0 8px 20px -8px rgba(5, 150, 105, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#059669',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 900 }}>
                  강사용 LMS 리더보드 & 학급 보드 바로가기
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.85, marginTop: '2px' }}>
                  반 개설, 담당 학생 배정, 학급별 순위·진도율·출석 비교 및 레벨 제어
                </div>
              </div>
            </div>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/admin/feedbacks"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              padding: '18px 22px',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
              border: '1.5px solid #a5b4fc',
              color: '#3730a3',
              textDecoration: 'none',
              boxShadow: '0 8px 20px -8px rgba(79, 70, 229, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#4f46e5',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <BarChart3 size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 900 }}>
                  섹션 설문 & 사용자 의견 대시보드 바로가기
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.85, marginTop: '2px' }}>
                  14개 섹션별 별점·체감 난이도·태그 통계 및 주관식 피드백 열람
                </div>
              </div>
            </div>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Status Banner */}
        {banner && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '14px',
              marginBottom: '20px',
              background: banner.type === 'success' ? '#ecfdf5' : '#fef2f2',
              border:
                banner.type === 'success'
                  ? '1.5px solid #6ee7b7'
                  : '1.5px solid #fca5a5',
              color: banner.type === 'success' ? '#065f46' : '#991b1b',
              fontSize: '0.86rem',
              fontWeight: 700,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {banner.type === 'success' ? (
                <CheckCircle2 size={17} />
              ) : (
                <AlertCircle size={17} />
              )}
              <span>{banner.text}</span>
            </div>
            <button
              type="button"
              onClick={() => setBanner(null)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'inherit',
                padding: '2px',
              }}
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* 4 KPI Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '16px',
            marginBottom: '22px',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1.5px solid #e2e8f0',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                전체 가입 회원 (1인 1Row)
              </span>
              <Users size={18} color="#0891b2" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>
              {stats.totalUsers}명
            </div>
            <div style={{ marginTop: '6px', fontSize: '0.78rem', color: '#0891b2', fontWeight: 700 }}>
              이메일 등록 완료: {stats.withEmail}명
            </div>
          </div>

          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1.5px solid #e2e8f0',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                총 클리어 레벨 합계
              </span>
              <Award size={18} color="#059669" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>
              {stats.totalCleared}회
            </div>
            <div style={{ marginTop: '6px', fontSize: '0.78rem', color: '#059669', fontWeight: 700 }}>
              과정 완주 회원: {stats.completedUsers}명
            </div>
          </div>

          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1.5px solid #e2e8f0',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                B2B · B2G 기관 / 학급
              </span>
              <Building2 size={18} color="#d97706" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>
              {stats.orgCount}개 기관 / {stats.classCount}개 반
            </div>
            <div style={{ marginTop: '6px', fontSize: '0.78rem', color: '#d97706', fontWeight: 700 }}>
              강사 LMS 연동 활성화됨
            </div>
          </div>

          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1.5px solid #e2e8f0',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                누적 섹션 설문 피드백
              </span>
              <MessageSquareText size={18} color="#4f46e5" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>
              {stats.feedbackCount}건
            </div>
            <div style={{ marginTop: '6px', fontSize: '0.78rem', color: '#4f46e5', fontWeight: 700 }}>
              설문 대시보드에서 상세 열람 가능
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('users')}
            style={{
              padding: '10px 18px',
              borderRadius: '12px',
              border:
                activeTab === 'users'
                  ? '1.5px solid #0891b2'
                  : '1.5px solid #cbd5e1',
              background: activeTab === 'users' ? '#0891b2' : '#ffffff',
              color: activeTab === 'users' ? '#ffffff' : '#334155',
              fontSize: '0.88rem',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            👥 전체 회원 관리 & 레벨 제어 ({users.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('orgs')}
            style={{
              padding: '10px 18px',
              borderRadius: '12px',
              border:
                activeTab === 'orgs'
                  ? '1.5px solid #0891b2'
                  : '1.5px solid #cbd5e1',
              background: activeTab === 'orgs' ? '#0891b2' : '#ffffff',
              color: activeTab === 'orgs' ? '#ffffff' : '#334155',
              fontSize: '0.88rem',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            🏢 B2B · B2G 기관 및 학급 현황 ({organizations.length})
          </button>
        </div>

        {activeTab === 'users' ? (
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1.5px solid #cbd5e1',
              overflow: 'hidden',
              boxShadow: '0 12px 28px -10px rgba(15, 23, 42, 0.06)',
            }}
          >
            {/* Search Bar */}
            <div
              style={{
                padding: '16px 20px',
                borderBottom: '1px solid #e2e8f0',
                background: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: '440px' }}>
                <Search
                  size={15}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                  }}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="닉네임, @로그인ID, 이메일로 회원 검색..."
                  style={{
                    width: '100%',
                    padding: '9px 12px 9px 34px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    fontSize: '0.84rem',
                  }}
                />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>
                검색 결과: {filteredUsers.length}명
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.84rem',
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: '#f1f5f9',
                      borderBottom: '1px solid #cbd5e1',
                      color: '#334155',
                      fontWeight: 800,
                      textAlign: 'left',
                    }}
                  >
                    <th style={{ padding: '12px 14px' }}>회원 정보</th>
                    <th style={{ padding: '12px 14px' }}>가입 이메일</th>
                    <th style={{ padding: '12px 14px' }}>역할 (Role)</th>
                    <th style={{ padding: '12px 14px' }}>현재 학습 진도</th>
                    <th style={{ padding: '12px 14px' }}>출석 / 점수</th>
                    <th style={{ padding: '12px 14px' }}>가입일</th>
                    <th style={{ padding: '12px 14px', minWidth: '220px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Sliders size={14} color="#0891b2" />
                        학습 레벨 제어
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td
                        colSpan={7}
                        style={{
                          padding: '44px 20px',
                          textAlign: 'center',
                          color: '#64748b',
                          fontWeight: 700,
                        }}
                      >
                        회원 목록을 불러오는 중...
                      </td>
                    </tr>
                  ) : filteredUsers.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        style={{
                          padding: '44px 20px',
                          textAlign: 'center',
                          color: '#64748b',
                          fontWeight: 700,
                        }}
                      >
                        일치하는 회원이 없습니다.
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((u, idx) => {
                      const pyCleared = (u.cleared_levels?.['py-basic'] || [])
                        .length;
                      const targetInputVal =
                        levelInputs[u.id] ?? u.current_level ?? 1;
                      const isUpdatingThis = updatingUserId === u.id;

                      return (
                        <tr
                          key={u.id}
                          style={{
                            borderBottom: '1px solid #e2e8f0',
                            background: idx % 2 === 0 ? '#ffffff' : '#fcfdfe',
                          }}
                        >
                          <td style={{ padding: '12px 14px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <UserAvatar
                                avatarUrl={u.avatar_url}
                                avatarPreset={u.avatar_preset}
                                size={34}
                                alt={u.display_name}
                              />
                              <div>
                                <div style={{ fontWeight: 800, color: '#0f172a' }}>
                                  {u.display_name}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                  {u.username ? `@${u.username}` : '아이디 미설정'}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td style={{ padding: '12px 14px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                            {u.email || '-'}
                          </td>

                          <td style={{ padding: '12px 14px' }}>
                            <span
                              style={{
                                padding: '3px 8px',
                                borderRadius: '6px',
                                fontSize: '0.74rem',
                                fontWeight: 800,
                                background:
                                  u.role === 'super_admin' || isAdminUser(u, null)
                                    ? '#fef3c7'
                                    : u.role === 'instructor'
                                    ? '#d1fae5'
                                    : '#f1f5f9',
                                color:
                                  u.role === 'super_admin' || isAdminUser(u, null)
                                    ? '#b45309'
                                    : u.role === 'instructor'
                                    ? '#065f46'
                                    : '#475569',
                              }}
                            >
                              {isAdminUser(u, null) ? 'admin' : u.role}
                            </span>
                          </td>

                          <td style={{ padding: '12px 14px' }}>
                            <div style={{ fontWeight: 800, color: '#0891b2' }}>
                              Lv.{u.current_level || 1} 학습중
                            </div>
                            <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                              완료: {pyCleared} / {PYTHON_TOTAL_LEVELS} 레벨 ({u.active_curriculum_id})
                            </div>
                          </td>

                          <td style={{ padding: '12px 14px' }}>
                            <div style={{ fontWeight: 800, color: '#0f172a' }}>
                              {(u.activity_score || 0).toLocaleString()} pt
                            </div>
                            <div style={{ fontSize: '0.74rem', color: '#ea580c', fontWeight: 700 }}>
                              <Flame size={11} style={{ display: 'inline', marginRight: '2px' }} />
                              연속 {u.current_streak || 0}일 (누적 {u.total_attendance_days || 0}일)
                            </div>
                          </td>

                          <td style={{ padding: '12px 14px', color: '#64748b', fontSize: '0.78rem' }}>
                            {formatKstDate(u.created_at)}
                          </td>

                          <td style={{ padding: '12px 14px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <div
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  border: '1px solid #cbd5e1',
                                  borderRadius: '8px',
                                  background: '#ffffff',
                                  padding: '2px 6px',
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: '0.74rem',
                                    fontWeight: 800,
                                    color: '#64748b',
                                    marginRight: '4px',
                                  }}
                                >
                                  Lv.
                                </span>
                                <input
                                  type="number"
                                  min={1}
                                  max={PYTHON_TOTAL_LEVELS}
                                  value={targetInputVal}
                                  onChange={(e) =>
                                    setLevelInputs((prev) => ({
                                      ...prev,
                                      [u.id]: Number(e.target.value) || 1,
                                    }))
                                  }
                                  style={{
                                    width: '46px',
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '0.82rem',
                                    fontWeight: 800,
                                    color: '#0f172a',
                                  }}
                                />
                              </div>

                              <button
                                type="button"
                                disabled={isUpdatingThis}
                                onClick={() => void handleSetUserLevel(u, targetInputVal)}
                                style={{
                                  padding: '6px 10px',
                                  borderRadius: '8px',
                                  border: '1px solid #0891b2',
                                  background: '#0891b2',
                                  color: '#ffffff',
                                  fontSize: '0.75rem',
                                  fontWeight: 800,
                                  cursor: isUpdatingThis ? 'wait' : 'pointer',
                                }}
                              >
                                레벨 지정
                              </button>

                              <button
                                type="button"
                                disabled={isUpdatingThis}
                                onClick={() => void handleSetUserLevel(u, 1)}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '3px',
                                  padding: '6px 9px',
                                  borderRadius: '8px',
                                  border: '1px solid #fca5a5',
                                  background: '#fef2f2',
                                  color: '#dc2626',
                                  fontSize: '0.75rem',
                                  fontWeight: 800,
                                  cursor: isUpdatingThis ? 'wait' : 'pointer',
                                }}
                              >
                                <RotateCcw size={12} />
                                <span>초기화</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Organizations & Classrooms Tab */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Create Organization Card */}
            <form
              onSubmit={handleCreateOrganization}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                border: '1.5px solid #cbd5e1',
                padding: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div style={{ fontWeight: 900, fontSize: '0.95rem', marginRight: '8px' }}>
                🏢 신규 B2B · B2G 기관 등록:
              </div>
              <input
                type="text"
                required
                placeholder="기관명 (예: 서울코딩고등학교, OO교육청 AI캠프)"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                style={{
                  flex: '1 1 240px',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                }}
              />
              <select
                value={orgType}
                onChange={(e) => setOrgType(e.target.value as OrganizationType)}
                style={{
                  padding: '9px 12px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                }}
              >
                <option value="school">학교 (School / B2G)</option>
                <option value="academy">학원 (Academy / B2B)</option>
                <option value="company">기업 (Company / B2B)</option>
                <option value="government">공공기관 (Gov / B2G)</option>
              </select>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569' }}>
                  최대 좌석:
                </span>
                <input
                  type="number"
                  min={1}
                  max={10000}
                  value={orgSeats}
                  onChange={(e) => setOrgSeats(Number(e.target.value) || 30)}
                  style={{
                    width: '80px',
                    padding: '9px 10px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={isCreatingOrg}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: '10px',
                  border: 'none',
                  background: '#0891b2',
                  color: '#ffffff',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                <Plus size={15} />
                <span>{isCreatingOrg ? '등록 중...' : '기관 등록'}</span>
              </button>
            </form>

            {/* Organizations & Classrooms List */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '16px',
              }}
            >
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1.5px solid #cbd5e1',
                  padding: '20px',
                }}
              >
                <h3 style={{ margin: '0 0 12px', fontSize: '1rem', fontWeight: 900 }}>
                  등록된 기관 목록 ({organizations.length})
                </h3>
                {organizations.length === 0 ? (
                  <div style={{ color: '#64748b', fontSize: '0.85rem', padding: '16px 0' }}>
                    등록된 기관이 없습니다. 상단 폼에서 학교/학원/기관을 추가할 수 있습니다.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {organizations.map((org) => (
                      <div
                        key={org.id}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '12px',
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 800, color: '#0f172a' }}>{org.name}</div>
                          <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px' }}>
                            유형: {org.org_type} • 계약 좌석: {org.max_seats}석
                          </div>
                        </div>
                        <span
                          style={{
                            padding: '3px 9px',
                            borderRadius: '999px',
                            background: '#ecfdf5',
                            color: '#047857',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                          }}
                        >
                          활성
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1.5px solid #cbd5e1',
                  padding: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 900 }}>
                    개설된 학급(분반) 목록 ({classrooms.length})
                  </h3>
                  <Link
                    href="/lms"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: '#059669',
                      textDecoration: 'none',
                    }}
                  >
                    LMS 리더보드에서 관리 →
                  </Link>
                </div>
                {classrooms.length === 0 ? (
                  <div style={{ color: '#64748b', fontSize: '0.85rem', padding: '16px 0' }}>
                    개설된 학급이 없습니다. 강사용 LMS 리더보드 페이지에서 학급을 개설해 보세요.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {classrooms.map((cls) => (
                      <div
                        key={cls.id}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '12px',
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 800, color: '#0f172a' }}>{cls.name}</div>
                          <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px' }}>
                            {cls.description || '설명 없음'}
                          </div>
                        </div>
                        <span
                          style={{
                            padding: '4px 9px',
                            borderRadius: '8px',
                            background: '#ecfdf5',
                            border: '1px solid #a7f3d0',
                            color: '#065f46',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.76rem',
                            fontWeight: 800,
                          }}
                        >
                          초대코드: {cls.invite_code}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
