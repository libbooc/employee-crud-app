import React from 'react';

interface AddEmployeeFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onSubmit }) => {
    
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto" data-testid="add-employee-form">
      <h3 className="font-bold text-lg">Add New Employee</h3>

      <div className="label" id="firstNameLabel">
        <span className="label-text">First Name</span>
      </div>
      <label className="form-control w-full">
        <input name="firstName" id="firstName" data-testid="firstName" type="text" placeholder="Type here" className="input input-bordered w-full" />
      </label>

      <div className="label mt-4">
        <span className="label-text">Last Name</span>
      </div>
      <label className="form-control w-full">
        <input name="lastName" id="lastName" type="text" placeholder="Type here" className="input input-bordered w-full" />
      </label>

      <div className="label mt-4">
        <span className="label-text">Job</span>
      </div>
      <label className="form-control w-full">
        <input name="job" id="job" type="text" placeholder="Type here" className="input input-bordered w-full" />
      </label>

      <div className="label mt-4">
        <span className="label-text">Email</span>
      </div>
      <label className="form-control w-full">
        <input name="email" id="email" type="text" placeholder="Type here" className="input input-bordered w-full" />
      </label>

      <div className="modal-action mt-4 text-center">
        <button type="submit"  className="btn btn-primary w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddEmployeeForm;