import React from 'react'
import "./Item.css"; 
import {Link} from 'react-router-dom'

const Item = ({productos}) => {
  return (
    <div className='atg ml-2 mt-5'>
      <div className='tg w-40 flex  ml-3 mt-4 pt-2'>
       
       <img src={productos.img}/>
       <h2>{productos.name}</h2>
       <h3>{productos.price}</h3>
       <p>{productos.id}{productos.description}</p>
       <Link to={`/producto/${productos.id}`}>Ver detalles</Link>
       
       </div>
    </div>
    
  )
}

export default Item