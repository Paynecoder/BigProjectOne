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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Quiz.module.css */ \"./styles/Quiz.module.css\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questions.js */ \"./data/questions.js\");\n/* harmony import */ var _components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/index.js */ \"./components/Navbar/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_usePopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePopup */ \"./hooks/usePopup.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Quiz() {\n    var _currentQuestionData_answers;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions\n    ]);\n    const [currentQuestionData, setCurrentQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [popupOpen, setPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrentQuestionData(quizData[currentQuestion]);\n        console.log(score);\n    }, [\n        currentQuestion\n    ]);\n    const router = (next_router__WEBPACK_IMPORTED_MODULE_5___default());\n    const { renderPopup  } = (0,_hooks_usePopup__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progresscontainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progress),\n                    style: {\n                        width: \"\".concat((currentQuestion + 1) / _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length * 100, \"%\")\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: currentQuestionData.image,\n                            width: 225,\n                            height: 225,\n                            alt: \"question\"\n                        }, void 0, false, {\n                            fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().qtitlebox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: currentQuestionData.title\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentQuestionData.question\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttons),\n                        children: (_currentQuestionData_answers = currentQuestionData.answers) === null || _currentQuestionData_answers === void 0 ? void 0 : _currentQuestionData_answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonBody),\n                                    onClick: ()=>{\n                                        setSelectedAnswer(answer);\n                                        if (answer === currentQuestionData.correctAnswer || currentQuestionData.correctAnswerTwo && currentQuestion === currentQuestionData.id && popupOpen === false) {\n                                            setScore(score + 1);\n                                        }\n                                        if (currentQuestion === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1 && currentQuestionData.id === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1) {\n                                            if (answer === currentQuestionData.correctAnswer && popupOpen === false) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else if (score === 1) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else if (score === 6) {\n                                                router.push(\"/results/visit-burr\".concat(score - 1));\n                                            } else {\n                                                router.push(\"/results/visit-burr\".concat(score - 1));\n                                            }\n                                        } else {\n                                            setPopupOpen(true);\n                                        }\n                                    },\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().popup),\n                        onClick: ()=>{\n                            setCurrentQuestion(currentQuestion + 1);\n                            setSelectedAnswer(null);\n                            setPopupOpen(false);\n                        },\n                        children: renderPopup(selectedAnswer, currentQuestionData, currentQuestionData.goodFeedback, currentQuestionData.badFeedback)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Quiz, \"IdPB+GufH8Ac1fAFyrRwsQ8N6cc=\", false, function() {\n    return [\n        _hooks_usePopup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7NENBQzVDLE9BQU87Z0RBQ0xRLE9BQU8rQixJQUFJLENBQUMsc0JBQWdDLE9BQVZ2QyxRQUFROzRDQUM1QyxDQUFDO3dDQUNILE9BQU87NENBQ0xLLGFBQWEsSUFBSTt3Q0FDbkIsQ0FBQztvQ0FDSDs4Q0FFQ3lCOzs7Ozs7K0JBbEN3Q0M7Ozs7Ozs7Ozs7a0NBdUNqRCw4REFBQ3JCO3dCQUNDQyxXQUFXMUIsc0VBQVk7d0JBQ3ZCa0QsU0FBUyxJQUFNOzRCQUNidkMsbUJBQW1CRCxrQkFBa0I7NEJBQ3JDUSxrQkFBa0IsSUFBSTs0QkFDdEJFLGFBQWEsS0FBSzt3QkFDcEI7a0NBRUNJLFlBQ0NQLGdCQUNBUixxQkFDQUEsb0JBQW9CK0MsWUFBWSxFQUNoQy9DLG9CQUFvQmdELFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FBTTNDLENBQUM7R0FuR3VCakQ7O1FBY0VELHVEQUFRQTs7O0tBZFZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXouanM/NmYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUXVpei5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBxdWVzdGlvbnMgfSBmcm9tIFwiLi4vZGF0YS9xdWVzdGlvbnMuanNcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlUG9wdXAgZnJvbSBcIkAvaG9va3MvdXNlUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcXVpekRhdGEsIHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlKFsuLi5xdWVzdGlvbnNdKTtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbkRhdGEsIHNldEN1cnJlbnRRdWVzdGlvbkRhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbc2VsZWN0ZWRBbnN3ZXIsIHNldFNlbGVjdGVkQW5zd2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcG9wdXBPcGVuLCBzZXRQb3B1cE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFF1ZXN0aW9uRGF0YShxdWl6RGF0YVtjdXJyZW50UXVlc3Rpb25dKTtcbiAgICBjb25zb2xlLmxvZyhzY29yZSk7XG4gIH0sIFtjdXJyZW50UXVlc3Rpb25dKTtcblxuICBjb25zdCByb3V0ZXIgPSBSb3V0ZXI7XG4gIGNvbnN0IHsgcmVuZGVyUG9wdXAgfSA9IHVzZVBvcHVwKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc2NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc31cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAkeygoY3VycmVudFF1ZXN0aW9uICsgMSkgLyBxdWVzdGlvbnMubGVuZ3RoKSAqIDEwMH0lYCxcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtjdXJyZW50UXVlc3Rpb25EYXRhLmltYWdlfVxuICAgICAgICAgICAgd2lkdGg9ezIyNX1cbiAgICAgICAgICAgIGhlaWdodD17MjI1fVxuICAgICAgICAgICAgYWx0PVwicXVlc3Rpb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF0aXRsZWJveH0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y3VycmVudFF1ZXN0aW9uRGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgIDxwPntjdXJyZW50UXVlc3Rpb25EYXRhLnF1ZXN0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAge2N1cnJlbnRRdWVzdGlvbkRhdGEuYW5zd2Vycz8ubWFwKChhbnN3ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Cb2R5fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQW5zd2VyKGFuc3dlcik7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGFuc3dlciA9PT0gY3VycmVudFF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyIHx8XG4gICAgICAgICAgICAgICAgICAgIChjdXJyZW50UXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXJUd28gJiZcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24gPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICBwb3B1cE9wZW4gPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9PT0gcXVlc3Rpb25zLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uRGF0YS5pZCA9PT0gcXVlc3Rpb25zLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VyID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICBwb3B1cE9wZW4gPT09IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmVzdWx0cy92aXNpdC1idXJyJHtzY29yZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmVzdWx0cy92aXNpdC1idXJyJHtzY29yZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSA9PT0gNikge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmVzdWx0cy92aXNpdC1idXJyJHtzY29yZSAtIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHRzL3Zpc2l0LWJ1cnIke3Njb3JlIC0gMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXBPcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YW5zd2VyfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQW5zd2VyKG51bGwpO1xuICAgICAgICAgICAgc2V0UG9wdXBPcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3JlbmRlclBvcHVwKFxuICAgICAgICAgICAgc2VsZWN0ZWRBbnN3ZXIsXG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb25EYXRhLFxuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uRGF0YS5nb29kRmVlZGJhY2ssXG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb25EYXRhLmJhZEZlZWRiYWNrXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJxdWVzdGlvbnMiLCJOYXZiYXIiLCJJbWFnZSIsIlJvdXRlciIsInVzZVBvcHVwIiwiUXVpeiIsImN1cnJlbnRRdWVzdGlvbkRhdGEiLCJjdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJxdWl6RGF0YSIsInNldFF1aXpEYXRhIiwic2V0Q3VycmVudFF1ZXN0aW9uRGF0YSIsInNjb3JlIiwic2V0U2NvcmUiLCJzZWxlY3RlZEFuc3dlciIsInNldFNlbGVjdGVkQW5zd2VyIiwicG9wdXBPcGVuIiwic2V0UG9wdXBPcGVuIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInJlbmRlclBvcHVwIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZ3Jlc3Njb250YWluZXIiLCJwcm9ncmVzcyIsInN0eWxlIiwid2lkdGgiLCJsZW5ndGgiLCJtYWluIiwic3JjIiwiaW1hZ2UiLCJoZWlnaHQiLCJhbHQiLCJxdGl0bGVib3giLCJoMSIsInRpdGxlIiwicCIsInF1ZXN0aW9uIiwiYnV0dG9ucyIsImFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJpbmRleCIsImJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbiIsImJ1dHRvbkJvZHkiLCJvbkNsaWNrIiwiY29ycmVjdEFuc3dlciIsImNvcnJlY3RBbnN3ZXJUd28iLCJpZCIsInB1c2giLCJwb3B1cCIsImdvb2RGZWVkYmFjayIsImJhZEZlZWRiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz.js\n"));

/***/ })

});