import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Common from './Routes/Common'
import Patient from './Routes/Patient'


const App = () => {
  return (
 <BrowserRouter>
 
 <Patient/>
 
 </BrowserRouter>
  )
}

export default App