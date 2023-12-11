'use client'
import React from "react";
import { useState } from "react";
import { deleteEmployee, DeleteEmployeeResult} from '@/lib/actions'
import Modal from "./Modal";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface DeleteEmployeeProps {
    employeeId: string;
}
  
  const DeleteEmployee: React.FC<DeleteEmployeeProps> = ({ employeeId }) => {
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await deleteEmployee (employeeId);
      setModalOpen(false);
    };

    return (

        <div className="flex justify-end">
            <button onClick={() => setModalOpen(true)} className="btn btn-sm btn-outline btn-error"> Delete <MdOutlineDeleteOutline size={16}/></button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}> 
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <h3 className="font-bold text-lg">Delete Employee</h3>

                <div className="label">
                    <span className="label-text">Are you sure you want to remove this employee?</span>
                </div>

                <div className="modal-action mt-4 flex justify-end">
                    <button type="submit" className="btn btn-sm btn-error mr-2">Confirm</button>
                    <button type="button" onClick={() => setModalOpen(false)} className="btn btn-sm">Cancel</button>
                </div>
                </form>
            </Modal>
            
        </div>
    )
};

export default DeleteEmployee;