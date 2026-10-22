'use client';

import React, { useEffect } from 'react';
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';

interface InsightCardProps {
  guide: string;
  tip?: string;
  isLocked: boolean;
  onDismiss: () => void;
}

export default function InsightCard({ guide, tip, isLocked, onDismiss }: InsightCardProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLocked && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLocked, onDismiss]);

  if (!isLocked) {
    // Docked minimal state at the top of the editor
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        background: 'rgba(16, 185, 129, 0.08)',
        border: '1px solid rgba(16, 185, 129, 0.25)',
        borderRadius: '12px',
        marginBottom: '16px',
        animation: 'fadeIn 0.3s ease-out',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Lightbulb size={18} color="#10b981" />
          <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 500 }}>
            {guide}
          </span>
        </div>
        {tip && (
          <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>
            💡 {tip}
          </span>
        )}
      </div>
    );
  }

  // Floating Focused Modal state (Insight-First)
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10, 14, 23, 0.82)',
      backdropFilter: 'blur(12px)',
      padding: '20px',
    }}>
      <div style={{
        maxWidth: '560px',
        width: '100%',
        background: '#131e33',
        border: '1px solid rgba(16, 185, 129, 0.4)',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.2)',
        textAlign: 'center',
      }}>
        {/* Glowing Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          borderRadius: '20px',
          background: 'rgba(16, 185, 129, 0.15)',
          color: '#10b981',
          fontSize: '0.8rem',
          fontWeight: 700,
          border: '1px solid rgba(16, 185, 129, 0.3)',
          marginBottom: '16px',
        }}>
          <Sparkles size={14} />
          <span>INSIGHT FIRST GUIDE</span>
        </div>

        <h3 style={{
          fontSize: '1.35rem',
          fontWeight: 700,
          color: '#f8fafc',
          lineHeight: 1.5,
          marginBottom: '16px',
        }}>
          {guide}
        </h3>

        {tip && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '14px 18px',
            color: '#94a3b8',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            marginBottom: '24px',
            textAlign: 'left',
          }}>
            <span style={{ color: '#10b981', fontWeight: 600 }}>핵심 포인트: </span>
            {tip}
          </div>
        )}

        {/* Dismiss Button */}
        <button
          onClick={onDismiss}
          style={{
            padding: '12px 28px',
            borderRadius: '12px',
            background: '#10b981',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.95rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
            transition: 'transform 0.2s',
          }}
        >
          <span>이해했습니다! 타이핑 시작</span>
          <ArrowRight size={16} />
        </button>

        <div style={{ marginTop: '12px', fontSize: '0.78rem', color: '#64748b' }}>
          단축키: <kbd style={{ padding: '2px 6px', background: '#334155', borderRadius: '4px', color: '#cbd5e1' }}>Space</kbd> 또는 <kbd style={{ padding: '2px 6px', background: '#334155', borderRadius: '4px', color: '#cbd5e1' }}>Enter</kbd>
        </div>
      </div>
    </div>
  );
}
