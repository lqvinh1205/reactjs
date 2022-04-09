import { Button, Row, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategory, removeCategory } from "../categorySlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
type Props = {};

const ListCategory = (props: Props) => {
  const category = useAppSelector((data: any) => data.category.values);
  const dispath = useAppDispatch();

  const columns: any = [
    {
      title: "Name Category",
      dataIndex: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Images",
      className: "column-money",
      dataIndex: "images",
    },
    {
      title: "Action",
      dataIndex: "_id",
      align: "right",
      render: (id: any) => (
        <Row className="flex gap-2 justify-end">
          <Link to={`/admin/category/${id}/edit`}>
            <Button type="primary" icon={<EditOutlined />}></Button>
          </Link>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => dispath(removeCategory(id))}
          ></Button>
        </Row>
      ),
    },
  ];

  useEffect(() => {
    dispath(getCategory());
  }, []);
  return (
    <>
      <Row className="mb-3">
        <Link to="/admin/category/add">
          <Button type="primary">Add CateGory</Button>
        </Link>
      </Row>
      <Table
        columns={columns}
        dataSource={category}
        bordered
        title={() => (
          <Typography.Title level={3}>List Catgory</Typography.Title>
        )}
        pagination={{
          total: category.lenght,
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 6, 7],
        }}
      />
    </>
  );
};

export default ListCategory;
