/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"Vtdi");


/***/ }),

/***/ "0Xhw":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/HeaderBar.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "o6Ot");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar */ "Hh0O");
/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar */ "wkee");

//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "header-bar",
  components: {
    TitleBar: _TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    MenuBar: _MenuBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "1tFF":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=190d6862&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "20nU":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "Wgm0");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "KRny");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! child_process */ "QduZ");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "Al62");





var nw = _global__WEBPACK_IMPORTED_MODULE_1__["default"].nw;
var appRoot = _utils__WEBPACK_IMPORTED_MODULE_4__["default"].path(true).dirname(process.execPath),
    ffmpegPath = _utils__WEBPACK_IMPORTED_MODULE_4__["default"].path(appRoot + '\\ffmpeg\\ffmpeg.exe'),
    checkPath = child_process__WEBPACK_IMPORTED_MODULE_2___default.a.spawnSync(ffmpegPath, ['-version']);

if (checkPath.error) {
  appRoot = process.cwd();
  ffmpegPath = _utils__WEBPACK_IMPORTED_MODULE_4__["default"].path(appRoot + '\\ffmpeg\\ffmpeg.exe');
  checkPath = child_process__WEBPACK_IMPORTED_MODULE_2___default.a.spawnSync(ffmpegPath, ['-version']);

  if (checkPath.error) {
    _utils__WEBPACK_IMPORTED_MODULE_4__["default"].dialog.show = true;
    _utils__WEBPACK_IMPORTED_MODULE_4__["default"].dialog.title = '丢失';
    _utils__WEBPACK_IMPORTED_MODULE_4__["default"].dialog.body = '<p>ffmpeg文件丢失，请确保安装目录下的文件夹ffmpeg/有ffmpeg.exe和ffprobe.exe文件。</p>';
  }
} //======== 准备临时文件夹 =================


var TEMP_FOLDER = 'temp';

if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"].has(TEMP_FOLDER)) {
  child_process__WEBPACK_IMPORTED_MODULE_2___default.a.exec('rd /s /q ' + TEMP_FOLDER, function (err) {
    if (err) {
      _utils__WEBPACK_IMPORTED_MODULE_4__["default"].dialog.show = true;
      _utils__WEBPACK_IMPORTED_MODULE_4__["default"].dialog.body = '清除临时文件夹时发生了错误。信息如：' + err.message.toString('utf-8');
    } else {
      fs__WEBPACK_IMPORTED_MODULE_3___default.a.mkdirSync(TEMP_FOLDER);
    }
  });
} else {
  fs__WEBPACK_IMPORTED_MODULE_3___default.a.mkdirSync(TEMP_FOLDER);
}

nw.process.on('exit', function () {
  child_process__WEBPACK_IMPORTED_MODULE_2___default.a.execSync('rd /s /q ' + TEMP_FOLDER);
});
var readFile = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(_utils__WEBPACK_IMPORTED_MODULE_4__["default"].path(appRoot + '\\config.json'), 'utf-8'),
    usercfg;

if (readFile) {
  usercfg = JSON.parse(readFile);
} else {
  usercfg = {};
}

/* harmony default export */ __webpack_exports__["default"] = ({
  appRoot: appRoot,
  ffmpegPath: ffmpegPath,
  usercfg: usercfg,
  temp: TEMP_FOLDER,
  audioThumb: _utils__WEBPACK_IMPORTED_MODULE_4__["default"].path(appRoot + '\\icons\\audio.jpg'),
  output: {
    folder: _utils__WEBPACK_IMPORTED_MODULE_4__["default"].path(Object({"NODE_ENV":"production","BASE_URL":"./"}).USERPROFILE + '\\desktop'),
    width: 1280,
    height: 720,
    bitv: 2048,
    bita: 128,
    fps: 25,
    format: {
      image: 'jpg',
      video: 'mp4',
      audio: 'mp3'
    }
  }
});

/***/ }),

/***/ "2B+8":
/*!************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_1_1_5_thread_loader_dist_cjs_js_node_modules_babel_loader_8_0_0_beta_3_babel_loader_lib_index_js_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!../../node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=script&lang=js */ "W9Pi");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_1_1_5_thread_loader_dist_cjs_js_node_modules_babel_loader_8_0_0_beta_3_babel_loader_lib_index_js_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "2Tfi":
/*!******************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=template&id=190d6862&scoped=true ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_190d6862_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=template&id=190d6862&scoped=true */ "6WgN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_190d6862_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_190d6862_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "5ab6":
/*!**************************************!*\
  !*** ./src/components/HeaderBar.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderBar_vue_vue_type_template_id_36907676__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderBar.vue?vue&type=template&id=36907676 */ "ffuQ");
/* harmony import */ var _HeaderBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBar.vue?vue&type=script&lang=js */ "fw88");
/* empty/unused harmony star reexport *//* harmony import */ var _HeaderBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderBar.vue?vue&type=style&index=0&lang=css */ "OVf0");
/* harmony import */ var _node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.4@vue-loader/lib/runtime/componentNormalizer.js */ "uMhA");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeaderBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderBar_vue_vue_type_template_id_36907676__WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderBar_vue_vue_type_template_id_36907676__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6WgN":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=template&id=190d6862&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toolbar"},[_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.drop === 'chosefile'},attrs:{"name":"chosefile"},on:{"click":_vm.menuFn}},[_c('i',{staticClass:"icon icon-folder-open"}),_vm._v(" 选择文件\n    ")]),_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.drop === 'chosedir'},attrs:{"name":"chosedir","title":'选择输出目录，当前：'+_vm.output},on:{"click":_vm.menuFn}},[_c('i',{staticClass:"icon icon-floppy-disk"}),_vm._v(" 保存目录\n    ")]),_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.drop === 'batch'},attrs:{"name":"batch"},on:{"click":_vm.menuFn}},[_c('i',{staticClass:"icon icon-cog"}),_vm._v(" 批量设置\n    ")]),_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.drop === 'more'},attrs:{"name":"more"},on:{"click":_vm.menuFn}},[_c('i',{staticClass:"icon icon-list"}),_vm._v(" 更多功能\n    ")]),_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.isStarted},on:{"click":_vm.convertFn}},[_c('i',{staticClass:"icon icon-stack"}),_vm._v(" "+_vm._s(_vm.isStarted ? '停止':'开始')+"\n    ")]),_c('input',{staticClass:"toolbar-item",attrs:{"type":"range","min":".19","max":".98","step":"0.01"},on:{"input":_vm.zoomItemFn}})])}
var staticRenderFns = []



/***/ }),

/***/ "A0Xl":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/TitleBar.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Al62":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "z1Rx");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.string.pad-start */ "4BGM");
/* harmony import */ var core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "Wgm0");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "vHIR");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "3MsN");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "Y6+l");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "q6NJ");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fs */ "mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ "oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "NeLz");










var formats = {
  image: [['jpg', 'jpeg', 'png', 'gif', 'webp', 'ico', 'bmp', 'jps', 'mpo'], ['tga', 'psd', 'iff', 'pbm', 'pcx', 'tif']],
  video: [['mp4', 'ogg', 'webm', 'mpeg', 'mkv'], ['ts', 'flv', 'rm', 'mov', 'wmv', 'avi', 'rmvb']],
  audio: [['mp3', 'wav', 'mpeg'], ['wma', 'mid']]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  rename: function rename(oldname, newname, callback) {
    fs__WEBPACK_IMPORTED_MODULE_7___default.a.access(newname, function (err) {
      if (!err) {
        callback('文件【' + newname + '】' + '已存在!');
      } else {
        fs__WEBPACK_IMPORTED_MODULE_7___default.a.rename(oldname, newname, callback);
      }
    });
  },
  copyFile: function copyFile(oldname, newname, callback) {
    fs__WEBPACK_IMPORTED_MODULE_7___default.a.access(newname, function (err) {
      if (!err) {
        callback('文件【' + newname + '】' + '已存在!');
      } else {
        fs__WEBPACK_IMPORTED_MODULE_7___default.a.copyFile(oldname, newname, callback);
      }
    });
  },
  canvasToFile: function canvasToFile(url, data, dialog) {
    fs__WEBPACK_IMPORTED_MODULE_7___default.a.writeFile(url, data.replace(/^data:image\/\w+;base64,/, ''), 'base64', function (err) {
      if (err) {
        dialog.show = true;
        dialog.title = '失败！';
        dialog.body = '<p>错误信息：' + err.message + '</p>';
      } else {
        dialog.show = true;
        dialog.title = '成功！';
        dialog.body = '<p>文件输出位置：' + url + '</p>';
      }
    });
  },
  path: function path(p) {
    if (typeof p === 'boolean') {
      return path__WEBPACK_IMPORTED_MODULE_8___default.a;
    }

    return path__WEBPACK_IMPORTED_MODULE_8___default.a.normalize(p);
  },
  type: function type(format) {
    var types = ['audio', 'image', 'video'],
        i = types.length;

    for (; i--;) {
      if (formats[types[i]][0].includes(format) || formats[types[i]][1].includes(format)) return types[i];
    }
  },
  usableType: function usableType(ext, name) {
    return formats[name][0].includes(ext);
  },
  has: function has(url) {
    return fs__WEBPACK_IMPORTED_MODULE_7___default.a.existsSync(url);
  },
  timemat: function timemat(time) {
    var t;

    if (typeof time === 'string' && /^\d{2}:\d{2}:\d{2}([.\d]*)$/.test(time)) {
      t = time.split(':');
      return (parseInt(t[0] * 3600) + parseInt(t[1] * 60) + parseFloat(t[2])) * 1000;
    } else if (typeof time === 'number') {
      if (isNaN(time)) return '00:00:00';
      t = time / 1000;
      var h = Math.floor(t / 3600).toString(),
          m = Math.floor(t % 3600 / 60).toString(),
          s = Math.floor(t % 60).toString();
      return h.padStart(2, 0) + ':' + m.padStart(2, 0) + ':' + s.padStart(2, 0);
    } else {
      return "error time";
    }
  },
  datemat: function datemat(time) {
    var date;

    if (typeof time === 'number') {
      date = new Date(time);
    } else if (typeof time === 'string') {
      return new Date(time).getTime();
    } else {
      date = new Date();
    }

    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  },
  sizemat: function sizemat(b, flag) {
    if (!flag) {
      if (b < 1024) return b + ' B';
      var size = b / 1024,
          fixed = arguments[1] || 2;

      if (size < 1024) {
        return size.toFixed(fixed) + ' KB';
      } else {
        return (size / 1024).toFixed(fixed) + ' MB';
      }
    } else {
      if (/^[\d.]+\s*KB$/.test(b)) {
        return parseFloat(b) * 1024;
      } else if (/^[\d.]+\s*MB$/.test(b)) {
        return parseFloat(b) * 1024 * 1024;
      } else {
        return parseFloat(b);
      }
    }
  },
  namemat: function namemat(str, n) {
    if (/\d+$/g.test(str)) {
      return str.replace(/\d+$/g, function (a) {
        return (parseInt('1' + a) + n).toString().slice(1);
      });
    }

    return str + (100 + n).toString().slice(1);
  },
  css: function css(node, name) {
    return parseFloat(window.getComputedStyle(node)[name]);
  },
  dialog: new vue__WEBPACK_IMPORTED_MODULE_9__["default"]({
    el: '#dialog',
    data: {
      show: false,
      title: '',
      body: '',
      btns: []
    },
    methods: {
      setBtn: function setBtn() {
        var _this$btns;

        this.btns.splice(0, this.btns.length);

        (_this$btns = this.btns).push.apply(_this$btns, arguments);
      },
      dialogFn: function dialogFn(e, code) {
        this.show = false;
        this.title = '';
        this.body = '';
        this.btns.splice(0, this.btns.length);

        if (typeof this.callback === 'function') {
          this.callback.call(e.currentTarget, code);
        }
      }
    }
  }),
  menu: new vue__WEBPACK_IMPORTED_MODULE_9__["default"]({
    el: '#contextmenu',
    data: {
      show: false,
      x: 0,
      y: 0,
      items: []
    },
    methods: {
      setItem: function setItem() {
        var _this$items;

        this.items.splice(0, this.items.length);

        (_this$items = this.items).push.apply(_this$items, arguments);
      },
      contextmenuFn: function contextmenuFn(e) {
        var target = e.target;
        if (!target.hasAttribute('data-name')) return false;
        this.show = false;
        this.items.splice(0, this.items.length);

        if (typeof this.callback === 'function') {
          this.callback.call(target, target.dataset.name);
          this.callback = null;
          this.x = this.y = 0;
        }
      }
    }
  })
});

/***/ }),

/***/ "Bh4a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "CNPI":
/*!*******************************************************************!*\
  !*** ./src/components/TitleBar.vue?vue&type=template&id=65da7268 ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_65da7268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./TitleBar.vue?vue&type=template&id=65da7268 */ "D4RQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_65da7268__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_65da7268__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "CtpP":
/*!*********************************************************************!*\
  !*** ./src/components/TitleBar.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!../../node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./TitleBar.vue?vue&type=style&index=0&lang=css */ "A0Xl");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D4RQ":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/TitleBar.vue?vue&type=template&id=65da7268 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"titlebar"},[_c('h1',{staticClass:"title draggable"},[_vm._v(_vm._s(_vm.title))]),_c('div',{staticClass:"titlebar-tool"},[_c('button',{on:{"click":_vm.minimize}},[_vm._v("−")]),_c('button',{staticClass:"full",on:{"click":_vm.toggle}},[_c('i')]),_c('button',{on:{"click":_vm.close}},[_vm._v("×")])])])}
var staticRenderFns = []



/***/ }),

/***/ "DCnL":
/*!*************************************************************!*\
  !*** ./src/components/TitleBar.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_1_1_5_thread_loader_dist_cjs_js_node_modules_babel_loader_8_0_0_beta_3_babel_loader_lib_index_js_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!../../node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./TitleBar.vue?vue&type=script&lang=js */ "dmrR");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_1_1_5_thread_loader_dist_cjs_js_node_modules_babel_loader_8_0_0_beta_3_babel_loader_lib_index_js_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "Hh0O":
/*!*************************************!*\
  !*** ./src/components/TitleBar.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TitleBar_vue_vue_type_template_id_65da7268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=template&id=65da7268 */ "CNPI");
/* harmony import */ var _TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=script&lang=js */ "DCnL");
/* empty/unused harmony star reexport *//* harmony import */ var _TitleBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=style&index=0&lang=css */ "CtpP");
/* harmony import */ var _node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.4@vue-loader/lib/runtime/componentNormalizer.js */ "uMhA");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TitleBar_vue_vue_type_template_id_65da7268__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TitleBar_vue_vue_type_template_id_65da7268__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "KRny":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "o6Ot");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);

// const path = require('path');
// import config from './config.js';
var inputEl = document.createElement('input');
var outputEl = document.createElement('input');
inputEl.type = outputEl.type = 'file';
inputEl.multiple = true;
outputEl.nwdirectory = true;
/*
function listItems(files){
    let i = 0,
        item,
        hex,
        key;

    function recycle(file){
        item = {
            path: file.path,
            thumb: '',
            canplay: false,
            playing: 0,
            progress: 0,
            lock: store.toolbar.toggle.lock,
            alpha: store.toolbar.toggle.alpha,
            type: '',
            series: false,
            logo: '',
            logoX: 1,
            logoY: 2,
            logoScale: 0,
            logoSize: 12,
            logoStart: 0,
            logoEnd: 0,

            duration: 0,
            startTime: 0,
            endTime: 0,
            currentTime: 0,
            coverTime: 0,
            cover: false,
            coverWidth: 480,

            name: file.name,
            toname: '',

            bitv: 0,
            bita: 0,

            size: (parseInt(file.size) || 0),
            quality: 0,

            scale: 0,
            width: 0,
            towidth: 0,
            height: 0,
            toheight: 0,

            format: '',
            toformat: '',

            fps: 0,
            tofps: 0,

            split: false,
            achannel: '',
            aclayout: 0,
            vchannel: ''
        };

        hex = crypto.createHash('md5');
        hex.update(file.path);
        key = hex.digest('base64');
        vue.$set(vue.items, key, item);

        Media.info({
            input: file.path,
            success: (json)=>{
                item.thumb = json.thumb;
                item.type = json.type;

                item.duration = json.duration;

                item.bitv = json.bitv || json.bit;
                item.bita = json.bita;

                item.scale = (json.height / json.width) || vue.viewScale;
                item.width = json.width;
                item.height = json.height;

                item.format = json.ext;
                item.canplay = (/(mp4|mp3|ogg|mpeg|mkv|wav|webm)/i.test(json.ext));
                item.fps = json.fps;

                item.achannel = json.achannel;
                item.aclayout = json.aclayout;
                item.vchannel = json.vchannel;

                vue.reItem(item);

                i++;
                if(files[i]) recycle(files[i]);
            },
            fail: (err)=>{
                utils.dialog.show = true;
                utils.dialog.body = `<p>文件：“${file.name}”可能不支持！是否保留以尝试转码？</p>
                    <details class="dialog-details">
                        <summary>详细错误</summary>
                        <p>${err}</p>
                    </details>`;
                utils.dialog.setBtn('是','否');
                utils.dialog.callback = function(code){

                    if(code === 1){
                        window.URL.revokeObjectURL(vue.items[key].thumb);
                        vue.$delete(vue.items, key);
                    }
                    i++;
                    if(files[i]) recycle(files[i]);
                };
            }
        });
    }

    if(files.length){
        recycle(files[0]);
    }
}*/

/* harmony default export */ __webpack_exports__["default"] = ({
  // eslint-disable-next-line
  nw: nw,
  // eslint-disable-next-line
  win: nw.Window.get(),
  inputEl: inputEl,
  outputEl: outputEl // listItems,
  // store

});

/***/ }),

/***/ "LyJT":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=01b2deba ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('HeaderBar')],1)}
var staticRenderFns = []



/***/ }),

/***/ "OVf0":
/*!**********************************************************************!*\
  !*** ./src/components/HeaderBar.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!../../node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./HeaderBar.vue?vue&type=style&index=0&lang=css */ "ZG1z");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Pf3K":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_01b2deba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=01b2deba */ "cMw7");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "QtiU");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ "ZL7j");
/* harmony import */ var _node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/_vue-loader@15.2.4@vue-loader/lib/runtime/componentNormalizer.js */ "uMhA");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_01b2deba__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_01b2deba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "QduZ":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "QtiU":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_1_1_5_thread_loader_dist_cjs_js_node_modules_babel_loader_8_0_0_beta_3_babel_loader_lib_index_js_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--12-0!../node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!../node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib!../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js */ "SI4a");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_1_1_5_thread_loader_dist_cjs_js_node_modules_babel_loader_8_0_0_beta_3_babel_loader_lib_index_js_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "SI4a":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "z1Rx");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.freeze */ "lb3d");
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise */ "o6Ot");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "KRny");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "20nU");
/* harmony import */ var _components_HeaderBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HeaderBar */ "5ab6");



//
//
//
//
//
//



var nw = _global__WEBPACK_IMPORTED_MODULE_3__["default"].nw;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data: function data() {
    return {
      pp: Object.freeze(nw.App.manifest),
      output: _config__WEBPACK_IMPORTED_MODULE_4__["default"].output.folder,
      items: {},
      viewWidth: screen.availWidth * .19,
      viewScale: .5625,
      isStarted: false,
      winToggle: true,
      batchParams: {
        speed: 'slow',
        nameAll: nw.App.manifest.name,
        widthLimit: _config__WEBPACK_IMPORTED_MODULE_4__["default"].output.width,
        heightLimit: _config__WEBPACK_IMPORTED_MODULE_4__["default"].output.height,
        sizeLimit: 0,
        logo: ''
      },
      toolbar: {
        drop: 0,
        toggle: {
          lock: 1,
          alpha: 1
        },
        x: 0,
        y: 0
      },
      active: {
        mainSubmenu: ''
      },
      capParams: {
        mode: 0,
        bitv: _config__WEBPACK_IMPORTED_MODULE_4__["default"].output.bitv,
        bita: _config__WEBPACK_IMPORTED_MODULE_4__["default"].output.bita,
        widthLimit: _config__WEBPACK_IMPORTED_MODULE_4__["default"].output.width,
        width: screen.width,
        height: screen.height,
        x: 0,
        y: 0,
        fps: _config__WEBPACK_IMPORTED_MODULE_4__["default"].output.fps,
        audioDevices: [],
        audioDevice: ''
      },
      sprite: {
        preview: false,
        align: 1,
        items: [],
        listCss: '',
        itemCss: '',
        imgCss: ''
      },
      framestep: 2
    };
  },
  components: {
    HeaderBar: _components_HeaderBar__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "Vtdi":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "o6Ot");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "NeLz");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "Pf3K");



vue__WEBPACK_IMPORTED_MODULE_1__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "W9Pi":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "z1Rx");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "o6Ot");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.js */ "KRny");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var nw = _global_js__WEBPACK_IMPORTED_MODULE_2__["default"].nw;
var win = nw.Window.get();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "menu-bar",
  data: function data() {
    return {
      drop: '',
      isStarted: false
    };
  },
  methods: {
    menuFn: function menuFn(e) {
      var target = e.currentTarget,
          name = target.name;

      if (this.drop === name) {
        this.drop = '';
      } else {
        this.drop = name;
        this.x = e.x;
        this.y = e.y + 30;
      }

      console.log(name);

      switch (name) {
        case 'chosefile':
          _global_js__WEBPACK_IMPORTED_MODULE_2__["default"].inputEl.value = '';
          _global_js__WEBPACK_IMPORTED_MODULE_2__["default"].inputEl.click();
          break;

        case 'chosedir':
          _global_js__WEBPACK_IMPORTED_MODULE_2__["default"].outputEl.click();
          break;

        case 'pdf2pic':
          nw.Window.open('plugins/pdf2pic/pdf2pic.html', {
            id: 'pdf2pic',
            position: 'center',
            new_instance: false,
            focus: true,
            frame: false,
            width: Math.round(win.width * .8),
            height: Math.round(win.height * .8)
          });
          break;

        /*
        case 'concat':
        {
        let tmpType,
        items = [],
        output = vue.output+'\\'+vue.batchParams.nameAll;
        //检查是否被允许
        for(key in vue.items){
        item = vue.items[key];
        if(item.lock){
          if(!tmpType) tmpType = item.type;
          if(item.type !== tmpType || item.type === 'image'){
              utils.dialog.show = true;
              utils.dialog.body = '所选文件“'+item.path+'”不可拼接！音、视频不能混合拼接，且不支持图片。';
              return false;
          }else{
              items.push(item);
          }
        }
        }
        if(tmpType === 'video'){
        output += '.mp4';
        }else{
        output += '.mp3';
        }
        if(items.length > 1){
        if(utils.has(output)){
          utils.dialog.show = true;
          utils.dialog.body = '文件“'+output+'”已存在，是否覆盖？';
          utils.dialog.setBtn('覆盖','否');
          utils.dialog.callback = (code)=>{
              if(code === 0) Media.concat(tmpType, items, output);
          }
        }else{
          Media.concat(tmpType, items, output);
        }
        }else{
        utils.dialog.show = true;
        utils.dialog.body = '无法拼接，要实现拼接至少两个文件。';
        }
        }
        break;
        case 'mix':
        {
        let tmpType,
        items = [],
        output = vue.output+'\\'+vue.batchParams.nameAll;
        for(key in vue.items){
        item = vue.items[key];
        if(item.lock){
          if(!tmpType && item.type === 'video') tmpType = item.type;
          if(item.type === 'image') {
              utils.dialog.show = true;
              utils.dialog.body = '所选文件“' + item.path + '”不可混合，不支持图片。';
              return false;
          }
          items.push(item);
        }
        }
        if(!tmpType) tmpType = 'audio';
        if(tmpType === 'video'){
        output += '.mp4';
        }else{
        output += '.mp3';
        }
        if(items.length > 1){
        if(utils.has(output)){
          utils.dialog.show = true;
          utils.dialog.body = '文件“'+output+'”已存在，是否覆盖？';
          utils.dialog.setBtn('覆盖','否');
          utils.dialog.callback = (code)=>{
              if(code === 0) Media.mix(tmpType, items, output);
          }
        }else{
          Media.mix(tmpType, items, output);
        }
        }else{
        utils.dialog.show = true;
        utils.dialog.body = '无法拼接，要实现拼接至少两个文件。';
        }
        }
        break;
        case 'firstAid':
        utils.dialog.show = true;
        utils.dialog.title = '严重提示！';
        utils.dialog.body = '<p>为了避免失误操作，必须谨慎选择是否真的启用急救，不到万不得已，请不要轻易启用！当然，它也可以强制中止正在处理的程序。</p>';
        utils.dialog.setBtn('启用','关闭');
        utils.dialog.callback = function(code){
        if(code === 0){
          Media.killAll();
        }
        target.classList.remove('active-1');
        };
        break;
        case 'helpBook':
        //nw.Shell.openExternal(config.usercfg.documentation);
        break;*/
      }
    },
    convertFn: function convertFn() {},
    zoomItemFn: function zoomItemFn() {}
  }
});

/***/ }),

/***/ "ZG1z":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/HeaderBar.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ZL7j":
/*!*****************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!../node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ "Bh4a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cMw7":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=01b2deba ***!
  \***************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_01b2deba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=01b2deba */ "LyJT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_01b2deba__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_01b2deba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "dmrR":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/TitleBar.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "KRny");
//
//
//
//
//
//
//
//
//
//
//

var win = _global__WEBPACK_IMPORTED_MODULE_0__["default"].win;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "title-bar",
  props: ['title'],
  methods: {
    minimize: function minimize() {
      win.minimize();
    },
    toggle: function toggle(e) {
      var classList = e.currentTarget.classList,
          w = screen.width * .8,
          h = Math.round(w * .5625),
          x = (screen.width - w) / 2,
          y = (screen.height - h) / 2;
      classList.toggle('full');

      if (classList.contains('full')) {
        win.maximize();
      } else {
        win.moveTo(x, y);
        win.resizeTo(w, h);
      }
    },
    close: function close() {
      win.close(true);
    }
  }
});

/***/ }),

/***/ "ffuQ":
/*!********************************************************************!*\
  !*** ./src/components/HeaderBar.vue?vue&type=template&id=36907676 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_template_id_36907676__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./HeaderBar.vue?vue&type=template&id=36907676 */ "oNjm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_template_id_36907676__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_template_id_36907676__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "fw88":
/*!**************************************************************!*\
  !*** ./src/components/HeaderBar.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_1_1_5_thread_loader_dist_cjs_js_node_modules_babel_loader_8_0_0_beta_3_babel_loader_lib_index_js_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--12-0!../../node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!../../node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./HeaderBar.vue?vue&type=script&lang=js */ "0Xhw");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_1_1_5_thread_loader_dist_cjs_js_node_modules_babel_loader_8_0_0_beta_3_babel_loader_lib_index_js_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "mw/K":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oNjm":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/HeaderBar.vue?vue&type=template&id=36907676 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('title-bar',{attrs:{"title":"标题"}}),_c('menu-bar'),_c('sub-menu')],1)}
var staticRenderFns = []



/***/ }),

/***/ "oyvS":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "s94l":
/*!********************************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=style&index=0&id=190d6862&scoped=true&lang=css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_190d6862_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!../../node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=style&index=0&id=190d6862&scoped=true&lang=css */ "1tFF");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_190d6862_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_190d6862_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_190d6862_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_190d6862_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_190d6862_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "wkee":
/*!************************************!*\
  !*** ./src/components/MenuBar.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuBar_vue_vue_type_template_id_190d6862_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=template&id=190d6862&scoped=true */ "2Tfi");
/* harmony import */ var _MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=script&lang=js */ "2B+8");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuBar_vue_vue_type_style_index_0_id_190d6862_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=style&index=0&id=190d6862&scoped=true&lang=css */ "s94l");
/* harmony import */ var _node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.4@vue-loader/lib/runtime/componentNormalizer.js */ "uMhA");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuBar_vue_vue_type_template_id_190d6862_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuBar_vue_vue_type_template_id_190d6862_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "190d6862",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

/******/ });
//# sourceMappingURL=app.383896e1.js.map