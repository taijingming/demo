import React from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom"
import Ordercss from "./order.module.scss"
// import loadable from "../loadable.js"
import { Modal, Button, } from 'antd';
import Create from "./create"
import MOre from "./more"
class Order extends React.Component {
    constructor(arg) {
        super(arg)
        this.state = {
            city: [
                "上海", "北京", "成都", "深圳", "广州", "东莞", "虎门", "惠州", "贵阳", "绵阳", "安顺", "凯里", "六盘水", "遵义", "昆明", "毕节"
            ],
            index: 2,
            newindex: 2
        }
        this.cityBtn = function (index) {
            this.state.newindex = index
        }.bind(this)
    }
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,

        });
    };

    hideModal = (e) => {
        this.setState({
            visible: false,
            index: this.state.newindex
        });
    };

    render() {
        return (
            <div className={Ordercss.box}>
                <div className={Ordercss.tip}>
                    <span>商户请先下载达达快送App，完成商户资料认证，升级为企业版，发单更便捷</span>
                    <a href="#">去下载</a>
                </div>

                <div className={Ordercss.title}>
                    <div >
                        <Link to="/home">首页</Link>
                        <span>/</span>
                        <span className={Ordercss.order1}>在线下单 (个人版)</span>
                    </div>
                    <div >
                        <span>当前城市：</span>
                        <span className={Ordercss.city}>{this.state.city[this.state.index]}</span>
                        <Button type="primary" onClick={this.showModal}> [ 切换城市 ]  </Button>
                        <Modal
                            title="选择已开通城市"
                            visible={this.state.visible}
                            onOk={this.hideModal}
                            onCancel={this.hideModal}
                            okText="确认"
                            cancelText="取消"
                        >
                            {this.state.city.map((el, index) => {
                                return <Button key={index} className={Ordercss.cityBtn} onClick={() => { this.cityBtn(index) }}>{el}</Button>
                            })}
                        </Modal>
                    </div>

                </div>
                <div className={Ordercss.piliang}>
                    <span>* 大批量发单可选择批量发单功能，发单更便捷 </span>
                    <Link to="/order/more"> 点击去批量发单&gt;</Link>
                </div>
                <Switch>
                    <Route path="/order/more" component={MOre}></Route>
                    <Route path="/order/create" component={Create}></Route>
                    <Redirect to="/order/create"></Redirect>
                </Switch>
            </div>
        )
    }
}
export default Order