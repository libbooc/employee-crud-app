'use client'
import React from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./Modal";
import { useState } from "react";
import { addEmployee } from "../lib/actions";
import Button from "./Button";
import AddEmployeeForm from "./AddEmployeeForm";


const AddEmployee = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await addEmployee(formData);
        setModalOpen(false);
      };

    return (

        <div>
            <Button onClick={() => setModalOpen(true)} className="btn btn-primary w-full" dataTestId="add-employee-button">
                Add New Employee <AiOutlinePlus className="ml-2" size={18} />
            </Button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}> 
                <AddEmployeeForm onSubmit={handleSubmit} />
            </Modal>
        </div>
    )
};

export default AddEmployee;