'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  AlertCircle,
  ArrowLeft,
  Award,
  BarChart3,
  CheckCircle2,
  Flame,
  GraduationCap,
  Keyboard,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Trophy,
  UserPlus,
  Users,
  X,
} from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { useLanguage } from '@/lib/LanguageContext';
import { getConfiguredAdminIds, isAdminUser } from '@/lib/admin';
import { createClient } from '@/lib/supabase/client';
import {
  generateAlphanumericInviteCode,
  normalizeProfileRow,
  setStudentLearningLevel,
} from '@/lib/progressSync';
import UserAvatar from '@/components/UserAvatar';
import type {
  ClassroomRow,
  ClassroomStudentProgressRow,
  UserProfile,
} from '@/lib/supabase/types';

const PYTHON_TOTAL_LEVELS = 113;

const CURRICULUM_LABELS: Record<string, string> = {
  starter: '🌱 코딩 첫걸음',
  'python-master': '🐍 파이썬 기초 마스터',
  'web-frontend': '🎨 웹 프론트엔드 입문',
  'cs-system': '⚙️ CS & 시스템 프로그래밍',
  'algorithm-problem': '🏆 알고리즘 & 문제해결',
  'backend-data': '🗄️ 백엔드 & 데이터베이스',
  python: '🐍 Python',
  c: '⚙️ C언어',
  web: '🌐 Web (HTML/CSS)',
  javascript: '⚡ JavaScript',
  java: '☕ Java',
  cpp: '🚀 C++',
  sql: '🗄️ SQL',
};

function generateInviteCode(): string {
  return generateAlphanumericInviteCode(8);
}

function profileToStudentRow(p: UserProfile): ClassroomStudentProgressRow {
  return {
    student_id: p.id,
    student_label: null,
    joined_at: p.created_at,
    username: p.username,
    email: p.email,
    display_name: p.display_name,
    avatar_preset: p.avatar_preset,
    avatar_url: p.avatar_url,
    active_curriculum_type: p.active_curriculum_type,
    active_curriculum_id: p.active_curriculum_id,
    current_track_id: p.current_track_id,
    current_level: p.current_level,
    cleared_levels: p.cleared_levels,
    completed_tracks: p.completed_tracks,
    cleared_levels_count: p.cleared_levels_count,
    solved_problems_count: p.solved_problems_count,
    current_streak: p.current_streak,
    longest_streak: p.longest_streak,
    total_attendance_days: p.total_attendance_days,
    last_attended_date: p.last_attended_date,
    best_typing_cpm: p.best_typing_cpm,
    best_typing_accuracy: p.best_typing_accuracy,
    activity_score: p.activity_score,
    progress_reset_at: p.progress_reset_at,
  };
}

export default function InstructorLmsLeaderboardPage() {
  const { user, profile, isLoading: authLoading } = useAuth();
  const { language } = useLanguage();
  const isEn = language === 'en';

  const isAuthorized = useMemo(
    () =>
      isAdminUser(profile, user) ||
      profile?.role === 'instructor' ||
      profile?.role === 'org_admin' ||
      profile?.role === 'super_admin',
    [profile, user]
  );

  const [classrooms, setClassrooms] = useState<ClassroomRow[]>([]);
  const [selectedClassroomId, setSelectedClassroomId] = useState<string>('all');
  const [students, setStudents] = useState<ClassroomStudentProgressRow[]>([]);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  // Search & Sorting
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<
    'score' | 'progress' | 'streak' | 'cpm'
  >('score');

  // Create Classroom Modal / Form
  const [isCreateClassOpen, setIsCreateClassOpen] = useState<boolean>(false);
  const [newClassName, setNewClassName] = useState<string>('');
  const [newClassDesc, setNewClassDesc] = useState<string>('');
  const [isCreatingClass, setIsCreatingClass] = useState<boolean>(false);

  // Assign Student to Classroom Form
  const [assignIdentifier, setAssignIdentifier] = useState<string>('');
  const [assignLabel, setAssignLabel] = useState<string>('');
  const [isAssigning, setIsAssigning] = useState<boolean>(false);

  // Per-student Target Level input map & loading state
  const [levelInputs, setLevelInputs] = useState<Record<string, number>>({});
  const [updatingStudentId, setUpdatingStudentId] = useState<string | null>(
    null
  );
  const [banner, setBanner] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const loadClassrooms = useCallback(async () => {
    if (!user) return;
    try {
      const supabase = createClient();
      const { data } = await supabase
        .from('classrooms')
        .select('*')
        .order('created_at', { ascending: false });
      if (Array.isArray(data)) {
        setClassrooms(data as ClassroomRow[]);
      }
    } catch {
      // Non-fatal
    }
  }, [user]);

  const loadStudents = useCallback(
    async (classroomId: string) => {
      setIsLoadingData(true);
      try {
        const supabase = createClient();
        if (classroomId === 'all') {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .order('activity_score', { ascending: false });

          if (!error && Array.isArray(data)) {
            const rows = data
              .map((raw) => normalizeProfileRow(raw as Record<string, unknown>))
              .filter((norm) => !isAdminUser(norm))
              .map((norm) => profileToStudentRow(norm));
            setStudents(rows);
            const initMap: Record<string, number> = {};
            rows.forEach((r) => {
              initMap[r.student_id] = r.current_level || 1;
            });
            setLevelInputs(initMap);
          }
        } else {
          const { data: rpcData, error: rpcErr } = await supabase.rpc(
            'get_classroom_students_progress',
            { p_classroom_id: classroomId }
          );

          if (!rpcErr && Array.isArray(rpcData)) {
            const rows = (rpcData as Record<string, unknown>[])
              .map((raw) => {
                const norm = normalizeProfileRow({
                  ...raw,
                  id: raw.student_id,
                });
                return { norm, raw };
              })
              .filter(({ norm }) => !isAdminUser(norm))
              .map(({ norm, raw }) => ({
                ...profileToStudentRow(norm),
                student_label:
                  typeof raw.student_label === 'string'
                    ? raw.student_label
                    : null,
                joined_at:
                  typeof raw.joined_at === 'string'
                    ? raw.joined_at
                    : norm.created_at,
              }));
            setStudents(rows);
            const initMap: Record<string, number> = {};
            rows.forEach((r) => {
              initMap[r.student_id] = r.current_level || 1;
            });
            setLevelInputs(initMap);
          } else {
            setStudents([]);
          }
        }
      } finally {
        setIsLoadingData(false);
      }
    },
    []
  );

  useEffect(() => {
    if (!authLoading && isAuthorized) {
      void loadClassrooms();
      void loadStudents(selectedClassroomId);
    } else if (!authLoading) {
      setIsLoadingData(false);
    }
  }, [authLoading, isAuthorized, selectedClassroomId, loadClassrooms, loadStudents]);

  const handleCreateClassroom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newClassName.trim()) return;
    setIsCreatingClass(true);
    setBanner(null);

    try {
      const supabase = createClient();
      const inviteCode = generateInviteCode();
      const { data, error } = await supabase
        .from('classrooms')
        .insert({
          instructor_id: user.id,
          name: newClassName.trim(),
          description: newClassDesc.trim() || null,
          invite_code: inviteCode,
          assigned_tracks: ['py-basic'],
        })
        .select('*')
        .single();

      if (error || !data) {
        throw new Error(error?.message || '학급 생성에 실패했습니다.');
      }

      const created = data as ClassroomRow;
      setClassrooms((prev) => [created, ...prev]);
      setSelectedClassroomId(created.id);
      setNewClassName('');
      setNewClassDesc('');
      setIsCreateClassOpen(false);
      setBanner({
        type: 'success',
        text: `새 학급 '${created.name}' (초대코드: ${created.invite_code})이 개설되었습니다.`,
      });
    } catch (err) {
      setBanner({
        type: 'error',
        text: err instanceof Error ? err.message : '학급 생성 중 오류가 발생했습니다.',
      });
    } finally {
      setIsCreatingClass(false);
    }
  };

  const handleAssignStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !selectedClassroomId ||
      selectedClassroomId === 'all' ||
      !assignIdentifier.trim()
    ) {
      return;
    }

    setIsAssigning(true);
    setBanner(null);
    try {
      const supabase = createClient();
      const cleanId = assignIdentifier.trim().toLowerCase();
      const cleanLabel = assignLabel.trim() || null;

      const { error: rpcError } = await supabase.rpc(
        'assign_student_to_classroom',
        {
          p_classroom_id: selectedClassroomId,
          p_identifier: cleanId,
          p_student_label: cleanLabel,
        }
      );

      if (rpcError) {
        throw new Error(rpcError.message);
      }

      setAssignIdentifier('');
      setAssignLabel('');
      await loadStudents(selectedClassroomId);
      setBanner({
        type: 'success',
        text: `학생(${cleanId})을 현재 학급에 배정했습니다.`,
      });
    } catch (err) {
      setBanner({
        type: 'error',
        text:
          err instanceof Error
            ? err.message
            : '학생 배정에 실패했습니다. 로그인 ID 또는 이메일을 확인해 주세요.',
      });
    } finally {
      setIsAssigning(false);
    }
  };

  const handleRemoveFromClassroom = async (studentId: string, name: string) => {
    if (selectedClassroomId === 'all') return;
    setBanner(null);
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('classroom_members')
        .delete()
        .eq('classroom_id', selectedClassroomId)
        .eq('student_id', studentId);

      if (error) throw new Error(error.message);
      setStudents((prev) => prev.filter((s) => s.student_id !== studentId));
      setBanner({
        type: 'success',
        text: `'${name}' 학생을 학급 명단에서 제외했습니다.`,
      });
    } catch (err) {
      setBanner({
        type: 'error',
        text: err instanceof Error ? err.message : '배정 해제 중 오류가 발생했습니다.',
      });
    }
  };

  const handleApplyStudentLevel = async (
    student: ClassroomStudentProgressRow,
    targetLevel: number
  ) => {
    const safeLvl = Math.max(
      1,
      Math.min(PYTHON_TOTAL_LEVELS, Math.round(targetLevel))
    );
    setUpdatingStudentId(student.student_id);
    setBanner(null);

    try {
      const updated = await setStudentLearningLevel(
        student.student_id,
        'py-basic',
        safeLvl
      );
      if (!updated) {
        throw new Error('학습 레벨 변경 권한이 없거나 처리에 실패했습니다.');
      }

      setStudents((prev) =>
        prev.map((row) =>
          row.student_id === student.student_id
            ? {
                ...row,
                current_track_id: updated.current_track_id,
                current_level: updated.current_level,
                cleared_levels: updated.cleared_levels,
                completed_tracks: updated.completed_tracks,
                cleared_levels_count: updated.cleared_levels_count,
                activity_score: updated.activity_score,
                progress_reset_at: updated.progress_reset_at,
              }
            : row
        )
      );
      setLevelInputs((prev) => ({
        ...prev,
        [student.student_id]: safeLvl,
      }));

      setBanner({
        type: 'success',
        text:
          safeLvl === 1
            ? `✅ '${student.display_name}' 학생의 Python 기초 진도를 Lv.1부터 다시 시작하도록 초기화했습니다.`
            : `✅ '${student.display_name}' 학생의 학습 위치를 Lv.${safeLvl}부터 학습하도록 지정했습니다 (Lv.1~${safeLvl - 1} 완료 처리).`,
      });
    } catch (err) {
      setBanner({
        type: 'error',
        text: err instanceof Error ? err.message : '레벨 변경에 실패했습니다.',
      });
    } finally {
      setUpdatingStudentId(null);
    }
  };

  const filteredAndSortedStudents = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const filtered = students.filter((s) => {
      if (!q) return true;
      return (
        (s.display_name || '').toLowerCase().includes(q) ||
        (s.username || '').toLowerCase().includes(q) ||
        (s.email || '').toLowerCase().includes(q) ||
        (s.student_label || '').toLowerCase().includes(q)
      );
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'progress') {
        const aCleared = (a.cleared_levels?.['py-basic'] || []).length;
        const bCleared = (b.cleared_levels?.['py-basic'] || []).length;
        if (bCleared !== aCleared) return bCleared - aCleared;
        return (b.current_level || 1) - (a.current_level || 1);
      }
      if (sortBy === 'streak') {
        if (b.current_streak !== a.current_streak) {
          return b.current_streak - a.current_streak;
        }
        return b.total_attendance_days - a.total_attendance_days;
      }
      if (sortBy === 'cpm') {
        return b.best_typing_cpm - a.best_typing_cpm;
      }
      return b.activity_score - a.activity_score;
    });
  }, [students, searchQuery, sortBy]);

  const kpi = useMemo(() => {
    const total = students.length;
    if (total === 0) {
      return {
        total: 0,
        completedUsers: 0,
        avgCleared: 0,
        avgPct: 0,
        avgStreak: 0,
        maxStreak: 0,
        topStudentName: '-',
        topScore: 0,
        maxCpm: 0,
      };
    }

    let clearedSum = 0;
    let completedUsers = 0;
    let streakSum = 0;
    let maxStreak = 0;
    let maxCpm = 0;
    let topStudent = students[0];

    for (const s of students) {
      const pyCleared = (s.cleared_levels?.['py-basic'] || []).length;
      clearedSum += pyCleared;
      if (
        pyCleared >= PYTHON_TOTAL_LEVELS ||
        (s.completed_tracks || []).includes('py-basic')
      ) {
        completedUsers++;
      }
      streakSum += s.current_streak || 0;
      if ((s.longest_streak || 0) > maxStreak) maxStreak = s.longest_streak;
      if ((s.best_typing_cpm || 0) > maxCpm) maxCpm = s.best_typing_cpm;
      if ((s.activity_score || 0) > (topStudent.activity_score || 0)) {
        topStudent = s;
      }
    }

    const avgCleared = Number((clearedSum / total).toFixed(1));
    return {
      total,
      completedUsers,
      avgCleared,
      avgPct: Math.min(100, Math.round((avgCleared / PYTHON_TOTAL_LEVELS) * 100)),
      avgStreak: Number((streakSum / total).toFixed(1)),
      maxStreak,
      topStudentName: topStudent.display_name || topStudent.username || '-',
      topScore: topStudent.activity_score || 0,
      maxCpm,
    };
  }, [students]);

  const activeClassroom = useMemo(
    () => classrooms.find((c) => c.id === selectedClassroomId) || null,
    [classrooms, selectedClassroomId]
  );

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
        {isEn ? 'Checking LMS authorization...' : '강사 / 관리자 권한 확인 중...'}
      </main>
    );
  }

  if (!user || !isAuthorized) {
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
            {isEn ? 'Instructor / Admin Only' : '강사 및 관리자 전용 LMS 페이지입니다'}
          </h1>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 0 18px',
            }}
          >
            현재 계정(@{currentId})은 강사 또는 관리자로 등록되어 있지 않습니다.
            <br />
            등록된 관리자 이메일: {getConfiguredAdminIds().join(', ')}
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
        {/* Top Header */}
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
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                color: '#047857',
                fontSize: '0.75rem',
                fontWeight: 800,
                marginBottom: '8px',
              }}
            >
              <GraduationCap size={14} />
              <span>B2B · B2G INSTRUCTOR LMS</span>
              <span style={{ color: '#34d399' }}>•</span>
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
                ? 'Instructor LMS Leaderboard & Progress Board'
                : '강사용 LMS 리더보드 & 담당 학생 진도 관리'}
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
                ? 'Monitor assigned students’ real-time curriculum progress, streaks, typing speed, and reset or assign target learning levels.'
                : '학급별 담당 학생들의 현재 학습 커리큘럼·레벨 진도·출석 스트릭을 실시간 비교하고, 특정 레벨 지정 및 Lv.1 초기화를 제어합니다.'}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <Link
              href="/admin"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '9px 15px',
                borderRadius: '12px',
                border: '1.5px solid #fde68a',
                background: '#fffbeb',
                color: '#b45309',
                fontSize: '0.84rem',
                fontWeight: 800,
                textDecoration: 'none',
              }}
            >
              <ShieldCheck size={15} />
              <span>{isEn ? 'Admin Console' : '관리자 페이지'}</span>
            </Link>

            <Link
              href="/admin/feedbacks"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '9px 15px',
                borderRadius: '12px',
                border: '1.5px solid #c7d2fe',
                background: '#eef2ff',
                color: '#4338ca',
                fontSize: '0.84rem',
                fontWeight: 800,
                textDecoration: 'none',
              }}
            >
              <BarChart3 size={15} />
              <span>{isEn ? 'Survey Dashboard' : '설문 대시보드'}</span>
            </Link>

            <button
              type="button"
              onClick={() => void loadStudents(selectedClassroomId)}
              disabled={isLoadingData}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '9px 15px',
                borderRadius: '12px',
                border: '1.5px solid #cbd5e1',
                background: '#ffffff',
                color: '#0f172a',
                fontSize: '0.84rem',
                fontWeight: 800,
                cursor: isLoadingData ? 'wait' : 'pointer',
              }}
            >
              <RefreshCw
                size={15}
                style={{
                  color: '#0891b2',
                  animation: isLoadingData ? 'spin 1s linear infinite' : 'none',
                }}
              />
              <span>{isEn ? 'Refresh' : '새로고침'}</span>
            </button>
          </div>
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

        {/* Classroom Selector & Create Classroom Bar */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '18px',
            border: '1.5px solid #cbd5e1',
            padding: '16px 20px',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: '0 8px 20px -8px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#475569',
                  marginRight: '4px',
                }}
              >
                학급/분반 선택:
              </span>
              <button
                type="button"
                onClick={() => setSelectedClassroomId('all')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border:
                    selectedClassroomId === 'all'
                      ? '1.5px solid #0891b2'
                      : '1px solid #cbd5e1',
                  background:
                    selectedClassroomId === 'all' ? '#ecfeff' : '#f8fafc',
                  color: selectedClassroomId === 'all' ? '#0e7490' : '#334155',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                🌐 전체 학습자 리더보드 (통합 조회)
              </button>

              {classrooms.map((cls) => {
                const isSel = selectedClassroomId === cls.id;
                return (
                  <button
                    key={cls.id}
                    type="button"
                    onClick={() => setSelectedClassroomId(cls.id)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: isSel
                        ? '1.5px solid #059669'
                        : '1px solid #cbd5e1',
                      background: isSel ? '#ecfdf5' : '#f8fafc',
                      color: isSel ? '#047857' : '#334155',
                      fontSize: '0.84rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span>🏫 {cls.name}</span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '2px 6px',
                        borderRadius: '6px',
                        background: isSel ? '#d1fae5' : '#e2e8f0',
                        color: isSel ? '#065f46' : '#475569',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {cls.invite_code}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsCreateClassOpen((prev) => !prev)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '10px',
                border: '1.5px solid #059669',
                background: '#059669',
                color: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              <Plus size={15} />
              <span>새 학급 개설</span>
            </button>
          </div>

          {/* Inline Create Classroom Form */}
          {isCreateClassOpen && (
            <form
              onSubmit={handleCreateClassroom}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '10px',
                padding: '14px',
                borderRadius: '12px',
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
              }}
            >
              <input
                type="text"
                required
                placeholder="학급/분반 이름 (예: 1학년 3반 파이썬 기초)"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
                style={{
                  flex: '1 1 240px',
                  padding: '9px 12px',
                  borderRadius: '9px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                }}
              />
              <input
                type="text"
                placeholder="학급 설명 / 메모 (선택)"
                value={newClassDesc}
                onChange={(e) => setNewClassDesc(e.target.value)}
                style={{
                  flex: '1 1 220px',
                  padding: '9px 12px',
                  borderRadius: '9px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                }}
              />
              <button
                type="submit"
                disabled={isCreatingClass}
                style={{
                  padding: '9px 16px',
                  borderRadius: '9px',
                  border: 'none',
                  background: '#059669',
                  color: '#ffffff',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                {isCreatingClass ? '생성 중...' : '학급 생성하기'}
              </button>
            </form>
          )}

          {/* Active Classroom Student Assignment Bar */}
          {activeClassroom && (
            <form
              onSubmit={handleAssignStudent}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '12px',
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: '#065f46',
                }}
              >
                <UserPlus size={16} />
                <span>
                  [{activeClassroom.name}] 담당 학생 추가 (초대코드:{' '}
                  <code>{activeClassroom.invite_code}</code>)
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px',
                  flex: '1 1 420px',
                  justifyContent: 'flex-end',
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="학생 로그인 ID 또는 가입 이메일"
                  value={assignIdentifier}
                  onChange={(e) => setAssignIdentifier(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #6ee7b7',
                    background: '#ffffff',
                    fontSize: '0.83rem',
                    minWidth: '210px',
                  }}
                />
                <input
                  type="text"
                  placeholder="학번/출석번호 메모 (예: 10305 홍길동)"
                  value={assignLabel}
                  onChange={(e) => setAssignLabel(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #6ee7b7',
                    background: '#ffffff',
                    fontSize: '0.83rem',
                    minWidth: '180px',
                  }}
                />
                <button
                  type="submit"
                  disabled={isAssigning}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#047857',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  {isAssigning ? '배정 중...' : '+ 반에 학생 추가'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* 4 KPI Summary Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '22px',
          }}
        >
          {/* Card 1 */}
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
                marginBottom: '8px',
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                조회 중인 학생 수
              </span>
              <Users size={18} color="#0891b2" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f172a' }}>
              {kpi.total}
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748b', marginLeft: '4px' }}>
                명
              </span>
            </div>
            <div style={{ marginTop: '6px', fontSize: '0.78rem', color: '#0891b2', fontWeight: 700 }}>
              113레벨 전 과정 완주자: {kpi.completedUsers}명
            </div>
          </div>

          {/* Card 2 */}
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
                marginBottom: '8px',
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                평균 완료 레벨 (Python 기초)
              </span>
              <Award size={18} color="#059669" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f172a' }}>
              {kpi.avgCleared}
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748b', marginLeft: '4px' }}>
                / {PYTHON_TOTAL_LEVELS} 레벨 ({kpi.avgPct}%)
              </span>
            </div>
            <div style={{ marginTop: '6px', fontSize: '0.78rem', color: '#059669', fontWeight: 700 }}>
              비누적 JSONB 실시간 집계
            </div>
          </div>

          {/* Card 3 */}
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
                marginBottom: '8px',
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                평균 연속 출석 스트릭
              </span>
              <Flame size={18} color="#ea580c" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f172a' }}>
              🔥 {kpi.avgStreak}
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748b', marginLeft: '4px' }}>
                일
              </span>
            </div>
            <div style={{ marginTop: '6px', fontSize: '0.78rem', color: '#ea580c', fontWeight: 700 }}>
              반 최장 연속 출석 기록: {kpi.maxStreak}일
            </div>
          </div>

          {/* Card 4 */}
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
                marginBottom: '8px',
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                리더보드 1위 & 최고 타수
              </span>
              <Trophy size={18} color="#d97706" />
            </div>
            <div
              style={{
                fontSize: '1.3rem',
                fontWeight: 900,
                color: '#0f172a',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              🥇 {kpi.topStudentName} ({kpi.topScore.toLocaleString()} pt)
            </div>
            <div style={{ marginTop: '6px', fontSize: '0.78rem', color: '#d97706', fontWeight: 700 }}>
              ⚡ 반 최고 코드타자: {kpi.maxCpm} CPM
            </div>
          </div>
        </div>

        {/* Search & Sort Controls + LMS Leaderboard Table */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1.5px solid #cbd5e1',
            overflow: 'hidden',
            boxShadow: '0 12px 28px -10px rgba(15, 23, 42, 0.06)',
          }}
        >
          {/* Filter Bar */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              background: '#f8fafc',
            }}
          >
            <div
              style={{
                position: 'relative',
                flex: '1 1 280px',
                maxWidth: '400px',
              }}
            >
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
                placeholder="학생 이름, @아이디, 이메일, 학번 검색..."
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              {(
                [
                  { id: 'score', label: '🏆 종합 점수순' },
                  { id: 'progress', label: '📈 완료 레벨순' },
                  { id: 'streak', label: '🔥 출석 스트릭순' },
                  { id: 'cpm', label: '⚡ 타자 속도(CPM)순' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSortBy(tab.id)}
                  style={{
                    padding: '7px 12px',
                    borderRadius: '9px',
                    border:
                      sortBy === tab.id
                        ? '1.5px solid #0891b2'
                        : '1px solid #cbd5e1',
                    background: sortBy === tab.id ? '#ecfeff' : '#ffffff',
                    color: sortBy === tab.id ? '#0e7490' : '#475569',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
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
                  <th style={{ padding: '12px 14px', width: '64px', textAlign: 'center' }}>
                    순위
                  </th>
                  <th style={{ padding: '12px 14px' }}>학생 정보</th>
                  <th style={{ padding: '12px 14px' }}>현재 학습 커리큘럼 & 위치</th>
                  <th style={{ padding: '12px 14px', minWidth: '180px' }}>
                    Python 기초 진도율 (113Lv)
                  </th>
                  <th style={{ padding: '12px 14px' }}>출석 스트릭</th>
                  <th style={{ padding: '12px 14px' }}>타수 / 종합 점수</th>
                  <th style={{ padding: '12px 14px', minWidth: '250px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <Sliders size={14} color="#0891b2" />
                      학습 레벨 지정 / 초기화
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoadingData ? (
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
                      학생 학습 데이터를 불러오는 중...
                    </td>
                  </tr>
                ) : filteredAndSortedStudents.length === 0 ? (
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
                      표시할 학생 데이터가 없습니다.
                    </td>
                  </tr>
                ) : (
                  filteredAndSortedStudents.map((s, idx) => {
                    const rank = idx + 1;
                    const pyClearedCount = (
                      s.cleared_levels?.['py-basic'] || []
                    ).length;
                    const pct = Math.min(
                      100,
                      Math.round((pyClearedCount / PYTHON_TOTAL_LEVELS) * 100)
                    );
                    const isCompleted =
                      pyClearedCount >= PYTHON_TOTAL_LEVELS ||
                      (s.completed_tracks || []).includes('py-basic');
                    const currLabel =
                      CURRICULUM_LABELS[s.active_curriculum_id] ||
                      '🌱 코딩 첫걸음';
                    const targetInputVal =
                      levelInputs[s.student_id] ?? s.current_level ?? 1;
                    const isUpdatingThis = updatingStudentId === s.student_id;

                    return (
                      <tr
                        key={s.student_id}
                        style={{
                          borderBottom: '1px solid #e2e8f0',
                          background: idx % 2 === 0 ? '#ffffff' : '#fcfdfe',
                        }}
                      >
                        {/* Rank */}
                        <td
                          style={{
                            padding: '13px 14px',
                            textAlign: 'center',
                            fontWeight: 900,
                            fontSize: '0.92rem',
                          }}
                        >
                          {rank === 1
                            ? '🥇 1'
                            : rank === 2
                            ? '🥈 2'
                            : rank === 3
                            ? '🥉 3'
                            : `#${rank}`}
                        </td>

                        {/* Student Info */}
                        <td style={{ padding: '13px 14px' }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            <UserAvatar
                              avatarUrl={s.avatar_url}
                              avatarPreset={s.avatar_preset}
                              size={36}
                              alt={s.display_name}
                            />
                            <div>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  fontWeight: 800,
                                  color: '#0f172a',
                                }}
                              >
                                <span>{s.display_name}</span>
                                {s.student_label && (
                                  <span
                                    style={{
                                      fontSize: '0.72rem',
                                      padding: '1px 7px',
                                      borderRadius: '999px',
                                      background: '#ecfdf5',
                                      border: '1px solid #6ee7b7',
                                      color: '#047857',
                                      fontWeight: 800,
                                    }}
                                  >
                                    {s.student_label}
                                  </span>
                                )}
                              </div>
                              <div
                                style={{
                                  fontSize: '0.75rem',
                                  color: '#64748b',
                                  marginTop: '2px',
                                }}
                              >
                                {s.username ? `@${s.username}` : '아이디 미설정'}{' '}
                                • {s.email || '-'}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Current Curriculum & Level */}
                        <td style={{ padding: '13px 14px' }}>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '4px',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                width: 'fit-content',
                                padding: '2px 8px',
                                borderRadius: '6px',
                                background: '#f1f5f9',
                                border: '1px solid #cbd5e1',
                                color: '#334155',
                                fontSize: '0.74rem',
                                fontWeight: 800,
                              }}
                            >
                              {currLabel}
                            </span>
                            {isCompleted ? (
                              <span
                                style={{
                                  fontSize: '0.8rem',
                                  fontWeight: 800,
                                  color: '#b45309',
                                }}
                              >
                                🏆 Python 기초 완주 완료
                              </span>
                            ) : (
                              <span
                                style={{
                                  fontSize: '0.8rem',
                                  fontWeight: 800,
                                  color: '#0891b2',
                                }}
                              >
                                📍 Python 기초 · Lv.{s.current_level || 1} 학습중
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Progress Bar */}
                        <td style={{ padding: '13px 14px' }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              fontSize: '0.76rem',
                              fontWeight: 800,
                              marginBottom: '5px',
                            }}
                          >
                            <span style={{ color: '#0f172a' }}>
                              {pyClearedCount} / {PYTHON_TOTAL_LEVELS} 레벨
                            </span>
                            <span style={{ color: '#0891b2' }}>{pct}%</span>
                          </div>
                          <div
                            style={{
                              width: '100%',
                              height: '8px',
                              borderRadius: '999px',
                              background: '#e2e8f0',
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              style={{
                                width: `${pct}%`,
                                height: '100%',
                                borderRadius: '999px',
                                background: isCompleted
                                  ? 'linear-gradient(90deg, #f59e0b, #10b981)'
                                  : 'linear-gradient(90deg, #06b6d4, #0284c7)',
                              }}
                            />
                          </div>
                        </td>

                        {/* Streak */}
                        <td style={{ padding: '13px 14px' }}>
                          <div
                            style={{
                              fontWeight: 800,
                              color: '#ea580c',
                              fontSize: '0.84rem',
                            }}
                          >
                            🔥 연속 {s.current_streak || 0}일
                          </div>
                          <div
                            style={{
                              fontSize: '0.74rem',
                              color: '#64748b',
                              marginTop: '2px',
                            }}
                          >
                            누적 {s.total_attendance_days || 0}일 (최장{' '}
                            {s.longest_streak || 0}일)
                          </div>
                        </td>

                        {/* Speed & Score */}
                        <td style={{ padding: '13px 14px' }}>
                          <div
                            style={{
                              fontWeight: 900,
                              color: '#0f172a',
                              fontSize: '0.88rem',
                            }}
                          >
                            {(s.activity_score || 0).toLocaleString()} pt
                          </div>
                          <div
                            style={{
                              fontSize: '0.74rem',
                              color: '#0284c7',
                              fontWeight: 700,
                              marginTop: '2px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '3px',
                            }}
                          >
                            <Keyboard size={12} />
                            <span>{s.best_typing_cpm || 0} CPM</span>
                          </div>
                        </td>

                        {/* Instructor Level Control */}
                        <td style={{ padding: '13px 14px' }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              flexWrap: 'wrap',
                            }}
                          >
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
                                    [s.student_id]: Number(e.target.value) || 1,
                                  }))
                                }
                                style={{
                                  width: '48px',
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
                              onClick={() =>
                                void handleApplyStudentLevel(s, targetInputVal)
                              }
                              style={{
                                padding: '6px 10px',
                                borderRadius: '8px',
                                border: '1px solid #0891b2',
                                background: '#0891b2',
                                color: '#ffffff',
                                fontSize: '0.76rem',
                                fontWeight: 800,
                                cursor: isUpdatingThis ? 'wait' : 'pointer',
                              }}
                              title="지정한 레벨부터 학습하도록 설정합니다 (이전 레벨 자동 완료)"
                            >
                              레벨 지정
                            </button>

                            <button
                              type="button"
                              disabled={isUpdatingThis}
                              onClick={() => void handleApplyStudentLevel(s, 1)}
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
                              title="해당 학생의 진도를 Lv.1 처음부터 다시 학습하도록 초기화합니다"
                            >
                              <RotateCcw size={12} />
                              <span>초기화</span>
                            </button>

                            {selectedClassroomId !== 'all' && (
                              <button
                                type="button"
                                onClick={() =>
                                  void handleRemoveFromClassroom(
                                    s.student_id,
                                    s.display_name
                                  )
                                }
                                style={{
                                  padding: '6px 8px',
                                  borderRadius: '8px',
                                  border: '1px solid #cbd5e1',
                                  background: '#f8fafc',
                                  color: '#64748b',
                                  fontSize: '0.74rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                }}
                                title="학급 명단에서 제외"
                              >
                                제외
                              </button>
                            )}
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
      </div>
    </main>
  );
}
