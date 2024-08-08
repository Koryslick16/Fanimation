import React, { useState, useEffect } from 'react'
import "./product.css"
import Data from "../../../public/data.json"
import BackgroundGallery from "../../assets/Images/Ceiling.png"
import Heroproduct from '../../components/ProductHero/Heroproduct'


const Product = () => {
    const [fans, setFans] = useState(Data);

    console.log(Data);


  return (
    <>

    <div className="productDiv">
       <Heroproduct image = {BackgroundGallery} text = "Fans"/>
       <div className="productWrap">
        {fans.map((product) => (
              <div className="products" key={product.id}>
                  <div className="imageDiv">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h3>{product.name}</h3>
                  <h5>${product.price}</h5>
                  <button>Add To Cart</button>
              </div>
         ))}
         {/* Dancing with my Eyes Closed */}
        
        </div>

    </div>
      
    </>
  )
}

export default Product
