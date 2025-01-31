import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Common from './Routes/Common'
import Patient from './Routes/Patient'
import Admin from './Routes/Admin'
import Pharmacy from './Routes/Pharmacy'


const App = () => {
  return (
 <BrowserRouter>
 


 <Admin />

 
 </BrowserRouter>
  )
}

export default App;