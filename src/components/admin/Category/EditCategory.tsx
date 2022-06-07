import React, { useEffect } from "react";
import { Form, Input, Button, Row, Select, Upload } from "antd";
import { Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./AddCategory.css";
import { useAppDispatch, useAppSelector } from "../../../core/app/hooks";
import { useParams } from "react-router-dom";
import { readCategory, updateCategory } from "../../../core/features/categorySlice";

const { Title } = Typography;
// const formRef = React.createRef<FormInstance>();

type Props = {};

const EditCategory = (props: Props) => {
  // goi function tu store
  const dispath = useAppDispatch();
  const [form] = Form.useForm();
  //lay id tu url
  const { id } = useParams();

  //call api
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { payload: {category} } = await dispath(readCategory(id));
        console.log(category);
        form.setFieldsValue(category);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const onFinish = (cate: any) => {
    dispath(updateCategory({id,...cate}));
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
      <Title level={2}>Fill edit category</Title>
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
      form={form}
    >
      <Form.Item
        label="Name category"
        name="name"
        rules={[{ required: true, message: "Please input your category!" }]}
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

export default EditCategory;
