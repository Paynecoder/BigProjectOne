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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/answerContext.js":
/*!********************************!*\
  !*** ./hooks/answerContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnswersProvider\": () => (/* binding */ AnswersProvider),\n/* harmony export */   \"useAnswers\": () => (/* binding */ useAnswers)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AnswersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAnswers() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AnswersContext);\n}\nfunction AnswersProvider({ children  }) {\n    const [answers, setAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const updateAnswers = (answer)=>{\n        if (answer !== null) {\n            setAnswers((prevAnswers)=>[\n                    ...prevAnswers,\n                    answer\n                ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswersContext.Provider, {\n        value: {\n            answers,\n            updateAnswers\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/payne/Desktop/brrilliant/hooks/answerContext.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9hbnN3ZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUU7QUFFdkUsTUFBTUksK0JBQWlCSixvREFBYUE7QUFFN0IsU0FBU0ssYUFBYTtJQUMzQixPQUFPSixpREFBVUEsQ0FBQ0c7QUFDcEIsQ0FBQztBQUVNLFNBQVNFLGdCQUFnQixFQUFFQyxTQUFRLEVBQUUsRUFBRTtJQUM1QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUV6QyxNQUFNUSxnQkFBZ0IsQ0FBQ0MsU0FBVztRQUNoQyxJQUFJQSxXQUFXLElBQUksRUFBRTtZQUNuQkYsV0FBVyxDQUFDRyxjQUFnQjt1QkFBSUE7b0JBQWFEO2lCQUFPO1FBQ3RELENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDUCxlQUFlUyxRQUFRO1FBQUNDLE9BQU87WUFBRU47WUFBU0U7UUFBYztrQkFDdERIOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJyaWxsaWFudC8uL2hvb2tzL2Fuc3dlckNvbnRleHQuanM/MjlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFuc3dlcnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQW5zd2VycygpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQW5zd2Vyc0NvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQW5zd2Vyc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgdXBkYXRlQW5zd2VycyA9IChhbnN3ZXIpID0+IHtcbiAgICBpZiAoYW5zd2VyICE9PSBudWxsKSB7XG4gICAgICBzZXRBbnN3ZXJzKChwcmV2QW5zd2VycykgPT4gWy4uLnByZXZBbnN3ZXJzLCBhbnN3ZXJdKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QW5zd2Vyc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYW5zd2VycywgdXBkYXRlQW5zd2VycyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Fuc3dlcnNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbnN3ZXJzQ29udGV4dCIsInVzZUFuc3dlcnMiLCJBbnN3ZXJzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwidXBkYXRlQW5zd2VycyIsImFuc3dlciIsInByZXZBbnN3ZXJzIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/answerContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/variables.css */ \"./styles/variables.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_answerContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/answerContext.js */ \"./hooks/answerContext.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_answerContext_js__WEBPACK_IMPORTED_MODULE_3__.AnswersProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/payne/Desktop/brrilliant/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNFO0FBQzJCO0FBRTVDLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFDRTtrQkFDRSw0RUFBQ0gsb0VBQWVBO3NCQUNkLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JycmlsbGlhbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIkAvc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIjtcbmltcG9ydCB7IEFuc3dlcnNQcm92aWRlciB9IGZyb20gXCJAL2hvb2tzL2Fuc3dlckNvbnRleHQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QW5zd2Vyc1Byb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0Fuc3dlcnNQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBbnN3ZXJzUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();