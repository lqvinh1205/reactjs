import { Avatar, Col, Divider, Image, Menu, Row } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ProductItems from "../components/ProductItems";
import { getCategory } from "../features/category/categorySlice";
import {
  listProduct,
  listProductWithCate,
} from "../features/products/productSlice";
import { Typography } from "antd";

import "./Products.css";
import { AppstoreOutlined } from "@ant-design/icons";
type ProductsProps = {};
const { Text } = Typography;

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
          <Menu
            style={{ width: 256 }}
            defaultOpenKeys={["sub1"]}
            theme={"dark"}
            mode="inline"
            className="product-menu-side"
          >
            <Divider
              orientation="left"
              className="product-mene-side-title"
              plain
            >
              Categories
            </Divider>
            <Menu.Item key={0} onClick={() => dispath(listProduct())}>
              <Row align="middle">
                <Col span={6}>
                  <AppstoreOutlined style={{ fontSize: "30px"}}/>
                </Col>
                <Col span={18}>
                  <Text>All</Text>
                </Col>
              </Row>
            </Menu.Item>
            {categories.map((item: any, index: any) => {
              return (
                <Menu.Item
                  key={index + 1}
                  onClick={() => dispath(listProductWithCate(item._id))}
                >
                  <Row align="middle">
                    <Col span={6}>
                      <img
                        src={item.images}
                        alt=""
                        className="product-menu-side-logo"
                      />
                    </Col>
                    <Col span={18}>
                      <Text>{item.name}</Text>
                    </Col>
                  </Row>
                </Menu.Item>
              );
            })}
          </Menu>
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
