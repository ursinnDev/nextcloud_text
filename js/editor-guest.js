"use strict";
(self["webpackChunktext"] = self["webpackChunktext"] || []).push([["editor-guest"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Avatar */ "./node_modules/@nextcloud/vue/dist/Components/Avatar.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
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
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GuestNameDialog',
  components: {
    Avatar: (_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_1___default())
  },
  directives: {
    tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    syncService: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      guestName: '',
      guestNameBuffered: ''
    };
  },
  computed: {
    avatarUrl: function avatarUrl() {
      var size = 32;
      var avatarUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateUrl)('/avatar/guest/{user}/{size}', {
        user: this.guestNameBuffered,
        size: size
      });
      return window.location.protocol + '//' + window.location.host + avatarUrl;
    }
  },
  beforeMount: function beforeMount() {
    this.guestName = this.syncService.session.guestName;
    this.updateBufferedGuestName();
  },
  methods: {
    setGuestName: function setGuestName() {
      var _this = this;

      var previousGuestName = this.syncService.session.guestName;
      this.syncService.updateSession(this.guestName).then(function () {
        localStorage.setItem('nick', _this.guestName);

        _this.updateBufferedGuestName();
      }).catch(function (e) {
        _this.guestName = previousGuestName;
      });
    },
    updateBufferedGuestName: function updateBufferedGuestName() {
      this.guestNameBuffered = this.guestName;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "form.guest-name-dialog[data-v-7371afaa] {\n  display: flex;\n  padding: 6px;\n}\nform.guest-name-dialog[data-v-7371afaa] img {\n  margin: 0 !important;\n}\nform.guest-name-dialog input[type=text][data-v-7371afaa] {\n  flex-grow: 1;\n}\nform.guest-name-dialog label[data-v-7371afaa] {\n  padding: 3px;\n  height: 32px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_style_index_0_id_7371afaa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_style_index_0_id_7371afaa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_style_index_0_id_7371afaa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_style_index_0_id_7371afaa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_style_index_0_id_7371afaa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/GuestNameDialog.vue":
/*!********************************************!*\
  !*** ./src/components/GuestNameDialog.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GuestNameDialog_vue_vue_type_template_id_7371afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuestNameDialog.vue?vue&type=template&id=7371afaa&scoped=true& */ "./src/components/GuestNameDialog.vue?vue&type=template&id=7371afaa&scoped=true&");
/* harmony import */ var _GuestNameDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuestNameDialog.vue?vue&type=script&lang=js& */ "./src/components/GuestNameDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _GuestNameDialog_vue_vue_type_style_index_0_id_7371afaa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss& */ "./src/components/GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GuestNameDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuestNameDialog_vue_vue_type_template_id_7371afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GuestNameDialog_vue_vue_type_template_id_7371afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7371afaa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/GuestNameDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/GuestNameDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/components/GuestNameDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestNameDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./src/components/GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_style_index_0_id_7371afaa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=style&index=0&id=7371afaa&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/components/GuestNameDialog.vue?vue&type=template&id=7371afaa&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/components/GuestNameDialog.vue?vue&type=template&id=7371afaa&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_template_id_7371afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_template_id_7371afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestNameDialog_vue_vue_type_template_id_7371afaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestNameDialog.vue?vue&type=template&id=7371afaa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=template&id=7371afaa&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=template&id=7371afaa&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/GuestNameDialog.vue?vue&type=template&id=7371afaa&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "form",
    {
      directives: [
        {
          name: "tooltip",
          rawName: "v-tooltip",
          value: _vm.t(
            "text",
            "Enter your name so other users can see who is editing"
          ),
          expression:
            "t('text', 'Enter your name so other users can see who is editing')"
        }
      ],
      staticClass: "guest-name-dialog",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.setGuestName()
        }
      }
    },
    [
      _c(
        "label",
        [
          _c("Avatar", {
            attrs: { url: _vm.avatarUrl, "disable-tooltip": true, size: 32 }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.guestName,
            expression: "guestName"
          }
        ],
        attrs: { type: "text", "aria-label": _vm.t("text", "Edit guest name") },
        domProps: { value: _vm.guestName },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.guestName = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        staticClass: "icon-confirm",
        attrs: {
          type: "submit",
          "aria-label": _vm.t("text", "Save guest name"),
          value: ""
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=editor-guest.js.map?v=16b16fab44fb4436a9dd