// pages/user/user.js
Page({
  data: {
    username: '点击登录',
    userTx: '',
    userInfo: {},
    gender: 1,
    province: '',
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的'
    })
  },
 jiankang:function(){
    wx.navigateTo({
      url: '/pages/myAppointment/myAppointment'
    })
  },
  room(){
    wx.navigateTo({
      url: './room/room'
    })
  },
  jieshao(){
    wx.navigateTo({
      url: '/pages/jieshao/jieshao'
    })
  },
banben(){
    wx.navigateTo({
      url: '/pages/mima/mima'
    })
  }
})  