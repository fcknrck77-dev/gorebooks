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
exports.id = "app/api/config/route";
exports.ids = ["app/api/config/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconfig%2Froute&page=%2Fapi%2Fconfig%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconfig%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconfig%2Froute&page=%2Fapi%2Fconfig%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconfig%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Casa_Desktop_Gore_Books_src_app_api_config_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/config/route.ts */ \"(rsc)/./src/app/api/config/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/config/route\",\n        pathname: \"/api/config\",\n        filename: \"route\",\n        bundlePath: \"app/api/config/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Casa\\\\Desktop\\\\Gore Books\\\\src\\\\app\\\\api\\\\config\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Casa_Desktop_Gore_Books_src_app_api_config_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb25maWclMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNvbmZpZyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNvbmZpZyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDYXNhJTVDRGVza3RvcCU1Q0dvcmUlMjBCb29rcyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQ2FzYSU1Q0Rlc2t0b3AlNUNHb3JlJTIwQm9va3MmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3FCO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxDYXNhXFxcXERlc2t0b3BcXFxcR29yZSBCb29rc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjb25maWdcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvbmZpZy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvbmZpZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29uZmlnL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQ2FzYVxcXFxEZXNrdG9wXFxcXEdvcmUgQm9va3NcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY29uZmlnXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconfig%2Froute&page=%2Fapi%2Fconfig%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconfig%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/config/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/config/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n\n// Public API: returns all non-sensitive config values for the frontend\nasync function GET() {\n    try {\n        const config = _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prepare('SELECT key, value FROM site_config').all();\n        const configMap = config.reduce((acc, item)=>{\n            acc[item.key] = item.value;\n            return acc;\n        }, {});\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(configMap, {\n            headers: {\n                'Cache-Control': 'no-store, must-revalidate'\n            }\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({}, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb25maWcvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ2pCO0FBRTFCLHVFQUF1RTtBQUNoRSxlQUFlRTtJQUNwQixJQUFJO1FBQ0YsTUFBTUMsU0FBU0YsK0NBQUVBLENBQUNHLE9BQU8sQ0FBQyxzQ0FBc0NDLEdBQUc7UUFDbkUsTUFBTUMsWUFBWUgsT0FBT0ksTUFBTSxDQUFDLENBQUNDLEtBQVVDO1lBQ3pDRCxHQUFHLENBQUNDLEtBQUtDLEdBQUcsQ0FBQyxHQUFHRCxLQUFLRSxLQUFLO1lBQzFCLE9BQU9IO1FBQ1QsR0FBRyxDQUFDO1FBQ0osT0FBT1IscURBQVlBLENBQUNZLElBQUksQ0FBQ04sV0FBVztZQUNsQ08sU0FBUztnQkFBRSxpQkFBaUI7WUFBNEI7UUFDMUQ7SUFDRixFQUFFLE9BQU9DLEdBQUc7UUFDVixPQUFPZCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDLENBQUMsR0FBRztZQUFFRyxRQUFRO1FBQUk7SUFDN0M7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxDYXNhXFxEZXNrdG9wXFxHb3JlIEJvb2tzXFxzcmNcXGFwcFxcYXBpXFxjb25maWdcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBkYiBmcm9tICdAL2xpYi9kYic7XG5cbi8vIFB1YmxpYyBBUEk6IHJldHVybnMgYWxsIG5vbi1zZW5zaXRpdmUgY29uZmlnIHZhbHVlcyBmb3IgdGhlIGZyb250ZW5kXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGRiLnByZXBhcmUoJ1NFTEVDVCBrZXksIHZhbHVlIEZST00gc2l0ZV9jb25maWcnKS5hbGwoKSBhcyBhbnlbXTtcbiAgICBjb25zdCBjb25maWdNYXAgPSBjb25maWcucmVkdWNlKChhY2M6IGFueSwgaXRlbTogYW55KSA9PiB7XG4gICAgICBhY2NbaXRlbS5rZXldID0gaXRlbS52YWx1ZTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihjb25maWdNYXAsIHtcbiAgICAgIGhlYWRlcnM6IHsgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZScgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHt9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGIiLCJHRVQiLCJjb25maWciLCJwcmVwYXJlIiwiYWxsIiwiY29uZmlnTWFwIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsImtleSIsInZhbHVlIiwianNvbiIsImhlYWRlcnMiLCJlIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/config/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initDB: () => (/* binding */ initDB)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DB_PATH = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'gorebooks.db');\n// Ensure database directory exists (if it were in a subfolder)\n// In this case it's in the root.\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())(DB_PATH);\ndb.pragma('journal_mode = WAL');\n// Initialize Tables\nfunction initDB() {\n    // Users Table\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS users (\n      id TEXT PRIMARY KEY,\n      email TEXT UNIQUE NOT NULL,\n      password TEXT NOT NULL,\n      role TEXT DEFAULT 'user',\n      created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )\n  `);\n    // Orders Table (Sensitive fields will be stored encrypted)\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS orders (\n      id TEXT PRIMARY KEY,\n      user_id TEXT,\n      book_id TEXT,\n      book_title TEXT,\n      format TEXT,\n      price TEXT,\n      full_name_enc TEXT,\n      address_enc TEXT,\n      portal_enc TEXT,\n      piso_enc TEXT,\n      zip_enc TEXT,\n      city_enc TEXT,\n      province_enc TEXT,\n      phone_enc TEXT,\n      delivery_time_enc TEXT,\n      notes_enc TEXT,\n      status TEXT DEFAULT 'pending',\n      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,\n      FOREIGN KEY(user_id) REFERENCES users(id)\n    )\n  `);\n    // Site Config Table (Wordpress-style CMS)\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS site_config (\n      key TEXT PRIMARY KEY,\n      value TEXT,\n      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )\n  `);\n    // Products Table (Unified Books & Merch)\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS products (\n      id TEXT PRIMARY KEY,\n      type TEXT DEFAULT 'book', -- 'book' or 'merch'\n      slug TEXT UNIQUE NOT NULL,\n      title TEXT NOT NULL,\n      subtitle TEXT,\n      description TEXT,\n      synopsis TEXT,\n      image TEXT,\n      back_image TEXT,\n      price TEXT,\n      original_price TEXT, -- For offers/sales\n      stock INTEGER DEFAULT 0,\n      is_upcoming INTEGER DEFAULT 0,\n      is_pack INTEGER DEFAULT 0,\n      is_featured INTEGER DEFAULT 0,\n      category TEXT,\n      series TEXT,\n      series_number INTEGER,\n      formats_json TEXT, -- For books: Kindle, Tapa Blanda, etc.\n      variants_json TEXT, -- For merch: Sizes, Colors, etc.\n      characters_json TEXT, -- For books\n      amazon_url TEXT,\n      created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )\n  `);\n    // Default Config\n    const defaults = [\n        {\n            key: 'site_title',\n            value: 'Gore Books'\n        },\n        {\n            key: 'bizum_number',\n            value: '+34 600 000 000'\n        },\n        {\n            key: 'bank_iban',\n            value: 'ES00 0000 0000 0000 0000 0000'\n        },\n        {\n            key: 'bank_holder',\n            value: 'Jesús Fernández Rodríguez'\n        }\n    ];\n    const check = db.prepare('SELECT COUNT(*) as count FROM site_config').get();\n    if (check.count === 0) {\n        const insert = db.prepare('INSERT INTO site_config (key, value) VALUES (?, ?)');\n        for (const d of defaults){\n            insert.run(d.key, d.value);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNkO0FBR3hCLE1BQU1FLFVBQVVELGdEQUFTLENBQUNHLFFBQVFDLEdBQUcsSUFBSTtBQUV6QywrREFBK0Q7QUFDL0QsaUNBQWlDO0FBRWpDLE1BQU1DLEtBQUssSUFBSU4sdURBQVFBLENBQUNFO0FBQ3hCSSxHQUFHQyxNQUFNLENBQUM7QUFFVixvQkFBb0I7QUFDYixTQUFTQztJQUNkLGNBQWM7SUFDZEYsR0FBR0csSUFBSSxDQUFDLENBQUM7Ozs7Ozs7O0VBUVQsQ0FBQztJQUVELDJEQUEyRDtJQUMzREgsR0FBR0csSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQlQsQ0FBQztJQUVELDBDQUEwQztJQUMxQ0gsR0FBR0csSUFBSSxDQUFDLENBQUM7Ozs7OztFQU1ULENBQUM7SUFFRCx5Q0FBeUM7SUFDekNILEdBQUdHLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBCVCxDQUFDO0lBQ0QsaUJBQWlCO0lBQ2pCLE1BQU1DLFdBQVc7UUFDZjtZQUFFQyxLQUFLO1lBQWNDLE9BQU87UUFBYTtRQUN6QztZQUFFRCxLQUFLO1lBQWdCQyxPQUFPO1FBQWtCO1FBQ2hEO1lBQUVELEtBQUs7WUFBYUMsT0FBTztRQUFnQztRQUMzRDtZQUFFRCxLQUFLO1lBQWVDLE9BQU87UUFBNEI7S0FDMUQ7SUFFRCxNQUFNQyxRQUFRUCxHQUFHUSxPQUFPLENBQUMsNkNBQTZDQyxHQUFHO0lBQ3pFLElBQUlGLE1BQU1HLEtBQUssS0FBSyxHQUFHO1FBQ3JCLE1BQU1DLFNBQVNYLEdBQUdRLE9BQU8sQ0FBQztRQUMxQixLQUFLLE1BQU1JLEtBQUtSLFNBQVU7WUFDeEJPLE9BQU9FLEdBQUcsQ0FBQ0QsRUFBRVAsR0FBRyxFQUFFTyxFQUFFTixLQUFLO1FBQzNCO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlTixFQUFFQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXENhc2FcXERlc2t0b3BcXEdvcmUgQm9va3NcXHNyY1xcbGliXFxkYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YWJhc2UgZnJvbSAnYmV0dGVyLXNxbGl0ZTMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCBEQl9QQVRIID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdnb3JlYm9va3MuZGInKTtcblxuLy8gRW5zdXJlIGRhdGFiYXNlIGRpcmVjdG9yeSBleGlzdHMgKGlmIGl0IHdlcmUgaW4gYSBzdWJmb2xkZXIpXG4vLyBJbiB0aGlzIGNhc2UgaXQncyBpbiB0aGUgcm9vdC5cblxuY29uc3QgZGIgPSBuZXcgRGF0YWJhc2UoREJfUEFUSCk7XG5kYi5wcmFnbWEoJ2pvdXJuYWxfbW9kZSA9IFdBTCcpO1xuXG4vLyBJbml0aWFsaXplIFRhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIGluaXREQigpIHtcbiAgLy8gVXNlcnMgVGFibGVcbiAgZGIuZXhlYyhgXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXNlcnMgKFxuICAgICAgaWQgVEVYVCBQUklNQVJZIEtFWSxcbiAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgcGFzc3dvcmQgVEVYVCBOT1QgTlVMTCxcbiAgICAgIHJvbGUgVEVYVCBERUZBVUxUICd1c2VyJyxcbiAgICAgIGNyZWF0ZWRfYXQgREFURVRJTUUgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUFxuICAgIClcbiAgYCk7XG5cbiAgLy8gT3JkZXJzIFRhYmxlIChTZW5zaXRpdmUgZmllbGRzIHdpbGwgYmUgc3RvcmVkIGVuY3J5cHRlZClcbiAgZGIuZXhlYyhgXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgb3JkZXJzIChcbiAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICB1c2VyX2lkIFRFWFQsXG4gICAgICBib29rX2lkIFRFWFQsXG4gICAgICBib29rX3RpdGxlIFRFWFQsXG4gICAgICBmb3JtYXQgVEVYVCxcbiAgICAgIHByaWNlIFRFWFQsXG4gICAgICBmdWxsX25hbWVfZW5jIFRFWFQsXG4gICAgICBhZGRyZXNzX2VuYyBURVhULFxuICAgICAgcG9ydGFsX2VuYyBURVhULFxuICAgICAgcGlzb19lbmMgVEVYVCxcbiAgICAgIHppcF9lbmMgVEVYVCxcbiAgICAgIGNpdHlfZW5jIFRFWFQsXG4gICAgICBwcm92aW5jZV9lbmMgVEVYVCxcbiAgICAgIHBob25lX2VuYyBURVhULFxuICAgICAgZGVsaXZlcnlfdGltZV9lbmMgVEVYVCxcbiAgICAgIG5vdGVzX2VuYyBURVhULFxuICAgICAgc3RhdHVzIFRFWFQgREVGQVVMVCAncGVuZGluZycsXG4gICAgICBjcmVhdGVkX2F0IERBVEVUSU1FIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVAsXG4gICAgICBGT1JFSUdOIEtFWSh1c2VyX2lkKSBSRUZFUkVOQ0VTIHVzZXJzKGlkKVxuICAgIClcbiAgYCk7XG5cbiAgLy8gU2l0ZSBDb25maWcgVGFibGUgKFdvcmRwcmVzcy1zdHlsZSBDTVMpXG4gIGRiLmV4ZWMoYFxuICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHNpdGVfY29uZmlnIChcbiAgICAgIGtleSBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgdmFsdWUgVEVYVCxcbiAgICAgIHVwZGF0ZWRfYXQgREFURVRJTUUgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUFxuICAgIClcbiAgYCk7XG5cbiAgLy8gUHJvZHVjdHMgVGFibGUgKFVuaWZpZWQgQm9va3MgJiBNZXJjaClcbiAgZGIuZXhlYyhgXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcHJvZHVjdHMgKFxuICAgICAgaWQgVEVYVCBQUklNQVJZIEtFWSxcbiAgICAgIHR5cGUgVEVYVCBERUZBVUxUICdib29rJywgLS0gJ2Jvb2snIG9yICdtZXJjaCdcbiAgICAgIHNsdWcgVEVYVCBVTklRVUUgTk9UIE5VTEwsXG4gICAgICB0aXRsZSBURVhUIE5PVCBOVUxMLFxuICAgICAgc3VidGl0bGUgVEVYVCxcbiAgICAgIGRlc2NyaXB0aW9uIFRFWFQsXG4gICAgICBzeW5vcHNpcyBURVhULFxuICAgICAgaW1hZ2UgVEVYVCxcbiAgICAgIGJhY2tfaW1hZ2UgVEVYVCxcbiAgICAgIHByaWNlIFRFWFQsXG4gICAgICBvcmlnaW5hbF9wcmljZSBURVhULCAtLSBGb3Igb2ZmZXJzL3NhbGVzXG4gICAgICBzdG9jayBJTlRFR0VSIERFRkFVTFQgMCxcbiAgICAgIGlzX3VwY29taW5nIElOVEVHRVIgREVGQVVMVCAwLFxuICAgICAgaXNfcGFjayBJTlRFR0VSIERFRkFVTFQgMCxcbiAgICAgIGlzX2ZlYXR1cmVkIElOVEVHRVIgREVGQVVMVCAwLFxuICAgICAgY2F0ZWdvcnkgVEVYVCxcbiAgICAgIHNlcmllcyBURVhULFxuICAgICAgc2VyaWVzX251bWJlciBJTlRFR0VSLFxuICAgICAgZm9ybWF0c19qc29uIFRFWFQsIC0tIEZvciBib29rczogS2luZGxlLCBUYXBhIEJsYW5kYSwgZXRjLlxuICAgICAgdmFyaWFudHNfanNvbiBURVhULCAtLSBGb3IgbWVyY2g6IFNpemVzLCBDb2xvcnMsIGV0Yy5cbiAgICAgIGNoYXJhY3RlcnNfanNvbiBURVhULCAtLSBGb3IgYm9va3NcbiAgICAgIGFtYXpvbl91cmwgVEVYVCxcbiAgICAgIGNyZWF0ZWRfYXQgREFURVRJTUUgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUFxuICAgIClcbiAgYCk7XG4gIC8vIERlZmF1bHQgQ29uZmlnXG4gIGNvbnN0IGRlZmF1bHRzID0gW1xuICAgIHsga2V5OiAnc2l0ZV90aXRsZScsIHZhbHVlOiAnR29yZSBCb29rcycgfSxcbiAgICB7IGtleTogJ2JpenVtX251bWJlcicsIHZhbHVlOiAnKzM0IDYwMCAwMDAgMDAwJyB9LFxuICAgIHsga2V5OiAnYmFua19pYmFuJywgdmFsdWU6ICdFUzAwIDAwMDAgMDAwMCAwMDAwIDAwMDAgMDAwMCcgfSxcbiAgICB7IGtleTogJ2JhbmtfaG9sZGVyJywgdmFsdWU6ICdKZXPDunMgRmVybsOhbmRleiBSb2Ryw61ndWV6JyB9LFxuICBdO1xuXG4gIGNvbnN0IGNoZWNrID0gZGIucHJlcGFyZSgnU0VMRUNUIENPVU5UKCopIGFzIGNvdW50IEZST00gc2l0ZV9jb25maWcnKS5nZXQoKSBhcyB7IGNvdW50OiBudW1iZXIgfTtcbiAgaWYgKGNoZWNrLmNvdW50ID09PSAwKSB7XG4gICAgY29uc3QgaW5zZXJ0ID0gZGIucHJlcGFyZSgnSU5TRVJUIElOVE8gc2l0ZV9jb25maWcgKGtleSwgdmFsdWUpIFZBTFVFUyAoPywgPyknKTtcbiAgICBmb3IgKGNvbnN0IGQgb2YgZGVmYXVsdHMpIHtcbiAgICAgIGluc2VydC5ydW4oZC5rZXksIGQudmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJEYXRhYmFzZSIsInBhdGgiLCJEQl9QQVRIIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYiIsInByYWdtYSIsImluaXREQiIsImV4ZWMiLCJkZWZhdWx0cyIsImtleSIsInZhbHVlIiwiY2hlY2siLCJwcmVwYXJlIiwiZ2V0IiwiY291bnQiLCJpbnNlcnQiLCJkIiwicnVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fconfig%2Froute&page=%2Fapi%2Fconfig%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconfig%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();