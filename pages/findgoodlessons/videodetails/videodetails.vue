<template>
  <view :style="{height:comment?'100%':'auto',overflow:comment?'hidden':'visible'}">
    <toyoBar :title="'视频详情'"></toyoBar>
    <!-- 视频图片 -->
    <view class="viedo-image">
      <image src="../../../static/logo.png" mode=""></image>
      <view class="mask-play">
        <image src="../../../static/logo.png" mode=""></image>
        <text>使用流量播放，约666M</text>
      </view>
    </view>
    <!-- 视频标题 -->
    <view class="viedo-title">
      <view class="">1小时快速搭建可视化项目</view>
      <view class="video-icon-num">
        <view class="">
          <image src="/static/logo.png" mode=""></image>
          <text>6666播放量</text>
        </view>
        <view class="">
          <image src="/static/logo.png" mode=""></image>
          <text>7777条评论</text>
        </view>
      </view>
    </view>
    <view class="title-hr"></view>
    <!-- 相关视频 -->
    <view class="related-viedo">
      <view class="related-title">
        <view class="">相关视频</view>
        <view class="">
          查看全部
          <image src="../../../static/huise-r.png" mode=""></image>
        </view>
      </view>
      <view class="related-content">
        <scroll-view class="wuc-tab" scroll-with-animation scroll-x>
          <!-- 滑动数据区域 -->
          <view class="con-viedo" v-for="index of 5" :key="index">
            <view class="training-video-l">
              <image src="/static/logo.png" mode=""></image>
              <view class="viedo-tip">
                <view class="">
                  <image src="/static/logo.png" mode=""></image>
                  <text>6666</text>
                </view>
                <view class="">
                  <image src="/static/logo.png" mode=""></image>
                  <text>6666</text>
                </view>
              </view>
            </view>
            <view class="video-js">并发编程从入门到入魔</view>
          </view>
        </scroll-view>
      </view>
    </view>
    <view class="title-hr"></view>
    <!-- 相关评论 -->
    <view class="comment">
      <view class="comment-title">相关评论 66</view>
      <view class="comment-con" v-for="index of 3" :key="index">
        <view class="comment-con-t">
          <image src="../../../static/logo.png" mode="" class="fl"></image>
          <view class="fl">用户名</view>
          <text class="fr">2020-02-02</text>
        </view>
        <view class="comment-con-b">课程知识点丰富，老师也幽默有趣课程知识点丰富，老师也幽默有趣</view>
        <view class="title-hr"></view>
      </view>
    </view>
    <!-- 底部 -->
    <view class="v-bottom">
      <view class="v-bottom-l" @tap="comment=true">
        <image src="../../../static/logo.png" mode=""></image>
        <text>说些什么吧</text>
      </view>    
      <view class="v-bottom-r">
        分享至好友
      </view>
    </view>
    <view class="v-bottom2">
      <image src="../../../static/logo.png" mode="" class="fl"></image>
      <text class="fl">点击开通会员，免费观看所有往期录播</text>
      <image src="../../../static/huise-r.png" mode="" class="fr"></image>
    </view>
    <view class="" style="height: 170rpx;"></view>
    <!-- 评论框 -->
    <view class="comment-container" v-show="comment">
      <view class="comment-mask" @tap="comment=false"></view>
      <view class="comment-container-com">
        <textarea value="" placeholder="说些什么吧" fixed/>
        <view class="comment-submit">
          提交评论
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      comment:true
    };
  }
};
</script>

<style lang="less" scoped>
.viedo-image {
  width: 750rpx;
  height: 376rpx;
  position: relative;
  > image {
    width: 100%;
    height: 100%;
    filter: blur(15px);
  }
  .mask-play {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > image {
      width: 92rpx;
      height: 92rpx;
    }
    > text {
      margin-top: 10rpx;
      font-size: 24rpx;
      color: #fff;
    }
  }
}
.viedo-title {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 38rpx 32rpx;
  background-color: #fff;
  > view:nth-child(1) {
    font-size: 40rpx;
    color: #252525;
  }
  > view:nth-child(2) {
  }
}
.video-icon-num {
  font-size: 24rpx;
  color: #999;
  > view {
    display: inline-block;
    margin-top: 7rpx;
    margin-right: 46rpx;
    > image {
      width: 18rpx;
      height: 22rpx;
      margin-right: 8rpx;
      margin-bottom: -1rpx;
    }
  }
}
.title-hr {
  width: 686rpx;
  height: 2rpx;
  background-color: #ececec;
  margin: 0 auto;
}
.related-viedo {
  padding: 0 32rpx;
  margin-bottom: 32rpx;
}
.related-title {
  display: flex;
  justify-content: space-between;
  height: 97rpx;
  align-items: center;
  > view:nth-child(1) {
    font-size: 36rpx;
    color: #252525;
  }
  > view:nth-child(2) {
    font-size: 28rpx;
    color: #999;
    > image {
      width: 30rpx;
      height: 30rpx;
      margin-bottom: -2rpx;
      margin-left: 6rpx;
    }
  }
}

.con-viedo {
  height: 240rpx;
  width: 240rpx;
  display: inline-block;
  margin-right: 32rpx;
}
.related-content {
  white-space: nowrap;
}
scroll-view {
  height: 240rpx;
}
.training-video-l {
  position: relative;
  > image {
    width: 240rpx;
    height: 134rpx;
    margin-right: 22rpx;
  }
  .viedo-tip {
    position: absolute;
    bottom: 6rpx;
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
.video-js {
  font-size: 32rpx;
  color: #252525;
  margin-top: 16rpx;
  white-space: normal;
}
.comment {
  margin-top: 26rpx;
  padding: 0 32rpx;
  .comment-title {
    font-size: 36rpx;
    color: #252525;
    margin-bottom: 24rpx;
  }
  .comment-con {
    margin-bottom: 40rpx;
    .comment-con-t {
      height: 56rpx;
      line-height: 56rpx;
      > image {
        width: 56rpx;
        height: 56rpx;
        border-radius: 50%;
      }
      > view {
        font-size: 30rpx;
        color: #252525;
        margin-left: 20rpx;
      }
      > text {
        font-size: 24rpx;
        color: #999;
      }
    }
    .comment-con-b {
      margin-top: 17rpx;
      font-size: 28rpx;
      color: #252525;
      margin-bottom: 31rpx;
    }
  }
}
.v-bottom {
  padding: 0 32rpx;
  height: 98rpx;
  width: 750rpx;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1rpx solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 80rpx;
  text-align: center;
  .v-bottom-l{
    background-color: #f4f4f4;
    width: 355rpx;
    height: 80rpx;
    border-radius: 48rpx;
    color: #999;
    font-size: 28rpx;
    text-align: left;
    >image{
      margin-left: 26rpx;
      margin-right: 10rpx;
      width: 22rpx;
      height: 22rpx;
    }
  } 
  .v-bottom-r{
    background:linear-gradient(to right, #fdd100, #f18300);
    width: 300rpx;
    height: 80rpx;
    border-radius: 48rpx;
    color: #fff;
    font-size: 32rpx;
  }
}
.v-bottom2 {
  padding: 0 32rpx;
  height: 72rpx;
  width: 750rpx;
  position: fixed;
  bottom: 98rpx;
  background: linear-gradient(to right, #4b4b4b, #222);
  line-height: 72rpx;
  > image:nth-of-type(1) {
    margin-top: 23rpx;
    width: 28rpx;
    height: 28rpx;
  }
  >text{
    margin-left: 9rpx;
    font-size: 28rpx;
    color: #fdd100;
  }
  > image:nth-of-type(2) {
    margin-top: 23rpx;
    width: 28rpx;
    height: 28rpx;
  }
}
.comment-container{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
  .comment-mask{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: ;
  }
  .comment-container-com{
    width: 750rpx;
    height: 346rpx;
    background-color: #fff;
    border-radius: 32rpx 32rpx 0 0 ;
    position: absolute;
    bottom: 0;
    textarea{
      width: 686rpx;
      height: 180rpx;
      margin: 33rpx auto 0;
    }
    .comment-submit{
      width: 184rpx;
      height: 72rpx;
      background: linear-gradient(to right, #fdd100, #f18300);
      border-radius: 52rpx;
      line-height: 72rpx;
      text-align: center;
      color: #fff;
      font-size: 28rpx;
      margin-top: 10rpx;
      margin-left: 534rpx;
    }
  }
}
</style>
