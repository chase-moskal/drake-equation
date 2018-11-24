
import {h, render} from "preact"

import {Equation} from "./components/equation"
import {EquationStore} from "./stores/equation-store"

const equationStore = new EquationStore()

render(
	<Equation store={equationStore}/>,
	document.querySelector(".preact-equation-area")
)
