<script setup>
import { ref } from 'vue'
const active = ref(0)

defineProps({
  msg: String
})
</script>
  
<template>
  <van-tabbar route v-model="active">
    <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/apply" icon="apps-o">应用</van-tabbar-item>
    <van-tabbar-item replace to="/message" icon="chat-o">消息</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
  
<style scoped>
/*改为如下书写方式即可 */
:deep(.van-tabbar) {
  height: 83px !important;
}
</style>
  