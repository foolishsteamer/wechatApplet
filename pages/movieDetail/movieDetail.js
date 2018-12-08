// pages/movieDetail/movieDetail.js
import axios from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    // 电影的详细信息
    movieInfo: {},
    // 粗略信息
    movieText: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      id: options.id
    });
    axios({
      url: `https://douban.uieee.com/v2/movie/subject/${this.data.id}`
    }).then(res => {
      // console.log(res);
      // 拼接电影的基本数据
      let tem = '';
      // 时间
      if (res.data.durations.length != 0) {
        tem += res.data.durations[1] || res.data.durations[0];
        tem += '/';
      }

      // 分类
      res.data.genres.forEach(v => {
        tem += v;
        tem += '/'
      })
      // 导演
      tem += res.data.directors[0].name;
      tem += '(导演)/';
      // 主演
      res.data.casts.forEach(v => {
        tem += v.name;
        tem += '/';
      })
      // 上映时间
      if(res.data.pubdates.length!=0){
        tem += res.data.pubdates[1]||res.data.pubdates[0]
      }
      // 保存到data中
      this.setData({
        movieInfo: res.data,
        movieText: tem
      })

      // 修改顶部标题
      wx.setNavigationBarTitle({
        title: this.data.movieInfo.title
      });
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