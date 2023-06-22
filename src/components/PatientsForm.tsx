import Patients from './Patients';



const PatientsForm = ({patients, setPatient}) => {

  return (
    <div className="md:w-1/2  lg:w-3/5 md:h-screen overflow-y-scroll my-5">

      {patients.length != 0 ? (

        <div>
          <h2 className=" text-center font-black text-3xl">Patients Form</h2>
          <p className="text-center text-lg mt-5  mb-10"> 
              Manage your {''}
              <span className="text-indigo-600 font-bold  "> Patients and Reserves </span>
          </p>
        </div>

      ) : (


      <div>
        <h2 className=" text-center font-black text-3xl">There are not eny Patients</h2>
        <p className="text-center text-lg mt-5  mb-10"> 
            Start Adding some Patients {''}
            <span className="text-indigo-600 font-bold  "> and you will See them  </span>
        </p>
      </div>

      )}




        {patients.map( (patient) => 
          
          <Patients 
            key={patient.id}
            patient={patient}
            setPatient={setPatient}
          />
        )}
  

    </div>
  )
}

export default PatientsForm
