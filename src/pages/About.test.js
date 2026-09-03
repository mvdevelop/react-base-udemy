import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Page', () => {
  it('should render title', () => {
    render(<About />);
    expect(screen.getByText('Sobre Mim')).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    render(<About />);
    expect(screen.getByText('Conheça minha história e habilidades')).toBeInTheDocument();
  });

  it('should render skills', () => {
    render(<About />);
    expect(screen.getByText('Habilidades Técnicas')).toBeInTheDocument();
  });

  it('should render skill items', () => {
    render(<About />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript/TypeScript')).toBeInTheDocument();
  });

  it('should render info items', () => {
    render(<About />);
    expect(screen.getByText('Formação')).toBeInTheDocument();
    expect(screen.getByText('Experiência')).toBeInTheDocument();
    expect(screen.getByText('Localização')).toBeInTheDocument();
    expect(screen.getByText('Disponibilidade')).toBeInTheDocument();
  });
});