<template>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import http from './service'
// interface IProps{
//    [key: string]: any
// }
// http.get<IProps>({url: 'https://www.baidu.com'}).then(res => {
//   console.log(res)
// })
</script>
<style lang="less" scoped>
  
</style>
