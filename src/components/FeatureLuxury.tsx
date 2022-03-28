import React from "react";
import "./FeatureLuxury.css"
import ProductItems from "./ProductItems";
type Props = {};

const FeatureLuxury = (props: Props) => {
  return (
    <div className="featured-lux container">
      <div className="featured-lux-title">
        <h4>Featured Lux Cars</h4>
      </div>
        <div className="row featured-lux-logo">
            <div className="featured-lux-logo-cate">
                All
            </div>
            <div className="featured-lux-logo-cate">
                <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226328/car/logo3_r9t3d9.png" alt="" />
            </div>
            <div className="featured-lux-logo-cate">
                <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226340/car/logo2_a8gk9p.png" alt="" />
            </div>
            <div className="featured-lux-logo-cate">
                <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226340/car/logo1_qz80i5.png" alt="" />
            </div>
        </div>
        <div className="row featured-lux-products">
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
        </div>
    </div>
  );
};

export default FeatureLuxury;
