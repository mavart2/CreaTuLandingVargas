import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import "./ItemDetail.css"; 
import { MyContext } from '../Context/MyContext';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({productos}) => {
  const [counter, setCounter] =  useState(1)
  const [addedProductos, setAddedProductos] =  useState({})
  
  const {aula} = useContext(MyContext);

  const {addToCart, cart, isInCart} = useContext(CartContext)
  
  console.log(cart)
  
  const handleAdd = ()=>{
    setCounter (counter+1)
  };

  const handleSubstract = ()=>{
    if (counter > 1) {
      setCounter(counter - 1);
    }

  };

  const handleAddToCart = ()=>{
    const newItem = {...productos, cantidad: counter}
    addToCart(newItem);
  };

  return (
    <>
        {productos && (
                <div className='atg ml-2 mt-5'>
                <div className='tg w-40 flex  ml-3 mt-4 pt-2'>
                 
                 <img src={productos.img} alt={productos.name}/>
                 <h2>{productos.name}</h2>
                 <h3>{productos.price}</h3>
                 <p>{productos.description}</p>


                 {
                  isInCart (productos.id)
                  ? <Link to={`/cart`} >
                    <Button label = "ir al carrito" callback = {handleSubstract}/>
                    </Link>
                 :
                 <div className='contador'>
                 <Button label = "-" callback = {handleSubstract}/>
                 <p>{counter} </p>
                 <Button label = "+" callback = {handleAdd}/>
                 <div className='addToCartButton'>
                 <div className='atg flex-end'>
                  
                  <Button
                    label='Agregar al carrito'
                    callback={() => handleAddToCart()}
                    className='button'

                  />
                  </div>
                  
                </div>
                 </div>
                 }

                
                 
                 
                 </div>
              </div>
            )}
    </>
    
    )}
  
  

export default ItemDetail