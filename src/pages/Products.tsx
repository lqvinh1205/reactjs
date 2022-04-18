import { Col, Divider, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ProductItems from "../components/ProductItems";
import { getCategory } from "../features/category/categorySlice";
import {
  listProduct,
  listProductPagination,
} from "../features/products/productSlice";

import "./Products.css";
import SidebarMenu from "../components/SidebarMenu";
type ProductsProps = {};

const Products = (props: ProductsProps) => {
  const {products, totalElement} = useAppSelector((data: any) => data.product.values);
  const categories = useAppSelector((data: any) => data.category.values);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const dispath = useAppDispatch();
  const onChangePage = (page: any) => {
    
    setCurrentPage(page);
    dispath(listProductPagination([page, perPage]));
  };
  
  useEffect(() => {
    dispath(listProductPagination([currentPage, perPage]));
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
        <Col span={18} className="min-h-[80vh]">
          <Row className="product-page-content">
            {products?.map((item: any) => {
              return (
                <ProductItems product={item} cate={categories} key={item._id} />
              );
            })}
          </Row>
          <Row>
            <Col span={24}>
              <Pagination
                pageSize={perPage}
                onChange={onChangePage}
                total={totalElement}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
