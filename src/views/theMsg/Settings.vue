<template>
	<div>
		<van-nav-bar title="新消息设置" left-arrow @click-left="onClickLeft" />

		<div v-for="(item,index) in list" :key='index'>
			<div class="bg-gray1 title">
				{{ item.title }}
			</div>

			<div v-for='(item2,In) in item.lists' :key="In + '1'">
				<Card :padding="0" shadow>
					<CellGroup>
						<Cell :title="item2.text">
							<i-switch v-model="item2.switchValue" slot="extra" />
						</Cell>
					</CellGroup>
				</Card>
			</div>

		</div>

	</div>
</template>

<script>
	import {
		NavBar
	} from 'vant';
	import {
		Card,
		CellGroup,
		Cell,
		Badge,
		Switch
	} from 'iview'
	export default {
		components: {
			[NavBar.name]: NavBar,
			[Card.name]: Card,
			[CellGroup.name]: CellGroup,
			[Cell.name]: Cell,
			[Badge.name]: Badge,
			[Switch.name]: Switch
		},
		data() {
			return {
				list: [{
						title: '有以下消息通知我',
						lists: [{
							text: '有人给我发私信',
							switchValue: false
						}, {
							text: '有人评论或者回复了我',
							switchValue: false
						}, {
							text: '有人给我点了赞',
							switchValue: false
						}, {
							text: '有人关注了我',
							switchValue: false
						},{
							text: '系统通知',
							switchValue: false
						}, ]
					},
					{
						title: '陌生人私信过滤',
						lists: [{
							text: '不接受未关注人的私信',
							switchValue: false
						}, {
							text: '合并未关注人的私信',
							switchValue: false
						}]
					},
					{
						title: '开启合并后，将不通知未关注人私信',
					},
				]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push('/themsg')
			}
		}
	}
</script>

<style scoped>
	.title {
		text-indent: 0.9rem;
		padding: 5px 0;
	}
</style>
