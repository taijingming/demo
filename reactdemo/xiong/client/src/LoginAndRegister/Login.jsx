import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import './login.css'
import 'antd/dist/antd.css'
import axios from 'axios';
import storeObj from "../store.js"


class NormalLoginForm extends React.Component {
  constructor(arg) {
    super(arg)
    // this.state={
    //   count:[]
    // }
    this.state = storeObj.getState()
    storeObj.subscribe(() => {
      this.setState(storeObj.getState())
    })
  }

  onFinish = (values) => {
    console.log('Received values of form: ', values);

    // axios.post("http://127.0.0.1:7001/login", values, {
    this.$axios.post("/login", values, {
      header: { "content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res.data)
        if (res.data.code == "2002") {
          this.props.history.push("/home");
          window.localStorage.setItem("isLogin", true);
          let action = {
            type: "title_change1",
            value: "个人中心"
          }
          storeObj.dispatch(action)
        } else if (res.data.code == "4004") {
          message.info(res.data.info)
        }
      })
  };
  render() {

    return (
      <div className='loginboxTop'>
        <div className='loginbox'>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <div className='loginboxuser'>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </div>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <div className='loginboxpass'>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </Form.Item>
            <div className='loginboxremmber'>
              <Form.Item >
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>请记住我</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/forgetpwd">
                  忘记密码
          </a>
              </Form.Item>
            </div>

            <Form.Item >
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
          </Button>
          Or <a href="/register">去注册</a>
            </Form.Item>

          </Form>
        </div>
      </div>
    )
  }
}

export default NormalLoginForm