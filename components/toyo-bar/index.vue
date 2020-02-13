<template>
  <view class="">
    <view class="" :style="{height:88+pTop+'rpx'}"></view>
    <view class="hea">
      <view class="" :style="{ 'background-color': '#fff', height: pTop + 'rpx' }"></view>
      <view class="header">
        {{ title }}
        <view class="header-left">
          <view class="" @tap="navigateBack()"><image src="../../static/bl.png" mode=""></image></view>
          <view class="" @tap="jump('/pages/findgoodlessons/findgoodlessons')"><image src="../../static/index.png" mode=""></image></view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      pTop: 0,
      top: 0
    };
  },
  created() {
    let _this = this;
    uni.getSystemInfo({
      success: function(res) {
        // 状态栏高度
        _this.pTop = res.statusBarHeight + 20;
        _this.top = res.statusBarHeight + 20;
      }
    });
  }
};
</script>

<style lang="less" scoped>
.hea {
  background-color: #fff;
  position: fixed;
  z-index: 999;
  top: 0rpx;
}
.header {
  width: 750rpx;
  height: 88rpx;
  position: relative;
  text-align: center;
  line-height: 88rpx;
  font-size: 36rpx;
  color: #252525;
  background-color: #fff;
  .header-left {
    width: 174rpx;
    height: 64rpx;
    position: absolute;
    top: 0;
    top: 50%;
    margin-top: -32rpx;
    left: 14rpx;
    border-radius: 105rpx;
    border: 1rpx solid #eaeaea;
    display: flex;
    align-items: center;
    > view {
      flex: 1;
      height: 37rpx;
      line-height: 37rpx;
      text-align: center;
      > image {
        width: 36rpx;
        height: 36rpx;
      }
    }
    > view:nth-child(1) {
      border-right: 1rpx solid #ccc;
    }
  }
}
</style>
