<template>
	<Section v-uuid data-uuid = "sprites">
		<Sprite name = "heart" display = "none" />
	</Section>
</template>

<style lang = "scss" scoped>
	@import "@/variables";
	@import "../variables";


	.#{$PREFIX}__sprites {
		z-index: 1;
	}
</style>

<script>
	import { UuidMixin } from "@/mixins";

	import Sprite from "@/components/Sprite.component";


	export default {
		components: { Sprite },
		mixins: [ UuidMixin() ]
	};
</script>