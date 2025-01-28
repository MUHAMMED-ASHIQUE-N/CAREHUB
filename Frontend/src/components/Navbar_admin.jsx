import React from 'react'

const Navbar_admin = () => {
  return (
    <div className='bg-white border-b w-full py-4'>
      <div className='flex justify-between  ' >
        <div className='flex gap-1 md:gap-4'>
            <div className='flex flex-col pl-5 md:pl-20'>
                <h1 className='text-3xl font-viga text-primaryColor'>Carehub</h1>
                <p className='text-xs text-gray-700y'>Dashboard panel</p>
            </div>
         <button className='border h-8 px-3 md:px-5 rounded-full text-xs md:text-sm '> Admin </button>

        </div>
        <div className='pr-5 md:pr-20' >   
            <button className='mt-2 text-sm md:text-base py-2 px-7 md:px-12 bg-buttonColor rounded-full text-white font-semibold '>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar_admin
