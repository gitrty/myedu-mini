<template>
	<view class="evaluation">
     <toyoBar :title="'评价课程'"></toyoBar>
     <view class="training-video">
       <view class="training-video-l">
         <image src="/static/logo.png" mode=""></image>
       </view>
       <view class="t-video-text">
         <view class="t-video-text-t">
           并发编程从入门到入魔
         </view>
       </view>
     </view>
     <view class="eva-rate">
       <uniRate size="54" value="0" margin="13"></uniRate>
     <!--  <view class="rate-text">
         <text>很差</text>
         <text>差</text>
         <text>一般</text>
         <text>满意</text>
         <text>很满意</text>
       </view> -->
     </view>
     <view class="eva-text">
       <textarea value="" placeholder="请输入对此课程的评价" fixed/>
     </view>
     <view class="eva-sub">
       确认评价
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
  .evaluation{
    height: 100%;
    position: relative;
  }
 .training-video{
   margin-top: 40rpx;
   padding: 0 32rpx;
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
   }
  }
  .eva-rate{
    width: 686rpx;
    height: 145rpx;
    margin: 40rpx auto 0;
    border-top: 2rpx solid #ececec;
    border-bottom: 2rpx solid #ececec;
    padding-top: 60rpx;
    .rate-text{
      margin-top: 30rpx;
      color: #fdd100;
      font-size: 28rpx;
      margin-left: 12rpx;
      text{
        display: inline-block;
        width: 134rpx;
        text-align: center;
      }
    }
  }
  .eva-text{
    width: 686rpx;
    margin: 35rpx auto 0;
    height: 400rpx;
    textarea{
      width: 686rpx;
      height: 400rpx;
    }
  }
  .eva-sub{
    width: 686rpx;
    margin: 60rpx auto 0;
    height: 80rpx;
    border-radius: 51rpx;
    background: linear-gradient(to right, #fdd100, #f18300);
    color: #fff;
    font-size: 32rpx;
    line-height: 80rpx;
    text-align: center;
  }
</style>
