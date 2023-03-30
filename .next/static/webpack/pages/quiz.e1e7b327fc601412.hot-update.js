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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Quiz.module.css */ \"./styles/Quiz.module.css\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questions.js */ \"./data/questions.js\");\n/* harmony import */ var _components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/index.js */ \"./components/Navbar/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_usePopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePopup */ \"./hooks/usePopup.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Quiz() {\n    var _currentQuestionData_answers;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions\n    ]);\n    const [currentQuestionData, setCurrentQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [popupOpen, setPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrentQuestionData(quizData[currentQuestion]);\n        console.log(score);\n    }, [\n        currentQuestion\n    ]);\n    const router = (next_router__WEBPACK_IMPORTED_MODULE_5___default());\n    const { renderPopup , nextQuestion  } = (0,_hooks_usePopup__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progresscontainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progress),\n                    style: {\n                        width: \"\".concat((currentQuestion + 1) / _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length * 100, \"%\")\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: currentQuestionData.image,\n                            width: 225,\n                            height: 225,\n                            alt: \"question\"\n                        }, void 0, false, {\n                            fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().qtitlebox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: currentQuestionData.title\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentQuestionData.question\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttons),\n                        children: (_currentQuestionData_answers = currentQuestionData.answers) === null || _currentQuestionData_answers === void 0 ? void 0 : _currentQuestionData_answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonBody),\n                                    onClick: ()=>{\n                                        setSelectedAnswer(answer);\n                                        if (answer === currentQuestionData.correctAnswer || currentQuestionData.correctAnswerTwo && currentQuestion === currentQuestionData.id) {\n                                            setScore(score + 1);\n                                        }\n                                        if (currentQuestion === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1 && currentQuestionData.id === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1) {\n                                            if (answer === currentQuestionData.correctAnswer) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else if (score === 1) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else if (score === 6) {\n                                                router.push(\"/results/visit-burr\".concat(score - 1));\n                                            } else {\n                                                router.push(\"/results/visit-burr\".concat(score - 1));\n                                            }\n                                        } else {}\n                                    },\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().popup),\n                        onClick: ()=>{\n                            setCurrentQuestion(currentQuestion + 1);\n                            setSelectedAnswer(null);\n                        },\n                        children: renderPopup(selectedAnswer, currentQuestionData, currentQuestionData.goodFeedback, currentQuestionData.badFeedback)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Quiz, \"ksFFZbMuK4IQpm6r0BWEm37ghvA=\", false, function() {\n    return [\n        _hooks_usePopup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxPQUFPZ0MsSUFBSSxDQUFDLHNCQUFnQyxPQUFWeEMsUUFBUTs0Q0FDNUMsQ0FBQzt3Q0FDSCxPQUFPLENBQ1AsQ0FBQztvQ0FDSDs4Q0FFQytCOzs7Ozs7K0JBN0J3Q0M7Ozs7Ozs7Ozs7a0NBa0NqRCw4REFBQ3JCO3dCQUNDQyxXQUFXM0Isc0VBQVk7d0JBQ3ZCbUQsU0FBUyxJQUFNOzRCQUNieEMsbUJBQW1CRCxrQkFBa0I7NEJBQ3JDUSxrQkFBa0IsSUFBSTt3QkFDeEI7a0NBRUNNLFlBQ0NQLGdCQUNBUixxQkFDQUEsb0JBQW9CZ0QsWUFBWSxFQUNoQ2hELG9CQUFvQmlELFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FBTTNDLENBQUM7R0E3RnVCbEQ7O1FBY2dCRCx1REFBUUE7OztLQWR4QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcz82ZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9RdWl6Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHF1ZXN0aW9ucyB9IGZyb20gXCIuLi9kYXRhL3F1ZXN0aW9ucy5qc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXIvaW5kZXguanNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VQb3B1cCBmcm9tIFwiQC9ob29rcy91c2VQb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6KCkge1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtxdWl6RGF0YSwgc2V0UXVpekRhdGFdID0gdXNlU3RhdGUoWy4uLnF1ZXN0aW9uc10pO1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uRGF0YSwgc2V0Q3VycmVudFF1ZXN0aW9uRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtzZWxlY3RlZEFuc3dlciwgc2V0U2VsZWN0ZWRBbnN3ZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwb3B1cE9wZW4sIHNldFBvcHVwT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50UXVlc3Rpb25EYXRhKHF1aXpEYXRhW2N1cnJlbnRRdWVzdGlvbl0pO1xuICAgIGNvbnNvbGUubG9nKHNjb3JlKTtcbiAgfSwgW2N1cnJlbnRRdWVzdGlvbl0pO1xuXG4gIGNvbnN0IHJvdXRlciA9IFJvdXRlcjtcbiAgY29uc3QgeyByZW5kZXJQb3B1cCwgbmV4dFF1ZXN0aW9uIH0gPSB1c2VQb3B1cCgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3Njb250YWluZXJ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHsoKGN1cnJlbnRRdWVzdGlvbiArIDEpIC8gcXVlc3Rpb25zLmxlbmd0aCkgKiAxMDB9JWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17Y3VycmVudFF1ZXN0aW9uRGF0YS5pbWFnZX1cbiAgICAgICAgICAgIHdpZHRoPXsyMjV9XG4gICAgICAgICAgICBoZWlnaHQ9ezIyNX1cbiAgICAgICAgICAgIGFsdD1cInF1ZXN0aW9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdGl0bGVib3h9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2N1cnJlbnRRdWVzdGlvbkRhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD57Y3VycmVudFF1ZXN0aW9uRGF0YS5xdWVzdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb25EYXRhLmFuc3dlcnM/Lm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQm9keX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFuc3dlcihhbnN3ZXIpO1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlciB8fFxuICAgICAgICAgICAgICAgICAgICAoY3VycmVudFF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyVHdvICYmXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9PT0gcXVlc3Rpb25zLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uRGF0YS5pZCA9PT0gcXVlc3Rpb25zLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Jlc3VsdHMvdmlzaXQtYnVyciR7c2NvcmV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Jlc3VsdHMvdmlzaXQtYnVyciR7c2NvcmV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPT09IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Jlc3VsdHMvdmlzaXQtYnVyciR7c2NvcmUgLSAxfWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmVzdWx0cy92aXNpdC1idXJyJHtzY29yZSAtIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthbnN3ZXJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRBbnN3ZXIobnVsbCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJQb3B1cChcbiAgICAgICAgICAgIHNlbGVjdGVkQW5zd2VyLFxuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uRGF0YSxcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbkRhdGEuZ29vZEZlZWRiYWNrLFxuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uRGF0YS5iYWRGZWVkYmFja1xuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicXVlc3Rpb25zIiwiTmF2YmFyIiwiSW1hZ2UiLCJSb3V0ZXIiLCJ1c2VQb3B1cCIsIlF1aXoiLCJjdXJyZW50UXVlc3Rpb25EYXRhIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwicXVpekRhdGEiLCJzZXRRdWl6RGF0YSIsInNldEN1cnJlbnRRdWVzdGlvbkRhdGEiLCJzY29yZSIsInNldFNjb3JlIiwic2VsZWN0ZWRBbnN3ZXIiLCJzZXRTZWxlY3RlZEFuc3dlciIsInBvcHVwT3BlbiIsInNldFBvcHVwT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJyZW5kZXJQb3B1cCIsIm5leHRRdWVzdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInByb2dyZXNzY29udGFpbmVyIiwicHJvZ3Jlc3MiLCJzdHlsZSIsIndpZHRoIiwibGVuZ3RoIiwibWFpbiIsInNyYyIsImltYWdlIiwiaGVpZ2h0IiwiYWx0IiwicXRpdGxlYm94IiwiaDEiLCJ0aXRsZSIsInAiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwiaW5kZXgiLCJidXR0b25Db250YWluZXIiLCJidXR0b24iLCJidXR0b25Cb2R5Iiwib25DbGljayIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyVHdvIiwiaWQiLCJwdXNoIiwicG9wdXAiLCJnb29kRmVlZGJhY2siLCJiYWRGZWVkYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz.js\n"));

/***/ })

});