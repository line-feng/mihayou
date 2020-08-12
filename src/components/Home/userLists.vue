<template>
	<div style="background: #F7F7F7;">
		<div style="margin: 0 auto;padding-top: 10px;">
			<div style="background: white;padding: 10px 5px;">
				<div class="dc-flex">
					<img :src="userLists.img" class="headPortrait" />
					<div class="name">
						<div class="dc-flex jc-center alit-center">
							<div>
								{{ lists['name'] }}
							</div>
							<div :class="classObj" class="lv">
								lv.{{ lists['lv'] }}
							</div>
						</div>
						<div>
							{{ lists['time'] }}
						</div>
					</div>
				</div>

				<div class="title">
					<div class="van-ellipsis">
						{{ lists['title'] }}
					</div>
				</div>
				<div class="subTitle">
					<div>
						<div class="van-multi-ellipsis--l2">
							{{ lists['subtitle']['title1'] }}
						</div>
					</div>
				</div>

				<div class="dc-flex img van-ellipsis">
					<img :src="item.img" v-for="(item,index) in lists['subtitle']['img']" :key='index' />
				</div>

				<div class="listImg">
					<div>
						<img src="../../assets/mihayouImg/首页/10.png" />
						<span>
							{{ lists['postNum'] }}
						</span>
					</div>
					<div>
						<img src="../../assets/mihayouImg/首页/11.png" />
						<span>
							{{ lists['infoNum'] }}
						</span>
					</div>
					<div>
						<img src="../../assets/mihayouImg/首页/12.png" />
						<span>
							{{ lists['nice'] }}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['userLists'],
		data() {
			return {
				lists: ''
			}
		},
		created() {
			this.lists = this.userLists
		},
		computed: {
			classObj() {
				return {
					'bg-blue': this.lists['lv'] == 3,
					'bg-red': this.lists['lv'] == 6,
					'bg-purple': this.lists['lv'] > 6,
					'bg-gray': this.lists['lv'] < 3,
					'bg-orange':this.lists['lv'] == 4,
					'bg-orangered':this.lists['lv'] == 5,
				}
			}
		}
	}
</script>

<style scoped>
	.headPortrait {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.name {
		margin-left: 8px;
		color: gray;
	}

	.bg-blue {
		background: #64CCFF;
	}

	.bg-purple {
		background: purple;
	}
	
	.bg-orange{
		background: orange;
	}
	
	.bg-orangered{
		background: orangered;
	}
	
	.bg-red{
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

	.title {
		margin-top: 10px;
		font-size: 16px;
	}

	.subTitle {
		color: gray;
		font-size: 14px;
	}

	.img img {
		width: 85px;
		height: 85px;
		margin: 5px;
	}

	.listImg {
		display: flex;
		margin-bottom: 15px;
		justify-content: flex-end;
		width: 80%;
		margin: 0 auto;
		font-size: 12px;
		color: gray;
	}

	.listImg img {
		width: 30px;
		height: 20px;
	}

	.listImg>div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
