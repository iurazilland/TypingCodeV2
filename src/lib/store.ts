import { create } from 'zustand';
import { LevelData, CodeStep } from './types';

interface TypingStoreState {
  currentLevel: LevelData | null;
  currentStepIndex: number;
  typedText: string;
  errorCount: number;
  totalKeystrokes: number;
  startTime: number | null;
  wpm: number;
  accuracy: number;
  isStepFinished: boolean;
  isLevelFinished: boolean;
  insightLocked: boolean; // Insight-First lock

  // Methods
  initLevel: (level: LevelData) => void;
  setTypedText: (text: string) => void;
  nextStep: () => void;
  unlockInsight: () => void;
  resetStep: () => void;
}

export const useTypingStore = create<TypingStoreState>((set, get) => ({
  currentLevel: null,
  currentStepIndex: 0,
  typedText: '',
  errorCount: 0,
  totalKeystrokes: 0,
  startTime: null,
  wpm: 0,
  accuracy: 100,
  isStepFinished: false,
  isLevelFinished: false,
  insightLocked: true,

  initLevel: (level: LevelData) => {
    set({
      currentLevel: level,
      currentStepIndex: 0,
      typedText: '',
      errorCount: 0,
      totalKeystrokes: 0,
      startTime: null,
      wpm: 0,
      accuracy: 100,
      isStepFinished: false,
      isLevelFinished: false,
      insightLocked: true, // Insight card starts active
    });
  },

  unlockInsight: () => {
    set({ insightLocked: false, startTime: performance.now() });
  },

  setTypedText: (text: string) => {
    const state = get();
    if (!state.currentLevel) return;

    const currentStep: CodeStep = state.currentLevel.steps[state.currentStepIndex];
    if (!currentStep) return;

    const targetCode = currentStep.code;
    const now = performance.now();
    const startTime = state.startTime || now;

    let errors = state.errorCount;
    // Check if newly typed character is an error
    if (text.length > state.typedText.length) {
      const lastCharIndex = text.length - 1;
      if (text[lastCharIndex] !== targetCode[lastCharIndex]) {
        errors += 1;
      }
    }

    const totalKeystrokes = state.totalKeystrokes + 1;
    const accuracy = totalKeystrokes > 0 
      ? Math.max(0, Math.min(100, Math.round(((totalKeystrokes - errors) / totalKeystrokes) * 100)))
      : 100;

    const minutesElapsed = Math.max(0.01, (now - startTime) / 60000);
    const wordsTyped = text.length / 5;
    const wpm = Math.round(wordsTyped / minutesElapsed);

    const isStepFinished = text === targetCode;
    const isLevelFinished = isStepFinished && state.currentStepIndex === state.currentLevel.steps.length - 1;

    set({
      typedText: text,
      errorCount: errors,
      totalKeystrokes,
      startTime,
      accuracy,
      wpm,
      isStepFinished,
      isLevelFinished,
    });
  },

  nextStep: () => {
    const state = get();
    if (!state.currentLevel) return;

    if (state.currentStepIndex < state.currentLevel.steps.length - 1) {
      set({
        currentStepIndex: state.currentStepIndex + 1,
        typedText: '',
        isStepFinished: false,
        insightLocked: true, // Show insight for next step
      });
    }
  },

  resetStep: () => {
    set({
      typedText: '',
      isStepFinished: false,
      startTime: performance.now(),
    });
  },
}));
