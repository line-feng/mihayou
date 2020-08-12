<template>
	<div class="myHome" style="background: #F7F7F7;">
		<div style="background: white;">
			<div class="dc-flex jc-end iconHome">
				<van-icon name="scan" size="30" />
			</div>
			<div class="login">
				<img :src="user.img" />
				<div @click="toPath()" v-show="!user.bol">
					<div>
						点击登录
					</div>
					<div>
						登录解锁更多精彩内容
					</div>
				</div>
				<div class="dc-flex" v-show="user.bol">
					<div class='name'>
						line
					</div>
					<div>
						<!-- 12312131 -->
					</div>
				</div>
				<div>
					<van-icon name="arrow" />
				</div>
			</div>

			<div class="userLists">
				<div @click="toFocus(item.path)" class="lists" v-for="(item,index) in userList" :key='index'>
					<div>
						{{ item.num }}
					</div>
					<div>
						{{ item.title }}
					</div>
				</div>
			</div>
		</div>

		<div class="community">
			<div class="Title">
				社区等级
			</div>
			<van-swipe :loop="false" :width="165">
				<van-swipe-item @click="$router.push('/myhomepage/communitylevel')" v-for='(item,index) in 8' :key='index'>
					<img src="../../assets/mihayouImg/我的/2.png" />
				</van-swipe-item>
			</van-swipe>
		</div>

		<div class="community ">
			<div class="Title">
				米游币
			</div>
			<div class="Thecoin">
				<div>
					<img src="../../assets/mihayouImg/我的/3.png" />
					<div>
						获取米游币
					</div>
				</div>
				<div>
					<img src="../../assets/mihayouImg/我的/3.png" />
					<div>
						获取米游币
					</div>
				</div>
			</div>
		</div>

		<div v-for="(it,In) in boxlist" :key='In + "1"'>
			<div class="userlists">
				<div  @click="toFocus(item.path)" v-for="(item,index) in it" :key='index'>
					<van-cell is-link>
						<template #title>
							<div class="boxList">
								<img :src="item.img" />
								<span class="custom-title">{{ item.title }}</span>
							</div>
						</template>
						<template #right-icon>
							<div class="iconRight">
								<van-icon name="arrow" size='20'/>
							</div>
						</template>
					</van-cell>
				</div>

			</div>
		</div>
         <div class="Hei"></div>
		<bottomNavigation></bottomNavigation>
	</div>
</template>

<script>
	import {
		Icon,
		Swipe,
		SwipeItem,
		Cell
	} from 'vant'
	import bottomNavigation from '@/components/bottomNavigation'
	export default {
		components: {
			[Icon.name]: Icon,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Cell.name]: Cell,
			bottomNavigation
		},
		data() {
			return {
				user:{
					img:require('@/assets/mihayouImg/我的/1.png'),
					bol:false
				},
				userList: [{
					path:'',
					"title": '粉丝',
					"num": "0"
				}, {
					path:'/myhomepage/focus',
					"title": '关注',
					"num": this.$store.state.Focus.length
				}, {
					path:'',
					"title": '获赞',
					"num": "0"
				}],
				boxlist: [
					[{
						path:'',
						img: require('@/assets/mihayouImg/我的/4.png'),
						title: '角色管理'
					}, {
						path:'',
						img: require('@/assets/mihayouImg/我的/4.png'),
						title: '通行证'
					}, {
						path:'',
						img: require('@/assets/mihayouImg/我的/4.png'),
						title: '游戏中心'
					},{
						path:'',
						img: require('@/assets/mihayouImg/我的/4.png'),
						title: '问卷调研'
					}, ],
					[{
						path:'',
						img: require('@/assets/mihayouImg/我的/4.png'),
						title: '认证中心'
					}],
					[{
						path:'/myhomepage/setupthe',
						img: require('@/assets/mihayouImg/我的/4.png'),
						title: '设置'
					} ]
				]
			}
		},
		created() {
			if(window.sessionStorage.userObj){
				this.user.img = require('@/assets/mihayouImg/我的/touxiang.jpg')
				this.user.bol = true
			}else{
				this.user.img = require('@/assets/mihayouImg/我的/1.png')
				this.user.bol = false
			}
		},
		methods:{
			toPath(){
				this.$router.push('/myhomepage/login')
			},
			toFocus(path){
				if(path != ''){
					this.$router.push(path)
				}
			}
		}
	}
</script>

<style scoped>
	.name{
		font-size: 24px;
		/* border: 1px solid; */
		width: 180px;
	}
	.Hei{
		height: 50px;
	}
	.Thecoin>div>img {
		width: 80px;
	}

	.Thecoin {
		display: flex;
		justify-content: space-around;
	}

	.Thecoin>div {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
	}

	.Title {
		text-indent: 1.2rem;
	}

	.iconHome {
		width: 95%;
		margin: 0px auto;
	}

	.login img {
		width: 50px;
		border-radius: 50px;
	}

	.login {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 0.5px solid lightgray;
		padding-bottom: 10px;
	}

	.login>div:nth-child(2) {
		display: flex;
		width: 70%;
	}

	.login>div:nth-child(2)>div:first-child {
		font-size: 14px;
	}

	.login>div:nth-child(2)>div:last-child {
		font-size: 12px;
		line-height: 22px;
		text-indent: 0.5rem;
	}

	.userLists {
		display: flex;
		justify-content: space-around;
	}

	.lists {
		display: flex;
		flex-direction: column;
		padding: 10px 0;
		align-items: center;
	}

	.lists>div:first-child {
		font-size: 24px;
	}

	.lists>div:last-child {
		font-size: 12px;
	}

	.userlists {
		padding-top: 10px;
	}

	.community {
		margin-top: 15px;
		background: white;
		padding: 10px 0;
	}

	.community img {
		width: 150px;
		border-radius: 5px;
		overflow: hidden;
		padding: 5px 15px;
	}

	.boxList {
		display: flex;
		align-items: center;
	}

	.boxList img {
		width: 35px;
	}

	.boxList span {
		margin-left: 15px;
	}

	.iconRight {
		margin-top: 14px;
	}
</style>

<style>
	.myHome .van-swipe__indicator {
		display: none;
	}
</style>
