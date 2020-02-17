<template>
	<view>
		<toyoBar :title="'录播视频'"></toyoBar>
    <view class="ecl">
      <view class="training-video" v-for="(item, index) in learningList2" :key="index">
        <view class="training-video-l"><image src="/static/logo.png" mode=""></image></view>
        <view class="t-video-text">
          <view class="t-video-text-t">并发编程从入门到入魔</view>
          <view class="t-video-tip">
            <image src="/static/gkz.png" mode="" class="gkz"></image>
            <text>观看至64%</text>
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
				learningList2:[1,2,3,4,5]
			};
		}
	}
</script>

<style lang="less" scoped>
.ecl {
  padding: 0 32rpx;
}
.training-video {
  position: relative;
  margin-top: 40rpx;
  width: 686rpx;
  height: 134rpx;
  margin-bottom: 42rpx;
  display: flex;
  .training-video-l {
    position: relative;
    > image {
      width: 240rpx;
      height: 134rpx;
      margin-right: 22rpx;
    }
  }
  .t-video-text {
    .t-video-text-t {
      font-size: 32rpx;
      color: #252525;
      margin-bottom: 15rpx;
    }
    .t-video-tip {
      position: absolute;
      left: 262rpx;
      bottom: 10rpx;
      font-size: 24rpx;
      color: #999;
      > image {
        width: 24rpx;
        height: 24rpx;
        margin-bottom: -1rpx;
        margin-right: 8rpx;
      }
      .gkz{
        width: 26rpx;
        height: 20rpx;
      }
    }
  }
}
</style>
