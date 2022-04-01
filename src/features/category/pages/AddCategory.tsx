import React from "react";
import { Form, Input, Button, Checkbox, Row, Select, Upload } from "antd";
import { FormInstance } from "antd/es/form";
import { Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./AddCategory.css";
import { useDispatch } from "react-redux";
import { createCategory } from "../categorySlice";

const { Title } = Typography;
const { Option } = Select;

type Props = {};

const AddCategory = (props: Props) => {
  const dispath = useDispatch();
  const onFinish = (cate: any) => {
    console.log("page Add: ", cate);

    dispath(createCategory(cate));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <>
      <Row className="flex justify-center">
        <Title level={2}>Fill add category</Title>
      </Row>
      <Form
        name="basic"
        labelCol={{ span: 8, offset: 4 }}
        wrapperCol={{ span: 16, offset: 4 }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form-add-product"
      >
        <Form.Item
          label="Name category"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Images category"
          name="images"
          rules={[{ required: true, message: "Please input your images!" }]}
        >
          <Input placeholder="http://url" />
        </Form.Item>
        <Form.Item
          name="images"
          label="Upload"
          valuePropName=""
          getValueFromEvent={normFile}
          extra=""
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCategory;
