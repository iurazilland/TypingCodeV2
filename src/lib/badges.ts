import type { UserProfile } from '@/lib/supabase/types';

export interface BadgeStatus {
  id: string;
  icon: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  color: string;
  unlocked: boolean;
  progressText: string;
}

export function evaluateUserBadges(
  profile: Partial<UserProfile> | null | undefined
): BadgeStatus[] {
  const cleared = profile?.cleared_levels_count || 0;
  const solved = profile?.solved_problems_count || 0;
  const longestStreak = Math.max(
    profile?.longest_streak || 0,
    profile?.current_streak || 0
  );
  const totalDays = profile?.total_attendance_days || 0;
  const speedCpm = profile?.best_typing_cpm || 0;

  return [
    {
      id: 'first_clear',
      icon: '🐣',
      titleKo: '첫 코드 발걸음',
      titleEn: 'First Step',
      descKo: '첫 번째 학습 레벨 클리어 달성',
      descEn: 'Clear your very first curriculum level',
      color: '#059669',
      unlocked: cleared >= 1,
      progressText: `${Math.min(cleared, 1)} / 1`,
    },
    {
      id: 'streak_3',
      icon: '🔥',
      titleKo: '작심삼일 돌파',
      titleEn: '3-Day Spark',
      descKo: '3일 연속 출석 달성',
      descEn: 'Attend 3 consecutive days',
      color: '#ea580c',
      unlocked: longestStreak >= 3,
      progressText: `${Math.min(longestStreak, 3)} / 3d`,
    },
    {
      id: 'streak_7',
      icon: '⚡',
      titleKo: '일주일 개근러',
      titleEn: '7-Day Streak',
      descKo: '7일 연속 출석 달성',
      descEn: 'Attend 7 consecutive days',
      color: '#d97706',
      unlocked: longestStreak >= 7,
      progressText: `${Math.min(longestStreak, 7)} / 7d`,
    },
    {
      id: 'streak_30',
      icon: '🌙',
      titleKo: '30일 철인 코더',
      titleEn: '30-Day Iron Coder',
      descKo: '30일 연속 출석 또는 누적 30일 출석 달성',
      descEn: 'Reach a 30-day streak or 30 total attendance days',
      color: '#7c3aed',
      unlocked: longestStreak >= 30 || totalDays >= 30,
      progressText: `${Math.min(Math.max(longestStreak, totalDays), 30)} / 30d`,
    },
    {
      id: 'level_15',
      icon: '📘',
      titleKo: '기초 문법 정복자',
      titleEn: 'Syntax Explorer',
      descKo: '누적 15개 학습 레벨 클리어',
      descEn: 'Clear 15 curriculum levels',
      color: '#0284c7',
      unlocked: cleared >= 15,
      progressText: `${Math.min(cleared, 15)} / 15`,
    },
    {
      id: 'level_50',
      icon: '💎',
      titleKo: '다이아몬드 러너',
      titleEn: 'Diamond Learner',
      descKo: '누적 50개 학습 레벨 클리어',
      descEn: 'Clear 50 curriculum levels',
      color: '#0891b2',
      unlocked: cleared >= 50,
      progressText: `${Math.min(cleared, 50)} / 50`,
    },
    {
      id: 'level_87',
      icon: '👑',
      titleKo: '트랙 그랜드마스터',
      titleEn: 'Track Grandmaster',
      descKo: '누적 87개 학습 레벨 완주 달성',
      descEn: 'Clear 87 curriculum levels',
      color: '#d97706',
      unlocked: cleared >= 87,
      progressText: `${Math.min(cleared, 87)} / 87`,
    },
    {
      id: 'solver_5',
      icon: '🧩',
      titleKo: '문제 해결사',
      titleEn: 'Problem Solver',
      descKo: '코딩 문제풀이 5문제 해결',
      descEn: 'Solve 5 coding problems',
      color: '#059669',
      unlocked: solved >= 5,
      progressText: `${Math.min(solved, 5)} / 5`,
    },
    {
      id: 'solver_15',
      icon: '🧠',
      titleKo: '알고리즘 사냥꾼',
      titleEn: 'Algorithm Hunter',
      descKo: '코딩 문제풀이 15문제 해결',
      descEn: 'Solve 15 coding problems',
      color: '#db2777',
      unlocked: solved >= 15,
      progressText: `${Math.min(solved, 15)} / 15`,
    },
    {
      id: 'speed_350',
      icon: '⌨️',
      titleKo: '코드타자 달인',
      titleEn: 'Code Typer',
      descKo: '코드타자 최고 타수 350 CPM 돌파',
      descEn: 'Reach 350+ CPM in Code Typing',
      color: '#7c3aed',
      unlocked: speedCpm >= 350,
      progressText: `${Math.min(speedCpm, 350)} / 350`,
    },
  ];
}

export function getRepresentativeBadge(
  profile: Partial<UserProfile> | null | undefined,
  isKo: boolean
): { icon: string; title: string; label: string; color: string } {
  const badges = evaluateUserBadges(profile);
  const priorityOrder = [
    'level_87',
    'streak_30',
    'level_50',
    'solver_15',
    'streak_7',
    'level_15',
    'speed_350',
    'solver_5',
    'streak_3',
    'first_clear',
  ];

  for (const id of priorityOrder) {
    const found = badges.find((b) => b.id === id && b.unlocked);
    if (found) {
      const title = isKo ? found.titleKo : found.titleEn;
      return {
        icon: found.icon,
        title,
        label: `${found.icon} ${title}`,
        color: found.color,
      };
    }
  }

  const fallbackTitle = isKo ? '루키 코더' : 'Rookie Coder';
  return {
    icon: '🌱',
    title: fallbackTitle,
    label: `🌱 ${fallbackTitle}`,
    color: '#059669',
  };
}

