/**
 * Theme Modes - Definição dos temas claro e escuro
 */

import { colors, spacing, typography, radius, shadows, transitions } from './theme';

export const lightTheme = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  transitions,
  mode: 'light',
  background: colors.background.primary,
  surface: colors.gray[100],
  text: colors.text.primary,
  textSecondary: colors.text.secondary,
  border: colors.border.light,
};

export const darkTheme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,

    // Cores neutras ajustadas para dark mode
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

    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      muted: '#707070',
      inverse: '#212529',
    },

    background: {
      primary: '#0a080a',
      secondary: '#1a1a1d',
      dark: '#0a080a',
      darkSecondary: '#1e1e21',
    },

    border: {
      light: '#2d2d30',
      medium: '#343a40',
      dark: '#495057',
    },
  },
  spacing,
  typography: {
    ...typography,
    family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
  },
  radius,
  shadows,
  transitions,
  mode: 'dark',
  background: '#0a080a',
  surface: '#1a1a1d',
  text: '#ffffff',
  textSecondary: '#a0a0a0',
  border: '#2d2d30',
};