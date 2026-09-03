import styled, { css } from 'styled-components';

export const ContactSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
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

  .info-item {
    h4 {
      color: ${({ theme }) => theme.colors.primary[500]};
      margin-bottom: ${({ theme }) => theme.spacing.xs};
    }

    a {
      color: ${({ theme }) => theme.text};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
    }
  }
`;