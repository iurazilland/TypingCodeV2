'use client';

import React, { useState } from 'react';
import { CheckCircle2, MessageSquareHeart, Send, Sparkles, Star, X } from 'lucide-react';
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
    labelKo: '💡 설명과 힌트가 이해하기 쉬웠어요',
    labelEn: '💡 Clear explanations & hints',
  },
  {
    id: 'good_flow',
    labelKo: '🧩 빈칸 → 블록 → 타이핑 흐름이 좋았어요',
    labelEn: '🧩 Great blank → block → typing flow',
  },
  {
    id: 'need_more_examples',
    labelKo: '📚 개념 설명이나 예제가 조금 더 필요해요',
    labelEn: '📚 Need a few more examples',
  },
  {
    id: 'too_many_questions',
    labelKo: '⏳ 한 섹션의 문제 분량이 많게 느껴졌어요',
    labelEn: '⏳ Section felt a bit long',
  },
  {
    id: 'confusing_prompt',
    labelKo: '🛠️ 문제 지문이나 오답 안내가 헷갈렸어요',
    labelEn: '🛠️ Some prompts/errors felt confusing',
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
  const [rating, setRating] = useState<number>(5);
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<SectionDifficultyRating>('just_right');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating < 1) return;

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
    }, 850);
  };

  const secBadge = `SECTION ${String(sectionInfo.sectionNumber).padStart(2, '0')}`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10020,
        background: 'rgba(2, 6, 23, 0.86)',
        backdropFilter: 'blur(10px)',
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
          maxWidth: '500px',
          background: 'linear-gradient(180deg, #13203b 0%, #0d1527 100%)',
          border: '1.5px solid rgba(56, 189, 248, 0.38)',
          borderRadius: '26px',
          padding: '30px 28px',
          boxShadow: '0 28px 64px rgba(0, 0, 0, 0.85), 0 0 36px rgba(56, 189, 248, 0.16)',
          color: '#f8fafc',
          position: 'relative',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '32px',
            height: '32px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={16} />
        </button>

        {isDone ? (
          <div style={{ textAlign: 'center', padding: '32px 12px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '20px',
                background: 'rgba(16, 185, 129, 0.16)',
                border: '1.5px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <CheckCircle2 size={32} color="#10b981" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px' }}>
              {isEn ? 'Thank you for your feedback!' : '소중한 피드백 감사합니다!'}
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: 0 }}>
              {isEn
                ? 'Your review helps us make the next section even better.'
                : '보내주신 의견을 반영해 더 알찬 커리큘럼으로 발전시키겠습니다.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '14px',
                  background: 'rgba(56, 189, 248, 0.16)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  color: '#38bdf8',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  marginBottom: '10px',
                }}
              >
                <Sparkles size={13} />
                <span>{secBadge} CLEAR!</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 6px' }}>
                {isEn
                  ? `"${sectionInfo.titleEn}" Complete!`
                  : `「${sectionInfo.titleKo}」 섹션 완주!`}
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: 0 }}>
                {isEn
                  ? 'How was your learning experience in this section?'
                  : '이번 섹션 학습은 어떠셨나요? 5초 만에 간단한 평가를 남겨주세요.'}
              </p>
            </div>

            {/* 1. Star Rating */}
            <div
              style={{
                background: 'rgba(11, 19, 41, 0.65)',
                border: '1px solid rgba(148, 163, 184, 0.16)',
                borderRadius: '16px',
                padding: '14px 16px',
                marginBottom: '14px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.83rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '10px' }}>
                {isEn
                  ? '1. Did this section help you understand the concepts well?'
                  : '1. 이번 섹션 내용이 잘 이해되고 학습에 도움이 되었나요?'}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
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
                        padding: '4px',
                        cursor: 'pointer',
                        transform: active ? 'scale(1.08)' : 'scale(1)',
                        transition: 'transform 0.12s ease',
                      }}
                    >
                      <Star
                        size={30}
                        color={active ? '#fbbf24' : '#475569'}
                        fill={active ? '#fbbf24' : 'transparent'}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Perceived Difficulty */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '8px' }}>
                {isEn ? '2. How was the difficulty?' : '2. 체감 난이도는 어땠나요?'}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {(
                  [
                    {
                      key: 'easy' as const,
                      labelKo: '🌱 쉬웠어요',
                      labelEn: '🌱 Easy',
                      color: '#34d399',
                    },
                    {
                      key: 'just_right' as const,
                      labelKo: '👌 딱 적당해요',
                      labelEn: '👌 Just Right',
                      color: '#38bdf8',
                    },
                    {
                      key: 'hard' as const,
                      labelKo: '🔥 어려웠어요',
                      labelEn: '🔥 Challenging',
                      color: '#fb923c',
                    },
                  ]
                ).map((opt) => {
                  const selected = difficulty === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setDifficulty(opt.key)}
                      style={{
                        padding: '10px 8px',
                        borderRadius: '12px',
                        background: selected ? `${opt.color}22` : 'rgba(11, 19, 41, 0.6)',
                        border: selected
                          ? `1.5px solid ${opt.color}`
                          : '1.5px solid rgba(148, 163, 184, 0.16)',
                        color: selected ? '#ffffff' : '#94a3b8',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      {isEn ? opt.labelEn : opt.labelKo}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Optional Quick Tags */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '8px' }}>
                {isEn
                  ? '3. Quick tags (optional, multiple allowed)'
                  : '3. 좋았던 점이나 아쉬운 점을 골라주세요 (선택 · 복수 가능)'}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {FEEDBACK_TAGS.map((tag) => {
                  const active = selectedTags.includes(tag.id);
                  return (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() => toggleTag(tag.id)}
                      style={{
                        padding: '6px 11px',
                        borderRadius: '10px',
                        background: active
                          ? 'rgba(56, 189, 248, 0.18)'
                          : 'rgba(255, 255, 255, 0.04)',
                        border: active
                          ? '1px solid #38bdf8'
                          : '1px solid rgba(148, 163, 184, 0.18)',
                        color: active ? '#bae6fd' : '#94a3b8',
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      {isEn ? tag.labelEn : tag.labelKo}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Optional Free-Text Request */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#cbd5e1',
                  marginBottom: '6px',
                }}
              >
                <MessageSquareHeart size={14} style={{ color: '#38bdf8' }} />
                <span>
                  {isEn
                    ? '4. Additional requests or suggestions (optional)'
                    : '4. 추가 요청사항이나 건의 의견 (선택)'}
                </span>
              </div>
              <textarea
                rows={2}
                maxLength={500}
                placeholder={
                  isEn
                    ? 'e.g. More examples on f-strings, or question #4 felt tricky...'
                    : '예: 이런 예제가 더 있었으면 좋겠어요 / 특정 문제 설명이 조금 헷갈렸어요'
                }
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  background: 'rgba(11, 19, 41, 0.8)',
                  border: '1.5px solid rgba(148, 163, 184, 0.2)',
                  color: '#f8fafc',
                  fontSize: '0.84rem',
                  resize: 'none',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#94a3b8',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {isEn ? 'Skip' : '건너뛰기'}
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="tactile-btn tactile-btn-primary"
                style={{
                  flex: 1,
                  padding: '12px 18px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '7px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                <Send size={15} />
                <span>
                  {isSubmitting
                    ? isEn
                      ? 'Submitting...'
                      : '제출 중...'
                    : isEn
                    ? 'Submit Feedback'
                    : '설문 제출하고 계속하기'}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

