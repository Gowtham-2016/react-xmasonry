/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XBlock = function (_React$Component) {
    _inherits(XBlock, _React$Component);

    function XBlock() {
        _classCallCheck(this, XBlock);

        return _possibleConstructorReturn(this, (XBlock.__proto__ || Object.getPrototypeOf(XBlock)).apply(this, arguments));
    }

    _createClass(XBlock, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                _extends({}, this.props, { style: _extends({}, this.props.style, XBlock.defaultStyle),
                    className: this.props.measured ? "xblock" : "" }),
                this.props.children
            );
        }
    }]);

    return XBlock;
}(_react2.default.Component);

XBlock.defaultProps = {
    width: 1,
    measured: false
};
XBlock.defaultStyle = {
    position: "absolute"
};
exports.default = XBlock;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XMasonry = function (_React$Component) {
    _inherits(XMasonry, _React$Component);

    function XMasonry() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, XMasonry);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = XMasonry.__proto__ || Object.getPrototypeOf(XMasonry)).call.apply(_ref, [this].concat(args))), _this), _this.columns = 3, _this.state = {
            blocks: {},
            height: 0
        }, _this.container = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Number of displayed columns.
     * @type {number}
     */


    /**
     * @type {HTMLElement}
     */


    /**
     * The width of the container in pixels. Is assigned dynamically.
     * @type {number}
     */


    _createClass(XMasonry, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.containerWidth = this.container.getBoundingClientRect().width;
            this.measureChildren();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.measureChildren();
        }
    }, {
        key: "measureChildren",
        value: function measureChildren() {
            var blocks = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.container.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var c = _step.value;

                    if (!c.dataset.hasOwnProperty("xkey")) continue;

                    var _c$getBoundingClientR = c.getBoundingClientRect(),
                        height = _c$getBoundingClientR.height;

                    blocks[c.dataset["xkey"]] = { height: Math.ceil(height) };
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (Object.keys(blocks).length > 0) this.recalculatePositions(blocks);
        }
    }, {
        key: "recalculatePositions",
        value: function recalculatePositions() {
            var newBlocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var blocks = _extends({}, this.state.blocks, newBlocks),
                heights = Array.from({ length: this.columns }, function () {
                return 0;
            });
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.container.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var c = _step2.value;

                    if (!blocks.hasOwnProperty(c.dataset.key)) continue;
                    var blockWidth = +c.dataset.width || 1,
                        _XMasonry$getBestFitC = XMasonry.getBestFitColumn(heights, blockWidth),
                        col = _XMasonry$getBestFitC.col,
                        height = _XMasonry$getBestFitC.height,
                        newHeight = height + blocks[c.dataset.key].height;

                    blocks[c.dataset.key].left = col * Math.floor(10000 / this.columns) / 100 + "%";
                    blocks[c.dataset.key].top = height + "px";
                    for (var i = 0; i < blockWidth; ++i) {
                        heights[col + i] = newHeight;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.setState({ blocks: blocks, height: Math.max.apply(null, heights) });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var cardWidth = Math.floor(10000 / this.columns) / 100;

            var _React$Children$toArr = _react2.default.Children.toArray(this.props.children).reduce(function (acc, element) {
                var measured = _this2.state.blocks[element.key]; // || undefined
                acc[measured ? 0 : 1].push(measured ? _react2.default.cloneElement(element, {
                    "data-key": element.key,
                    "data-width": element.props.width,
                    "style": _extends({
                        width: cardWidth * element.props.width + "%"
                    }, measured),
                    "measured": true
                }) : _react2.default.cloneElement(element, {
                    "data-key": element.key,
                    "data-width": element.props.width,
                    "data-xkey": element.key,
                    "style": {
                        width: cardWidth * element.props.width + "%",
                        visibility: "hidden"
                    }
                }));
                return acc;
            }, [[], []]),
                _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2),
                measuredElements = _React$Children$toArr2[0],
                elementsToMeasure = _React$Children$toArr2[1];

            return _react2.default.createElement(
                "div",
                { className: "xmasonry", style: _extends({}, XMasonry.containerStyle, {
                        height: this.state.height
                    }), ref: function ref(c) {
                        return _this2.container = c;
                    } },
                measuredElements,
                elementsToMeasure
            );
        }
    }], [{
        key: "getBestFitColumn",
        value: function getBestFitColumn(heights) {
            var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var minIndex = 0,
                minHeight = Infinity;
            console.log(heights.slice(), width);
            for (var i = 0; i < heights.length - width + 1; ++i) {
                var currentMinHeight = Math.max.apply(null, heights.slice(i, i + width));
                // for (let j = i; j < i + width - 1; ++j) {
                //     if (heights[j] > currentMinHeight) {
                //         currentMinHeight = heights[j];
                //     }
                // }
                if (currentMinHeight < minHeight) {
                    minHeight = currentMinHeight;
                    minIndex = i;
                }
            }
            console.log(minIndex, minHeight);
            return { col: minIndex, height: minHeight };
        }
    }]);

    return XMasonry;
}(_react2.default.Component);

XMasonry.containerStyle = {
    position: "relative"
};
exports.default = XMasonry;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.XBlock = exports.XMasonry = undefined;

var _XMasonry = __webpack_require__(2);

var _XMasonry2 = _interopRequireDefault(_XMasonry);

var _XBlock = __webpack_require__(1);

var _XBlock2 = _interopRequireDefault(_XBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.XMasonry = _XMasonry2.default;
exports.XBlock = _XBlock2.default;


if (typeof window !== "undefined") {
    window.XMasonry = _XMasonry2.default;
    window.XBlock = _XBlock2.default;
}

/***/ })
/******/ ]);