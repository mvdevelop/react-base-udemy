import styled, { createGlobalStyle } from 'styled-components';
import { useTheme } from '../context/theme';
import 'react-toastify/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.family.primary};
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary[500]};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: ${({ theme }) => theme.radius.md};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    transition: all ${({ theme }) => theme.transitions.duration.md} ${({ theme }) => theme.transitions.easing.out};
  }

  button:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  button:active {
    transform: translateY(0);
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary[500]};
    transition: color ${({ theme }) => theme.transitions.duration.sm} ${({ theme }) => theme.transitions.easing.out};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }

  ul {
    list-style: none;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary[500]};
    border-radius: ${({ theme }) => theme.radius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }

  /* Toastify customizations */
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${({ theme }) => theme.colors.success};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${({ theme }) => theme.colors.error};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    background: ${({ theme }) => theme.colors.info};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--warning {
    background: ${({ theme }) => theme.colors.warning};
  }
`;

export const Container = styled.section`
  max-width: 1200px;
  background: ${({ theme }) => theme.background};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export default GlobalStyle;