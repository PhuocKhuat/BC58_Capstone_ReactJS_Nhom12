import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { https } from "../../Service/api";

export const FormSignup = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangKy", values)
      .then((res) => {
        console.log(res);
        navigate("/account");
        message.success("Sign up success");
      })
      .catch((err) => {
        console.log(err);
        message.error("registration failed");
      });
    console.log("Success: ", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="formSignup container" style={{ height: "730px" }}>
      <div>
        <h2 className="pt-5 ps-10 font-semibold text-white dangNhap">
          <NavLink to="/account" className="dangNhapSpan">
            LOGIN
          </NavLink>
          <NavLink to="/signup" className="dangNhapSpan">
            SIGNUP
          </NavLink>
        </h2>
      </div>
      <Form
        name="normal_login"
        className="login-form formDKy"
        layout="vertical"
        wrapperCol={{
          offset: 1,
          span: 22,
        }}
        initialValues={{
          remember: true,
        }}
        style={{ backgroundColor: "#ffffff" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="taiKhoan"
          className="truongDuLieu"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          label="Fullname"
          name="hoTen"
          className="truongDuLieu"
          rules={[
            {
              required: true,
              message: "Please input your Fullname!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Fullname"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          className="truongDuLieu"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          label="Number Phone"
          name="soDt"
          className="truongDuLieu"
          rules={[
            {
              required: true,
              message: "Please input your Number Phone!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Number Phone"
          />
        </Form.Item>
        <Form.Item
          label="Group Code"
          name="maNhom"
          className="truongDuLieu"
          rules={[
            {
              required: true,
              message: "Please input your group code!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="group code"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="matKhau"
          className="truongDuLieu"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="login-form-button BTN">
            <p className="textSignup text-xl">Sign Up</p>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormSignup;
