<template>
  <view @tap="login">点击获取</view>
</template>

<script>
 import { util } from '@api/http';
export default {
	data() {
		return {

		}
	},
	methods: {
		async login(){
       const { code } = await util.login();
       console.info(code)
     }
	}
}
</script>

<style lang="less" scoped></style>
