import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const First = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>

            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="发货地址"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: '请填写发货地址',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="门牌"
                    name="menpai"
                    rules={[
                        {
                            required: true,
                            message: '请填写具体楼号和门牌号',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="发货人姓名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请填写发货人姓名',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="发货人电话"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: '请填写发货人电话',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>保存为常用地址</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit"> Submit</Button>
                </Form.Item>
            </Form>
        </div>

    );
};
export default First