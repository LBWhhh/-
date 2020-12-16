

Page({
 data:{

name:'',
password:'',

  },

  //输入用户名
  inputName:function(event){
    console.log('获取输入的账号 ',event.detail.value)
    this.setData({
      name:event.detail.value
    })
  },
  //输入密码
  inputPassword(event){
    console.log('获取输入的密码',event)
    this.setData({
      password:event.detail.value
    })
  },
//点击注册
  register(){ 
    let name = this.data.name;
    let password = this.data.password;
    console.log('账号',name,'密码',password)
    if(name.length>15){
      wx.showToast({
        icon:'none',
        title:'账号不超过15位'
      })
      return
    }
    if(password.length>15){
      wx.showToast({
        icon:'none',
        title:'账号不超过15位'
      })
      return
    }

    
//将用户的账号和密码传向数据库
wx.cloud.database().collection('adminlist').add({
  data:{
    name:name,
    password:password
  },
  success(res){
console.log('注册成功',res)
wx.showToast({
  title:'注册成功'
})
   wx.navigateTo({
  url:'/pages/login/login'
})

  },
  fail(res){
console.log('注册失败',res)
  }

})




}
})
