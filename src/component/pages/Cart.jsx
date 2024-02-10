import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "./Cart.css"; // Importa el archivo CSS
import {FaRegTrashAlt, FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom';


const Cart = () => {
    const {cart, total, emptyCart, removeItem, updateQuantity,} = useContext(CartContext);
    const [editQuantity, setEditQuantity] = useState(0); // Estado para almacenar las cantidades a actualizar

    console.log(cart)

    const handleEditQuantity = (id, quantity) => {
      // Convierte la cantidad a un número entero
      const newQuantity = parseInt(quantity);
      // Verifica si la cantidad es válida
      if (newQuantity > 0) {
        // Actualiza la cantidad del producto en el carrito
        updateQuantity(id, newQuantity);
      }
      // Restablece el estado de editQuantity a 0
      setEditQuantity(0);
    };

    

  return (
    <div className='base mt-0 pl-0'>
        
        {
            cart.length===0?
            <h3>Tu carrito esta vacio</h3>
            :
            <>
            <h2 className='pl-4 title'>Tu compra:</h2>
            {
                cart.map((item)=>(
                <>
                <div key={item.name} className='sale pl-6 border-b border-b-black '>
                    <h3>{item.name}</h3>
                    <img className='pic' src={item.img} alt={item.name}/>
                    
                    <hr/>
                    <p>Precio ${item.price}</p>
                    <div className='edicion '>
                        {/*<p>Cantidad:{item.cantidad}</p>*/}
                    <p>Cantidad: {item.cantidad}</p>
                    
                        <input
                  type="number"
                  min="1"
                  value={editQuantity}
                  onChange={(e) => setEditQuantity(e.target.value)}
                  className="styled-input"
                />
                </div>
                <div className='edicion'>
                <button
                  className="btn btn-success"
                  onClick={() => handleEditQuantity(item.id, editQuantity)}
                >
                  Editar
                </button>
                    
                    <button className='btn btn-danger ml-2' onClick={()=>removeItem(item.id)}> <FaRegTrashAlt/></button>


                    </div>
                
                    
                </div>
                
                </>
                
                ))
                
            }
            </>

        }
        <div className='sale2 '>
            <h3>Total: $ {total()}</h3>
        <hr/>
        <button className='btn btn-danger' onClick={()=>emptyCart()}>Vaciar carrito</button>
        <br/>
        <Link to="/checkout" className='btn btn-success'>Terminar mi compra </Link>
        </div>
        
    </div>
  )
} 

export default Cart