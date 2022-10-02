<script setup>
import NavTab from '../../components/navTab/NavTab.vue';</script>

<template>
  <div class="contaier flex-wrapper flex-fdc">
    <header class="header">
      <div class="address">
        <van-icon name="guide-o" />
        <span class="addr-text">IOI美丽湾</span>
        <div class="head-cart">
          <div class="title-cart">智慧社区管理</div>
        </div>
      </div>
    </header>
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
    background: rgb(249, 249, 245);
  }


  .header {
    width: 100%;
    height: 153px;
    background: linear-gradient(315deg, #4b98ed, #0d94fc);
    font-size: 14px;

    .address {
      position: relative;
      margin-top: 34px;
      margin-left: 16px;
      color: #ffffff;

      .addr-text {
        padding-left: 5px;

      }

      .head-cart {
        position: absolute;
        margin-top: 8px;
        width: 343px;
        height: 173px;
        background: #ffffff;
        border-radius: 6px;
        text-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);

        .title-cart {
          padding: 31px 0 0 20px;
          width: 132px;
          height: 31px;
          border-radius: 0px;
          font-size: 22px;
          color: #4b98ed;
          text-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }

  .footer {
    width: 100%;
  }
}
</style>
