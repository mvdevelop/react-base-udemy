import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary[500]};
    color: white;
    border: 2px solid ${({ theme }) => theme.colors.primary[500]};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary[600]};
      border-color: ${({ theme }) => theme.colors.primary[600]};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary[500]};
    color: white;
    border: 2px solid ${({ theme }) => theme.colors.secondary[500]};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondary[600]};
      border-color: ${({ theme }) => theme.colors.secondary[600]};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary[500]};
    border: 2px solid ${({ theme }) => theme.colors.primary[500]};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary[500]};
      color: white;
      transform: translateY(-2px);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.text};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.gray[200]};
    }
  `,
};

const sizes = {
  sm: css`
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.size.sm};
  `,
  md: css`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.size.base};
  `,
  lg: css`
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.size.lg};
  `,
  xl: css`
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.typography.size.xl};
  `,
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.duration.md} ${({ theme }) => theme.transitions.easing.out};
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  outline: none;
  position: relative;
  overflow: hidden;

  ${({ variant = 'primary' }) => variants[variant]}
  ${({ size = 'md' }) => sizes[size]}

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const LoadingSpinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;