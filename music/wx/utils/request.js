import urlObj from "./config.js"
export default (url, method = "GET", data = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      // url: urlObj.host + url,
      url: urlObj.phone + url,
      method,
      data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data, "发送请求成功")
        resolve(res.data)
      },
      fail(err) {
        console.log(err);
        reject(err)
      }
    })
  })
}