import React from 'react';
import { BLOCK_GEOMETRY, getBlockInputWidth } from '@/lib/blockGeometry';

export interface BlockTheme {
  bg: string;
  shadow: string;
  border: string;
}

export interface BlockTraceInputProps {
  value: string;
  targetValue?: string;
  onChange: (val: string) => void;
  minChars?: number;
  minWidthPx?: number;
  height?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: number;
  fontStyle?: string;
  background?: string;
  color?: string;
  ghostColor?: string;
  border?: string;
  boxShadow?: string;
  allowAnyText?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const BlockTraceInput: React.FC<BlockTraceInputProps> = ({
  value,
  targetValue,
  onChange,
  minChars = 1,
  minWidthPx = 0,
  height = '24px',
  padding = '1px 6px',
  borderRadius = '6px',
  fontSize = '0.88rem',
  fontWeight = 800,
  fontStyle = 'normal',
  background = '#ffffff',
  color = '#0f172a',
  ghostColor = 'rgba(15, 23, 42, 0.36)',
  border = '1px solid rgba(0, 0, 0, 0.25)',
  boxShadow = 'none',
  allowAnyText = false,
  onFocus,
  onClick,
}) => {
  const valStr = value ?? '';
  const targetStr = targetValue ?? '';
  const effectiveMinWidth = Math.max(minWidthPx, 22);
  const isMismatch =
    targetValue !== undefined && !allowAnyText && valStr.length > 0 && !targetStr.startsWith(valStr);

  // Calculate visual monospace columns occupied by valStr (CJK/Hangul = 2 cols, ASCII = 1 col).
  // Slicing targetStr itself for the hidden prefix guarantees the visible ghost text
  // never shifts left or right by even a single pixel when typing Korean!
  let visualCols = 0;
  for (let i = 0; i < valStr.length; i++) {
    const code = valStr.charCodeAt(i);
    if (
      (code >= 0x1100 && code <= 0x11ff) ||
      (code >= 0x3130 && code <= 0x318f) ||
      (code >= 0xac00 && code <= 0xd7af)
    ) {
      visualCols += 2;
    } else {
      visualCols += 1;
    }
  }
  const hiddenTargetCols = Math.min(targetStr.length, visualCols);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-grid',
        alignItems: 'center',
        minWidth: `${effectiveMinWidth}px`,
        height,
        borderRadius,
        background,
        border: isMismatch ? '1.5px solid #ef4444' : border,
        boxShadow,
        boxSizing: 'border-box',
        overflow: 'hidden',
        transition: 'border 0.15s, box-shadow 0.15s, background 0.15s',
      }}
    >
      {/* Native DOM auto-sizer for current value (symmetric left/right padding) */}
      <span
        aria-hidden="true"
        style={{
          gridArea: '1 / 1',
          visibility: 'hidden',
          whiteSpace: 'pre',
          padding,
          fontFamily: 'var(--font-mono)',
          fontSize,
          fontWeight,
          fontStyle,
          pointerEvents: 'none',
          userSelect: 'none',
          boxSizing: 'border-box',
        }}
      >
        {valStr}
      </span>
      {targetStr.length > 0 && (
        <div
          aria-hidden="true"
          style={{
            gridArea: '1 / 1',
            padding,
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize,
            fontWeight,
            fontStyle,
            whiteSpace: 'pre',
            pointerEvents: 'none',
            userSelect: 'none',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ visibility: 'hidden' }}>{targetStr.slice(0, hiddenTargetCols)}</span>
          <span style={{ color: ghostColor }}>{targetStr.slice(hiddenTargetCols)}</span>
        </div>
      )}
      <input
        type="text"
        value={valStr}
        placeholder=""
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        onDragStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Tab') {
            const canvasEl = e.currentTarget.closest('#tour-col-canvas');
            if (!canvasEl) return;
            const inputs = Array.from(
              canvasEl.querySelectorAll<HTMLInputElement>('input[type="text"]:not(:disabled)')
            ).filter((el) => el.offsetParent !== null);
            if (inputs.length <= 1) return;
            const rects = new Map(inputs.map((el) => [el, el.getBoundingClientRect()]));
            inputs.sort((a, b) => {
              const ra = rects.get(a)!;
              const rb = rects.get(b)!;
              if (Math.abs(ra.top - rb.top) > 12) {
                return ra.top - rb.top;
              }
              return ra.left - rb.left;
            });
            const idx = inputs.indexOf(e.currentTarget);
            if (idx === -1) return;
            e.preventDefault();
            const nextIdx = e.shiftKey
              ? (idx - 1 + inputs.length) % inputs.length
              : (idx + 1) % inputs.length;
            inputs[nextIdx].focus();
          }
        }}
        onFocus={targetValue !== undefined ? undefined : onFocus}
        onClick={targetValue !== undefined ? undefined : onClick}
        onChange={(e) => onChange(e.target.value)}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          width: 'calc(100% + 2px)',
          height: '100%',
          padding,
          margin: 0,
          border: 'none',
          background: 'transparent',
          color: isMismatch ? '#dc2626' : color,
          fontWeight,
          fontFamily: 'var(--font-mono)',
          fontStyle,
          fontSize,
          textAlign: 'left',
          outline: 'none',
          cursor: 'text',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
};

// 1. Puzzle Notch (오목한 홈)
// 연결된 상태(isConnected === true)에서는 들어온 탭과 테두리 색상이 충돌하거나 덮어쓰지 않도록 border를 지웁니다.
export const PuzzleNotch: React.FC<{
  left?: number | string;
  borderColor: string;
  bgColor?: string;
  isConnected?: boolean;
}> = ({
  left = `${BLOCK_GEOMETRY.TAB_LEFT_ROOT}px`,
  borderColor,
  bgColor = '#1b263b',
  isConnected = false,
}) => {
  const leftStyle = typeof left === 'number' ? `${left}px` : left;

  if (isConnected) {
    // 이미 탭이 결합된 상태: 상위 블록의 탭 색상과 테두리가 그대로 들어오므로 별도 테두리/배경 그리지 않음
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: '-1px',
        left: leftStyle,
        width: `${BLOCK_GEOMETRY.TAB_WIDTH}px`,
        height: `${BLOCK_GEOMETRY.TAB_HEIGHT}px`,
        background: bgColor,
        borderRadius: '0 0 4px 4px',
        border: `1px solid ${borderColor}`,
        borderTop: 'none',
        boxSizing: 'border-box',
        zIndex: 5,
        pointerEvents: 'none',
      }}
    >
      {/* Subpixel anti-aliasing guard: masks the parent's 1px top border across the notch opening */}
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          left: 0,
          right: 0,
          height: '2px',
          background: bgColor,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

// 2. Puzzle Tab (돌출 탭)
// 상위 블록의 자체 배경색과 테두리색을 온전히 보존하며, 하위 블록의 top edge 위에 깨끗하게 안착합니다.
export const PuzzleTab: React.FC<{
  left?: number | string;
  borderColor: string;
  bg: string;
  isCeiling?: boolean;
  zIndex?: number;
}> = ({
  left = `${BLOCK_GEOMETRY.TAB_LEFT_ROOT}px`,
  borderColor,
  bg,
  isCeiling = false,
  zIndex,
}) => {
  const leftStyle = typeof left === 'number' ? `${left}px` : left;
  const effectiveZIndex = zIndex ?? (isCeiling ? 60 : 25);

  return (
    <div
      style={{
        position: 'absolute',
        ...(isCeiling ? { top: '-1px' } : { bottom: '-5px' }),
        left: leftStyle,
        width: `${BLOCK_GEOMETRY.TAB_WIDTH}px`,
        height: `${BLOCK_GEOMETRY.TAB_HEIGHT}px`,
        background: bg,
        borderRadius: '0 0 4px 4px',
        border: `1px solid ${borderColor}`,
        borderTop: 'none',
        boxSizing: 'border-box',
        zIndex: effectiveZIndex,
        pointerEvents: 'none',
      }}
    />
  );
};

// 3. Horizontal Puzzle Pieces (가로 메서드 결합부)
export const HorizontalPuzzleNotch: React.FC<{
  borderColor: string;
  bgColor?: string;
  isConnected?: boolean;
}> = ({
  borderColor,
  bgColor = '#1b263b',
  isConnected = false,
}) => {
  if (isConnected) return null;

  return (
    <div
      style={{
        position: 'absolute',
        right: '-1px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '5px',
        height: '16px',
        background: bgColor,
        borderRadius: '3px 0 0 3px',
        border: `1px solid ${borderColor}`,
        borderRight: 'none',
        boxSizing: 'border-box',
        zIndex: 4,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-1px',
          top: 0,
          bottom: 0,
          width: '2px',
          background: bgColor,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export const HorizontalPuzzleTab: React.FC<{
  borderColor: string;
  bg: string;
}> = ({ borderColor, bg }) => (
  <div
    style={{
      position: 'absolute',
      left: '-5px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '5px',
      height: '16px',
      background: bg,
      borderRadius: '3px 0 0 3px',
      border: `1px solid ${borderColor}`,
      borderRight: 'none',
      boxSizing: 'border-box',
      zIndex: 10,
      pointerEvents: 'none',
    }}
  />
);

// 4. C-Shape / E-Shape Bottom Closing Arm (ㄷ자/E자 하단 마감 암)
export const SvgBottomClosingArm: React.FC<{
  theme: BlockTheme;
  isDef?: boolean;
  hasReturn?: boolean;
  returnVal?: string;
  targetReturnVal?: string;
  onToggleDefReturn?: (show: boolean) => void;
  onDefReturnValChange?: (val: string) => void;
  extraButtons?: React.ReactNode;
  hasInnerBlocks?: boolean;
  tabLeft?: number;
  isNested?: boolean;
  notchBgColor?: string;
}> = ({
  theme,
  isDef = false,
  hasReturn = false,
  returnVal = '',
  targetReturnVal,
  onToggleDefReturn,
  onDefReturnValChange,
  extraButtons,
  hasInnerBlocks = false,
  tabLeft,
  isNested = false,
  notchBgColor = '#1b263b',
}) => {
  const H = BLOCK_GEOMETRY.CLOSING_ARM_HEIGHT;
  const spineW = BLOCK_GEOMETRY.SPINE_WIDTH;
  const effectiveTabLeft = tabLeft ?? (isNested ? BLOCK_GEOMETRY.TAB_LEFT_INNER : BLOCK_GEOMETRY.TAB_LEFT_ROOT);
  const notchLeft = spineW + BLOCK_GEOMETRY.TAB_LEFT_INNER;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: `${H}px`,
        height: `${H}px`,
        marginTop: '-1px',
        boxSizing: 'border-box',
        background: theme.bg,
        borderTop: `1px solid ${theme.border}`,
        borderRight: `1px solid ${theme.border}`,
        borderBottom: `1px solid ${theme.border}`,
        borderLeft: isNested ? 'none' : `1px solid ${theme.border}`,
        borderRadius: isNested ? '0 6px 6px 0' : '0 6px 6px 6px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: (extraButtons || (isDef && hasReturn)) ? `${notchLeft + 24}px` : '0px',
        paddingRight: (isDef && hasReturn) ? '10px' : '0px',
        gap: '4px',
        whiteSpace: 'nowrap',
        zIndex: 2,
      }}
    >
      {/* 1. 기둥(Spine) 접합면 마스크: 상단 테두리 선을 지워 완전 일체형으로 결합 */}
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          left: 0,
          width: `${isNested ? spineW - 1 : spineW - 2}px`,
          height: '2px',
          background: theme.bg,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* 2. 입구 바닥 결합 홈: 내부 자식 블록이 없을 때만 빈 홈 표시 */}
      <PuzzleNotch left={notchLeft} borderColor={theme.border} bgColor={notchBgColor} isConnected={hasInnerBlocks} />

      {/* 3. 하단 돌출 퍼즐 탭: 다음 블록과 정확한 위치에서 스냅되는 표준 퍼즐 탭 */}
      <PuzzleTab left={effectiveTabLeft} borderColor={theme.border} bg={theme.bg} zIndex={25} />

      {/* 4. 컨트롤 버튼 & def return 입력창 */}
      {extraButtons}
      {isDef && hasReturn && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', position: 'relative', zIndex: 6, paddingLeft: '8px' }}>
          <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.88rem' }}>return</span>
          <BlockTraceInput
            value={returnVal}
            targetValue={targetReturnVal}
            onChange={(val) => onDefReturnValChange?.(val)}
            minWidthPx={52}
            height="22px"
            borderRadius="5px"
            fontSize="0.86rem"
          />
        </div>
      )}
    </div>
  );
};

// 5. Scratch-Style Ghost / Shadow Snap Block (스냅 위치를 미리 보여주는 회색 그림자 블록)
export const GhostSnapBlock: React.FC<{
  left?: number | string;
  top?: number | string;
  width?: number | string;
  height?: number | string;
  isNested?: boolean;
  style?: React.CSSProperties;
}> = ({
  left,
  top,
  width = 140,
  height = 34,
  isNested = false,
  style,
}) => {
  const tabLeft = isNested ? BLOCK_GEOMETRY.TAB_LEFT_INNER : BLOCK_GEOMETRY.TAB_LEFT_ROOT;
  const isAbsolute = left !== undefined || top !== undefined;

  return (
    <div
      className={isNested ? 'nested-ghost-snap-block' : 'canvas-ghost-snap-block'}
      style={{
        position: isAbsolute ? 'absolute' : 'relative',
        ...(left !== undefined ? { left: typeof left === 'number' ? `${left}px` : left } : {}),
        ...(top !== undefined ? { top: typeof top === 'number' ? `${top}px` : top } : {}),
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: typeof height === 'number' ? `${height}px` : height,
        boxSizing: 'border-box',
        borderRadius: isNested ? '0 6px 6px 0' : '6px',
        background: 'rgba(148, 163, 184, 0.45)', // Scratch neutral slate grey
        border: '1.5px solid #94a3b8',
        ...(isNested ? { borderLeft: 'none', marginTop: '-1px' } : {}),
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        zIndex: 60,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        transition: 'height 0.1s ease, width 0.1s ease',
        ...style,
      }}
    >
      {/* Top Notch (상단 홈) */}
      <PuzzleNotch left={tabLeft} borderColor="#94a3b8" bgColor="#1b263b" isConnected={false} />

      {/* Bottom Puzzle Tab (하단 탭) */}
      <PuzzleTab left={tabLeft} borderColor="#94a3b8" bg="rgba(148, 163, 184, 0.45)" zIndex={65} />
    </div>
  );
};

// 6. Scratch-Style Ghost Method Snap Block (메서드 결합 위치를 미리 보여주는 회색 그림자 블록)
export const GhostMethodBlock: React.FC<{
  left: number | string;
  top: number | string;
  height?: number | string;
  width?: number | string;
  style?: React.CSSProperties;
}> = ({
  left,
  top,
  height = 34,
  width = 160,
  style,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: typeof left === 'number' ? `${left}px` : left,
        top: typeof top === 'number' ? `${top}px` : top,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        boxSizing: 'border-box',
        borderRadius: '0 6px 6px 0',
        background: 'rgba(148, 163, 184, 0.45)', // Scratch neutral slate grey
        border: '1.5px solid #94a3b8',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        zIndex: 60,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        ...style,
      }}
    >
      <HorizontalPuzzleTab borderColor="#94a3b8" bg="rgba(148, 163, 184, 0.45)" />
      <HorizontalPuzzleNotch borderColor="#94a3b8" bgColor="#1b263b" />
    </div>
  );
};

// 7. Scratch-Style Ghost C-Shape Snap Block (ㄷ자 블록 결합 시 나타나는 회색 그림자 블록)
export const GhostCShapeBlock: React.FC<{
  left?: number | string;
  top?: number | string;
  width?: number | string;
  mouthHeight?: number;
  isNested?: boolean;
  style?: React.CSSProperties;
}> = ({
  left,
  top,
  width = 150,
  mouthHeight = 28,
  isNested = false,
  style,
}) => {
  const isAbsolute = left !== undefined || top !== undefined;
  const tabLeft = isNested ? BLOCK_GEOMETRY.TAB_LEFT_INNER : BLOCK_GEOMETRY.TAB_LEFT_ROOT;
  const spineW = BLOCK_GEOMETRY.SPINE_WIDTH;
  const closingArmH = BLOCK_GEOMETRY.CLOSING_ARM_HEIGHT;
  const headerArmH = BLOCK_GEOMETRY.ARM_HEIGHT;
  const numWidth = typeof width === 'number' ? width : 150;
  const closingArmW = numWidth;

  return (
    <div
      className={isNested ? 'nested-ghost-c-block' : 'canvas-ghost-c-block'}
      style={{
        position: isAbsolute ? 'absolute' : 'relative',
        ...(left !== undefined ? { left: typeof left === 'number' ? `${left}px` : left } : {}),
        ...(top !== undefined ? { top: typeof top === 'number' ? `${top}px` : top } : {}),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 'fit-content',
        zIndex: 60,
        pointerEvents: 'none',
        boxSizing: 'border-box',
        ...(isNested ? { marginTop: '-1px' } : {}),
        ...style,
      }}
    >
      {/* 1) Top Header Arm (34px) */}
      <div
        style={{
          position: 'relative',
          width: `${numWidth}px`,
          height: `${headerArmH}px`,
          minHeight: `${headerArmH}px`,
          background: 'rgba(148, 163, 184, 0.45)', // Scratch slate grey
          border: '1.5px solid #94a3b8',
          borderBottom: 'none',
          borderRadius: isNested ? '0 6px 6px 0' : '6px 6px 6px 0',
          boxSizing: 'border-box',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Top Notch */}
        <PuzzleNotch left={tabLeft} borderColor="#94a3b8" bgColor="#1b263b" isConnected={false} />

        {/* Junction line between top arm and mouth */}
        <div
          style={{
            position: 'absolute',
            left: `${spineW}px`,
            right: 0,
            bottom: '-1px',
            height: '1.5px',
            background: '#94a3b8',
          }}
        />
      </div>

      {/* 2) Middle Mouth Section (Left Spine + Transparent Mouth Opening) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
          height: `${mouthHeight}px`,
          minHeight: `${mouthHeight}px`,
          boxSizing: 'border-box',
        }}
      >
        {/* Left Spine (14px) */}
        <div
          style={{
            width: `${spineW}px`,
            height: '100%',
            background: 'rgba(148, 163, 184, 0.45)',
            borderLeft: isNested ? 'none' : '1.5px solid #94a3b8',
            borderRight: '1.5px solid #94a3b8',
            boxSizing: 'border-box',
            flexShrink: 0,
          }}
        />

        {/* Mouth Interior with Ceiling Tab */}
        <div
          style={{
            position: 'relative',
            width: `${numWidth - spineW}px`,
            height: '100%',
            background: 'transparent',
            boxSizing: 'border-box',
          }}
        >
          {/* Ceiling Tab inside the mouth */}
          <PuzzleTab isCeiling left={BLOCK_GEOMETRY.TAB_LEFT_INNER} borderColor="#94a3b8" bg="rgba(148, 163, 184, 0.45)" />
        </div>
      </div>

      {/* 3) Bottom Closing Arm (16px) */}
      <div
        style={{
          position: 'relative',
          width: `${closingArmW}px`,
          height: `${closingArmH}px`,
          minHeight: `${closingArmH}px`,
          background: 'rgba(148, 163, 184, 0.45)',
          border: '1.5px solid #94a3b8',
          borderTop: 'none',
          borderRadius: isNested ? '0 6px 6px 0' : '0 6px 6px 6px',
          boxSizing: 'border-box',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Junction line between mouth and bottom arm */}
        <div
          style={{
            position: 'absolute',
            left: `${spineW}px`,
            right: 0,
            top: '-1px',
            height: '1.5px',
            background: '#94a3b8',
          }}
        />

        {/* Bottom Tab */}
        <PuzzleTab left={tabLeft} borderColor="#94a3b8" bg="rgba(148, 163, 184, 0.45)" zIndex={65} />
      </div>
    </div>
  );
};


