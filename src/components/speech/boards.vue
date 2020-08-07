<template>
	<div class="boards">
		<div class="topHead">
			<div class="dc-flex marn jc-between">
				<div class="text">
					最近访问
				</div>

				<van-swipe :loop="false" :width="80" :show-indicators='false' style='width: 90%;'>
					<div @click='toPath()' v-for="(item,index) in lists" :key='index' class="mar">
						<van-swipe-item>
							<div class="user">
								<div>
									<img :src='item.img' />
									<div>
										{{ item.title }}
									</div>
								</div>
							</div>
						</van-swipe-item>
					</div>
				</van-swipe>

			</div>
		</div>

		<div style="background: white;margin: 15px 0;padding: 15px 0;" v-for="(item,index) in nameLists" :key='item+ "+" +index'>
			<div class="title">
                 {{ item }}
			</div>

			<div>
				<div class="Item">
					<div class="dayName" v-for="(item,index) in dabieye" :key='index'>
						<img :src="item.img" />
						<div>
							<div>
								{{ item.title }}
							</div>
							<div>
								热度&nbsp;&nbsp;{{ item.text }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'vant';
	export default {
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem
		},
		props: ['boards'],
		data() {
			return {
				lists: '',
				dabieye: [{
					img: 'http://localhost:9999/mihayouImg/Home/3.png',
					title: '日常',
					text: '683893'
				}, {
					img: 'http://localhost:9999/mihayouImg/Home/3.png',
					title: '日常',
					text: '683893'
				}, {
					img: 'http://localhost:9999/mihayouImg/Home/3.png',
					title: '日常',
					text: '683893'
				}, {
					img: 'http://localhost:9999/mihayouImg/Home/3.png',
					title: '日常',
					text: '683893'
				}, {
					img: 'http://localhost:9999/mihayouImg/Home/3.png',
					title: '日常',
					text: '683893'
				}],
				nameLists:['大别野',"崩坏三",'崩坏学院2','原神','未定事件薄']
			}
		},
		mounted() {
			setTimeout(() => {
				this.lists = this.boards['recentLists']
			}, 500)
		},
		methods:{
			toPath(){
				this.$router.push('/announcement')
			}
		}
	}
</script>

<style scoped>
	.topHead img {
		width: 50px;
	}

	.title {
		text-indent: 0.5rem;
		font-size: 18px;
		font-weight: bold;
	}

	.topHead {
		background: white;
	}

	.mar {
		text-align: center;
	}

	.marn {
		margin: 5px 0;
	}

	.text {
		width: 5%;
		text-align: center;
		margin-left: 5%;
		background: lightgray;
		display: flex;
		align-items: center;
	}

	.user {
		padding: 0 8px;
	}

	.user>div {
		background: white;
		border-radius: 5px;
	}

	.user img {
		width: 100%
	}

	.dayName {
		display: flex;
		width: 48%;
	}

	.dayName>div {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.dayName img {
		width: 50px;
	}

	.Item {
		background: white;
		display: flex;
		flex-wrap: wrap;
	}

	.boards {
		height: 50%;
		display: flex;
		flex-direction: column;
	}
</style>
