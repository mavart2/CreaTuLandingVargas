import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; // Importa el archivo CSS
import {NavLink} from 'react-router-dom';
import logo from '../../assets/image/Recurso 4logowomen.svg';



function BasicExample() {
  return (
    <div className="NavBar">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" className="logo" /></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <NavLink className='pl-2' to={'/'}
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "regular" : "",
                color: isPending ? "red" : "gray;",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            >Home</NavLink>
            <NavLink className='pl-2' to={'/category/Accesorios/'}>Accesorios</NavLink>
              <NavLink className='pl-2' to={'/category/Calzado'}>Calzado</NavLink>
              <NavLink className='pl-2' to={'/category/Vestuario'}>Vestuario</NavLink>
          
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/> 

    </Navbar>
    

    </div>
  );
}

export default BasicExample;