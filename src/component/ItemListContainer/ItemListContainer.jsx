import React from 'react';
import "./ItemListContainer.css"; // Importa el archivo CSS

const ItemListContainer = ({greeting}) => {
  return (
    <div className='greeting'>{greeting}</div>
  )
}

export default ItemListContainer