<template>
	<div class="community">
		<van-nav-bar title="社区等级" left-arrow @click-left="onClickLeft" />
		<div style="background: white;">
			<div class="lv title">
				<span class="but">
					Lv.1
				</span>
			</div>
		</div>
		<div style="background: white;">
			<div style="width: 60%;margin:0 30%;" class="dc-flex jc-center alit-center">
				<Progress :percent="percent"></Progress>
			</div>
		</div>

		<div style="background: white;padding: 5%;">
			<div>
				今日获取经验：0
			</div>
		</div>

		<div class="dc-flex lists jc-between" style="margin: 3% 0;padding: 5%;background: white;" v-for="item in 6" :key='item'>
			<div>
				社区签到
			</div>
			<div style="width: 50%;">
				<Progress :percent="percent"></Progress>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		NavBar
	} from 'vant';
	import {
		Progress
	} from 'iview'
	export default {
		components: {
			[NavBar.name]: NavBar,
			[Progress.name]: Progress
		},
		data() {
			return {
				percent: 50
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
	.community {
		background: #F7F7F7;
	}

	.lists {
		font-size: 14px;
		font-weight: bold;
	}

	.lv {
		font-size: 30px;
		text-align: center;
		color: red;
	}

	but {
		border: 2px solid #f35626;
		padding: 1.5rem;
		color: #f35626;
		-webkit-animation: hue 1s infinite linear;
		background-color: transparent;
		-webkit-appearance: none;
		border-radius: 10px;
	}

	@-webkit-keyframes hue {
		from {
			-webkit-filter: hue-rotate(0deg);
		}

		to {
			-webkit-filter: hue-rotate(-360deg);
		}
	}

	.title {
		color: #f35626;
		/*font-size: 6rem;*/
		background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
		-webkit-animation: hue 1s infinite linear;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}
</style>
<style>
/* 	.community .ivu-progress-text {
		display: none;
	} */
</style>
