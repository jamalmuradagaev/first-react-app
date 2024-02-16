import React from 'react'
import './Button.css'

export default function Button({ children, onClickParam }) {
  return (
    <>
      <button className="button" onClick={onClickParam}>{children}</button>
    </>
  )
}
