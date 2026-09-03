import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineArrowDown } from 'react-icons/hi';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 72px;
`;

export const Hero = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;
  min-height: calc(100vh - 72px);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 120px;
    min-height: auto;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.size['5xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  .highlight {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[500]}, ${({ theme }) => theme.colors.secondary[500]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  color: ${({ theme }) => theme.colors.primary[500]};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.size.lg};
  color: ${({ theme }) => theme.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 500px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const ScrollIndicator = styled(Link)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.textSecondary};
  animation: ${float} 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.surface};
  border-radius: ${({ theme }) => theme.radius.full};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.duration.md};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
    transform: translateX(-50%) translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;