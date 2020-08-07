<template>
	<div style="height: 100%;display: flex;flex-direction: column;">
		<van-nav-bar title="推荐用户" left-arrow @click-left="onClickLeft" />
		<div style="height: 100%;overflow: auto;">
			<div class="userLists" v-for="(item,index) in lists" :key='index'>
				<div class="dc-flex alit-center ">
					<img :src="item.img" />
					<div>
						<div>{{ item.title }}</div>
						<div>{{ item.subTitle }}</div>
					</div>
				</div>
				<div>
					<span>关注</span>
				</div>
			</div>
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
		data() {
			return {
				lists: [{
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, {
					"img": 'http://localhost:9999/mihayouImg/speech/3.png',
					"title": "澜凝",
					"subTitle": "奥托厨左然厨，屑鸽子。"
				}, ]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push('/speech')
			}
		}
	}
</script>

<style scoped>
	.userLists {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 95%;
		margin: 0 auto;
	}

	.userLists img {
		width: 60px;
	}

	.userLists span {
		background: skyblue;
		color: white;
		font-size: 14px;
		font-weight: bold;
		margin-right: 20px;
		padding: 5px;
		border-radius: 5px;
	}
</style>
