'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  AlertCircle,
  ArrowLeft,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Filter,
  MessageSquareText,
  RefreshCw,
  Search,
  ShieldAlert,
  Sparkles,
  Star,
  Tag,
  Users,
  X,
} from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { useLanguage } from '@/lib/LanguageContext';
import { getConfiguredAdminIds, isAdminUser } from '@/lib/admin';
import { fetchAdminSectionFeedbacks } from '@/lib/progressSync';
import { CURRICULUM_TRACKS } from '@/lib/curriculum';
import { getCourseSections } from '@/lib/curriculumSections';
import { FEEDBACK_TAGS } from '@/components/SectionFeedbackModal';
import UserAvatar from '@/components/UserAvatar';
import type {
  AdminSectionFeedbackRow,
  SectionDifficultyRating,
} from '@/lib/supabase/types';

function formatKstDateTime(iso: string): string {
  if (!iso) return '-';
  try {
    return new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date(iso));
  } catch {
    return iso.slice(0, 16).replace('T', ' ');
  }
}

export default function AdminFeedbacksPage() {
  const { user, profile, isLoading: authLoading } = useAuth();
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [items, setItems] = useState<AdminSectionFeedbackRow[]>([]);
  const [usedFallback, setUsedFallback] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  // Filters
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [selectedSection, setSelectedSection] = useState<number | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    SectionDifficultyRating | 'all'
  >('all');
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<
    'all' | '5' | '4' | 'low'
  >('all');
  const [selectedTag, setSelectedTag] = useState<string | 'all'>('all');
  const [onlyWithComment, setOnlyWithComment] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // One-by-one inspector index
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const isAdmin = useMemo(() => isAdminUser(profile, user), [profile, user]);

  const loadFeedbacks = useCallback(async () => {
    setIsFetching(true);
    const res = await fetchAdminSectionFeedbacks();
    setItems(res.items);
    setUsedFallback(res.usedFallback);
    setIsFetching(false);
  }, []);

  useEffect(() => {
    if (!authLoading && isAdmin) {
      void loadFeedbacks();
    } else if (!authLoading) {
      setIsFetching(false);
    }
  }, [authLoading, isAdmin, loadFeedbacks]);

  // Build section metadata map for Python Basic (14 sections)
  const pythonSections = useMemo(() => {
    const pyTrack = CURRICULUM_TRACKS[0];
    const pyMod = pyTrack?.modules[0];
    if (!pyTrack || !pyMod) return [];
    return getCourseSections(
      pyTrack.id,
      pyMod.id,
      pyMod.totalLevels || 87,
      pyMod.skills || []
    );
  }, []);

  const sectionTitleMap = useMemo(() => {
    const map = new Map<number, { titleKo: string; titleEn: string }>();
    for (const sec of pythonSections) {
      map.set(sec.sectionNumber, {
        titleKo: sec.title_ko,
        titleEn: sec.title_en,
      });
    }
    return map;
  }, [pythonSections]);

  const tagLabelMap = useMemo(() => {
    const map = new Map<string, { labelKo: string; labelEn: string }>();
    for (const t of FEEDBACK_TAGS) {
      map.set(t.id, { labelKo: t.labelKo, labelEn: t.labelEn });
    }
    return map;
  }, []);

  // Track-filtered base items for top KPIs and charts
  const trackFilteredItems = useMemo(() => {
    if (selectedTrack === 'all') return items;
    return items.filter((item) => item.track_id === selectedTrack);
  }, [items, selectedTrack]);

  // Fully filtered items for the individual opinion inspector & list
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return trackFilteredItems.filter((item) => {
      if (selectedSection !== 'all' && item.section_number !== selectedSection) {
        return false;
      }
      if (
        selectedDifficulty !== 'all' &&
        item.difficulty !== selectedDifficulty
      ) {
        return false;
      }
      if (selectedRatingFilter === '5' && item.rating !== 5) return false;
      if (selectedRatingFilter === '4' && item.rating !== 4) return false;
      if (selectedRatingFilter === 'low' && item.rating > 3) return false;
      if (selectedTag !== 'all' && !item.tags.includes(selectedTag)) {
        return false;
      }
      if (onlyWithComment && (!item.comment || !item.comment.trim())) {
        return false;
      }
      if (q) {
        const uname = (item.username || '').toLowerCase();
        const dname = (item.display_name || '').toLowerCase();
        const cmt = (item.comment || '').toLowerCase();
        const secTitle = (
          sectionTitleMap.get(item.section_number)?.titleKo || ''
        ).toLowerCase();
        if (
          !uname.includes(q) &&
          !dname.includes(q) &&
          !cmt.includes(q) &&
          !secTitle.includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [
    trackFilteredItems,
    selectedSection,
    selectedDifficulty,
    selectedRatingFilter,
    selectedTag,
    onlyWithComment,
    searchQuery,
    sectionTitleMap,
  ]);

  // Reset activeIndex when filters change
  useEffect(() => {
    setActiveIndex(0);
  }, [
    selectedTrack,
    selectedSection,
    selectedDifficulty,
    selectedRatingFilter,
    selectedTag,
    onlyWithComment,
    searchQuery,
  ]);

  // Aggregate KPI metrics from trackFilteredItems
  const kpi = useMemo(() => {
    const total = trackFilteredItems.length;
    if (total === 0) {
      return {
        total: 0,
        uniqueUsers: 0,
        avgRating: 0,
        easyCount: 0,
        justRightCount: 0,
        hardCount: 0,
        easyPct: 0,
        justRightPct: 0,
        hardPct: 0,
        commentCount: 0,
        commentPct: 0,
      };
    }

    const userSet = new Set<string>();
    let ratingSum = 0;
    let easyCount = 0;
    let justRightCount = 0;
    let hardCount = 0;
    let commentCount = 0;

    for (const row of trackFilteredItems) {
      userSet.add(row.user_id);
      ratingSum += row.rating;
      if (row.difficulty === 'easy') easyCount++;
      else if (row.difficulty === 'just_right') justRightCount++;
      else if (row.difficulty === 'hard') hardCount++;

      if (row.comment && row.comment.trim().length > 0) {
        commentCount++;
      }
    }

    return {
      total,
      uniqueUsers: userSet.size,
      avgRating: Number((ratingSum / total).toFixed(2)),
      easyCount,
      justRightCount,
      hardCount,
      easyPct: Math.round((easyCount / total) * 100),
      justRightPct: Math.round((justRightCount / total) * 100),
      hardPct: Math.round((hardCount / total) * 100),
      commentCount,
      commentPct: Math.round((commentCount / total) * 100),
    };
  }, [trackFilteredItems]);

  // Per-section stats (Sec 1 ~ 14)
  const sectionStats = useMemo(() => {
    const maxSec = Math.max(
      14,
      ...trackFilteredItems.map((r) => r.section_number)
    );
    const list: Array<{
      sectionNumber: number;
      titleKo: string;
      titleEn: string;
      count: number;
      avgRating: number;
      easy: number;
      justRight: number;
      hard: number;
      comments: number;
    }> = [];

    for (let s = 1; s <= maxSec; s++) {
      const rows = trackFilteredItems.filter((r) => r.section_number === s);
      const count = rows.length;
      const sum = rows.reduce((acc, cur) => acc + cur.rating, 0);
      const meta = sectionTitleMap.get(s);
      list.push({
        sectionNumber: s,
        titleKo: meta?.titleKo || `섹션 ${s}`,
        titleEn: meta?.titleEn || `Section ${s}`,
        count,
        avgRating: count > 0 ? Number((sum / count).toFixed(2)) : 0,
        easy: rows.filter((r) => r.difficulty === 'easy').length,
        justRight: rows.filter((r) => r.difficulty === 'just_right').length,
        hard: rows.filter((r) => r.difficulty === 'hard').length,
        comments: rows.filter((r) => r.comment && r.comment.trim()).length,
      });
    }
    return list;
  }, [trackFilteredItems, sectionTitleMap]);

  // Tag frequency stats
  const tagStats = useMemo(() => {
    const counts = new Map<string, number>();
    for (const t of FEEDBACK_TAGS) {
      counts.set(t.id, 0);
    }
    for (const row of trackFilteredItems) {
      for (const tagId of row.tags || []) {
        counts.set(tagId, (counts.get(tagId) || 0) + 1);
      }
    }
    const total = trackFilteredItems.length || 1;
    return FEEDBACK_TAGS.map((t) => {
      const count = counts.get(t.id) || 0;
      return {
        ...t,
        count,
        pct: trackFilteredItems.length > 0 ? Math.round((count / total) * 100) : 0,
      };
    }).sort((a, b) => b.count - a.count);
  }, [trackFilteredItems]);

  const availableTracks = useMemo(() => {
    const set = new Set<string>(['py-basic']);
    for (const r of items) {
      if (r.track_id) set.add(r.track_id);
    }
    return Array.from(set);
  }, [items]);

  const hasActiveFilter =
    selectedSection !== 'all' ||
    selectedDifficulty !== 'all' ||
    selectedRatingFilter !== 'all' ||
    selectedTag !== 'all' ||
    onlyWithComment ||
    searchQuery.trim().length > 0;

  const resetFilters = () => {
    setSelectedSection('all');
    setSelectedDifficulty('all');
    setSelectedRatingFilter('all');
    setSelectedTag('all');
    setOnlyWithComment(false);
    setSearchQuery('');
  };

  const renderDifficultyBadge = (diff: SectionDifficultyRating) => {
    if (diff === 'easy') {
      return (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 10px',
            borderRadius: '999px',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            color: '#047857',
            fontSize: '0.76rem',
            fontWeight: 800,
          }}
        >
          🌱 {isEn ? 'Easy' : '쉬웠어요'}
        </span>
      );
    }
    if (diff === 'hard') {
      return (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 10px',
            borderRadius: '999px',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#b91c1c',
            fontSize: '0.76rem',
            fontWeight: 800,
          }}
        >
          🔥 {isEn ? 'Challenging' : '어려웠어요'}
        </span>
      );
    }
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 10px',
          borderRadius: '999px',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          color: '#1d4ed8',
          fontSize: '0.76rem',
          fontWeight: 800,
        }}
      >
        👌 {isEn ? 'Just Right' : '딱 적당해요'}
      </span>
    );
  };

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
            {isEn ? 'Admin Access Only' : '지정된 관리자 ID 전용 페이지입니다'}
          </h1>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 0 18px',
            }}
          >
            {isEn
              ? `Current ID (@${currentId}) is not in the designated admin list.`
              : `현재 접속한 계정(@${currentId})은 설문 대시보드 열람 권한이 지정되지 않았습니다.`}
          </p>
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '12px 14px',
              fontSize: '0.8rem',
              color: '#334155',
              textAlign: 'left',
              marginBottom: '20px',
              lineHeight: 1.55,
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: '4px', color: '#0f172a' }}>
              💡 관리자 ID 추가 방법
            </div>
            <div>
              <code>src/lib/admin.ts</code> 의 <code>DEFAULT_ADMIN_IDS</code> 배열에{' '}
              <strong>&apos;{currentId}&apos;</strong> 를 추가하거나,{' '}
              <code>.env.local</code> 에{' '}
              <code>NEXT_PUBLIC_ADMIN_IDS={currentId}</code> 를 설정하세요.
            </div>
            <div style={{ marginTop: '6px', color: '#64748b', fontSize: '0.75rem' }}>
              현재 등록된 관리자 ID: {getConfiguredAdminIds().join(', ')}
            </div>
          </div>
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

  const currentFocusItem =
    filteredItems.length > 0
      ? filteredItems[Math.min(activeIndex, filteredItems.length - 1)]
      : null;

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 70px)',
        background: '#f8fafc',
        padding: '32px 20px 80px',
        color: '#0f172a',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '24px',
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
                background: '#eef2ff',
                border: '1px solid #c7d2fe',
                color: '#4f46e5',
                fontSize: '0.75rem',
                fontWeight: 800,
                marginBottom: '8px',
              }}
            >
              <BarChart3 size={13} />
              <span>ADMIN ANALYTICS</span>
              <span style={{ color: '#818cf8' }}>•</span>
              <span>
                @{profile?.username || user.email?.split('@')[0] || 'admin'}
              </span>
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
                ? 'Section Survey & Feedback Dashboard'
                : '섹션 설문 & 사용자 의견 대시보드'}
            </h1>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#64748b',
                margin: '4px 0 0',
                fontWeight: 500,
              }}
            >
              {isEn
                ? 'Analyze section-by-section ratings, perceived difficulty, tags, and inspect individual learner comments one by one.'
                : '섹션별 만족도 그래프, 체감 난이도, 피드백 태그 통계와 학습자 개별 주관식 의견을 한눈에 확인하세요.'}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              style={{
                padding: '9px 14px',
                borderRadius: '12px',
                border: '1.5px solid #cbd5e1',
                background: '#ffffff',
                fontSize: '0.86rem',
                fontWeight: 700,
                color: '#0f172a',
                cursor: 'pointer',
              }}
            >
              <option value="all">
                {isEn ? 'All Courses' : '전체 코스 트랙'}
              </option>
              {availableTracks.map((tId) => (
                <option key={tId} value={tId}>
                  {tId === 'py-basic' ? 'Python 기초 (py-basic)' : tId}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => void loadFeedbacks()}
              disabled={isFetching}
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
                cursor: isFetching ? 'wait' : 'pointer',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
              }}
            >
              <RefreshCw
                size={15}
                style={{
                  color: '#0891b2',
                  animation: isFetching ? 'spin 1s linear infinite' : 'none',
                }}
              />
              <span>{isEn ? 'Refresh' : '새로고침'}</span>
            </button>
          </div>
        </div>

        {/* Optional SQL Migration Notice if RPC is not deployed yet */}
        {usedFallback && (
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '14px',
              background: '#fffbeb',
              border: '1px solid #fde68a',
              color: '#92400e',
              fontSize: '0.82rem',
              marginBottom: '20px',
              lineHeight: 1.5,
            }}
          >
            <AlertCircle size={17} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>안내:</strong> 모든 회원의 설문 데이터를 통합 조회하려면 Supabase
              SQL Editor에서{' '}
              <code>
                supabase/migrations/20261102010000_admin_section_feedbacks.sql
              </code>{' '}
              파일을 1회 실행해 주세요. (현재는 기본 RLS 조회 모드로 동작 중입니다.)
            </div>
          </div>
        )}

        {/* 4 KPI Summary Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          {/* Card 1: Total Responses */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1.5px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 8px 20px -8px rgba(15, 23, 42, 0.05)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <span
                style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}
              >
                {isEn ? 'Total Survey Responses' : '누적 설문 응답 수'}
              </span>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#ecfeff',
                  color: '#0891b2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Users size={17} />
              </div>
            </div>
            <div
              style={{
                fontSize: '1.85rem',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.1,
              }}
            >
              {kpi.total}
              <span
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#64748b',
                  marginLeft: '4px',
                }}
              >
                {isEn ? 'responses' : '건'}
              </span>
            </div>
            <div
              style={{
                marginTop: '8px',
                fontSize: '0.78rem',
                color: '#0891b2',
                fontWeight: 700,
              }}
            >
              {isEn
                ? `${kpi.uniqueUsers} unique learners participated`
                : `참여 학습자 총 ${kpi.uniqueUsers}명`}
            </div>
          </div>

          {/* Card 2: Average Rating */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1.5px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 8px 20px -8px rgba(15, 23, 42, 0.05)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <span
                style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}
              >
                {isEn ? 'Average Satisfaction' : '평균 만족도 별점'}
              </span>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#fefce8',
                  color: '#eab308',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Star size={17} fill="#facc15" />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '6px',
              }}
            >
              <span
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 900,
                  color: '#0f172a',
                  lineHeight: 1.1,
                }}
              >
                {kpi.avgRating.toFixed(2)}
              </span>
              <span
                style={{ fontSize: '0.9rem', fontWeight: 700, color: '#94a3b8' }}
              >
                / 5.0
              </span>
            </div>
            <div
              style={{
                marginTop: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  fill={star <= Math.round(kpi.avgRating) ? '#facc15' : 'none'}
                  color={
                    star <= Math.round(kpi.avgRating) ? '#eab308' : '#cbd5e1'
                  }
                />
              ))}
            </div>
          </div>

          {/* Card 3: Difficulty Balance */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1.5px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 8px 20px -8px rgba(15, 23, 42, 0.05)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <span
                style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}
              >
                {isEn ? 'Just-Right Difficulty' : '적정 난이도 체감 비율'}
              </span>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#eff6ff',
                  color: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={17} />
              </div>
            </div>
            <div
              style={{
                fontSize: '1.85rem',
                fontWeight: 900,
                color: '#1d4ed8',
                lineHeight: 1.1,
              }}
            >
              {kpi.justRightPct}%
              <span
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#64748b',
                  marginLeft: '6px',
                }}
              >
                ({kpi.justRightCount}건)
              </span>
            </div>
            <div
              style={{
                marginTop: '8px',
                fontSize: '0.76rem',
                color: '#64748b',
                fontWeight: 700,
              }}
            >
              🌱 쉬움 {kpi.easyPct}% ({kpi.easyCount}) · 🔥 어려움 {kpi.hardPct}% (
              {kpi.hardCount})
            </div>
          </div>

          {/* Card 4: Written Comments */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1.5px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 8px 20px -8px rgba(15, 23, 42, 0.05)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <span
                style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}
              >
                {isEn ? 'Written User Opinions' : '주관식 의견 작성 수'}
              </span>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#f5f3ff',
                  color: '#7c3aed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MessageSquareText size={17} />
              </div>
            </div>
            <div
              style={{
                fontSize: '1.85rem',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.1,
              }}
            >
              {kpi.commentCount}
              <span
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#64748b',
                  marginLeft: '4px',
                }}
              >
                {isEn ? 'comments' : '건'}
              </span>
            </div>
            <div
              style={{
                marginTop: '8px',
                fontSize: '0.78rem',
                color: '#7c3aed',
                fontWeight: 700,
              }}
            >
              {isEn
                ? `${kpi.commentPct}% of respondents wrote comments`
                : `전체 응답 중 ${kpi.commentPct}%가 직접 의견 작성`}
            </div>
          </div>
        </div>

        {/* Visual Charts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '20px',
            marginBottom: '28px',
          }}
        >
          {/* Left Chart: Section-by-Section Rating & Volume Bar Graph */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1.5px solid #e2e8f0',
              padding: '22px',
              boxShadow: '0 10px 25px -10px rgba(15, 23, 42, 0.05)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px',
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    margin: 0,
                    color: '#0f172a',
                  }}
                >
                  📊 {isEn ? 'Section Rating & Responses' : '섹션별 평균 별점 & 응답 수 그래프'}
                </h2>
                <p
                  style={{
                    fontSize: '0.76rem',
                    color: '#64748b',
                    margin: '2px 0 0',
                  }}
                >
                  {isEn
                    ? 'Click any section bar to filter user feedbacks below'
                    : '막대를 클릭하면 아래 의견 목록에서 해당 섹션만 필터링합니다'}
                </p>
              </div>
              {selectedSection !== 'all' && (
                <button
                  type="button"
                  onClick={() => setSelectedSection('all')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: '1px solid #cbd5e1',
                    background: '#f8fafc',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: '#475569',
                    cursor: 'pointer',
                  }}
                >
                  Sec {selectedSection} 해제 ✕
                </button>
              )}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '7px',
                maxHeight: '380px',
                overflowY: 'auto',
                paddingRight: '4px',
              }}
            >
              {sectionStats.map((sec) => {
                const isSelected = selectedSection === sec.sectionNumber;
                const widthPct =
                  sec.count > 0 ? Math.max(8, (sec.avgRating / 5) * 100) : 0;

                return (
                  <button
                    key={sec.sectionNumber}
                    type="button"
                    onClick={() =>
                      setSelectedSection(
                        isSelected ? 'all' : sec.sectionNumber
                      )
                    }
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '150px 1fr 94px',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px',
                      borderRadius: '11px',
                      border: isSelected
                        ? '1.5px solid #0891b2'
                        : '1px solid #f1f5f9',
                      background: isSelected ? '#ecfeff' : '#f8fafc',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 900,
                          color: '#0891b2',
                          marginRight: '5px',
                        }}
                      >
                        S{String(sec.sectionNumber).padStart(2, '0')}
                      </span>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: '#1e293b',
                        }}
                        title={isEn ? sec.titleEn : sec.titleKo}
                      >
                        {isEn ? sec.titleEn : sec.titleKo}
                      </span>
                    </div>

                    {/* Bar Track */}
                    <div
                      style={{
                        height: '12px',
                        borderRadius: '999px',
                        background: '#e2e8f0',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      {sec.count > 0 && (
                        <div
                          style={{
                            width: `${widthPct}%`,
                            height: '100%',
                            borderRadius: '999px',
                            background:
                              sec.avgRating >= 4.2
                                ? 'linear-gradient(90deg, #06b6d4, #0891b2)'
                                : sec.avgRating >= 3.2
                                ? 'linear-gradient(90deg, #facc15, #eab308)'
                                : 'linear-gradient(90deg, #f87171, #ef4444)',
                            transition: 'width 0.3s ease',
                          }}
                        />
                      )}
                    </div>

                    {/* Right Metric */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '6px',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                      }}
                    >
                      {sec.count > 0 ? (
                        <>
                          <span style={{ color: '#eab308' }}>
                            ★ {sec.avgRating.toFixed(1)}
                          </span>
                          <span
                            style={{
                              padding: '2px 6px',
                              borderRadius: '6px',
                              background: '#e2e8f0',
                              color: '#334155',
                              fontSize: '0.7rem',
                            }}
                          >
                            {sec.count}건
                          </span>
                        </>
                      ) : (
                        <span style={{ color: '#94a3b8', fontWeight: 600 }}>
                          응답 없음
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Difficulty Distribution + Tag Frequency */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Difficulty Distribution Card */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                padding: '22px',
                boxShadow: '0 10px 25px -10px rgba(15, 23, 42, 0.05)',
              }}
            >
              <h2
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 900,
                  margin: '0 0 4px',
                  color: '#0f172a',
                }}
              >
                🎯 {isEn ? 'Perceived Difficulty Breakdown' : '체감 난이도 분포 그래프'}
              </h2>
              <p
                style={{
                  fontSize: '0.76rem',
                  color: '#64748b',
                  margin: '0 0 14px',
                }}
              >
                {isEn
                  ? 'Click a difficulty card to filter responses'
                  : '난이도 카드를 클릭하면 해당 난이도 응답만 필터링합니다'}
              </p>

              {/* Stacked Proportional Bar */}
              <div
                style={{
                  height: '18px',
                  borderRadius: '999px',
                  background: '#f1f5f9',
                  overflow: 'hidden',
                  display: 'flex',
                  marginBottom: '14px',
                }}
              >
                {kpi.total > 0 ? (
                  <>
                    <div
                      style={{
                        width: `${(kpi.easyCount / kpi.total) * 100}%`,
                        background: '#10b981',
                        transition: 'width 0.3s ease',
                      }}
                      title={`쉬웠어요: ${kpi.easyCount}건 (${kpi.easyPct}%)`}
                    />
                    <div
                      style={{
                        width: `${(kpi.justRightCount / kpi.total) * 100}%`,
                        background: '#3b82f6',
                        transition: 'width 0.3s ease',
                      }}
                      title={`딱 적당해요: ${kpi.justRightCount}건 (${kpi.justRightPct}%)`}
                    />
                    <div
                      style={{
                        width: `${(kpi.hardCount / kpi.total) * 100}%`,
                        background: '#ef4444',
                        transition: 'width 0.3s ease',
                      }}
                      title={`어려웠어요: ${kpi.hardCount}건 (${kpi.hardPct}%)`}
                    />
                  </>
                ) : null}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                }}
              >
                {[
                  {
                    key: 'easy' as SectionDifficultyRating,
                    emoji: '🌱',
                    label: isEn ? 'Easy' : '쉬웠어요',
                    count: kpi.easyCount,
                    pct: kpi.easyPct,
                    color: '#047857',
                    bg: '#ecfdf5',
                    border: '#6ee7b7',
                  },
                  {
                    key: 'just_right' as SectionDifficultyRating,
                    emoji: '👌',
                    label: isEn ? 'Just Right' : '딱 적당해요',
                    count: kpi.justRightCount,
                    pct: kpi.justRightPct,
                    color: '#1d4ed8',
                    bg: '#eff6ff',
                    border: '#93c5fd',
                  },
                  {
                    key: 'hard' as SectionDifficultyRating,
                    emoji: '🔥',
                    label: isEn ? 'Hard' : '어려웠어요',
                    count: kpi.hardCount,
                    pct: kpi.hardPct,
                    color: '#b91c1c',
                    bg: '#fef2f2',
                    border: '#fca5a5',
                  },
                ].map((d) => {
                  const active = selectedDifficulty === d.key;
                  return (
                    <button
                      key={d.key}
                      type="button"
                      onClick={() =>
                        setSelectedDifficulty(active ? 'all' : d.key)
                      }
                      style={{
                        padding: '10px 12px',
                        borderRadius: '12px',
                        border: active
                          ? `2px solid ${d.color}`
                          : `1px solid ${d.border}`,
                        background: active ? d.bg : '#ffffff',
                        cursor: 'pointer',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: d.color }}>
                        {d.emoji} {d.label}
                      </div>
                      <div
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 900,
                          color: '#0f172a',
                          marginTop: '3px',
                        }}
                      >
                        {d.pct}%
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>
                        {d.count}건
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Feedback Tags Frequency Chart */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                padding: '22px',
                boxShadow: '0 10px 25px -10px rgba(15, 23, 42, 0.05)',
                flex: 1,
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
                <div>
                  <h2
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 900,
                      margin: 0,
                      color: '#0f172a',
                    }}
                  >
                    🏷️ {isEn ? 'Feedback Tag Frequency' : '빠른 피드백 태그 선택 빈도'}
                  </h2>
                  <p
                    style={{
                      fontSize: '0.76rem',
                      color: '#64748b',
                      margin: '2px 0 0',
                    }}
                  >
                    {isEn
                      ? 'Click a tag to inspect matching learner responses'
                      : '태그를 클릭하면 해당 태그를 선택한 의견만 모아봅니다'}
                  </p>
                </div>
                {selectedTag !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setSelectedTag('all')}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: '1px solid #cbd5e1',
                      background: '#f8fafc',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#475569',
                      cursor: 'pointer',
                    }}
                  >
                    태그 필터 해제 ✕
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {tagStats.map((tg) => {
                  const isSelected = selectedTag === tg.id;
                  return (
                    <button
                      key={tg.id}
                      type="button"
                      onClick={() =>
                        setSelectedTag(isSelected ? 'all' : tg.id)
                      }
                      style={{
                        padding: '9px 12px',
                        borderRadius: '11px',
                        border: isSelected
                          ? '1.5px solid #6366f1'
                          : '1px solid #e2e8f0',
                        background: isSelected ? '#eef2ff' : '#f8fafc',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '5px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: '#1e293b',
                        }}
                      >
                        <span>{isEn ? tg.labelEn : tg.labelKo}</span>
                        <span style={{ fontWeight: 800, color: '#4f46e5' }}>
                          {tg.count}건 ({tg.pct}%)
                        </span>
                      </div>
                      <div
                        style={{
                          height: '7px',
                          borderRadius: '999px',
                          background: '#e2e8f0',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: `${Math.max(tg.count > 0 ? 5 : 0, tg.pct)}%`,
                            height: '100%',
                            borderRadius: '999px',
                            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                            transition: 'width 0.3s ease',
                          }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Individual Opinion Inspector */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1.5px solid #cbd5e1',
            padding: '24px',
            boxShadow: '0 12px 30px -12px rgba(15, 23, 42, 0.06)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              marginBottom: '18px',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  margin: 0,
                  color: '#0f172a',
                }}
              >
                💬 {isEn ? 'Inspect User Feedbacks One by One' : '사용자 설문 & 의견 하나씩 확인하기'}
              </h2>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: '#64748b',
                  margin: '3px 0 0',
                }}
              >
                {isEn
                  ? `Showing ${filteredItems.length} of ${trackFilteredItems.length} feedbacks`
                  : `조건에 맞는 의견 총 ${filteredItems.length}건 (전체 ${trackFilteredItems.length}건)`}
              </p>
            </div>

            {hasActiveFilter && (
              <button
                type="button"
                onClick={resetFilters}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 13px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  background: '#f8fafc',
                  color: '#334155',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                <X size={14} />
                <span>{isEn ? 'Reset Filters' : '필터 초기화'}</span>
              </button>
            )}
          </div>

          {/* Filter Controls Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              padding: '14px',
              borderRadius: '14px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              marginBottom: '22px',
            }}
          >
            <Filter size={15} style={{ color: '#64748b' }} />

            {/* Section Selector */}
            <select
              value={selectedSection}
              onChange={(e) =>
                setSelectedSection(
                  e.target.value === 'all' ? 'all' : Number(e.target.value)
                )
              }
              style={{
                padding: '8px 12px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#0f172a',
              }}
            >
              <option value="all">{isEn ? 'All Sections' : '전체 섹션 (Sec 01~14)'}</option>
              {sectionStats.map((sec) => (
                <option key={sec.sectionNumber} value={sec.sectionNumber}>
                  Sec {String(sec.sectionNumber).padStart(2, '0')} -{' '}
                  {isEn ? sec.titleEn : sec.titleKo} ({sec.count}건)
                </option>
              ))}
            </select>

            {/* Difficulty Selector */}
            <select
              value={selectedDifficulty}
              onChange={(e) =>
                setSelectedDifficulty(
                  e.target.value as SectionDifficultyRating | 'all'
                )
              }
              style={{
                padding: '8px 12px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#0f172a',
              }}
            >
              <option value="all">{isEn ? 'All Difficulties' : '전체 난이도'}</option>
              <option value="easy">🌱 쉬웠어요</option>
              <option value="just_right">👌 딱 적당해요</option>
              <option value="hard">🔥 어려웠어요</option>
            </select>

            {/* Star Rating Selector */}
            <select
              value={selectedRatingFilter}
              onChange={(e) =>
                setSelectedRatingFilter(
                  e.target.value as 'all' | '5' | '4' | 'low'
                )
              }
              style={{
                padding: '8px 12px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#0f172a',
              }}
            >
              <option value="all">{isEn ? 'All Ratings' : '전체 별점'}</option>
              <option value="5">★ 5점 만점</option>
              <option value="4">★ 4점</option>
              <option value="low">★ 3점 이하 (개선 필요)</option>
            </select>

            {/* Written Comments Toggle */}
            <button
              type="button"
              onClick={() => setOnlyWithComment((prev) => !prev)}
              style={{
                padding: '8px 12px',
                borderRadius: '10px',
                border: onlyWithComment
                  ? '1.5px solid #7c3aed'
                  : '1px solid #cbd5e1',
                background: onlyWithComment ? '#f5f3ff' : '#ffffff',
                color: onlyWithComment ? '#6d28d9' : '#334155',
                fontSize: '0.82rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              💬 {isEn ? 'Written Comments Only' : '주관식 코멘트 있는 의견만'}
            </button>

            {/* Search Input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                flex: '1 1 200px',
              }}
            >
              <Search size={14} style={{ color: '#94a3b8' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isEn
                    ? 'Search @username, nickname, or comment...'
                    : '@아이디, 닉네임, 코멘트 내용 검색...'
                }
                style={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  fontSize: '0.82rem',
                  color: '#0f172a',
                  background: 'transparent',
                }}
              />
            </div>
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 ? (
            <div
              style={{
                padding: '48px 20px',
                textAlign: 'center',
                color: '#64748b',
                border: '1.5px dashed #cbd5e1',
                borderRadius: '16px',
              }}
            >
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#334155' }}>
                {isEn
                  ? 'No survey responses match the current filters.'
                  : '표시할 설문 응답이 없습니다.'}
              </div>
              <p style={{ fontSize: '0.84rem', marginTop: '6px' }}>
                {isEn
                  ? 'Try clearing filters or completing a section end level to submit a survey.'
                  : '필터 조건을 변경하거나 섹션의 마지막 레벨을 완료해 첫 설문을 등록해 보세요.'}
              </p>
            </div>
          ) : (
            <>
              {/* One-by-One Focus Inspector Card */}
              {currentFocusItem && (
                <div
                  style={{
                    borderRadius: '18px',
                    border: '2px solid #0891b2',
                    background:
                      'linear-gradient(180deg, rgba(236, 254, 255, 0.55) 0%, #ffffff 100%)',
                    padding: '22px',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      paddingBottom: '14px',
                      borderBottom: '1px solid #e2e8f0',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 900,
                        color: '#0891b2',
                      }}
                    >
                      <span>🔎 {isEn ? 'ONE-BY-ONE INSPECTOR' : '개별 의견 집중 확인'}</span>
                      <span
                        style={{
                          padding: '3px 9px',
                          borderRadius: '999px',
                          background: '#0891b2',
                          color: '#ffffff',
                          fontSize: '0.74rem',
                        }}
                      >
                        {activeIndex + 1} / {filteredItems.length}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex((prev) => Math.max(0, prev - 1))
                        }
                        disabled={activeIndex <= 0}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '7px 13px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          background: activeIndex <= 0 ? '#f1f5f9' : '#ffffff',
                          color: activeIndex <= 0 ? '#94a3b8' : '#0f172a',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          cursor: activeIndex <= 0 ? 'not-allowed' : 'pointer',
                        }}
                      >
                        <ChevronLeft size={15} />
                        <span>{isEn ? 'Prev' : '이전 의견'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex((prev) =>
                            Math.min(filteredItems.length - 1, prev + 1)
                          )
                        }
                        disabled={activeIndex >= filteredItems.length - 1}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '7px 13px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          background:
                            activeIndex >= filteredItems.length - 1
                              ? '#f1f5f9'
                              : '#ffffff',
                          color:
                            activeIndex >= filteredItems.length - 1
                              ? '#94a3b8'
                              : '#0f172a',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          cursor:
                            activeIndex >= filteredItems.length - 1
                              ? 'not-allowed'
                              : 'pointer',
                        }}
                      >
                        <span>{isEn ? 'Next' : '다음 의견'}</span>
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Focused User & Section Header */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      marginBottom: '14px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <UserAvatar
                        avatarUrl={currentFocusItem.avatar_url}
                        avatarPreset={currentFocusItem.avatar_preset || 'fox'}
                        size={44}
                        alt={currentFocusItem.display_name || 'User'}
                      />
                      <div>
                        <div
                          style={{
                            fontWeight: 900,
                            fontSize: '1rem',
                            color: '#0f172a',
                          }}
                        >
                          {currentFocusItem.display_name || '익명 학습자'}
                          {currentFocusItem.username && (
                            <span
                              style={{
                                marginLeft: '6px',
                                fontSize: '0.82rem',
                                fontWeight: 700,
                                color: '#64748b',
                              }}
                            >
                              @{currentFocusItem.username}
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: '#64748b',
                            marginTop: '2px',
                          }}
                        >
                          {formatKstDateTime(currentFocusItem.updated_at)} · 트랙:{' '}
                          <strong>{currentFocusItem.track_id}</strong>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span
                        style={{
                          padding: '5px 12px',
                          borderRadius: '999px',
                          background: '#0f172a',
                          color: '#ffffff',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                        }}
                      >
                        Section {String(currentFocusItem.section_number).padStart(2, '0')} ·{' '}
                        {sectionTitleMap.get(currentFocusItem.section_number)?.titleKo ||
                          `섹션 ${currentFocusItem.section_number}`}
                      </span>
                      {renderDifficultyBadge(currentFocusItem.difficulty)}
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px',
                          padding: '4px 10px',
                          borderRadius: '999px',
                          background: '#fefce8',
                          border: '1px solid #fde047',
                          color: '#a16207',
                          fontSize: '0.8rem',
                          fontWeight: 900,
                        }}
                      >
                        {'★'.repeat(currentFocusItem.rating)}
                        {'☆'.repeat(Math.max(0, 5 - currentFocusItem.rating))} (
                        {currentFocusItem.rating}.0)
                      </span>
                    </div>
                  </div>

                  {/* Selected Tags */}
                  {currentFocusItem.tags && currentFocusItem.tags.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '14px',
                      }}
                    >
                      {currentFocusItem.tags.map((tId) => {
                        const meta = tagLabelMap.get(tId);
                        return (
                          <span
                            key={tId}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '5px 11px',
                              borderRadius: '999px',
                              background: '#eef2ff',
                              border: '1px solid #c7d2fe',
                              color: '#4338ca',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                            }}
                          >
                            <Tag size={12} />
                            {meta ? (isEn ? meta.labelEn : meta.labelKo) : tId}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {/* Written Comment Box */}
                  <div
                    style={{
                      padding: '16px 18px',
                      borderRadius: '14px',
                      background:
                        currentFocusItem.comment &&
                        currentFocusItem.comment.trim()
                          ? '#f8fafc'
                          : '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      color:
                        currentFocusItem.comment &&
                        currentFocusItem.comment.trim()
                          ? '#0f172a'
                          : '#94a3b8',
                      fontWeight:
                        currentFocusItem.comment &&
                        currentFocusItem.comment.trim()
                          ? 600
                          : 500,
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {currentFocusItem.comment &&
                    currentFocusItem.comment.trim()
                      ? `“${currentFocusItem.comment}”`
                      : isEn
                      ? '(No additional written comment submitted — rating & tags only)'
                      : '(주관식 코멘트 없이 별점·난이도·태그만 제출된 응답입니다)'}
                  </div>
                </div>
              )}

              {/* Full Filtered Opinion List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {filteredItems.map((item, idx) => {
                  const isFocused = idx === activeIndex;
                  const secMeta = sectionTitleMap.get(item.section_number);

                  return (
                    <div
                      key={`${item.user_id}-${item.track_id}-${item.section_number}`}
                      onClick={() => setActiveIndex(idx)}
                      style={{
                        padding: '16px 18px',
                        borderRadius: '14px',
                        border: isFocused
                          ? '1.5px solid #0891b2'
                          : '1px solid #e2e8f0',
                        background: isFocused ? '#f0fdff' : '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '10px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.74rem',
                              fontWeight: 900,
                              color: '#64748b',
                              minWidth: '28px',
                            }}
                          >
                            #{idx + 1}
                          </span>
                          <UserAvatar
                            avatarUrl={item.avatar_url}
                            avatarPreset={item.avatar_preset || 'fox'}
                            size={32}
                            alt={item.display_name || 'User'}
                          />
                          <div>
                            <span
                              style={{
                                fontWeight: 800,
                                fontSize: '0.88rem',
                                color: '#0f172a',
                              }}
                            >
                              {item.display_name || '익명 학습자'}
                            </span>
                            {item.username && (
                              <span
                                style={{
                                  marginLeft: '5px',
                                  fontSize: '0.78rem',
                                  color: '#64748b',
                                  fontWeight: 700,
                                }}
                              >
                                @{item.username}
                              </span>
                            )}
                          </div>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <span
                            style={{
                              padding: '3px 9px',
                              borderRadius: '8px',
                              background: '#f1f5f9',
                              color: '#334155',
                              fontSize: '0.75rem',
                              fontWeight: 800,
                            }}
                          >
                            Sec {String(item.section_number).padStart(2, '0')} ·{' '}
                            {secMeta
                              ? isEn
                                ? secMeta.titleEn
                                : secMeta.titleKo
                              : `섹션 ${item.section_number}`}
                          </span>
                          {renderDifficultyBadge(item.difficulty)}
                          <span
                            style={{
                              color: '#eab308',
                              fontWeight: 900,
                              fontSize: '0.84rem',
                            }}
                          >
                            ★ {item.rating}.0
                          </span>
                          <span
                            style={{
                              fontSize: '0.74rem',
                              color: '#94a3b8',
                              fontWeight: 600,
                            }}
                          >
                            {formatKstDateTime(item.updated_at)}
                          </span>
                        </div>
                      </div>

                      {(item.tags.length > 0 ||
                        (item.comment && item.comment.trim())) && (
                        <div style={{ marginTop: '10px', paddingLeft: '38px' }}>
                          {item.tags.length > 0 && (
                            <div
                              style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '5px',
                                marginBottom:
                                  item.comment && item.comment.trim()
                                    ? '8px'
                                    : 0,
                              }}
                            >
                              {item.tags.map((tId) => {
                                const meta = tagLabelMap.get(tId);
                                return (
                                  <span
                                    key={tId}
                                    style={{
                                      padding: '2px 8px',
                                      borderRadius: '999px',
                                      background: '#f8fafc',
                                      border: '1px solid #e2e8f0',
                                      color: '#475569',
                                      fontSize: '0.72rem',
                                      fontWeight: 700,
                                    }}
                                  >
                                    {meta
                                      ? isEn
                                        ? meta.labelEn
                                        : meta.labelKo
                                      : tId}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                          {item.comment && item.comment.trim() && (
                            <div
                              style={{
                                fontSize: '0.86rem',
                                color: '#1e293b',
                                fontWeight: 600,
                                background: '#f8fafc',
                                padding: '9px 12px',
                                borderRadius: '10px',
                                borderLeft: '3px solid #0891b2',
                              }}
                            >
                              {item.comment}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
