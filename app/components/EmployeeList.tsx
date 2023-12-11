import React from "react";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";
import ViewEmployee from "./ViewEmployee";

interface EmployeeListProps {
  data: any[]; // Replace 'any' with the actual type of your data
}

const EmployeeList: React.FC<EmployeeListProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
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