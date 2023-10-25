import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // If you're using React Router for navigation
import './Navbar.css';
import Image from './img.png';




const Navbar = () => {
  return (
    <nav className="bar">
      <div >
      <img style={{ width: "15%", height: "15%" }} src={Image} alt='' className="logo"/> 
      </div>
      <ul className="nav-menu">
        {/* <li>
        <Link to="/Products">Product</Link>
        </li> */}
      <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/suggestions">Cart</Link>
        </li>
        <li>
          <Link to="/About us">About us</Link>
        </li>
        <li>
          <Link to="/Helps">help</Link>
        </li>
        <li>
          <Link to="/Order">Order</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/Product1">Product1</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
        <li>
          <Link to="/dialog">dialog</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
      <Outlet />
    </nav>

  );
};

export default Navbar;




