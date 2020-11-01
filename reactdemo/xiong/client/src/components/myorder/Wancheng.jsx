import React from 'react';
import { Row, Col } from 'antd';
import MyorderCss from "./myordercss.module.scss"
import axios from 'axios';
import getmystate from "./getstate"
class Wancheng extends React.Component {
    constructor(arg) {
        super(arg)
        this.state = {
            arr: [],
        }
    }
    render() {
        return (
            <div className={MyorderCss.box}>
                <div className={MyorderCss.titleBox}>
                    <Row className={MyorderCss.title}>
                        <Col span={6}>
                            {/* <div>订单号|下单时间</div> */}
                            <div>
                                {this.state.arr.map((el, index) => {
                                    return (
                                        <div key={el.id}>
                                            <div className={MyorderCss.box1}>
                                                <p>{el.id}</p>
                                                <p> | </p>
                                                <p>{el.time}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                        <Col span={5}>
                            {/* <div>发货人|收货人</div> */}
                            <div>
                                {this.state.arr.map((el, index) => {
                                    return (
                                        <div key={el.id}>
                                            <div className={MyorderCss.box1}>
                                                <p>{el.uid}</p>
                                                <p> | </p>
                                                <p>{el.sid}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                        <Col span={5}>
                            {/* <div>备注</div> */}
                            <div>
                                {this.state.arr.map((el, index) => {
                                    return (
                                        <div key={el.id}>
                                            <div className={MyorderCss.box1}>
                                                <p>{el.info}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>


                        </Col>
                        <Col span={4}>
                            {/* <div>支付金额</div> */}
                            <div>
                                {this.state.arr.map((el, index) => {
                                    return (
                                        <div key={el.id}>
                                            <div className={MyorderCss.box1}>
                                                <p>{el.price}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                        <Col span={4}>
                            {/* <div>状态|操作</div> */}
                            <div>
                                {this.state.arr.map((el, index) => {
                                    return (
                                        <div key={el.id}>
                                            <div className={MyorderCss.box1}>
                                                <p>{el.state}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // axios.get('http://127.0.0.1:7001/getorder', {
        this.$axios.get('/getorder', {
            params: {
                state: 3,
            }
        }).then((res) => {
            console.log(res.data);
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].state = getmystate(res.data[i].state)
            }
            this.setState({ arr: res.data })
        }).catch((error) => {
            console.log(error);
        });
    }
}
export default Wancheng


