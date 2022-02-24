"use strict";
(self["webpackChunktext"] = self["webpackChunktext"] || []).push([["files-modal"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/PublicFilesEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/PublicFilesEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Modal */ "./node_modules/@nextcloud/vue/dist/Components/Modal.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PublicFilesEditor',
  components: {
    Modal: (_nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_0___default()),
    EditorWrapper: function EditorWrapper() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendors"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(__webpack_require__, /*! ./EditorWrapper */ "./src/components/EditorWrapper.vue"));
    }
  },
  props: {
    fileId: {
      type: Number,
      default: null
    },
    relativePath: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    shareToken: {
      type: String,
      default: null
    },
    mimeType: {
      type: String,
      default: null
    }
  },
  computed: {
    fileName: function fileName() {
      return this.relativePath.substring(this.relativePath.lastIndexOf('/') + 1);
    }
  },
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./src/components/PublicFilesEditor.vue":
/*!**********************************************!*\
  !*** ./src/components/PublicFilesEditor.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PublicFilesEditor_vue_vue_type_template_id_aa66b1ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicFilesEditor.vue?vue&type=template&id=aa66b1ca& */ "./src/components/PublicFilesEditor.vue?vue&type=template&id=aa66b1ca&");
/* harmony import */ var _PublicFilesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicFilesEditor.vue?vue&type=script&lang=js& */ "./src/components/PublicFilesEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PublicFilesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublicFilesEditor_vue_vue_type_template_id_aa66b1ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _PublicFilesEditor_vue_vue_type_template_id_aa66b1ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/PublicFilesEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/PublicFilesEditor.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/PublicFilesEditor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicFilesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicFilesEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/PublicFilesEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicFilesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/PublicFilesEditor.vue?vue&type=template&id=aa66b1ca&":
/*!*****************************************************************************!*\
  !*** ./src/components/PublicFilesEditor.vue?vue&type=template&id=aa66b1ca& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicFilesEditor_vue_vue_type_template_id_aa66b1ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicFilesEditor_vue_vue_type_template_id_aa66b1ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicFilesEditor_vue_vue_type_template_id_aa66b1ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicFilesEditor.vue?vue&type=template&id=aa66b1ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/PublicFilesEditor.vue?vue&type=template&id=aa66b1ca&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/PublicFilesEditor.vue?vue&type=template&id=aa66b1ca&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/PublicFilesEditor.vue?vue&type=template&id=aa66b1ca& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.active
    ? _c(
        "Modal",
        { attrs: { title: _vm.fileName }, on: { close: _vm.close } },
        [
          _c("EditorWrapper", {
            attrs: {
              "file-id": _vm.fileId,
              "relative-path": _vm.relativePath,
              active: _vm.active,
              "share-token": _vm.shareToken,
              mime: _vm.mimeType
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=files-modal.js.map?v=b1905584a6eb855aa083