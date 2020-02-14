/**
 * @typedef {"running" | "done"} AnimationState
 */

export class AnimationStore {
	static get STORE_ID () { return "animeStore" }


	/**
	 * @param {HTMLElement} el
	 * @param {string} anime
	 *
	 * @return {AnimationState | null}
	 */
	static get (el, anime) { return this.list(el)[anime] || null }

	/**
	 * @param {HTMLElement} el
	 * @param {string} anime
	 * @param {AnimationState} state
	 */
	static set (el, anime, state) {
		if (!el) throw new Error('"el" must be a HTMLElement');

		const store = this.get(el);
		el.dataset[this.STORE_ID] = JSON.stringify(Object.assign({}, store, { [anime]: state }));
	}

	/**
	 * @param {HTMLElement} el
	 * @return {Object<string, AnimationState | null>}
	 */
	static list (el) { return JSON.parse(this._getStore(el) || "{}") }


	/**
	 * @param {HTMLElement} el
	 * @return {string}
	 */
	static _getStore (el) {
		if (!el) throw new Error('"el" must be a HTMLElement');
		return el.dataset[this.STORE_ID];
	}
}


/** @type {import("vue").ComponentOptions} */
export const AnimationStoreMixin = {
	mounted () {
		this.$el.addEventListener("animationstart", this.handleAnimationStart);
		this.$el.addEventListener("animationend", this.handleAnimationEnd);
	},

	methods: {
		/** @param {AnimationEvent} e */
		handleAnimationStart (e) {
			const el = e.target;
			el.setAttribute(`anime-${e.animationName}--running`, "");

			AnimationStore.set(el, e.animationName, "running");
		},

		/** @param {AnimationEvent} e */
		handleAnimationEnd (e) {
			const el = e.target;
			el.removeAttribute(`anime-${e.animationName}--running`),
			el.setAttribute(`anime-${e.animationName}--done`, "");

			AnimationStore.set(el, e.animationName, "done");
		}
	}
};