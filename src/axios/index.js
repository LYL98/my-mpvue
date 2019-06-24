import Vue from 'vue'
import axios from 'axios'
// import { resolve } from 'url';

axios.defaults.baseURL = "http://127.0.0.1:8899/api/public/v1/"
//拦截器
axios.interceptors.request.use(function(config){
    if (wx.getStorageSync('token')){
      config.headers.Authorization = mpvue.getStorageSync('token')
    }
    return config
  },function(error){
      return Promise.reject(error)
  })
//适配器
axios.defaults.adapter = function(config){
    return new Promise((resolve,reject)=>{
        wx.showLoading({
          title: '拼命加载中...', //提示的内容,
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: res => {}
        })
        mpvue.request({
            url: config.url,
            data: config.data,
            method: config.method,
            dataType: "json",//会对传回来的数据进行一次 JSON.parse()
            header: config.headers,// 设置请求的 header
            success: res=>{
                resolve(res)
            },
            fail: res=>{
                reject(res)
            },
            complete: ()=>{
                wx.hideLoading()
            }
        })
    })
}
Vue.prototype.$axios = axios