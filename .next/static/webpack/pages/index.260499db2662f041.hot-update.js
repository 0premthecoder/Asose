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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AccountForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountForm */ \"./pages/components/AccountForm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [navactive, setNavactive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const togglepage = (active)=>{\n        setIsOpen(active);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        className: \"logo\",\n                        children: [\n                            \" \",\n                            \"ASOSE\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"navbar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"close-navbar\",\n                                className: \"fas fa-times\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 17,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 18,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 19,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/courses\",\n                                children: \"Courses\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/contacts\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 21,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"icons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"account-btn\",\n                                onClick: ()=>togglepage(true),\n                                className: \"fas fa-user\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"menu-btn\",\n                                onClick: ()=>setNavactive(\"active\"),\n                                className: \"fas fa-bars\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                                lineNumber: 25,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AccountForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                togglepage: togglepage\n            }, void 0, false, {\n                fileName: \"/workspaces/Asose/pages/components/Header.js\",\n                lineNumber: 28,\n                columnNumber: 19\n            }, this) : null\n        ]\n    }, void 0, true);\n}\n_s(Header, \"iveg1kfLMQ32M1pLO/Sn8quvssA=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQUNBO0FBQ1o7QUFDNUIsU0FBU0ksU0FBUzs7SUFDZCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTVEsYUFBYSxDQUFDQyxTQUFXO1FBQzNCSixVQUFVSTtJQUNkO0lBQ0EscUJBQU87OzBCQUNILDhEQUFDQztnQkFBT0MsV0FBVTs7a0NBQ2QsOERBQUNULGtEQUFJQTt3QkFBQ1UsTUFBSzt3QkFBSUQsV0FBVTs7NEJBQ3BCOzRCQUFJOzRCQUNDOzs7Ozs7O2tDQUVWLDhEQUFDRTt3QkFBSUYsV0FBVTs7MENBQ1gsOERBQUNHO2dDQUFJQyxJQUFHO2dDQUFlSixXQUFVOzs7Ozs7MENBQ2pDLDhEQUFDVCxrREFBSUE7Z0NBQUNVLE1BQUs7MENBQUk7Ozs7OzswQ0FDZiw4REFBQ1Ysa0RBQUlBO2dDQUFDVSxNQUFLOzBDQUFTOzs7Ozs7MENBQ3BCLDhEQUFDVixrREFBSUE7Z0NBQUNVLE1BQUs7MENBQVc7Ozs7OzswQ0FDdEIsOERBQUNWLGtEQUFJQTtnQ0FBQ1UsTUFBSzswQ0FBWTs7Ozs7Ozs7Ozs7O2tDQUUzQiw4REFBQ0U7d0JBQUlILFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FBSUMsSUFBRztnQ0FBY0MsU0FBUyxJQUFNUixXQUFXLElBQUk7Z0NBQUdHLFdBQVU7Ozs7OzswQ0FDakUsOERBQUNHO2dDQUFJQyxJQUFHO2dDQUFXQyxTQUFTLElBQU1ULGFBQWE7Z0NBQVdJLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUczRVAsdUJBQVMsOERBQUNILG9EQUFXQTtnQkFBQ08sWUFBWUE7Ozs7O3VCQUFpQixJQUFJOzs7QUFHaEU7R0EzQlNMO0tBQUFBO0FBNEJULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvSGVhZGVyLmpzPzMxNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudEZvcm0gZnJvbSBcIi4vQWNjb3VudEZvcm1cIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW25hdmFjdGl2ZSwgc2V0TmF2YWN0aXZlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IHRvZ2dsZXBhZ2UgPSAoYWN0aXZlKSA9PiB7XG4gICAgICAgIHNldElzT3BlbihhY3RpdmUpXG4gICAgfVxuICAgIHJldHVybiA8PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIEFTT1NFe1wiIFwifVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2xvc2UtbmF2YmFyXCIgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvdXJzZXNcIj5Db3Vyc2VzPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdHNcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFjY291bnQtYnRuXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlcGFnZSh0cnVlKX0gY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51LWJ0blwiIG9uQ2xpY2s9eygpID0+IHNldE5hdmFjdGl2ZSgnYWN0aXZlJyl9IGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAge2lzT3BlbiA/IDxBY2NvdW50Rm9ybSB0b2dnbGVwYWdlPXt0b2dnbGVwYWdlfSAvPiA6IG51bGx9XG4gICAgPC8+O1xuXG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBY2NvdW50Rm9ybSIsIkxpbmsiLCJIZWFkZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJuYXZhY3RpdmUiLCJzZXROYXZhY3RpdmUiLCJ0b2dnbGVwYWdlIiwiYWN0aXZlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm5hdiIsImRpdiIsImlkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Header.js\n"));

/***/ })

});