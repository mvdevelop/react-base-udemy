import styled from 'styled-components';

export const StyledDivider = styled.div`
  flex: 1;

  ${({ orientation = 'horizontal' }) =>
    orientation === 'horizontal'
      ? css`
          height: ${({ thickness = '1px' }) => thickness};
          margin: ${({ theme }) => theme.spacing.lg} 0;
        `
      : css`
          width: ${({ thickness = '1px' }) => thickness};
          margin: 0 ${({ theme }) => theme.spacing.lg};
        `}

  ${({ theme }) => css`
    background: ${theme.colors.border.light};
    border: none;
  `}
`;