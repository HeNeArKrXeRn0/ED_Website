# Theme Configuration Guide

## Quick Start

To customize the Equip Drones website's visual appearance (colors, spacing, typography, etc.), edit **`assets/js/theme-config.js`** — no CSS file editing required.

## How It Works

1. **Edit `theme-config.js`** — Change values in the `THEME` object
2. **Reload the page** — Changes apply immediately via CSS custom properties
3. **No build step needed** — Changes work in production without compilation

## Color Palette

Edit colors in the `colors` section of `THEME`:

```js
const THEME = {
  colors: {
    primary: '#0A0B0D',        // Main background
    secondary: '#131519',      // Secondary background, cards
    accent: '#00E08A',         // Highlights, CTAs, buttons
    icon: '#00E08A',           // SVG Spec icons color
    text: '#F2F4F7',           // Primary text
    textMuted: '#8A93A3',      // Secondary text, labels
    border: '#2A2E36',         // Borders, dividers
    background: '#0A0B0D',     // Page background
    success: '#00C46A',        // Success states, badges
    warning: '#FFB020',        // Warning states
    error: '#FF5A5A',          // Error states, alerts
  },
  // ...rest of theme
};
```

### Example: Dark to Light Palette

Change from dark to light theme:

```js
colors: {
  primary: '#FFFFFF',         // Light background
  secondary: '#F5F5F5',       // Light gray background
  accent: '#0066CC',          // Blue highlights
  text: '#1a1a1a',            // Dark text
  textMuted: '#666666',       // Gray text
  border: '#DDDDDD',          // Light borders
  background: '#FFFFFF',      // White page background
  success: '#00AA00',         // Green
  warning: '#FF8800',         // Orange
  error: '#CC0000',           // Red
}
```

## Spacing

Control all padding, margins, and gaps:

```js
spacing: {
  xs: '0.5rem',    // 8px (scaled if base font changes)
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  xxl: '4rem',     // 64px
}
```

## Typography

Control font sizes and weights:

```js
typography: {
  sizeBase: '16px',           // Base font size (affects rem units)
  sizeSm: '14px',
  sizeLg: '18px',
  sizeXl: '20px',
  size2xl: '24px',
  
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...',
  fontWeight: '400',          // Normal weight
  fontWeightBold: '600',      // Bold weight
}
```

## Shadows

Control depth and emphasis:

```js
shadows: {
  sm: '0 2px 4px rgba(0, 0, 0, 0.1)',      // Subtle
  md: '0 4px 12px rgba(0, 0, 0, 0.15)',    // Medium
  lg: '0 8px 24px rgba(0, 0, 0, 0.2)',     // Prominent
}
```

## Border Radius

Control how rounded corners appear:

```js
radius: {
  sm: '4px',       // Subtle curves
  md: '8px',       // Default
  lg: '12px',      // Prominent
  full: '9999px',  // Fully rounded (pills, circles)
}
```

## Transitions & Animations

Control animation speed:

```js
transitions: {
  fast: '150ms ease-in-out',    // Snappy (hover effects)
  normal: '300ms ease-in-out',  // Standard (most UI changes)
  slow: '500ms ease-in-out',    // Smooth (page transitions)
}
```

## Where Are These Used?

The `THEME` object is applied to **CSS custom properties** (variables) in `:root` of `site.css`. All stylesheets reference these variables:

- `--color-primary` → used for backgrounds, panels
- `--color-accent` → used for buttons, links, highlights
- `--spacing-md` → used for padding, margins, gaps
- `--font-size-lg` → used for headings, emphasis
- `--shadow-md` → used for cards, modals
- etc.

Change a theme value and it updates everywhere that uses that variable.

## Complete Example: Brand Rebranding

Imagine the company rebrand requires a new green accent and different typography:

```js
const THEME = {
  colors: {
    primary: '#0A0B0D',
    secondary: '#1a1f3a',
    accent: '#00FF66',       // ← Changed from #00E08A (brighter green)
    text: '#E0E6FF',
    textMuted: '#8A93A3',
    border: '#2A2E36',
    background: '#0A0B0D',
    success: '#00DD55',      // ← Match new accent
    warning: '#FFB020',
    error: '#FF5A5A',
  },
  typography: {
    fontFamily: 'Georgia, "Times New Roman", serif',  // ← Changed to serif
    // ...rest unchanged
  },
  // ...rest of theme
};
```

**Result:** Every button, link, heading, and branded element updates automatically. No CSS files touched. One `git diff` in `theme-config.js`.

## Testing Your Changes

1. Edit `theme-config.js`
2. Reload any page in the browser
3. CSS variables are updated immediately via `applyTheme()`
4. Check all 8 pages to ensure the new theme applies consistently

## CSS Variable Reference

All theme values are accessible to CSS files as custom properties:

```css
/* Color variables */
color: var(--color-text);
background: var(--color-accent);
border-color: var(--color-border);

/* Spacing variables */
padding: var(--spacing-md);
margin-bottom: var(--spacing-lg);
gap: var(--spacing-sm);

/* Typography variables */
font-size: var(--font-size-lg);
font-family: var(--font-family);
font-weight: var(--font-weight-bold);

/* Shadow variables */
box-shadow: var(--shadow-md);

/* Radius variables */
border-radius: var(--radius-md);

/* Transition variables */
transition: all var(--transition-normal);
```

## Important: Maintain Compatibility

After editing `theme-config.js`:

1. Update `MASTER_PLAN.md` change log
2. Test on mobile (360px), tablet (768px), and desktop (1440px)
3. Verify all 8 pages load without console errors
4. Check reduced-motion preference works (Settings → Accessibility → Motion)

## Questions?

Refer to:
- `.github/copilot-instructions.md` — Developer guide
- `MASTER_PLAN.md` — Authoritative inventory and architecture
- `assets/css/site.css` — Where variables are defined and used
