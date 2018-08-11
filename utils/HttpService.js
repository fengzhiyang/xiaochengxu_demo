class HttpService{
      constructor(){}
      getHttpServiceHandle=(option)=>{
        return new Promise((resolve,reject)=>{
          wx.request({
            url:option.url,
            method:option.method||'GET',
            header:{
              appkey:'HFUYBqbf90ugRxO7'
            },
            data:option.data||{},
            success:function(data){
              resolve(data)
            },
            fail:function(data){
              reject(data)
            }
          })
        })
      }
    }

    export default new HttpService()