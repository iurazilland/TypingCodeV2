'use client';

import React, { useEffect, useState } from 'react';
import { getAvatarPreset } from '@/lib/avatarPresets';

interface UserAvatarProps {
  avatarUrl?: string | null;
  avatarPreset?: string | null;
  size?: number;
  alt?: string;
  borderColor?: string;
}

export default function UserAvatar({
  avatarUrl,
  avatarPreset = 'fox',
  size = 36,
  alt = 'Avatar',
  borderColor,
}: UserAvatarProps) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [avatarUrl]);

  const preset = getAvatarPreset(avatarPreset);
  const showImage = Boolean(avatarUrl && avatarUrl.trim() && !imgFailed);
  const radius = Math.max(10, Math.round(size * 0.34));

  if (showImage) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: `${radius}px`,
          overflow: 'hidden',
          flexShrink: 0,
          border: borderColor ? `2px solid ${borderColor}` : '1.5px solid rgba(255, 255, 255, 0.22)',
          background: '#0f172a',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarUrl!}
          alt={alt}
          width={size}
          height={size}
          onError={() => setImgFailed(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  }

  return (
    <div
      aria-label={alt}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${radius}px`,
        background: `linear-gradient(135deg, ${preset.bgFrom} 0%, ${preset.bgTo} 100%)`,
        border: borderColor ? `2px solid ${borderColor}` : `1.5px solid ${preset.accent}66`,
        boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.3)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        userSelect: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        style={{ position: 'absolute', inset: 0, opacity: 0.22, pointerEvents: 'none' }}
      >
        <circle cx="52" cy="12" r="18" fill={preset.accent} />
        <circle cx="10" cy="56" r="14" fill="#ffffff" />
      </svg>
      <span
        style={{
          fontSize: `${Math.round(size * 0.54)}px`,
          lineHeight: 1,
          position: 'relative',
          zIndex: 1,
          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.22))',
        }}
      >
        {preset.glyph}
      </span>
    </div>
  );
}

