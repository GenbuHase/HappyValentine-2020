<template>
	<Section v-uuid data-uuid = "fg">
		<Div v-uuid data-uuid = "fg_title">
			<Sprite
				v-uuid data-uuid = "fg_title--heart"
				name = "heart" :config = "{ height: '50%' }"
			/>

			<Sprite
				v-uuid data-uuid = "fg_title--message"
				name = "heart-message" :config = "{ height: '50%' }"
			/>
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
				0% { transform: rotate(0deg) }
				20% { transform: rotate(-90deg) }
				40% { transform: rotate(-90deg) }
				50% { transform: translate(200%, -75%) rotate(-135deg) scale(0.9) }
				60% { transform: translate(250%, -50%) rotate(-120deg) scale(0.8) }
				80% { transform: translate(225%, 50%) rotate(45deg) scale(0.6) }
				90% { transform: translate(200%, 50%) rotate(60deg) scale(0.8) }
				100% { transform: translate(-250%, -50%) rotate(135deg) scale(1.4) }
			}

			@keyframes fg_title--phase4 { /* ハートが中心に戻ってくる */
				0% {
					opacity: 0;
					transform: scale(0);
				}

				80% {
					transform: scale(1.2);
				}

				100% {
					opacity: 1;
					transform: scale(1);
				}
			}

			@keyframes fg_title--phase5 { /* タイトル表示 */
				0% { transform: scale(0) }
				80% { transform: scale(1.2) }
				100% { transform: scale(1) }
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

				animation: fg_title--phase1 2.5s ease 0s;
			}

			&[anime-fg_title--phase1--done] {
				.#{$PREFIX}__fg_title--heart {
					animation: fg_title--phase2 0.75s ease-out 0.5s;

					&[anime-fg_title--phase2--done] { animation: fg_title--phase3 5s ease-in 1s }
					&[anime-fg_title--phase3--done] { animation: fg_title--phase4 0.75s ease 1s }
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

				&[anime-fg_title--phase3--done] {
					fill: rgba(0, 0, 0, 0);
					opacity: 0;
				}

				&[anime-fg_title--phase4--done] {
					opacity: 1;

					& + .#{$PREFIX}__fg_title--message { animation: fg_title--phase5 0.75s ease 0s }
				}
			}

			&--message {
				position: absolute;

				fill: rgba(0, 0, 0, 0);
				stroke: rgba(0, 0, 0, 0); stroke-width: 0;

				transform: scale(0);
				transform-origin: 50% 50%;


				&[anime-fg_title--phase5--done] { transform: scale(1) }
			}
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