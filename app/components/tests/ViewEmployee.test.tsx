import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ViewEmployee from '../ViewEmployee';


describe('ViewEmployee Component', () => {
  it('renders the ViewEmployee component', () => {
    render(
      <ViewEmployee
        employeeId="1"
        initialData={{
          firstName: 'John',
          lastName: 'Doe',
          job: 'Developer',
          email: 'john.doe@example.com',
        }}
      />
    );

    const viewButton = screen.getByText('View');
    expect(viewButton).toBeInTheDocument();
  });


});