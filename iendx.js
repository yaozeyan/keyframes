function img(){
    var that = this
    var max = 15;
    var width = 750;
    var index = 0;

    setInterval(function(){
      
      if (index >= max){
        index = -1;
      }
      index++;
      var left = index * 750;
      // console.log(that.data.imgIndex);
      that.setData({
        imgIndex: -left + "rpx"
      });
    },70);
  }
