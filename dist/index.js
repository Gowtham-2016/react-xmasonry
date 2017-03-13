!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports["react-xmasonry"]=t(require("React")):e["react-xmasonry"]=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e={"data-key":this.props["data-key"],"data-width":this.props["data-width"]};return this.props["data-xkey"]&&(e["data-xkey"]=this.props["data-xkey"]),c.default.createElement("div",s({},e,{style:s({},this.props.style,t.defaultStyle),className:this.props.measured?"xblock":""}),this.props.children)}}]),t}(c.default.Component);h.defaultProps={width:1,measured:!1},h.defaultStyle={position:"absolute"},t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),h=r(c),d=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={blocks:{},containerHeight:0,columns:1,containerWidth:0},n.container=null,n.mounted=!1,n.resizeListener=null,n.debouncedResizeTimeout=0,n.debounceRate=50,n.fixedHeight=0,n.containerWidth=n.state.containerWidth,n.columns=n.state.columns,n.props.responsive&&window.addEventListener("resize",n.resizeListener=n.onResize.bind(n)),n.onResize(),n}return a(t,e),l(t,[{key:"getColumns",value:function(e){return Math.max(1,Math.round(e/this.props.targetBlockWidth))}},{key:"updateContainerWidth",value:function(){var e=this.container.getBoundingClientRect().width;return e===this.containerWidth||(this.setState({columns:this.columns=this.getColumns(e),containerWidth:this.containerWidth=e,blocks:{}}),!1)}},{key:"componentDidMount",value:function(){this.mounted=!0,this.updateContainerWidth()&&this.measureChildren()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.resizeListener&&window.removeEventListener("resize",this.resizeListener)}},{key:"componentWillReceiveProps",value:function(e){if(e.children.length<this.props.children.length){for(var t=new Set,n={},r=0;r<e.children.length;r++)t.add(e.children[r].key);for(var o=0;o<this.props.children.length;o++)t.has(this.props.children[o].key)||(n[this.props.children[o].key]={});this.recalculatePositions(null,n)}}},{key:"componentDidUpdate",value:function(){this.updateContainerWidth()&&this.measureChildren()}},{key:"measureChildren",value:function(){for(var e={},t=0;t<this.container.children.length;t++){var n=this.container.children[t];if(void 0!==n.dataset.xkey){var r=n.getBoundingClientRect(),o=r.height;e[n.dataset.xkey]={height:Math.ceil(o)}}}Object.keys(e).length>0&&this.recalculatePositions(e)}},{key:"recalculatePositions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=void 0,o=Array.from({length:this.columns},function(){return 0});if(n){r={};for(var i in this.state.blocks)this.state.blocks.hasOwnProperty(i)&&!n.hasOwnProperty(i)&&(r[i]=this.state.blocks[i]);for(var a in e)e.hasOwnProperty(a)&&!n.hasOwnProperty(a)&&(r[a]=e[a])}else r=u({},this.state.blocks,e);for(var s=0;s<this.container.children.length;s++){var l=this.container.children[s];if(r.hasOwnProperty(l.dataset.key)&&(!n||!n.hasOwnProperty(l.dataset.key))){var c=+l.dataset.width||1,h=t.getBestFitColumn(o,c),d=h.col,f=h.height,p=f+r[l.dataset.key].height;r[l.dataset.key].left=this.containerWidth*d/this.columns,r[l.dataset.key].top=f;for(var y=0;y<c;++y)o[d+y]=p}}if(this.props.center&&0===o[o.length-1]){for(var v=1;0===o[o.length-1-v];++v);var b=this.containerWidth*v/this.columns/2;for(var m in r)r.hasOwnProperty(m)&&(r[m].left+=b)}this.setState({blocks:r,containerHeight:Math.max.apply(null,o)})}},{key:"onResize",value:function(){var e=this;if(this.mounted){if(this.debouncedResizeTimeout)return clearTimeout(this.debouncedResizeTimeout),void(this.debouncedResizeTimeout=setTimeout(function(){e.debouncedResizeTimeout=null,e.updateContainerWidth(e)},this.debounceRate));this.updateContainerWidth(),this.debouncedResizeTimeout=setTimeout(function(){return e.debouncedResizeTimeout=0},this.debounceRate)}}},{key:"render",value:function(){var e=this,n=Array.prototype.slice.call(this.props.children).reduce(function(t,n){var r=e.state.blocks[n.key],o=Math.min(n.props.width,e.columns);return t[r?0:1].push(r?h.default.cloneElement(n,{"data-key":n.key,"data-width":o,style:{width:Math.floor(o*e.containerWidth/e.columns),height:r.height,left:Math.floor(r.left),top:r.top},measured:!0,width:o}):h.default.cloneElement(n,{"data-key":n.key,"data-width":o,"data-xkey":n.key,style:{width:Math.floor(o*e.containerWidth/e.columns),visibility:"hidden"},width:o})),t},[[],[]]),r=s(n,2),o=r[0],i=r[1],a=i.length?this.fixedHeight:this.fixedHeight=this.state.containerHeight;return h.default.createElement("div",{className:"xmasonry",style:u({},t.containerStyle,{height:a}),ref:function(t){return e.container=t}},o,i)}}],[{key:"getBestFitColumn",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,r=1/0,o=0;o<e.length-t+1;++o){var i=Math.max.apply(null,e.slice(o,o+t));i<r&&(r=i,n=o)}return{col:n,height:r}}}]),t}(h.default.Component);d.propTypes={center:h.default.PropTypes.bool,responsive:h.default.PropTypes.bool,targetBlockWidth:h.default.PropTypes.number},d.defaultProps={center:!0,responsive:!0,targetBlockWidth:300},d.containerStyle={position:"relative"},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.XBlock=t.XMasonry=void 0;var o=n(2),i=r(o),a=n(1),s=r(a);t.XMasonry=i.default,t.XBlock=s.default,"undefined"!=typeof window&&(window.XMasonry=i.default,window.XBlock=s.default)}])});