import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    console.log('ItemList', productos)
  return (
    <div className='item-list-container'>
        {
            productos.map((elemento, index)=>{
               return <Item key={elemento.id} productos={elemento}/>
            })
        }
    </div>
  )
}

export default ItemList