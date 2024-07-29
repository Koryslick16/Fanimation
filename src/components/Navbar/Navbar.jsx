import React from 'react'
import "./navbar.css"
import NavbarLogo from "../../assets/Images/fanimationLogo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

       <div className="navDiv">

       <div className="nav-img">
            <img src={NavbarLogo} alt="" />
        </div>

        <div className="links">
            <p className='product'>Products</p>
            <p className='help'>Help Center</p>
            <p className='explore'>Explore</p>
        </div>

        {/* <div className="productDrop">
            <Link to="/allProducts">All Products</Link>
            <Link to="/ceilingFan">Ceiling Fans</Link>
            <Link to="/pedestalFan">Pedestal Fans</Link>
            <Link to="/wallFan">Wall Fans</Link>
            <Link to="/exhaustFan">Exhaust Fans</Link>
        </div>

        <div className="helpDrop">
            <Link to="/faq">FAQs</Link>
            <Link to="/review">Product Reviews & Rating</Link>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/contactUs">Contact Us</Link>
        </div>

        <div className="exploreDrop">
            <Link to="/gallery">Gallery</Link>
            <Link to="/site">Site Map</Link>
        </div> */}

      </div>
      
    </>
  )
}

export default Navbar
