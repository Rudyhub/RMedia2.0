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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "header-bar",
  props: ['store'],
  components: {
    MenuBar: _MenuBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    TitleBar: _TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "231I":
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "Wgm0");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vars */ "zwvM");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! child_process */ "QduZ");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);





var nw = _vars__WEBPACK_IMPORTED_MODULE_1__["default"].nw;
var appRoot = path__WEBPACK_IMPORTED_MODULE_4___default.a.dirname(nw.process.execPath),
    ffmpegPath = path__WEBPACK_IMPORTED_MODULE_4___default.a.join(appRoot, 'ffmpeg', 'ffmpeg.exe'),
    checkPath = child_process__WEBPACK_IMPORTED_MODULE_2___default.a.spawnSync(ffmpegPath, ['-version']);

if (checkPath.error) {
  appRoot = nw.process.cwd();
  ffmpegPath = path__WEBPACK_IMPORTED_MODULE_4___default.a.join(appRoot, 'ffmpeg', 'ffmpeg.exe');
  checkPath = child_process__WEBPACK_IMPORTED_MODULE_2___default.a.spawnSync(ffmpegPath, ['-version']);

  if (checkPath.error) {
    alert('ffmpeg文件丢失，请确保安装目录下的文件夹ffmpeg/有ffmpeg.exe文件。');
  }
} //======== 准备临时文件夹 =================


var TEMP_FOLDER = 'temp';

if (fs__WEBPACK_IMPORTED_MODULE_3___default.a.existsSync(TEMP_FOLDER)) {
  child_process__WEBPACK_IMPORTED_MODULE_2___default.a.exec('rd /s /q ' + TEMP_FOLDER, function (err) {
    if (err) {
      alert('清除临时文件夹时发生了错误。信息如：' + err.message.toString('utf-8'));
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
var readFile = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_4___default.a.join(appRoot, 'config.json'), 'utf-8'),
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
  audioThumb: path__WEBPACK_IMPORTED_MODULE_4___default.a.join(appRoot, 'icons', 'audio.jpg'),
  output: {
    folder: path__WEBPACK_IMPORTED_MODULE_4___default.a.join(nw.process.env.USERPROFILE, 'desktop'),
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

/***/ "5ab6":
/*!**************************************!*\
  !*** ./src/components/HeaderBar.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderBar_vue_vue_type_template_id_029d65ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderBar.vue?vue&type=template&id=029d65ba */ "G05w");
/* harmony import */ var _HeaderBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBar.vue?vue&type=script&lang=js */ "fw88");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.4@vue-loader/lib/runtime/componentNormalizer.js */ "uMhA");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderBar_vue_vue_type_template_id_029d65ba__WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderBar_vue_vue_type_template_id_029d65ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Bh4a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "ExpY":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/TitleBar.vue?vue&type=template&id=362a5f5e ***!
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

/***/ "G05w":
/*!********************************************************************!*\
  !*** ./src/components/HeaderBar.vue?vue&type=template&id=029d65ba ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_template_id_029d65ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./HeaderBar.vue?vue&type=template&id=029d65ba */ "hqm4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_template_id_029d65ba__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_template_id_029d65ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "Hh0O":
/*!*************************************!*\
  !*** ./src/components/TitleBar.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TitleBar_vue_vue_type_template_id_362a5f5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=template&id=362a5f5e */ "TwT3");
/* harmony import */ var _TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar.vue?vue&type=script&lang=js */ "DCnL");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.4@vue-loader/lib/runtime/componentNormalizer.js */ "uMhA");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TitleBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TitleBar_vue_vue_type_template_id_362a5f5e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TitleBar_vue_vue_type_template_id_362a5f5e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Pf3K":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_790d8e88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=790d8e88 */ "mgDY");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "QtiU");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ "ZL7j");
/* harmony import */ var _node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/_vue-loader@15.2.4@vue-loader/lib/runtime/componentNormalizer.js */ "uMhA");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_790d8e88__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_790d8e88__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "o6Ot");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeaderBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HeaderBar */ "5ab6");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.js */ "wNa6");

//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data: function data() {
    return {
      store: _store_js__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  components: {
    HeaderBar: _components_HeaderBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "SxnH":
/*!********************************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=style&index=0&id=d221916a&scoped=true&lang=css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_d221916a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!../../node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=style&index=0&id=d221916a&scoped=true&lang=css */ "vRer");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_d221916a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_d221916a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_d221916a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_d221916a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_0_4_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_d221916a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "TY8H":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=790d8e88 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('header-bar',{attrs:{"store":_vm.store}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "TwT3":
/*!*******************************************************************!*\
  !*** ./src/components/TitleBar.vue?vue&type=template&id=362a5f5e ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_362a5f5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./TitleBar.vue?vue&type=template&id=362a5f5e */ "ExpY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_362a5f5e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_TitleBar_vue_vue_type_template_id_362a5f5e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
// import vars from '../vars.js';
// const nw = vars.nw;
// const win = vars.win;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MenuBar",
  props: ['store'],
  methods: {
    menuFn: function menuFn(e) {
      this.store.toolbar.drop = e.currentTarget.name;
      /*
      let target = e.currentTarget,
          name = target.name;
       if(this.drop === name){
          this.drop = '';
      }else{
          this.drop = name;
          this.x = e.x;
          this.y = e.y+30;
      }
      switch(name){
          case 'chosefile': g.inputEl.value = ''; g.inputEl.click(); break;
          case 'chosedir': g.outputEl.click(); break;
          case 'pdf2pic':
              nw.Window.open('plugins/pdf2pic/pdf2pic.html',{
                  id: 'pdf2pic',
                  position: 'center',
                  new_instance: false,
                  focus: true,
                  frame: false,
                  width: Math.round(win.width*.8),
                  height: Math.round(win.height*.8)
              });
              break;
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
              break;
      }*/
    },
    convertFn: function convertFn() {},
    zoomItemFn: function zoomItemFn() {}
  }
});

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

/***/ "Zex6":
/*!******************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=template&id=d221916a&scoped=true ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_d221916a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!../../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./MenuBar.vue?vue&type=template&id=d221916a&scoped=true */ "ZyNC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_d221916a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_d221916a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ZyNC":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=template&id=d221916a&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toolbar"},[_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.store.toolbar.drop === 'chosefile'},attrs:{"name":"chosefile"},on:{"click":_vm.menuFn}},[_c('i',{staticClass:"icon icon-folder-open"}),_vm._v(" 选择文件\n    ")]),_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.store.toolbar.drop === 'chosedir'},attrs:{"name":"chosedir","title":'选择输出目录，当前：'+_vm.output},on:{"click":_vm.menuFn}},[_c('i',{staticClass:"icon icon-floppy-disk"}),_vm._v(" 保存目录\n    ")]),_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.store.toolbar.drop === 'batch'},attrs:{"name":"batch"},on:{"click":_vm.menuFn}},[_c('i',{staticClass:"icon icon-cog"}),_vm._v(" 批量设置\n    ")]),_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.store.toolbar.drop === 'more'},attrs:{"name":"more"},on:{"click":_vm.menuFn}},[_c('i',{staticClass:"icon icon-list"}),_vm._v(" 更多功能\n    ")]),_c('button',{staticClass:"toolbar-item",class:{'active-1': _vm.store.isStarted},on:{"click":_vm.convertFn}},[_c('i',{staticClass:"icon icon-stack"}),_vm._v(" "+_vm._s(_vm.store.isStarted ? '停止':'开始')+"\n    ")]),_c('input',{staticClass:"toolbar-item",attrs:{"type":"range","min":".19","max":".98","step":"0.01"},on:{"input":_vm.zoomItemFn}})])}
var staticRenderFns = []



/***/ }),

/***/ "dmrR":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/TitleBar.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vars */ "zwvM");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults */ "231I");
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


var win = _vars__WEBPACK_IMPORTED_MODULE_0__["default"].win;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "title-bar",
  data: function data() {
    return {
      title: _defaults__WEBPACK_IMPORTED_MODULE_1__["default"].usercfg.title || ''
    };
  },
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

/***/ "hqm4":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/HeaderBar.vue?vue&type=template&id=029d65ba ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('title-bar',{attrs:{"store":_vm.store}}),_c('menu-bar',{attrs:{"store":_vm.store}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "mgDY":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=790d8e88 ***!
  \***************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_790d8e88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"E://RMedia2.0//node_modules//.cache//vue-loader","cacheIdentifier":"163670b6-vue-loader-template"}!../node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!../node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=790d8e88 */ "TY8H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_790d8e88__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_E_RMedia2_0_node_modules_cache_vue_loader_cacheIdentifier_163670b6_vue_loader_template_node_modules_vue_loader_15_2_4_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_790d8e88__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "mw/K":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "vRer":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.4.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@0.28.11@css-loader??ref--6-oneOf-1-1!./node_modules/_vue-loader@15.2.4@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@2.1.5@postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=d221916a&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "wNa6":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "z1Rx");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "o6Ot");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vars.js */ "zwvM");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaults.js */ "231I");




var store = {
  output: _defaults_js__WEBPACK_IMPORTED_MODULE_3__["default"].output.folder,
  items: {},
  viewWidth: screen.availWidth * .19,
  viewScale: .5625,
  isStarted: false,
  winToggle: true,
  batchParams: {
    speed: 'slow',
    nameAll: _vars_js__WEBPACK_IMPORTED_MODULE_2__["default"].nw.App.manifest.name,
    widthLimit: _defaults_js__WEBPACK_IMPORTED_MODULE_3__["default"].output.width,
    heightLimit: _defaults_js__WEBPACK_IMPORTED_MODULE_3__["default"].output.height,
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
    bitv: _defaults_js__WEBPACK_IMPORTED_MODULE_3__["default"].output.bitv,
    bita: _defaults_js__WEBPACK_IMPORTED_MODULE_3__["default"].output.bita,
    widthLimit: _defaults_js__WEBPACK_IMPORTED_MODULE_3__["default"].output.width,
    width: screen.width,
    height: screen.height,
    x: 0,
    y: 0,
    fps: _defaults_js__WEBPACK_IMPORTED_MODULE_3__["default"].output.fps,
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
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "wkee":
/*!************************************!*\
  !*** ./src/components/MenuBar.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuBar_vue_vue_type_template_id_d221916a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=template&id=d221916a&scoped=true */ "Zex6");
/* harmony import */ var _MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=script&lang=js */ "2B+8");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuBar_vue_vue_type_style_index_0_id_d221916a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=style&index=0&id=d221916a&scoped=true&lang=css */ "SxnH");
/* harmony import */ var _node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.4@vue-loader/lib/runtime/componentNormalizer.js */ "uMhA");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_4_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuBar_vue_vue_type_template_id_d221916a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuBar_vue_vue_type_template_id_d221916a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d221916a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "zwvM":
/*!*********************!*\
  !*** ./src/vars.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
var inputEl = document.createElement('input');
var outputEl = document.createElement('input');
inputEl.type = outputEl.type = 'file';
inputEl.multiple = true;
outputEl.nwdirectory = true;
/* harmony default export */ __webpack_exports__["default"] = ({
  nw: nw,
  win: nw.Window.get(),
  inputEl: inputEl,
  outputEl: outputEl
});

/***/ })

/******/ });
//# sourceMappingURL=app.d69e4692.js.map