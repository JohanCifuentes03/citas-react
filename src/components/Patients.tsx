const Patients = ({patient}) => {

    const {name, owner, email, date, symptoms} = patient;


    return (
    
        <div className=" m-3 p-3 bg-white shadow-md rounded-xl">
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

        </div>
  )
}

export default Patients
