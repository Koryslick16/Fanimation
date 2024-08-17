import React from 'react'
import "./about.css"
import BackgroundGallery from "../../assets/image/Pedestal.jpeg"

const About = () => {
  return (
    <>

    <div className="aboutDiv">
        <div className="aboutHero" style={{
             backgroundImage: `url(${BackgroundGallery})`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "top",
        }}>
            <h4>About Us</h4>
        </div>

        <div className="learn">
            <h5>Learn more about us</h5>
            <p>From the very first fan we created more than 30 years ago to the newest ones in our portfolio, we create fans you can’t wait to show off! The same ingenuity and quality craftsmanship that gave birth to Fanimation continues to guide us today.

</p>
            <p>Fanimation’s focus is producing creative and functional fans that provide ultimate personal comfort using the latest technology for energy efficiency and seamless control.</p>
            <p>Fanimation strives hard to be environmentally friendly. We encourage you to browse our products online, which includes all the latest information on our great products and styles.</p>
        </div>

    </div>
      
    </>
  )
}

export default About
