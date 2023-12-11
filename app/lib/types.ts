export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    job: string;
    email: string;
  }
  
  export interface EmployeeListProps {
    data: Employee[];
  }