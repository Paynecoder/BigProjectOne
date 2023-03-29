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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Quiz.module.css */ \"./styles/Quiz.module.css\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questions.js */ \"./data/questions.js\");\n/* harmony import */ var _components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/index.js */ \"./components/Navbar/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Popup */ \"./components/Popup/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Quiz() {\n    var _currentQuestionData_answers;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions\n    ]);\n    const [currentQuestionData, setCurrentQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrentQuestionData(quizData[currentQuestion]);\n        console.log(score);\n    }, [\n        currentQuestion\n    ]);\n    const router = (next_router__WEBPACK_IMPORTED_MODULE_5___default());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progresscontainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().progress),\n                    style: {\n                        width: \"\".concat((currentQuestion + 1) / _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length * 100, \"%\")\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: currentQuestionData.image,\n                            width: 225,\n                            height: 225,\n                            alt: \"question\"\n                        }, void 0, false, {\n                            fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().qtitlebox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: currentQuestionData.title\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentQuestionData.question\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttons),\n                        children: (_currentQuestionData_answers = currentQuestionData.answers) === null || _currentQuestionData_answers === void 0 ? void 0 : _currentQuestionData_answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonBody),\n                                    onClick: ()=>{\n                                        if (answer === currentQuestionData.correctAnswer || currentQuestionData.correctAnswerTwo && currentQuestion === currentQuestionData.id) {\n                                            setScore(score + 1);\n                                        }\n                                        if (currentQuestion === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1 && currentQuestionData.id === _data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions.length - 1) {\n                                            if (answer === currentQuestionData.correctAnswer) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else if (score === 1) {\n                                                router.push(\"/results/visit-burr\".concat(score));\n                                            } else {\n                                                router.push(\"/results/visit-burr\".concat(score - 1));\n                                            }\n                                        } else {\n                                            setCurrentQuestion(currentQuestion + 1);\n                                        }\n                                    },\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setCurrentQuestion(currentQuestion - 1);\n                            },\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Quiz, \"aKmWYs7H7LV+uXha0BEYquq1Vl8=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUV2QztzQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0FyRnVCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6LmpzPzZmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1F1aXoubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcXVlc3Rpb25zIH0gZnJvbSBcIi4uL2RhdGEvcXVlc3Rpb25zLmpzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhci9pbmRleC5qc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCJAL2NvbXBvbmVudHMvUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcXVpekRhdGEsIHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlKFsuLi5xdWVzdGlvbnNdKTtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbkRhdGEsIHNldEN1cnJlbnRRdWVzdGlvbkRhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFF1ZXN0aW9uRGF0YShxdWl6RGF0YVtjdXJyZW50UXVlc3Rpb25dKTtcbiAgICBjb25zb2xlLmxvZyhzY29yZSk7XG4gIH0sIFtjdXJyZW50UXVlc3Rpb25dKTtcblxuICBjb25zdCByb3V0ZXIgPSBSb3V0ZXI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc2NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc31cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IGAkeygoY3VycmVudFF1ZXN0aW9uICsgMSkgLyBxdWVzdGlvbnMubGVuZ3RoKSAqIDEwMH0lYCxcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtjdXJyZW50UXVlc3Rpb25EYXRhLmltYWdlfVxuICAgICAgICAgICAgd2lkdGg9ezIyNX1cbiAgICAgICAgICAgIGhlaWdodD17MjI1fVxuICAgICAgICAgICAgYWx0PVwicXVlc3Rpb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF0aXRsZWJveH0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y3VycmVudFF1ZXN0aW9uRGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgIDxwPntjdXJyZW50UXVlc3Rpb25EYXRhLnF1ZXN0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAge2N1cnJlbnRRdWVzdGlvbkRhdGEuYW5zd2Vycz8ubWFwKChhbnN3ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Cb2R5fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyID09PSBjdXJyZW50UXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRRdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlclR3byAmJlxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9PT0gY3VycmVudFF1ZXN0aW9uRGF0YS5pZClcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTY29yZShzY29yZSArIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24gPT09IHF1ZXN0aW9ucy5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbkRhdGEuaWQgPT09IHF1ZXN0aW9ucy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlciA9PT0gY3VycmVudFF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHRzL3Zpc2l0LWJ1cnIke3Njb3JlfWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHRzL3Zpc2l0LWJ1cnIke3Njb3JlfWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmVzdWx0cy92aXNpdC1idXJyJHtzY29yZSAtIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Fuc3dlcn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uIC0gMSk7XG4gIFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCYWNrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicXVlc3Rpb25zIiwiTmF2YmFyIiwiSW1hZ2UiLCJSb3V0ZXIiLCJQb3B1cCIsIlF1aXoiLCJjdXJyZW50UXVlc3Rpb25EYXRhIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwicXVpekRhdGEiLCJzZXRRdWl6RGF0YSIsInNldEN1cnJlbnRRdWVzdGlvbkRhdGEiLCJzY29yZSIsInNldFNjb3JlIiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsInByb2dyZXNzY29udGFpbmVyIiwicHJvZ3Jlc3MiLCJzdHlsZSIsIndpZHRoIiwibGVuZ3RoIiwibWFpbiIsInNyYyIsImltYWdlIiwiaGVpZ2h0IiwiYWx0IiwicXRpdGxlYm94IiwiaDEiLCJ0aXRsZSIsInAiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwiaW5kZXgiLCJidXR0b25Db250YWluZXIiLCJidXR0b24iLCJidXR0b25Cb2R5Iiwib25DbGljayIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyVHdvIiwiaWQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz.js\n"));

/***/ })

});