"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./modules/property-details/index.js":
/*!*******************************************!*\
  !*** ./modules/property-details/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button */ \"./components/button.js\");\n/* harmony import */ var _components_row_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/row-container */ \"./components/row-container.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./modules/property-details/style.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable max-statements */ \n\n\n\n\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar account = {\n    uid: \"65156cdc-5cfd-4b34-b626-49c83569f35e\",\n    deleted: false,\n    dateCreated: \"2020-12-03T08:55:33.421Z\",\n    currency: \"GBP\",\n    name: \"15 Temple Way\",\n    bankName: \"Residential\",\n    type: \"properties\",\n    subType: \"residential\",\n    originalPurchasePrice: 250000,\n    originalPurchasePriceDate: \"2017-09-03\",\n    recentValuation: {\n        amount: 310000,\n        status: \"good\"\n    },\n    associatedMortgages: [\n        {\n            name: \"HSBC Repayment Mortgage\",\n            uid: \"fb463121-b51a-490d-9f19-d2ea76f05e25\",\n            currentBalance: -175000\n        }, \n    ],\n    canBeManaged: false,\n    postcode: \"BS1 2AA\",\n    lastUpdate: \"2020-12-01T08:55:33.421Z\",\n    updateAfterDays: 30\n};\nvar Detail = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    var mortgage;\n    var lastUpdate = new Date(account.lastUpdate);\n    if (account.associatedMortgages.length) {\n        mortgage = account.associatedMortgages[0];\n    }\n    var sections = [\n        {\n            label: \"Estimated Value\",\n            hidden: false,\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountHeadline, {\n                        children: new Intl.NumberFormat(\"en-GB\", {\n                            style: \"currency\",\n                            currency: \"GBP\"\n                        }).format(account.recentValuation.amount)\n                    }, void 0, false, {\n                        fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountList, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                    children: \"Last updated \".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(lastUpdate, \"do MMM yyyy\"))\n                                }, void 0, false, {\n                                    fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                    children: \"Next update \".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.add)(lastUpdate, {\n                                        days: account.updateAfterDays\n                                    }), \"do MMM yyyy\"))\n                                }, void 0, false, {\n                                    fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true)\n        },\n        {\n            label: \"Property details\",\n            hidden: false,\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_row_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountList, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                children: account.name\n                            }, void 0, false, {\n                                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                children: account.bankName\n                            }, void 0, false, {\n                                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                children: account.postcode\n                            }, void 0, false, {\n                                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, _this)\n        },\n        {\n            label: \"Mortgage\",\n            hidden: mortgage,\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_row_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                // This is a dummy action\n                onClick: function() {\n                    return alert(\"You have navigated to the mortgage page\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountList, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                children: new Intl.NumberFormat(\"en-GB\", {\n                                    style: \"currency\",\n                                    currency: \"GBP\"\n                                }).format(Math.abs(account.associatedMortgages[0].currentBalance))\n                            }, void 0, false, {\n                                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountListItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.InfoText, {\n                                children: account.associatedMortgages[0].name\n                            }, void 0, false, {\n                                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                                lineNumber: 117,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                    lineNumber: 105,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, _this)\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Inset, {\n        children: [\n            sections.map(function(section) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountSection, {\n                    hidden: section.hidden,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.AccountLabel, {\n                            children: section.label\n                        }, void 0, false, {\n                            fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, _this1),\n                        section.content\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                    lineNumber: 129,\n                    columnNumber: 11\n                }, _this1));\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                // This is a dummy action\n                onClick: function() {\n                    return alert(\"You have navigated to the edit account page\");\n                },\n                children: \"Edit account\"\n            }, void 0, false, {\n                fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emanuelmorningstar/Desktop/moneyhub/mhtest/modules/property-details/index.js\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, _this));\n};\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3BlcnR5LWRldGFpbHMvaW5kZXguanM/ODFhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xuaW1wb3J0IHsgYWRkLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IFJvd0NvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yb3ctY29udGFpbmVyXCI7XG5pbXBvcnQge1xuICBBY2NvdW50SGVhZGxpbmUsXG4gIEFjY291bnRMYWJlbCxcbiAgQWNjb3VudExpc3QsXG4gIEFjY291bnRMaXN0SXRlbSxcbiAgQWNjb3VudFNlY3Rpb24sXG4gIEluZm9UZXh0LFxuICBJbnNldCxcbn0gZnJvbSBcIi4vc3R5bGVcIjtcblxuY29uc3QgYWNjb3VudCA9IHtcbiAgdWlkOiBcIjY1MTU2Y2RjLTVjZmQtNGIzNC1iNjI2LTQ5YzgzNTY5ZjM1ZVwiLFxuICBkZWxldGVkOiBmYWxzZSxcbiAgZGF0ZUNyZWF0ZWQ6IFwiMjAyMC0xMi0wM1QwODo1NTozMy40MjFaXCIsXG4gIGN1cnJlbmN5OiBcIkdCUFwiLFxuICBuYW1lOiBcIjE1IFRlbXBsZSBXYXlcIixcbiAgYmFua05hbWU6IFwiUmVzaWRlbnRpYWxcIixcbiAgdHlwZTogXCJwcm9wZXJ0aWVzXCIsXG4gIHN1YlR5cGU6IFwicmVzaWRlbnRpYWxcIixcbiAgb3JpZ2luYWxQdXJjaGFzZVByaWNlOiAyNTAwMDAsXG4gIG9yaWdpbmFsUHVyY2hhc2VQcmljZURhdGU6IFwiMjAxNy0wOS0wM1wiLFxuICByZWNlbnRWYWx1YXRpb246IHsgYW1vdW50OiAzMTAwMDAsIHN0YXR1czogXCJnb29kXCIgfSxcbiAgYXNzb2NpYXRlZE1vcnRnYWdlczogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiSFNCQyBSZXBheW1lbnQgTW9ydGdhZ2VcIixcbiAgICAgIHVpZDogXCJmYjQ2MzEyMS1iNTFhLTQ5MGQtOWYxOS1kMmVhNzZmMDVlMjVcIixcbiAgICAgIGN1cnJlbnRCYWxhbmNlOiAtMTc1MDAwLFxuICAgIH0sXG4gIF0sXG4gIGNhbkJlTWFuYWdlZDogZmFsc2UsXG4gIHBvc3Rjb2RlOiBcIkJTMSAyQUFcIixcbiAgbGFzdFVwZGF0ZTogXCIyMDIwLTEyLTAxVDA4OjU1OjMzLjQyMVpcIixcbiAgdXBkYXRlQWZ0ZXJEYXlzOiAzMCxcbn07XG5cbmNvbnN0IERldGFpbCA9ICh7fSkgPT4ge1xuICBsZXQgbW9ydGdhZ2U7XG4gIGNvbnN0IGxhc3RVcGRhdGUgPSBuZXcgRGF0ZShhY2NvdW50Lmxhc3RVcGRhdGUpO1xuICBpZiAoYWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzLmxlbmd0aCkge1xuICAgIG1vcnRnYWdlID0gYWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzWzBdO1xuICB9XG5cbiAgY29uc3Qgc2VjdGlvbnMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiRXN0aW1hdGVkIFZhbHVlXCIsXG4gICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgY29udGVudDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxBY2NvdW50SGVhZGxpbmU+XG4gICAgICAgICAgICB7bmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tR0JcIiwge1xuICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgICBjdXJyZW5jeTogXCJHQlBcIixcbiAgICAgICAgICAgIH0pLmZvcm1hdChhY2NvdW50LnJlY2VudFZhbHVhdGlvbi5hbW91bnQpfVxuICAgICAgICAgIDwvQWNjb3VudEhlYWRsaW5lPlxuICAgICAgICAgIDxBY2NvdW50TGlzdD5cbiAgICAgICAgICAgIDxBY2NvdW50TGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxJbmZvVGV4dD5cbiAgICAgICAgICAgICAgICB7YExhc3QgdXBkYXRlZCAke2Zvcm1hdChsYXN0VXBkYXRlLCBcImRvIE1NTSB5eXl5XCIpfWB9XG4gICAgICAgICAgICAgIDwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8L0FjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICAgIDxBY2NvdW50TGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxJbmZvVGV4dD5cbiAgICAgICAgICAgICAgICB7YE5leHQgdXBkYXRlICR7Zm9ybWF0KFxuICAgICAgICAgICAgICAgICAgYWRkKGxhc3RVcGRhdGUsIHsgZGF5czogYWNjb3VudC51cGRhdGVBZnRlckRheXMgfSksXG4gICAgICAgICAgICAgICAgICBcImRvIE1NTSB5eXl5XCJcbiAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgIDwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8L0FjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICA8L0FjY291bnRMaXN0PlxuICAgICAgICA8Lz5cbiAgICAgICksXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJQcm9wZXJ0eSBkZXRhaWxzXCIsXG4gICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgY29udGVudDogKFxuICAgICAgICA8Um93Q29udGFpbmVyPlxuICAgICAgICAgIDxBY2NvdW50TGlzdD5cbiAgICAgICAgICAgIDxBY2NvdW50TGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxJbmZvVGV4dD57YWNjb3VudC5uYW1lfTwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8L0FjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICAgIDxBY2NvdW50TGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxJbmZvVGV4dD57YWNjb3VudC5iYW5rTmFtZX08L0luZm9UZXh0PlxuICAgICAgICAgICAgPC9BY2NvdW50TGlzdEl0ZW0+XG4gICAgICAgICAgICA8QWNjb3VudExpc3RJdGVtPlxuICAgICAgICAgICAgICA8SW5mb1RleHQ+e2FjY291bnQucG9zdGNvZGV9PC9JbmZvVGV4dD5cbiAgICAgICAgICAgIDwvQWNjb3VudExpc3RJdGVtPlxuICAgICAgICAgIDwvQWNjb3VudExpc3Q+XG4gICAgICAgIDwvUm93Q29udGFpbmVyPlxuICAgICAgKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk1vcnRnYWdlXCIsXG4gICAgICBoaWRkZW46IG1vcnRnYWdlLFxuICAgICAgY29udGVudDogKFxuICAgICAgICA8Um93Q29udGFpbmVyXG4gICAgICAgICAgLy8gVGhpcyBpcyBhIGR1bW15IGFjdGlvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwiWW91IGhhdmUgbmF2aWdhdGVkIHRvIHRoZSBtb3J0Z2FnZSBwYWdlXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPEFjY291bnRMaXN0PlxuICAgICAgICAgICAgPEFjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICAgICAgPEluZm9UZXh0PlxuICAgICAgICAgICAgICAgIHtuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1HQlwiLCB7XG4gICAgICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiR0JQXCIsXG4gICAgICAgICAgICAgICAgfSkuZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoYWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzWzBdLmN1cnJlbnRCYWxhbmNlKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8L0FjY291bnRMaXN0SXRlbT5cbiAgICAgICAgICAgIDxBY2NvdW50TGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxJbmZvVGV4dD57YWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzWzBdLm5hbWV9PC9JbmZvVGV4dD5cbiAgICAgICAgICAgIDwvQWNjb3VudExpc3RJdGVtPlxuICAgICAgICAgIDwvQWNjb3VudExpc3Q+XG4gICAgICAgIDwvUm93Q29udGFpbmVyPlxuICAgICAgKSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPEluc2V0PlxuICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBY2NvdW50U2VjdGlvbiBoaWRkZW49e3NlY3Rpb24uaGlkZGVufT5cbiAgICAgICAgICAgIDxBY2NvdW50TGFiZWw+e3NlY3Rpb24ubGFiZWx9PC9BY2NvdW50TGFiZWw+XG4gICAgICAgICAgICB7c2VjdGlvbi5jb250ZW50fVxuICAgICAgICAgIDwvQWNjb3VudFNlY3Rpb24+XG4gICAgICAgICk7XG4gICAgICB9KX1cblxuICAgICAgPEJ1dHRvblxuICAgICAgICAvLyBUaGlzIGlzIGEgZHVtbXkgYWN0aW9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwiWW91IGhhdmUgbmF2aWdhdGVkIHRvIHRoZSBlZGl0IGFjY291bnQgcGFnZVwiKX1cbiAgICAgID5cbiAgICAgICAgRWRpdCBhY2NvdW50XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0luc2V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xuIl0sIm5hbWVzIjpbImFkZCIsImZvcm1hdCIsIlJlYWN0IiwiQnV0dG9uIiwiUm93Q29udGFpbmVyIiwiQWNjb3VudEhlYWRsaW5lIiwiQWNjb3VudExhYmVsIiwiQWNjb3VudExpc3QiLCJBY2NvdW50TGlzdEl0ZW0iLCJBY2NvdW50U2VjdGlvbiIsIkluZm9UZXh0IiwiSW5zZXQiLCJhY2NvdW50IiwidWlkIiwiZGVsZXRlZCIsImRhdGVDcmVhdGVkIiwiY3VycmVuY3kiLCJuYW1lIiwiYmFua05hbWUiLCJ0eXBlIiwic3ViVHlwZSIsIm9yaWdpbmFsUHVyY2hhc2VQcmljZSIsIm9yaWdpbmFsUHVyY2hhc2VQcmljZURhdGUiLCJyZWNlbnRWYWx1YXRpb24iLCJhbW91bnQiLCJzdGF0dXMiLCJhc3NvY2lhdGVkTW9ydGdhZ2VzIiwiY3VycmVudEJhbGFuY2UiLCJjYW5CZU1hbmFnZWQiLCJwb3N0Y29kZSIsImxhc3RVcGRhdGUiLCJ1cGRhdGVBZnRlckRheXMiLCJEZXRhaWwiLCJtb3J0Z2FnZSIsIkRhdGUiLCJsZW5ndGgiLCJzZWN0aW9ucyIsImxhYmVsIiwiaGlkZGVuIiwiY29udGVudCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImRheXMiLCJvbkNsaWNrIiwiYWxlcnQiLCJNYXRoIiwiYWJzIiwibWFwIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/property-details/index.js\n");

/***/ })

});