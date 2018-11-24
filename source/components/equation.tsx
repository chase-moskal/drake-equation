
import {runInAction} from "mobx"
import {h, Component} from "preact"
import {observer} from "mobx-preact"

import {EquationStore} from "../stores/equation-store"

function formatDecimalsDynamically(n: number) {
	if (n === 0) return n.toFixed(0)
	else if (n < 1) return n.toFixed(2)
	else if (n < 100) return n.toFixed(1)
	else return n.toFixed(0)
}

const zeroize = (n: number) => n === 0
	? {"data-zero": true}
	: {}

@observer
export class Equation extends Component<{store: EquationStore}> {

	private prepEventHandlers(term: string) {
		const changeHandler = event => {
			const {store} = this.props
			const {value: rawValue} = event.currentTarget
			const value = parseFloat(rawValue)
			runInAction(() => { store[term] = value })
		}
		return {
			onChange: changeHandler,
			onKeyUp: changeHandler,
			onClick: changeHandler
		}
	}

	render() {
		const {store} = this.props
		return (
			<div className="equation">

				<div class="equation-term" data-term="n">
					<div class="term-name">
						N
					</div>
					<div class="term-definition">
						Number of civilizations in the Milky Way
					</div>
					<div class="term-interactive">
						<output {...zeroize(store.n)}>
							{formatDecimalsDynamically(store.n)}
						</output>
					</div>
				</div>

				<div class="equation-term">
					<div class="term-name">=</div>
					<div class="term-definition"></div>
					<div class="term-interactive"></div>
				</div>

				<div class="equation-term" data-term="r">
					<div class="term-name">
						R<sub>*</sub>
					</div>
					<div class="term-definition">Rate of star formation</div>
					<div class="term-interactive">
						<input
							type="number"
							min="0"
							value={store.r}
							{...zeroize(store.r)}
							{...this.prepEventHandlers("r")}
							/>
					</div>
				</div>

				<div class="equation-term">
					<div class="term-name">
						F<sub>p</sub>
					</div>
					<div class="term-definition">
						Fraction of stars with planets
					</div>
					<div class="term-interactive">
						<input
							type="number"
							min="0"
							max="1"
							step="0.1"
							value={store.fp}
							{...zeroize(store.fp)}
							{...this.prepEventHandlers("fp")}
							/>
					</div>
				</div>

				<div class="equation-term">
					<div class="term-name">
						N<sub>e</sub>
					</div>
					<div class="term-definition">
						Number of habitable planets per planetary system
					</div>
					<div class="term-interactive">
						<input
							type="number"
							min="0"
							step="0.25"
							value={store.ne}
							{...zeroize(store.ne)}
							{...this.prepEventHandlers("ne")}
							/>
					</div>
				</div>

				<div class="equation-term">
					<div class="term-name">
						F<sub>l</sub>
					</div>
					<div class="term-definition">
						Fraction of habitable planets which develop life
					</div>
					<div class="term-interactive">
						<input
							type="number"
							min="0"
							max="1"
							step="0.1"
							value={store.fl}
							{...zeroize(store.fl)}
							{...this.prepEventHandlers("fl")}
							/>
					</div>
				</div>

				<div class="equation-term">
					<div class="term-name">
						F<sub>i</sub>
					</div>
					<div class="term-definition">
						Fraction of life which becomes intelligent
					</div>
					<div class="term-interactive">
						<input
							type="number"
							min="0"
							max="1"
							step="0.1"
							value={store.fi}
							{...zeroize(store.fi)}
							{...this.prepEventHandlers("fi")}
							/>
					</div>
				</div>

				<div class="equation-term">
					<div class="term-name">
						F<sub>c</sub>
					</div>
					<div class="term-definition">
						Fraction of intelligence which is communicative
					</div>
					<div class="term-interactive">
						<input
							type="number"
							min="0"
							max="1"
							step="0.1"
							value={store.fc}
							{...zeroize(store.fc)}
							{...this.prepEventHandlers("fc")}
							/>
					</div>
				</div>

				<div class="equation-term">
					<div class="term-name">
						L
					</div>
					<div class="term-definition">
						Lifespan of civilization in years
					</div>
					<div class="term-interactive">
						<input
							type="number"
							min="0"
							value={store.l}
							{...zeroize(store.l)}
							{...this.prepEventHandlers("l")}
							/>
					</div>
				</div>

			</div>
		)
	}
}
