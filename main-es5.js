function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header #header (clear)=\"list.clearDirection()\" [memo]=\"memo\"></app-header>\r\n<app-list #list (edit)=\"editMemoInfo($event)\"></app-list>\r\n<app-popup></app-popup>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header [class.edit]=\"flags.edit\">\n  <h1>MEMO</h1>\n  <form #saveForm=\"ngForm\" (ngSubmit)=\"onSaveSubmit(saveForm)\" novalidate *ngIf=\"flags.saveFormShow\">\n     <textarea placeholder=\"메모를 작성해주세요.\" name=\"content\" ngModel required></textarea>\n     <div class=\"btn-group\">\n        <button type=\"submit\">저장</button>\n        <button type=\"reset\">다시작성</button>\n     </div>     \n  </form>\n  <form #saveForm=\"ngForm\" (ngSubmit)=\"onEditSubmit(saveForm)\" novalidate *ngIf=\"flags.editFormShow\">\n      <textarea [ngModel]=\"memo.content\" placeholder=\"메모를 작성해주세요.\" name=\"content\" required></textarea>      \n      <div class=\"btn-group\">\n         <button type=\"submit\">수정</button>\n         <button type=\"button\" (click)=\"onCancel()\">취소</button>\n      </div>\n   </form>\n</header>\n<button id=\"btn-delete-all\" class=\"material-icons\" (click)=\"removeConfirmShow()\">delete</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n  <ul id=\"memo-list\">\n     <li class=\"no-list\" *ngIf=\"memoList.length==0\">\n        <div class=\"content\">메모가 없습니다.</div>\n     </li>\n     <li *ngFor=\"let memo of memoList; index as i\" [class]=\"getDirection(i)\">\n        <div class=\"content\" (swipeleft)=\"swipeLeft(i)\" (swiperight)=\"swipeRight(i)\" (tap)=\"tap(i)\">\n           <span class=\"date\">{{memo.date}}</span>\n           <p>{{memo.content}}</p>\n        </div>\n        <button class=\"material-icons btn-edit\" (click)=\"editMemoShow(memo)\">edit</button>\n        <button class=\"material-icons btn-delete\" (click)=\"removeMemo(memo, i)\">delete</button>\n     </li>\n  </ul>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPopupPopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"popup-bg\" *ngIf=\"flags.popup\"></div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "editMemoInfo",
        value: function editMemoInfo(memo) {
          this.memo = memo;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _popup_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./popup/popup.component */
    "./src/app/popup/popup.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_7__["PopupComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* header =============================================== */\r\nheader{\r\n   position: relative;\r\n}\r\nheader.edit{\r\n   z-index: 20;\r\n}\r\nh1{\r\n   text-align: center;\r\n}\r\ntextarea{\r\n   resize: none;\r\n   display: block;\r\n   width: 100%;\r\n   height: 100px;\r\n   padding: 10px;\r\n   border:1px solid #000;\r\n   box-sizing: border-box;\r\n}\r\nform .btn-group{\r\n   margin-top:20px;\r\n   text-align: center;\r\n}\r\nform .btn-group button{\r\n   height: 30px;\r\n   margin: 0 5px;\r\n   padding: 0 10px;\r\n   background: #000;\r\n   color: #fff;\r\n}\r\nform .btn-group.edit{\r\n   display: none;\r\n}\r\nheader.edit .btn-group.save{display: none;}\r\nheader.edit .btn-group.edit{display: block;}\r\n#btn-delete-all{\r\n   position: absolute;\r\n   right:20px; \r\n   top:20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDtBQUMzRDtHQUNHLGtCQUFrQjtBQUNyQjtBQUNBO0dBQ0csV0FBVztBQUNkO0FBQ0E7R0FDRyxrQkFBa0I7QUFDckI7QUFDQTtHQUNHLFlBQVk7R0FDWixjQUFjO0dBQ2QsV0FBVztHQUNYLGFBQWE7R0FDYixhQUFhO0dBQ2IscUJBQXFCO0dBQ3JCLHNCQUFzQjtBQUN6QjtBQUNBO0dBQ0csZUFBZTtHQUNmLGtCQUFrQjtBQUNyQjtBQUNBO0dBQ0csWUFBWTtHQUNaLGFBQWE7R0FDYixlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLFdBQVc7QUFDZDtBQUNBO0dBQ0csYUFBYTtBQUNoQjtBQUNBLDRCQUE0QixhQUFhLENBQUM7QUFDMUMsNEJBQTRCLGNBQWMsQ0FBQztBQUUzQztHQUNHLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsUUFBUTtBQUNYIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGVhZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmhlYWRlcntcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmhlYWRlci5lZGl0e1xyXG4gICB6LWluZGV4OiAyMDtcclxufVxyXG5oMXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICByZXNpemU6IG5vbmU7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAxMDBweDtcclxuICAgcGFkZGluZzogMTBweDtcclxuICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xyXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmZvcm0gLmJ0bi1ncm91cHtcclxuICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZm9ybSAuYnRuLWdyb3VwIGJ1dHRvbntcclxuICAgaGVpZ2h0OiAzMHB4O1xyXG4gICBtYXJnaW46IDAgNXB4O1xyXG4gICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbmZvcm0gLmJ0bi1ncm91cC5lZGl0e1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmhlYWRlci5lZGl0IC5idG4tZ3JvdXAuc2F2ZXtkaXNwbGF5OiBub25lO31cclxuaGVhZGVyLmVkaXQgLmJ0bi1ncm91cC5lZGl0e2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbiNidG4tZGVsZXRlLWFsbHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICByaWdodDoyMHB4OyBcclxuICAgdG9wOjIwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_memo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/memo.service */
    "./src/app/service/memo.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(memoService) {
        var _this = this;

        _classCallCheck(this, HeaderComponent);

        this.memoService = memoService;
        /*
          header컴포넌트에 이벤트가 발생되었을 때 onCancel()가 호출되며
          list컴포넌트에 있는 템플릿 li의 클래스가 초기화가 되어야한다.
          초기화가 될려면 list컴포넌트의 clearDirection()메소드를 사용해야한다.
          하지만 컴포넌트끼리는 독립적인 스코프를 가지고 있기 때문에 직접적으로
          접근하면 오류가 발생된다.
          따라서 자식컴포넌트가 부모컴포넌트로 어떤 이벤트가 발생되었을때
          감지할 수 있도록 emit()메소드를 호출한다.
          Output 자식컴포넌트 이벤트 발생 => 부모컴포넌트 감지
          부모컴포넌트는 자식의 메소드를 제어할 수 있다.
        */

        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.memoService.currentFlag.subscribe(function (flags) {
          return _this.flags = flags;
        });
        this.memoService.currentMemoList.subscribe(function (memoList) {
          return _this.memoList = memoList;
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // 전체삭제 메세지창 띄우기 

      }, {
        key: "removeConfirmShow",
        value: function removeConfirmShow() {
          var result = confirm('메모를 전체 삭제 하시겠습니까?');

          if (result) {
            this.memoService.removeAll();
          }
        }
      }, {
        key: "onSaveSubmit",
        value: function onSaveSubmit(saveForm) {
          if (!saveForm.form.valid) {
            //textarea의 값이 없을 때
            alert('메모를 입력해주세요.');
          } else {
            //textarea의 값이 있을 때 
            var newMemo = {
              date: this.memoService.getDate(),
              content: saveForm.form.controls.content.value
            }; //새로운 메모를 배열에 넣는다.

            this.memoList.unshift(newMemo);
            this.memoService.setMemoList(this.memoList.slice().reverse()); //다시 메모를 저장할 수 있도록 폼 초기화

            saveForm.reset();
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.flags.edit = false;
          this.flags.popup = false;
          this.flags.editFormShow = false;
          this.flags.saveFormShow = true;
          this.memoService.changeFlag(this.flags); // 취소를 누르면 리스트의 클래스 값을 모두 초기화해야한다. 

          this.clear.emit();
        }
      }, {
        key: "onEditSubmit",
        value: function onEditSubmit(editForm) {
          if (!editForm.form.valid) {
            alert('메모를 입력해주세요.');
          } else {
            var content = editForm.form.controls.content.value;
            this.memoService.update(this.memo, content);
            this.flags.edit = false;
            this.flags.popup = false;
            this.flags.editFormShow = false;
            this.flags.saveFormShow = true;
            this.memoService.changeFlag(this.flags);
            this.clear.emit();
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _service_memo_service__WEBPACK_IMPORTED_MODULE_2__["MemoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "clear", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "memo", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/list/list.component.css":
  /*!*****************************************!*\
    !*** ./src/app/list/list.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppListListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* section ========================================== */\r\nsection{\r\n   padding-top: 20px;   \r\n}\r\n#memo-list{\r\n   overflow: auto;\r\n   height: 100%;\r\n   border-top:2px solid #000;\r\n   border-bottom:2px solid #000;\r\n   box-sizing: border-box;\r\n}\r\n#memo-list li{\r\n   overflow: hidden;\r\n   position: relative;\r\n   list-style: none;\r\n   border-bottom:1px solid #000;\r\n   background: #ccc;\r\n}\r\n#memo-list li:last-child{\r\n   border-bottom:none;\r\n}\r\n#memo-list li .content{\r\n   z-index: 1;\r\n   position: relative;\r\n   left:0;\r\n   padding: 15px;\r\n   background: #fff;\r\n   transition: left 0.5s;\r\n}\r\n#memo-list li .content .date{\r\n   color:#2196f3;\r\n}\r\n#memo-list li .content p{\r\n   text-align: justify;\r\n   white-space: pre-line;\r\n}\r\n/* 애니메이션 효과 */\r\n#memo-list li.left .content{\r\n   left:-45px;\r\n}\r\n#memo-list li.right .content{\r\n   left:45px;\r\n}\r\n#memo-list li.no-list .content{\r\n   text-align: center;\r\n   left:0;\r\n}\r\n/* 리스트안의 수정, 삭제버튼 */\r\n#memo-list li button{\r\n   position: absolute;\r\n   top:50%; \r\n   transform: translateY(-50%);   \r\n}\r\n#memo-list li .btn-delete{\r\n   right:10px;\r\n}\r\n#memo-list li .btn-edit{\r\n   left:10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZEO0dBQ0csaUJBQWlCO0FBQ3BCO0FBQ0E7R0FDRyxjQUFjO0dBQ2QsWUFBWTtHQUNaLHlCQUF5QjtHQUN6Qiw0QkFBNEI7R0FDNUIsc0JBQXNCO0FBQ3pCO0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQiw0QkFBNEI7R0FDNUIsZ0JBQWdCO0FBQ25CO0FBQ0E7R0FDRyxrQkFBa0I7QUFDckI7QUFDQTtHQUNHLFVBQVU7R0FDVixrQkFBa0I7R0FDbEIsTUFBTTtHQUNOLGFBQWE7R0FDYixnQkFBZ0I7R0FDaEIscUJBQXFCO0FBQ3hCO0FBQ0E7R0FDRyxhQUFhO0FBQ2hCO0FBQ0E7R0FDRyxtQkFBbUI7R0FDbkIscUJBQXFCO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0dBQ0csVUFBVTtBQUNiO0FBQ0E7R0FDRyxTQUFTO0FBQ1o7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixNQUFNO0FBQ1Q7QUFDQSxtQkFBbUI7QUFDbkI7R0FDRyxrQkFBa0I7R0FDbEIsT0FBTztHQUNQLDJCQUEyQjtBQUM5QjtBQUNBO0dBQ0csVUFBVTtBQUNiO0FBQ0E7R0FDRyxTQUFTO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHNlY3Rpb24gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbnNlY3Rpb257XHJcbiAgIHBhZGRpbmctdG9wOiAyMHB4OyAgIFxyXG59XHJcbiNtZW1vLWxpc3R7XHJcbiAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIGJvcmRlci10b3A6MnB4IHNvbGlkICMwMDA7XHJcbiAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMwMDA7XHJcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuI21lbW8tbGlzdCBsaXtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMDAwO1xyXG4gICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcbiNtZW1vLWxpc3QgbGk6bGFzdC1jaGlsZHtcclxuICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcbiNtZW1vLWxpc3QgbGkgLmNvbnRlbnR7XHJcbiAgIHotaW5kZXg6IDE7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgbGVmdDowO1xyXG4gICBwYWRkaW5nOiAxNXB4O1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XHJcbn1cclxuI21lbW8tbGlzdCBsaSAuY29udGVudCAuZGF0ZXtcclxuICAgY29sb3I6IzIxOTZmMztcclxufVxyXG4jbWVtby1saXN0IGxpIC5jb250ZW50IHB7XHJcbiAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4vKiDslaDri4jrqZTsnbTshZgg7Zqo6rO8ICovXHJcbiNtZW1vLWxpc3QgbGkubGVmdCAuY29udGVudHtcclxuICAgbGVmdDotNDVweDtcclxufVxyXG4jbWVtby1saXN0IGxpLnJpZ2h0IC5jb250ZW50e1xyXG4gICBsZWZ0OjQ1cHg7XHJcbn1cclxuI21lbW8tbGlzdCBsaS5uby1saXN0IC5jb250ZW50e1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGxlZnQ6MDtcclxufVxyXG4vKiDrpqzsiqTtirjslYjsnZgg7IiY7KCVLCDsgq3soJzrsoTtirwgKi9cclxuI21lbW8tbGlzdCBsaSBidXR0b257XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOjUwJTsgXHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgICBcclxufVxyXG4jbWVtby1saXN0IGxpIC5idG4tZGVsZXRle1xyXG4gICByaWdodDoxMHB4O1xyXG59XHJcbiNtZW1vLWxpc3QgbGkgLmJ0bi1lZGl0e1xyXG4gICBsZWZ0OjEwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_memo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/memo.service */
    "./src/app/service/memo.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(memoService) {
        var _this2 = this;

        _classCallCheck(this, ListComponent);

        this.memoService = memoService;
        this.memoList = []; //부모컴포넌트에게 수정하기위한 메모 상태 정보 전달

        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //서비스목록 중에서 현재 메모리스트의 상태를 가져오기

        this.memoService.currentMemoList.subscribe(function (memoList) {
          return _this2.memoList = memoList;
        }); //서비스목록 중에서 현재 논리값 상태를 가져오기

        this.memoService.currentFlag.subscribe(function (flags) {
          return _this2.flags = flags;
        });
        this.clearDirection();
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // 리사이즈시 section의 높이 구하기 
          jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).resize(function () {
            var windowH = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).height();
            var headerH = jquery__WEBPACK_IMPORTED_MODULE_3___default()('header').height();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('section').innerHeight(windowH - headerH - 40);
          }).resize();
        } //방향 초기화

      }, {
        key: "clearDirection",
        value: function clearDirection() {
          var _this3 = this;

          this.direction = []; // 메모의 수만큼 방향값을 초기화

          this.memoList.forEach(function (memo) {
            _this3.direction.push("");
          });
        }
      }, {
        key: "swipeLeft",
        value: function swipeLeft(index) {
          this.clearDirection();
          this.direction[index] = "left";
        }
      }, {
        key: "swipeRight",
        value: function swipeRight(index) {
          this.clearDirection();
          this.direction[index] = "right";
        }
      }, {
        key: "tap",
        value: function tap(index) {
          this.clearDirection();
        }
      }, {
        key: "getDirection",
        value: function getDirection(index) {
          return this.direction[index];
        }
      }, {
        key: "editMemoShow",
        value: function editMemoShow(memo) {
          this.flags.editFormShow = true;
          this.flags.saveFormShow = false;
          this.flags.popup = true;
          this.flags.edit = true;
          this.memoService.changeFlag(this.flags); //edit이벤트가 발생될 때 한건에 대한 memo를 전달해준다.

          this.edit.emit(memo);
        }
      }, {
        key: "removeMemo",
        value: function removeMemo(memo, index) {
          this.tap(index);
          this.memoService.remove(memo.date);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _service_memo_service__WEBPACK_IMPORTED_MODULE_2__["MemoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ListComponent.prototype, "edit", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.css */
      "./src/app/list/list.component.css")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/popup/popup.component.css":
  /*!*******************************************!*\
    !*** ./src/app/popup/popup.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPopupPopupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* 레이어팝업 */\r\n.popup-bg{\r\n   z-index: 10;\r\n   position: fixed;\r\n   top:0; \r\n   left:0;\r\n   right:0;\r\n   bottom:0;\r\n   background: rgba(0,0,0,0.5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdXAvcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1Y7R0FDRyxXQUFXO0dBQ1gsZUFBZTtHQUNmLEtBQUs7R0FDTCxNQUFNO0dBQ04sT0FBTztHQUNQLFFBQVE7R0FDUiwyQkFBMkI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wb3B1cC9wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyog66CI7J207Ja07Yyd7JeFICovXHJcbi5wb3B1cC1iZ3tcclxuICAgei1pbmRleDogMTA7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgdG9wOjA7IFxyXG4gICBsZWZ0OjA7XHJcbiAgIHJpZ2h0OjA7XHJcbiAgIGJvdHRvbTowO1xyXG4gICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/popup/popup.component.ts":
  /*!******************************************!*\
    !*** ./src/app/popup/popup.component.ts ***!
    \******************************************/

  /*! exports provided: PopupComponent */

  /***/
  function srcAppPopupPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupComponent", function () {
      return PopupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_memo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/memo.service */
    "./src/app/service/memo.service.ts");

    var PopupComponent =
    /*#__PURE__*/
    function () {
      function PopupComponent(memoService) {
        var _this4 = this;

        _classCallCheck(this, PopupComponent);

        this.memoService = memoService;
        this.memoService.currentFlag.subscribe(function (flags) {
          return _this4.flags = flags;
        });
      }

      _createClass(PopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PopupComponent;
    }();

    PopupComponent.ctorParameters = function () {
      return [{
        type: _service_memo_service__WEBPACK_IMPORTED_MODULE_2__["MemoService"]
      }];
    };

    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popup.component.css */
      "./src/app/popup/popup.component.css")).default]
    })], PopupComponent);
    /***/
  },

  /***/
  "./src/app/service/demo.ts":
  /*!*********************************!*\
    !*** ./src/app/service/demo.ts ***!
    \*********************************/

  /*! exports provided: demo */

  /***/
  function srcAppServiceDemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "demo", function () {
      return demo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var demo = [{
      "date": "2019. 12. 11 오후 3:25:24",
      "content": "샘플 메모입니다."
    }, {
      "date": "2019. 12. 11 오후 3:26:18",
      "content": "메모를 왼쪽으로 밀면 삭제할 수 있습니다."
    }, {
      "date": "2019. 12. 11 오후 3:26:53",
      "content": "메모를 오른쪽으로 밀면 수정할 수 있습니다."
    }, {
      "date": "2019. 12. 11 오후 3:27:10",
      "content": "전체삭제는 상단의 휴지통 아이콘을 눌러주세요."
    }];
    /***/
  },

  /***/
  "./src/app/service/memo.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/memo.service.ts ***!
    \*****************************************/

  /*! exports provided: MemoService */

  /***/
  function srcAppServiceMemoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemoService", function () {
      return MemoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./demo */
    "./src/app/service/demo.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MemoService =
    /*#__PURE__*/
    function () {
      // 생성자
      function MemoService() {
        _classCallCheck(this, MemoService);

        this.flags = {
          saveFormShow: true,
          editFormShow: false,
          popup: false,
          edit: false
        }; //데이터 스트림을 생성하고 방출하는 객체생성(Observable)
        //컴포넌트에서 공유하는 데이터 

        this.memoListSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.getMemoList().slice().reverse());
        this.flagSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.flags); //현재 메모리스트의 상태

        this.currentMemoList = this.memoListSource.asObservable(); //현재 논리값의 상태

        this.currentFlag = this.flagSource.asObservable();
      } // 기능 목록 
      // 1. 저장소에 메모 저장하기 


      _createClass(MemoService, [{
        key: "setMemoList",
        value: function setMemoList(memoList) {
          var jsonMemo = JSON.stringify(memoList);
          localStorage.setItem('memo', jsonMemo);
        } //2. 저장소에서 메모 가져오기 

      }, {
        key: "getMemoList",
        value: function getMemoList() {
          var jsonMemo = localStorage.getItem('memo');

          if (jsonMemo == null) {
            // 앱에 처음 접속했을 때 데이터가 없으므로 최초에 한번 저장소에 넣어준다. 
            this.setMemoList(_demo__WEBPACK_IMPORTED_MODULE_2__["demo"]); // 데모데이터를 리턴한다.

            return _demo__WEBPACK_IMPORTED_MODULE_2__["demo"];
          } else {
            //JSON문자열=>object인 배열로 변환해서 리턴 
            return JSON.parse(jsonMemo);
          }
        } //3. 메모의 고유아이디값이 되는 date값 리턴

      }, {
        key: "getDate",
        value: function getDate() {
          var date = new Date().toLocaleDateString();
          date = date.slice(0, -1);
          var time = new Date().toLocaleTimeString();
          return date + ' ' + time;
        } //4. 변경된 메모를 갱신처리하기

      }, {
        key: "changeMemoList",
        value: function changeMemoList() {
          this.memoListSource.next(this.getMemoList().slice().reverse());
        } //5. 메모한건 삭제 

      }, {
        key: "remove",
        value: function remove(date) {
          var memoList = this.getMemoList();

          for (var i in memoList) {
            if (memoList[i].date == date) {
              memoList.splice(i, 1);
              break;
            }
          }

          this.setMemoList(memoList);
          this.changeMemoList();
        } //6. 메모 모두 삭제 

      }, {
        key: "removeAll",
        value: function removeAll() {
          this.setMemoList([]);
          this.changeMemoList();
        } //7. 변경된 논리값 갱신처리

      }, {
        key: "changeFlag",
        value: function changeFlag(flags) {
          this.flagSource.next(flags);
        } //8. 메모 수정하기 

      }, {
        key: "update",
        value: function update(memo, content) {
          var memoList = this.getMemoList();

          for (var i in memoList) {
            if (memoList[i].date == memo.date) {
              memoList[i].content = content;
              break;
            }
          }

          this.setMemoList(memoList);
          this.changeMemoList();
        }
      }]);

      return MemoService;
    }();

    MemoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MemoService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! e:\윤아영\08.웹표준코딩실무-아영\05.angular\memo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map