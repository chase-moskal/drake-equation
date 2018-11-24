"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shop_1 = require("./shop");
shop_1.shop({
    precision: 2,
    evaluator: function (product) { return ((/ticket/i.test(product.title))
        ? {
            quantityMin: 1,
            quantityMax: 2,
            precision: 0
        }
        : {
            quantityMin: 1,
            quantityMax: 5
        }); }
});
//# sourceMappingURL=demo.js.map