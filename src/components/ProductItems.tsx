import React from "react";
import "./ProductItems.css";

type Props = {};

const ProductItems = (props: Props) => {
  return (
    <div className="featured-lux-products-items">
      <div className="featured-lux-products-items-brand">
        <h3>Tesla</h3>
        <p>Model X</p>
      </div>
      <div className="featured-lux-products-items-image">
        <img
          src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226300/car/featured1_oksfqc.png"
          alt=""
        />
      </div>
      <div className="featured-lux-products-items-price">
          $98,900
      </div>
      <div className="featured-lux-products-items-email">
        <i className="ri-mail-line"></i>
      </div>
    </div>
  );
};

export default ProductItems;
