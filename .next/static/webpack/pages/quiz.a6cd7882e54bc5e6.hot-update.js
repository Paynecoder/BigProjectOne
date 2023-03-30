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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Popup */ \"./components/Popup/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction usePopup() {\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const renderPopup = (selectedAnswer, currentQuestionData, goodFeedback, badFeedback)=>{\n        if (selectedAnswer == null) {\n            return null;\n        }\n        let isCorrect;\n        if (selectedAnswer === currentQuestionData.correctAnswer || selectedAnswer === currentQuestionData.correctAnswerTwo) {\n            isCorrect = true;\n            console.log(\"render\");\n        } else {\n            isCorrect = false;\n            console.log(\"render\");\n        }\n        // Render the Popup component\n        const popup = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            color: isCorrect ? \"#24CF16\" : \"#B91A1A\",\n            paragraph: isCorrect ? goodFeedback : badFeedback\n        }, void 0, false, {\n            fileName: \"/Users/payne/Desktop/brrilliant/hooks/usePopup.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n        return popup;\n    };\n    const nextQuestion = (setCurrentQuestion, setSelectedAnswer, currentQuestion)=>{\n        setCurrentQuestion(currentQuestion + 1);\n        setSelectedAnswer(null);\n    };\n    return {\n        renderPopup,\n        nextQuestion,\n        currentQuestion,\n        setCurrentQuestion\n    };\n}\n_s(usePopup, \"9OM438k1WhEIHDwFF7YsuyU6VEk=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VQb3B1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNOO0FBRWxCLFNBQVNFLFdBQVc7O0lBQ2pDLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDdkQsTUFBTUksY0FBYyxDQUNsQkMsZ0JBQ0FDLHFCQUNBQyxjQUNBQyxjQUNHO1FBQ0gsSUFBSUgsa0JBQWtCLElBQUksRUFBRTtZQUMxQixPQUFPLElBQUk7UUFDYixDQUFDO1FBRUQsSUFBSUk7UUFDSixJQUNFSixtQkFBbUJDLG9CQUFvQkksYUFBYSxJQUNwREwsbUJBQW1CQyxvQkFBb0JLLGdCQUFnQixFQUN2RDtZQUNBRixZQUFZLElBQUk7WUFDaEJHLFFBQVFDLEdBQUcsQ0FBQztRQUNkLE9BQU87WUFDTEosWUFBWSxLQUFLO1lBQ2pCRyxRQUFRQyxHQUFHLENBQUM7UUFDZCxDQUFDO1FBRUQsNkJBQTZCO1FBQzdCLE1BQU1DLHNCQUNKLDhEQUFDZix5REFBS0E7WUFDSmdCLE9BQU9OLFlBQVksWUFBWSxTQUFTO1lBQ3hDTyxXQUFXUCxZQUFZRixlQUFlQyxXQUFXOzs7Ozs7UUFJckQsT0FBT007SUFDVDtJQUVBLE1BQU1HLGVBQWUsQ0FDbkJkLG9CQUNBZSxtQkFDQWhCLGtCQUNHO1FBQ0hDLG1CQUFtQkQsa0JBQWtCO1FBQ3JDZ0Isa0JBQWtCLElBQUk7SUFDeEI7SUFFQSxPQUFPO1FBQUVkO1FBQWFhO1FBQWNmO1FBQWlCQztJQUFtQjtBQUMxRSxDQUFDO0dBN0N1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUG9wdXAuanM/MjVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9wdXAgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3B1cFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUG9wdXAoKSB7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgcmVuZGVyUG9wdXAgPSAoXG4gICAgc2VsZWN0ZWRBbnN3ZXIsXG4gICAgY3VycmVudFF1ZXN0aW9uRGF0YSxcbiAgICBnb29kRmVlZGJhY2ssXG4gICAgYmFkRmVlZGJhY2tcbiAgKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkQW5zd2VyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBpc0NvcnJlY3Q7XG4gICAgaWYgKFxuICAgICAgc2VsZWN0ZWRBbnN3ZXIgPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlciB8fFxuICAgICAgc2VsZWN0ZWRBbnN3ZXIgPT09IGN1cnJlbnRRdWVzdGlvbkRhdGEuY29ycmVjdEFuc3dlclR3b1xuICAgICkge1xuICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyXCIpO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciB0aGUgUG9wdXAgY29tcG9uZW50XG4gICAgY29uc3QgcG9wdXAgPSAoXG4gICAgICA8UG9wdXBcbiAgICAgICAgY29sb3I9e2lzQ29ycmVjdCA/IFwiIzI0Q0YxNlwiIDogXCIjQjkxQTFBXCJ9XG4gICAgICAgIHBhcmFncmFwaD17aXNDb3JyZWN0ID8gZ29vZEZlZWRiYWNrIDogYmFkRmVlZGJhY2t9XG4gICAgICAvPlxuICAgICk7XG5cbiAgICByZXR1cm4gcG9wdXA7XG4gIH07XG5cbiAgY29uc3QgbmV4dFF1ZXN0aW9uID0gKFxuICAgIHNldEN1cnJlbnRRdWVzdGlvbixcbiAgICBzZXRTZWxlY3RlZEFuc3dlcixcbiAgICBjdXJyZW50UXVlc3Rpb25cbiAgKSA9PiB7XG4gICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xuICAgIHNldFNlbGVjdGVkQW5zd2VyKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlclBvcHVwLCBuZXh0UXVlc3Rpb24sIGN1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uIH07XG59XG4iXSwibmFtZXMiOlsiUG9wdXAiLCJ1c2VTdGF0ZSIsInVzZVBvcHVwIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwicmVuZGVyUG9wdXAiLCJzZWxlY3RlZEFuc3dlciIsImN1cnJlbnRRdWVzdGlvbkRhdGEiLCJnb29kRmVlZGJhY2siLCJiYWRGZWVkYmFjayIsImlzQ29ycmVjdCIsImNvcnJlY3RBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyVHdvIiwiY29uc29sZSIsImxvZyIsInBvcHVwIiwiY29sb3IiLCJwYXJhZ3JhcGgiLCJuZXh0UXVlc3Rpb24iLCJzZXRTZWxlY3RlZEFuc3dlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/usePopup.js\n"));

/***/ })

});