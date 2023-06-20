import { useState, useEffect } from 'react'

const Form = () => {
  const [name, setName]   = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate]   = useState('');
  const [symptoms, setSymptoms] = useState('');
  
  
  const handleSubmit  = (e : React.FormEvent<HTMLFormElement>) : void =>   {
    e.preventDefault();
    console.log('Sending form');
    
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Pacients Monitoring</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add pacients and {''}
        <span className="text-indigo-600 font-bold ">Manage</span>
      </p>


      <form 
      className=" bg-white shadow-md rounded-lg py-8 px-5"
      onSubmit={handleSubmit}
      >
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
                    placeholder=" Owner's Name" />
        </div>

        <div className="mb-5">
            <label  htmlFor="email" className="block text-gray-700 uppercase font-bold" > Email </label>

            <input  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" 
                    type="text"
                    name="" id="email" 
                    placeholder="Contact Email" />
        </div>


        <div className="mb-5">
            <label  htmlFor="date" className="block text-gray-700 uppercase font-bold" > Date </label>

            <input  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" 
                    type="date"
                    name="" id="date"/>
        </div>


        <div className="mb-5">
            <label  htmlFor="date" className="block text-gray-700 uppercase font-bold" > Symptoms </label>

            <textarea 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                id="symptoms"
                placeholder="Enter the Symptoms">
            </textarea>
        </div>

        <div className="mb-5">
            <label  htmlFor="date" className="block text-gray-700 uppercase font-bold mb-2" > Submit </label>

            <input 
                type="submit"
                className="bg-indigo-600 w-full text-white rounded-lg  uppercase font-bold p-2 
                            hover:bg-indigo-700 cursor-pointer transition-all"
                value="Add Patient">
            </input>
        </div>
        
      </form>
    </div>
  )
}

export default Form
