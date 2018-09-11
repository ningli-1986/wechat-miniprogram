// components/popular/popular.js
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
    items: [{
      a: "1111",
      b: "22222"
    }, {
      a: "1111",
      b: "22222"
    }, {
      a: "1111",
      b: "22222"
    }, {
      a: "1111",
      b: "22222"
    }, {
      a: "1111",
      b: "22222"
    }, {
      a: "1111",
      b: "22222"
    }]
  },

  /**
   * Component methods
   */
  methods: {
    navToProductPage: function(e) {
      console.log('navToProductPage', e);
      wx.navigateTo({
        url: `../../pages/product/product?id=${e.target.dataset.id}`,
      })
    }
  }
})