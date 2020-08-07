<template>
	<div style="height: 50%;">
		<van-nav-bar title="回复我的" left-arrow @click-left="onClickLeft" />
		<div class="imgBox">
			<img src="../../assets/mihayouImg/消息/4.png" />
		</div>
		<div class="text-center">
			暂时还没有收到回复哦
		</div>
	</div>
</template>

<script>
	import {
		NavBar
	} from 'vant';
	export default {
		components: {
			[NavBar.name]: NavBar
		},
		methods: {
			onClickLeft() {
				this.$router.push('/themsg')
			}
		}
	}
</script>

<style scoped>
	.imgBox img{
		width: 200px;
	}
	.imgBox{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
