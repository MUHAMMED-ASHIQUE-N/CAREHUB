import React from 'react'
import Navbar_admin from '../../components/Navbar_admin'
import Sidebar from '../../components/Sidebar'

const DoctorsList = () => {
  return (
    <div className="flex flex-col h-screen">
    <Navbar_admin /> {/* Navbar on top */}
    <div className="flex flex-1">
      <div className="flex-shrink-0">
        <Sidebar /> {/* Sidebar on the left */}
      </div>
      <div className="flex-1 p-4 bg-gray-50">
        {/* Main content goes here */}
        <h1>Dashboard Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          velit distinctio culpa ipsum esse ipsam ullam illo officia tenetur
          quae.
        </p>
        {/* Add more content to make the sidebar height adjust */}
      </div>
    </div>
  </div>
  )
}

export default DoctorsList
