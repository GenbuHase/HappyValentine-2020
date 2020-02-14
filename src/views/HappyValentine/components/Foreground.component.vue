<template>
	<Section v-uuid data-uuid = "fg">
		<Div v-uuid data-uuid = "fg_title">
			<Sprite
				v-uuid data-uuid = "fg_title--heart"
				name = "heart" :config = "{ height: '50%' }"
			/>

			<Span v-uuid data-uuid = "fg_title--text" />
		</Div>
	</Section>
</template>

<style lang = "scss">
	@import "@/variables";
	@import "../variables";


	.#{$PREFIX}__fg {
		z-index: 127;

		&_title {
			@keyframes fg_title--phase1 { /* タイトル背景 */
				0% { width: 0; height: 0 }
				25% { height: 50% }
				50% { width: 10%; height: 50% }
				100% {
					width: 100%; height: 50%;
					transform: translateY(50%);

					background: color(primary-darker);
				}
			}

			@keyframes fg_title--phase2 { /* ハート拡大 */
				0% {
					transform: scale(0);
				}

				100% {
					fill: color(secondary-darker);
					stroke: color(secondary); stroke-width: 8;

					transform: scale(1);
				}
			}

			@keyframes fg_title--phase3 { /* ハートが往来して飛んでいく */
				0% {
					transform: rotate(0deg);
				}

				20% {
					transform: rotate(-90deg);
				}

				40% {
					transform: rotate(-90deg);
				}

				60% {
					transform: translate(250%, -15%) rotate(-105deg);
				}

				90% {
					transform: translate(150%, 50%) rotate(-45deg);
				}

				100% {
					transform: translate(-250%, -50%) rotate(135deg);
				}
			}

			@keyframes fg_title--phase4 { /* タイトル表示 */
				0% { --text: "♡" }
				10% { --text: "♡2" }
				20% { --text: "♡20" }
				30% { --text: "♡202" }
				40% { --text: "♡2020" }
				50% { --text: "♡2020." }
				60% { --text: "♡2020.2" }
				70% { --text: "♡2020.2." }
				80% { --text: "♡2020.2.1" }
				90% { --text: "♡2020.2.14" }
				100% { --text: "♡2020.2.14♡" }
			}


			& {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				width: 0; height: 0;


				&[anime-fg_title--phase1--done] {
					width: 100%; height: 50%;
					transform: translateY(50%);

					background: color(primary-darker);
				}

				animation: fg_title--phase1 2.5s ease 0s forwards;
			}

			&[anime-fg_title--phase1--done] {
				.#{$PREFIX}__fg_title--heart {
					animation: fg_title--phase2 0.75s ease-out 0.5s forwards;

					&[anime-fg_title--phase2--done] { animation: fg_title--phase3 5s ease 1s forwards }
				}
			}

			&--heart {
				fill: rgba(0, 0, 0, 0);
				stroke: rgba(0, 0, 0, 0); stroke-width: 0;

				transform: scale(0);
				transform-origin: 50% 50%;


				&[anime-fg_title--phase2--done] {
					fill: color(secondary-darker);
					stroke: color(secondary); stroke-width: 8;

					transform: scale(1);
				}
			}

			/*&--text {
				&::after { content: var(--text, "") }

				animation: fg_title--phase3 3s ease 3s forwards;
			}*/
		}
	}
</style>

<script>
	import { UuidMixin, AnimationStoreMixin } from "@/mixins";

	import Sprite from "@/components/Sprite.component";


	export default {
		components: { Sprite },
		mixins: [ UuidMixin(), AnimationStoreMixin ]
	};
</script>