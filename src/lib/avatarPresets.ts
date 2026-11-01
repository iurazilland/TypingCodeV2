export interface AvatarPresetItem {
  id: string;
  labelKo: string;
  labelEn: string;
  bgFrom: string;
  bgTo: string;
  accent: string;
  glyph: string;
}

export const AVATAR_PRESETS: AvatarPresetItem[] = [
  {
    id: 'fox',
    labelKo: '코딩 여우',
    labelEn: 'Code Fox',
    bgFrom: '#fb923c',
    bgTo: '#ea580c',
    accent: '#ffedd5',
    glyph: '🦊',
  },
  {
    id: 'cat',
    labelKo: '해커 냥이',
    labelEn: 'Hacker Cat',
    bgFrom: '#38bdf8',
    bgTo: '#0284c7',
    accent: '#e0f2fe',
    glyph: '🐱',
  },
  {
    id: 'panda',
    labelKo: '알고 판다',
    labelEn: 'Algo Panda',
    bgFrom: '#34d399',
    bgTo: '#059669',
    accent: '#d1fae5',
    glyph: '🐼',
  },
  {
    id: 'owl',
    labelKo: '심야 부엉이',
    labelEn: 'Night Owl',
    bgFrom: '#818cf8',
    bgTo: '#4f46e5',
    accent: '#e0e7ff',
    glyph: '🦉',
  },
  {
    id: 'penguin',
    labelKo: '리눅스 펭귄',
    labelEn: 'Tux Penguin',
    bgFrom: '#2dd4bf',
    bgTo: '#0d9488',
    accent: '#ccfbf1',
    glyph: '🐧',
  },
  {
    id: 'robot',
    labelKo: 'AI 로봇',
    labelEn: 'AI Bot',
    bgFrom: '#60a5fa',
    bgTo: '#2563eb',
    accent: '#dbeafe',
    glyph: '🤖',
  },
  {
    id: 'rocket',
    labelKo: '부스트 로켓',
    labelEn: 'Boost Rocket',
    bgFrom: '#f472b6',
    bgTo: '#db2777',
    accent: '#fce7f3',
    glyph: '🚀',
  },
  {
    id: 'terminal',
    labelKo: '터미널 마스터',
    labelEn: 'Terminal Pro',
    bgFrom: '#334155',
    bgTo: '#0f172a',
    accent: '#38bdf8',
    glyph: '⌨️',
  },
  {
    id: 'sparkles',
    labelKo: '클린 코더',
    labelEn: 'Clean Coder',
    bgFrom: '#a78bfa',
    bgTo: '#7c3aed',
    accent: '#ede9fe',
    glyph: '✨',
  },
  {
    id: 'flame',
    labelKo: '열정 불꽃',
    labelEn: 'Streak Flame',
    bgFrom: '#f87171',
    bgTo: '#dc2626',
    accent: '#fee2e2',
    glyph: '🔥',
  },
  {
    id: 'crown',
    labelKo: '챔피언 크라운',
    labelEn: 'Champion',
    bgFrom: '#fbbf24',
    bgTo: '#d97706',
    accent: '#fef3c7',
    glyph: '👑',
  },
  {
    id: 'whale',
    labelKo: '컨테이너 고래',
    labelEn: 'Dev Whale',
    bgFrom: '#22d3ee',
    bgTo: '#0891b2',
    accent: '#cffafe',
    glyph: '🐳',
  },
];

export function getAvatarPreset(presetId?: string | null): AvatarPresetItem {
  if (!presetId) return AVATAR_PRESETS[0];
  return AVATAR_PRESETS.find((p) => p.id === presetId) || AVATAR_PRESETS[0];
}
