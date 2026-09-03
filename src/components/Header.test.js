import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProviderWrapper } from '../context/ThemeContext';
import { store } from '../store';
import Header from './Header';

const renderWithProviders = (ui) => {
  return render(
    <Provider store={store}>
      <ThemeProviderWrapper>
        {ui}
      </ThemeProviderWrapper>
    </Provider>
  );
};

describe('Header Component', () => {
  it('should render navigation links', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('should render theme toggle button', () => {
    renderWithProviders(<Header />);
    const toggleButton = screen.getByRole('button', { name: /Ativar modo escuro/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('should toggle theme when clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Header />);
    const toggleButton = screen.getByRole('button', { name: /Ativar modo escuro/i });
    await user.click(toggleButton);
    expect(screen.getByRole('button', { name: /Ativar modo claro/i })).toBeInTheDocument();
  });
});