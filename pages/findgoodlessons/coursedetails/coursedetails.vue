<template>
  <view>
    <toyoBar :title="'课程详情'"></toyoBar>
    <view class="course-img"><image src="../../../static/logo.png" mode=""></image></view>
    <view class="top-tab">
      <view :class="{ active: tabBar === 0 }" @tap="tabBar = 0">
        课程介绍
        <view v-show="tabBar === 0"></view>
      </view>
      <view :class="{ active: tabBar === 1 }" @tap="tabBar = 1">
        课程大纲
        <view v-show="tabBar === 1"></view>
      </view>
      <view :class="{ active: tabBar === 2 }" @tap="tabBar = 2">
        学员评价
        <view v-show="tabBar === 2"></view>
      </view>
    </view>

    <!-- 1 - 课程介绍 -->
    <view class="course-introduction" v-show="tabBar === 0">
      <view class="course-title">并发编程从入门到入魔</view>
      <view class="course-tip">
        <view class="course-tip-con">
          <image src="../../../static/yxrs.png" mode=""></image>
          <text>6666人已学</text>
        </view>
        <view class="course-tip-con">
          <image src="../../../static/pll-2.png" mode=""></image>
          <text>6666条评论</text>
        </view>
        <view class="course-tip-con">
          <image src="../../../static/good.png" mode=""></image>
          <text>好评率100%</text>
        </view>
      </view>
      <view class="course-price">￥199.00</view>
      <!-- 讲师介绍 -->
      <view class="lecturer">
        <view class="lecturer-tit">讲师介绍 6</view>
        <view class="b-shadow">
          <view class="lecturer-con" v-for="index of 3" :key="index">
            <view class="lecturer-con-con">
              <image src="../../../static/logo.png" mode=""></image>
              <text>咕泡教育-Mic</text>
            </view>
            <view class="lecturer-details">
              10年java开发架构经验,曾就职于中国电信、陆金所 等大型互联网。熟练掌握分布式、高并发、高可用 等技术。掌握支付平台、理财业务等业务架构。
            </view>
          </view>
          <view class="shadow-opacity"></view>
        </view>
        <view class="look-every">查看全部</view>
      </view>

      <!-- 图文介绍 -->
      <view class="image-text">图文介绍</view>
      <view class="image-text-con"><image src="../../../static/logo.png" mode=""></image></view>
    </view>

    <!-- 2 - 课程大纲 -->
    <view class="syllabus" v-show="tabBar === 1">
      <!-- 学习进度 - 会员状态 -->
      <view class="vip-schedule clearfix" v-if="isVip">
        <view class="vip-schedule-tit">并发编程从入门到入魔</view>
        <!-- 进度条 -->
        <view class="vip-schedule-mid"><view class="" :style="{ width: 622 * 0.64 + 'rpx' }"></view></view>
        <view class="vip-schedule-bottom fr">
          <image src="../../../static/yxx.png" mode=""></image>
          <text>已学习64%</text>
        </view>
      </view>

      <view class="syllabus-con" v-for="(item, index) in syllabusList" :key="index">
        <!-- 视频章节 -->
        <view class="syllabus-flex" @tap="syllabusTab(index)">
          <text>01 Impala基本概念和架构</text>
          <image :src="item.isOpen ? '../../../static/up.png' : '../../../static/down.png'" mode=""></image>
        </view>
        <!-- 视频详情  -> false项为直播状态下的显示 -->
        <view class="syllabus-details" v-for="i of 2" :key="i" v-show="item.isOpen">
          <view class="syllabus-details-title">
            <image :src="false ? '../../../static/yes-play.png' : '../../../static/no-play.png'" mode=""></image>
            <text :class="{ active: false }">[直播] 大数据之Impala简介</text>
          </view>
          <view class="syllabus-details-tip" v-if="true">1月14日 20:00</view>
          <view class="syllabus-now" v-if="true">
            <text>直播中</text>
            <image src="../../../static/playing.png" mode=""></image>
          </view>
        </view>
      </view>
    </view>

    <!-- 3 - 学员评价 -->
    <view class="student-evaluation" v-show="tabBar === 2">
      <view class="evaluation-hz">
        <view class="evaluation-hz-con">
          <text>评论</text>
          <text>666</text>
        </view>
        <view class="evaluation-hz-con">
          <text>好评率</text>
          <text>100%</text>
        </view>
      </view>
      <!-- 会员状态 - 评论课程 -->
      <view class="vip-pl" v-if="isVip" @tap="jump('/pages/findgoodlessons/evaluationcourse/evaluationcourse')">
        <image src="../../../static/logo.png" mode=""></image>
        <text>学得如何？点击留下对此课程得评价吧</text>
        <image src="../../../static/huise-r.png" mode=""></image>
      </view>
      <!-- 所有评论 -->
      <view class="evaluation-container clearfix" v-for="index of 5" :key="index">
        <view class="evaluation-container-top">
          <image src="../../../static/logo.png" mode="" class="fl"></image>
          <text class="fl">用户名</text>
          <view class="fr"><toyoRate :value="5" :checkValue="5"></toyoRate></view>
        </view>
        <view class="evaluation-container-mid">课程知识点丰富，老师也幽默有趣 课程知识点丰富，老师也幽默有趣 课程知识点丰富，老师也幽默有趣</view>
        <view class="evaluation-container-bottom">
          <text class="fl">已上课12时33分时评论</text>
          <text class="fr">2018-02-10</text>
        </view>
      </view>
    </view>

    <!-- 底部-未开通会员 -->
    <view class="" v-if="!isVip">
      <view class="v-bottom">
        <view class="course-ico">
          <image src="../../../static/kf.png" mode=""></image>
          <text>客服</text>
        </view>
        <view class="course-ico">
          <image src="../../../static/sc.png" mode=""></image>
          <text>收藏</text>
        </view>
        <view class="course-ico" @tap="fx">
          <image src="../../../static/fx.png" mode=""></image>
          <text>分享</text>
        </view>
        <view class="v-bottom-r" @tap="jump('/pages/findgoodlessons/purchase/purchase')">立即购买</view>
      </view>
      <view class="v-bottom2">
        <image src="../../../static/vip-icon.png" mode="" class="fl"></image>
        <text class="fl">点击开通会员，免费观看所有往期录播</text>
        <image src="../../../static/huise-r.png" mode="" class="fr"></image>
      </view>
    </view>
    <!-- 底部-已开通会员 -->
    <view class="vip-v-bottom" v-if="isVip">
      <view class="vip-v-bottom-l">
        <image src="../../../static/kf.png" mode=""></image>
        <text>客服</text>
      </view>
      <view class="vip-v-bottom-l" @tap="fx">
        <image src="../../../static/fx.png" mode=""></image>
        <text>分享</text>
      </view>
    </view>
    <view class="" style="height: 170rpx;" v-if="!isVip"></view>
    <view class="" style="height: 98rpx;" v-if="isVip"></view>
    <!-- 分享海报 -->
    <view class="mask" v-show="fxMask">
      <view class="fx-mask" @tap="fxMask = !fxMask"></view>
      <view class="mask-container">
        <view class="mask-esc"><image src="../../../static/close.png" mode="" @tap="fxMask = false"></image></view>
        <view class="mask-hb">
          <view class="mask-hb-con">
            <image src="../../../static/fx-bg.png" mode="" class="hb-bg"></image>
            <image src="../../../static/logo.png" mode="" class="hb-user"></image>
            <view class="hb-usertxt">XXXXX邀请你来咕泡学习</view>
            <view class="hb-container">
              <image src="../../../static/logo.png" mode="" class="kc-details"></image>
              <view class="kc-one">
                并发编程从入门到入魔
              </view>
              <view class="kc-two">
                <view class="">
                  <image src="../../../static/yxrs.png" mode=""></image>
                  <text>666人已学</text>
                </view>   
                <view class="">
                  <image src="../../../static/yxrs.png" mode=""></image>
                  <text>666条评论</text>
                </view>   
                <view class="">
                  <image src="../../../static/yxrs.png" mode=""></image>
                  <text>好评率100%</text>
                </view>
              </view>
              <view class="kc-three">
                ￥199.00
              </view>
            </view>
            <view class="kc-bottom">
              <image src="../../../static/logo.png" mode="" class="ewm"></image>
              <view class="fx-text">
                <view class="">长按小程序码查看详情</view>
                <view class="">分享自[咕泡学院]</view>
              </view>
            </view>
          </view>
        </view>
        <view class="mask-btns">
          <view class="">
            <image src="../../../static/wx.png" mode="" class="wx"></image>
            <text>分享至好友</text>
          </view>
          <view class="" @tap="downloadImage">
            <image src="../../../static/hb.png" mode=""></image>
            <text>保存海报</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 绘制海报 -->
    <canvas style="width: 750rpx; height: 1334rpx;position:fixed ; background-color: red;" canvas-id="myCanvas"></canvas>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabBar: 0,
      // 课程大纲下拉控制
      syllabusList: [{ isOpen: true }, { isOpen: false }],
      // 是否为会员
      isVip: false,
      // 分享海报页面
      fxMask: true,
      // 生成海报路径
      fxImage: ''
    };
  },
  onLoad() {
    this.createImage();
  },
  methods: {
    // 课程大纲下拉/收起
    syllabusTab(index) {
      this.syllabusList[index].isOpen = !this.syllabusList[index].isOpen;
    },
    fx() {
      this.fxMask = true;
      uni.canvasToTempFilePath(
        {
          x: 0,
          y: 0,
          width: 375,
          height: 667,
          canvasId: 'myCanvas',
          fileType: 'jpg',
          success: function(res) {
            // 在H5平台下，tempFilePath 为 base64
            console.log(res.tempFilePath);
            this.fxImage = res.tempFilePath;
            console.info(typeof this.fxImage);
          }
        },
        this
      );
      console.info(1);
    },
    createImage() {
      let context = uni.createCanvasContext('myCanvas');
      // 1 - 背景图片
      context.drawImage('/static/fx-bg.png', 0, 0, 375, 252);

      // 2 - 用户头像
      context.save(); // 先保存状态 已便于画完圆再用
      context.beginPath(); //开始绘制
      //先画个圆
      context.arc(187, 70, 34, 0, Math.PI * 2);
      context.setFillStyle('#ffffff');
      context.fill(); //保证图片无bug填充
      context.clip(); //画了圆 再剪切 原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内
      context.drawImage('/static/logo.png', 153, 36, 68, 68); // 推进去图片
      context.restore();

      // 3 - XXX邀请你来咕泡学习
      context.setFillStyle('#fff');
      context.setFontSize(20);
      context.textAlign = 'center';
      context.fillText('XXXXXXXXX邀请你来咕泡学习', 186, 140);

      // 4 - 课程图片
      context.fillStyle = '#f8f8f8'; //fillStyle设置填充颜色
      context.strokeStyle = '#f8f8f8'; //strokeStyle设置边框颜色
      context.fillRect(16, 172, 343, 308);
      context.strokeRect(16, 172, 343, 308);
      context.drawImage('/static/logo.png', 16, 172, 343, 190);

      // 5 - 课程介绍
      context.textAlign = 'left';
      context.setFillStyle('#252525');
      context.setFontSize(20);
      context.fillText('并发编程从入门到入魔', 35, 390);

      context.setFillStyle('#666');
      context.setFontSize(13);
      context.drawImage('/static/yxrs.png', 36, 406, 9, 9);
      context.fillText('6666人已学', 48, 415);
      context.drawImage('/static/pll-2.png', 140, 406, 9, 9);
      context.fillText('6666条评论', 152, 415);
      context.drawImage('/static/good.png', 244, 406, 9, 9);
      context.fillText('好评率100%', 256, 415);

      context.setFillStyle('#f18300');
      context.setFontSize(16);
      context.fillText('￥199.00', 36, 440);

      // 6 - 小程序码
      context.drawImage('/static/logo.png', 45, 520, 89, 89);

      // 绘制矩形并填充背景
      context.fillStyle = '#f8f8f8'; //fillStyle设置填充颜色
      context.strokeStyle = '#f8f8f8'; //strokeStyle设置边框颜色
      context.fillRect(144, 532, 190, 64);
      context.strokeRect(144, 532, 190, 64);

      context.setFillStyle('#999');
      context.setFontSize(15);
      context.fillText('长按小程序码查看详情', 160, 560);
      context.fillText('分享自[咕泡学院]', 160, 584);

      // 7 - 完成绘制
      context.draw();
    },
    // 下载海报
    downloadImage() {
      let _this = this;
      // 将 canvas 绘制的海报生成图片
      uni.canvasToTempFilePath(
        {
          x: 0,
          y: 0,
          width: 375,
          height: 667,
          // destWidth: 200,
          // destHeight: 200,
          canvasId: 'myCanvas',
          fileType: 'jpg',
          success: function(res) {
            // 在H5平台下，tempFilePath 为 base64
            console.log(res.tempFilePath);
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function() {
                _this.showToast('保存成功');
              }
            });

            // uni.previewImage({
            //   urls: [res.tempFilePath],
            //   success() {
            //     console.info('预览成功');
            //   }
            // });
          }
        },
        this
      );
    }
  },
  onShow() {
    this.isVip = this.$store.state.isVip;
  }
};
</script>

<style lang="less" scoped>
.course-img {
  height: 416rpx;
  > image {
    width: 100%;
    height: 100%;
  }
}
.top-tab {
  background-color: #fff;
  z-index: 2;
  width: 750rpx;
  height: 88rpx;
  line-height: 80rpx;
  font-size: 32rpx;
  color: #999;
  display: flex;
  align-items: center;
  > view {
    text-align: center;
    flex: 1;
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
  .active {
    color: #333;
    // border-bottom: 6rpx solid #fd553a;
  }
}
.v-bottom {
  padding: 9rpx 32rpx 0;
  height: 98rpx;
  width: 750rpx;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1rpx solid #ccc;
  display: flex;
  .course-ico {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    > image {
      width: 40rpx;
      height: 40rpx;
      margin-bottom: 2rpx;
    }
    > text {
      font-size: 20rpx;
      color: #666;
    }
  }
  .course-ico:nth-of-type(1) {
    margin-left: 15rpx;
  }
  .course-ico:nth-of-type(2),
  .course-ico:nth-of-type(3) {
    margin-left: 105rpx;
  }
  .v-bottom-r {
    background: linear-gradient(to right, #fdd100, #f18300);
    width: 300rpx;
    height: 80rpx;
    border-radius: 48rpx;
    color: #fff;
    font-size: 32rpx;
    line-height: 80rpx;
    text-align: center;
    margin-left: 50rpx;
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
  > text {
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
.course-title {
  font-size: 40rpx;
  color: #252525;
  margin-top: 30rpx;
  padding: 0 32rpx;
  margin-bottom: 8rpx;
}
.course-tip {
  padding: 0 32rpx;
  display: flex;
  .course-tip-con {
    margin-right: 56rpx;
    font-size: 26rpx;
    color: #666;
    > image {
      width: 22rpx;
      height: 22rpx;
      margin-right: 4rpx;
      margin-bottom: -1rpx;
    }
  }
}
.course-price {
  padding: 0 32rpx;
  font-size: 32rpx;
  color: #f18300;
  margin-top: 14rpx;
}
.lecturer {
  width: 686rpx;
  height: 710rpx;
  margin: 35rpx auto 0;
  box-shadow: 0 0 24rpx rgba(0, 0, 0, 0.08);
  padding: 32rpx;
  .lecturer-tit {
    font-size: 36rpx;
    color: #333;
    margin-bottom: 10rpx;
  }
  .b-shadow {
    position: relative;
    height: 480rpx;
    width: 686rpx;
    // background-color: gold;
    overflow: hidden;
  }
  .shadow-opacity {
    position: absolute;
    bottom: 0;
    height: 100rpx;
    width: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.8));
  }
  .lecturer-con {
    margin-top: 20rpx;
    // background-color: pink;
    border-bottom: 2rpx solid #f4f4f4;
    padding-bottom: 26rpx;
    .lecturer-con-con {
      display: flex;
      align-items: center;
      height: 56rpx;
      font-size: 24rpx;
      color: #000;
      > image {
        border-radius: 50%;
        width: 56rpx;
        height: 56rpx;
        margin-right: 17rpx;
      }
    }
    .lecturer-details {
      margin-top: 17rpx;
      font-size: 28rpx;
      color: #666;
    }
  }
  .look-every {
    margin-top: 30rpx;
    width: 622rpx;
    height: 80rpx;
    background-color: #f5f5f5;
    border-radius: 50rpx;
    line-height: 80rpx;
    text-align: center;
    font-size: 26rpx;
    color: #999;
  }
}
.image-text {
  padding: 0 32rpx;
  color: #252525;
  font-size: 36rpx;
  margin-top: 48rpx;
  margin-bottom: 20rpx;
}
.image-text-con {
  > image {
    height: 1360rpx;
    width: 100%;
  }
}
.syllabus {
  padding: 0 32rpx;
}
.syllabus-con {
  position: relative;
  // height: 96rpx;
  border-bottom: 2rpx solid #f4f4f4;
  font-size: 32rpx;
  color: #333;
  .syllabus-flex {
    padding: 18rpx 0;
    height: 100%;
    font-size: 32rpx;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > image {
      width: 70rpx;
      height: 70rpx;
    }
  }

  .syllabus-details {
    padding-bottom: 32rpx;
    width: 629rpx;
    border-bottom: 2rpx solid #f4f4f4;
    margin-left: 56rpx;
    .syllabus-details-title {
      padding-top: 24rpx;
      font-size: 28rpx;
      color: #252525;
      > image {
        width: 26rpx;
        height: 26rpx;
        margin-bottom: -2rpx;
        margin-right: 8rpx;
      }
      > text.active {
        color: #f18300;
      }
    }
    .syllabus-details-tip {
      padding-left: 40rpx;
      margin-top: 4rpx;
      font-size: 24rpx;
      color: #c7c7c9;
    }
    .syllabus-now {
      padding-left: 40rpx;
      > image {
        width: 21rpx;
        height: 21rpx;
        margin-left: 8rpx;
        margin-bottom: -1rpx;
      }
      > text {
        color: #f18300;
        font-size: 24rpx;
      }
    }
  }
  .syllabus-details:nth-last-of-type(1) {
    border-bottom: none;
  }
}
.evaluation-hz {
  width: 686rpx;
  height: 72rpx;
  background-color: #f8f8f8;
  border-radius: 8rpx;
  margin: 40rpx auto 0;
  display: flex;
  align-items: center;
  .evaluation-hz-con {
    flex: 1;
    height: 48rpx;
    text-align: center;
    > text:nth-child(1) {
      font-size: 26rpx;
      color: #252525;
      margin-right: 20rpx;
      line-height: 20rpx;
    }
    > text:nth-child(2) {
      font-size: 30rpx;
      color: #f18300;
    }
  }
  .evaluation-hz-con:nth-of-type(1) {
    border-right: 2rpx solid #e8e8e8;
  }
}
.evaluation-container {
  padding: 0 32rpx;
  padding-top: 38rpx;
  padding-bottom: 27rpx;
  border-bottom: 2rpx solid #ececec;
  .evaluation-container-top {
    height: 56rpx;
    line-height: 56rpx;
    > image {
      width: 56rpx;
      height: 56rpx;
      border-radius: 50%;
      margin-right: 22rpx;
    }
    > text {
      font-size: 30rpx;
      color: #252525;
    }
  }
  .evaluation-container-mid {
    font-size: 28rpx;
    color: #252525;
    margin-top: 16rpx;
    margin-bottom: 12rpx;
  }
  .evaluation-container-bottom {
    font-size: 24rpx;
    color: #999;
  }
}
.vip-schedule {
  margin-top: 39rpx;
  margin-bottom: 10rpx;
  width: 686rpx;
  box-shadow: 0 0 24rpx rgba(0, 0, 0, 0.08);
  padding: 26rpx 32rpx;
  .vip-schedule-tit {
    font-size: 40rpx;
    color: #252525;
  }
  .vip-schedule-mid {
    position: relative;
    width: 622rpx;
    height: 10rpx;
    background-color: #f8f8f8;
    border-radius: 43rpx;
    margin-top: 24rpx;
    margin-bottom: 8rpx;
    > view {
      border-radius: 43rpx;
      position: absolute;
      height: 10rpx;
      top: 0;
      left: 0;
      background: linear-gradient(to right, #fdd100, #f18300);
    }
  }
  .vip-schedule-bottom {
    font-size: 26rpx;
    color: #666;
    > image {
      width: 24rpx;
      height: 24rpx;
      margin-right: 6rpx;
      margin-bottom: -1rpx;
    }
  }
}
.vip-v-bottom {
  padding: 17rpx 0;
  height: 98rpx;
  width: 750rpx;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1rpx solid #e9e9e9;
  display: flex;
  .vip-v-bottom-l {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    > image {
      width: 40rpx;
      height: 40rpx;
    }
    text {
      font-size: 20rpx;
      color: #666;
    }
  }
  .vip-v-bottom-l:nth-of-type(1) {
    border-right: 2rpx solid #e9e9e9;
  }
}
.vip-pl {
  width: 686rpx;
  margin: 0 auto;
  height: 112rpx;
  display: flex;
  align-items: center;
  border-bottom: 2rpx solid #ececec;
  > image:nth-of-type(1) {
    width: 56rpx;
    height: 56rpx;
    border-radius: 50%;
    margin-right: 18rpx;
  }
  > text {
    font-size: 28rpx;
    color: #f18300;
  }
  > image:nth-of-type(2) {
    width: 40rpx;
    height: 40rpx;
    margin-left: 110rpx;
  }
}
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0;
  .fx-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
  }
  .mask-container {
    width: 100%;
    height: 872rpx;
    background-color: #fff;
    position: absolute;
    z-index: 3;
    bottom: 0;
    border-radius: 48rpx 48rpx 0 0;
    .mask-esc {
      width: 24rpx;
      height: 24rpx;
      position: absolute;
      top: 40rpx;
      right: 40rpx;
      > image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.mask-btns {
  height: 98rpx;
  width: 750rpx;
  position: absolute;
  bottom: 0;
  border-top: 2rpx solid #f4f4f4;
  display: flex;
  line-height: 64rpx;
  font-size: 32rpx;
  color: #252525;
  align-items: center;
  > view {
    height: 64rpx;
    flex: 1;
    text-align: center;
    > image {
      width: 28rpx;
      height: 22rpx;
      margin-right: 8rpx;
    }
    .wx {
      width: 40rpx;
      height: 40rpx;
      margin-bottom: -8rpx;
    }
  }
  > view:nth-of-type(1) {
    border-right: 2rpx solid #f4f4f4;
  }
}
.mask-hb {
  width: 440rpx;
  height: 726rpx;
  margin: 44rpx auto 0;
  padding: 20rpx;
  > image {
    width: 100%;
    height: 100%;
  }
}
.mask-hb-con {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 24rpx rgba(0,0,0,.08);
  border-radius: 24rpx;
  position: relative;
  .hb-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 250rpx;
    border-radius: 24rpx 24rpx 0 0;
  }
  .hb-user {
    position: absolute;
    z-index: 3;
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    left: 50%;
    margin-left: -30rpx;
    top: 46rpx;
  }
  .hb-usertxt {
    position: relative;
    top: 120rpx;
    z-index: 3;
    font-size: 20rpx;
    color: #fff;
    text-align: center;
  }
  .hb-container {
    position: absolute;
    z-index: 3;
    width: 90%;
    height: 300rpx;
    top: 170rpx;
    box-shadow: 0 0 24rpx rgba(0,0,0,.08);
    left:20rpx; 
    .kc-details {
      width: 100%;
      height: 190rpx;
    }
    .kc-one{
      padding: 0 10rpx;
      font-size: 22rpx;
    }
    .kc-two{
      margin: 4rpx 0 8rpx;
      padding: 0 10rpx;
      font-size: 18rpx;
      display: flex;
      >view{
        margin-right: 13rpx;
        color: #666;
      }
      image{
        width: 14rpx;
        height: 14rpx;
        margin-right: 4rpx;
      }
    }
    .kc-three{
      padding: 0 10rpx;
      font-size: 22rpx;
      color: #f18300;
    }
  }
}
.kc-bottom{
  position: absolute;
  width: 100%;
  height: 100rpx;
  z-index: 3;
  bottom: 50rpx;
  .ewm{
    width: 100rpx;
    height: 100rpx;
    margin-left: 42rpx;
  }
  .fx-text{
    position: absolute;
    top: 20rpx;
    right: 0rpx;
    width: 220rpx;
    height: 70rpx;
    background-color: #f8f8f8;
    right: 24rpx;
    padding: 10rpx 15rpx;
    font-size: 19rpx;
    color: #999;
  }
}
</style>
