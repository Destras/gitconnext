webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_InfoPersonal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/InfoPersonal */ "./components/InfoPersonal.jsx");
/* harmony import */ var _components_ProjectosContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectosContainer */ "./components/ProjectosContainer.jsx");
/* harmony import */ var _components_UnProjecto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UnProjecto */ "./components/UnProjecto.jsx");
/* harmony import */ var _components_ExperienciaContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ExperienciaContainer */ "./components/ExperienciaContainer.jsx");
/* harmony import */ var _components_UnaExperiencia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UnaExperiencia */ "./components/UnaExperiencia.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/Juan/Documents/projectos/los buneos proyectos/netxporta/pages/index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // import styles from '../public/app.scss'

var App = function App() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // por que sino tengo q descargar otro webpack loader para css y con el internet malo q tengo me da perezita
    document.getElementById('todo').style.backgroundImage = "url(../public/static/fondo.png)";
  }, []);
  return __jsx("div", {
    className: "main__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/static/fotoLinda.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }
  }), __jsx("div", {
    id: "todo",
    className: "contenedor__todo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_components_InfoPersonal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(_components_ProjectosContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("h1", {
    id: "projectosContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Mis Projectos"), __jsx(_components_UnProjecto__WEBPACK_IMPORTED_MODULE_4__["default"], {
    nombre: "Tweejuan",
    fecha: "8/4/2020",
    descripcion: ['Mi clon de ', 'Twitter', ' con su propia estetica'],
    link2: "https://twitter.com",
    tecnologias: "React, Firebase, react-router-dom",
    link: "https://tweejuan.web.app",
    foto1: "../public/static/fotoLinda.png",
    foto2: "../public/static/fotoLinda.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx(_components_UnProjecto__WEBPACK_IMPORTED_MODULE_4__["default"], {
    nombre: "MercadoJuan",
    fecha: "10/6/2020",
    descripcion: ['Mi clon de ', 'Mercado Libre', ''],
    link2: "https://www.mercadolibre.com.ar/#from=homecom",
    tecnologias: "React, Firebase, react-router-dom, React-Context",
    link: "https://mercadojuan-cf065.web.app",
    foto1: "../public/static/fotoLinda.png",
    foto2: "../public/static/fotoLinda.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx(_components_UnProjecto__WEBPACK_IMPORTED_MODULE_4__["default"], {
    nombre: "OP.JJ",
    fecha: "7/9/2020",
    descripcion: ['Mi clon de ', 'OP.GG', '. Es una pagina de estadísticas para un juego llamado League of Legends. Utiliza la API de esta misma compañía para buscar información, procesarla y mostrarla de forma amigable'],
    link2: "https://las.op.gg",
    tecnologias: "React, Express",
    link: "https://op-gg.herokuapp.com",
    foto1: "../public/static/fotoLinda.png",
    foto2: "../public/static/fotoLinda.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx(_components_ExperienciaContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("h1", {
    id: "projectosContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Mi Experiencias de trabajo"), __jsx(_components_UnaExperiencia__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNkQyx5REFBUyxDQUFDLFlBQUk7QUFDVjtBQUNBQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLENBQXNDQyxlQUF0QztBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLE9BQUcsRUFBQyx1QkFBVDtBQUFpQyxPQUFHLEVBQUMsRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUcsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkgsRUFHSTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsYUFBUyxFQUFDLGtCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxvQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUksTUFBQyw4REFBRDtBQUNFLFVBQU0sRUFBQyxVQURUO0FBRUUsU0FBSyxFQUFDLFVBRlI7QUFHRSxlQUFXLEVBQUUsQ0FBQyxhQUFELEVBQWdCLFNBQWhCLEVBQTJCLHlCQUEzQixDQUhmO0FBSUUsU0FBSyxFQUFDLHFCQUpSO0FBS0UsZUFBVyxFQUFDLG1DQUxkO0FBTUUsUUFBSSxFQUFDLDBCQU5QO0FBT0UsU0FBSyxFQUFDLGdDQVBSO0FBUUUsU0FBSyxFQUFDLGdDQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVlJLE1BQUMsOERBQUQ7QUFDRSxVQUFNLEVBQUMsYUFEVDtBQUVFLFNBQUssRUFBQyxXQUZSO0FBR0UsZUFBVyxFQUFFLENBQUMsYUFBRCxFQUFnQixlQUFoQixFQUFpQyxFQUFqQyxDQUhmO0FBSUUsU0FBSyxFQUFDLCtDQUpSO0FBS0UsZUFBVyxFQUFDLGtEQUxkO0FBTUUsUUFBSSxFQUFDLG1DQU5QO0FBT0UsU0FBSyxFQUFDLGdDQVBSO0FBUUUsU0FBSyxFQUFDLGdDQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixFQXNCSSxNQUFDLDhEQUFEO0FBQ0UsVUFBTSxFQUFDLE9BRFQ7QUFFRSxTQUFLLEVBQUMsVUFGUjtBQUdFLGVBQVcsRUFBRSxDQUFDLGFBQUQsRUFBZSxPQUFmLEVBQXVCLGtMQUF2QixDQUhmO0FBSUUsU0FBSyxFQUFDLG1CQUpSO0FBS0UsZUFBVyxFQUFDLGdCQUxkO0FBTUUsUUFBSSxFQUFDLDZCQU5QO0FBT0UsU0FBSyxFQUFDLGdDQVBSO0FBUUUsU0FBSyxFQUFDLGdDQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkosQ0FGRixFQW1DRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLE1BQUUsRUFBQyxvQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKLEVBRUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FuQ0YsRUF1Q0EsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkNBLENBSEosQ0FERjtBQStDSCxDQXBERDs7R0FBTUwsRzs7S0FBQUEsRztBQXNEU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTliNDgwMTE3MWY5MDdlZWZkNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEluZm9QZXJzb25hbCBmcm9tICcuLi9jb21wb25lbnRzL0luZm9QZXJzb25hbCdcbmltcG9ydCBQcm9qZWN0b3NDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0b3NDb250YWluZXInXG5pbXBvcnQgVW5Qcm9qZWN0byBmcm9tICcuLi9jb21wb25lbnRzL1VuUHJvamVjdG8nXG5pbXBvcnQgRXhwZXJpZW5jaWFDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9FeHBlcmllbmNpYUNvbnRhaW5lcidcbmltcG9ydCBVbmFFeHBlcmllbmNpYSBmcm9tICcuLi9jb21wb25lbnRzL1VuYUV4cGVyaWVuY2lhJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3B1YmxpYy9hcHAuc2NzcydcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgLy8gcG9yIHF1ZSBzaW5vIHRlbmdvIHEgZGVzY2FyZ2FyIG90cm8gd2VicGFjayBsb2FkZXIgcGFyYSBjc3MgeSBjb24gZWwgaW50ZXJuZXQgbWFsbyBxIHRlbmdvIG1lIGRhIHBlcmV6aXRhXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi9wdWJsaWMvc3RhdGljL2ZvbmRvLnBuZylgXG4gICAgfSwgW10pXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5fX2NvbnRhaW5lcic+XG4gICAgICA8aW1nIHNyYz0nL3N0YXRpYy9mb3RvTGluZGEucG5nJyBhbHQ9XCJcIi8+XG4gICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICAgIDxkaXYgaWQ9J3RvZG8nIGNsYXNzTmFtZT0nY29udGVuZWRvcl9fdG9kbyc+XG4gICAgICAgICAgICA8SW5mb1BlcnNvbmFsIC8+XG4gICAgICAgICAgICA8UHJvamVjdG9zQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8aDEgIGlkPSdwcm9qZWN0b3NDb250YWluZXInID5NaXMgUHJvamVjdG9zPC9oMT5cbiAgICAgICAgICAgICAgICA8VW5Qcm9qZWN0b1xuICAgICAgICAgICAgICAgICAgbm9tYnJlPSdUd2VlanVhbidcbiAgICAgICAgICAgICAgICAgIGZlY2hhPSc4LzQvMjAyMCdcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXBjaW9uPXtbJ01pIGNsb24gZGUgJyAsJ1R3aXR0ZXInLCAnIGNvbiBzdSBwcm9waWEgZXN0ZXRpY2EnXX1cbiAgICAgICAgICAgICAgICAgIGxpbmsyPSdodHRwczovL3R3aXR0ZXIuY29tJ1xuICAgICAgICAgICAgICAgICAgdGVjbm9sb2dpYXM9J1JlYWN0LCBGaXJlYmFzZSwgcmVhY3Qtcm91dGVyLWRvbSdcbiAgICAgICAgICAgICAgICAgIGxpbms9J2h0dHBzOi8vdHdlZWp1YW4ud2ViLmFwcCdcbiAgICAgICAgICAgICAgICAgIGZvdG8xPScuLi9wdWJsaWMvc3RhdGljL2ZvdG9MaW5kYS5wbmcnXG4gICAgICAgICAgICAgICAgICBmb3RvMj0nLi4vcHVibGljL3N0YXRpYy9mb3RvTGluZGEucG5nJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFVuUHJvamVjdG9cbiAgICAgICAgICAgICAgICAgIG5vbWJyZT0nTWVyY2Fkb0p1YW4nXG4gICAgICAgICAgICAgICAgICBmZWNoYT0nMTAvNi8yMDIwJ1xuICAgICAgICAgICAgICAgICAgZGVzY3JpcGNpb249e1snTWkgY2xvbiBkZSAnLCAnTWVyY2FkbyBMaWJyZScsICcnIF19XG4gICAgICAgICAgICAgICAgICBsaW5rMj0naHR0cHM6Ly93d3cubWVyY2Fkb2xpYnJlLmNvbS5hci8jZnJvbT1ob21lY29tJ1xuICAgICAgICAgICAgICAgICAgdGVjbm9sb2dpYXM9J1JlYWN0LCBGaXJlYmFzZSwgcmVhY3Qtcm91dGVyLWRvbSwgUmVhY3QtQ29udGV4dCdcbiAgICAgICAgICAgICAgICAgIGxpbms9J2h0dHBzOi8vbWVyY2Fkb2p1YW4tY2YwNjUud2ViLmFwcCdcbiAgICAgICAgICAgICAgICAgIGZvdG8xPScuLi9wdWJsaWMvc3RhdGljL2ZvdG9MaW5kYS5wbmcnXG4gICAgICAgICAgICAgICAgICBmb3RvMj0nLi4vcHVibGljL3N0YXRpYy9mb3RvTGluZGEucG5nJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFVuUHJvamVjdG9cbiAgICAgICAgICAgICAgICAgIG5vbWJyZT0nT1AuSkonXG4gICAgICAgICAgICAgICAgICBmZWNoYT0nNy85LzIwMjAnXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwY2lvbj17WydNaSBjbG9uIGRlICcsJ09QLkdHJywnLiBFcyB1bmEgcGFnaW5hIGRlIGVzdGFkw61zdGljYXMgcGFyYSB1biBqdWVnbyBsbGFtYWRvIExlYWd1ZSBvZiBMZWdlbmRzLiBVdGlsaXphIGxhIEFQSSBkZSBlc3RhIG1pc21hIGNvbXBhw7HDrWEgcGFyYSBidXNjYXIgaW5mb3JtYWNpw7NuLCBwcm9jZXNhcmxhIHkgbW9zdHJhcmxhIGRlIGZvcm1hIGFtaWdhYmxlJ119XG4gICAgICAgICAgICAgICAgICBsaW5rMj0naHR0cHM6Ly9sYXMub3AuZ2cnXG4gICAgICAgICAgICAgICAgICB0ZWNub2xvZ2lhcz0nUmVhY3QsIEV4cHJlc3MnXG4gICAgICAgICAgICAgICAgICBsaW5rPSdodHRwczovL29wLWdnLmhlcm9rdWFwcC5jb20nXG4gICAgICAgICAgICAgICAgICBmb3RvMT0nLi4vcHVibGljL3N0YXRpYy9mb3RvTGluZGEucG5nJ1xuICAgICAgICAgICAgICAgICAgZm90bzI9Jy4uL3B1YmxpYy9zdGF0aWMvZm90b0xpbmRhLnBuZydcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Qcm9qZWN0b3NDb250YWluZXI+XG4gICAgICAgICAgICA8RXhwZXJpZW5jaWFDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGgxIGlkPSdwcm9qZWN0b3NDb250YWluZXInPk1pIEV4cGVyaWVuY2lhcyBkZSB0cmFiYWpvPC9oMT5cbiAgICAgICAgICAgICAgICA8VW5hRXhwZXJpZW5jaWE+PC9VbmFFeHBlcmllbmNpYT5cbiAgICAgICAgICAgIDwvRXhwZXJpZW5jaWFDb250YWluZXI+XG4gICAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=