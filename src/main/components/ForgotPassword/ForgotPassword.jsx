import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

function ForgotPassword() {
  return (
    <div >
       <div className='flex flex-col justify-center items-center h-screen'>
  <div className='text-center w-1/4'>
  <div className='text-4xl font-semibold pb-2'>Forgot Password</div>

    <div className='text-lg text-gray-100 font-medium'>No worries, we’ll send you reset instructions</div>
    <div className='px-2'>
    <div className='py-4'>
      <div className='text-left text-lg font-semibold pb-3'>Email:</div>
      <input type="text" placeholder="Enter your email" class="border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-blue-500 w-full"/>
    </div>
    <button type="button" class="focus:outline-none text-white bg-gradient-to-r from-purple to-darkPurple hover:from-darkPurple hover:to-purple focus:ring-4 w-full focus:ring-purple-300 text-lg rounded-lg font-semibold py-2.5 mb-2 dark:bg-gradient-to-r dark:from-purple dark:to-darkPurple dark:hover:from-darkPurple dark:hover:to-purple dark:focus:ring-purple-900">Send Link</button>
    <div className="flex items-center justify-center">
  <div className="text-lg text-gray-50 py-2 font-semibold">
    <FaArrowLeftLong /> 
  </div> &nbsp; &nbsp;
  <div className="text-base text-gray-50 hover:cursor-pointer font-semibold hover:border-b">
  Back to Login
</div>

</div>

    </div>
   </div>
</div>

    </div>
  )
}

export default ForgotPassword