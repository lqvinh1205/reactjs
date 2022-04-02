import { Button } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCategory } from "../features/category/categorySlice";
import {
  listProduct,
  listProductWithCate,
} from "../features/products/productSlice";
import "./FeatureLuxury.css";
import ProductItems from "./ProductItems";
type Props = {};

const FeatureLuxury = (props: Props) => {
  let products = useAppSelector((data: any) => data.product.values);
  const categories = useAppSelector((data: any) => data.category.values);
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(listProduct());
    dispath(getCategory());
  }, []);
  return (
    <div className="featured-lux container-main">
      <div className="featured-lux-title">
        <h4>Featured Lux Cars</h4>
      </div>
      <div className="row featured-lux-logo">
        <Button className="featured-lux-logo-cate" onClick={() => dispath(listProduct())}>All</Button>
        {categories.map((item: any, index: any) => {
          return (
            <Button
              key={index}
              className="featured-lux-logo-cate"
              onClick={() => dispath(listProductWithCate(item._id))}
            >
              <img src={item.images} alt="" />
            </Button>
          );
        })}
      </div>
      <div className="row featured-lux-products min-h-[70vh]">
        {products?.map((item: any) => {
          return (
            <ProductItems product={item} cate={categories} key={item._id} />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureLuxury;
