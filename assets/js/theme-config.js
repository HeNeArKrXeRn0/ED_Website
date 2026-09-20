/**
 * Theme Configuration
 * 
 * Centralized visual parameters for the Equip Drones site.
 * Edit this object to change colors, spacing, typography across the entire site.
 * Changes apply immediately via CSS custom properties.
 */

// Defaults match site.css so initialization preserves the established design.
const THEME = {
  colors: {
    primary: '#0A0B0D',        // Main background
    secondary: '#131519',      // Secondary background, cards
    accent: '#00E08A',         // Highlights, CTAs, interactive elements
    icon: '#00E08A',           // SVG Spec icons color
    text: '#F2F4F7',           // Primary text
    textMuted: '#8A93A3',      // Secondary text, labels
    border: '#2A2E36',         // Borders, dividers
    background: '#0A0B0D',     // Page background
    success: '#00C46A',        // Success states
    warning: '#FFB020',        // Warning states
    error: '#FF5A5A',          // Error states
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
  },
  
  typography: {
    sizeBase: '16px',
    sizeSm: '14px',
    sizeLg: '18px',
    sizeXl: '20px',
    'size-2xl': '24px',
    
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: '400',
    fontWeightBold: '600',
  },
  
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 12px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
  
  radius: {
    sm: '4px',
    md: '8px',
    lg: '8px',
    full: '9999px',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
};

/**
 * Apply theme to CSS custom properties on the document root.
 * Call this once on page load after DOM is ready.
 */
function applyTheme(themeOverride = null) {
  const theme = themeOverride || THEME;
  const root = document.documentElement;
  
  // Apply colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVarName = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    root.style.setProperty(cssVarName, value);
  });
  
  // Apply spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    const cssVarName = `--spacing-${key}`;
    root.style.setProperty(cssVarName, value);
  });
  
  // Apply typography
  Object.entries(theme.typography).forEach(([key, value]) => {
    const property = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    const cssVarName = property.startsWith('font-') ? `--${property}` : `--font-${property}`;
    root.style.setProperty(cssVarName, value);
  });
  
  // Apply shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    const cssVarName = `--shadow-${key}`;
    root.style.setProperty(cssVarName, value);
  });
  
  // Apply radius
  Object.entries(theme.radius).forEach(([key, value]) => {
    const cssVarName = `--radius-${key}`;
    root.style.setProperty(cssVarName, value);
  });
  
  // Apply transitions
  Object.entries(theme.transitions).forEach(([key, value]) => {
    const cssVarName = `--transition-${key}`;
    root.style.setProperty(cssVarName, value);
  });
}

// Apply theme when DOM is ready (before ED loads)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () { applyTheme(); });
} else {
  applyTheme();
}
