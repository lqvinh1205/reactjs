import { MailOutlined } from "@ant-design/icons";
import React from "react";
import { Category } from "../types/category";
import { Product } from "../types/product";
import "./CarouselCarItems.css";
type CarouselCarItemsProps = {
  product: Product,
  category: Category
};

const CarouselCarItems = ({product, category}: CarouselCarItemsProps) => {
  
  return (
    <div className="slide-items">
      <div className="slide-items-brand">
        <h3>{category?.name}</h3>
        <p>{product?.name}</p>
      </div>
      <div className="slide-items-image">
        <img
          src={product.images}
          alt=""
        />
      </div>
      <div className="slide-items-info">
          <span><i className="ri-safari-line"></i>{product.boost} Sec</span>
          <span><i className="ri-funds-box-line"></i>{product.speed} Km/h</span>
          <span><i className="ri-charging-pile-2-line"></i> {product.technology}</span>
      </div>
      <div className="slide-items-price">
          $ {product.price}
      </div>
      <div className="slide-items-email">
        <MailOutlined />
      </div>
    </div>
  );
};

export default CarouselCarItems;
