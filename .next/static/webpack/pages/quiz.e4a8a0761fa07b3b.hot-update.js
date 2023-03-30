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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Quiz.module.css */ \"./styles/Quiz.module.css\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questions.js */ \"./data/questions.js\");\n/* harmony import */ var _components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/index.js */ \"./components/Navbar/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_usePopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePopup */ \"./hooks/usePopup.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Quiz() {\n    var _currentQuestionData_answers;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions\n    ]);\n    const [currentQuestionData, setCurrentQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [popupOpen, setPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrentQuestionData(quizData[currentQuestion]);\n        console.log(score);\n    }, [\n        currentQuestion\n    ]);\n    const router = (next_router__WEBPACK_IMPORTED_MODULE_5___default());\n    const { renderPopup  } = (0,_hooks_usePopup__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progresscontainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progress),\n                    style: {\n                        width: \"\".concat((currentQuestion + 1) / _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length * 100, \"%\")\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: currentQuestionData.image,\n                            width: 225,\n                            height: 225,\n                            alt: \"question\"\n                        }, void 0, false, {\n                            fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().qtitlebox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: currentQuestionData.title\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentQuestionData.question\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttons),\n                        children: (_currentQuestionData_answers = currentQuestionData.answers) === null || _currentQuestionData_answers === void 0 ? void 0 : _currentQuestionData_answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    disabled: selectedAnswer,\n                                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonBody),\n                                    onClick: ()=>{\n                                        setSelectedAnswer(answer);\n                                        if (answer === currentQuestionData.correctAnswer || currentQuestionData.correctAnswerTwo && currentQuestion === currentQuestionData.id) {\n                                            setScore(score + 1);\n                                        }\n                                        if (currentQuestion === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1 && currentQuestionData.id === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1) {\n                                            if (answer === currentQuestionData.correctAnswer && popupOpen === false) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else if (score === 1) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else if (score === 6) {\n                                                router.push(\"/results/visit-burr\".concat(score - 1));\n                                            } else {\n                                                router.push(\"/results/visit-burr\".concat(score - 1));\n                                            }\n                                        } else {\n                                            setPopupOpen(true);\n                                        }\n                                    },\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().popup),\n                        onClick: ()=>{\n                            setCurrentQuestion(currentQuestion + 1);\n                            setSelectedAnswer(null);\n                            setPopupOpen(false);\n                        },\n                        children: renderPopup(selectedAnswer, currentQuestionData, currentQuestionData.goodFeedback, currentQuestionData.badFeedback)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Quiz, \"IdPB+GufH8Ac1fAFyrRwsQ8N6cc=\", false, function() {\n    return [\n        _hooks_usePopup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTs0Q0FDNUMsT0FBTztnREFDTFEsT0FBT2dDLElBQUksQ0FBQyxzQkFBZ0MsT0FBVnhDLFFBQVE7NENBQzVDLENBQUM7d0NBQ0gsT0FBTzs0Q0FDTEssYUFBYSxJQUFJO3dDQUNuQixDQUFDO29DQUNIOzhDQUVDeUI7Ozs7OzsrQkFsQ3dDQzs7Ozs7Ozs7OztrQ0F1Q2pELDhEQUFDckI7d0JBQ0NDLFdBQVcxQixzRUFBWTt3QkFDdkJtRCxTQUFTLElBQU07NEJBQ2J4QyxtQkFBbUJELGtCQUFrQjs0QkFDckNRLGtCQUFrQixJQUFJOzRCQUN0QkUsYUFBYSxLQUFLO3dCQUNwQjtrQ0FFQ0ksWUFDQ1AsZ0JBQ0FSLHFCQUNBQSxvQkFBb0JnRCxZQUFZLEVBQ2hDaEQsb0JBQW9CaUQsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUFNM0MsQ0FBQztHQW5HdUJsRDs7UUFjRUQsdURBQVFBOzs7S0FkVkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcz82ZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9RdWl6Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHF1ZXN0aW9ucyB9IGZyb20gXCIuLi9kYXRhL3F1ZXN0aW9ucy5qc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXIvaW5kZXguanNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VQb3B1cCBmcm9tIFwiQC9ob29rcy91c2VQb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6KCkge1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtxdWl6RGF0YSwgc2V0UXVpekRhdGFdID0gdXNlU3RhdGUoWy4uLnF1ZXN0aW9uc10pO1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uRGF0YSwgc2V0Q3VycmVudFF1ZXN0aW9uRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtzZWxlY3RlZEFuc3dlciwgc2V0U2VsZWN0ZWRBbnN3ZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwb3B1cE9wZW4sIHNldFBvcHVwT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50UXVlc3Rpb25EYXRhKHF1aXpEYXRhW2N1cnJlbnRRdWVzdGlvbl0pO1xuICAgIGNvbnNvbGUubG9nKHNjb3JlKTtcbiAgfSwgW2N1cnJlbnRRdWVzdGlvbl0pO1xuXG4gIGNvbnN0IHJvdXRlciA9IFJvdXRlcjtcbiAgY29uc3QgeyByZW5kZXJQb3B1cCB9ID0gdXNlUG9wdXAoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzY29udGFpbmVyfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7KChjdXJyZW50UXVlc3Rpb24gKyAxKSAvIHF1ZXN0aW9ucy5sZW5ndGgpICogMTAwfSVgLFxuICAgICAgICAgIH19XG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2N1cnJlbnRRdWVzdGlvbkRhdGEuaW1hZ2V9XG4gICAgICAgICAgICB3aWR0aD17MjI1fVxuICAgICAgICAgICAgaGVpZ2h0PXsyMjV9XG4gICAgICAgICAgICBhbHQ9XCJxdWVzdGlvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXRpdGxlYm94fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntjdXJyZW50UXVlc3Rpb25EYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e2N1cnJlbnRRdWVzdGlvbkRhdGEucXVlc3Rpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uRGF0YS5hbnN3ZXJzPy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEFuc3dlcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Cb2R5fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQW5zd2VyKGFuc3dlcik7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGFuc3dlciA9PT0gY3VycmVudFF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyIHx8XG4gICAgICAgICAgICAgICAgICAgIChjdXJyZW50UXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXJUd28gJiZcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24gPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuaWQpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uID09PSBxdWVzdGlvbnMubGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb25EYXRhLmlkID09PSBxdWVzdGlvbnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlciAmJlxuICAgICAgICAgICAgICAgICAgICAgIHBvcHVwT3BlbiA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHRzL3Zpc2l0LWJ1cnIke3Njb3JlfWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHRzL3Zpc2l0LWJ1cnIke3Njb3JlfWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID09PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHRzL3Zpc2l0LWJ1cnIke3Njb3JlIC0gMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Jlc3VsdHMvdmlzaXQtYnVyciR7c2NvcmUgLSAxfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3B1cE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthbnN3ZXJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRBbnN3ZXIobnVsbCk7XG4gICAgICAgICAgICBzZXRQb3B1cE9wZW4oZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyUG9wdXAoXG4gICAgICAgICAgICBzZWxlY3RlZEFuc3dlcixcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbkRhdGEsXG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb25EYXRhLmdvb2RGZWVkYmFjayxcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbkRhdGEuYmFkRmVlZGJhY2tcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInF1ZXN0aW9ucyIsIk5hdmJhciIsIkltYWdlIiwiUm91dGVyIiwidXNlUG9wdXAiLCJRdWl6IiwiY3VycmVudFF1ZXN0aW9uRGF0YSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInF1aXpEYXRhIiwic2V0UXVpekRhdGEiLCJzZXRDdXJyZW50UXVlc3Rpb25EYXRhIiwic2NvcmUiLCJzZXRTY29yZSIsInNlbGVjdGVkQW5zd2VyIiwic2V0U2VsZWN0ZWRBbnN3ZXIiLCJwb3B1cE9wZW4iLCJzZXRQb3B1cE9wZW4iLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwicmVuZGVyUG9wdXAiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9ncmVzc2NvbnRhaW5lciIsInByb2dyZXNzIiwic3R5bGUiLCJ3aWR0aCIsImxlbmd0aCIsIm1haW4iLCJzcmMiLCJpbWFnZSIsImhlaWdodCIsImFsdCIsInF0aXRsZWJveCIsImgxIiwidGl0bGUiLCJwIiwicXVlc3Rpb24iLCJidXR0b25zIiwiYW5zd2VycyIsIm1hcCIsImFuc3dlciIsImluZGV4IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJidXR0b25Cb2R5Iiwib25DbGljayIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyVHdvIiwiaWQiLCJwdXNoIiwicG9wdXAiLCJnb29kRmVlZGJhY2siLCJiYWRGZWVkYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz.js\n"));

/***/ })

});