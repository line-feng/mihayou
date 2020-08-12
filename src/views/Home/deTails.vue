<template>
	<div class="background:#f7f7f7">
		<van-nav-bar title="大别野" left-arrow @click-left="onClickLeft" />
		<div class="dc-flex jc-between alit-center" style="width: 95%;margin: 0 auto;">
			<div class="Head">
				<img :src="$route.params.item.img" />
				<div>
					{{ $route.params.item.name }}
				</div>
				<span :class="classObj" class="lv">
					lv{{ $route.params.item.lv }}
				</span>
			</div>
			<div :class="{'addFocus' : focus != 0 , 'rightAdd' : focus == 0}" @click="rightAdd($route.params.item)">
				<span v-show="focus == 0">
					+关注
				</span>
				<span v-show="focus != 0">
					已关注
				</span>
			</div>
		</div>

		<div class="listTitle">
			<div class="title">
				{{ $route.params.item['title'] }}
			</div>
			<div style="text-indent: 2rem;" v-for="(item,index) in $route.params.item.subtitle" :key='index'>
				<div v-if=' typeof(item) != "object"  '>
					{{ item }}
				</div>
				<div v-else class="img">
					<div v-for="(It,In) in item" :key='In + "1"'>
						<img :src="It.img" />
					</div>
				</div>
			</div>
		</div>
		<div>
			<comments :id='$route.params.item.id' :item=' $route.params.item.comments'></comments>
		</div>
	</div>
</template>

<script>
	import {
		NavBar
	} from 'vant';
	import comments from '@/components/Home/comments'
	export default {
		components: {
			[NavBar.name]: NavBar,
			comments
		},
		data(){
			return{
				focus:0
			}
		},
		created() {
			for(let i = 0;i < this.$store.state['Focus'].length;i++){
				if(this.$route.params.item.id == this.$store.state['Focus'][i]['id']){
					this.focus = 1
				}
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			rightAdd(item){
				if(this.focus == 0){
					item['focus'] = 1
					this.$store.commit('Focus',item)
					this.focus = 1
				}else{
					item['focus'] = 0
					this.$store.commit('removeFocus',item)
					this.focus = 0
				}
			}
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
		}
	}
</script>

<style scoped>
	.Head img {
		width: 40px;
		border-radius:50% ;
	}

	.Head {
		display: flex;
		align-items: center;
	}

	.Head>div:nth-child(2) {
		font-size: 18px;
		margin: 0 10px;
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

	.rightAdd span {
		border: 0.5px solid black;
		padding: 2px 4px;
	}
	
	.addFocus span{
		border: 0.5px solid lightgray;
		padding: 2px 4px;
		color: lightgray;
	}

	.listTitle {
		width: 95%;
		font-size: 16px;
		margin: 15px auto;
	}

	.listTitle>div:first-child {
		font-size: 18px;
	}

	.img {
		width: 100%;
		margin: 15px auto;
	}

	.img img {
		margin: 5px 0;
		width: 80%;
	}
</style>
