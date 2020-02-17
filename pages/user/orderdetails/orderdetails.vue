<template>
  <view>
    <toyoBar :title="'订单详情'"></toyoBar>
    <view class="order-details">
      <view class="training-video">
        <view class="training-video-l"><image src="/static/logo.png" mode=""></image></view>
        <view class="t-video-text"><view class="t-video-text-t">并发编程从入门到入魔</view></view>
      </view>
      <view class="num-time">
        <view class="num-time-1">订单编号 6666666666666</view>
        <view class="">下单时间 2020-20-20 17:30</view>
      </view>
      <view class="order-price">
        <view class="order-price-one">
          <text>商品金额</text>
          ￥199.00
        </view>
        <view class="order-price-two">
          <text>实付款</text>
          ￥199.00
        </view>
        <view class="order-btns clearfix">
          <view class="btn-rate fr" v-if="true" @tap="jump('/pages/findgoodlessons/evaluationcourse/evaluationcourse')">评价课程</view>
          <view class="btn-rate fr" v-if="true" @tap="jump('/pages/user/logistics/logistics')">查看物流</view>
          <view class="btn-cancel fr" v-if="true">取消报名</view>
          <view class="btn-del fr" v-if="false">删除订单</view>
        </view>
      </view>
    </view>
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
.order-details {
  padding: 40rpx 32rpx 0;
}
.training-video {
  width: 686rpx;
  height: 174rpx;
  display: flex;
  border-bottom: 2rpx solid #ececec;
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
.num-time {
  width: 686rpx;
  height: 170rpx;
  border-bottom: 2rpx solid #ececec;
  font-size: 28rpx;
  color: #666;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .num-time-1 {
    margin-bottom: 20rpx;
  }
}
.order-price {
  width: 686rpx;
  height: 220rpx;
  font-size: 28rpx;
  padding-top: 40rpx;
  .order-price-one {
    color: #666;
    text {
      display: inline-block;
      width: 130rpx;
    }
  }
  .order-price-two {
    margin-top: 18rpx;
    color: #000;
    text {
      display: inline-block;
      width: 130rpx;
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
