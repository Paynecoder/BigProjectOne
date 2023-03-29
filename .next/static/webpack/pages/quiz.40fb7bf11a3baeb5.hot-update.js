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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Quiz.module.css */ \"./styles/Quiz.module.css\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questions.js */ \"./data/questions.js\");\n/* harmony import */ var _components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/index.js */ \"./components/Navbar/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Popup */ \"./components/Popup/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Quiz() {\n    var _currentQuestionData_answers;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions\n    ]);\n    const [currentQuestionData, setCurrentQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrentQuestionData(quizData[currentQuestion]);\n        console.log(score);\n    }, [\n        currentQuestion\n    ]);\n    const router = (next_router__WEBPACK_IMPORTED_MODULE_5___default());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progress),\n                style: {\n                    width: \"\".concat((currentQuestion + 1) / _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length * 100, \"%\"),\n                    background\n                }\n            }, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: currentQuestionData.image,\n                            width: 225,\n                            height: 225,\n                            alt: \"question\"\n                        }, void 0, false, {\n                            fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().qtitlebox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: currentQuestionData.title\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentQuestionData.question\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttons),\n                        children: (_currentQuestionData_answers = currentQuestionData.answers) === null || _currentQuestionData_answers === void 0 ? void 0 : _currentQuestionData_answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonBody),\n                                    onClick: ()=>{\n                                        if (answer === currentQuestionData.correctAnswer || currentQuestionData.correctAnswerTwo && currentQuestion === currentQuestionData.id) {\n                                            setScore(score + 1);\n                                        }\n                                        if (currentQuestion === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1 && currentQuestionData.id === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1) {\n                                            if (answer === currentQuestionData.correctAnswer) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else if (score === 1) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else {\n                                                router.push(\"/results/visit-burr\".concat(score - 1));\n                                            }\n                                        } else {\n                                            setCurrentQuestion(currentQuestion + 1);\n                                        }\n                                    },\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Quiz, \"aKmWYs7H7LV+uXha0BEYquq1Vl8=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUXVpei5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBxdWVzdGlvbnMgfSBmcm9tIFwiLi4vZGF0YS9xdWVzdGlvbnMuanNcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6KCkge1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtxdWl6RGF0YSwgc2V0UXVpekRhdGFdID0gdXNlU3RhdGUoWy4uLnF1ZXN0aW9uc10pO1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uRGF0YSwgc2V0Q3VycmVudFF1ZXN0aW9uRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50UXVlc3Rpb25EYXRhKHF1aXpEYXRhW2N1cnJlbnRRdWVzdGlvbl0pO1xuICAgIGNvbnNvbGUubG9nKHNjb3JlKTtcbiAgfSwgW2N1cnJlbnRRdWVzdGlvbl0pO1xuXG4gIGNvbnN0IHJvdXRlciA9IFJvdXRlcjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBgJHsoKGN1cnJlbnRRdWVzdGlvbiArIDEpIC8gcXVlc3Rpb25zLmxlbmd0aCkgKiAxMDB9JWAsXG4gICAgICAgICAgYmFja2dyb3VuZFxuICAgICAgICB9fVxuICAgICAgPjwvZGl2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2N1cnJlbnRRdWVzdGlvbkRhdGEuaW1hZ2V9XG4gICAgICAgICAgICB3aWR0aD17MjI1fVxuICAgICAgICAgICAgaGVpZ2h0PXsyMjV9XG4gICAgICAgICAgICBhbHQ9XCJxdWVzdGlvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXRpdGxlYm94fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntjdXJyZW50UXVlc3Rpb25EYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e2N1cnJlbnRRdWVzdGlvbkRhdGEucXVlc3Rpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uRGF0YS5hbnN3ZXJzPy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkJvZHl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlciB8fFxuICAgICAgICAgICAgICAgICAgICAoY3VycmVudFF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyVHdvICYmXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9PT0gcXVlc3Rpb25zLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uRGF0YS5pZCA9PT0gcXVlc3Rpb25zLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Jlc3VsdHMvdmlzaXQtYnVyciR7c2NvcmV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Jlc3VsdHMvdmlzaXQtYnVyciR7c2NvcmV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHRzL3Zpc2l0LWJ1cnIke3Njb3JlIC0gMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YW5zd2VyfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInF1ZXN0aW9ucyIsIk5hdmJhciIsIkltYWdlIiwiUm91dGVyIiwiUG9wdXAiLCJRdWl6IiwiY3VycmVudFF1ZXN0aW9uRGF0YSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInF1aXpEYXRhIiwic2V0UXVpekRhdGEiLCJzZXRDdXJyZW50UXVlc3Rpb25EYXRhIiwic2NvcmUiLCJzZXRTY29yZSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9ncmVzcyIsInN0eWxlIiwid2lkdGgiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kIiwibWFpbiIsInNyYyIsImltYWdlIiwiaGVpZ2h0IiwiYWx0IiwicXRpdGxlYm94IiwiaDEiLCJ0aXRsZSIsInAiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwiaW5kZXgiLCJidXR0b25Db250YWluZXIiLCJidXR0b24iLCJidXR0b25Cb2R5Iiwib25DbGljayIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyVHdvIiwiaWQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz.js\n"));

/***/ })

});