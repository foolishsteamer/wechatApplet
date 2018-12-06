// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotMovies:[],
    comingMovies:[],
    topMovies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:`https://douban.uieee.com/v2/movie/in_theaters?count=5`,
      method:'get',
      header:{
        "content-type": "json"
      },
      success:res=>{
        this.setData({
          hotMovies:res.data.subjects
        })
      }
    });
    wx.request({
      url:`https://douban.uieee.com/v2/movie/coming_soon?count=5`,
      mothod:'get',
      header:{
        "content-type": "json"
      },
      success:res=>{
        this.setData({
          comingMovies:res.data.subjects
        })
      }
    })
    wx.request({
      url:`https://douban.uieee.com/v2/movie/top250?count=5`,
      mothod:'get',
      header:{
        "content-type": "json"
      },
      success:res=>{
        this.setData({
          topMovies:res.data.subjects
        })
      }
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