<template>
  <view>
    <toyoBar :title="'领取书籍'"></toyoBar>
    <view class="receive-top">
      <image src="../../../static/logo.png" mode=""></image>
      <text>Spring 5 核心原理与30个类手写实战</text>
    </view>
    <view class="receive-con" @tap="rest = true">
      <view class="receive-con-tit">配送信息</view>
      <view class="receive-con-con clearfix">
        <text class="fl">{{userInfo.name}}</text>
        <text class="fl">{{userInfo.tel}}</text>
        <image src="../../../static/huise-r.png" mode="" class="fr"></image>
      </view>
      <view class="receive-con-bottom">
        <text>{{ userInfo.address[0] }}</text>
        <text>{{ userInfo.address[1] }}</text>
        <text>{{ userInfo.address[2] }}</text>
        <text>{{ userInfo.detailsAddress }}</text>
        <text></text>
      </view>
    </view>
    <view class="receive-btn">确认领取</view>

    <!-- 修改配送信息 -->
    <view class="comment-container" v-show="rest">
      <view class="comment-mask" @tap="rest = false"></view>
      <view class="comment-container-com">
        <view class="rest-top clearfix">
          <text class="fl">配送信息</text>
          <image src="../../../static/close.png" mode="" class="fr" @tap="rest = false"></image>
        </view>
        <view class="rest-con clearfix">
          <view class="fl">收件人</view>
          <input type="text" value="" v-model="userInfo.name" class="fr" />
        </view>
        <view class="rest-con clearfix">
          <view class="fl">联系电话</view>
          <input type="text" value="" v-model="userInfo.tel" class="fr" />
        </view>
        <view class="rest-con clearfix">
          <view class="fl">所在地区</view>
          <picker mode="region" @change="bindPickerChange">
            <view class="fr sel-info">
              <text>{{ userInfo.address[0] }}</text>
              <text>{{ userInfo.address[1] }}</text>
              <text>{{ userInfo.address[2] }}</text>
            </view>
          </picker>
        </view>
        <view class="rest-con clearfix">
          <view class="fl">详细地址</view>
          <input type="text" v-model="userInfo.detailsAddress" value="" class="fr" />
        </view>
        <view class="rest-btn" @tap="rest=false">确认保存</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      rest: true, // 修改配送信息拟态框
      userInfo: {
        name: '用户名',
        tel: 17389599646,
        address: ['湖南省', '长沙市', '岳麓区'],
        detailsAddress: '芯城科技园2期15栋'
      }
    };
  },
  methods: {
    bindPickerChange(e) {
      this.userInfo.address = e.detail.value
    }
  }
};
</script>

<style lang="less" scoped>
.receive-top {
  height: 134rpx;
  padding: 0 32rpx;
  margin-top: 40rpx;
  display: flex;
  > image {
    width: 240rpx;
    height: 100%;
    margin-right: 23rpx;
  }
  > text {
    font-size: 32rpx;
    color: #252525;
  }
}
.receive-con {
  // height: 222rpx;
  background-color: #f8f8f8;
  margin-top: 38rpx;
  padding: 32rpx;
  .receive-con-tit {
    font-size: 30rpx;
    color: #252525;
  }
  .receive-con-con {
    margin-top: 36rpx;
    font-size: 28rpx;
    color: #333;
    text:nth-of-type(1) {
      margin-right: 48rpx;
    }
    > image {
      width: 30rpx;
      height: 30rpx;
      margin-bottom: -2rpx;
    }
  }
  .receive-con-bottom {
    margin-top: 16rpx;
    font-size: 28rpx;
    color: #666;
    text {
      margin-right: 12rpx;
    }
  }
}
.receive-btn {
  width: 686rpx;
  height: 80rpx;
  border-radius: 51rpx;
  background: linear-gradient(to right, #fdd100, #f18300);
  line-height: 80rpx;
  text-align: center;
  color: #fff;
  font-size: 32rpx;
  margin: 88rpx auto 0;
}
.comment-container {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  .comment-mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .comment-container-com {
    width: 750rpx;
    height: 760rpx;
    background-color: #fff;
    border-radius: 32rpx 32rpx 0 0;
    position: absolute;
    bottom: 0;
    padding: 33rpx 32rpx 0;
  }
}
.rest-top {
  font-size: 30rpx;
  color: #252525;
  > image {
    width: 23rpx;
    height: 23rpx;
  }
}
.rest-con {
  height: 115rpx;
  border-bottom: 2rpx solid #e8e8e8;
  line-height: 114rpx;
  font-size: 30rpx;
  > view:nth-of-type(1) {
    height: 100%;
    color: #666;
  }
  .sel-info {
    height: 100%;
    color: #333;
    text {
      margin-left: 10rpx;
    }
  }
  > input {
    width: 540rpx;
    text-align: right;
    height: 100%;
    color: #333;
  }
}
.rest-btn {
  width: 686rpx;
  height: 80rpx;
  border-radius: 51rpx;
  background: linear-gradient(to right, #fdd100, #f18300);
  line-height: 80rpx;
  text-align: center;
  color: #fff;
  font-size: 32rpx;
  margin: 40rpx auto 0;
}
</style>
