import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit'; // Corregir la importación
import "./FooterBar.css";

function Footer() {
  return (
    <footer className='footer'>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(240, 100, 147, 0.9)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='#'>
            Mavart
          </a>
        </div>
      </MDBFooter>
    </footer>
  );
}

export default Footer; // No llames a la función aquí
