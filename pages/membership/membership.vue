<template>
  <view>
    <view class="vip-top">
      <image src="../../static/vip-bg.png" mode="" class="vip-top-bg"></image>
      <view class="vip-top-tit">会员权益</view>
      <view class="vip-user-info">
        <image src="../../static/logo.png" mode="" class="fl"></image>
        <view class="vip-user-dil fl">
          <view class="">用户名</view>
          <view class="">2020-14-13 到期</view>
        </view>
        <view class="vip-btn fr" v-if="isVip === 0" @tap="startVip = true">立即开通</view>
        <view class="vip-btn fr" v-if="isVip === 1" @tap="startVip = true">立即续费</view>
      </view>
      <!-- 权益1 -->
      <view class="qy-one">
        <view class="gupao-bg">GUPAO</view>
        <view class="hr-l"></view>
        <view class="hr-r"></view>
        <view class="qy-top">权益1</view>
        <view class="qy-tip">JAVA P6架构师班优惠券 1 张</view>
        <view class="qy-tip">会员期间将不定期发送优惠券至会员用户账户</view>
        <view class="coupon">
          <image src="/static/coupon.png" mode=""></image>
          <view class="coupon-container">
            <view class="coupon-left">
              <view class="coupon-left-num" :style="{ color: '#fdd100' }">
                <text>7.5~8</text>
                <text>折</text>
              </view>
              <view class="coupon-left-text" :style="{ color: '#fff' }">优惠卷额</view>
            </view>
            <view class="coupon-right" :style="{ color: '#fff' }">
              <view class="coupon-right-one">JAVA P6架构师</view>
              <view class="coupon-right-two">
                <image src="/static/time.png" mode=""></image>
                <text>有效至 2020.20.20</text>
              </view>
              <view class="ckxq">
                <text>查看详情</text>
                <image src="../../static/huise-r.png" mode=""></image>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 权益2 -->
    <view class="qy-two">
      <view class="gupao-bg">GUPAO</view>
      <view class="hr-l"></view>
      <view class="hr-r"></view>
      <view class="qy-top">权益2</view>
      <view class="qy-tip">每季度可免费领取1本书籍</view>
      <view class="qy-tip">本季度可免费领取一下任意一本书籍</view>
      <view class="qy-book">
        <scroll-view class="wuc-tab" scroll-with-animation scroll-x>
          <!-- 滑动数据区域 -->
          <view class="qy-book-con" v-for="index of 4" :key="index" @tap="jump('/pages/membership/bookdetails/bookdetails')">
            <view class="book-mask"><image src="../../static/logo.png" mode=""></image></view>
            <view class="book-tip">Spring 5 核心原理与30个类手写实战</view>
            <view class="book-use-num">
              <image src="../../static/gz.png" mode=""></image>
              <text>666人领取</text>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
    <!-- 权益3 -->
    <view class="qy-three">
      <view class="gupao-bg">GUPAO</view>
      <view class="hr-l"></view>
      <view class="hr-r"></view>
      <view class="qy-top">权益3</view>
      <view class="qy-tip">免费报名训练营所有课程</view>
      <view class="three-card"><image src="../../static/hk1.png" mode=""></image></view>
    </view>
    <!-- 权益4 -->
    <view class="qy-four">
      <view class="gupao-bg">GUPAO</view>
      <view class="hr-l"></view>
      <view class="hr-r"></view>
      <view class="qy-top">权益4</view>
      <view class="qy-tip">解锁往期录播所有课程播放权</view>
      <view class="three-card"><image src="../../static/hk2.png" mode=""></image></view>
    </view>
    <view class="xf-btn" v-if="isVip === 0" @tap="startVip = true">立即开通</view>
    <view class="xf-btn" v-if="isVip === 1" @tap="startVip = true">立即续费</view>
    <!-- 开通/续费会员 -->
    <view class="start-vip" v-show="startVip">
      <view class="start-vip-con">
        <image src="../../static/vip-bg1.png" mode="" class="start-vip-bg"></image>
        <view class="close-mask"><image src="../../static/close2.png" @tap="startVip = false" mode=""></image></view>
        <view class="xf-vip">续费会员</view>
        <image src="../../static/zs.png" mode="" class="zs-vip"></image>
        <view class="vip-price1">VIP学员价：￥199.00</view>
        <view class="vip-price2">非VIP学员价：￥299.00</view>
        <view class="vip-time">
          <image src="../../static/time.png" mode=""></image>
          <text>有效期 2020.02.21 ~ 2021.02.21 (共1年)</text>
        </view>
        <view class="start-vip-btn">确认支付 ￥199.00</view>
      </view>
    </view>
    <!-- 开通/续费成功 -->
    <view class="success-vip" v-show="successVip">
      <view class="success-vip-con">
        <image src="../../static/vip-bg2.png" mode="" class="success-vip-bg"></image>
        <image src="../../static/logo.png" mode="" class="user-tx"></image>
        <image src="../../static/vip.png" mode="" class="vip-icon"></image>
        <view class="success-tit">恭喜您 开通会员成功</view>
        <view class="success-jx">已解锁以下会员权益</view>
        <view class="success-qy">
          <text>权益1</text>
          <text>JAVA P6架构师班优惠券 1 张，会员期间将不定期发送优惠券至会员用户账户</text>
        </view>
        <view class="success-qy">
          <text>权益2</text>
          <text>每季度可免费领取1本书籍</text>
        </view>
        <view class="success-qy">
          <text>权益3</text>
          <text>免费报名训练营所有课程</text>
        </view>
        <view class="success-qy">
          <text>权益4</text>
          <text>解锁往期录播所有课程播放权</text>
        </view>
        <view class="success-inow" @tap="successVip=false">我知道了</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isVip: 0, // 0：不是vip  1：vip还剩10天到期  2：vip时间大于10天
      startVip: false, // 开通会员拟态框
      successVip: true // 成功开通会员拟态框
    };
  }
};
</script>

<style lang="less" scoped>
.vip-top {
  height: 370rpx;
  position: relative;
  padding-top: 70rpx;
  .vip-top-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .vip-top-tit {
    font-size: 36rpx;
    color: #fdd100;
    text-align: center;
  }
  .vip-user-info {
    height: 72rpx;
    padding: 0 32rpx;
    margin-top: 45rpx;
    > image {
      width: 72rpx;
      height: 72rpx;
      border-radius: 50%;
      margin-right: 18rpx;
    }
    .vip-user-dil {
      > view:nth-of-type(1) {
        color: #fff;
        font-size: 30rpx;
      }
      > view:nth-of-type(2) {
        color: #c7c7c9;
        font-size: 24rpx;
      }
    }
    .vip-btn {
      width: 184rpx;
      height: 64rpx;
      border-radius: 52rpx;
      background: linear-gradient(to right, #fdd100, #f18300);
      line-height: 64rpx;
      text-align: center;
      color: #fff;
      font-size: 28rpx;
    }
  }
}
.qy-one {
  width: 686rpx;
  height: 504rpx;
  position: absolute;
  z-index: 3;
  border-radius: 16rpx;
  background-color: #fff8f1;
  box-shadow: 0 0 24rpx rgba(100, 100, 100.05);
  bottom: -424rpx;
  left: 32rpx;
  padding: 48rpx 32rpx 0;
  .qy-top {
    width: 104rpx;
    height: 48rpx;
    border-radius: 56rpx;
    background: linear-gradient(to right, #4a4a4a, #222);
    margin: 0 auto;
    color: #fdd100;
    font-size: 28rpx;
    line-height: 48rpx;
    text-align: center;
    margin-bottom: 25rpx;
  }
  .qy-tip {
    font-size: 28rpx;
    color: #7a736c;
    text-align: center;
    line-height: 46rpx;
  }
}
.coupon {
  width: 622rpx;
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
        padding-left: 20rpx;
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
      padding-left: 30rpx;
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
      .ckxq {
        font-size: 20rpx;
        color: #fff;
        margin-top: 40rpx;
        margin-left: 260rpx;
        > image {
          width: 30rpx;
          height: 30rpx;
          margin-bottom: -6rpx;
        }
      }
    }
  }
}

.qy-two {
  position: relative;
  margin-left: 32rpx;
  margin-top: 480rpx;
  width: 686rpx;
  height: 714rpx;
  z-index: 3;
  border-radius: 16rpx;
  background-color: #fff8f1;
  box-shadow: 0 0 24rpx rgba(100, 100, 100.05);
  padding: 48rpx 32rpx 0;
  .qy-top {
    width: 104rpx;
    height: 48rpx;
    border-radius: 56rpx;
    background: linear-gradient(to right, #4a4a4a, #222);
    margin: 0 auto;
    color: #fdd100;
    font-size: 28rpx;
    line-height: 48rpx;
    text-align: center;
    margin-bottom: 25rpx;
  }
  .qy-tip {
    font-size: 28rpx;
    color: #7a736c;
    text-align: center;
    line-height: 46rpx;
  }
}
.hr-l {
  width: 180rpx;
  height: 2rpx;
  background-color: #eedecf;
  position: absolute;
  top: 72rpx;
  left: 94rpx;
}
.hr-r {
  width: 180rpx;
  height: 2rpx;
  background-color: #eedecf;
  position: absolute;
  top: 72rpx;
  right: 94rpx;
}
.gupao-bg {
  font-size: 60rpx;
  text-align: center;
  position: absolute;
  top: 80rpx;
  left: 230rpx;
  color: #ececec;
  z-index: -1;
}
.qy-book {
  margin-top: 37rpx;
  white-space: nowrap;
}
.qy-book-con {
  display: inline-block;
  width: 270rpx;
  height: 416rpx;
  margin-right: 24rpx;
}
scroll-view {
  height: 416rpx;
}
.book-mask {
  width: 270rpx;
  height: 270rpx;
  background-color: #f9f0e7;
  border-radius: 16rpx;
  text-align: center;
  padding-top: 16rpx;
  > image {
    width: 88%;
    height: 94%;
  }
}
.book-tip {
  white-space: normal;
  margin-top: 8rpx;
  font-size: 28rpx;
  height: 84rpx;
  color: #252525;
}
.book-use-num {
  font-size: 24rpx;
  color: #999;
  > image {
    margin-right: 7rpx;
    width: 18rpx;
    height: 18rpx;
  }
}

.qy-three,
.qy-four {
  position: relative;
  margin-left: 32rpx;
  margin-top: 56rpx;
  width: 686rpx;
  height: 460rpx;
  z-index: 3;
  border-radius: 16rpx;
  background-color: #fff8f1;
  box-shadow: 0 0 24rpx rgba(100, 100, 100.05);
  padding: 48rpx 32rpx 0;
  .qy-top {
    width: 104rpx;
    height: 48rpx;
    border-radius: 56rpx;
    background: linear-gradient(to right, #4a4a4a, #222);
    margin: 0 auto;
    color: #fdd100;
    font-size: 28rpx;
    line-height: 48rpx;
    text-align: center;
    margin-bottom: 25rpx;
  }
  .qy-tip {
    font-size: 28rpx;
    color: #7a736c;
    text-align: center;
    line-height: 46rpx;
  }
}
.three-card {
  margin-top: 41rpx;
  width: 622rpx;
  height: 202rpx;
  position: relative;
  > image {
    width: 100%;
    height: 100%;
    border-radius: 16rpx;
  }
}
.xf-btn {
  width: 686rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  color: #fff;
  font-size: 32rpx;
  margin: 56rpx auto;
  border-radius: 51rpx;
  background: linear-gradient(to right, #fdd100, #f18300);
}
.start-vip {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  .start-vip-con {
    width: 636rpx;
    height: 716rpx;
    margin: 309rpx auto 0;
    position: relative;
    padding-top: 40rpx;
    .start-vip-bg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: 20rpx;
    }
    .close-mask {
      position: absolute;
      top: 32rpx;
      right: 32rpx;
      width: 22rpx;
      height: 22rpx;
      > image {
        width: 100%;
        height: 100%;
        margin-bottom: 8rpx;
      }
    }
    .xf-vip {
      font-size: 36rpx;
      color: #fdd100;
      text-align: center;
    }
    .zs-vip {
      width: 202rpx;
      height: 187rpx;
      margin-top: 40rpx;
      margin-left: 217rpx;
    }
    .vip-price1 {
      text-align: center;
      font-size: 32rpx;
      color: #fdd100;
      margin-top: 29rpx;
    }
    .vip-price2 {
      text-align: center;
      font-size: 26rpx;
      color: #fff;
      margin-top: 12rpx;
      text-decoration: line-through;
    }
    .vip-time {
      height: 64rpx;
      background-color: #171717;
      margin-top: 29rpx;
      color: #fff;
      line-height: 64rpx;
      font-size: 22rpx;
      > image {
        width: 20rpx;
        height: 20rpx;
        margin-left: 97rpx;
        margin-right: 8rpx;
        margin-bottom: -2rpx;
      }
    }
    .start-vip-btn {
      width: 572rpx;
      height: 80rpx;
      border-radius: 51rpx;
      background: linear-gradient(to right, #fdd100, #f18300);
      line-height: 80rpx;
      font-size: 32rpx;
      color: #fff;
      text-align: center;
      margin-left: 32rpx;
      margin-top: 48rpx;
    }
  }
}
.success-vip {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
}
.success-vip-con {
  width: 636rpx;
  height: 898rpx;
  margin-top: 218rpx;
  position: relative;
  margin-left: 57rpx;
  padding-top: 48rpx;
  .success-vip-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 20rpx;
  }
  .user-tx {
    width: 144rpx;
    height: 144rpx;
    border-radius: 50%;
    margin-left: 246rpx;
  }
  .vip-icon {
    position: absolute;
    top: 144rpx;
    right: 246rpx;
    width: 44rpx;
    height: 44rpx;
  }
  .success-tit {
    text-align: center;
    color: #fdd100;
    font-size: 32rpx;
    margin-top: 35rpx;
  }
  .success-jx {
    text-align: center;
    color: #fff;
    font-size: 26rpx;
    margin-top: 12rpx;
    margin-bottom: 52rpx;
  }
  .success-qy {
    margin-bottom: 40rpx;
    padding: 0 34rpx;
    font-size: 28rpx;
    line-height: 50rpx;
    > text:nth-of-type(1) {
      color: #fdd100;
      margin-right: 10rpx;
    }
    > text:nth-of-type(2) {
      color: #fff;
    }
  }
  .success-inow {
    width: 572rpx;
    height: 80rpx;
    border-radius: 51rpx;
    background: linear-gradient(to right, #fdd100, #f18300);
    line-height: 80rpx;
    font-size: 32rpx;
    color: #fff;
    text-align: center;
    margin-left: 32rpx;
    margin-top: 48rpx;
  }
}
</style>
