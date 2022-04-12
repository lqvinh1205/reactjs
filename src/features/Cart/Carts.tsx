import { Button, Modal, Row, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getDetailCart } from "./CartSlice";
type Props = {};

const Carts = (props: Props) => {
  const cartID = useAppSelector((state: any) => state.cart.cartId)
  console.log(cartID);
  const dispath = useAppDispatch()
  const handleRemove = (id: any) => {
    Modal.confirm({
      title: "Thông báo",
      content: "Bạn có chắc muốn xóa",
      onOk: () => {}
    })
    
  }
  const columns: any = [
    {
      title: "Name Product",
      dataIndex: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Images",
      dataIndex: "category",
    },
    {
      title: "Price",
      className: "column-money",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "technology",
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
            onClick={() => handleRemove(id)}
          ></Button>
        </Row>
      ),
    },
  ];

  useEffect(() => {
    dispath(getDetailCart());
    // console.log(products);
  }, []);
  return (
    <div className=" container-main pt-[120px]">
      <Table
        columns={columns}
        // dataSource={products}
        bordered
        title={() => (
          <Typography.Title level={3} className="flex items-center gap-2"><ShoppingCartOutlined /> Carts</Typography.Title>
        )}
        pagination={{
          // total: products.lenght,
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 6, 7],
        }}
      />
    </div>
  );
};

export default Carts;
