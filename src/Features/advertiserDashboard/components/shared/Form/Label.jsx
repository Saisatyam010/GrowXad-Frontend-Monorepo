import React from 'react'

const InputLabel = ({label,required}) => {
  return (
    <label
    htmlFor="campaignName" // Use a unique ID here
    className={`text-sm text-gray-900  ${required &&"after:content-['*'] after:ml-0.5 after:text-red-500"} `}
  >
   {label}
  </label>
  )
}

export default InputLabel