/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _stripTags = __webpack_require__(2);

var _stripTags2 = _interopRequireDefault(_stripTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

wp.customize('blogname', function (value) {
    value.bind(function (to) {
        (0, _jquery2.default)('.c-header__blogname').html(to);
    });
});

wp.customize('_themename_display_author_info', function (value) {
    value.bind(function (to) {
        if (to) {
            (0, _jquery2.default)('.c-post-author').show();
        } else {
            (0, _jquery2.default)('.c-post-author').hide();
        }
    });
});

wp.customize('_themename_accent_colour', function (value) {
    value.bind(function (to) {
        var inline_css = '';
        var inline_css_obj = _themename['inline-css'];
        for (var selector in inline_css_obj) {
            inline_css += selector + ' {';
            for (var prop in inline_css_obj[selector]) {
                var val = inline_css_obj[selector][prop];
                inline_css += prop + ': ' + wp.customize(val).get();
                // inline_css += `${prop}: ${to}`;
            }
            inline_css += '}';
        }
        (0, _jquery2.default)('#_themename-stylesheet-inline-css').html(inline_css);
    });
});

wp.customize('_themename_site_info', function (value) {
    value.bind(function (to) {
        (0, _jquery2.default)('.c-site-info__text').html((0, _stripTags2.default)(to, '<a>'));
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var strip_tags = function strip_tags(input, allowed) {
    allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
};

exports.default = strip_tags;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('bundle is live');

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('slider.js is alive');

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
    if (!(0, _jquery2.default)(e.currentTarget).parents('.sub-menu').length) {
        (0, _jquery2.default)('.menu > .menu-item.open').find('> a > .menu-button').trigger('click');
    }
    (0, _jquery2.default)(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
    (0, _jquery2.default)(e.currentTarget).removeClass('open');
});

(0, _jquery2.default)('.c-navigation').on('click', '.menu .menu-button', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var menu_button = (0, _jquery2.default)(e.currentTarget);
    var menu_link = menu_button.parent();
    var menu_item = menu_link.parent();
    if (menu_item.hasClass('open')) {
        menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
        menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
    } else {
        menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
        menu_item.addClass('open');
        menu_link.attr('aria-expanded', 'true');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
    }
});

(0, _jquery2.default)(document).click(function (e) {
    if ((0, _jquery2.default)('.menu-item.open').length) {
        (0, _jquery2.default)('.menu > .menu-item.open > a > .menu-button').trigger('click');
    }
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2E0ZGYyYmMxNjYzZDU0Yzk1MjAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemUtcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIndwIiwiY3VzdG9taXplIiwidmFsdWUiLCJiaW5kIiwidG8iLCJodG1sIiwic2hvdyIsImhpZGUiLCJpbmxpbmVfY3NzIiwiaW5saW5lX2Nzc19vYmoiLCJfdGhlbWVuYW1lIiwic2VsZWN0b3IiLCJwcm9wIiwidmFsIiwiZ2V0Iiwic3RyaXBfdGFncyIsImlucHV0IiwiYWxsb3dlZCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJqb2luIiwidGFncyIsImNvbW1lbnRzQW5kUGhwVGFncyIsInJlcGxhY2UiLCIkMCIsIiQxIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImUiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50cyIsImxlbmd0aCIsImZpbmQiLCJ0cmlnZ2VyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibWVudV9idXR0b24iLCJtZW51X2xpbmsiLCJwYXJlbnQiLCJtZW51X2l0ZW0iLCJoYXNDbGFzcyIsImFkZCIsImF0dHIiLCJzaWJsaW5ncyIsImRvY3VtZW50IiwiY2xpY2siXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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SUFBVixDQUFlLEdBQWYsQ0FBZCxFQUFtQ1ksSUFBbkMsQ0FBd0MsZUFBeEMsRUFBeUQsT0FBekQ7QUFDQU4sb0JBQVlOLElBQVosQ0FBaUIsbUJBQWpCLEVBQXNDWSxJQUF0QyxDQUEyQyxhQUEzQyxFQUEwRCxPQUExRDtBQUNBTixvQkFBWU4sSUFBWixDQUFpQixtQkFBakIsRUFBc0NZLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE1BQTFEO0FBQ0gsS0FMRCxNQUtPO0FBQ0hILGtCQUFVSSxRQUFWLENBQW1CLE9BQW5CLEVBQTRCYixJQUE1QixDQUFpQyxpQkFBakMsRUFBb0RDLE9BQXBELENBQTRELE9BQTVEO0FBQ0FRLGtCQUFVUCxRQUFWLENBQW1CLE1BQW5CO0FBQ0FLLGtCQUFVSyxJQUFWLENBQWUsZUFBZixFQUFnQyxNQUFoQztBQUNBTixvQkFBWU4sSUFBWixDQUFpQixtQkFBakIsRUFBc0NZLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE1BQTFEO0FBQ0FOLG9CQUFZTixJQUFaLENBQWlCLG1CQUFqQixFQUFzQ1ksSUFBdEMsQ0FBMkMsYUFBM0MsRUFBMEQsT0FBMUQ7QUFDSDtBQUNKLENBbEJEOztBQW9CQSxzQkFBRUUsUUFBRixFQUFZQyxLQUFaLENBQWtCLFVBQUNuQixDQUFELEVBQU87QUFDckIsUUFBRyxzQkFBRSxpQkFBRixFQUFxQkcsTUFBeEIsRUFBZ0M7QUFDNUIsOEJBQUUsNENBQUYsRUFBZ0RFLE9BQWhELENBQXdELE9BQXhEO0FBQ0g7QUFDSixDQUpELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2E0ZGYyYmMxNjYzZDU0Yzk1MjAiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHN0cmlwX3RhZ3MgZnJvbSAnLi9oZWxwZXJzL3N0cmlwLXRhZ3MnO1xyXG5cclxud3AuY3VzdG9taXplKCdibG9nbmFtZScsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCgodG8pPT57XHJcbiAgICAgICAgJCgnLmMtaGVhZGVyX19ibG9nbmFtZScpLmh0bWwodG8pO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfZGlzcGxheV9hdXRob3JfaW5mbycsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCgodG8pPT57XHJcbiAgICAgICAgaWYodG8pIHtcclxuICAgICAgICAgICAgJCgnLmMtcG9zdC1hdXRob3InKS5zaG93KCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5jLXBvc3QtYXV0aG9yJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pO1xyXG5cclxud3AuY3VzdG9taXplKCAnX3RoZW1lbmFtZV9hY2NlbnRfY29sb3VyJywgKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5iaW5kKCAodG8pID0+IHtcclxuICAgICAgICBsZXQgaW5saW5lX2NzcyA9IGBgO1xyXG4gICAgICAgIGxldCBpbmxpbmVfY3NzX29iaiA9IF90aGVtZW5hbWVbJ2lubGluZS1jc3MnXTtcclxuICAgICAgICBmb3IobGV0IHNlbGVjdG9yIGluIGlubGluZV9jc3Nfb2JqKSB7XHJcbiAgICAgICAgICAgIGlubGluZV9jc3MgKz0gYCR7c2VsZWN0b3J9IHtgO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIGluIGlubGluZV9jc3Nfb2JqW3NlbGVjdG9yXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBpbmxpbmVfY3NzX29ialtzZWxlY3Rvcl1bcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgJHtwcm9wfTogJHt3cC5jdXN0b21pemUodmFsKS5nZXQoKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlubGluZV9jc3MgKz0gYCR7cHJvcH06ICR7dG99YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNfdGhlbWVuYW1lLXN0eWxlc2hlZXQtaW5saW5lLWNzcycpLmh0bWwoaW5saW5lX2Nzcyk7XHJcbiAgICB9IClcclxufSlcclxuXHJcbndwLmN1c3RvbWl6ZSgnX3RoZW1lbmFtZV9zaXRlX2luZm8nLCAodmFsdWUpID0+IHtcclxuICAgIHZhbHVlLmJpbmQoKHRvKT0+e1xyXG4gICAgICAgICQoJy5jLXNpdGUtaW5mb19fdGV4dCcpLmh0bWwoc3RyaXBfdGFncyh0bywgJzxhPicpKTtcclxuICAgIH0pXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2N1c3RvbWl6ZS1wcmV2aWV3LmpzIiwiY29uc3Qgc3RyaXBfdGFncyA9IChpbnB1dCwgYWxsb3dlZCkgPT4ge1xyXG4gICAgYWxsb3dlZCA9ICgoKGFsbG93ZWQgfHwgJycpICsgJycpXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLm1hdGNoKC88W2Etel1bYS16MC05XSo+L2cpIHx8IFtdKVxyXG4gICAgLmpvaW4oJycpOyAvLyBtYWtpbmcgc3VyZSB0aGUgYWxsb3dlZCBhcmcgaXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmx5IHRhZ3MgaW4gbG93ZXJjYXNlICg8YT48Yj48Yz4pXHJcbiAgICB2YXIgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTldKilcXGJbXj5dKj4vZ2ksXHJcbiAgICBjb21tZW50c0FuZFBocFRhZ3MgPSAvPCEtLVtcXHNcXFNdKj8tLT58PFxcPyg/OnBocCk/W1xcc1xcU10qP1xcPz4vZ2k7XHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShjb21tZW50c0FuZFBocFRhZ3MsICcnKVxyXG4gICAgLnJlcGxhY2UodGFncywgZnVuY3Rpb24oJDAsICQxKSB7XHJcbiAgICAgIHJldHVybiBhbGxvd2VkLmluZGV4T2YoJzwnICsgJDEudG9Mb3dlckNhc2UoKSArICc+JykgPiAtMSA/ICQwIDogJyc7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RyaXBfdGFncztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsImNvbnNvbGUubG9nKCdidW5kbGUgaXMgbGl2ZScpO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XHJcbmltcG9ydCAnLi9jdXN0b21pemUtcHJldmlldyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvYnVuZGxlLmpzIiwiY29uc29sZS5sb2coJ3NsaWRlci5qcyBpcyBhbGl2ZScpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcclxuICAgIGlmKCEkKGUuY3VycmVudFRhcmdldCkucGFyZW50cygnLnN1Yi1tZW51JykubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4nKS5maW5kKCc+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfVxyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvcGVuJyk7XHJcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG59KVxyXG5cclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKTtcclxuICAgIGxldCBtZW51X2l0ZW0gPSBtZW51X2xpbmsucGFyZW50KCk7XHJcbiAgICBpZihtZW51X2l0ZW0uaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJy5tZW51LWl0ZW0ub3BlbicpKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIG1lbnVfbGluay5hZGQobWVudV9pdGVtLmZpbmQoJ2EnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudV9pdGVtLnNpYmxpbmdzKCcub3BlbicpLmZpbmQoJz5hPi5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgbWVudV9saW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xyXG4gICAgaWYoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=