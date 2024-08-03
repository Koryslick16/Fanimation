import React from 'react'
import "./navbar.css"
import NavbarLogo from "../../assets/Images/fanimationLogo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

       <div className="navDiv">

       <div className="nav-img">
         <Link to="/"><img src={NavbarLogo} alt="" /></Link>
        </div>

        <div className="links">
            <Link className='product'>Products</Link>
            <Link className='explore'>Explore</Link>
            <Link to="/faq" className='faq' >FAQs</Link>
            <Link to="/helpcenter" className='help'>Help Center</Link>
            <Link to="/aboutUs" className='about' >About Us</Link>
            <Link to="/contactUs" className='contact' >Contact Us</Link>
        </div>
        {/* Ceiling fans, Pedestal fans, Wall fans, Exhaust fans, Accessories  */}

        <input type="checkbox" id="hamburger"/>
    <label htmlFor="hamburger" className="toggle">
        <div className="barDiv" id="bar1"></div>
        <div className="barDiv" id="bar2"></div>
        <div className="barDiv" id="bar3"></div>
    </label>

      </div>
      
    </>
  )
}

export default Navbar
