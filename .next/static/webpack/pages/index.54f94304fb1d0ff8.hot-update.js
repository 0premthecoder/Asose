"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AccountForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountForm */ \"./pages/components/AccountForm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [navactive, setNavactive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const togglepage = (active)=>{\n        setIsOpen(active);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        className: \"logo\",\n                        children: [\n                            \" \",\n                            \"ASOSE\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"navbar \".concat(navactive),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"close-navbar\",\n                                className: \"fas fa-times\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 17,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 18,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 19,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/courses\",\n                                children: \"Courses\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/contacts\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 21,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"icons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"account-btn\",\n                                onClick: ()=>togglepage(true),\n                                className: \"fas fa-user\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"menu-btn\",\n                                onClick: ()=>setNavactive(\"active\"),\n                                className: \"fas fa-bars\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 25,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AccountForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                togglepage: togglepage\n            }, void 0, false, {\n                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                lineNumber: 28,\n                columnNumber: 19\n            }, this) : null\n        ]\n    }, void 0, true);\n}\n_s(Header, \"iveg1kfLMQ32M1pLO/Sn8quvssA=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQUNBO0FBQ1o7QUFDNUIsU0FBU0ksU0FBUzs7SUFDZCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVEsYUFBYSxDQUFDQyxTQUFXO1FBQzNCSixVQUFVSTtJQUNkO0lBQ0EscUJBQU87OzBCQUNILDhEQUFDQztnQkFBT0MsV0FBVTs7a0NBQ2QsOERBQUNULGtEQUFJQTt3QkFBQ1UsTUFBSzt3QkFBSUQsV0FBVTs7NEJBQ3BCOzRCQUFJOzRCQUNDOzs7Ozs7O2tDQUVWLDhEQUFDRTt3QkFBSUYsV0FBVyxVQUFvQixPQUFWTDs7MENBQ3RCLDhEQUFDUTtnQ0FBSUMsSUFBRztnQ0FBZUosV0FBVTs7Ozs7OzBDQUNqQyw4REFBQ1Qsa0RBQUlBO2dDQUFDVSxNQUFLOzBDQUFJOzs7Ozs7MENBQ2YsOERBQUNWLGtEQUFJQTtnQ0FBQ1UsTUFBSzswQ0FBUzs7Ozs7OzBDQUNwQiw4REFBQ1Ysa0RBQUlBO2dDQUFDVSxNQUFLOzBDQUFXOzs7Ozs7MENBQ3RCLDhEQUFDVixrREFBSUE7Z0NBQUNVLE1BQUs7MENBQVk7Ozs7Ozs7Ozs7OztrQ0FFM0IsOERBQUNFO3dCQUFJSCxXQUFVOzswQ0FDWCw4REFBQ0c7Z0NBQUlDLElBQUc7Z0NBQWNDLFNBQVMsSUFBTVIsV0FBVyxJQUFJO2dDQUFHRyxXQUFVOzs7Ozs7MENBQ2pFLDhEQUFDRztnQ0FBSUMsSUFBRztnQ0FBV0MsU0FBUyxJQUFNVCxhQUFhO2dDQUFXSSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHM0VQLHVCQUFTLDhEQUFDSCxvREFBV0E7Z0JBQUNPLFlBQVlBOzs7Ozt1QkFBaUIsSUFBSTs7O0FBR2hFO0dBM0JTTDtLQUFBQTtBQTRCVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlci5qcz8zMTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFjY291bnRGb3JtIGZyb20gXCIuL0FjY291bnRGb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuYXZhY3RpdmUsIHNldE5hdmFjdGl2ZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCB0b2dnbGVwYWdlID0gKGFjdGl2ZSkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oYWN0aXZlKVxuICAgIH1cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICBBU09TRXtcIiBcIn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2YmFyICR7bmF2YWN0aXZlfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbG9zZS1uYXZiYXJcIiBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIiAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY291cnNlc1wiPkNvdXJzZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0c1wiPkNvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3VudC1idG5cIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVwYWdlKHRydWUpfSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnUtYnRuXCIgb25DbGljaz17KCkgPT4gc2V0TmF2YWN0aXZlKCdhY3RpdmUnKX0gY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICB7aXNPcGVuID8gPEFjY291bnRGb3JtIHRvZ2dsZXBhZ2U9e3RvZ2dsZXBhZ2V9IC8+IDogbnVsbH1cbiAgICA8Lz47XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFjY291bnRGb3JtIiwiTGluayIsIkhlYWRlciIsImlzT3BlbiIsInNldElzT3BlbiIsIm5hdmFjdGl2ZSIsInNldE5hdmFjdGl2ZSIsInRvZ2dsZXBhZ2UiLCJhY3RpdmUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwibmF2IiwiZGl2IiwiaWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Header.js\n"));

/***/ })

});