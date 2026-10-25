export type SupportedLanguage = 
  | 'python' 
  | 'c' 
  | 'web' 
  | 'javascript' 
  | 'java' 
  | 'sql' 
  | 'go' 
  | 'rust' 
  | 'cpp' 
  | 'csharp' 
  | 'swift'
  | 'linux'
  | 'vb';

export interface CodeStep {
  step: number;
  guide_ko: string;
  guide_en: string;
  code: string;
  tip?: string;
  visual_hint?: string;
}

export interface LevelData {
  id: string;
  levelNumber: number;
  language: SupportedLanguage;
  title_ko: string;
  title_en: string;
  description_ko: string;
  description_en: string;
  levelType: 'practice' | 'challenge';
  category: string;
  steps: CodeStep[];
}

export interface LanguageMeta {
  id: SupportedLanguage;
  name: string;
  iconName: string;
  badge: string;
  tagline: string;
  description: string;
  totalLevels: number;
  runtimeType: 'piston-python' | 'piston-gcc' | 'browser-iframe';
  accentColor: string;
  gradient: string;
}

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  exitCode: number;
  executionTimeMs?: number;
  error?: string;
}
