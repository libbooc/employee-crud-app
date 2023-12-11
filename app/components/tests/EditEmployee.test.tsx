import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import EditEmployee from '../EditEmployee';
import { updateEmployee } from '../../lib/actions';


jest.mock('../../lib/actions', () => ({
  updateEmployee: jest.fn(),
}));

describe('EditEmployee Component', () => {
  it('calls updateEmployee with the correct data when the form is submitted', async () => {

    const { getByText} = render(<EditEmployee employeeId="123" initialData={{ firstName: 'John', lastName: 'Doe', job: 'Engineer', email: 'john@example.com' }} />);
    
    const updateButton = getByText('Update');
    fireEvent.click(updateButton);

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(updateEmployee).toHaveBeenCalledWith('123', expect.any(FormData));
    });
  });
});