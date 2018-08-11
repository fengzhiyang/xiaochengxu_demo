// pages/classic/classic.js
import ClassicModel from '../../model/ClassicModel'
import LikeModel from '../../model/LikeModel'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latest: true,
    first: false,
    likeCount: 0,
    likeStatus: false,
    classic: {
      content: '',
      fav_nums: 0,
      id: 1,
      image: '',
      index: 0,
      like_status: 0,
      pubdate: '',
      title: '',
      type: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    ClassicModel.getClassicLatestData(res => {
      this.setData({
        classic: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },
  changeLike: function (event) {
    let behavior = event.detail.behavior;
    LikeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },
  _updateClassic: function (nextOrPrevious) {
    let index = this.data.classic.index;
    ClassicModel.getClassic(index, nextOrPrevious, (res) => {
      this._getLikeStatus(res.id, res.type);
      this.setData({
        classic: res,
        latest: ClassicModel.isLatest(res.index),
        first: ClassicModel.isFirst(res.index)
      })
    })
  },
  _getLikeStatus: function (artID, category) {
    LikeModel.getClassicLikeStatus(artID, category, (res) => {
      this.setData({
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },
  onLeft: function () {
    this._updateClassic('next')

  },
  onRight: function () {
    this._updateClassic('previous')
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

  },



})