// pages/movieSearch/movieSearch.js
import axios from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 搜索结果
    results: [],
    // 搜索列表数据
    list: [
      {
      color: "rgb(35, 132, 232)",
      title: "电影",
      subTitle: "影院热映"
    },
    {
      color: "rgb(230, 70, 126)",
      title: "同城",
      subTitle: "周末活动"
    },
    {
      color: "rgb(159, 120, 96)",
      title: "阅读",
      subTitle: "电子书"
    },
    {
      color: "rgb(225, 100, 77)",
      title: "广播",
      subTitle: "友邻动态"
    },
    {
      color: "rgb(122, 106, 219)",
      title: "电视",
      subTitle: "正在热播"
    },
    {
      color: "rgb(42, 184, 204)",
      title: "小组",
      subTitle: "志趣相投"
    },
    {
      color: "rgb(87, 116, 197)",
      title: "游戏",
      subTitle: "虚拟世界"
    },
    {
      color: "rgb(64, 207, 169)",
      title: "FM",
      subTitle: "红心歌单"
    },
    {
      color: "rgb(159, 120, 96)",
      title: "图书",
      subTitle: "畅销排行"
    },
    {
      color: "rgb(244, 143, 46)",
      title: "音乐",
      subTitle: "新碟榜"
    },
    {
      color: "rgb(89, 108, 221)",
      title: "应用",
      subTitle: "玩手机"
    },
    {
      color: "rgb(66, 189, 86)",
      title: "豆品",
      subTitle: "生活美学"
    }
    ]
  },
  // 搜索数据
  search(event) {
    console.log(event);
    let searchKey = event.detail.value;

    // 获取数据
    axios({
      url: `https://douban.uieee.com/v2/movie/search?q=${searchKey}`
    }).then(res => {
      console.log(res);
      this.setData({
        results: res.data.subjects
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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