import {createContext, useState} from 'react';



export const CartContext = createContext()

export const CartContextProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])
    
    const addToCart = (item)=>{
        setCart([...cart, item])
    }

    const isInCart = (id)=>{
        return cart.some ((item) =>item.id===id)

    }
    const itemQuantity =()=>{
        return cart.reduce((acc, item)=>acc+item.cantidad, 0)
    }
    const total = () =>{
        return cart.reduce((acc, item)=>acc+item.cantidad*item.price, 0)
    }
    const emptyCart = ()=>{
        setCart([])

    }
    const removeItem = (id)=>{
        setCart(cart.filter((item)=>item.id!==id))

    }
    const updateQuantity = (id, quantity) => {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, cantidad: quantity } : item
        );
        setCart(updatedCart);
      };
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            isInCart,
            itemQuantity, 
            total,
            emptyCart,
            removeItem,
            updateQuantity

        }}>
        {children}

    </CartContext.Provider>
    )
    
    

} 