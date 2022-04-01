import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCategory } from "../features/category/categorySlice";
import { listProduct } from "../features/products/productSlice";
import "./FeatureLuxury.css"
import ProductItems from "./ProductItems";
type Props = {};

const FeatureLuxury = (props: Props) => {
  const products = useAppSelector((data: any) => data.product.values);
  const category = useAppSelector((data: any) => data.category.values);
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
          {products.map((item: any) => {
            return (
              <ProductItems product={item} cate={category} key={item._id}/>
            )
          })}
        </div>
    </div>
  );
};

export default FeatureLuxury;
