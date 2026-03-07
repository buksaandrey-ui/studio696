# DESIGN SPECIFICATION: Studio 696 (Apple Style)

## 1. Brand & Visual Tokens
**Colors (Strict Apple Pallet):**
- `--color-white`: `#FFFFFF`
- `--color-light-gray`: `#F5F5F7` (Background blocks)
- `--color-text-primary`: `#1D1D1F` (Strong primary text)
- `--color-text-secondary`: `#6E6E73` (Subtle secondary text)
- `--color-black`: `#000000` (Strong CTA button background)

**Typography:**
- **Stack**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Scale**:
  - H1: Giant, clean, tight tracking (e.g. `text-5xl` to `text-6xl`, `tracking-tight`).
  - Subhead: Compact, readable (`text-xl` or `text-2xl`, balanced line-height).

**Shape Language:**
- `rounded-2xl` (16px) for cards.
- `rounded-xl` (12px) for buttons.
- `rounded-3xl` (20-24px) for large media containers.

**Shadows:**
- Default: None (clean flat look on light gray).
- Hover CTA: `box-shadow: 0 8px 24px rgba(0,0,0,0.08)`.

**Icons:**
- Line-icons only, 1.5px stroke, rounded caps. No filled blobs.

## 2. Layout Grid & Breakpoints
Mobile-first approach:
- **base (0–767px)**: 4 cols, margin `16px`, gutter `8px`.
- **md (768–1023px)**: 8 cols, margin `24px`, gutter `12px`.
- **lg / xl (1024px+)**: 12 cols, margin `80px` (max-width `1200px`), gutter `20px`.

## 3. Component Specs
- **Sticky Nav**: `height: 56px` (base), `64px` (md), `72px` (lg). Glassmorphism backdrop blur `backdrop-blur-md`, white semi-transparent background (`bg-white/80`). Logo + CTA.
- **Hero Section**: H1 + Subhead + 2 CTAs (TG/WA) + Hero render product image.
- **Highlights Row**: 6 print categories cards (Icon + Title + 1 line description).
- **Product Lineup**: 3 SKU cards + "Select Volume" label + "Fast Order" button.
- **Gallery**: Grid `2xN` (mobile), `3xN` (desktop), lazy-load.
- **FAQ Accordion**: Height animation (using grid `1fr` transition or JS), tracking `prefers-reduced-motion`.
- **Footer**: Logo + Slogan "Подарки с эмоциями!" + Legal text.

## 4. Animation Specs
- **Scroll Reveal**: `opacity 0 -> 1` + `translateY 12px -> 0`, duration `600ms`, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Hover Button**: `translateY -1px` + `shadow`.
- **Prefers Reduced Motion**: Disable translations, use simple fade-in. No heavy parallax.
