// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    weather:{},
    city:"广州",
    cityWeather:{}
  },
  searchWeather(e){
    wx.request({
      url: `http://wthrcdn.etouch.cn/weather_mini?city=${ e?e.detail.value : this.data.city}`, //开发者服务器接口地址",
      method: 'GET',
      success: res => {
        this.setData({
          cityWeather:res.data.data.forecast
        })
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: `http://wthrcdn.etouch.cn/weather_mini?city=深圳`, //开发者服务器接口地址",
      method: 'GET',
      success: res => {
        this.setData({
          weather:res.data.data.forecast
        })
      },
    });
    this.searchWeather();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})