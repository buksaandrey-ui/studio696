# Design System Specification - Studio 696

Based on "untold.site" visual analysis and user constraints.

## 1. Color Palette (CSS Variables)
- **Background**: `#F9F8F6` (Warm, organic off-white/beige, typical of editorial styles)
- **Text Primary**: `#121212` (Soft near-black for high contrast without harshness)
- **Text Secondary/Muted**: `#5A5A5A` (Medium gray for supporting text)
- **Accent Primary**: `#FF4500` (Vibrant Orange - "Orange Red" per untold style)
- **Accent Secondary**: `#FF6B35` (Softer orange for hover states)
- **Border**: `#E0E0E0` (Light gray for thin separators)

## 2. Typography
**Font Family**: `Inter`, sans-serif (Clean, geometric, neutral).

**Scale (Desktop):**
- **H1 (Hero Brand/Headline)**: `clamp(4rem, 10vw, 8rem)` - Massive, editorial.
- **H2 (Subheading)**: `1.125rem` (18px) - Controlled, readable.
- **Nav Links**: `0.875rem` (14px) - Minimal, usually uppercase or tracked out.
- **Button Text**: `0.875rem` (14px) - Uppercase, bold.

**Line-Height Rhythm:**
- Headings: `0.9` to `1.0` (Tight, display style)
- Body: `1.5` (Readable)

## 3. Spacing & Layout
- **Container**: `1400px` (Wide but contained)
- **Spacing Rhythm**: Multiples of `8px` or `12px`.
- **Visual Density**: **Low**. High whitespace, large margins.
- **Hero Top Margin**: `180px` to `240px` (Significant breathing room from header).

## 4. UI Elements
- **Border Radius**: `4px` (Slightly softened corners, not fully rounded, "Trust" feel).
- **Buttons**:
    - *Primary*: Solid Accent Background, White Text, Sharp/Small Radius. Padding: `16px 32px`.
    - *Secondary*: Border only (1px), Text Color.
- **Shadows**: Very subtle or none (Flat editorial style).

## 5. Trust Micro-Points
- **Icon Style**: Solar Linear (Thin, clean lines).
- **Placement**: Under CTAs, small text (`12px`), row layout.
