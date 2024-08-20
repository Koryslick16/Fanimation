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

        </div>

        <div className="learn-content">
          <div className="sub-learn-content">
            <span className='sub-learn-Header'><big>SIMPLICITY IN DESIGN</big></span>

            <span className='sub-learn-text'><p>Fanimation’s focus is producing creative and functional fans that provide ultimate personal comfort using the latest technology for energy efficiency and seamless control.</p></span>
          </div>
          <div className="sub-learn-content">
            <span className='sub-learn-Header'><big>CONFIDENCE IN COMFORT</big></span>

            <span className='sub-learn-text'>Fanimation strives hard to be environmentally friendly. we encourage you to browse our products online, which includes all the latest information on our great products and styles.</span>
          </div>
          <div className="sub-learn-content">
            <span className='sub-learn-Header'><big>WHY CHOOSE US</big></span>

            <span className='sub-learn-text'>From the very first fan we created more than 30 years ago to the newest ones in our portfolio, we create fans you can’t wait to show off! The same ingenuity and quality craftsmanship that gave birth to Fanimation continues to guide us today.</span>
          </div>
        </div>

    </div>
      
    </>
  )
}

export default About
