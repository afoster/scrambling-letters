!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self,t.Scrambler=e())}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return n(t)||r(t)||o()}function n(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(n){if(u(n)||c(n))return!1;var r=a(n)||"object"===t(n);return r&&(n.target=void 0!==n.target&&r?n.target:"[data-scrambler]",n.random=void 0!==n.random&&r?n.random:[1e3,3e3],n.speed=void 0!==n.speed&&r?n.speed:100,n.text=!(void 0===n.text||!r)&&n.text),e(r?document.querySelectorAll(n.target):document.querySelectorAll(n)).forEach(function(t){if("true"!==t.getAttribute("data-scramble-active")){t.setAttribute("data-scramble-active","true");var e=t.textContent.split(""),r=t.innerHTML,o=e,i=t.textContent.split(""),u=[],c=n.speed?n.speed:100,s=!1,d=function(n){var r=n||t.textContent;e=r.split(""),i=r.split("");var a=[];e.forEach(function(t,n){" \t\n\r\v".indexOf(e[n])>-1?a.push(" "):a.push(f())}),o=a};n.text&&""!==n.text&&("string"==typeof n.text||n.text instanceof String)?(d(n.text),s=!0):t.getAttribute("data-scramble-text")&&""!==t.getAttribute("data-scramble-text")&&(d(t.getAttribute("data-scramble-text")),s=!0);var m=setInterval(function(){if(o.map(function(r,o){return!(" \t\n\r\v".indexOf(r)>-1)&&(i[o]=f(),setTimeout(function(){u[o]=!0},l(a(n),n.random)),!0===u[o]&&(i[o]=e[o]),t.textContent=i.join(""),!0)}),i.length===e.length&&i.every(function(t,n){return t===e[n]})){if(t.innerHTML=r,s){var c=t.children[0];c&&""!==c?c.textContent=i.join(""):t.textContent=i.join("")}clearInterval(m),t.setAttribute("data-scramble-active","false")}},c)}}),!0}var a=function(t){return!!t&&t.constructor===Object},u=function(t){return!!t&&t.constructor===Array},c=function(t){return"boolean"==typeof t},f=function(t,e){var n=t||1,r=e||!1,o=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,n);return" \t\n\r\v".indexOf(o)<0&&!0!==r&&o},l=function(t,e){return(t||!1)&&u(e)&&e.length>1?e[0]+(Math.random()*(1-e[1])+e[1]):-2999*Math.random()+3e3+1e3};return function(){return i}()});