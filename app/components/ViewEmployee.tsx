'use client'

import React from 'react';
import { GrView } from 'react-icons/gr';
import Button from './Button';

interface ViewEmployeeProps {
  employeeId: string;
  initialData: {
    firstName: string;
    lastName: string;
    job: string;
    email: string;
  };
}

const ViewEmployee: React.FC<ViewEmployeeProps> = ({ employeeId, initialData }) => {

  const handleViewClick = () => {
    window.location.href = `/employees/${employeeId}?firstName=${initialData.firstName}&lastName=${initialData.lastName}&job=${initialData.job}&email=${initialData.email}`;
  };

  return (
    <div>
      <Button onClick={handleViewClick} className="btn btn-sm btn-outline">
        View <GrView size={14} />
      </Button>
    </div>
  );
};

export default ViewEmployee;

