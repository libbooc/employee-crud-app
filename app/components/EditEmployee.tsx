'use client'
import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { MdOutlineEdit } from "react-icons/md";
import { updateEmployee } from "../lib/actions";
import Button from "./Button";

interface EditEmployeeProps {
    employeeId: string;
    initialData: {
      firstName: string;
      lastName: string;
      job: string;
      email: string;
    };
  }
  
  const EditEmployee: React.FC<EditEmployeeProps> = ({ employeeId, initialData }) => {
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      await updateEmployee(employeeId, formData);
      setModalOpen(false);
    };

    return (

        <div>
            <Button onClick={() => setModalOpen(true)} className="btn btn-sm btn-primary w-28"> Update <MdOutlineEdit size={14} /> </Button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}> 
                <form onSubmit={ handleSubmit }>
                    <h3 className="font-bold text-xl text-center mb-3">Update Employee</h3>

                    <div className="label">
                        <span className="label-text">First Name</span>
                    </div>
                    <label className="form-control w-full">
                        <input name="firstName" id="firstName" type="text" placeholder="Type here" defaultValue={initialData.firstName} className="input input-bordered w-full" />
                    </label>

                    <div className="label mt-4">
                        <span className="label-text">Last Name</span>
                    </div>
                    <label className="form-control w-full">
                        <input name="lastName" id="lastName" type="text" placeholder="Type here" defaultValue={initialData.lastName} className="input input-bordered w-full" />
                    </label>

                    <div className="label mt-4">
                        <span className="label-text">Job</span>
                    </div>
                    <label className="form-control w-full">
                        <input name="job" id="job" type="text" placeholder="Type here" defaultValue={initialData.job} className="input input-bordered w-full" />
                    </label>

                    <div className="label mt-4">
                        <span className="label-text">Email</span>
                    </div>
                    <label className="form-control w-full">
                        <input name="email" id="email" type="text" placeholder="Type here" defaultValue={initialData.email} className="input input-bordered w-full" />
                    </label>

                    <div className="modal-action mt-6 text-center">
                        <button type="submit" onClick={() => setModalOpen(false)}  className="btn w-full">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
};

export default EditEmployee;