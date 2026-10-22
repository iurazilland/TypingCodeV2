'use client';

import React, { useMemo } from 'react';
import { Globe, RefreshCw } from 'lucide-react';

interface WebPreviewProps {
  htmlCode: string;
}

export default function WebPreview({ htmlCode }: WebPreviewProps) {
  const srcDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              margin: 0;
              padding: 16px;
              background-color: #0f172a;
              color: #f8fafc;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }
          </style>
        </head>
        <body>
          ${htmlCode}
        </body>
      </html>
    `;
  }, [htmlCode]);

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
      {/* Mock Browser Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 16px',
        background: 'rgba(30, 41, 59, 0.6)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
        </div>

        {/* Address Bar */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(15, 23, 42, 0.7)',
          padding: '4px 12px',
          borderRadius: '6px',
          fontSize: '0.78rem',
          color: '#94a3b8',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}>
          <Globe size={13} color="#06b6d4" />
          <span>https://sandbox.typingcode.internal/preview</span>
        </div>

        <button 
          title="새로고침"
          style={{ color: '#94a3b8', padding: '4px', borderRadius: '4px' }}
        >
          <RefreshCw size={13} />
        </button>
      </div>

      {/* Live Iframe Sandbox */}
      <div style={{ flex: 1, background: '#0f172a', position: 'relative' }}>
        <iframe
          title="Web Sandbox Live View"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '220px',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
}
