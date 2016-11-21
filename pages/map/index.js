var pageObject = {
  data: {
    isMap: false
  },
  setShow: function(e) {
    var that = this;
    that.setData({
      isMap: !this.data.isMap
    })
    console.log(this.data.isMap);
    if(that.data.isMap){
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function(res) {
          var latitude = res.latitude
          var longitude = res.longitude
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28
          })
        }
      })
    }
  },
}
Page(pageObject);
