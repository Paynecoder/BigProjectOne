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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnswersProvider\": () => (/* binding */ AnswersProvider),\n/* harmony export */   \"useAnswers\": () => (/* binding */ useAnswers)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AnswersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAnswers() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AnswersContext);\n}\nfunction AnswersProvider({ children  }) {\n    const [answers, setAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const updateAnswers = (answer)=>{\n        if (answer !== null) {\n            setAnswers((prevAnswers)=>[\n                    ...prevAnswers,\n                    answer\n                ]);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (router.pathname != \"/quiz\" || router.pathname != \"/results\") {\n            setAnswers([]);\n        } else {}\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswersContext.Provider, {\n        value: {\n            answers,\n            updateAnswers\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/payne/Desktop/brrilliant/hooks/answerContext.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9hbnN3ZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RTtBQUMvQjtBQUV4QyxNQUFNSywrQkFBaUJMLG9EQUFhQTtBQUU3QixTQUFTTSxhQUFhO0lBQzNCLE9BQU9MLGlEQUFVQSxDQUFDSTtBQUNwQixDQUFDO0FBRU0sU0FBU0UsZ0JBQWdCLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQzVDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU1TLFNBQVNQLHNEQUFTQTtJQUV4QixNQUFNUSxnQkFBZ0IsQ0FBQ0MsU0FBVztRQUNoQyxJQUFJQSxXQUFXLElBQUksRUFBRTtZQUNuQkgsV0FBVyxDQUFDSSxjQUFnQjt1QkFBSUE7b0JBQWFEO2lCQUFPO1FBQ3RELENBQUM7SUFDSDtJQUVBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVEsT0FBT0ksUUFBUSxJQUFJLFdBQVdKLE9BQU9JLFFBQVEsSUFBSSxZQUFZO1lBQy9ETCxXQUFXLEVBQUU7UUFDZixPQUFPLENBQ1AsQ0FBQztJQUNILEdBQUc7UUFBQ0MsT0FBT0ksUUFBUTtLQUFDO0lBRXBCLHFCQUNFLDhEQUFDVixlQUFlVyxRQUFRO1FBQUNDLE9BQU87WUFBRVI7WUFBU0c7UUFBYztrQkFDdERKOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJyaWxsaWFudC8uL2hvb2tzL2Fuc3dlckNvbnRleHQuanM/MjlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQW5zd2Vyc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbnN3ZXJzKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChBbnN3ZXJzQ29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBbnN3ZXJzUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdXBkYXRlQW5zd2VycyA9IChhbnN3ZXIpID0+IHtcbiAgICBpZiAoYW5zd2VyICE9PSBudWxsKSB7XG4gICAgICBzZXRBbnN3ZXJzKChwcmV2QW5zd2VycykgPT4gWy4uLnByZXZBbnN3ZXJzLCBhbnN3ZXJdKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lICE9IFwiL3F1aXpcIiB8fCByb3V0ZXIucGF0aG5hbWUgIT0gXCIvcmVzdWx0c1wiKSB7XG4gICAgICBzZXRBbnN3ZXJzKFtdKTtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFuc3dlcnNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFuc3dlcnMsIHVwZGF0ZUFuc3dlcnMgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BbnN3ZXJzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQW5zd2Vyc0NvbnRleHQiLCJ1c2VBbnN3ZXJzIiwiQW5zd2Vyc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJhbnN3ZXJzIiwic2V0QW5zd2VycyIsInJvdXRlciIsInVwZGF0ZUFuc3dlcnMiLCJhbnN3ZXIiLCJwcmV2QW5zd2VycyIsInBhdGhuYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/answerContext.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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