'use client';

import React from 'react';

interface LanguageIconProps {
  language: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function LanguageIcon({
  language,
  size = 28,
  className = '',
  style = {},
}: LanguageIconProps) {
  const rawKey = language.toLowerCase();
  const langKey = rawKey === 'vba' ? 'vb' : rawKey;
  const iconSrc = `/icons/languages/${langKey}.svg`;

  return (
    <span
      className={`inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <img
        src={iconSrc}
        alt={`${language} icon`}
        width={size}
        height={size}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
        onError={(e) => {
          // Fallback if image fails
          const target = e.currentTarget;
          target.style.display = 'none';
        }}
      />
    </span>
  );
}
