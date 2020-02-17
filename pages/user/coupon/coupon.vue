<template>
  <view>
    <toyoBar :title="'我的优惠券'"></toyoBar>
    <view class="coupon" v-for="(item, index) in couponList" :key="index">
      <image :src="item.isUse ? '/static/coupon-use.png' : '/static/coupon.png'" mode=""></image>
      <view class="coupon-container">
        <view class="coupon-left">
          <view class="coupon-left-num" :style="{ color: item.isUse ? '#999' : '#fdd100' }">
            <text>7.5~8</text>
            <text>折</text>
          </view>
          <view class="coupon-left-text" :style="{ color: item.isUse ? '#999' : '#fff' }">优惠卷额</view>
        </view>
        <view class="coupon-right" :style="{ color: item.isUse ? '#999' : '#fff' }">
          <view class="coupon-right-one">java p6架构师</view>
          <view class="coupon-right-two">
            <image src="../../../static/time.png" mode=""></image>
            <text>有效至 2020.20.20</text>
          </view>
          <view class="coupon-right-three" v-if="!item.isUse">立即使用</view>
          <view class="coupon-right-three2" v-if="item.isUse">已使用</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // isUse - 优惠券是否已使用
      couponList: [{ isUse: false }, { isUse: true }, { isUse: true }]
    };
  }
};
</script>

<style lang="less" scoped>
.coupon {
  width: 686rpx;
  height: 200rpx;
  margin: 28rpx auto 48rpx;
  position: relative;
  > image {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
  }
  .coupon-container {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    display: flex;
    .coupon-left {
      width: 220rpx;
      height: 100%;
      text-align: center;
      .coupon-left-num {
        padding-top: 52rpx;
        width: 100%;
        font-size: 40rpx;
        > text:nth-of-type(2) {
          font-size: 20rpx;
          vertical-align: text-top;
          line-height: 40rpx;
          margin-left: 5rpx;
        }
      }
      .coupon-left-text {
        color: #fff;
        font-size: 26rpx;
        margin-top: 5rpx;
      }
    }
    .coupon-right {
      width: 466rpx;
      height: 100%;
      padding: 0 20rpx;
      .coupon-right-one {
        padding-top: 30rpx;
        font-size: 32rpx;
      }
      .coupon-right-two {
        margin-top: 10rpx;
        font-size: 22rpx;
        > image {
          width: 20rpx;
          height: 20rpx;
          margin-bottom: -2rpx;
          margin-right: 8rpx;
        }
      }
      .coupon-right-three {
        width: 152rpx;
        height: 56rpx;
        border-radius: 33rpx;
        background: linear-gradient(to right, #fdd100, #f18300);
        margin-top: 10rpx;
        margin-left: 260rpx;
        font-size: 28rpx;
        line-height: 56rpx;
        text-align: center;
      }
      .coupon-right-three2 {
        width: 152rpx;
        height: 56rpx;
        margin-top: 10rpx;
        margin-left: 260rpx;
        font-size: 28rpx;
        line-height: 56rpx;
        text-align: center;
      }
    }
  }
}
</style>
