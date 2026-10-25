'use client';

import React from 'react';

interface VirtualKeyboardProps {
  nextChar: string;
}

interface KeyConfig {
  key: string;
  label?: string;
  flex?: number;
  isSpacer?: boolean;
}

const SHIFT_MAP: Record<string, string> = {
  '~': '`', '!': '1', '@': '2', '#': '3', '$': '4', '%': '5',
  '^': '6', '&': '7', '*': '8', '(': '9', ')': '0', '_': '-',
  '+': '=', '{': '[', '}': ']', '|': '\\', ':': ';', '"': "'",
  '<': ',', '>': '.', '?': '/',
};

const KEYBOARD_ROWS: KeyConfig[][] = [
  // Row 0: 13 keys of flex 1 + Backspace flex 1.8 = 14.8
  [
    { key: '`' }, { key: '1' }, { key: '2' }, { key: '3' }, { key: '4' },
    { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' },
    { key: '0' }, { key: '-' }, { key: '=' },
    { key: 'Backspace', label: 'Backspace', flex: 1.8 },
  ],
  // Row 1: Tab flex 1.4 + 12 keys flex 1 + \ flex 1.4 = 14.8
  [
    { key: 'Tab', label: 'Tab', flex: 1.4 },
    { key: 'q' }, { key: 'w' }, { key: 'e' }, { key: 'r' }, { key: 't' },
    { key: 'y' }, { key: 'u' }, { key: 'i' }, { key: 'o' }, { key: 'p' },
    { key: '[' }, { key: ']' },
    { key: '\\', flex: 1.4 },
  ],
  // Row 2: Caps flex 1.7 + 11 keys flex 1 + Enter flex 2.1 = 14.8
  [
    { key: 'Caps', label: 'Caps', flex: 1.7 },
    { key: 'a' }, { key: 's' }, { key: 'd' }, { key: 'f' }, { key: 'g' },
    { key: 'h' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: ';' },
    { key: "'" },
    { key: 'Enter', label: 'Enter ↵', flex: 2.1 },
  ],
  // Row 3: Shift flex 2.1 + 10 keys flex 1 + Shift flex 2.7 = 14.8
  [
    { key: 'Shift', label: 'Shift', flex: 2.1 },
    { key: 'z' }, { key: 'x' }, { key: 'c' }, { key: 'v' }, { key: 'b' },
    { key: 'n' }, { key: 'm' }, { key: ',' }, { key: '.' }, { key: '/' },
    { key: 'Shift', label: 'Shift', flex: 2.7 },
  ],
  // Row 4: Spacer 4.4 + Space flex 6.0 + Spacer 4.4 = 14.8
  [
    { key: 'spacer-1', isSpacer: true, flex: 4.4 },
    { key: 'Space', label: 'Space', flex: 6.0 },
    { key: 'spacer-2', isSpacer: true, flex: 4.4 },
  ],
];

export default function VirtualKeyboard({ nextChar }: VirtualKeyboardProps) {
  const normalizedNext = nextChar.toLowerCase();
  const isShiftNeeded = Boolean(
    SHIFT_MAP[nextChar] || (nextChar.length === 1 && nextChar >= 'A' && nextChar <= 'Z')
  );
  const baseCharNeeded = SHIFT_MAP[nextChar] || (isShiftNeeded ? normalizedNext : null);

  return (
    <div
      style={{
        width: '100%',
        padding: 'clamp(8px, 1.2vh, 12px) clamp(10px, 1.2vw, 16px)',
        background: 'rgba(15, 23, 42, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '14px',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(4px, 0.5vh, 6px)',
        userSelect: 'none',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.5vh, 6px)', width: '100%' }}>
        {KEYBOARD_ROWS.map((row, rIdx) => (
          <div key={rIdx} style={{ display: 'flex', gap: 'clamp(4px, 0.4vw, 6px)', width: '100%' }}>
            {row.map((item, kIdx) => {
              if (item.isSpacer) {
                return (
                  <div
                    key={`spacer-${kIdx}`}
                    style={{
                      flex: item.flex || 1,
                      minWidth: 0,
                    }}
                  />
                );
              }

              const key = item.key;
              const isDirectMatch =
                key.toLowerCase() === normalizedNext ||
                (key === 'Space' && (nextChar === ' ' || normalizedNext === 'space')) ||
                (key === 'Enter' && (nextChar === '\n' || normalizedNext === 'enter'));

              const isBaseMatch = Boolean(baseCharNeeded && key.toLowerCase() === baseCharNeeded.toLowerCase());
              const isShiftMatch = Boolean(isShiftNeeded && key === 'Shift');
              const isMatch = isDirectMatch || isBaseMatch || isShiftMatch;

              return (
                <div
                  key={`${key}-${kIdx}`}
                  style={{
                    flex: item.flex || 1,
                    minWidth: 0,
                    height: 'clamp(32px, 4.4vh, 44px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '7px',
                    fontSize: 'clamp(0.74rem, 1vw, 0.90rem)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: isMatch ? 800 : 600,
                    background: isMatch
                      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                      : 'rgba(30, 41, 59, 0.65)',
                    color: isMatch ? '#ffffff' : '#94a3b8',
                    border: isMatch
                      ? '1px solid #34d399'
                      : '1px solid rgba(255, 255, 255, 0.06)',
                    boxShadow: isMatch
                      ? '0 0 18px rgba(16, 185, 129, 0.7)'
                      : 'none',
                    transform: isMatch ? 'scale(1.03)' : 'scale(1)',
                    transition: 'all 0.12s ease',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label || key}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
