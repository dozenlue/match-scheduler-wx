// pages/league-matches/league-matches.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playerIndex: 0,
    players: [
      {
        id: 0,
        name: "所有对局"
      },
      {
        id: "11111",
        name: "张三"
      },
      {
        id: "22222",
        name: "李四"
      },
      {
        id: "33333",
        name: "王五"
      },
      {
        id: "44444",
        name: "赵六"
      }
    ],
    matches: [
      {
        _id: "1000",
        title: "aaaaa",
        loser: {
          id: "11111",
          name: "张三"
        },
        winner: {
          id: "22222",
          name: "李四"
        },
        claimedDate: "Jan 20 2018",
        confirmedDate: "Jan 20 2018"
      },
      {
        _id: "2000",
        title: "bbbb",
        loser: {
          id: "33333",
          name: "王五"
        },
        winner: {
          id: "11111",
          name: "张三"
        },
        claimedDate: "Jan 20 2018",
        confirmedDate: "Jan 20 2018"
      },
      {
        _id: "3000",
        title: "cccc",
        loser: {
          id: "22222",
          name: "李四"
        },
        winner: {
          id: "33333",
          name: "王五"
        },
        claimedDate: "Jan 20 2018",
        confirmedDate: "Jan 20 2018"
      },
      {
        _id: "4000",
        title: "dddd",
        loser: {
          id: "44444",
          name: "赵六"
        },
        winner: {
          id: "33333",
          name: "王五"
        },
        claimedDate: "Jan 20 2018",
        confirmedDate: "Jan 20 2018"
      }
    ]
  },

  playerChange: function (e) {
    console.log('picker player 发生选择改变，携带值为', e.detail.value);

    this.setData({
      playerIndex: e.detail.value
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