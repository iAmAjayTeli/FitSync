export const theme = {
  colors: {
    // Main background and surface colors
    background: {
      primary: '#2d2b42',
      secondary: '#2C415F',
      tertiary: '#3f3d56',
      hover: '#375270',
    },
    
    // Accent colors
    accent: {
      primary: '#8b5cf6',    // Purple
      primaryHover: '#9d6ef7',
      secondary: '#6366f1',  // Indigo
      cyan: '#22d3ee',
    },
    
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#a8a8b3',
      muted: '#666666',
    },
    
    // Gradient combinations
    gradients: {
      // Background gradients
      primary: 'linear-gradient(to bottom right, #6366f1, #a855f7)',  // Indigo to Purple
      secondary: 'linear-gradient(to right, #22d3ee, #a855f7)',       // Cyan to Purple
      accent: 'linear-gradient(to right, #6366f1, #a855f7)',         // Indigo to Purple
      
      // Text gradients (use with bg-clip-text)
      text: 'linear-gradient(to right, #22d3ee, #a855f7)',           // Cyan to Purple
      
      // Border gradients
      border: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)', // Cyan-Purple-Pink
    },
  },

  // Spacing and sizing
  spacing: {
    navWidth: '18rem',      // 288px
    headerHeight: '4rem',    // 64px
    sidebarPadding: '1.5rem',
    borderRadius: {
      sm: '0.375rem',       // 6px
      md: '0.5rem',         // 8px
      lg: '0.75rem',        // 12px
      xl: '1rem',           // 16px
    }
  },

  // Common component styles
  components: {
    // Button styles
    button: {
      base: 'rounded-lg transition-all duration-200',
      primary: 'bg-[#8b5cf6] text-white hover:bg-[#9d6ef7] shadow-lg',
      secondary: 'bg-[#2C415F] text-white hover:bg-[#375270]',
      ghost: 'bg-white/10 hover:bg-white/20 text-white',
    },

    // Card styles
    card: {
      base: 'rounded-xl bg-[#2C415F] border border-white/10',
      hover: 'hover:bg-[#375270] hover:shadow-lg transition-all duration-200',
    },

    // Navigation item styles
    navItem: {
      base: 'flex items-center gap-3 px-4 py-3 rounded-xl transition-all',
      active: 'bg-[#8b5cf6] text-white shadow-lg hover:bg-[#9d6ef7]',
      inactive: 'bg-[#2C415F] text-white hover:bg-[#375270] hover:shadow-md',
    },

    // Common animations
    animation: {
      hover: 'hover:scale-105 transition-transform duration-200',
      tap: 'active:scale-95',
      fadeIn: 'animate-fadeIn',
    }
  },

  // Effects and filters
  effects: {
    glassmorphism: 'backdrop-blur-xl bg-opacity-50',
    shadow: {
      sm: 'shadow-lg shadow-purple-500/10',
      md: 'shadow-xl shadow-purple-500/20',
    },
    border: {
      light: 'border border-white/10',
      accent: 'border border-purple-500/20',
    }
  },

  // Responsive breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Typography
  typography: {
    fonts: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    }
  }
};

// Utility function to get nested theme values
export const getThemeValue = (path: string) => {
  return path.split('.').reduce((acc: any, part: string) => {
    return acc && acc[part] ? acc[part] : null;
  }, theme);
};

// Common style combinations
export const stylePresets = {
  // Glass card effect
  glassCard: `
    bg-opacity-50 backdrop-blur-xl
    border border-white/10
    rounded-xl shadow-lg
    bg-gradient-to-br from-white/10 to-white/5
  `,

  // Gradient text
  gradientText: `
    text-transparent bg-clip-text
    bg-gradient-to-r from-cyan-400 to-purple-400
  `,

  // Interactive button
  interactiveButton: `
    rounded-lg transition-all duration-200
    hover:scale-105 active:scale-95
    shadow-lg shadow-purple-500/20
  `,

  // Navigation item
  navItem: `
    flex items-center gap-3 px-4 py-3
    rounded-xl transition-all duration-200
    hover:shadow-md
  `
};

// Example usage:
/*
import { theme, stylePresets } from './theme';

// Using colors
backgroundColor: theme.colors.background.primary
textColor: theme.colors.text.primary

// Using gradients
background: theme.colors.gradients.primary

// Using style presets
className={stylePresets.glassCard}
className={stylePresets.gradientText}

// Using component styles
className={theme.components.button.primary}
*/ 