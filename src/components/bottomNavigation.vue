<template>
	<div>
		<van-tabbar v-model="active" route>
			<van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to='/speech'>论坛</van-tabbar-item>
			<div class="addMsg"  @click="showPopup">
				<span>+</span>
			</div>
			<van-tabbar-item icon="chat-o" to='/themsg'>消息</van-tabbar-item>
			<van-tabbar-item icon="smile-o" to='/myhomepage'>我的</van-tabbar-item>
		</van-tabbar>

		<!-- <van-cell is-link>展示弹出层</van-cell> -->
		<van-popup round  v-model="show" position="bottom">
			<div class="cont">
				<div style="background: skyblue;">帖子</div>
				<div style="background: orange;">图片</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
	import {
		Tabbar,
		TabbarItem
	} from 'vant';
	import {
		Popup
	} from 'vant';
	export default {
		components: {
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem,
			[Popup.name]: Popup
		},
		data() {
			return {
				active: 1,
				show: false,
			}
		},
		methods: {
			showPopup() {
				this.show = true;
			},
		}
	}
</script>
.ddd{
	
}
<style scoped>
	.addMsg>span {
		border-radius: 50%;
		background: #64CCFF;
		width: 45px;
		height: 45px;
		display: block;
		text-align: center;
		line-height: 45px;
		color: white;
		font-size: 24px;
	}

	.addMsg {
		padding: 0 10px;
		margin-top: -5px;
		z-index: 5;
	}
	.cont{
		width: 80%;
		margin: 20px auto;
	}
	.cont > div{
		margin: 10px 0;
		padding: 10px 0;
		font-size: 20px;
		text-indent: 1rem;
		border-radius: 5px;
		color: white;
		font-weight: bold;
		font-family: '宋体';
	}
</style>
