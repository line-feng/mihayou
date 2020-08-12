<template>
	<div style="height: 100%;">
		<van-nav-bar right-text="登录遇到问题" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<div class="title">
			欢迎来到米游社
		</div>
		<div class="Inp">

			<van-field v-model="username" label="账号" placeholder="请输入手机号或邮箱" />
			<van-field type='password' v-model="password" label="密码" placeholder="请输入密码" />
			<div style="margin: 16px;">
				<van-button @click='onSubmit()' round block type="info" native-type="submit">
					登录
				</van-button>
			</div>
			<div class="dc-flex jc-between" style='width: 90%;margin: 0 auto;'>
				<div @click="toPath()">
					注册
				</div>
				<div>
					验证码登录
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		NavBar,
		Field,
		Button,
		Dialog,
		Notify
	} from 'vant';
	export default {
		components: {
			[NavBar.name]: NavBar,
			[Field.name]: Field,
			[Button.name]: Button,
			[Dialog.name]: Dialog
		},
		data() {
			return {
				username: '',
				password: '',
			};
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onClickRight() {

			},
			onSubmit() {
				if (window.sessionStorage.userObj) {
					let userObj = JSON.parse(window.sessionStorage.userObj)
					if (this.username == '' || this.password == '') {
						Dialog({
							width: '300px',
							message: '账号密码不能为空！！！'
						});
					} else if (this.username != userObj['username'] || this.password != userObj['password']) {
						Dialog({
							width: '300px',
							message: '账号或密码输入错误！！！'
						});
					} else {
						this.$router.push('/myhomepage/myhome')
					}
				} else {
					if (this.username == '' || this.password == '') {
						Notify('账号密码不能为空');
					}else{
						Notify('账号密码错误或不存在');
					}
				}


			},
			toPath() {
				this.$router.push('/myhomepage/registered')
			}
		}
	}
</script>

<style scoped="">
	.title {
		padding: 40px 0;
		width: 80%;
		margin: 0 auto;
		font-size: 20px;
	}

	.Inp {
		width: 90%;
		margin: 0 auto;
	}
</style>
