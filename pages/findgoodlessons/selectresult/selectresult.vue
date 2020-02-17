<template>
  <view>
    <toyoBar :title="'搜索结果'"></toyoBar>
    <!-- 搜索框 -->
    <view class="select-input">
      <image src="/static/ss.png" mode=""></image>
      <input type="text" value="" placeholder="人工智能" @confirm="select" />
      <text @tap="navigateBack()">取消</text>
    </view>
    <view class="result-title">已为你搜索 12 条相关内容</view>
    <view class="result-viedo">
      <view class="training-video" v-for="index of 10" :key="index">
        <view class="training-video-l">
          <image src="/static/logo.png" mode=""></image>
          <!-- tab1 - 课程 -->
          <view class="viedo-tip" v-if="tabViedo">
            <view class="">
              <image src="/static/xxrs.png" mode=""></image>
              <text>6666</text>
            </view>
            <view class="">
              <image src="/static/pll.png" mode=""></image>
              <text>6666</text>
            </view>
          </view>
          <!-- tab1 - 视频 -->
          <view class="video-free" v-if="index == 1&&!tabViedo" >免费看</view>
        </view>
        <view class="t-video-text">
          <view class="t-video-text-t">并发编程从入门到入魔并发编程从入门到入魔</view>
          <!-- tab2 - 显示价格 -->
          <view class="t-video-text-b" v-if="tabViedo">
            <text>￥199.00</text>
            <!-- <text>￥199.00</text>  -->
          </view>
          <!-- tab2 - 显示播放量及评论数 -->
          <view class="video-icon-num" v-if="!tabViedo">
            <view class="">
              <image src="/static/play.png" mode=""></image>
              <text>6666</text>
            </view>
            <view class="">
              <image src="/static/pll-2.png" mode="" class="pll"></image>
              <text>7777</text>
            </view>
          </view>
          <!-- 显示开启时间 -->
          <view class="t-video-text-time" v-if="false">
            <image src="/static/logo.png" mode=""></image>
            <text>1月4日开启 剩余12天</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabViedo: false // 视频/课程 (测试使用)
    };
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
.result-title {
  padding: 0 32rpx;
  font-size: 32rpx;
  color: #252525;
  margin-top: 56rpx;
}
.training-video {
  width: 686rpx;
  height: 134rpx;
  margin-bottom: 42rpx;
  // background-color: gold;
  display: flex;
  position: relative;
  .video-free {
    position: absolute;
    top: -2rpx;
    left: -4rpx;
    width: 80rpx;
    height: 32rpx;
    background: linear-gradient(to right, #fdd100, #f18300);
    border-radius: 53rpx;
    font-size: 20rpx;
    color: #fff;
    line-height: 32rpx;
    text-align: center;
  }
  .training-video-l {
    position: relative;
    > image {
      width: 240rpx;
      height: 134rpx;
      margin-right: 22rpx;
    }
    .viedo-tip {
      position: absolute;
      bottom: 0;
      width: 240rpx;
      height: 48rpx;
      background-color: rgba(0, 0, 0, 0.14);
      display: flex;
      padding: 0 16rpx;
      > view {
        flex: 1;
        > image {
          width: 22rpx;
          height: 20rpx;
          margin-right: 7rpx;
        }
        > text {
          font-size: 24rpx;
          color: #fff;
        }
      }
    }
  }
  .video-icon-num{
    position: absolute;
    bottom: 8rpx;
    left: 265rpx;
    font-size: 24rpx;
    color: #999;
    >view{
      float: left;
      margin-right: 31rpx;
      >image{
        width: 18rpx;
        height: 22rpx;
        margin-right: 8rpx;
        margin-bottom: -1rpx;
      }
      .pll{
        width: 22rpx;
        height: 21rpx;
      }
    }
  }
  .t-video-text {
    .t-video-text-t {
      font-size: 32rpx;
      color: #252525;
      margin-bottom: 15rpx;
    }
    .t-video-text-b {
      text:nth-child(1) {
        color: #fd553a;
        font-size: 32rpx;
        margin-right: 24rpx;
      }
      text:nth-child(2) {
        color: #c7c7c9;
        font-size: 24rpx;
        text-decoration: line-through;
      }
    }
    .t-video-text-time {
      width: auto;
      height: 48rpx;
      padding: 0 16rpx;
      background-color: #fee9e5;
      line-height: 48rpx;
      font-size: 24rpx;
      color: #fd553a;
      > image {
        width: 20rpx;
        height: 20rpx;
        margin-right: 8rpx;
        margin-bottom: -1rpx;
      }
    }
  }
}
.result-viedo {
  margin-top: 25rpx;
  padding: 0 32rpx;
}
</style>
