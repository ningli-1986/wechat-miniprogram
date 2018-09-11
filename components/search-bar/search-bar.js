// components/search-bar/search-bar.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    presentSearchPage(e) {
      wx.navigateTo({
        url: '../../pages/search/search',
      })
    }
  },
})