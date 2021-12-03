"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
;// CONCATENATED MODULE: external "@material-ui/styles"
const styles_namespaceObject = require("@material-ui/styles");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/_document.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class MyDocument extends next_document.default {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "theme-color",
          content: "#000000"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
          rel: "stylesheet"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap",
          rel: "stylesheet"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          id: "page-transition"
        }), /*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

MyDocument.getInitialProps = async ctx => {
  const sheets = new styles_namespaceObject.ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect( /*#__PURE__*/jsx_runtime_.jsx(App, _objectSpread({}, props)))
  });

  const initialProps = await next_document.default.getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [initialProps.styles, sheets.getStyleElement()]
    }, "styles")]
  });
};

/* harmony default export */ const _document = (MyDocument);

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 538:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 208:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 44:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 98:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 168:
/***/ ((module) => {

module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(534)));
module.exports = __webpack_exports__;

})();