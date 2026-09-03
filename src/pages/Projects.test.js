import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects Page', () => {
  it('should render title', () => {
    render(<Projects />);
    expect(screen.getByText('Meus Projetos')).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    render(<Projects />);
    expect(screen.getByText(/Trabalhos que demonstram minha capacidade/i)).toBeInTheDocument();
  });

  it('should render project cards', () => {
    render(<Projects />);
    expect(screen.getByText('Gerenciamento de Tarefas')).toBeInTheDocument();
    expect(screen.getByText('API de E-commerce')).toBeInTheDocument();
    expect(screen.getByText('Dashboard Analytics')).toBeInTheDocument();
  });

  it('should render tech tags', () => {
    render(<Projects />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('should render view all projects link', () => {
    render(<Projects />);
    const link = screen.getByText(/Ver Todos os Projetos no GitHub/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/mvdevelop');
  });
});