export type SectionDifficultyRating = 'easy' | 'just_right' | 'hard';

export interface UserProfile {
  id: string;
  username: string | null;
  display_name: string;
  avatar_preset: string;
  avatar_url: string | null;
  primary_language: string;
  cleared_levels_count: number;
  solved_problems_count: number;
  current_streak: number;
  longest_streak: number;
  total_attendance_days: number;
  last_attended_date: string | null;
  activity_score: number;
  best_typing_cpm: number;
  best_typing_accuracy: number;
  best_typing_language?: string;
  created_at: string;
  updated_at: string;
}

export interface UserClearedLevelRow {
  user_id: string;
  track_id: string;
  level_number: number;
  cleared_at: string;
}

export interface UserProblemSolveRow {
  user_id: string;
  problem_id: number;
  language: string;
  submitted_code?: string | null;
  execution_ms?: number | null;
  solutions_by_lang?: Record<string, string>;
  solved_at: string;
}

export interface UserAttendanceRow {
  user_id: string;
  attended_date: string;
  created_at: string;
}

export interface UserSpeedRecordRow {
  user_id: string;
  snippet_id: string;
  language: string;
  best_cpm: number;
  best_accuracy: number;
  updated_at: string;
}

export interface SpeedLanguageLeaderboardRow extends UserProfile {
  language: string;
  best_cpm: number;
  best_accuracy: number;
}

export interface UserSavedSnippetRow {
  id: string;
  user_id: string;
  title: string;
  language: string;
  code: string;
  stdin: string;
  created_at: string;
  updated_at: string;
}

export interface SectionFeedbackRow {
  user_id: string;
  track_id: string;
  section_number: number;
  rating: number;
  difficulty: SectionDifficultyRating;
  tags: string[];
  comment: string | null;
  created_at: string;
  updated_at: string;
}

export interface AdminSectionFeedbackRow extends SectionFeedbackRow {
  username: string | null;
  display_name: string | null;
  avatar_preset: string | null;
  avatar_url: string | null;
}
