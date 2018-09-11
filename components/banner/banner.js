// components/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    carousel: [{
        "url": "http://www.163.com",
        "title": "1111",
        "img": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        "url": "http://www.qq.com",
        "title": "2222",
        "img": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    presentAdvDetail(e) {
      wx.navigateTo({
        url: `../../pages/webview/webview?extUrl=${e.target.dataset.url}&title=${e.target.dataset.title}`,
      })
    },
  }
})