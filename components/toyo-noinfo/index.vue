<template>
  <view class="noinfo" :style="{'padding-top':pTop+'rpx'}">
    <image :src="imgSrc" mode="" class="z-wsc"></image>
    <view class="">{{text}}</view>
  </view>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '/static/z-wsc.png'
    },
    text: {
      type: String,
      default: '暂无相关收藏'
    },
    pTop: {
      type: Number,
      default: 300
    }
  }
};
</script>

<style lang="less" scoped>
.noinfo {
  color: #999;
  font-size: 30rpx;
  text-align: center;
}
.z-wsc {
  width: 160rpx;
  height: 160rpx;
  margin-bottom: 16rpx;
}
</style>
