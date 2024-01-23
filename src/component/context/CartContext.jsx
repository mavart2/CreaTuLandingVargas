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
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            isInCart,
            itemQuantity

        }}>
        {children}

    </CartContext.Provider>
    )
    
    

} 