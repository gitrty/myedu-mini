<template>
  <view>
    <toyoBar :title="'学籍详情'"></toyoBar>
    <view class="" v-if="false">
      <view class="status-top">
        <image src="../../../static/my-bg.png" mode="" class="status-img"></image>
        <view class="qy-book">
          <scroll-view class="wuc-tab" scroll-with-animation scroll-x>
            <!-- 滑动数据区域 -->
            <view class="qy-book-con" v-for="(item, index) in [1, 2, 3, 4]" :key="index" @tap="tabTop(index)">
              <text :class="{ active: index === tabIndex }">JAVA架构</text>
              <view class="border-bottom" v-show="index === tabIndex"></view>
            </view>
          </scroll-view>
        </view>
        <view class="status-user">
          <image src="../../../static/logo.png" mode="" class="user-tx fl"></image>
          <image src="../../../static/vip.png" mode="" class="isVip" v-if="isVip"></image>
          <view class="fl">
            <view class="status-user-name">
              <text>用户名</text>
              <image :src="false ? '/static/van.png' : '/static/no-van.png'" mode="" class="user-sex"></image>
            </view>
            <view class="status-user-info">
              <text>24</text>
              <text>本科</text>
              <text>173****9646</text>
            </view>
          </view>
        </view>
        <view class="status-info-details">
          <view class="yuan"></view>
          <view class="status-info-details-l">入学时间</view>
          <view class="status-info-details-r">2019年10月21日</view>
        </view>
        <view class="status-info-details">
          <view class="yuan"></view>
          <view class="status-info-details-l">工作年限</view>
          <view class="status-info-details-r">3年</view>
        </view>
        <view class="status-info-details">
          <view class="yuan"></view>
          <view class="status-info-details-l">担任职位</view>
          <view class="status-info-details-r">JAVA工程师</view>
        </view>
        <view class="status-info-details">
          <view class="yuan"></view>
          <view class="status-info-details-l">目前年薪</view>
          <view class="status-info-details-r">10-20k</view>
        </view>
        <view class="status-info-details">
          <view class="yuan"></view>
          <view class="status-info-details-l">期望年薪</view>
          <view class="status-info-details-r">20-30k</view>
        </view>
        <view class="account-number">
          <view class="account-tit">小泡账号</view>
          <view class="account-con">
            <view class="">登录账号</view>
            <view class="">GP04624</view>
          </view>
          <view class="account-con">
            <view class="">登录密码</view>
            <view class="">66666666666</view>
          </view>
          <view class="account-tit account-tit2">咕泡附属</view>
          <view class="account-con" @tap="jump('/pages/user/Admissionmanual/Admissionmanual')">
            <view class="">入学手册</view>
            <image src="../../../static/huise-r.png" mode=""></image>
          </view>
          <view class="account-con bordernone">
            <view class="">学院协议</view>
            <image src="../../../static/huise-r.png" mode=""></image>
          </view>
        </view>
      </view>
      <view class="status-mid">我的专属黑卡</view>
      <view class="black-card">
        <image src="../../../static/black-card.png" mode="" class="black-bg"></image>
        <view class="card-userinfo clearfix">
          <image src="../../../static/logo.png" mode="" class="fl"></image>
          <text class="fl">用户名</text>
          <text class="fr">GP04624</text>
        </view>
      </view>
      <view class="status-flex">
        <view class="">
          <view class=""><image src="../../../static/logo.png" mode=""></image></view>
          <text>全课程解锁</text>
        </view>
        <view class="">
          <view class=""><image src="../../../static/logo.png" mode=""></image></view>
          <text>职业规划</text>
        </view>
        <view class="">
          <view class=""><image src="../../../static/logo.png" mode=""></image></view>
          <text>资源互享</text>
        </view>
        <view class="">
          <view class=""><image src="../../../static/logo.png" mode=""></image></view>
          <text>周边福利</text>
        </view>
        <view class="">
          <view class=""><image src="../../../static/logo.png" mode=""></image></view>
          <text>GPer会员</text>
        </view>
      </view>
    </view>
    <!-- 无数据 -->
     <toyoNoInfo :text="'暂无相关学籍'" :imgSrc="'/static/z-wxj.png'" v-if="true"></toyoNoInfo>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      isVip: true
    };
  },
  methods: {
    tabTop(index) {
      this.tabIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.status-top {
  height: 880rpx;
  position: relative;
  .status-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
.qy-book {
  white-space: nowrap;
}
.qy-book-con {
  position: relative;
  display: inline-block;
  width: 250rpx;
  height: 110rpx;
  margin-right: 24rpx;
  font-size: 40rpx;
  text-align: center;
  line-height: 100rpx;
  color: #999;
  .border-bottom {
    position: absolute;
    width: 120rpx;
    height: 8rpx;
    border-radius: 14rpx;
    background: linear-gradient(to right, #fdd100, #f18300);
    bottom: 0;
    left: 50%;
    margin-left: -60rpx;
  }
}
.active {
  color: #fff;
}
.status-user {
  height: 144rpx;
  padding: 0 32rpx;
  margin-top: 58rpx;
  position: relative;
  margin-bottom: 41rpx;
  .isVip {
    width: 44rpx;
    height: 44rpx;
    position: absolute;
    bottom: 0;
    left: 132rpx;
  }
  .user-sex {
    width: 40rpx;
    height: 40rpx;
    margin-left: 14rpx;
  }
  .user-tx {
    width: 144rpx;
    height: 144rpx;
    border-radius: 50%;
    margin-right: 37rpx;
  }
  .status-user-name {
    font-size: 48rpx;
    color: #fff;
  }
  .status-user-info {
    margin-top: 23rpx;
    font-size: 26rpx;
    color: #e8e8e8;
    > text {
      margin-right: 56rpx;
    }
  }
}
.status-info-details {
  margin-bottom: 32rpx;
  display: flex;
  align-items: center;
  margin-left: 215rpx;
  font-size: 28rpx;
  color: #fff;
  .yuan {
    width: 12rpx;
    height: 12rpx;
    border-radius: 50%;
    border: 2rpx solid #fff;
    margin-bottom: -2rpx;
  }
  .status-info-details-l {
    margin-left: 14rpx;
    margin-right: 36rpx;
  }
}
.account-number {
  position: absolute;
  width: 686rpx;
  height: 619rpx;
  box-shadow: 0 0 24rpx rgba(0, 0, 0, 0.08);
  bottom: -460rpx;
  left: 32rpx;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 32rpx 32rpx 0;
}
.account-tit {
  font-size: 36rpx;
  color: #333;
}
.account-con {
  height: 110rpx;
  border-bottom: 2rpx solid #ececec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 32rpx;
  color: #333;
  > image {
    width: 30rpx;
    height: 30rpx;
  }
}
.account-tit2 {
  margin-top: 48rpx;
}
.bordernone {
  border: none;
}
.status-mid {
  font-size: 36rpx;
  color: #333;
  text-align: center;
  margin-top: 515rpx;
}
.black-card {
  width: 686rpx;
  height: 308rpx;
  position: relative;
  margin-top: 32rpx;
  padding-top: 220rpx;
  .black-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 32rpx;
    border-radius: 16rpx;
    z-index: -1;
  }
  .card-userinfo {
    height: 48rpx;
    line-height: 48rpx;
    color: #fff;
    image {
      width: 48rpx;
      height: 48rpx;
      margin-left: 80rpx;
      border-radius: 50%;
    }
    > text:nth-of-type(1) {
      font-size: 26rpx;
      margin-left: 10rpx;
    }
    > text:nth-of-type(2) {
      font-size: 24rpx;
      margin-right: 40rpx;
    }
  }
}
.status-flex {
  height: 132rpx;
  margin-top: 32rpx;
  margin-bottom: 32rpx;
  display: flex;
  > view {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    > view {
      width: 80rpx;
      height: 80rpx;
      background: linear-gradient(to right, #4d4d4d, #262626);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      > image {
        width: 39rpx;
        height: 33rpx;
      }
    }
    > text {
      font-size: 24rpx;
      color: #333;
    }
  }
}
</style>
