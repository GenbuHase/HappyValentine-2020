<template>
	<Section v-uuid data-uuid = "bg" />
</template>

<style lang = "scss" scoped>
	@import "@/variables";
	@import "../variables";


	.#{$PREFIX}__bg {
		background: color(primary-lighter);
	}
</style>

<script>
	import { UuidMixin } from "@/mixins";

	export default {
		mixins: [ UuidMixin() ]
	};
</script>