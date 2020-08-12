<template>
	<div class="hei">
		<transition :name="transitionName">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				transitionName: 'turn-off' ,// 默认动态路由变化为slide-right
				path:[]
			}
		},
		watch: {
			$route(to,from) {
				let Obj = {
					from,
					to
				}
				
				for(let i in Obj){
					if(this.path.indexOf(Obj[i]['path']) < 0){
						this.path.push(Obj[i]['path'])
					}
				}

				if(this.path.indexOf(from.path) > this.path.indexOf(to.path)){
					this.transitionName = 'turn-on'
				}else{
					this.transitionName = 'turn-off'
				}
			}
		}
	}
</script>

<style scoped>
	.hei {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>

<style>
	.turn-on-enter {
		transform: translate3d(100%, 0, 0);
	}

	.turn-on-leave-to {
		/* transform: translate3d(-20%, 0, 0); */
	}

	.turn-on-enter-active,
	.turn-on-leave-active {
		transition: transform 0.4s ease;
	}

	.turn-off-enter {
		/* transform: translate3d(-20%, 0, 0); */
	}

	.turn-off-leave-to {
		transform: translate3d(100%, 0, 0);
	}

	.turn-off-enter-active,
	.turn-off-leave-active {
		transition: transform 0.4s ease;
	}

	.turn-off-leave-active {
		z-index: 2;
	}
</style>
