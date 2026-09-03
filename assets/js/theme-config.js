/**
 * Theme Configuration
 * 
 * Centralized visual parameters for the Equip Drones site.
 * Edit this object to change colors, spacing, typography across the entire site.
 * Changes apply immediately via CSS custom properties.
 */

const THEME = {
  colors: {
    primary: '#0a0e27',        // Main background
    secondary: '#1a1f3a',      // Secondary background, cards
    accent: '#00d9ff',         // Highlights, CTAs, interactive elements
    icon: '#e0e6ff',           // SVG Spec icons color
    text: '#e0e6ff',           // Primary text
    textMuted: '#8892b0',      // Secondary text, labels
    border: '#2a2f4d',         // Borders, dividers
    background: '#0f1419',     // Page background
    success: '#10b981',        // Success states
    warning: '#f59e0b',        // Warning states
    error: '#ef4444',          // Error states
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  
  typography: {
    sizeBase: '16px',
    sizeSm: '14px',
    sizeLg: '18px',
    sizeXl: '20px',
    size2xl: '24px',
    
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
    lg: '12px',
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
    const cssVarName = `--font-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
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
  document.addEventListener('DOMContentLoaded', applyTheme);
} else {
  applyTheme();
}
