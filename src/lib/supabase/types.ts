export type SectionDifficultyRating = 'easy' | 'just_right' | 'hard';

export type UserRole = 'student' | 'instructor' | 'org_admin' | 'super_admin';

export type ActiveCurriculumType = 'roadmap' | 'language';

export interface UserProfile {
  id: string;
  email: string | null;
  username: string | null;
  display_name: string;
  role: UserRole;
  avatar_preset: string;
  avatar_url: string | null;
  primary_language: string;
  active_curriculum_type: ActiveCurriculumType;
  active_curriculum_id: string;
  current_track_id: string;
  current_level: number;
  cleared_levels: Record<string, number[]>;
  completed_tracks: string[];
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
  progress_reset_at: string | null;
  created_at: string;
  updated_at: string;
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

// -----------------------------------------------------------------------------
// B2B · B2G Instructor LMS Types
// -----------------------------------------------------------------------------

export type OrganizationType = 'school' | 'academy' | 'company' | 'government';

export interface OrganizationRow {
  id: string;
  name: string;
  org_type: OrganizationType;
  owner_id: string;
  max_seats: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ClassroomRow {
  id: string;
  org_id: string | null;
  instructor_id: string;
  name: string;
  description: string | null;
  invite_code: string;
  assigned_tracks: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ClassroomMemberRow {
  classroom_id: string;
  student_id: string;
  student_label: string | null;
  joined_at: string;
}

export interface ClassroomStudentProgressRow {
  student_id: string;
  student_label: string | null;
  joined_at: string;
  username: string | null;
  email: string | null;
  display_name: string;
  avatar_preset: string;
  avatar_url: string | null;
  active_curriculum_type: ActiveCurriculumType;
  active_curriculum_id: string;
  current_track_id: string;
  current_level: number;
  cleared_levels: Record<string, number[]>;
  completed_tracks: string[];
  cleared_levels_count: number;
  solved_problems_count: number;
  current_streak: number;
  longest_streak: number;
  total_attendance_days: number;
  last_attended_date: string | null;
  best_typing_cpm: number;
  best_typing_accuracy: number;
  activity_score: number;
  progress_reset_at: string | null;
}
