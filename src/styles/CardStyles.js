import styled, { css } from 'styled-components';

const paddings = {
  none: css`padding: 0;`,
  sm: css`padding: ${({ theme }) => theme.spacing.sm};`,
  md: css`padding: ${({ theme }) => theme.spacing.lg};`,
  lg: css`padding: ${({ theme }) => theme.spacing.xl};`,
};

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.duration.md} ${({ theme }) => theme.transitions.easing.out};
  ${({ padding = 'md' }) => paddings[padding]}

  ${({ hover }) => hover && css`
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
      border-color: ${({ theme }) => theme.colors.primary[500]};
    }
  `}
`;

export const CardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-size: ${({ theme }) => theme.typography.size.lg};
  }
`;

export const CardBody = styled.div`
  color: ${({ theme }) => theme.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

export const CardFooter = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-end;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;