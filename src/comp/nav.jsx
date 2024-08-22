// src/NavBar.js
import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Wethar</a>
       
      </div>
      
    </nav>
  );
};

export default NavBar;
