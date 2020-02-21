<template>
  <view>
    <toyoBar :title="'我的订单'"></toyoBar>
    <view class="order" v-for="index of 4" :key="index" v-if="false" @tap="jump('/pages/user/orderdetails/orderdetails')">
      <view class="training-video">
        <view class="training-video-l"><image src="/static/logo.png" mode=""></image></view>
        <view class="t-video-text">
          <view class="t-video-text-t">并发编程从入门到入魔</view>
          <!-- 显示价格 -->
          <view class="t-video-text-b" v-if="true"><text>￥199.00</text></view>
        </view>
      </view>
      <view class="order-btns clearfix">
        <view class="btn-rate fr" v-if="true" @tap="jump('/pages/findgoodlessons/evaluationcourse/evaluationcourse')">评价课程</view>
        <view class="btn-rate fr" v-if="true" @tap="jump('/pages/user/logistics/logistics')">查看物流</view>
        <view class="btn-cancel fr" v-if="true">取消报名</view>
        <view class="btn-del fr" v-if="false">删除订单</view>
      </view>
    </view>
    <!-- 无数据 -->
     <toyoNoInfo :text="'暂无相关订单'" :imgSrc="'/static/z-wdd.png'" v-if="true"></toyoNoInfo>
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
.order {
  width: 686rpx;
  height: 300rpx;
  margin: 0 auto;
  border-bottom: 2rpx solid #ececec;
  padding-top: 40rpx;
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
.order-btns {
  height: 56rpx;
  margin-top: 24rpx;
  > view {
    width: 152rpx;
    height: 56rpx;
    border-radius: 33rpx;
    border: 2rpx solid #c7c7c9;
    line-height: 52rpx;
    text-align: center;
    font-size: 28rpx;
    margin-left: 32rpx;
  }
  .btn-rate {
    border: none;
    color: #fff;
    background: linear-gradient(to right, #fdd000, #f08300);
    line-height: 56rpx;
  }
  .btn-cancel {
    color: #999;
  }
  .btn-del {
    color: #999;
  }
}
</style>
