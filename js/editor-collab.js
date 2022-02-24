"use strict";
(self["webpackChunktext"] = self["webpackChunktext"] || []).push([["editor-collab"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Modal */ "./node_modules/@nextcloud/vue/dist/Components/Modal.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_isMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mixins/isMobile */ "./src/mixins/isMobile.js");
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
  name: 'HelpModal',
  components: {
    Modal: (_nextcloud_vue_dist_Components_Modal__WEBPACK_IMPORTED_MODULE_0___default())
  },
  directives: {
    Tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_1___default())
  },
  mixins: [_mixins_isMobile__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      formatted: {
        bold: true,
        italic: true,
        strikethrough: true,
        heading1: true,
        heading6: true,
        unorderdList: true,
        orderedList: true,
        checkList: true,
        blockQuote: true,
        codeBlock: true
      }
    };
  },
  computed: {
    isFormatted: function isFormatted() {
      var _this = this;

      return function (style) {
        return _this.formatted[style];
      };
    }
  },
  methods: {
    toggleFormatted: function toggleFormatted(style) {
      this.formatted[style] = !this.formatted[style];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Avatar */ "./node_modules/@nextcloud/vue/dist/Components/Avatar.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue_dist_Components_Popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Popover */ "./node_modules/@nextcloud/vue/dist/Components/Popover.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mixins_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/store */ "./src/mixins/store.js");
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
//
//
//
//
//
//
//
//
//




var COLLABORATOR_IDLE_TIME = 60;
var COLLABORATOR_DISCONNECT_TIME = 90;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SessionList',
  components: {
    Avatar: (_nextcloud_vue_dist_Components_Avatar__WEBPACK_IMPORTED_MODULE_0___default()),
    Popover: (_nextcloud_vue_dist_Components_Popover__WEBPACK_IMPORTED_MODULE_1___default())
  },
  directives: {
    tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_2___default())
  },
  mixins: [_mixins_store__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    sessions: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      myName: ''
    };
  },
  computed: {
    showAuthorAnnotations: {
      get: function get() {
        return this.$store.state.showAuthorAnnotations;
      },
      set: function set(value) {
        this.$store.dispatch('setShowAuthorAnnotations', value);
      }
    },
    editorsTooltip: function editorsTooltip() {
      var tooltipPrefix = t('text', 'Currently active users:') + ' ';

      if (this.sessionPopoverList.length > 0) {
        var first = this.activeSessions.slice(0, 3).map(function (session) {
          return session.guestName ? session.guestName : session.displayName;
        }).join(', ');
        var others = this.activeSessions.slice(3).length;
        return tooltipPrefix + first + ' ' + n('text', 'and %n other editor', 'and %n other editors', others);
      }

      return tooltipPrefix + this.activeSessions.slice(0, 3).map(function (session) {
        return session.guestName ? session.guestName : session.displayName;
      }).join(', ');
    },
    activeSessions: function activeSessions() {
      return Object.values(this.sessions).filter(function (session) {
        return session.lastContact > Date.now() / 1000 - COLLABORATOR_DISCONNECT_TIME && !session.isCurrent && (session.userId !== null || session.guestName !== null);
      }).sort(function (a, b) {
        return a.lastContact < b.lastContact;
      });
    },
    currentSession: function currentSession() {
      return Object.values(this.sessions).find(function (session) {
        return session.isCurrent;
      });
    },
    sessionStyle: function sessionStyle() {
      return function (session) {
        return {
          'border-color': session.color,
          'background-color': session.color + ' !important'
        };
      };
    },
    avatarStyle: function avatarStyle() {
      return function (session) {
        return {
          opacity: session.lastContact > Date.now() / 1000 - COLLABORATOR_IDLE_TIME ? 1 : 0.5
        };
      };
    },
    sessionsVisible: function sessionsVisible() {
      return this.activeSessions.slice(0, 3);
    },
    sessionPopoverList: function sessionPopoverList() {
      return this.activeSessions.slice(3);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/checkbox-mark.svg */ "./img/checkbox-mark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[data-v-6befbdec] .modal-wrapper .prev,[data-v-6befbdec] .modal-wrapper .next {\n  display: none !important;\n}\n[data-v-6befbdec] .modal-wrapper .modal-container {\n  overflow: auto;\n  padding: 30px 40px 20px;\n  user-select: text;\n}\n@media only screen and (max-width: 512px) {\n[data-v-6befbdec] .modal-wrapper .modal-container {\n    position: absolute;\n    top: var(--header-height);\n    height: calc(100% - var(--header-height));\n}\n}\ntable[data-v-6befbdec] {\n  margin-top: 24px;\n  border-collapse: collapse;\n}\ntable tbody tr[data-v-6befbdec]:hover, table tbody tr[data-v-6befbdec]:focus, table tbody tr[data-v-6befbdec]:active {\n  background-color: transparent !important;\n}\ntable thead tr[data-v-6befbdec] {\n  border: none;\n}\ntable th[data-v-6befbdec] {\n  font-weight: bold;\n  padding: 0.75rem 1rem 0.75rem 0;\n  border-bottom: 2px solid var(--color-background-darker);\n}\ntable td[data-v-6befbdec] {\n  padding: 0.75rem 1rem 0.75rem 0;\n  border-top: 1px solid var(--color-background-dark);\n  border-bottom: unset;\n}\ntable td.noborder[data-v-6befbdec] {\n  border-top: unset;\n}\ntable td.ellipsis_top[data-v-6befbdec] {\n  padding-bottom: 0;\n}\ntable td.ellipsis[data-v-6befbdec] {\n  padding-top: 0;\n  padding-bottom: 0;\n}\ntable td.ellipsis_bottom[data-v-6befbdec] {\n  padding-top: 0;\n}\ntable kbd[data-v-6befbdec] {\n  font-size: smaller;\n}\ntable code[data-v-6befbdec] {\n  padding: 0.2em 0.4em;\n  font-size: 90%;\n  background-color: var(--color-background-dark);\n  border-radius: 6px;\n}\n\n/* Document rendering styles */\ndiv.ProseMirror[data-v-6befbdec] {\n  margin-top: 44px;\n  height: 100%;\n  position: relative;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  padding: 4px 8px 200px 14px;\n  line-height: 150%;\n  font-size: 14px;\n  outline: none;\n}\ndiv.ProseMirror[contenteditable=true][data-v-6befbdec], div.ProseMirror[contenteditable=false][data-v-6befbdec],\ndiv.ProseMirror [contenteditable=true][data-v-6befbdec],\ndiv.ProseMirror [contenteditable=false][data-v-6befbdec] {\n  border: none !important;\n  width: 100%;\n  background-color: transparent;\n  color: var(--color-main-text);\n  opacity: 1;\n  -webkit-user-select: text;\n  user-select: text;\n  font-size: 14px;\n}\ndiv.ProseMirror .checkbox-item[data-v-6befbdec] {\n  display: flex;\n  align-items: start;\n  margin-left: -23px;\n}\ndiv.ProseMirror .checkbox-item input[type=checkbox][data-v-6befbdec] {\n  display: none;\n}\ndiv.ProseMirror .checkbox-item[data-v-6befbdec]:before {\n  content: \"\";\n  vertical-align: middle;\n  margin: 3px 6px 3px 2px;\n  border: 1px solid var(--color-text-maxcontrast);\n  position: relative;\n  display: block;\n  border-radius: var(--border-radius);\n  height: 14px;\n  width: 14px;\n  box-shadow: none !important;\n  background-position: center;\n  cursor: pointer;\n}\ndiv.ProseMirror .checkbox-item.checked[data-v-6befbdec]:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: var(--color-primary-element);\n  border-color: var(--color-primary-element);\n}\ndiv.ProseMirror .checkbox-item label[data-v-6befbdec] {\n  display: block;\n  flex-grow: 1;\n  max-width: calc(100% - 28px);\n}\ndiv.ProseMirror > *[data-v-6befbdec]:first-child {\n  margin-top: 10px;\n}\ndiv.ProseMirror a[data-v-6befbdec] {\n  color: var(--color-primary-element);\n  text-decoration: underline;\n  padding: 0.5em 0;\n}\ndiv.ProseMirror p[data-v-6befbdec] {\n  margin-bottom: 1em;\n  line-height: 150%;\n}\ndiv.ProseMirror em[data-v-6befbdec] {\n  font-style: italic;\n}\ndiv.ProseMirror h1[data-v-6befbdec],\ndiv.ProseMirror h2[data-v-6befbdec],\ndiv.ProseMirror h3[data-v-6befbdec],\ndiv.ProseMirror h4[data-v-6befbdec],\ndiv.ProseMirror h5[data-v-6befbdec],\ndiv.ProseMirror h6[data-v-6befbdec] {\n  font-weight: 600;\n  line-height: 120%;\n  margin-top: 24px;\n  margin-bottom: 12px;\n  color: var(--color-main-text);\n}\ndiv.ProseMirror h1[data-v-6befbdec] {\n  font-size: 36px;\n  margin-top: 48px;\n}\ndiv.ProseMirror h2[data-v-6befbdec] {\n  font-size: 30px;\n  margin-top: 48px;\n}\ndiv.ProseMirror h3[data-v-6befbdec] {\n  font-size: 24px;\n}\ndiv.ProseMirror h4[data-v-6befbdec] {\n  font-size: 21px;\n}\ndiv.ProseMirror h5[data-v-6befbdec] {\n  font-size: 17px;\n}\ndiv.ProseMirror h6[data-v-6befbdec] {\n  font-size: 14px;\n}\ndiv.ProseMirror img[data-v-6befbdec] {\n  cursor: default;\n  max-width: 100%;\n}\ndiv.ProseMirror hr[data-v-6befbdec] {\n  padding: 2px 0;\n  border: none;\n  margin: 3em 0;\n  width: 100%;\n}\ndiv.ProseMirror hr[data-v-6befbdec]:after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  background-color: var(--color-border-dark);\n  line-height: 2px;\n}\ndiv.ProseMirror pre[data-v-6befbdec] {\n  white-space: pre-wrap;\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 1em 1.3em;\n  margin-bottom: 1em;\n}\ndiv.ProseMirror p code[data-v-6befbdec] {\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 0.1em 0.3em;\n}\ndiv.ProseMirror li[data-v-6befbdec] {\n  position: relative;\n  padding-left: 3px;\n}\ndiv.ProseMirror li p[data-v-6befbdec] {\n  margin-bottom: 0.5em;\n}\ndiv.ProseMirror ul[data-v-6befbdec], div.ProseMirror ol[data-v-6befbdec] {\n  padding-left: 10px;\n  margin-left: 10px;\n  margin-bottom: 1em;\n}\ndiv.ProseMirror ul > li[data-v-6befbdec] {\n  list-style-type: disc;\n}\ndiv.ProseMirror li ul > li[data-v-6befbdec] {\n  list-style-type: circle;\n}\ndiv.ProseMirror li li ul > li[data-v-6befbdec] {\n  list-style-type: square;\n}\ndiv.ProseMirror blockquote[data-v-6befbdec] {\n  padding-left: 1em;\n  border-left: 4px solid var(--color-primary-element);\n  color: var(--color-text-maxcontrast);\n  margin-left: 0;\n  margin-right: 0;\n}\n.ProseMirror-focused .ProseMirror-gapcursor[data-v-6befbdec] {\n  display: block;\n}\n.editor__content p.is-empty[data-v-6befbdec]:first-child::before {\n  content: attr(data-placeholder);\n  float: left;\n  color: var(--color-text-maxcontrast);\n  pointer-events: none;\n  height: 0;\n}\n.editor__content[data-v-6befbdec] {\n  tab-size: 4;\n}\ndiv.ProseMirror[data-v-6befbdec] {\n  display: inline;\n  margin-top: unset;\n  position: unset;\n  padding: unset;\n  line-height: unset;\n}\ndiv.ProseMirror h1[data-v-6befbdec], div.ProseMirror h6[data-v-6befbdec] {\n  display: inline;\n  padding: 0;\n  margin: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".avatardiv[data-v-0d166054] {\n  width: 44px !important;\n  height: 44px !important;\n  line-height: 44px;\n}\n.avatar-list[data-v-0d166054] {\n  border: none;\n  background-color: var(--color-main-background);\n  padding: 0;\n  margin: 0;\n  padding-left: 6px;\n  display: inline-flex;\n  flex-direction: row-reverse;\n}\n.avatar-list[data-v-0d166054]:focus {\n  background-color: #eee;\n}\n.avatar-list .avatar-wrapper[data-v-0d166054] {\n  margin: 0 -8px 0 0;\n  margin-left: 0;\n}\n.avatar-list .icon-more[data-v-0d166054], .avatar-list .icon-group[data-v-0d166054], .avatar-list .icon-settings-dark[data-v-0d166054] {\n  background-color: var(--color-background-dark);\n  width: 44px;\n  height: 44px;\n  margin: 0 6px 0 0;\n}\n.avatar-wrapper[data-v-0d166054] {\n  width: 44px;\n  height: 44px;\n  z-index: 1;\n  border-radius: 50%;\n  overflow: hidden;\n  box-sizing: content-box !important;\n}\n.session-menu[data-v-0d166054] {\n  max-width: 280px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.session-menu ul li[data-v-0d166054] {\n  align-items: center;\n  display: flex;\n  padding: 6px;\n}\n.session-menu ul li .avatar-wrapper[data-v-0d166054] {\n  margin-right: 6px;\n}\nlabel[data-v-0d166054] {\n  display: block;\n  margin: 8px;\n}\n.hint[data-v-0d166054] {\n  margin: 8px;\n  color: var(--color-text-maxcontrast);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_style_index_0_id_6befbdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_style_index_0_id_6befbdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_style_index_0_id_6befbdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_style_index_0_id_6befbdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_style_index_0_id_6befbdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/HelpModal.vue":
/*!**************************************!*\
  !*** ./src/components/HelpModal.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HelpModal_vue_vue_type_template_id_6befbdec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelpModal.vue?vue&type=template&id=6befbdec&scoped=true& */ "./src/components/HelpModal.vue?vue&type=template&id=6befbdec&scoped=true&");
/* harmony import */ var _HelpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelpModal.vue?vue&type=script&lang=js& */ "./src/components/HelpModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _HelpModal_vue_vue_type_style_index_0_id_6befbdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true& */ "./src/components/HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HelpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HelpModal_vue_vue_type_template_id_6befbdec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _HelpModal_vue_vue_type_template_id_6befbdec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6befbdec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/HelpModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/SessionList.vue":
/*!****************************************!*\
  !*** ./src/components/SessionList.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SessionList.vue?vue&type=template&id=0d166054&scoped=true& */ "./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true&");
/* harmony import */ var _SessionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionList.vue?vue&type=script&lang=js& */ "./src/components/SessionList.vue?vue&type=script&lang=js&");
/* harmony import */ var _SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& */ "./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SessionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0d166054",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SessionList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/HelpModal.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/HelpModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelpModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/SessionList.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/SessionList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SessionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/components/HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_style_index_0_id_6befbdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=style&index=0&id=6befbdec&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_style_index_0_id_0d166054_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=style&index=0&id=0d166054&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/components/HelpModal.vue?vue&type=template&id=6befbdec&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/components/HelpModal.vue?vue&type=template&id=6befbdec&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_template_id_6befbdec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_template_id_6befbdec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_template_id_6befbdec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelpModal.vue?vue&type=template&id=6befbdec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=template&id=6befbdec&scoped=true&");


/***/ }),

/***/ "./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionList_vue_vue_type_template_id_0d166054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SessionList.vue?vue&type=template&id=0d166054&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=template&id=6befbdec&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelpModal.vue?vue&type=template&id=6befbdec&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "Modal",
    {
      attrs: { size: "large", title: _vm.t("text", "Formatting help") },
      on: {
        close: function($event) {
          return _vm.$emit("close")
        }
      }
    },
    [
      _c("h2", [_vm._v(_vm._s(_vm.t("text", "Formatting help")))]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          _vm._s(_vm.t("text", "Speed up your writing with simple shortcuts."))
        )
      ]),
      _vm._v(" "),
      !_vm.isMobile
        ? _c("p", [
            _vm._v(
              "\n\t\t" +
                _vm._s(
                  _vm.t(
                    "text",
                    "Just type the Markdown syntax or use keyboard shortcuts from below."
                  )
                ) +
                "\n\t"
            )
          ])
        : _c("p", [
            _vm._v(
              "\n\t\t" +
                _vm._s(
                  _vm.t("text", "Just type the Markdown syntax from below.")
                ) +
                "\n\t"
            )
          ]),
      _vm._v(" "),
      _c("table", [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v(_vm._s(_vm.t("text", "Style")))]),
            _vm._v(" "),
            _c("th", [_vm._v(_vm._s(_vm.t("text", "Syntax")))]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("th", [
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.t("text", "Keyboard shortcuts")) +
                      "\n\t\t\t\t"
                  )
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.t("text", "Bold")))]),
            _vm._v(" "),
            _c("td", [
              _c("code", [
                _vm._v("**" + _vm._s(_vm.t("text", "Bold text")) + "**")
              ])
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", [
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Ctrl")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v("B")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.t("text", "Italic")))]),
            _vm._v(" "),
            _c("td", [
              _c("code", [
                _vm._v("*" + _vm._s(_vm.t("text", "Italicized text")) + "*")
              ])
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", [
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Ctrl")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v("I")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.t("text", "Strikethrough")))]),
            _vm._v(" "),
            _c("td", [
              _c("code", [
                _vm._v("~~" + _vm._s(_vm.t("text", "Mistaken text")) + "~~")
              ])
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", [
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Ctrl")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Shift")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v("X")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.t("text", "Underline")))]),
            _vm._v(" "),
            _c("td", [
              _c("code", [
                _vm._v("__" + _vm._s(_vm.t("text", "Underlined text")) + "__")
              ])
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", [
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Ctrl")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v("U")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "ellipsis_top" }, [
              _vm._v(
                "\n\t\t\t\t\t" +
                  _vm._s(_vm.t("text", "Heading 1")) +
                  "\n\t\t\t\t"
              )
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "ellipsis_top" }, [
              _c("code", [
                _vm._v("# " + _vm._s(_vm.t("text", "Heading level 1")))
              ])
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", { staticClass: "ellipsis_top" }, [
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Ctrl")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Shift")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v("1")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "noborder ellipsis" }, [
              _vm._v("\n\t\t\t\t\t…\n\t\t\t\t")
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "noborder ellipsis" }, [
              _vm._v("\n\t\t\t\t\t…\n\t\t\t\t")
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", { staticClass: "ellipsis noborder" }, [
                  _vm._v("\n\t\t\t\t\t…\n\t\t\t\t")
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "noborder ellipsis_bottom" }, [
              _vm._v(
                "\n\t\t\t\t\t" +
                  _vm._s(_vm.t("text", "Heading 6")) +
                  "\n\t\t\t\t"
              )
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "noborder ellipsis_bottom" }, [
              _c("code", [
                _vm._v("###### " + _vm._s(_vm.t("text", "Heading level 6")))
              ])
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", { staticClass: "noborder ellipsis_bottom" }, [
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Ctrl")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Shift")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v("6")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.t("text", "Unordered list")))]),
            _vm._v(" "),
            _c("td", [
              _c("code", [_vm._v("* " + _vm._s(_vm.t("text", "An item")))])
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", [
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Ctrl")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Shift")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v("8")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.t("text", "Ordered list")))]),
            _vm._v(" "),
            _c("td", [
              _c("code", [_vm._v("1. " + _vm._s(_vm.t("text", "First item")))])
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", [
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Ctrl")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Shift")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v("7")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.t("text", "Checklist")))]),
            _vm._v(" "),
            _c("td", [
              _c("code", [_vm._v("* [] " + _vm._s(_vm.t("text", "Todo item")))])
            ]),
            _vm._v(" "),
            !_vm.isMobile ? _c("td") : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.t("text", "Blockquote")))]),
            _vm._v(" "),
            _c("td", [
              _c("code", [_vm._v("> " + _vm._s(_vm.t("text", "Quoted text")))])
            ]),
            _vm._v(" "),
            !_vm.isMobile
              ? _c("td", [
                  _c("kbd", [_vm._v(_vm._s(_vm.t("text", "Ctrl")))]),
                  _vm._v("\n\t\t\t\t\t+\n\t\t\t\t\t"),
                  _c("kbd", [_vm._v(">")])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.t("text", "Code block")))]),
            _vm._v(" "),
            _c("td", [
              _c("code", [_vm._v("``` " + _vm._s(_vm.t("text", "Some code")))])
            ]),
            _vm._v(" "),
            !_vm.isMobile ? _c("td") : _vm._e()
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SessionList.vue?vue&type=template&id=0d166054&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "Popover",
    {
      staticClass: "session-list",
      attrs: { placement: "top" },
      scopedSlots: _vm._u(
        [
          {
            key: "default",
            fn: function() {
              return [
                _c("div", { staticClass: "session-menu" }, [
                  _c(
                    "ul",
                    [
                      _vm._t("default"),
                      _vm._v(" "),
                      _vm._l(_vm.sessionPopoverList, function(session) {
                        return _c(
                          "li",
                          { key: session.id, style: _vm.avatarStyle(session) },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "avatar-wrapper",
                                style: _vm.sessionStyle(session)
                              },
                              [
                                _c("Avatar", {
                                  attrs: {
                                    user: session.userId
                                      ? session.userId
                                      : session.guestName,
                                    "is-guest": session.userId === null,
                                    "disable-menu": true,
                                    "show-user-status": false,
                                    "disable-tooltip": true,
                                    size: 44
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(
                              "\n\t\t\t\t\t" +
                                _vm._s(
                                  session.guestName
                                    ? session.guestName
                                    : session.displayName
                                ) +
                                "\n\t\t\t\t"
                            )
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.showAuthorAnnotations,
                        expression: "showAuthorAnnotations"
                      }
                    ],
                    staticClass: "checkbox",
                    attrs: { id: "toggle-color-annotations", type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.showAuthorAnnotations)
                        ? _vm._i(_vm.showAuthorAnnotations, null) > -1
                        : _vm.showAuthorAnnotations
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.showAuthorAnnotations,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.showAuthorAnnotations = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.showAuthorAnnotations = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.showAuthorAnnotations = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "toggle-color-annotations" } }, [
                    _vm._v(_vm._s(_vm.t("text", "Show author colors")))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "hint" }, [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(
                          _vm.t(
                            "text",
                            "Author colors are only shown until everyone has closed the document."
                          )
                        ) +
                        "\n\t\t\t"
                    )
                  ])
                ])
              ]
            },
            proxy: true
          }
        ],
        null,
        true
      )
    },
    [
      _c(
        "button",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip.bottom",
              value: _vm.editorsTooltip,
              expression: "editorsTooltip",
              modifiers: { bottom: true }
            }
          ],
          staticClass: "avatar-list",
          attrs: { slot: "trigger" },
          slot: "trigger"
        },
        [
          _c("div", { staticClass: "avatardiv icon-group" }),
          _vm._v(" "),
          _vm._l(_vm.sessionsVisible, function(session) {
            return _c(
              "div",
              {
                key: session.id,
                staticClass: "avatar-wrapper",
                style: _vm.sessionStyle(session)
              },
              [
                _c("Avatar", {
                  style: _vm.avatarStyle(session),
                  attrs: {
                    user: session.userId ? session.userId : session.guestName,
                    "is-guest": session.userId === null,
                    "disable-menu": true,
                    "show-user-status": false,
                    "disable-tooltip": true,
                    size: 44
                  }
                })
              ],
              1
            )
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=editor-collab.js.map?v=3d938ab19407bbe2a823