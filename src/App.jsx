import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesPaths from './pages/routes'
import ContextProviders from './context/contextProviders'
import NavBar from './components/navbar'

//Styles
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ContextProviders>
          <NavBar />
          <RoutesPaths />
        </ContextProviders>
      </BrowserRouter>
    </>
  )
}

export default App
