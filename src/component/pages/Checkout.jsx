import React, {useContext, useState } from 'react'
import {CartContext } from '../context/CartContext'
import { Button } from 'react-bootstrap'
import "./Cart.css"; // Importa el archivo CSS

const Checkout = () => {
    const {cart} = useContext(CartContext)
    
    const [values, setValues] = useState({
        name: '',
        adress:'',
        email:'',
    })
    const handleSubmit = ()=>{
        return
    }
    const handleInputChange = (e)=>{
        console.log(e.target.value)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className='sale border-b border-b-black '>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                required
                placeholder="Tu nombre"
                name= 'name'
                onChange= {handleInputChange}
                
                />
                <br/>
                <input
                type="text"
                required
                placeholder="Dirección"
                name= 'adress'
                onChange= {handleInputChange}
                />
                <br/>
                <input
                type="email"
                required
                placeholder="Tu email"
                name= 'email'
                onChange= {handleInputChange}
                />
                <br/>

                <Button className='btn btn-success ' type='submit'>confirmar compra</Button>


            </form>
        </div>

    )
}
export default Checkout