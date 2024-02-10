import React from 'react'

const InputLabel = ({label}) => {
  return (
    <label
    htmlFor="Connection Type"
    className="text-base  font-mediium  text-black"
  >
    {label}
  </label>
  )
}

export default InputLabel