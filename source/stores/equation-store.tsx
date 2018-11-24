
import {observable, computed} from "mobx"

export class EquationStore {

	// Drake's numbers
	@observable r: number = 1
	@observable fp: number = 0.2
	@observable ne: number = 1
	@observable fl: number = 1
	@observable fi: number = 1
	@observable fc: number = 0.1
	@observable l: number = 1000

	// // Chase's numbers
	// @observable r: number = 15
	// @observable fp: number = 0.98
	// @observable ne: number = 0.4
	// @observable fl: number = 0.75
	// @observable fi: number = 0.01
	// @observable fc: number = 1
	// @observable l: number = 1000

	@computed get n() {
		const {r, fp, ne, fl, fi, fc, l} = this
		return r * fp * ne * fl * fi * fc * l
	}
}
