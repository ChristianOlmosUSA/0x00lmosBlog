import React from 'react';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div className="navbar">
        <ul className="navbarmenu">
          <li> <a href="#">Home</a> </li>
          <li> <a href="#">About Us</a> </li>
          <li> <a href="#">Posts</a> </li>
          <li> <a href="#">Contact Us</a> </li>
        </ul>
        <div className="search">
            <input type="text" placeholder="Search"/>
            <img src={require('../../assets/icons/search-32.png' )} alt="Search" />
        </div>

        </div>
   )

 }

export default Navbar