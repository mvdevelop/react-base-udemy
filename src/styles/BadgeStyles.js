import styled from 'styled-components';

export const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${({ variant = 'default', size = 'md' }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${({ theme }) => theme.colors.primary[500]};
          color: white;
        `;
      case 'success':
        return css`
          background: ${({ theme }) => theme.colors.success};
          color: white;
        `;
      case 'warning':
        return css`
          background: ${({ theme }) => theme.colors.warning};
          color: white;
        `;
      case 'error':
        return css`
          background: ${({ theme }) => theme.colors.error};
          color: white;
        `;
      case 'info':
        return css`
          background: ${({ theme }) => theme.colors.info};
          color: white;
        `;
      case 'ghost':
      default:
        return css`
          background: ${({ theme }) => theme.colors.primary[50]};
          color: ${({ theme }) => theme.colors.primary[700]};
        `;
    }
  }}

  ${({ size = 'md' }) =>
    size === 'sm'
      ? css`
          padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xs};
          font-size: ${({ theme }) => theme.typography.size.xs};
        `
      : size === 'lg'
      ? css`
          padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
          font-size: ${({ theme }) => theme.typography.size.lg};
        `
      : css`
          padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
          font-size: ${({ theme }) => theme.typography.size.sm};
        `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.75rem;
  }
`;