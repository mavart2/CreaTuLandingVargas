import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "./Cart.css"; // Importa el archivo CSS

const Cart = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)
  return (
    <div>
        
        {
            cart.length===0?
            <h3>Tu carrito esta vacio</h3>
            :
            <>
            <h2 className='pl-4 title'>Tu compra:</h2>
            {
                cart.map((item)=>(
                <>
                <div key={item.id} className='sale pl-6 border-b border-b-black '>
                    <h3>{item.name}</h3>
                    <img className='pic' src={item.img} alt={item.name}/>
                    <p>Precio ${item.price}</p>
                    <p>Cantidad:{item.cantidad}</p>
                    <button className='btn btn-danger' onClick={()=>removeFromCart(item.id)}>Remover</button>
                </div>
                
                </>
                
                ))
                
            }
            </>

        }
        
    </div>
  )
}

export default Cart