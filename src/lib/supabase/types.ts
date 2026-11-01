export interface UserProfile {
  id: string;
  display_name: string;
  avatar_emoji: string;
  avatar_url: string | null;
  primary_language: string;
  best_cpm: number;
  avg_accuracy: number;
  cleared_levels_count: number;
  solved_problems_count: number;
  created_at: string;
  updated_at: string;
}

export interface UserLevelProgressRow {
  user_id: string;
  track_id: string;
  level_number: number;
  unlocked_step: number;
  total_steps: number;
  is_cleared: boolean;
  hearts: number;
  best_cpm: number;
  best_accuracy: number;
  updated_at: string;
}

export interface UserProblemSolveRow {
  user_id: string;
  problem_id: number;
  language: string;
  solved_at: string;
}
