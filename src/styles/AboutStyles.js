import styled, { css } from 'styled-components';

export const AboutSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.size['4xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.lg};
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  text-align: center;

  p {
    font-size: ${({ theme }) => theme.typography.size.lg};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    color: ${({ theme }) => theme.text};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }

  .info-item {
    background: ${({ theme }) => theme.surface};
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.border};

    h4 {
      color: ${({ theme }) => theme.colors.primary[500]};
      margin-bottom: ${({ theme }) => theme.spacing.xs};
    }

    p {
      color: ${({ theme }) => theme.text};
      margin: 0;
    }
  }
`;