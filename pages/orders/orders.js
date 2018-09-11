// pages/orders/orders.js
Page({

  /**
   * Page initial data
   */
  data: {
    hideLoadMore: true,
    eof: false,
    page: 1
  },

  navToProductPage: function(e) {
    wx.navigateTo({
      url: `../product/product?id=${e.target.dataset.productid}`,
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
    this.setData({
      eof: false,
      page: 1
    });
    wx.showNavigationBarLoading();
    console.log('onPullDownRefresh');
    wx.stopPullDownRefresh();
    wx.hideNavigationBarLoading();
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {
    console.log('onReachBottom');
    this.setData({
      hideLoadMore: false,
      page: this.data.page++
    });
    wx.showNavigationBarLoading();
    // request more data from server
    let eof = true;
    setTimeout(() => {
      this.setData({
        hideLoadMore: true,
        eof: eof
      })
      wx.hideNavigationBarLoading();
    }, 2000)
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})