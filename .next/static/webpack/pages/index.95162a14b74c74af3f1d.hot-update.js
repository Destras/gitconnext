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
    className: "projecto__info__container",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VblByb2plY3RvLmpzeCJdLCJuYW1lcyI6WyJVblByb2plY3RvIiwicHJvcHMiLCJub21icmUiLCJmZWNoYSIsImRlc2NyaXBjaW9uIiwidGVjbm9sb2dpYXMiLCJwYXJ0aWNpcGFjaW9uIiwibGluayIsImxpbmsyIiwiZm90bzEiLCJmb3RvMiIsInN0eWxlcyIsInVuUHJvamVjdG9fX2NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbEJDLE1BRGtCLEdBQ21FRCxLQURuRSxDQUNsQkMsTUFEa0I7QUFBQSxNQUNWQyxLQURVLEdBQ21FRixLQURuRSxDQUNWRSxLQURVO0FBQUEsTUFDSEMsV0FERyxHQUNtRUgsS0FEbkUsQ0FDSEcsV0FERztBQUFBLE1BQ1VDLFdBRFYsR0FDbUVKLEtBRG5FLENBQ1VJLFdBRFY7QUFBQSxNQUN1QkMsYUFEdkIsR0FDbUVMLEtBRG5FLENBQ3VCSyxhQUR2QjtBQUFBLE1BQ3NDQyxJQUR0QyxHQUNtRU4sS0FEbkUsQ0FDc0NNLElBRHRDO0FBQUEsTUFDMkNDLEtBRDNDLEdBQ21FUCxLQURuRSxDQUMyQ08sS0FEM0M7QUFBQSxNQUNrREMsS0FEbEQsR0FDbUVSLEtBRG5FLENBQ2tEUSxLQURsRDtBQUFBLE1BQ3lEQyxLQUR6RCxHQUNtRVQsS0FEbkUsQ0FDeURTLEtBRHpEO0FBRTFCLFNBQ0k7QUFBUyxhQUFTLEVBQUVDLGdGQUFNLENBQUNDLHFCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUF5QlYsTUFBekIsTUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQXVCQyxLQUF2QixNQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBaUJDLFdBQVcsQ0FBQyxDQUFELENBQTVCLE9BQWtDO0FBQUcsYUFBUyxFQUFDLFFBQWI7QUFBc0IsUUFBSSxFQUFFSSxLQUE1QjtBQUFtQyxPQUFHLEVBQUMscUJBQXZDO0FBQTZELFVBQU0sRUFBQyxRQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThFSixXQUFXLENBQUMsQ0FBRCxDQUF6RixDQUFsQyxPQUF1SUEsV0FBVyxDQUFDLENBQUQsQ0FBbEosTUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQTJCQyxXQUEzQixNQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBbUI7QUFBRyxhQUFTLEVBQUMsUUFBYjtBQUFzQixRQUFJLEVBQUVFLElBQTVCO0FBQWtDLE9BQUcsRUFBQyxxQkFBdEM7QUFBNEQsVUFBTSxFQUFDLFFBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBOEVBLElBQTlFLE1BQW5CLENBTEosQ0FESixFQVNJO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUUsS0FBVjtBQUFpQixPQUFHLEVBQUMsMkJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssT0FBRyxFQUFFQyxLQUFWO0FBQWlCLE9BQUcsRUFBQywyQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBVEosQ0FESixDQURKO0FBbUJILENBckJEOztLQUFNVixVO0FBdUJTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NTE2MmExNGI3NGM3NGFmM2YxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcHVibGljL2NvbXBvbmVudHMvVW5Qcm9qZWN0by5tb2R1bGUuc2NzcydcblxuY29uc3QgVW5Qcm9qZWN0byA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbm9tYnJlLCBmZWNoYSwgZGVzY3JpcGNpb24sIHRlY25vbG9naWFzLCBwYXJ0aWNpcGFjaW9uLCBsaW5rLGxpbmsyLCBmb3RvMSwgZm90bzIgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnVuUHJvamVjdG9fX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdG9fX2luZm9fX2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3RvX190ZXh0X19jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmUgZGVsIHByb3llY3RvOiB7bm9tYnJlfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkZlY2hhIGRlIGNyZWFjaW9uOiB7ZmVjaGF9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RGVzY3JpcGNpw7NuOiB7ZGVzY3JpcGNpb25bMF19IHs8YSBjbGFzc05hbWU9J2FjaXRvcycgaHJlZj17bGluazJ9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj57ZGVzY3JpcGNpb25bMV19PC9hPn0geyBkZXNjcmlwY2lvblsyXX0uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5UZWNub2xvZ2lhcyBlbXBsZWFkYXM6IHt0ZWNub2xvZ2lhc30uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5MaW5rIGFsIHNpdGlvOiB7PGEgY2xhc3NOYW1lPSdhY2l0b3MnIGhyZWY9e2xpbmt9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj4ge2xpbmt9IDwvYT59PC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3RvX19pbWdfX2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmb3RvMX0gYWx0PVwicHJpZW1yYSBmb3RvIGRlIG1pIHBhZ2luYVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmb3RvMn0gYWx0PVwic2VndW5kYSBmb3RvIGRlIG1pIHBhZ2luYVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVblByb2plY3RvOyJdLCJzb3VyY2VSb290IjoiIn0=