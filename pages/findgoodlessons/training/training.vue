<template>
  <view>
    <toyoBar :title="'训练营'"></toyoBar>
    <view class="top-tab">
      <view :class="{ active: tabBar }" @tap="tabBar = true">
        最近课程
        <view v-show="tabBar"></view>
      </view>
      <view :class="{ active: !tabBar }" @tap="tabBar = false">
        往期课程
        <view v-show="!tabBar"></view>
      </view>
    </view>
    <!-- 1 - 最近课程 -->
    <view class="lately" v-show="tabBar">
      <view class="training-video" v-for="index of 3" :key="index" @tap="jump('/pages/findgoodlessons/coursedetails/coursedetails')">
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
    </view>
    <!-- 2 - 往期课程 -->
    <view class="past" v-show="!tabBar">
      <view class="training-video" v-for="index of 5" :key="index" @tap="jump('/pages/findgoodlessons/coursedetails/coursedetails')">
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
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabBar: true
    };
  }
};
</script>

<style lang="less" scoped>
.top-tab {
  background-color: #fff;
  position: fixed;
  z-index: 2;
  width: 750rpx;
  top: 112rpx;
  height: 88rpx;
  padding: 0 174rpx;
  line-height: 80rpx;
  font-size: 32rpx;
  color: #999;
  > view {
    height: 100%;
    position: relative;
    > view {
      width: 80rpx;
      height: 8rpx;
      background: linear-gradient(to right, #fdd000, #f08300);
      position: absolute;
      bottom: 0rpx;
      left: 50%;
      border-radius: 14rpx;
      margin-left: -40rpx;
    }
  }
  > view:nth-child(1) {
    float: left;
  }
  > view:nth-child(2) {
    float: right;
  }
  .active {
    color: #333;
    // border-bottom: 6rpx solid #fd553a;
  }
}
.lately {
  padding: 0 32rpx;
  margin-top: 112rpx;
}
.past {
  padding: 0 32rpx;
  margin-top: 112rpx;
}
.training-video {
  width: 686rpx;
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
</style>
