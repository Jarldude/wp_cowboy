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

//listen for changes of input value object

wp.customize('blogname', function (value) {
    value.bind(function (to) {
        (0, _jquery2.default)('.c-header__blogname').html(to);
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


console.log('comming from slider.js');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2JjZGFhNTY1MTNiZjNkOTZmMTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemUtcHJpdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIndwIiwiY3VzdG9taXplIiwidmFsdWUiLCJiaW5kIiwidG8iLCJodG1sIiwic3RyaXBfdGFncyIsImlucHV0IiwiYWxsb3dlZCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJqb2luIiwidGFncyIsImNvbW1lbnRzQW5kUGhwVGFncyIsInJlcGxhY2UiLCIkMCIsIiQxIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImUiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50cyIsImxlbmd0aCIsImZpbmQiLCJ0cmlnZ2VyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibWVudV9idXR0b24iLCJtZW51X2xpbmsiLCJwYXJlbnQiLCJtZW51X2l0ZW0iLCJoYXNDbGFzcyIsImFkZCIsImF0dHIiLCJzaWJsaW5ncyIsImRvY3VtZW50IiwiY2xpY2siXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7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QUNBLFFBQUdDLFVBQVVDLFFBQVYsQ0FBbUIsTUFBbkIsQ0FBSCxFQUErQjtBQUMzQkQsa0JBQVVFLEdBQVYsQ0FBY0YsVUFBVVQsSUFBVixDQUFlLGlCQUFmLENBQWQsRUFBaURHLFdBQWpELENBQTZELE1BQTdEO0FBQ0FJLGtCQUFVSSxHQUFWLENBQWNGLFVBQVVULElBQVYsQ0FBZSxHQUFmLENBQWQsRUFBbUNZLElBQW5DLENBQXdDLGVBQXhDLEVBQXlELE9BQXpEO0FBQ0FOLG9CQUFZTixJQUFaLENBQWlCLG1CQUFqQixFQUFzQ1ksSUFBdEMsQ0FBMkMsYUFBM0MsRUFBMEQsT0FBMUQ7QUFDQU4sb0JBQVlOLElBQVosQ0FBaUIsbUJBQWpCLEVBQXNDWSxJQUF0QyxDQUEyQyxhQUEzQyxFQUEwRCxNQUExRDtBQUNILEtBTEQsTUFLTztBQUNISCxrQkFBVUksUUFBVixDQUFtQixPQUFuQixFQUE0QmIsSUFBNUIsQ0FBaUMsaUJBQWpDLEVBQW9EQyxPQUFwRCxDQUE0RCxPQUE1RDtBQUNBUSxrQkFBVVAsUUFBVixDQUFtQixNQUFuQjtBQUNBSyxrQkFBVUssSUFBVixDQUFlLGVBQWYsRUFBZ0MsTUFBaEM7QUFDQU4sb0JBQVlOLElBQVosQ0FBaUIsbUJBQWpCLEVBQXNDWSxJQUF0QyxDQUEyQyxhQUEzQyxFQUEwRCxNQUExRDtBQUNBTixvQkFBWU4sSUFBWixDQUFpQixtQkFBakIsRUFBc0NZLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE9BQTFEO0FBQ0g7QUFDSixDQWxCRDs7QUFvQkEsc0JBQUVFLFFBQUYsRUFBWUMsS0FBWixDQUFrQixVQUFDbkIsQ0FBRCxFQUFPO0FBQ3JCLFFBQUcsc0JBQUUsaUJBQUYsRUFBcUJHLE1BQXhCLEVBQWdDO0FBQzVCLDhCQUFFLDRDQUFGLEVBQWdERSxPQUFoRCxDQUF3RCxPQUF4RDtBQUNIO0FBQ0osQ0FKRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNiY2RhYTU2NTEzYmYzZDk2ZjE2IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBzdHJpcF90YWdzIGZyb20gJy4vaGVscGVycy9zdHJpcC10YWdzJztcclxuXHJcbi8vbGlzdGVuIGZvciBjaGFuZ2VzIG9mIGlucHV0IHZhbHVlIG9iamVjdFxyXG5cclxud3AuY3VzdG9taXplKCdibG9nbmFtZScsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCgodG8pPT57XHJcbiAgICAgICAgJCgnLmMtaGVhZGVyX19ibG9nbmFtZScpLmh0bWwodG8pO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG5cclxud3AuY3VzdG9taXplKCdfdGhlbWVuYW1lX3NpdGVfaW5mbycsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCgodG8pPT57XHJcbiAgICAgICAgJCgnLmMtc2l0ZS1pbmZvX190ZXh0JykuaHRtbChzdHJpcF90YWdzKHRvLCAnPGE+JykpO1xyXG4gICAgfSlcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY3VzdG9taXplLXByaXZpZXcuanMiLCJjb25zdCBzdHJpcF90YWdzID0gKGlucHV0LCBhbGxvd2VkKSA9PiB7XHJcbiAgICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJylcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAubWF0Y2goLzxbYS16XVthLXowLTldKj4vZykgfHwgW10pXHJcbiAgICAuam9pbignJyk7IC8vIG1ha2luZyBzdXJlIHRoZSBhbGxvd2VkIGFyZyBpcyBhIHN0cmluZyBjb250YWluaW5nIG9ubHkgdGFncyBpbiBsb3dlcmNhc2UgKDxhPjxiPjxjPilcclxuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naSxcclxuICAgIGNvbW1lbnRzQW5kUGhwVGFncyA9IC88IS0tW1xcc1xcU10qPy0tPnw8XFw/KD86cGhwKT9bXFxzXFxTXSo/XFw/Pi9naTtcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKGNvbW1lbnRzQW5kUGhwVGFncywgJycpXHJcbiAgICAucmVwbGFjZSh0YWdzLCBmdW5jdGlvbigkMCwgJDEpIHtcclxuICAgICAgcmV0dXJuIGFsbG93ZWQuaW5kZXhPZignPCcgKyAkMS50b0xvd2VyQ2FzZSgpICsgJz4nKSA+IC0xID8gJDAgOiAnJztcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHJpcF90YWdzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvaGVscGVycy9zdHJpcC10YWdzLmpzIiwiY29uc29sZS5sb2coJ2J1bmRsZSBpcyBsaXZlJyk7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJztcclxuaW1wb3J0ICcuL2N1c3RvbWl6ZS1wcml2aWV3JztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiLCJjb25zb2xlLmxvZygnY29tbWluZyBmcm9tIHNsaWRlci5qcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcclxuICAgIGlmKCEkKGUuY3VycmVudFRhcmdldCkucGFyZW50cygnLnN1Yi1tZW51JykubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4nKS5maW5kKCc+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfVxyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvcGVuJyk7XHJcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcclxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG59KVxyXG5cclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKTtcclxuICAgIGxldCBtZW51X2l0ZW0gPSBtZW51X2xpbmsucGFyZW50KCk7XHJcbiAgICBpZihtZW51X2l0ZW0uaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJy5tZW51LWl0ZW0ub3BlbicpKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIG1lbnVfbGluay5hZGQobWVudV9pdGVtLmZpbmQoJ2EnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudV9pdGVtLnNpYmxpbmdzKCcub3BlbicpLmZpbmQoJz5hPi5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgbWVudV9saW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xyXG4gICAgaWYoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxufSlcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==