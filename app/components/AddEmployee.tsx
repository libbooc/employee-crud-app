'use client'
import React from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./Modal";
import { useState } from "react";
import { addEmployee } from '@/lib/actions'

const AddEmployee = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (

        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full"> Add New Employee <AiOutlinePlus className="ml-2" size={18}/> </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}> 
            <form action={ addEmployee }>
                <h3 className="font-bold text-lg">Add New Employee</h3>

                <div className="label">
                    <span className="label-text">First Name</span>
                </div>
                <label className="form-control w-full">
                    <input name="firstName" id="firstName" type="text" placeholder="Type here" className="input input-bordered w-full" />
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
                    <button type="submit" onClick={() => setModalOpen(false)}  className="btn btn-primary w-full">Submit</button>
                </div>
                </form>
            </Modal>
        </div>
    )
};

export default AddEmployee;