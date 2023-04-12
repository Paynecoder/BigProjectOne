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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnswersProvider\": () => (/* binding */ AnswersProvider),\n/* harmony export */   \"useAnswers\": () => (/* binding */ useAnswers)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AnswersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAnswers() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AnswersContext);\n}\nfunction AnswersProvider({ children  }) {\n    const [answers, setAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const updateAnswers = (answer)=>{\n        if (answer !== null) {\n            setAnswers((prevAnswers)=>[\n                    ...prevAnswers,\n                    answer\n                ]);\n        }\n    };\n    const updateScore = ()=>{\n        setScore((prevScore)=>prevScore + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswersContext.Provider, {\n        value: {\n            answers,\n            updateAnswers,\n            updateScore,\n            score\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/payne/Desktop/brrilliant/hooks/answerContext.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9hbnN3ZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RTtBQUMvQjtBQUV4QyxNQUFNSywrQkFBaUJMLG9EQUFhQTtBQUU3QixTQUFTTSxhQUFhO0lBQzNCLE9BQU9MLGlEQUFVQSxDQUFDSTtBQUNwQixDQUFDO0FBRU0sU0FBU0UsZ0JBQWdCLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQzVDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNVyxnQkFBZ0IsQ0FBQ0MsU0FBVztRQUNoQyxJQUFJQSxXQUFXLElBQUksRUFBRTtZQUNuQkosV0FBVyxDQUFDSyxjQUFnQjt1QkFBSUE7b0JBQWFEO2lCQUFPO1FBQ3RELENBQUM7SUFDSDtJQUVBLE1BQU1FLGNBQWMsSUFBTTtRQUN4QkosU0FBUyxDQUFDSyxZQUFjQSxZQUFZO0lBQ3RDO0lBRUEscUJBQ0UsOERBQUNaLGVBQWVhLFFBQVE7UUFDdEJDLE9BQU87WUFBRVY7WUFBU0k7WUFBZUc7WUFBYUw7UUFBTTtrQkFFbkRIOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJyaWxsaWFudC8uL2hvb2tzL2Fuc3dlckNvbnRleHQuanM/MjlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQW5zd2Vyc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbnN3ZXJzKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChBbnN3ZXJzQ29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBbnN3ZXJzUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCB1cGRhdGVBbnN3ZXJzID0gKGFuc3dlcikgPT4ge1xuICAgIGlmIChhbnN3ZXIgIT09IG51bGwpIHtcbiAgICAgIHNldEFuc3dlcnMoKHByZXZBbnN3ZXJzKSA9PiBbLi4ucHJldkFuc3dlcnMsIGFuc3dlcl0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVTY29yZSA9ICgpID0+IHtcbiAgICBzZXRTY29yZSgocHJldlNjb3JlKSA9PiBwcmV2U2NvcmUgKyAxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBbnN3ZXJzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgYW5zd2VycywgdXBkYXRlQW5zd2VycywgdXBkYXRlU2NvcmUsIHNjb3JlIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQW5zd2Vyc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkFuc3dlcnNDb250ZXh0IiwidXNlQW5zd2VycyIsIkFuc3dlcnNQcm92aWRlciIsImNoaWxkcmVuIiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJzY29yZSIsInNldFNjb3JlIiwidXBkYXRlQW5zd2VycyIsImFuc3dlciIsInByZXZBbnN3ZXJzIiwidXBkYXRlU2NvcmUiLCJwcmV2U2NvcmUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/answerContext.js\n");

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