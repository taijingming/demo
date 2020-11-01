export default (arg) => {
    if (arg == 0) {
        return "待付"
    } else if (arg == 1) {
        return "配送中"
    } else if (arg == 2) {
        return "待收货"
    } else if (arg == 3) {
        return "已完成"
    } else if (arg == 4) {
        return "已取消"
    }
}