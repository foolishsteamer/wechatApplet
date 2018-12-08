// pages/more/more.js
import axios from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    count:9,
    start:0,
    movieList:[],
    title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = options.url;
    let title = '';
    switch(url){
      case 'in_theaters':
        title = '正在热映';
        break;
      case 'coming_soon':
        title = '即将上映';
        break;
      case 'top250':
        title = 'top250';
        break;
    }
    this.setData({
      url,
      title
    })
    wx.setNavigationBarTitle({
      title
    });
    axios({
      url:`https://autumnfish.cn/v2/movie/${this.data.url}?start=${this.data.start}&count=${this.data.count}`
    }).then(res=>{
      this.setData({
        total:res.data.total,
        movieList:res.data.subjects
      })
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
    wx.showNavigationBarLoading();
    this.setData({
      start:0,
      movieList:[]
    });
    axios({
      url:`https://douban.uieee.com/v2/movie/${this.data.url}?start=${this.data.start}&count=${this.data.count}`
    }).then(res=>{
      this.setData({
        total:res.setData({
          total:res.data.total,
          movieList:res.data.subjects
        })
      });
      wx.hideNavigationBarLoading();
    })
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