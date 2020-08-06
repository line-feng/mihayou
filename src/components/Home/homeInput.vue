<template>
	<div>
		<div class="inp">
			<van-search shape='round' v-model="value" placeholder="请输入搜索关键词" />
			<img src="../../assets/mihayouImg/1.png" />
		</div>
	</div>
</template>

<script>
	import { Search } from 'vant';
	export default{
		components:{
			[Search.name]:Search
		},
		data(){
			return{
				value:''
			}
		}
	}
</script>

<style scoped>
	.inp{
		display: flex;
		height: 35px;
	}
	.inp img{
		height: 35px;
		/* margin-top: 5px; */
	}
</style>
