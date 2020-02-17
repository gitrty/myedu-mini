<template>
	<view>
		<!-- 自定义顶部 -->
    <view class="top-bar" :style="{'height':112+pTop+'rpx','background-color':'#fff'}">
      <view class="" ></view>
      <view class="top-select" :style="{'margin-top':pTop+'rpx'}" @tap="jump('/pages/findgoodlessons/select/select')">
        <image src="../../static/ss-2.png" mode=""></image>
        <text>人工智能</text>
      </view>
    </view>
    <!-- 1 - 报名课程 -->
    <view class="sign-up"  :style="{'margin-top':112+pTop+'rpx'}">
      <view class="sign-up-title clearfix" >
        <text class="fl">报名课程</text>
        <view class="fr" v-if="learningList1.length>4" @tap="jump('/pages/learningcenter/everycurriculum/everycurriculum')">
          <text>全部{{learningList1.length}}个</text>
          <image src="../../static/huise-r.png" mode=""></image>
        </view>
      </view>
      <!-- 数据区域 -->
      <view class="training-video" v-for="(item,index) in learningList1" :key="index" >
        <view class="training-video-l">
          <image src="/static/logo.png" mode=""></image>
        </view>
        <view class="t-video-text">
          <view class="t-video-text-t">
            并发编程从入门到入魔
          </view>
          <view class="t-video-tip">
            <image src="../../static/yxx.png" mode=""></image>
            <text>已学习64%</text>
          </view>
        </view>
        <!-- 直播状态 -->
        <view class="learning-now" v-if="true">
          <text>直播中</text>
          <image src="../../static/play-fff.png" mode=""></image>
        </view>
      </view>
    </view>
    <!-- 2 - 录播视频 -->
    <view class="sign-up"  :style="{'margin-top':'40rpx'}">
      <view class="sign-up-title clearfix" >
        <text class="fl">录播视频</text>
        <view class="fr" v-if="learningList1.length>4" @tap="jump('/pages/learningcenter/everyrecord/everyrecord')">
          <text>全部{{learningList1.length}}个</text>
          <image src="../../static/huise-r.png" mode=""></image>
        </view>
      </view>
      <!-- 数据区域 -->
      <view class="training-video" v-for="(item,index) in learningList2" :key="index" >
        <view class="training-video-l">
          <image src="/static/logo.png" mode=""></image>
        </view>
        <view class="t-video-text">
          <view class="t-video-text-t">
            并发编程从入门到入魔
          </view>
          <view class="t-video-tip">
            <image src="../../static/gkz.png" mode="" class="gkz"></image>
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
				pTop:0,
        learningList1:[1,2,3,4,5],
        learningList2:[1,2,3,4,5]
			};
		},
    created() {
      let _this = this;
      uni.getSystemInfo({
        success: function(res) {
          // 状态栏高度
          _this.pTop = res.statusBarHeight + 20;
        }
      });
    }
	}
</script>

<style lang="less" scoped>
.top-bar {
  padding-top: 24rpx;
  height: 112rpx;
  width: 750rpx;
  position: fixed;
  z-index: 2;
  top: 0;
  background-color: #fff;
  padding-left: 32rpx;
  .top-select {
    width: 490rpx;
    height: 64rpx;
    background-color: #f8f8f8;
    border-radius: 32rpx;
    color: #999;
    font-size: 24rpx;
    line-height: 64rpx;
    padding-left: 40rpx;
    image {
      width: 22rpx;
      height: 22rpx;
      margin-bottom: -1rpx;
      margin-right: 18rpx;
    }
  }
}
.sign-up{
  padding: 0 32rpx;
  .sign-up-title{
    margin-bottom: 60rpx;
    height: 50rpx;
    line-height: 50rpx;
    font-size: 36rpx;
    color: #333;
    padding-top: 20rpx;
    >view{
      font-size: 28rpx;
      color: #999;
      >image{
        width: 30rpx;
        height: 30rpx;
        margin-bottom: -2rpx;
      }
    }
    
  }
}
 .training-video{
    position: relative;
    margin-top: 40rpx;
    width: 686rpx;
    height: 134rpx;
    margin-bottom: 42rpx;
    display: flex;
   .training-video-l{
     position: relative;
     >image{
       width: 240rpx;
       height: 134rpx;
       margin-right: 22rpx;
     }
   }
   .t-video-text{
     .t-video-text-t{
       font-size: 32rpx;
       color: #252525;
       margin-bottom: 15rpx;
     }
     .t-video-tip{
       position: absolute;
       left: 262rpx;
       bottom: 10rpx;
       font-size: 24rpx;
       color: #999;
       >image{
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
   .learning-now{
     position: absolute;
     top: -2rpx;
     left: -6rpx;
     width: 108rpx;
     height: 32rpx;
     border-radius: 53rpx;
     background: linear-gradient(to right, #fdd100, #f18300);
     line-height: 26rpx;
     text-align: center;
    >image{
      width: 18rpx;
      height: 18rpx;
      margin-bottom: -1rpx;
    }
    >text{
      margin: 4rpx;
      color: #fff;
      font-size: 20rpx;
    }
   }
  }
</style>
