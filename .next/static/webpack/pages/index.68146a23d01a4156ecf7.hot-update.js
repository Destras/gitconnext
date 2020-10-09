webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UnProjecto.jsx":
/*!***********************************!*\
  !*** ./components/UnProjecto.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_components_UnProjecto_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/components/UnProjecto.module.scss */ "./public/components/UnProjecto.module.scss");
/* harmony import */ var _public_components_UnProjecto_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_components_UnProjecto_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/Juan/Documents/projectos/los buneos proyectos/netxporta/components/UnProjecto.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var UnProjecto = function UnProjecto(props) {
  var nombre = props.nombre,
      fecha = props.fecha,
      descripcion = props.descripcion,
      tecnologias = props.tecnologias,
      participacion = props.participacion,
      link = props.link,
      link2 = props.link2,
      foto1 = props.foto1,
      foto2 = props.foto2;
  return __jsx("article", {
    className: _public_components_UnProjecto_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.unProjecto__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _public_components_UnProjecto_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.projecto__info__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "projecto__text__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "Nombre del proyecto: ", nombre, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "Fecha de creacion: ", fecha, " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Descripci\xF3n: ", descripcion[0], " ", __jsx("a", {
    className: "acitos",
    href: link2,
    rel: "noopener noreferrer",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 55
    }
  }, descripcion[1]), " ", descripcion[2], "."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Tecnologias empleadas: ", tecnologias, "."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Link al sitio: ", __jsx("a", {
    className: "acitos",
    href: link,
    rel: "noopener noreferrer",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 40
    }
  }, " ", link, " "))), __jsx("div", {
    className: "projecto__img__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: foto1,
    alt: "priemra foto de mi pagina",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: foto2,
    alt: "segunda foto de mi pagina",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }))));
};

_c = UnProjecto;
/* harmony default export */ __webpack_exports__["default"] = (UnProjecto);

var _c;

$RefreshReg$(_c, "UnProjecto");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VblByb2plY3RvLmpzeCJdLCJuYW1lcyI6WyJVblByb2plY3RvIiwicHJvcHMiLCJub21icmUiLCJmZWNoYSIsImRlc2NyaXBjaW9uIiwidGVjbm9sb2dpYXMiLCJwYXJ0aWNpcGFjaW9uIiwibGluayIsImxpbmsyIiwiZm90bzEiLCJmb3RvMiIsInN0eWxlcyIsInVuUHJvamVjdG9fX2NvbnRhaW5lciIsInByb2plY3RvX19pbmZvX19jb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2xCQyxNQURrQixHQUNtRUQsS0FEbkUsQ0FDbEJDLE1BRGtCO0FBQUEsTUFDVkMsS0FEVSxHQUNtRUYsS0FEbkUsQ0FDVkUsS0FEVTtBQUFBLE1BQ0hDLFdBREcsR0FDbUVILEtBRG5FLENBQ0hHLFdBREc7QUFBQSxNQUNVQyxXQURWLEdBQ21FSixLQURuRSxDQUNVSSxXQURWO0FBQUEsTUFDdUJDLGFBRHZCLEdBQ21FTCxLQURuRSxDQUN1QkssYUFEdkI7QUFBQSxNQUNzQ0MsSUFEdEMsR0FDbUVOLEtBRG5FLENBQ3NDTSxJQUR0QztBQUFBLE1BQzJDQyxLQUQzQyxHQUNtRVAsS0FEbkUsQ0FDMkNPLEtBRDNDO0FBQUEsTUFDa0RDLEtBRGxELEdBQ21FUixLQURuRSxDQUNrRFEsS0FEbEQ7QUFBQSxNQUN5REMsS0FEekQsR0FDbUVULEtBRG5FLENBQ3lEUyxLQUR6RDtBQUUxQixTQUNJO0FBQVMsYUFBUyxFQUFFQyxnRkFBTSxDQUFDQyxxQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCxnRkFBTSxDQUFDRSx5QkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUF5QlgsTUFBekIsTUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQXVCQyxLQUF2QixNQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBaUJDLFdBQVcsQ0FBQyxDQUFELENBQTVCLE9BQWtDO0FBQUcsYUFBUyxFQUFDLFFBQWI7QUFBc0IsUUFBSSxFQUFFSSxLQUE1QjtBQUFtQyxPQUFHLEVBQUMscUJBQXZDO0FBQTZELFVBQU0sRUFBQyxRQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThFSixXQUFXLENBQUMsQ0FBRCxDQUF6RixDQUFsQyxPQUF1SUEsV0FBVyxDQUFDLENBQUQsQ0FBbEosTUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQTJCQyxXQUEzQixNQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBbUI7QUFBRyxhQUFTLEVBQUMsUUFBYjtBQUFzQixRQUFJLEVBQUVFLElBQTVCO0FBQWtDLE9BQUcsRUFBQyxxQkFBdEM7QUFBNEQsVUFBTSxFQUFDLFFBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBOEVBLElBQTlFLE1BQW5CLENBTEosQ0FESixFQVNJO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUUsS0FBVjtBQUFpQixPQUFHLEVBQUMsMkJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssT0FBRyxFQUFFQyxLQUFWO0FBQWlCLE9BQUcsRUFBQywyQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBVEosQ0FESixDQURKO0FBbUJILENBckJEOztLQUFNVixVO0FBdUJTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ODE0NmEyM2QwMWE0MTU2ZWNmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvVW5Qcm9qZWN0by5tb2R1bGUuc2NzcydcblxuY29uc3QgVW5Qcm9qZWN0byA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbm9tYnJlLCBmZWNoYSwgZGVzY3JpcGNpb24sIHRlY25vbG9naWFzLCBwYXJ0aWNpcGFjaW9uLCBsaW5rLGxpbmsyLCBmb3RvMSwgZm90bzIgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnVuUHJvamVjdG9fX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RvX19pbmZvX19jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0b19fdGV4dF9fY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+Tm9tYnJlIGRlbCBwcm95ZWN0bzoge25vbWJyZX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5GZWNoYSBkZSBjcmVhY2lvbjoge2ZlY2hhfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRlc2NyaXBjacOzbjoge2Rlc2NyaXBjaW9uWzBdfSB7PGEgY2xhc3NOYW1lPSdhY2l0b3MnIGhyZWY9e2xpbmsyfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e2Rlc2NyaXBjaW9uWzFdfTwvYT59IHsgZGVzY3JpcGNpb25bMl19LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+VGVjbm9sb2dpYXMgZW1wbGVhZGFzOiB7dGVjbm9sb2dpYXN9LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+TGluayBhbCBzaXRpbzogezxhIGNsYXNzTmFtZT0nYWNpdG9zJyBocmVmPXtsaW5rfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IHtsaW5rfSA8L2E+fTwvcD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0b19faW1nX19jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Zm90bzF9IGFsdD1cInByaWVtcmEgZm90byBkZSBtaSBwYWdpbmFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Zm90bzJ9IGFsdD1cInNlZ3VuZGEgZm90byBkZSBtaSBwYWdpbmFcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5Qcm9qZWN0bzsiXSwic291cmNlUm9vdCI6IiJ9