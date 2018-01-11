// pages/new-league/new-league.js
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leagueInfo: {

    },
  },

  bindNameChange: function (event) {
    console.log(event.detail.value);
    this.setData({
      "leagueInfo.name": { name: event.detail.value }
    });
  },

  bindStartDateChange: function (event) {
    console.log(event.detail.value);
    this.setData({
      "leagueInfo.startDate": { name: event.detail.value }
    });
  },

  bindEndDateChange: function(event) {
    console.log(event.detail.value);
    this.setData({
      "leagueInfo.endDate": { name: event.detail.value }
    });
  },

  bindOK: function(event) {
    console.log(this.data.leagueInfo);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var startDate = new Date;
    var endDate = new Date;
    var pickerEnd = new Date;

    endDate.setMonth(startDate.getMonth()+1);
    pickerEnd.setFullYear(startDate.getFullYear() + 2);

    this.setData({
      leagueInfo: {
        startDate: util.formatDate(startDate),
        endDate: util.formatDate(endDate)
      },
      pickerStart: util.formatDate(startDate),
      pickerEnd: util.formatDate(pickerEnd)
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