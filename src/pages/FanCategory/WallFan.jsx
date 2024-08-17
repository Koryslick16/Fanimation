import React, { useState } from "react";
import "./ceiling.css";
import "../Products/product.css";
import Data from "../../../public/data.json";
import Heroproduct from "../../components/ProductHero/Heroproduct";
import CeilingFan from "../../assets/Images/Wall.webp";
import Modal from "../../components/Modal/Modal";
import Categories from "../../components/Category/Categories";

const WallFan = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleModalDisplay = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const filteredData = Data.filter((item) => item.category === "wall fan");

  return (
    <>
      <div className="ceilingDiv">
        <Heroproduct image={CeilingFan} text="Wall Fans" />

        <Categories/>

        <div className="productWrap">
          {filteredData.map((product) => (
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
          ))}
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

export default WallFan;
