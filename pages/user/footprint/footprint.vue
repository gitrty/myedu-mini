<template>
	<view>
    <toyoBar :title="'我的足迹'"></toyoBar>
    <!-- 无数据 -->
     <toyoNoInfo :text="'暂无相关足迹'" :imgSrc="'/static/z-wzj.png'" v-if="true"></toyoNoInfo>
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

<style lang="less">

</style>
