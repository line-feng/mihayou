<template>
	<div style="background: #F7F7F7;height: 100%;">
		<van-nav-bar title="关注" left-arrow @click-left="onClickLeft" />
		<van-tabs v-model="active">
			<van-tab title="用户">
				<div>
					<div class="list dc-flex jc-between" v-for="(item,index) in $store.state.Focus" :key='index'>
						<div class="dc-flex alit-center">
							<img :src='item["img"]' />
							<div class="name">
								{{ item['name'] }}
							</div>
						</div>
						<div :class="{'addFocus' : item['focus'] != 0 , 'rightAdd' : item['focus'] == 0}" @click="rightAdd(item)">
							<span v-show="item['focus'] == 0">
								+关注
							</span>
							<span v-show="item['focus'] != 0">
								已关注
							</span>
						</div>
					</div>
				</div>
			</van-tab>
			<van-tab title="话题">
				<van-empty description="这里空空的" />
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import {
		NavBar,
		Tab,
		Tabs,
		Empty
	} from 'vant';
	export default {
		components: {
			[NavBar.name]: NavBar,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Empty.name]: Empty
		},
		data() {
			return {
				active: 0
			};
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			rightAdd(item) {
				if (item['focus'] == 0) {
					item['focus'] = 1
					this.$store.commit('Focus', item)
				} else {
					item['focus'] = 0
					this.$store.commit('removeFocus', item)
				}
			}
		},
	};
</script>

<style scoped="scoped">
	.list img {
		width: 40px;
	}

	.list {
		font-size: 14px;
		font-weight: bold;
		margin: 8px auto;
		align-items: center;
		padding: 10px;
		background: white;
	}

	.name {
		margin: 0 15px;
	}

	.rightAdd span {
		border: 0.5px solid black;
		padding: 2px 4px;
	}

	.addFocus span {
		border: 0.5px solid lightgray;
		padding: 2px 4px;
		color: lightgray;
	}
</style>
