!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.popover=t(require("react")):e.popover=t(e.react)}(this,function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(t,o){t.exports=e},function(e,t,o){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===i)for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return h});var n=o(0),r=o.n(n),i=o(1),s=o.n(i);o(3);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var h=function(e){function t(){var e,o,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=this,r=(e=p(t)).call.apply(e,[this].concat(s)),o=!r||"object"!==a(r)&&"function"!=typeof r?l(n):r,f(l(o),"_timer",null),f(l(o),"_isMounted",!1),f(l(o),"_mouseEntered",!1),f(l(o),"showDropdown",function(){o._clearTimer(),o.state.showDropdown||(o._timer=window.setTimeout(function(){this._setState({showDropdown:!0})}.bind(l(o)),100))}),f(l(o),"hideDropdown",function(){o._clearTimer(),o.state.showDropdown&&(o._timer=window.setTimeout(function(){this.closeDropdown()}.bind(l(o)),100))}),f(l(o),"scrollCloseDropdown",function(){o._mouseEntered||o.closeDropdown()}),f(l(o),"mouseEntered",function(){o._mouseEntered=!0}),f(l(o),"mouseLeft",function(){o._mouseEntered=!1}),f(l(o),"state",{showDropdown:!1}),f(l(o),"handleStateChange",function(){o._setState({showDropdown:!o.state.showDropdown})}),o}var o,i,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),o=t,(i=[{key:"closeDropdown",value:function(){this._setState({showDropdown:!1})}},{key:"closeDropdownIfOther",value:function(e){e.dropdown!==this&&this.closeDropdown()}},{key:"addEventListeners",value:function(){this.props.closeOnScroll&&!this._hasEventListener&&(window.addEventListener("scroll",this.scrollCloseDropdown,!1),window.addEventListener("show_dropdown",this.closeDropdownIfOther,!1),this._hasEventListener=!0)}},{key:"removeEventListeners",value:function(){window.removeEventListener("scroll",this.scrollCloseDropdown,!1),window.removeEventListener("show_dropdown",this.closeDropdownIfOther,!1),this._hasEventListener=!1}},{key:"_clearTimer",value:function(){window.clearTimeout(this._timer)}},{key:"getDropdown",value:function(){return this.state.showDropdown&&this.props.show?r.a.createElement("div",{className:"".concat(this.state.showDropdown?"":"isHidden").concat(this.props.onHover&&!this._isMounted?"dropdownContHover":"").concat(s()(this.props.dropdownComponentClass)),onMouseEnter:this.mouseEntered,onMouseLeave:this.mouseLeft},this.props.onHover?void 0:r.a.createElement("div",{onClick:this.handleStateChange,className:"mask"}),r.a.createElement("div",{className:"listSlideInAnimation"},this.props.caret&&r.a.createElement("span",{className:"caret ".concat(this.props.isSecondary?"caretSecondary":"")}),r.a.createElement("div",{className:"\n                            ".concat("dropdownContainer ".concat(this.props.isSecondary?"dropdownContainerSecondary":""),"\n                            ").concat(["dropdownContainer--".concat(this.props.dropdownAlignment)])},r.a.cloneElement(this.props.dropdownComponent,{})))):null}},{key:"render",value:function(){var e={},t={};return this.props.onHover&&(e.onMouseEnter=this.showDropdown,e.onMouseLeave=this.hideDropdown,this.props.disableClickOnHover||(t.onClick=this.hideDropdown)),r.a.createElement("div",c({className:"popover-container ".concat(this.props.onHover?"popover-container__hover":"")},e),this.props.onHover?r.a.createElement("div",c({className:"".concat(s()(this.props.buttonComponentClass))},t),this.props.buttonComponent):r.a.createElement("div",{className:"".concat(s()(this.props.buttonComponentClass)),onClick:this.handleStateChange},this.props.buttonComponent),this.getDropdown())}},{key:"componentDidUpdate",value:function(e,t){!t.showDropdown&&this.state.showDropdown?this.addEventListeners():t.showDropdown&&!this.state.showDropdown&&this.removeEventListeners()}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.removeEventListeners()}},{key:"_setState",value:function(e,t){this._isMounted&&this.setState(e,t)}}])&&u(o.prototype,i),h&&u(o,h),t}()},function(e,t,o){}])});