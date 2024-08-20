import React, { useState } from "react";
import "./product.css";
import "../../components/Category/categories.css";
import Data from "../../../public/data.json";
import BackgroundGallery from "../../assets/image/ceiling2.jpeg";
import Heroproduct from "../../components/ProductHero/Heroproduct";
import { NavLink } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const Product = () => {
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
      <div className="productDiv">
        <Heroproduct image={BackgroundGallery} text="Fans" />

        <div className="cat">
          <h3>Categories</h3>
          <div className="butons">
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return isActive
                  ? {
                      width: "50px",
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      width: "50px",
                      backgroundColor: "lightgray",
                    };
              }}
            >
              <h4>All</h4>
            </NavLink>

            <NavLink
              to="/ceilingFan"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Ceiling Fans</h4>
            </NavLink>

            <NavLink
              to="/pedestalFan"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Pedestal Fans</h4>
            </NavLink>

            <NavLink
              to="/wallFan"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Wall Fans</h4>
            </NavLink>

            <NavLink
              to="/exhaustFans"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#581c52c7",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Exhaust Fans</h4>
            </NavLink>

            <NavLink
              to="/accessories"
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#53284f",
                      color: "rgb(230, 243, 243)",
                    }
                  : {
                      backgroundColor: "lightgray",
                      color: "rgb(32, 32, 32)",
                    };
              }}
            >
              <h4>Accessories</h4>
            </NavLink>

            <select
              id="option"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {filteredType.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select
              id="option"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              {filteredBrand.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <select
              id="option"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {filteredColor.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>

            <select
              id="option"
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              {priceRange.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>

          </div>
        </div>



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
    </>
  );
};

export default Product;
