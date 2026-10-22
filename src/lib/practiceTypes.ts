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

export interface PracticeQuestion {
  id: number;
  step: number; // 1 ~ 10
  title: string;
  prompt_ko: string;
  prompt_en?: string;
  targetCode: string;
  expectedOutput: string;
  hint_ko: string;
  hint_en?: string;
  starterCode?: string;
  availableBlocks: BlockPiece[];
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
