import $request from "../../utils/request.js"
Page({

  /* 页面的初始数据 */
  data: {
    hotSearch: "",
    searchVal: "",
    noFocus: true,
    searchList: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let hotSearch = await $request("/search");
    this.setData({
      hotSearch: hotSearch.data.result.hots,
    })
    console.log(this.data.hotSearch);
  },
  inputChange(e) {
    this.setData({
      searchVal: e.detail.value
    })
  },
  //失去焦点
  blur1(e) { },
  // 获得焦点、
  focus1() {
    this.setData({
      noFocus: null,
    })
    //获得焦点在失去焦点，发请求
    this.blur1 = async (e) => {
      console.log(e.detail.value);
      let searchList = await $request("/searchSong", "GET", {
        info: this.data.searchVal
      });
      this.setData({
        searchList: searchList.data.result.songs,
      })
      // console.log(this.data.searchList);
    }
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