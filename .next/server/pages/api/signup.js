"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./middleware/mongoose.js":
/*!********************************!*\
  !*** ./middleware/mongoose.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDb = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            return handler(req, res);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        return handler(req, res);\n    };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL21vbmdvb3NlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxZQUFZQyxDQUFBQSxVQUFXLE9BQU9DLEtBQUtDLE1BQU87UUFDNUMsSUFBR0osMkVBQWtDLEVBQUM7WUFDbEMsT0FBT0UsUUFBUUMsS0FBS0M7UUFDeEIsQ0FBQztRQUNELE1BQU1KLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLFNBQVM7UUFDNUMsT0FBT1IsUUFBUUMsS0FBS0M7SUFDeEI7QUFFQSxpRUFBZUgsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nvc2UvLi9taWRkbGV3YXJlL21vbmdvb3NlLmpzP2E3OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgY29ubmVjdERiID0gaGFuZGxlciA9PiBhc3luYyAocmVxLCByZXMpID0+e1xyXG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSl7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpXHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSlcclxuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0RGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./middleware/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = new mongoose.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsYUFBYSxJQUFJRixTQUFTRyxNQUFNLENBQUM7SUFDbkNDLE1BQU07UUFBQ0MsTUFBTUM7UUFBUUMsVUFBVSxJQUFJO0lBQUE7SUFDbkNDLE9BQU87UUFBQ0gsTUFBTUM7UUFBUUMsVUFBVSxJQUFJO1FBQUVFLFFBQVEsSUFBSTtJQUFBO0lBQ2xEQyxVQUFVO1FBQUNMLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0FBRTVDLEdBQUc7SUFBQ0ksWUFBWSxJQUFJO0FBQUE7QUFFcEJYLFNBQVNZLE1BQU0sR0FBRyxDQUFDO0FBRW5CLGlFQUFlWixTQUFTYSxLQUFLLENBQUMsUUFBUVgsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nvc2UvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZToge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgZW1haWw6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWV9LFxyXG4gICAgcGFzc3dvcmQ6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLH0sXHJcblxyXG59LCB7dGltZXN0YW1wczogdHJ1ZX0pXHJcblxyXG5tb25nb29zZS5tb2RlbHMgPSB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/signup.js":
/*!*****************************!*\
  !*** ./pages/api/signup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/mongoose */ \"(api)/./middleware/mongoose.js\");\n\n\nvar CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { name , email , password  } = req.body;\n        let u = new _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            name: name,\n            email: email,\n            password: CryptoJS.AES.encrypt(password, \"401304\").toString()\n        });\n        await u.save();\n        res.status(200).json({\n            success: \"success\"\n        });\n    } else {\n        res.status(400).json({\n            error: \"Not allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUNhO0FBQ2pELElBQUlFLFdBQVdDLG1CQUFPQSxDQUFDLDRCQUFXO0FBRWxDLE1BQU1DLFVBQVUsT0FBT0MsS0FBS0MsTUFBTztJQUMvQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBTztRQUN0QixNQUFNLEVBQUNDLEtBQUksRUFBR0MsTUFBSyxFQUFFQyxTQUFRLEVBQUMsR0FBR0wsSUFBSU0sSUFBSTtRQUN6QyxJQUFJQyxJQUFJLElBQUlaLG9EQUFJQSxDQUFDO1lBQUNRLE1BQU9BO1lBQU1DLE9BQVFBO1lBQU9DLFVBQVdSLFNBQVNXLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDSixVQUFVLFVBQVVLLFFBQVE7UUFBRTtRQUM1RyxNQUFNSCxFQUFFSSxJQUFJO1FBQ1pWLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUztRQUFTO0lBQzVDLE9BQ0k7UUFDQWIsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDRSxPQUFPO1FBQWE7SUFDOUMsQ0FBQztBQUNMO0FBRUEsaUVBQWVuQixnRUFBU0EsQ0FBQ0csUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nvc2UvLi9wYWdlcy9hcGkvc2lnbnVwLmpzP2E4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInXHJcbmltcG9ydCBjb25uZWN0ZGIgZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9tb25nb29zZSdcclxudmFyIENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+e1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XHJcbiAgICAgICAgY29uc3Qge25hbWUgLCBlbWFpbCwgcGFzc3dvcmR9ID0gcmVxLmJvZHlcclxuICAgICAgICBsZXQgdSA9IG5ldyBVc2VyKHtuYW1lIDogbmFtZSwgZW1haWwgOiBlbWFpbCwgcGFzc3dvcmQgOiBDcnlwdG9KUy5BRVMuZW5jcnlwdChwYXNzd29yZCwgXCI0MDEzMDRcIikudG9TdHJpbmcoKX0pXHJcbiAgICAgICAgYXdhaXQgdS5zYXZlKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogXCJzdWNjZXNzXCJ9KTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yOiBcIk5vdCBhbGxvd2VkXCJ9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGRiKGhhbmRsZXIpOyJdLCJuYW1lcyI6WyJVc2VyIiwiY29ubmVjdGRiIiwiQ3J5cHRvSlMiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInUiLCJBRVMiLCJlbmNyeXB0IiwidG9TdHJpbmciLCJzYXZlIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signup.js"));
module.exports = __webpack_exports__;

})();