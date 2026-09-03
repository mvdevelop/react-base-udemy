import React from 'react';
import { render, screen } from '@testing-library/react';
import Page404 from './Page404';

describe('Page404 Component', () => {
  it('should render error code', () => {
    render(<Page404 />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('should render title', () => {
    render(<Page404 />);
    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<Page404 />);
    expect(screen.getByText(/A página que você está procurando/i)).toBeInTheDocument();
  });

  it('should render home link', () => {
    render(<Page404 />);
    const link = screen.getByText(/Voltar para o início/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});