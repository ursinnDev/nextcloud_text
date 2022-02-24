(self["webpackChunktext"] = self["webpackChunktext"] || []).push([["editor"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CollisionResolveDialog'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_SyncService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/SyncService */ "./src/services/SyncService.js");
/* harmony import */ var _helpers_mappings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/mappings */ "./src/helpers/mappings.js");
/* harmony import */ var _EditorFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../EditorFactory */ "./src/EditorFactory.js");
/* harmony import */ var _extensions_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../extensions/Markdown */ "./src/extensions/Markdown.js");
/* harmony import */ var _markdownit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../markdownit */ "./src/markdownit/index.js");
/* harmony import */ var _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tiptap/vue-2 */ "./node_modules/@tiptap/vue-2/dist/tiptap-vue-2.esm.js");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../extensions */ "./src/extensions/index.js");
/* harmony import */ var _mixins_isMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../mixins/isMobile */ "./src/mixins/isMobile.js");
/* harmony import */ var _mixins_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../mixins/store */ "./src/mixins/store.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/index.es.js");
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.es.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















var EDITOR_PUSH_DEBOUNCE = 200;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EditorWrapper',
  components: {
    EditorContent: _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_13__.EditorContent,
    MenuBar: function MenuBar() {
      return Promise.all(/*! import() | editor-rich */[__webpack_require__.e("vendors"), __webpack_require__.e("editor-rich")]).then(__webpack_require__.bind(__webpack_require__, /*! ./MenuBar */ "./src/components/MenuBar.vue"));
    },
    MenuBubble: function MenuBubble() {
      return Promise.all(/*! import() | editor-rich */[__webpack_require__.e("vendors"), __webpack_require__.e("editor-rich")]).then(__webpack_require__.bind(__webpack_require__, /*! ./MenuBubble */ "./src/components/MenuBubble.vue"));
    },
    ReadOnlyEditor: function ReadOnlyEditor() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendors"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ReadOnlyEditor */ "./src/components/ReadOnlyEditor.vue"));
    },
    CollisionResolveDialog: function CollisionResolveDialog() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendors"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(__webpack_require__, /*! ./CollisionResolveDialog */ "./src/components/CollisionResolveDialog.vue"));
    },
    GuestNameDialog: function GuestNameDialog() {
      return Promise.all(/*! import() | editor-guest */[__webpack_require__.e("vendors"), __webpack_require__.e("editor-guest")]).then(__webpack_require__.bind(__webpack_require__, /*! ./GuestNameDialog */ "./src/components/GuestNameDialog.vue"));
    },
    SessionList: function SessionList() {
      return Promise.all(/*! import() | editor-collab */[__webpack_require__.e("vendors"), __webpack_require__.e("editor-collab")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SessionList */ "./src/components/SessionList.vue"));
    },
    HelpModal: function HelpModal() {
      return Promise.all(/*! import() | editor-collab */[__webpack_require__.e("vendors"), __webpack_require__.e("editor-collab")]).then(__webpack_require__.bind(__webpack_require__, /*! ./HelpModal */ "./src/components/HelpModal.vue"));
    }
  },
  directives: {
    Tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10___default())
  },
  mixins: [_mixins_isMobile__WEBPACK_IMPORTED_MODULE_8__["default"], _mixins_store__WEBPACK_IMPORTED_MODULE_9__["default"]],
  props: {
    relativePath: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: true
    },
    mime: {
      type: String,
      default: null
    },
    autohide: {
      type: Boolean,
      default: false
    },
    isDirectEditing: {
      type: Boolean,
      default: false
    },
    syncService: {
      type: _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.SyncService,
      default: null
    }
  },
  data: function data() {
    return {
      IDLE_TIMEOUT: _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.IDLE_TIMEOUT,
      tiptap: null,
      document: null,
      sessions: [],
      currentSession: null,
      filteredSessions: {},
      idle: false,
      dirty: false,
      initialLoading: false,
      lastSavedString: '',
      syncError: null,
      hasConnectionIssue: false,
      readOnly: true,
      forceRecreate: false,
      menubarLoaded: false,
      saveStatusPolling: null,
      displayHelp: false,
      contentWrapper: null
    };
  },
  computed: {
    showAuthorAnnotations: function showAuthorAnnotations() {
      return this.$store.state.showAuthorAnnotations;
    },
    lastSavedStatus: function lastSavedStatus() {
      if (this.hasConnectionIssue) {
        return t('text', this.isMobile ? 'Offline' : 'Offline, changes will be saved when online');
      }

      return this.dirtyStateIndicator ? t('text', 'Saving …') : t('text', 'Saved');
    },
    lastSavedStatusClass: function lastSavedStatusClass() {
      return this.syncError && this.lastSavedString !== '' ? 'error' : '';
    },
    dirtyStateIndicator: function dirtyStateIndicator() {
      return this.hasUnpushedChanges || this.hasUnsavedChanges;
    },
    lastSavedStatusTooltip: function lastSavedStatusTooltip() {
      var message = t('text', 'Last saved {lastSaved}', {
        lastSaved: this.lastSavedString
      });

      if (this.hasSyncCollission) {
        message = t('text', 'The document has been changed outside of the editor. The changes cannot be applied.');
      }

      if (this.hasUnpushedChanges || this.hasUnsavedChanges) {
        message += ' - ' + t('text', 'Unsaved changes');
      }

      return {
        content: message,
        placement: 'bottom'
      };
    },
    hasSyncCollission: function hasSyncCollission() {
      return this.syncError && this.syncError.type === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SAVE_COLLISSION;
    },
    hasUnpushedChanges: function hasUnpushedChanges() {
      return this.dirty;
    },
    hasUnsavedChanges: function hasUnsavedChanges() {
      return this.document && this.document.lastSavedVersion < this.document.currentVersion;
    },
    isPublic: function isPublic() {
      return this.isDirectEditing || document.getElementById('isPublic') && document.getElementById('isPublic').value === '1';
    },
    isRichEditor: function isRichEditor() {
      return this.mime === 'text/markdown';
    },
    fileExtension: function fileExtension() {
      return this.relativePath ? this.relativePath.split('/').pop().split('.').pop() : 'txt';
    },
    currentDirectory: function currentDirectory() {
      return this.relativePath ? this.relativePath.split('/').slice(0, -1).join('/') : '/';
    },
    displayed: function displayed() {
      return this.currentSession && this.active;
    }
  },
  watch: {
    lastSavedStatus: function lastSavedStatus() {
      this.$refs.menubar && this.$refs.menubar.redrawMenuBar();
    },
    displayed: function displayed() {
      var _this = this;

      this.$nextTick(function () {
        _this.contentWrapper = _this.$refs.contentWrapper;
      });
    }
  },
  mounted: function mounted() {
    if (this.active) {
      this.initSession();
    }

    this.$parent.$emit('update:loaded', true);
  },
  created: function created() {
    var _this2 = this;

    this.saveStatusPolling = setInterval(function () {
      _this2.updateLastSavedStatus();
    }, 2000);
  },
  beforeDestroy: function beforeDestroy() {
    this.close();
  },
  methods: {
    close: function close() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clearInterval(_this3.saveStatusPolling);

                if (!(_this3.currentSession && _this3.syncService)) {
                  _context.next = 11;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return _this3.syncService.close();

              case 5:
                _this3.currentSession = null;

                _this3.$emit('close');

                _context.next = 11;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

              case 11:
                return _context.abrupt("return", true);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }))();
    },
    updateLastSavedStatus: function updateLastSavedStatus() {
      if (this.document) {
        this.lastSavedString = _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1___default()(this.document.lastSavedVersionTime * 1000).fromNow();
      }
    },
    initSession: function initSession() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _yield$_this4$syncSer, document, session, _yield$_this4$syncSer2, documentSource, content, language, serialize;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.syncService.on('change', function (_ref) {
                  var document = _ref.document,
                      sessions = _ref.sessions;

                  if (_this4.document.baseVersionEtag !== '' && document.baseVersionEtag !== _this4.document.baseVersionEtag) {
                    _this4.resolveUseServerVersion();

                    return;
                  }

                  _this4.updateSessions.bind(_this4)(sessions);

                  _this4.document = document;
                  _this4.syncError = null;

                  _this4.tiptap.setOptions({
                    editable: !_this4.readOnly
                  });
                });

                _this4.syncService.on('sync', function (_ref2) {
                  var steps = _ref2.steps,
                      document = _ref2.document;
                  _this4.hasConnectionIssue = false;

                  try {
                    var collaboration = _this4.tiptap.extensionManager.extensions.find(function (e) {
                      return e.name === 'collaboration';
                    });

                    collaboration.options.update({
                      version: document.currentVersion,
                      steps: steps,
                      editor: _this4.tiptap
                    });

                    _this4.$emit('update:state', _this4.tiptap.state);

                    _this4.updateLastSavedStatus();
                  } catch (e) {
                    console.error('Failed to update steps in collaboration plugin', e); // TODO: we should recreate the editing session when this happens
                  }

                  _this4.document = document;
                });

                _this4.syncService.on('error', function (error, data) {
                  _this4.tiptap.setOptions({
                    editable: false
                  });

                  if (error === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SAVE_COLLISSION && (!_this4.syncError || _this4.syncError.type !== _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SAVE_COLLISSION)) {
                    _this4.initialLoading = true;
                    _this4.syncError = {
                      type: error,
                      data: data
                    };
                  }

                  if (error === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED && !_this4.hasConnectionIssue) {
                    _this4.hasConnectionIssue = true; // FIXME: ideally we just try to reconnect in the service, so we don't loose steps

                    OC.Notification.showTemporary('Connection failed, reconnecting');

                    if (data.retry !== false) {
                      setTimeout(_this4.reconnect.bind(_this4), 5000);
                    }
                  }

                  if (error === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SOURCE_NOT_FOUND) {
                    _this4.hasConnectionIssue = true;
                  }

                  _this4.$emit('ready');
                });

                _this4.syncService.on('stateChange', function (state) {
                  if (state.initialLoading && !_this4.initialLoading) {
                    _this4.initialLoading = true;

                    if (_this4.autofocus) {
                      _this4.tiptap.commands.focus();
                    }

                    _this4.$emit('ready');

                    _this4.$parent.$emit('ready', true);
                  }

                  if (Object.prototype.hasOwnProperty.call(state, 'dirty')) {
                    _this4.dirty = state.dirty;
                  }
                });

                _this4.syncService.on('idle', function () {
                  _this4.syncService.close();

                  _this4.idle = true;
                  _this4.readOnly = true;

                  _this4.tiptap.setOptions({
                    editable: !_this4.readOnly
                  });
                });

                _context2.next = 7;
                return _this4.syncService.getSession();

              case 7:
                _yield$_this4$syncSer = _context2.sent;
                document = _yield$_this4$syncSer.document;
                session = _yield$_this4$syncSer.session;
                _this4.currentSession = session;
                _this4.document = document;
                _this4.readOnly = document.readOnly;
                localStorage.setItem('nick', _this4.currentSession.guestName);

                _this4.$store.dispatch('setCurrentSession', _this4.currentSession);

                _context2.next = 17;
                return _this4.syncService.getContent();

              case 17:
                _yield$_this4$syncSer2 = _context2.sent;
                documentSource = _yield$_this4$syncSer2.documentSource;
                _this4.hasConnectionIssue = false;
                content = _this4.isRichEditor ? _markdownit__WEBPACK_IMPORTED_MODULE_6__["default"].render(documentSource) : '<pre>' + escape_html__WEBPACK_IMPORTED_MODULE_0___default()(documentSource) + '</pre>';

                if (_this4.isRichEditor) {
                  _context2.next = 25;
                  break;
                }

                language = _helpers_mappings__WEBPACK_IMPORTED_MODULE_3__.extensionHighlight[_this4.fileExtension] || _this4.fileExtension;
                _context2.next = 25;
                return (0,_EditorFactory__WEBPACK_IMPORTED_MODULE_4__.loadSyntaxHighlight)(language);

              case 25:
                _this4.tiptap = (0,_EditorFactory__WEBPACK_IMPORTED_MODULE_4__.createEditor)({
                  content: content,
                  onCreate: function onCreate(_ref3) {
                    var editor = _ref3.editor;

                    _this4.$emit('update:state', editor.state);

                    _this4.syncService.startSync();
                  },
                  onUpdate: function onUpdate(_ref4) {
                    var editor = _ref4.editor;

                    _this4.$emit('update:state', editor.state);
                  },
                  extensions: [_extensions__WEBPACK_IMPORTED_MODULE_7__.Collaboration.configure({
                    // the initial version we start with
                    // version is an integer which is incremented with every change
                    version: _this4.document.initialVersion,
                    clientID: _this4.currentSession.id,
                    // debounce changes so we can save some bandwidth
                    debounce: EDITOR_PUSH_DEBOUNCE,
                    onSendable: function onSendable(_ref5) {
                      var sendable = _ref5.sendable;

                      if (_this4.syncService) {
                        _this4.syncService.sendSteps();
                      }
                    },
                    update: function update(_ref6) {
                      var steps = _ref6.steps,
                          version = _ref6.version,
                          editor = _ref6.editor;
                      var state = editor.state,
                          view = editor.view,
                          schema = editor.schema;

                      if ((0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_11__.getVersion)(state) > version) {
                        return;
                      }

                      var tr = (0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_11__.receiveTransaction)(state, steps.map(function (item) {
                        return prosemirror_transform__WEBPACK_IMPORTED_MODULE_12__.Step.fromJSON(schema, item.step);
                      }), steps.map(function (item) {
                        return item.clientID;
                      }));
                      tr.setMeta('clientID', steps.map(function (item) {
                        return item.clientID;
                      }));
                      view.dispatch(tr);
                    }
                  }), _extensions__WEBPACK_IMPORTED_MODULE_7__.Keymap.configure({
                    'Mod-s': function ModS() {
                      _this4.syncService.save();

                      return true;
                    }
                  }), _extensions__WEBPACK_IMPORTED_MODULE_7__.UserColor.configure({
                    clientID: _this4.currentSession.id,
                    color: function color(clientID) {
                      var session = _this4.sessions.find(function (item) {
                        return '' + item.id === '' + clientID;
                      });

                      return session === null || session === void 0 ? void 0 : session.color;
                    },
                    name: function name(clientID) {
                      var session = _this4.sessions.find(function (item) {
                        return '' + item.id === '' + clientID;
                      });

                      return session !== null && session !== void 0 && session.userId ? session.userId : session === null || session === void 0 ? void 0 : session.guestName;
                    }
                  })],
                  enableRichEditing: _this4.isRichEditor,
                  currentDirectory: _this4.currentDirectory
                });

                serialize = function serialize(doc) {
                  if (_this4.isRichEditor) {
                    return (0,_extensions_Markdown__WEBPACK_IMPORTED_MODULE_5__.createMarkdownSerializer)(_this4.schema).serialize(doc);
                  }

                  return (0,_EditorFactory__WEBPACK_IMPORTED_MODULE_4__.serializePlainText)(doc.toJSON());
                };

                _this4.$emit('update:serialize', serialize);

                _this4.tiptap.on('focus', function () {
                  _this4.$emit('focus');
                });

                _this4.tiptap.on('blur', function () {
                  _this4.$emit('blur');
                });

                _this4.$emit('update:state', _this4.tiptap.state);

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    resolveUseThisVersion: function resolveUseThisVersion() {
      this.syncService.forceSave();
      this.tiptap.setOptions({
        editable: !this.readOnly
      });
    },
    resolveUseServerVersion: function resolveUseServerVersion() {
      this.forceRecreate = true;
      this.reconnect();
    },
    reconnect: function reconnect() {
      var _this5 = this;

      this.initialLoading = false;
      this.hasConnectionIssue = false;

      if (this.syncService) {
        this.syncService.close().then(function () {
          _this5.tiptap.destroy();

          _this5.$emit('reconnect');
        }).catch(function (e) {// Ignore issues closing the session since those might happen due to network issues
        });
      } else {
        this.tiptap.destroy();
        this.$emit('reconnect');
      }

      this.idle = false;
    },
    updateSessions: function updateSessions(sessions) {
      var _this6 = this;

      this.sessions = sessions.sort(function (a, b) {
        return b.lastContact - a.lastContact;
      }); // Make sure we get our own session updated
      // This should ideally be part of a global store where we can have that updated on the actual name change for guests

      var currentUpdatedSession = this.sessions.find(function (session) {
        return session.id === _this6.currentSession.id;
      });
      vue__WEBPACK_IMPORTED_MODULE_14__["default"].set(this, 'currentSession', currentUpdatedSession);
      var currentSessionIds = this.sessions.map(function (session) {
        return session.userId;
      });
      var currentGuestIds = this.sessions.map(function (session) {
        return session.guestId;
      });
      var removedSessions = Object.keys(this.filteredSessions).filter(function (sessionId) {
        return !currentSessionIds.includes(sessionId) && !currentGuestIds.includes(sessionId);
      });

      for (var index in removedSessions) {
        vue__WEBPACK_IMPORTED_MODULE_14__["default"]["delete"](this.filteredSessions, removedSessions[index]);
      }

      for (var _index in this.sessions) {
        var session = this.sessions[_index];
        var sessionKey = session.displayName ? session.userId : session.id;

        if (this.filteredSessions[sessionKey]) {
          // update timestamp if relevant
          if (this.filteredSessions[sessionKey].lastContact < session.lastContact) {
            vue__WEBPACK_IMPORTED_MODULE_14__["default"].set(this.filteredSessions[sessionKey], 'lastContact', session.lastContact);
          }
        } else {
          vue__WEBPACK_IMPORTED_MODULE_14__["default"].set(this.filteredSessions, sessionKey, session);
        }

        if (session.id === this.currentSession.id) {
          vue__WEBPACK_IMPORTED_MODULE_14__["default"].set(this.filteredSessions[sessionKey], 'isCurrent', true);
        }
      }
    },
    showHelp: function showHelp() {
      this.displayHelp = true;
    },
    hideHelp: function hideHelp() {
      this.displayHelp = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/vue-2 */ "./node_modules/@tiptap/vue-2/dist/tiptap-vue-2.esm.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditorFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EditorFactory */ "./src/EditorFactory.js");
/* harmony import */ var _markdownit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../markdownit */ "./src/markdownit/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ReadOnlyEditor',
  components: {
    EditorContent: _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_3__.EditorContent
  },
  props: {
    content: {
      type: String,
      required: true
    },
    isRichEditor: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      editor: null
    };
  },
  mounted: function mounted() {
    this.editor = (0,_EditorFactory__WEBPACK_IMPORTED_MODULE_1__.createEditor)({
      content: this.isRichEditor ? _markdownit__WEBPACK_IMPORTED_MODULE_2__["default"].render(this.content) : '<pre>' + escape_html__WEBPACK_IMPORTED_MODULE_0___default()(this.content) + '</pre>',
      enableRichEditing: this.isRichEditor
    });
    this.editor.setOptions({
      editable: false
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/node-polyfill-webpack-plugin/node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js");
/* harmony import */ var _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/vue-2 */ "./node_modules/@tiptap/vue-2/dist/tiptap-vue-2.esm.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_material_design_icons_TrashCan_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/TrashCan.vue */ "./node_modules/vue-material-design-icons/TrashCan.vue");
/* harmony import */ var _mixins_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../mixins/store */ "./src/mixins/store.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var getQueryVariable = function getQueryVariable(src, variable) {
  var query = src.split('?')[1];

  if (typeof query === 'undefined') {
    return;
  }

  var vars = query.split(/[&#]/);

  if (typeof vars === 'undefined') {
    return;
  }

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ImageView',
  components: {
    TrashCanIcon: vue_material_design_icons_TrashCan_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    NodeViewWrapper: _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__.NodeViewWrapper
  },
  directives: {
    ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_3___default())
  },
  mixins: [_mixins_store__WEBPACK_IMPORTED_MODULE_5__["default"]],
  props: ['editor', 'node', 'extension', 'updateAttributes', 'deleteNode'],
  // eslint-disable-line
  data: function data() {
    return {
      imageLoaded: false,
      loaded: false,
      failed: false,
      showIcons: false
    };
  },
  computed: {
    currentSession: function currentSession() {
      return this.$store.state.currentSession;
    },
    davUrl: function davUrl() {
      if ((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()) {
        var uid = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)().uid;
        var encoded = encodeURI(this.filePath);
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)("dav/files/".concat(uid).concat(encoded));
      } else {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/s/{token}/download?path={dirname}&files={basename}', {
          token: this.token,
          dirname: this.extension.options.currentDirectory,
          basename: this.basename
        });
      }
    },
    imageUrl: function imageUrl() {
      if (this.src.startsWith('text://')) {
        var _this$currentSession, _this$currentSession2, _this$currentSession3;

        var documentId = (_this$currentSession = this.currentSession) === null || _this$currentSession === void 0 ? void 0 : _this$currentSession.documentId;
        var sessionId = (_this$currentSession2 = this.currentSession) === null || _this$currentSession2 === void 0 ? void 0 : _this$currentSession2.id;
        var sessionToken = (_this$currentSession3 = this.currentSession) === null || _this$currentSession3 === void 0 ? void 0 : _this$currentSession3.token;
        var imageFileName = getQueryVariable(this.src, 'imageFileName');

        if ((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)() || !this.token) {
          return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/text/image?documentId={documentId}&sessionId={sessionId}&sessionToken={sessionToken}&imageFileName={imageFileName}', {
            documentId: documentId,
            sessionId: sessionId,
            sessionToken: sessionToken,
            imageFileName: imageFileName
          });
        } else {
          return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/text/image?documentId={documentId}&sessionId={sessionId}&sessionToken={sessionToken}&imageFileName={imageFileName}&shareToken={shareToken}', {
            documentId: documentId,
            sessionId: sessionId,
            sessionToken: sessionToken,
            imageFileName: imageFileName,
            shareToken: this.token
          });
        }
      }

      if (this.isRemoteUrl || this.isPreviewUrl) {
        return this.src;
      }

      if (this.hasPreview && this.mime !== 'image/gif') {
        return this.previewUrl;
      }

      return this.davUrl;
    },
    isRemoteUrl: function isRemoteUrl() {
      return this.src.startsWith('http://') || this.src.startsWith('https://');
    },
    isPreviewUrl: function isPreviewUrl() {
      return this.src.match(/^(\/index.php)?\/core\/preview/) || this.src.match(/^(\/index.php)?\/apps\/files_sharing\/publicpreview\//);
    },
    basename: function basename() {
      return decodeURI(this.src.split('?')[0]);
    },
    fileId: function fileId() {
      return getQueryVariable(this.src, 'fileId');
    },
    filePath: function filePath() {
      var f = [this.extension.options.currentDirectory, this.basename].join('/');
      return path__WEBPACK_IMPORTED_MODULE_0___default().normalize(f);
    },
    hasPreview: function hasPreview() {
      return getQueryVariable(this.src, 'hasPreview') === 'true';
    },
    previewUrl: function previewUrl() {
      var fileQuery = this.fileId ? "?fileId=".concat(this.fileId, "&file=").concat(encodeURIComponent(this.filePath)) : "?file=".concat(encodeURIComponent(this.filePath));
      var query = fileQuery + '&x=1024&y=1024&a=true';

      if ((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()) {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/core/preview') + query;
      } else {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)("/apps/files_sharing/publicpreview/".concat(this.token).concat(query));
      }
    },
    mime: function mime() {
      return getQueryVariable(this.src, 'mimetype');
    },
    mimeIcon: function mimeIcon() {
      if (this.mime) {
        var mimeIconUrl = window.OC.MimeType.getIconUrl(this.mime);
        return {
          backgroundImage: "url(".concat(mimeIconUrl, ")")
        };
      }

      return {};
    },
    isSupportedImage: function isSupportedImage() {
      return typeof this.mime === 'undefined' || imageMimes.indexOf(this.mime) !== -1;
    },
    internalLinkOrImage: function internalLinkOrImage() {
      var fileId = getQueryVariable(this.src, 'fileId');

      if (fileId) {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/f/' + fileId);
      }

      return this.src;
    },
    src: {
      get: function get() {
        return this.node.attrs.src || '';
      },
      set: function set(src) {
        this.updateAttributes({
          src: src
        });
      }
    },
    alt: {
      get: function get() {
        return this.node.attrs.alt ? this.node.attrs.alt : '';
      },
      set: function set(alt) {
        this.updateAttributes({
          alt: alt
        });
      }
    },
    t: function t() {
      return function (a, s) {
        return window.t(a, s);
      };
    },
    token: function token() {
      return document.getElementById('sharingToken') && document.getElementById('sharingToken').value;
    }
  },
  beforeMount: function beforeMount() {
    var _this = this;

    if (!this.isSupportedImage) {
      // TODO check if hasPreview and render a file preview if available
      this.failed = true;
      this.imageLoaded = false;
      this.loaded = true;
      return;
    }

    var img = new Image();
    img.src = this.imageUrl;

    img.onload = function () {
      _this.imageLoaded = true;
    };

    img.onerror = function () {
      _this.failed = true;
      _this.imageLoaded = false;
      _this.loaded = true;
    };
  },
  methods: {
    updateAlt: function updateAlt() {
      this.alt = this.$refs.altInput.value;
    },
    onLoaded: function onLoaded() {
      var _this2 = this;

      this.loaded = true;
      this.$nextTick(function () {
        _this2.editor.commands.scrollIntoView();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/EditorWrapper */ "./src/components/EditorWrapper.vue");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
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


var log = vue__WEBPACK_IMPORTED_MODULE_1__["default"].observable({
  messages: [],
  mtime: 0
});

var callMobileMessage = function callMobileMessage(messageName, attributes) {
  console.debug('callMobileMessage ' + messageName, attributes);
  var message = messageName;

  if (typeof attributes !== 'undefined') {
    message = {
      MessageName: messageName,
      Values: attributes
    };
  }

  var attributesString = null;

  try {
    attributesString = JSON.stringify(attributes);
  } catch (e) {
    attributesString = null;
  } // Forward to mobile handler


  if (window.DirectEditingMobileInterface && typeof window.DirectEditingMobileInterface[messageName] === 'function') {
    if (attributesString === null || typeof attributesString === 'undefined') {
      window.DirectEditingMobileInterface[messageName]();
    } else {
      window.DirectEditingMobileInterface[messageName](attributesString);
    }
  } // iOS webkit fallback


  if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.DirectEditingMobileInterface) {
    window.webkit.messageHandlers.DirectEditingMobileInterface.postMessage(message);
  }

  window.postMessage(message);
};

window.addEventListener('message', function (message) {
  log.messages.push(message.data);
  console.debug('postMessage', message);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DirectEditing',
  components: {
    EditorWrapper: _components_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      initial: OCP.InitialState.loadState('text', 'file'),
      messages: log.messages,
      log: log,
      saving: false
    };
  },
  computed: {
    initialSession: function initialSession() {
      return JSON.parse(this.initial.session) || null;
    }
  },
  beforeMount: function beforeMount() {
    callMobileMessage('loading');
  },
  mounted: function mounted() {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
  },
  methods: {
    close: function close() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.saving = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this.$refs.editor.close();

                        case 2:
                          callMobileMessage('close');

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), 0);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    share: function share() {
      callMobileMessage('share');
    },
    loaded: function loaded() {
      callMobileMessage('loaded');
    }
  }
});

/***/ }),

/***/ "./src/EditorFactory.js":
/*!******************************!*\
  !*** ./src/EditorFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "createEditor": () => (/* binding */ createEditor),
/* harmony export */   "serializePlainText": () => (/* binding */ serializePlainText),
/* harmony export */   "loadSyntaxHighlight": () => (/* binding */ loadSyntaxHighlight)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-document */ "./node_modules/@tiptap/extension-document/dist/tiptap-extension-document.esm.js");
/* harmony import */ var _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/extension-paragraph */ "./node_modules/@tiptap/extension-paragraph/dist/tiptap-extension-paragraph.esm.js");
/* harmony import */ var _tiptap_extension_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/extension-text */ "./node_modules/@tiptap/extension-text/dist/tiptap-extension-text.esm.js");
/* harmony import */ var _tiptap_extension_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/extension-history */ "./node_modules/@tiptap/extension-history/dist/tiptap-extension-history.esm.js");
/* harmony import */ var _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/extension-blockquote */ "./node_modules/@tiptap/extension-blockquote/dist/tiptap-extension-blockquote.esm.js");
/* harmony import */ var _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/extension-placeholder */ "./node_modules/@tiptap/extension-placeholder/dist/tiptap-extension-placeholder.esm.js");
/* harmony import */ var _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/extension-ordered-list */ "./node_modules/@tiptap/extension-ordered-list/dist/tiptap-extension-ordered-list.esm.js");
/* harmony import */ var _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/extension-code-block */ "./node_modules/@tiptap/extension-code-block/dist/tiptap-extension-code-block.esm.js");
/* harmony import */ var _tiptap_extension_code_block_lowlight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tiptap/extension-code-block-lowlight */ "./node_modules/@tiptap/extension-code-block-lowlight/dist/tiptap-extension-code-block-lowlight.esm.js");
/* harmony import */ var _tiptap_extension_horizontal_rule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tiptap/extension-horizontal-rule */ "./node_modules/@tiptap/extension-horizontal-rule/dist/tiptap-extension-horizontal-rule.esm.js");
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var _marks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./marks */ "./src/marks/index.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes */ "./src/nodes/index.js");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extensions */ "./src/extensions/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var lowlight_lib_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lowlight/lib/core */ "./node_modules/lowlight/lib/core.js");
/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! proxy-polyfill */ "./node_modules/proxy-polyfill/src/index.js");
/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(proxy_polyfill__WEBPACK_IMPORTED_MODULE_15__);
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


















var loadSyntaxHighlight = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(language) {
    var list, syntax;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            list = (0,lowlight_lib_core__WEBPACK_IMPORTED_MODULE_14__.listLanguages)();
            console.info(list);

            if ((0,lowlight_lib_core__WEBPACK_IMPORTED_MODULE_14__.listLanguages)().includes(language)) {
              _context.next = 13;
              break;
            }

            _context.prev = 3;
            _context.next = 6;
            return __webpack_require__("./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$")("./" + language);

          case 6:
            syntax = _context.sent;
            (0,lowlight_lib_core__WEBPACK_IMPORTED_MODULE_14__.registerLanguage)(language, syntax.default);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            // No matching highlighing found, fallback to none
            console.debug(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));

  return function loadSyntaxHighlight(_x) {
    return _ref.apply(this, arguments);
  };
}();

var createEditor = function createEditor(_ref2) {
  var content = _ref2.content,
      onCreate = _ref2.onCreate,
      onUpdate = _ref2.onUpdate,
      extensions = _ref2.extensions,
      enableRichEditing = _ref2.enableRichEditing,
      currentDirectory = _ref2.currentDirectory;
  var richEditingExtensions = [];

  if (enableRichEditing) {
    richEditingExtensions = [_extensions__WEBPACK_IMPORTED_MODULE_12__.Markdown, _tiptap_extension_document__WEBPACK_IMPORTED_MODULE_0__["default"], _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], _nodes__WEBPACK_IMPORTED_MODULE_11__.Heading, _marks__WEBPACK_IMPORTED_MODULE_10__.Strong, _marks__WEBPACK_IMPORTED_MODULE_10__.Italic, _marks__WEBPACK_IMPORTED_MODULE_10__.Strike, _marks__WEBPACK_IMPORTED_MODULE_10__.Link.configure({
      openOnClick: true
    }), _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_4__["default"], _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_7__["default"], _nodes__WEBPACK_IMPORTED_MODULE_11__.BulletList, _tiptap_extension_horizontal_rule__WEBPACK_IMPORTED_MODULE_9__["default"], _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_6__["default"], _nodes__WEBPACK_IMPORTED_MODULE_11__.ListItem, _marks__WEBPACK_IMPORTED_MODULE_10__.Underline, _nodes__WEBPACK_IMPORTED_MODULE_11__.Image.configure({
      currentDirectory: currentDirectory,
      inline: true
    }), _extensions__WEBPACK_IMPORTED_MODULE_12__.Emoji, _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_5__["default"].configure({
      emptyNodeClass: 'is-empty',
      placeholder: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_13__.translate)('text', 'Add notes, lists or links …'),
      showOnlyWhenEditable: true
    }), _nodes__WEBPACK_IMPORTED_MODULE_11__.TrailingNode];
  } else {
    richEditingExtensions = [_nodes__WEBPACK_IMPORTED_MODULE_11__.PlainTextDocument, _tiptap_extension_code_block_lowlight__WEBPACK_IMPORTED_MODULE_8__["default"]];
  }

  extensions = extensions || [];
  return new _tiptap_core__WEBPACK_IMPORTED_MODULE_16__.Editor({
    content: content,
    onCreate: onCreate,
    onUpdate: onUpdate,
    extensions: [_tiptap_extension_text__WEBPACK_IMPORTED_MODULE_2__["default"], _tiptap_extension_history__WEBPACK_IMPORTED_MODULE_3__["default"]].concat(_toConsumableArray(richEditingExtensions)).concat(extensions)
  });
};

var SerializeException = function SerializeException(message) {
  this.message = message;
};

var serializePlainText = function serializePlainText(doc) {
  if (doc.content.length !== 1 || typeof doc.content[0].content === 'undefined' || doc.content[0].content.length !== 1) {
    if (doc.content[0].type === 'code_block' && typeof doc.content[0].content === 'undefined') {
      return '';
    }

    throw new SerializeException('Failed to serialize document to plain text');
  }

  var codeBlock = doc.content[0].content[0];

  if (codeBlock.type !== 'text') {
    throw new SerializeException('Failed to serialize document to plain text');
  }

  return codeBlock.text;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEditor);


/***/ }),

/***/ "./src/commands/index.js":
/*!*******************************!*\
  !*** ./src/commands/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listInputRule": () => (/* reexport safe */ _listInputRule__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _listInputRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listInputRule */ "./src/commands/listInputRule.js");
/*
 * @copyright Copyright (c) 2021 Jonas Meurer <jonas@freesources.org>
 *
 * @author Jonas Meurer <jonas@freesources.org>
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



/***/ }),

/***/ "./src/commands/listInputRule.js":
/*!***************************************!*\
  !*** ./src/commands/listInputRule.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/*
 * @copyright Copyright (c) 2021 Jonas Meurer <jonas@freesources.org>
 *
 * @author Jonas Meurer <jonas@freesources.org>
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

/**
 * Wrapping input handler that will append the content of the last match
 *
 * @param {RegExp} find find param for the wrapping input rule
 * @param {object} type Node Type object
 * @param {*} getAttributes handler to get the attributes
 */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(find, type, getAttributes) {
  var handler = function handler(_ref) {
    var state = _ref.state,
        range = _ref.range,
        match = _ref.match;
    var wrap = (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.wrappingInputRule)({
      find: find,
      type: type,
      getAttributes: getAttributes
    });
    wrap.handler({
      state: state,
      range: range,
      match: match
    }); // Insert the first character after bullet if there is one

    if (match.length >= 3) {
      state.tr.insertText(match[2]);
    }
  };

  return new _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.InputRule({
    find: find,
    handler: handler
  });
}

/***/ }),

/***/ "./src/extensions/Collaboration.js":
/*!*****************************************!*\
  !*** ./src/extensions/Collaboration.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.es.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/index.es.js");



var timeout;

var debounce = function debounce(fn, delay) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      fn.apply(void 0, args);
      timeout = null;
    }, delay);
  };
};

var Collaboration = _tiptap_core__WEBPACK_IMPORTED_MODULE_2__.Extension.create({
  name: 'collaboration',
  onCreate: function onCreate() {
    var _this = this;

    this.getSendableSteps = debounce(function (state) {
      var sendable = (0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_1__.sendableSteps)(state);

      if (sendable) {
        _this.options.onSendable({
          editor: _this.editor,
          sendable: {
            version: sendable.version,
            steps: sendable.steps.map(function (step) {
              return step.toJSON();
            }),
            clientID: sendable.clientID
          }
        });
      }
    }, this.options.debounce);
    this.editor.on('transaction', function (_ref) {
      var editor = _ref.editor;

      _this.getSendableSteps(editor.state);
    });
  },
  addOptions: function addOptions() {
    var _this2 = this;

    return {
      version: 0,
      clientID: Math.floor(Math.random() * 0xFFFFFFFF),
      debounce: 250,
      onSendable: function onSendable() {},
      update: function update(_ref2) {
        var steps = _ref2.steps,
            version = _ref2.version;
        var _this2$editor = _this2.editor,
            state = _this2$editor.state,
            view = _this2$editor.view,
            schema = _this2$editor.schema;

        if ((0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_1__.getVersion)(state) > version) {
          return;
        }

        view.dispatch((0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_1__.receiveTransaction)(state, steps.map(function (item) {
          return prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__.Step.fromJSON(schema, item.step);
        }), steps.map(function (item) {
          return item.clientID;
        })));
      }
    };
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    return [(0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_1__.collab)({
      version: this.options.version,
      clientID: this.options.clientID
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collaboration);

/***/ }),

/***/ "./src/extensions/Emoji.js":
/*!*********************************!*\
  !*** ./src/extensions/Emoji.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/*
 * @copyright Copyright (c) 2021 Jonas Meurer <jonas@freesources.org>
 *
 * @author Jonas Meurer <jonas@freesources.org>
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

var Emoji = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Extension.create({
  get name() {
    return 'emoji';
  },

  addCommands: function addCommands() {
    return {
      emoji: function emoji(_emoji) {
        return function (_ref) {
          var commands = _ref.commands;
          return commands.insertContent(_emoji);
        };
      }
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emoji);

/***/ }),

/***/ "./src/extensions/Keymap.js":
/*!**********************************!*\
  !*** ./src/extensions/Keymap.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
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


var Keymap = _tiptap_core__WEBPACK_IMPORTED_MODULE_1__.Extension.create({
  name: 'customkeymap',
  addKeyboardShortcuts: function addKeyboardShortcuts() {
    return this.options;
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Plugin({
      props: {
        handleKeyDown: function handleKeyDown(view, event) {
          var key = event.key || event.keyCode;

          if ((event.ctrlKey || event.metaKey) && !event.shiftKey && (key === 'f' || key === 70)) {
            // We need to stop propagation and dispatch the event on the window
            // in order to force triggering the browser native search in the text editor
            event.stopPropagation();
            window.dispatchEvent(event);
            return true;
          }
        }
      }
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keymap);

/***/ }),

/***/ "./src/extensions/Markdown.js":
/*!************************************!*\
  !*** ./src/extensions/Markdown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMarkdownSerializer": () => (/* binding */ createMarkdownSerializer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var prosemirror_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-markdown */ "./node_modules/prosemirror-markdown/dist/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @copyright Copyright (c) 2022 Max <max@nextcloud.com>
 *
 * @author Max <max@nextcloud.com>
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

/*
 * Tiptap extension to ease customize the serialization to markdown
 *
 * Most markdown serialization can be handled by `prosemirror-markdown`.
 * In order to make it easier to add custom markdown rendering
 * this extension will extend the prosemirror schema for nodes and marks
 * with a `toMarkdown` specification if that is defined in a tiptap extension.
 *
 * For nodes `toMarkown` should be function
 * that take a serializer state and such a node, and serializes the node.
 *
 * For marks `toMarkdown` is an object with open and close properties,
 * which hold the strings that should appear before and after.
 *
 * For more details see
 * https://github.com/ProseMirror/prosemirror-markdown#class-markdownserializer
 */


var Markdown = _tiptap_core__WEBPACK_IMPORTED_MODULE_1__.Extension.create({
  name: 'markdown',
  extendMarkSchema: function extendMarkSchema(extension) {
    var context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    return {
      toMarkdown: (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.getExtensionField)(extension, 'toMarkdown', context)
    };
  },
  extendNodeSchema: function extendNodeSchema(extension) {
    var context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    return {
      toMarkdown: (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.getExtensionField)(extension, 'toMarkdown', context)
    };
  }
});

var createMarkdownSerializer = function createMarkdownSerializer(_ref) {
  var nodes = _ref.nodes,
      marks = _ref.marks;
  var defaultNodes = convertNames(prosemirror_markdown__WEBPACK_IMPORTED_MODULE_0__.defaultMarkdownSerializer.nodes);
  var defaultMarks = convertNames(prosemirror_markdown__WEBPACK_IMPORTED_MODULE_0__.defaultMarkdownSerializer.marks);
  return {
    serializer: new prosemirror_markdown__WEBPACK_IMPORTED_MODULE_0__.MarkdownSerializer(_objectSpread(_objectSpread({}, defaultNodes), extractToMarkdown(nodes)), _objectSpread(_objectSpread({}, defaultMarks), extractToMarkdown(marks))),
    serialize: function serialize(content, options) {
      return this.serializer.serialize(content, _objectSpread(_objectSpread({}, options), {}, {
        tightLists: true
      })).split('\\[').join('[').split('\\]').join(']');
    }
  };
};

var extractToMarkdown = function extractToMarkdown(nodesOrMarks) {
  return Object.entries(nodesOrMarks).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        name = _ref3[0],
        nodeOrMark = _ref3[1];

    return [name, nodeOrMark.spec.toMarkdown];
  }).filter(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        toMarkdown = _ref5[1];

    return toMarkdown;
  }).reduce(function (items, _ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        name = _ref7[0],
        toMarkdown = _ref7[1];

    return _objectSpread(_objectSpread({}, items), {}, _defineProperty({}, name, toMarkdown));
  }, {});
};

var convertNames = function convertNames(object) {
  var convert = function convert(name) {
    return name.replace(/_(\w)/g, function (_m, letter) {
      return letter.toUpperCase();
    });
  };

  return Object.fromEntries(Object.entries(object).map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        name = _ref9[0],
        value = _ref9[1];

    return [convert(name), value];
  }));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Markdown);

/***/ }),

/***/ "./src/extensions/UserColor.js":
/*!*************************************!*\
  !*** ./src/extensions/UserColor.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
/* harmony import */ var prosemirror_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-view */ "./node_modules/prosemirror-view/dist/index.es.js");
/* harmony import */ var _tracking_TrackState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracking/TrackState */ "./src/extensions/tracking/TrackState.js");
/* harmony import */ var _tracking_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracking/models */ "./src/extensions/tracking/models.js");
/*
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
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





var UserColor = _tiptap_core__WEBPACK_IMPORTED_MODULE_4__.Extension.create({
  name: 'users',
  addOptions: function addOptions() {
    return {
      clientID: 0,
      color: function color(clientID) {
        return '#' + Math.floor(Math.abs(Math.sin(clientID) * 16777215) % 16777215).toString(16) + 'aa';
      },
      name: function name(clientID) {
        return 'Unknown user ' + clientID;
      }
    };
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Plugin({
      clientID: this.options.clientID,
      color: this.options.color,
      name: this.options.name,
      state: {
        init: function init(_, instance) {
          return {
            tracked: new _tracking_TrackState__WEBPACK_IMPORTED_MODULE_2__["default"]([new _tracking_models__WEBPACK_IMPORTED_MODULE_3__.Span(0, instance.doc.content.size, null)], [], [], []),
            deco: prosemirror_view__WEBPACK_IMPORTED_MODULE_1__.DecorationSet.empty
          };
        },
        apply: function apply(tr, instance, oldState, state) {
          var _this = this;

          var tracked = instance.tracked,
              decos = instance.decos;
          var tState = this.getState(oldState).tracked;

          if (tr.docChanged) {
            if (!tr.getMeta('clientID')) {
              // we have an undefined client id for own transactions
              tr.setMeta('clientID', tr.steps.map(function (i) {
                return _this.spec.clientID;
              }));
            }

            tracked = tracked.applyTransform(tr);
            tState = tracked;
          }

          decos = tState.blameMap.map(function (span) {
            var clientID = span.author;
            return prosemirror_view__WEBPACK_IMPORTED_MODULE_1__.Decoration.inline(span.from, span.to, {
              class: 'author-annotation',
              style: 'background-color: ' + _this.spec.color(clientID) + '66;',
              title: _this.spec.name(clientID)
            });
          }).filter(function (dec) {
            return dec !== null;
          });
          return {
            tracked: tracked,
            deco: prosemirror_view__WEBPACK_IMPORTED_MODULE_1__.DecorationSet.create(state.doc, decos)
          };
        }
      },
      props: {
        decorations: function decorations(state) {
          return this.getState(state).deco;
        }
      }
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserColor);

/***/ }),

/***/ "./src/extensions/index.js":
/*!*********************************!*\
  !*** ./src/extensions/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Emoji": () => (/* reexport safe */ _Emoji__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Keymap": () => (/* reexport safe */ _Keymap__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "UserColor": () => (/* reexport safe */ _UserColor__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Collaboration": () => (/* reexport safe */ _Collaboration__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Markdown": () => (/* reexport safe */ _Markdown__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji */ "./src/extensions/Emoji.js");
/* harmony import */ var _Keymap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keymap */ "./src/extensions/Keymap.js");
/* harmony import */ var _UserColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserColor */ "./src/extensions/UserColor.js");
/* harmony import */ var _Collaboration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Collaboration */ "./src/extensions/Collaboration.js");
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Markdown */ "./src/extensions/Markdown.js");
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







/***/ }),

/***/ "./src/extensions/tracking/TrackState.js":
/*!***********************************************!*\
  !*** ./src/extensions/tracking/TrackState.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrackState)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/extensions/tracking/models.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*
 * @copyright Copyright (c) 2021 Julius Härtl <jus@bitgrid.net>
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

/*
 * This code is heavily inspired by the change tracking example of prosemirror
 * https://github.com/ProseMirror/website/blob/master/example/track/index.js
 */

/**
 * @param {Array} map List of document ranges and corresponding authors
 * @param {object} transform ProseMirror transform object
 * @param {Array} clientIDs List of client IDs
 */

function updateBlameMap(map, transform, clientIDs) {
  var result = [];
  var mapping = transform.mapping;

  for (var i = 0; i < map.length; i++) {
    var span = map[i];
    var from = mapping.map(span.from, 1);
    var to = mapping.map(span.to, -1);
    if (from < to) result.push(new _models__WEBPACK_IMPORTED_MODULE_0__.Span(from, to, span.author));
  }

  var _loop = function _loop(_i) {
    var map = mapping.maps[_i];
    var after = mapping.slice(_i + 1);
    map.forEach(function (_s, _e, start, end) {
      insertIntoBlameMap(result, after.map(start, 1), after.map(end, -1), clientIDs[_i]);
    });
  };

  for (var _i = 0; _i < mapping.maps.length; _i++) {
    _loop(_i);
  }

  return result;
}
/**
 * @param {Array} map List of document ranges and corresponding authors
 * @param {number} from The lower bound of the selection's main range
 * @param {number} to The upper bound of the selection's main range
 * @param {number} author ClientID of the author
 */


function insertIntoBlameMap(map, from, to, author) {
  if (from >= to) {
    return;
  }

  var pos = 0;
  var next;

  for (; pos < map.length; pos++) {
    next = map[pos];

    if (next.author === author) {
      if (next.to >= from) break;
    } else if (next.to > from) {
      // Different author, not before
      if (next.from < from) {
        // Sticks out to the left (loop below will handle right side)
        var left = new _models__WEBPACK_IMPORTED_MODULE_0__.Span(next.from, from, next.author);
        if (next.to > to) map.splice(pos++, 0, left);else map[pos++] = left;
      }

      break;
    }
  } // eslint-ignore


  while (next = map[pos]) {
    if (next.author === author) {
      if (next.from > to) break;
      from = Math.min(from, next.from);
      to = Math.max(to, next.to);
      map.splice(pos, 1);
    } else {
      if (next.from >= to) break;

      if (next.to > to) {
        map[pos] = new _models__WEBPACK_IMPORTED_MODULE_0__.Span(to, next.to, next.author);
        break;
      } else {
        map.splice(pos, 1);
      }
    }
  }

  map.splice(pos, 0, new _models__WEBPACK_IMPORTED_MODULE_0__.Span(from, to, author));
}

var TrackState = /*#__PURE__*/function () {
  function TrackState(blameMap) {
    _classCallCheck(this, TrackState);

    // The blame map is a data structure that lists a sequence of
    // document ranges, along with the author that inserted them. This
    // can be used to, for example, highlight the part of the document
    // that was inserted by a author.
    this.blameMap = blameMap;
  } // Apply a transform to this state


  _createClass(TrackState, [{
    key: "applyTransform",
    value: function applyTransform(transform) {
      var _transform$getMeta;

      var clientID = (_transform$getMeta = transform.getMeta('clientID')) !== null && _transform$getMeta !== void 0 ? _transform$getMeta : transform.steps.map(function (item) {
        return 'self';
      });
      var newBlame = updateBlameMap(this.blameMap, transform, clientID); // Create a new state—since these are part of the editor state, a
      // persistent data structure, they must not be mutated.

      return new TrackState(newBlame);
    }
  }]);

  return TrackState;
}();



/***/ }),

/***/ "./src/extensions/tracking/models.js":
/*!*******************************************!*\
  !*** ./src/extensions/tracking/models.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Span": () => (/* binding */ Span)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
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
var Span = /*#__PURE__*/_createClass(function Span(from, to, author) {
  _classCallCheck(this, Span);

  this.from = from;
  this.to = to;
  this.author = author;
});

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "documentReady": () => (/* binding */ documentReady),
/* harmony export */   "endpointUrl": () => (/* binding */ endpointUrl),
/* harmony export */   "getRandomGuestName": () => (/* binding */ getRandomGuestName)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
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

/**
 * Callback that should be executed after the document is ready
 *
 * @param callback
 */


var documentReady = function documentReady(callback) {
  var fn = function fn() {
    return setTimeout(callback, 0);
  };

  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

var _baseUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/text');

var endpointUrl = function endpointUrl(endpoint) {
  var isPublic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isPublic) {
    return "".concat(_baseUrl, "/public/").concat(endpoint);
  }

  return "".concat(_baseUrl, "/").concat(endpoint);
};

var randomGuestNames = ['Artichoke', 'Arugula', 'Asparagus', 'Avocado', 'Bamboo Shoot', 'Bean Sprout', 'Bean', 'Beet', 'Belgian Endive', 'Bell Pepper', 'Bitter Melon', 'Bitter Gourd', 'Bok Choy', 'Broccoli', 'Brussels Sprout', 'Burdock Root', 'Cabbage', 'Calabash', 'Caper', 'Carrot', 'Cassava', 'Cauliflower', 'Celery', 'Celery Root', 'Celtuce', 'Chayote', 'Chinese Broccoli', 'Corn', 'Baby Corn', 'Cucumber', 'English Cucumber', 'Gherkin', 'Pickling Cucumber', 'Daikon Radish', 'Edamame', 'Eggplant', 'Elephant Garlic', 'Endive', 'Curly', 'Escarole', 'Fennel', 'Fiddlehead', 'Galangal', 'Garlic', 'Ginger', 'Grape Leave', 'Green Bean', 'Wax Bean', 'Green', 'Amaranth Leave', 'Beet Green', 'Collard Green', 'Dandelion Green', 'Kale', 'Kohlrabi Green', 'Mustard Green', 'Rapini', 'Spinach', 'Swiss Chard', 'Turnip Green', 'Hearts of Palm', 'Horseradish', 'Jerusalem Artichoke', 'Jícama', 'Kale', 'Curly', 'Lacinato', 'Ornamental', 'Kohlrabi', 'Leeks', 'Lemongrass', 'Lettuce', 'Butterhead', 'Iceberg', 'Leaf', 'Romaine', 'Lotus Root', 'Lotus Seed', 'Mushroom', 'Napa Cabbage', 'Nopales', 'Okra', 'Olive', 'Onion', 'Green Onion', 'Parsley', 'Parsley Root', 'Parsnip', 'Pepper', 'Plantain', 'Potato', 'Pumpkin', 'Purslane', 'Radicchio', 'Radish', 'Rutabaga', 'Shallots', 'Spinach', 'Squash', 'Sweet Potato', 'Swiss Chard', 'Taro', 'Tomatillo', 'Tomato', 'Turnip', 'Water Chestnut', 'Water Spinach', 'Watercress', 'Winter Melon', 'Yams', 'Zucchini'];

var getRandomGuestName = function getRandomGuestName() {
  return randomGuestNames[Math.floor(Math.random() * randomGuestNames.length)];
};



/***/ }),

/***/ "./src/helpers/links.js":
/*!******************************!*\
  !*** ./src/helpers/links.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domHref": () => (/* binding */ domHref),
/* harmony export */   "parseHref": () => (/* binding */ parseHref)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @copyright Copyright (c) 2020 Azul <azul@riseup.net>
 *
 * @author Azul <azul@riseup.net>
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


var absolutePath = function absolutePath(base, rel) {
  if (!rel) {
    return base;
  }

  if (rel[0] === '/') {
    return rel;
  }

  base = base.split('/');
  rel = rel.split('/');

  while (rel[0] === '..' || rel[0] === '.') {
    if (rel[0] === '..') {
      base.pop();
    }

    rel.shift();
  }

  return base.concat(rel).join('/');
};

var basedir = function basedir(file) {
  var end = file.lastIndexOf('/');
  return end > 0 ? file.slice(0, end) : file.slice(0, end + 1); // basedir('/toplevel') should return '/'
};

var domHref = function domHref(node) {
  var ref = node.attrs.href;

  if (!ref) {
    return ref;
  }

  if (ref.match(/^[a-zA-Z]*:/)) {
    return ref;
  }

  var match = ref.match(/^([^?]*)\?fileId=(\d+)/);

  if (match) {
    var _match = _slicedToArray(match, 3),
        relPath = _match[1],
        id = _match[2];

    var currentDir = basedir(OCA.Viewer.file);
    var dir = absolutePath(currentDir, basedir(relPath));
    return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/apps/files/?dir=".concat(dir, "&openfile=").concat(id, "#relPath=").concat(relPath));
  }
};

var parseHref = function parseHref(dom) {
  var ref = dom.getAttribute('href');

  if (!ref) {
    return ref;
  }

  var match = ref.match(/\?dir=([^&]*)&openfile=([^&]*)#relPath=([^&]*)/);

  if (match) {
    var _match2 = _slicedToArray(match, 4),
        id = _match2[2],
        path = _match2[3];

    return "".concat(path, "?fileId=").concat(id);
  }

  return ref;
};



/***/ }),

/***/ "./src/helpers/mappings.js":
/*!*********************************!*\
  !*** ./src/helpers/mappings.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extensionHighlight": () => (/* binding */ extensionHighlight)
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
var extensionHighlight = {
  py: 'python',
  gyp: 'python',
  wsgi: 'python',
  htm: 'html',
  xhtml: 'html',
  erl: 'erlang',
  jsp: 'java',
  pl: 'perl',
  rss: 'xml',
  atom: 'xml',
  xsl: 'xml',
  plist: 'xml',
  rb: 'ruby',
  builder: 'ruby',
  gemspec: 'ruby',
  podspec: 'ruby',
  thor: 'ruby',
  diff: 'patch',
  hs: 'haskell',
  icl: 'haskell',
  php3: 'php',
  php4: 'php',
  php5: 'php',
  php6: 'php',
  sh: 'bash',
  zsh: 'bash',
  st: 'smalltalk',
  as: 'actionscript',
  apacheconf: 'apache',
  osacript: 'applescript',
  b: 'brainfuck',
  bf: 'brainfuck',
  clj: 'clojure',
  'cmake.in': 'cmake',
  coffee: 'coffeescript',
  cson: 'coffescript',
  iced: 'coffescript',
  c: 'cpp',
  h: 'cpp',
  'c++': 'cpp',
  'h++': 'cpp',
  hh: 'cpp',
  jinja: 'django',
  bat: 'dos',
  cmd: 'dos',
  fs: 'fsharp',
  hbs: 'handlebars',
  'html.hbs': 'handlebars',
  'html.handlebars': 'handlebars',
  sublime_metrics: 'json',
  sublime_session: 'json',
  'sublime-keymap': 'json',
  'sublime-mousemap': 'json',
  'sublime-project': 'json',
  'sublime-settings': 'json',
  'sublime-workspace': 'json',
  js: 'javascript',
  mk: 'makefile',
  mak: 'makefile',
  md: 'markdown',
  mkdown: 'markdown',
  mkd: 'markdown',
  nginxconf: 'nginx',
  m: 'objectivec',
  mm: 'objectivec',
  ml: 'ocaml',
  rs: 'rust',
  sci: 'scilab',
  vb: 'vbnet',
  vbs: 'vbscript'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extensionHighlight);


/***/ }),

/***/ "./src/markdownit/index.js":
/*!*********************************!*\
  !*** ./src/markdownit/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-it-task-lists */ "./node_modules/markdown-it-task-lists/index.js");
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _underline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underline */ "./src/markdownit/underline.js");



var markdownit = markdown_it__WEBPACK_IMPORTED_MODULE_0___default()('commonmark', {
  html: false,
  breaks: false
}).enable('strikethrough').use((markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_1___default()), {
  enable: true,
  labelAfter: true
}).use(_underline__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markdownit);

/***/ }),

/***/ "./src/markdownit/underline.js":
/*!*************************************!*\
  !*** ./src/markdownit/underline.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ markdownUnderlines)
/* harmony export */ });
/*
 * @copyright Copyright (c) 2022 Max <max@nextcloud.com>
 *
 * @author Max <max@nextcloud.com>
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

/**
 * @param {object} md Markdown object
 */
function markdownUnderlines(md) {
  md.inline.ruler2.after('emphasis', 'underline', function (state) {
    var tokens = state.tokens;

    for (var i = tokens.length - 1; i > 0; i--) {
      var token = tokens[i];

      if (token.markup === '__') {
        if (token.type === 'strong_open') {
          tokens[i].tag = 'u';
          tokens[i].type = 'u_open';
        }

        if (token.type === 'strong_close') {
          tokens[i].tag = 'u';
          tokens[i].type = 'u_close';
        }
      }
    }

    return false;
  });
}

/***/ }),

/***/ "./src/marks/Link.js":
/*!***************************!*\
  !*** ./src/marks/Link.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-link */ "./node_modules/@tiptap/extension-link/dist/tiptap-extension-link.esm.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
/* harmony import */ var _helpers_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/links */ "./src/helpers/links.js");
/* harmony import */ var _markdownit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../markdownit */ "./src/markdownit/index.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @copyright Copyright (c) 2019 Azul <azul@riseup.net>
 *
 * @author Azul <azul@riseup.net>
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




var Link = _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  attrs: {
    href: {
      default: null
    }
  },
  inclusive: false,
  parseDOM: [{
    tag: 'a[href]',
    getAttrs: function getAttrs(dom) {
      return {
        href: (0,_helpers_links__WEBPACK_IMPORTED_MODULE_2__.parseHref)(dom)
      };
    }
  }],
  toDOM: function toDOM(node) {
    return ['a', _objectSpread(_objectSpread({}, node.attrs), {}, {
      href: (0,_helpers_links__WEBPACK_IMPORTED_MODULE_2__.domHref)(node),
      title: node.attrs.href,
      rel: 'noopener noreferrer nofollow'
    }), 0];
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    var _this = this;

    if (!this.options.openOnClick) {
      return [];
    }

    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({
      props: {
        handleClick: function handleClick(view, pos, event) {
          var attrs = _this.editor.getAttributes('link');

          var isLink = event.target instanceof HTMLAnchorElement || event.target.parentElement instanceof HTMLAnchorElement;

          if (attrs.href && isLink) {
            var linkElement = event.target.parentElement instanceof HTMLAnchorElement ? event.target.parentElement : event.target;
            event.stopPropagation();
            var htmlHref = linkElement.href;

            if (event.button === 0 && !event.ctrlKey && htmlHref.startsWith(window.location.origin)) {
              var query = OC.parseQueryString(htmlHref);
              var fragment = OC.parseQueryString(htmlHref.split('#').pop());

              if (query.dir && fragment.relPath) {
                var filename = fragment.relPath.split('/').pop();
                var path = "".concat(query.dir, "/").concat(filename);
                document.title = "".concat(filename, " - ").concat(OC.theme.title);

                if (window.location.pathname.match(/apps\/files\/$/)) {// The files app still lacks a popState handler
                  // to allow for using the back button
                  // OC.Util.History.pushState('', htmlHref)
                }

                OCA.Viewer.open({
                  path: path
                });
                return;
              }
            }

            if (!_markdownit__WEBPACK_IMPORTED_MODULE_3__["default"].validateLink(htmlHref)) {
              console.error('Invalid link', htmlHref);
              return;
            }

            window.open(htmlHref);
          }
        }
      }
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ "./src/marks/Strike.js":
/*!*****************************!*\
  !*** ./src/marks/Strike.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-strike */ "./node_modules/@tiptap/extension-strike/dist/tiptap-extension-strike.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  parseHTML: function parseHTML() {
    return [{
      tag: 's'
    }, {
      tag: 'del'
    }, {
      tag: 'strike'
    }, {
      style: 'text-decoration',
      getAttrs: function getAttrs(value) {
        return value === 'line-through';
      }
    }];
  },
  renderHTML: function renderHTML() {
    return ['s', 0];
  },

  /** Strike is currently unsupported by prosemirror-markdown */
  toMarkdown: {
    open: '~~',
    close: '~~',
    mixable: true,
    expelEnclosingWhitespace: true
  }
}));

/***/ }),

/***/ "./src/marks/Strong.js":
/*!*****************************!*\
  !*** ./src/marks/Strong.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-bold */ "./node_modules/@tiptap/extension-bold/dist/tiptap-extension-bold.esm.js");
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


var Strong = _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_0__.Bold.extend({
  name: 'strong',
  addInputRules: function addInputRules() {
    return [(0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.markInputRule)({
      find: _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_0__.starInputRegex,
      type: this.type
    })];
  },
  addPasteRules: function addPasteRules() {
    return [(0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.markPasteRule)({
      find: _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_0__.starPasteRegex,
      type: this.type
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strong);

/***/ }),

/***/ "./src/marks/Underline.js":
/*!********************************!*\
  !*** ./src/marks/Underline.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-underline */ "./node_modules/@tiptap/extension-underline/dist/tiptap-extension-underline.esm.js");
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/extension-bold */ "./node_modules/@tiptap/extension-bold/dist/tiptap-extension-bold.esm.js");
/*
 * @copyright Copyright (c) 2022 Max <max@nextcloud.com>
 *
 * @author Max <max@nextcloud.com>
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



var Underline = _tiptap_extension_underline__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  parseHTML: function parseHTML() {
    return [{
      tag: 'u'
    }, {
      style: 'text-decoration',
      getAttrs: function getAttrs(value) {
        return value === 'underline';
      }
    }];
  },
  renderHTML: function renderHTML() {
    return ['u', 0];
  },
  toMarkdown: {
    open: '__',
    close: '__',
    mixable: true,
    expelEnclosingWhitespace: true
  },
  addInputRules: function addInputRules() {
    return [(0,_tiptap_core__WEBPACK_IMPORTED_MODULE_2__.markInputRule)({
      find: _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_1__.underscoreInputRegex,
      type: this.type
    })];
  },
  addPasteRules: function addPasteRules() {
    return [(0,_tiptap_core__WEBPACK_IMPORTED_MODULE_2__.markPasteRule)({
      find: _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_1__.underscorePasteRegex,
      type: this.type
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Underline);

/***/ }),

/***/ "./src/marks/index.js":
/*!****************************!*\
  !*** ./src/marks/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strong": () => (/* reexport safe */ _Strong__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Italic": () => (/* binding */ Italic),
/* harmony export */   "Strike": () => (/* reexport safe */ _Strike__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Link": () => (/* reexport safe */ _Link__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Underline": () => (/* reexport safe */ _Underline__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-italic */ "./node_modules/@tiptap/extension-italic/dist/tiptap-extension-italic.esm.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./src/marks/Link.js");
/* harmony import */ var _Strike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strike */ "./src/marks/Strike.js");
/* harmony import */ var _Strong__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strong */ "./src/marks/Strong.js");
/* harmony import */ var _Underline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Underline */ "./src/marks/Underline.js");
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





var Italic = _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'em'
});


/***/ }),

/***/ "./src/mixins/isMobile.js":
/*!********************************!*\
  !*** ./src/mixins/isMobile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isMobile: this._isMobile()
    };
  },
  beforeMount: function beforeMount() {
    window.addEventListener('resize', this._onResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this._onResize);
  },
  methods: {
    _onResize: function _onResize() {
      // Update mobile mode
      this.isMobile = this._isMobile();
    },
    _isMobile: function _isMobile() {
      // check if content width is under 768px
      return document.documentElement.clientWidth < 768;
    }
  }
});

/***/ }),

/***/ "./src/mixins/store.js":
/*!*****************************!*\
  !*** ./src/mixins/store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store.js");
/*
 * @copyright Copyright (c) 2021 Julius Härtl <jus@bitgrid.net>
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

/**
 * This mixin is required since we cannot be sure that the root Vue instance has
 * registered the global store. This might be the case if the text app components
 * are mounted in other apps e.g. viewer
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      $store: _store__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
  },
  beforeMount: function beforeMount() {
    if (typeof this.$store === 'undefined') {
      this.$store = _store__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }
});

/***/ }),

/***/ "./src/nodes/BulletList.js":
/*!*********************************!*\
  !*** ./src/nodes/BulletList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-bullet-list */ "./node_modules/@tiptap/extension-bullet-list/dist/tiptap-extension-bullet-list.esm.js");
/*
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
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

/* We want to allow for mixed lists with todo items and bullet points.
 * Therefore the list input rules are handled in the ListItem node.
 * This way we can make sure that "- [ ]" can still trigger todo list items
 * even inside a list with bullet points.
 */

var BulletList = _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  addInputRules: function addInputRules() {
    return [];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulletList);

/***/ }),

/***/ "./src/nodes/Heading.js":
/*!******************************!*\
  !*** ./src/nodes/Heading.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-heading */ "./node_modules/@tiptap/extension-heading/dist/tiptap-extension-heading.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Heading = _tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  addKeyboardShortcuts: function addKeyboardShortcuts() {
    var _this = this;

    return this.options.levels.reduce(function (items, level) {
      return _objectSpread(_objectSpread({}, items), {}, _defineProperty({}, "Mod-Shift-".concat(level), function ModShift() {
        return _this.editor.commands.toggleHeading({
          level: level
        });
      }));
    }, {});
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);

/***/ }),

/***/ "./src/nodes/Image.js":
/*!****************************!*\
  !*** ./src/nodes/Image.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-image */ "./node_modules/@tiptap/extension-image/dist/tiptap-extension-image.esm.js");
/* harmony import */ var _ImageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageView */ "./src/nodes/ImageView.vue");
/* harmony import */ var _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/vue-2 */ "./node_modules/@tiptap/vue-2/dist/tiptap-vue-2.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



var Image = _tiptap_extension_image__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  selectable: false,
  addOptions: function addOptions() {
    var _this$parent;

    return _objectSpread(_objectSpread({}, (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.call(this)), {}, {
      currentDirectory: undefined
    });
  },
  addNodeView: function addNodeView() {
    return (0,_tiptap_vue_2__WEBPACK_IMPORTED_MODULE_2__.VueNodeViewRenderer)(_ImageView__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./src/nodes/ListItem.js":
/*!*******************************!*\
  !*** ./src/nodes/ListItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-list-item */ "./node_modules/@tiptap/extension-list-item/dist/tiptap-extension-list-item.esm.js");
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
/* harmony import */ var prosemirror_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-utils */ "./node_modules/prosemirror-utils/dist/index.js");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commands */ "./src/commands/index.js");
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





var TYPES = {
  BULLET: 0,
  CHECKBOX: 1
};

var getParentList = function getParentList(schema, selection) {
  return (0,prosemirror_utils__WEBPACK_IMPORTED_MODULE_2__.findParentNode)(function (node) {
    return node.type === schema.nodes.listItem;
  })(selection);
};

var ListItem = _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  addOptions: function addOptions() {
    return {
      nested: true
    };
  },
  addAttributes: function addAttributes() {
    return {
      done: {
        default: false
      },
      type: {
        default: TYPES.BULLET
      }
    };
  },
  draggable: false,
  content: 'paragraph block*',
  renderHTML: function renderHTML(_ref) {
    var node = _ref.node,
        HTMLAttributes = _ref.HTMLAttributes;

    if (node.attrs.type === TYPES.BULLET) {
      return ['li', HTMLAttributes, 0];
    }

    var listAttributes = {
      class: 'checkbox-item'
    };
    var checkboxAttributes = {
      type: 'checkbox',
      class: '',
      contenteditable: false
    };

    if (node.attrs.done) {
      checkboxAttributes.checked = true;
      listAttributes.class += ' checked';
    }

    return ['li', (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_4__.mergeAttributes)(HTMLAttributes, listAttributes), ['input', checkboxAttributes], ['label', 0]];
  },
  parseHTML: [{
    priority: 100,
    tag: 'li',
    getAttrs: function getAttrs(el) {
      var checkbox = el.querySelector('input[type=checkbox]');
      return {
        done: checkbox && checkbox.checked,
        type: checkbox ? TYPES.CHECKBOX : TYPES.BULLET
      };
    }
  }],
  toMarkdown: function toMarkdown(state, node) {
    if (node.attrs.type === TYPES.CHECKBOX) {
      state.write("[".concat(node.attrs.done ? 'x' : ' ', "] "));
    }

    state.renderContent(node);
  },
  addCommands: function addCommands() {
    return {
      bulletListItem: function bulletListItem() {
        return function (_ref2) {
          var commands = _ref2.commands;
          return commands.toggleList('bulletList', 'listItem');
        };
      },
      // TODO: understand this, maybe fix it and / or tweak it.
      todo_item: function todo_item() {
        return function (_ref3) {
          var chain = _ref3.chain,
              commands = _ref3.commands,
              state = _ref3.state;
          var schema = state.schema;
          var selection = state.selection;
          var $from = selection.$from;
          var $to = selection.$to;
          var range = $from.blockRange($to);

          if (!range) {
            return false;
          }

          var parentList = getParentList(schema, selection);
          var start = typeof parentList === 'undefined' ? chain().bulletListItem() : chain();
          start.command(function (_ref4) {
            var tr = _ref4.tr;

            if (typeof parentList === 'undefined') {
              parentList = getParentList(schema, tr.selection);
            }

            if (typeof parentList === 'undefined') {
              return false;
            }

            if (parentList.node.attrs.type === TYPES.CHECKBOX) {
              return commands.toggleList('bulletList', 'listItem');
            }

            tr.doc.nodesBetween(tr.selection.from, tr.selection.to, function (node, pos) {
              if (node.type === schema.nodes.listItem) {
                tr.setNodeMarkup(pos, node.type, {
                  type: parentList.node.attrs.type === TYPES.CHECKBOX ? TYPES.BULLET : TYPES.CHECKBOX
                });
              }
            });
            tr.scrollIntoView();
          }).run();
          return true;
        };
      }
    };
  },
  addInputRules: function addInputRules() {
    return [(0,_tiptap_core__WEBPACK_IMPORTED_MODULE_4__.wrappingInputRule)({
      find: /^\s*([-+*])\s(\[(x|X| ?)\])\s$/,
      type: this.type,
      getAttributes: function getAttributes(match) {
        return {
          type: TYPES.CHECKBOX,
          done: 'xX'.includes(match[match.length - 1])
        };
      }
    }), (0,_commands__WEBPACK_IMPORTED_MODULE_3__.listInputRule)(/^\s*([-+*])\s([^\s[])$/, this.type, function (_match) {
      return {
        type: TYPES.BULLET
      };
    })];
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({
      props: {
        handleClick: function handleClick(view, pos, event) {
          var state = view.state;
          var schema = state.schema;
          var coordinates = view.posAtCoords({
            left: event.clientX,
            top: event.clientY
          });
          var position = state.doc.resolve(coordinates.pos);
          var parentList = (0,prosemirror_utils__WEBPACK_IMPORTED_MODULE_2__.findParentNodeClosestToPos)(position, function (node) {
            return node.type === schema.nodes.listItem;
          });
          var isListClicked = event.target.tagName.toLowerCase() === 'li';

          if (typeof parentList === 'undefined' || parentList.node.attrs.type !== TYPES.CHECKBOX || !isListClicked) {
            return;
          }

          var tr = state.tr;
          tr.setNodeMarkup(parentList.pos, schema.nodes.listItem, {
            done: !parentList.node.attrs.done,
            type: TYPES.CHECKBOX
          });
          view.dispatch(tr);
        }
      }
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./src/nodes/PlainTextDocument.js":
/*!****************************************!*\
  !*** ./src/nodes/PlainTextDocument.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Node.create({
  name: 'doc',
  content: 'block',
  addKeyboardShortcuts: function addKeyboardShortcuts() {
    var _this = this;

    return {
      Tab: function Tab() {
        return _this.editor.commands.insertContent('\t');
      }
    };
  }
}));

/***/ }),

/***/ "./src/nodes/TrailingNode.js":
/*!***********************************!*\
  !*** ./src/nodes/TrailingNode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @copyright Copyright (c) 2021, überdosis GbR
 *
 * @license MIT
 *
 */


/**
 * @param {object} args Arguments as deconstructable object
 * @param {Array | object} args.types possible types
 * @param {object} args.node node to check
 */

function nodeEqualsType(_ref) {
  var types = _ref.types,
      node = _ref.node;
  return Array.isArray(types) && types.includes(node.type) || node.type === types;
}
/**
 * Extension based on:
 * - https://github.com/ueberdosis/tiptap/tree/main/demos/src/Experiments/TrailingNode
 * - https://github.com/ueberdosis/tiptap/blob/v1/packages/tiptap-extensions/src/extensions/TrailingNode.js
 * - https://github.com/remirror/remirror/blob/e0f1bec4a1e8073ce8f5500d62193e52321155b9/packages/prosemirror-trailing-node/src/trailing-node-plugin.ts
 */


var TrailingNode = _tiptap_core__WEBPACK_IMPORTED_MODULE_1__.Extension.create({
  name: 'trailingNode',
  addOptions: function addOptions() {
    return {
      node: 'paragraph',
      notAfter: ['paragraph']
    };
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    var _this = this;

    var plugin = new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.PluginKey(this.name);
    var disabledNodes = Object.entries(this.editor.schema.nodes).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          value = _ref3[1];

      return value;
    }).filter(function (node) {
      return _this.options.notAfter.includes(node.name);
    });
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__.Plugin({
      key: plugin,
      appendTransaction: function appendTransaction(_, __, state) {
        var doc = state.doc,
            tr = state.tr,
            schema = state.schema;
        var shouldInsertNodeAtEnd = plugin.getState(state);
        var endPosition = doc.content.size;
        var type = schema.nodes[_this.options.node];

        if (!shouldInsertNodeAtEnd) {
          return;
        }

        return tr.insert(endPosition, type.create());
      },
      state: {
        init: function init(_, state) {
          var lastNode = state.tr.doc.lastChild;
          return !nodeEqualsType({
            node: lastNode,
            types: disabledNodes
          });
        },
        apply: function apply(tr, value) {
          if (!tr.docChanged) {
            return value;
          }

          var lastNode = tr.doc.lastChild;
          return !nodeEqualsType({
            node: lastNode,
            types: disabledNodes
          });
        }
      }
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrailingNode);

/***/ }),

/***/ "./src/nodes/index.js":
/*!****************************!*\
  !*** ./src/nodes/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "PlainTextDocument": () => (/* reexport safe */ _PlainTextDocument__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ListItem": () => (/* reexport safe */ _ListItem__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "BulletList": () => (/* reexport safe */ _BulletList__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "TrailingNode": () => (/* reexport safe */ _TrailingNode__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Heading": () => (/* reexport safe */ _Heading__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/nodes/Image.js");
/* harmony import */ var _PlainTextDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlainTextDocument */ "./src/nodes/PlainTextDocument.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem */ "./src/nodes/ListItem.js");
/* harmony import */ var _BulletList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BulletList */ "./src/nodes/BulletList.js");
/* harmony import */ var _TrailingNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrailingNode */ "./src/nodes/TrailingNode.js");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading */ "./src/nodes/Heading.js");
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








/***/ }),

/***/ "./src/services/PollingBackend.js":
/*!****************************************!*\
  !*** ./src/services/PollingBackend.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _SyncService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SyncService */ "./src/services/SyncService.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/index.es.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




/**
 * Minimum inverval to refetch the document changes
 *
 * @type {number} time in ms
 */

var FETCH_INTERVAL = 300;
/**
 * Maximum interval between refetches of document state if multiple users have joined
 *
 * @type {number} time in ms
 */

var FETCH_INTERVAL_MAX = 5000;
/**
 * Interval to check for changes when there is only one user joined
 *
 * @type {number} time in ms
 */

var FETCH_INTERVAL_SINGLE_EDITOR = 5000;
/**
 * Interval to fetch for changes when a browser window is considered invisible by the
 * page visibility API https://developer.mozilla.org/de/docs/Web/API/Page_Visibility_API
 *
 * @type {number} time in ms
 */

var FETCH_INTERVAL_INVISIBLE = 60000;
var MIN_PUSH_RETRY = 500;
var MAX_PUSH_RETRY = 10000;
/* Timeout after that a PUSH_FAILURE error is emitted */

var WARNING_PUSH_RETRY = 5000;
/* Maximum number of retries for fetching before emitting a connection error */

var MAX_RETRY_FETCH_COUNT = 5;
/**
 * Timeout for sessions to be marked as disconnected
 * Make sure that this is higher than any FETCH_INTERVAL_ values
 */

var COLLABORATOR_DISCONNECT_TIME = FETCH_INTERVAL_INVISIBLE * 1.5;

var PollingBackend = /*#__PURE__*/function () {
  function PollingBackend(authority) {
    _classCallCheck(this, PollingBackend);

    /** @type {SyncService} */
    this._authority = authority;
    this.fetchInterval = FETCH_INTERVAL;
    this.retryTime = MIN_PUSH_RETRY;
    this.lock = false;
    this.fetchRetryCounter = 0;
  }

  _createClass(PollingBackend, [{
    key: "connect",
    value: function connect() {
      this.initialLoadingFinished = false;
      this.fetcher = setInterval(this._fetchSteps.bind(this), 50);
      document.addEventListener('visibilitychange', this.visibilitychange.bind(this));
    }
  }, {
    key: "_isPublic",
    value: function _isPublic() {
      return !!this._authority.options.shareToken;
    }
  }, {
    key: "forceSave",
    value: function forceSave() {
      this._forcedSave = true;
      this.fetchSteps();
    }
  }, {
    key: "save",
    value: function save() {
      this._manualSave = true;
      this.fetchSteps();
    }
  }, {
    key: "fetchSteps",
    value: function fetchSteps() {
      this._fetchSteps();
    }
    /**
     * This method is only called though the timer
     */

  }, {
    key: "_fetchSteps",
    value: function _fetchSteps() {
      if (this.lock || !this.fetcher) {
        return;
      }

      this.lock = true;
      var autosaveContent;

      if (this._forcedSave || this._manualSave || !(0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__.sendableSteps)(this._authority.state) && this._authority._getVersion() !== this._authority.document.lastSavedVersion) {
        autosaveContent = this._authority._getContent();
      }

      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.endpointUrl)('session/sync', this._isPublic()), {
        documentId: this._authority.document.id,
        sessionId: this._authority.session.id,
        sessionToken: this._authority.session.token,
        version: this._authority._getVersion(),
        autosaveContent: autosaveContent,
        force: !!this._forcedSave,
        manualSave: !!this._manualSave,
        token: this._authority.options.shareToken,
        filePath: this._authority.options.filePath
      }).then(this._handleResponse.bind(this), this._handleError.bind(this));
      this._manualSave = false;
      this._forcedSave = false;
    }
  }, {
    key: "_handleResponse",
    value: function _handleResponse(response) {
      this.fetchRetryCounter = 0;

      if (this._authority.document.lastSavedVersion < response.data.document.lastSavedVersion) {
        console.debug('Saved document', response.data.document);

        this._authority.emit('save', {
          document: response.data.document,
          sessions: response.data.sessions
        });
      }

      this._authority.emit('change', {
        document: response.data.document,
        sessions: response.data.sessions
      });

      this._authority.document = response.data.document;
      this._authority.sessions = response.data.sessions;

      if (response.data.steps.length === 0) {
        if (!this.initialLoadingFinished) {
          this.initialLoadingFinished = true;
        }

        if (this._authority.checkIdle()) {
          return;
        }

        this.lock = false;

        if (response.data.sessions.filter(function (session) {
          return session.lastContact > Date.now() / 1000 - COLLABORATOR_DISCONNECT_TIME;
        }).length < 2) {
          this.maximumRefetchTimer();
        } else {
          this.increaseRefetchTimer();
        }

        this._authority.emit('stateChange', {
          dirty: false
        });

        this._authority.emit('stateChange', {
          initialLoading: true
        });

        return;
      }

      this._authority._receiveSteps(response.data);

      this.lock = false;
      this._forcedSave = false;

      if (this.initialLoadingFinished) {
        this.resetRefetchTimer();
      }
    }
  }, {
    key: "_handleError",
    value: function _handleError(e) {
      this.lock = false;

      if (!e.response || e.code === 'ECONNABORTED') {
        if (this.fetchRetryCounter++ >= MAX_RETRY_FETCH_COUNT) {
          console.error('[PollingBackend:fetchSteps] Network error when fetching steps, emitting CONNECTION_FAILED');

          this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED, {
            retry: false
          });
        } else {
          console.error("[PollingBackend:fetchSteps] Network error when fetching steps, retry ".concat(this.fetchRetryCounter));
        }
      } else if (e.response.status === 409 && e.response.data.document.currentVersion === this._authority.document.currentVersion) {
        // Only emit conflict event if we have synced until the latest version
        console.error('Conflict during file save, please resolve');

        this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SAVE_COLLISSION, {
          outsideChange: e.response.data.outsideChange
        });
      } else if (e.response.status === 403) {
        this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SOURCE_NOT_FOUND, {});

        this.disconnect();
      } else if (e.response.status === 404) {
        this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SOURCE_NOT_FOUND, {});

        this.disconnect();
      } else if (e.response.status === 503) {
        this.increaseRefetchTimer();

        this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED, {
          retry: false
        });

        console.error('Failed to fetch steps due to unavailable service', e);
      } else {
        this.disconnect();

        this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED, {
          retry: false
        });

        console.error('Failed to fetch steps due to other reason', e);
      }
    }
  }, {
    key: "sendSteps",
    value: function sendSteps(_sendable) {
      var _this = this;

      this._authority.emit('stateChange', {
        dirty: true
      });

      if (this.lock) {
        setTimeout(function () {
          _this._authority.sendSteps();
        }, 100);
        return;
      }

      this.lock = true;
      var sendable = typeof _sendable === 'function' ? _sendable() : _sendable;
      var steps = sendable.steps;
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.endpointUrl)('session/push', !!this._authority.options.shareToken), {
        documentId: this._authority.document.id,
        sessionId: this._authority.session.id,
        sessionToken: this._authority.session.token,
        steps: steps.map(function (s) {
          return s.toJSON ? s.toJSON() : s;
        }) || [],
        version: sendable.version,
        token: this._authority.options.shareToken,
        filePath: this._authority.options.filePath
      }).then(function (response) {
        _this.carefulRetryReset();

        _this.lock = false;

        _this.fetchSteps();
      }).catch(function (e) {
        console.error('failed to apply steps due to collission, retrying');
        _this.lock = false;

        if (!e.response || e.code === 'ECONNABORTED') {
          _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED, {});

          return;
        } else if (e.response.status === 403 && e.response.data.document.currentVersion === _this._authority.document.currentVersion) {
          // Only emit conflict event if we have synced until the latest version
          _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.PUSH_FAILURE, {});

          OC.Notification.showTemporary('Changes could not be sent yet');
        }

        _this.fetchSteps();

        _this.carefulRetry();
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      clearInterval(this.fetcher);
      this.fetcher = 0;
      document.removeEventListener('visibilitychange', this.visibilitychange.bind(this));
    }
  }, {
    key: "resetRefetchTimer",
    value: function resetRefetchTimer() {
      if (this.fetcher === 0) {
        return;
      }

      this.fetchInterval = FETCH_INTERVAL;
      clearInterval(this.fetcher);
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInterval);
    }
  }, {
    key: "increaseRefetchTimer",
    value: function increaseRefetchTimer() {
      if (this.fetcher === 0) {
        return;
      }

      this.fetchInterval = Math.min(this.fetchInterval * 2, FETCH_INTERVAL_MAX);
      clearInterval(this.fetcher);
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInterval);
    }
  }, {
    key: "maximumRefetchTimer",
    value: function maximumRefetchTimer() {
      if (this.fetcher === 0) {
        return;
      }

      this.fetchInterval = FETCH_INTERVAL_SINGLE_EDITOR;
      clearInterval(this.fetcher);
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInterval);
    }
  }, {
    key: "visibilitychange",
    value: function visibilitychange() {
      if (this.fetcher === 0) {
        return;
      }

      if (document.visibilityState === 'hidden') {
        this.fetchInterval = FETCH_INTERVAL_INVISIBLE;
        clearInterval(this.fetcher);
        this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInterval);
      } else {
        this.resetRefetchTimer();
      }
    }
  }, {
    key: "carefulRetry",
    value: function carefulRetry() {
      var newRetry = this.retryTime ? Math.min(this.retryTime * 2, MAX_PUSH_RETRY) : MIN_PUSH_RETRY;

      if (newRetry > WARNING_PUSH_RETRY && this.retryTime < WARNING_PUSH_RETRY) {
        OC.Notification.showTemporary('Changes could not be sent yet');

        this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.PUSH_FAILURE, {});
      }

      this.retryTime = newRetry;
    }
  }, {
    key: "carefulRetryReset",
    value: function carefulRetryReset() {
      this.retryTime = MIN_PUSH_RETRY;
    }
  }]);

  return PollingBackend;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PollingBackend);

/***/ }),

/***/ "./src/services/SyncService.js":
/*!*************************************!*\
  !*** ./src/services/SyncService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "SyncService": () => (/* binding */ SyncService),
/* harmony export */   "ERROR_TYPE": () => (/* binding */ ERROR_TYPE),
/* harmony export */   "IDLE_TIMEOUT": () => (/* binding */ IDLE_TIMEOUT)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _PollingBackend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PollingBackend */ "./src/services/PollingBackend.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers */ "./src/helpers/index.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/index.es.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




var defaultOptions = {
  shareToken: null,
  forceRecreate: false,
  serialize: function serialize(document) {
    return document;
  }
};
/**
 * Timeout after which the editor will consider a document without changes being synced as idle
 * The session will be terminated and the document will stay open in read-only mode with a button to reconnect if needed
 *
 * @type {number}
 */

var IDLE_TIMEOUT = 30;
var ERROR_TYPE = {
  /**
   * Failed to save collaborative document due to external change
   * collission needs to be resolved manually
   */
  SAVE_COLLISSION: 0,

  /**
   * Failed to push changes for MAX_REBASE_RETRY times
   */
  PUSH_FAILURE: 1,
  LOAD_ERROR: 2,
  CONNECTION_FAILED: 3,
  SOURCE_NOT_FOUND: 4
};

var SyncService = /*#__PURE__*/function () {
  function SyncService(options) {
    _classCallCheck(this, SyncService);

    this.eventHandlers = {
      /* Document state */
      opened: [],
      loaded: [],

      /* All initial steps fetched */
      fetched: [],

      /* received new steps */
      sync: [],

      /* state changed (dirty) */
      stateChange: [],

      /* error */
      error: [],

      /* Events for session and document meta data */
      change: [],

      /* Emitted after successful save */
      save: [],

      /* Emitted once a document becomes idle */
      idle: []
    };
    this.backend = new _PollingBackend__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.options = Object.assign({}, defaultOptions, options);
    this.document = null;
    this.session = null;
    this.data = null;
    this.sessions = [];
    this.steps = [];
    this.stepClientIDs = [];
    this.lastStepPush = Date.now();
    return this;
  }

  _createClass(SyncService, [{
    key: "open",
    value: function () {
      var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var fileId, filePath, initialSession, connectionData, response, content;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fileId = _ref.fileId, filePath = _ref.filePath, initialSession = _ref.initialSession;
                connectionData = null;

                if (!(typeof initialSession === 'undefined')) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return this._openDocument({
                  fileId: fileId,
                  filePath: filePath
                });

              case 6:
                response = _context.sent;
                connectionData = response.data;
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);

                if (!_context.t0.response || _context.t0.code === 'ECONNABORTED') {
                  this.emit('error', ERROR_TYPE.CONNECTION_FAILED, {});
                } else {
                  this.emit('error', ERROR_TYPE.LOAD_ERROR, _context.t0.response.status);
                }

                throw _context.t0;

              case 14:
                _context.next = 20;
                break;

              case 16:
                _context.next = 18;
                return this._fetchDocument();

              case 18:
                content = _context.sent;
                connectionData = _objectSpread(_objectSpread({}, initialSession), {}, {
                  content: content
                });

              case 20:
                this.document = connectionData.document;
                this.document.readOnly = connectionData.readOnly;
                this.session = connectionData.session;
                this.data = connectionData.content;
                this.emit('opened', {
                  document: this.document,
                  session: this.session
                });
                this.emit('loaded', {
                  document: this.document,
                  session: this.session,
                  documentSource: '' + this.data
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 10]]);
      }));

      function open(_x) {
        return _open.apply(this, arguments);
      }

      return open;
    }()
  }, {
    key: "getSession",
    value: function getSession() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (_this2.document && _this2.session) {
          resolve({
            document: _this2.document,
            session: _this2.session
          });
        } else {
          _this2.on('opened', resolve);

          _this2.on('error', reject);
        }
      });
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        if (_this3.document && _this3.session && _this3.data) {
          resolve({
            document: _this3.document,
            session: _this3.session,
            documentSource: _this3.data
          });
        } else {
          _this3.on('loaded', resolve);

          _this3.on('error', reject);
        }
      });
    }
  }, {
    key: "startSync",
    value: function startSync() {
      this.backend.connect();
    }
  }, {
    key: "_openDocument",
    value: function _openDocument(_ref2) {
      var fileId = _ref2.fileId,
          filePath = _ref2.filePath;
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('session/create', !!this.options.shareToken), {
        fileId: fileId,
        filePath: filePath,
        token: this.options.shareToken,
        guestName: this.options.guestName,
        forceRecreate: this.options.forceRecreate
      });
    }
  }, {
    key: "_fetchDocument",
    value: function _fetchDocument() {
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('session/fetch', !!this.options.shareToken), {
        documentId: this.document.id,
        sessionId: this.session.id,
        sessionToken: this.session.token,
        token: this.options.shareToken
      }, {
        transformResponse: [function (data) {
          return data;
        }]
      });
    }
  }, {
    key: "updateSession",
    value: function updateSession(guestName) {
      var _this4 = this;

      if (!this.isPublic()) {
        return;
      }

      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('session', !!this.options.shareToken), {
        documentId: this.document.id,
        sessionId: this.session.id,
        sessionToken: this.session.token,
        token: this.options.shareToken,
        guestName: guestName
      }).then(function (_ref3) {
        var data = _ref3.data;
        _this4.session = data;
        return data;
      }).catch(function (error) {
        console.error('Failed to update the session', error);
        return Promise.reject(error);
      });
    }
  }, {
    key: "sendSteps",
    value: function sendSteps(_sendable) {
      var sendable = _sendable || (0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__.sendableSteps)(this.state);

      if (!sendable) {
        return;
      }

      return this.backend.sendSteps(sendable);
    }
  }, {
    key: "stepsSince",
    value: function stepsSince(version) {
      return {
        steps: this.steps.slice(version),
        clientIDs: this.stepClientIDs.slice(version)
      };
    }
  }, {
    key: "_receiveSteps",
    value: function _receiveSteps(_ref4) {
      var _this5 = this;

      var steps = _ref4.steps,
          document = _ref4.document;
      var newSteps = [];

      var _loop = function _loop(i) {
        var singleSteps = steps[i].data;

        if (!Array.isArray(singleSteps)) {
          console.error('Invalid step data, skipping step', steps[i]); // TODO: recover

          return "continue";
        }

        singleSteps.forEach(function (step) {
          _this5.steps.push(step);

          newSteps.push({
            step: step,
            clientID: steps[i].sessionId
          });
        });
      };

      for (var i = 0; i < steps.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      this.lastStepPush = Date.now();
      this.emit('sync', {
        steps: newSteps,
        document: document
      });
      console.debug('receivedSteps', 'newVersion', this._getVersion());
    }
  }, {
    key: "checkIdle",
    value: function checkIdle() {
      var lastPushMinutesAgo = (Date.now() - this.lastStepPush) / 1000 / 60;

      if (lastPushMinutesAgo > IDLE_TIMEOUT) {
        console.debug("[SyncService] Document is idle for ".concat(this.IDLE_TIMEOUT, " minutes, suspending connection"));
        this.emit('idle');
      }
    }
  }, {
    key: "_getVersion",
    value: function _getVersion() {
      if (this.state) {
        return (0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__.getVersion)(this.state);
      }

      return 0;
    }
  }, {
    key: "_getDocument",
    value: function _getDocument() {
      if (this.state) {
        return this.state.doc;
      }
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      return this.options.serialize(this._getDocument());
    }
  }, {
    key: "save",
    value: function save() {
      if (this.backend.save) {
        this.backend.save();
      }
    }
  }, {
    key: "forceSave",
    value: function forceSave() {
      if (this.backend.forceSave) {
        this.backend.forceSave();
      }
    }
  }, {
    key: "close",
    value: function close() {
      var _this6 = this;

      var closed = false;
      return new Promise(function (resolve, reject) {
        _this6.on('save', function () {
          _this6._close().then(function () {
            closed = true;
            resolve();
          }).catch(function () {
            return resolve();
          });
        });

        setTimeout(function () {
          if (!closed) {
            _this6._close().then(function () {
              resolve();
            }).catch(function () {
              return resolve();
            });
          }
        }, 2000);

        _this6.save();
      });
    }
  }, {
    key: "_close",
    value: function _close() {
      if (this.document === null || this.session === null) {
        return Promise.resolve();
      }

      this.backend.disconnect();
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('session/close', !!this.options.shareToken), {
        documentId: this.document.id,
        sessionId: this.session.id,
        sessionToken: this.session.token,
        token: this.options.shareToken
      });
    }
  }, {
    key: "uploadImage",
    value: function uploadImage(image) {
      var formData = new FormData();
      formData.append('image', image);
      formData.append('documentId', this.document.id);
      formData.append('sessionId', this.session.id);
      formData.append('sessionToken', this.session.token);
      formData.append('shareToken', this.options.shareToken || '');
      var url = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('image/upload');
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }
  }, {
    key: "insertImageLink",
    value: function insertImageLink(imageLink) {
      var params = {
        documentId: this.document.id,
        sessionId: this.session.id,
        sessionToken: this.session.token,
        shareToken: this.options.shareToken || '',
        link: imageLink
      };
      var url = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('image/link');
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, params);
    }
  }, {
    key: "insertImageFile",
    value: function insertImageFile(imagePath) {
      var params = {
        documentId: this.document.id,
        sessionId: this.session.id,
        sessionToken: this.session.token,
        imagePath: imagePath
      };
      var url = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('image/filepath');
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, params);
    }
  }, {
    key: "on",
    value: function on(event, callback, _this) {
      this.eventHandlers[event].push(callback.bind(_this));
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event, data, additionalData) {
      if (typeof this.eventHandlers[event] !== 'undefined') {
        this.eventHandlers[event].forEach(function (callback) {
          callback(data, additionalData);
        });
      } else {
        console.error('Event not found', event);
      }
    }
  }, {
    key: "isPublic",
    value: function isPublic() {
      return !!this.options.shareToken;
    }
  }]);

  return SyncService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyncService);


/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/browser-storage */ "./node_modules/@nextcloud/browser-storage/dist/index.js");
/*
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
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



var persistentStorage = (0,_nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_0__.getBuilder)('text').persist().build();
vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_2__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_2__["default"].Store({
  state: {
    showAuthorAnnotations: persistentStorage.getItem('showAuthorAnnotations') === 'true',
    currentSession: persistentStorage.getItem('currentSession')
  },
  mutations: {
    SET_SHOW_AUTHOR_ANNOTATIONS: function SET_SHOW_AUTHOR_ANNOTATIONS(state, value) {
      state.showAuthorAnnotations = value;
      persistentStorage.setItem('showAuthorAnnotations', '' + value);
    },
    SET_CURRENT_SESSION: function SET_CURRENT_SESSION(state, value) {
      state.currentSession = value;
      persistentStorage.setItem('currentSession', value);
    }
  },
  actions: {
    setShowAuthorAnnotations: function setShowAuthorAnnotations(_ref, value) {
      var commit = _ref.commit;
      store.commit('SET_SHOW_AUTHOR_ANNOTATIONS', value);
    },
    setCurrentSession: function setCurrentSession(_ref2, value) {
      var commit = _ref2.commit;
      store.commit('SET_CURRENT_SESSION', value);
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "#resolve-conflicts[data-v-5ffe7972] {\n  display: flex;\n  position: fixed;\n  z-index: 10000;\n  bottom: 0;\n  max-width: 900px;\n  width: 100vw;\n  margin: auto;\n  padding: 20px 0;\n}\n#resolve-conflicts button[data-v-5ffe7972] {\n  margin: auto;\n  box-shadow: 0 0 10px var(--color-box-shadow);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "#editor-container[data-v-76135766] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  left: 0;\n  top: 50px;\n  margin: 0 auto;\n  position: relative;\n  background-color: var(--color-main-background);\n}\n#editor-wrapper[data-v-76135766] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n#editor-wrapper.show-color-annotations[data-v-76135766] .author-annotation {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n#editor-wrapper[data-v-76135766]:not(.show-color-annotations) .author-annotation, #editor-wrapper[data-v-76135766]:not(.show-color-annotations) .image {\n  background-color: transparent !important;\n  color: var(--color-main-text) !important;\n}\n#editor-wrapper .ProseMirror[data-v-76135766] {\n  margin-top: 0 !important;\n}\n#editor-wrapper.icon-loading #editor[data-v-76135766] {\n  opacity: 0.3;\n}\n#editor[data-v-76135766], .editor[data-v-76135766] {\n  background: var(--color-main-background);\n  color: var(--color-main-text);\n  background-clip: padding-box;\n  border-radius: var(--border-radius);\n  padding: 0;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n}\n.document-status[data-v-76135766] {\n  position: relative;\n  background-color: var(--color-main-background);\n}\n.document-status .msg[data-v-76135766] {\n  padding: 12px;\n  background-position: 8px center;\n  color: var(--color-text-maxcontrast);\n}\n.document-status .msg.icon-error[data-v-76135766] {\n  padding-left: 30px;\n}\n.document-status .msg .button[data-v-76135766] {\n  margin-left: 8px;\n}\n.save-status[data-v-76135766] {\n  display: inline-flex;\n  padding: 0;\n  text-overflow: ellipsis;\n  color: var(--color-text-lighter);\n  position: relative;\n  top: 9px;\n  min-width: 85px;\n  max-height: 36px;\n}\n.save-status.error[data-v-76135766] {\n  background-color: var(--color-error);\n  color: var(--color-main-background);\n  border-radius: 3px;\n}\n#editor-container #editor-wrapper.has-conflicts[data-v-76135766] {\n  height: calc(100% - 50px);\n}\n#editor-container #editor-wrapper.has-conflicts #editor[data-v-76135766], #editor-container #editor-wrapper.has-conflicts #read-only-editor[data-v-76135766] {\n  width: 50%;\n  height: 100%;\n}\n#editor-session-list[data-v-76135766] {\n  display: flex;\n}\n#editor-session-list input[data-v-76135766], #editor-session-list div[data-v-76135766] {\n  vertical-align: middle;\n  margin-left: 3px;\n}\n.editor__content[data-v-76135766] {\n  max-width: 670px;\n  margin: auto;\n  position: relative;\n}\n#body-public[data-v-76135766] {\n  height: auto;\n}\n#files-public-content #editor-container[data-v-76135766] {\n  top: 0;\n  width: 100%;\n}\n#files-public-content #editor-container #editor[data-v-76135766] .menubar {\n  position: sticky;\n  top: 0px;\n  width: 100%;\n}\n#files-public-content #editor-container #editor[data-v-76135766] {\n  overflow: auto;\n  z-index: 20;\n}\n#files-public-content #editor-container .has-conflicts #editor[data-v-76135766] {\n  padding-top: 0;\n}\n.ie #editor[data-v-76135766] .menubar {\n  position: fixed;\n  top: 50px;\n  width: 100%;\n}\n.ie .editor__content[data-v-76135766] .ProseMirror {\n  padding-top: 50px;\n}\n.menubar.placeholder[data-v-76135766] {\n  position: fixed;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  opacity: 0;\n  visibility: hidden;\n  height: 44px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container #editor-container {\n  position: absolute;\n}\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n  color: var(--color-main-text);\n}\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n  color: var(--color-main-text);\n}\n.ProseMirror-hideselection {\n  caret-color: transparent;\n  color: var(--color-main-text);\n}\n.ProseMirror-selectednode {\n  outline: 2px solid #8cf;\n}\n\n/* Make sure li selections wrap around markers */\nli.ProseMirror-selectednode {\n  outline: none;\n}\nli.ProseMirror-selectednode:after {\n  content: \"\";\n  position: absolute;\n  left: -32px;\n  right: -2px;\n  top: -2px;\n  bottom: -2px;\n  border: 2px solid #8cf;\n  pointer-events: none;\n}\n.has-conflicts .ProseMirror-menubar,\n#editor-wrapper.icon-loading .ProseMirror-menubar {\n  display: none;\n}\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n}\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid var(--color-main-text);\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n@keyframes ProseMirror-cursor-blink {\nto {\n    visibility: hidden;\n}\n}\n#editor-wrapper {\n  /* Document rendering styles */\n}\n#editor-wrapper div.ProseMirror {\n  margin-top: 44px;\n  height: 100%;\n  position: relative;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  padding: 4px 8px 200px 14px;\n  line-height: 150%;\n  font-size: 14px;\n  outline: none;\n}\n#editor-wrapper div.ProseMirror[contenteditable=true], #editor-wrapper div.ProseMirror[contenteditable=false],\n#editor-wrapper div.ProseMirror [contenteditable=true],\n#editor-wrapper div.ProseMirror [contenteditable=false] {\n  border: none !important;\n  width: 100%;\n  background-color: transparent;\n  color: var(--color-main-text);\n  opacity: 1;\n  -webkit-user-select: text;\n  user-select: text;\n  font-size: 14px;\n}\n#editor-wrapper div.ProseMirror .checkbox-item {\n  display: flex;\n  align-items: start;\n  margin-left: -23px;\n}\n#editor-wrapper div.ProseMirror .checkbox-item input[type=checkbox] {\n  display: none;\n}\n#editor-wrapper div.ProseMirror .checkbox-item:before {\n  content: \"\";\n  vertical-align: middle;\n  margin: 3px 6px 3px 2px;\n  border: 1px solid var(--color-text-maxcontrast);\n  position: relative;\n  display: block;\n  border-radius: var(--border-radius);\n  height: 14px;\n  width: 14px;\n  box-shadow: none !important;\n  background-position: center;\n  cursor: pointer;\n}\n#editor-wrapper div.ProseMirror .checkbox-item.checked:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: var(--color-primary-element);\n  border-color: var(--color-primary-element);\n}\n#editor-wrapper div.ProseMirror .checkbox-item label {\n  display: block;\n  flex-grow: 1;\n  max-width: calc(100% - 28px);\n}\n#editor-wrapper div.ProseMirror > *:first-child {\n  margin-top: 10px;\n}\n#editor-wrapper div.ProseMirror a {\n  color: var(--color-primary-element);\n  text-decoration: underline;\n  padding: 0.5em 0;\n}\n#editor-wrapper div.ProseMirror p {\n  margin-bottom: 1em;\n  line-height: 150%;\n}\n#editor-wrapper div.ProseMirror em {\n  font-style: italic;\n}\n#editor-wrapper div.ProseMirror h1,\n#editor-wrapper div.ProseMirror h2,\n#editor-wrapper div.ProseMirror h3,\n#editor-wrapper div.ProseMirror h4,\n#editor-wrapper div.ProseMirror h5,\n#editor-wrapper div.ProseMirror h6 {\n  font-weight: 600;\n  line-height: 120%;\n  margin-top: 24px;\n  margin-bottom: 12px;\n  color: var(--color-main-text);\n}\n#editor-wrapper div.ProseMirror h1 {\n  font-size: 36px;\n  margin-top: 48px;\n}\n#editor-wrapper div.ProseMirror h2 {\n  font-size: 30px;\n  margin-top: 48px;\n}\n#editor-wrapper div.ProseMirror h3 {\n  font-size: 24px;\n}\n#editor-wrapper div.ProseMirror h4 {\n  font-size: 21px;\n}\n#editor-wrapper div.ProseMirror h5 {\n  font-size: 17px;\n}\n#editor-wrapper div.ProseMirror h6 {\n  font-size: 14px;\n}\n#editor-wrapper div.ProseMirror img {\n  cursor: default;\n  max-width: 100%;\n}\n#editor-wrapper div.ProseMirror hr {\n  padding: 2px 0;\n  border: none;\n  margin: 3em 0;\n  width: 100%;\n}\n#editor-wrapper div.ProseMirror hr:after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  background-color: var(--color-border-dark);\n  line-height: 2px;\n}\n#editor-wrapper div.ProseMirror pre {\n  white-space: pre-wrap;\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 1em 1.3em;\n  margin-bottom: 1em;\n}\n#editor-wrapper div.ProseMirror p code {\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 0.1em 0.3em;\n}\n#editor-wrapper div.ProseMirror li {\n  position: relative;\n  padding-left: 3px;\n}\n#editor-wrapper div.ProseMirror li p {\n  margin-bottom: 0.5em;\n}\n#editor-wrapper div.ProseMirror ul, #editor-wrapper div.ProseMirror ol {\n  padding-left: 10px;\n  margin-left: 10px;\n  margin-bottom: 1em;\n}\n#editor-wrapper div.ProseMirror ul > li {\n  list-style-type: disc;\n}\n#editor-wrapper div.ProseMirror li ul > li {\n  list-style-type: circle;\n}\n#editor-wrapper div.ProseMirror li li ul > li {\n  list-style-type: square;\n}\n#editor-wrapper div.ProseMirror blockquote {\n  padding-left: 1em;\n  border-left: 4px solid var(--color-primary-element);\n  color: var(--color-text-maxcontrast);\n  margin-left: 0;\n  margin-right: 0;\n}\n#editor-wrapper .ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n#editor-wrapper .editor__content p.is-empty:first-child::before {\n  content: attr(data-placeholder);\n  float: left;\n  color: var(--color-text-maxcontrast);\n  pointer-events: none;\n  height: 0;\n}\n#editor-wrapper .editor__content {\n  tab-size: 4;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre {\n  background-color: var(--color-main-background);\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre::before {\n  content: attr(data-language);\n  text-transform: uppercase;\n  display: block;\n  text-align: right;\n  font-weight: bold;\n  font-size: 0.6rem;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-comment,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-quote {\n  color: #999999;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-variable,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-template-variable,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-attribute,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-tag,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-name,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-regexp,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-link,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-selector-id,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-selector-class {\n  color: #f2777a;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-number,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-meta,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-built_in,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-builtin-name,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-literal,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-type,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-params {\n  color: #f99157;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-string,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-symbol,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-bullet {\n  color: #99cc99;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-title,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-section {\n  color: #ffcc66;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-keyword,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-selector-tag {\n  color: #6699cc;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-emphasis {\n  font-style: italic;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-strong {\n  font-weight: 700;\n}\n#editor-wrapper #editor .content-wrapper {\n  position: relative;\n}\n#files-public-content {\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "#read-only-editor {\n  /* Document rendering styles */\n  overflow: scroll;\n}\n#read-only-editor div.ProseMirror {\n  margin-top: 44px;\n  height: 100%;\n  position: relative;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  padding: 4px 8px 200px 14px;\n  line-height: 150%;\n  font-size: 14px;\n  outline: none;\n}\n#read-only-editor div.ProseMirror[contenteditable=true], #read-only-editor div.ProseMirror[contenteditable=false],\n#read-only-editor div.ProseMirror [contenteditable=true],\n#read-only-editor div.ProseMirror [contenteditable=false] {\n  border: none !important;\n  width: 100%;\n  background-color: transparent;\n  color: var(--color-main-text);\n  opacity: 1;\n  -webkit-user-select: text;\n  user-select: text;\n  font-size: 14px;\n}\n#read-only-editor div.ProseMirror .checkbox-item {\n  display: flex;\n  align-items: start;\n  margin-left: -23px;\n}\n#read-only-editor div.ProseMirror .checkbox-item input[type=checkbox] {\n  display: none;\n}\n#read-only-editor div.ProseMirror .checkbox-item:before {\n  content: \"\";\n  vertical-align: middle;\n  margin: 3px 6px 3px 2px;\n  border: 1px solid var(--color-text-maxcontrast);\n  position: relative;\n  display: block;\n  border-radius: var(--border-radius);\n  height: 14px;\n  width: 14px;\n  box-shadow: none !important;\n  background-position: center;\n  cursor: pointer;\n}\n#read-only-editor div.ProseMirror .checkbox-item.checked:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: var(--color-primary-element);\n  border-color: var(--color-primary-element);\n}\n#read-only-editor div.ProseMirror .checkbox-item label {\n  display: block;\n  flex-grow: 1;\n  max-width: calc(100% - 28px);\n}\n#read-only-editor div.ProseMirror > *:first-child {\n  margin-top: 10px;\n}\n#read-only-editor div.ProseMirror a {\n  color: var(--color-primary-element);\n  text-decoration: underline;\n  padding: 0.5em 0;\n}\n#read-only-editor div.ProseMirror p {\n  margin-bottom: 1em;\n  line-height: 150%;\n}\n#read-only-editor div.ProseMirror em {\n  font-style: italic;\n}\n#read-only-editor div.ProseMirror h1,\n#read-only-editor div.ProseMirror h2,\n#read-only-editor div.ProseMirror h3,\n#read-only-editor div.ProseMirror h4,\n#read-only-editor div.ProseMirror h5,\n#read-only-editor div.ProseMirror h6 {\n  font-weight: 600;\n  line-height: 120%;\n  margin-top: 24px;\n  margin-bottom: 12px;\n  color: var(--color-main-text);\n}\n#read-only-editor div.ProseMirror h1 {\n  font-size: 36px;\n  margin-top: 48px;\n}\n#read-only-editor div.ProseMirror h2 {\n  font-size: 30px;\n  margin-top: 48px;\n}\n#read-only-editor div.ProseMirror h3 {\n  font-size: 24px;\n}\n#read-only-editor div.ProseMirror h4 {\n  font-size: 21px;\n}\n#read-only-editor div.ProseMirror h5 {\n  font-size: 17px;\n}\n#read-only-editor div.ProseMirror h6 {\n  font-size: 14px;\n}\n#read-only-editor div.ProseMirror img {\n  cursor: default;\n  max-width: 100%;\n}\n#read-only-editor div.ProseMirror hr {\n  padding: 2px 0;\n  border: none;\n  margin: 3em 0;\n  width: 100%;\n}\n#read-only-editor div.ProseMirror hr:after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  background-color: var(--color-border-dark);\n  line-height: 2px;\n}\n#read-only-editor div.ProseMirror pre {\n  white-space: pre-wrap;\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 1em 1.3em;\n  margin-bottom: 1em;\n}\n#read-only-editor div.ProseMirror p code {\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 0.1em 0.3em;\n}\n#read-only-editor div.ProseMirror li {\n  position: relative;\n  padding-left: 3px;\n}\n#read-only-editor div.ProseMirror li p {\n  margin-bottom: 0.5em;\n}\n#read-only-editor div.ProseMirror ul, #read-only-editor div.ProseMirror ol {\n  padding-left: 10px;\n  margin-left: 10px;\n  margin-bottom: 1em;\n}\n#read-only-editor div.ProseMirror ul > li {\n  list-style-type: disc;\n}\n#read-only-editor div.ProseMirror li ul > li {\n  list-style-type: circle;\n}\n#read-only-editor div.ProseMirror li li ul > li {\n  list-style-type: square;\n}\n#read-only-editor div.ProseMirror blockquote {\n  padding-left: 1em;\n  border-left: 4px solid var(--color-primary-element);\n  color: var(--color-text-maxcontrast);\n  margin-left: 0;\n  margin-right: 0;\n}\n#read-only-editor .ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n#read-only-editor .editor__content p.is-empty:first-child::before {\n  content: attr(data-placeholder);\n  float: left;\n  color: var(--color-text-maxcontrast);\n  pointer-events: none;\n  height: 0;\n}\n#read-only-editor .editor__content {\n  tab-size: 4;\n}\n.thumbnailContainer #read-only-editor {\n  width: 100%;\n}\n.thumbnailContainer #read-only-editor .ProseMirror {\n  height: auto;\n  margin: 0 0 0 0;\n  padding: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Document rendering styles */\ndiv.ProseMirror {\n  margin-top: 44px;\n  height: 100%;\n  position: relative;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  padding: 4px 8px 200px 14px;\n  line-height: 150%;\n  font-size: 14px;\n  outline: none;\n}\ndiv.ProseMirror[contenteditable=true], div.ProseMirror[contenteditable=false],\ndiv.ProseMirror [contenteditable=true],\ndiv.ProseMirror [contenteditable=false] {\n  border: none !important;\n  width: 100%;\n  background-color: transparent;\n  color: var(--color-main-text);\n  opacity: 1;\n  -webkit-user-select: text;\n  user-select: text;\n  font-size: 14px;\n}\ndiv.ProseMirror .checkbox-item {\n  display: flex;\n  align-items: start;\n  margin-left: -23px;\n}\ndiv.ProseMirror .checkbox-item input[type=checkbox] {\n  display: none;\n}\ndiv.ProseMirror .checkbox-item:before {\n  content: \"\";\n  vertical-align: middle;\n  margin: 3px 6px 3px 2px;\n  border: 1px solid var(--color-text-maxcontrast);\n  position: relative;\n  display: block;\n  border-radius: var(--border-radius);\n  height: 14px;\n  width: 14px;\n  box-shadow: none !important;\n  background-position: center;\n  cursor: pointer;\n}\ndiv.ProseMirror .checkbox-item.checked:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: var(--color-primary-element);\n  border-color: var(--color-primary-element);\n}\ndiv.ProseMirror .checkbox-item label {\n  display: block;\n  flex-grow: 1;\n  max-width: calc(100% - 28px);\n}\ndiv.ProseMirror > *:first-child {\n  margin-top: 10px;\n}\ndiv.ProseMirror a {\n  color: var(--color-primary-element);\n  text-decoration: underline;\n  padding: 0.5em 0;\n}\ndiv.ProseMirror p {\n  margin-bottom: 1em;\n  line-height: 150%;\n}\ndiv.ProseMirror em {\n  font-style: italic;\n}\ndiv.ProseMirror h1,\ndiv.ProseMirror h2,\ndiv.ProseMirror h3,\ndiv.ProseMirror h4,\ndiv.ProseMirror h5,\ndiv.ProseMirror h6 {\n  font-weight: 600;\n  line-height: 120%;\n  margin-top: 24px;\n  margin-bottom: 12px;\n  color: var(--color-main-text);\n}\ndiv.ProseMirror h1 {\n  font-size: 36px;\n  margin-top: 48px;\n}\ndiv.ProseMirror h2 {\n  font-size: 30px;\n  margin-top: 48px;\n}\ndiv.ProseMirror h3 {\n  font-size: 24px;\n}\ndiv.ProseMirror h4 {\n  font-size: 21px;\n}\ndiv.ProseMirror h5 {\n  font-size: 17px;\n}\ndiv.ProseMirror h6 {\n  font-size: 14px;\n}\ndiv.ProseMirror img {\n  cursor: default;\n  max-width: 100%;\n}\ndiv.ProseMirror hr {\n  padding: 2px 0;\n  border: none;\n  margin: 3em 0;\n  width: 100%;\n}\ndiv.ProseMirror hr:after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  background-color: var(--color-border-dark);\n  line-height: 2px;\n}\ndiv.ProseMirror pre {\n  white-space: pre-wrap;\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 1em 1.3em;\n  margin-bottom: 1em;\n}\ndiv.ProseMirror p code {\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 0.1em 0.3em;\n}\ndiv.ProseMirror li {\n  position: relative;\n  padding-left: 3px;\n}\ndiv.ProseMirror li p {\n  margin-bottom: 0.5em;\n}\ndiv.ProseMirror ul, div.ProseMirror ol {\n  padding-left: 10px;\n  margin-left: 10px;\n  margin-bottom: 1em;\n}\ndiv.ProseMirror ul > li {\n  list-style-type: disc;\n}\ndiv.ProseMirror li ul > li {\n  list-style-type: circle;\n}\ndiv.ProseMirror li li ul > li {\n  list-style-type: square;\n}\ndiv.ProseMirror blockquote {\n  padding-left: 1em;\n  border-left: 4px solid var(--color-primary-element);\n  color: var(--color-text-maxcontrast);\n  margin-left: 0;\n  margin-right: 0;\n}\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n.editor__content p.is-empty:first-child::before {\n  content: attr(data-placeholder);\n  float: left;\n  color: var(--color-text-maxcontrast);\n  pointer-events: none;\n  height: 0;\n}\n.editor__content {\n  tab-size: 4;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".image[data-v-336b1e4e] {\n  margin: 0;\n  padding: 0;\n}\n.image__caption[data-v-336b1e4e] {\n  text-align: center;\n  color: var(--color-text-lighter);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.image__caption input[type=text][data-v-336b1e4e] {\n  max-width: 80%;\n  border: none;\n  text-align: center;\n}\n.image__loading[data-v-336b1e4e] {\n  height: 100px;\n}\n.image__view[data-v-336b1e4e] {\n  text-align: center;\n  position: relative;\n}\n.image__view img[data-v-336b1e4e] {\n  max-width: 100%;\n}\n.image__main[data-v-336b1e4e] {\n  max-height: calc(100vh - 50px - 50px);\n}\n.fade-enter-active[data-v-336b1e4e] {\n  transition: opacity 0.3s ease-in-out;\n}\n.fade-enter-to[data-v-336b1e4e] {\n  opacity: 1;\n}\n.fade-enter[data-v-336b1e4e] {\n  opacity: 0;\n}\n.trash-icon[data-v-336b1e4e] {\n  position: absolute;\n  right: 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.trash-icon svg[data-v-336b1e4e] {\n  cursor: pointer;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "body[data-v-37e36225] {\n  position: fixed;\n}\n#direct-editor[data-v-37e36225] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n}\n#direct-editor[data-v-37e36225] #editor-container {\n  height: 100%;\n  top: 0;\n}\n#direct-editor[data-v-37e36225] #editor-wrapper div.ProseMirror {\n  margin-top: 0;\n}\npre[data-v-37e36225] {\n  width: 100%;\n  max-width: 700px;\n  margin: auto;\n  background-color: var(--color-background-dark);\n}\nbutton[data-v-37e36225] {\n  width: 44px;\n  height: 44px;\n  margin: 0;\n  background-size: 16px;\n  border: 0;\n  background-color: transparent;\n  opacity: 0.5;\n  color: var(--color-main-text);\n  background-position: center center;\n  vertical-align: top;\n}\nbutton[data-v-37e36225]:hover, button[data-v-37e36225]:focus, button[data-v-37e36225]:active {\n  background-color: var(--color-background-dark);\n}\nbutton.is-active[data-v-37e36225], button[data-v-37e36225]:hover, button[data-v-37e36225]:focus {\n  opacity: 1;\n}\nbutton.icon-undo[data-v-37e36225], button.icon-redo[data-v-37e36225] {\n  opacity: 0.4;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/highlight.js/lib/core.js":
/*!***********************************************!*\
  !*** ./node_modules/highlight.js/lib/core.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function deepFreeze(obj) {
    if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function () {
            throw new Error('map is read-only');
        };
    } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function () {
            throw new Error('set is read-only');
        };
    }

    // Freeze self
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach(function (name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop == 'object' && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });

    return obj;
}

var deepFreezeEs6 = deepFreeze;
var _default = deepFreeze;
deepFreezeEs6.default = _default;

/** @implements CallbackResponse */
class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
    this.isMatchIgnored = false;
  }

  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{kind?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  return !!node.kind;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    let className = node.kind;
    if (!node.sublanguage) {
      className = `${this.classPrefix}${className}`;
    }
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */
/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */
/**  */

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} kind */
  openNode(kind) {
    /** @type Node */
    const node = { kind, children: [] };
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addKeyword(text, kind)
  - addText(text)
  - addSublanguage(emitter, subLanguageName)
  - finalize()
  - openNode(kind)
  - closeNode()
  - closeAllNodes()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   * @param {string} kind
   */
  addKeyword(text, kind) {
    if (text === "") { return; }

    this.openNode(kind);
    this.addText(text);
    this.closeNode();
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    node.kind = name;
    node.sublanguage = true;
    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */
function escape(value) {
  return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {string} separator
 * @returns {string}
 */
function join(regexps, separator = "|") {
  let numCaptures = 0;

  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = '';

    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        out += '\\' + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    return out;
  }).map(re => `(${re})`).join(separator);
}

// Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit({
    className: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  className: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  className: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit(
    {
      className: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push(PHRASAL_WORDS_MODE);
  mode.contains.push({
    className: 'doctag',
    begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
    relevance: 0
  });
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  className: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  className: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const CSS_NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE + '(' +
    '%|em|ex|ch|rem' +
    '|vw|vh|vmin|vmax' +
    '|cm|mm|in|pt|pc|px' +
    '|deg|grad|rad|turn' +
    '|s|ms' +
    '|Hz|kHz' +
    '|dpi|dpcm|dppx' +
    ')?',
  relevance: 0
};
const REGEXP_MODE = {
  // this outer rule makes sure we actually have a WHOLE regex and not simply
  // an expression such as:
  //
  //     3 / something
  //
  // (which will then blow up when regex's `illegal` sees the newline)
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    className: 'regexp',
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  className: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  className: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: MATCH_NOTHING_RE,
    IDENT_RE: IDENT_RE,
    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
    NUMBER_RE: NUMBER_RE,
    C_NUMBER_RE: C_NUMBER_RE,
    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
    RE_STARTERS_RE: RE_STARTERS_RE,
    SHEBANG: SHEBANG,
    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
    APOS_STRING_MODE: APOS_STRING_MODE,
    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
    COMMENT: COMMENT,
    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
    NUMBER_MODE: NUMBER_MODE,
    C_NUMBER_MODE: C_NUMBER_MODE,
    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
    CSS_NUMBER_MODE: CSS_NUMBER_MODE,
    REGEXP_MODE: REGEXP_MODE,
    TITLE_MODE: TITLE_MODE,
    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
    METHOD_GUARD: METHOD_GUARD,
    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
});

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfhasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}


/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfhasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;

  // prevents double relevance, the keywords themselves provide
  // relevance, the mode doesn't need to double it
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 0;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

const DEFAULT_KEYWORD_CLASSNAME = "keyword";

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive, className = DEFAULT_KEYWORD_CLASSNAME) {
  /** @type KeywordDict */
  const compiledKeywords = {};

  // input can be a string of keywords, an array of keywords, or a object with
  // named keys representing className (which can then point to a string or array)
  if (typeof rawKeywords === 'string') {
    compileList(className, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(className, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(className) {
      // collapse all our objects back into the parent object
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[className], caseInsensitive, className)
      );
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} className
   * @param {Array<string>} keywordList
   */
  function compileList(className, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @param {{plugins: HLJSPlugin[]}} opts
 * @returns {CompiledLanguage}
 */
function compileLanguage(language, { plugins }) {
  /**
   * Builds a regex with the case sensativility of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(join(terminators), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.isCompiled) return cmode;

    [
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.isCompiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object") {
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    // both are not allowed
    if (mode.lexemes && keywordPattern) {
      throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
    }

    // `mode.lexemes` was the old standard before we added and now recommend
    // using `keywords.$pattern` to pass the keyword pattern
    keywordPattern = keywordPattern || mode.lexemes || /\w+/;
    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(mode.begin);
      if (mode.endSameAsBegin) mode.end = mode.begin;
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(mode.end);
      cmode.terminatorEnd = source(mode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "10.7.3";

// @ts-nocheck

function hasValueOrEmptyAttribute(value) {
  return Boolean(value || value === "");
}

function BuildVuePlugin(hljs) {
  const Component = {
    props: ["language", "code", "autodetect"],
    data: function() {
      return {
        detectedLanguage: "",
        unknownLanguage: false
      };
    },
    computed: {
      className() {
        if (this.unknownLanguage) return "";

        return "hljs " + this.detectedLanguage;
      },
      highlighted() {
        // no idea what language to use, return raw code
        if (!this.autoDetect && !hljs.getLanguage(this.language)) {
          console.warn(`The language "${this.language}" you specified could not be found.`);
          this.unknownLanguage = true;
          return escapeHTML(this.code);
        }

        let result = {};
        if (this.autoDetect) {
          result = hljs.highlightAuto(this.code);
          this.detectedLanguage = result.language;
        } else {
          result = hljs.highlight(this.language, this.code, this.ignoreIllegals);
          this.detectedLanguage = this.language;
        }
        return result.value;
      },
      autoDetect() {
        return !this.language || hasValueOrEmptyAttribute(this.autodetect);
      },
      ignoreIllegals() {
        return true;
      }
    },
    // this avoids needing to use a whole Vue compilation pipeline just
    // to build Highlight.js
    render(createElement) {
      return createElement("pre", {}, [
        createElement("code", {
          class: this.className,
          domProps: { innerHTML: this.highlighted }
        })
      ]);
    }
    // template: `<pre><code :class="className" v-html="highlighted"></code></pre>`
  };

  const VuePlugin = {
    install(Vue) {
      Vue.component('highlightjs', Component);
    }
  };

  return { Component, VuePlugin };
}

/* plugin itself */

/** @type {HLJSPlugin} */
const mergeHTMLPlugin = {
  "after:highlightElement": ({ el, result, text }) => {
    const originalStream = nodeStream(el);
    if (!originalStream.length) return;

    const resultNode = document.createElement('div');
    resultNode.innerHTML = result.value;
    result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
  }
};

/* Stream merging support functions */

/**
 * @typedef Event
 * @property {'start'|'stop'} event
 * @property {number} offset
 * @property {Node} node
 */

/**
 * @param {Node} node
 */
function tag(node) {
  return node.nodeName.toLowerCase();
}

/**
 * @param {Node} node
 */
function nodeStream(node) {
  /** @type Event[] */
  const result = [];
  (function _nodeStream(node, offset) {
    for (let child = node.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 3) {
        offset += child.nodeValue.length;
      } else if (child.nodeType === 1) {
        result.push({
          event: 'start',
          offset: offset,
          node: child
        });
        offset = _nodeStream(child, offset);
        // Prevent void elements from having an end tag that would actually
        // double them in the output. There are more void elements in HTML
        // but we list only those realistically expected in code display.
        if (!tag(child).match(/br|hr|img|input/)) {
          result.push({
            event: 'stop',
            offset: offset,
            node: child
          });
        }
      }
    }
    return offset;
  })(node, 0);
  return result;
}

/**
 * @param {any} original - the original stream
 * @param {any} highlighted - stream of the highlighted source
 * @param {string} value - the original source itself
 */
function mergeStreams(original, highlighted, value) {
  let processed = 0;
  let result = '';
  const nodeStack = [];

  function selectStream() {
    if (!original.length || !highlighted.length) {
      return original.length ? original : highlighted;
    }
    if (original[0].offset !== highlighted[0].offset) {
      return (original[0].offset < highlighted[0].offset) ? original : highlighted;
    }

    /*
    To avoid starting the stream just before it should stop the order is
    ensured that original always starts first and closes last:

    if (event1 == 'start' && event2 == 'start')
      return original;
    if (event1 == 'start' && event2 == 'stop')
      return highlighted;
    if (event1 == 'stop' && event2 == 'start')
      return original;
    if (event1 == 'stop' && event2 == 'stop')
      return highlighted;

    ... which is collapsed to:
    */
    return highlighted[0].event === 'start' ? original : highlighted;
  }

  /**
   * @param {Node} node
   */
  function open(node) {
    /** @param {Attr} attr */
    function attributeString(attr) {
      return ' ' + attr.nodeName + '="' + escapeHTML(attr.value) + '"';
    }
    // @ts-ignore
    result += '<' + tag(node) + [].map.call(node.attributes, attributeString).join('') + '>';
  }

  /**
   * @param {Node} node
   */
  function close(node) {
    result += '</' + tag(node) + '>';
  }

  /**
   * @param {Event} event
   */
  function render(event) {
    (event.event === 'start' ? open : close)(event.node);
  }

  while (original.length || highlighted.length) {
    let stream = selectStream();
    result += escapeHTML(value.substring(processed, stream[0].offset));
    processed = stream[0].offset;
    if (stream === original) {
      /*
      On any opening or closing tag of the original markup we first close
      the entire highlighted node stack, then render the original tag along
      with all the following original tags at the same offset and then
      reopen all the tags on the highlighted stack.
      */
      nodeStack.reverse().forEach(close);
      do {
        render(stream.splice(0, 1)[0]);
        stream = selectStream();
      } while (stream === original && stream.length && stream[0].offset === processed);
      nodeStack.reverse().forEach(open);
    } else {
      if (stream[0].event === 'start') {
        nodeStack.push(stream[0].node);
      } else {
        nodeStack.pop();
      }
      render(stream.splice(0, 1)[0]);
    }
  }
  return result + escapeHTML(value.substr(processed));
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @type {Record<string, boolean>}
 */
const seenDeprecations = {};

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  if (seenDeprecations[`${version}/${message}`]) return;

  console.log(`Deprecated as of ${version}. ${message}`);
  seenDeprecations[`${version}/${message}`] = true;
};

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

const escape$1 = escapeHTML;
const inherit$1 = inherit;
const NO_MATCH = Symbol("nomatch");

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const fixMarkupRe = /(^(<[^>]+>|\t|)+|\n)/gm;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrlanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode} [continuation] - current continuation mode, if any
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(codeOrlanguageName, optionsOrCode, ignoreIllegals, continuation) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrlanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
      // continuation not supported at all via the new API
      // eslint-disable-next-line no-undefined
      continuation = undefined;
    } else {
      // old API
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrlanguageName;
      code = optionsOrCode;
    }

    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals, continuation);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {RegExpMatchArray} match - regexp match data
     * @returns {KeywordData | false}
     */
    function keywordData(mode, match) {
      const matchText = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return Object.prototype.hasOwnProperty.call(mode.keywords, matchText) && mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const data = keywordData(top, match);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            // _ implied for relevance only, do not highlight
            // by applying a class name
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitter.addKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substr(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result.top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.addSublanguage(result.emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {Mode} mode - new mode to start
     */
    function startNewMode(mode) {
      if (mode.className) {
        emitter.openNode(language.classNameAliases[mode.className] || mode.className);
      }
      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexs to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.isMatchIgnored) return doIgnore(lexeme);
      }

      if (newMode && newMode.endSameAsBegin) {
        newMode.endRe = escape(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode);
      // if (mode["after:begin"]) {
      //   let resp = new Response(mode);
      //   mode["after:begin"](match, resp);
      // }
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substr(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.className) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        if (endMode.endSameAsBegin) {
          endMode.starts.endRe = endMode.endRe;
        }
        startNewMode(endMode.starts);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.className) {
          list.unshift(current.className);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceeding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error('0 width match regex');
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  Only one occasion now.  An end match that was
      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
      being used to scan the text isn't recompiled that means that any match that LOOKS like
      the end (but is not, because it is not an exact match to the beginning) will
      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
      the end rule and fails to match, we wind up here, and just silently ignore the end.

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language, { plugins });
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      top.matcher.considerAll();

      for (;;) {
        iterations++;
        if (resumeScanAtSamePosition) {
          // only regexes not matched previously will now be
          // considered for a potential match
          resumeScanAtSamePosition = false;
        } else {
          top.matcher.considerAll();
        }
        top.matcher.lastIndex = index;

        const match = top.matcher.exec(codeToHighlight);
        // console.log("match", match[0], match.rule && match.rule.begin)

        if (!match) break;

        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substr(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();

      return {
        // avoid possible breakage with v10 clients expecting
        // this to always be an integer
        relevance: Math.floor(relevance),
        value: result,
        language: languageName,
        illegal: false,
        emitter: emitter,
        top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          illegal: true,
          illegalBy: {
            msg: err.message,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode
          },
          sofar: result,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          illegal: false,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter,
          language: languageName,
          top: top,
          errorRaised: err
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      relevance: 0,
      emitter: new options.__emitter(options),
      value: escape$1(code),
      illegal: false,
      top: PLAINTEXT_LANGUAGE
    };
    result.emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.second_best = secondBest;

    return result;
  }

  /**
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

    @param {string} html
    @returns {string}
  */
  function fixMarkup(html) {
    if (!(options.tabReplace || options.useBR)) {
      return html;
    }

    return html.replace(fixMarkupRe, match => {
      if (match === '\n') {
        return options.useBR ? '<br>' : match;
      } else if (options.tabReplace) {
        return match.replace(/\t/g, options.tabReplace);
      }
      return match;
    });
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = currentLang ? aliases[currentLang] : resultLang;

    element.classList.add("hljs");
    if (language) element.classList.add(language);
  }

  /** @type {HLJSPlugin} */
  const brPlugin = {
    "before:highlightElement": ({ el }) => {
      if (options.useBR) {
        el.innerHTML = el.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n');
      }
    },
    "after:highlightElement": ({ result }) => {
      if (options.useBR) {
        result.value = result.value.replace(/\n/g, "<br>");
      }
    }
  };

  const TAB_REPLACE_RE = /^(<[^>]+>|\t)+/gm;
  /** @type {HLJSPlugin} */
  const tabReplacePlugin = {
    "after:highlightElement": ({ result }) => {
      if (options.tabReplace) {
        result.value = result.value.replace(TAB_REPLACE_RE, (m) =>
          m.replace(/\t/g, options.tabReplace)
        );
      }
    }
  };

  /**
   * Applies highlighting to a DOM node containing code. Accepts a DOM node and
   * two optional parameters for fixMarkup.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightElement(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    // support for v10 API
    fire("before:highlightElement",
      { el: element, language: language });

    node = element;
    const text = node.textContent;
    const result = language ? highlight(text, { language, ignoreIllegals: true }) : highlightAuto(text);

    // support for v10 API
    fire("after:highlightElement", { el: element, result, text });

    element.innerHTML = result.value;
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relavance: result.relevance
    };
    if (result.second_best) {
      element.second_best = {
        language: result.second_best.language,
        // TODO: remove with version 11.0
        re: result.second_best.relevance,
        relavance: result.second_best.relevance
      };
    }
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    if (userOptions.useBR) {
      deprecated("10.3.0", "'useBR' will be removed entirely in v11.0");
      deprecated("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
    }
    options = inherit$1(options, userOptions);
  }

  /**
   * Highlights to all <pre><code> blocks on a page
   *
   * @type {Function & {called?: boolean}}
   */
  // TODO: remove v12, deprecated
  const initHighlighting = () => {
    if (initHighlighting.called) return;
    initHighlighting.called = true;

    deprecated("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead.");

    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(highlightElement);
  };

  // Higlights all when DOMContentLoaded fires
  // TODO: remove v12, deprecated
  function initHighlightingOnLoad() {
    deprecated("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.");
    wantsHighlight = true;
  }

  let wantsHighlight = false;

  /**
   * auto-highlights all pre>code elements on the page
   */
  function highlightAll() {
    // if we are called too early in the loading process
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }

    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(highlightElement);
  }

  function boot() {
    // if a highlight was requested before DOM was loaded, do now
    if (wantsHighlight) highlightAll();
  }

  // make sure we are in the browser environment
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
    intended usage: When one language truly requires another

    Unlike `getLanguage`, this will throw when the requested language
    is not available.

    @param {string} name - name of the language to fetch/require
    @returns {Language | never}
  */
  function requireLanguage(name) {
    deprecated("10.4.0", "requireLanguage will be removed entirely in v11.");
    deprecated("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");

    const lang = getLanguage(name);
    if (lang) { return lang; }

    const err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
    throw err;
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias.toLowerCase()] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */
  function upgradePluginAPI(plugin) {
    // TODO: remove with v12
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
  Note: fixMarkup is deprecated and will be removed entirely in v11

  @param {string} arg
  @returns {string}
  */
  function deprecateFixMarkup(arg) {
    deprecated("10.2.0", "fixMarkup will be removed entirely in v11.0");
    deprecated("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534");

    return fixMarkup(arg);
  }

  /**
   *
   * @param {HighlightedHTMLElement} el
   */
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");

    return highlightElement(el);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    highlightAll,
    fixMarkup: deprecateFixMarkup,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    requireLanguage,
    autoDetection,
    inherit: inherit$1,
    addPlugin,
    // plugins for frameworks
    vuePlugin: BuildVuePlugin(hljs).VuePlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreezeEs6(MODES[key]);
    }
  }

  // merge all the modes/regexs into our main object
  Object.assign(hljs, MODES);

  // built-in plugins, likely to be moved out of core in the future
  hljs.addPlugin(brPlugin); // slated to be removed in v11
  hljs.addPlugin(mergeHTMLPlugin);
  hljs.addPlugin(tabReplacePlugin);
  return hljs;
};

// export an "instance" of the highlighter
var highlight = HLJS({});

module.exports = highlight;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ lazy ^\.\/.*$ chunkName: highlight/[request] namespace object ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1c": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		"highlight/1c"
	],
	"./1c.js": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		"highlight/1c"
	],
	"./abnf": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		"highlight/abnf"
	],
	"./abnf.js": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		"highlight/abnf"
	],
	"./accesslog": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		"highlight/accesslog"
	],
	"./accesslog.js": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		"highlight/accesslog"
	],
	"./actionscript": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		"highlight/actionscript"
	],
	"./actionscript.js": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		"highlight/actionscript"
	],
	"./ada": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		"highlight/ada"
	],
	"./ada.js": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		"highlight/ada"
	],
	"./angelscript": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		"highlight/angelscript"
	],
	"./angelscript.js": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		"highlight/angelscript"
	],
	"./apache": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		"highlight/apache"
	],
	"./apache.js": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		"highlight/apache"
	],
	"./applescript": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		"highlight/applescript"
	],
	"./applescript.js": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		"highlight/applescript"
	],
	"./arcade": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		"highlight/arcade"
	],
	"./arcade.js": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		"highlight/arcade"
	],
	"./arduino": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		"highlight/arduino"
	],
	"./arduino.js": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		"highlight/arduino"
	],
	"./armasm": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		"highlight/armasm"
	],
	"./armasm.js": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		"highlight/armasm"
	],
	"./asciidoc": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		"highlight/asciidoc"
	],
	"./asciidoc.js": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		"highlight/asciidoc"
	],
	"./aspectj": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		"highlight/aspectj"
	],
	"./aspectj.js": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		"highlight/aspectj"
	],
	"./autohotkey": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		"highlight/autohotkey"
	],
	"./autohotkey.js": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		"highlight/autohotkey"
	],
	"./autoit": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		"highlight/autoit"
	],
	"./autoit.js": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		"highlight/autoit"
	],
	"./avrasm": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		"highlight/avrasm"
	],
	"./avrasm.js": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		"highlight/avrasm"
	],
	"./awk": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		"highlight/awk"
	],
	"./awk.js": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		"highlight/awk"
	],
	"./axapta": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		"highlight/axapta"
	],
	"./axapta.js": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		"highlight/axapta"
	],
	"./bash": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		"highlight/bash"
	],
	"./bash.js": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		"highlight/bash"
	],
	"./basic": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		"highlight/basic"
	],
	"./basic.js": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		"highlight/basic"
	],
	"./bnf": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		"highlight/bnf"
	],
	"./bnf.js": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		"highlight/bnf"
	],
	"./brainfuck": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		"highlight/brainfuck"
	],
	"./brainfuck.js": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		"highlight/brainfuck"
	],
	"./c": [
		"./node_modules/highlight.js/lib/languages/c.js",
		"highlight/c"
	],
	"./c-like": [
		"./node_modules/highlight.js/lib/languages/c-like.js",
		"highlight/c-like"
	],
	"./c-like.js": [
		"./node_modules/highlight.js/lib/languages/c-like.js",
		"highlight/c-like"
	],
	"./c.js": [
		"./node_modules/highlight.js/lib/languages/c.js",
		"highlight/c"
	],
	"./cal": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		"highlight/cal"
	],
	"./cal.js": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		"highlight/cal"
	],
	"./capnproto": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		"highlight/capnproto"
	],
	"./capnproto.js": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		"highlight/capnproto"
	],
	"./ceylon": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		"highlight/ceylon"
	],
	"./ceylon.js": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		"highlight/ceylon"
	],
	"./clean": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		"highlight/clean"
	],
	"./clean.js": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		"highlight/clean"
	],
	"./clojure": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		"highlight/clojure"
	],
	"./clojure-repl": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		"highlight/clojure-repl"
	],
	"./clojure-repl.js": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		"highlight/clojure-repl"
	],
	"./clojure.js": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		"highlight/clojure"
	],
	"./cmake": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		"highlight/cmake"
	],
	"./cmake.js": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		"highlight/cmake"
	],
	"./coffeescript": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		"highlight/coffeescript"
	],
	"./coffeescript.js": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		"highlight/coffeescript"
	],
	"./coq": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		"highlight/coq"
	],
	"./coq.js": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		"highlight/coq"
	],
	"./cos": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		"highlight/cos"
	],
	"./cos.js": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		"highlight/cos"
	],
	"./cpp": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		"highlight/cpp"
	],
	"./cpp.js": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		"highlight/cpp"
	],
	"./crmsh": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		"highlight/crmsh"
	],
	"./crmsh.js": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		"highlight/crmsh"
	],
	"./crystal": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		"highlight/crystal"
	],
	"./crystal.js": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		"highlight/crystal"
	],
	"./csharp": [
		"./node_modules/highlight.js/lib/languages/csharp.js",
		"highlight/csharp"
	],
	"./csharp.js": [
		"./node_modules/highlight.js/lib/languages/csharp.js",
		"highlight/csharp"
	],
	"./csp": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		"highlight/csp"
	],
	"./csp.js": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		"highlight/csp"
	],
	"./css": [
		"./node_modules/highlight.js/lib/languages/css.js",
		"highlight/css"
	],
	"./css.js": [
		"./node_modules/highlight.js/lib/languages/css.js",
		"highlight/css"
	],
	"./d": [
		"./node_modules/highlight.js/lib/languages/d.js",
		"highlight/d"
	],
	"./d.js": [
		"./node_modules/highlight.js/lib/languages/d.js",
		"highlight/d"
	],
	"./dart": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		"highlight/dart"
	],
	"./dart.js": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		"highlight/dart"
	],
	"./delphi": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		"highlight/delphi"
	],
	"./delphi.js": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		"highlight/delphi"
	],
	"./diff": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		"highlight/diff"
	],
	"./diff.js": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		"highlight/diff"
	],
	"./django": [
		"./node_modules/highlight.js/lib/languages/django.js",
		"highlight/django"
	],
	"./django.js": [
		"./node_modules/highlight.js/lib/languages/django.js",
		"highlight/django"
	],
	"./dns": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		"highlight/dns"
	],
	"./dns.js": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		"highlight/dns"
	],
	"./dockerfile": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		"highlight/dockerfile"
	],
	"./dockerfile.js": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		"highlight/dockerfile"
	],
	"./dos": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		"highlight/dos"
	],
	"./dos.js": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		"highlight/dos"
	],
	"./dsconfig": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		"highlight/dsconfig"
	],
	"./dsconfig.js": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		"highlight/dsconfig"
	],
	"./dts": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		"highlight/dts"
	],
	"./dts.js": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		"highlight/dts"
	],
	"./dust": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		"highlight/dust"
	],
	"./dust.js": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		"highlight/dust"
	],
	"./ebnf": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		"highlight/ebnf"
	],
	"./ebnf.js": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		"highlight/ebnf"
	],
	"./elixir": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		"highlight/elixir"
	],
	"./elixir.js": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		"highlight/elixir"
	],
	"./elm": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		"highlight/elm"
	],
	"./elm.js": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		"highlight/elm"
	],
	"./erb": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		"highlight/erb"
	],
	"./erb.js": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		"highlight/erb"
	],
	"./erlang": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		"highlight/erlang"
	],
	"./erlang-repl": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		"highlight/erlang-repl"
	],
	"./erlang-repl.js": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		"highlight/erlang-repl"
	],
	"./erlang.js": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		"highlight/erlang"
	],
	"./excel": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		"highlight/excel"
	],
	"./excel.js": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		"highlight/excel"
	],
	"./fix": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		"highlight/fix"
	],
	"./fix.js": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		"highlight/fix"
	],
	"./flix": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		"highlight/flix"
	],
	"./flix.js": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		"highlight/flix"
	],
	"./fortran": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		"highlight/fortran"
	],
	"./fortran.js": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		"highlight/fortran"
	],
	"./fsharp": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		"highlight/fsharp"
	],
	"./fsharp.js": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		"highlight/fsharp"
	],
	"./gams": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		"highlight/gams"
	],
	"./gams.js": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		"highlight/gams"
	],
	"./gauss": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		"highlight/gauss"
	],
	"./gauss.js": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		"highlight/gauss"
	],
	"./gcode": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		"highlight/gcode"
	],
	"./gcode.js": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		"highlight/gcode"
	],
	"./gherkin": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		"highlight/gherkin"
	],
	"./gherkin.js": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		"highlight/gherkin"
	],
	"./glsl": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		"highlight/glsl"
	],
	"./glsl.js": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		"highlight/glsl"
	],
	"./gml": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		"highlight/gml"
	],
	"./gml.js": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		"highlight/gml"
	],
	"./go": [
		"./node_modules/highlight.js/lib/languages/go.js",
		"highlight/go"
	],
	"./go.js": [
		"./node_modules/highlight.js/lib/languages/go.js",
		"highlight/go"
	],
	"./golo": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		"highlight/golo"
	],
	"./golo.js": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		"highlight/golo"
	],
	"./gradle": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		"highlight/gradle"
	],
	"./gradle.js": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		"highlight/gradle"
	],
	"./groovy": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		"highlight/groovy"
	],
	"./groovy.js": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		"highlight/groovy"
	],
	"./haml": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		"highlight/haml"
	],
	"./haml.js": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		"highlight/haml"
	],
	"./handlebars": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		"highlight/handlebars"
	],
	"./handlebars.js": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		"highlight/handlebars"
	],
	"./haskell": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		"highlight/haskell"
	],
	"./haskell.js": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		"highlight/haskell"
	],
	"./haxe": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		"highlight/haxe"
	],
	"./haxe.js": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		"highlight/haxe"
	],
	"./hsp": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		"highlight/hsp"
	],
	"./hsp.js": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		"highlight/hsp"
	],
	"./htmlbars": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		"highlight/htmlbars"
	],
	"./htmlbars.js": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		"highlight/htmlbars"
	],
	"./http": [
		"./node_modules/highlight.js/lib/languages/http.js",
		"highlight/http"
	],
	"./http.js": [
		"./node_modules/highlight.js/lib/languages/http.js",
		"highlight/http"
	],
	"./hy": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		"highlight/hy"
	],
	"./hy.js": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		"highlight/hy"
	],
	"./inform7": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		"highlight/inform7"
	],
	"./inform7.js": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		"highlight/inform7"
	],
	"./ini": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		"highlight/ini"
	],
	"./ini.js": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		"highlight/ini"
	],
	"./irpf90": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		"highlight/irpf90"
	],
	"./irpf90.js": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		"highlight/irpf90"
	],
	"./isbl": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		"highlight/isbl"
	],
	"./isbl.js": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		"highlight/isbl"
	],
	"./java": [
		"./node_modules/highlight.js/lib/languages/java.js",
		"highlight/java"
	],
	"./java.js": [
		"./node_modules/highlight.js/lib/languages/java.js",
		"highlight/java"
	],
	"./javascript": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		"highlight/javascript"
	],
	"./javascript.js": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		"highlight/javascript"
	],
	"./jboss-cli": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		"highlight/jboss-cli"
	],
	"./jboss-cli.js": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		"highlight/jboss-cli"
	],
	"./json": [
		"./node_modules/highlight.js/lib/languages/json.js",
		"highlight/json"
	],
	"./json.js": [
		"./node_modules/highlight.js/lib/languages/json.js",
		"highlight/json"
	],
	"./julia": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		"highlight/julia"
	],
	"./julia-repl": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		"highlight/julia-repl"
	],
	"./julia-repl.js": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		"highlight/julia-repl"
	],
	"./julia.js": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		"highlight/julia"
	],
	"./kotlin": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		"highlight/kotlin"
	],
	"./kotlin.js": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		"highlight/kotlin"
	],
	"./lasso": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		"highlight/lasso"
	],
	"./lasso.js": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		"highlight/lasso"
	],
	"./latex": [
		"./node_modules/highlight.js/lib/languages/latex.js",
		"highlight/latex"
	],
	"./latex.js": [
		"./node_modules/highlight.js/lib/languages/latex.js",
		"highlight/latex"
	],
	"./ldif": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		"highlight/ldif"
	],
	"./ldif.js": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		"highlight/ldif"
	],
	"./leaf": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		"highlight/leaf"
	],
	"./leaf.js": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		"highlight/leaf"
	],
	"./less": [
		"./node_modules/highlight.js/lib/languages/less.js",
		"highlight/less"
	],
	"./less.js": [
		"./node_modules/highlight.js/lib/languages/less.js",
		"highlight/less"
	],
	"./lisp": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		"highlight/lisp"
	],
	"./lisp.js": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		"highlight/lisp"
	],
	"./livecodeserver": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		"highlight/livecodeserver"
	],
	"./livecodeserver.js": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		"highlight/livecodeserver"
	],
	"./livescript": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		"highlight/livescript"
	],
	"./livescript.js": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		"highlight/livescript"
	],
	"./llvm": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		"highlight/llvm"
	],
	"./llvm.js": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		"highlight/llvm"
	],
	"./lsl": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		"highlight/lsl"
	],
	"./lsl.js": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		"highlight/lsl"
	],
	"./lua": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		"highlight/lua"
	],
	"./lua.js": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		"highlight/lua"
	],
	"./makefile": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		"highlight/makefile"
	],
	"./makefile.js": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		"highlight/makefile"
	],
	"./markdown": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		"highlight/markdown"
	],
	"./markdown.js": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		"highlight/markdown"
	],
	"./mathematica": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		"highlight/mathematica"
	],
	"./mathematica.js": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		"highlight/mathematica"
	],
	"./matlab": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		"highlight/matlab"
	],
	"./matlab.js": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		"highlight/matlab"
	],
	"./maxima": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		"highlight/maxima"
	],
	"./maxima.js": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		"highlight/maxima"
	],
	"./mel": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		"highlight/mel"
	],
	"./mel.js": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		"highlight/mel"
	],
	"./mercury": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		"highlight/mercury"
	],
	"./mercury.js": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		"highlight/mercury"
	],
	"./mipsasm": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		"highlight/mipsasm"
	],
	"./mipsasm.js": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		"highlight/mipsasm"
	],
	"./mizar": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		"highlight/mizar"
	],
	"./mizar.js": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		"highlight/mizar"
	],
	"./mojolicious": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		"highlight/mojolicious"
	],
	"./mojolicious.js": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		"highlight/mojolicious"
	],
	"./monkey": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		"highlight/monkey"
	],
	"./monkey.js": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		"highlight/monkey"
	],
	"./moonscript": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		"highlight/moonscript"
	],
	"./moonscript.js": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		"highlight/moonscript"
	],
	"./n1ql": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		"highlight/n1ql"
	],
	"./n1ql.js": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		"highlight/n1ql"
	],
	"./nginx": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		"highlight/nginx"
	],
	"./nginx.js": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		"highlight/nginx"
	],
	"./nim": [
		"./node_modules/highlight.js/lib/languages/nim.js",
		"highlight/nim"
	],
	"./nim.js": [
		"./node_modules/highlight.js/lib/languages/nim.js",
		"highlight/nim"
	],
	"./nix": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		"highlight/nix"
	],
	"./nix.js": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		"highlight/nix"
	],
	"./node-repl": [
		"./node_modules/highlight.js/lib/languages/node-repl.js",
		"highlight/node-repl"
	],
	"./node-repl.js": [
		"./node_modules/highlight.js/lib/languages/node-repl.js",
		"highlight/node-repl"
	],
	"./nsis": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		"highlight/nsis"
	],
	"./nsis.js": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		"highlight/nsis"
	],
	"./objectivec": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		"highlight/objectivec"
	],
	"./objectivec.js": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		"highlight/objectivec"
	],
	"./ocaml": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		"highlight/ocaml"
	],
	"./ocaml.js": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		"highlight/ocaml"
	],
	"./openscad": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		"highlight/openscad"
	],
	"./openscad.js": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		"highlight/openscad"
	],
	"./oxygene": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		"highlight/oxygene"
	],
	"./oxygene.js": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		"highlight/oxygene"
	],
	"./parser3": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		"highlight/parser3"
	],
	"./parser3.js": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		"highlight/parser3"
	],
	"./perl": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		"highlight/perl"
	],
	"./perl.js": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		"highlight/perl"
	],
	"./pf": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		"highlight/pf"
	],
	"./pf.js": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		"highlight/pf"
	],
	"./pgsql": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		"highlight/pgsql"
	],
	"./pgsql.js": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		"highlight/pgsql"
	],
	"./php": [
		"./node_modules/highlight.js/lib/languages/php.js",
		"highlight/php"
	],
	"./php-template": [
		"./node_modules/highlight.js/lib/languages/php-template.js",
		"highlight/php-template"
	],
	"./php-template.js": [
		"./node_modules/highlight.js/lib/languages/php-template.js",
		"highlight/php-template"
	],
	"./php.js": [
		"./node_modules/highlight.js/lib/languages/php.js",
		"highlight/php"
	],
	"./plaintext": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		"highlight/plaintext"
	],
	"./plaintext.js": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		"highlight/plaintext"
	],
	"./pony": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		"highlight/pony"
	],
	"./pony.js": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		"highlight/pony"
	],
	"./powershell": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		"highlight/powershell"
	],
	"./powershell.js": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		"highlight/powershell"
	],
	"./processing": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		"highlight/processing"
	],
	"./processing.js": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		"highlight/processing"
	],
	"./profile": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		"highlight/profile"
	],
	"./profile.js": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		"highlight/profile"
	],
	"./prolog": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		"highlight/prolog"
	],
	"./prolog.js": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		"highlight/prolog"
	],
	"./properties": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		"highlight/properties"
	],
	"./properties.js": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		"highlight/properties"
	],
	"./protobuf": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		"highlight/protobuf"
	],
	"./protobuf.js": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		"highlight/protobuf"
	],
	"./puppet": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		"highlight/puppet"
	],
	"./puppet.js": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		"highlight/puppet"
	],
	"./purebasic": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		"highlight/purebasic"
	],
	"./purebasic.js": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		"highlight/purebasic"
	],
	"./python": [
		"./node_modules/highlight.js/lib/languages/python.js",
		"highlight/python"
	],
	"./python-repl": [
		"./node_modules/highlight.js/lib/languages/python-repl.js",
		"highlight/python-repl"
	],
	"./python-repl.js": [
		"./node_modules/highlight.js/lib/languages/python-repl.js",
		"highlight/python-repl"
	],
	"./python.js": [
		"./node_modules/highlight.js/lib/languages/python.js",
		"highlight/python"
	],
	"./q": [
		"./node_modules/highlight.js/lib/languages/q.js",
		"highlight/q"
	],
	"./q.js": [
		"./node_modules/highlight.js/lib/languages/q.js",
		"highlight/q"
	],
	"./qml": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		"highlight/qml"
	],
	"./qml.js": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		"highlight/qml"
	],
	"./r": [
		"./node_modules/highlight.js/lib/languages/r.js",
		"highlight/r"
	],
	"./r.js": [
		"./node_modules/highlight.js/lib/languages/r.js",
		"highlight/r"
	],
	"./reasonml": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		"highlight/reasonml"
	],
	"./reasonml.js": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		"highlight/reasonml"
	],
	"./rib": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		"highlight/rib"
	],
	"./rib.js": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		"highlight/rib"
	],
	"./roboconf": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		"highlight/roboconf"
	],
	"./roboconf.js": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		"highlight/roboconf"
	],
	"./routeros": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		"highlight/routeros"
	],
	"./routeros.js": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		"highlight/routeros"
	],
	"./rsl": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		"highlight/rsl"
	],
	"./rsl.js": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		"highlight/rsl"
	],
	"./ruby": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		"highlight/ruby"
	],
	"./ruby.js": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		"highlight/ruby"
	],
	"./ruleslanguage": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		"highlight/ruleslanguage"
	],
	"./ruleslanguage.js": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		"highlight/ruleslanguage"
	],
	"./rust": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		"highlight/rust"
	],
	"./rust.js": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		"highlight/rust"
	],
	"./sas": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		"highlight/sas"
	],
	"./sas.js": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		"highlight/sas"
	],
	"./scala": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		"highlight/scala"
	],
	"./scala.js": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		"highlight/scala"
	],
	"./scheme": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		"highlight/scheme"
	],
	"./scheme.js": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		"highlight/scheme"
	],
	"./scilab": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		"highlight/scilab"
	],
	"./scilab.js": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		"highlight/scilab"
	],
	"./scss": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		"highlight/scss"
	],
	"./scss.js": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		"highlight/scss"
	],
	"./shell": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		"highlight/shell"
	],
	"./shell.js": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		"highlight/shell"
	],
	"./smali": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		"highlight/smali"
	],
	"./smali.js": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		"highlight/smali"
	],
	"./smalltalk": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		"highlight/smalltalk"
	],
	"./smalltalk.js": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		"highlight/smalltalk"
	],
	"./sml": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		"highlight/sml"
	],
	"./sml.js": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		"highlight/sml"
	],
	"./sqf": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		"highlight/sqf"
	],
	"./sqf.js": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		"highlight/sqf"
	],
	"./sql": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		"highlight/sql"
	],
	"./sql.js": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		"highlight/sql"
	],
	"./sql_more": [
		"./node_modules/highlight.js/lib/languages/sql_more.js",
		"highlight/sql_more"
	],
	"./sql_more.js": [
		"./node_modules/highlight.js/lib/languages/sql_more.js",
		"highlight/sql_more"
	],
	"./stan": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		"highlight/stan"
	],
	"./stan.js": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		"highlight/stan"
	],
	"./stata": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		"highlight/stata"
	],
	"./stata.js": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		"highlight/stata"
	],
	"./step21": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		"highlight/step21"
	],
	"./step21.js": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		"highlight/step21"
	],
	"./stylus": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		"highlight/stylus"
	],
	"./stylus.js": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		"highlight/stylus"
	],
	"./subunit": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		"highlight/subunit"
	],
	"./subunit.js": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		"highlight/subunit"
	],
	"./swift": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		"highlight/swift"
	],
	"./swift.js": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		"highlight/swift"
	],
	"./taggerscript": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		"highlight/taggerscript"
	],
	"./taggerscript.js": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		"highlight/taggerscript"
	],
	"./tap": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		"highlight/tap"
	],
	"./tap.js": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		"highlight/tap"
	],
	"./tcl": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		"highlight/tcl"
	],
	"./tcl.js": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		"highlight/tcl"
	],
	"./thrift": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		"highlight/thrift"
	],
	"./thrift.js": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		"highlight/thrift"
	],
	"./tp": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		"highlight/tp"
	],
	"./tp.js": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		"highlight/tp"
	],
	"./twig": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		"highlight/twig"
	],
	"./twig.js": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		"highlight/twig"
	],
	"./typescript": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		"highlight/typescript"
	],
	"./typescript.js": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		"highlight/typescript"
	],
	"./vala": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		"highlight/vala"
	],
	"./vala.js": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		"highlight/vala"
	],
	"./vbnet": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		"highlight/vbnet"
	],
	"./vbnet.js": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		"highlight/vbnet"
	],
	"./vbscript": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		"highlight/vbscript"
	],
	"./vbscript-html": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		"highlight/vbscript-html"
	],
	"./vbscript-html.js": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		"highlight/vbscript-html"
	],
	"./vbscript.js": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		"highlight/vbscript"
	],
	"./verilog": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		"highlight/verilog"
	],
	"./verilog.js": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		"highlight/verilog"
	],
	"./vhdl": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		"highlight/vhdl"
	],
	"./vhdl.js": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		"highlight/vhdl"
	],
	"./vim": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		"highlight/vim"
	],
	"./vim.js": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		"highlight/vim"
	],
	"./x86asm": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		"highlight/x86asm"
	],
	"./x86asm.js": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		"highlight/x86asm"
	],
	"./xl": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		"highlight/xl"
	],
	"./xl.js": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		"highlight/xl"
	],
	"./xml": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		"highlight/xml"
	],
	"./xml.js": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		"highlight/xml"
	],
	"./xquery": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		"highlight/xquery"
	],
	"./xquery.js": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		"highlight/xquery"
	],
	"./yaml": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		"highlight/yaml"
	],
	"./yaml.js": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		"highlight/yaml"
	],
	"./zephir": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		"highlight/zephir"
	],
	"./zephir.js": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		"highlight/zephir"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue":
/*!***************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& */ "./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&");
/* harmony import */ var _CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollisionResolveDialog.vue?vue&type=script&lang=js& */ "./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& */ "./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ffe7972",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/CollisionResolveDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/EditorWrapper.vue":
/*!******************************************!*\
  !*** ./src/components/EditorWrapper.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& */ "./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&");
/* harmony import */ var _EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=script&lang=js& */ "./src/components/EditorWrapper.vue?vue&type=script&lang=js&");
/* harmony import */ var _EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& */ "./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&");
/* harmony import */ var _EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=style&index=1&lang=scss& */ "./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76135766",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/EditorWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue":
/*!*******************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& */ "./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&");
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=script&lang=js& */ "./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& */ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& */ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ReadOnlyEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/nodes/ImageView.vue":
/*!*********************************!*\
  !*** ./src/nodes/ImageView.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& */ "./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&");
/* harmony import */ var _ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageView.vue?vue&type=script&lang=js& */ "./src/nodes/ImageView.vue?vue&type=script&lang=js&");
/* harmony import */ var _ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& */ "./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "336b1e4e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/nodes/ImageView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/DirectEditing.vue":
/*!*************************************!*\
  !*** ./src/views/DirectEditing.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DirectEditing.vue?vue&type=template&id=37e36225&scoped=true& */ "./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true&");
/* harmony import */ var _DirectEditing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DirectEditing.vue?vue&type=script&lang=js& */ "./src/views/DirectEditing.vue?vue&type=script&lang=js&");
/* harmony import */ var _DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& */ "./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DirectEditing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "37e36225",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/DirectEditing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollisionResolveDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/nodes/ImageView.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/nodes/ImageView.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/DirectEditing.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/DirectEditing.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DirectEditing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&":
/*!****************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&");


/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&");


/***/ }),

/***/ "./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&");


/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&");


/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&":
/*!**************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&");


/***/ }),

/***/ "./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&");


/***/ }),

/***/ "./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DirectEditing.vue?vue&type=template&id=37e36225&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      staticClass: "collision-resolve-dialog",
      attrs: { id: "resolve-conflicts" }
    },
    [
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.$emit("resolve-use-this-version")
            }
          }
        },
        [
          _vm._v(
            "\n\t\t" + _vm._s(_vm.t("text", "Use current version")) + "\n\t"
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.$emit("resolve-use-server-version")
            }
          }
        },
        [
          _vm._v(
            "\n\t\t" + _vm._s(_vm.t("text", "Use the saved version")) + "\n\t"
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { attrs: { id: "editor-container" } },
    [
      _vm.displayed
        ? _c("div", { staticClass: "document-status" }, [
            _vm.idle
              ? _c("p", { staticClass: "msg" }, [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(
                        _vm.t(
                          "text",
                          "Document idle for {timeout} minutes, click to continue editing",
                          { timeout: _vm.IDLE_TIMEOUT }
                        )
                      ) +
                      " "
                  ),
                  _c(
                    "a",
                    {
                      staticClass: "button primary",
                      on: { click: _vm.reconnect }
                    },
                    [_vm._v(_vm._s(_vm.t("text", "Reconnect")))]
                  )
                ])
              : _vm.hasSyncCollission
              ? _c("p", { staticClass: "msg icon-error" }, [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(
                        _vm.t(
                          "text",
                          "The document has been changed outside of the editor. The changes cannot be applied."
                        )
                      ) +
                      "\n\t\t"
                  )
                ])
              : _vm.hasConnectionIssue
              ? _c("p", { staticClass: "msg" }, [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(
                        _vm.t(
                          "text",
                          "File could not be loaded. Please check your internet connection."
                        )
                      ) +
                      " "
                  ),
                  _c(
                    "a",
                    {
                      staticClass: "button primary",
                      on: { click: _vm.reconnect }
                    },
                    [_vm._v(_vm._s(_vm.t("text", "Reconnect")))]
                  )
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.displayed
        ? _c(
            "div",
            {
              class: {
                "has-conflicts": _vm.hasSyncCollission,
                "icon-loading": !_vm.initialLoading && !_vm.hasConnectionIssue,
                richEditor: _vm.isRichEditor,
                "show-color-annotations": _vm.showAuthorAnnotations
              },
              attrs: { id: "editor-wrapper" }
            },
            [
              _vm.tiptap
                ? _c(
                    "div",
                    { attrs: { id: "editor" } },
                    [
                      _vm.initialLoading && !_vm.syncError && !_vm.readOnly
                        ? _c(
                            "MenuBar",
                            {
                              ref: "menubar",
                              attrs: {
                                editor: _vm.tiptap,
                                "sync-service": _vm.syncService,
                                "file-path": _vm.relativePath,
                                "is-rich-editor": _vm.isRichEditor,
                                "is-public": _vm.isPublic,
                                autohide: _vm.autohide,
                                loaded: _vm.menubarLoaded
                              },
                              on: {
                                "update:loaded": function($event) {
                                  _vm.menubarLoaded = $event
                                },
                                "show-help": _vm.showHelp
                              }
                            },
                            [
                              _c(
                                "div",
                                { attrs: { id: "editor-session-list" } },
                                [
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: _vm.lastSavedStatusTooltip,
                                          expression: "lastSavedStatusTooltip"
                                        }
                                      ],
                                      staticClass: "save-status",
                                      class: _vm.lastSavedStatusClass
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t" +
                                          _vm._s(_vm.lastSavedStatus) +
                                          "\n\t\t\t\t\t"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "SessionList",
                                    {
                                      attrs: { sessions: _vm.filteredSessions }
                                    },
                                    [
                                      _vm.isPublic &&
                                      _vm.currentSession.guestName
                                        ? _c("GuestNameDialog", {
                                            attrs: {
                                              "sync-service": _vm.syncService
                                            }
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm._t("header")
                            ],
                            2
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.menubarLoaded
                        ? _c("div", { staticClass: "menubar placeholder" })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          ref: "contentWrapper",
                          staticClass: "content-wrapper"
                        },
                        [
                          _vm.initialLoading &&
                          !_vm.readOnly &&
                          _vm.isRichEditor
                            ? _c("MenuBubble", {
                                attrs: {
                                  editor: _vm.tiptap,
                                  "content-wrapper": _vm.contentWrapper,
                                  "file-path": _vm.relativePath
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("EditorContent", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.initialLoading,
                                expression: "initialLoading"
                              }
                            ],
                            staticClass: "editor__content",
                            attrs: { editor: _vm.tiptap }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.hasSyncCollission
                ? _c("ReadOnlyEditor", {
                    attrs: {
                      content: _vm.syncError.data.outsideChange,
                      "is-rich-editor": _vm.isRichEditor
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.hasSyncCollission && !_vm.readOnly
        ? _c("CollisionResolveDialog", {
            on: {
              "resolve-use-this-version": _vm.resolveUseThisVersion,
              "resolve-use-server-version": _vm.resolveUseServerVersion
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.displayHelp
        ? _c("HelpModal", { on: { close: _vm.hideHelp } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.editor
    ? _c("EditorContent", {
        attrs: { id: "read-only-editor", editor: _vm.editor }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("NodeViewWrapper", [
    _c(
      "div",
      {
        staticClass: "image",
        class: { "icon-loading": !_vm.loaded },
        attrs: { "data-src": _vm.src }
      },
      [
        _vm.imageLoaded && _vm.isSupportedImage
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: function() {
                      return (_vm.showIcons = false)
                    },
                    expression: "() => showIcons = false"
                  }
                ],
                staticClass: "image__view",
                on: {
                  click: function($event) {
                    _vm.showIcons = true
                  },
                  mouseover: function($event) {
                    _vm.showIcons = true
                  },
                  mouseleave: function($event) {
                    _vm.showIcons = false
                  }
                }
              },
              [
                _c("transition", { attrs: { name: "fade" } }, [
                  _c("img", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loaded,
                        expression: "loaded"
                      }
                    ],
                    staticClass: "image__main",
                    attrs: { src: _vm.imageUrl },
                    on: { load: _vm.onLoaded }
                  })
                ]),
                _vm._v(" "),
                _c("transition", { attrs: { name: "fade" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.loaded,
                          expression: "loaded"
                        }
                      ],
                      staticClass: "image__caption"
                    },
                    [
                      _c("input", {
                        ref: "altInput",
                        attrs: { type: "text" },
                        domProps: { value: _vm.alt },
                        on: {
                          keyup: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.updateAlt()
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.showIcons
                        ? _c(
                            "div",
                            {
                              staticClass: "trash-icon",
                              attrs: { title: "Delete this image" },
                              on: { click: _vm.deleteNode }
                            },
                            [_c("TrashCanIcon")],
                            1
                          )
                        : _vm._e()
                    ]
                  )
                ])
              ],
              1
            )
          : _c(
              "div",
              [
                _c("transition", { attrs: { name: "fade" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.loaded,
                          expression: "loaded"
                        }
                      ]
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: _vm.internalLinkOrImage,
                            target: "_blank"
                          }
                        },
                        [
                          !_vm.isSupportedImage
                            ? _c("span", [_vm._v(_vm._s(_vm.alt))])
                            : _vm._e()
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.isSupportedImage
                  ? _c("transition", { attrs: { name: "fade" } }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.loaded,
                              expression: "loaded"
                            }
                          ],
                          staticClass: "image__caption"
                        },
                        [
                          _c("input", {
                            ref: "altInput",
                            attrs: { type: "text" },
                            domProps: { value: _vm.alt },
                            on: {
                              keyup: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm.updateAlt()
                              }
                            }
                          })
                        ]
                      )
                    ])
                  : _vm._e()
              ],
              1
            )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { class: { "icon-loading": _vm.saving }, attrs: { id: "direct-editor" } },
    [
      _c("EditorWrapper", {
        ref: "editor",
        attrs: {
          "initial-session": _vm.initialSession,
          active: true,
          mime: _vm.initial.mimetype,
          "is-direct-editing": true
        },
        on: { ready: _vm.loaded },
        scopedSlots: _vm._u([
          {
            key: "header",
            fn: function() {
              return [
                _c("button", {
                  staticClass: "icon-share",
                  on: { click: _vm.share }
                }),
                _vm._v(" "),
                _c("button", {
                  staticClass: "icon-close",
                  on: { click: _vm.close }
                })
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./img/checkbox-mark.svg":
/*!*******************************!*\
  !*** ./img/checkbox-mark.svg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld2JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxwYXRoIGQ9Ik0xMS45MjQgNC4wNjZsLTQuOTMyIDQuOTctMi44MjgtMi44M0wyLjc1IDcuNjE4bDQuMjQyIDQuMjQzIDYuMzY1LTYuMzY1LTEuNDMzLTEuNDMyeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=";

/***/ })

}]);
//# sourceMappingURL=editor.js.map?v=8acf11f502d8a3fa4c97