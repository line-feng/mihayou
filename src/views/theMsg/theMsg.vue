<template>
	<div style="background: #F7F7F7;height: 100%;">
		<van-nav-bar title="消息">
			<template #right>
				<van-icon  @click="$router.push('/settings')" name="setting-o" :color='"black"' />
			</template>
		</van-nav-bar>

		<div class="dc-flex lists">
			<div @click='toPath(item.path)' v-for="(item,index) in lists" :key='index'>
				<img :src="item.img" />
				<div>
					{{ item.title }}
				</div>
			</div>
		</div>

		<div class="imgBox">
			<img src="../../assets/mihayouImg/消息/4.png" />
		</div>

		<bottomNavigation></bottomNavigation>
	</div>
</template>

<script>
	import {
		NavBar,
		Icon
	} from 'vant';
	import bottomNavigation from '@/components/bottomNavigation'
	export default {
		components: {
			[NavBar.name]: NavBar,
			[Icon.name]: Icon,
			bottomNavigation
		},
		data() {
			return {
				lists: [{
					path: '/reply',
					img: require('@/assets/mihayouImg/消息/1.png'),
					title: "回复我的"
				}, {
					path:'/receivedPraise',
					img: require('@/assets/mihayouImg/消息/2.png'),
					title: "收到的赞"
				}, {
					path:'/systemInfo',
					img: require('@/assets/mihayouImg/消息/3.png'),
					title: "系统通知"
				}]
			}
		},
		methods: {
			toPath(path) {
				this.$router.push(path)
			}
		}
	}
</script>

<style scoped>
	.lists img {
		width: 50px;
	}

	.lists {
		text-align: center;
		padding: 5px;
		background: white;
		justify-content: space-around;
	}

	.imgBox img {
		width: 200px;
	}

	.imgBox {
		background: white;
		height: 70%;
		margin-top: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
