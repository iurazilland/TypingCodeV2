'use client';

import React from 'react';
import { Play, RotateCcw, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { ExecutionResult } from '@/lib/types';

interface TerminalProps {
  languageName: string;
  runtimeBadge: string;
  result: ExecutionResult | null;
  isRunning: boolean;
  onExecute: () => void;
  onClear: () => void;
}

export default function Terminal({
  languageName,
  runtimeBadge,
  result,
  isRunning,
  onExecute,
  onClear,
}: TerminalProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: '280px',
      background: 'rgba(15, 23, 42, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
    }}>
      {/* Terminal Title Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 18px',
        background: 'rgba(30, 41, 59, 0.5)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
          </div>
          <span style={{
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            color: '#94a3b8',
            marginLeft: '8px',
          }}>
            {languageName.toUpperCase()} OUTPUT
          </span>
          <span style={{
            fontSize: '0.68rem',
            padding: '2px 8px',
            borderRadius: '4px',
            background: 'rgba(16, 185, 129, 0.12)',
            color: '#10b981',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            fontFamily: 'var(--font-mono)',
          }}>
            {runtimeBadge}
          </span>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {result?.executionTimeMs !== undefined && (
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem',
              color: '#64748b',
              fontFamily: 'var(--font-mono)',
            }}>
              <Clock size={12} />
              {result.executionTimeMs}ms
            </span>
          )}

          <button
            onClick={onClear}
            title="출력 비우기"
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#94a3b8',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'background 0.2s',
            }}
          >
            <RotateCcw size={13} />
            초기화
          </button>

          <button
            onClick={onExecute}
            disabled={isRunning}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              background: isRunning 
                ? 'rgba(16, 185, 129, 0.4)' 
                : '#10b981',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)',
              cursor: isRunning ? 'not-allowed' : 'pointer',
            }}
          >
            <Play size={13} fill="#fff" />
            {isRunning ? '실행 중...' : '코드 실행'}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div style={{
        flex: 1,
        padding: '16px 20px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        overflowY: 'auto',
        color: '#e2e8f0',
        minHeight: '180px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
      }}>
        {isRunning && (
          <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⏳</span>
            <span>샌드박스 런타임에서 컴파일 및 실행 중입니다...</span>
          </div>
        )}

        {!isRunning && !result && (
          <div style={{ color: '#475569', fontStyle: 'italic' }}>
            코드를 타이핑 완료하거나 [코드 실행] 버튼을 누르면 실제 실행 결과가 여기에 출력됩니다.
          </div>
        )}

        {!isRunning && result && (
          <>
            {result.stdout && (
              <div style={{ color: '#38bdf8' }}>{result.stdout}</div>
            )}
            {result.stderr && (
              <div style={{ color: '#fb7185', marginTop: result.stdout ? '8px' : 0 }}>
                {result.stderr}
              </div>
            )}
            {result.exitCode === 0 && !result.stderr && (
              <div style={{
                marginTop: '12px',
                paddingTop: '8px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                color: '#10b981',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <CheckCircle2 size={13} />
                프로세스 정상 종료 (Exit code: 0)
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
