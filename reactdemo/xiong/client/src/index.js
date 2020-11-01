import React from 'react';
import ReactDOM from 'react-dom';
// import "antd/dist/antd.css"
import App from './App';
import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:7001"
// axios.defaults.baseURL = "http://192.168.3.150:7001"
//允许浏览器请求时携带cookie
axios.defaults.withCredentials = true;
React.Component.prototype.$axios = axios
ReactDOM.render(
  <App />
  , document.getElementById('root')
);


