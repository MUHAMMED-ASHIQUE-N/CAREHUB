import React from 'react'
import Signup from '../../components/Signup'
import Navbar from '../../components/Navbar'

const SignUp = () => {
  return (
    <div>
    <Navbar />
    <div className=" mx-auto w-[90%] md:w-[95%] xl:w-[85%]  ">
      <div>
        <Signup/>
      </div>
    </div>
  </div>
  )
}

export default SignUp
