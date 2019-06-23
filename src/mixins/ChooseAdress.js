//混入式的使用

export default {
    data(){
        adress: null
    },
    methods: {
        chooseAddress(){
            wx.chooseAddress({
              success: res =>{
               //  console.log(res);
                // 用户点击了同意，并且选择了地址
                res.detailAddres = `${res.provinceName}${res.cityName}${res.countyName}${res.detailInfo}`
               this.address = res
               //保存到本地
               wx.setStorageSync("address",res)
              
              },
              fail: ({errMsg}) =>{
                  if(errMsg === 'chooseAddress:fail auth deny'){
                     wx.showModal({
                       title: '提示', //提示的标题,
                       content: '请去我的页面打开授权选择收货地址', //提示的内容,
                       showCancel: false, //是否显示取消按钮,
                       // cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                       // cancelColor: '#000000', //取消按钮的文字颜色,
                       confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                       confirmColor: '#3CC51F', //确定按钮的文字颜色,
                       success: res => {
                         if (res.confirm) {
                           wx.switchTab({ url: '/pages/my/main' });
                         } 
                       }
                     });
                  }
              }
            });
        },
    }
}