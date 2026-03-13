/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/users/route";
exports.ids = ["app/api/admin/users/route"];
exports.modules = {

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("better-sqlite3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Casa_Desktop_Gore_Books_src_app_api_admin_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/admin/users/route.ts */ \"(rsc)/./src/app/api/admin/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/users/route\",\n        pathname: \"/api/admin/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/users/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Casa\\\\Desktop\\\\Gore Books\\\\src\\\\app\\\\api\\\\admin\\\\users\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Casa_Desktop_Gore_Books_src_app_api_admin_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnVzZXJzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnVzZXJzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDYXNhJTVDRGVza3RvcCU1Q0dvcmUlMjBCb29rcyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQ2FzYSU1Q0Rlc2t0b3AlNUNHb3JlJTIwQm9va3MmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzJCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxDYXNhXFxcXERlc2t0b3BcXFxcR29yZSBCb29rc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFx1c2Vyc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vdXNlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi91c2Vyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vdXNlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxDYXNhXFxcXERlc2t0b3BcXFxcR29yZSBCb29rc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFx1c2Vyc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/admin/users/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/admin/users/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/session */ \"(rsc)/./src/lib/session.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n\n\nasync function GET() {\n    const session = await (0,_lib_session__WEBPACK_IMPORTED_MODULE_1__.getAdminSession)();\n    if (!session.isAdmin) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'No autorizado'\n        }, {\n            status: 401\n        });\n    }\n    try {\n        // Fetch users with order stats\n        // Note: price is stored as string '12,99', so parsing for sum is tricky in pure SQLite without extension but we can get counts\n        const users = _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prepare(`\n      SELECT \n        u.id, \n        u.email, \n        u.created_at,\n        (SELECT COUNT(*) FROM orders WHERE user_id = u.id) as order_count\n      FROM users u\n      ORDER BY u.created_at DESC\n    `).all();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(users);\n    } catch (error) {\n        console.error(\"Users fetch error\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Error del servidor'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hZG1pbi91c2Vycy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0s7QUFDdEI7QUFFbkIsZUFBZUc7SUFDcEIsTUFBTUMsVUFBVSxNQUFNSCw2REFBZUE7SUFDckMsSUFBSSxDQUFDRyxRQUFRQyxPQUFPLEVBQUU7UUFDcEIsT0FBT0wscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3JFO0lBRUEsSUFBSTtRQUNGLCtCQUErQjtRQUMvQiwrSEFBK0g7UUFDL0gsTUFBTUMsUUFBUVAsK0NBQUVBLENBQUNRLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7OztJQVExQixDQUFDLEVBQUVDLEdBQUc7UUFFTixPQUFPWCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDRztJQUMzQixFQUFFLE9BQU9GLE9BQU87UUFDZEssUUFBUUwsS0FBSyxDQUFDLHFCQUFxQkE7UUFDbkMsT0FBT1AscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzFFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2FzYVxcRGVza3RvcFxcR29yZSBCb29rc1xcc3JjXFxhcHBcXGFwaVxcYWRtaW5cXHVzZXJzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRBZG1pblNlc3Npb24gfSBmcm9tICdAL2xpYi9zZXNzaW9uJztcbmltcG9ydCBkYiBmcm9tICdAL2xpYi9kYic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRBZG1pblNlc3Npb24oKTtcbiAgaWYgKCFzZXNzaW9uLmlzQWRtaW4pIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vIGF1dG9yaXphZG8nIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIEZldGNoIHVzZXJzIHdpdGggb3JkZXIgc3RhdHNcbiAgICAvLyBOb3RlOiBwcmljZSBpcyBzdG9yZWQgYXMgc3RyaW5nICcxMiw5OScsIHNvIHBhcnNpbmcgZm9yIHN1bSBpcyB0cmlja3kgaW4gcHVyZSBTUUxpdGUgd2l0aG91dCBleHRlbnNpb24gYnV0IHdlIGNhbiBnZXQgY291bnRzXG4gICAgY29uc3QgdXNlcnMgPSBkYi5wcmVwYXJlKGBcbiAgICAgIFNFTEVDVCBcbiAgICAgICAgdS5pZCwgXG4gICAgICAgIHUuZW1haWwsIFxuICAgICAgICB1LmNyZWF0ZWRfYXQsXG4gICAgICAgIChTRUxFQ1QgQ09VTlQoKikgRlJPTSBvcmRlcnMgV0hFUkUgdXNlcl9pZCA9IHUuaWQpIGFzIG9yZGVyX2NvdW50XG4gICAgICBGUk9NIHVzZXJzIHVcbiAgICAgIE9SREVSIEJZIHUuY3JlYXRlZF9hdCBERVNDXG4gICAgYCkuYWxsKCk7XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVzZXJzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVXNlcnMgZmV0Y2ggZXJyb3JcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRXJyb3IgZGVsIHNlcnZpZG9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0QWRtaW5TZXNzaW9uIiwiZGIiLCJHRVQiLCJzZXNzaW9uIiwiaXNBZG1pbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInVzZXJzIiwicHJlcGFyZSIsImFsbCIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/admin/users/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initDB: () => (/* binding */ initDB)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DB_PATH = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'gorebooks.db');\n// Ensure database directory exists (if it were in a subfolder)\n// In this case it's in the root.\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())(DB_PATH);\ndb.pragma('journal_mode = WAL');\n// Initialize Tables\nfunction initDB() {\n    // Users Table\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS users (\n      id TEXT PRIMARY KEY,\n      email TEXT UNIQUE NOT NULL,\n      password TEXT NOT NULL,\n      role TEXT DEFAULT 'user',\n      created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )\n  `);\n    // Orders Table (Sensitive fields will be stored encrypted)\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS orders (\n      id TEXT PRIMARY KEY,\n      user_id TEXT,\n      book_id TEXT,\n      book_title TEXT,\n      format TEXT,\n      price TEXT,\n      full_name_enc TEXT,\n      address_enc TEXT,\n      portal_enc TEXT,\n      piso_enc TEXT,\n      zip_enc TEXT,\n      city_enc TEXT,\n      province_enc TEXT,\n      phone_enc TEXT,\n      delivery_time_enc TEXT,\n      notes_enc TEXT,\n      status TEXT DEFAULT 'pending',\n      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,\n      FOREIGN KEY(user_id) REFERENCES users(id)\n    )\n  `);\n    // Site Config Table (Wordpress-style CMS)\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS site_config (\n      key TEXT PRIMARY KEY,\n      value TEXT,\n      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )\n  `);\n    // Products Table (Unified Books & Merch)\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS products (\n      id TEXT PRIMARY KEY,\n      type TEXT DEFAULT 'book', -- 'book' or 'merch'\n      slug TEXT UNIQUE NOT NULL,\n      title TEXT NOT NULL,\n      subtitle TEXT,\n      description TEXT,\n      synopsis TEXT,\n      image TEXT,\n      back_image TEXT,\n      price TEXT,\n      original_price TEXT, -- For offers/sales\n      stock INTEGER DEFAULT 0,\n      is_upcoming INTEGER DEFAULT 0,\n      is_pack INTEGER DEFAULT 0,\n      is_featured INTEGER DEFAULT 0,\n      category TEXT,\n      series TEXT,\n      series_number INTEGER,\n      formats_json TEXT, -- For books: Kindle, Tapa Blanda, etc.\n      variants_json TEXT, -- For merch: Sizes, Colors, etc.\n      characters_json TEXT, -- For books\n      amazon_url TEXT,\n      created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )\n  `);\n    // Default Config\n    const defaults = [\n        {\n            key: 'site_title',\n            value: 'Gore Books'\n        },\n        {\n            key: 'bizum_number',\n            value: '+34 600 000 000'\n        },\n        {\n            key: 'bank_iban',\n            value: 'ES00 0000 0000 0000 0000 0000'\n        },\n        {\n            key: 'bank_holder',\n            value: 'Jesús Fernández Rodríguez'\n        }\n    ];\n    const check = db.prepare('SELECT COUNT(*) as count FROM site_config').get();\n    if (check.count === 0) {\n        const insert = db.prepare('INSERT INTO site_config (key, value) VALUES (?, ?)');\n        for (const d of defaults){\n            insert.run(d.key, d.value);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNkO0FBR3hCLE1BQU1FLFVBQVVELGdEQUFTLENBQUNHLFFBQVFDLEdBQUcsSUFBSTtBQUV6QywrREFBK0Q7QUFDL0QsaUNBQWlDO0FBRWpDLE1BQU1DLEtBQUssSUFBSU4sdURBQVFBLENBQUNFO0FBQ3hCSSxHQUFHQyxNQUFNLENBQUM7QUFFVixvQkFBb0I7QUFDYixTQUFTQztJQUNkLGNBQWM7SUFDZEYsR0FBR0csSUFBSSxDQUFDLENBQUM7Ozs7Ozs7O0VBUVQsQ0FBQztJQUVELDJEQUEyRDtJQUMzREgsR0FBR0csSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQlQsQ0FBQztJQUVELDBDQUEwQztJQUMxQ0gsR0FBR0csSUFBSSxDQUFDLENBQUM7Ozs7OztFQU1ULENBQUM7SUFFRCx5Q0FBeUM7SUFDekNILEdBQUdHLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBCVCxDQUFDO0lBQ0QsaUJBQWlCO0lBQ2pCLE1BQU1DLFdBQVc7UUFDZjtZQUFFQyxLQUFLO1lBQWNDLE9BQU87UUFBYTtRQUN6QztZQUFFRCxLQUFLO1lBQWdCQyxPQUFPO1FBQWtCO1FBQ2hEO1lBQUVELEtBQUs7WUFBYUMsT0FBTztRQUFnQztRQUMzRDtZQUFFRCxLQUFLO1lBQWVDLE9BQU87UUFBNEI7S0FDMUQ7SUFFRCxNQUFNQyxRQUFRUCxHQUFHUSxPQUFPLENBQUMsNkNBQTZDQyxHQUFHO0lBQ3pFLElBQUlGLE1BQU1HLEtBQUssS0FBSyxHQUFHO1FBQ3JCLE1BQU1DLFNBQVNYLEdBQUdRLE9BQU8sQ0FBQztRQUMxQixLQUFLLE1BQU1JLEtBQUtSLFNBQVU7WUFDeEJPLE9BQU9FLEdBQUcsQ0FBQ0QsRUFBRVAsR0FBRyxFQUFFTyxFQUFFTixLQUFLO1FBQzNCO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlTixFQUFFQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXENhc2FcXERlc2t0b3BcXEdvcmUgQm9va3NcXHNyY1xcbGliXFxkYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YWJhc2UgZnJvbSAnYmV0dGVyLXNxbGl0ZTMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCBEQl9QQVRIID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdnb3JlYm9va3MuZGInKTtcblxuLy8gRW5zdXJlIGRhdGFiYXNlIGRpcmVjdG9yeSBleGlzdHMgKGlmIGl0IHdlcmUgaW4gYSBzdWJmb2xkZXIpXG4vLyBJbiB0aGlzIGNhc2UgaXQncyBpbiB0aGUgcm9vdC5cblxuY29uc3QgZGIgPSBuZXcgRGF0YWJhc2UoREJfUEFUSCk7XG5kYi5wcmFnbWEoJ2pvdXJuYWxfbW9kZSA9IFdBTCcpO1xuXG4vLyBJbml0aWFsaXplIFRhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIGluaXREQigpIHtcbiAgLy8gVXNlcnMgVGFibGVcbiAgZGIuZXhlYyhgXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXNlcnMgKFxuICAgICAgaWQgVEVYVCBQUklNQVJZIEtFWSxcbiAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgcGFzc3dvcmQgVEVYVCBOT1QgTlVMTCxcbiAgICAgIHJvbGUgVEVYVCBERUZBVUxUICd1c2VyJyxcbiAgICAgIGNyZWF0ZWRfYXQgREFURVRJTUUgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUFxuICAgIClcbiAgYCk7XG5cbiAgLy8gT3JkZXJzIFRhYmxlIChTZW5zaXRpdmUgZmllbGRzIHdpbGwgYmUgc3RvcmVkIGVuY3J5cHRlZClcbiAgZGIuZXhlYyhgXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgb3JkZXJzIChcbiAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICB1c2VyX2lkIFRFWFQsXG4gICAgICBib29rX2lkIFRFWFQsXG4gICAgICBib29rX3RpdGxlIFRFWFQsXG4gICAgICBmb3JtYXQgVEVYVCxcbiAgICAgIHByaWNlIFRFWFQsXG4gICAgICBmdWxsX25hbWVfZW5jIFRFWFQsXG4gICAgICBhZGRyZXNzX2VuYyBURVhULFxuICAgICAgcG9ydGFsX2VuYyBURVhULFxuICAgICAgcGlzb19lbmMgVEVYVCxcbiAgICAgIHppcF9lbmMgVEVYVCxcbiAgICAgIGNpdHlfZW5jIFRFWFQsXG4gICAgICBwcm92aW5jZV9lbmMgVEVYVCxcbiAgICAgIHBob25lX2VuYyBURVhULFxuICAgICAgZGVsaXZlcnlfdGltZV9lbmMgVEVYVCxcbiAgICAgIG5vdGVzX2VuYyBURVhULFxuICAgICAgc3RhdHVzIFRFWFQgREVGQVVMVCAncGVuZGluZycsXG4gICAgICBjcmVhdGVkX2F0IERBVEVUSU1FIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVAsXG4gICAgICBGT1JFSUdOIEtFWSh1c2VyX2lkKSBSRUZFUkVOQ0VTIHVzZXJzKGlkKVxuICAgIClcbiAgYCk7XG5cbiAgLy8gU2l0ZSBDb25maWcgVGFibGUgKFdvcmRwcmVzcy1zdHlsZSBDTVMpXG4gIGRiLmV4ZWMoYFxuICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHNpdGVfY29uZmlnIChcbiAgICAgIGtleSBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgdmFsdWUgVEVYVCxcbiAgICAgIHVwZGF0ZWRfYXQgREFURVRJTUUgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUFxuICAgIClcbiAgYCk7XG5cbiAgLy8gUHJvZHVjdHMgVGFibGUgKFVuaWZpZWQgQm9va3MgJiBNZXJjaClcbiAgZGIuZXhlYyhgXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcHJvZHVjdHMgKFxuICAgICAgaWQgVEVYVCBQUklNQVJZIEtFWSxcbiAgICAgIHR5cGUgVEVYVCBERUZBVUxUICdib29rJywgLS0gJ2Jvb2snIG9yICdtZXJjaCdcbiAgICAgIHNsdWcgVEVYVCBVTklRVUUgTk9UIE5VTEwsXG4gICAgICB0aXRsZSBURVhUIE5PVCBOVUxMLFxuICAgICAgc3VidGl0bGUgVEVYVCxcbiAgICAgIGRlc2NyaXB0aW9uIFRFWFQsXG4gICAgICBzeW5vcHNpcyBURVhULFxuICAgICAgaW1hZ2UgVEVYVCxcbiAgICAgIGJhY2tfaW1hZ2UgVEVYVCxcbiAgICAgIHByaWNlIFRFWFQsXG4gICAgICBvcmlnaW5hbF9wcmljZSBURVhULCAtLSBGb3Igb2ZmZXJzL3NhbGVzXG4gICAgICBzdG9jayBJTlRFR0VSIERFRkFVTFQgMCxcbiAgICAgIGlzX3VwY29taW5nIElOVEVHRVIgREVGQVVMVCAwLFxuICAgICAgaXNfcGFjayBJTlRFR0VSIERFRkFVTFQgMCxcbiAgICAgIGlzX2ZlYXR1cmVkIElOVEVHRVIgREVGQVVMVCAwLFxuICAgICAgY2F0ZWdvcnkgVEVYVCxcbiAgICAgIHNlcmllcyBURVhULFxuICAgICAgc2VyaWVzX251bWJlciBJTlRFR0VSLFxuICAgICAgZm9ybWF0c19qc29uIFRFWFQsIC0tIEZvciBib29rczogS2luZGxlLCBUYXBhIEJsYW5kYSwgZXRjLlxuICAgICAgdmFyaWFudHNfanNvbiBURVhULCAtLSBGb3IgbWVyY2g6IFNpemVzLCBDb2xvcnMsIGV0Yy5cbiAgICAgIGNoYXJhY3RlcnNfanNvbiBURVhULCAtLSBGb3IgYm9va3NcbiAgICAgIGFtYXpvbl91cmwgVEVYVCxcbiAgICAgIGNyZWF0ZWRfYXQgREFURVRJTUUgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUFxuICAgIClcbiAgYCk7XG4gIC8vIERlZmF1bHQgQ29uZmlnXG4gIGNvbnN0IGRlZmF1bHRzID0gW1xuICAgIHsga2V5OiAnc2l0ZV90aXRsZScsIHZhbHVlOiAnR29yZSBCb29rcycgfSxcbiAgICB7IGtleTogJ2JpenVtX251bWJlcicsIHZhbHVlOiAnKzM0IDYwMCAwMDAgMDAwJyB9LFxuICAgIHsga2V5OiAnYmFua19pYmFuJywgdmFsdWU6ICdFUzAwIDAwMDAgMDAwMCAwMDAwIDAwMDAgMDAwMCcgfSxcbiAgICB7IGtleTogJ2JhbmtfaG9sZGVyJywgdmFsdWU6ICdKZXPDunMgRmVybsOhbmRleiBSb2Ryw61ndWV6JyB9LFxuICBdO1xuXG4gIGNvbnN0IGNoZWNrID0gZGIucHJlcGFyZSgnU0VMRUNUIENPVU5UKCopIGFzIGNvdW50IEZST00gc2l0ZV9jb25maWcnKS5nZXQoKSBhcyB7IGNvdW50OiBudW1iZXIgfTtcbiAgaWYgKGNoZWNrLmNvdW50ID09PSAwKSB7XG4gICAgY29uc3QgaW5zZXJ0ID0gZGIucHJlcGFyZSgnSU5TRVJUIElOVE8gc2l0ZV9jb25maWcgKGtleSwgdmFsdWUpIFZBTFVFUyAoPywgPyknKTtcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGVmYXVsdHMpIHtcbiAgICAgIGluc2VydC5ydW4oZC5rZXksIGQudmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJEYXRhYmFzZSIsInBhdGgiLCJEQl9QQVRIIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYiIsInByYWdtYSIsImluaXREQiIsImV4ZWMiLCJkZWZhdWx0cyIsImtleSIsInZhbHVlIiwiY2hlY2siLCJwcmVwYXJlIiwiZ2V0IiwiY291bnQiLCJpbnNlcnQiLCJkIiwicnVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/session.ts":
/*!****************************!*\
  !*** ./src/lib/session.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAdminSession: () => (/* binding */ getAdminSession),\n/* harmony export */   sessionOptions: () => (/* binding */ sessionOptions)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! iron-session */ \"(rsc)/./node_modules/iron-session/dist/index.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst SESSION_COOKIE_NAME = 'gorebooks_admin';\nconst sessionOptions = {\n    cookieName: SESSION_COOKIE_NAME,\n    password: process.env.IRON_SESSION_PASSWORD ?? '00000000000000000000000000000000',\n    cookieOptions: {\n        secure: \"development\" === 'production'\n    }\n};\nasync function getAdminSession() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_1__.getIronSession)(cookieStore, sessionOptions);\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3Nlc3Npb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4RDtBQUN2QjtBQU12QyxNQUFNRSxzQkFBc0I7QUFFckIsTUFBTUMsaUJBQWlDO0lBQzVDQyxZQUFZRjtJQUNaRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQixJQUFJO0lBQy9DQyxlQUFlO1FBQ2JDLFFBQVFKLGtCQUF5QjtJQUNuQztBQUNGLEVBQUU7QUFFSyxlQUFlSztJQUNwQixNQUFNQyxjQUFjLE1BQU1YLHFEQUFPQTtJQUNqQyxNQUFNWSxVQUFVLE1BQU1iLDREQUFjQSxDQUFlWSxhQUFhVDtJQUNoRSxPQUFPVTtBQUNUIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXENhc2FcXERlc2t0b3BcXEdvcmUgQm9va3NcXHNyY1xcbGliXFxzZXNzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldElyb25TZXNzaW9uLCBTZXNzaW9uT3B0aW9ucyB9IGZyb20gJ2lyb24tc2Vzc2lvbic7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcblxuZXhwb3J0IGludGVyZmFjZSBBZG1pblNlc3Npb24ge1xuICBpc0FkbWluPzogYm9vbGVhbjtcbn1cblxuY29uc3QgU0VTU0lPTl9DT09LSUVfTkFNRSA9ICdnb3JlYm9va3NfYWRtaW4nO1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbk9wdGlvbnM6IFNlc3Npb25PcHRpb25zID0ge1xuICBjb29raWVOYW1lOiBTRVNTSU9OX0NPT0tJRV9OQU1FLFxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuSVJPTl9TRVNTSU9OX1BBU1NXT1JEID8/ICcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcsXG4gIGNvb2tpZU9wdGlvbnM6IHtcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gIH0sXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRtaW5TZXNzaW9uKCkge1xuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uPEFkbWluU2Vzc2lvbj4oY29va2llU3RvcmUsIHNlc3Npb25PcHRpb25zKTtcbiAgcmV0dXJuIHNlc3Npb247XG59XG4iXSwibmFtZXMiOlsiZ2V0SXJvblNlc3Npb24iLCJjb29raWVzIiwiU0VTU0lPTl9DT09LSUVfTkFNRSIsInNlc3Npb25PcHRpb25zIiwiY29va2llTmFtZSIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsIklST05fU0VTU0lPTl9QQVNTV09SRCIsImNvb2tpZU9wdGlvbnMiLCJzZWN1cmUiLCJnZXRBZG1pblNlc3Npb24iLCJjb29raWVTdG9yZSIsInNlc3Npb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/session.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/iron-webcrypto","vendor-chunks/iron-session","vendor-chunks/cookie","vendor-chunks/uncrypto"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();