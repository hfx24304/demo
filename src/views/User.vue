<template>
  <div class="user">
    <button @click="toAdd()">添加</button>
  </div>
</template>

<script>

export default{
	name:"user",
	data(){
		return{
			
		}
	},
	methods:{
		toAdd(){
			this.$router.push('/add')
		}
	}
}
</script>
