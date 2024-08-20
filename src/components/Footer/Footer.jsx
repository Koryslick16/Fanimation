import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import Fanimate from '../../assets/Images/fanimationFooter.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <>

    <div className="footerDiv">
       <div className="ashFooter">
       <div className="aLinks">
           <div className="img">
           <img src={Fanimate} alt="" />
           </div>
           <div className="address">
            <p>Phone: 08080975645</p>
           </div>
           <Link to="/helpcenter">Product Support</Link>
           <Link to="/aboutUs">About Us</Link>
           <Link to="/contactUs">Contact Us</Link>

        </div>
        <div className="aLinks">
            <Link to="/products" style={{
                fontWeight: "bolder"
            }} >Products</Link>
            <Link to="/ceilingFan">Ceiling fans</Link>
            <Link to="/pedestalFan">Pedestal fans</Link>
            <Link to="/wallFan">Wall fans</Link>
            <Link to="/exhaustFans">Exhaust fans</Link>
           
        </div>
        <div className="aLinks">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/choose">Choosing a Fan</Link>
        <Link to="/gallery">Blog</Link>
            <Link to="/helpcenter">Reviews</Link>
            <Link to="/faq">Warranty</Link>
            <Link to="">Smart Controls</Link>
        
        </div>
        <div className="aLinks">
            <p style={{
              textWrap: "wrap"
            }}>Enter your email address below to receive periodic communication from Fanimation.</p>
            <div className="email">
                <input type="text" className='input' placeholder='Email' />
                <button className='sub'>Subscribe</button>
            </div>
        </div>
    </div>
    <div className="black">
        <p>&copy; 2024 Fanimation. All rights reserved.</p>
        <div className="icons">
            <FaXTwitter/>
            <FaFacebookF/>
            <FaPinterest/>
            <IoLogoYoutube/>
            <FiInstagram/>
        </div>
    </div>
       </div>
      
    </>
  )
}

export default Footer
