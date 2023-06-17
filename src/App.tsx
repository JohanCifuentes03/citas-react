import Form from "./components/Form"
import Header from "./components/Header"
import PacientsForm from "./components/PacientsForm"


function App() {

  return (
    <div className="container mx-auto mt-10">
      <Header/>

      <div className="mt-10 md:flex">
        <Form/>
        <PacientsForm/>
      </div>

    </div>
  )
}

export default App
