
# relly — easy relative sizing for the web

### [→ relly demo page ←](https://chasemoskal.com/relly/)

## download/install relly

- **install it into your hip project**
	- install it — `npm install relly`
	- import it — `import * as relly from "relly"`
	- use styles and other stuff in `node_modules/relly/dist/`
- **geezer mode: direct downloads and html tags**
	- download directly (save-as)
		- [*relly.global.bundle.js*](https://github.com/chase-moskal/relly/raw/gh-pages/dist/relly.global.bundle.js) — make "relly" object globally available
		- [*relly.scss*](https://github.com/chase-moskal/relly/raw/gh-pages/source/relly.scss) — mixins for sass
		- [*relly.css*](https://github.com/chase-moskal/relly/raw/gh-pages/dist/relly.css) — some handy css classes
	- place your html tags
		- `<script src="node_modules/relly/dist/relly.global.bundle.js"></script>`
		- `<link rel="stylesheet" href="node_modules/relly/dist/relly.css"/>`

----

## scss mixins (`relly/source/relly.scss`)

### relly-aspectbox(`$x, $y`)

- have an element maintain a specific aspect ratio

- for example, you could force a box to take on a 16/9 aspect ratio

- sass mixin
	```scss
	@import "node_modules/relly/dist/relly.scss";

	.mydiv {
		@include relly-aspectbox(16, 9)
	}
	```

- prefab css classes
	```html
	<link rel="stylesheet" href="node_modules/relly/dist/relly.css"/>

	<div class="mydiv relly-aspectbox-16-9 relly-reltext">
		reltext inside an aspectbox
	</div>
	```

### relly-aspectfrac(`$fraction`)

- same as `relly-aspectbox` above, however allowing direct input of the ratio fraction

- sass mixin
	```scss
	@import "node_modules/relly/dist/relly.scss";

	.mydiv {
		@include relly-aspectfrac(56.25%);
	}
	```

----

## javascript functions

### relly.reltext()

- maintain font-size relative to an element's height, by a specific fraction

- javascript function which maintains the font size of an element relative to 
the element's own height

	```js
	// just call reltext
	relly.reltext()

	// alternatively: you can pass parameters, here's an example with the defaults
	const elements = document.querySelectorAll(".relly-reltext")
	const fraction = 5 / 100 // font-size 1em becomes 5% of each element's height
	relly.reltext({elements, fraction})
	```
