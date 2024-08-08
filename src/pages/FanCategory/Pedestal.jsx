import React from 'react'
import "./ceiling.css"
import Heroproduct from '../../components/ProductHero/Heroproduct'
import CeilingFan from "../../assets/Images/pedestal.jpeg"


const Pedestal = () => {
  return (
    <>

<div className="ceilingDiv">
        <Heroproduct image ={CeilingFan} text ="Pedestal Fans"/>
    </div>
      
    </>
  )
}

export default Pedestal
