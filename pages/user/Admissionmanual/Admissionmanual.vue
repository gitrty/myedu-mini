<template>
  <view>
    <toyoBar :title="'入学手册'"></toyoBar>
    <view class="admission-tit">
      咕泡学院入学手册
    </view>
    <view class="admission-con">
      相关内容相关内容相关内容相关内容相关内容相
      关内容相关内容相关内容相关内容相关内容相关
      内容相关内容相关内容相关内容相关内容相关内
      容相关内容相关内容相关内容相关内容相关内容
      相关内容相关内容相关内容
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
  .admission-tit{
    text-align: center;
    font-size: 40rpx;
    color: #333;
    margin-top: 28rpx;
  }
  .admission-con{
    padding: 0 32rpx ;
    margin-top: 27rpx;
    font-size: 32rpx;
    color: #333;
  }
</style>
