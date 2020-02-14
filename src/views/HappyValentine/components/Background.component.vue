<template>
	<Section v-uuid data-uuid = "bg" />
</template>

<style lang = "scss">
	@import "@/variables";
	@import "../variables";


	.#{$PREFIX}__bg {
		z-index: 0;
		background: color(primary-lighter);
	}
</style>

<script>
	import { UuidMixin } from "@/mixins";

	export default {
		mixins: [ UuidMixin() ]
	};
</script>