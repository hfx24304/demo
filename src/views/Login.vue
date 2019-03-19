<template>
	<div class="login">
		<form name="land" v-if="!isReg">
			<ul>
				<li>用户名：<input type="" name="" id="" value="" v-model="name" /></li>
				<li>密码：<input type="" name="" id="" value="" v-model="passworld" /></li>
			</ul>
			<button type="button" @click="land()">登录</button>
			<button type="button" @click="reg()">注册</button>
		</form>
		<form name="reg" v-else>
			<ul>
				<li>用户名：<input type="" name="" id="" value="" v-model="name" /></li>
				<li>密码：<input type="" name="" id="" value="" v-model="passworld" /></li>
				<li>二次密码：<input type="" name="" id="" value="" v-model="repeat" /></li>
			</ul>
			<button type="button" @click="addUser()">确定</button>
			<button type="button" @click="cancel()">取消</button>
		</form>

	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				isReg: false,
				name: '',
				passworld: '',
				repeat: ''
			}
		},
		methods: {
			land() {
				if(localStorage.name === this.name && localStorage.passworld === this.passworld) {
					this.$router.push('/home/list')
				} else {
					alert("请输入 正确的用户密码")
				}
			},
			reg() {
				this.isReg = true
			},
			cancel() {
				this.isReg = false
			},
			addUser() {
				if(this.repeat === this.passworld) {
					localStorage.setItem("name", this.name);
					localStorage.setItem('passworld', this.passworld);
					this.isReg = false
				} else {
					alert("两次密码不一样")
				}
			}
		}
	}
</script>