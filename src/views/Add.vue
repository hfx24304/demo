<template>
	<div class="add">
		<ul>
			<li>标题</li>
			<li><input type="" name="" id="" value="" v-model="title" /></li>
			<li>内容</li>
			<li><input type="" name="" id="" value="" v-model="content" /></li>
			<li><button type="button" @click="add()">add</button></li>
		</ul>
	</div>

	
</template>

<script>
	import store from '@/store'
	export default {
		name: "add",
		store,
		data() {
			return {
				title: '',
				content: ''
			}
		},
		methods: {
			add() {
				store.commit('addItem', {
					title: this.title,
					content: this.content
				});
				this.title = '';
				this.content = '';
				this.$router.push('/home/list');
			}
		}
	}
</script>