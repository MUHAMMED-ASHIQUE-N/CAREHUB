import React, { useEffect, useState } from "react";

//assets
import home_icon from "../assets/assets_admin/home_icon.svg";
import appointment_icon from "../assets/assets_admin/appointment_icon.svg";
import add_icon from "../assets/assets_admin/add_icon.svg";
import people_icon from "../assets/assets_admin/people_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";




const Sidebar = () => {


  const loction = useLocation();
  const navigate = useNavigate();

const [activeItem, setActiveItem] = useState(location.pathname)

useEffect(() => {
  setActiveItem(loction.pathname)
}, [loction.pathname])

  const handleIetemClick = (path)=>{
    setActiveItem(path);
    navigate(path)
  }

  return (
    <div className="w-20 md:w-24 lg:w-52 flex justify-center h-auto">
    <div className="mt-5 w-full flex flex-col items-center gap-7 text-black">
      {/* Home Icon with Blue Background */}
      <div onClick={()=>handleIetemClick("/")} className={` w-full cursor-pointer p-3 flex justify-center ${activeItem  === "/"? "bg-blue-50  border-r-4 border-blue-500 rounded-r-lg":""} `}>
        <div className="md:w-[80%] flex gap-5 items-center ">
          <img src={home_icon} alt="Aapointment" className="w-6 h-6" />
          <p className="hidden md:block  mt-1">Dashboard</p>
        </div>
      </div>

      <div onClick={()=>{ handleIetemClick("/appointments_in_admin")
         navigate("/appointments_in_admin") }} 
         className={` w-full cursor-pointer p-3 flex justify-center ${activeItem  === "/appointments_in_admin"? "bg-blue-50  border-r-4 border-blue-500 rounded-r-lg":""} `}>
        <div className="md:w-[80%] flex gap-5 items-center ">
          <img src={appointment_icon} alt="Aapointment" className="w-6 h-6" />
          <p className="hidden md:block  mt-1">Appointments</p>
        </div>
      </div>

      <div onClick={()=>handleIetemClick("/add_Doctors")} className={` w-full cursor-pointer p-3 flex justify-center ${activeItem === "/add_Doctors" ? "bg-blue-50  border-r-4 border-blue-500 rounded-r-lg":""} `}>
        <div  className="md:w-[80%] flex gap-5 items-center ">
          <img src={add_icon} alt="Add doctors" className="w-6 h-6" />
          <p className="hidden md:block  mt-1">Add Doctors</p>
        </div>
      </div>

      <div onClick={()=>handleIetemClick("/doctorsList")} className={` w-full cursor-pointer p-3 flex justify-center ${activeItem === "/doctorsList" ? "bg-blue-50  border-r-4 border-blue-500 rounded-r-lg":""} `}>
        <div  className="md:w-[80%] flex gap-5 items-center ">
          <img src={people_icon} alt="ctors_list" className="w-6 h-6" />
          <p className="hidden md:block  mt-1">Doctors List</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sidebar
