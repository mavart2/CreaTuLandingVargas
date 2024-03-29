import React, {useEffect, useState } from "react";
import Button from "../Button/Button";
import "./card.css"; // Importa el archivo CSS

const Card = ({Children}) => {
  const [count, setCount] = useState(1);
  const [saludo, setSaludo] = useState("Hola Mundo");
  const [price] = useState(19990);
  const totalPrice = count * price;
  const [fyh, setFyh] = useState(new Date());

  useEffect (
    ()=> {
      console.log('Saludo actualizado');
      if (count === 3){
        alert('Agrega uno mas y tienes 20% de dcto.')
      }
    },[count]);

  const sumar = () => {
    // Establece el límite máximo
  const limiteMaximo = 10;

  // Verifica si la suma no supera el límite
  if (count < limiteMaximo) {
    setCount(count + 1);
    setFyh(new Date());
  }
  };
  
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
      setFyh(new Date());
    }
  };
  const resetear = () => {
    setCount(1);
  };
  const handleSaludo = () => {
    if (saludo === "Hola Mundo") {
      setSaludo("Chau Mundo");
    } else {
      setSaludo("Hola mundo");
    }
  };

  return (
    <div className="container">
      
      <div className="card">
        <img src="/src/assets/image/zapato-daheli-negro.jpeg" alt="Producto" />
        <h2>ZAPATOS AT</h2>
        <p>Model fem neutral</p>
        <p>{fyh.toLocaleString()}</p>
        <h4>{totalPrice}</h4>

        <div className="contador">
          <Button label={"-"} color={""} callback={restar} />
          <p>{count}</p>
          <Button label={"+"} color={""} callback={sumar} />
          
        </div>
        
      </div>

      <div className="card">
        <img src="/src/assets/image/zapato-daheli-negro.jpeg" alt="Producto" />
        <h2>ZAPATOS AT</h2>
        <p>Model fem neutral</p>
        <p>{fyh.toLocaleString()}</p>
        <h4>{totalPrice}</h4>

        <div className="contador">
          <Button label={"-"} color={""} callback={restar} />
          <p>{count}</p>
          <Button label={"+"} color={""} callback={sumar}  />
        </div>
          

      </div>

      

      
      
    </div>
  );
};

export default Card;
