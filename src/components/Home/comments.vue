<template>
	<div class='comments' style="width: 95%;margin: 0 auto;">
		<div class="dc-flex jc-between">
			<van-tabs v-model="active" :ellipsis='false'>
				<van-tab title="全部评论"></van-tab>
				<van-tab title="只看楼主"></van-tab>
			</van-tabs>
		</div>
		<div>
			<div class="banner" v-for='(item,index) in userList' :key='index'>
				<div class="Head">
					<img :src="item['Head-portrait']" />
					<div>
						{{ item.name }}
					</div>
					<span :class="classObj" class="lv">
						lv{{ item.lv }}
					</span>
				</div>
				<div class="com">
					<div v-for="(item2,In) in item['text']" :key='In+"1"'>
						<div v-if='isImg(item2)'>
							<img :src='item2' />
						</div>
						<div v-else class="text">
							{{ item2 }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Tab,
		Tabs
	} from 'vant';
	export default {
		props: ['item', 'id'],
		components: {
			[Tab.name]: Tab,
			[Tabs.name]: Tabs
		},
		data() {
			return {
				active: 0,
				userList: this.item
			};
		},
		computed: {
			classObj() {
				return {
					'bg-blue': this.$route.params.item['lv'] == 3,
					'bg-red': this.$route.params.item['lv'] == 6,
					'bg-purple': this.$route.params.item['lv'] > 6,
					'bg-gray': this.$route.params.item['lv'] < 3,
					'bg-orange': this.$route.params.item['lv'] == 4,
					'bg-orangered': this.$route.params.item['lv'] == 5,
				}
			}
		},
		watch: {
			active() {
				let arr = [];
				if (this.active == 1) {
					for (let i = 0; i < this.item.length; i++) {
						if (this.item[i]['id'] == this.id) {
							arr.push(this.item[i])
						}
					}
					this.userList = arr
				}else{
					this.userList = this.item
				}
			}
		},
		methods: {
			isImg(item) {
				let arr = ['.png', '.jpg'],
					bol = false;
				for (let i = 0; i < arr.length; i++) {
					if (item.indexOf(arr[i]) != -1) {
						bol = true
					}
				}
				return bol
			}
		}
	}
</script>

<style>
	.Head img {
		width: 40px;
		border-radius: 50%;
	}

	.com img {
		display: block;
		margin: 0 auto;
		height: 400px;
		width: 80%;
	}

	.banner {
		border-bottom: 1px solid lightgray;
		padding: 15px 0;
	}

	.Head {
		display: flex;
		align-items: center;
		border-top: 1px solid #F7F7F7;
	}

	.Head>div:nth-child(2) {
		font-size: 14px;
		margin: 0 10px;
	}

	.comments .van-tab--active {
		font-size: 14px;
	}

	.right .van-tabs__line {
		display: none;
	}

	.bg-blue {
		background: #64CCFF;
	}

	.bg-purple {
		background: purple;
	}

	.bg-orange {
		background: orange;
	}

	.bg-orangered {
		background: orangered;
	}

	.bg-red {
		background: red;
	}

	.bg-gray {
		background: lightgray;
	}

	.lv {
		color: white;
		padding: 0px 10px;
		font-size: 12px;
		margin-left: 4px;
		border-radius: 2px;
	}

	.text {
		width: 68%;
		margin: 0 auto;
	}
</style>
