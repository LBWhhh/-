const _=wx.cloud.database().command
Page({
  data:{
    name:'',
    password:'',
    location1:[],
    location2:[],
    location3:[],  
     location4:[], 
       location5:[],
       location6:[],
      
      },
      

onshow:function(){
  this.onLoad();
},

//得到数据库中数据与前端绑定并显示在页面
onLoad:function(options){
        let that=this
        wx.cloud.database().collection("location2").get().then(res=>{
          console.log(res)
          that.setData({
           location2:res.data
          })
        })
        wx.cloud.database().collection("location1").get().then(res=>{
          console.log(res)
          that.setData({
           location1:res.data
          })
        })
        wx.cloud.database().collection("location3").get().then(res=>{
          console.log(res)
          that.setData({
           location3:res.data
          })
        })
        wx.cloud.database().collection("location4").get().then(res=>{
          console.log(res)
          that.setData({
           location4:res.data
          })
        })
        wx.cloud.database().collection("location5").get().then(res=>{
          console.log(res)
          that.setData({
           location5:res.data
          })
        })
        wx.cloud.database().collection("location6").get().then(res=>{
          console.log(res)
          that.setData({
           location6:res.data
          })
        })
      },
//找到数据库中对应数据点击按钮则+1
      location1(event){
        console.log(event)
        wx.cloud.database().collection('location1').doc("0bcbdde05fd437bf012851b661f25791").update({
          data:{
            location1:_.inc(1)
          },
          success(res){
        console.log('预约成功',res)
        wx.showToast({
          title:'预约成功'
        })
          },
          fail(res){
        console.log('预约失败',res)
          }
        })
      },
//找到数据库中对应数据点击按钮则-1
      cancel1(event){
        console.log(event)
        wx.cloud.database().collection('location1').doc("0bcbdde05fd437bf012851b661f25791").update({
          data:{
            location1:_.inc(-1)
          },
          success(res){
        console.log('取消成功',res)
        wx.showToast({
          title:'取消成功'
        })
          },
          fail(res){
        console.log('取消失败',res)
          }
        })
      },

      location2(event){
        console.log(event)
        wx.cloud.database().collection('location2').doc("c89bd61c5fd4652d0135741166264487").update({
          data:{
            location2:_.inc(1)
          },
          success(res){
        console.log('预约成功',res)
        wx.showToast({
          title:'预约成功'
        })
          },
          fail(res){
        console.log('预约失败',res)
          }
        })
      },
      cancel2(event){
        console.log(event)
        wx.cloud.database().collection('location2').doc("c89bd61c5fd4652d0135741166264487").update({
          data:{
            location2:_.inc(-1)
          },
          success(res){
        console.log('取消成功',res)
        wx.showToast({
          title:'取消成功'
        })
          },
          fail(res){
        console.log('取消失败',res)
          }
        })
      },
      location3(event){
        console.log(event)
        wx.cloud.database().collection('location3').doc("0bcbdde05fd47ef6012bad6e3dec16a8").update({
          data:{
            location3:_.inc(1)
          },
          success(res){
        console.log('预约成功',res)
        wx.showToast({
          title:'预约成功'
        })
          },
          fail(res){
        console.log('预约失败',res)
          }
        })
      },
      cancel3(event){
        console.log(event)
        wx.cloud.database().collection('location3').doc("0bcbdde05fd47ef6012bad6e3dec16a8").update({
          data:{
            location3:_.inc(-1)
          },
          success(res){
        console.log('取消成功',res)
        wx.showToast({
          title:'取消成功'
        })
          },
          fail(res){
        console.log('取消失败',res)
          }
        })
      },
      location4(event){
        console.log(event)
        wx.cloud.database().collection('location4').doc("e62469b25fd47f13017f5e1821ad78e7").update({
          data:{
            location4:_.inc(1)
          },
          success(res){
        console.log('预约成功',res)
        wx.showToast({
          title:'预约成功'
        })
          },
          fail(res){
        console.log('预约失败',res)
          }
        })
      },
      cancel4(event){
        console.log(event)
        wx.cloud.database().collection('location4').doc("e62469b25fd47f13017f5e1821ad78e7").update({
          data:{
            location4:_.inc(-1)
          },
          success(res){
        console.log('取消成功',res)
        wx.showToast({
          title:'取消成功'
        })
          },
          fail(res){
        console.log('取消失败',res)
          }
        })
      },
      location5(event){
        console.log(event)
        wx.cloud.database().collection('location5').doc("2a7b532a5fd47f2201720e3b1f5af794").update({
          data:{
            location5:_.inc(1)
          },
          success(res){
        console.log('预约成功',res)
        wx.showToast({
          title:'预约成功'
        })
          },
          fail(res){
        console.log('预约失败',res)
          }
        })
      },
      cancel5(event){
        console.log(event)
        wx.cloud.database().collection('location5').doc("2a7b532a5fd47f2201720e3b1f5af794").update({
          data:{
            location5:_.inc(-1)
          },
          success(res){
        console.log('取消成功',res)
        wx.showToast({
          title:'取消成功'
        })
          },
          fail(res){
        console.log('取消失败',res)
          }
        })
      },
      location6(event){
        console.log(event)
        wx.cloud.database().collection('location6').doc("c89bd61c5fd47f34013702f26e1f4afc").update({
          data:{
            location6:_.inc(1)
          },
          success(res){
        console.log('预约成功',res)
        wx.showToast({
          title:'预约成功'
        })
          },
          fail(res){
        console.log('预约失败',res)
          }
        })
      },
      cancel6(event){
        console.log(event)
        wx.cloud.database().collection('location6').doc("c89bd61c5fd47f34013702f26e1f4afc").update({
          data:{
            location6:_.inc(-1)
          },
          success(res){
        console.log('取消成功',res)
        wx.showToast({
          title:'取消成功'
        })
          },
          fail(res){
        console.log('取消失败',res)
          }
        })
      },

      duandaoduan(){
        wx.navigateTo({
          url: '/pages/wifi_station/tianqi/tianqi'
        })
      },

//下拉刷新显示实时数据
onPullDownRefresh:function(){
        wx.cloud.database().collection("location1").get().then(res=>{
          this.setData({
            location1:res.data
          }),
          console.log('数据更新成功',res)
        wx.showToast({
          title:'数据更新成功'
        })
wx.stopPullDownRefresh()
        })
      
    
        wx.cloud.database().collection("location2").get().then(res=>{
          this.setData({
            location2:res.data
          }),
          console.log('数据更新成功',res)
        wx.showToast({
          title:'数据更新成功'
        })
wx.stopPullDownRefresh()
        })
      
    
        wx.cloud.database().collection("location3").get().then(res=>{
          this.setData({
            location3:res.data
          }),
          console.log('数据更新成功',res)
        wx.showToast({
          title:'数据更新成功'
        })
wx.stopPullDownRefresh()
        })
      
  
        wx.cloud.database().collection("location4").get().then(res=>{
          this.setData({
            location4:res.data
          }),
          console.log('数据更新成功',res)
        wx.showToast({
          title:'数据更新成功'
        })
wx.stopPullDownRefresh()
        })
      
   
        wx.cloud.database().collection("location5").get().then(res=>{
          this.setData({
            location5:res.data
          }),
          console.log('数据更新成功',res)
        wx.showToast({
          title:'数据更新成功'
        })
wx.stopPullDownRefresh()
        })
      
   
        wx.cloud.database().collection("location6").get().then(res=>{
          this.setData({
            location6:res.data
          }),
          console.log('数据更新成功',res)
        wx.showToast({
          title:'数据更新成功'
        })
wx.stopPullDownRefresh()
        })
      
        
         
      },
          
        
      
  
        
})