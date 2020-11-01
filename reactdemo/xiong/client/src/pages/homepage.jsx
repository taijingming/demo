import React from 'react';
import './css/home.css'
class Homepage extends React.Component {
    // constructor(arg) {
    //     super(arg)
    //     this.state={}
    // }
    render() {
        return (
            <div className="homebox">
                <img className="homeimg" src={require('../nav/img/首页.png')} alt='加载失败' />
                <div className="txtbox">
                    <div className="box1">帮取件、代送件，几十万达达骑士为您服务</div>
                    <div className="box2">预计1小时送达</div>
                </div>
                <div className="ADbox">
                    <div className="sonbox">
                        <img className="img1" src={require('../nav/img/送达.webp')} alt='加载失败' />
                        <span>首单5折</span>
                        <p>随时下单，上门取件<br />按距离收费，7*24小时为您服务</p>
                        <a href="./order">立即下单</a>
                    </div>
                    <p>*1小时送达为配送距离在3公里内的送达时效预估值</p>
                </div>
            </div>
        )
    }
}

export default Homepage;