import React, { useEffect } from "react";
import { Form, Input, Button, Row, Select, Upload } from "antd";
import { Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./AddUser.css";
import { readUsers, updateUsers } from "../userSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";

const { Title } = Typography;
const { Option } = Select;

type Props = {};

const EditUser = (props: Props) => {
  const dispath = useAppDispatch();
  const [form] = Form.useForm();
  const { id } = useParams();
  useEffect(() => {
    const getUser = async () => {
        try {
          const { payload } = await dispath(readUsers(id))
          form.setFieldsValue(payload) 
        } catch (error) {
          console.log(error);
          
        }        
    }
    getUser()
  }, []);
  const onFinish = (user: any) => {
    console.log("page AddUser: ", user);
    dispath(updateUsers({id, ...user}));
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
        <Title level={2}>Fill edit user</Title>
      </Row>
      <Form
        name="basic"
        labelCol={{ span: 8, offset: 4 }}
        wrapperCol={{ span: 16, offset: 4 }}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        className="form-add-product"
        form={form}
      >
        <Form.Item
          label="Name user"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item label="Age" name="age">
          <Input placeholder="Age" />
        </Form.Item>

        <Form.Item label="Role" name="role">
          <Select placeholder="Select a option" allowClear>
            <Option value={0}>Member</Option>
            <Option value={1}>Admin</Option>
          </Select>
        </Form.Item>
        <Form.Item
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

export default EditUser;
