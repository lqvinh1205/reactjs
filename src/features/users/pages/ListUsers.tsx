import { Button, Row, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers, removeUsers } from "../userSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
type ListUserProps = {};

const ListUsers = (props: ListUserProps) => {
  const users = useAppSelector((data: any) => data.user.values);
  const dispath = useAppDispatch();

  const columns: any = [
    {
      title: "Name Users",
      dataIndex: "name",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Email",
      className: "column-money",
      dataIndex: "email",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (text: any) => text === 1 ? "Admin" : "Member"
    },
    {
      title: "Action",
      dataIndex: "_id",
      align: "right",
      render: (id: any) => (
        <Row className="flex gap-2 justify-end">
          <Link to={`/admin/users/${id}/edit`}>
            <Button type="primary" icon={<EditOutlined />}></Button>
          </Link>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => dispath(removeUsers(id))}
          ></Button>
        </Row>
      ),
    },
  ];

  useEffect(() => {
    dispath(getUsers());
  }, []);
  return (
    <>
      <Row className="mb-3">
        <Link to="/admin/users/add">
          <Button type="primary">Add User</Button>
        </Link>
      </Row>
      <Table
        columns={columns}
        dataSource={users}
        bordered
        title={() => (
          <Typography.Title level={3}>List Users</Typography.Title>
        )}
        pagination={{
          total: users.lenght,
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 6, 7],
        }}
      />
    </>
  );
};

export default ListUsers;
