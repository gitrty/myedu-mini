<template>
	<view>
		<toyoBar :title="'确认订单'"></toyoBar>
    <view class="order-details">
      <view class="training-video">
        <view class="training-video-l"><image src="/static/logo.png" mode=""></image></view>
        <view class="t-video-text"><view class="t-video-text-t">并发编程从入门到入魔</view></view>
      </view>
      <view class="num-time">
        <view class="num-time-1"><text>商品金额</text> ￥199.00</view>
        <view class=""><text>支付方式</text> 微信支付</view>
      </view>
    </view>
    <view class="purchase-btn">
      确认支付 ￥199.00
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
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
  >view{
    >text{
      display: inline-block;
      width: 160rpx;
    }
  }
}
.purchase-btn{
  width: 686rpx;
  height: 80rpx;
  border-radius: 51rpx;
  background: linear-gradient(to right, #fdd100, #f18300);
  margin: 88rpx auto 0;
  line-height: 80rpx;
  text-align: center;
  font-size: 32rpx;
  color: #fff;
}
</style>
