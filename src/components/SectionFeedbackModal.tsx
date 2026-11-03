'use client';

import React, { useState } from 'react';
import { CheckCircle2, ClipboardCheck, Star } from 'lucide-react';
import { CURRICULUM_TRACKS } from '@/lib/curriculum';
import { getCourseSections } from '@/lib/curriculumSections';
import type { SectionDifficultyRating } from '@/lib/supabase/types';
import { submitSectionFeedback } from '@/lib/progressSync';

export interface CompletedSectionInfo {
  sectionNumber: number;
  titleKo: string;
  titleEn: string;
}

/**
 * Checks if `levelNum` is the final level of a section in the given language/module track.
 */
export function findCompletedSectionForLevel(
  rawLang: string,
  levelNum: number
): CompletedSectionInfo | null {
  const clean = rawLang.toLowerCase();
  let matchedTrack = CURRICULUM_TRACKS[0];
  let matchedModule = matchedTrack.modules[0];
  let found = false;

  for (const track of CURRICULUM_TRACKS) {
    for (const mod of track.modules) {
      if (
        mod.practiceUrl === `/practice/${clean}` ||
        mod.id.toLowerCase() === clean ||
        ((clean === 'python' || clean === 'python_basic') && mod.id === 'py-basic') ||
        (clean === 'c' && mod.id === 'c-basic') ||
        (clean === 'web' && mod.id === 'web-html')
      ) {
        matchedTrack = track;
        matchedModule = mod;
        found = true;
        break;
      }
    }
    if (found) break;
  }

  const sections = getCourseSections(
    matchedTrack.id,
    matchedModule.id,
    matchedModule.totalLevels || 20,
    matchedModule.skills || []
  );

  for (const sec of sections) {
    if (sec.levels.length === 0) continue;
    const lastLevel = sec.levels[sec.levels.length - 1];
    if (lastLevel.levelNumber === levelNum) {
      return {
        sectionNumber: sec.sectionNumber,
        titleKo: sec.title_ko,
        titleEn: sec.title_en,
      };
    }
  }

  return null;
}

export const FEEDBACK_TAGS = [
  {
    id: 'clear_explanation',
    labelKo: '설명·힌트 명확',
    labelEn: 'Clear hints',
  },
  {
    id: 'good_flow',
    labelKo: '단계 흐름 적절',
    labelEn: 'Good step flow',
  },
  {
    id: 'need_more_examples',
    labelKo: '예제 보충 필요',
    labelEn: 'Need examples',
  },
  {
    id: 'too_many_questions',
    labelKo: '문제 분량 많음',
    labelEn: 'Too many steps',
  },
  {
    id: 'confusing_prompt',
    labelKo: '지문·안내 혼동',
    labelEn: 'Confusing prompt',
  },
];

interface SectionFeedbackModalProps {
  isOpen: boolean;
  isEn: boolean;
  rawLang: string;
  sectionInfo: CompletedSectionInfo;
  onClose: () => void;
}

export default function SectionFeedbackModal({
  isOpen,
  isEn,
  rawLang,
  sectionInfo,
  onClose,
}: SectionFeedbackModalProps) {
  const [rating, setRating] = useState<number>(3);
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<SectionDifficultyRating | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const canSubmit =
    rating >= 1 &&
    difficulty !== null &&
    selectedTags.length > 0 &&
    !isSubmitting;

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!difficulty || selectedTags.length === 0 || rating < 1) return;

    setIsSubmitting(true);
    await submitSectionFeedback({
      rawLang,
      sectionNumber: sectionInfo.sectionNumber,
      rating,
      difficulty,
      tags: selectedTags,
      comment,
    });
    setIsSubmitting(false);
    setIsDone(true);
    setTimeout(() => {
      onClose();
    }, 650);
  };

  const secNum = String(sectionInfo.sectionNumber).padStart(2, '0');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10020,
        background: 'rgba(2, 6, 23, 0.82)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '440px',
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 28px 60px rgba(0, 0, 0, 0.55)',
          color: '#0f172a',
        }}
      >
        {isDone ? (
          <div style={{ textAlign: 'center', padding: '40px 24px' }}>
            <CheckCircle2
              size={36}
              color="#10b981"
              style={{ margin: '0 auto 10px', display: 'block' }}
            />
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>
              {isEn ? 'Survey Submitted' : '설문 제출 완료'}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Survey Sheet Header */}
            <div
              style={{
                padding: '18px 22px 16px',
                background: '#f8fafc',
                borderBottom: '1.5px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#0284c7',
                    marginBottom: '3px',
                  }}
                >
                  <ClipboardCheck size={14} />
                  <span>{isEn ? `SECTION ${secNum} SURVEY` : `섹션 ${secNum} 설문조사`}</span>
                </div>
                <div
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    color: '#0f172a',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {isEn ? sectionInfo.titleEn : sectionInfo.titleKo}
                </div>
              </div>
            </div>

            {/* Survey Body */}
            <div style={{ padding: '18px 22px 22px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* 1. 만족도 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '14px',
                  borderBottom: '1px solid #f1f5f9',
                }}
              >
                <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#1e293b' }}>
                  {isEn ? '1. Rating' : '1. 만족도'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {[1, 2, 3, 4, 5].map((star) => {
                    const active = (hoveredStar || rating) >= star;
                    return (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        onClick={() => setRating(star)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '2px',
                          cursor: 'pointer',
                          display: 'flex',
                        }}
                      >
                        <Star
                          size={24}
                          color={active ? '#f59e0b' : '#cbd5e1'}
                          fill={active ? '#fbbf24' : 'transparent'}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. 난이도 */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#1e293b' }}>
                    {isEn ? '2. Difficulty' : '2. 체감 난이도'}
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0284c7' }}>
                    {isEn ? 'Required' : '필수'}
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {(
                    [
                      { key: 'easy' as const, labelKo: '쉬움', labelEn: 'Easy' },
                      { key: 'just_right' as const, labelKo: '적당함', labelEn: 'Good' },
                      { key: 'hard' as const, labelKo: '어려움', labelEn: 'Hard' },
                    ]
                  ).map((opt) => {
                    const selected = difficulty === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setDifficulty(opt.key)}
                        style={{
                          padding: '9px 8px',
                          borderRadius: '10px',
                          background: selected ? '#0f172a' : '#f8fafc',
                          border: selected ? '1.5px solid #0f172a' : '1px solid #cbd5e1',
                          color: selected ? '#ffffff' : '#475569',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                        }}
                      >
                        {isEn ? opt.labelEn : opt.labelKo}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. 평가 태그 */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#1e293b' }}>
                    {isEn ? '3. Evaluation' : '3. 평가 항목'}
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0284c7' }}>
                    {isEn ? 'Select 1+' : '복수 선택'}
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '7px' }}>
                  {FEEDBACK_TAGS.map((tag) => {
                    const active = selectedTags.includes(tag.id);
                    return (
                      <button
                        key={tag.id}
                        type="button"
                        onClick={() => toggleTag(tag.id)}
                        style={{
                          padding: '8px 10px',
                          borderRadius: '10px',
                          background: active ? '#e0f2fe' : '#f8fafc',
                          border: active ? '1.5px solid #0284c7' : '1px solid #cbd5e1',
                          color: active ? '#0369a1' : '#475569',
                          fontSize: '0.79rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'center',
                        }}
                      >
                        {isEn ? tag.labelEn : tag.labelKo}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. 추가 의견 */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px',
                  }}
                >
                  <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#1e293b' }}>
                    {isEn ? '4. Comment' : '4. 기타 의견'}
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8' }}>
                    {isEn ? 'Optional' : '선택'}
                  </span>
                </div>
                <textarea
                  rows={2}
                  maxLength={500}
                  placeholder={isEn ? 'Optional feedback' : '개선 의견 입력'}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '9px 11px',
                    borderRadius: '10px',
                    background: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '0.83rem',
                    resize: 'none',
                    outline: 'none',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '11px',
                  border: 'none',
                  background: canSubmit ? '#0284c7' : '#e2e8f0',
                  color: canSubmit ? '#ffffff' : '#94a3b8',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  cursor: canSubmit ? 'pointer' : 'not-allowed',
                  transition: 'background 0.15s ease',
                }}
              >
                {isSubmitting
                  ? isEn
                    ? 'Submitting...'
                    : '제출 중...'
                  : isEn
                  ? 'Submit Survey'
                  : '설문 제출'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
