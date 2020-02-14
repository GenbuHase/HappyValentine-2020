<template>
	<Section v-uuid data-uuid = "table">
		<Div v-uuid data-uuid = "table__phase1" />
	</Section>
</template>

<style lang = "scss" scoped>
	@import "@/variables";
	@import "../variables";


	.#{$PREFIX}__table {
		@keyframes table-phase1 { /* 長方形に布を広げる */
			0% { width: 0; height: 0 }
			25% { height: 50% }
			50% { width: 10%; height: 50% }
			100% {
				width: 100%; height: 50%;
				background: color(primary-darker);
			}
		}

		&__phase1 { animation: table-phase1 2.5s ease 0.5s forwards }
	}
</style>

<script>
	import { UuidMixin } from "@/mixins";

	export default {
		mixins: [ UuidMixin() ]
	};
</script>