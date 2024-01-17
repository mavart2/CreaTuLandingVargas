import Button from "./component/Button/Button";
import Card from "./component/Card/Card";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar/NavBar";
import "./AppNuevo.css"; // Importa el archivo CSS
import PokeApi from "./component/ejemploApi/PokeApi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home"
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";



function App() {
  const intro = 'Bienvenidos'
  return (
    <>
    <BrowserRouter>
       {/*<NavBar />*/}
       <NavBar />
      
      <Routes>
      
      <Route path="/" element={<ItemListContainer greeting="Hello comisión 57905" />}/>
      <Route path="/category/:category" element={<ItemListContainer greeting="Hello comisión 57905" />}/>
      <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
      <div>
         
  </div>
      
      
 
      
      
      {/*<Card/>*/}
      
      
      
      
    </>

  );
}

export default App;
