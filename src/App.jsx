import { useState } from "react";
import Button from "./component/Button/Button";
import Card from "./component/Card/Card";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar/NavBar";
import "./AppNuevo.css"; // Importa el archivo CSS
import PokeApi from "./component/ejemploApi/PokeApi";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./component/Home/Home"
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import { MyContext } from "./component/context/MyContext";
import { CartContext , CartContextProvider} from "./component/context/CartContext";
import Cart from "./component/pages/Cart";
import Checkout from './component/pages/Checkout';
import Admin from "./component/pages/Admin"; // Importa tu componente AdminComponent
import FooterBar from "./component/Footer/FooterBar";
import NotFound404 from "./component/pages/NotFound404";







function App() {
  

  
  const artist = 'Mavart'
  const aula= 'coder'


  return (
    <MyContext.Provider value={{artist, aula}}>
      <CartContextProvider> 
    <BrowserRouter>
       <NavBar />
       
    
      
      <Routes>
      
      <Route path="/" element={<ItemListContainer greeting="Hello comisión 57905" />}/>
      <Route path="/category/:category" element={<ItemListContainer greeting="Hello comisión 57905" />}/>
      <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/admin" element={<Admin/>} />
      <Route path="*" element={<NotFound404 />} />
      </Routes>
      
    </BrowserRouter>
    
    </CartContextProvider>
    
    
    
      <div>
          
  </div>
 
      
      
      
 
      
    </MyContext.Provider>
    

  );
}


export default App;
