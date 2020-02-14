<template>
	<Section v-uuid :data-uuid-prefix = "PREFIX">
		<Background />
		<Sprites />
		<Table />
	</Section>
</template>

<script>
	import { UuidMixin } from "@/mixins";

	import Background from "./components/Background.component";
	import Sprites from "./components/Sprites.component";
	import Table from "./components/Table.component";


	export const PREFIX = "happyValentine";

	export default {
		components: { Background, Sprites, Table },
		mixins: [ UuidMixin(PREFIX) ],

		computed: {
			PREFIX () { return PREFIX }
		}
	};
</script>