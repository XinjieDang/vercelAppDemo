<script setup>
import { reactive } from 'vue'
const menuList = reactive([
  {
    id: 1, title: '缴费服务', list: [
      {
        name: '电费', icon: 'warning-o', background: '#38C39F',
      },
      {
        name: '水费', icon: 'filter-o', background: '#3FACED',
      },
      {
        name: '燃气费', icon: 'fire-o', background: '#D54897',
      }, {
        name: '物业费', icon: 'bill-o', background: '#F59B22',
      },
      {
        name: '停车缴费', icon: 'balance-o', background: '#3A4BEB',
      },
    ]
  },
  {
    id: 2, title: '开门服务', list: [
      {
        name: '手机开门', icon: 'hotel-o', background: '#8080FF',
      },
      {
        name: '访客邀请', icon: 'friends-o', background: '#1693C9',
      },
    ]
  },
  {
    id: 3, title: '社区服务', list: [
      {
        name: '社区公告', icon: 'envelop-o', background: '#B0E45E',
      },
      {
        name: '社区活动', icon: 'smile-comment-o', background: '#118BBF',
      },
      {
        name: '投诉建议', icon: 'notes-o', background: '#E97E48',
      }, {
        name: '在线报修', icon: 'records', background: '#8686F2',
      },
      {
        name: '我的车位', icon: 'logistics', background: '#1AA7E6',
      },
      {
        name: '我的房屋', icon: 'home-o', background: '#0090FF',
      },
      {
        name: '便民电话', icon: 'phone-circle-o', background: '#6E6EE4',
      },
      {
        name: '问卷调查', icon: 'link-o', background: '#D65FDC',
      },
    ]
  },
])
</script>
<template>
  <div class="main-box" v-for="(item,index) in menuList" :key="index">
    <div class="title-box"><span>{{item.title}}</span></div>
    <div class="menu-list flex-wrapper flex-wrap">
      <div class="menu-item" v-for="(every, index) in item.list" :key="index">
        <ul :style="{ background:every.background }">
          <li>
            <van-icon size="40px" :name="every.icon" color="#ffffff" />
          </li>
        </ul>
        <p>{{every.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-box {
  padding-top: 20px;
  padding-left: 9px;

  .title-box {
    width: 66px;
    height: 20px;
    border-radius: 0px;
    border-left: 4px solid #0D94FC;

  }

  .title-box span {
    padding-left: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #555555;

  }

  .menu-list {
    width: 100%;
    margin-top: 13px;

    .menu-item {
      margin-left: 27px;
      margin-right: 5px;
      margin-bottom: 14px;
    }

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
  }
}
</style>
