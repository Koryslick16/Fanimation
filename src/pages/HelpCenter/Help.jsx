import React, { useEffect, useState } from "react";
import "./Help.css";
import BackgroundReview from "../../assets/Images/Fan.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Help = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [retrievedData, setRetrievedData] = useState([]);

  const FormState = () => {
    setFormIsOpen((previousState) => !previousState);
  };

  useEffect(() => {
    const Reviews = localStorage.getItem('Reviews');
     if(Reviews){
        setRetrievedData(JSON.parse(Reviews))
     }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
      const newData = {
          name,
          review
    };

    const newReview = [...retrievedData, newData];
    setRetrievedData(newReview);

    localStorage.setItem('Reviews', JSON.stringify(newReview))
    
    setFormIsOpen(false);
    setName("");
    setReview("");
  };

  const sliderStyle = {
    className: "reviews",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="helpDiv">
        <div
          className="helpHero"
          style={{
            backgroundImage: `url(${BackgroundReview})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h4>How Can We Help?</h4>
        </div>

        <div className="support">
          <h5>PRODUCT SUPPORT</h5>
          <p>
            Every Fanimation Fan is backed by our firm's commitment to
            manufacturing with quality materials. We have archives of
            installation and user guides. Feel Free to contact us and we will
            get back to you quickly. We would appreciate a good review from you
            so we can improve our services!
          </p>
        </div>

        <div className="findSupport">
          <h5>Looking For Product Support?</h5>
          <p>
            Contact our Technical Team now with your question- including photos
            so we can get back to you quickly.
          </p>
          <button>Contact us now</button>
        </div>

        <div className="supportP">
          <h5>REVIEWS</h5>
          <p>
            Positive reviews from our satisfied customers fill our hearts with
            joy as we strive to improve in our customer service. We are
            overjoyed when our clients/customers are happy.
          </p>
          <div className="addReview">
            <p>Please leave a review for us? We would appreciate it.</p>
            <button onClick={FormState}>
              {formIsOpen ? "Close Form" : "Add Review"}
            </button>
          </div>

          {formIsOpen && (
            <form className="ReviewForm" onSubmit={handleSubmit}>
              <div className="flex">
                <div className="inputField">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required="Please fill in this field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="textField">
                  <textarea
                    required="Please fill in this field"
                    name="review"
                    id="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <label htmlFor="review">Your Review</label>
                </div>
              </div>
              <button className="btn" type="submit">
                Submit Review
              </button>
            </form>
          )}
          <div className="seeReviews">
            <h5>What our Clients/Customers say about us</h5>

            <Slider {...sliderStyle}>
              
                <div className="reviewSub">
                  <p>
                    I love Fanimation Fans. Their customer service is great.
                    They prioritize the happiness of their customers. I would
                    definitely Patronize them again!
                  </p>
                  <h4>-Jules-</h4>
                </div>
                <div className="reviewSub">
                  <p>
                    I enjoyed the services of Fanimation and their products are
                    very strong and durable. Their discernment about the
                    location and the kind of fan to install is Top Notch.
                  </p>
                  <h4>-Rhys-</h4>
                </div>
                <div className="reviewSub">
                  <p>
                    I love Fanimation Fans. Their customer service is great.
                    They prioritize the happiness of their customers. I would
                    definitely Patronize them again!
                  </p>
                  <h4>-Ava-</h4>
                </div>
                {retrievedData.length > 0 ? (
                  retrievedData.map((dataReview, index) => (
                    <div className="reviewSub" key={index}>
                      <p>{dataReview.review}</p>
                      <h4>-{dataReview.name}-</h4>
                    </div>
                  ))
                ) : (
                  <p></p>
                )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
