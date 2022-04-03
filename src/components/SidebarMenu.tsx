import { AppstoreOutlined } from "@ant-design/icons";
import { Col, Divider, Menu, Row, Typography } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { listProduct, listProductWithCate } from "../features/products/productSlice";

const {Text} = Typography
type Props = {};

const SidebarMenu = (props: Props) => {
    const categories = useAppSelector((data: any) => data.category.values);
    const dispath = useAppDispatch();
  return (
    <>
      <Menu
        style={{ width: 256 }}
        defaultOpenKeys={["sub1"]}
        theme={"dark"}
        mode="inline"
        className="product-menu-side"
      >
        <Divider orientation="left" className="product-mene-side-title" plain>
          Categories
        </Divider>
        <Menu.Item key={0} onClick={() => dispath(listProduct())}>
          <Row align="middle">
            <Col span={6}>
              <AppstoreOutlined style={{ fontSize: "30px" }} />
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
    </>
  );
};

export default SidebarMenu;
