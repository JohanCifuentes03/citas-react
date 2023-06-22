import Form from "./components/Form"
import Header from "./components/Header"
import PatientsForm from "./components/PatientsForm"
import {useState, useEffect}from 'react'
function App() {

  const [patients, setPatients] = useState (JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient]   = useState({});


  useEffect( () => {
    localStorage.setItem('patients', JSON.stringify(patients))
  },[patients])

  const deletePatient = (id) => {
    const auxPatients = patients.filter( auxPatient => auxPatient.id != id)
    setPatients(auxPatients);
  }

  return (
    <div className="container mx-auto mt-10">
      <Header/>

      <div className="md:flex mt-5">
        <Form
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient} 
        />
        <PatientsForm
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
