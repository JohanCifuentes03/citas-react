import Pacients from "./Pacients"



const PacientsForm = () => {
  return (
    <div className="md:w-1/2  lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className=" text-center font-black text-3xl">Pacients Form</h2>
      <p className="text-center text-lg mt-5  mb-10"> 
        Manage your {''}
        <span className="text-indigo-600 font-bold  "> Pacients and Reserves </span>
      </p>

      <div>
        <Pacients/>
        <Pacients/>
        <Pacients/>
        <Pacients/>
      </div>
  

    </div>
  )
}

export default PacientsForm
