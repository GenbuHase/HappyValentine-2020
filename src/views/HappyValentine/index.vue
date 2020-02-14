<template>
	<Section v-uuid :data-uuid-prefix = "PREFIX">
		<Section v-uuid data-uuid = "bg" />
		<Section v-uuid data-uuid = "fg" />

		<Section v-uuid data-uuid = "sprites">
			<Sprite
				name = "heart"
				:config = "{
					fill: 'transparent',

					stroke: 'gray',
					'stroke-width': 8
				}"
			/>
		</Section>

		<Table />
	</Section>
</template>

<style lang = "scss" scoped>
	@import "@/variables";
	@import "./variables";


	.#{$PREFIX} {
		&__bg { background: color(primary-lighter) }
		&__fg {}

		&__sprites {
			z-index: 1;
		}
	}
</style>

<script>
	import { UuidMixin } from "@/mixins";

	import Sprite from "@/components/Sprite";
	import Table from "./components/Table";


	export const PREFIX = "happyValentine";

	export default {
		components: { Sprite, Table },
		mixins: [ UuidMixin(PREFIX) ],

		computed: {
			PREFIX () { return PREFIX }
		}
	};
</script>