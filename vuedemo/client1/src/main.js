import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iconfont from '@/assets/iconfont/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = "http://106.75.129.14:7001"
//允许浏览器请求时携带cookie
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(ElementUI);


new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
