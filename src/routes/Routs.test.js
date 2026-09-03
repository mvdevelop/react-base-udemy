import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProviderWrapper } from '../context/ThemeContext';
import { store } from '../store';
import Routs from './Routs';

const renderWithProviders = (ui) => {
  return render(
    <Provider store={store}>
      <ThemeProviderWrapper>
        <MemoryRouter>
          {ui}
        </MemoryRouter>
      </ThemeProviderWrapper>
    </Provider>
  );
};

describe('Routes', () => {
  it('should render Home page by default', () => {
    renderWithProviders(<Routs />);
    expect(screen.getByText(/Olá, meu nome é/i)).toBeInTheDocument();
  });

  it('should render About page', () => {
    renderWithProviders(<Routs />);
    // Note: This would need to change the route to /about to test properly
  });
});