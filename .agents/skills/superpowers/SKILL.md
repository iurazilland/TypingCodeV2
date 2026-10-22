---
name: superpowers
description: >-
  Disciplined software engineering methodology: Brainstorming -> Specification ->
  Implementation Plan -> Test-Driven Execution -> Verification.
  Activate when starting a new feature, complex refactoring, multi-step tasks,
  or debugging tricky bugs.
---

# 🦸 Superpowers: Disciplined Engineering Harness

> **Core Philosophy**: "Structure beats willpower. Never jump straight into code without clear specifications, verifiable plans, and quality gates."

Superpowers enforces a structured, professional software engineering process to prevent hallucinations, missed edge cases, and half-baked implementations.

---

## 1. The 4-Phase Engineering Workflow

### Phase 1: Brainstorming & Scope Definition
- Understand the user's root goal, not just the surface request.
- Identify edge cases, architectural trade-offs, and failure modes.
- Align on the approach before generating code.

### Phase 2: Implementation Planning (Bite-sized Chunks)
- Break complex goals into clear, sequenced, verifiable steps.
- For each step, state:
  1. What file(s) will be created or edited.
  2. The exact mechanism or logic.
  3. How this step will be validated (build, test, or visual inspection).

### Phase 3: Disciplined Execution
- Execute steps one by one.
- Verify each step before moving to the next.
- If an unexpected error or blocker arises, **STOP immediately**, diagnose the root cause, and re-plan rather than guessing or hacking around it.

### Phase 4: Verification & Acceptance
- Run linters, type checks (`tsc`), and test suites or dev servers.
- Inspect output/logs to guarantee that acceptance criteria are met.

---

## 2. Decision Hierarchy
1. **User's Explicit Directives**: Always take precedence.
2. **Superpowers Rules**: Plan first, verify continuously, investigate root cause.
3. **Default Behavior**: Fallback only when no specific instructions exist.
