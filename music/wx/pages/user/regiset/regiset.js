// pages/regiset/regiset.js
import $request from "../../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    agin: "success",
    user: "",
    pwd1: "",
    pwd2: "",
    verif: "",
    inputverif: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let verif = await $request("/verif");
    this.setData({
      verif,
    })
  },
  //注册
  async register() {
    if (this.data.user && this.data.pwd1 && this.data.pwd1 == this.data.pwd2 && (this.data.inputverif.toUpperCase() == this.data.verif.text.toUpperCase())) {
      let res = await $request("/register", "POST", {
        user: this.data.user,
        password: this.data.pwd2
      });
      if (res.code == 2001) {
        //先做缓存 登录的用户名
        let userName = res.user
        wx.setStorageSync('user', userName)
        console.log(wx.getStorage({
          key: 'user',
          success(res) {
            console.log(res.data)
          }
        }));
        wx.showLoading({
          title: res.info,
        })
        setTimeout(function () {
          wx.hideLoading();
          wx.showModal({
            title: '注册成功',
            content: '立即跳到首页',
            success: function (res) {
              if (res.confirm) {//这里是点击了确定以后
                console.log('点击了确定')
                wx.switchTab({
                  url: "/pages/index/index"
                })
              } else {//这里是点击了取消以后
                console.log('点击了取消')
              }
            }
          })
        }, 2500)
      } else if (res.code == 4002) {
        wx.showLoading({
          title: res.info,
        })
        setTimeout(function () {
          wx.hideLoading();
        }, 2000)
      } else {
        wx.showLoading({
          title: res.info,
        })
        setTimeout(function () {
          wx.hideLoading();
        }, 2000)
      }
    }
    if (!this.data.user || !this.data.pwd1) {
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
    if (this.data.user && this.data.pwd1 && (this.data.inputverif.toUpperCase() != this.data.verif.text.toUpperCase())) {
      wx.showToast({
        title: '验证码不正确',
        icon: 'none',
        duration: 1000//持续的时间
      })
    }
    if (this.data.pwd1 != this.data.pwd2) {
      wx.showToast({
        title: '两次密码不一致',
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
  // 表单数据的收集
  getInputValue(e) {
    let type = e.currentTarget.id;
    this.setData({
      [type]: e.detail.value
    })
    console.log(type, this.data);
  },
  //重新输入密码，验证
  judgeInput(e) {
    if (e.detail.value != this.data.pwd1) {
      this.setData({
        agin: "fail"
      })
    } else {
      this.setData({
        agin: "success"
      })
    }
    // console.log(e.target.style);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: async function () {

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