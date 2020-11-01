import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '../../loadable.js';

class SubrouterView extends React.Component {
    render() {
        return (
            <div>

                <Switch>
                    <Route path="/chang" component={loadable(() => import("./chang"))}></Route>
                    <Route path="/baojia" component={loadable(() => import("./baojia"))}></Route>
                    <Route path="/zhuce" component={loadable(() => import("./zhuce"))}></Route>
                    <Route path="/forbid" component={loadable(() => import("./forbid"))}></Route>
                </Switch>

            </div>)
    }
}

export default SubrouterView;