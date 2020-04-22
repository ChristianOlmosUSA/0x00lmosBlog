import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Contact Us</a>
            <a href="#">page 4</a>
        </nav>
        <div>
            social media icons
        </div>
    </header>

   )

 }

export default Header