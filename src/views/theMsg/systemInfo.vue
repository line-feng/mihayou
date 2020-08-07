<template>
	<div style="background: #F7F7F7;height: 100%;">
		<van-nav-bar title="系统通知"  left-arrow @click-left="onClickLeft" />
		<div style="height: 90%;overflow: auto;">
			<div class="lists" v-for="(item,index) in lists" :key='index'>
				<div class="dc-flex jc-between alit-center">
					<div class="dc-flex alit-center">
						<img :src="item.portrait" />
						<div>
							{{ item.title }}
						</div>
					</div>
					<div>
						{{ item.title }}
					</div>
				</div>
				<img width="100%" :src='item.img' />
				<div>
					<div>
						{{ item.text01 }}
					</div>
					<div>
						{{ item.text02 }}
					</div>
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
		data(){
			return{
				lists:[
					{
						portrait:require('@/assets/mihayouImg/消息/6.png'),
						img:require('@/assets/mihayouImg/消息/5.png'),
						title:'崩坏3',
						time:'08-05',
						text01:'女武神邀请你一起过清凉夏日啦~',
						text02:'分享夏日生活，赢丰厚水晶奖励!'
					},{
						portrait:require('@/assets/mihayouImg/消息/6.png'),
						img:require('@/assets/mihayouImg/消息/5.png'),
						title:'崩坏3',
						time:'08-05',
						text01:'女武神邀请你一起过清凉夏日啦~',
						text02:'分享夏日生活，赢丰厚水晶奖励!'
					},{
						portrait:require('@/assets/mihayouImg/消息/6.png'),
						img:require('@/assets/mihayouImg/消息/5.png'),
						title:'崩坏3',
						time:'08-05',
						text01:'女武神邀请你一起过清凉夏日啦~',
						text02:'分享夏日生活，赢丰厚水晶奖励!'
					},{
						portrait:require('@/assets/mihayouImg/消息/6.png'),
						img:require('@/assets/mihayouImg/消息/5.png'),
						title:'崩坏3',
						time:'08-05',
						text01:'女武神邀请你一起过清凉夏日啦~',
						text02:'分享夏日生活，赢丰厚水晶奖励!'
					},{
						portrait:require('@/assets/mihayouImg/消息/6.png'),
						img:require('@/assets/mihayouImg/消息/5.png'),
						title:'崩坏3',
						time:'08-05',
						text01:'女武神邀请你一起过清凉夏日啦~',
						text02:'分享夏日生活，赢丰厚水晶奖励!'
					}
				]
			}
		},
		methods:{
			onClickLeft(){
				this.$router.push('/themsg')
			}
		}
	}
</script>

<style scoped>
	.lists > div:first-child img{
		width: 30px;
	}
	.lists{
		margin: 10px 0;
		padding: 10px 15px;
		background: white;
	}
</style>
