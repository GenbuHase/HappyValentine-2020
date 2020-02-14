/**
 * @param {string} uuidPrefix
 * @return {import("vue").ComponentOptions}
 */
export const UuidMixin = uuidPrefix => ({
	directives: {
		uuid: {
			inserted (el) {
				const { uuid } = el.dataset;

				let prefixed = uuidPrefix || (() => {
					let node = el;
					while (node && (node = node.parentNode)) {
						if (node.dataset.uuidPrefix) return node.dataset.uuidPrefix;
					}

					throw new Error('"data-uuid-prefix" must be contained in at least one element');
				})();

				if (uuid) {
					prefixed += `__${uuid}`;
				} else {
					el.dataset.uuid = "$root",
					el.dataset.uuidPrefix = uuidPrefix;

					prefixed += "--root";
				}

				el.classList.add(prefixed);
			}
		}
	},
});