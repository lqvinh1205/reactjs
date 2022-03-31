import React from "react";
import { useDispatch } from "react-redux";
import "./Signup.css";
import {
  Form,
  Input,
  Button,
  Typography,
  Avatar,
  Row,
  Col,
  InputNumber,
} from "antd";
import { addUsers } from "../features/users/userSlice";
const { Title, Text } = Typography;

type Props = {};

const Signup = (props: Props) => {
  const dispatch = useDispatch();

  const onFinish = (user: any) => {
    dispatch(addUsers(user));
    console.log(user);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="pt-28 signup-main min-h-screen">
      <Row justify="center" align="middle" className="pt-5 pb-10">
        <Avatar
          className="logo-login"
          size={54}
          src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226288/car/favicon_a63nys.png"
        />
        <Text strong className="pl-3 text-logo-form">
          ElecCar
        </Text>
      </Row>
      <Row className="form-signup">
        <Col span={24} className="py-4">
          <Title level={2} className="text-login">
            Register
          </Title>
        </Col>
        <Col span={24}>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Age"
              name="Age"
              rules={[{ type: "number", min: 0, max: 99 }]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
