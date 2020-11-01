import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  message,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './register.css'
import axios from "axios"
class RegistrationForm extends React.Component {
  constructor() {
    super()
    this.state = {
      // count:[],
      captcha: [],
      //  count2:[]
    }
  }
  onFinish = values => {
    console.log('Received values of form: ', values);
    axios.post("http://127.0.0.1:7001/register", values, {
      header: { "content-Type": "application/x-www-form-urlencoded" },
      // xsrfCookieName: 'XSRF-TOKEN',
    })
      .then((res) => {
        console.log(res.data)

        if (res.data.code == "4002") {
          message.info(res.data.info)
        } else if (res.data.code == "4003") {
          message.info(res.data.info)
        } else if (res.data.code == "2001") {
          message.info(res.data.info)
          setTimeout(() => {
            this.props.history.replace("/login");
          }, 3000)
        }

        //  this.setState({count:res.data})
      })
  };

  verificationCode = () => {
    // axios.get("http://127.0.0.1:7001/verif", {
    this.$axios.get("/verif", {
    })
      .then((res2) => {
        console.log(res2.data)
        this.setState({ captcha: res2.data })
      })
  };
  getback = () => {
    this.props.history.replace("/login");
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const { Option } = Select;
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );


    return (
      <div className="redisterboxTop">
        <div className="redisterbox">
          <Form
            {...formItemLayout}
            onFinish={this.onFinish}
            name="register"

            initialValues={{
              residence: ['zhejiang', 'hangzhou', 'xihu'],
              prefix: '86',
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="nickname"
              label={
                <span>
                  Nickname&nbsp;
            <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item label="Captcha" extra="We must make sure that your are a human.">
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button onClick={this.verificationCode}>Get captcha</Button>
                  <span>{this.state.captcha.text}</span>

                </Col>
              </Row>
              {/* <img className="verifimg" src={this.state.captcha.data} alt=""/> */}
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                注册
        </Button>
              <span> </span>
              <Button type="primary" htmlType="submit" onClick={this.getback}>
                返回
        </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default RegistrationForm  
