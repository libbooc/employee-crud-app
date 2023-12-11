import React from 'react';
import { render } from '@testing-library/react';

import AddEmployeeForm from '../AddEmployeeForm';

describe('AddEmployeeForm Component', () => {
  it('renders the submit button', () => {

    const mockOnSubmit = jest.fn();

    const { getByText } = render(<AddEmployeeForm onSubmit={mockOnSubmit} />);

    const submitButton = getByText('Submit');
    expect(submitButton).toBeTruthy();
  });
});