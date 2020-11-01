import React, { useState } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    message,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import "./forgetpwd.css"
// import 'antd/dist/antd.css'
import axios from "axios"

class forgetpwd extends React.Component {
    constructor() {
        super()
        this.state = {
            count: []
        }
    }

    onFinish = (values) => {
        console.log(values);
        // axios.post("http://127.0.0.1:7001/forgetpwd", values, {
        this.$axios.post('/forgetpwd', values, {
            header: { "content-Type": "application/x-www-form-urlencoded" },
        })
            .then((res) => {
                console.log(res.data)
                if (res.data.code == "2003") {
                    message.info(res.data.info, 5)
                } else if (res.data.code == "3001") {
                    message.info(res.data.info, 5)
                }
            })
    }
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
        return (
            <div className="forgetpwdcss">
                <Form onFinish={this.onFinish.bind(this)} scrollToFirstError {...formItemLayout}>
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
                    <Form.Item  {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" scrollToFirstError="true">
                            修改
                        </Button>
                        <span> </span>
                        <Button type="primary" htmlType="submit" onClick={this.getback}>
                            返回
                        </Button>

                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default forgetpwd