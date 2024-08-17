import React from 'react'
import "./hero.css"

const Heroproduct = (props) => {
  return (
    <>

    <div className="heroDiv" style={{
             backgroundImage: `url(${props.image})`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "center",
        }}>
         <h2>{props.text}</h2>
        </div>

      
    </>
  )
}

export default Heroproduct
