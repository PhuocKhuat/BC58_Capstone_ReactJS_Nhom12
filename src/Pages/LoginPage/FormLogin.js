import React from 'react'

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./style.css"

export const FormLogin = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='mt-64 ms-44'>
      <p className='text-2xl' style={{position:'absolute', top:"200px"}}>Welcome to Cyber Movie! Please login.</p>
      <Form
      name="normal_login"
      className="login-form"
      layout='vertical'
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        offset: 7,
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{ backgroundColor: "#ffffff", width: "80%"}}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Please input your username" 
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="PLease input your password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      <a className="login-form-forgot" style={{marginLeft: "280px"}} href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item labelCol={{
        span: 24,
      }}>
        <Button htmlType="submit" className="login-form-button bg-blue-500  text-white logIn">
          <p>Log in</p>
        </Button>
        <p>Or <a href="">register now!</a></p>
      </Form.Item>
    </Form>
  

    </div>
    );
};
export default FormLogin;
