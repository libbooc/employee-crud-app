'use client'
import React from "react";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";
import ViewEmployee from "./ViewEmployee";
import TableHeader from "./TableHeader";

interface EmployeeListProps {
  data: any[]; 
}

const EmployeeList: React.FC<EmployeeListProps> = ({ data }) => {

  const tableHeaders = ['First Name', 'Last Name', 'Job', 'Email', 'Actions', ''];
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <TableHeader headers={tableHeaders} />
        <tbody>
          {data.map((item) => (
            <tr key={item?.id}>
              <td></td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{item?.firstName}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{item?.lastName}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">{item?.job}</span>
              </td>
              <td>{item?.email}</td>
              <td>
                <div className="flex items-center gap-4">
                  <ViewEmployee
                    employeeId={item?.id}
                    initialData={{
                      firstName: item?.firstName || "",
                      lastName: item?.lastName || "",
                      job: item?.job || "",
                      email: item?.email || "",
                    }}
                  />
                  <EditEmployee
                    employeeId={item?.id}
                    initialData={{
                      firstName: item?.firstName || "",
                      lastName: item?.lastName || "",
                      job: item?.job || "",
                      email: item?.email || "",
                    }}
                  />
                  <DeleteEmployee employeeId={item?.id} />
                </div>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;