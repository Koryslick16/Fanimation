import React from 'react'
import "./chooseFan.css"

const ChooseFan = () => {
  return (
    <>
      <div className="chooseDiv">
        <div className="fanHero" style={{
             backgroundImage: `url(${BackgroundReview})`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "center",
         }}>
            <h4>Choosing A Fan</h4>
        </div>
      </div>
    </>
  )
}

export default ChooseFan
