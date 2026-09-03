import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.docked};
  background: ${({ theme }) => theme.surface};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(10px);
  transition: all ${({ theme }) => theme.transitions.duration.md} ${({ theme }) => theme.transitions.easing.out};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  height: 72px;

  .logo {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.size.xl};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    color: ${({ theme }) => theme.text};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};

    a {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.xs};
      color: ${({ theme }) => theme.textSecondary};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
      font-size: ${({ theme }) => theme.typography.size.sm};
      padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
      border-radius: ${({ theme }) => theme.radius.md};
      transition: all ${({ theme }) => theme.transitions.duration.sm} ${({ theme }) => theme.transitions.easing.out};

      &:hover {
        color: ${({ theme }) => theme.text};
        background: ${({ theme }) => theme.colors.primary[50]};
      }
    }
  }

  .botao-indicator {
    font-size: ${({ theme }) => theme.typography.size.xs};
    color: ${({ theme }) => theme.colors.primary[500]};
    background: ${({ theme }) => theme.colors.primary[50]};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.radius.full};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .nav-links {
      display: none;
    }
  }
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.primary[100]};
  color: ${({ theme }) => theme.colors.primary[700]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.duration.sm} ${({ theme }) => theme.transitions.easing.out};

  &:hover {
    background: ${({ theme }) => theme.colors.primary[200]};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
    font-size: ${({ theme }) => theme.typography.size.xl};

    &:hover {
      background: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;