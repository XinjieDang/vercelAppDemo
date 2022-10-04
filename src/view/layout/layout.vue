<script setup>
import NavTab from '../../components/navTab/NavTab.vue'
</script>

<template>
  <div class="contaier flex-wrapper flex-fdc">
    <div class="main flex-1">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <nav-tab></nav-tab>
    </footer>
  </div>
</template>

<style scoped lang="less">
.contaier {
  height: 100vh;

  .main {
    font-size: 14px;
    overflow-y: scroll;
  }

  .footer {
    width: 100%;
  }
}
</style>
