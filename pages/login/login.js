var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    Button:"登录",
    button:"注册",
    username:null,
    password:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },//自己定义的事件
  signClick:function(){
    var show = this.data.Button == "注册" ? "登录": "注册";
    var choose = this.data.button == "注册" ? "登录" : "注册";
    // console.log(this.data.Button)
      this.setData({Button:show});
      this.setData({ button: choose });
  },
  //ajax请求ws.request
  Ajax: function (url) {
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {
        user: this.data.username,
        password: this.data.password
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        wx.switchTab({
          url: '../index/index'
        });
      }
    })
  },
  //登录//注册
  loginBtnClick :function(){
    console.log(this.data.username)
    //先判断是登录还是注册
   if(this.data.Button == "注册"){
     console.log("注册",this.data.Button)
     var url ="../../php/loginup.php";
   }else{
     console.log("登陆", this.data.Button)
     var url = "../../php/login.php";
   }
   this.Ajax(url);
//进行ajax请求

 
  },
  usernameInput :function(event){
    console.log("userName: ",event.detail.value)
    this.setData({username: event.detail.value})
    
  },
  passworldInput :function(event){
    console.log("passWord ", event.detail.value)
    this.setData({ password: event.detail.value })
  },
 
})