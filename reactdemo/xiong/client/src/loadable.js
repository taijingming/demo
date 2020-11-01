import React from 'react';
import Loadable from 'react-loadable';
import createcss from "./components/order/create.module.scss"


const LoadingComponent = function (arg) {
    return (
        <div className={createcss.myloader}>loading...</div>
    )
}

export default (loader, loading = LoadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}