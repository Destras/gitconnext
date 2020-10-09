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
    className: _public_components_UnProjecto_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.projecto__text__container,
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
    className: _public_components_UnProjecto_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.acitos,
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
    className: _public_components_UnProjecto_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.projecto__img__container,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VblByb2plY3RvLmpzeCJdLCJuYW1lcyI6WyJVblByb2plY3RvIiwicHJvcHMiLCJub21icmUiLCJmZWNoYSIsImRlc2NyaXBjaW9uIiwidGVjbm9sb2dpYXMiLCJwYXJ0aWNpcGFjaW9uIiwibGluayIsImxpbmsyIiwiZm90bzEiLCJmb3RvMiIsInN0eWxlcyIsInVuUHJvamVjdG9fX2NvbnRhaW5lciIsInByb2plY3RvX19pbmZvX19jb250YWluZXIiLCJwcm9qZWN0b19fdGV4dF9fY29udGFpbmVyIiwiYWNpdG9zIiwicHJvamVjdG9fX2ltZ19fY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNsQkMsTUFEa0IsR0FDbUVELEtBRG5FLENBQ2xCQyxNQURrQjtBQUFBLE1BQ1ZDLEtBRFUsR0FDbUVGLEtBRG5FLENBQ1ZFLEtBRFU7QUFBQSxNQUNIQyxXQURHLEdBQ21FSCxLQURuRSxDQUNIRyxXQURHO0FBQUEsTUFDVUMsV0FEVixHQUNtRUosS0FEbkUsQ0FDVUksV0FEVjtBQUFBLE1BQ3VCQyxhQUR2QixHQUNtRUwsS0FEbkUsQ0FDdUJLLGFBRHZCO0FBQUEsTUFDc0NDLElBRHRDLEdBQ21FTixLQURuRSxDQUNzQ00sSUFEdEM7QUFBQSxNQUMyQ0MsS0FEM0MsR0FDbUVQLEtBRG5FLENBQzJDTyxLQUQzQztBQUFBLE1BQ2tEQyxLQURsRCxHQUNtRVIsS0FEbkUsQ0FDa0RRLEtBRGxEO0FBQUEsTUFDeURDLEtBRHpELEdBQ21FVCxLQURuRSxDQUN5RFMsS0FEekQ7QUFFMUIsU0FDSTtBQUFTLGFBQVMsRUFBRUMsZ0ZBQU0sQ0FBQ0MscUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUQsZ0ZBQU0sQ0FBQ0UseUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUYsZ0ZBQU0sQ0FBQ0cseUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUF5QlosTUFBekIsTUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQXVCQyxLQUF2QixNQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBaUJDLFdBQVcsQ0FBQyxDQUFELENBQTVCLE9BQWtDO0FBQUcsYUFBUyxFQUFDLFFBQWI7QUFBc0IsUUFBSSxFQUFFSSxLQUE1QjtBQUFtQyxPQUFHLEVBQUMscUJBQXZDO0FBQTZELFVBQU0sRUFBQyxRQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThFSixXQUFXLENBQUMsQ0FBRCxDQUF6RixDQUFsQyxPQUF1SUEsV0FBVyxDQUFDLENBQUQsQ0FBbEosTUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQTJCQyxXQUEzQixNQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBbUI7QUFBRyxhQUFTLEVBQUVNLGdGQUFNLENBQUNJLE1BQXJCO0FBQTZCLFFBQUksRUFBRVIsSUFBbkM7QUFBeUMsT0FBRyxFQUFDLHFCQUE3QztBQUFtRSxVQUFNLEVBQUMsUUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFxRkEsSUFBckYsTUFBbkIsQ0FMSixDQURKLEVBU0k7QUFBSyxhQUFTLEVBQUVJLGdGQUFNLENBQUNLLHdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVQLEtBQVY7QUFBaUIsT0FBRyxFQUFDLDJCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLE9BQUcsRUFBRUMsS0FBVjtBQUFpQixPQUFHLEVBQUMsMkJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQVRKLENBREosQ0FESjtBQW1CSCxDQXJCRDs7S0FBTVYsVTtBQXVCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzE0ZGI3MmFmMzU5NzY2MDYzMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3B1YmxpYy9jb21wb25lbnRzL1VuUHJvamVjdG8ubW9kdWxlLnNjc3MnXG5cbmNvbnN0IFVuUHJvamVjdG8gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG5vbWJyZSwgZmVjaGEsIGRlc2NyaXBjaW9uLCB0ZWNub2xvZ2lhcywgcGFydGljaXBhY2lvbiwgbGluayxsaW5rMiwgZm90bzEsIGZvdG8yIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy51blByb2plY3RvX19jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0b19faW5mb19fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RvX190ZXh0X19jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmUgZGVsIHByb3llY3RvOiB7bm9tYnJlfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkZlY2hhIGRlIGNyZWFjaW9uOiB7ZmVjaGF9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RGVzY3JpcGNpw7NuOiB7ZGVzY3JpcGNpb25bMF19IHs8YSBjbGFzc05hbWU9J2FjaXRvcycgaHJlZj17bGluazJ9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj57ZGVzY3JpcGNpb25bMV19PC9hPn0geyBkZXNjcmlwY2lvblsyXX0uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5UZWNub2xvZ2lhcyBlbXBsZWFkYXM6IHt0ZWNub2xvZ2lhc30uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5MaW5rIGFsIHNpdGlvOiB7PGEgY2xhc3NOYW1lPXtzdHlsZXMuYWNpdG9zfSBocmVmPXtsaW5rfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IHtsaW5rfSA8L2E+fTwvcD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdG9fX2ltZ19fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZvdG8xfSBhbHQ9XCJwcmllbXJhIGZvdG8gZGUgbWkgcGFnaW5hXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZvdG8yfSBhbHQ9XCJzZWd1bmRhIGZvdG8gZGUgbWkgcGFnaW5hXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVuUHJvamVjdG87Il0sInNvdXJjZVJvb3QiOiIifQ==