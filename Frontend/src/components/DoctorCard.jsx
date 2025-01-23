import React from 'react'
const DoctorCard = (props) => {
  return (
    <div className='flex flex-col  gap-4  bg-white  rounded-lg shadow-lg border border-gray-100 cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
      <div className='bg-[#ededed] rounded-tr-lg rounded-tl-lg '><img src={props.image} alt="error" /></div>
      <div className='p-4'>
        <div className='flex items-center gap-2'><div className='w-2 h-2 bg-green-600 rounded-full '></div> <p className='text-green-600 font-semibold '>Available</p> </div>
        <h1 className='font-bold font-arimo'>{props.name}</h1>
        <p className='text-gray-500 font-arimo'> {props.speciality}</p>
      </div>
    </div>
  )
}

export default DoctorCard
