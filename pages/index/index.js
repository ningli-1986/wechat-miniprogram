Page({
  data: {
    hideLoadMore: true,
    eofPopular: false,
    page: 1
  },

  presentProductCatalog(e) {
    wx.navigateTo({
      url: '../product',
    })
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {
    this.setData({
      eofPopular: false,
      page: 1
    });
    wx.showNavigationBarLoading();
    console.log('onPullDownRefresh', );
    wx.stopPullDownRefresh();
    wx.hideNavigationBarLoading()
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
    // request more data from server
    let eof = true;
    setTimeout(() => {
      this.setData({
        hideLoadMore: true,
        eofPopular: eof
      })
    }, 2000)
  },
})