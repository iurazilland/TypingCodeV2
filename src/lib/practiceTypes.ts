import { SupportedLanguage } from './types';

// ============================================================================
// MakeCode & Duolingo-style Practice Learning Types
// ============================================================================

export type BlockCategory = 
  | 'keyword'   // print, if, for, while, def
  | 'function'  // input, range, len, sum
  | 'string'    // "text", 'text'
  | 'number'    // 10, 42, 3.14
  | 'operator'  // =, +, -, *, /
  | 'variable'  // name, level, score
  | 'syntax';   // (, ), ,, :, f""

export interface BlockPiece {
  id: string;
  label: string;
  codeSnippet: string;
  category: BlockCategory;
}

export type ChallengeKind = 'fill_blank' | 'fix_bug' | 'one_line' | 'standard';

export interface TestCase {
  id?: string | number;
  input?: string; // Standard input (stdin) for interactive executions
  expectedOutput: string; // Expected terminal stdout
  expectedVariables?: Record<string, any>; // Expected variable state in memory
  description_ko?: string;
  description_en?: string;
  isHidden?: boolean; // Hidden test case flag for grading mode
}

export interface PracticeQuestion {
  id: number;
  step: number; // 1 ~ 10
  type?: 'block' | 'typing'; // 'block' for steps 1-5, 'typing' for steps 6-10
  kind?: ChallengeKind; // 'fill_blank' | 'fix_bug' | 'one_line' | 'standard'
  title: string;
  title_en?: string;
  prompt_ko: string;
  prompt_en?: string;
  templateCode?: string; // Code template shown in background guide layer
  targetCode: string; // Canonical / reference answer code
  blankToken?: string; // Specific token/substring to render as zero-displacement underline slot
  expectedOutput: string; // Primary ground truth expected terminal output
  expectedVariables?: Record<string, any>; // Expected runtime memory variables (e.g. { x: 10, total: 55 })
  testCases?: TestCase[]; // Test cases with inputs, expected outputs, and variable assertions
  hint_ko: string;
  hint_en?: string;
  starterCode?: string;
  availableBlocks?: BlockPiece[]; // Legacy block pieces
}

export interface PracticeRound {
  id: string;
  language: SupportedLanguage;
  trackId: string;
  moduleId: string;
  roundNumber: number;
  title_ko: string;
  title_en: string;
  description_ko: string;
  totalQuestions: number;
  questions: PracticeQuestion[];
}

export interface PracticeSessionState {
  hearts: number;         // Max 5, decrements on failure, triggers game over at 0
  maxHearts: number;      // 5
  currentStep: number;    // 1 ~ 10
  mode: 'typing' | 'block';
  isComplete: boolean;
  isGameOver: boolean;
  streak: number;
}
