import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Forgetpwd from './LoginAndRegister/forgetpwd';
import Login from './LoginAndRegister/Login'
import Register from './LoginAndRegister/Register'
import loadable from "./loadable.js"

class RouterView extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/forgetpwd" component={Forgetpwd}></Route>
                        <Route path="/homepage" component={loadable(() => import("./pages/homepage"))}></Route>
                        <Route path="/order" component={loadable(() => import("./components/order/order"))}></Route>
                        <Route path="/myorder" component={loadable(() => import("./components/myorder/myorder"))}></Route>
                        <Route path="/help" component={loadable(() => import("./pages/help"))}></Route>
                        <Route path="/*" component={loadable(() => import("./pages/homepage"))}></Route>

                    </Switch>
                </Router>


            </div>
        )
    }
}

export default RouterView