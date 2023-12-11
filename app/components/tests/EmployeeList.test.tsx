import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmployeeList from '../EmployeeList';


describe('EmployeeList Component', () => {
  const testData = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      job: 'Developer',
      email: 'john.doe@example.com',
    },
  ];

  it('renders employee list', () => {
    render(<EmployeeList data={testData} />);
    
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  it('edits an employee', () => {
    render(<EmployeeList data={testData} />);

    fireEvent.click(screen.getByText('Update'));
    expect(screen.getByText('Update Employee')).toBeInTheDocument();
  });

  it('deletes an employee', () => {
    render(<EmployeeList data={testData} />);
    
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('views an employee', () => {
    render(<EmployeeList data={testData} />);
    fireEvent.click(screen.getByText('View'));

  });
});