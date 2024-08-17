import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import  './Home.css'
import  { useState } from "react";
import "../../components/Category/categories.css";
import Data from "../../../public/data.json";
import { NavLink } from "react-router-dom";
import Modal from "../../components/Modal/Modal";





  

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedType, setSelectedType] = useState("All");
    const [selectedColor, setSelectedColor] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  
    const handleModalDisplay = (product) => {
      setSelectedProduct(product);
      setOpenModal(true);
    };
  
    const filteredType = ["All Types", ...new Set(Data.map((item) => item.type))];
    const filteredColor = ["All Colors", ...new Set(Data.map((item) => item.color))];
    const filteredBrand = ["All Brands", ...new Set(Data.map((item) => item.brand))];
    const priceRange = [
      "Prices",
      "$0 - $100",
      "$100 - $200",
      "$200 - $400",
      "$400 - $600",
      "$600 - $900",
      "$900+"
    ];
    
  
    const filteredProducts = Data.filter((product) => {
      const matchesType = 
        selectedType === "All" || product.type === selectedType;
      const matchesBrand =
        selectedBrand === "All" || product.brand === selectedBrand;
      const matchesColor =
        selectedColor === "All" || product.color === selectedColor;
  
      const matchesPrice = 
      ( () => {
        switch (selectedPriceRange){
         case "$0 - $100":
          return product.price >= 0 && product.price <= 100
         case "$100 - $200":
            return product.price > 100 && product.price <= 200
         case "$200 - $400": 
         return product.price > 200 && product.price <= 400
         case "$400 - $600": 
           return product.price > 400 && product.price <= 600
         case "$600 - $900":
           return product.price > 600 && product.price <= 800
         case "$900+": 
           return product.price > 900
           default:
             return true;
     }
    })(); 
  
      return matchesType || matchesBrand || matchesColor || matchesPrice;
    });
  
    
  return (
    <>
      
     <div className="homeDiv">

        <div className="hero-section">
                <div className="hero-title">
                   <div className="hero-vid">
                    <div className="weekly">
                    <div className="weekly-text"><p>weekly Discount</p></div><br/>
                        <div className="page-title"><h1 className='one'>Premium Product Online Shop</h1></div><br/>
                        <div className="rnfo"><p className="idi"> Featuring the new Antique Graphite finish with new Light Oak finish blade</p></div><br/>

                   <NavLink to="/products"> <button className="btn-17">
                    <span className="text-container">
                        <span className="text">Learn More</span>
                    </span>
                    </button></NavLink>

                    </div>
                   </div>

                   

                </div>
            </div>


        <div className="vid"><h1 className='our'>Our Top Categories</h1></div>
        <div className="inp-holder">
            <div className="inp-holder1">
            <div className="goods-section"><h3>
            <select
              id="drop-down"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {filteredType.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
                </h3></div>
                <div className="goods-section2"><h3>
                <select
              id="drop-down"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {filteredColor.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
                </h3></div>

                
                <div className="goods-section"><h3>
                <select
              id="drop-down"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              {filteredBrand.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
                </h3></div>

                <div className="goods-section"><h3>
                <select
              id="drop-down"
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              {priceRange.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
                </h3></div>

                <div className="goods-section-1a"><h3>
                <select name="" id="drop-down">
                <option value="text"> Offer</option>
                    <option value="text">Sale</option>
                    <option value="">Deal</option>
                    <option value="">Discount</option>
                    <option value="">Value</option>
                    <option value="">Savings</option>
                   </select>
                </h3></div>
                
            </div>

            <div className="inp-holder2">
                <div className="goods-section1"><h3>
                    Filters <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sliders2-vertical" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5M2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5M8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1m3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5m2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5"/>
                    </svg>
                </h3></div>
            </div>
        </div>

            <div className="remark">
                <div className="advert">
                <div className="advert-image3">
                    <video src="/src/assets/Images/b0c61ef446b0dedcef6f32c753d65402_t4 (1).mp4"  autoPlay loop muted className='ceilingfan'>
                    </video>
                        <div className="advert-image-text">
                            <span><h3 className="image-text">Exhaust fans</h3></span><br/>
                            <span><p>From $90</p></span><br/>
                            <NavLink to="/exhaustFans"><button className="acct">Shop Now</button></NavLink>
                        </div>
                    </div>


                    <div className="advert-image2">
                    <video src="/src/assets/Images/8064-206468120_large.mp4"  autoPlay loop muted className='ceilingfan'>
                    </video>
                        <div className="advert-image-text">
                            <span><h3 className="image-text">Pedestal Fan</h3></span><br/>
                            <span><p>From $50</p></span><br/>
                            <NavLink to="/pedestalFan"><button className="acct">Shop Now</button></NavLink>
                        </div>
                    </div>
                   
                    <div className="advert-image1">
                    <video src="/src/assets/Images/11593540-hd_1920_1080_30fps.mp4"  autoPlay loop muted className='ceilingfan'>
                    </video>
                        <div className="advert-image-text">
                            <span><h3 className="image-text">Ceiling Fan</h3></span><br/>
                            <span><p>From $30</p></span><br/>
                            <NavLink to="/ceilingFan"><button className="acct">Shop Now</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-box1">
                <h1>Our Products</h1>
            </div>


            <div className="productDiv">

       
            <div className="productWrap">
          { 
          filteredProducts.map((product) => (
            <div className="products" key={product.id}>
              <div className="imageDiv">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                <span><h2 className="product-title">{product.name}</h2>
                <span className="stars">★★★★★</span></span>
                <span><p className="product-price">${product.price}</p></span>
              </div>
              </div>
              <button className="add-to-cart-button" onClick={() => handleModalDisplay(product)}>
                <span className="cart-icon">🛒</span>
                Quick View
              </button>
            </div>
          )) 
           
          }
        </div>

        {openModal && selectedProduct && (
          <Modal
            image={selectedProduct.image}
            name={selectedProduct.name}
            description={selectedProduct.description}
            category={selectedProduct.type}
            brand={selectedProduct.brand}
            price={selectedProduct.price}
            color={selectedProduct.color}
            close={() => setOpenModal(false)}
          />
        )}
      </div>
     <div className="marqueeContainer">
     <marquee behavior="scroll" direction="left" scrollamount="10">
      I developed a state-of-the-art Fanimation frontend project that showcases my expertise in modern web technologies.
    This project highlights my skills in React, CSS animations, and responsive design. The Fanimation project involves
    a dynamic and interactive interface that smoothly transitions through various animations, offering a visually appealing
    and engaging user experience. I implemented complex state management using Redux, ensuring optimal performance and
    maintainability. Additionally, the project features robust testing using Jest and React Testing Library, guaranteeing
    a reliable and bug-free codebase. My attention to detail and commitment to excellence are evident in this project,
    making it a standout example of my capabilities as a frontend developer.
        </marquee>
     </div>
      <div className="multi-colored-line new-multi-coloured-line"></div>  


     </div>

    </>
  )
}

export default Home
