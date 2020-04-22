import React from 'react';
import './style.css';
import { FaTwitter, FaFacebook, FaReddit, FaLinkedin, FaTumblr, FaWhatsapp, FaSlack, FaDiscord } from 'react-icons/fa';
import {IconContext } from 'react-icons';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="../">Home</a>
            <a href="../About-me">About Me</a>
            <a href="../Contact">Contact</a>
            <a href="#">Kali</a>
            <a href="#">bugBounty</a>
            <a href="#">Javascript</a>
            <a href="#">python</a>
            <a href="#">raspberry Pi</a>
        </nav>
        <div className="socialMediaIcons">
            <IconContext.Provider value={{ size: '16px'}}>
                <div className='AppIcons'> Share this page {" "} 
                  <FaTwitter color='#55acee'  />{" "} 
                  <FaFacebook color='#4267B2'/>{" "} 
                  <FaReddit color='#FF5700' />{" "} 
                  <FaLinkedin color='#2867B2' />{" "} 
                  <FaTumblr color='#32506d' />{" "} 
                  <FaWhatsapp color='#4dc247' />{" "} 
                  <FaSlack  color='#ECB22E'/>{" "} 
                  <FaDiscord color='#7289DA' />{" "} 

                  
                </div>
            </IconContext.Provider>
          </div>
        

    </header>

   )

 }

export default Header