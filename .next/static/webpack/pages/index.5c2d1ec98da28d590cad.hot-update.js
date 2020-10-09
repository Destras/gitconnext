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
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Portafolios de Juan Ignacio Werkalec"), __jsx("link", {
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
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "todo",
    className: "contenedor__todo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_components_InfoPersonal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(_components_ProjectosContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h1", {
    id: "projectosContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
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
      columnNumber: 11
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
      columnNumber: 11
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
      columnNumber: 11
    }
  })), __jsx(_components_ExperienciaContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("h1", {
    id: "projectosContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Mi Experiencias de trabajo"), __jsx(_components_UnaExperiencia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFDaEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0FDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsS0FBaEMsQ0FBc0NDLGVBQXRDO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLGFBQVMsRUFBQyxrQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxNQUFFLEVBQUMsb0JBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFLE1BQUMsOERBQUQ7QUFDRSxVQUFNLEVBQUMsVUFEVDtBQUVFLFNBQUssRUFBQyxVQUZSO0FBR0UsZUFBVyxFQUFFLENBQUMsYUFBRCxFQUFnQixTQUFoQixFQUEyQix5QkFBM0IsQ0FIZjtBQUlFLFNBQUssRUFBQyxxQkFKUjtBQUtFLGVBQVcsRUFBQyxtQ0FMZDtBQU1FLFFBQUksRUFBQywwQkFOUDtBQU9FLFNBQUssRUFBQyx1QkFQUjtBQVFFLFNBQUssRUFBQyx3QkFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFZRSxNQUFDLDhEQUFEO0FBQ0UsVUFBTSxFQUFDLGFBRFQ7QUFFRSxTQUFLLEVBQUMsV0FGUjtBQUdFLGVBQVcsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsZUFBaEIsRUFBaUMsRUFBakMsQ0FIZjtBQUlFLFNBQUssRUFBQywrQ0FKUjtBQUtFLGVBQVcsRUFBQyxrREFMZDtBQU1FLFFBQUksRUFBQyxtQ0FOUDtBQU9FLFNBQUssRUFBQywwQkFQUjtBQVFFLFNBQUssRUFBQywwQkFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFzQkUsTUFBQyw4REFBRDtBQUNFLFVBQU0sRUFBQyxPQURUO0FBRUUsU0FBSyxFQUFDLFVBRlI7QUFHRSxlQUFXLEVBQUUsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLEVBQXlCLGtMQUF6QixDQUhmO0FBSUUsU0FBSyxFQUFDLG1CQUpSO0FBS0UsZUFBVyxFQUFDLGdCQUxkO0FBTUUsUUFBSSxFQUFDLDZCQU5QO0FBT0UsU0FBSyxFQUFDLG9CQVBSO0FBUUUsU0FBSyxFQUFDLG9CQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsQ0FGRixFQW1DRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLE1BQUUsRUFBQyxvQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBRUUsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FuQ0YsRUF1Q0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkNGLENBTkYsQ0FERjtBQWtERCxDQXZERDs7R0FBTUwsRzs7S0FBQUEsRztBQXlEU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWMyZDFlYzk4ZGEyOGQ1OTBjYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgSW5mb1BlcnNvbmFsIGZyb20gJy4uL2NvbXBvbmVudHMvSW5mb1BlcnNvbmFsJ1xuaW1wb3J0IFByb2plY3Rvc0NvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3Rvc0NvbnRhaW5lcidcbmltcG9ydCBVblByb2plY3RvIGZyb20gJy4uL2NvbXBvbmVudHMvVW5Qcm9qZWN0bydcbmltcG9ydCBFeHBlcmllbmNpYUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0V4cGVyaWVuY2lhQ29udGFpbmVyJ1xuaW1wb3J0IFVuYUV4cGVyaWVuY2lhIGZyb20gJy4uL2NvbXBvbmVudHMvVW5hRXhwZXJpZW5jaWEnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5cbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcHVibGljL2FwcC5zY3NzJ1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHBvciBxdWUgc2lubyB0ZW5nbyBxIGRlc2NhcmdhciBvdHJvIHdlYnBhY2sgbG9hZGVyIHBhcmEgY3NzIHkgY29uIGVsIGludGVybmV0IG1hbG8gcSB0ZW5nbyBtZSBkYSBwZXJleml0YVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgvc3RhdGljL2ZvbmRvLnBuZylgXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluX19jb250YWluZXInPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb3J0YWZvbGlvcyBkZSBKdWFuIElnbmFjaW8gV2Vya2FsZWM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgPGRpdiBpZD0ndG9kbycgY2xhc3NOYW1lPSdjb250ZW5lZG9yX190b2RvJz5cbiAgICAgICAgPEluZm9QZXJzb25hbCAvPlxuICAgICAgICA8UHJvamVjdG9zQ29udGFpbmVyPlxuICAgICAgICAgIDxoMSBpZD0ncHJvamVjdG9zQ29udGFpbmVyJyA+TWlzIFByb2plY3RvczwvaDE+XG4gICAgICAgICAgPFVuUHJvamVjdG9cbiAgICAgICAgICAgIG5vbWJyZT0nVHdlZWp1YW4nXG4gICAgICAgICAgICBmZWNoYT0nOC80LzIwMjAnXG4gICAgICAgICAgICBkZXNjcmlwY2lvbj17WydNaSBjbG9uIGRlICcsICdUd2l0dGVyJywgJyBjb24gc3UgcHJvcGlhIGVzdGV0aWNhJ119XG4gICAgICAgICAgICBsaW5rMj0naHR0cHM6Ly90d2l0dGVyLmNvbSdcbiAgICAgICAgICAgIHRlY25vbG9naWFzPSdSZWFjdCwgRmlyZWJhc2UsIHJlYWN0LXJvdXRlci1kb20nXG4gICAgICAgICAgICBsaW5rPSdodHRwczovL3R3ZWVqdWFuLndlYi5hcHAnXG4gICAgICAgICAgICBmb3RvMT0nL3N0YXRpYy9mb3RvTGluZGEucG5nJ1xuICAgICAgICAgICAgZm90bzI9Jy9zdGF0aWMvZm90b0xpbmRhMi5wbmcnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VW5Qcm9qZWN0b1xuICAgICAgICAgICAgbm9tYnJlPSdNZXJjYWRvSnVhbidcbiAgICAgICAgICAgIGZlY2hhPScxMC82LzIwMjAnXG4gICAgICAgICAgICBkZXNjcmlwY2lvbj17WydNaSBjbG9uIGRlICcsICdNZXJjYWRvIExpYnJlJywgJyddfVxuICAgICAgICAgICAgbGluazI9J2h0dHBzOi8vd3d3Lm1lcmNhZG9saWJyZS5jb20uYXIvI2Zyb209aG9tZWNvbSdcbiAgICAgICAgICAgIHRlY25vbG9naWFzPSdSZWFjdCwgRmlyZWJhc2UsIHJlYWN0LXJvdXRlci1kb20sIFJlYWN0LUNvbnRleHQnXG4gICAgICAgICAgICBsaW5rPSdodHRwczovL21lcmNhZG9qdWFuLWNmMDY1LndlYi5hcHAnXG4gICAgICAgICAgICBmb3RvMT0nL3N0YXRpYy9tZXJjYWRvanVhbjEuanBnJ1xuICAgICAgICAgICAgZm90bzI9Jy9zdGF0aWMvbWVyY2Fkb2p1YW4yLmpwZydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxVblByb2plY3RvXG4gICAgICAgICAgICBub21icmU9J09QLkpKJ1xuICAgICAgICAgICAgZmVjaGE9JzcvOS8yMDIwJ1xuICAgICAgICAgICAgZGVzY3JpcGNpb249e1snTWkgY2xvbiBkZSAnLCAnT1AuR0cnLCAnLiBFcyB1bmEgcGFnaW5hIGRlIGVzdGFkw61zdGljYXMgcGFyYSB1biBqdWVnbyBsbGFtYWRvIExlYWd1ZSBvZiBMZWdlbmRzLiBVdGlsaXphIGxhIEFQSSBkZSBlc3RhIG1pc21hIGNvbXBhw7HDrWEgcGFyYSBidXNjYXIgaW5mb3JtYWNpw7NuLCBwcm9jZXNhcmxhIHkgbW9zdHJhcmxhIGRlIGZvcm1hIGFtaWdhYmxlJ119XG4gICAgICAgICAgICBsaW5rMj0naHR0cHM6Ly9sYXMub3AuZ2cnXG4gICAgICAgICAgICB0ZWNub2xvZ2lhcz0nUmVhY3QsIEV4cHJlc3MnXG4gICAgICAgICAgICBsaW5rPSdodHRwczovL29wLWdnLmhlcm9rdWFwcC5jb20nXG4gICAgICAgICAgICBmb3RvMT0nL3N0YXRpYy9vcC1nZzEucG5nJ1xuICAgICAgICAgICAgZm90bzI9Jy9zdGF0aWMvb3AtZ2cyLnBuZydcbiAgICAgICAgICAvPlxuICAgICAgICA8L1Byb2plY3Rvc0NvbnRhaW5lcj5cbiAgICAgICAgPEV4cGVyaWVuY2lhQ29udGFpbmVyPlxuICAgICAgICAgIDxoMSBpZD0ncHJvamVjdG9zQ29udGFpbmVyJz5NaSBFeHBlcmllbmNpYXMgZGUgdHJhYmFqbzwvaDE+XG4gICAgICAgICAgPFVuYUV4cGVyaWVuY2lhPjwvVW5hRXhwZXJpZW5jaWE+XG4gICAgICAgIDwvRXhwZXJpZW5jaWFDb250YWluZXI+XG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==