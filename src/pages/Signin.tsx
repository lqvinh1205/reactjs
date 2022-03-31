import React, { Fragment } from "react";
import "./Signin.css";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Avatar,
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

type Props = {};

const Signin = (props: Props) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="pt-28 signin-main bg-dark min-h-screen">
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
      <Row className="form-signin">
        <Col span={24} className="py-4">
          <Title level={2} className="text-login">
            Login
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
              name="username"
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
              <Input.Password />
            </Form.Item>

            <Row className="mb-1">
              <Col span={8} offset={6}>
                <Text className="have-account">
                  You have account?
                  <Link to="/signup" className="pl-2">Sign-up </Link>
                </Text>
              </Col>
            </Row>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 6, span: 18 }}
            >
              <Checkbox>Remember me</Checkbox>
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

export default Signin;
