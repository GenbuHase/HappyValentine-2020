<template>
	<Section v-uuid :data-uuid-prefix = "PREFIX">
		<Background />
		<Sprites />
		<Table />
		<Foreground />
	</Section>
</template>

<script>
	import { UuidMixin } from "@/mixins";

	import Background from "./components/Background.component";
	import Foreground from "./components/Foreground.component";
	import Sprites from "./components/Sprites.component";
	import Table from "./components/Table.component";


	export const PREFIX = "happyValentine";

	export default {
		components: { Background, Foreground, Sprites, Table },
		mixins: [ UuidMixin(PREFIX) ],

		computed: {
			PREFIX () { return PREFIX }
		}
	};
</script>