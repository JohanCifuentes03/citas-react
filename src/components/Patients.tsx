import { useState } from "react";
import Modal from "./Modal";

const Patients = ({patient, setPatient, deletePatient}) => {

    const {name, owner, email, date, symptoms, id} = patient;
    const [showModal, setShowModal] = useState(false)

    const deleteHandle = () =>{
        setShowModal(true)
    }

    const confirmDelete = () =>{
        deletePatient(id)
        setShowModal(false)
    }

    const cancelDelete = () =>{
        setShowModal(false)
    }

    return (
    
        <div className=" m-3 p-3 bg-white shadow-md rounded-xl">

            
            <Modal isOpen={showModal} onClose={cancelDelete}>
                {/* Contenido de la ventana emergente */}
                
                <p className="uppercase ">Do you want to delete the patient?</p>
                
                <button  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md mx-3" onClick={confirmDelete}>Yes</button>
                <button  className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-md mx-4" onClick={cancelDelete}>No</button>
                
            </Modal>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Name:  {''}
                <span className="font-normal normal-case">{name}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase ">Owner:  {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase ">Email:  {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase ">Date:  {''}
                <span className="font-normal normal-case">{date}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase ">Symptoms:  {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>


            <div className="container flex space-x-5 mt-7 mb-4">

                <button
                type="button"
                className="py-2 px-10 bg-indigo-600  hover:bg-indigo-800 rounded-md
                           text-white font-bold transition-all"
                onClick={() => setPatient(patient)}
                >Edit</button>


                <button
                type="button"
                className="py-2 px-10 bg-red-500 hover:bg-red-800 rounded-md
                           text-white font-bold transition-all"
                onClick={deleteHandle}
                >Delete</button>
            </div>

        </div>
  )
}

export default Patients
