"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Hero.tsx":
/*!*********************************!*\
  !*** ./src/components/Hero.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst Hero = ()=>{\n    const componentData = {\n        eyebrow: \"Hello, I'm Sherwin Anos\",\n        headline: \"Creative Filipino Web Designer Creating Custom Professional Websites\",\n        subHeadline: \"I am a talented web designer and front-end developer that creates visually appealing, responsive websites designed to boost user interaction with exceptional results. Working together to create a website that suits your brand and objectives.\"\n    };\n    const handleScroll = (e, href)=>{\n        // Prevent default anchor behavior\n        e.preventDefault();\n        // Check if it's a section scroll (starts with #)\n        if (href.startsWith(\"#\")) {\n            const targetId = href.slice(1); // Remove the `#`\n            const targetElement = document.getElementById(targetId);\n            if (targetElement) {\n                targetElement.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        } else {\n            // For normal route navigation, use next/router or just allow default navigation\n            window.location.href = href;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"hero\",\n        className: \"container mx-auto lg:flex flex-row items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-1/2 text-center lg:text-left py-10 lg:py-20 px-4 lg:px-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase tracking-widest mb-2 opacity-80\",\n                        children: componentData.eyebrow\n                    }, void 0, false, {\n                        fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: componentData.headline\n                    }, void 0, false, {\n                        fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pt-6 pb-8 lg:pb-12 text-xl\",\n                        children: componentData.subHeadline\n                    }, void 0, false, {\n                        fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col lg:flex-row gap-4 justify-center lg:justify-normal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#contact\",\n                                className: \"btn btn-primary\",\n                                onClick: (e)=>handleScroll(e, \"#contact\"),\n                                children: \"Schedule a consultation today\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#projects\",\n                                className: \"btn btn-primary-outline\",\n                                onClick: (e)=>handleScroll(e, \"#projects\"),\n                                children: \"See my recent projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-1/2 flex justify-center lg:self-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"w-[280px] lg:w-[492px] lg:items-end\",\n                    src: \"/assets/hero-sherwinanos.png\",\n                    alt: \"avatar\",\n                    width: \"492\",\n                    height: \"521\"\n                }, void 0, false, {\n                    fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/Hero.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFFOEI7QUFHOUIsTUFBTUMsT0FBTztJQUNYLE1BQU1DLGdCQUFnQjtRQUNwQkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLGFBQWE7SUFDZjtJQUVBLE1BQU1DLGVBQWUsQ0FDbkJDLEdBQ0FDO1FBRUEsa0NBQWtDO1FBQ2xDRCxFQUFFRSxjQUFjO1FBRWhCLGlEQUFpRDtRQUNqRCxJQUFJRCxLQUFLRSxVQUFVLENBQUMsTUFBTTtZQUN4QixNQUFNQyxXQUFXSCxLQUFLSSxLQUFLLENBQUMsSUFBSSxpQkFBaUI7WUFDakQsTUFBTUMsZ0JBQWdCQyxTQUFTQyxjQUFjLENBQUNKO1lBRTlDLElBQUlFLGVBQWU7Z0JBQ2pCQSxjQUFjRyxjQUFjLENBQUM7b0JBQUVDLFVBQVU7Z0JBQVM7WUFDcEQ7UUFDRixPQUFPO1lBQ0wsZ0ZBQWdGO1lBQ2hGQyxPQUFPQyxRQUFRLENBQUNYLElBQUksR0FBR0E7UUFDekI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWTtRQUFJQyxJQUFHO1FBQU9DLFdBQVU7OzBCQUN2Qiw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBNkNwQixjQUFjQyxPQUFPOzs7Ozs7a0NBQy9FLDhEQUFDcUI7a0NBQUl0QixjQUFjRSxRQUFROzs7Ozs7a0NBQzNCLDhEQUFDbUI7d0JBQUVELFdBQVU7a0NBQThCcEIsY0FBY0csV0FBVzs7Ozs7O2tDQUVwRSw4REFBQ2U7d0JBQUlFLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBRWpCLE1BQUs7Z0NBQVdjLFdBQVU7Z0NBQWtCSSxTQUFTLENBQUNuQixJQUFNRCxhQUFhQyxHQUFHOzBDQUFhOzs7Ozs7MENBQzVGLDhEQUFDa0I7Z0NBQUVqQixNQUFLO2dDQUFZYyxXQUFVO2dDQUEwQkksU0FBUyxDQUFDbkIsSUFBTUQsYUFBYUMsR0FBRzswQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkxRyw4REFBQ2E7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUN0QixrREFBS0E7b0JBQ0pzQixXQUFVO29CQUNWSyxLQUFJO29CQUNKQyxLQUFJO29CQUNKQyxPQUFNO29CQUNOQyxRQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQjtLQXBETTdCO0FBc0ROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlcm8udHN4PzY2OTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IExpbmssIHNjcm9sbGVyIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5jb25zdCBIZXJvID0gKCkgPT4ge1xuICBjb25zdCBjb21wb25lbnREYXRhID0ge1xuICAgIGV5ZWJyb3c6IFwiSGVsbG8sIEknbSBTaGVyd2luIEFub3NcIixcbiAgICBoZWFkbGluZTogXCJDcmVhdGl2ZSBGaWxpcGlubyBXZWIgRGVzaWduZXIgQ3JlYXRpbmcgQ3VzdG9tIFByb2Zlc3Npb25hbCBXZWJzaXRlc1wiLFxuICAgIHN1YkhlYWRsaW5lOiBcIkkgYW0gYSB0YWxlbnRlZCB3ZWIgZGVzaWduZXIgYW5kIGZyb250LWVuZCBkZXZlbG9wZXIgdGhhdCBjcmVhdGVzIHZpc3VhbGx5IGFwcGVhbGluZywgcmVzcG9uc2l2ZSB3ZWJzaXRlcyBkZXNpZ25lZCB0byBib29zdCB1c2VyIGludGVyYWN0aW9uIHdpdGggZXhjZXB0aW9uYWwgcmVzdWx0cy4gV29ya2luZyB0b2dldGhlciB0byBjcmVhdGUgYSB3ZWJzaXRlIHRoYXQgc3VpdHMgeW91ciBicmFuZCBhbmQgb2JqZWN0aXZlcy5cIlxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBcbiAgICBocmVmOiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgLy8gUHJldmVudCBkZWZhdWx0IGFuY2hvciBiZWhhdmlvclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNlY3Rpb24gc2Nyb2xsIChzdGFydHMgd2l0aCAjKVxuICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgICBjb25zdCB0YXJnZXRJZCA9IGhyZWYuc2xpY2UoMSk7IC8vIFJlbW92ZSB0aGUgYCNgXG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgICAgXG4gICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciBub3JtYWwgcm91dGUgbmF2aWdhdGlvbiwgdXNlIG5leHQvcm91dGVyIG9yIGp1c3QgYWxsb3cgZGVmYXVsdCBuYXZpZ2F0aW9uXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImhlcm9cIiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBsZzpmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzIgdGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0IHB5LTEwIGxnOnB5LTIwIHB4LTQgbGc6cHgtMFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG1iLTIgb3BhY2l0eS04MFwiPntjb21wb25lbnREYXRhLmV5ZWJyb3d9PC9wPlxuICAgICAgICA8aDE+e2NvbXBvbmVudERhdGEuaGVhZGxpbmV9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtNiBwYi04IGxnOnBiLTEyIHRleHQteGxcIj57Y29tcG9uZW50RGF0YS5zdWJIZWFkbGluZX08L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00IGp1c3RpZnktY2VudGVyIGxnOmp1c3RpZnktbm9ybWFsXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KGUpID0+IGhhbmRsZVNjcm9sbChlLCAnI2NvbnRhY3QnKX0+U2NoZWR1bGUgYSBjb25zdWx0YXRpb24gdG9kYXk8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNwcm9qZWN0c1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeS1vdXRsaW5lXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVNjcm9sbChlLCAnI3Byb2plY3RzJyl9PlNlZSBteSByZWNlbnQgcHJvamVjdHM8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzIgZmxleCBqdXN0aWZ5LWNlbnRlciBsZzpzZWxmLWVuZFwiPlxuICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bMjgwcHhdIGxnOnctWzQ5MnB4XSBsZzppdGVtcy1lbmRcIlxuICAgICAgICAgIHNyYz1cIi9hc3NldHMvaGVyby1zaGVyd2luYW5vcy5wbmdcIiBcbiAgICAgICAgICBhbHQ9XCJhdmF0YXJcIiBcbiAgICAgICAgICB3aWR0aD1cIjQ5MlwiIFxuICAgICAgICAgIGhlaWdodD1cIjUyMVwiIFxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybyJdLCJuYW1lcyI6WyJJbWFnZSIsIkhlcm8iLCJjb21wb25lbnREYXRhIiwiZXllYnJvdyIsImhlYWRsaW5lIiwic3ViSGVhZGxpbmUiLCJoYW5kbGVTY3JvbGwiLCJlIiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwic3RhcnRzV2l0aCIsInRhcmdldElkIiwic2xpY2UiLCJ0YXJnZXRFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwicCIsImgxIiwiYSIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Hero.tsx\n"));

/***/ })

});