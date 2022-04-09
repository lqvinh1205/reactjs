import { MailOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { readCategory } from "../features/category/categorySlice";
import { Category } from "../types/category";
import { Product } from "../types/product";
import "./ProductItems.css";

type ProductItemsProps = {
  product: Product;
  cate: Category[];
};

const ProductItems = ({ product, cate }: ProductItemsProps) => {
  const category = cate.filter((item: any) => item._id === product.category);


  return (
    <div className="featured-lux-products-items">
      <div className="featured-lux-products-items-brand">
        <h3>{category[0]?.name}</h3>
        <p>{product.name}</p>
      </div>
      <div className="featured-lux-products-items-image">
        <img
          src={product.images}
          alt=""
        />
      </div>
      <div className="featured-lux-products-items-price">${product.price}</div>
      <div className="featured-lux-products-items-email">
        <MailOutlined />
      </div>
    </div>
  );
};

export default ProductItems;
