import React, {useEffect, useState } from "react";
import Button from "../Button/Button";
import "./card.css"; // Importa el archivo CSSi
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Card2() {
   const [count, setCount] = useState(1);
  //const [saludo, setSaludo] = useState("Hola Mundo");
  const [price] = useState(19990);
  const totalPrice = count * price;
  const [fyh, setFyh] = useState(new Date());
}


  function GridExample() {
    return (
      
      <Row xs={1} md={2} lg={3} className="g-4 ">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="/src/assets/image/zapato-daheli-negro.jpeg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>

        
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
  }
  
  export default GridExample;
