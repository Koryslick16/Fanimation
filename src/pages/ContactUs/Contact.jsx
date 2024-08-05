import React from 'react'
import "./contact.css"
import BackgroundGallery from "../../assets/Images/Fan3.jpg"

const Contact = () => {
  return (
    <>

<div className="contactDiv">
        <div className="contactHero" style={{
             backgroundImage: `url(${BackgroundGallery})`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "center",
        }}>
            <h4>Contact Us</h4>
        </div>

        <div className="learn">
            <h5> Contact us to learn more about us</h5>
            <p>We encourage you to browse our products online which includes all the latest improvements and provides information about our </p>
        </div>

    </div>
      
    </>
  )
}

export default Contact
