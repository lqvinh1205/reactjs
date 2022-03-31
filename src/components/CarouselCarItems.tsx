import React from "react";
import "./CarouselCarItems.css";

type Props = {};

const CarouselCarItems = (props: Props) => {
  return (
    <div className="slide-items">
      <div className="slide-items-brand">
        <h3>Porsche</h3>
        <p>Turbo S</p>
      </div>
      <div className="slide-items-image">
        <img
          src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226340/car/popular1_wtmgtd.png"
          alt=""
        />
      </div>
      <div className="slide-items-info">
          <span><i className="ri-safari-line"></i> 3.7 Sec</span>
          <span><i className="ri-funds-box-line"></i> 357 Km/h</span>
          <span><i className="ri-charging-pile-2-line"></i> Electric</span>
      </div>
      <div className="slide-items-price">
          $175,900
      </div>
      <div className="slide-items-email">
        <i className="ri-mail-line"></i>
      </div>
    </div>
  );
};

export default CarouselCarItems;
