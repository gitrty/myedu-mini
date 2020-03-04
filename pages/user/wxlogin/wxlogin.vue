<template>
  <view>
    <toyoBar :title="'微信授权'"></toyoBar>
    <view>
      <view>
        <view>
          <view class="header"><image src="/static/wx_login.png"></image></view>
          <view class="content">
            <view>申请获取以下权限</view>
            <text>获得你的公开信息(昵称，头像、地区等)</text>
          </view>

          <button class="bottom" type="primary" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">授权登录</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { util } from '@api/http';
export default {
  data() {
    return {};
  },
  methods: {
    async wxGetUserInfo() {
      let _this = this;
      uni.getUserInfo({
        provider: 'weixin',
        success: async function(infoRes) {
          let nickName = infoRes.userInfo.nickName; //昵称
          let avatarUrl = infoRes.userInfo.avatarUrl; //头像
          const { code } = await util.login(); // code 码
          uni.setStorageSync('nickName', nickName); //记录是否第一次授权  false:表示不是第一次授权
          uni.setStorageSync('avatarUrl', avatarUrl); //记录是否第一次授权  false:表示不是第一次授权
          uni.setStorageSync('code', code); //记录是否第一次授权  false:表示不是第一次授权
          uni.navigateBack();
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  margin: 90rpx 0 90rpx 50rpx;
  border-bottom: 1px solid #ccc;
  text-align: center;
  width: 650rpx;
  height: 300rpx;
  line-height: 450rpx;
}

.header image {
  width: 200rpx;
  height: 200rpx;
}

.content {
  margin-left: 50rpx;
  margin-bottom: 90rpx;
}

.content text {
  display: block;
  color: #9d9d9d;
  margin-top: 40rpx;
}

.bottom {
  border-radius: 80rpx;
  margin: 70rpx 50rpx;
  font-size: 35rpx;
}
</style>
