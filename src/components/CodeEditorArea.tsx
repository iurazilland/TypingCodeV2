'use client';

import React, { useMemo, useRef } from 'react';

interface CodeEditorAreaProps {
  value: string;
  onChange: (nextValue: string) => void;
  onRunShortcut?: () => void;
  onSaveShortcut?: () => void;
  minHeight?: number;
  height?: number | string;
  placeholder?: string;
}

const INDENT = '    ';

export default function CodeEditorArea({
  value,
  onChange,
  onRunShortcut,
  onSaveShortcut,
  minHeight = 360,
  height,
  placeholder,
}: CodeEditorAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const gutterRef = useRef<HTMLDivElement | null>(null);

  const lineCount = useMemo(() => {
    const count = value.split('\n').length;
    return Math.max(1, count);
  }, [value]);

  const lineNumbers = useMemo(
    () => Array.from({ length: lineCount }, (_, idx) => idx + 1),
    [lineCount]
  );

  const handleScroll = () => {
    if (textareaRef.current && gutterRef.current) {
      gutterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const applyEdit = (nextText: string, selStart: number, selEnd = selStart) => {
    onChange(nextText);
    requestAnimationFrame(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(selStart, selEnd);
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      if (onRunShortcut) {
        e.preventDefault();
        onRunShortcut();
      }
      return;
    }

    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
      if (onSaveShortcut) {
        e.preventDefault();
        onSaveShortcut();
      }
      return;
    }

    const el = e.currentTarget;
    const start = el.selectionStart;
    const end = el.selectionEnd;

    // Tab / Shift+Tab indentation
    if (e.key === 'Tab') {
      e.preventDefault();

      if (start !== end || e.shiftKey) {
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;
        const nextNewline = value.indexOf('\n', end);
        const lineEnd = nextNewline === -1 ? value.length : nextNewline;
        const selectedBlock = value.slice(lineStart, lineEnd);
        const lines = selectedBlock.split('\n');

        let deltaFirst = 0;
        let deltaTotal = 0;

        const transformed = lines.map((line, idx) => {
          if (e.shiftKey) {
            const match = line.match(/^( {1,4}|\t)/);
            if (!match) return line;
            const removed = match[0].length;
            if (idx === 0) deltaFirst = -removed;
            deltaTotal -= removed;
            return line.slice(removed);
          } else {
            if (idx === 0) deltaFirst = INDENT.length;
            deltaTotal += INDENT.length;
            return INDENT + line;
          }
        });

        const nextText =
          value.slice(0, lineStart) + transformed.join('\n') + value.slice(lineEnd);
        const nextStart = Math.max(lineStart, start + deltaFirst);
        const nextEnd = Math.max(nextStart, end + deltaTotal);
        applyEdit(nextText, nextStart, nextEnd);
        return;
      }

      const nextText = value.slice(0, start) + INDENT + value.slice(end);
      applyEdit(nextText, start + INDENT.length);
      return;
    }

    // Smart auto-indent on Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const currentLineBeforeCursor = value.slice(lineStart, start);
      const leadingSpaces = currentLineBeforeCursor.match(/^[ \t]*/)?.[0] || '';
      const trimmedEnd = currentLineBeforeCursor.trimEnd();
      const shouldExtraIndent =
        trimmedEnd.endsWith(':') || trimmedEnd.endsWith('{');
      const insertion =
        '\n' + leadingSpaces + (shouldExtraIndent ? INDENT : '');

      const nextText = value.slice(0, start) + insertion + value.slice(end);
      applyEdit(nextText, start + insertion.length);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        minHeight,
        height: height ?? 'auto',
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Line Number Gutter */}
      <div
        ref={gutterRef}
        aria-hidden="true"
        style={{
          width: '48px',
          flexShrink: 0,
          padding: '18px 10px 18px 6px',
          background: '#f8fafc',
          borderRight: '1px solid #e2e8f0',
          color: '#94a3b8',
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: '0.86rem',
          lineHeight: '1.65',
          textAlign: 'right',
          userSelect: 'none',
          overflow: 'hidden',
        }}
      >
        {lineNumbers.map((num) => (
          <div key={num} style={{ height: '1.5675rem' }}>
            {num}
          </div>
        ))}
      </div>

      {/* Native Textarea Canvas */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        placeholder={placeholder}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        style={{
          flex: 1,
          width: '100%',
          padding: '18px 20px',
          background: '#ffffff',
          color: '#0f172a',
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontVariantLigatures: 'none',
          fontFeatureSettings: '"liga" 0, "calt" 0',
          fontSize: '0.95rem',
          lineHeight: '1.5675rem',
          border: 'none',
          outline: 'none',
          resize: 'none',
          whiteSpace: 'pre',
          overflow: 'auto',
        }}
      />
    </div>
  );
}
