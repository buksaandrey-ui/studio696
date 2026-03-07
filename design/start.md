# Role & Objective

Act as a Senior UI/UX Designer and Frontend Developer.
Your goal is to convert the attached reference screenshot (the first screen/hero of the benchmark site) into a pixel-perfect, production-ready, responsive one-page landing using code.

The page is a single-page website selling:
- 4 thermos variants + 1 mug
- with original print themes:
  1) Детская тема
  2) Забавные фразы
  3) Тематические
  4) Фото-коллажи

Primary deliverable: a faithful style clone of the benchmark site (fonts, spacing, colors, radii, shadows, button styles, icon style, layout rhythm), starting from the first screen (Hero), then extending the same design system to the rest of the one-page sections.

---

# Tech Stack & Constraints

- Use plain HTML5, CSS3, modern JavaScript (ES6+). No frameworks (React/Vue/Bootstrap).
- Use semantic HTML: <header>, <nav>, <main>, <section>, <footer>, proper <h1>…<h3>.
- Use CSS Variables (:root) for:
  - colors
  - font families, sizes, line-heights
  - spacing scale
  - radii, shadows
  - container widths / breakpoints
- Layout:
  - Use CSS Grid for major layout (hero split, product grids)
  - Use Flexbox for small alignments (nav items, button icon+label, chips)
- Responsive:
  - Mobile-first or desktop-down is allowed, but must be fully responsive.
  - Provide 3 key breakpoints minimum (e.g., 480 / 768 / 1024 or similar).
- Accessibility:
  - Keyboard focus states visible
  - Sufficient contrast (especially buttons/text on backgrounds)
  - Meaningful alt text for product images
- Performance:
  - Prefer system fonts OR Google Fonts (1 family максимум, 2 weights)
  - Optimize assets usage; avoid heavy JS

---

# Inputs You Must Use

1) Reference screenshot of the benchmark site’s first screen (Hero).
2) My product context (thermos/mug + print themes).
3) If logos/images are provided — use them; if not — use clean placeholders.

---

# Visual Analysis Instructions (Mandatory)

Strictly analyze the screenshot and extract into a small design audit before coding:

## 1) Color Palette
- Extract HEX codes:
  - Page background
  - Card/Surface background
  - Primary accent color (buttons/links)
  - Secondary accent color (badges/hover)
  - Main text, muted text, border color
- Define these colors as CSS variables in :root (e.g., --bg, --surface, --text, --muted, --primary, --border, etc.)

## 2) Typography
- Identify/approximate font family:
  - If exact is unknown, pick the closest Google Font among Inter / Roboto / Poppins.
- Derive a type scale:
  - H1 (hero title), H2 (section titles), body, small text, button text
- Define variables for font sizes and line heights.

## 3) Spacing, Radii, Shadows
- Determine:
  - container max width + side paddings
  - spacing rhythm (8px/10px/12px base)
  - border-radius style (small/medium/large)
  - shadow style (soft vs sharp)
- Convert into a spacing scale variables:
  --space-1..--space-8, --radius-sm/md/lg, --shadow-sm/md/lg.

## 4) Layout & Components Inventory
Create a quick list of components visible in the screenshot and recreate them:
- Header/nav structure (logo, links, CTA)
- Hero layout (left copy + right visual OR centered)
- Buttons (primary/secondary + hover/active)
- Badges/chips
- Cards/surfaces
- Icon usage patterns

Only after this short audit, proceed to implementation.

---

# Icon Rules

- Use Iconify with Solar Linear icon set for UI icons.
- Keep icon stroke/weight consistent with the screenshot style.
- Use icons only where they improve clarity (e.g., shipping, warranty, print quality, gift, etc.)

Implementation guidance:
- Use the Iconify CDN and reference solar icons (e.g. solar:delivery-linear).
- Ensure icons scale consistently with text.

---

# Content Rules (One-page landing)

The page must remain consistent with the benchmark style, but the copy can be generated.

## Hero (First Screen) – Must be pixel-perfect to screenshot
Hero must include:
- Strong H1 relevant to custom printed thermoses/mugs
- Subheading describing print themes (детская/фразы/тематические/коллажи)
- Primary CTA (e.g., “Выбрать принт”)
- Secondary action (e.g., “Смотреть коллекции”)
- Trust micro-points (e.g., “яркая печать”, “подарочная идея”, “быстрая отправка”)
- Visual area:
  - Either product mockups or a clean illustrative placeholder aligned with the screenshot composition

## Sections after Hero (Keep style coherent, minimal, conversion-focused)
Use these sections in order unless screenshot suggests a different structure:
1) Collections (4 themes) as cards/chips
2) Featured products grid: 4 thermos cards + 1 mug card
3) Why us (quality, sublimation durability, gift-ready, support)
4) Reviews / social proof (3–6 cards)
5) FAQ (accordion)
6) Footer (contacts, legal, соцсети)

Keep everything within one HTML file unless requested otherwise.

---

# Interaction Rules (Minimal JS)

- Mobile menu toggle (if needed)
- FAQ accordion
- Smooth scroll to anchors
No heavy animation libraries. Subtle transitions only.

---

# Output Requirements

Provide:
1) index.html
2) styles.css
3) script.js

All code must be clean, commented, and ready to run by opening index.html.

---

# Quality Checklist (Do not skip)

- Pixel-perfect Hero match (spacing, font sizes, alignment, colors)
- Consistent design system across sections
- Responsive behavior tested at mobile/tablet/desktop widths
- Hover/focus states for buttons/links
- No layout shifts, no overflow on small screens

---

# When Something Is Missing

If a detail is not visible in the screenshot:
- Make a conservative decision that preserves the benchmark style.
- Document the assumption in a short comment near the relevant CSS/HTML.
