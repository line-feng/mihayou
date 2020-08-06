<template>
	<div>
		<div class="swipe">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item>
					<img src="../../assets/mihayouImg/首页/2.png" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/mihayouImg/首页/2.png" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/mihayouImg/首页/2.png" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/mihayouImg/首页/2.png" />
				</van-swipe-item>
			</van-swipe>
		</div>

		<div class="lists">
			<div v-for="(item,index) in lists" :key='index'>
				<img :src="item.img" />
				<span>
					{{ item.title }}
				</span>
			</div>
		</div>

		<div @click='deTails(item)' v-for="(item,index) in $store.state.homeObj.userList" :key='index'>
			<user-lists :userLists='item' ></user-lists>
		</div>

	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'vant';
	import userLists from '@/components/Home/userLists'
	export default {
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			userLists
		},
		data() {
			return {
				lists: [{
						img: require('@/assets/mihayouImg/首页/3.png'),
						title: '日常'
					},
					{
						img: require('@/assets/mihayouImg/首页/4.png'),
						title: '公告'
					},
					{
						img: require('@/assets/mihayouImg/首页/5.png'),
						title: 'ACG'
					},
					{
						img: require('@/assets/mihayouImg/首页/6.png'),
						title: '同人'
					}
				]
			}
		},
		created() {
			this.$store.commit('userLists')
		},
		methods:{
			deTails(item){
				console.log(item)
				this.$router.push({
					name:'details',
					params:{
						item
					}
				})
			}
		}
	}
</script>

<style scoped>
	.swipe img {
		width: 98%;
		display: block;
		margin: 0 auto;
		border-radius: 15px;
	}

	.lists {
		display: flex;
	}

	.lists img {
		width: 50px;
	}

	.lists>div {
		display: flex;
		flex-direction: column;
		margin-top: 5px;
		color: gray;
		align-items: center;
		width: 100%;
		margin-bottom: 5px;
	}
</style>
