
Page({
data:{
name:'',
password:'',

// 密码
pass:'',
// 表单类型
inputType:"password",
// 是否显示密码
show_pass:false,
},
/**
* 点击显示隐藏密码
*/
seeTap:function(){
var that=this;
that.setData({
  // 切换图标
  show_pass:!that.data.show_pass,
  // 切换表单type属性
  inputType:that.data.inputType==='password'?'text':'password',
})
},



  
  //输入用户名
  inputName(event) {
console.log('账号',event.detail.value)
this.setData({
  name:event.detail.value
})
  },
  //输入密码
  inputPassword(event) {
    console.log('密码',event.detail.value)
    this.setData({
     password:event.detail.value
    })
  },
  //登陆
  login(){
  let name=this.data.name
  let password=this.data.password
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
  //与数据库中的账号和密码进行验证
wx.cloud.database().collection('adminlist').where({
  name:name
}).get({
  success(res){
    console.log('获取数据成功',res)
    let adminlist=res.data[0]
    console.log('adminlist',adminlist)
    if(password==adminlist.password){
      console.log('登录成功')
      wx.showToast({
        title:'登录成功'
      })
      wx.switchTab({
        url:'../index/index'
      })
    }else{
      console.log('登录失败')
      wx.showToast({
        icon:'none',
        title:"账号或密码错误"
      })
    }
  },
  fail(res){
    console.log('获取数据失败',res)
  }
})

  },          
  
  
  
  register(){
    wx.navigateTo({
      url: '/pages/register/register'
    })
  }

})

