(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var relly=require("./relly");window.relly=relly;

},{"./relly":2}],2:[function(require,module,exports){
"use strict";function applyRelativeFontSize(e,t){var r=e.clientHeight;e.style.fontSize=r*t+"px"}function reltext(e){for(var t=void 0===e?{}:e,r=t.elements,n=void 0===r?document.querySelectorAll(".relly-reltext"):r,i=t.fraction,o=void 0===i?.05:i,l=[],a=function(e){var t=function(t){return applyRelativeFontSize(e,o)};l.push(t),window.addEventListener("resize",t),applyRelativeFontSize(e,o)},v=0,u=n=Array.from(n);v<u.length;v++){a(u[v])}return function(){for(var e=0,t=l;e<t.length;e++){var r=t[e];window.removeEventListener("resize",r)}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.reltext=reltext;

},{}]},{},[1]);
