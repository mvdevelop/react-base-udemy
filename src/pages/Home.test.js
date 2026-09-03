import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Page', () => {
  it('should render greeting', () => {
    render(<Home />);
    expect(screen.getByText(/Olá, meu nome é/i)).toBeInTheDocument();
  });

  it('should render name', () => {
    render(<Home />);
    expect(screen.getByText('Marco')).toBeInTheDocument();
    expect(screen.getByText('Pinto')).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    render(<Home />);
    expect(screen.getByText('Desenvolvedor Fullstack')).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<Home />);
    expect(screen.getByText(/Especialista em criar aplicações web modernas/i)).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Home />);
    const projectsLink = screen.getByText('Ver Projetos');
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute('href', '/projects');
  });
});