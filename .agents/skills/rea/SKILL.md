---
name: rea
description: >-
  Reverse Engineer Anything (REA): Systematic, evidence-based code and architecture
  deconstruction. Analyzes dependencies, data flows, APIs, and binary/bundle behavior
  without guessing. Activate when inspecting existing codebases, understanding legacy
  logic, or tracing how external components work.
---

# 🔍 REA: Reverse Engineer Anything Harness

> **Core Philosophy**: "Never guess how a system works. Trace the exact evidence from entry point to execution."

REA enables deep, evidence-based technical inspection and deconstruction of codebases, API payloads, and runtime architectures.

---

## 1. Investigation Protocol

1. **Locate Real Entry Points**:
   - Trace from the trigger (UI event, API route, CLI invocation, or lifecycle hook) down to the underlying execution path.
2. **Data-Flow Triangulation**:
   - Follow the data: `Input Source` -> `Transformation / State Mutation` -> `Storage / Network` -> `Output / UI Render`.
3. **Evidence-Based Output**:
   - Always cite exact file paths and line ranges (e.g., `[file.ts#L10-L25]`).
   - Separate **Hard Facts (Verified in Code)** from **Inferences / Assumptions**.
4. **Architectural Extraction**:
   - When asked to replicate or analyze a feature, extract its core schema, contract, and state model into a clean, minimal specification before writing new code.
