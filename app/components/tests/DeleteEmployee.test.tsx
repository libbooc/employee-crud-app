import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { deleteEmployee } from '../../lib/actions';
import DeleteEmployee from '../DeleteEmployee';


jest.mock('../../lib/actions', () => ({
  deleteEmployee: jest.fn(),
}));

describe('DeleteEmployee Component', () => {

  it('calls deleteEmployee when the form is submitted', async () => {
    const { getByText } = render(<DeleteEmployee employeeId="123" />);
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    const confirmButton = getByText('Confirm');
    fireEvent.click(confirmButton);

    await waitFor(() => expect(deleteEmployee).toHaveBeenCalledWith('123'));

  });

});