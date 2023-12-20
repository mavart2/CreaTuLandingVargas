import React, { useState } from "react";
import Button from "../Button/Button";
import "./card.css"; // Importa el archivo CSS

const Card = () => {
  const [count, setCount] = useState(1);
  const [price] = useState(19990);
  const totalPrice = count * price;

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const resetear = () => {
    setCount(1);
  }; 
  

  return (
    <div className="container">
      <div className="card">
      <img src="/src/assets/image/zapato-daheli-negro.jpeg" alt="Producto" />
      <h2>ZAPATOS AT</h2>
      <p>Model fem neutral</p>
      <h4>{totalPrice}</h4>

      <div className="contador">
        <Button label={"-"} color={""} callback={restar} />
        <p>{count}</p>
        <Button label={"+"} color={""} callback={sumar} />
      </div>
    </div>

    </div>
    
  );
};

export default Card;
