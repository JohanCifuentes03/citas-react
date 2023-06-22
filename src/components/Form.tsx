import { useState, useEffect } from 'react'
import Error from "./Error"



const Form = ({patients, setPatients, patient, setPatient }) => {
  const [name, setName]   = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate]   = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false)
  
  useEffect(() => {
    if(Object.keys(patient).length > 0){
      setName (patient.name);
      setOwner(patient.owner);
      setEmail(patient.email)
      setDate (patient.date)
      setSymptoms(patient.symptoms)
    }
  },[patient])

  const generateId = () =>{
    const number   = Math.random().toString(36).substring(2);
    const letters  = Date.now().toString(36) 
    return letters + number;
  }


  const handleSubmit  = (e) : void =>  {
    e.preventDefault();

    //Form validation
    if([name, owner, email ,date, symptoms].includes('')){
      setError(true);
      return
    }
 

    const objectPatient = {


      id: '',
      name,
      owner,
      email,
      date,
      symptoms,
    };


    if(patient.id){
      // Edit patient
      objectPatient.id = patient.id;
  
      const updatedPatients = patients.map( 
        patienteState => patienteState.id ===
        patient.id ? objectPatient : patienteState);

      setPatients(updatedPatients);
      setPatient({});

    }else{

      // Add patient
      objectPatient.id = generateId();
      setPatients([...patients, objectPatient])
    }


    // Reset Form


    setName('');
    setOwner('');
    setEmail('')
    setDate('')
    setSymptoms('')
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 ml-5 my-5">
      <h2 className="font-black text-3xl text-center">Patients Monitoring</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patients and {''}
        <span className="text-indigo-600 font-bold ">Manage</span>
      </p>


      <form 
      className=" bg-white shadow-md rounded-lg py-8 px-5"
      onSubmit={handleSubmit}
      >
        {error && <Error  message={"You must fill in all the blanks"}/> }
        <div className="mb-5">
            <label  htmlFor="pet" className="block text-gray-700 uppercase font-bold" > Pet's Name </label>

            <input  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" 
                    type="text"
                    name="" id="pet" 
                    placeholder=" Pet's Name" 
                    value={name}
                    onChange= {(e)=> setName(e.target.value)}
                    
            />
        </div>

        <div className="mb-5">
            <label  htmlFor="owner" className="block text-gray-700 uppercase font-bold" > Owner's Name </label>

            <input  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" 
                    type="text"
                    name="" id="owner" 
                    placeholder=" Owner's Name" 
                    value={owner}
                    onChange= {(e)=> setOwner(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label  htmlFor="email" className="block text-gray-700 uppercase font-bold" > Email </label>

            <input  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" 
                    type="text"
                    name="" id="email" 
                    placeholder="Contact Email" 
                    value={email}
                    onChange= {(e)=> setEmail(e.target.value)}
            />
        </div>


        <div className="mb-5">
            <label  htmlFor="date" className="block text-gray-700 uppercase font-bold" > Date </label>

            <input  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" 
                    type="date"
                    name="" id="date"
                    value={date}
                    onChange= {(e)=> setDate(e.target.value)}
            />
        </div>


        <div className="mb-5">
            <label  htmlFor="date" className="block text-gray-700 uppercase font-bold" > Symptoms </label>

            <textarea 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                id="symptoms"
                placeholder="Enter the Symptoms"
                value={symptoms}
                onChange= {(e)=> setSymptoms(e.target.value)}
                >
            </textarea>
        </div>

        <div className="mb-5">
            <label  htmlFor="date" className="block text-gray-700 uppercase font-bold mb-2" > Submit </label>

            <input 
                type="submit"
                className="bg-indigo-600 w-full text-white rounded-lg  uppercase font-bold p-2 
                            hover:bg-indigo-700 cursor-pointer transition-all"
                value={(patient.id ) ? 'Edit Patient' : 'Create Patient'}>
            </input>
        </div>
        
      </form>
    </div>
  )
}

export default Form
