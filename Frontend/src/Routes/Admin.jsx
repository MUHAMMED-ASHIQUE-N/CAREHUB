import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Admin/Dashboard'
import Appointments from '../pages/Admin/Appointments'
import AddDoctors from '../pages/Admin/AddDoctors'
import DoctorsList from '../pages/Admin/DoctorsList'

const Admin = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/appointments_in_admin" element={<Appointments/>} />
        <Route path="/add_Doctors" element={<AddDoctors/>} />
        <Route path="/doctorsList" element={<DoctorsList/>} />
      </Routes>
   
    </div>
  )
}

export default Admin
