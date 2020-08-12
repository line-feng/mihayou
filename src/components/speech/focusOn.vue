<template>
	<div class="focuson">
		<div class="HeadImg">
			<img src="@/assets/mihayouImg/论坛/1.png" />
			<div class="textTop">
				暂时还没有关注人的帖子哦
			</div>
		</div>
		<div class="More">
			<div>
				关注有趣的人
			</div>
			<div @click="more()">
				更多 >
			</div>
		</div>

		<van-swipe :loop="false" :width="110" :show-indicators='false'>
			<div v-for="(item,index) in lists" :key='index' class="mar">
				<van-swipe-item>
					<div class="user">
						<div>
							<img :src='item.img' />
							<div>
								{{ item.title }}
							</div>
							<div>
								{{ item.subTitle }}
							</div>
						</div>
					</div>
				</van-swipe-item>
			</div>
		</van-swipe>
		<div class="text-center mar-top-len-1">
			已经到底啦
		</div>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'vant';
	export default {
		props: ['focusOn'],
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem
		},
		data() {
			return {
				lists: [{
					"title": "田琦雏",
					"subTitle": "动漫领域作者",
					"img": "http://localhost:9999/mihayouImg/speech/3.png"
				}]
			}
		},
		mounted() {
			setTimeout(() => {
				this.lists = this.focusOn['userList']
			}, 600)
		},
		methods:{
			more(){
				this.$router.push('/more')
			}
		}
	}
</script>

<style scoped>
	.HeadImg {
		margin-top: 10px;
		background: white;
	}

	.HeadImg img {
		width: 100%;
		height: 200px;
	}

	.user img {
		width: 80%;
	}

	.user>div {
		text-align: center;
		font-size: 12px;
		width: 100%;
		background: white;
		border-radius: 5px;
	}

	.user {
		padding: 5px;
		background: #F7F7F7;
	}

	.user>div>div:nth-child(2) {
		font-size: 14px;
		font-weight: bold;
	}

	.textTop {
		color: darkgray;
		text-align: center;
		font-size: 14px;
	}

	.More {
		display: flex;
		justify-content: space-between;
		width: 95%;
		margin: 0 auto;
		font-size: 14px;
		padding: 8px 0;
	}

	.More>div:last-child {
		color: gray;
	}
</style>
