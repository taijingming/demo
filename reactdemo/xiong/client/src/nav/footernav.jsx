import React from 'react';
import './footernav.css'
// import RouterView from '../router';
// import { BrowserRouter as Router, Link } from 'react-router-dom'
// import loadable from '../loadable';
import { Popover, Button } from 'antd';


class Footernav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        const content = (
            <div>
                <pre>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您—旦收到来电，立即接听。
                </pre>
            </div>
        );
        return (
            <div className="footerbox">
                <div className="box">
                    <span>达达快送-本地即时配送平台：</span>
                    <a href="../pages/homepage">关于我们 | </a>
                    <a href="../pages/help">常见问题 | </a>
                    <span>意见反馈 | </span>
                    <span>营业执照 | </span>
                    <span>客服专线：400-991-9512</span>
                    <div className="sonbox">
                        <div>© 2020 NewDada 上海趣盛网络科技有限公司版权所有<span>&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备14033539号-1</span></div>
                        <div>上海市杨浦区杨树浦路1088号&nbsp;&nbsp;&nbsp;&nbsp;东方渔人码头20-22F</div>
                    </div>
                </div>

                <div className="imgbox">
                    <Popover content={content}>
                        <Button type="primary"><img className="footerimg1" src={require('./img/下载.png')} alt='加载失败' /></Button>
                    </Popover>
                    <img className="footerimg2" src={require('./img/二维码.png')} alt='加载失败' />
                </div>
            </div>)
    }
}

export default Footernav;