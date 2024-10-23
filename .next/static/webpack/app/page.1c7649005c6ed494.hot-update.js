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

/***/ "(app-pages-browser)/./src/components/About.tsx":
/*!**********************************!*\
  !*** ./src/components/About.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_TfiNewWindow_react_icons_tfi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=TfiNewWindow!=!react-icons/tfi */ \"(app-pages-browser)/./node_modules/react-icons/tfi/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst About = ()=>{\n    const headlineData = {\n        eyebrow: \"About Sherwin Anos\",\n        headline: \"A Passion for Design and Development\",\n        subHeadline: \"With extensive experience in website design, front-end development and SEO, I am dedicated to delivering exceptional web solutions tailored to your needs. <br><br>In 2019, I was deployed in Facebook Singapore (Meta) as a Web CMS Developer creating blogs, case studies and campaign pages for Facebook/Instagram for Business. <br><br>I've played a pivotal role in revamping websites like Cirlces.Life, Ford, Changi Airport, INSEAD, Hilton APAC, Gatorade India, OCBC Bank, CDL Residential and Shang-ri La Hotels and Resorts.\"\n    };\n    const handleScroll = (e, href)=>{\n        // Prevent default anchor behavior\n        e.preventDefault();\n        // Check if it's a section scroll (starts with #)\n        if (href.startsWith(\"#\")) {\n            const targetId = href.slice(1); // Remove the `#`\n            const targetElement = document.getElementById(targetId);\n            if (targetElement) {\n                targetElement.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        } else {\n            // For normal route navigation, use next/router or just allow default navigation\n            window.location.href = href;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"about\",\n        className: \"section-container section-dark\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-4 lg:mx-auto lg:flex lg:flex-row-reverse lg:items-center mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-7/12 text-center lg:text-left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"uppercase tracking-widest\",\n                            children: headlineData.eyebrow\n                        }, void 0, false, {\n                            fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"mt-0 mb-4 lg:mt-2 lg:mb-6\",\n                            children: headlineData.headline\n                        }, void 0, false, {\n                            fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            dangerouslySetInnerHTML: {\n                                __html: headlineData.subHeadline\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/assets/resume.pdf\",\n                            className: \"btn btn-icon btn-primary mt-8\",\n                            target: \"_blank\",\n                            children: [\n                                \"Download resume \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TfiNewWindow_react_icons_tfi__WEBPACK_IMPORTED_MODULE_2__.TfiNewWindow, {}, void 0, false, {\n                                    fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 116\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#testimonials\",\n                            className: \"btn btn-primary-outline mt-8 ml-4\",\n                            onClick: (e)=>handleScroll(e, \"#testimonials\"),\n                            children: \"See clients feedback\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-5/12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"/sherwinanos-facebook.webp\",\n                        alt: \"Sherwin Anos at Facebook\",\n                        width: \"492\",\n                        height: \"530\",\n                        className: \"rounded-xl mt-12 lg:mt-0 w-[300px] lg:w-[492px] mx-auto lg:mx-0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sherwinanos/Sites/github/portfolio/src/components/About.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fib3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUU4QjtBQUNnQjtBQUU5QyxNQUFNRSxRQUFRO0lBQ1osTUFBTUMsZUFBZTtRQUNuQkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLGFBQWE7SUFDZjtJQUVBLE1BQU1DLGVBQWUsQ0FDbkJDLEdBQ0FDO1FBRUEsa0NBQWtDO1FBQ2xDRCxFQUFFRSxjQUFjO1FBRWhCLGlEQUFpRDtRQUNqRCxJQUFJRCxLQUFLRSxVQUFVLENBQUMsTUFBTTtZQUN4QixNQUFNQyxXQUFXSCxLQUFLSSxLQUFLLENBQUMsSUFBSSxpQkFBaUI7WUFDakQsTUFBTUMsZ0JBQWdCQyxTQUFTQyxjQUFjLENBQUNKO1lBRTlDLElBQUlFLGVBQWU7Z0JBQ2pCQSxjQUFjRyxjQUFjLENBQUM7b0JBQUVDLFVBQVU7Z0JBQVM7WUFDcEQ7UUFDRixPQUFPO1lBQ0wsZ0ZBQWdGO1lBQ2hGQyxPQUFPQyxRQUFRLENBQUNYLElBQUksR0FBR0E7UUFDekI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWTtRQUFJQyxJQUFHO1FBQVFDLFdBQVU7a0JBQ3hCLDRFQUFDRjtZQUFJRSxXQUFVOzs4QkFFYiw4REFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBRUQsV0FBVTtzQ0FBNkJwQixhQUFhQyxPQUFPOzs7Ozs7c0NBQzlELDhEQUFDcUI7NEJBQUdGLFdBQVU7c0NBQTZCcEIsYUFBYUUsUUFBUTs7Ozs7O3NDQUNoRSw4REFBQ21COzRCQUFFRSx5QkFBeUI7Z0NBQUVDLFFBQVF4QixhQUFhRyxXQUFXOzRCQUFDOzs7Ozs7c0NBRzdELDhEQUFDc0I7NEJBQUVuQixNQUFLOzRCQUFxQmMsV0FBVTs0QkFBZ0NNLFFBQU87O2dDQUFTOzhDQUFnQiw4REFBQzVCLDZGQUFZQTs7Ozs7Ozs7Ozs7c0NBQ3BILDhEQUFDMkI7NEJBQUVuQixNQUFLOzRCQUFnQmMsV0FBVTs0QkFBb0NPLFNBQVMsQ0FBQ3RCLElBQU1ELGFBQWFDLEdBQUc7c0NBQWtCOzs7Ozs7Ozs7Ozs7OEJBRTVILDhEQUFDYTtvQkFBSUUsV0FBVTs4QkFDYiw0RUFBQ3ZCLGtEQUFLQTt3QkFDSitCLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BYLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7S0FyRE1yQjtBQXVETiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BYm91dC50c3g/YmE0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgVGZpTmV3V2luZG93IH0gZnJvbSBcInJlYWN0LWljb25zL3RmaVwiXG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkbGluZURhdGEgPSB7XG4gICAgZXllYnJvdzogXCJBYm91dCBTaGVyd2luIEFub3NcIixcbiAgICBoZWFkbGluZTogXCJBIFBhc3Npb24gZm9yIERlc2lnbiBhbmQgRGV2ZWxvcG1lbnRcIixcbiAgICBzdWJIZWFkbGluZTogXCJXaXRoIGV4dGVuc2l2ZSBleHBlcmllbmNlIGluIHdlYnNpdGUgZGVzaWduLCBmcm9udC1lbmQgZGV2ZWxvcG1lbnQgYW5kIFNFTywgSSBhbSBkZWRpY2F0ZWQgdG8gZGVsaXZlcmluZyBleGNlcHRpb25hbCB3ZWIgc29sdXRpb25zIHRhaWxvcmVkIHRvIHlvdXIgbmVlZHMuIDxicj48YnI+SW4gMjAxOSwgSSB3YXMgZGVwbG95ZWQgaW4gRmFjZWJvb2sgU2luZ2Fwb3JlIChNZXRhKSBhcyBhIFdlYiBDTVMgRGV2ZWxvcGVyIGNyZWF0aW5nIGJsb2dzLCBjYXNlIHN0dWRpZXMgYW5kIGNhbXBhaWduIHBhZ2VzIGZvciBGYWNlYm9vay9JbnN0YWdyYW0gZm9yIEJ1c2luZXNzLiA8YnI+PGJyPkkndmUgcGxheWVkIGEgcGl2b3RhbCByb2xlIGluIHJldmFtcGluZyB3ZWJzaXRlcyBsaWtlIENpcmxjZXMuTGlmZSwgRm9yZCwgQ2hhbmdpIEFpcnBvcnQsIElOU0VBRCwgSGlsdG9uIEFQQUMsIEdhdG9yYWRlIEluZGlhLCBPQ0JDIEJhbmssIENETCBSZXNpZGVudGlhbCBhbmQgU2hhbmctcmkgTGEgSG90ZWxzIGFuZCBSZXNvcnRzLlwiLFxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBcbiAgICBocmVmOiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgLy8gUHJldmVudCBkZWZhdWx0IGFuY2hvciBiZWhhdmlvclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNlY3Rpb24gc2Nyb2xsIChzdGFydHMgd2l0aCAjKVxuICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgICBjb25zdCB0YXJnZXRJZCA9IGhyZWYuc2xpY2UoMSk7IC8vIFJlbW92ZSB0aGUgYCNgXG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgICAgXG4gICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciBub3JtYWwgcm91dGUgbmF2aWdhdGlvbiwgdXNlIG5leHQvcm91dGVyIG9yIGp1c3QgYWxsb3cgZGVmYXVsdCBuYXZpZ2F0aW9uXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXIgc2VjdGlvbi1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IGxnOm14LWF1dG8gbGc6ZmxleCBsZzpmbGV4LXJvdy1yZXZlcnNlIGxnOml0ZW1zLWNlbnRlciBteC1hdXRvXCI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNy8xMiB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+e2hlYWRsaW5lRGF0YS5leWVicm93fTwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMCBtYi00IGxnOm10LTIgbGc6bWItNlwiPntoZWFkbGluZURhdGEuaGVhZGxpbmV9PC9oMj5cbiAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGhlYWRsaW5lRGF0YS5zdWJIZWFkbGluZSB9fSAvPlxuICAgICAgICAgIFxuXG4gICAgICAgICAgICA8YSBocmVmPVwiL2Fzc2V0cy9yZXN1bWUucGRmXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pY29uIGJ0bi1wcmltYXJ5IG10LThcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Eb3dubG9hZCByZXN1bWUgPFRmaU5ld1dpbmRvdyAvPjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjdGVzdGltb25pYWxzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5LW91dGxpbmUgbXQtOCBtbC00XCIgb25DbGljaz17KGUpID0+IGhhbmRsZVNjcm9sbChlLCAnI3Rlc3RpbW9uaWFscycpfT5TZWUgY2xpZW50cyBmZWVkYmFjazwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzEyXCI+XG4gICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgc3JjPVwiL3NoZXJ3aW5hbm9zLWZhY2Vib29rLndlYnBcIiBcbiAgICAgICAgICAgIGFsdD1cIlNoZXJ3aW4gQW5vcyBhdCBGYWNlYm9va1wiIFxuICAgICAgICAgICAgd2lkdGg9XCI0OTJcIiBcbiAgICAgICAgICAgIGhlaWdodD1cIjUzMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG10LTEyIGxnOm10LTAgdy1bMzAwcHhdIGxnOnctWzQ5MnB4XSBteC1hdXRvIGxnOm14LTBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcblxuIl0sIm5hbWVzIjpbIkltYWdlIiwiVGZpTmV3V2luZG93IiwiQWJvdXQiLCJoZWFkbGluZURhdGEiLCJleWVicm93IiwiaGVhZGxpbmUiLCJzdWJIZWFkbGluZSIsImhhbmRsZVNjcm9sbCIsImUiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJzdGFydHNXaXRoIiwidGFyZ2V0SWQiLCJzbGljZSIsInRhcmdldEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJwIiwiaDIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImEiLCJ0YXJnZXQiLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/About.tsx\n"));

/***/ })

});