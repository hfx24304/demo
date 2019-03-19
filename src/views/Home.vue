<template>
	<div class="home">
		<router-view/>
		<div class="nav">
			<ul>
				<li>
					<router-link :to="{name:'list'}">新闻列表</router-link>
				</li>
				<li>
					<router-link :to="{name:'user'}">个人中心</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "home",
		data() {
			return {

			}
		}
	}
</script>