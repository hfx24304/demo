<template>
	<div class="list">
		<ul>
			<li v-for="(item,index) in pageList">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	import store from '@/store'
	import demoData from '@/common/av'

	export default {
		name: "list",
		store,
		data() {
			return {
				list: []
			}
		},
		computed: {
			pageList() {
				return store.state.lists
			}
		},
		created:function (){
			console.log(demoData)
			demoData.get('5c903b97ba39c8007030272c').then(function(res) {
				console.log(res)
			})
		}
	}
</script>