<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const menuList = reactive([
  { id: 1, title: '我的房屋', icon: 'chat-o', background: '#66BCFF', path: '/myHome' },
  { id: 2, title: '访客邀请', icon: 'friends-o', background: '#1693C9' },
  { id: 3, title: '手机开门', icon: 'newspaper-o', background: '#8080FF' },
  { id: 4, title: '生活缴费', icon: 'after-sale', background: '#F59B22' },
])
const categoryList = reactive([
  { id: 1, title: '我的车位', icon: 'logistics', background: '#01A7F0' },
  { id: 2, title: '停车缴费', icon: 'balance-list-o', background: '#02BFBF' },
  { id: 3, title: '在线报修', icon: 'setting-o', background: '#8080FF' },
  { id: 4, title: '投诉建议', icon: 'after-sale', background: '#E97E48' },
  { id: 5, title: '问卷调查', icon: 'edit', background: '#C849CE' },
  { id: 6, title: '社区公告', icon: 'envelop-o', background: '#A3C869' },
])
const handleGoPage = (path) => {
  router.push(path)
}
</script>

<template>
  <header class="header">
    <div class="address">
      <van-icon name="location-o" />
      <span class="addr-text">IOI美丽湾</span>
      <div class="head-cart">
        <div class="title-cart">智慧社区管理</div>
      </div>
    </div>
  </header>
  <div class="main-box">
    <span class="title"> 常用服务 </span>
    <!-- list -->
    <div class="menu-list flex-wrapper flex-wrap flex-jc-sa">
      <div class="menu-item" v-for="(item, index) in menuList" :key="index" @click="handleGoPage(item.path)">
        <ul :style="{ background: item.background }">
          <li>
            <van-icon size="40px" :name="item.icon" color="#ffffff" />
          </li>
        </ul>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
  <div class="category">
    <span class="title"> 智慧社区 </span>
    <!-- list -->
    <div class="menu-list flex-wrapper flex-wrap flex-jc-sa">
      <div class="club-menu-item" v-for="(item, index) in categoryList" :key="index">
        <ul :style="{ background: item.background }">
          <p>{{ item.title }}</p>
          <li>
            <van-icon size="40px" :name="item.icon" color="#ffffff" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  width: 100%;
  height: 150px;
  background: linear-gradient(315deg, #4b98ed, #0d94fc);
  font-size: 14px;

  .address {
    position: relative;
    padding-top: 34px;
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
      background: url(../../assets/img/bg.png) no-repeat;
      //background: #ffffff;
      border-radius: 6px;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);

      .title-cart {
        padding: 31px 0 0 20px;
        width: 132px;
        height: 31px;
        border-radius: 0px;
        font-size: 22px;
        color: #ebeff4;
        text-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
      }
    }
  }
}

.title {
  font-size: 14px;
  font-family: PingFang SC, PingFang SC-Bold;
  font-weight: bold;
  color: #555555;
  padding-left: 16px;
}


.main-box {
  margin-top: 120px;
}

.menu-list {
  width: 360px;
  margin: 0 auto;
  margin-top: 13px;

  .menu-item ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 53px;
    height: 53px;
    border-radius: 10px;
    text-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
  }

  .menu-item p {
    padding-top: 6px;
    font-size: 12px;
    color: #7f7f7f;
    text-align: center;
  }

  .club-menu-item ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 59px;
    opacity: 0.68;
    background: #01a7f0;
    border-radius: 3px;
    margin-bottom: 7px;
  }
}

.category {
  margin-top: 34px;
  min-height: 300px;
}
</style>
