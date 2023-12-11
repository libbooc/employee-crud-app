import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  const mockOnClick = jest.fn();


  it('calls the onClick handler when the button is clicked', () => {
    render(<Button onClick={mockOnClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('applies the provided className to the button', () => {
    render(<Button onClick={mockOnClick} className="custom-button">Click me</Button>);
    expect(screen.getByText('Click me').classList.contains('custom-button')).toBe(true);
  });

});