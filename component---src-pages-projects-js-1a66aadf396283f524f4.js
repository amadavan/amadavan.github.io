(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0Z05":function(e,t,r){"use strict";r("F7A6"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),r("Wc9Z");var n,o=(n=r("jP3g"))&&n.__esModule?n:{default:n}},"16l3":function(e,t,r){"use strict";r.r(t);r("LJRI");var n=r("q1tI"),o=r.n(n),a=r("Bl7J"),u=(r("d3jB"),r("kHyk"),r("6CJU"),r("Qvrb")),l=r.n(u),c=r("IP2g"),i=r("61US"),f=r("mtt3");var s=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.data;return o.a.createElement(l.a,null,e.banner&&o.a.createElement(l.a.Image,{src:e.banner,alt:e.title}),!e.banner&&o.a.createElement(l.a.Header,null,o.a.createElement(l.a.Header.Title,null,e.title)),o.a.createElement(l.a.Content,null,e.description),o.a.createElement(l.a.Footer,null,e.github&&o.a.createElement(l.a.Footer.Item,{renderAs:"a",href:e.github},o.a.createElement(c.a,{icon:i.faGithub,size:"lg"})),e.docs&&o.a.createElement(l.a.Footer.Item,{renderAs:"a",href:e.docs},o.a.createElement(c.a,{icon:f.faBook,size:"lg"}))))},n}(o.a.Component),p=r("0Z05"),d=r.n(p),b=r("pCl6"),y=r.n(b),O=r("CT3/"),v=r.n(O),m=r("hE6H"),j=r.n(m),g=r("b0CE");t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(d.a,null,o.a.createElement(y.a,null,o.a.createElement(j.a,null,"Projects"),o.a.createElement(v.a,null,g&&g.map((function(e){return o.a.createElement(s,{data:e})}))))))}},"3eDP":function(e,t,r){"use strict";r("d3jB"),r("kHyk"),r("w13F"),r("rGyw"),r("3AgJ"),r("njko"),r("8x/H"),r("ER96"),r("UsjJ"),r("1l2C"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("sWLi"),r("tKM+"),r("bP/v"),r("K6vE"),r("UtXx"),r("Sb2m"),r("JGbM"),r("KNqU"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t=f();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=i(r("17x9")),a=i(r("TSYQ")),u=i(r("aoZ9")),l=i(r("8tBF")),c=i(r("dxvM"));function i(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=v(t).call(this,e),r=!o||"object"!==d(o)&&"function"!=typeof o?m(n):o,g(m(r),"onError",(function(){r.setState({src:r.props.fallback})})),r.state={},r}var r,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){var e,t=this.props,r=t.className,o=t.alt,u=t.size,l=(t.fallback,t.rounded),i=(t.src,t.fullwidth),f=y(t,["className","alt","size","fallback","rounded","src","fullwidth"]),s=u;return"number"==typeof u&&(s="".concat(s,"x").concat(s)),n.default.createElement(c.default,b({},f,{renderAs:"figure",className:(0,a.default)("image",r,(e={},g(e,"is-".concat(s),s),g(e,"is-fullwidth",i),e))}),n.default.createElement("img",{className:(0,a.default)({"is-rounded":l}),onError:this.onError,src:this.state.src,alt:o}))}}])&&O(r.prototype,o),u&&O(r,u),t}(n.PureComponent);t.default=h,g(h,"getDerivedStateFromProps",(function(e,t){return{src:t.default!==e.src?e.src:t.src,default:e.src}})),h.propTypes=p({},l.default.propTypes,{className:o.default.string,src:o.default.string,alt:o.default.string,rounded:o.default.bool,style:o.default.shape({}),size:o.default.oneOf(u.default.SIZES),fallback:o.default.string,fullwidth:o.default.bool}),h.defaultProps=p({},l.default.defaultProps,{className:void 0,src:"",alt:"",rounded:!1,style:void 0,size:void 0,fallback:"https://bulma.io/images/placeholders/480x480.png",fullwidth:!1})},"61US":function(e,t,r){"use strict";r("F7A6"),Object.defineProperty(t,"__esModule",{value:!0});var n=[],o="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";t.definition={prefix:"fab",iconName:"github",icon:[496,512,n,"f09b",o]},t.faGithub=t.definition,t.prefix="fab",t.iconName="github",t.width=496,t.height=512,t.ligatures=n,t.unicode="f09b",t.svgPathData=o},"6CJU":function(e,t,r){},"8mR4":function(e,t,r){"use strict";r("F7A6"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r("XO0+"))&&n.__esModule?n:{default:n}},"CT3/":function(e,t,r){"use strict";r("F7A6"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),r("MTA8");var n,o=(n=r("Mb+U"))&&n.__esModule?n:{default:n}},Emr5:function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("UsjJ"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("q1tI")),o=i(r("17x9")),a=i(r("TSYQ")),u=i(r("8tBF")),l=i(r("dxvM")),c=i(r("1REc"));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=function(e){var t=e.className,r=b(e,["className"]);return n.default.createElement(l.default,d({},r,{className:(0,a.default)("card-footer-item",t)}))};y.propTypes=s({},u.default.propTypes,{className:o.default.string,renderAs:c.default}),y.defaultProps=s({},u.default.defaultProps,{className:void 0,renderAs:"div"});var O=y;t.default=O},"F4+J":function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("UsjJ"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("q1tI")),o=i(r("17x9")),a=i(r("TSYQ")),u=i(r("8tBF")),l=i(r("dxvM")),c=i(r("1REc"));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=function(e){var t=e.className,r=b(e,["className"]);return n.default.createElement(l.default,d({},r,{className:(0,a.default)("card-header-title",t)}))};y.propTypes=s({},u.default.propTypes,{className:o.default.string,renderAs:c.default}),y.defaultProps=s({},u.default.defaultProps,{className:void 0,renderAs:"div"});var O=y;t.default=O},JWAM:function(e,t,r){},M3Gi:function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("UsjJ"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r("q1tI")),o=s(r("17x9")),a=s(r("TSYQ")),u=s(r("F4+J")),l=s(r("dQle")),c=s(r("8tBF")),i=s(r("dxvM")),f=s(r("1REc"));function s(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var v=function(e){var t=e.className,r=O(e,["className"]);return n.default.createElement(i.default,y({},r,{className:(0,a.default)("card-header",t)}))};v.Title=u.default,v.Icon=l.default,v.propTypes=d({},c.default.propTypes,{className:o.default.string,renderAs:f.default}),v.defaultProps=d({},c.default.defaultProps,{className:void 0,renderAs:"div"});var m=v;t.default=m},MTA8:function(e,t,r){},"Mb+U":function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("UsjJ"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("q1tI")),o=i(r("17x9")),a=i(r("TSYQ")),u=i(r("8tBF")),l=i(r("dxvM")),c=i(r("1REc"));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=function(e){var t=e.children,r=e.className,o=e.size,u=b(e,["children","className","size"]);return n.default.createElement(l.default,p({},u,{className:(0,a.default)("content",r,d({},"is-".concat(o),o))}),t)};y.propTypes=s({},u.default.propTypes,{children:o.default.node,className:o.default.string,style:o.default.shape({}),size:o.default.oneOf(["small","medium","large"]),renderAs:c.default}),y.defaultProps=s({},u.default.defaultProps,{children:null,className:void 0,style:void 0,size:void 0,renderAs:"div"});var O=y;t.default=O},Om35:function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("UsjJ"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r("q1tI")),o=d(r("TSYQ")),a=d(r("17x9")),u=d(r("tAuD")),l=d(r("qOUT")),c=d(r("ZMYn")),i=d(r("8mR4")),f=d(r("8tBF")),s=d(r("dxvM")),p=d(r("1REc"));function d(e){return e&&e.__esModule?e:{default:e}}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var j=function(e){var t=e.className,r=e.children,a=m(e,["className","children"]);return n.default.createElement(s.default,v({className:(0,o.default)("card",t)},a),r)};j.Image=u.default,j.Content=l.default,j.Header=c.default,j.Footer=i.default,j.propTypes=y({},f.default.propTypes,{className:a.default.string,children:a.default.node,style:a.default.shape({}),renderAs:p.default}),j.defaultProps=y({},f.default.defaultProps,{className:void 0,children:null,style:void 0,renderAs:"div"});var g=j;t.default=g},Qvrb:function(e,t,r){"use strict";r("F7A6"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),r("cfTW");var n,o=(n=r("Om35"))&&n.__esModule?n:{default:n}},Wc9Z:function(e,t,r){},"XO0+":function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("UsjJ"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r("q1tI")),o=f(r("17x9")),a=f(r("TSYQ")),u=f(r("Emr5")),l=f(r("8tBF")),c=f(r("dxvM")),i=f(r("1REc"));function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var O=function(e){var t=e.className,r=y(e,["className"]);return n.default.createElement(c.default,b({},r,{className:(0,a.default)("card-footer",t)}))};O.Item=u.default,O.propTypes=p({},l.default.propTypes,{className:o.default.string,renderAs:i.default}),O.defaultProps=p({},l.default.defaultProps,{className:void 0,renderAs:"div"});var v=O;t.default=v},ZMYn:function(e,t,r){"use strict";r("F7A6"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r("M3Gi"))&&n.__esModule?n:{default:n}},aoZ9:function(e,t,r){"use strict";r("F7A6"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={SIZES:[16,24,32,48,64,96,128,"square","1by1","4by3","3by2","16by9","2by1","5by4","5by3","3by1","4by5","3by4","2by3","3by5","9by16","1by2","1by3"]}},b0CE:function(e){e.exports=JSON.parse('[{"title":"Stuka","description":"A framework for solving certain classes of convex optimization problems. There are a myriad of methods for solving convex optimization problems and as a researcher in the field it is often difficult to understand precisely how these methods work and how they can be implemented. This library provides a framework for implementing algorithms that provides clarity to the algorithms and allows fast computation by leveraging libraries such as Eigen and SuiteSparse.","github":"https://github.com/amadavan/Stuka","banner":"https://github.com/amadavan/Stuka/raw/master/assets/stuka-banner.png"},{"title":"PhasorPy","description":"Power systems simulations in academic work are frequently solved using the MATPOWER package. The package provides MATLAB and Octave M-files in order to solve power flow, continuation power flow and optimal power flow problems. The goal of the Phasor package is remove the need for MATLAB or Octave while providing access to the wide array of existing MATPOWER case files.","github":"https://github.com/amadavan/PhasorPy","banner":"https://github.com/amadavan/PhasorPy/raw/master/assets/phasor-banner.png"},{"title":"UIUC Beamer Theme","description":"A simple beamer theme that I created for my own personal use. It matches the UIUC color scheme according the University standards, but can easily be adapted to other schemes.","github":"https://github.com/amadavan/UIUC-Beamer-Theme"}]')},bTaz:function(e,t,r){"use strict";r("F7A6"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),r("JWAM");var n,o=(n=r("3eDP"))&&n.__esModule?n:{default:n}},cfTW:function(e,t,r){},dQle:function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("UsjJ"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("q1tI")),o=i(r("17x9")),a=i(r("TSYQ")),u=i(r("8tBF")),l=i(r("dxvM")),c=i(r("1REc"));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=function(e){var t=e.className,r=b(e,["className"]);return n.default.createElement(l.default,d({},r,{className:(0,a.default)("card-header-icon",t)}))};y.propTypes=s({},u.default.propTypes,{className:o.default.string,renderAs:c.default}),y.defaultProps=s({},u.default.defaultProps,{className:void 0,renderAs:"div"});var O=y;t.default=O},jP3g:function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("UsjJ"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("q1tI")),o=i(r("17x9")),a=i(r("TSYQ")),u=i(r("8tBF")),l=i(r("dxvM")),c=i(r("1REc"));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=function(e){var t=e.children,r=e.className,o=e.size,u=b(e,["children","className","size"]);return n.default.createElement(l.default,p({},u,{className:(0,a.default)("section",r,d({},"is-".concat(o),o))}),t)};y.propTypes=s({},u.default.propTypes,{children:o.default.node,className:o.default.string,style:o.default.shape({}),renderAs:c.default,size:o.default.oneOf(["medium","large"])}),y.defaultProps=s({},u.default.defaultProps,{children:null,className:void 0,style:void 0,renderAs:"section",size:void 0});var O=y;t.default=O},mtt3:function(e,t,r){"use strict";r("F7A6"),Object.defineProperty(t,"__esModule",{value:!0});var n=[],o="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z";t.definition={prefix:"fas",iconName:"book",icon:[448,512,n,"f02d",o]},t.faBook=t.definition,t.prefix="fas",t.iconName="book",t.width=448,t.height=512,t.ligatures=n,t.unicode="f02d",t.svgPathData=o},qOUT:function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("UsjJ"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("q1tI")),o=i(r("17x9")),a=i(r("TSYQ")),u=i(r("8tBF")),l=i(r("dxvM")),c=i(r("1REc"));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=function(e){var t=e.className,r=b(e,["className"]);return n.default.createElement(l.default,d({},r,{className:(0,a.default)("card-content",t)}))};y.propTypes=s({},u.default.propTypes,{className:o.default.string,renderAs:c.default}),y.defaultProps=s({},u.default.defaultProps,{className:void 0,renderAs:"div"});var O=y;t.default=O},tAuD:function(e,t,r){"use strict";r("d3jB"),r("3AgJ"),r("njko"),r("8x/H"),r("BvtN"),r("F7A6"),r("+5K5"),r("XHo2"),r("tKM+"),r("JGbM"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r("q1tI")),o=c(r("TSYQ")),a=c(r("bTaz")),u=c(r("8tBF")),l=c(r("dxvM"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=function(e){var t=e.className,r=e.domRef,u=p(e,["className","domRef"]);return n.default.createElement(l.default,{domRef:r,className:(0,o.default)("card-image",t)},n.default.createElement(a.default,u))};d.propTypes=f({},u.default.propTypes,{},a.default.propTypes),d.defaultProps=f({},u.default.defaultProps,{},a.default.defaultProps);var b=d;t.default=b}}]);
//# sourceMappingURL=component---src-pages-projects-js-1a66aadf396283f524f4.js.map