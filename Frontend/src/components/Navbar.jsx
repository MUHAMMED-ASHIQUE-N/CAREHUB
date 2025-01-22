import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  return (
    <nav className="bg-primaryColor py-4 text-white">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        
        <h1 className="font-viga tracking-[2px] text-3xl">Carehub</h1>
        
        <div className="hidden lg:flex items-center space-x-7 font-dmSans">
      
            <NavLink to={"/"}  className="relative text-white">
            Home
              <hr className="mx-auto absolute top-7 w-full border-2 transition-all duration-700 ease-in-out opacity-0" />
            </NavLink>
  
            <NavLink to={"/doctor"}  className="relative text-white">
            Doctors
              <hr className="mx-auto absolute top-7 w-full border-2 transition-all duration-700 ease-in-out opacity-0" />
            </NavLink>
  
            <NavLink to={"/about"}  className="relative text-white">
            About
              <hr className="mx-auto absolute top-7 w-full border-2 transition-all duration-700 ease-in-out opacity-0" />
            </NavLink>
  
            <NavLink to={"/contact-Us"}  className="relative text-white">
            Contact Us
              <hr className="mx-auto absolute top-7 w-full border-2 transition-all duration-700 ease-in-out opacity-0" />
            </NavLink>
  
        </div>

       
       

 
        <div className={`absolute top-16 left-0 w-full bg-primaryColor transition-all duration-500 ${menuOpen ? "opacity-100 h-auto py-5" : "opacity-0 h-0 overflow-hidden"}`}>
          <div className="flex flex-col space-y-4 text-center font-dmSans">
          
              <NavLink
              to={"/"}
                className="text-white text-lg py-2"
                onClick={() => setMenuOpen(false)}
              >
              Home
              </NavLink>
              <NavLink
              to={"/doctor"}
                className="text-white text-lg py-2"
                onClick={() => setMenuOpen(false)}
              >
              Doctors
              </NavLink>
              <NavLink
              to={"/about"}
                className="text-white text-lg py-2"
                onClick={() => setMenuOpen(false)}
              >
              About
              </NavLink>
              <NavLink
              to={"/contact-Us"}
                className="text-white text-lg py-2"
                onClick={() => setMenuOpen(false)}
              >
              Contact Us
              </NavLink>
         
             
           
          </div>
        </div>

       <div className="flex items-center space-x-7">
         { token ? <button onClick={()=> setToken(false)} className=" md:flex items-center gap-1  bg-buttonColor px-5 rounded-full font-dmSans">
          <span className="text-3xl">+</span> <span>Create </span>
          </button> : <div className="flex items-center relative ">
            <img src={assets.profile_pic} alt="" className="w-8 rounded-full" />
            <img src={assets.dropdown_icon} alt="" onClick={() => setDropDown(!dropDown)} />

           { dropDown ?  <div className="absolute mx-auto top-12 right-0 bg-white w-40 rounded-lg shadow-lg font-dmSans  text-black ">
              <div className="min-w-48 bg-stone-50 rounded flex flex-col gap-4 p-4 text-gray-600 font-medium">
                <p className="hover:text-black cursor-pointer">My Profile</p>
                <p className="hover:text-black cursor-pointer">My Appointments</p>
                <p className="hover:text-black cursor-pointer" onClick={()=> setToken(true)}> Logout</p>
              </div>
            </div> : ""
            }
          </div> }
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img src={menuOpen ? assets.cross_icon : assets.menu_icon} alt="Menu" className="w-8 h-8" />
          </button>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
