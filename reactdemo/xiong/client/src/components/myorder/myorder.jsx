import React from 'react';
import { Row, Col, Menu, message } from 'antd';
import { Link, Switch, Route, Redirect } from "react-router-dom"
import { Input, Button } from 'antd';
import MyorderCss from "./myordercss.module.scss"
import AllOrder from "./AllOrder"
import Daifu from "./Daifu"
import Peisong from "./Peisong"
import Daiqu from "./Daiqu"
import Wancheng from "./Wancheng"
import Quxiao from "./Quxiao"
import Search from "./Search"
import getmystate from "./getstate"
import storeObj from "../../store.js"

class Myorder extends React.Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
        this.inputchange = function (e) {
            this.setState({ mysearch: e.target.value })
        }.bind(this)
        this.mybtn = function () {
            if (this.state.mysearch) {
                this.props.history.push(
                    {
                        pathname: "/myorder/mysearch",
                        state: this.state.mysearch
                    });
            } else {
                message.error('请先输入查询信息', 1);
            }

        }.bind(this)
        this.myblur = function () {
            if (this.state.mysearch) {
                this.props.history.push(
                    {
                        pathname: "/myorder/mysearch",
                        state: this.state.mysearch
                    })
            }
        }.bind(this)
        this.myfocus = function () {
            window.onkeyup = (e) => {
                if (e.key == "Enter") {

                }
            }
        }.bind(this)
    }
    render() {
        console.log(99999, this.props.children);
        return (
            <div className={MyorderCss.box}>
                <div >
                    <Link to="/home">首页</Link>
                    <span>/</span>
                    <span>我的订单</span>
                </div>
                <div className={MyorderCss.nav}>
                    <div className={MyorderCss.left}>
                        <Menu
                            style={{ width: 600 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode={"horizontal"}
                            theme={this.state.theme}
                            onSelect={this.btnbox2}
                        >
                            {this.state.nav.map((el, index) => {
                                return (<Menu.Item key={index += 10} > <Link to={el.link}>{el.txt}</Link></Menu.Item>)
                            })}
                        </Menu>
                    </div>
                    <div className={MyorderCss.right}>
                        <Input type="text" placeholder="收货人姓名或手机号"
                            ref="search1"
                            size={"middle"} className={MyorderCss.inp1}
                            onBlur={this.myblur} onFocus={this.myfocus} onChange={this.inputchange}
                            value={this.state.mysearch}
                        />
                        <Button size="large" onClick={this.mybtn}>搜索</Button>
                    </div>

                </div>
                <div className={MyorderCss.titleBox}>
                    <Row className={MyorderCss.title}>
                        <Col span={6}>
                            <div>订单号|下单时间</div>
                        </Col>
                        <Col span={5}>
                            <div>发货人|收货人</div>

                        </Col>
                        <Col span={5}>
                            <div>备注</div>
                        </Col>
                        <Col span={4}>
                            <div>支付金额</div>

                        </Col>
                        <Col span={4}>
                            <div>状态|操作</div>
                        </Col>
                    </Row>
                </div>
                <Switch>
                    <Route path="/myorder/allorder" component={AllOrder}></Route>
                    <Route path="/myorder/daifu" component={Daifu}></Route>
                    <Route path="/myorder/peisong" component={Peisong}></Route>
                    <Route path="/myorder/daiqu" component={Daiqu}></Route>
                    <Route path="/myorder/wancheng" component={Wancheng}></Route>
                    <Route path="/myorder/quxiao" component={Quxiao}></Route>
                    <Route path="/myorder/mysearch" component={Search}></Route>
                    <Redirect to="/myorder/allorder" component={Daifu}></Redirect>
                </Switch>
            </div>
        )
    }


}
export default Myorder
