import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import logo from "../../assets/logo.png"; // Adjust path based on the actual location of the image




const Navbar = () => {


  return (
    <div className='navbar'>
      <img src={assets.logo} alt="FOODZY" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" className="search-icon"/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
