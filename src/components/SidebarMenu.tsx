import { AppstoreOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Menu, Row, Slider, Typography } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  listProduct,
  listProductWithCate,
  rangePrice,
  searchProducts,
} from "../features/products/productSlice";

const { Text } = Typography;
const { Search } = Input;
type Props = {};

const SidebarMenu = (props: Props) => {
  const categories = useAppSelector((data: any) => data.category.values);
  const dispath = useAppDispatch();
  const onSearch = (value: any) => {
    dispath(searchProducts({ value: value }));
  };

  function onAfterChange(value: any) {
    console.log("onAfterChange: ", value);
      dispath(rangePrice({range: value}))
  }
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
        <Divider orientation="left" className="product-menu-side-search">
          Range Price
        </Divider>
        <Row style={{ width: "100%" }}>
          <Slider
            range
            step={1000}
            min={0}
            max={200000}
            defaultValue={[0, 50000]}
            onAfterChange={onAfterChange}
            style={{ width: "100%", margin: "0 25px" }}
          />
        </Row>
        <Divider orientation="left" className="product-menu-side-search">
          Search
        </Divider>
        <Row className="px-5" align="middle">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </Row>
      </Menu>
    </>
  );
};

export default SidebarMenu;
