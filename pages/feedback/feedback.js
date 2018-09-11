// pages/feedback/feedback.js
Page({

  /**
   * Page initial data
   */
  data: {
    selectedProject: 2
  },

  handleProject: function(e) {
    console.log(e)
    this.setData({
      selectedProject: e.target.dataset.projectid
    })
  },

  doSubmit: function() {
    let success = true;
    wx.showLoading({
      title: "正在提交...",
      mask: true
    });

    if (success) {
      wx.hideLoading();

      wx.showToast({
        title: '提交成功！',
        icon: 'success',
        // duration: 4000,
        complete: function() {
          setTimeout(() => {
            wx.navigateBack();
          }, 2000);
        }
      });
    } else {
      wx.showToast({
        title: '提交失败！',
        duration: 2000
      });
    }
  }
})