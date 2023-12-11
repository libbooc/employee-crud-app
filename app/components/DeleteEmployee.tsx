'use client'
import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deleteEmployee } from "../lib/actions";
import Button from "./Button";
import DeleteConfirmationForm from "./DeleteConfirmationForm";

interface DeleteEmployeeProps {
    employeeId: string;
}
  
  const DeleteEmployee: React.FC<DeleteEmployeeProps> = ({ employeeId }) => {
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await deleteEmployee(employeeId);
      setModalOpen(false);
    };

    return (

        <div className="flex justify-end">
            <Button onClick={() => setModalOpen(true)} className="btn btn-sm btn-outline btn-error w-full" dataTestId="delete-employee-button">
                Delete <MdOutlineDeleteOutline size={16} />
            </Button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}> 
                <DeleteConfirmationForm onSubmit={handleSubmit} onCancel={() => setModalOpen(false)} />
            </Modal>
            
        </div>
    )
};

export default DeleteEmployee;