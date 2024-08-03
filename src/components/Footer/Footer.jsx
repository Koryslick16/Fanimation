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
            <p>Fax: 07014457796</p>
           </div>

        </div>
        <div className="aLinks">
            <Link to="/">Home</Link>
            <Link>Products</Link>
            <Link to="/gallery">Gallery</Link>
            <Link>Smart Controls</Link>
            <Link>Choosing a Fan</Link>
            <Link to="/gallery">Blog</Link>
        </div>
        <div className="aLinks">
            <Link to="/helpcenter">Product Support</Link>
            <Link to="/helpcenter">Reviews</Link>
            <Link>Warranty</Link>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
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
