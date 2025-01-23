import React from 'react'
const Speciality = (props) => {
  return (
    <div className='flex flex-col items-center gap-4 py-4 md:py-10'>
      <div><img src={props.image} alt="error" className='w-20 h-20' /></div>
      <h1 className='font-semibold  font-roboto'>{props.speciality}</h1>
    </div>
  )
}

export default Speciality
