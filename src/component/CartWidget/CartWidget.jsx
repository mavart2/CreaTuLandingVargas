import React, { useContext } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import "./CartWidget.css"
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {itemQuantity}= useContext(CartContext)

  return (
    <Link to='/cart'>
    <div className='text-dark flex items-center'>
      <GiShoppingCart className='text-2xl' />
    <span>{parseInt(itemQuantity())}</span>
    </div>
  </Link>
  );
}

export default CartWidget