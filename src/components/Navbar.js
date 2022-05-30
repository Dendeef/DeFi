import React, { useState } from "react";
import { icons } from "react-icons";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header" id="home" >
      <div className="container">
      <h1>De<span className='primary'>Fi</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#feature">Features</a>
          </li>
          <li>
            <a href="#earn">Signup</a>
          </li>
         
        </ul>
        <div className="btn-group">
          <button className="btn"> Connect to MetaMask</button> 
        </div>
        <div className="hamburger" onClick={handleClick}>
           {click ? (<FaTimes/>) : (<FaBars size={20} style={{ color: "#333" }} />)}
          
        </div>
      </div>
    </div>
  );
};

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}

export default Navbar;
