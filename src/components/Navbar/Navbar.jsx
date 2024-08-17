import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import VisitCount from '../VisitCount'
import Location from "../GeoLocation/Location"



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
                    <div className="main">
            <nav className="mini-header">
                <div className="contact1">
                    <p>  +234-7014457796  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg></p>
                </div>
                <div className="promo">
                    <p className='rib'>Get 50% on Selection  |  Shop Now</p>
                </div>
                <div className="location">
                    <div className="Eng"><Location/></div>
                    <div className="track"><p><VisitCount/></p></div>
                </div>
            </nav>

            <div className="header">
            <div className="logo"></div>
            <div className="Deals">

                <div className="links">
                   <Link to="/Home" className='home'>Home</Link>
                    <Link to="/products" className='product'>Products</Link>
                    <Link to="/gallery" className='explore'>Explore</Link>
                    <Link to="/faq" className='faq' >FAQs</Link>
                    <Link to="/helpcenter" className='help'>Help Center</Link>
                    <Link to="/aboutUs" className='about' >About Us</Link>
                    <Link to="/contactUs" className='contact' >Contact Us</Link>
                </div>
                {/* Ceiling fans, Pedestal fans, Wall fans, Exhaust fans, Accessories  */}

                    <div className="hamburger-menu">
                        <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
                        <nav className={`menu ${isOpen ? 'open' : ''}`}>
                            <ul>
                                <li><Link to="/Home" className='home'>Home</Link></li>
                                <li><Link to="/products" className='product'>Products</Link></li>
                                <li><Link to="/gallery" className='explore'>Explore</Link></li>
                                <li><Link to="/faq" className='faq' >FAQs</Link></li>
                                <li><Link to="/helpcenter" className='help'>Help Center</Link></li>
                                <li><Link to="/aboutUs" className='about' >About Us</Link></li>
                                <li><Link to="/contactUs" className='contact' >Contact Us</Link></li>
                            </ul>
                            </nav>
                    </div>
            </div>
            

            <div className="item">
                <div className="Eng1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg><p className="record">Account</p></div>
                <div className="track1"><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg> Cart</p></div>

                                    <div className="loader">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                        <path
                        d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="currentColor"
                        ></path>
                    </svg>
                    <div className="point"></div>
                    </div>

            </div>
            </div>
            </div>
            
    </>
  )
}

export default Navbar
