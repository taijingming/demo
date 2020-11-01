import React from 'react';
import { Menu, Switch } from 'antd';
import Footernav from "../nav/footernav"
import "./css/help.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SubrouterView from "./subpage/subrouter"


class Help extends React.Component {
    constructor(arg) {
        super(arg)
        this.state = {}
        this.handleClick = e => {
            console.log('click ', e);
        };
    }
    render() {
        return (
            <div className="all">
                <div className="left">
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <Menu.ItemGroup key="g1" >
                            <Menu.Item key="1">
                                <Link to="chang">常见问题</Link>
                                {/* <a href="./subpage/chang">常见问题</a> */}
                            </Menu.Item>
                            <Menu.Item key="2">
                                保价协议
                            </Menu.Item>
                            <Menu.Item key="3">
                                注册协议
                            </Menu.Item>
                            <Menu.Item key="4">
                                禁止配送物品名单
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                    <div><SubrouterView></SubrouterView></div>

                </div>
            </div>
        )
    }
}

export default Help;