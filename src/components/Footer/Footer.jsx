import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import Fanimate from '../../assets/Images/fanimationFooter.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

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
            <Link>Blog</Link>
            <Link>Contact</Link>
        </div>
        <div className="aLinks">
            <Link>Product Support</Link>
            <Link>Reviews</Link>
            <Link>Warranty</Link>
            <Link>About Us</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms and Conditions</Link>
        </div>
        <div className="aLinks">
            <p>Enter your email address below to receive periodic communication from Fanimation.</p>
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
            PT
            YT
            IG
        </div>
    </div>
       </div>
      
    </>
  )
}

export default Footer
