// pages/profile/index.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  navToSettingPage: function() {
    console.log('navToSettingPage');
  },

  navToOrderPage: function() {
    wx.navigateTo({
      url: '../orders/orders',
    })
  },

  navToFeedbackPage: function() {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})