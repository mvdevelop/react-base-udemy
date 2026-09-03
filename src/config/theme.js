/**
 * Design Tokens - Sistema de Design Centralizado
 * Este arquivo define todos os tokens de design usados no projeto
 * (cores, spacing, tipografia, breakpoints, etc.)
 */

// Paleta de cores principal
export const colors = {
  // Cores primárias
  primary: {
    50: '#f0f0f5',
    100: '#e0e0eb',
    200: '#c0c0d9',
    300: '#9090bf',
    400: '#60609c',
    500: '#4a6cf7', // Primary color original
    600: '#3a4bc4',
    700: '#2a2e91',
    800: '#1a1a1d', // Primary dark color original
    900: '#0a080a',
  },
  // Cores secundárias
  secondary: {
    50: '#fff9ed',
    100: '#fff4d8',
    200: '#ffe9aa',
    300: '#ffde7b',
    400: '#ffd249',
    500: '#ffc51f',
    600: '#ffa300',
    700: '#ff8500',
    800: '#e87600',
    900: '#c86300',
  },
  // Status colors
  success: '#00bf63',
  warning: '#f2af29',
  error: '#f24236',
  info: '#4a6cf7',

  // Cores neutras
  gray: {
    100: '#ffffff',
    200: '#f8f9fa',
    300: '#e9ecef',
    400: '#dee2e6',
    500: '#ced4da',
    600: '#adb5bd',
    700: '#6c757d',
    800: '#495057',
    900: '#343a40',
    1000: '#212529',
  },

  // Texto
  text: {
    primary: '#212529',
    secondary: '#6c757d',
    muted: '#adb5bd',
    inverse: '#ffffff',
  },

  // Background
  background: {
    primary: '#ffffff',
    secondary: '#f8f9fa',
    dark: '#1a1a1d',
    darkSecondary: '#2d2d30',
  },

  // Bordas
  border: {
    light: '#e9ecef',
    medium: '#dee2e6',
    dark: '#343a40',
  },
};

// Spacing e escala de tamanhos
export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '2.5rem', // 40px
  '3xl': '3rem',   // 48px
  '4xl': '4rem',   // 64px
  '5xl': '5rem',   // 80px
  '6xl': '6rem',   // 96px
};

// Tipografia
export const typography = {
  family: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    mono: "'Fira Code', 'Fira Mono', Consolas, 'Courier New', monospace",
  },
  size: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
    '8xl': '6rem',    // 96px
  },
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
};

// Border radius
export const radius = {
  xs: '0.125rem',  // 2px
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  '3xl': '9999px', // 50% - full rounded
};

// Shadows
export const shadows = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
};

// Breakpoints responsivos
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Z-index
export const zIndex = {
  hidden: 0,
  auto: 1,
  base: 10,
  docked: 100,
  stacked: 1000,
  overlay: 10000,
  modal: 100000,
  popover: 100010,
  tooltip: 100020,
};

// Transições e animações
export const transitions = {
  duration: {
    xs: '50ms',
    sm: '100ms',
    md: '150ms',
    lg: '200ms',
    xl: '300ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};