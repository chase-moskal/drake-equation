
import {shop} from "./shop"

shop({
	precision: 2,
	evaluator: product => (
		(/ticket/i.test(product.title))
			? {
				quantityMin: 1,
				quantityMax: 2,
				precision: 0
			}
			: {
				quantityMin: 1,
				quantityMax: 5
			}
	)
})
