parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({6:[function(require,module,exports) {
"use strict";function e(){}Object.defineProperty(exports,"__esModule",{value:!0});var t={},n=[],o=[];function r(r,i){var l,a,p,s,c=o;for(s=arguments.length;s-- >2;)n.push(arguments[s]);for(i&&null!=i.children&&(n.length||n.push(i.children),delete i.children);n.length;)if((a=n.pop())&&void 0!==a.pop)for(s=a.length;s--;)n.push(a[s]);else"boolean"==typeof a&&(a=null),(p="function"!=typeof r)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(p=!1)),p&&l?c[c.length-1]+=a:c===o?c=[a]:c.push(a),l=p;var u=new e;return u.nodeName=r,u.children=c,u.attributes=null==i?void 0:i,u.key=null==i?void 0:i.key,void 0!==t.vnode&&t.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function a(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,s=[];function c(e){!e._dirty&&(e._dirty=!0)&&1==s.push(e)&&(t.debounceRendering||l)(u)}function u(){var e,t=s;for(s=[];e=t.pop();)e._dirty&&A(e)}function f(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&d(e,t.nodeName):n||e._componentConstructor===t.nodeName}function d(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function _(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function v(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===p.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)b(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function b(e,t,n){try{e[t]=n}catch(e){}}function y(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var x=[],C=0,g=!1,N=!1;function k(){for(var e;e=x.pop();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){C++||(g=null!=r&&void 0!==r.ownerSVGElement,N=null!=e&&!("__preactattr_"in e));var l=S(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--C||(N=!1,i||k()),l}function S(e,t,n,o,r){var i=e,l=g;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),L(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return D(e,t,n,o);if(g="svg"===a||"foreignObject"!==a&&g,a=String(a),(!e||!d(e,a))&&(i=v(a,g),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),L(e,!0)}var p=i.firstChild,s=i.__preactattr_,c=t.children;if(null==s){s=i.__preactattr_={};for(var u=i.attributes,f=u.length;f--;)s[u[f].name]=u[f].value}return!N&&c&&1===c.length&&"string"==typeof c[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=c[0]&&(p.nodeValue=c[0]):(c&&c.length||null!=p)&&U(i,c,n,o,N||null!=s.dangerouslySetInnerHTML),P(i,t.attributes,s),g=l,i}function U(e,t,n,o,r){var i,l,a,p,s,c=e.childNodes,u=[],d={},_=0,v=0,h=c.length,b=0,y=t?t.length:0;if(0!==h)for(var x=0;x<h;x++){var C=c[x],g=C.__preactattr_;null!=(N=y&&g?C._component?C._component.__key:g.key:null)?(_++,d[N]=C):(g||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(u[b++]=C)}if(0!==y)for(x=0;x<y;x++){var N;if(s=null,null!=(N=(p=t[x]).key))_&&void 0!==d[N]&&(s=d[N],d[N]=void 0,_--);else if(!s&&v<b)for(i=v;i<b;i++)if(void 0!==u[i]&&f(l=u[i],p,r)){s=l,u[i]=void 0,i===b-1&&b--,i===v&&v++;break}s=S(s,p,n,o),a=c[x],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?m(a):e.insertBefore(s,a))}if(_)for(var x in d)void 0!==d[x]&&L(d[x],!1);for(;v<=b;)void 0!==(s=u[b--])&&L(s,!1)}function L(e,t){var n=e._component;n?H(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||m(e),M(e))}function M(e){for(e=e.lastChild;e;){var t=e.previousSibling;L(e,!0),e=t}}function P(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,g);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],g)}var T={};function B(e){var t=e.constructor.name;(T[t]||(T[t]=[])).push(e)}function E(e,t,n){var o,r=T[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),j.call(o,t,n)):((o=new j(t,n)).constructor=e,o.render=W),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function W(e,t,n){return this.constructor(e,n)}function V(e,n,o,r,i){e._disable||(e._disable=!0,(e.__ref=n.ref)&&delete n.ref,(e.__key=n.key)&&delete n.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?c(e):A(e,1,i)),e.__ref&&e.__ref(e))}function A(e,n,o,r){if(!e._disable){var l,a,p,s=e.props,c=e.state,u=e.context,f=e.prevProps||s,d=e.prevState||c,v=e.prevContext||u,m=e.base,h=e.nextBase,b=m||h,y=e._component,g=!1;if(m&&(e.props=f,e.state=d,e.context=v,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,c,u)?g=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,u),e.props=s,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!g){l=e.render(s,c,u),e.getChildContext&&(u=i(i({},u),e.getChildContext()));var N,S,U=l&&l.nodeName;if("function"==typeof U){var M=_(l);(a=y)&&a.constructor===U&&M.key==a.__key?V(a,M,1,u,!1):(N=a,e._component=a=E(U,M,u),a.nextBase=a.nextBase||h,a._parentComponent=e,V(a,M,0,u,!1),A(a,1,o,!0)),S=a.base}else p=b,(N=y)&&(p=e._component=null),(b||1===n)&&(p&&(p._component=null),S=w(p,l,u,o||!m,b&&b.parentNode,!0));if(b&&S!==b&&a!==y){var P=b.parentNode;P&&S!==P&&(P.replaceChild(S,b),N||(b._component=null,L(b,!1)))}if(N&&H(N),e.base=S,S&&!r){for(var T=e,B=e;B=B._parentComponent;)(T=B).base=S;S._component=T,S._componentConstructor=T.constructor}}if(!m||o?x.unshift(e):g||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),t.afterUpdate&&t.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);C||r||k()}}function D(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,p=a,s=_(t);r&&!p&&(r=r._parentComponent);)p=r.constructor===t.nodeName;return r&&p&&(!o||r._component)?(V(r,s,3,n,o),e=r.base):(i&&!a&&(H(i),e=l=null),r=E(t.nodeName,s,n),e&&!r.nextBase&&(r.nextBase=e,l=null),V(r,s,1,n,o),e=r.base,l&&e!==l&&(l._component=null,L(l,!1))),e}function H(e){t.beforeUnmount&&t.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?H(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),e.nextBase=n,m(n),B(e),M(n)),e.__ref&&e.__ref(null)}function j(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function z(e,t,n){return w(n,e,{},!1,t,!1)}i(j.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),c(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),A(this,2)},render:function(){}});var R={h:r,createElement:r,cloneElement:a,Component:j,render:z,rerender:u,options:t};exports.default=R,exports.h=r,exports.createElement=r,exports.cloneElement=a,exports.Component=j,exports.render=z,exports.rerender=u,exports.options=t;
},{}],3:[function(require,module,exports) {

},{}],19:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FormGroup=void 0;var t=require("preact"),e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(c){function u(){return a(this,u),o(this,c.apply(this,arguments))}return i(u,c),u.prototype.onPropertyChange=function(t,e){this.props instanceof Object&&"function"==typeof this.props[u.watchHandlerAttrName]&&this.props[u.watchHandlerAttrName].call(null,t,e)},u.prototype.componentWillReceiveProps=function(t){t[u.preloadStateAttrName]&&this.setState(t[u.preloadStateAttrName])},u.prototype.componentWillMount=function(){this.props[u.preloadStateAttrName]&&this.setState(this.props[u.preloadStateAttrName])},u.prototype.transformChildren=function(t){var e=this;return t.map(function(t){return u.mapChildren(t,e.onPropertyChange.bind(e),e.state,e.setState.bind(e))})},u.prototype.render=function(e){var r=e.children,a=(e.watch,e.preload,n(e,["children","watch","preload"]));return(0,t.h)("div",a,[this.transformChildren(r)])},u.extractValue=function(t){return"INPUT"===t.nodeName&&"checkbox"===t.getAttribute("type")?t.checked:t.value},u.createChangeReport=function(t,n,a){var o=n.target,i=r({},t.attributes[u.bindAttrName],u.extractValue(o));return a(function(t){return e({},t,i)}),[i,t.attributes[u.bindAttrName]]},u.getFormProps=function(t,e){var r="string"==typeof t.attributes.value,n="string"==typeof t.attributes.checked;return"checkbox"===t.attributes.type?{checked:n?t.attributes.checked:e[t.attributes[u.bindAttrName]]}:"radio"===t.attributes.type?{checked:n?t.attributes.checked:e[t.attributes[u.bindAttrName]]===t.attributes.value}:{value:r?t.attributes.value:e[t.attributes[u.bindAttrName]]}},u.mapChildren=function(t,n,a,o){var i;t.attributes instanceof Object&&t.attributes[u.bindAttrName]?t.attributes=e({},t.attributes,(r(i={},t.attributes[u.bindAttrEvent]||"onChange",function(e){return n.apply(null,[].concat(u.createChangeReport(t,e,o),[e]))}),r(i,"name",t.attributes[u.bindAttrName]),i),u.getFormProps(t,a)):t.children instanceof Array&&t.children.length&&(t.children=t.children.map(function(t){return u.mapChildren(t,n,a,o)}));return t},u}(t.Component);c.bindAttrName="data-bind",c.bindAttrEvent="data-event",c.watchHandlerAttrName="watch",c.preloadStateAttrName="preload",exports.FormGroup=c;
},{"preact":6}],17:[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])};return function(r,e){function o(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),r=this&&this.__assign||Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++)for(var n in r=arguments[e])Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);return t},e=this&&this.__rest||function(t,r){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(t);n<o.length;n++)r.indexOf(o[n])<0&&(e[o[n]]=t[o[n]])}return e};Object.defineProperty(exports,"__esModule",{value:!0});var o=require("preact"),n=function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return t(n,o),n.prototype.setFormModel=function(t){this.setState({form:new t})},n.prototype.handleFormChange=function(t){this.setState(function(o){var n=o.form,i=e(o,["form"]);return r({form:r({},n,t)},i)})},n}(o.Component);exports.ComponentForm=n;
},{"preact":6}],18:[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.REQUIRED_FIELDS="Please select the type and size of your burrito"}(e=exports.AccessError||(exports.AccessError={}));var r=function(){function r(){this.size="",this.type="",this.toTakeAway=!1,this.comments=""}return r.validate=function(r){var s={success:!1,errMsg:""};return r.size&&r.type?s.success=!0:s.errMsg=e.REQUIRED_FIELDS,s},r}();exports.orderBurritoFormModel=r;
},{}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("preact"),n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])};function r(t,r){function o(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}var o=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var e in n=arguments[r])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t};function e(t,n){for(var r in t)if(t[r]!==n[r])return!1;for(var r in n)if(!(r in t))return!1;return!0}function i(t,n){if(null!=n){if(n.then)return n.then(t.setState);t.setState(n)}}function p(t,n){t="function"==typeof t?t(n):t;var r={},o=function(o){r[o]=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var p=t[o];return"function"==typeof n.middleware?n.middleware(n,p,r):i(n,p.apply(void 0,[n.getState()].concat(r)))}};for(var e in t)o(e);return r}var s=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.state=n.getProps(),n.actions=n.getActions(),n.update=function(){var t=n.getProps();e(t,n.state)||n.setState(t)},n}return r(n,t),n.prototype.componentWillMount=function(){this.unsubscribe=this.context.store.subscribe(this.update)},n.prototype.componentWillUnmount=function(){this.unsubscribe(this.update)},n.prototype.getProps=function(){var t=this.props.mapToProps,n=this.context.store&&this.context.store.getState()||{};return t?t(n,this.props):n},n.prototype.getActions=function(){return p(this.props.actions,this.context.store)},n.prototype.render=function(t,n,r){var e=t.children,i=r.store;return e[0](o({store:i},n,this.actions))},n}(t.Component),u=s;function c(n,e){return void 0===e&&(e={}),function(i){return function(p){function s(){return null!==p&&p.apply(this,arguments)||this}return r(s,p),s.prototype.render=function(){var r=this.props;return t.h(u,o({},r,{mapToProps:n,actions:e}),function(n){return t.h(i,o({},n,r))})},s}(t.Component)}}var a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n.prototype.getChildContext=function(){return{store:this.props.store}},n.prototype.render=function(){return this.props.children[0]},n}(t.Component);exports.connect=c,exports.Provider=a,exports.Connect=s;
},{"preact":6}],16:[function(require,module,exports) {
"use strict";var r=this&&this.__assign||Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r};Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact"),t=require("redux-zero/preact");function n(n){return void 0===n&&(n={}),function(o){return function(u){return e.h(t.Connect,{mapToProps:function(e){return r({},e)},actions:n},function(t){return e.h(o,r({},t,u))})}}}exports.default=n;
},{"preact":6,"redux-zero/preact":13}],20:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addOrder=function(e,r){return{orders:e.orders.concat([r])}},exports.deleteLastOrder=function(e,r){var t=e.orders.slice();return t.pop(),{orders:t}};
},{}],7:[function(require,module,exports) {
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function o(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(o.prototype=s.prototype,new o)}}(),s=this&&this.__decorate||function(t,s,o,r){var i,l=arguments.length,a=l<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,o):r;if("object"===("undefined"==typeof Reflect?"undefined":e(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,s,o,r);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(a=(l<3?i(a):l>3?i(s,o,a):i(s,o))||a);return l>3&&a&&Object.defineProperty(s,o,a),a};Object.defineProperty(exports,"__esModule",{value:!0});var o=require("preact"),r=require("preact-bind-group"),i=require("./component-form"),l=require("../models/order-burrito-model"),a=require("../connect"),n=require("../actions"),d=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.sizes=["","Small","Medium","Large"],t.types=["","Chicken","Chilli","Vegan","Cheese"],t.state={form:{size:"",type:"",comments:"",toTakeAway:!1},msg:""},t}return t(i,e),i.prototype.componentWillMount=function(){this.setFormModel(l.orderBurritoFormModel)},i.prototype.submitForm=function(){var e=this,t=l.orderBurritoFormModel.validate(this.state.form);console.log(this.state.form),t.success?(this.state.msg&&this.setState(function(e){return{errMsg:""}}),this.setState(function(t){return{msg:"Your petition of a "+e.state.form.size+" "+e.state.form.type+" burrito "+(e.state.form.toTakeAway?"to take away":"")+" has been succesful!"}}),this.props.addOrder(this.state.form)):this.setState(function(e){return{msg:t.errMsg}})},i.prototype.render=function(){var e=this;return o.h("div",null,o.h(r.FormGroup,{watch:function(t){return e.handleFormChange(t)},preload:this.state.form},o.h("div",{class:"hero-body"},o.h("h3",{class:"title has-text-grey"},"Order Burrito Form"),o.h("p",{class:"subtitle has-text-grey has-text-centered"},"Please order your burrito here."),o.h("div",{class:"box"},o.h("div",{class:"field is-horizontal"},o.h("div",{class:"field-label"},o.h("label",{class:"label"},"Type")),o.h("div",{class:"field-body"},o.h("div",{class:"field is-expanded"},o.h("div",{class:"control"},o.h("div",{class:"select is-fullwidth"},o.h("select",{"data-bind":"type"},this.types.map(function(e){return o.h("option",{value:e},e)}))),o.h("p",{class:"help is-danger"},"This field is mandatory"))))),o.h("div",{class:"field is-horizontal"},o.h("div",{class:"field-label is-normal"},o.h("label",{class:"label"},"Size")),o.h("div",{class:"field-body"},o.h("div",{class:"field is-expanded"},o.h("div",{class:"control"},o.h("div",{class:"select is-fullwidth"},o.h("select",{"data-bind":"size"},this.sizes.map(function(e){return o.h("option",{value:e},e)}))),o.h("p",{class:"help is-danger"},"This field is mandatory"))))),o.h("div",{class:"field is-horizontal"},o.h("label",{class:"label"},"To take away?",o.h("input",{"data-bind":"toTakeAway",type:"checkbox",style:"margin-left: 1em"}))),o.h("div",{class:"field is-horizontal"},o.h("div",{class:"field-label is-normal"},o.h("label",{class:"label"},"Comments:")),o.h("div",{class:"field-body"},o.h("div",{class:"field"},o.h("div",{class:"control"},o.h("textarea",{"data-bind":"comments",class:"textarea",placeholder:"e.g send your cutest delivery boy"}))))),o.h("button",{id:"order-button",onClick:function(t){return e.submitForm()},class:"button is-block is-info is-large is-fullwidth"},"Order Burrito"),o.h("p",{id:"order-message",class:"help is-link has-text-weight-semibold"}," ",this.state.msg," ")))))},i=s([a.default({addOrder:n.addOrder})],i)}(i.ComponentForm);exports.default=d;
},{"preact":6,"preact-bind-group":19,"./component-form":17,"../models/order-burrito-model":18,"../connect":16,"../actions":20}],8:[function(require,module,exports) {
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),r=this&&this.__decorate||function(t,r,o,n){var l,s=arguments.length,i=s<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,o):n;if("object"===("undefined"==typeof Reflect?"undefined":e(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,r,o,n);else for(var u=t.length-1;u>=0;u--)(l=t[u])&&(i=(s<3?l(i):s>3?l(r,o,i):l(r,o))||i);return s>3&&i&&Object.defineProperty(r,o,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var o=require("preact"),n=require("../connect"),l=require("../actions"),s=function(e){function s(){return null!==e&&e.apply(this,arguments)||this}return t(s,e),s.prototype.render=function(){var e=this;return o.h("div",{class:"hero-body"},o.h("h3",{class:"title has-text-grey has-text-centered"},"Order Overview"),o.h("p",{class:"subtitle has-text-grey has-text-centered"},"All your orders will appear here."),o.h("div",{class:"box has-text-right"},0===this.props.orders.length&&o.h("p",{id:"no-order-message",class:"help is-danger has-text-left"}," There are no orders yet, come on, aren't you hungry? "),o.h("table",{class:"table is-bordered is-striped is-hoverable"},o.h("thead",null,o.h("tr",null,o.h("th",null,"Type"),o.h("th",null,"Size"),o.h("th",null,"To take away?"),o.h("th",null,"Comments"))),o.h("tbody",null,this.props.orders.map(function(e){return o.h("tr",null,o.h("td",null,e.type),o.h("td",null,e.size),o.h("td",null,e.toTakeAway?"Yes":"No"),o.h("td",null,e.comments))}))),o.h("button",{onClick:function(t){return e.props.deleteLastOrder()},id:"delete-order-button",class:"button is-danger is-hover is-small"}," Delete last order ")))},s=r([n.default({deleteLastOrder:l.deleteLastOrder})],s)}(o.Component);exports.default=s;
},{"preact":6,"../connect":16,"../actions":20}],15:[function(require,module,exports) {
"use strict";var t=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t};function n(n,r){void 0===n&&(n={}),void 0===r&&(r=null);var e=[];return{middleware:r,setState:function(r){n=t({},n,"function"==typeof r?r(n):r),e.forEach(function(t){return t(n)})},subscribe:function(t){return e.push(t),function(){e.splice(e.indexOf(t),1)}},getState:function(){return n}}}module.exports=n;
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("redux-zero"),r=e({orders:[]});exports.default=r;
},{"redux-zero":15}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact"),r=require("./order-burrito-form"),t=require("./table-orders"),s=require("redux-zero/preact"),a=require("../store");exports.default=function(l){return e.h(s.Provider,{store:a.default},e.h("div",{class:"hero-body",style:"padding-top: 1.3em"},e.h("h2",{class:"title is-2 has-text-grey has-text-centered"},"Simple Burrito Restaurant (Preact + TS + Redux Zero)"),e.h("p",{class:"subtitle has-text-grey has-text-centered"},"Example for the Starter Pack."),e.h("div",{class:"columns"},e.h("div",{class:"column is-half"},e.h(r.default,null)),e.h("div",{class:"column is-half"},e.h(t.default,null)))))};
},{"preact":6,"./order-burrito-form":7,"./table-orders":8,"redux-zero/preact":13,"../store":11}],2:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("preact");require("./index.css");var r=require("./components/main"),t=document.getElementById("root");e.render(e.h(r.default,null),t,t.lastChild),module.hot&&module.hot.accept();
},{"preact":6,"./index.css":3,"./components/main":4}]},{},[2], null)
//# sourceMappingURL=/src.9f3b4976.map