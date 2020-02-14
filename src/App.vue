<template>
	<Main ID = "app">
		<HappyValentine />
	</Main>
</template>

<style lang = "scss">
	*, *::before, *::after { box-sizing: border-box }

	img:not([alt]) { filter: none }


	body {
		height: 100vh;
		overflow: hidden;
	}

	#SPRITES { display: none }

	#app {
		height: 100%;

		*[data-uuid = "$root"] {
			display: block;
			width: 100%; height: 100%;


			& > * {
				position: absolute;
				left: 0; top: 0;

				display: block;
				width: 100%; height: 100%;
			}
		}
	}
</style>

<script>
	import HappyValentine from "./views/HappyValentine";

	export default {
		components: { HappyValentine },

		mounted () {
			this.loadSprites();
		},

		methods: {
			async loadSprites () {
				const contents = await (await fetch("./assets/sprites.svg")).text();

				const svgWrapper = document.createElement("div");
				svgWrapper.id = "SPRITES",
				svgWrapper.innerHTML = contents;

				document.head.appendChild(svgWrapper);
			}
		}
	};
</script>