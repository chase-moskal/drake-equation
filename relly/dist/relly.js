"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function applyRelativeFontSize(element, fraction) {
    var height = element.clientHeight;
    element.style.fontSize = (height * fraction) + "px";
}
function reltext(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.elements, elements = _c === void 0 ? document.querySelectorAll(".relly-reltext") : _c, _d = _b.fraction, fraction = _d === void 0 ? 5 / 100 : _d;
    elements = Array.from(elements);
    var listeners = [];
    var _loop_1 = function (element) {
        var listener = function (event) { return applyRelativeFontSize(element, fraction); };
        listeners.push(listener);
        window.addEventListener("resize", listener);
        applyRelativeFontSize(element, fraction);
    };
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var element = elements_1[_i];
        _loop_1(element);
    }
    return function dispose() {
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
            var listener = listeners_1[_i];
            window.removeEventListener("resize", listener);
        }
    };
}
exports.reltext = reltext;
//# sourceMappingURL=relly.js.map