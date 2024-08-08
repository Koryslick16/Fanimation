import React from 'react'
import "./ceiling.css"
import Heroproduct from '../../components/ProductHero/Heroproduct'
import CeilingFan from "../../assets/Images/Ceiling.png"


const WallFan = () => {
  return (
    <>

<div className="ceilingDiv">
        <Heroproduct image ={CeilingFan} text ="Wall Fans"/>
    </div>
      
    </>
  )
}

export default WallFan
