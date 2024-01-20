import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { https } from "../../Service/api";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/movieSlice";
import LoginSlick from "./LoginSlick";

export const FormLogin = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log(res.data.content);
        message.success("Logged in successfully");
        navigate("/");
        dispatch(setUser(res.data.content));
        localStorage.setItem("User_Info", JSON.stringify(res.data.content));
      })
      .catch((err) => {
        console.log(err);
        message.error("Login failed");
      });
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="formLogin LoginPage container">
      <div>
        <h2 className="pt-5 ps-10 font-semibold text-white dangNhap" >
          <NavLink to="/account" className="dangNhapSpan">LOGIN</NavLink>
          <NavLink to="/signup" className="dangNhapSpan">
            SIGNUP
          </NavLink>
        </h2>
        <Form
          name="normal_login"
          className="login-form formDNhap"
          layout="vertical"
          wrapperCol={{
            offset: 1,
            span: 22,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ backgroundColor: "#ffffff", width: "64%", height: "50vh" }}
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            className="p-1"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Please input your username"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            className="formUser"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
            style={{ position: "relative", bottom: "40px" }}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="PLease input your password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              style={{ position: "relative", right: "25px", bottom: "60px" }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a
              className="login-form-forgot forgotPass"
              style={{ position: "absolute", left: "370px", bottom: "85px" }}
              href=""
            >
              Forgot password
            </a>
          </Form.Item>

          <Form.Item
            labelCol={{
              span: 24,
            }}
          >
            <Button
              htmlType="submit"
              className="login-form-button text-white logIn"
              style={{ position: "absolute", bottom: "75px" }}
            >
              <p
                className="text-xl"
                style={{ position: "absolute", bottom: "8px", left: "45%" }}
              >
                Log in
              </p>
            </Button>
            <p style={{ position: "absolute", bottom: "45px", left: "40%" }}>
              Or{" "}
              <NavLink to='/signup' className="text-blue-400 ">
                register now!
              </NavLink>
            </p>
          </Form.Item>
        </Form>
      </div>
      {/* <LoginSlick/> */}
    </div>
  );
};
export default FormLogin;
