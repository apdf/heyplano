# HeyPlano — Brand System
**Version:** 1.0  
**Date:** April 2026  
**Direction:** Bleached Gold (Variation A)

---

## Brand Personality

Trustworthy, clear, warm. An experienced peer who's been through it — slightly pissed off on your behalf, genuinely helpful. Not corporate, not sloppy. Think Wirecutter energy applied to Spanish real estate.

Not a real estate brand. Not a startup. A smart friend.

---

## Color Palette

```
--hp-bg:          #FEFAF2   /* Page background — bleached cream */
--hp-surface:     #FFF8EC   /* Input fields, cards */
--hp-border:      #E8D8B0   /* Borders, dividers */
--hp-border-soft: #F0E6CC   /* Subtle dividers, nav border */
--hp-footer-bg:   #F7EDD8   /* Footer/proof bars */

--hp-text-primary:   #1A120A   /* Headlines, nav logo */
--hp-text-secondary: #5A4830   /* Body copy */
--hp-text-muted:     #7A5C2C   /* Proof text, captions */

--hp-accent:      #D4840C   /* CTA buttons, eyebrows, brand accent */
--hp-accent-dark: #A85E08   /* Hover state for CTA */
```

### Usage Rules
- Background is always `--hp-bg`. Never pure white.
- CTA buttons: `--hp-accent` background, `--hp-bg` text.
- Hover state: darken to `--hp-accent-dark`.
- Never use black (#000). Use `--hp-text-primary` instead.
- No gradients. Flat fills only.

---

## Typography

### Display / Headlines
**Font:** Fraunces (variable serif)  
**Load:** `https://cdn.jsdelivr.net/npm/@fontsource/fraunces@5.0.17/index.css`  
**Usage:** Hero headlines, section titles, logo wordmark  
**Weight:** 700  
**Color:** `--hp-text-primary`

### Body / UI
**Font:** Plus Jakarta Sans  
**Load:** `https://cdn.jsdelivr.net/npm/@fontsource/plus-jakarta-sans@5.0.17/index.css`  
**Usage:** Body copy, form fields, prose  
**Weight:** 400 regular, 500 medium  
**Color:** `--hp-text-secondary`

### Labels / Navigation / Buttons
**Font:** Syne  
**Load:** `https://cdn.jsdelivr.net/npm/@fontsource/syne@5.0.17/index.css`  
**Usage:** Nav links, eyebrows, CTA buttons, captions, all-caps labels  
**Weight:** 400–600  

### Type Scale
```
Hero headline:    Fraunces 700, 52px, line-height 1.0
Section headline: Fraunces 700, 36px, line-height 1.1
Eyebrow:          Syne 400, 11px, letter-spacing 0.16em, UPPERCASE, --hp-accent
Body:             Plus Jakarta Sans 400, 17px, line-height 1.65
Body small:       Plus Jakarta Sans 400, 14px, line-height 1.6
Nav / UI:         Syne 400, 13px, letter-spacing 0.03em
CTA button:       Syne 600, 14px, letter-spacing 0.02em
Caption / proof:  Plus Jakarta Sans 400, 13px, --hp-text-muted
```

---

## Logo / Wordmark

**Treatment:** "Hey" in `--hp-text-primary` + "Plano" in `--hp-accent`  
**Font:** Fraunces 700  
**Size in nav:** 20px  
**No icons, no tagline in the wordmark itself**

Until a proper logo asset exists, use the CSS wordmark above.  
Logo asset to be generated via Nano Banana — see NANO_BANANA_PROMPT.md.

---

## Spacing & Layout

```
Page max-width:    1100px, centered
Section padding:   80px vertical, 2rem horizontal
Nav height:        ~56px
Border radius:     8px (inputs, buttons), 12px (cards)
Input height:      48px (padding: 13px 16px)
Button height:     48px (padding: 13px 24px)
```

---

## Component Recipes

### Nav
```
background: --hp-bg
border-bottom: 1px solid --hp-border-soft
padding: 1.2rem 2rem
display: flex, justify-content: space-between, align-items: center
Logo left · Nav links right
```

### Hero Section
```
padding: 3.5rem 2rem 2.5rem
Eyebrow → H1 (3 short lines) → Subtext → Email form
Max-width on subtext: 420px
```

### Email Input + CTA
```
display: flex, gap: 10px, flex-wrap: wrap
Input: flex 1, min-width 200px, border 1.5px solid --hp-border
Button: background --hp-accent, color --hp-bg
Both: border-radius 8px, height 48px
```

### Proof Bar (below hero)
```
background: --hp-footer-bg
border-top: 1px solid --hp-border-soft  
padding: 1.2rem 2rem
font: Plus Jakarta Sans 13px, --hp-text-muted
```

---

## Voice & Tone (for copy)

- First person plural: "We've been through this."
- Never corporate: no "leverage", "synergy", "seamless"
- Empathetic but not soft: acknowledge the problem, don't wallow
- Direct: short sentences. No fluff.
- One clear CTA per section

### Tagline options (choose one)
1. "Finally, someone on your side."
2. "Spain property, without the games."
3. "The guide you wish you'd had."

**Current favourite:** Option 1

---

## What NOT to do

- No purple. No blue. No "tech startup" palette.
- No Inter, Roboto, or system fonts.
- No house icons, map pins, or sun graphics.
- No gradient backgrounds.
- No overcrowded layouts — generous whitespace is the brand.
- No fake social proof numbers on launch day.

---

## Asset Status

| Asset | Status | Tool |
|---|---|---|
| Color palette | ✅ Defined | This doc |
| Typography | ✅ Defined | This doc |
| Wordmark (CSS) | ✅ Ready | This doc |
| Logo / wordmark image | ⏳ To generate | Nano Banana |
| Favicon | ⏳ Depends on logo | — |
| OG image | ⏳ Post-logo | — |

---

*Bring this file into every Claude Code session as context.*