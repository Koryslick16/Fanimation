import React from "react";
import "./gallery.css";
import BackgroundGallery from "../../assets/Images/gallery.jpg";
import Fan1 from "../../assets/Images/reviews.webp"
import Fan2 from "../../assets/Images/Fan7.png"
import Fan3 from "../../assets/Images/Fan6.jpg"
import Fan4 from "../../assets/Images/Fan8.png"
import Fan5 from "../../assets/Images/Fan2.jpg"
import Fan6 from "../../assets/Images/PedestalFan4.jpg"
import Fan7 from "../../assets/Images/PedestalFan.jpg"
import Fan8 from "../../assets/Images/WallFan.jpg"
import Fan9 from "../../assets/Images/WallFan3.jpg"
import Fan10 from "../../assets/Images/Fan3.jpg"
import Fan11 from "../../assets/Images/ExhaustFan2.jpg"
import Fan12 from "../../assets/Images/Fan4.jpg"


const Gallery = () => {
  return (
    <>
      <div className="exploreDiv">
        <div
          className="exploreHero"
          style={{
            backgroundImage: `url(${BackgroundGallery})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <h4>ShowRoom</h4>
        </div>

        <div className="galleryText">
          <h5>Our Gallery</h5>
          <p>
            Our showroom shows our commitment to creative and forward thinking
            design. Our Gallery gives a virtual walkthrough the showroom.
          </p>
        </div>
        <div className="galleryDiv">

          <div className="galleryItem st1 ">
            <div className="overlay">
              <div className="image">
                <img src={Fan1} alt="" />
              </div>
              <div className="text">Henry</div>
            </div>
          </div>

          <div className="galleryItem st2">
            <div className="overlay">
              <div className="image">
                <img src={Fan2} alt="" />
              </div>
              <div className="text">Item1</div>
            </div>
          </div>

          <div className="galleryItem st3">
            <div className="overlay">
              <div className="image">
                <img src={Fan12} alt="" />
              </div>
              <div className="text">Item2</div>
            </div>
          </div>

          <div className="galleryItem st4">
            <div className="overlay">
              <div className="image">
                <img src={Fan3} alt="" />
              </div>
              <div className="text">Item3</div>
            </div>
          </div>

          <div className="galleryItem st5">
            <div className="overlay">
              <div className="image">
                <img src={Fan4} alt="" />
              </div>
              <div className="text">Item4</div>
            </div>
          </div>

          <div className="galleryItem st6">
            <div className="overlay">
              <div className="image">
                <img src={Fan5} alt="" />
              </div>
              <div className="text">Item5</div>
            </div>
          </div>

          <div className="galleryItem st7">
            <div className="overlay">
              <div className="image">
                <img src={Fan11} alt="" />
              </div>
              <div className="text">Item6</div>
            </div>
          </div>

          <div className="galleryItem st8">
            <div className="overlay">
              <div className="image">
                <img src={Fan7} alt="" />
              </div>
              <div className="text">Item7</div>
            </div>
          </div>

          <div className="galleryItem st9">
            <div className="overlay">
              <div className="image">
                <img src={Fan6} alt="" />
              </div>
              <div className="text">Item8</div>
            </div>
          </div>

          <div className="galleryItem st10">
            <div className="overlay">
              <div className="image">
                <img src={Fan4} alt="" />
              </div>
              <div className="text">Item9</div>
            </div>
          </div>

          <div className="galleryItem st11">
            <div className="overlay">
              <div className="image">
                <img src={Fan10} alt="" />
              </div>
              <div className="text">Item10</div>
            </div>
          </div>

          <div className="galleryItem st12">
            <div className="overlay">
              <div className="image">
                <img src={Fan9} alt="" />
              </div>
              <div className="text">Item11</div>
            </div>
          </div>

          <div className="galleryItem st13">
            <div className="overlay">
              <div className="image">
                <img src={Fan5} alt="" />
              </div>
              <div className="text">Item12</div>
            </div>
          </div>

          <div className="galleryItem st14">
            <div className="overlay">
              <div className="image">
                <img src={Fan7} alt="" />
              </div>
              <div className="text">Item13</div>
            </div>
          </div>

          <div className="galleryItem st15">
            <div className="overlay">
              <div className="image">
                <img src={Fan8} alt="" />
              </div>
              <div className="text">Item14</div>
            </div>
          </div>

          <div className="galleryItem st16">
            <div className="overlay">
              <div className="image">
                <img src={Fan2} alt="" />
              </div>
              <div className="text">Item15</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Gallery;
