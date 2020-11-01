import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, Menu, Switch, Divider, DatePicker, Space, message, Modal, Row, Col } from 'antd';
import CreateCss from "./create.module.scss";
import axios from 'axios';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { TextArea } = Input;
const { RangePicker } = DatePicker;
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
class Create extends React.Component {
    constructor(arg) {
        super(arg)
        this.state = {
            quality: 1,
            flag1: false,
            flag2: false,
            listType: ["食品饮料", "鲜花", "蛋糕", "文件", "水果生鲜", "执照证件", "数码家电", "服饰鞋帽", "其它"],
            listPrice: ["50元以下", "50~100元", "100~500元", "500~1000元", "1000~5000元", "5000~10000元"],
            index1: 1,
            index2: 2,
            info: "",
            check1: false,
            fahuoTime: new Date(),
            isShow: "none",
            visible: false,
            obj: ""

        }
        this.setVisible = function () {
            this.setState({ visible: !this.state.visible })
        }
        //底部下一步按钮
        this.next1 = function () {
            if (this.state.flag1 && this.state.flag2) {
                let that = this
                this.setState({
                    obj: {
                        type: that.state.listType[that.state.index1],
                        price: that.state.listPrice[that.state.index2],
                        quality: that.state.quality,
                        info: that.state.info,
                        qianshou: that.state.check1,
                        fahuoTime: that.state.fahuoTime,
                        address1: that.refs.Ffrom.getFieldsValue().address,
                        address2: that.refs.Sfrom.getFieldsValue().address1,
                        phone1: that.refs.Ffrom.getFieldsValue().phone,
                        phone2: that.refs.Sfrom.getFieldsValue().phone1,
                        menpai1: that.refs.Ffrom.getFieldsValue().menpai,
                        menpai2: that.refs.Sfrom.getFieldsValue().menpai1,
                        name1: that.refs.Ffrom.getFieldsValue().username,
                        name2: that.refs.Sfrom.getFieldsValue().username1,
                    }
                })
            } else {
                message.error('请先完善信息，并保存完毕信息！', 2);
            }
        }.bind(this)
        //配送时间
        this.now = function () {
            this.setState({ fahuoTime: new Date() })
        }.bind(this)
        //预约选择时间
        this.yuyue = function (e) {
            this.setState({ isShow: "block" })
        }.bind(this)
        //是否需要当面签收
        this.check1 = function (e) {
            this.setState({ check1: !this.state.check1 })
        }.bind(this)
        //订单备注
        this.info = function (e) {
            this.setState({ info: e.target.value })
        }.bind(this)
        this.sub = function () {//质量减
            if (this.state.quality > 1) {
                this.setState({ quality: --this.state.quality })
            }
        }.bind(this)
        this.add = function () {//质量加
            if (this.state.quality < 16) {
                this.setState({ quality: ++this.state.quality })
            }
        }.bind(this)
        this.btnbox1 = function (el) {//货物分类按钮点击事件
            console.log(el.key);
            this.setState({ index1: el.key })
        }.bind(this)
        this.btnbox2 = function (el) {//货物分类按钮点击事件
            console.log(el.key);
            this.setState({ index1: el.key })
        }.bind(this)
        //配送时间，默认还是预约
        this.onChange1 = function (value, dateString) {
            this.setState({ fahuoTime: dateString })
        }
        //发货输入框验证
        this.changePhone1 = function (e) {
            let reg = /^1[3456789]\d{9}$/;
            if (reg.test(e.target.value)) {
                this.setState({ flag1: true })
                e.target.style.border = "1px solid #ccc"
            } else {
                this.setState({ flag1: false })
                e.target.style.border = "2px solid red"
            }
        }.bind(this)
        //收货输入框验证
        this.changePhone2 = function (e) {
            let reg = /^1[3456789]\d{9}$/;
            if (reg.test(e.target.value)) {
                this.setState({ flag2: true })
                e.target.style.border = "1px solid #ccc"
            } else {
                this.setState({ flag2: false })
                e.target.style.border = "2px solid red"
            }
        }.bind(this)
    }
    state = {
        mode: 'inline',
        theme: 'light',
        visible: false,
    };
    showModal = () => {
        this.next1()
        if (this.state.flag1 && this.state.flag1) {
            this.setState({
                visible: true,
            });
        }
    };

    hideModal = (e) => {
        this.setState({
            visible: false,
        });
        let that = this;
        //xios.get('http://192.168.137.1:7001/addorder', {
        this.$axios.get('/addorder', {
            params: {
                type: that.state.listType[that.state.index1],
                price: (that.state.quality * 52).toFixed(1),
                quality: that.state.quality,
                info: that.state.info,
                qianshou: that.state.check1,
                fahuoTime: that.state.fahuoTime,
                address1: that.refs.Ffrom.getFieldsValue().address,
                address2: that.refs.Sfrom.getFieldsValue().address1,
                phone1: that.refs.Ffrom.getFieldsValue().phone,
                phone2: that.refs.Sfrom.getFieldsValue().phone1,
                menpai1: that.refs.Ffrom.getFieldsValue().menpai,
                menpai2: that.refs.Sfrom.getFieldsValue().menpai1,
                uid: that.refs.Ffrom.getFieldsValue().username,
                sid: that.refs.Sfrom.getFieldsValue().username1,
            }
        }).then((res) => {
            message.success('订单已提交，即将跳往 ，我的订单.....', 3);
            setTimeout(() => {
                this.props.history.push("/myorder")
            }, 3000)
            console.log(res);
        }).catch((error) => {
            message.error('网络问题，请刷新重试', 1);
            console.log(error);
        });
    };
    render() {

        const onFinish = (values) => {
            if (this.state.flag1 && this.state.flag1) {
                const key = 'updatable';
                console.log('Success:', values);
                message.loading({ content: 'Loading...', key });
                setTimeout(() => {
                    message.success({ content: '数据保存成功!', key, duration: 2 });
                }, 1000);
            }

        };
        const onFinishFailed = (errorInfo) => {
            console.log(this.state.flag1, this.state.flag2);
            if (!this.state.flag1) {
                message.error('请先填好发货信息！', 1);
            } else if (!this.state.flag2) {
                message.error('请先填好收货信息！', 1);
            } else {
                message.error('请先完善发、收货信息！', 1);
            }
        };
        return (
            <div className={CreateCss.mycreate} >
                {/* 发货人 */}
                <div>
                    <Form
                        ref="Ffrom"
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        scrollToFirstError="true"
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
                                },]} >
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
                            onChange={this.changePhone1}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item  {...tailLayout} >
                            <Button type="primary" htmlType="submit">保存发货信息</Button>
                        </Form.Item>
                    </Form>
                </div>
                <hr />
                {/* 收货人 */}
                <div>
                    <Form
                        {...layout}
                        ref="Sfrom"
                        name="basic1"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="收获地址"
                            name="address1"
                            rules={[
                                {
                                    required: true,
                                    message: '请填写收获地址',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="门牌"
                            name="menpai1"
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
                            label="收货人姓名"
                            name="username1"
                            rules={[
                                {
                                    required: true,
                                    message: '请填写收货人姓名',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="收货人电话"
                            name="phone1"
                            onChange={this.changePhone2}
                            rules={[
                                {
                                    required: true,
                                    message: '请填写收货人电话',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item  {...tailLayout} >
                            <Button type="primary" htmlType="submit">保存收货信息</Button>
                        </Form.Item>
                    </Form>
                    <ul className={CreateCss.ulbox}>
                        <li>
                            <p>物品类型</p>
                            <p>物品价值</p>
                            <p>物品质量</p>
                            <p>备注信息</p>
                            <p>当面签收</p>
                            <p>发货时间</p>
                        </li>
                        <li>
                            <div className={CreateCss.list1}>
                                <Menu
                                    style={{ width: 600 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode={"horizontal"}
                                    theme={this.state.theme}
                                    onSelect={this.btnbox1}
                                >
                                    {this.state.listType.map((el, index) => {
                                        return (
                                            <Menu.Item key={index} >{el}</Menu.Item>
                                        )
                                    })}
                                </Menu>
                            </div>
                            <div>
                                <Menu
                                    style={{ width: 600 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode={"horizontal"}
                                    theme={this.state.theme}
                                    onSelect={this.btnbox2}
                                >
                                    {this.state.listPrice.map((el, index) => {
                                        return (<Menu.Item key={index += 10} >{el}</Menu.Item>)
                                    })}
                                </Menu>
                            </div>
                            <div className={CreateCss.quality}>
                                <Button onClick={this.sub}> - </Button>
                                <span>{this.state.quality}公斤</span>
                                <Button onClick={this.add}> + </Button>
                            </div>
                            <div>
                                <br />
                                <TextArea onChange={this.info} showCount maxLength={100} placeholder="请填写备注信息(100字以内)" value={this.state.info} />
                            </div>
                            <div className={CreateCss.qianshou}>
                                <Switch tooltip="This is a required field" onClick={this.check1} checkedChildren="需要" unCheckedChildren="不需要" className={CreateCss.need} />
                                <Form.Item colon={false} label="签收说明" tooltip="收货说明：该物品是否需要当面签收，如果是贵重物品建议选择需要当面签收！">
                                </Form.Item>
                            </div>
                            <div className={CreateCss.fahuo}>
                                <Button onClick={this.now}>立即发货</Button>
                                <Button type="primary" onClick={this.yuyue}>预约时间</Button>
                                <Space direction="vertical" size={12}>
                                    <DatePicker showTime onChange={this.onChange1.bind(this)} style={{ display: this.state.isShow }} />
                                </Space>
                            </div>
                        </li>
                    </ul>
                </div>
                <Button type="primary" onClick={this.showModal} className={CreateCss.next}>  下一步   </Button>
                <Modal
                    title={<b>请仔细核对订单信息</b>}
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={() => { this.hideModal.call(this) }}
                    okText="确认"
                    cancelText="取消"
                    width={1000}
                >
                    <div>
                        <Row>
                            <Col span={24}>
                                <Row>
                                    <Col span={5}>
                                        <p>发货人信息</p>
                                        <p style={{ visibility: 'hidden' }}> 占位</p>
                                        <p style={{ visibility: 'hidden' }}> 占位</p>
                                        <p>收货人信息</p>
                                        <p style={{ visibility: 'hidden' }}> 占位</p>
                                        <p style={{ visibility: 'hidden' }}> 占位</p>
                                    </Col>
                                    <Col span={7}>
                                        <p>姓名：{this.state.obj.name1}</p>
                                        <p>地址： {this.state.obj.address1}</p>
                                        <p>门牌号：{this.state.obj.menpai1}</p>
                                        <p>姓名： {this.state.obj.name2}</p>
                                        <p>地址：{this.state.obj.address2}</p>
                                        <p>门牌号：{this.state.obj.menpai2}</p>
                                    </Col>
                                    <Col span={6}>
                                        <p>{this.state.obj.phone1}</p>
                                        <p style={{ visibility: 'hidden' }}> 占位</p>
                                        <p style={{ visibility: 'hidden' }}> 占位</p>
                                        <p>{this.state.obj.phone2}</p>
                                    </Col>
                                    <Col span={6}>
                                        <p>52公里 / {this.state.quality} 公斤</p>
                                        <p>配送费{(this.state.quality * 52).toFixed(1)}元</p>
                                        <a target="#">计费规则</a>
                                        <p style={{ visibility: 'hidden' }}> 占位</p>
                                        <p style={{ visibility: 'hidden' }}> 占位</p>
                                        <Button href="/home" type="primary">立即前往支付</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </div>
                </Modal>
            </div >
        )
    }
}
export default Create