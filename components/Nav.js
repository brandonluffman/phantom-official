import Link from "next/link";
import { useState } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Script from "next/script";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import brandImg from '../public/img.png';
import { MdMenu, MdClear } from 'react-icons/md';




function Nav() {

    const [showMe, setShowMe] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleNav(){
      setShowMe(!showMe);
      setIsActive(!isActive);
    }


  return (
  <div>
    <Script id="show-banner" strategy="lazyOnload">
            {`  window.onscroll = function() {scrollFunction()};

              function scrollFunction() {
                if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                  document.getElementById("navbar").style.height = "75px";
                  document.getElementById("navbar").style.background = "rgba(245,245,245,0.75)";
                  document.getElementById("navbar").style.boxShadow = "1px 2px 4px lightgrey";
                  document.getElementById("nav-brand-img").style.width = "50px";

                } else {
                  document.getElementById("navbar").style.height = "150px";
                  document.getElementById("navbar").style.background = "transparent";
                  document.getElementById("navbar").style.boxShadow = "none";
                  document.getElementById("nav-brand-img").style.width = "75px";

                }
              } 
             
              `}
          </Script>


    <header className="header">
      <nav className="navbar fixed-top" id="navbar">
        <Link href="/" className="nav-logo">
          <div className="brand-img" id="brand-img">
            <img src='/img.png' alt="Logo" id='nav-brand-img' loading="lazy" />
          </div>
        </Link>
        <div className="nav-buttons">
          {/* <button className="nav-lang-btn" type='button'>En</button> */}
          <Link href='/project'><button className='nav-contact-btn' type='button'>Get in contact</button></Link>
          {isActive? <MdClear className='hamburger-btn' onClick={toggleNav}/>:<MdMenu className='hamburger-btn' onClick={toggleNav} />}
        </div>
        <ul className="nav-menu" id='nav-menu' style={{right: showMe? "0":"-100%"}}>
          <h5 className="nav-menu-header">Menu</h5>
          <Link href='/' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
            Home
          </li>
          </Link>
          <Link href='/#about' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              About
          </li>
          </Link>
          <Link href='/#services' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              Services
          </li>
          </Link>
          <Link href='/blogs' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              Blog
          </li>
          </Link>
          <Link href='/project' className="nav-link">
          <li className="nav-item nav-item-margin" onClick={toggleNav}>
              Contact
          </li>
          </Link>
          <div className="dropdown-brand-div">
            <img className='dropdown-brand-img' src='img.png'></img>
            {/* <Link href='/project'><button className='dropdown-contact-btn' type='button'>Get in contact</button></Link>          */}
          </div>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Nav;