import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`;

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const fieldBase = css`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-family: ${({ theme }) => theme.typography.family.primary};
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transitions.duration.sm} ${({ theme }) => theme.transitions.easing.out};

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary[100]};
  }

  &[aria-invalid='true'] {
    border-color: ${({ theme }) => theme.colors.error};

    &:focus {
      box-shadow: 0 0 0 3px rgba(242, 66, 54, 0.1);
    }
  }
`;

export const StyledInput = styled.input`
  ${fieldBase}
`;

export const StyledTextarea = styled.textarea`
  ${fieldBase}
  min-height: 100px;
  resize: vertical;
  font-family: ${({ theme }) => theme.typography.family.primary};
`;

export const ErrorMessage = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.colors.error};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  &::before {
    content: '⚠️';
  }
`;

export const HelperText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.textSecondary};
`;