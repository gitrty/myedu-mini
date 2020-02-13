<template>
  <view>
    <toyoBar :title="'搜索'"></toyoBar>
    <!-- 搜索框 -->
    <view class="select-input">
      <image src="../../../static/ss.png" mode=""></image>
      <input type="text" value="" placeholder="人工智能" @confirm="select" />
      <text @tap="navigateBack()">取消</text>
    </view>
    <!-- 热搜课程 -->
    <view class="hot-kc clearfix">
      <view class="title">热搜课程</view>
      <view class="content"><view class="fl" v-for="index of 5" :key="index">JAVA</view></view>
    </view>
    <!-- 搜索历史 -->
    <view class="select-ls clearfix">
      <view class="title">
        搜索历史
        <image src="../../../static/ljt.png" mode="" @tap="deleteLs"></image>
      </view>
      <view class="content"><view class="fl" v-for="index of 10" :key="index">JAVA</view></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 搜索
    select(e) {
      console.info(e.detail.value);
      this.redirectTo('/pages/findgoodlessons/selectresult/selectresult', { value: e.detail.value });
    },
    // 清除历史
    deleteLs() {}
  }
};
</script>

<style lang="less" scoped>
.select-input {
  margin-top: 28rpx;
  width: 100%;
  height: 64rpx;
  padding: 0 32rpx;
  display: flex;
  position: relative;
  > image {
    position: absolute;
    top: 19rpx;
    left: 74rpx;
    width: 28rpx;
    height: 28rpx;
  }
  > input {
    width: 500rpx;
    height: 64rpx;
    border-radius: 32rpx;
    background-color: #f8f8f8;
    padding-left: 80rpx;
    font-size: 24rpx;
    color: #999;
  }
  > text {
    line-height: 64rpx;
    margin-left: 40rpx;
    color: #999;
    font-size: 32rpx;
  }
}
.select-ls,
.hot-kc {
  margin-top: 56rpx;
  padding: 0 32rpx;
  .title {
    font-size: 32rpx;
    color: #252525;
    margin-bottom: 25rpx;
  }
  .content {
    > view {
      padding: 0 32rpx;
      background-color: #f8f8f8;
      border-radius: 50rpx;
      height: 64rpx;
      line-height: 64rpx;
      margin-right: 24rpx;
      margin-bottom: 20rpx;
    }
  }
}
.select-ls {
  .title {
    position: relative;
    > image {
      position: absolute;
      width: 28rpx;
      height: 28rpx;
      right: 0;
      top: 0;
    }
  }
}
</style>
