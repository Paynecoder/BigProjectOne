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

/***/ "./components/Popup/index.js":
/*!***********************************!*\
  !*** ./components/Popup/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Popup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Popup_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup.module.css */ \"./components/Popup/Popup.module.css\");\n/* harmony import */ var _Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Popup_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_usePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/usePopup */ \"./hooks/usePopup.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Popup(param) {\n    let { paragraph , color  } = param;\n    _s();\n    const { nextQuestion  } = (0,_hooks_usePopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n            style: {\n                backgroundColor: color\n            },\n            onClick: ()=>{\n                nextQuestion();\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().says),\n                    children: \"Burr Says...\"\n                }, void 0, false, {\n                    fileName: \"/Users/payne/Desktop/brrilliant/components/Popup/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().paragraph),\n                    children: paragraph\n                }, void 0, false, {\n                    fileName: \"/Users/payne/Desktop/brrilliant/components/Popup/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_2___default().next),\n                        children: \"NEXT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/payne/Desktop/brrilliant/components/Popup/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/payne/Desktop/brrilliant/components/Popup/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/payne/Desktop/brrilliant/components/Popup/index.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Popup, \"du3i9T0d49lCn+ntOsoOlRq0rto=\", false, function() {\n    return [\n        _hooks_usePopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Popup;\nvar _c;\n$RefreshReg$(_c, \"Popup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcHVwL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFFekIsU0FBU0UsTUFBTSxLQUFvQixFQUFFO1FBQXRCLEVBQUVDLFVBQVMsRUFBRUMsTUFBSyxFQUFFLEdBQXBCOztJQUM1QixNQUFNLEVBQUVDLGFBQVksRUFBRSxHQUFHSiwyREFBUUE7SUFFakMscUJBQ0U7a0JBQ0UsNEVBQUNLO1lBQ0NDLFdBQVdQLCtEQUFXO1lBQ3RCUSxPQUFPO2dCQUNMQyxpQkFBaUJMO1lBQ25CO1lBQ0FNLFNBQVMsSUFBTTtnQkFDYkw7WUFDRjs7OEJBRUEsOERBQUNNO29CQUFHSixXQUFXUCwrREFBVzs4QkFBRTs7Ozs7OzhCQUM1Qiw4REFBQ2E7b0JBQUVOLFdBQVdQLG9FQUFnQjs4QkFBR0c7Ozs7Ozs4QkFDakMsOERBQUNXOzhCQUNDLDRFQUFDRDt3QkFBRU4sV0FBV1AsK0RBQVc7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQyxDQUFDO0dBdEJ1QkU7O1FBQ0dELHVEQUFRQTs7O0tBRFhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9wdXAvaW5kZXguanM/MGM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1BvcHVwLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB1c2VQb3B1cCBmcm9tIFwiQC9ob29rcy91c2VQb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3B1cCh7IHBhcmFncmFwaCwgY29sb3IgfSkge1xuICBjb25zdCB7IG5leHRRdWVzdGlvbiB9ID0gdXNlUG9wdXAoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tYWlufVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBuZXh0UXVlc3Rpb24oKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnNheXN9PkJ1cnIgU2F5cy4uLjwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFncmFwaH0+e3BhcmFncmFwaH08L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmV4dH0+TkVYVDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUG9wdXAiLCJQb3B1cCIsInBhcmFncmFwaCIsImNvbG9yIiwibmV4dFF1ZXN0aW9uIiwibWFpbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwib25DbGljayIsImgxIiwic2F5cyIsInAiLCJkaXYiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Popup/index.js\n"));

/***/ })

});