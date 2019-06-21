<template>
  <div>
     <button open-type="openSetting">打开授权</button>
    <button @click="getUserLocation">获取用户定位</button>
  </div>
</template>

<script>
export default {
  methods: {
    getUserLocation(){
      wx.getLocation({
        success: res => {
          console.log(res)
        },
      
      })
    }
  }
}
</script>

