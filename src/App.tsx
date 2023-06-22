import Form from "./components/Form"
import Header from "./components/Header"
import PatientsForm from "./components/PatientsForm"
import {useState}from 'react'
function App() {

  const [patients, setPatients] = useState ([])
  const [patient, setPatient]   = useState({})

  return (
    <div className="container mx-auto mt-10">
      <Header/>

      <div className="md:flex mt-5">
        <Form
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        />
        <PatientsForm
          patients={patients}
          setPatient={setPatient}
        />
      </div>
        
      

    </div>
  )
}

export default App
