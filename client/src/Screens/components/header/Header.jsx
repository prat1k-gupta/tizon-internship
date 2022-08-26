import React from 'react';
import image from '../images/Tizonsmall.png';
import "./Header.css"; 
import "./Links";
import Links from './Links';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="image"><img src={image} alt="Tizon Logo" /></div>
      <Links />
    </div>
  );
}

export default Navbar;