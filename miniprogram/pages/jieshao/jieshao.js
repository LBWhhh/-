//测评.js
//获取应用实例
const app = getApp()

Page({
  data:{
    yijian:''
  },
  inputyijian(event) {
    console.log('意见',event.detail.value)
    this.setData({
    yijian:event.detail.value
    })
  },
  //获取用户输入的意见并上传至数据库
  tijiao(){
    let yijian=this.data.yijian
    console.log('意见',yijian)
  
  wx.cloud.database().collection('yijian').add({
    data:{
      yijian:yijian
    },
    success(res){
  console.log('提交成功',res)
  wx.showToast({
    title:'提交成功'
  })
  
    },
    fail(res){
  console.log('提交失败',res)
    }
  
  })
  
  }
  })
