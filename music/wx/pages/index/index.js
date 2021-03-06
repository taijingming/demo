// pages/index/index.js
import $request from "../../utils/request.js"
import palyCount from "../../utils/playCount.js"
Page({
  data: {
    bannerlist: [],
    recommendlist: [],
    recommendlistLimit: 10,
    hotList: [],

  },
  /**生命周期函数--监听页面加载*/
  onLoad: async function (options) {
    let homeData = await $request("/homedata");
    let recommendlist = homeData.tuijian.data;
    for (let i = 0; i < recommendlist.result.length; i++) {
      recommendlist.result[i].playCount = palyCount(recommendlist.result[i].playCount)
    }
    this.setData({
      bannerlist: homeData.banner.data,
      recommendlist: homeData.tuijian.data.result
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