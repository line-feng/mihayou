<template>
	<div class="speech">
		<van-tabs v-model="active" style='height: 100%;'>
			<van-tab title="关注">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
					<focus-on style="overflow: auto;" :focusOn="$store.state.speechList['focusOn']"></focus-on>
				</van-pull-refresh>
			</van-tab>
			<van-tab title="版区">
				<div>
					<boards :boards="$store.state.speechList['boards']"></boards>
					<div class="hei"></div>
				</div>
			</van-tab>
		</van-tabs>

		<bottomNavigation></bottomNavigation>
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
	import bottomNavigation from '@/components/bottomNavigation'
	import focusOn from '@/components/speech/focusOn'
	import boards from '@/components/speech/boards'
	export default {
		components: {
			bottomNavigation,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[PullRefresh.name]: PullRefresh,
			[Toast.name]: Toast,
			focusOn,
			boards
		},
		data() {
			return {
				active: 0,
				objList: '',
				isLoading: false,
			}
		},
		beforeCreate() {
			this.$store.commit('speechList')
		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					Toast('刷新成功');
					this.isLoading = false;
				}, 1000);
			}
		},
	}
</script>

<style>
	.speech .van-tabs__line {
		background: skyblue;
	}

	.speech {
		display: flex;
		flex-direction: column;
		height: 90%;
		background: #f7f7f7;
	}

	.speech .van-pull-refresh {
		overflow: auto;
		height: 100%;
	}

	.speech .van-tabs__content {
		height: 100%;
	}

	.speech .van-tab__pane {
		height: 100%;
	}
</style>
<style scoped>
	.hei {
		height: 50px;
	}
</style>
