import Vue from 'vue'
import axios from 'axios'
// import { resolve } from 'url';

axios.defaults.baseURL = "https://www.zhengzhicheng.cn/api/public/v1/"


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