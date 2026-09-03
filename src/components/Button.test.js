import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  it('should render the button with children', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('should render with different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveStyle('background: #4a6cf7');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveStyle('background: #ffc51f');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveStyle('background: transparent');
  });

  it('should render with different sizes', () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveStyle('padding: 4px 8px');

    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveStyle('padding: 8px 16px');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should show loading spinner when loading is true', () => {
    render(<Button loading>Submit</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render as a link when as prop is provided', () => {
    render(<Button as="a" href="/home">Go home</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/home');
  });
});