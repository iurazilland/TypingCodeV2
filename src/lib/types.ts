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

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  exitCode: number;
  executionTimeMs?: number;
  error?: string;
}
