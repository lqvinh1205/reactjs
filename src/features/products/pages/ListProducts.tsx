import { Button, Row, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProduct, removeProduct } from "../productSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
type Props = {};

const ListProducts = (props: Props) => {
  const columns: any = [
    {
      title: "Name Product",
      dataIndex: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Price",
      className: "column-money",
      dataIndex: "price",
    },
    {
      title: "Technology",
      dataIndex: "technology",
    },
    {
      title: "Speed",
      dataIndex: "speed",
    },
    {
      title: "Boost",
      dataIndex: "boost",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Action",
      dataIndex: "_id",
      align: "right",
      render: (id: any) => (
        <Row className="flex gap-2 justify-end">
          <Link to={`/admin/products/${id}/edit`}>
            <Button type="primary" icon={<EditOutlined />}></Button>
          </Link>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => dispath(removeProduct(id))}
          ></Button>
        </Row>
      ),
    },
  ];

  const products = useSelector((data: any) => data.product.values);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(listProduct());
    console.log(products);
  }, []);
  return (
    <>
      <Row className="mb-3">
        <Link to="/admin/products/add">
          <Button type="primary">Add Product</Button>
        </Link>
      </Row>
      <Table
        columns={columns}
        dataSource={products}
        bordered
        title={() => (
          <Typography.Title level={3}>List Products</Typography.Title>
        )}
        pagination={{
          total: products.lenght,
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 6, 7],
        }}
      />
    </>
  );
};

export default ListProducts;
