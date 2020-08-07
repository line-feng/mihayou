<template>
	<div class="announcement">
		<van-nav-bar title="官方" left-arrow @click-left="onClickLeft" />
		<van-tabs v-model="active">
			<van-tab title="活动">
				<div class='lists' v-for="(item,index) in lists" :key='index'>
					<img :src="item['img']" />
					<div>
						{{ item['text'] }}
					</div>
				</div>
			</van-tab>
			<van-tab title="公告" style='height: 100%;overflow: auto;'>
				<div class="litsAnn" v-for="(item,index) in announcement" :key='index + "ann"'>
					<div>
						<div>{{ item.title }}</div>
						<div>{{item.time}}</div>
					</div>
					<img :src='item.img' />
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import {
		Tab,
		Tabs,
		NavBar
	} from 'vant';
	export default {
		components: {
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[NavBar.name]: NavBar
		},
		data() {
			return {
				active: 0,
				lists: [{
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}, {
					"img": require('@/assets/mihayouImg/首页/2.png'),
					"text": '【已开奖】分享CP26见闻，和米游姬一起逛漫展'
				}],
				"announcement": [{
					"title": '【公告】粉丝数展示异常问题修复',
					"time": '06-08',
					"img": require('@/assets/mihayouImg/首页/2.png')
				}, {
					"title": '【公告】粉丝数展示异常问题修复',
					"time": '06-08',
					"img": require('@/assets/mihayouImg/首页/2.png')
				}, {
					"title": '【公告】粉丝数展示异常问题修复',
					"time": '06-08',
					"img": require('@/assets/mihayouImg/首页/2.png')
				}, {
					"title": '【公告】粉丝数展示异常问题修复',
					"time": '06-08',
					"img": require('@/assets/mihayouImg/首页/2.png')
				}, {
					"title": '【公告】粉丝数展示异常问题修复',
					"time": '06-08',
					"img": require('@/assets/mihayouImg/首页/2.png')
				}, {
					"title": '【公告】粉丝数展示异常问题修复',
					"time": '06-08',
					"img": require('@/assets/mihayouImg/首页/2.png')
				}, {
					"title": '【公告】粉丝数展示异常问题修复',
					"time": '06-08',
					"img": require('@/assets/mihayouImg/首页/2.png')
				}, {
					"title": '【公告】粉丝数展示异常问题修复',
					"time": '06-08',
					"img": require('@/assets/mihayouImg/首页/2.png')
				}, {
					"title": '【公告】粉丝数展示异常问题修复',
					"time": '06-08',
					"img": require('@/assets/mihayouImg/首页/2.png')
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
	.announcement {
		font-size: 16px;
		background: #F7F7F7;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	img {
		width: 95%;
		display: block;
		margin: 10px auto;
		border-radius: 5px;
	}

	.lists {
		background: white;
		padding: 5px;
		margin: 15px 0;
	}

	.litsAnn {
		display: flex;
		padding: 0 10px;
		background: white;
		border-bottom: 1px solid lightgray;
	}

	.litsAnn:last-child {
		border-bottom: none;
	}

	.litsAnn>div>div:last-child {
		color: lightgray;
	}

	.litsAnn>div {
		width: 60%;
		font-size: 14px;
	}

	.litsAnn img {
		width: 30%;

	}
</style>
<style>
	.announcement .van-tabs__line {
		background: skyblue;
	}
	.announcement .van-tabs__content{
		height: 95%;
		overflow: auto;
	}
	.announcement .van-tabs{
		height: 88%;
	}
	.announcement .van-nav-bar__title{
		padding: 10px 0;
	}
</style>
