import React from 'react';
import { Play } from 'lucide-react';
import {
  CanvasBlock,
  BlockType,
  IfBranch,
  DictPair,
  BLOCK_GEOMETRY,
  BLOCK_THEMES,
  getBlockInputWidth,
} from '@/lib/blockGeometry';
import {
  PuzzleTab,
  PuzzleNotch,
  HorizontalPuzzleTab,
  HorizontalPuzzleNotch,
  SvgBottomClosingArm,
} from './BlockPuzzleShapes';

export interface CanvasBlockItemProps {
  block: CanvasBlock;
  isNested?: boolean;
  isSlotArg?: boolean;
  cIdx?: number;
  parentBlockId?: string;
  branchId?: string;
  draggedChainIds?: Set<string>;
  activeInputHelp?: { blockId: string; funcType: string } | null;
  activeSnapTarget?: { type: string; targetBlockId: string } | null;
  canvasBlocks?: CanvasBlock[];
  onBlockPointerDown?: (e: React.PointerEvent, block: CanvasBlock) => void;
  onInnerBlockPointerDown?: (
    e: React.PointerEvent,
    block: CanvasBlock,
    parentBlockId: string,
    cIdx: number,
    branchId?: string
  ) => void;
  onArgBlockPointerDown?: (e: React.PointerEvent, block: CanvasBlock, parentBlockId: string) => void;
  onContextMenu?: (e: React.MouseEvent, blockId: string) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  onContentChange: (val: string, blockId: string, parentBlockId?: string, cIdx?: number, branchId?: string) => void;
  onVarNameChange?: (val: string, blockId: string, parentBlockId?: string, cIdx?: number, branchId?: string) => void;
  onBranchConditionChange?: (blockId: string, branchId: string, val: string) => void;
  onAddBranch?: (blockId: string, kind: 'elif' | 'else') => void;
  onRemoveBranch?: (blockId: string, branchId: string) => void;
  onToggleDefReturn?: (blockId: string, show: boolean) => void;
  onDefReturnValChange?: (blockId: string, val: string) => void;
  onRemoveInnerBlock?: (parentBlockId: string, cIdx: number, branchId?: string) => void;
  onMethodNameChange?: (blockId: string, methodName: string) => void;
  onBlockTypeChange?: (blockId: string, newType: BlockType) => void;
  onAddItem?: (blockId: string) => void;
  onRemoveItem?: (blockId: string, idx: number) => void;
  onItemChange?: (blockId: string, idx: number, val: string) => void;
  onAddDictPair?: (blockId: string) => void;
  onRemoveDictPair?: (blockId: string, idx: number) => void;
  onDictKeyChange?: (blockId: string, idx: number, val: string) => void;
  onDictValChange?: (blockId: string, idx: number, val: string) => void;
  methodCategories?: Array<{ category: string; methods: Array<{ name: string; label: string; placeholder?: string }> }>;
  getMethodSelectWidth?: (name: string) => number;
  renderSpeechBubble?: (blockId: string, funcType: string) => React.ReactNode;
  handleInputFocusSelect?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleInputClickSelect?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const CanvasBlockItem: React.FC<CanvasBlockItemProps> = (props) => {
  const {
    block,
    isNested = false,
    isSlotArg = false,
    cIdx = 0,
    parentBlockId,
    branchId,
    draggedChainIds,
    activeInputHelp,
    activeSnapTarget,
    canvasBlocks = [],
    onBlockPointerDown,
    onInnerBlockPointerDown,
    onArgBlockPointerDown,
    onContextMenu,
    onDragOver,
    onDrop,
    onContentChange,
    onVarNameChange,
    onBranchConditionChange,
    onAddBranch,
    onRemoveBranch,
    onToggleDefReturn,
    onDefReturnValChange,
    onRemoveInnerBlock,
    onMethodNameChange,
    onBlockTypeChange,
    onAddItem,
    onRemoveItem,
    onItemChange,
    onAddDictPair,
    onRemoveDictPair,
    onDictKeyChange,
    onDictValChange,
    methodCategories = [],
    getMethodSelectWidth = (s: string) => Math.max(60, s.length * 8 + 30),
    renderSpeechBubble,
    handleInputFocusSelect,
    handleInputClickSelect,
  } = props;

  const theme = BLOCK_THEMES[block.type] || BLOCK_THEMES.print;
  const isCBlock = block.type === 'for_range' || block.type === 'for_in' || block.type === 'while' || block.type === 'def';
  const isIfBlock = block.type === 'if';
  const isChainDragged = draggedChainIds ? draggedChainIds.has(block.id) : false;
  const isArgSlotTarget = activeSnapTarget?.type === 'arg_slot' && activeSnapTarget.targetBlockId === block.id;

  // Stacking zIndex:
  // 1. Nested blocks inside a mouth MUST have strictly descending z-index (Child 0 > Child 1 > Child 2)
  //    so Child 0's bottom tab paints over Child 1's top edge cleanly without line corruption.
  // 2. Dragged chain blocks float at the highest layer (baseZ + 100).
  // 3. Canvas root blocks follow their stack zIndex, guaranteeing newly duplicated / clicked blocks
  //    render in the foreground layer (front) over existing blocks.
  const baseZ = block.zIndex ?? 10;
  const effectiveZIndex = isChainDragged
    ? baseZ + 100
    : activeInputHelp?.blockId === block.id
    ? baseZ + 50
    : isNested
    ? Math.max(1, 40 - cIdx)
    : baseZ;

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isSlotArg && parentBlockId) {
      onArgBlockPointerDown?.(e, block, parentBlockId);
    } else if (isNested && parentBlockId) {
      onInnerBlockPointerDown?.(e, block, parentBlockId, cIdx, branchId);
    } else {
      onBlockPointerDown?.(e, block);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onContextMenu?.(e, block.id);
  };

  // ============================================================================
  // 0. START HAT BLOCK (시작 블록)
  // ============================================================================
  if (block.type === 'start') {
    return (
      <div
        id={`block-${block.id}`}
        className="canvas-block start-hat-block"
        onPointerDown={handlePointerDown}
        onContextMenu={handleContextMenu}
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={{
          position: 'absolute',
          left: `${block.x}px`,
          top: `${block.y}px`,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '7px 14px 7px 12px',
          borderRadius: block.nextBlockId ? '16px 16px 0 0' : '16px 16px 6px 6px',
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          boxShadow: block.nextBlockId
            ? '0 4px 12px rgba(16, 185, 129, 0.25)'
            : '0 2px 0 #065f46, 0 4px 12px rgba(16, 185, 129, 0.35)',
          border: '1px solid #10b981',
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '0.82rem',
          fontFamily: 'var(--font-sans)',
          cursor: 'grab',
          zIndex: effectiveZIndex,
          userSelect: 'none',
          touchAction: 'none',
          transition: 'transform 0.15s ease, opacity 0.15s ease, box-shadow 0.2s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: '#ffffff',
            color: '#047857',
            boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
          }}
        >
          <Play size={11} fill="#047857" style={{ marginLeft: '1px' }} />
        </div>
        <span style={{ fontWeight: 800, letterSpacing: '-0.3px', color: '#ffffff', fontSize: '0.85rem' }}>실행</span>
        <span
          style={{
            fontSize: '0.68rem',
            padding: '1px 6px',
            borderRadius: '4px',
            background: 'rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            fontWeight: 700,
          }}
        >
          Start
        </span>
        {/* Standard Puzzle Tab pointing downwards */}
        <PuzzleTab left={BLOCK_GEOMETRY.TAB_LEFT_ROOT} borderColor="#10b981" bg="#047857" zIndex={20} />
      </div>
    );
  }

  // ============================================================================
  // 1. C-SHAPE LOOP & DEF BLOCKS (for, while, def ㄷ자 블록)
  // ============================================================================
  if (isCBlock) {
    const isTopConnected = isNested ? true : !!block.prevBlockId;
    const tabLeft = isNested ? BLOCK_GEOMETRY.TAB_LEFT_INNER : BLOCK_GEOMETRY.TAB_LEFT_ROOT;
    const spineW = BLOCK_GEOMETRY.SPINE_WIDTH;
    const innerBlocks = block.innerBlocks || [];

    return (
      <div
        id={`block-${block.id}`}
        className={isNested ? 'nested-c-shape-block' : 'canvas-block c-shape-loop-block'}
        onPointerDown={handlePointerDown}
        onContextMenu={handleContextMenu}
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'flex-start',
          width: 'fit-content',
          minWidth: '120px',
          userSelect: 'none',
          cursor: 'grab',
          fontFamily: 'var(--font-mono)',
          position: isNested ? 'relative' : 'absolute',
          ...(isNested ? { marginTop: cIdx === 0 ? '0px' : '-1px' } : { left: `${block.x}px`, top: `${block.y}px` }),
          filter: isNested ? 'none' : 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.25))',
          zIndex: effectiveZIndex,
          touchAction: isNested ? undefined : 'none',
        }}
      >
        {/* 1) Top Header Arm: 상단 두께 30px 및 결합부 유지 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            gap: '4px',
            minHeight: `${BLOCK_GEOMETRY.ARM_HEIGHT}px`,
            height: `${BLOCK_GEOMETRY.ARM_HEIGHT}px`,
            padding: '0 10px',
            borderRadius: isNested ? '0 6px 6px 0' : '6px 6px 6px 0',
            background: theme.bg,
            border: `1px solid ${theme.border}`,
            borderBottom: 'none',
            ...(isNested ? { borderLeft: 'none' } : {}),
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '0.80rem',
            position: 'relative',
            cursor: 'grab',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Notch: 연결 상태일 때는 null을 리턴하여 테두리 덮어쓰기 원천 방지 */}
          <PuzzleNotch left={tabLeft} borderColor={theme.border} isConnected={isTopConnected} />

          {/* Spine junction line */}
          <div
            style={{
              position: 'absolute',
              left: `${spineW}px`,
              right: '5px',
              bottom: 0,
              height: '1px',
              background: theme.border,
              pointerEvents: 'none',
            }}
          />

          {block.type === 'for_range' ? (
            <>
              <span style={{ color: '#ffffff' }}>for</span>
              <input
                type="text"
                value={block.varName ?? 'i'}
                placeholder=""
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onFocus={handleInputFocusSelect}
                onClick={handleInputClickSelect}
                onChange={(e) => onVarNameChange?.(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                style={{
                  width: `${getBlockInputWidth(block.varName ?? 'i')}px`,
                  height: '20px',
                  padding: '1px 5px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  outline: 'none',
                  cursor: 'text',
                  boxSizing: 'border-box',
                }}
              />
              <span style={{ color: '#ffffff' }}>in</span>
              <div
                id={`arg-slot-${block.id}`}
                className="arg-slot-filled"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  margin: '0 3px',
                  padding: '1px 2px',
                  borderRadius: '7px',
                  background: 'rgba(0, 0, 0, 0.22)',
                  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.35)',
                }}
              >
                <div
                  className="slot-arg-block"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    height: '24px',
                    padding: '0 8px',
                    borderRadius: '6px',
                    background: '#2563eb',
                    border: '1px solid #3b82f6',
                    boxShadow: '0 1.5px 3px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    boxSizing: 'border-box',
                    userSelect: 'none',
                  }}
                >
                  <span>range (</span>
                  <div style={{ position: 'relative', display: 'inline-flex', borderRadius: '5px' }}>
                    <input
                      type="text"
                      value={block.content ?? '5'}
                      placeholder=""
                      onMouseDown={(e) => e.stopPropagation()}
                      onPointerDown={(e) => e.stopPropagation()}
                      onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      onFocus={handleInputFocusSelect}
                      onClick={handleInputClickSelect}
                      onChange={(e) => onContentChange(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                      style={{
                        width: `${getBlockInputWidth(block.content ?? '5')}px`,
                        height: '20px',
                        padding: '1px 5px',
                        borderRadius: '5px',
                        background: '#ffffff',
                        color: '#0f172a',
                        border: '1px solid rgba(0, 0, 0, 0.25)',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        textAlign: 'left',
                        outline: 'none',
                        cursor: 'text',
                        boxSizing: 'border-box',
                      }}
                    />
                    {renderSpeechBubble?.(block.id, 'for_range')}
                  </div>
                  <span>)</span>
                </div>
              </div>
              <span style={{ color: '#ffffff' }}>:</span>
            </>
          ) : block.type === 'for_in' ? (
            <>
              <span style={{ color: '#ffffff' }}>for</span>
              <input
                type="text"
                value={block.varName ?? 'item'}
                placeholder=""
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onFocus={handleInputFocusSelect}
                onClick={handleInputClickSelect}
                onChange={(e) => onVarNameChange?.(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                style={{
                  width: `${getBlockInputWidth(block.varName ?? 'item')}px`,
                  height: '20px',
                  padding: '1px 5px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  outline: 'none',
                  cursor: 'text',
                  boxSizing: 'border-box',
                }}
              />
              <span style={{ color: '#ffffff' }}>in</span>
              <input
                type="text"
                value={block.content ?? 'items'}
                placeholder=""
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onFocus={handleInputFocusSelect}
                onClick={handleInputClickSelect}
                onChange={(e) => onContentChange(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                style={{
                  width: `${getBlockInputWidth(block.content ?? 'items')}px`,
                  height: '20px',
                  padding: '1px 5px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  outline: 'none',
                  cursor: 'text',
                  boxSizing: 'border-box',
                }}
              />
              <span>:</span>
            </>
          ) : block.type === 'while' ? (
            <>
              <span style={{ color: '#ffffff' }}>while</span>
              <input
                type="text"
                value={block.content ?? ''}
                placeholder=""
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onFocus={handleInputFocusSelect}
                onClick={handleInputClickSelect}
                onChange={(e) => onContentChange(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                style={{
                  width: `${getBlockInputWidth(block.content ?? '')}px`,
                  height: '20px',
                  padding: '1px 5px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  outline: 'none',
                  cursor: 'text',
                  boxSizing: 'border-box',
                }}
              />
              <span>:</span>
            </>
          ) : (
            <>
              <span style={{ color: '#ffffff' }}>def</span>
              <input
                type="text"
                value={block.varName ?? 'my_func'}
                placeholder=""
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onFocus={handleInputFocusSelect}
                onClick={handleInputClickSelect}
                onChange={(e) => onVarNameChange?.(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                style={{
                  width: `${getBlockInputWidth(block.varName ?? 'my_func')}px`,
                  height: '20px',
                  padding: '1px 5px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  outline: 'none',
                  cursor: 'text',
                  boxSizing: 'border-box',
                }}
              />
              <span>(</span>
              <input
                type="text"
                value={block.content || ''}
                placeholder=""
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onFocus={handleInputFocusSelect}
                onClick={handleInputClickSelect}
                onChange={(e) => onContentChange(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                style={{
                  width: `${getBlockInputWidth(block.content || '')}px`,
                  height: '20px',
                  padding: '1px 5px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  outline: 'none',
                  cursor: 'text',
                  boxSizing: 'border-box',
                }}
              />
              <span>):</span>
            </>
          )}
        </div>

        {/* 2) Middle Body: Left Vertical Spine + Indented Cavity Slot */}
        <div style={{ display: 'flex', flexDirection: 'row', minHeight: '22px', position: 'relative', marginTop: '-1px', zIndex: 5 }}>
          <div
            style={{
              width: `${spineW}px`,
              background: theme.bg,
              borderRight: `1px solid ${theme.border}`,
              ...(isNested ? {} : { borderLeft: `1px solid ${theme.border}` }),
              boxSizing: 'border-box',
              flexShrink: 0,
            }}
          />

          <div
            id={`mouth-${block.id}`}
            onDragOver={onDragOver}
            onDrop={onDrop}
            style={{
              flex: 1,
              minWidth: '70px',
              background: 'transparent',
              borderTop: 'none',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              margin: 0,
              gap: 0,
              boxShadow: 'none',
              zIndex: 10,
            }}
          >
            {/* Ceiling Tab inside the mouth */}
            <PuzzleTab isCeiling left={BLOCK_GEOMETRY.TAB_LEFT_INNER} borderColor={theme.border} bg={theme.bg} />

            {innerBlocks.length === 0 ? (
              <div style={{ minHeight: '18px', borderRadius: '0 6px 6px 0' }} />
            ) : (
              innerBlocks.map((child, nIdx) => (
                <CanvasBlockItem
                  key={child.id || nIdx}
                  {...props}
                  block={child}
                  isNested={true}
                  cIdx={nIdx}
                  parentBlockId={block.id}
                  branchId={undefined}
                />
              ))
            )}
          </div>
        </div>

        {/* 3) Bottom Closing Arm */}
        <SvgBottomClosingArm
          theme={theme}
          isDef={block.type === 'def'}
          hasReturn={block.hasReturn}
          returnVal={block.returnVal}
          onToggleDefReturn={(show) => onToggleDefReturn?.(block.id, show)}
          onDefReturnValChange={(val) => onDefReturnValChange?.(block.id, val)}
          hasInnerBlocks={innerBlocks.length > 0}
          tabLeft={tabLeft}
          isNested={isNested}
        />
      </div>
    );
  }

  // ============================================================================
  // 2. MULTI-BRANCH CONDITIONAL E/C-SHAPE (if, elif, else 블록)
  // ============================================================================
  if (isIfBlock) {
    const isTopConnected = isNested ? true : !!block.prevBlockId;
    const tabLeft = isNested ? BLOCK_GEOMETRY.TAB_LEFT_INNER : BLOCK_GEOMETRY.TAB_LEFT_ROOT;
    const spineW = BLOCK_GEOMETRY.SPINE_WIDTH;
    const branches = (block.branches && block.branches.length > 0)
      ? block.branches
      : [
          {
            id: `br-if-${block.id}`,
            kind: 'if' as const,
            condition: block.content || 'False',
            innerBlocks: block.innerBlocks || [],
          },
        ];
    const hasElseBranch = branches.some((br) => br.kind === 'else');

    return (
      <div
        id={`block-${block.id}`}
        className={isNested ? 'nested-c-shape-block nested-if-block' : 'canvas-block multi-branch-if-block'}
        onPointerDown={handlePointerDown}
        onContextMenu={handleContextMenu}
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'flex-start',
          width: 'fit-content',
          minWidth: '100px',
          userSelect: 'none',
          cursor: 'grab',
          fontFamily: 'var(--font-mono)',
          position: isNested ? 'relative' : 'absolute',
          ...(isNested ? { marginTop: cIdx === 0 ? '0px' : '-1px' } : { left: `${block.x}px`, top: `${block.y}px` }),
          filter: isNested ? 'none' : 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.25))',
          zIndex: effectiveZIndex,
          touchAction: isNested ? undefined : 'none',
        }}
      >
        {branches.map((branch, brIdx) => {
          const isFirst = brIdx === 0;
          const branchTheme = theme;
          const condVal = branch.condition !== undefined ? branch.condition : 'False';
          const dynamicCondWidth = getBlockInputWidth(condVal);
          const branchInnerBlocks = branch.innerBlocks || [];

          return (
            <div
              key={branch.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                zIndex: Math.max(3, 20 - brIdx * 2),
              }}
            >
              {isFirst ? (
                /* Top Header Arm */
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    gap: '4px',
                    minHeight: `${BLOCK_GEOMETRY.ARM_HEIGHT}px`,
                    height: `${BLOCK_GEOMETRY.ARM_HEIGHT}px`,
                    padding: '0 10px',
                    borderRadius: isNested ? '0 6px 6px 0' : '6px 6px 6px 0',
                    background: branchTheme.bg,
                    border: `1px solid ${branchTheme.border}`,
                    borderBottom: 'none',
                    ...(isNested ? { borderLeft: 'none' } : {}),
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    position: 'relative',
                    cursor: 'grab',
                    boxSizing: 'border-box',
                  }}
                >
                  <PuzzleNotch left={tabLeft} borderColor={branchTheme.border} isConnected={isTopConnected} />
                  <div
                    style={{
                      position: 'absolute',
                      left: `${spineW}px`,
                      right: '5px',
                      bottom: 0,
                      height: '1px',
                      background: branchTheme.border,
                      pointerEvents: 'none',
                    }}
                  />
                  <span style={{ color: '#ffffff' }}>if</span>
                  <input
                    type="text"
                    value={condVal}
                    placeholder=""
                    onMouseDown={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onFocus={handleInputFocusSelect}
                    onClick={handleInputClickSelect}
                    onChange={(e) => onBranchConditionChange?.(block.id, branch.id, e.target.value)}
                    style={{
                      width: `${dynamicCondWidth}px`,
                      height: '20px',
                      padding: '1px 5px',
                      borderRadius: '6px',
                      background: '#ffffff',
                      color: '#0f172a',
                      border: '1px solid rgba(0, 0, 0, 0.3)',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      textAlign: 'left',
                      outline: 'none',
                      cursor: 'text',
                      boxSizing: 'border-box',
                    }}
                  />
                  <span>:</span>
                </div>
              ) : (
                /* Intermediate Branch Arm (elif / else) */
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '0 6px 6px 0',
                    background: branchTheme.bg,
                    borderTop: `1px solid ${branchTheme.border}`,
                    borderRight: `1px solid ${branchTheme.border}`,
                    borderBottom: 'none',
                    ...(isNested ? {} : { borderLeft: `1px solid ${branchTheme.border}` }),
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    position: 'relative',
                    cursor: 'grab',
                    minHeight: '28px',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Intermediate arm notch matching floor of previous mouth */}
                  <PuzzleNotch
                    left={spineW + BLOCK_GEOMETRY.TAB_LEFT_INNER}
                    borderColor={branchTheme.border}
                    isConnected={(branches[brIdx - 1]?.innerBlocks || []).length > 0}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: `${spineW}px`,
                      right: '5px',
                      bottom: 0,
                      height: '1px',
                      background: branchTheme.border,
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ color: '#ffffff' }}>{branch.kind}</span>
                    {branch.kind !== 'else' ? (
                      <>
                        <input
                          type="text"
                          value={condVal}
                          placeholder=""
                          onMouseDown={(e) => e.stopPropagation()}
                          onPointerDown={(e) => e.stopPropagation()}
                          onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          onFocus={handleInputFocusSelect}
                          onClick={handleInputClickSelect}
                          onChange={(e) => onBranchConditionChange?.(block.id, branch.id, e.target.value)}
                          style={{
                            width: `${dynamicCondWidth}px`,
                            height: '20px',
                            padding: '1px 5px',
                            borderRadius: '6px',
                            background: '#ffffff',
                            color: '#0f172a',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            fontWeight: 800,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            textAlign: 'left',
                            outline: 'none',
                            cursor: 'text',
                            boxSizing: 'border-box',
                          }}
                        />
                        <span>:</span>
                      </>
                    ) : (
                      <span>:</span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginLeft: 'auto' }}>
                    {branch.kind !== 'if' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveBranch?.(block.id, branch.id);
                        }}
                        title={`${branch.kind} 가지 삭제`}
                        style={{
                          background: 'rgba(0, 0, 0, 0.35)',
                          border: 'none',
                          color: '#ffffff',
                          borderRadius: '50%',
                          width: '14px',
                          height: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '10px',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Body: Left Vertical Spine + Indented Cavity Slot */}
              <div style={{ display: 'flex', flexDirection: 'row', minHeight: '22px', position: 'relative', marginTop: '-1px', zIndex: 5 }}>
                <div
                  style={{
                    width: `${spineW}px`,
                    background: branchTheme.bg,
                    borderRight: `1px solid ${branchTheme.border}`,
                    ...(isNested ? {} : { borderLeft: `1px solid ${branchTheme.border}` }),
                    boxSizing: 'border-box',
                    flexShrink: 0,
                  }}
                />

                <div
                  id={`mouth-${block.id}-${branch.id}`}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  style={{
                    flex: 1,
                    minWidth: '70px',
                    background: 'transparent',
                    borderTop: 'none',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                    margin: 0,
                    gap: 0,
                    boxShadow: 'none',
                    zIndex: 10,
                  }}
                >
                  <PuzzleTab isCeiling left={BLOCK_GEOMETRY.TAB_LEFT_INNER} borderColor={branchTheme.border} bg={branchTheme.bg} />

                  {branchInnerBlocks.length === 0 ? (
                    <div style={{ minHeight: '18px', borderRadius: '0 6px 6px 0' }} />
                  ) : (
                    branchInnerBlocks.map((child, nIdx) => (
                      <CanvasBlockItem
                        key={child.id || nIdx}
                        {...props}
                        block={child}
                        isNested={true}
                        cIdx={nIdx}
                        parentBlockId={block.id}
                        branchId={branch.id}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom Closing Arm */}
        <SvgBottomClosingArm
          theme={theme}
          hasInnerBlocks={(branches[branches.length - 1]?.innerBlocks || []).length > 0}
          tabLeft={tabLeft}
          isNested={isNested}
        />
      </div>
    );
  }

  // ============================================================================
  // 3. HORIZONTAL METHOD BLOCK (.split(), .append(), etc.)
  // ============================================================================
  if (block.type === 'method') {
    // Find target block this method is attached to (on its left)
    const targetBlockId = block.attachedToBlockId || parentBlockId;
    const findBlockInCanvasTree = (list?: CanvasBlock[], tId?: string): CanvasBlock | null => {
      if (!list || !tId) return null;
      for (const b of list) {
        if (b.id === tId) return b;
        if (b.argBlock) {
          const found = findBlockInCanvasTree([b.argBlock], tId);
          if (found) return found;
        }
        if (b.innerBlocks) {
          const found = findBlockInCanvasTree(b.innerBlocks, tId);
          if (found) return found;
        }
        if (b.branches) {
          for (const br of b.branches) {
            const found = findBlockInCanvasTree(br.innerBlocks, tId);
            if (found) return found;
          }
        }
      }
      return null;
    };
    const targetBlock = findBlockInCanvasTree(canvasBlocks, targetBlockId);

    // Filter method categories based on the target block's data type
    let filteredCategories = methodCategories || [];
    if (targetBlock) {
      if (targetBlock.type === 'input' || targetBlock.type === 'str') {
        filteredCategories = (methodCategories || []).filter((c) => c.category.includes('문자열') || c.category.includes('String'));
      } else if (targetBlock.type === 'list') {
        filteredCategories = (methodCategories || []).filter((c) => c.category.includes('리스트') || c.category.includes('List'));
      } else if (targetBlock.type === 'dict') {
        filteredCategories = (methodCategories || []).filter((c) => c.category.includes('딕셔너리') || c.category.includes('Dictionary'));
      } else if (targetBlock.type === 'set') {
        filteredCategories = (methodCategories || []).filter((c) => c.category.includes('세트') || c.category.includes('Set'));
      } else if (targetBlock.type === 'open') {
        filteredCategories = (methodCategories || []).filter((c) => c.category.includes('파일') || c.category.includes('File'));
      } else if (targetBlock.type === 'method') {
        const prevM = targetBlock.methodName;
        if (prevM === 'split' || prevM === 'splitlines') {
          filteredCategories = (methodCategories || []).filter((c) => c.category.includes('리스트') || c.category.includes('List'));
        } else if (['strip', 'lstrip', 'rstrip', 'join', 'upper', 'lower', 'replace', 'capitalize', 'title', 'swapcase', 'zfill', 'format'].includes(prevM || '')) {
          filteredCategories = (methodCategories || []).filter((c) => c.category.includes('문자열') || c.category.includes('String'));
        }
      }
    }

    return (
      <div
        id={`block-${block.id}`}
        className="canvas-block method-block"
        onPointerDown={handlePointerDown}
        onContextMenu={handleContextMenu}
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={{
          position: (isNested || isSlotArg) ? 'relative' : 'absolute',
          ...(isSlotArg
            ? { margin: '0 1px' }
            : isNested
            ? { marginTop: cIdx === 0 ? '0px' : '-1px' }
            : { left: `${block.x}px`, top: `${block.y}px` }),
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          height: isSlotArg ? '24px' : `${BLOCK_GEOMETRY.ARM_HEIGHT}px`,
          padding: '0 8px 0 10px',
          boxSizing: 'border-box',
          background: theme.bg,
          boxShadow: (isNested || isSlotArg) ? 'none' : `0 2px 0 ${theme.shadow}, 0 4px 10px rgba(0, 0, 0, 0.25)`,
          border: `1px solid ${theme.border}`,
          borderRadius: isSlotArg ? '0 6px 6px 0' : '6px',
          color: '#ffffff',
          fontWeight: 800,
          fontSize: isSlotArg ? '0.74rem' : '0.80rem',
          fontFamily: 'var(--font-mono)',
          cursor: 'grab',
          zIndex: effectiveZIndex,
          userSelect: 'none',
          touchAction: (isNested || isSlotArg) ? undefined : 'none',
        }}
      >
        <HorizontalPuzzleTab borderColor={theme.border} bg={theme.bg} />
        <HorizontalPuzzleNotch borderColor={theme.border} isConnected={!!block.attachedMethodId} />

        <span style={{ fontSize: '0.95rem', fontWeight: 900, marginRight: '-1px' }}>.</span>

        <select
          value={block.methodName || 'method'}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          onChange={(e) => onMethodNameChange?.(block.id, e.target.value)}
          style={{
            width: `${getMethodSelectWidth ? getMethodSelectWidth(block.methodName || 'method') : 88}px`,
            height: '20px',
            padding: '0 16px 0 6px',
            borderRadius: '5px',
            background: '#ffffff',
            color: '#0f172a',
            border: '1px solid rgba(0, 0, 0, 0.25)',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            outline: 'none',
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          {(!block.methodName || block.methodName === 'method') && (
            <option value="method">method</option>
          )}
          {filteredCategories.map((cat) => (
            <optgroup key={cat.category} label={cat.category}>
              {cat.methods.map((m) => (
                <option key={m.name} value={m.name} title={m.label}>
                  {m.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>

        <span>(</span>
        <input
          type="text"
          value={block.content || ''}
          placeholder=""
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onFocus={handleInputFocusSelect}
          onClick={handleInputClickSelect}
          onChange={(e) => onContentChange(e.target.value, block.id, parentBlockId, cIdx, branchId)}
          style={{
            width: `${getBlockInputWidth(block.content)}px`,
            height: '20px',
            padding: '1px 5px',
            borderRadius: '5px',
            background: '#ffffff',
            color: '#0f172a',
            border: '1px solid rgba(0, 0, 0, 0.25)',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            textAlign: 'left',
            outline: 'none',
            cursor: 'text',
            boxSizing: 'border-box',
          }}
        />
        <span>)</span>
      </div>
    );
  }

  // ============================================================================
  // 4. STANDARD STATEMENT BLOCKS (print, input, len, int, variable, break, continue, etc.)
  // ============================================================================
  const isTopConnected = (isNested || isSlotArg) ? true : !!block.prevBlockId;
  const tabLeft = isNested ? BLOCK_GEOMETRY.TAB_LEFT_INNER : BLOCK_GEOMETRY.TAB_LEFT_ROOT;

  const renderArgSlot = (funcType: string, isVarValue: boolean = false) => {
    if (block.argBlock) {
      const chainedMethods: CanvasBlock[] = [];
      if (canvasBlocks) {
        let currMId = block.argBlock.attachedMethodId;
        const visited = new Set<string>();
        while (currMId && !visited.has(currMId)) {
          visited.add(currMId);
          const m = canvasBlocks.find((cb) => cb.id === currMId);
          if (!m) break;
          chainedMethods.push(m);
          currMId = m.attachedMethodId;
        }
      }

      return (
        <div
          id={`arg-slot-${block.id}`}
          className="arg-slot-filled"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px',
            margin: '0 2px',
          }}
        >
          <CanvasBlockItem
            block={block.argBlock}
            isSlotArg={true}
            parentBlockId={block.id}
            isNested={false}
            draggedChainIds={draggedChainIds}
            activeInputHelp={activeInputHelp}
            canvasBlocks={canvasBlocks}
            onBlockPointerDown={onBlockPointerDown}
            onInnerBlockPointerDown={onInnerBlockPointerDown}
            onArgBlockPointerDown={onArgBlockPointerDown}
            onContextMenu={onContextMenu}
            onContentChange={onContentChange}
            onVarNameChange={onVarNameChange}
            onMethodNameChange={onMethodNameChange}
            onBlockTypeChange={onBlockTypeChange}
            methodCategories={methodCategories}
            getMethodSelectWidth={getMethodSelectWidth}
          />
          {chainedMethods.map((m) => (
            <CanvasBlockItem
              key={m.id}
              block={m}
              isSlotArg={true}
              parentBlockId={m.attachedToBlockId || block.argBlock!.id}
              isNested={false}
              draggedChainIds={draggedChainIds}
              activeInputHelp={activeInputHelp}
              canvasBlocks={canvasBlocks}
              onBlockPointerDown={onBlockPointerDown}
              onInnerBlockPointerDown={onInnerBlockPointerDown}
              onArgBlockPointerDown={onArgBlockPointerDown}
              onContextMenu={onContextMenu}
              onContentChange={onContentChange}
              onVarNameChange={onVarNameChange}
              onMethodNameChange={onMethodNameChange}
              onBlockTypeChange={onBlockTypeChange}
              methodCategories={methodCategories}
              getMethodSelectWidth={getMethodSelectWidth}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        id={`arg-slot-${block.id}`}
        style={{
          position: 'relative',
          display: 'inline-flex',
          borderRadius: '6px',
        }}
      >
        <input
          type="text"
          value={block.content || ''}
          placeholder=""
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onFocus={handleInputFocusSelect}
          onClick={handleInputClickSelect}
          onChange={(e) => onContentChange(e.target.value, block.id, parentBlockId, cIdx, branchId)}
          style={{
            width: `${getBlockInputWidth(block.content)}px`,
            height: '20px',
            padding: '1px 5px',
            borderRadius: '6px',
            background: isArgSlotTarget ? '#fef9c3' : '#ffffff',
            color: '#0f172a',
            border: isArgSlotTarget ? '2px solid #eab308' : '1px solid rgba(0,0,0,0.2)',
            boxShadow: isArgSlotTarget ? '0 0 0 2.5px rgba(250, 204, 21, 0.5), 0 0 10px rgba(234, 179, 8, 0.65)' : 'none',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.76rem',
            textAlign: 'left',
            outline: 'none',
            cursor: 'text',
            boxSizing: 'border-box',
            transition: 'border 0.15s, box-shadow 0.15s, background 0.15s',
          }}
        />
        {!isVarValue && renderSpeechBubble?.(block.id, funcType)}
      </div>
    );
  };

  return (
    <div
      id={`block-${block.id}`}
      className={isSlotArg ? 'slot-arg-block' : isNested ? 'nested-statement-block' : 'canvas-block standard-statement-block'}
      onPointerDown={handlePointerDown}
      onContextMenu={handleContextMenu}
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        minHeight: isSlotArg ? '24px' : `${BLOCK_GEOMETRY.STATEMENT_HEIGHT}px`,
        height: isSlotArg ? '24px' : `${BLOCK_GEOMETRY.STATEMENT_HEIGHT}px`,
        padding: isSlotArg ? '0 6px' : '0 8px',
        boxSizing: 'border-box',
        borderRadius: isSlotArg ? '6px' : isNested ? '0 6px 0 0' : '6px',
        background: theme.bg,
        border: `1px solid ${theme.border}`,
        ...(isNested && !isSlotArg ? { borderLeft: 'none' } : {}),
        boxShadow: (isNested || isSlotArg) ? 'none' : `0 1.5px 0 ${theme.shadow}`,
        color: '#ffffff',
        fontWeight: 800,
        fontSize: isSlotArg ? '0.74rem' : '0.78rem',
        fontFamily: 'var(--font-mono)',
        position: (isNested || isSlotArg) ? 'relative' : 'absolute',
        width: 'fit-content',
        userSelect: 'none',
        cursor: 'grab',
        ...(isSlotArg
          ? { margin: '0 2px' }
          : isNested
          ? { marginTop: cIdx === 0 ? '0px' : '-1px' }
          : { left: `${block.x}px`, top: `${block.y}px` }),
        zIndex: effectiveZIndex,
        touchAction: (isNested || isSlotArg) ? undefined : 'none',
      }}
    >
      {/* Top Notch: null if connected or inside slot */}
      {!isSlotArg && (
        <PuzzleNotch left={tabLeft} borderColor={theme.border} isConnected={isTopConnected} />
      )}

      {/* Bottom Puzzle Tab: slots cleanly into next block (hidden inside slot) */}
      {!isSlotArg && (
        <PuzzleTab left={tabLeft} borderColor={theme.border} bg={theme.bg} zIndex={25} />
      )}

      {/* Horizontal notch for method chaining on functions, variables, collections */}
      {(['print', 'input', 'len', 'int', 'float', 'str', 'type', 'round', 'abs', 'sum', 'min', 'max', 'open'].includes(block.type) ||
        block.type === 'variable' ||
        block.type === 'list' ||
        block.type === 'tuple' ||
        block.type === 'set' ||
        block.type === 'dict') && (
        <HorizontalPuzzleNotch borderColor={theme.border} isConnected={!!block.attachedMethodId} />
      )}

      {/* Block Body Content */}
      {block.type === 'print' || block.type === 'input' ? (
        <>
          <span>{block.type} (</span>
          {renderArgSlot(block.type)}
          <span>)</span>
        </>
      ) : ['int', 'float', 'str', 'type'].includes(block.type) ? (
        <>
          <select
            value={block.type}
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onChange={(e) => onBlockTypeChange?.(block.id, e.target.value as BlockType)}
            style={{
              width: `${Math.max(54, block.type.length * 8.5 + 26)}px`,
              height: '20px',
              padding: '0 16px 0 6px',
              borderRadius: '5px',
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid rgba(0, 0, 0, 0.25)',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              outline: 'none',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            <option value="int">int</option>
            <option value="float">float</option>
            <option value="str">str</option>
            <option value="type">type</option>
          </select>
          <span>(</span>
          {renderArgSlot(block.type)}
          <span>)</span>
        </>
      ) : ['len', 'round', 'abs', 'sum', 'min', 'max'].includes(block.type) ? (
        <>
          <select
            value={block.type}
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onChange={(e) => onBlockTypeChange?.(block.id, e.target.value as BlockType)}
            style={{
              width: `${Math.max(54, block.type.length * 8.5 + 26)}px`,
              height: '20px',
              padding: '0 16px 0 6px',
              borderRadius: '5px',
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid rgba(0, 0, 0, 0.25)',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              outline: 'none',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            <option value="len">len</option>
            <option value="round">round</option>
            <option value="abs">abs</option>
            <option value="sum">sum</option>
            <option value="min">min</option>
            <option value="max">max</option>
          </select>
          <span>(</span>
          {renderArgSlot(block.type)}
          <span>)</span>
        </>
      ) : block.type === 'open' ? (
        <>
          <span>open (</span>
          {renderArgSlot('open')}
          <span>)</span>
        </>
      ) : block.type === 'variable' ? (
        <>
          <input
            type="text"
            value={block.varName || 'x'}
            placeholder=""
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onFocus={handleInputFocusSelect}
            onClick={handleInputClickSelect}
            onChange={(e) => onVarNameChange?.(e.target.value, block.id, parentBlockId, cIdx, branchId)}
            style={{
              width: `${getBlockInputWidth(block.varName || 'x')}px`,
              height: '20px',
              padding: '1px 5px',
              borderRadius: '6px',
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid rgba(0,0,0,0.2)',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              textAlign: 'left',
              outline: 'none',
              cursor: 'text',
              boxSizing: 'border-box',
            }}
          />
          <span>=</span>
          {renderArgSlot('variable', true)}
        </>
      ) : block.type === 'return' ? (
        <>
          <span>return</span>
          <input
            type="text"
            value={block.content || ''}
            placeholder=""
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onFocus={handleInputFocusSelect}
            onClick={handleInputClickSelect}
            onChange={(e) => onContentChange(e.target.value, block.id, parentBlockId, cIdx, branchId)}
            style={{
              width: `${getBlockInputWidth(block.content)}px`,
              height: '20px',
              padding: '1px 5px',
              borderRadius: '6px',
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid rgba(0,0,0,0.2)',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              textAlign: 'left',
              outline: 'none',
              cursor: 'text',
              boxSizing: 'border-box',
            }}
          />
        </>
      ) : block.type === 'break' || block.type === 'continue' ? (
        <span style={{ color: '#ffffff' }}>{block.type}</span>
      ) : (
        <>
          {block.varName && (
            <>
              <input
                type="text"
                value={block.varName}
                placeholder=""
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onFocus={handleInputFocusSelect}
                onClick={handleInputClickSelect}
                onChange={(e) => onVarNameChange?.(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                style={{
                  width: `${getBlockInputWidth(block.varName)}px`,
                  height: '20px',
                  padding: '1px 5px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(0,0,0,0.2)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  textAlign: 'left',
                  outline: 'none',
                  cursor: 'text',
                  boxSizing: 'border-box',
                }}
              />
              <span>=</span>
            </>
          )}
          {block.type === 'dict' ? (
            <>
              {block.dictPairs && block.dictPairs.length > 0 ? (
                <>
                  <span>&#123;</span>
                  {block.dictPairs.map((pair, idx) => (
                    <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                      {idx > 0 && <span style={{ fontWeight: 800, marginRight: '2px' }}>,</span>}
                      <input
                        type="text"
                        value={pair.key}
                        placeholder=""
                        onMouseDown={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                        onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onFocus={handleInputFocusSelect}
                        onClick={handleInputClickSelect}
                        onChange={(e) => onDictKeyChange?.(block.id, idx, e.target.value)}
                        style={{
                          width: `${getBlockInputWidth(pair.key)}px`,
                          height: '20px',
                          padding: '1px 5px',
                          borderRadius: '5px',
                          background: '#ffffff',
                          color: '#0f172a',
                          border: '1px solid rgba(0, 0, 0, 0.3)',
                          fontWeight: 800,
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          textAlign: 'left',
                          outline: 'none',
                          cursor: 'text',
                          boxSizing: 'border-box',
                        }}
                      />
                      <span>:</span>
                      <input
                        type="text"
                        value={pair.value}
                        placeholder=""
                        onMouseDown={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                        onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onFocus={handleInputFocusSelect}
                        onClick={handleInputClickSelect}
                        onChange={(e) => onDictValChange?.(block.id, idx, e.target.value)}
                        style={{
                          width: `${getBlockInputWidth(pair.value)}px`,
                          height: '20px',
                          padding: '1px 5px',
                          borderRadius: '5px',
                          background: '#ffffff',
                          color: '#0f172a',
                          border: '1px solid rgba(0, 0, 0, 0.3)',
                          fontWeight: 800,
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          textAlign: 'left',
                          outline: 'none',
                          cursor: 'text',
                          boxSizing: 'border-box',
                        }}
                      />
                      {block.dictPairs && block.dictPairs.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveDictPair?.(block.id, idx);
                          }}
                          title="쌍 제거"
                          style={{
                            background: 'rgba(0, 0, 0, 0.25)',
                            border: 'none',
                            color: '#ffffff',
                            borderRadius: '50%',
                            width: '13px',
                            height: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            cursor: 'pointer',
                            padding: 0,
                          }}
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddDictPair?.(block.id);
                    }}
                    title="키:값 추가"
                    style={{
                      marginLeft: '3px',
                      background: 'rgba(255, 255, 255, 0.25)',
                      border: '1px dashed rgba(255, 255, 255, 0.6)',
                      color: '#ffffff',
                      borderRadius: '4px',
                      padding: '1px 5px',
                      height: '18px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontWeight: 800,
                      fontSize: '0.74rem',
                    }}
                  >
                    +
                  </button>
                  <span>&#125;</span>
                </>
              ) : (
                <>
                  <span>&#123;</span>
                  <input
                    type="text"
                    value={block.content || ''}
                    placeholder=""
                    onMouseDown={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onFocus={handleInputFocusSelect}
                    onClick={handleInputClickSelect}
                    onChange={(e) => onContentChange(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                    style={{
                      width: `${getBlockInputWidth(block.content)}px`,
                      height: '20px',
                      padding: '1px 5px',
                      borderRadius: '6px',
                      background: '#ffffff',
                      color: '#0f172a',
                      border: '1px solid rgba(0,0,0,0.2)',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      textAlign: 'left',
                      outline: 'none',
                      cursor: 'text',
                      boxSizing: 'border-box',
                    }}
                  />
                  <span>&#125;</span>
                </>
              )}
            </>
          ) : (block.type === 'list' || block.type === 'tuple' || block.type === 'set') && block.items && block.items.length > 0 ? (
            <>
              <span>{block.type === 'list' ? '[' : block.type === 'tuple' ? '(' : '{'}</span>
              {block.items.map((it, idx) => (
                <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                  {idx > 0 && <span style={{ fontWeight: 800, marginRight: '2px' }}>,</span>}
                  <input
                    type="text"
                    value={it}
                    placeholder=""
                    onMouseDown={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onFocus={handleInputFocusSelect}
                    onClick={handleInputClickSelect}
                    onChange={(e) => onItemChange?.(block.id, idx, e.target.value)}
                    style={{
                      width: `${getBlockInputWidth(it)}px`,
                      height: '20px',
                      padding: '1px 5px',
                      borderRadius: '6px',
                      background: '#ffffff',
                      color: '#0f172a',
                      border: '1px solid rgba(0, 0, 0, 0.3)',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      textAlign: 'left',
                      outline: 'none',
                      cursor: 'text',
                      boxSizing: 'border-box',
                    }}
                  />
                  {block.items && block.items.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveItem?.(block.id, idx);
                      }}
                      title="항목 제거"
                      style={{
                        background: 'rgba(0, 0, 0, 0.25)',
                        border: 'none',
                        color: '#ffffff',
                        borderRadius: '50%',
                        width: '13px',
                        height: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddItem?.(block.id);
                }}
                title="값 추가"
                style={{
                  marginLeft: '3px',
                  background: 'rgba(255, 255, 255, 0.25)',
                  border: '1px dashed rgba(255, 255, 255, 0.6)',
                  color: '#ffffff',
                  borderRadius: '4px',
                  padding: '1px 5px',
                  height: '18px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '0.74rem',
                }}
              >
                +
              </button>
              <span>{block.type === 'list' ? ']' : block.type === 'tuple' ? ')' : '}'}</span>
            </>
          ) : (
            <>
              <span>{block.type === 'list' ? '[' : block.type === 'tuple' ? '(' : block.type === 'set' ? '{' : ''}</span>
              <input
                type="text"
                value={block.content || ''}
                placeholder=""
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onFocus={handleInputFocusSelect}
                onClick={handleInputClickSelect}
                onChange={(e) => onContentChange(e.target.value, block.id, parentBlockId, cIdx, branchId)}
                style={{
                  width: `${getBlockInputWidth(block.content)}px`,
                  height: '20px',
                  padding: '1px 5px',
                  borderRadius: '6px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(0,0,0,0.2)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  textAlign: 'left',
                  outline: 'none',
                  cursor: 'text',
                  boxSizing: 'border-box',
                }}
              />
              <span>{block.type === 'list' ? ']' : block.type === 'tuple' ? ')' : block.type === 'set' ? '}' : ''}</span>
            </>
          )}
        </>
      )}
    </div>
  );
};
