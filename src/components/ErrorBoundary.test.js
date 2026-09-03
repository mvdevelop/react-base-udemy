import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProviderWrapper } from '../context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from '../store';
import ErrorBoundary from './ErrorBoundary';

const ThrowingComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary Component', () => {
  it('should render without crashing when no error occurs', () => {
    render(
      <ThemeProviderWrapper>
        <Provider store={store}>
          <ErrorBoundary>
            <ThrowingComponent />
          </ErrorBoundary>
        </Provider>
      </ThemeProviderWrapper>
    );
    expect(screen.getByText('ErrorBoundary caught an error')).toBeInTheDocument();
  });

  it('should display error UI when an error is thrown', () => {
    render(
      <ThemeProviderWrapper>
        <Provider store={store}>
          <ErrorBoundary>
            <ThrowingComponent />
          </ErrorBoundary>
        </Provider>
      </ThemeProviderWrapper>
    );

    expect(screen.getByText('⚠️ Algo deu errado')).toBeInTheDocument();
    expect(screen.getByText('Pedimos desculpas pelo inconveniente')).toBeInTheDocument();
    expect(screen.getByText('Tente recarregar a página ou volte para a página inicial')).toBeInTheDocument();
  });

  it('should reset error state after clicking "Tentar novamente"', () => {
    const user = require('@testing-library/user-event').setup();

    render(
      <ThemeProviderWrapper>
        <Provider store={store}>
          <ErrorBoundary>
            <ThrowingComponent />
          </ErrorBoundary>
        </Provider>
      </ThemeProviderWrapper>
    );

    const retryButton = screen.getByText('Tentar novamente');
    await user.click(retryButton);

    expect(screen.queryByText('⚠️ Algo deu errado')).not.toBeInTheDocument();
    expect(screen.queryByText('Tente recarregar a página')).not.toBeInTheDocument();
  });
});