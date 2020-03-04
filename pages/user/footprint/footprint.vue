<template>
  <view>
    <toyoBar :title="'我的足迹'"></toyoBar>
    <view class="collection" v-for="index of 0" :key="index">
      <!-- 类型1：训练营课程 -->
      <view class="training-video" v-if="true" @tap="jump('/pages/findgoodlessons/coursedetails/coursedetails')">
        <view class="training-video-l">
          <image src="/static/logo.png" mode=""></image>
          <view class="viedo-tip">
            <view class="">
              <image src="/static/xxrs.png" mode=""></image>
              <text>6666</text>
            </view>
            <view class="">
              <image src="/static/pll.png" mode=""></image>
              <text>6666</text>
            </view>
          </view>
        </view>
        <view class="t-video-text">
          <view class="t-video-text-t">并发编程从入门到入魔</view>
          <!-- 显示价格 -->
          <view class="t-video-text-b" v-if="true">
            <text>￥199.00</text>
            <!-- <text>￥199.00</text>  -->
          </view>
          <!-- 显示开启时间 -->
          <view class="t-video-text-time" v-if="false">
            <image src="/static/logo.png" mode=""></image>
            <text>1月4日开启 剩余12天</text>
          </view>
        </view>
      </view>
      <!-- 类型2：视频 -->
      <view class="t-r-viedo" v-if="true">
        <view class="training-video" @tap="jump('/pages/findgoodlessons/videodetails/videodetails')">
          <view class="training-video-l">
            <image src="/static/logo.png" mode=""></image>
            <view class="video-free" v-if="index == 1">免费看</view>
          </view>
          <view class="t-video-text"><view class="t-video-text-t">并发编程从入门到入魔并发编程从入门到入魔</view></view>
          <view class="video-icon-num">
            <view class="">
              <image src="/static/play.png" mode=""></image>
              <text>6666</text>
            </view>
            <view class="">
              <image src="/static/pll-2.png" mode="" class="pll"></image>
              <text>7777</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 无数据 -->
    <toyoNoInfo :text="'暂无相关足迹'" :imgSrc="'/static/z-wzj.png'" v-if="true"></toyoNoInfo>
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
.collection {
  padding: 0 32rpx;
  margin-top: 28rpx;
}
.training-video {
  width: 655rpx;
  height: 134rpx;
  margin-bottom: 42rpx;
  // background-color: gold;
  display: flex;
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
.t-r-viedo {
  .training-video {
    position: relative;
    width: 686rpx;
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
  }
  .video-icon-num {
    position: absolute;
    bottom: 8rpx;
    left: 265rpx;
    font-size: 24rpx;
    color: #999;
    > view {
      float: left;
      margin-right: 31rpx;
      > image {
        width: 18rpx;
        height: 22rpx;
        margin-right: 8rpx;
        margin-bottom: -1rpx;
      }
      .pll {
        width: 22rpx;
        height: 21rpx;
      }
    }
  }
}
</style>
