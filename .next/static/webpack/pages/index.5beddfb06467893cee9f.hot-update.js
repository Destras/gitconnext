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
exports.push([module.i, ".Footer_footer__container__20m4H {\n  grid-area: footer;\n  color: #dddddd;\n  background-color: #222831;\n  padding-top: 30px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  text-decoration: none;\n  margin-top: 1%;\n}\n\n.Footer_contacto__1ka9Z {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.Footer_linkedin__img__1wSI1 {\n  width: 30px;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.Footer_contacto__1ka9Z {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin-bottom: 10px;\n}\n\n.Footer_linkedin__2AyeX {\n  color: #dddddd;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@media only screen and (min-width: 600px) {\n  .Footer_linkedin__img__1wSI1:hover {\n    -webkit-transform: rotate(20deg);\n            transform: rotate(20deg);\n  }\n\n  .Footer_sociales__2au8h h1 {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .Footer_footer__container__20m4H {\n    flex-direction: column-reverse;\n    padding-bottom: 5px;\n    padding-left: 7px;\n    padding-top: 5px;\n    justify-content: space-around;\n  }\n\n  .Footer_contacto__1ka9Z h1 {\n    font-size: 20px;\n  }\n\n  .Footer_sociales__2au8h {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .Footer_sociales__2au8h h1 {\n    margin-right: 5px;\n    font-size: 20px;\n  }\n\n  .Footer_linkedin__img__1wSI1 {\n    width: 30px;\n    margin-left: 5px;\n  }\n}", "",{"version":3,"sources":["/mnt/c/Users/Juan/Documents/projectos/los buneos proyectos/netxporta/public/components/Footer.module.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,cAAA;EACA,yBAAA;EACA,iBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EAEA,qBAAA;EACA,cAAA;AAAJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;AACJ;;AACA;EACI,WAAA;EACA,0CAAA;EAAA,kCAAA;EAAA,0BAAA;EAAA,kDAAA;AAEJ;;AAAA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AAGJ;;AADA;EACI,cAAA;EACA,qBAAA;EACA,eAAA;AAIJ;;AAFA;EACI;IACI,gCAAA;YAAA,wBAAA;EAKN;;EAHE;IACI,mBAAA;EAMN;AACF;AAJA;EACI;IACI,8BAAA;IACA,mBAAA;IACA,iBAAA;IACA,gBAAA;IACA,6BAAA;EAMN;;EAJE;IACI,eAAA;EAON;;EALE;IACI,aAAA;IACA,mBAAA;IACA,mBAAA;EAQN;;EANE;IACI,iBAAA;IACI,eAAA;EASV;;EAPE;IACI,WAAA;IACA,gBAAA;EAUN;AACF","file":"Footer.module.scss","sourcesContent":[".footer__container{\n    grid-area: footer;\n    color: #dddddd;\n    background-color: #222831;\n    padding-top: 30px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    // align-items: flex-start;\n    text-decoration: none;\n    margin-top: 1%;\n}\n.contacto{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n.linkedin__img{\n    width: 30px;\n    transition: transform .3s;\n}\n.contacto{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    margin-bottom: 10px;\n}\n.linkedin{\n    color: #dddddd;\n    text-decoration: none;\n    cursor: pointer;\n}\n@media only screen and (min-width: 600px) { // para cuando el haga click en mobile no se rote\n    .linkedin__img:hover{\n        transform:rotate(20deg);\n    }\n    .sociales h1{\n        margin-bottom: 10px;\n    }\n}\n@media only screen and (max-width: 600px) {\n    .footer__container{\n        flex-direction: column-reverse;\n        padding-bottom: 5px;\n        padding-left: 7px;\n        padding-top: 5px;\n        justify-content: space-around;\n    }\n    .contacto h1{\n        font-size: 20px;\n    }\n    .sociales{\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n    }\n    .sociales h1{\n        margin-right: 5px;\n            font-size: 20px;\n    }\n    .linkedin__img{\n        width: 30px;\n        margin-left: 5px;\n    }\n}"]}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbXBvbmVudHMvRm9vdGVyLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMscUNBQXFDLHNCQUFzQixtQkFBbUIsOEJBQThCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixrQ0FBa0MsMEJBQTBCLG1CQUFtQixHQUFHLDZCQUE2QixrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLGtDQUFrQyxnQkFBZ0IsK0NBQStDLHVDQUF1QywrQkFBK0IsdURBQXVELEdBQUcsNkJBQTZCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QixHQUFHLDZCQUE2QixtQkFBbUIsMEJBQTBCLG9CQUFvQixHQUFHLCtDQUErQyx3Q0FBd0MsdUNBQXVDLHVDQUF1QyxLQUFLLGtDQUFrQywwQkFBMEIsS0FBSyxHQUFHLDZDQUE2QyxzQ0FBc0MscUNBQXFDLDBCQUEwQix3QkFBd0IsdUJBQXVCLG9DQUFvQyxLQUFLLGtDQUFrQyxzQkFBc0IsS0FBSywrQkFBK0Isb0JBQW9CLDBCQUEwQiwwQkFBMEIsS0FBSyxrQ0FBa0Msd0JBQXdCLHNCQUFzQixLQUFLLG9DQUFvQyxrQkFBa0IsdUJBQXVCLEtBQUssR0FBRyxPQUFPLGdLQUFnSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLHdFQUF3RSx3QkFBd0IscUJBQXFCLGdDQUFnQyx3QkFBd0Isa0JBQWtCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLGlDQUFpQyw0QkFBNEIscUJBQXFCLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLDhCQUE4QixHQUFHLGlCQUFpQixrQkFBa0IsZ0NBQWdDLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLG9DQUFvQywwQkFBMEIsR0FBRyxZQUFZLHFCQUFxQiw0QkFBNEIsc0JBQXNCLEdBQUcsNkNBQTZDLDZFQUE2RSxrQ0FBa0MsT0FBTyxtQkFBbUIsOEJBQThCLE9BQU8sR0FBRyw2Q0FBNkMseUJBQXlCLHlDQUF5Qyw4QkFBOEIsNEJBQTRCLDJCQUEyQix3Q0FBd0MsT0FBTyxtQkFBbUIsMEJBQTBCLE9BQU8sZ0JBQWdCLHdCQUF3Qiw4QkFBOEIsOEJBQThCLE9BQU8sbUJBQW1CLDRCQUE0Qiw4QkFBOEIsT0FBTyxxQkFBcUIsc0JBQXNCLDJCQUEyQixPQUFPLEdBQUcsR0FBRztBQUNoMkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjViZWRkZmIwNjQ2Nzg5M2NlZTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuRm9vdGVyX2Zvb3Rlcl9fY29udGFpbmVyX18yMG00SCB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGNvbG9yOiAjZGRkZGRkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxufVxcblxcbi5Gb290ZXJfY29udGFjdG9fXzFrYTlaIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5Gb290ZXJfbGlua2VkaW5fX2ltZ19fMXdTSTEge1xcbiAgd2lkdGg6IDMwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuLkZvb3Rlcl9jb250YWN0b19fMWthOVoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5Gb290ZXJfbGlua2VkaW5fXzJBeWVYIHtcXG4gIGNvbG9yOiAjZGRkZGRkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAuRm9vdGVyX2xpbmtlZGluX19pbWdfXzF3U0kxOmhvdmVyIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbiAgfVxcblxcbiAgLkZvb3Rlcl9zb2NpYWxlc19fMmF1OGggaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuRm9vdGVyX2Zvb3Rlcl9fY29udGFpbmVyX18yMG00SCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLkZvb3Rlcl9jb250YWN0b19fMWthOVogaDEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAuRm9vdGVyX3NvY2lhbGVzX18yYXU4aCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuRm9vdGVyX3NvY2lhbGVzX18yYXU4aCBoMSB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAuRm9vdGVyX2xpbmtlZGluX19pbWdfXzF3U0kxIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9tbnQvYy9Vc2Vycy9KdWFuL0RvY3VtZW50cy9wcm9qZWN0b3MvbG9zIGJ1bmVvcyBwcm95ZWN0b3MvbmV0eHBvcnRhL3B1YmxpYy9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJO0lBQ0ksZ0NBQUE7WUFBQSx3QkFBQTtFQUtOOztFQUhFO0lBQ0ksbUJBQUE7RUFNTjtBQUNGO0FBSkE7RUFDSTtJQUNJLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsNkJBQUE7RUFNTjs7RUFKRTtJQUNJLGVBQUE7RUFPTjs7RUFMRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBUU47O0VBTkU7SUFDSSxpQkFBQTtJQUNJLGVBQUE7RUFTVjs7RUFQRTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQVVOO0FBQ0ZcIixcImZpbGVcIjpcIkZvb3Rlci5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9vdGVyX19jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgLy8gYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxufVxcbi5jb250YWN0b3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5saW5rZWRpbl9faW1ne1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcXG59XFxuLmNvbnRhY3Rve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmxpbmtlZGlue1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHsgLy8gcGFyYSBjdWFuZG8gZWwgaGFnYSBjbGljayBlbiBtb2JpbGUgbm8gc2Ugcm90ZVxcbiAgICAubGlua2VkaW5fX2ltZzpob3ZlcntcXG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMjBkZWcpO1xcbiAgICB9XFxuICAgIC5zb2NpYWxlcyBoMXtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuZm9vdGVyX19jb250YWluZXJ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIH1cXG4gICAgLmNvbnRhY3RvIGgxe1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5zb2NpYWxlc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuc29jaWFsZXMgaDF7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmxpbmtlZGluX19pbWd7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIH1cXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiZm9vdGVyX19jb250YWluZXJcIjogXCJGb290ZXJfZm9vdGVyX19jb250YWluZXJfXzIwbTRIXCIsXG5cdFwiY29udGFjdG9cIjogXCJGb290ZXJfY29udGFjdG9fXzFrYTlaXCIsXG5cdFwibGlua2VkaW5fX2ltZ1wiOiBcIkZvb3Rlcl9saW5rZWRpbl9faW1nX18xd1NJMVwiLFxuXHRcImxpbmtlZGluXCI6IFwiRm9vdGVyX2xpbmtlZGluX18yQXllWFwiLFxuXHRcInNvY2lhbGVzXCI6IFwiRm9vdGVyX3NvY2lhbGVzX18yYXU4aFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==