import React, { PropsWithChildren, useState } from 'react'

interface CircleProps {
  updateCounter: () => void
}

const Circle: React.FC<PropsWithChildren<CircleProps>> = ({ children, updateCounter }) => {
  const [checked, setChecked] = useState(false)

  const handleChecked = () => {
    setChecked(!checked)
    updateCounter()
  }

  return (
    <div
      onClick={handleChecked}
      className={` select-none p-24 border border-black rounded-full hover:cursor-pointer overflow-hidden ${checked ? 'bg-red-500' : 'bg-blue-500'}`}
    >
      {children}
    </div>
  )
}

export default Circle
