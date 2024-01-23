import React, { useState } from 'react'

const Button = ({label, callback, color}) => {
    
  return (
    <>
    <button style={{backgroundColor:color}} className='w-36 rounded-lg border-dark border-slate-800' onClick={()=> callback()}>{label}</button>
    </>

    
    
    
  )
}

export default Button