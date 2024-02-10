import React from 'react'

import { FaEye } from "react-icons/fa";

function ResetPassword() {
  return (
    <div >
       <div className='flex flex-col justify-center items-center h-screen'>
  <div className='text-center w-1/4'>
    {/* <img src={img} alt="" /> */}
  <div className='text-4xl font-semibold pb-2'>Reset Password</div>

    <div className='text-lg text-gray-100 font-normal'>Enter a new password for 
<b> sonalisaluja9005@gmail.com</b> </div>
    <div className='px-2'>
    <div className='py-4'>
    <div class="relative">
  <input type="text" placeholder="Password" class="border mb-3.5 border-gray-300 rounded-md px-4 py-2.5 pr-10 focus:outline-none focus:border-blue-500 w-full" />
  <div class="absolute inset-y-0 right-0 pb-3 flex items-center pr-3">
    <FaEye fill='#565656' />
  </div>
</div>

<div class="relative">
  <input type="text" placeholder="Confirm Password" class="border mb-3.5 border-gray-300 rounded-md px-4 py-2.5 pr-10 focus:outline-none focus:border-blue-500 w-full" />
  <div class="absolute inset-y-0 right-0 pb-3 flex items-center pr-3">
    <FaEye fill='#565656'/>
  </div>
</div>
   
    </div>
    <button type="button" class="focus:outline-none text-white bg-gradient-to-r from-purple to-darkPurple hover:from-darkPurple hover:to-purple focus:ring-4 w-full focus:ring-purple-300 text-lg rounded-lg font-semibold py-2.5 mb-2 dark:bg-gradient-to-r dark:from-purple dark:to-darkPurple dark:hover:from-darkPurple dark:hover:to-purple dark:focus:ring-purple-900">Reset Password</button>

    </div>
   </div>
</div>

    </div>
  )
}

export default ResetPassword