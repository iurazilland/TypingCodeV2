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
      background: 'rgba(11, 19, 41, 0.95)',
      border: '2px solid rgba(56, 189, 248, 0.25)',
      borderRadius: '26px',
      boxShadow: '0 25px 65px -15px rgba(0, 0, 0, 0.75), 0 0 45px rgba(56, 189, 248, 0.09)',
      overflow: 'hidden',
    }}>
      {/* 1. Window Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 26px',
        background: 'rgba(7, 12, 26, 0.98)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Traffic Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f8fafc' }}>
              {t.hero.title}
            </span>
            <span style={{
              fontSize: '0.74rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '8px',
              background: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
            }}>
              {t.hero.badge}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Split Screen: Left (Real Terminal Execution Screen) + Right (Real Python Code Editor) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
        minHeight: '560px',
      }}>
        {/* LEFT COLUMN: 🖥️ 진짜 실행 터미널 화면 */}
        <div style={{
          background: '#070b16',
          borderRight: '1.5px solid rgba(255, 255, 255, 0.08)',
          padding: '30px 34px',
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
            marginBottom: '20px',
            paddingBottom: '14px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <TerminalIcon size={17} color="#38bdf8" />
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#cbd5e1' }}>
                {t.hero.terminalTitle}
              </span>
            </div>
            <span style={{
              fontSize: '0.72rem',
              color: isCompletedAll ? '#34d399' : '#38bdf8',
              background: isCompletedAll ? 'rgba(16, 185, 129, 0.15)' : 'rgba(56, 189, 248, 0.15)',
              padding: '3px 10px',
              borderRadius: '6px',
              fontWeight: 700,
            }}>
              {isCompletedAll ? t.hero.completed : t.hero.running}
            </span>
          </div>

          {/* Terminal Execution Body (Uniform fixed height so it never resizes as code runs) */}
          <div
            ref={terminalScrollRef}
            style={{
              fontSize: '0.98rem',
              lineHeight: 2.2,
              flex: 1,
              height: '340px',
              minHeight: '340px',
              maxHeight: '340px',
              overflowY: 'auto',
              color: '#e2e8f0',
              fontWeight: 400,
            }}
          >
            {/* Shell command line */}
            <div style={{ color: '#64748b', marginBottom: '10px' }}>
              <span style={{ color: '#34d399' }}>user@typingcode</span>:<span style={{ color: '#38bdf8' }}>~</span>$ python3 intro.py
            </div>

            {/* Standard Output Lines generated dynamically by code */}
            {terminalOutputs.map((line, idx) => (
              <div
                key={idx}
                style={{
                  color: line.includes('🎉') ? '#34d399' : line.includes('🚀') ? '#38bdf8' : '#f8fafc',
                  animation: 'slideUp 0.2s ease forwards',
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
                  <span style={{ color: '#34d399' }}>user@typingcode</span>:<span style={{ color: '#38bdf8' }}>~</span>${' '}
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
                    backgroundColor: '#38bdf8',
                    animation: 'blink 0.8s infinite',
                  }} />
                </>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 📝 진짜 파이썬 코드 에디터 */}
        <div style={{
          background: '#0d1424',
          padding: '30px 34px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '440px',
        }}>
          {/* Editor File Tab Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            paddingBottom: '14px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: '8px',
                background: 'rgba(59, 130, 246, 0.2)',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                color: '#60a5fa',
                fontSize: '0.82rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <LanguageIcon language="python" size={16} />
                <span>intro.py</span>
              </span>
            </div>

            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
              Python 3.10
            </div>
          </div>

          {/* Code Lines with Zero-Jitter Character-by-Character Typing */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.95rem',
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
                  }}
                >
                  {/* Stable consecutive line number */}
                  <span style={{
                    width: '24px',
                    textAlign: 'right',
                    color: isCurrent ? '#38bdf8' : '#475569',
                    fontWeight: 400,
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
