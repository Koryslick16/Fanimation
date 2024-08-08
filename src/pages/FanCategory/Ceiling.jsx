import React from 'react'
import "./ceiling.css"
import Heroproduct from '../../components/ProductHero/Heroproduct'
import CeilingFan from "../../assets/Images/Ceiling.png"

const Ceiling = () => {
  return (
    <>

    <div className="ceilingDiv">
        <Heroproduct image ={CeilingFan} text ="Ceiling Fans"/>
    </div>
      
    </>
  )
}

export default Ceiling
