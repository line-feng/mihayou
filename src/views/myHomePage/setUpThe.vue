<template>
	<div style="background: #F7F7F7;">
		<van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
		<div v-for="(it,In) in list" :key='In + "1"'>
			<div class="userlists">
				<div @click="item['outLogin']" v-for="(item,index) in it" :key='index'>
					<van-cell is-link>
						<template #title>
							<div class="boxList">
								<span class="custom-title">{{ item.title }}</span>
							</div>
						</template>
						<template #right-icon>
							<div class="iconRight">
								<van-icon name="arrow" size='20' />
							</div>
						</template>
					</van-cell>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {
		NavBar,
		Cell,
		Icon,
		Notify,
		Dialog
	} from 'vant';
	export default {
		components: {
			[NavBar.name]: NavBar,
			[Cell.name]: Cell,
			[Icon.name]: Icon
		},
		data() {
			return {
				list: [
					[{
							"title": "新消息通知",
							outLogin() {
								return
							}
						},
						{
							"title": "隐私",
							outLogin() {
								return
							}
						},
						{
							"title": "私信黑名单",
							outLogin() {
								return
							}
						},
						{
							"title": "黑名单",
							outLogin() {
								return
							}
						},
					],
					[{
							"title": "关于米游社",
							outLogin() {
								return
							}
						},
						{
							"title": "账号和安全",
							outLogin() {
								return
							}
						},
						{
							"title": "清除缓存",
							outLogin() {
								return
							}
						},
						{
							"title": "建议与反驳",
							outLogin() {
								return
							}
						}, {
							"title": "检查更新",
							outLogin() {
								return
							}
						}
					],
					[{
						"title": "退出登录",
						outLogin() {
							if (window.sessionStorage.userObj) {
								Dialog.confirm({
										title: '是否登出账号',
										width:'300'
									})
									.then(() => {
										window.sessionStorage.clear()
										Notify('账号已登出');
									})
									.catch(() => {
										// on cancel
									});


							} else {
								Notify('未登录账号');
							}
						}
					}]
				]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.userlists {
		padding-top: 10px;
	}

	.boxList {
		display: flex;
		align-items: center;
	}
</style>
