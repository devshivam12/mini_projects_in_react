import React, { useState } from 'react'


const ChiltToParent = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState()

  const handleChange = (e) => {
    const { value } = e.target
    setActiveColor(value)
    getColor(value)
  }
  return (
    <div className='flex items-center justify-center mt-10'>
      <input
      className='w-44 px-2 py-2 border border-slate-300'
        type="text"
        onChange={handleChange}
        value={activeColor}
      />
    </div>
  )
}

export default ChiltToParent
