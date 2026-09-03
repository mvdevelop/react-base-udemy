import styled, { css, keyframes } from 'styled-components';

export const SkeletonWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
`;

export const SkeletonLine = styled.div`
  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radius.sm};
  animation: ${({ theme }) => theme.transitions.easing.out} 1.5s ease-in-out infinite shimmer;
`;

export const shimmer = keyframes`
  0% { background-position: -468px 50%; }
  100% { background-position: 468px 50%; }
`;