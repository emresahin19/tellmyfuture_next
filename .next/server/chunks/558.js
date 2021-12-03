"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _esri_react_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(453);
/* harmony import */ var _esri_react_arcgis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_esri_react_arcgis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class MyAwesomeMap extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "clickHandler", event => {
      const lat = event.mapPoint.latitude;
      const lon = event.mapPoint.longitude;
      this.setState({
        longitude: event.mapPoint.longitude,
        latitude: event.mapPoint.latitude,
        map: false
      });
      this.props.handlelocate(this.state);
    });

    _defineProperty(this, "handleMap", async e => {
      var theLon = 0;
      var theLat = 0;

      if (!this.state.map) {
        await navigator.geolocation.getCurrentPosition(position => {
          theLon = position.coords.longitude;
          theLat = position.coords.latitude;
          this.setState({
            mapReady: true,
            longitude: theLon,
            latitude: theLat
          });
        });
      }

      await this.setState({
        map: !this.state.map
      });
      this.props.handlelocate(this.state);
    });

    this.state = {
      calendar: this.props.calendar,
      map: this.props.map,
      longitude: 0,
      latitude: 0,
      mapReady: false
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (this.props.calendar || this.state.map ? 'show' : 'unshow') + (this.state.map ? ' map-button-active' : ' map-button'),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
          href: "#",
          onClick: this.handleMap.bind(this),
          children: "Map"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: this.state.map ? 'show ' : 'unshow ',
        style: {
          width: '100%',
          height: '100%'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          style: {
            width: '100%',
            height: '100%'
          },
          children: this.state.mapReady ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_esri_react_arcgis__WEBPACK_IMPORTED_MODULE_1__.Map, {
            viewProperties: {
              center: [this.state.longitude, this.state.latitude],
              zoom: 10
            },
            onClick: e => this.clickHandler(e),
            mapProperties: {
              basemap: 'satellite'
            }
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {})
        })
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAwesomeMap);

/***/ })

};
;