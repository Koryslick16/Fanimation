import React from 'react'
import "./ceiling.css"
import Heroproduct from '../../components/ProductHero/Heroproduct'
import CeilingFan from "../../assets/Images/Ceiling.png"

const Exhaust = () => {
  return (
    <>

<div className="ceilingDiv">
        <Heroproduct image ={CeilingFan} text ="Exhaust Fans"/>
    </div>
      
    </>
  )
}

export default Exhaust
