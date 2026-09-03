import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input Component', () => {
  it('should render with label', () => {
    render(<Input label="Email" />);
    const label = screen.getByText('Email');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'email');
  });

  it('should render with placeholder', () => {
    render(<Input placeholder="Enter your email" />);
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toBeInTheDocument();
  });

  it('should show error message when error is provided', () => {
    render(<Input label="Email" error="Invalid email" />);
    const error = screen.getByText('Invalid email');
    expect(error).toBeInTheDocument();
    expect(error).toHaveRole('alert');
  });

  it('should show helper text when helperText is provided', () => {
    render(<Input label="Email" helperText="We will never share your email" />);
    const helper = screen.getByText('We will never share your email');
    expect(helper).toBeInTheDocument();
  });

  it('should not show error when both error and helperText are provided', () => {
    render(<Input label="Email" error="Invalid" helperText="Helper" />);
    expect(screen.getByText('Invalid')).toBeInTheDocument();
    expect(screen.queryByText('Helper')).not.toBeInTheDocument();
  });

  it('should call onChange when value changes', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Input label="Name" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'John');
    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it('should mark input as invalid when error is present', () => {
    render(<Input label="Email" error="Invalid" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});