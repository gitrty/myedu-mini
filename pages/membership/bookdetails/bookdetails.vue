<template>
  <view>
    <toyoBar :title="'书籍详情'"></toyoBar>
    <view class="book-img"><image src="../../../static/logo.png" mode=""></image></view>
    <view class="book-tit">Spring 5 核心原理与30个类手写实战</view>
    <view class="book-det">本书基于编程开发实践，不仅深度解析 Spring 5的原理 与新特性，更从环境准备、顶层结构设计、数据访问等 方面一步步推导出 Spring 的设计原理。</view>
    <view class="book-tip">
      <image src="../../../static/gz.png" mode=""></image>
      <text>666人领取</text>
    </view>
    <view class="book-hr"></view>
    <view class="image-text-jx">图文介绍</view>
    <image src="../../../static/logo.png" mode="" class="book-bottom"></image>

    <!-- 底部-未开通会员 -->
    <view class="">
      <view class="v-bottom">
        <view class="v-bottom-no" v-if="!isVip">没有领取权限</view>
        <view class="v-bottom-yes" v-if="isVip" @tap="jump('/pages/membership/receivebook/receivebook')">立即领取</view>
      </view>
      <view class="v-bottom2" v-if="!isVip">
        <image src="../../../static/vip-icon.png" mode="" class="fl"></image>
        <text class="fl">点击开通会员，免费观看所有往期录播</text>
        <image src="../../../static/huise-r.png" mode="" class="fr"></image>
      </view>
    </view>
    <view class="" :style="{ height: isVip ? '98rpx' : '170rpx' }"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isVip: false
    };
  },
  onShow() {
    this.isVip = this.$store.state.isVip;
  }
};
</script>

<style lang="less" scoped>
.book-img {
  height: 416rpx;
  > image {
    width: 100%;
    height: 100%;
  }
}
.book-tit {
  margin-top: 40rpx;
  font-size: 40rpx;
  color: #252525;
  padding: 0 32rpx;
}
.book-det {
  margin-top: 16rpx;
  padding: 0 32rpx;
  font-size: 28rpx;
  color: #666;
  line-height: 40rpx;
}
.book-tip {
  margin-top: 11rpx;
  padding: 0 32rpx;
  font-size: 24rpx;
  color: #999;
  padding-bottom: 35rpx;
  > image {
    width: 18rpx;
    height: 18rpx;
    margin-right: 8rpx;
  }
}
.book-hr {
  width: 686rpx;
  height: 2rpx;
  margin: 0 auto;
  background-color: #e8e8e8;
}
.image-text-jx {
  margin-top: 32rpx;
  font-size: 36rpx;
  color: #252525;
  padding: 0 32rpx;
}
.book-bottom {
  width: 100%;
}
.v-bottom {
  padding: 8rpx 32rpx 0;
  height: 98rpx;
  width: 750rpx;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1rpx solid #ccc;
  .v-bottom-no {
    border-radius: 45rpx;
    width: 686rpx;
    height: 80rpx;
    background-color: #f4f4f4;
    line-height: 80rpx;
    text-align: center;
    font-size: 32rpx;
    color: #999;
  }
  .v-bottom-yes {
    border-radius: 45rpx;
    width: 686rpx;
    height: 80rpx;
    background: linear-gradient(to right, #fdd100, #f18300);
    line-height: 80rpx;
    text-align: center;
    font-size: 32rpx;
    color: #fff;
  }
}
.v-bottom2 {
  padding: 0 32rpx;
  height: 72rpx;
  width: 750rpx;
  position: fixed;
  bottom: 98rpx;
  background: linear-gradient(to right, #4b4b4b, #222);
  line-height: 72rpx;
  > image:nth-of-type(1) {
    margin-top: 23rpx;
    width: 28rpx;
    height: 28rpx;
  }
  > text {
    margin-left: 9rpx;
    font-size: 28rpx;
    color: #fdd100;
  }
  > image:nth-of-type(2) {
    margin-top: 23rpx;
    width: 28rpx;
    height: 28rpx;
  }
}
</style>
