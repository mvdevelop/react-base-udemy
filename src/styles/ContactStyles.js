import styled, { css } from 'styled-components';

export const ContactSection = styled.section`
  max-width: 1200px;
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

export const Form = styled.form`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.md};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: 1fr;
    }
  }
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.border};
  height: fit-content;

  .info-item {
    padding: ${({ theme }) => theme.spacing.md} 0;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    &:last-child {
      border-bottom: none;
    }

    h4 {
      color: ${({ theme }) => theme.colors.primary[500]};
      margin-bottom: ${({ theme }) => theme.spacing.xs};
      font-size: ${({ theme }) => theme.typography.size.base};
    }

    a {
      color: ${({ theme }) => theme.text};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
      font-size: ${({ theme }) => theme.typography.size.sm};

      &:hover {
        color: ${({ theme }) => theme.colors.primary[500]};
      }
    }

    p {
      color: ${({ theme }) => theme.text};
      font-size: ${({ theme }) => theme.typography.size.sm};
    }
  }
`;