"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz",{

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Quiz.module.css */ \"./styles/Quiz.module.css\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questions.js */ \"./data/questions.js\");\n/* harmony import */ var _components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/index.js */ \"./components/Navbar/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Button_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button/index.js */ \"./components/Button/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Quiz() {\n    var _currentQuestionData_answers;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions\n    ]);\n    const [currentQuestionData, setCurrentQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    let score = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrentQuestionData(quizData[currentQuestion]);\n    }, [\n        currentQuestion\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: currentQuestionData.image,\n                            width: 225,\n                            height: 225\n                        }, void 0, false, {\n                            fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6___default().qtitlebox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                                children: currentQuestionData.title\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentQuestionData.question\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: (_currentQuestionData_answers = currentQuestionData.answers) === null || _currentQuestionData_answers === void 0 ? void 0 : _currentQuestionData_answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onClick: ()=>{\n                                    if (answer === currentQuestionData.correctAnswer) {\n                                        score++;\n                                    }\n                                    if (currentQuestion < quizData.length - 1) {\n                                        setCurrentQuestion(currentQuestion + 1);\n                                    } else {\n                                        alert(\"You scored \".concat(score, \" out of \").concat(quizData.length));\n                                    }\n                                },\n                                word: answer,\n                                route: \"\"\n                            }, index, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Quiz, \"u1odTx/MVM8WvUJse1a0Vw8khmI=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0g7QUFDSztBQUNFO0FBQ3BCO0FBQ29CO0FBRXBDLFNBQVNPLE9BQU87UUF1QnBCQzs7SUF0QlQsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7V0FBSUUseURBQVNBO0tBQUM7SUFDdkQsTUFBTSxDQUFDSyxxQkFBcUJLLHVCQUF1QixHQUFHWiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWhFLElBQUlhLFFBQVE7SUFFWlosZ0RBQVNBLENBQUMsSUFBTTtRQUNkVyx1QkFBdUJGLFFBQVEsQ0FBQ0YsZ0JBQWdCO0lBQ2xELEdBQUc7UUFBQ0E7S0FBZ0I7SUFFcEIscUJBQ0U7OzBCQUNFLDhEQUFDTCxtRUFBTUE7Ozs7OzBCQUNQLDhEQUFDVztnQkFBS0MsV0FBV2hCLHFFQUFXOztrQ0FDMUIsOERBQUNpQjtrQ0FDQyw0RUFBQ1osbURBQUtBOzRCQUFDYSxLQUFLVixvQkFBb0JXLEtBQUs7NEJBQUVDLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUU3RCw4REFBQ0o7d0JBQUlELFdBQVdoQiwwRUFBZ0I7OzBDQUM5Qiw4REFBQ3VCO2dDQUFHUCxXQUFXaEIsc0VBQVk7MENBQUdRLG9CQUFvQmdCLEtBQUs7Ozs7OzswQ0FDdkQsOERBQUNDOzBDQUFHakIsb0JBQW9Ca0IsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUVsQyw4REFBQ1Q7a0NBQ0VULENBQUFBLCtCQUFBQSxvQkFBb0JtQixPQUFPLGNBQTNCbkIsMENBQUFBLEtBQUFBLElBQUFBLDZCQUE2Qm9CLElBQUksQ0FBQ0MsUUFBUUMsc0JBQ3pDLDhEQUFDeEIsbUVBQU1BO2dDQUVMeUIsU0FBUyxJQUFNO29DQUNiLElBQUlGLFdBQVdyQixvQkFBb0J3QixhQUFhLEVBQUU7d0NBQ2hEbEI7b0NBQ0YsQ0FBQztvQ0FDRCxJQUFJTCxrQkFBa0JFLFNBQVNzQixNQUFNLEdBQUcsR0FBRzt3Q0FDekN2QixtQkFBbUJELGtCQUFrQjtvQ0FDdkMsT0FBTzt3Q0FDTHlCLE1BQU0sY0FBOEJ2QixPQUFoQkcsT0FBTSxZQUEwQixPQUFoQkgsU0FBU3NCLE1BQU07b0NBQ3JELENBQUM7Z0NBQ0g7Z0NBQ0FFLE1BQU1OO2dDQUNOTyxPQUFPOytCQVpGTjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJuQixDQUFDO0dBNUN1QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXouanM/NmYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUXVpei5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBxdWVzdGlvbnMgfSBmcm9tIFwiLi4vZGF0YS9xdWVzdGlvbnMuanNcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3F1aXpEYXRhLCBzZXRRdWl6RGF0YV0gPSB1c2VTdGF0ZShbLi4ucXVlc3Rpb25zXSk7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb25EYXRhLCBzZXRDdXJyZW50UXVlc3Rpb25EYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICBsZXQgc2NvcmUgPSAwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFF1ZXN0aW9uRGF0YShxdWl6RGF0YVtjdXJyZW50UXVlc3Rpb25dKTtcbiAgfSwgW2N1cnJlbnRRdWVzdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2N1cnJlbnRRdWVzdGlvbkRhdGEuaW1hZ2V9IHdpZHRoPXsyMjV9IGhlaWdodD17MjI1fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdGl0bGVib3h9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2N1cnJlbnRRdWVzdGlvbkRhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD57Y3VycmVudFF1ZXN0aW9uRGF0YS5xdWVzdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb25EYXRhLmFuc3dlcnM/Lm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFuc3dlciA9PT0gY3VycmVudFF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICBzY29yZSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFF1ZXN0aW9uIDwgcXVpekRhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBhbGVydChgWW91IHNjb3JlZCAke3Njb3JlfSBvdXQgb2YgJHtxdWl6RGF0YS5sZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB3b3JkPXthbnN3ZXJ9XG4gICAgICAgICAgICAgIHJvdXRlPXtcIlwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJxdWVzdGlvbnMiLCJOYXZiYXIiLCJJbWFnZSIsIkJ1dHRvbiIsIlF1aXoiLCJjdXJyZW50UXVlc3Rpb25EYXRhIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwicXVpekRhdGEiLCJzZXRRdWl6RGF0YSIsInNldEN1cnJlbnRRdWVzdGlvbkRhdGEiLCJzY29yZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwicXRpdGxlYm94IiwiaDEiLCJ0aXRsZSIsInAiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJpbmRleCIsIm9uQ2xpY2siLCJjb3JyZWN0QW5zd2VyIiwibGVuZ3RoIiwiYWxlcnQiLCJ3b3JkIiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quiz.js\n"));

/***/ })

});