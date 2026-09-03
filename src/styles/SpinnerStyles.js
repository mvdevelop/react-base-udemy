import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const StyledSpinner = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => size && css`
    width: ${size}px;
    height: ${size}px;
  `}

  svg {
    transform-box: fill-box;
    transform-origin: center center;
    animation: ${rotate} ${({ speed }) => speed || '0.8s'} linear infinite;
  }
`;

export const SpinnerDot = styled.div`
  width: 8px;
  height: 8px;
  background: currentColor;
  border-radius: 50%;
  margin: 2px;

  ${({ speed }) => speed && css`
    animation: ${pulse} ${speed} ease-in-out infinite;
  `}
`;