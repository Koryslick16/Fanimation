import React, { useState } from 'react'
import "./navbar.css"
import NavbarLogo from "../../assets/Images/fanimationLogo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBar = () => {
      setIsOpen(previousState => !previousState);;
    }

  return (
    <>

       <div className="navDiv">

       <div className="nav-img">
         <Link to="/"><img src={NavbarLogo} alt="" /></Link>
        </div>

        <div className="links">
            <Link to="/products" className='product'>Products</Link>
            <Link to="/gallery" className='explore'>Explore</Link>
            <Link to="/faq" className='faq' >FAQs</Link>
            <Link to="/helpcenter" className='help'>Help Center</Link>
            <Link to="/aboutUs" className='about' >About Us</Link>
            <Link to="/contactUs" className='contact' >Contact Us</Link>
        </div>
        {/* Ceiling fans, Pedestal fans, Wall fans, Exhaust fans, Accessories  */}

        
      <div className="toggleBox">
      <input type="checkbox" id="hamburger" onClick={toggleBar}/>
      <label htmlFor="hamburger" className="toggle">
        <div className="barDiv" id="bar1"></div>
        <div className="barDiv" id="bar2"></div>
        <div className="barDiv" id="bar3"></div>
    </label>
      </div>
      {isOpen && (
         <nav className='navMenu'>
         <ul>
           <li><Link to="/products" className='product'>Products</Link></li>
           <li><Link to="/gallery" className='explore'>Explore</Link></li>
           <li><Link to="/faq" className='faq' >FAQs</Link></li>
           <li><Link to="/helpcenter" className='help'>Help Center</Link></li>
           <li><Link to="/aboutUs" className='about' >About Us</Link></li>
           <li><Link to="/contactUs" className='contact' >Contact Us</Link></li>
         </ul>
       </nav>
      )}

      </div>
      
    </>
  )
}

export default Navbar
