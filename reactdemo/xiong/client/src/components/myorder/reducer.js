import { createStore } from "redux"//npm i redux --save
const store = {
    title: '我是数据标题',
    text: "xxxxxxxx666",
    news: "xxx"
}

var reducer = (state = store, action) => {
    if (action.type === "title_change1") {
        var newstate = JSON.parse(JSON.stringify(state))
        newstate.title = action.value
        return newstate
    } else if (action.type === "news_change1") {
        var newstate = JSON.parse(JSON.stringify(state))
        newstate.news = action.value
        return newstate
    }
    return state;
}
const storeObj = createStore(reducer)

export default storeObj;

