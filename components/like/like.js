// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike:{
      type:Boolean,
      value:true
    },
    count:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    like:'../../images/like.png',
    unLike:'../../images/unlike.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeImgSrcAndCountHandle:function(event){
      let isLike = this.properties.isLike;
      let count = this.properties.count;
      count=isLike?count-1:count+1;
      if(count<1){
        count=0
      }
      this.setData({
        count:count,
        isLike:!isLike
      })
      this.triggerEvent('like',{
        behavior:this.properties.isLike
      })
    }
  }
})
