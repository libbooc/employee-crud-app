import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddEmployee from '../AddEmployee';


describe('AddEmployee Component', () => {
  it('renders the AddEmployee component', () => {
    render(<AddEmployee />);

    const addButton = screen.getByTestId('add-employee-button');
    expect(addButton).toBeInTheDocument();
  });

  it('opens the modal when the add button is clicked', () => {
    render(<AddEmployee />);

    const addButton = screen.getByTestId('add-employee-button');
    fireEvent.click(addButton);

    const modal = screen.getByText('First Name');
    expect(modal).toBeInTheDocument();
  });
});