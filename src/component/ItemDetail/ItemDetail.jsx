import React, { useState } from 'react'
import Button from '../Button/Button'
import "./ItemDetail.css"; 

const ItemDetail = ({productos}) => {
  const [counter, setCounter] =  useState(1)

  const handleAdd = ()=>{
    setCounter (counter+1)

  }
  const handleSubstract = ()=>{
    if (counter > 1) {
      setCounter(counter - 1);
    }

  }
  return (
    <div>
        {productos && (
                <div className='atg ml-2 mt-5'>
                <div className='tg w-40 flex  ml-3 mt-4 pt-2'>
                 
                 <img src={productos.img}/>
                 <h2>{productos.name}</h2>
                 <h3>{productos.price}</h3>
                 <p>{productos.description}</p>
                 <div className='contador'>
                  <Button label = "-" callback = {handleSubstract}/>
                 <p>{counter}</p>
                 <Button label = "+" callback = {handleAdd}/>
                  </div>
                 
                 
                 </div>
              </div>
            )}
    </div>
    
    )}
  
  

export default ItemDetail