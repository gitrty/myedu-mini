<template>
  <view>
    <view class="user-top">
      <image src="../../static/user-bg.png" mode="" class="user-bg"></image>
      <view class="user-mask">
        <!-- 已登录 -->
        <view class="user-info" @tap="jump('/pages/user/userinfo/userinfo')" v-if="nickName">
          <image :src="avatarUrl" mode=""></image>
          <!-- vip用户标志 -->
          <image src="../../static/vip.png" mode="" v-if="true"></image>
          <text>{{nickName}}</text>
        </view>
        <!-- 未登录 -->
        <view class="user-info" @tap="jump('/pages/user/wxlogin/wxlogin')" v-if="!nickName">
          <image src="../../static/logo.png" mode=""></image>
          <text>点击登录</text>
        </view>
        
        <view class="user-flex">
          <view class="user-flex-con" @tap="jump('/pages/user/order/order')">
            <text>5</text>
            <text>订单</text>
          </view>
          <view class="user-flex-con" @tap="jump('/pages/user/mycollection/mycollection')">
            <text>5</text>
            <text>收藏</text>
          </view>
          <view class="user-flex-con" @tap="jump('/pages/user/coupon/coupon')">
            <text>5</text>
            <text>优惠券</text>
          </view>
          <view class="user-flex-con" @tap="jump('/pages/user/footprint/footprint')">
            <text>666</text>
            <text>足迹</text>
          </view>
        </view>
        <view class="user-pos">
          <view class="user-pos-con" @tap="jump('/pages/user/mystatus/mystatus')">
            <image src="../../static/xj-2.png" mode="" class="fl"></image>
            <text class="fl">我的学籍</text>
            <image src="../../static/huise-r.png" mode="" class="fr"></image>
          </view>
          <view class="user-pos-con" @tap="jump('/pages/user/problem/problem')">
            <image src="../../static/wt-2.png" mode="" class="fl"></image>
            <text class="fl">常见问题</text>
            <image src="../../static/huise-r.png" mode="" class="fr"></image>
          </view>
          <button class="user-pos-con" open-type="contact">
            <image src="../../static/kf-2.png" mode="" class="fl"></image>
            <text class="fl">联系客服/反馈</text>
            <image src="../../static/huise-r.png" mode="" class="fr"></image>
          </button>
        </view>
      </view>
    </view>
   
  </view>
</template>

<script>
export default {
  data() {
    return {
      nickName:'',
      avatarUrl:''
    };
  },
  onShow() {
    this.nickName = uni.getStorageSync('nickName')
    this.avatarUrl = uni.getStorageSync('avatarUrl')
  }
};
</script>

<style lang="less" scoped>
.user-top {
  height: 654rpx;
  width: 750rpx;
  background-color: pink;
  position: relative;
  .user-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .user-mask {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    .user-info {
      position: relative;
      margin-top: 140rpx;
      padding: 0 48rpx;
      height: 144rpx;
      display: flex;
      align-items: center;
      > image:nth-of-type(1) {
        width: 144rpx;
        height: 144rpx;
        border-radius: 50%;
        margin-right: 38rpx;
      }   
      > image:nth-of-type(2) {
        position: absolute;
        width: 44rpx;
        height: 44rpx;
        border-radius: 50%;
        left: 144rpx;
        bottom: 0;
      }
      > text {
        font-size: 48rpx;
        color: #fff;
      }
    }
    .user-flex {
      height: 100rpx;
      margin-top: 48rpx;
      display: flex;
      .user-flex-con {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        > text:nth-child(1) {
          font-size: 38rpx;
        }
        > text:nth-child(2) {
          font-size: 28rpx;
        }
      }
    }
  }
}
.user-pos {
  width: 686rpx;
  height: 334rpx;
  position: absolute;
  left: 50%;
  margin-left: -343rpx;
  bottom: -167rpx;
  background-color: #fff;
  border-radius: 16rpx;
  box-shadow: 0 0 24rpx rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 0 32rpx;
  .user-pos-con {
    width: 100%;
    flex: 1;
    border-bottom: 2rpx solid #ececec;
    line-height: 110rpx;
    > image:nth-of-type(1) {
      margin-top: 41rpx;
      width: 30rpx;
      height: 30rpx;
      margin-right: 12rpx;
    }
    > text {
      font-size: 32rpx;
      color: #252525;
    }
    > image:nth-of-type(2) {
      margin-top: 41rpx;
      width: 30rpx;
      height: 30rpx;
    }
  }
  .user-pos-con:nth-of-type(3) {
    border: none;
  }
}
.user-esc{
  font-size: 32rpx;
  color: #e8e8e8;
  margin-top: 208rpx;
  text-align: center;
}
</style>
