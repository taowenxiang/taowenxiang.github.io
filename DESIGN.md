---
name: Wenxiang Tao Portfolio
description: An open lab archive for research, engineering work, and verifiable demos.
colors:
  research-blue: "#2563EB"
  research-blue-deep: "#1D4ED8"
  signal-cyan: "#06B6D4"
  field: "#F0F7FF"
  surface: "#FFFFFF"
  ink: "#0F172A"
  body: "#475569"
  boundary: "#BFDBFE"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Space Grotesk, ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.research-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.research-blue-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
  project-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: Wenxiang Tao Portfolio

## Overview

**Creative North Star: "The Open Lab Archive"**

The portfolio should feel like entering a working research space whose notes have been carefully prepared for visitors. It is bright, structured, and technically credible, with evidence close to every claim. Blue supplies continuity and trust; cyan is a rare signal for live or interactive work rather than a decorative flourish.

The system rejects generic resume-card repetition, loud AI marketing treatments, dense dashboard chrome, and interactions that compete with the work. Layout and writing carry personality. Motion only clarifies entry, navigation, and state.

**Key Characteristics:**
- Evidence-led project narratives with visible source and demo paths.
- A cool, bright field with solid surfaces and crisp blue boundaries.
- Strong typographic hierarchy, concise prose, and progressively disclosed depth.
- Flat-by-default components with unmistakable focus and interaction states.
- Responsive behavior that preserves reading order and keyboard access.

## Colors

The palette reads as a clean research environment: a pale blue field, dark ink, and a saturated blue used deliberately for navigation and action.

### Primary
- **Research Blue:** The primary action, active navigation, link, and focus color.
- **Deep Research Blue:** Hover and pressed states where stronger contrast is required.

### Secondary
- **Signal Cyan:** Reserved for live-demo status, small data marks, and one-off emphasis. It never becomes text decoration.

### Neutral
- **Open Field:** The page background and broad quiet areas.
- **Archive Surface:** Solid content surfaces, controls, and reading regions.
- **Archive Ink:** Headlines and high-priority text.
- **Working Note:** Body copy and metadata.
- **Blueprint Boundary:** Dividers and component outlines.

**The Signal Rule.** Signal Cyan appears only when it communicates an interactive or live state. If it is merely decorative, remove it.

**The Solid Type Rule.** Text uses one solid color. Gradient-filled type is prohibited.

## Typography

**Display Font:** Space Grotesk (with a system sans fallback)
**Body Font:** Space Grotesk (with a system sans fallback)
**Label/Mono Font:** JetBrains Mono (with a system monospace fallback)

**Character:** The primary family is geometric but approachable, supporting both research credibility and personal voice. Monospace is limited to genuine technical metadata such as languages, models, routes, and build details.

### Hierarchy
- **Display** (700, fluid 3–6rem, 0.96): Name and one decisive project headline per page.
- **Headline** (650, fluid 2–3.5rem, 1.08): Section and case-study titles.
- **Title** (600, 1.125–1.5rem, 1.25): Project, role, and institution names.
- **Body** (400, 1rem, 1.65): Narrative copy capped at 70 characters per line.
- **Label** (500, 0.75rem, normal tracking): Technical tags and compact metadata, never paragraph copy.

**The One Reading Voice Rule.** Body copy remains sans-serif and sentence case. Monospace never stands in for personality.

## Elevation

The archive is flat by default. Depth comes from solid surface contrast, boundaries, and spacing. A compact shadow may appear only when a floating navigation layer or interactive surface must visually separate during use.

### Shadow Vocabulary
- **Navigation Lift** (`0 4px 8px rgba(15, 23, 42, 0.08)`): Applied only after the fixed navigation leaves the hero origin.
- **Interaction Lift** (`0 3px 8px rgba(37, 99, 235, 0.12)`): Optional hover feedback on one featured interactive surface, never on every card.

**The Flat-at-Rest Rule.** Static content has no decorative shadow. If every section appears elevated, the hierarchy has failed.

## Components

### Buttons
- **Shape:** Precise rounded rectangle (8px), never an oversized capsule unless the control is a compact tag.
- **Primary:** Research Blue with white text and 12px by 18px padding.
- **Hover / Focus:** Deep Research Blue on hover; a clearly separated two-pixel focus outline on keyboard focus.
- **Secondary:** Solid white or transparent with Archive Ink text and a Blueprint Boundary outline.

### Chips
- **Style:** Small technical metadata with a solid pale-blue fill, Archive Ink text, and an 8px radius.
- **State:** Tags remain informational. Interactive filters must gain a selected fill and an explicit accessible state.

### Cards / Containers
- **Corner Style:** Controlled 12px corners.
- **Background:** Archive Surface on Open Field.
- **Shadow Strategy:** None at rest; use boundary or spacing, not both a broad shadow and an outline.
- **Border:** One-pixel Blueprint Boundary only when the grouping would otherwise be ambiguous.
- **Internal Padding:** 16px on mobile, 24px on larger screens.

### Navigation
- **Style:** Compact and quiet, with sentence-case labels and one solid active marker.
- **States:** Research Blue indicates the current section; every link has a visible keyboard focus state.
- **Mobile:** A single menu button controls a labelled disclosure without losing focus or page position.

### Project Evidence Block
- **Style:** The portfolio exposes one canonical demo-directory entry; individual live demos, source links, stacks, and constraints are organized on that directory surface.
- **Behavior:** The primary evidence link uses the explicit label "Browse project demos" and points to `demo.wenxiangtao.com`; direct project routes remain available for bookmarks and sharing.

## Do's and Don'ts

### Do:
- **Do** place a live demo, source link, publication, or measurable outcome near each significant project claim.
- **Do** use Research Blue for actions and Signal Cyan only for live-state communication.
- **Do** preserve a 70-character reading measure and a 4.5:1 minimum contrast ratio for body text.
- **Do** provide loading, empty, error, disconnected, and credential-required states for interactive demos.
- **Do** make every interaction keyboard accessible and honor reduced-motion preferences.

### Don't:
- **Don't** use generic resume templates that reduce every experience to an identical card.
- **Don't** use loud AI product marketing built from gradient text, glass panels, vague claims, and excessive motion.
- **Don't** make the portfolio resemble a dense internal engineering dashboard.
- **Don't** add decorative interactions that obscure project evidence or slow down navigation.
- **Don't** pair a one-pixel border with a broad diffuse shadow on the same surface.
- **Don't** store visitor API keys in local storage, analytics, logs, or application databases.
