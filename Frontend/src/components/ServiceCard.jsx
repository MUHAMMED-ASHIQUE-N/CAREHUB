import React from 'react'
import img from "../assets/assets_frontend/prescription.svg"
const ServiceCard = () => {
  return (
    
    <div className="flex flex-col items-center justify-center gap-4 text-center bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg transition-transform duration-300 hover:scale-105">
    {/* Image */}
    <img src={img}  className="w-16 h-16 object-contain" />

    {/* Title */}
    <h1 className="font-bold text-xl text-gray-800">General Treatment</h1>

    {/* Description */}
    <p className="text-gray-600 text-sm sm:text-base px-2 sm:px-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.
    </p>
  </div>
  )
}

export default ServiceCard
