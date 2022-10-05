<script setup>
import { ref } from "vue";
import user1 from "@/assets/img/user1.png"

const url = ref(user1)
</script>

<template>
  <div class="main-head">
    <div class="user-box flex-wrapper flex-v">
      <div class="img-box flex-wrapper flex-v-h-c">
        <van-image round width="46px" height="46px" :src="url" />
      </div>
      <div class="user-info">
        <span>爱吃的小虾米</span>
        <p class="phone">188********</p>
      </div>
    </div>
    <div class="my-menu flex-wrapper flex-jc-sa">
      <ul>
        <li class="number">11<p>我的房屋</p>
        </li>
      </ul>
      <ul>
        <li class="number">11<p>我的车位</p>
        </li>
      </ul>
      <ul>
        <li class="number">11<p>待缴费</p>
        </li>
      </ul>
    </div>

    <div class="sys-menu">

      <div class="cell-list">
        <van-cell-group>
          <van-cell title="家庭成员" icon="friends-o" is-link />
          <van-cell title="人脸识别门禁" icon="smile-comment-o" is-link />
          <van-cell title="我的访客" icon="user-o" is-link />
          <van-cell title="我的账单" icon="balance-o" is-link />
          <van-cell title="我的车辆" icon="logistics" is-link />
          <van-cell title="我的投诉建议" icon="envelop-o" is-link />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.main-head {
  height: 230px;
  background: #4B98ED;

  .user-box {
    padding: 30px 0px 0 16px;

    .img-box {
      margin-right: 18px;
      width: 57px;
      height: 57px;
      border-radius: 50%;
      background: #ffffff;
      border: 1px solid #f2f2f2;
    }

    .user-info {
      font-size: 14px;
      font-family: PingFang SC, PingFang SC-Normal;
      color: #ffffff;

      .phone {
        padding-top: 6px;
      }
    }
  }

  .my-menu {
    margin-top: 39px;
    text-align: center;
    color: #ffffff;

    .number {
      font-size: 18px;
    }

    .number p {
      padding-top: 3px;
      font-size: 13px;
    }
  }

}

.sys-menu {
  position: relative;
  top: 20px;
  width: 100%;
  height: 484px;
  background: #f2f2f2;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  .cell-list {
    padding-top: 30px;
  }
}
</style>
