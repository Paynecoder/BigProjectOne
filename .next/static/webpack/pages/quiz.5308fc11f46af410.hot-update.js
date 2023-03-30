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

/***/ "./hooks/usePopup.js":
/*!***************************!*\
  !*** ./hooks/usePopup.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Popup */ \"./components/Popup/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction usePopup() {\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const renderPopup = (selectedAnswer, currentQuestionData, goodFeedback, badFeedback)=>{\n        if (selectedAnswer == null) {\n            return null;\n        }\n        let isCorrect;\n        if (selectedAnswer === currentQuestionData.correctAnswer || selectedAnswer === currentQuestionData.correctAnswerTwo) {\n            isCorrect = true;\n            console.log(\"render\");\n        } else {\n            isCorrect = false;\n            console.log(\"render\");\n        }\n        // Render the Popup component\n        const popup = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            color: isCorrect ? \"#24CF16\" : \"#B91A1A\",\n            paragraph: isCorrect ? goodFeedback : badFeedback\n        }, void 0, false, {\n            fileName: \"/Users/payne/Desktop/brrilliant/hooks/usePopup.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n        return popup;\n    };\n    const nextQuestion = (setCurrentQuestion, setSelectedAnswer, currentQuestion)=>{\n        setCurrentQuestion(currentQuestion + 1);\n        setSelectedAnswer(null);\n    };\n    return {\n        renderPopup,\n        nextQuestion\n    };\n}\n_s(usePopup, \"9OM438k1WhEIHDwFF7YsuyU6VEk=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VQb3B1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNOO0FBRWxCLFNBQVNFLFdBQVc7O0lBQ2pDLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDdkQsTUFBTUksY0FBYyxDQUNsQkMsZ0JBQ0FDLHFCQUNBQyxjQUNBQyxjQUNHO1FBQ0gsSUFBSUgsa0JBQWtCLElBQUksRUFBRTtZQUMxQixPQUFPLElBQUk7UUFDYixDQUFDO1FBRUQsSUFBSUk7UUFDSixJQUNFSixtQkFBbUJDLG9CQUFvQkksYUFBYSxJQUNwREwsbUJBQW1CQyxvQkFBb0JLLGdCQUFnQixFQUN2RDtZQUNBRixZQUFZLElBQUk7WUFDaEJHLFFBQVFDLEdBQUcsQ0FBQztRQUNkLE9BQU87WUFDTEosWUFBWSxLQUFLO1lBQ2pCRyxRQUFRQyxHQUFHLENBQUM7UUFDZCxDQUFDO1FBRUQsNkJBQTZCO1FBQzdCLE1BQU1DLHNCQUNKLDhEQUFDZix5REFBS0E7WUFDSmdCLE9BQU9OLFlBQVksWUFBWSxTQUFTO1lBQ3hDTyxXQUFXUCxZQUFZRixlQUFlQyxXQUFXOzs7Ozs7UUFJckQsT0FBT007SUFDVDtJQUVBLE1BQU1HLGVBQWUsQ0FDbkJkLG9CQUNBZSxtQkFDQWhCLGtCQUNHO1FBQ0hDLG1CQUFtQkQsa0JBQWtCO1FBQ3JDZ0Isa0JBQWtCLElBQUk7SUFDeEI7SUFFQSxPQUFPO1FBQUVkO1FBQWFhO0lBQWE7QUFDckMsQ0FBQztHQTdDdUJoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VQb3B1cC5qcz8yNWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3B1cCBmcm9tIFwiQC9jb21wb25lbnRzL1BvcHVwXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQb3B1cCgpIHtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCByZW5kZXJQb3B1cCA9IChcbiAgICBzZWxlY3RlZEFuc3dlcixcbiAgICBjdXJyZW50UXVlc3Rpb25EYXRhLFxuICAgIGdvb2RGZWVkYmFjayxcbiAgICBiYWRGZWVkYmFja1xuICApID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRBbnN3ZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGlzQ29ycmVjdDtcbiAgICBpZiAoXG4gICAgICBzZWxlY3RlZEFuc3dlciA9PT0gY3VycmVudFF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyIHx8XG4gICAgICBzZWxlY3RlZEFuc3dlciA9PT0gY3VycmVudFF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyVHdvXG4gICAgKSB7XG4gICAgICBpc0NvcnJlY3QgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJcIik7XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIHRoZSBQb3B1cCBjb21wb25lbnRcbiAgICBjb25zdCBwb3B1cCA9IChcbiAgICAgIDxQb3B1cFxuICAgICAgICBjb2xvcj17aXNDb3JyZWN0ID8gXCIjMjRDRjE2XCIgOiBcIiNCOTFBMUFcIn1cbiAgICAgICAgcGFyYWdyYXBoPXtpc0NvcnJlY3QgPyBnb29kRmVlZGJhY2sgOiBiYWRGZWVkYmFja31cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIHJldHVybiBwb3B1cDtcbiAgfTtcblxuICBjb25zdCBuZXh0UXVlc3Rpb24gPSAoXG4gICAgc2V0Q3VycmVudFF1ZXN0aW9uLFxuICAgIHNldFNlbGVjdGVkQW5zd2VyLFxuICAgIGN1cnJlbnRRdWVzdGlvblxuICApID0+IHtcbiAgICBzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uICsgMSk7XG4gICAgc2V0U2VsZWN0ZWRBbnN3ZXIobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyUG9wdXAsIG5leHRRdWVzdGlvbiB9O1xufVxuIl0sIm5hbWVzIjpbIlBvcHVwIiwidXNlU3RhdGUiLCJ1c2VQb3B1cCIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInJlbmRlclBvcHVwIiwic2VsZWN0ZWRBbnN3ZXIiLCJjdXJyZW50UXVlc3Rpb25EYXRhIiwiZ29vZEZlZWRiYWNrIiwiYmFkRmVlZGJhY2siLCJpc0NvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwiY29ycmVjdEFuc3dlclR3byIsImNvbnNvbGUiLCJsb2ciLCJwb3B1cCIsImNvbG9yIiwicGFyYWdyYXBoIiwibmV4dFF1ZXN0aW9uIiwic2V0U2VsZWN0ZWRBbnN3ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/usePopup.js\n"));

/***/ })

});