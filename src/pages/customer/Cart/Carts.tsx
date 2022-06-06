import { Button, Modal, notification, Row, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../core/app/hooks";
import { getLs } from "../../../shared/ultis/localstogare";
import { update } from "../../../core/api/cart";
import { getCarts } from "../../../core/features/CartSlice";
type Props = {};

const Carts = (props: Props) => {
  const carts = useAppSelector((state: any) => state.cart.carts);
  console.log(carts.items);
  const {user} = getLs('user')  

  const dispath = useAppDispatch();
  const handleRemove = (id: any) => {
    notification.success({
      message: "Xóa thành công",
    });
  };

  const handleOrder = () => {
    Modal.confirm({
      title: "Thông báo",
      content: "Bạn có chắc muốn đặt hàng",
      onOk: () => update(carts),
    });
  };
  const columns: any = [
    {
      title: "Name Product",
      render: (carts: any) => <span>{carts.productId.name}</span>,
    },
    {
      title: "Images",
      render: (carts: any) => (
        <img src={carts.productId.images} className="w-28" alt="" />
      ),
    },
    {
      title: "Price",
      className: "column-money",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
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
    dispath(getCarts(user._id));
  }, [dispath]);
  return (
    <div className=" container-main pt-[120px]">
      <Table
        columns={columns}
        dataSource={carts.items}
        bordered
        title={() => (
          <Typography.Title level={3} className="flex items-center gap-2">
            <ShoppingCartOutlined /> Carts
          </Typography.Title>
        )}
        pagination={{
          // total: products.lenght,
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 6, 7],
        }}
      />
      <Button onClick={handleOrder} type="primary">
        Order
      </Button>
    </div>
  );
};

export default Carts;
