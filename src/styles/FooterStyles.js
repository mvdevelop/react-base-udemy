import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.gray[900]};
  color: ${({ theme }) => theme.text};
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }

  .footer-section h4 {
    font-size: ${({ theme }) => theme.typography.size.base};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary[500]};
  }

  .footer-section ul {
    li {
      margin-bottom: ${({ theme }) => theme.spacing.sm};

      a {
        color: ${({ theme }) => theme.textSecondary};
        font-size: ${({ theme }) => theme.typography.size.sm};
        transition: color ${({ theme }) => theme.transitions.duration.sm};

        &:hover {
          color: ${({ theme }) => theme.colors.primary[400]};
        }
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all ${({ theme }) => theme.transitions.duration.md};

  &:hover {
    background: ${({ theme }) => theme.colors.primary[500]};
    color: white;
    transform: translateY(-3px);
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[700]};
  padding-top: ${({ theme }) => theme.spacing.lg};
  text-align: center;

  p {
    font-size: ${({ theme }) => theme.typography.size.sm};
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;