<template>
  <view>
    <toyoBar :title="'常见问题'"></toyoBar>
    <view class="problem">
      <view class="syllabus-con" v-for="(item, index) in problemList" :key="index">
        <!-- 视频章节 -->
        <view class="syllabus-flex" @tap="syllabusTab(index)">
          <text>01 问题1</text>
          <image :src="item.isOpen ? '/static/up.png' : '/static/down.png'" mode=""></image>
        </view>
        <view class="syllabus-details" v-show="item.isOpen">
          回答内容
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      problemList:[
        {isOpen:true},
        {isOpen:false},
        {isOpen:false}
      ]
    };
  },
  methods:{
    syllabusTab(index){
      this.problemList[index].isOpen = !this.problemList[index].isOpen
    }
  }
};
</script>

<style lang="less" scoped>
  .problem{
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
    font-size: 28rpx;
    color: #666;
  }
}
</style>
