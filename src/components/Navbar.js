// import logo from "../images/logo.jpeg";

// function Navbar() {
//     return (
//       <div className="Navbar">
//         <img src= {logo} alt="logo" width="60px" height=""/>
//         <div className="nav-content">
//             <ul className="nav-list">
//                 <li><a href="#teachers">Teachers</a></li>
//                 <li><a href="#testimonials">Testimonials</a></li>
//                 <li>About</li>
//             </ul>
//             <button className="button">Free Demo</button>
//         </div>
//       </div>
//     );
//   }
  
//   export default Navbar;
import React, { useState } from "react";
import logo from "../images/Dr. Khan LOGO.svg";
import burger from "../images/menu.png"
import "../Css/Navbar.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img  id="logo"src={logo} alt="logo" />
          <button className="nav-toggle" onClick={handleToggleMenu}>
            <img src={burger} alt="menu-btn"/>
            </button>
        </div>
        {/* <ul className={toggleMenu ? "nav-links show-nav" : "nav-links"}> */}
        <Router>  <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#services">Services</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
</Router>
            </div>
    </nav>
  );
};

export default Navbar;
