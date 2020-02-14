<template>
	<svg v-bind = "config">
		<use :xlink:href = "`#${name}`" />
	</svg>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: () => ""
			},

			config: {
				type: Object,
				default: () => ({
					width: 256,
					height: 256
				})
			}
		},

		computed: {
			root () { return document.head.querySelector(`#SPRITES #${this.name}`) },

			pathLength () {
				return this.root.querySelector("path").getTotalLength();
			}
		},

		mounted () {
			window.requestAnimationFrame(() => {
				this.$emit("animate");
			});
		}
	};
</script>