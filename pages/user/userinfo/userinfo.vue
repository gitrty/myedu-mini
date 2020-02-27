<template>
  <view>
    <toyoBar :title="'个人信息'"></toyoBar>
    <view class="userinfo">
      <view class="userinfo-con">
        <view class="">手机号</view>
        <view class="">173****9646</view>
      </view>
      <view class="userinfo-con">
        <view class="">VIP身份验证</view>
        <view class="">
          <text>非VIP</text>
          <image src="../../../static/huise-r.png" mode=""></image>
        </view>
      </view>
    </view>
    <view class="user-esc"><text>退出账户</text></view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.userinfo {
  padding: 0 32rpx;
  .userinfo-con {
    height: 110rpx;
    border-bottom: 2rpx solid #ececec;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 32rpx;
    > view:nth-of-type(1) {
      color: #252525;
    }
    > view:nth-of-type(2) {
      color: #666;
      > image {
        width: 38rpx;
        height: 38rpx;
        margin-left: 5rpx;
        margin-bottom: -4rpx;
      }
    }
  }
}
.user-esc {
  font-size: 32rpx;
  color: #c7000c;
  margin-top: 40rpx;
  text-align: center;
}
</style>
