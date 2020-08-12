<template>
	<div style="height: 100%;" class='Tab'>
		<div class="inpt">
			<home-input></home-input>
		</div>
		<van-tabs style='height: 100%;' :ellipsis='false' v-model="active" swipeable animated>
			<van-tab style='height: 100%;overflow: auto;' v-for="(item,index) in lists" :title="item.title" :key='index'>
				<div>
					<div class="hei"></div>
					<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
						<div v-show="index == 0">
							<comporing :userList='$store.state.homeObj'></comporing>
						</div>

						<div v-show="index == 1">
							<comporing :userList='$store.state.bhsObj'></comporing>
						</div>

						<div v-show="index == 2">
							<comporing :userList='$store.state.homeObj'></comporing>
						</div>

						<div v-show="index == 3">
							<comporing :userList='$store.state.homeObj'></comporing>
						</div>

						<div v-show="index == 4">
							<comporing :userList='$store.state.homeObj'></comporing>
						</div>
					</van-pull-refresh>
				</div>
			</van-tab>
		</van-tabs>
		<div>
			<bottomNavigation></bottomNavigation>
		</div>
	</div>
</template>

<script>
	import {
		Tab,
		Tabs
	} from 'vant';
	import {
		PullRefresh
	} from 'vant';
	import {
		Toast
	} from 'vant';
	import homeInput from '@/components/Home/homeInput'
	import Comporing from '@/views/Home/Comporing'
	import bottomNavigation from '@/components/bottomNavigation'
	export default {
		components: {
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[PullRefresh.name]: PullRefresh,
			[Toast.name]: Toast,
			homeInput,
			Comporing,
			bottomNavigation
		},
		data() {
			return {
				count: 0,
				isLoading: false,
				active: 0,
				lists: [{
						title: '大别野'
					},
					{
						title: '崩坏3'
					},
					{
						title: '崩坏学院2'
					},
					{
						title: '原神'
					},
					{
						title: '未定事件薄'
					}
				]
			}
		},
		created() {
			this.$store.commit('userLists');
			this.$store.commit('bhs');
		},
		methods: {
			onRefresh() {
				
				setTimeout(() => {
					this.isLoading = false;
					this.$store.commit('userLists')
					this.$router.go(0)
					Toast('刷新成功');
				}, 1000);
			},
		}
	}
</script>

<style>
	.van-tab--active {
		font-size: 18px;
		color: black;
	}

	.van-tabs__content--animated {
		height: 85%;
	}
</style>
<style scoped>
	.inpt {
		position: fixed;
		width: 100%;
		top: 40px;
		z-index: 5;
		background: white;
	}

	.hei {
		height: 40px;
	}

	.Tab {
		height: 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
