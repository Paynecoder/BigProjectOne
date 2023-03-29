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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Quiz.module.css */ \"./styles/Quiz.module.css\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questions.js */ \"./data/questions.js\");\n/* harmony import */ var _components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/index.js */ \"./components/Navbar/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Popup */ \"./components/Popup/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Quiz() {\n    var _currentQuestionData_answers;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions\n    ]);\n    const [currentQuestionData, setCurrentQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrentQuestionData(quizData[currentQuestion]);\n        console.log(score);\n    }, [\n        currentQuestion\n    ]);\n    const router = (next_router__WEBPACK_IMPORTED_MODULE_5___default());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progress),\n                style: {\n                    width: \"\".concat((currentQuestion + 1) / _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length * 100, \"%\"),\n                    backgroundColor: \"var(--primary-blue)\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: currentQuestionData.image,\n                            width: 225,\n                            height: 225,\n                            alt: \"question\"\n                        }, void 0, false, {\n                            fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().qtitlebox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: currentQuestionData.title\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentQuestionData.question\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttons),\n                        children: (_currentQuestionData_answers = currentQuestionData.answers) === null || _currentQuestionData_answers === void 0 ? void 0 : _currentQuestionData_answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonBody),\n                                    onClick: ()=>{\n                                        if (answer === currentQuestionData.correctAnswer || currentQuestionData.correctAnswerTwo && currentQuestion === currentQuestionData.id) {\n                                            setScore(score + 1);\n                                        }\n                                        if (currentQuestion === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1 && currentQuestionData.id === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1) {\n                                            if (answer === currentQuestionData.correctAnswer) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else if (score === 1) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else {\n                                                router.push(\"/results/visit-burr\".concat(score - 1));\n                                            }\n                                        } else {\n                                            setCurrentQuestion(currentQuestion + 1);\n                                        }\n                                    },\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Quiz, \"aKmWYs7H7LV+uXha0BEYquq1Vl8=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSDtBQUNLO0FBQ0U7QUFDcEI7QUFDRTtBQUNNO0FBRXhCLFNBQVNRLE9BQU87UUFzQ3BCQzs7SUFyQ1QsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHViwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7V0FBSUUseURBQVNBO0tBQUM7SUFDdkQsTUFBTSxDQUFDTSxxQkFBcUJLLHVCQUF1QixHQUFHYiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RZLHVCQUF1QkYsUUFBUSxDQUFDRixnQkFBZ0I7UUFDaERTLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDZCxHQUFHO1FBQUNMO0tBQWdCO0lBRXBCLE1BQU1XLFNBQVNmLG9EQUFNQTtJQUVyQixxQkFDRTs7MEJBQ0UsOERBQUNGLG1FQUFNQTs7Ozs7MEJBQ1AsOERBQUNrQjtnQkFDQ0MsV0FBV3ZCLHlFQUFlO2dCQUMxQnlCLE9BQU87b0JBQ0xDLE9BQU8sR0FBb0QsT0FBakQsQ0FBRWhCLGtCQUFrQixLQUFLUCxnRUFBZ0IsR0FBSSxLQUFJO29CQUMzRHlCLGlCQUFpQjtnQkFDbkI7Ozs7OzswQkFFRiw4REFBQ0M7Z0JBQUtOLFdBQVd2QixxRUFBVzs7a0NBQzFCLDhEQUFDc0I7a0NBQ0MsNEVBQUNqQixtREFBS0E7NEJBQ0p5QixLQUFLckIsb0JBQW9Cc0IsS0FBSzs0QkFDOUJMLE9BQU87NEJBQ1BNLFFBQVE7NEJBQ1JDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDWDt3QkFBSUMsV0FBV3ZCLDBFQUFnQjs7MENBQzlCLDhEQUFDbUM7Z0NBQUdaLFdBQVd2QixzRUFBWTswQ0FBR1Msb0JBQW9CMkIsS0FBSzs7Ozs7OzBDQUN2RCw4REFBQ0M7MENBQUc1QixvQkFBb0I2QixRQUFROzs7Ozs7Ozs7Ozs7a0NBRWxDLDhEQUFDaEI7d0JBQUlDLFdBQVd2Qix3RUFBYztrQ0FDM0JTLENBQUFBLCtCQUFBQSxvQkFBb0IrQixPQUFPLGNBQTNCL0IsMENBQUFBLEtBQUFBLElBQUFBLDZCQUE2QmdDLElBQUksQ0FBQ0MsUUFBUUMsc0JBQ3pDLDhEQUFDckI7Z0NBQUlDLFdBQVd2QixnRkFBc0I7MENBQ3BDLDRFQUFDNkM7b0NBQ0N0QixXQUFXdkIsMkVBQWlCO29DQUM1QitDLFNBQVMsSUFBTTt3Q0FDYixJQUNFTCxXQUFXakMsb0JBQW9CdUMsYUFBYSxJQUMzQ3ZDLG9CQUFvQndDLGdCQUFnQixJQUNuQ3ZDLG9CQUFvQkQsb0JBQW9CeUMsRUFBRSxFQUM1Qzs0Q0FDQWxDLFNBQVNELFFBQVE7d0NBQ25CLENBQUM7d0NBQ0QsSUFDRUwsb0JBQW9CUCxnRUFBZ0IsR0FBRyxLQUN2Q00sb0JBQW9CeUMsRUFBRSxLQUFLL0MsZ0VBQWdCLEdBQUcsR0FDOUM7NENBQ0EsSUFBSXVDLFdBQVdqQyxvQkFBb0J1QyxhQUFhLEVBQUU7Z0RBQ2hEM0IsT0FBTzhCLElBQUksQ0FBQyxzQkFBNEIsT0FBTnBDOzRDQUNwQyxPQUFPLElBQUlBLFVBQVUsR0FBRztnREFDdEJNLE9BQU84QixJQUFJLENBQUMsc0JBQTRCLE9BQU5wQzs0Q0FDcEMsT0FBTztnREFDTE0sT0FBTzhCLElBQUksQ0FBQyxzQkFBZ0MsT0FBVnBDLFFBQVE7NENBQzVDLENBQUM7d0NBQ0gsT0FBTzs0Q0FDTEosbUJBQW1CRCxrQkFBa0I7d0NBQ3ZDLENBQUM7b0NBQ0g7OENBRUNnQzs7Ozs7OytCQTNCd0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ3pELENBQUM7R0ExRXVCbkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcz82ZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9RdWl6Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHF1ZXN0aW9ucyB9IGZyb20gXCIuLi9kYXRhL3F1ZXN0aW9ucy5qc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXIvaW5kZXguanNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiQC9jb21wb25lbnRzL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3F1aXpEYXRhLCBzZXRRdWl6RGF0YV0gPSB1c2VTdGF0ZShbLi4ucXVlc3Rpb25zXSk7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb25EYXRhLCBzZXRDdXJyZW50UXVlc3Rpb25EYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1cnJlbnRRdWVzdGlvbkRhdGEocXVpekRhdGFbY3VycmVudFF1ZXN0aW9uXSk7XG4gICAgY29uc29sZS5sb2coc2NvcmUpO1xuICB9LCBbY3VycmVudFF1ZXN0aW9uXSk7XG5cbiAgY29uc3Qgcm91dGVyID0gUm91dGVyO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IGAkeygoY3VycmVudFF1ZXN0aW9uICsgMSkgLyBxdWVzdGlvbnMubGVuZ3RoKSAqIDEwMH0lYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidmFyKC0tcHJpbWFyeS1ibHVlKVwiLFxuICAgICAgICB9fVxuICAgICAgPjwvZGl2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2N1cnJlbnRRdWVzdGlvbkRhdGEuaW1hZ2V9XG4gICAgICAgICAgICB3aWR0aD17MjI1fVxuICAgICAgICAgICAgaGVpZ2h0PXsyMjV9XG4gICAgICAgICAgICBhbHQ9XCJxdWVzdGlvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXRpdGxlYm94fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntjdXJyZW50UXVlc3Rpb25EYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e2N1cnJlbnRRdWVzdGlvbkRhdGEucXVlc3Rpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uRGF0YS5hbnN3ZXJzPy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkJvZHl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlciB8fFxuICAgICAgICAgICAgICAgICAgICAoY3VycmVudFF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyVHdvICYmXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9PT0gcXVlc3Rpb25zLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uRGF0YS5pZCA9PT0gcXVlc3Rpb25zLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Jlc3VsdHMvdmlzaXQtYnVyciR7c2NvcmV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Jlc3VsdHMvdmlzaXQtYnVyciR7c2NvcmV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHRzL3Zpc2l0LWJ1cnIke3Njb3JlIC0gMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YW5zd2VyfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInF1ZXN0aW9ucyIsIk5hdmJhciIsIkltYWdlIiwiUm91dGVyIiwiUG9wdXAiLCJRdWl6IiwiY3VycmVudFF1ZXN0aW9uRGF0YSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInF1aXpEYXRhIiwic2V0UXVpekRhdGEiLCJzZXRDdXJyZW50UXVlc3Rpb25EYXRhIiwic2NvcmUiLCJzZXRTY29yZSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9ncmVzcyIsInN0eWxlIiwid2lkdGgiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWluIiwic3JjIiwiaW1hZ2UiLCJoZWlnaHQiLCJhbHQiLCJxdGl0bGVib3giLCJoMSIsInRpdGxlIiwicCIsInF1ZXN0aW9uIiwiYnV0dG9ucyIsImFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJpbmRleCIsImJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbiIsImJ1dHRvbkJvZHkiLCJvbkNsaWNrIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RBbnN3ZXJUd28iLCJpZCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quiz.js\n"));

/***/ })

});