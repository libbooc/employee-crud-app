'use client'
import React from "react";
import { useState } from "react";
import { GrView } from "react-icons/gr";
import Modal from "./Modal";

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
    const [modalOpen, setModalOpen] = useState(false);

    return (

        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-sm btn-outline"> View <GrView size={14}/></button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}> 
            <form className="max-w-md mx-auto">
                <h3 className="font-bold text-lg">View Employee Details</h3>

                <div className="label mt-4">
                    <span className="label-text">First Name</span>
                </div>
                <label className="form-control">
                    <input name="firstName" id="firstName" type="text" placeholder="Type here" defaultValue={initialData.firstName} className="cursor-not-allowed input input-bordered input-primary w-full " readOnly />
                </label>

                <div className="label mt-4">
                    <span className="label-text">Last Name</span>
                </div>
                <label className="form-control">
                    <input name="lastName" id="lastName" type="text" placeholder="Type here" defaultValue={initialData.lastName} className="cursor-not-allowed input input-bordered input-primary w-full " readOnly />
                </label>

                <div className="label mt-4">
                    <span className="label-text">Job</span>
                </div>
                <label className="form-control">
                    <input name="job" id="job" type="text" placeholder="Type here" defaultValue={initialData.job} className="cursor-not-allowed input input-bordered input-primary w-full" readOnly />
                </label>

                <div className="label mt-4">
                    <span className="label-text">Email</span>
                </div>
                <label className="form-control">
                    <input name="email" id="email" type="text" placeholder="Type here" defaultValue={initialData.email} className="cursor-not-allowed input input-bordered input-primary w-full " readOnly />
                </label>
                </form>
            </Modal>
        </div>
    )
};

export default ViewEmployee;