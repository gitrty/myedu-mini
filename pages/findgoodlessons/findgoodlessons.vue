<template>
  <view class="idx">
    <!-- 自定义顶部 -->
    <view class="top-bar" :style="{ height: 112 + pTop + 'rpx', 'background-color': '#fff' }">
      <view class=""></view>
      <view class="top-select" :style="{ 'margin-top': pTop + 'rpx' }" @tap="jump('/pages/findgoodlessons/select/select')">
        <image src="../../static/ss-2.png" mode=""></image>
        <text>人工智能</text>
      </view>
    </view>
    <!-- top -->
    <view class="top-tab" :style="{ top: 112 + pTop + 'rpx' }">
      <view :class="{ active: tabBar }" @tap="tabBar = true">
        为你推荐
        <view v-show="tabBar"></view>
      </view>
      <view :class="{ active: !tabBar }" @tap="tabBar = false">
        往期录播
        <view v-show="!tabBar"></view>
      </view>
    </view>
    <!-- left - 为你推荐 -->
    <view class="tab-left" v-show="tabBar" :style="{ 'margin-top': 220 + pTop + 'rpx' }">
      <!-- banner -->
      <view class="find-banner">
        <swiper :style="{height:'296rpx'}" class="swiper" :indicator-dots="true" :autoplay="true" :interval="1000" :duration="800" :circular="true" :indicator-color="'#e5e5e5'" :indicator-active-color="'#fff'">
          <swiper-item><view class="swiper-item"><image src="../../static/cs1.png" mode=""></image></view></swiper-item>
          <swiper-item><view class="swiper-item"><image src="../../static/cs2.png" mode=""></view></swiper-item>
          <swiper-item><view class="swiper-item"><image src="../../static/cs3.png" mode=""></view></swiper-item>
          <swiper-item><view class="swiper-item"><image src="../../static/cs4.jpg" mode=""></view></swiper-item>
        </swiper>
      </view>
      <!-- 训练营 -->
      <view class="training"><image src="../../static/xly.png" mode=""></image></view>
      <!-- 训练营视频 -->
      <view class="training-content">
        <movable-area>
          <movable-view direction="all" :style="{ width: '600rpx', display: 'flex' }" inertia="true">
            <!-- 滑动区域左边3个 -->
            <view class="movable-left">
              <view class="training-video" v-for="index of 3" :key="index" @tap="jump('/pages/findgoodlessons/coursedetails/coursedetails')">
                <view class="training-video-l">
                  <image src="../../static/logo.png" mode=""></image>
                  <view class="viedo-tip">
                    <view class="">
                      <image src="../../static/xxrs.png" mode=""></image>
                      <text>6666</text>
                    </view>
                    <view class="">
                      <image src="../../static/pll.png" mode=""></image>
                      <text>6666</text>
                    </view>
                  </view>
                </view>
                <view class="t-video-text">
                  <view class="t-video-text-t">并发编程从入门到入魔</view>
                  <!-- 显示价格 -->
                  <view class="t-video-text-b" v-if="true">
                    <text>￥199.00</text>
                    <!-- <text>￥199.00</text>  -->
                  </view>
                  <!-- 显示开启时间 -->
                  <view class="t-video-text-time" v-if="false">
                    <image src="../../static/logo.png" mode=""></image>
                    <text>1月4日开启 剩余12天</text>
                  </view>
                </view>
              </view>
            </view>
            <!-- 滑动区域右边3个 -->
            <view class="movable-left">
              <view class="training-video" v-for="index of 3" :key="index">
                <view class="training-video-l">
                  <image src="../../static/logo.png" mode=""></image>
                  <view class="viedo-tip">
                    <view class="">
                      <image src="../../static/logo.png" mode=""></image>
                      <text>6666</text>
                    </view>
                    <view class="">
                      <image src="../../static/logo.png" mode=""></image>
                      <text>6666</text>
                    </view>
                  </view>
                </view>
                <view class="t-video-text">
                  <view class="t-video-text-t">并发编程从入门到入魔</view>
                  <!-- 显示价格 -->
                  <view class="t-video-text-b" v-if="true">
                    <text>￥199.00</text>
                    <text>￥199.00</text>
                  </view>
                  <!-- 显示开启时间 -->
                  <view class="t-video-text-time" v-if="false">
                    <image src="../../static/logo.png" mode=""></image>
                    <text>1月4日开启 剩余12天</text>
                  </view>
                </view>
              </view>
            </view>
          </movable-view>
        </movable-area>
      </view>
      <!-- 课程预告 -->
      <view class="notice">
        <view class="notice-top">
          <image src="../../static/kcyg.png" mode=""></image>
          <text>课程预告</text>
        </view>
        <view class="notice-con" v-for="index of 3" :key="index">
          <view class="notice-con-l fl">
            <view class="">04·08</view>
            <view class="">剩余10天</view>
          </view>
          <view class="notice-con-r fl">
            <view class="">并发编程从入门到入魔</view>
            <view class="">
              <image src="../../static/gz.png" mode=""></image>
              <text>1000人关注</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 课程预告 - 查看全部 -->
      <view class="notice-every" @tap="jump('/pages/findgoodlessons/training/training')">查看全部</view>

      <!-- 精品小课 -->
      <view class="quality"><image src="../../static/jpxk.png" mode=""></image></view>
      <!-- 精品小课视频 -->
      <view class="quality-content clearfix">
        <view class="quality-content-con fl" v-for="index of 4" :key="index">
          <image src="../../static/logo.png" mode=""></image>
          <view class="viedo-tip">
            <view class="">
              <image src="../../static/xxrs.png" mode=""></image>
              <text>6666</text>
            </view>
            <view class="">
              <image src="../../static/pll.png" mode=""></image>
              <text>6666</text>
            </view>
          </view>
          <view class="quality-tit">程序员为什么这么累?30岁不一定就是槛...</view>
          <view class="quality-money">
            <!-- <text class="mf">免费</text> -->
            <text class="no-mf">￥9.90</text>
          </view>
        </view>
      </view>
      <!-- 没有意向课程 -->
      <view class="quality-noread" @tap="addWechart = true">没有意向课程？点击了解更多精品课程</view>
      <view class="add-wechart" v-show="addWechart">
        <view class="add-wechart-con">
          <view class="clearfix"><image src="../../static/close.png" @tap="addWechart = false" mode="" class="close2 fr"></image></view>
          <view class="wximg"><image src="../../static/bigwx.png" mode=""></image></view>
          <view class="add-wechart-txt">请添加客服微信号询问</view>
          <view class="add-wechart-txt">更多精品课程为你推送</view>
          <view class="add-wechart-btn" @tap="copyWx">复制微信号</view>
        </view>
      </view>
    </view>
    <!-- right - 往期录播 -->
    <view class="tab-right" v-show="!tabBar" :style="{ 'margin-top': 220 + pTop + 'rpx' }">
      <!-- 滑动区域 -->
      <view class="t-r-top">
        <movable-area :style="{ height: '120rpx' }">
          <movable-view direction="all" :style="{ width: '200rpx', height: '120rpx' }" inertia="true">
            <view class="movable-wid">
              <view class="choice-kc fl" :class="{ 'c-active': choiceKc === 0 }" @tap="choiceKc = 0">
                <image :src="choiceKc === 0 ? '../../static/eve-sel.png' : '../../static/eve.png'" mode=""></image>
                <text>全部录播</text>
              </view>
              <view class="choice-kc fl" :class="{ 'c-active': choiceKc === 1 }" @tap="choiceKc = 1">
                <image :src="choiceKc === 1 ? '../../static/java-sel.png' : '../../static/JAVA.png'"></image>
                <text>JAVA架构</text>
              </view>
              <view class="choice-kc fl" :class="{ 'c-active': choiceKc === 2 }" @tap="choiceKc = 2">
                <image :src="choiceKc === 2 ? '../../static/dsj-sel.png' : '../../static/dsj.png'"></image>
                <text>大数据</text>
              </view>
              <view class="choice-kc fl" :class="{ 'c-active': choiceKc === 3 }" @tap="choiceKc = 3">
                <image :src="choiceKc === 3 ? '../../static/py-sel.png' : '../../static/py.png'"></image>
                <text>人工智能</text>
              </view>
              <!--     <view class="choice-kc fl" :class="{'c-active':choiceKc===4}" @tap="choiceKc=4">
                  <image :src="choiceKc===4?'../../static/logo.png':'../../static/zt-jg.png'"></image>
                  <text>架构</text>
                </view>   -->
              <view class="choice-kc fl" :class="{ 'c-active': choiceKc === 5 }" @tap="choiceKc = 5">
                <image :src="choiceKc === 5 ? '../../static/web-sel.png' : '../../static/web.png'"></image>
                <text>WEB前端</text>
              </view>
            </view>
          </movable-view>
        </movable-area>
      </view>
      <!-- 视频区域 -->
      <view class="t-r-viedo">
        <view class="training-video" v-for="index of 10" :key="index" @tap="jump('/pages/findgoodlessons/videodetails/videodetails')">
          <view class="training-video-l">
            <image src="../../static/logo.png" mode=""></image>
            <view class="video-free" v-if="index == 1">免费看</view>
          </view>
          <view class="t-video-text"><view class="t-video-text-t">并发编程从入门到入魔并发编程从入门到入魔</view></view>
          <view class="video-icon-num">
            <view class="">
              <image src="../../static/play.png" mode=""></image>
              <text>6666</text>
            </view>
            <view class="">
              <image src="../../static/pll-2.png" mode="" class="pll"></image>
              <text>7777</text>
            </view>
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
      tabBar: true, // 为你推荐/往期录播切换
      choiceKc: 0, // 录播分类切换
      pTop: 0,
      addWechart: false // 添加微信拟态框
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
  },
  methods: {
    // 复制微信号
    copyWx() {
      this.addWechart = false;
      // 复制到剪切板api
      uni.setClipboardData({
        data: 'hhhhhhhhhhh'
      });
    }
  }
};
</script>

<style lang="less">
.idx {
  width: 750rpx;
  overflow-x: hidden;
}
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
.top-tab {
  background-color: #fff;
  position: fixed;
  z-index: 2;
  width: 750rpx;
  top: 112rpx;
  height: 88rpx;
  padding: 0 174rpx;
  line-height: 80rpx;
  font-size: 32rpx;
  color: #999;
  > view {
    height: 100%;
    position: relative;
    > view {
      width: 80rpx;
      height: 8rpx;
      background: linear-gradient(to right, #fdd000, #f08300);
      position: absolute;
      bottom: 0rpx;
      left: 50%;
      border-radius: 14rpx;
      margin-left: -40rpx;
    }
  }
  > view:nth-child(1) {
    float: left;
  }
  > view:nth-child(2) {
    float: right;
  }
  .active {
    color: #333;
    // border-bottom: 6rpx solid #fd553a;
  }
}
.tab-left {
  margin-top: 220rpx;
}
.find-banner {
  margin-top: 32rpx;
  height: 296rpx;
  width: 100%;
  padding: 0 32rpx;
  .swiper-item {
    height: 296rpx;
    > image {
      width: 100%;
      border-radius: 8rpx;
    }
  }
}
.training {
  margin-top: 63rpx;
  height: 94rpx;
  width: 750rpx;
  padding: 0 32rpx;
  text-align: center;
  font-size: 40rpx;
  color: #252525;
  > image {
    width: 170rpx;
    height: 70rpx;
    margin-left: 30rpx;
  }
}
.training-content {
  height: 486rpx;
  width: 100%;
  padding-left: 32rpx;
}
.training-video {
  width: 655rpx;
  height: 134rpx;
  margin-bottom: 42rpx;
  // background-color: gold;
  display: flex;
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
.notice {
  margin: 48rpx auto 0;
  width: 686rpx;
  height: 530rpx;
  border-radius: 16rpx;
  box-shadow: 0 0 24rpx rgba(0, 0, 0, 0.08);
  padding: 32rpx;
  .notice-top {
    margin-bottom: 32rpx;
    > image {
      width: 32rpx;
      height: 32rpx;
      margin-bottom: -2rpx;
      margin-right: 9rpx;
    }
    > text {
      font-size: 36rpx;
      color: #333;
    }
  }
  .notice-con {
    height: 88rpx;
    margin-bottom: 56rpx;
    .notice-con-l {
      width: 120rpx;
      height: 88rpx;
      background-color: #fff4ed;
      text-align: center;
      > view:nth-child(1) {
        margin-top: 8rpx;
        font-size: 30rpx;
        color: #252525;
      }
      > view:nth-child(2) {
        margin-top: 1rpx;
        font-size: 20rpx;
        color: #f18300;
      }
    }
    .notice-con-r {
      padding-left: 25rpx;
      > view:nth-child(1) {
        margin-top: 3rpx;
        font-size: 32rpx;
        color: #252525;
      }
      > view:nth-child(2) {
        margin-top: 4rpx;
        font-size: 24rpx;
        color: #999;
        > image {
          width: 20rpx;
          height: 20rpx;
          margin-right: 8rpx;
        }
      }
    }
  }
}
.notice-every {
  width: 686rpx;
  height: 80rpx;
  background-color: #f5f5f5;
  border-radius: 51rpx;
  margin: 41rpx auto 0;
  text-align: center;
  font-size: 26rpx;
  color: #999;
  line-height: 80rpx;
}

.quality {
  margin-top: 46rpx;
  height: 93rpx;
  width: 100%;
  font-size: 40rpx;
  color: #252525;
  text-align: center;
  > image {
    width: 190rpx;
    height: 70rpx;
    margin-left: 30rpx;
  }
}

.quality-content {
  padding: 0 32rpx;
  > view:nth-of-type(odd) {
    margin-right: 18rpx;
  }
  .quality-content-con {
    position: relative;
    width: 334rpx;
    margin-bottom: 42rpx;
    > image {
      border-radius: 8rpx;
      width: 334rpx;
      height: 186rpx;
    }
    .quality-tit {
      margin-top: 14rpx;
      font-size: 32rpx;
      color: #252525;
    }
    .quality-money {
      margin-top: 12rpx;
      .mf {
        font-size: 26rpx;
        color: #666;
      }
      .no-mf {
        font-size: 26rpx;
        color: #f18300;
      }
    }
    .viedo-tip {
      position: absolute;
      top: 138rpx;
      width: 334rpx;
      height: 48rpx;
      background-color: rgba(0, 0, 0, 0.14);
      display: flex;
      padding: 0 16rpx;
      > view {
        // flex:1;
        margin-right: 20rpx;
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
}

.quality-noread {
  width: 686rpx;
  height: 80rpx;
  background-color: #f5f5f5;
  border-radius: 51rpx;
  margin: auto;
  text-align: center;
  font-size: 26rpx;
  color: #999;
  line-height: 80rpx;
  margin-bottom: 35rpx;
}

.tab-right {
  width: 750rpx;
  margin-top: 220rpx;
}
.t-r-top {
  height: 120rpx;
  padding: 0 32rpx;
  .movable-wid {
    width: 1056rpx;
  }
  .choice-kc {
    width: 144rpx;
    height: 120rpx;
    background-color: #f8f8f8;
    margin-right: 32rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > image {
      width: 40rpx;
      height: 40rpx;
    }
    > text {
      font-size: 26rpx;
      color: #666;
      margin-top: 7rpx;
    }
  }
  .c-active {
    background-color: #fff5eb;
    > text {
      color: #f18300;
    }
  }
}
.t-r-viedo {
  padding: 0 32rpx;
  margin-top: 50rpx;
  .training-video {
    position: relative;
    width: 686rpx;
    .video-free {
      position: absolute;
      top: -2rpx;
      left: -4rpx;
      width: 80rpx;
      height: 32rpx;
      background: linear-gradient(to right, #fdd100, #f18300);
      border-radius: 53rpx;
      font-size: 20rpx;
      color: #fff;
      line-height: 32rpx;
      text-align: center;
    }
  }
  .video-icon-num {
    position: absolute;
    bottom: 8rpx;
    left: 265rpx;
    font-size: 24rpx;
    color: #999;
    > view {
      float: left;
      margin-right: 31rpx;
      > image {
        width: 18rpx;
        height: 22rpx;
        margin-right: 8rpx;
        margin-bottom: -1rpx;
      }
      .pll {
        width: 22rpx;
        height: 21rpx;
      }
    }
  }
}
.add-wechart {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
}
.add-wechart-con {
  width: 636rpx;
  height: 546rpx;
  background-color: #fff;
  border-radius: 32rpx;
  margin-top: 300rpx;
  margin-left: 57rpx;
  padding: 26rpx;
  .close2 {
    width: 30rpx;
    height: 30rpx;
  }
  .wximg {
    margin-bottom: 42rpx;
    margin-top: 30rpx;
    height: 140rpx;
    display: flex;
    justify-content: center;
    > image {
      width: 174rpx;
      height: 140rpx;
    }
  }
  .add-wechart-txt {
    font-size: 30rpx;
    color: #333;
    line-height: 45rpx;
    text-align: center;
  }
  .add-wechart-btn {
    margin-top: 40rpx;
    width: 572rpx;
    height: 80rpx;
    color: #fff;
    border-radius: 51rpx;
    background: linear-gradient(to right, #fdd100, #f18300);
    line-height: 80rpx;
    text-align: center;
    font-size: 32rpx;
  }
}
</style>
