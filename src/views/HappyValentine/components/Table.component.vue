<template>
	<Section v-uuid data-uuid = "table">
		<Div v-uuid data-uuid = "table--phase1" />
	</Section>
</template>

<style lang = "scss">
	@import "@/variables";
	@import "../variables";


	.#{$PREFIX}__table {
		z-index: 11;
	}
</style>

<script>
	import { UuidMixin } from "@/mixins";

	export default {
		mixins: [ UuidMixin() ]
	};
</script>