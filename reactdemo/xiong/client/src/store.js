import { createStore } from "redux"//npm i redux --save
const store = {
	title: '我是数据标题',
	text: "xxxxxxxx666",
	news: "xxx",
	login: "登录/注册",
	mysearch: "",
	arr: [],
	nav: [
		{ link: "/myorder/allorder", txt: "全部订单" },
		{ link: "/myorder/daifu", txt: "待支付" },
		{ link: "/myorder/daiqu", txt: "待取货" },
		{ link: "/myorder/peisong", txt: "配送中" },
		{ link: "/myorder/wancheng", txt: "已完成" },
		{ link: "/myorder/quxiao", txt: "已取消" },
	]
}
console.log(store.login);
var reducer = (state = store, action) => {
	if (action.type === "title_change1") {
		var newstate = JSON.parse(JSON.stringify(state))
		console.log(action.value);
		newstate.login = action.value
		console.log(newstate.login, 99999999);
		return newstate
	}
	return state;
}
const storeObj = createStore(reducer)






export default storeObj;

