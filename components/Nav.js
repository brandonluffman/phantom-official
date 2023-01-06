import Link from "next/link";
import { useState, useEffect } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Script from "next/script";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { MdMenu, MdClear } from 'react-icons/md';
import Image from "next/image";




function Nav() {

    const [showMe, setShowMe] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleNav(){
      setShowMe(!showMe);
      setIsActive(!isActive);
    }

    const [navbar, setNavbar] = useState(false);

  
    const changeBackground = () => {
      if (window.scrollY >= 40) {
        setNavbar(true);

      } else {
        setNavbar(false);
  
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', changeBackground, true);
      return () => window.removeEventListener('scroll', changeBackground);
    }, []);


  return (
  <div>
    <header className="header">
      <nav className={navbar ? 'scroll fixed-top' : 'navbar fixed-top'} id="navbar">
        <Link href="/" className="nav-logo">
          <div className="brand-img" id="brand-img">
            <Image src='/img.png' alt="Brand Logo" id='nav-brand-img' loading="lazy" width='100' height='100' />
          </div>
        </Link>
        <div className="nav-buttons">
          {/* <button className="nav-lang-btn" type='button'>En</button> */}
          <Link href='/project'><button className='nav-contact-btn' type='button'>Get in contact</button></Link>
          {isActive? <MdClear className='hamburger-btn' onClick={toggleNav}/>:<MdMenu className='hamburger-btn' onClick={toggleNav} />}
        </div>
        <ul className="nav-menu" id='nav-menu' style={{right: showMe? "0":"-100%"}}>
          <li className="nav-item"><h5 className="nav-menu-header">Menu</h5></li>
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
          <Link href='/services' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              Services
          </li>
          </Link>
          <Link href='/portfolio' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              Portfolio
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
          <li className="nav-item">
          <div className="dropdown-brand-div">
            <Image className='dropdown-brand-img' src='/img.png' alt='Brand Logo' height='100' width='100' />
          </div>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Nav;