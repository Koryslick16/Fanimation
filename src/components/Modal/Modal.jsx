import React, { useState } from 'react'
import "./modal.css"
import { IoCloseSharp } from "react-icons/io5";


const Modal = (props) => {

    const [openModal, setOpenModal] = useState(true)

    const handleModalDisplay = () => {
        setOpenModal(false);
      };

  return (
    <>
    
             <div className="modal" style={{
              color: "black"
            }}>
              
                  <div className="modalBox">
                 
                    <div className="modalLeft">
                    <img src={props.image} alt="" />
                    </div>
                    <div className="modalRight">
                    <button onClick={props.close}><IoCloseSharp /></button>
                 <div className="name">
                 <h3>{props.name}</h3>
                 </div>
                 <div className="description">
                 <p>{props.description}</p>
              
                 </div>
                  <h4><span>Type: </span>{props.category}</h4>
                  <h4><span>Brand: </span>{props.brand}</h4>
                  <h4><span>Price: </span>${props.price}</h4>
                 <h4><span>Color: </span>{props.color}</h4>
                    </div>
                 
                  </div>
            
              </div>

    
    
    </>
      
  )
}

export default Modal
