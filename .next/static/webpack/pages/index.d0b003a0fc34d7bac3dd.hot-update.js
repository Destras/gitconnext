webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/components/Footer.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./public/components/Footer.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".Footer_footer__container__20m4H {\n  grid-area: footer;\n  color: #dddddd;\n  background-color: #222831;\n  padding-top: 30px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  text-decoration: none;\n  margin-top: 1%;\n}\n\n.Footer_contacto__1ka9Z {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.Footer_linkedin__img__1wSI1 {\n  width: 30px;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.Footer_contacto__1ka9Z {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin-bottom: 10px;\n}\n\n.Footer_linkedin__2AyeX {\n  color: #dddddd;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@media only screen and (min-width: 600px) {\n  .Footer_linkedin__img__1wSI1:hover {\n    -webkit-transform: rotate(20deg);\n            transform: rotate(20deg);\n  }\n\n  .Footer_sociales__2au8h h1 {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .Footer_footer__container__20m4H {\n    flex-direction: column-reverse;\n    padding-bottom: 5px;\n    padding-left: 7px;\n    padding-top: 5px;\n    justify-content: space-around;\n  }\n\n  .Footer_contacto__1ka9Z h1 {\n    font-size: 20px;\n  }\n\n  .Footer_sociales__2au8h {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .Footer_sociales__2au8h h1 {\n    margin-right: 5px;\n    font-size: 20px;\n  }\n\n  .Footer_linkedin__img__1wSI1 {\n    width: 30px;\n    margin-left: 5px;\n  }\n}", "",{"version":3,"sources":["/mnt/c/Users/Juan/Documents/projectos/los buneos proyectos/netxporta/public/components/Footer.module.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,cAAA;EACA,yBAAA;EACA,iBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EAEA,qBAAA;EACA,cAAA;AAAJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,8BAAA;AACJ;;AACA;EACI,WAAA;EACA,0CAAA;EAAA,kCAAA;EAAA,0BAAA;EAAA,kDAAA;AAEJ;;AAAA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AAGJ;;AADA;EACI,cAAA;EACA,qBAAA;EACA,eAAA;AAIJ;;AAFA;EACI;IACI,gCAAA;YAAA,wBAAA;EAKN;;EAHE;IACI,mBAAA;EAMN;AACF;AAJA;EACI;IACI,8BAAA;IACA,mBAAA;IACA,iBAAA;IACA,gBAAA;IACA,6BAAA;EAMN;;EAJE;IACI,eAAA;EAON;;EALE;IACI,aAAA;IACA,mBAAA;IACA,mBAAA;EAQN;;EANE;IACI,iBAAA;IACI,eAAA;EASV;;EAPE;IACI,WAAA;IACA,gBAAA;EAUN;AACF","file":"Footer.module.scss","sourcesContent":[".footer__container{\n    grid-area: footer;\n    color: #dddddd;\n    background-color: #222831;\n    padding-top: 30px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    // align-items: flex-start;\n    text-decoration: none;\n    margin-top: 1%;\n}\n.contacto{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.linkedin__img{\n    width: 30px;\n    transition: transform .3s;\n}\n.contacto{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    margin-bottom: 10px;\n}\n.linkedin{\n    color: #dddddd;\n    text-decoration: none;\n    cursor: pointer;\n}\n@media only screen and (min-width: 600px) { // para cuando el haga click en mobile no se rote\n    .linkedin__img:hover{\n        transform:rotate(20deg);\n    }\n    .sociales h1{\n        margin-bottom: 10px;\n    }\n}\n@media only screen and (max-width: 600px) {\n    .footer__container{\n        flex-direction: column-reverse;\n        padding-bottom: 5px;\n        padding-left: 7px;\n        padding-top: 5px;\n        justify-content: space-around;\n    }\n    .contacto h1{\n        font-size: 20px;\n    }\n    .sociales{\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n    }\n    .sociales h1{\n        margin-right: 5px;\n            font-size: 20px;\n    }\n    .linkedin__img{\n        width: 30px;\n        margin-left: 5px;\n    }\n}"]}]);
// Exports
exports.locals = {
	"footer__container": "Footer_footer__container__20m4H",
	"contacto": "Footer_contacto__1ka9Z",
	"linkedin__img": "Footer_linkedin__img__1wSI1",
	"linkedin": "Footer_linkedin__2AyeX",
	"sociales": "Footer_sociales__2au8h"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvRm9vdGVyLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMscUNBQXFDLHNCQUFzQixtQkFBbUIsOEJBQThCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixrQ0FBa0MsMEJBQTBCLG1CQUFtQixHQUFHLDZCQUE2QixrQkFBa0IsMkJBQTJCLG1DQUFtQyxHQUFHLGtDQUFrQyxnQkFBZ0IsK0NBQStDLHVDQUF1QywrQkFBK0IsdURBQXVELEdBQUcsNkJBQTZCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QixHQUFHLDZCQUE2QixtQkFBbUIsMEJBQTBCLG9CQUFvQixHQUFHLCtDQUErQyx3Q0FBd0MsdUNBQXVDLHVDQUF1QyxLQUFLLGtDQUFrQywwQkFBMEIsS0FBSyxHQUFHLDZDQUE2QyxzQ0FBc0MscUNBQXFDLDBCQUEwQix3QkFBd0IsdUJBQXVCLG9DQUFvQyxLQUFLLGtDQUFrQyxzQkFBc0IsS0FBSywrQkFBK0Isb0JBQW9CLDBCQUEwQiwwQkFBMEIsS0FBSyxrQ0FBa0Msd0JBQXdCLHNCQUFzQixLQUFLLG9DQUFvQyxrQkFBa0IsdUJBQXVCLEtBQUssR0FBRyxPQUFPLGdLQUFnSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLHdFQUF3RSx3QkFBd0IscUJBQXFCLGdDQUFnQyx3QkFBd0Isa0JBQWtCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLGlDQUFpQyw0QkFBNEIscUJBQXFCLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLHFDQUFxQyxHQUFHLGlCQUFpQixrQkFBa0IsZ0NBQWdDLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLG9DQUFvQywwQkFBMEIsR0FBRyxZQUFZLHFCQUFxQiw0QkFBNEIsc0JBQXNCLEdBQUcsNkNBQTZDLDZFQUE2RSxrQ0FBa0MsT0FBTyxtQkFBbUIsOEJBQThCLE9BQU8sR0FBRyw2Q0FBNkMseUJBQXlCLHlDQUF5Qyw4QkFBOEIsNEJBQTRCLDJCQUEyQix3Q0FBd0MsT0FBTyxtQkFBbUIsMEJBQTBCLE9BQU8sZ0JBQWdCLHdCQUF3Qiw4QkFBOEIsOEJBQThCLE9BQU8sbUJBQW1CLDRCQUE0Qiw4QkFBOEIsT0FBTyxxQkFBcUIsc0JBQXNCLDJCQUEyQixPQUFPLEdBQUcsR0FBRztBQUM5Mkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQwYjAwM2EwZmMzNGQ3YmFjM2RkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuRm9vdGVyX2Zvb3Rlcl9fY29udGFpbmVyX18yMG00SCB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGNvbG9yOiAjZGRkZGRkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxufVxcblxcbi5Gb290ZXJfY29udGFjdG9fXzFrYTlaIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uRm9vdGVyX2xpbmtlZGluX19pbWdfXzF3U0kxIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5Gb290ZXJfY29udGFjdG9fXzFrYTlaIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uRm9vdGVyX2xpbmtlZGluX18yQXllWCB7XFxuICBjb2xvcjogI2RkZGRkZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgLkZvb3Rlcl9saW5rZWRpbl9faW1nX18xd1NJMTpob3ZlciB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXG4gIH1cXG5cXG4gIC5Gb290ZXJfc29jaWFsZXNfXzJhdThoIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkZvb3Rlcl9mb290ZXJfX2NvbnRhaW5lcl9fMjBtNEgge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5Gb290ZXJfY29udGFjdG9fXzFrYTlaIGgxIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgLkZvb3Rlcl9zb2NpYWxlc19fMmF1OGgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLkZvb3Rlcl9zb2NpYWxlc19fMmF1OGggaDEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgLkZvb3Rlcl9saW5rZWRpbl9faW1nX18xd1NJMSB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvbW50L2MvVXNlcnMvSnVhbi9Eb2N1bWVudHMvcHJvamVjdG9zL2xvcyBidW5lb3MgcHJveWVjdG9zL25ldHhwb3J0YS9wdWJsaWMvY29tcG9uZW50cy9Gb290ZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBRUEscUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSTtJQUNJLGdDQUFBO1lBQUEsd0JBQUE7RUFLTjs7RUFIRTtJQUNJLG1CQUFBO0VBTU47QUFDRjtBQUpBO0VBQ0k7SUFDSSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0VBTU47O0VBSkU7SUFDSSxlQUFBO0VBT047O0VBTEU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQVFOOztFQU5FO0lBQ0ksaUJBQUE7SUFDSSxlQUFBO0VBU1Y7O0VBUEU7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7RUFVTjtBQUNGXCIsXCJmaWxlXCI6XCJGb290ZXIubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3Rlcl9fY29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgY29sb3I6ICNkZGRkZGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIC8vIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDElO1xcbn1cXG4uY29udGFjdG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmxpbmtlZGluX19pbWd7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xcbn1cXG4uY29udGFjdG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ubGlua2VkaW57XFxuICAgIGNvbG9yOiAjZGRkZGRkO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgeyAvLyBwYXJhIGN1YW5kbyBlbCBoYWdhIGNsaWNrIGVuIG1vYmlsZSBubyBzZSByb3RlXFxuICAgIC5saW5rZWRpbl9faW1nOmhvdmVye1xcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgyMGRlZyk7XFxuICAgIH1cXG4gICAgLnNvY2lhbGVzIGgxe1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5mb290ZXJfX2NvbnRhaW5lcntcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgfVxcbiAgICAuY29udGFjdG8gaDF7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLnNvY2lhbGVze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIC5zb2NpYWxlcyBoMXtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAubGlua2VkaW5fX2ltZ3tcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgfVxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJmb290ZXJfX2NvbnRhaW5lclwiOiBcIkZvb3Rlcl9mb290ZXJfX2NvbnRhaW5lcl9fMjBtNEhcIixcblx0XCJjb250YWN0b1wiOiBcIkZvb3Rlcl9jb250YWN0b19fMWthOVpcIixcblx0XCJsaW5rZWRpbl9faW1nXCI6IFwiRm9vdGVyX2xpbmtlZGluX19pbWdfXzF3U0kxXCIsXG5cdFwibGlua2VkaW5cIjogXCJGb290ZXJfbGlua2VkaW5fXzJBeWVYXCIsXG5cdFwic29jaWFsZXNcIjogXCJGb290ZXJfc29jaWFsZXNfXzJhdThoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9