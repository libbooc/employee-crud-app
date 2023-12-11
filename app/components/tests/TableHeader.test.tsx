import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from '../TableHeader';


describe('TableHeader Component', () => {
  it('renders table headers correctly', () => {
    const headers = ['First Name', 'Last Name', 'Job', 'Email', 'Actions', ''];
    
    render(<TableHeader headers={headers} />);

    headers.forEach(header => {
      const headerElement = screen.getAllByText(header);
      expect(headerElement).toBeTruthy();
    });
  });
});