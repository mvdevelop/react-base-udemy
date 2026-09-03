import styled from 'styled-components';

export const Container = styled.section`
  max-width: 400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.xl};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

export const Paragrafo = styled.p`
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputGroup = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;