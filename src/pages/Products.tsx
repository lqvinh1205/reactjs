import { Col, Divider, Row } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ProductItems from "../components/ProductItems";
import { getCategory } from "../features/category/categorySlice";
import {
  listProduct,
} from "../features/products/productSlice";

import "./Products.css";
import SidebarMenu from "../components/SidebarMenu";
type ProductsProps = {};

const Products = (props: ProductsProps) => {
  const products = useAppSelector((data: any) => data.product.values);
  const categories = useAppSelector((data: any) => data.category.values);
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(listProduct());
    dispath(getCategory());
  }, []);
  return (
    <div className="min-h-[80vh] product-page pt-[80px] container-main">
      <Row>
        <Divider
          orientation="left"
          orientationMargin={0}
          className="product-page-title"
          plain
        >
          Products Shop
        </Divider>
        <Col span={6}>
            <SidebarMenu />
        </Col>
        <Col span={18} className="product-page-content min-h-[80vh]">
          {products?.map((item: any) => {
            return (
              <ProductItems product={item} cate={categories} key={item._id} />
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Products;
