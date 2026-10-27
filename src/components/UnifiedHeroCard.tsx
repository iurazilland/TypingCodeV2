'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useLanguage, CodeLineItem } from '@/lib/LanguageContext';
import LanguageIcon from '@/components/LanguageIcon';

interface Token {
  text: string;
  color: string;
  fontStyle?: string;
}

// Grapheme-cluster safe splitter for Unicode emojis with variation selectors (e.g. ⌨️)
const splitGraphemes = (str: string): string[] => {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter('ko', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return Array.from(str);
};

// Pure tokenizer: maintains identical font family, weight, and layout without bold shifts.
// Uses official VS Code Dark+ / Prettier theme palette:
// - String literals: #ce9178 (warm peach/orange)
// - Functions (print): #dcdcaa (soft yellow)
// - Keywords (for, in): #c586c0 (purple/magenta)
// - Variables/parameters (count): #9cdcfe (light blue)
// - Numbers (3, 2, 1): #b5cea8 (sage green)
// - Comments: #6a9955 (VS Code green italic)
// - Delimiters/Punctuation: #d4d4d4
function tokenizeLine(lineText: string): Token[] {
  if (!lineText) return [];

  // Comment line: official VS Code comment green (#6a9955)
  if (lineText.startsWith('#')) {
    return [{ text: lineText, color: '#6a9955', fontStyle: 'italic' }];
  }

  // Loop header: for count in [3, 2, 1]:
  if (lineText.startsWith('for ')) {
    return [
      { text: 'for ', color: '#c586c0' },
      { text: 'count ', color: '#9cdcfe' },
      { text: 'in ', color: '#c586c0' },
      { text: '[', color: '#d4d4d4' },
      { text: '3', color: '#b5cea8' },
      { text: ', ', color: '#d4d4d4' },
      { text: '2', color: '#b5cea8' },
      { text: ', ', color: '#d4d4d4' },
      { text: '1', color: '#b5cea8' },
      { text: ']:', color: '#d4d4d4' },
    ];
  }

  // Indented loop body with f-string: print(f"...{count}...")
  if (lineText.startsWith('    print(') && lineText.endsWith(')')) {
    if (lineText.includes('{count}')) {
      const inside = lineText.slice(10, -1); // after '    print(' and before ')'
      const [prefix, suffix] = inside.split('{count}');
      return [
        { text: '    ', color: '#d4d4d4' },
        { text: 'print', color: '#dcdcaa' },
        { text: '(', color: '#d4d4d4' },
        { text: prefix, color: '#ce9178' },
        { text: '{', color: '#569cd6' },
        { text: 'count', color: '#9cdcfe' },
        { text: '}', color: '#569cd6' },
        { text: suffix, color: '#ce9178' },
        { text: ')', color: '#d4d4d4' },
      ];
    }
  }

  // Standard print: print("...")
  // VS Code Dark+: function is #dcdcaa, string literal is #ce9178
  if (lineText.startsWith('print(') && lineText.endsWith(')')) {
    const inner = lineText.slice(6, -1);
    return [
      { text: 'print', color: '#dcdcaa' },
      { text: '(', color: '#d4d4d4' },
      { text: inner, color: '#ce9178' },
      { text: ')', color: '#d4d4d4' },
    ];
  }

  return [{ text: lineText, color: '#d4d4d4' }];
}

export default function UnifiedHeroCard() {
  const { language, t, scriptLines } = useLanguage();

  const [lineIdx, setLineIdx] = useState<number>(0);
  const [charIdx, setCharIdx] = useState<number>(0);
  const [terminalOutputs, setTerminalOutputs] = useState<string[]>([]);
  const [isCompletedAll, setIsCompletedAll] = useState<boolean>(false);

  const terminalScrollRef = useRef<HTMLDivElement>(null);

  // When language switches, reset the playground to line 0 in the new language
  useEffect(() => {
    setLineIdx(0);
    setCharIdx(0);
    setTerminalOutputs([]);
    setIsCompletedAll(false);
  }, [language]);

  // Auto-scroll terminal output to bottom
  useEffect(() => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [terminalOutputs]);

  // Main typing & execution state machine
  useEffect(() => {
    if (isCompletedAll) return;

    if (lineIdx >= scriptLines.length) {
      setIsCompletedAll(true);
      return;
    }

    const currentLine = scriptLines[lineIdx];

    // Blank line: brief pause then advance
    if (currentLine.isBlank) {
      const timer = setTimeout(() => {
        setLineIdx((prev) => prev + 1);
        setCharIdx(0);
      }, 120);
      return () => clearTimeout(timer);
    }

    const graphemes = splitGraphemes(currentLine.text);

    // Typing characters on current line (comfortable reading cadence)
    if (charIdx < graphemes.length) {
      const speed = currentLine.isComment ? 20 : 38;
      const timer = setTimeout(() => {
        setCharIdx((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // Line finished typing!
      if (currentLine.outputTrigger === 'immediate' && currentLine.outputs) {
        // Output immediate print result to terminal
        const outputText = currentLine.outputs[0];
        setTerminalOutputs((prev) => [...prev, outputText]);

        const nextTimer = setTimeout(() => {
          setLineIdx((prev) => prev + 1);
          setCharIdx(0);
        }, 500);
        return () => clearTimeout(nextTimer);
      } else if (currentLine.outputTrigger === 'loop' && currentLine.outputs) {
        // Countdown loop: stream 3, 2, 1
        let countStep = 0;
        const interval = setInterval(() => {
          if (countStep < currentLine.outputs!.length) {
            const out = currentLine.outputs![countStep];
            setTerminalOutputs((prev) => [...prev, out]);
            countStep++;
          } else {
            clearInterval(interval);
            const nextTimer = setTimeout(() => {
              setLineIdx((prev) => prev + 1);
              setCharIdx(0);
            }, 450);
          }
        }, 550);
        return () => clearInterval(interval);
      } else {
        // Comment or loop header without output
        const nextTimer = setTimeout(() => {
          setLineIdx((prev) => prev + 1);
          setCharIdx(0);
        }, 220);
        return () => clearTimeout(nextTimer);
      }
    }
  }, [isCompletedAll, lineIdx, charIdx, scriptLines]);

  // When completed, wait 3 seconds then auto-restart loop
  useEffect(() => {
    if (!isCompletedAll) return;

    const autoRestartTimer = setTimeout(() => {
      setLineIdx(0);
      setCharIdx(0);
      setTerminalOutputs([]);
      setIsCompletedAll(false);
    }, 3000);

    return () => clearTimeout(autoRestartTimer);
  }, [isCompletedAll]);

  // Blinking vertical line cursor (VS Code style)
  const renderCursor = () => (
    <span
      key="typing-cursor"
      style={{
        display: 'inline-block',
        width: '2px',
        height: '1.15em',
        backgroundColor: '#569cd6',
        marginLeft: '1px',
        marginRight: '1px',
        verticalAlign: 'text-bottom',
        animation: 'blink 0.8s infinite',
      }}
    />
  );

  // Render a code line with ZERO font weight shifting: exactly identical glyphs before, during, and after typing
  const renderCodeLine = (line: CodeLineItem, isPast: boolean, isCurrent: boolean, isFuture: boolean, activeCharIdx: number) => {
    const tokens = tokenizeLine(line.text);
    const totalGraphemes = splitGraphemes(line.text).length;

    // Past line: all tokens in full syntax color with regular font weight
    if (isPast) {
      return (
        <>
          {tokens.map((token, tIdx) => (
            <span
              key={tIdx}
              style={{
                color: token.color,
                fontStyle: token.fontStyle,
              }}
            >
              {token.text}
            </span>
          ))}
        </>
      );
    }

    // Future line: ghost guide styling
    if (isFuture) {
      return (
        <>
          {tokens.map((token, tIdx) => (
            <span
              key={tIdx}
              style={{
                color: 'rgba(255, 255, 255, 0.16)',
                fontStyle: token.fontStyle,
              }}
            >
              {token.text}
            </span>
          ))}
        </>
      );
    }

    // Current line being typed: character-by-character color transition with zero layout/weight shift
    let offset = 0;
    let cursorRendered = false;

    return (
      <>
        {tokens.map((token, tIdx) => {
          const tokenGraphemes = splitGraphemes(token.text);
          const tokenLen = tokenGraphemes.length;
          const tokenStart = offset;
          const tokenEnd = offset + tokenLen;
          offset += tokenLen;

          // Fully typed token
          if (activeCharIdx >= tokenEnd) {
            const isAtEnd = activeCharIdx === tokenEnd && activeCharIdx === totalGraphemes && !cursorRendered;
            if (isAtEnd) cursorRendered = true;

            return (
              <React.Fragment key={tIdx}>
                <span style={{ color: token.color, fontStyle: token.fontStyle }}>
                  {token.text}
                </span>
                {isAtEnd && renderCursor()}
              </React.Fragment>
            );
          }

          // Future token in this current line
          if (activeCharIdx <= tokenStart) {
            const isAtStart = activeCharIdx === tokenStart && !cursorRendered;
            if (isAtStart) cursorRendered = true;

            return (
              <React.Fragment key={tIdx}>
                {isAtStart && renderCursor()}
                <span style={{ color: 'rgba(255, 255, 255, 0.16)', fontStyle: token.fontStyle }}>
                  {token.text}
                </span>
              </React.Fragment>
            );
          }

          // Partially typed token: cursor is positioned inside this token
          cursorRendered = true;
          const typedCount = activeCharIdx - tokenStart;
          const typedPart = tokenGraphemes.slice(0, typedCount).join('');
          const remainingPart = tokenGraphemes.slice(typedCount).join('');

          return (
            <React.Fragment key={tIdx}>
              <span style={{ color: token.color, fontStyle: token.fontStyle }}>
                {typedPart}
              </span>
              {renderCursor()}
              <span style={{ color: 'rgba(255, 255, 255, 0.16)', fontStyle: token.fontStyle }}>
                {remainingPart}
              </span>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <div style={{
      width: '100%',
      background: '#11151f',
      border: '1px solid rgba(255, 255, 255, 0.09)',
      borderRadius: '20px',
      boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.03)',
      overflow: 'hidden',
    }}>
      {/* 1. Window Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '13px 22px',
        background: '#151b26',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Traffic Dots */}
          <div style={{ display: 'flex', gap: '7px' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '4px 12px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#e2e8f0',
              fontFamily: 'var(--font-mono)',
            }}>
              <LanguageIcon language="python" size={14} />
              <span>intro.py</span>
            </div>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 500 }}>
              {t.hero.title}
            </span>
          </div>
        </div>

        {/* Status indicator on the right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
            color: isCompletedAll ? '#34d399' : '#60a5fa',
            background: isCompletedAll ? 'rgba(16, 185, 129, 0.12)' : 'rgba(59, 130, 246, 0.12)',
            border: isCompletedAll ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(59, 130, 246, 0.25)',
            padding: '3px 10px',
            borderRadius: '6px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isCompletedAll ? '#34d399' : '#60a5fa',
              animation: isCompletedAll ? 'none' : 'blink 1.2s infinite',
            }} />
            <span>{isCompletedAll ? t.hero.completed : t.hero.running}</span>
          </span>
        </div>
      </div>

      {/* 2. Split Screen: Left (Real Terminal Execution Screen) + Right (Real Python Code Editor) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
        minHeight: '540px',
      }}>
        {/* LEFT COLUMN: 🖥️ 진짜 실행 터미널 화면 */}
        <div style={{
          background: '#0a0d14',
          borderRight: '1px solid rgba(255, 255, 255, 0.07)',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'var(--font-mono)',
          minHeight: '440px',
        }}>
          {/* Terminal Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TerminalIcon size={15} color="#94a3b8" />
              <span style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#94a3b8',
                textTransform: 'uppercase',
              }}>
                {t.hero.terminalTitle}
              </span>
            </div>
            <span style={{
              fontSize: '0.72rem',
              color: '#64748b',
              fontWeight: 500,
            }}>
              bash 5.2
            </span>
          </div>

          {/* Terminal Execution Body */}
          <div
            ref={terminalScrollRef}
            style={{
              fontSize: '0.94rem',
              lineHeight: 2.1,
              flex: 1,
              height: '350px',
              minHeight: '350px',
              maxHeight: '350px',
              overflowY: 'auto',
              color: '#e2e8f0',
              fontWeight: 400,
            }}
          >
            {/* Shell command line */}
            <div style={{ color: '#64748b', marginBottom: '10px' }}>
              <span style={{ color: '#34d399' }}>user@typingcode</span>:<span style={{ color: '#60a5fa' }}>~</span>$ python3 intro.py
            </div>

            {/* Standard Output Lines generated dynamically by code */}
            {terminalOutputs.map((line, idx) => (
              <div
                key={idx}
                style={{
                  color: line.includes('🎉') ? '#34d399' : line.includes('🚀') ? '#60a5fa' : '#f8fafc',
                  animation: 'slideUp 0.15s ease forwards',
                  wordBreak: 'break-all',
                }}
              >
                {line}
              </div>
            ))}

            {/* Shell Prompt Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
              {isCompletedAll ? (
                <div style={{ color: '#64748b' }}>
                  <span style={{ color: '#34d399' }}>user@typingcode</span>:<span style={{ color: '#60a5fa' }}>~</span>${' '}
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '1.1em',
                    backgroundColor: '#34d399',
                    animation: 'blink 0.8s infinite',
                    verticalAlign: 'text-bottom',
                  }} />
                </div>
              ) : (
                <>
                  <span style={{ color: '#34d399', fontWeight: 700 }}>❯</span>
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '1.1em',
                    backgroundColor: '#60a5fa',
                    animation: 'blink 0.8s infinite',
                  }} />
                </>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 📝 진짜 파이썬 코드 에디터 */}
        <div style={{
          background: '#0e121a',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '440px',
        }}>
          {/* Editor File Tab Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#94a3b8',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)',
              }}>
                EDITOR BUFFER
              </span>
            </div>

            <div style={{ fontSize: '0.76rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
              Python 3.10 · UTF-8
            </div>
          </div>

          {/* Code Lines with Zero-Jitter Character-by-Character Typing */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.94rem',
            lineHeight: 2.0,
            fontWeight: 400,
            flex: 1,
            userSelect: 'none',
          }}>
            {scriptLines.map((line, idx) => {
              const isPast = idx < lineIdx;
              const isCurrent = idx === lineIdx;
              const isFuture = idx > lineIdx;

              if (line.isBlank) {
                return (
                  <div key={line.id} style={{ display: 'flex', gap: '16px', height: '1.3em' }}>
                    <span style={{ width: '24px', textAlign: 'right', color: '#334155', userSelect: 'none', fontSize: '0.82rem' }}>
                      {line.id}
                    </span>
                    <div style={{ flex: 1 }}>&nbsp;</div>
                  </div>
                );
              }

              return (
                <div
                  key={line.id}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'baseline',
                    background: isCurrent ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                    borderRadius: '4px',
                    padding: '1px 6px',
                    marginLeft: '-6px',
                    marginRight: '-6px',
                    borderLeft: isCurrent ? '2px solid #60a5fa' : '2px solid transparent',
                  }}
                >
                  {/* Stable consecutive line number */}
                  <span style={{
                    width: '24px',
                    textAlign: 'right',
                    color: isCurrent ? '#60a5fa' : '#475569',
                    fontWeight: isCurrent ? 700 : 400,
                    userSelect: 'none',
                    fontSize: '0.82rem',
                  }}>
                    {line.id}
                  </span>

                  {/* Code Content Area: whiteSpace 'pre' ensures lines never wrap vertically */}
                  <div style={{ flex: 1, whiteSpace: 'pre', overflowX: 'hidden' }}>
                    {renderCodeLine(line, isPast, isCurrent, isFuture, charIdx)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
