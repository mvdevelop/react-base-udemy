import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('should render children correctly', () => {
    render(<Card>Hello world</Card>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('should render with header', () => {
    render(<Card header={<h3>Card Title</h3>}>Content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should render with body', () => {
    render(<Card body={<p>Body content</p>}>Children</Card>);
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });

  it('should render with footer', () => {
    render(<Card footer={<div>Footer content</div>}>Content</Card>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('should render with image', () => {
    render(<Card image="https://example.com/image.jpg" />);
    const image = screen.getByAltText('');
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('should apply hover class when hover prop is true', () => {
    const { container } = render(<Card hover>Hoverable</Card>);
    const card = container.firstChild;
    expect(card).toHaveStyle('transition: all 0.15s ease-out');
  });
});