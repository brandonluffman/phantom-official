import Link from "next/link";
import { useState } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Script from "next/script";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import brandImg from '../public/img.png';




function Nav() {

    const [showMe, setShowMe] = useState(false);
    function toggleNav(){
      setShowMe(!showMe);
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
                  document.getElementById("nav-menu").style.top = "7.6rem";

                } else {
                  document.getElementById("navbar").style.height = "150px";
                  document.getElementById("navbar").style.background = "transparent";
                  document.getElementById("navbar").style.boxShadow = "none";
                  document.getElementById("nav-brand-img").style.width = "75px";
                  document.getElementById("nav-menu").style.top = "14rem";

                }
              } 
             
              `}
          </Script>


    <header className="header">
      <nav className="navbar fixed-top" id="navbar">
        <a href="home" className="nav-logo">
          <div className="brand-img" id="brand-img">
            <img src='/img.png' alt="Logo" id='nav-brand-img' loading="lazy" />
          </div>
        </a>
        <div className="" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} className='hamburger-btn' />
        </div>
        <ul className="nav-menu" id='nav-menu' style={{left: showMe? "0":"-100%"}}>
          <li className="nav-item">
            <Link href='/'>
            <a href='' className="nav-link">
            Home
            </a>
            </Link>
          </li>
          <li className="nav-item">
          <Link href='/#about'>
            <a href='' className="nav-link">
              About
            </a>
            </Link>
          </li>
          <li className="nav-item">
                  <UncontrolledDropdown className='dropdown-div'>
                    <DropdownToggle className='dropdown'>
                      Services
                      <FontAwesomeIcon icon={faAngleDown} className='dropdown-caret' />
                    </DropdownToggle>
                    <DropdownMenu className='dropdown-menu'>
                    <Link href='/#seo'>
                      <a href='' className="dropdown-a"><DropdownItem className='dropdown-link'>SEO</DropdownItem></a>
                      </Link>
                      <DropdownItem divider className='divider'/>
                      <Link href='/#webdev'>
                      <a href='' className="dropdown-a"><DropdownItem className='dropdown-link'>Website Development</DropdownItem></a> 
                      </Link>
                    </DropdownMenu>
            </UncontrolledDropdown>
          </li>
          <li className="nav-item">
          <Link href='/blogs'>
            <a href="" className="nav-link">
              Blog
            </a>
            </Link>
          </li>
          <li className="nav-item">
          <Link href='/#contact'>
            <a href="" className="nav-link">
              Contact
            </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Nav;