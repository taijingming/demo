// pages/login/login.js
import $request from "../../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: "",
    password: "",
    verif: "",
    inputverif: ""
  },

  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let verif = await $request("/verif");
    this.setData({
      verif,
    })
  },
  //登录
  async login() {
    if (this.data.user && this.data.password && (this.data.inputverif.toUpperCase() == this.data.verif.text.toUpperCase())) {
      let res = await $request("/login", "POST", {
        user: this.data.user,
        password: this.data.password
      });
      //根据登录状态决定接下来做什么
      if (res.code == 2001) {
        //先做缓存 登录的用户名
        let userName = res.user
        wx.setStorageSync('user', userName)
        wx.showLoading({ title: res.info })
        setTimeout(function () {
          wx.hideLoading();
          wx.reLaunch({
            url: "/pages/user/userpage/user"
          })
        }, 500)
      } else if (res.code == 4002) {
        wx.showToast({
          title: res.info,
          icon: 'none',
          duration: 2000//持续的时间
        })
      } else {
        wx.showToast({
          title: res.info,
          icon: 'none',
          duration: 2000//持续的时间
        })
      }
    }
    if (!this.data.user || !this.data.password) {
      wx.showModal({
        title: '提示',
        content: '请先填写完善信息',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
    }
    if (this.data.inputverif.toUpperCase() != this.data.verif.text.toUpperCase()) {
      wx.showToast({
        title: '验证码不正确',
        icon: 'none',
        duration: 1000//持续的时间
      })
    }
  },

  //点击刷新验证码
  async getverif() {
    let verif = await $request("/verif",);
    this.setData({
      verif,
    })
  },
  //双向数据绑定 input 数据
  getInputValue: function (event) {
    let type = event.currentTarget.id;
    // let type = event.currentTarget.dataset.type;
    this.setData({
      [type]: event.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})