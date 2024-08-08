import React, { useEffect, useState } from "react";
import "./scroll.css";
import { IoIosArrowUp } from "react-icons/io";


const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollVisible = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", scrollVisible);

    return () => {
      window.removeEventListener("scroll", scrollVisible);
    };
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showButton && (
            <button className="scrollTop" onClick={handleScroll}>
            <h3><IoIosArrowUp /></h3>
          </button>
        
      )}
    </>
  );
};

export default ScrollTop;
