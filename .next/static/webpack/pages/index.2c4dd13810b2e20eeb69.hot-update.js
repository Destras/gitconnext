webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_InfoPersonal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InfoPersonal */ "./components/InfoPersonal.jsx");
/* harmony import */ var _components_ProjectosContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectosContainer */ "./components/ProjectosContainer.jsx");
/* harmony import */ var _components_UnProjecto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UnProjecto */ "./components/UnProjecto.jsx");
/* harmony import */ var _components_ExperienciaContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ExperienciaContainer */ "./components/ExperienciaContainer.jsx");
/* harmony import */ var _components_UnaExperiencia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UnaExperiencia */ "./components/UnaExperiencia.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/Juan/Documents/projectos/los buneos proyectos/netxporta/pages/index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








 // import styles from '../public/app.scss'

var App = function App() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // por que sino tengo q descargar otro webpack loader para css y con el internet malo q tengo me da perezita
    document.getElementById('todo').style.backgroundImage = "url(/static/fondo.png)";
  }, []);
  return __jsx("div", {
    className: "main__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Portafolios de Juan ignacio werkalec"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }), __jsx("div", {
    id: "todo",
    className: "contenedor__todo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(_components_InfoPersonal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(_components_ProjectosContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("h1", {
    id: "projectosContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "Mis Projectos"), __jsx(_components_UnProjecto__WEBPACK_IMPORTED_MODULE_5__["default"], {
    nombre: "Tweejuan",
    fecha: "8/4/2020",
    descripcion: ['Mi clon de ', 'Twitter', ' con su propia estetica'],
    link2: "https://twitter.com",
    tecnologias: "React, Firebase, react-router-dom",
    link: "https://tweejuan.web.app",
    foto1: "/static/fotoLinda.png",
    foto2: "/static/fotoLinda2.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx(_components_UnProjecto__WEBPACK_IMPORTED_MODULE_5__["default"], {
    nombre: "MercadoJuan",
    fecha: "10/6/2020",
    descripcion: ['Mi clon de ', 'Mercado Libre', ''],
    link2: "https://www.mercadolibre.com.ar/#from=homecom",
    tecnologias: "React, Firebase, react-router-dom, React-Context",
    link: "https://mercadojuan-cf065.web.app",
    foto1: "/static/mercadojuan1.jpg",
    foto2: "/static/mercadojuan2.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx(_components_UnProjecto__WEBPACK_IMPORTED_MODULE_5__["default"], {
    nombre: "OP.JJ",
    fecha: "7/9/2020",
    descripcion: ['Mi clon de ', 'OP.GG', '. Es una pagina de estadísticas para un juego llamado League of Legends. Utiliza la API de esta misma compañía para buscar información, procesarla y mostrarla de forma amigable'],
    link2: "https://las.op.gg",
    tecnologias: "React, Express",
    link: "https://op-gg.herokuapp.com",
    foto1: "/static/op-gg1.png",
    foto2: "/static/op-gg2.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx(_components_ExperienciaContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("h1", {
    id: "projectosContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Mi Experiencias de trabajo"), __jsx(_components_UnaExperiencia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })));
};

_s(App, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFDZEMseURBQVMsQ0FBQyxZQUFJO0FBQ1Y7QUFDQUMsWUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUFoQyxDQUFzQ0MsZUFBdEM7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1EsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FETSxFQUVOO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGTSxDQURSLEVBS0csTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEgsRUFNSTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsYUFBUyxFQUFDLGtCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxvQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUksTUFBQyw4REFBRDtBQUNFLFVBQU0sRUFBQyxVQURUO0FBRUUsU0FBSyxFQUFDLFVBRlI7QUFHRSxlQUFXLEVBQUUsQ0FBQyxhQUFELEVBQWdCLFNBQWhCLEVBQTJCLHlCQUEzQixDQUhmO0FBSUUsU0FBSyxFQUFDLHFCQUpSO0FBS0UsZUFBVyxFQUFDLG1DQUxkO0FBTUUsUUFBSSxFQUFDLDBCQU5QO0FBT0UsU0FBSyxFQUFDLHVCQVBSO0FBUUUsU0FBSyxFQUFDLHdCQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVlJLE1BQUMsOERBQUQ7QUFDRSxVQUFNLEVBQUMsYUFEVDtBQUVFLFNBQUssRUFBQyxXQUZSO0FBR0UsZUFBVyxFQUFFLENBQUMsYUFBRCxFQUFnQixlQUFoQixFQUFpQyxFQUFqQyxDQUhmO0FBSUUsU0FBSyxFQUFDLCtDQUpSO0FBS0UsZUFBVyxFQUFDLGtEQUxkO0FBTUUsUUFBSSxFQUFDLG1DQU5QO0FBT0UsU0FBSyxFQUFDLDBCQVBSO0FBUUUsU0FBSyxFQUFDLDBCQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQXNCSSxNQUFDLDhEQUFEO0FBQ0UsVUFBTSxFQUFDLE9BRFQ7QUFFRSxTQUFLLEVBQUMsVUFGUjtBQUdFLGVBQVcsRUFBRSxDQUFDLGFBQUQsRUFBZSxPQUFmLEVBQXVCLGtMQUF2QixDQUhmO0FBSUUsU0FBSyxFQUFDLG1CQUpSO0FBS0UsZUFBVyxFQUFDLGdCQUxkO0FBTUUsUUFBSSxFQUFDLDZCQU5QO0FBT0UsU0FBSyxFQUFDLG9CQVBSO0FBUUUsU0FBSyxFQUFDLG9CQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkosQ0FGRixFQW1DRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLE1BQUUsRUFBQyxvQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKLEVBRUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FuQ0YsRUF1Q0EsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkNBLENBTkosQ0FERjtBQWtESCxDQXZERDs7R0FBTUwsRzs7S0FBQUEsRztBQXlEU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmM0ZGQxMzgxMGIyZTIwZWViNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEluZm9QZXJzb25hbCBmcm9tICcuLi9jb21wb25lbnRzL0luZm9QZXJzb25hbCdcbmltcG9ydCBQcm9qZWN0b3NDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0b3NDb250YWluZXInXG5pbXBvcnQgVW5Qcm9qZWN0byBmcm9tICcuLi9jb21wb25lbnRzL1VuUHJvamVjdG8nXG5pbXBvcnQgRXhwZXJpZW5jaWFDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9FeHBlcmllbmNpYUNvbnRhaW5lcidcbmltcG9ydCBVbmFFeHBlcmllbmNpYSBmcm9tICcuLi9jb21wb25lbnRzL1VuYUV4cGVyaWVuY2lhJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3B1YmxpYy9hcHAuc2NzcydcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgLy8gcG9yIHF1ZSBzaW5vIHRlbmdvIHEgZGVzY2FyZ2FyIG90cm8gd2VicGFjayBsb2FkZXIgcGFyYSBjc3MgeSBjb24gZWwgaW50ZXJuZXQgbWFsbyBxIHRlbmdvIG1lIGRhIHBlcmV6aXRhXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgvc3RhdGljL2ZvbmRvLnBuZylgXG4gICAgfSwgW10pXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5fX2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9ydGFmb2xpb3MgZGUgSnVhbiBpZ25hY2lvIHdlcmthbGVjPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGlkPSd0b2RvJyBjbGFzc05hbWU9J2NvbnRlbmVkb3JfX3RvZG8nPlxuICAgICAgICAgICAgPEluZm9QZXJzb25hbCAvPlxuICAgICAgICAgICAgPFByb2plY3Rvc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGgxICBpZD0ncHJvamVjdG9zQ29udGFpbmVyJyA+TWlzIFByb2plY3RvczwvaDE+XG4gICAgICAgICAgICAgICAgPFVuUHJvamVjdG9cbiAgICAgICAgICAgICAgICAgIG5vbWJyZT0nVHdlZWp1YW4nXG4gICAgICAgICAgICAgICAgICBmZWNoYT0nOC80LzIwMjAnXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwY2lvbj17WydNaSBjbG9uIGRlICcgLCdUd2l0dGVyJywgJyBjb24gc3UgcHJvcGlhIGVzdGV0aWNhJ119XG4gICAgICAgICAgICAgICAgICBsaW5rMj0naHR0cHM6Ly90d2l0dGVyLmNvbSdcbiAgICAgICAgICAgICAgICAgIHRlY25vbG9naWFzPSdSZWFjdCwgRmlyZWJhc2UsIHJlYWN0LXJvdXRlci1kb20nXG4gICAgICAgICAgICAgICAgICBsaW5rPSdodHRwczovL3R3ZWVqdWFuLndlYi5hcHAnXG4gICAgICAgICAgICAgICAgICBmb3RvMT0nL3N0YXRpYy9mb3RvTGluZGEucG5nJ1xuICAgICAgICAgICAgICAgICAgZm90bzI9Jy9zdGF0aWMvZm90b0xpbmRhMi5wbmcnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VW5Qcm9qZWN0b1xuICAgICAgICAgICAgICAgICAgbm9tYnJlPSdNZXJjYWRvSnVhbidcbiAgICAgICAgICAgICAgICAgIGZlY2hhPScxMC82LzIwMjAnXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwY2lvbj17WydNaSBjbG9uIGRlICcsICdNZXJjYWRvIExpYnJlJywgJycgXX1cbiAgICAgICAgICAgICAgICAgIGxpbmsyPSdodHRwczovL3d3dy5tZXJjYWRvbGlicmUuY29tLmFyLyNmcm9tPWhvbWVjb20nXG4gICAgICAgICAgICAgICAgICB0ZWNub2xvZ2lhcz0nUmVhY3QsIEZpcmViYXNlLCByZWFjdC1yb3V0ZXItZG9tLCBSZWFjdC1Db250ZXh0J1xuICAgICAgICAgICAgICAgICAgbGluaz0naHR0cHM6Ly9tZXJjYWRvanVhbi1jZjA2NS53ZWIuYXBwJ1xuICAgICAgICAgICAgICAgICAgZm90bzE9Jy9zdGF0aWMvbWVyY2Fkb2p1YW4xLmpwZydcbiAgICAgICAgICAgICAgICAgIGZvdG8yPScvc3RhdGljL21lcmNhZG9qdWFuMi5qcGcnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VW5Qcm9qZWN0b1xuICAgICAgICAgICAgICAgICAgbm9tYnJlPSdPUC5KSidcbiAgICAgICAgICAgICAgICAgIGZlY2hhPSc3LzkvMjAyMCdcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXBjaW9uPXtbJ01pIGNsb24gZGUgJywnT1AuR0cnLCcuIEVzIHVuYSBwYWdpbmEgZGUgZXN0YWTDrXN0aWNhcyBwYXJhIHVuIGp1ZWdvIGxsYW1hZG8gTGVhZ3VlIG9mIExlZ2VuZHMuIFV0aWxpemEgbGEgQVBJIGRlIGVzdGEgbWlzbWEgY29tcGHDscOtYSBwYXJhIGJ1c2NhciBpbmZvcm1hY2nDs24sIHByb2Nlc2FybGEgeSBtb3N0cmFybGEgZGUgZm9ybWEgYW1pZ2FibGUnXX1cbiAgICAgICAgICAgICAgICAgIGxpbmsyPSdodHRwczovL2xhcy5vcC5nZydcbiAgICAgICAgICAgICAgICAgIHRlY25vbG9naWFzPSdSZWFjdCwgRXhwcmVzcydcbiAgICAgICAgICAgICAgICAgIGxpbms9J2h0dHBzOi8vb3AtZ2cuaGVyb2t1YXBwLmNvbSdcbiAgICAgICAgICAgICAgICAgIGZvdG8xPScvc3RhdGljL29wLWdnMS5wbmcnXG4gICAgICAgICAgICAgICAgICBmb3RvMj0nL3N0YXRpYy9vcC1nZzIucG5nJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Byb2plY3Rvc0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxFeHBlcmllbmNpYUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8aDEgaWQ9J3Byb2plY3Rvc0NvbnRhaW5lcic+TWkgRXhwZXJpZW5jaWFzIGRlIHRyYWJham88L2gxPlxuICAgICAgICAgICAgICAgIDxVbmFFeHBlcmllbmNpYT48L1VuYUV4cGVyaWVuY2lhPlxuICAgICAgICAgICAgPC9FeHBlcmllbmNpYUNvbnRhaW5lcj5cbiAgICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==