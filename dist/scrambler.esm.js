function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _iterableToArray(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function _iterableToArrayLimit(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],n=!0,a=!1,o=void 0;try{for(var i,l=r[Symbol.iterator]();!(n=(i=l.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){a=!0,o=r}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return t}}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Scramble(r,e){return new Promise(function(t,n){if(void 0===r&&n("Target element is undefined"),"true"!==r.getAttribute("data-scramble-active")){e.beforeEach&&e.beforeEach(r),r.setAttribute("data-scramble-active","true"),r.classList.add("scrambling");var a,o=r.innerHTML,i=[],l=e.speed?e.speed:100,u=r.textContent.split(""),c=u,f=r.textContent.split(""),s=!1;isValidString(e.text)?a=defineEndText(e.text):r.getAttribute("data-scramble-text")&&""!==r.getAttribute("data-scramble-text")&&(a=defineEndText(r.getAttribute("data-scramble-text"))),a&&(s=!0,u=a.truth,f=a.newLetters,c=a.startText);var d=function(){if(c.map(function(t,n){return!(" \t\n\r\v".indexOf(t)>-1)&&(e.numbersOnly?f[n]=Math.floor(10*Math.random()):f[n]=randomChar(),!0===i[n]&&(f[n]=u[n]),r.textContent=f.join(""),!0)}),killCheck(f,u)){if(r.innerHTML=o,s){var n=r.children[0];n&&""!==n?n.textContent=f.join(""):r.textContent=f.join("")}clearInterval(b),r.setAttribute("data-scramble-active","false"),r.classList.remove("scrambling"),e.afterEach&&e.afterEach(r),t(r)}};!function(r){if(r&&isArray(r))for(var t=0;t<=r.length;t++)!function(r){setTimeout(function(){i[r]=!0},randomTime(isObject(e),e.random,e.speed))}(t)}(c),d();var b=setInterval(function(){d()},l)}else n("Animation already triggered")})}function ScramblerSetup(r){if(!isValidArgType(r))return!1;var e=setArgs(r,isObject(r)),t=_toConsumableArray(isObject(e)?document.querySelectorAll(e.target):document.querySelectorAll(e)),n=[];if(t.forEach(function(r){var t=Scramble(r,e);n.push(t)}),!(n.length>0))return!1;e.beforeAll&&e.beforeAll(t),Promise.all(n).then(function(r){e.afterAll&&e.afterAll(r)}).catch(function(r){e.errorHandler&&e.errorHandler(r)})}var isObject=function(r){return!!r&&r.constructor===Object},isArray=function(r){return!!r&&r.constructor===Array},isBool=function(r){return"boolean"==typeof r},isFunction=function(r){return"function"==typeof r},isInteger=function(r){return Number.isInteger(r)},isValidString=function(r){return!(!r||""===r||!("string"==typeof r||r instanceof String))},isValidArgType=function(r){return!isArray(r)&&!isBool(r)&&"number"!=typeof r&&"function"!=typeof r&&void 0!==r},randomChar=function(r,e){var t=r||1,n=e||!1,a=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,t);return" \t\n\r\v".indexOf(a)<0&&!0!==n&&a},randomTime=function(r,e,t){var n=r||!1,a=t||100;if(n&&isArray(e)&&e.length>1){var o=_slicedToArray(e,2),i=o[0],l=o[1];if((t>=l||a>=l)&&(a=l-1),l-=a,i>l&&(i=l),isInteger(i)&&isInteger(l))return Math.floor(Math.random()*(l-i))+i}return Math.floor(1999*Math.random())+1e3},setArgs=function(r,e){var t=e||!1,n={target:"[data-scrambler]",random:[1e3,3e3],speed:100,text:!1,beforeEach:!1,afterEach:!1,beforeAll:!1,afterAll:!1,errorHandler:!1};return r&&t&&(n.target=void 0!==r.target?r.target:"[data-scrambler]",n.random=void 0!==r.random?r.random:[1e3,3e3],n.speed=void 0!==r.speed?r.speed:100,n.text=void 0!==r.text&&r.text,n.beforeEach=!(void 0===r.beforeEach||!isFunction(r.beforeEach))&&r.beforeEach,n.afterEach=!(void 0===r.afterEach||!isFunction(r.afterEach))&&r.afterEach,n.beforeAll=!(void 0===r.beforeAll||!isFunction(r.beforeAll))&&r.beforeAll,n.afterAll=!(void 0===r.afterAll||!isFunction(r.afterAll))&&r.afterAll,n.errorHandler=!(void 0===r.errorHandler||!isFunction(r.errorHandler))&&r.errorHandler),n},killCheck=function(r,e){return!(r.length!==e.length||!r.every(function(r,t){return r===e[t]}))},defineEndText=function(r){if(!r||void 0===r||!("string"==typeof r||r instanceof String))return!1;var e,t=r,n=t.split(""),a=t.split(""),o=[];return n.forEach(function(r,e){" \t\n\r\v".indexOf(n[e])>-1?o.push(" "):o.push(randomChar())}),e=o,{truth:n,newLetters:a,startText:e}},scrambler=function(){return ScramblerSetup}();export default scrambler;
