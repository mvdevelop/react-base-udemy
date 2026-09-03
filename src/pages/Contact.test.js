import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Page', () => {
  it('should render title', () => {
    render(<Contact />);
    expect(screen.getByText('Entre em Contato')).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    render(<Contact />);
    expect(screen.getByText(/Tem um projeto em mente/i)).toBeInTheDocument();
  });

  it('should render form fields', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText('Seu nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Seu e-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Assunto')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Sua mensagem...')).toBeInTheDocument();
  });

  it('should render submit button', () => {
    render(<Contact />);
    const button = screen.getByRole('button', { name: 'Enviar Mensagem' });
    expect(button).toBeInTheDocument();
  });

  it('should render contact info', () => {
    render(<Contact />);
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/Localização/i)).toBeInTheDocument();
  });
});