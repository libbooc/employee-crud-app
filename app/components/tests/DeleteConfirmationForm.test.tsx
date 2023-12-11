import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteConfirmationForm from '../DeleteConfirmationForm';

describe('DeleteConfirmationForm Component', () => {
  it('calls onSubmit when the form is submitted', async () => {
    const onSubmitMock = jest.fn();
    const onCancelMock = jest.fn();

    render(<DeleteConfirmationForm onSubmit={onSubmitMock} onCancel={onCancelMock} />);

    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);

    await screen.findByText('Are you sure you want to remove this employee?');

    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('calls onCancel when the Cancel button is clicked', () => {
    const onSubmitMock = jest.fn();
    const onCancelMock = jest.fn();

    render(<DeleteConfirmationForm onSubmit={onSubmitMock} onCancel={onCancelMock} />);

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(onCancelMock).toHaveBeenCalled();
  });
});