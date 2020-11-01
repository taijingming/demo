import React from 'react';
import RouterView from '../router';
import Footernav from "./footernav"
import './topnav.css';
import storeObj from "../store.js"
class Topnav extends React.Component {

  constructor(arg) {
    super(arg)
    this.state = storeObj.getState()
    storeObj.subscribe(() => {
      this.setState(storeObj.getState())
    })
    this.show = function () {
      var box = document.querySelector(".smallbox")
      console.log(box);
      var val = box.style.display
      if (val === 'none') {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    }
  }
  render() {

    return (<div className="nav" onClick={this.change}>
      <img className="logoImg" src={require('./img/logo.png')} alt='加载失败' />
      <div className="aBox">
        <a href="/homepage">首页</a>
        <a href="/order">在线下单</a>
        <a href="/myorder">我的订单</a>
        <a href="/help">帮助中心</a>
        <span onClick={this.show}>我的达达<p className="my"></p></span>
        <div className="smallbox">
          <a>钱包</a>
          <a>优惠券</a>
          <a>地址簿</a>
        </div>
      </div>
      <div className="login"><a href="/login" className="a5">{this.state.login}</a></div>

      <div className="pagebox">
        <RouterView></RouterView>
        <Footernav></Footernav>
      </div>
    </div>

    )

  }
  componentWillMount() {
    if (localStorage.getItem("isLogin")) {
      console.log(this.state.login);
      this.setState({ login: "个人中心" })
    }
  }
}

export default Topnav;
