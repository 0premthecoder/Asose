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

/***/ "./pages/components/AccountForm.js":
/*!*****************************************!*\
  !*** ./pages/components/AccountForm.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AccountForm(props) {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handelSubmit = async (e)=>{\n        e.preventDefault();\n        const formBody = {\n            name: name,\n            email: email,\n            password: password\n        };\n        console.log(formBody);\n        let res = await fetch(\"https://prem0556-super-duper-lamp-rwvp9j6xjvq2wxxj-3000.preview.app.github.dev/api/signup\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formBody)\n        });\n        let response = await res.json();\n        console.log(response);\n        setName(\"\");\n        setEmail(\"\");\n        setPassword(\"\");\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"\\uD83E\\uDD84 User Created Successfully!\", {\n            position: \"top-right\",\n            autoClose: 5000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined,\n            theme: \"dark\"\n        });\n    };\n    const handelChange = (e)=>{\n        if (e.target.name === \"name\") {\n            setName(e.target.value);\n        } else if (e.target.name === \"email\") {\n            setEmail(e.target.value);\n        } else if (e.target.name === \"password\") {\n            setPassword(e.target.value);\n        }\n    };\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 5000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true,\n                theme: \"dark\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"active account-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"close-form\",\n                        className: \"fas fa-times\",\n                        onClick: ()=>props.togglepage(false)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"buttons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"btn \".concat(active ? \"active\" : \" \", \" login-btn\"),\n                                onClick: ()=>setActive(true),\n                                children: \"login\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"btn \".concat(active ? \" \" : \"active\", \" register-btn\"),\n                                onClick: ()=>setActive(false),\n                                children: \"register\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"login-form \".concat(active ? \"active\" : \" \"),\n                        action: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"login now\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                placeholder: \"Enter your email\",\n                                className: \"box\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Enter your password\",\n                                className: \"box\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        name: \"\",\n                                        id: \"remember-me\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"remember-me\",\n                                        children: \"remember me\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        children: \"forgot password?\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                defaultValue: \"login now\",\n                                className: \"btn\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 82,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"register-form \".concat(active ? \" \" : \"active\"),\n                        onSubmit: handelSubmit,\n                        method: \"POST\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"register now\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"Name\",\n                                name: \"name\",\n                                value: name,\n                                onChange: handelChange,\n                                placeholder: \"Enter your name\",\n                                className: \"box\",\n                                typeof: \"string\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"Email\",\n                                name: \"email\",\n                                value: email,\n                                onChange: handelChange,\n                                placeholder: \"Enter your email\",\n                                className: \"box\",\n                                typeof: \"email\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"Password\",\n                                placeholder: \"Enter your password\",\n                                className: \"box\",\n                                name: \"password\",\n                                value: password,\n                                onChange: handelChange,\n                                typeof: \"string\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                defaultValue: \"register now\",\n                                className: \"btn\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Asose/pages/components/AccountForm.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AccountForm, \"WBo2N0PVgoQC56aR69E60hwpIcs=\");\n_c = AccountForm;\nvar _c;\n$RefreshReg$(_c, \"AccountForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztnQ0FDTEMsYUFBWTtnQ0FDWlYsV0FBVTs7Ozs7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNRO3dDQUFNQyxNQUFLO3dDQUFXcEQsTUFBSzt3Q0FBRzRDLElBQUc7Ozs7OztrREFDbEMsOERBQUNVO3dDQUFNQyxTQUFRO2tEQUFjOzs7Ozs7a0RBQzdCLDhEQUFDQzt3Q0FBRUMsTUFBSztrREFBSTs7Ozs7Ozs7Ozs7OzBDQUVoQiw4REFBQ047Z0NBQU1DLE1BQUs7Z0NBQVNNLGNBQWE7Z0NBQVlmLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHNUQsOERBQUNLO3dCQUFLTCxXQUFXLGlCQUF5QyxPQUF4Qk4sU0FBUyxNQUFNLFFBQVE7d0JBQUlzQixVQUFVckQ7d0JBQWNXLFFBQU87OzBDQUN4Riw4REFBQ2lDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPcEQsTUFBSztnQ0FBT29DLE9BQU9wQztnQ0FBTTRELFVBQVUxQjtnQ0FBY21CLGFBQVk7Z0NBQWtCVixXQUFVO2dDQUFNa0IsUUFBTzs7Ozs7OzBDQUN6SCw4REFBQ1Y7Z0NBQU1DLE1BQUs7Z0NBQVFwRCxNQUFLO2dDQUFRb0MsT0FBT2xDO2dDQUFPMEQsVUFBVTFCO2dDQUFjbUIsYUFBWTtnQ0FBbUJWLFdBQVU7Z0NBQU1rQixRQUFPOzs7Ozs7MENBQzdILDhEQUFDVjtnQ0FDR0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWlYsV0FBVTtnQ0FDVjNDLE1BQUs7Z0NBQ0xvQyxPQUFPaEM7Z0NBQVV3RCxVQUFVMUI7Z0NBQWMyQixRQUFPOzs7Ozs7MENBRXBELDhEQUFDVjtnQ0FBTUMsTUFBSztnQ0FBU00sY0FBYTtnQ0FBZWYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHM0UsQ0FBQztHQTlGdUI3QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0FjY291bnRGb3JtLmpzPzAzZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50Rm9ybShwcm9wcykge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGhhbmRlbFN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybUJvZHkgPSB7IG5hbWU6IG5hbWUsIGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH1cbiAgICAgICAgY29uc29sZS5sb2coZm9ybUJvZHkpXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSUdOX0FQSV9VUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBvciAnUFVUJ1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybUJvZHkpLFxuICAgICAgICB9KVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgICBzZXRFbWFpbChcIlwiKTtcbiAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ/CfpoQgVXNlciBDcmVhdGVkIFN1Y2Nlc3NmdWxseSEnLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBjb25zdCBoYW5kZWxDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0Lm5hbWUgPT09IFwiZW1haWxcIikge1xuICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0Lm5hbWUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIHJldHVybiAoPD5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhY3RpdmUgYWNjb3VudC1mb3JtYH0+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2xvc2UtZm9ybVwiIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiIG9uQ2xpY2s9eygpID0+IHByb3BzLnRvZ2dsZXBhZ2UoZmFsc2UpfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYnRuICR7YWN0aXZlID8gJ2FjdGl2ZScgOiAnICd9IGxvZ2luLWJ0bmB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh0cnVlKX0+bG9naW48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYnRuICR7YWN0aXZlID8gJyAnIDogJ2FjdGl2ZSd9IHJlZ2lzdGVyLWJ0bmB9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9PnJlZ2lzdGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2Bsb2dpbi1mb3JtICR7YWN0aXZlID8gJ2FjdGl2ZScgOiAnICd9YH0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGgzPmxvZ2luIG5vdzwvaDM+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIGNsYXNzTmFtZT1cImJveFwiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCIgaWQ9XCJyZW1lbWJlci1tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtZW1iZXItbWVcIj5yZW1lbWJlciBtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Zm9yZ290IHBhc3N3b3JkPzwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGRlZmF1bHRWYWx1ZT1cImxvZ2luIG5vd1wiIGNsYXNzTmFtZT1cImJ0blwiIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17YHJlZ2lzdGVyLWZvcm0gJHthY3RpdmUgPyAnICcgOiAnYWN0aXZlJ31gfSBvblN1Ym1pdD17aGFuZGVsU3VibWl0fSBtZXRob2Q9J1BPU1QnPlxuICAgICAgICAgICAgICAgIDxoMz5yZWdpc3RlciBub3c8L2gzPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiTmFtZVwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCIgY2xhc3NOYW1lPVwiYm94XCIgdHlwZW9mPVwic3RyaW5nXCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiRW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIGNsYXNzTmFtZT1cImJveFwiIHR5cGVvZj1cImVtYWlsXCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kZWxDaGFuZ2V9IHR5cGVvZj1cInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGRlZmF1bHRWYWx1ZT1cInJlZ2lzdGVyIG5vd1wiIGNsYXNzTmFtZT1cImJ0blwiIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PjwvPilcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJBY2NvdW50Rm9ybSIsInByb3BzIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRlbFN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1Cb2R5IiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NJR05fQVBJX1VSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwidGhlbWUiLCJoYW5kZWxDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm5ld2VzdE9uVG9wIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwib25DbGljayIsInRvZ2dsZXBhZ2UiLCJzcGFuIiwiZm9ybSIsImFjdGlvbiIsImgzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJhIiwiaHJlZiIsImRlZmF1bHRWYWx1ZSIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJ0eXBlb2YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/AccountForm.js\n"));

/***/ })

});