"use strict";
(self["webpackChunktext"] = self["webpackChunktext"] || []).push([["editor-rich"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_menubar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins/menubar */ "./src/mixins/menubar.js");
/* harmony import */ var _mixins_isMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mixins/isMobile */ "./src/mixins/isMobile.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/Actions */ "./node_modules/@nextcloud/vue/dist/Components/Actions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionButton */ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/ActionInput */ "./node_modules/@nextcloud/vue/dist/Components/ActionInput.js");
/* harmony import */ var _nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/PopoverMenu */ "./node_modules/@nextcloud/vue/dist/Components/PopoverMenu.js");
/* harmony import */ var _nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_vue_dist_Components_EmojiPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/EmojiPicker */ "./node_modules/@nextcloud/vue/dist/Components/EmojiPicker.js");
/* harmony import */ var _nextcloud_vue_dist_Components_EmojiPicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_EmojiPicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.es.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











var imageMimes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/x-xbitmap', 'image/x-ms-bmp', 'image/bmp', 'image/svg+xml', 'image/webp'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MenuBar',
  components: {
    ActionButton: (_nextcloud_vue_dist_Components_ActionButton__WEBPACK_IMPORTED_MODULE_4___default()),
    ActionInput: (_nextcloud_vue_dist_Components_ActionInput__WEBPACK_IMPORTED_MODULE_5___default()),
    PopoverMenu: (_nextcloud_vue_dist_Components_PopoverMenu__WEBPACK_IMPORTED_MODULE_6___default()),
    Actions: (_nextcloud_vue_dist_Components_Actions__WEBPACK_IMPORTED_MODULE_3___default()),
    EmojiPicker: (_nextcloud_vue_dist_Components_EmojiPicker__WEBPACK_IMPORTED_MODULE_7___default())
  },
  directives: {
    Tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0___default()),
    ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_8___default())
  },
  mixins: [_mixins_isMobile__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    editor: {
      type: Object,
      required: true
    },
    syncService: {
      type: Object,
      required: false,
      default: null
    },
    isRichEditor: {
      type: Boolean,
      default: true
    },
    autohide: {
      type: Boolean,
      default: false
    },
    isPublic: {
      type: Boolean,
      default: false
    },
    filePath: {
      type: String,
      required: false,
      default: ''
    },
    fileId: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data: function data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      forceRecompute: 0,
      submenuVisibility: {},
      lastImagePath: null,
      showImageLinkPrompt: false,
      uploadingImage: false,
      imageLink: '',
      icons: _toConsumableArray(_mixins_menubar__WEBPACK_IMPORTED_MODULE_1__["default"])
    };
  },
  computed: {
    isHiddenInMenu: function isHiddenInMenu() {
      var _this = this;

      return function ($index) {
        return $index - _this.iconCount >= 0;
      };
    },
    getIconClasses: function getIconClasses() {
      var _this2 = this;

      return function (icon) {
        var classes = {};
        classes[icon.class] = true;
        classes['is-active'] = _this2.isActive(icon);
        return classes;
      };
    },
    isActive: function isActive() {
      var _this3 = this;

      return function (_ref) {
        var _this3$editor;

        var isActive = _ref.isActive;

        if (!isActive) {
          return false;
        }

        var args = Array.isArray(isActive) ? isActive : [isActive];
        return (_this3$editor = _this3.editor).isActive.apply(_this3$editor, _toConsumableArray(args));
      };
    },
    isVisible: function isVisible() {
      return this.editor.isFocused || Object.values(this.submenuVisibility).find(function (v) {
        return v;
      });
    },
    disabled: function disabled() {
      var _this4 = this;

      return function (menuItem) {
        return menuItem.action && !menuItem.action(_this4.editor.can());
      };
    },
    isChildMenuVisible: function isChildMenuVisible() {
      var _this5 = this;

      return function (icon) {
        return Object.prototype.hasOwnProperty.call(_this5.submenuVisibility, icon.label) ? _this5.submenuVisibility[icon.label] : false;
      };
    },
    allIcons: function allIcons() {
      var _this6 = this;

      return [].concat(_toConsumableArray(this.icons), [{
        label: t('text', 'Insert image'),
        class: 'icon-image'
      }, {
        label: t('text', 'Formatting help'),
        class: 'icon-info',
        click: function click() {
          _this6.$emit('show-help');
        }
      }]);
    },
    childPopoverMenu: function childPopoverMenu() {
      var _this7 = this;

      return function (icons, parent) {
        return icons.map(function (icon) {
          return {
            // text: this.getLabelAndKeys(icons[index]),
            text: icon.label,
            icon: icon.class,
            active: _this7.isActive(icon),
            action: function action() {
              _this7.clickIcon(icon);

              _this7.hideChildMenu(parent);
            }
          };
        });
      };
    },
    childIconClasses: function childIconClasses() {
      var _this8 = this;

      return function (icons) {
        var icon = _this8.childIcon(icons);

        return _this8.getIconClasses(icon);
      };
    },
    childIcon: function childIcon() {
      var _this9 = this;

      return function (icons) {
        return icons.find(function (icon) {
          return _this9.isActive(icon);
        }) || icons[0];
      };
    },
    iconCount: function iconCount() {
      this.forceRecompute; // eslint-disable-line

      this.windowWidth; // eslint-disable-line

      var menuBarWidth = this.$refs.menubar && this.$refs.menubar.clientWidth > 200 ? this.$refs.menubar.clientWidth : 200;
      var iconCount = Math.max(Math.floor(menuBarWidth / 44) - 2, 0);
      return iconCount - 1;
    },
    imagePath: function imagePath() {
      return this.lastImagePath || this.filePath.split('/').slice(0, -1).join('/');
    }
  },
  mounted: function mounted() {
    var _this10 = this;

    window.addEventListener('resize', this.getWindowWidth);
    this.checkInterval = setInterval(function () {
      var isWidthAvailable = _this10.$refs.menubar && _this10.$refs.menubar.clientWidth > 0;

      if (_this10.isRichEditor && isWidthAvailable) {
        _this10.redrawMenuBar();
      }

      if (!_this10.isRichEditor || isWidthAvailable) {
        clearInterval(_this10.checkInterval);
      }
    }, 100);
    this.$emit('update:loaded', true);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },
  methods: {
    redrawMenuBar: function redrawMenuBar() {
      var _this11 = this;

      this.$nextTick(function () {
        _this11.getWindowWidth();

        _this11.forceRecompute++;
      });
    },
    refocus: function refocus() {
      this.editor.chain().focus().run();
    },
    clickIcon: function clickIcon(icon) {
      if (icon.click) {
        return icon.click();
      } // Some actions run themselves.
      // others still need to have .run() called upon them.


      var action = icon.action(this.editor.chain().focus());
      action && action.run();
    },
    getWindowWidth: function getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight: function getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    hideChildMenu: function hideChildMenu(_ref2) {
      var label = _ref2.label;
      this.$set(this.submenuVisibility, label, false);
    },
    toggleChildMenu: function toggleChildMenu(_ref3) {
      var label = _ref3.label;
      var lastValue = Object.prototype.hasOwnProperty.call(this.submenuVisibility, label) ? this.submenuVisibility[label] : false;
      this.$set(this.submenuVisibility, label, !lastValue);

      if (lastValue) {
        this.refocus();
      }
    },
    onImageActionClose: function onImageActionClose() {
      this.showImageLinkPrompt = false;
    },
    onUploadImage: function onUploadImage() {
      this.$refs.imageFileInput.click();
    },
    onImageUploadFilePicked: function onImageUploadFilePicked(event) {
      var _this12 = this;

      this.uploadingImage = true;
      var files = event.target.files;
      var image = files[0];

      if (!imageMimes.includes(image.type)) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_10__.showError)(t('text', 'Image format not supported'));
        this.uploadingImage = false;
        return;
      } // Clear input to ensure that the change event will be emitted if
      // the same file is picked again.


      event.target.value = '';
      this.syncService.uploadImage(image).then(function (response) {
        var _response$data, _response$data2;

        _this12.insertAttachmentImage((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.name, (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.id);
      }).catch(function (error) {
        var _error$response, _error$response$data;

        console.error(error);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_10__.showError)(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error);
      }).then(function () {
        _this12.uploadingImage = false;
      });
    },
    onImageLinkUpdateValue: function onImageLinkUpdateValue(newImageLink) {
      // this avoids the input being reset on each file polling
      this.imageLink = newImageLink;
    },
    onImageLinkSubmit: function onImageLinkSubmit() {
      var _this13 = this;

      if (!this.imageLink) {
        return;
      }

      this.uploadingImage = true;
      this.showImageLinkPrompt = false;
      this.$refs.imageActions[0].closeMenu();
      this.syncService.insertImageLink(this.imageLink).then(function (response) {
        var _response$data3, _response$data4;

        _this13.insertAttachmentImage((_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.name, (_response$data4 = response.data) === null || _response$data4 === void 0 ? void 0 : _response$data4.id);
      }).catch(function (error) {
        var _error$response2, _error$response2$data;

        console.error(error);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_10__.showError)(error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.error);
      }).then(function () {
        _this13.uploadingImage = false;
        _this13.imageLink = '';
      });
    },
    onImagePathSubmit: function onImagePathSubmit(imagePath) {
      var _this14 = this;

      this.uploadingImage = true;
      this.$refs.imageActions[0].closeMenu();
      this.syncService.insertImageFile(imagePath).then(function (response) {
        var _response$data5, _response$data6;

        _this14.insertAttachmentImage((_response$data5 = response.data) === null || _response$data5 === void 0 ? void 0 : _response$data5.name, (_response$data6 = response.data) === null || _response$data6 === void 0 ? void 0 : _response$data6.id);
      }).catch(function (error) {
        var _error$response3, _error$response3$data;

        console.error(error);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_10__.showError)(error === null || error === void 0 ? void 0 : (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : (_error$response3$data = _error$response3.data) === null || _error$response3$data === void 0 ? void 0 : _error$response3$data.error);
      }).then(function () {
        _this14.uploadingImage = false;
      });
    },
    showImagePrompt: function showImagePrompt() {
      var _this15 = this;

      var currentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_9__.getCurrentUser)();

      if (!currentUser) {
        return;
      }

      OC.dialogs.filepicker(t('text', 'Insert an image'), function (file) {
        _this15.onImagePathSubmit(file);
      }, false, [], true, undefined, this.imagePath);
    },
    insertAttachmentImage: function insertAttachmentImage(name, fileId) {
      var src = 'text://image?imageFileName=' + encodeURIComponent(name); // simply get rid of brackets to make sure link text is valid
      // as it does not need to be unique and matching the real file name

      var alt = name.replaceAll(/[[\]]/g, '');
      this.editor.chain().setImage({
        src: src,
        alt: alt
      }).focus().run();
    },
    optimalPathTo: function optimalPathTo(targetFile) {
      var absolutePath = targetFile.split('/');
      var relativePath = this.relativePathTo(targetFile).split('/');
      return relativePath.length < absolutePath.length ? relativePath.join('/') : targetFile;
    },
    relativePathTo: function relativePathTo(targetFile) {
      var current = this.filePath.split('/');
      var target = targetFile.split('/');
      current.pop(); // ignore filename

      while (current[0] === target[0]) {
        current.shift();
        target.shift();
      }

      return current.fill('..').concat(target).join('/');
    },
    addEmoji: function addEmoji(icon, emojiObject) {
      return icon.action(this.editor.chain(), emojiObject).focus().run();
    },
    keysString: function keysString(keyChar) {
      var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var translations = {
        ctrl: t('text', 'Ctrl'),
        alt: t('text', 'Alt'),
        shift: t('text', 'Shift')
      };
      return Object.entries(translations).filter(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            k = _ref5[0],
            v = _ref5[1];

        return modifiers.includes(k);
      }).map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            k = _ref7[0],
            v = _ref7[1];

        return v;
      }).concat(keyChar.toUpperCase()).join('+');
    },
    getKeys: function getKeys(icon) {
      return icon.keyChar && !this.isMobile ? "(".concat(this.keysString(icon.keyChar, icon.keyModifiers), ")") : '';
    },
    getLabelAndKeys: function getLabelAndKeys(icon) {
      return [icon.label, this.getKeys(icon)].join(' ');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/vue-2 */ "./node_modules/@tiptap/vue-2/dist/tiptap-vue-2.esm.js");
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _helpers_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/files */ "./src/helpers/files.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MenuBubble',
  components: {
    BubbleMenu: _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_4__.BubbleMenu
  },
  directives: {
    tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    editor: {
      type: Object,
      required: true
    },
    // used to calculate the position based on the scrollOffset
    contentWrapper: {
      type: HTMLDivElement,
      required: false,
      default: null
    },
    filePath: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: function data() {
    return {
      linkUrl: null,
      linkMenuIsActive: false,
      isUsingDirectEditing: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__.loadState)('text', 'directEditingToken', null) !== null
    };
  },
  methods: {
    showLinkMenu: function showLinkMenu() {
      var _this = this;

      var attrs = (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_5__.getMarkAttributes)(this.editor.state, 'link');
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(function () {
        _this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu: function hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    selectFile: function selectFile() {
      var _this2 = this;

      var currentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)();

      if (!currentUser) {
        return;
      }

      var startPath = this.filePath.split('/').slice(0, -1).join('/');
      OC.dialogs.filepicker(t('text', 'Select file to link to'), function (file) {
        var client = OC.Files.getClient();
        client.getFileInfo(file).then(function (_status, fileInfo) {
          var path = (0,_helpers_files__WEBPACK_IMPORTED_MODULE_2__.optimalPath)(_this2.filePath, "".concat(fileInfo.path, "/").concat(fileInfo.name));
          var encodedPath = path.split('/').map(encodeURIComponent).join('/');
          var href = "".concat(encodedPath, "?fileId=").concat(fileInfo.id);

          _this2.editor.chain().setLink({
            href: href
          }).focus().run();

          _this2.hideLinkMenu();
        });
      }, false, [], true, undefined, startPath);
    },
    setLinkUrl: function setLinkUrl() {
      var url = this.linkUrl; // Heuristics for determining if we need a https:// prefix.

      var noPrefixes = [/^[a-zA-Z]+:/, // url with protocol ("mailTo:email@domain.tld")
      /^\//, // absolute path
      /\?fileId=/, // relative link with fileId
      /^\.\.?\//, // relative link starting with ./ or ../
      /^[^.]*[/$]/, // no dots before first '/' - not a domain name
      /^#/ // url fragment
      ];

      if (url && !noPrefixes.find(function (regex) {
        return url.match(regex);
      })) {
        url = 'https://' + url;
      } // Avoid issues when parsing urls later on in markdown that might be entered in an invalid format (e.g. "mailto: example@example.com")


      var href = url.replaceAll(' ', '%20');
      this.editor.chain().setLink({
        href: href
      }).focus().run();
      this.hideLinkMenu();
    },
    removeLinkUrl: function removeLinkUrl() {
      this.editor.chain().unsetLink().focus().run();
    },
    isActive: function isActive(selector) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.editor.isActive(selector, args);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers */ "./src/helpers/index.js");
/* harmony import */ var _services_SyncService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/SyncService */ "./src/services/SyncService.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'RichWorkspace',
  components: {
    EditorWrapper: function EditorWrapper() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendors"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../components/EditorWrapper */ "./src/components/EditorWrapper.vue"));
    }
  },
  props: {
    file: {
      type: Object,
      default: null
    },
    folder: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      focus: false,
      loaded: false,
      ready: false,
      autofocus: false,
      darkTheme: OCA.Accessibility && OCA.Accessibility.theme === 'dark',
      enabled: OCA.Text.RichWorkspaceEnabled,

      /** @type {SyncService} */
      syncService: null,
      serialize: null
    };
  },
  computed: {
    shareToken: function shareToken() {
      return document.getElementById('sharingToken') ? document.getElementById('sharingToken').value : null;
    },
    canCreate: function canCreate() {
      return !!(this.folder && this.folder.permissions & OC.PERMISSION_CREATE);
    },
    showEmptyWorkspace: function showEmptyWorkspace() {
      return (!this.file || this.autofocus && !this.ready) && this.canCreate;
    }
  },
  watch: {
    focus: function focus(newValue) {
      if (!newValue) {
        document.querySelector('#editor').scrollTo(0, 0);
      }
    },
    file: function file(_file) {
      if (_file) {
        this.initSession();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('Text::showRichWorkspace', function () {
                _this.enabled = true;
              });
              (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('Text::hideRichWorkspace', function () {
                _this.enabled = false;
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    unfocus: function unfocus() {// setTimeout(() => this.focus = false, 2000)
    },
    reset: function reset() {
      var _this2 = this;

      this.focus = false;
      this.$nextTick(function () {
        _this2.creating = false;
      });
    },
    createNew: function createNew() {
      if (this.creating) {
        return;
      }

      this.creating = true;
      this.autofocus = true;

      if (!this.file) {
        window.FileList.createFile('Readme.md', {
          scrollTo: false,
          animate: false
        });
      }
    },
    reconnect: function reconnect() {
      this.syncService = null;
      this.initSession();
    },
    initSession: function initSession() {
      var _this3 = this;

      var guestName = localStorage.getItem('nick') || (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getRandomGuestName)();
      this.syncService = new _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.SyncService({
        shareToken: this.shareToken,
        filePath: this.relativePath,
        guestName: guestName,
        forceRecreate: this.forceRecreate,
        serialize: this.serialize
      });
      this.syncService.open({
        fileId: this.file.id,
        filePath: this.file.path
      }).catch(function (e) {
        _this3.hasConnectionIssue = true;
      });
    }
  }
});

/***/ }),

/***/ "./src/helpers/files.js":
/*!******************************!*\
  !*** ./src/helpers/files.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optimalPath": () => (/* binding */ optimalPath),
/* harmony export */   "registerFileActionFallback": () => (/* binding */ registerFileActionFallback),
/* harmony export */   "registerFileCreate": () => (/* binding */ registerFileCreate),
/* harmony export */   "FilesWorkspacePlugin": () => (/* binding */ FilesWorkspacePlugin),
/* harmony export */   "FILE_ACTION_IDENTIFIER": () => (/* binding */ FILE_ACTION_IDENTIFIER)
/* harmony export */ });
/* harmony import */ var _mime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mime */ "./src/helpers/mime.js");
/* harmony import */ var _views_RichWorkspace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/RichWorkspace */ "./src/views/RichWorkspace.vue");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/store.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




var FILE_ACTION_IDENTIFIER = 'Edit with text app';

var optimalPath = function optimalPath(from, to) {
  var current = from.split('/');
  var target = to.split('/');
  current.pop(); // ignore filename

  while (current[0] === target[0]) {
    current.shift();
    target.shift();
  }

  var relativePath = current.fill('..').concat(target);
  var absolutePath = to.split('/');
  return relativePath.length < absolutePath.length ? relativePath.join('/') : to;
};

var registerFileCreate = function registerFileCreate() {
  var newFileMenuPlugin = {
    attach: function attach(menu) {
      var fileList = menu.fileList; // only attach to main file list, public view is not supported yet

      if (fileList.id !== 'files' && fileList.id !== 'files.public') {
        return;
      } // register the new menu entry


      menu.addMenuEntry({
        id: 'file',
        displayName: t('text', 'New text document'),
        templateName: t('text', 'New text document') + '.md',
        iconClass: 'icon-filetype-text',
        fileType: 'file',
        actionHandler: function actionHandler(name) {
          fileList.createFile(name).then(function (status, data) {
            var fileInfoModel = new OCA.Files.FileInfoModel(data);

            if (typeof OCA.Viewer !== 'undefined') {
              OCA.Files.fileActions.triggerAction('view', fileInfoModel, fileList);
            } else if (typeof OCA.Viewer === 'undefined') {
              OCA.Files.fileActions.triggerAction(FILE_ACTION_IDENTIFIER, fileInfoModel, fileList);
            }
          });
        }
      });
    }
  };
  OC.Plugins.register('OCA.Files.NewFileMenu', newFileMenuPlugin);
};

var registerFileActionFallback = function registerFileActionFallback() {
  var sharingToken = document.getElementById('sharingToken') ? document.getElementById('sharingToken').value : null;
  var dir = document.getElementById('dir').value;

  if (!sharingToken || dir !== '') {
    var ViewerRoot = document.createElement('div');
    ViewerRoot.id = 'text-viewer-fallback';
    document.body.appendChild(ViewerRoot);

    var registerAction = function registerAction(mime) {
      return OCA.Files.fileActions.register(mime, FILE_ACTION_IDENTIFIER, OC.PERMISSION_UPDATE | OC.PERMISSION_READ, (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.imagePath)('core', 'actions/rename'), function (filename) {
        var file = window.FileList.findFile(filename);
        Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")), Promise.all(/*! import() | files-modal */[__webpack_require__.e("vendors"), __webpack_require__.e("files-modal")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../components/PublicFilesEditor */ "./src/components/PublicFilesEditor.vue"))]).then(function (imports) {
          var path = window.FileList.getCurrentDirectory() + '/' + filename;
          var Vue = imports[0].default;
          Vue.prototype.t = window.t;
          Vue.prototype.n = window.n;
          Vue.prototype.OCA = window.OCA;
          var Editor = imports[1].default;
          var vm = new Vue({
            render: function render(h) {
              // eslint-disable-line
              var self = this;
              return h(Editor, {
                props: {
                  fileId: file ? file.id : null,
                  active: true,
                  shareToken: sharingToken,
                  relativePath: path,
                  mimeType: file.mimetype
                },
                on: {
                  close: function close() {
                    // eslint-disable-line
                    self.$destroy();
                  }
                }
              });
            }
          });
          vm.$mount(ViewerRoot);
        });
      }, t('text', 'Edit'));
    };

    for (var i = 0; i < _mime__WEBPACK_IMPORTED_MODULE_0__.openMimetypes.length; i++) {
      registerAction(_mime__WEBPACK_IMPORTED_MODULE_0__.openMimetypes[i]);
      OCA.Files.fileActions.setDefault(_mime__WEBPACK_IMPORTED_MODULE_0__.openMimetypes[i], FILE_ACTION_IDENTIFIER);
    }
  }
};

var FilesWorkspacePlugin = {
  el: null,
  vm: null,
  attach: function attach(fileList) {
    var _this = this;

    if (fileList.id !== 'files' && fileList.id !== 'files.public') {
      return;
    }

    this.el = document.createElement('div');
    fileList.registerHeader({
      id: 'workspace',
      el: this.el,
      render: this.render.bind(this),
      priority: 10
    });
    var PROPERTY_WORKSPACE_FILE = "{".concat(OC.Files.Client.NS_NEXTCLOUD, "}rich-workspace-file");
    var oldGetWebdavProperties = fileList._getWebdavProperties;

    fileList._getWebdavProperties = function () {
      return [].concat(_toConsumableArray(oldGetWebdavProperties.apply(this, arguments)), [PROPERTY_WORKSPACE_FILE]);
    };

    var filename = null;
    fileList.filesClient.addFileInfoParser(function (response, data) {
      if (data.mimetype === 'httpd/unix-directory') {
        var props = response.propStat[0].properties;
        filename = props[PROPERTY_WORKSPACE_FILE];
        var dir = data.mimetype === 'httpd/unix-directory' ? data.path + (data.path.endsWith('/') ? '' : '/') + data.name : data.path;

        if (dir === fileList.getCurrentDirectory()) {
          _this.vm.folder = _objectSpread({}, data);
        }
      }

      if (data.mimetype === 'text/markdown') {
        var name = filename || 'Readme.md';

        if (data.name === name) {
          _this.vm.file = _objectSpread(_objectSpread({}, data), {}, {
            id: parseInt(data.id)
          });
        }
      }
    });
  },
  render: function render(fileList) {
    var _this2 = this;

    if (fileList.id !== 'files' && fileList.id !== 'files.public') {
      return;
    }

    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")).then(function (module) {
      var Vue = module.default;
      _this2.el.id = 'files-workspace-wrapper';
      Vue.prototype.t = window.t;
      Vue.prototype.n = window.n;
      Vue.prototype.OCA = window.OCA;
      var View = Vue.extend(_views_RichWorkspace__WEBPACK_IMPORTED_MODULE_1__["default"]);
      _this2.vm = new View({
        propsData: {
          file: null,
          folder: null
        },
        store: _store__WEBPACK_IMPORTED_MODULE_3__["default"]
      }).$mount(_this2.el);
      fileList.$el.on('urlChanged', function (data) {
        _this2.vm.file = null;
        _this2.vm.folder = null;
      });
      fileList.$el.on('changeDirectory', function (data) {
        _this2.vm.file = null;
        _this2.vm.folder = null;
      });
    });
  }
};


/***/ }),

/***/ "./src/helpers/mime.js":
/*!*****************************!*\
  !*** ./src/helpers/mime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openMimetypes": () => (/* binding */ openMimetypes),
/* harmony export */   "openMimetypesMarkdown": () => (/* binding */ openMimetypesMarkdown),
/* harmony export */   "openMimetypesPlainText": () => (/* binding */ openMimetypesPlainText)
/* harmony export */ });
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var openMimetypesMarkdown = ['text/markdown'];
var openMimetypesPlainText = ['text/plain', 'application/cmd', 'application/x-empty', 'application/x-msdos-program', 'application/javascript', 'application/json', 'application/x-perl', 'application/x-php', 'application/x-tex', 'application/xml', 'application/yaml', 'text/css', 'text/csv', 'text/html', 'text/org', 'text/x-c', 'text/x-c++src', 'text/x-h', 'text/x-java-source', 'text/x-ldif', 'text/x-python', 'text/x-shellscript'];
var openMimetypes = [].concat(openMimetypesMarkdown, openMimetypesPlainText);


/***/ }),

/***/ "./src/mixins/menubar.js":
/*!*******************************!*\
  !*** ./src/mixins/menubar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  label: t('text', 'Undo'),
  keyChar: 'z',
  keyModifiers: ['ctrl'],
  class: 'icon-undo',
  action: function action(command) {
    return command.undo();
  }
}, {
  label: t('text', 'Redo'),
  keyChar: 'y',
  keyModifiers: ['ctrl'],
  class: 'icon-redo',
  action: function action(command) {
    return command.redo();
  }
}, {
  label: t('text', 'Bold'),
  keyChar: 'b',
  keyModifiers: ['ctrl'],
  class: 'icon-bold',
  isActive: 'strong',
  action: function action(command) {
    return command.toggleBold();
  }
}, {
  label: t('text', 'Italic'),
  keyChar: 'i',
  keyModifiers: ['ctrl'],
  class: 'icon-italic',
  isActive: 'em',
  action: function action(command) {
    return command.toggleItalic();
  }
}, {
  label: t('text', 'Underline'),
  keyChar: 'u',
  keyModifiers: ['ctrl'],
  class: 'icon-underline',
  isActive: 'underline',
  action: function action(command) {
    return command.toggleUnderline();
  }
}, {
  label: t('text', 'Strikethrough'),
  keyChar: 'd',
  keyModifiers: ['ctrl'],
  class: 'icon-strike',
  isActive: 'strike',
  action: function action(command) {
    return command.toggleStrike();
  }
}, {
  label: t('text', 'Headings'),
  keyChar: '1…6',
  keyModifiers: ['ctrl', 'shift'],
  visible: false,
  children: [{
    label: t('text', 'Heading 1'),
    class: 'icon-h1',
    isActive: ['heading', {
      level: 1
    }],
    action: function action(command) {
      return command.toggleHeading({
        level: 1
      });
    }
  }, {
    label: t('text', 'Heading 2'),
    class: 'icon-h2',
    isActive: ['heading', {
      level: 2
    }],
    action: function action(command) {
      return command.toggleHeading({
        level: 2
      });
    }
  }, {
    label: t('text', 'Heading 3'),
    class: 'icon-h3',
    isActive: ['heading', {
      level: 3
    }],
    action: function action(command) {
      return command.toggleHeading({
        level: 3
      });
    }
  }, {
    label: t('text', 'Heading 4'),
    class: 'icon-h4',
    isActive: ['heading', {
      level: 4
    }],
    action: function action(command) {
      return command.toggleHeading({
        level: 4
      });
    }
  }, {
    label: t('text', 'Heading 5'),
    class: 'icon-h5',
    isActive: ['heading', {
      level: 5
    }],
    action: function action(command) {
      return command.toggleHeading({
        level: 5
      });
    }
  }, {
    label: t('text', 'Heading 6'),
    class: 'icon-h6',
    isActive: ['heading', {
      level: 6
    }],
    action: function action(command) {
      return command.toggleHeading({
        level: 6
      });
    }
  }]
}, {
  label: t('text', 'Unordered list'),
  keyChar: '8',
  keyModifiers: ['ctrl', 'shift'],
  class: 'icon-ul',
  isActive: 'bulletList',
  action: function action(command) {
    return command.bulletListItem();
  }
}, {
  label: t('text', 'Ordered list'),
  keyChar: '9',
  keyModifiers: ['ctrl', 'shift'],
  class: 'icon-ol',
  isActive: 'orderedList',
  action: function action(command) {
    return command.toggleOrderedList();
  }
}, {
  label: t('text', 'ToDo list'),
  class: 'icon-checkmark',
  // Do we want to indicate that the current item is a todo item?
  // isActive: ['listItem', { type: 1 }],
  action: function action(command) {
    return command.todo_item();
  }
}, {
  label: t('text', 'Blockquote'),
  keyChar: '>',
  keyModifiers: ['ctrl'],
  class: 'icon-quote',
  isActive: 'blockquote',
  action: function action(command) {
    return command.toggleBlockquote();
  }
}, {
  label: t('text', 'Code block'),
  class: 'icon-code',
  isActive: 'codeBlock',
  action: function action(command) {
    return command.toggleCodeBlock();
  }
}, {
  label: t('text', 'Emoji picker'),
  class: 'icon-emoji',
  action: function action(command, emojiObject) {
    return command.emoji(emojiObject);
  }
}]);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".menubar[data-v-4a501398] {\n  --background-blur: blur(10px);\n  position: fixed;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: flex-end;\n  z-index: 10021;\n  background-color: var(--color-main-background-translucent);\n  -webkit-backdrop-filter: var(--background-blur);\n  backdrop-filter: var(--background-blur);\n  max-height: 44px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n.menubar.autohide[data-v-4a501398] {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;\n}\n.menubar.autohide.show[data-v-4a501398] {\n  visibility: visible;\n  opacity: 1;\n}\n.menubar .menubar-icons[data-v-4a501398] {\n  flex-grow: 1;\n  margin-left: calc((100% - 660px) / 2);\n}\n@media (max-width: 660px) {\n.menubar .menubar-icons[data-v-4a501398] {\n    margin-left: 0;\n}\n}\n.menubar[data-v-4a501398] .action-item__menu ul {\n  max-height: calc(100vh - 88px);\n  overflow: scroll;\n}\n.menubar button[data-v-4a501398] {\n  position: relative;\n  width: 44px;\n  height: 44px;\n  margin: 0;\n  background-size: 16px;\n  border: 0;\n  background-color: transparent;\n  opacity: 0.5;\n  color: var(--color-main-text);\n  background-position: center center;\n  vertical-align: top;\n}\n.menubar button[data-v-4a501398]:hover, .menubar button[data-v-4a501398]:focus, .menubar button[data-v-4a501398]:active {\n  background-color: var(--color-background-dark);\n}\n.menubar button.is-active[data-v-4a501398]::before {\n  transform: translateX(-50%);\n  border-radius: 100%;\n  position: absolute;\n  background: var(--color-primary-element);\n  bottom: 3px;\n  height: 6px;\n  width: 6px;\n  content: \"\";\n  left: 50%;\n}\n.menubar button.is-active[data-v-4a501398], .menubar button[data-v-4a501398]:hover, .menubar button[data-v-4a501398]:focus {\n  opacity: 1;\n}\n.menubar button.icon-undo[data-v-4a501398], .menubar button.icon-redo[data-v-4a501398] {\n  opacity: 0.8;\n}\n.menubar button.icon-undo[data-v-4a501398]:disabled, .menubar button.icon-redo[data-v-4a501398]:disabled {\n  opacity: 0.4;\n}\n.menubar .submenu[data-v-4a501398], .menubar .menuitem-emoji[data-v-4a501398] {\n  display: inline-block;\n  width: 44px;\n  height: 44px;\n  position: relative;\n  vertical-align: top;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".menububble[data-v-5496a10a] {\n  display: flex;\n  z-index: 10020;\n  background: var(--color-main-background-translucent);\n  box-shadow: 0 1px 5px var(--color-box-shadow);\n  border-radius: var(--border-radius-large);\n  overflow: hidden;\n  padding: 0;\n  margin-left: 10px;\n  height: 44px;\n}\n.menububble__button[data-v-5496a10a] {\n  display: block;\n  flex-grow: 1;\n  border: 0;\n  padding: 0.9rem 0.7rem;\n  margin: 0;\n  border-radius: 0;\n  cursor: pointer;\n  background-color: var(--color-main-background);\n  border-right: 1px solid var(--color-border);\n}\n.menububble__button[data-v-5496a10a]:focus, .menububble__button[data-v-5496a10a]:hover {\n  background-color: var(--color-background-hover);\n  border: 0;\n  border-right: 1px solid var(--color-border) !important;\n}\n.menububble__button[data-v-5496a10a]:last-child {\n  border: 0 !important;\n}\n.menububble__buttontext[data-v-5496a10a] {\n  padding: 0.4rem;\n  padding-right: 0;\n}\n.menububble__form[data-v-5496a10a] {\n  display: flex;\n  align-items: center;\n}\n.menububble__input[data-v-5496a10a] {\n  font: inherit;\n  border: none;\n  background: transparent;\n  min-width: 250px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#rich-workspace[data-v-0cce2262] {\n  padding: 0 50px;\n  /* Slightly reduce vertical space */\n  margin-bottom: -24px;\n  text-align: left;\n  max-height: 0;\n  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n  z-index: 61;\n  position: relative;\n}\n#rich-workspace.creatable[data-v-0cce2262] {\n  min-height: 90px;\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace[data-v-0cce2262]:only-child {\n  margin-bottom: 0;\n}\n.empty-workspace[data-v-0cce2262] {\n  padding-top: 43px;\n  color: var(--color-text-maxcontrast);\n  height: 0;\n}\n#rich-workspace[data-v-0cce2262] div[contenteditable=false] {\n  width: 100%;\n  padding: 0px;\n  background-color: var(--color-main-background);\n  opacity: 1;\n  border: none;\n}\n#rich-workspace[data-v-0cce2262] #editor-container {\n  height: 100%;\n  position: unset !important;\n  top: auto !important;\n}\n#rich-workspace[data-v-0cce2262] #editor-wrapper {\n  position: unset !important;\n  overflow: visible;\n}\n#rich-workspace[data-v-0cce2262] #editor {\n  overflow: visible !important;\n}\n#rich-workspace[data-v-0cce2262] .content-wrapper {\n  overflow: scroll !important;\n  max-height: calc(40vh - 50px);\n  padding-left: 10px;\n  padding-bottom: 60px;\n  /* ensure menububble fits below */\n}\n#rich-workspace[data-v-0cce2262] #editor-wrapper .ProseMirror {\n  padding: 0px;\n  margin: 0;\n}\n#rich-workspace[data-v-0cce2262] .menubar {\n  z-index: 61;\n  /* Slightly reduce vertical space */\n  margin-bottom: -10px;\n}\n#rich-workspace[data-v-0cce2262] .menubar .menubar-icons {\n  margin-left: 0;\n}\n#rich-workspace[data-v-0cce2262] .editor__content {\n  margin: 0;\n}\n#rich-workspace.focus[data-v-0cce2262] {\n  max-height: 50vh;\n}\n#rich-workspace[data-v-0cce2262]:not(.focus) {\n  max-height: 30vh;\n  position: relative;\n  overflow: hidden;\n}\n#rich-workspace[data-v-0cce2262]:not(.focus):not(.icon-loading):after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n  width: 100%;\n  height: 4em;\n}\n#rich-workspace.dark[data-v-0cce2262]:not(.focus):not(.icon-loading):after {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n@media only screen and (max-width: 1024px) {\n#rich-workspace[data-v-0cce2262]:not(.focus) {\n    max-height: 30vh;\n}\n}\nhtml.ie #rich-workspace[data-v-0cce2262] #editor-container {\n  position: initial;\n}\nhtml.ie #rich-workspace[data-v-0cce2262] #editor-wrapper {\n  position: relative !important;\n  top: auto !important;\n}\nhtml.ie #rich-workspace[data-v-0cce2262] #editor {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden !important;\n}\nhtml.ie #rich-workspace[data-v-0cce2262] .menubar {\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n  height: 44px;\n  top: auto;\n}\nhtml.ie #rich-workspace[data-v-0cce2262] #editor > div:nth-child(2) {\n  min-height: 44px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  flex-shrink: 1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MenuBar.vue":
/*!************************************!*\
  !*** ./src/components/MenuBar.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=template&id=4a501398&scoped=true& */ "./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&");
/* harmony import */ var _MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=script&lang=js& */ "./src/components/MenuBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& */ "./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4a501398",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MenuBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/MenuBubble.vue":
/*!***************************************!*\
  !*** ./src/components/MenuBubble.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& */ "./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&");
/* harmony import */ var _MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBubble.vue?vue&type=script&lang=js& */ "./src/components/MenuBubble.vue?vue&type=script&lang=js&");
/* harmony import */ var _MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& */ "./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5496a10a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MenuBubble.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/RichWorkspace.vue":
/*!*************************************!*\
  !*** ./src/views/RichWorkspace.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true& */ "./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true&");
/* harmony import */ var _RichWorkspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RichWorkspace.vue?vue&type=script&lang=js& */ "./src/views/RichWorkspace.vue?vue&type=script&lang=js&");
/* harmony import */ var _RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& */ "./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RichWorkspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0cce2262",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/RichWorkspace.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/MenuBar.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MenuBubble.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/MenuBubble.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBubble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/RichWorkspace.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/RichWorkspace.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RichWorkspace.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_style_index_0_id_4a501398_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=style&index=0&id=4a501398&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBar_vue_vue_type_template_id_4a501398_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBar.vue?vue&type=template&id=4a501398&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&");


/***/ }),

/***/ "./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&");


/***/ }),

/***/ "./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBar.vue?vue&type=template&id=4a501398&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "menubar",
      class: { show: _vm.isVisible, autohide: _vm.autohide }
    },
    [
      _c("input", {
        ref: "imageFileInput",
        staticClass: "hidden-visually",
        attrs: { type: "file", accept: "image/*", "aria-hidden": "true" },
        on: { change: _vm.onImageUploadFilePicked }
      }),
      _vm._v(" "),
      _vm.isRichEditor
        ? _c(
            "div",
            { ref: "menubar", staticClass: "menubar-icons" },
            [
              _vm._l(_vm.allIcons, function(icon, $index) {
                return [
                  icon.class === "icon-emoji"
                    ? _c(
                        "EmojiPicker",
                        {
                          key: icon.label,
                          staticClass: "menuitem-emoji",
                          on: {
                            select: function(emojiObject) {
                              return _vm.addEmoji(icon, emojiObject)
                            }
                          }
                        },
                        [
                          _c("button", {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: _vm.t("text", "Insert emoji"),
                                expression: "t('text', 'Insert emoji')"
                              }
                            ],
                            staticClass: "icon-emoji",
                            attrs: {
                              "aria-label": _vm.t("text", "Insert emoji"),
                              "aria-haspopup": true
                            },
                            on: {
                              click: function($event) {
                                return _vm.toggleChildMenu(icon)
                              }
                            }
                          })
                        ]
                      )
                    : icon.class === "icon-image"
                    ? _c(
                        "Actions",
                        {
                          key: icon.label,
                          ref: "imageActions",
                          refInFor: true,
                          staticClass: "submenu",
                          attrs: { "default-icon": "icon-image" },
                          on: {
                            open: function($event) {
                              return _vm.toggleChildMenu(icon)
                            },
                            close: function($event) {
                              _vm.onImageActionClose
                              _vm.toggleChildMenu(icon)
                            }
                          }
                        },
                        [
                          _c("button", {
                            class: {
                              "icon-image": true,
                              "loading-small": _vm.uploadingImage
                            },
                            attrs: {
                              slot: "icon",
                              title: icon.label,
                              "aria-label": icon.label,
                              "aria-haspopup": true
                            },
                            slot: "icon"
                          }),
                          _vm._v(" "),
                          _c(
                            "ActionButton",
                            {
                              attrs: {
                                icon: "icon-upload",
                                "close-after-click": true,
                                disabled: _vm.uploadingImage
                              },
                              on: {
                                click: function($event) {
                                  return _vm.onUploadImage()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.t("text", "Upload from computer")
                                  ) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.isPublic
                            ? _c(
                                "ActionButton",
                                {
                                  attrs: {
                                    icon: "icon-folder",
                                    "close-after-click": true,
                                    disabled: _vm.uploadingImage
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.showImagePrompt()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.t("text", "Insert from Files")
                                      ) +
                                      "\n\t\t\t\t"
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.showImageLinkPrompt
                            ? _c(
                                "ActionButton",
                                {
                                  attrs: {
                                    icon: "icon-link",
                                    "close-after-click": false,
                                    disabled: _vm.uploadingImage
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.showImageLinkPrompt = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.t("text", "Insert from link")
                                      ) +
                                      "\n\t\t\t\t"
                                  )
                                ]
                              )
                            : _c(
                                "ActionInput",
                                {
                                  attrs: {
                                    icon: "icon-link",
                                    value: _vm.imageLink
                                  },
                                  on: {
                                    "update:value": _vm.onImageLinkUpdateValue,
                                    submit: function($event) {
                                      return _vm.onImageLinkSubmit()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.t("text", "Image link to insert")
                                      ) +
                                      "\n\t\t\t\t"
                                  )
                                ]
                              )
                        ],
                        1
                      )
                    : icon.class
                    ? _c("button", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: $index < _vm.iconCount,
                            expression: "$index < iconCount"
                          },
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: _vm.getLabelAndKeys(icon),
                            expression: "getLabelAndKeys(icon)"
                          }
                        ],
                        key: icon.label,
                        class: _vm.getIconClasses(icon),
                        attrs: { disabled: _vm.disabled(icon) },
                        on: {
                          click: function($event) {
                            return _vm.clickIcon(icon)
                          }
                        }
                      })
                    : [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: $index < _vm.iconCount || !icon.class,
                                expression: "$index < iconCount || !icon.class"
                              },
                              {
                                name: "click-outside",
                                rawName: "v-click-outside",
                                value: function() {
                                  return _vm.hideChildMenu(icon)
                                },
                                expression: "() => hideChildMenu(icon)"
                              }
                            ],
                            key: icon.label,
                            staticClass: "submenu"
                          },
                          [
                            _c("button", {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: _vm.getLabelAndKeys(icon),
                                  expression: "getLabelAndKeys(icon)"
                                }
                              ],
                              class: _vm.childIconClasses(icon.children),
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.toggleChildMenu(icon)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "popovermenu menu-center",
                                class: { open: _vm.isChildMenuVisible(icon) }
                              },
                              [
                                _c("PopoverMenu", {
                                  attrs: {
                                    menu: _vm.childPopoverMenu(
                                      icon.children,
                                      icon
                                    )
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ]
                ]
              }),
              _vm._v(" "),
              _c(
                "Actions",
                {
                  on: {
                    open: function($event) {
                      return _vm.toggleChildMenu({ label: "Remaining Actions" })
                    },
                    close: function($event) {
                      return _vm.toggleChildMenu({ label: "Remaining Actions" })
                    }
                  }
                },
                [
                  _vm._l(_vm.allIcons, function(icon, $index) {
                    return [
                      icon.class &&
                      _vm.isHiddenInMenu($index) &&
                      !(icon.class === "icon-emoji")
                        ? _c(
                            "ActionButton",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: _vm.getKeys(icon),
                                  expression: "getKeys(icon)"
                                }
                              ],
                              key: icon.class,
                              attrs: {
                                icon: icon.class,
                                "close-after-click": true
                              },
                              on: {
                                click: function($event) {
                                  return _vm.clickIcon(icon)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t" +
                                  _vm._s(icon.label) +
                                  "\n\t\t\t\t"
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  })
                ],
                2
              )
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default", function() {
        return [_vm._v("\n\t\tLeft side\n\t")]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "BubbleMenu",
    {
      staticClass: "menububble",
      attrs: {
        editor: _vm.editor,
        "tippy-options": {
          onHide: _vm.hideLinkMenu,
          duration: 200,
          placement: "bottom"
        }
      }
    },
    [
      _vm.linkMenuIsActive
        ? _c(
            "form",
            {
              staticClass: "menububble__form",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.setLinkUrl()
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.linkUrl,
                    expression: "linkUrl"
                  }
                ],
                ref: "linkInput",
                staticClass: "menububble__input",
                attrs: { type: "text", placeholder: "https://" },
                domProps: { value: _vm.linkUrl },
                on: {
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "esc", 27, $event.key, [
                        "Esc",
                        "Escape"
                      ])
                    ) {
                      return null
                    }
                    return _vm.hideLinkMenu.apply(null, arguments)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.linkUrl = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("button", {
                staticClass: "menububble__button icon-confirm",
                attrs: { type: "button", tabindex: "0" },
                on: {
                  click: function($event) {
                    return _vm.setLinkUrl()
                  }
                }
              })
            ]
          )
        : [
            _c(
              "button",
              {
                staticClass: "menububble__button",
                class: { "is-active": _vm.isActive("link") },
                on: {
                  click: function($event) {
                    return _vm.showLinkMenu()
                  }
                }
              },
              [
                _c("span", { staticClass: "icon-link" }),
                _vm._v(" "),
                _c("span", { staticClass: "menububble__buttontext" }, [
                  _vm._v(
                    "\n\t\t\t\t" +
                      _vm._s(
                        _vm.isActive("link")
                          ? _vm.t("text", "Update Link")
                          : _vm.t("text", "Add Link")
                      ) +
                      "\n\t\t\t"
                  )
                ])
              ]
            ),
            _vm._v(" "),
            !_vm.isUsingDirectEditing
              ? _c(
                  "button",
                  {
                    staticClass: "menububble__button",
                    class: { "is-active": _vm.isActive("link") },
                    on: {
                      click: function($event) {
                        return _vm.selectFile()
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "icon-file" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "menububble__buttontext" }, [
                      _vm._v(_vm._s(_vm.t("text", "Link file")))
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isActive("link")
              ? _c(
                  "button",
                  {
                    staticClass: "menububble__button",
                    class: { "is-active": _vm.isActive("link") },
                    on: {
                      click: function($event) {
                        return _vm.removeLinkUrl()
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "icon-delete" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "menububble__buttontext" }, [
                      _vm._v(
                        "\n\t\t\t\t" +
                          _vm._s(_vm.t("text", "Remove Link")) +
                          "\n\t\t\t"
                      )
                    ])
                  ]
                )
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _vm.enabled
    ? _c(
        "div",
        {
          class: {
            "icon-loading": _vm.file && (!_vm.loaded || !_vm.ready),
            focus: _vm.focus,
            dark: _vm.darkTheme,
            creatable: _vm.canCreate
          },
          attrs: { id: "rich-workspace" }
        },
        [
          _vm.showEmptyWorkspace
            ? _c(
                "div",
                {
                  staticClass: "empty-workspace",
                  on: { click: _vm.createNew }
                },
                [
                  _c("p", { staticClass: "placeholder" }, [
                    _vm._v(
                      "\n\t\t\t" +
                        _vm._s(_vm.t("text", "Add notes, lists or links …")) +
                        "\n\t\t"
                    )
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.file
            ? _c("EditorWrapper", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.ready,
                    expression: "ready"
                  }
                ],
                key: _vm.file.path,
                attrs: {
                  "sync-service": _vm.syncService,
                  "relative-path": _vm.file.path,
                  active: true,
                  autohide: true,
                  mime: _vm.file.mimetype,
                  autofocus: _vm.autofocus,
                  state: _vm.syncService.state,
                  serialize: _vm.serialize
                },
                on: {
                  "update:state": function($event) {
                    return _vm.$set(_vm.syncService, "state", $event)
                  },
                  "update:serialize": function($event) {
                    _vm.serialize = $event
                  },
                  ready: function($event) {
                    _vm.ready = true
                    _vm.loaded = true
                  },
                  focus: function($event) {
                    _vm.focus = true
                  },
                  blur: _vm.unfocus,
                  error: _vm.reset,
                  close: function($event) {
                    _vm.syncService = null
                  },
                  reconnect: _vm.reconnect
                }
              })
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=editor-rich.js.map?v=309eee8d6e117e9c6ef6