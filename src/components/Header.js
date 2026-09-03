import React from 'react';
import { FaHome, FaUserAlt, FaCode, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useThemeContext } from '../context/ThemeContext';
import { Container, Nav, ThemeToggle, MobileMenu } from '../styles/HeaderStyles';

export default function Header() {
  const botaoClicado = useSelector(state => state.example.botaoClicado);
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <Container>
      <Nav>
        <Link to='/' className='logo'>
          <FaHome size={24} />
          <span>Meu Portfólio</span>
        </Link>

        <div className='nav-links'>
          <Link to='/'>
            <FaHome size={20} />
            <span>Home</span>
          </Link>
          <Link to='/about'>
            <FaUserAlt size={20} />
            <span>Sobre</span>
          </Link>
          <Link to='/projects'>
            <FaCode size={20} />
            <span>Projetos</span>
          </Link>
          <Link to='/contact'>
            <FaEnvelope size={20} />
            <span>Contato</span>
          </Link>
        </div>

        <ThemeToggle onClick={toggleTheme} aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}>
          {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </ThemeToggle>

        {botaoClicado && <span className='botao-indicator'>Clicado</span>}
      </Nav>

      <MobileMenu>
        <button aria-label='Menu'>☰</button>
      </MobileMenu>
    </Container>
  );
}