import React from 'react'
import './myButton.scss'

export const MyButton = ({ children, color, ...props }) => {
  return (
    <button className={`btn ${color} `} {...props}>
      {children}
    </button>
  )
}
