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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Quiz.module.css */ \"./styles/Quiz.module.css\");\n/* harmony import */ var _styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_questions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/questions.js */ \"./data/questions.js\");\n/* harmony import */ var _components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/index.js */ \"./components/Navbar/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Button_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button/index.js */ \"./components/Button/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Quiz() {\n    var _currentQuestionData_answers;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [quizData, setQuizData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_questions_js__WEBPACK_IMPORTED_MODULE_2__.questions\n    ]);\n    const [currentQuestionData, setCurrentQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    let score = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCurrentQuestionData(quizData[currentQuestion]);\n        console.log(currentQuestionData);\n    }, [\n        currentQuestion\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: currentQuestionData.image,\n                            width: 225,\n                            height: 225\n                        }, void 0, false, {\n                            fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6___default().qtitlebox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Quiz_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                                children: currentQuestionData.title\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: currentQuestionData.question\n                            }, void 0, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: (_currentQuestionData_answers = currentQuestionData.answers) === null || _currentQuestionData_answers === void 0 ? void 0 : _currentQuestionData_answers.map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onClick: ()=>{\n                                    if (answer === \"Yes\") {\n                                        score++;\n                                        console.log(\"Score Increase\");\n                                    } else {\n                                        console.log(\"Score No Change\");\n                                    }\n                                },\n                                word: answer\n                            }, index, false, {\n                                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/payne/Desktop/brrilliant/pages/quiz.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Quiz, \"u1odTx/MVM8WvUJse1a0Vw8khmI=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0g7QUFDSztBQUNFO0FBQ3BCO0FBQ29CO0FBRXBDLFNBQVNPLE9BQU87UUF3QnBCQzs7SUF2QlQsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7V0FBSUUseURBQVNBO0tBQUM7SUFDdkQsTUFBTSxDQUFDSyxxQkFBcUJLLHVCQUF1QixHQUFHWiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWhFLElBQUlhLFFBQVE7SUFFWlosZ0RBQVNBLENBQUMsSUFBTTtRQUNkVyx1QkFBdUJGLFFBQVEsQ0FBQ0YsZ0JBQWdCO1FBQ2hETSxRQUFRQyxHQUFHLENBQUNSO0lBQ2QsR0FBRztRQUFDQztLQUFnQjtJQUVwQixxQkFDRTs7MEJBQ0UsOERBQUNMLG1FQUFNQTs7Ozs7MEJBQ1AsOERBQUNhO2dCQUFLQyxXQUFXbEIscUVBQVc7O2tDQUMxQiw4REFBQ21CO2tDQUNDLDRFQUFDZCxtREFBS0E7NEJBQUNlLEtBQUtaLG9CQUFvQmEsS0FBSzs0QkFBRUMsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7a0NBRTdELDhEQUFDSjt3QkFBSUQsV0FBV2xCLDBFQUFnQjs7MENBQzlCLDhEQUFDeUI7Z0NBQUdQLFdBQVdsQixzRUFBWTswQ0FBR1Esb0JBQW9Ca0IsS0FBSzs7Ozs7OzBDQUN2RCw4REFBQ0M7MENBQUduQixvQkFBb0JvQixRQUFROzs7Ozs7Ozs7Ozs7a0NBRWxDLDhEQUFDVDtrQ0FDRVgsQ0FBQUEsK0JBQUFBLG9CQUFvQnFCLE9BQU8sY0FBM0JyQiwwQ0FBQUEsS0FBQUEsSUFBQUEsNkJBQTZCc0IsSUFBSSxDQUFDQyxRQUFRQyxzQkFDekMsOERBQUMxQixtRUFBTUE7Z0NBRUwyQixTQUFTLElBQU07b0NBQ2IsSUFBSUYsV0FBVyxPQUFPO3dDQUNwQmpCO3dDQUNBQyxRQUFRQyxHQUFHLENBQUM7b0NBQ2QsT0FBTzt3Q0FDTEQsUUFBUUMsR0FBRyxDQUFDO29DQUNkLENBQUM7Z0NBQ0g7Z0NBQ0FrQixNQUFNSDsrQkFUREM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbkIsQ0FBQztHQTFDdUJ6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6LmpzPzZmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1F1aXoubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcXVlc3Rpb25zIH0gZnJvbSBcIi4uL2RhdGEvcXVlc3Rpb25zLmpzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhci9pbmRleC5qc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6KCkge1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtxdWl6RGF0YSwgc2V0UXVpekRhdGFdID0gdXNlU3RhdGUoWy4uLnF1ZXN0aW9uc10pO1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uRGF0YSwgc2V0Q3VycmVudFF1ZXN0aW9uRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgbGV0IHNjb3JlID0gMDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1cnJlbnRRdWVzdGlvbkRhdGEocXVpekRhdGFbY3VycmVudFF1ZXN0aW9uXSk7XG4gICAgY29uc29sZS5sb2coY3VycmVudFF1ZXN0aW9uRGF0YSk7XG4gIH0sIFtjdXJyZW50UXVlc3Rpb25dKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtjdXJyZW50UXVlc3Rpb25EYXRhLmltYWdlfSB3aWR0aD17MjI1fSBoZWlnaHQ9ezIyNX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXRpdGxlYm94fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntjdXJyZW50UXVlc3Rpb25EYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e2N1cnJlbnRRdWVzdGlvbkRhdGEucXVlc3Rpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uRGF0YS5hbnN3ZXJzPy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIgPT09IFwiWWVzXCIpIHtcbiAgICAgICAgICAgICAgICAgIHNjb3JlKys7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjb3JlIEluY3JlYXNlXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjb3JlIE5vIENoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHdvcmQ9e2Fuc3dlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicXVlc3Rpb25zIiwiTmF2YmFyIiwiSW1hZ2UiLCJCdXR0b24iLCJRdWl6IiwiY3VycmVudFF1ZXN0aW9uRGF0YSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInF1aXpEYXRhIiwic2V0UXVpekRhdGEiLCJzZXRDdXJyZW50UXVlc3Rpb25EYXRhIiwic2NvcmUiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJxdGl0bGVib3giLCJoMSIsInRpdGxlIiwicCIsInF1ZXN0aW9uIiwiYW5zd2VycyIsIm1hcCIsImFuc3dlciIsImluZGV4Iiwib25DbGljayIsIndvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quiz.js\n"));

/***/ })

});