'use client';

import React from 'react';

interface VirtualKeyboardProps {
  nextChar: string;
}

const KEYBOARD_ROWS = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
  ['Space'],
];

export default function VirtualKeyboard({ nextChar }: VirtualKeyboardProps) {
  const normalizedNext = nextChar.toLowerCase();

  return (
    <div style={{
      padding: '12px',
      background: 'rgba(15, 23, 42, 0.65)',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      borderRadius: '16px',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: 'center',
      userSelect: 'none',
    }}>
      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, letterSpacing: '1px' }}>
        NEXT KEY GUIDE: <span style={{ color: '#10b981', fontSize: '0.85rem' }}>{nextChar === ' ' ? 'Space' : nextChar || 'End'}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%', maxWidth: '680px' }}>
        {KEYBOARD_ROWS.map((row, rIdx) => (
          <div key={rIdx} style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
            {row.map((key) => {
              const isMatch = (key.toLowerCase() === normalizedNext) || 
                              (key === 'Space' && nextChar === ' ') ||
                              (key === 'Enter' && nextChar === '\n');

              const isWide = key === 'Backspace' || key === 'Tab' || key === 'Enter' || key === 'Shift' || key === 'Caps';
              const isSpace = key === 'Space';

              return (
                <div
                  key={key}
                  style={{
                    padding: isSpace ? '6px 120px' : isWide ? '6px 14px' : '6px 10px',
                    minWidth: isSpace ? '240px' : isWide ? '55px' : '30px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: isMatch ? 700 : 500,
                    background: isMatch 
                      ? '#10b981' 
                      : 'rgba(30, 41, 59, 0.6)',
                    color: isMatch ? '#ffffff' : '#94a3b8',
                    border: isMatch 
                      ? '1px solid #34d399' 
                      : '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: isMatch ? '0 0 15px rgba(16, 185, 129, 0.5)' : 'none',
                    transform: isMatch ? 'scale(1.08)' : 'scale(1)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {key}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
