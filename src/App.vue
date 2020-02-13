<template>
	<Main ID = "app">
		<HappyValentine />
	</Main>
</template>

<style lang = "scss">
	*, *::before, *::after { box-sizing: border-box }
</style>

<script>
	import HappyValentine from "./views/HappyValentine";

	export default {
		components: { HappyValentine }
	};
</script>