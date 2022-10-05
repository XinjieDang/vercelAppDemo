<script setup>
import { reactive } from 'vue'
import img1 from '@/assets/img/user1.png'
import img2 from '@/assets/img/user2.png'

const userList = reactive(
  [
    {
      id: 1, url: img1, name: '李管家', msg: '尊敬的业主，因抢修，明天停水，时间为三天', time: '7:00'
    },
    {
      id: 2, url: img2, name: '赵子琪', msg: '发一个清单给我。', time: '17:00'
    },
    {
      id: 3, url: img2, name: '维尔美', msg: '不好意思，我们活动满人了。', time: '12:00'
    },
  ])


</script>

<template>
  <div class="main-box">
    <div class="tip-text">
      <van-icon name="brush-o" size="12" />
      <span class="all-text">全部已读</span>
    </div>
    <div class="msg-box flex-wrapper flex-v flex-jc-sa">
      <div class="flex-wrapper flex-v">
        <div class="msg-item flex-wrapper flex-v-h-c">
          <van-icon name="chat-o" size="30" badge="9" color="#ffffff" />
        </div>
        <span class="msg-text">系统消息</span>
      </div>
      <div class="flex-wrapper flex-v">
        <div class="volume-item flex-wrapper flex-v-h-c">
          <van-icon name="volume-o" size="30" color="#ffffff" />
        </div>
        <span class="msg-text">社区公告</span>
      </div>
    </div>
    <!-- msg list -->
    <div class="msg-list">
      <div class="list-item flex-wrapper flex-v" v-for="(item,index) in userList" :key="index">
        <div class="user-img flex-wrapper flex-v-h-c">
          <img style="width:40px;height:40px" :src="item.url" />
        </div>
        <div class="user-msg">
          <div class="user-head flex-wrapper flex-jc-sb">
            <p>{{item.name}}</p>
            <span class="user-msg-text">{{item.time}}</span>
          </div>
          <div class="user-msg-text">
            {{item.msg}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.tip-text {
  text-align: right;
  padding-right: 22px;
  padding-top: 10px;

  .all-text {
    margin-left: 4px;
    font-size: 12px;
    font-family: PingFang SC, PingFang SC-Normal;
    color: #7f7f7f;
    line-height: 18px;
  }
}

.msg-box {
  width: 337px;
  margin: 0 auto;
  margin-top: 12px;
  height: 70px;
  opacity: 0.68;
  background: #ffffff;
  border-radius: 6px;
  color: #333333;
  line-height: 20px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);

  .msg-item {
    width: 45px;
    height: 45px;
    background: linear-gradient(180deg, #5abfea, #1e95dd);
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(45, 160, 224, 0.50);
  }

  .volume-item {
    width: 45px;
    height: 45px;
    background: linear-gradient(180deg, #5aead1, #1eddb4);
    border-radius: 50%;
    text-shadow: 0px 3px 6px 0px rgba(50, 204, 173, 0.50);
  }

  .msg-text {
    font-size: 12px;
    margin-left: 15px;
    font-family: PingFang SC, PingFang SC-Normal;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.70);
  }
}


.msg-list {
  margin-top: 14px;

  .list-item {
    height: 70px;
    background: #ffffff;
    border-bottom: 1px solid #f2f2f2;
    border-radius: 0px;

    .user-img {
      margin-left: 19px;
      width: 49px;
      height: 49px;
      background: rgba(128, 211, 248, 0.52);
      border-radius: 50%;
      margin-right: 10px;
    }

    .user-msg p {
      font-size: 14px;
      line-height: 20px;
      padding-bottom: 5px;

    }

    .user-head {
      width: 255px;
    }

    .user-msg-text {
      font-size: 12px;
      color: #7f7f7f;
      line-height: 20px;
    }

  }


}
</style>
