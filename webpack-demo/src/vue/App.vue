<template>
	<div class="demo">
		{{message}}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				message:"你好啊,李银河！！"
			}
		}
	}
</script>

<style scoped lang="less">
	.demo{
		color: pink;
		font-size: 40px;
	}
</style>
