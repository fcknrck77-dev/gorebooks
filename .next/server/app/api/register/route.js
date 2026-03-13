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
exports.id = "app/api/register/route";
exports.ids = ["app/api/register/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Casa_Desktop_Gore_Books_src_app_api_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/register/route.ts */ \"(rsc)/./src/app/api/register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/register/route\",\n        pathname: \"/api/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/register/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Casa\\\\Desktop\\\\Gore Books\\\\src\\\\app\\\\api\\\\register\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Casa_Desktop_Gore_Books_src_app_api_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVnaXN0ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDYXNhJTVDRGVza3RvcCU1Q0dvcmUlMjBCb29rcyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQ2FzYSU1Q0Rlc2t0b3AlNUNHb3JlJTIwQm9va3MmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3VCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxDYXNhXFxcXERlc2t0b3BcXFxcR29yZSBCb29rc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyZWdpc3RlclxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmVnaXN0ZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yZWdpc3RlclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcmVnaXN0ZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxDYXNhXFxcXERlc2t0b3BcXFxcR29yZSBCb29rc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyZWdpc3RlclxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/register/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/register/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! iron-session */ \"(rsc)/./node_modules/iron-session/dist/index.js\");\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/session */ \"(rsc)/./src/lib/session.ts\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\n\n\n\n\nasync function POST(req) {\n    try {\n        const { email, password } = await req.json();\n        if (!email || !password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Email y contraseña requeridos'\n            }, {\n                status: 400\n            });\n        }\n        // Check if user exists\n        const existing = _lib_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].prepare('SELECT * FROM users WHERE email = ?').get(email);\n        if (existing) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'El email ya está registrado'\n            }, {\n                status: 400\n            });\n        }\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 10);\n        const userId = crypto__WEBPACK_IMPORTED_MODULE_1___default().randomUUID();\n        _lib_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].prepare('INSERT INTO users (id, email, password) VALUES (?, ?, ?)').run(userId, email, hashedPassword);\n        // Auto-login\n        const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_5__.cookies)();\n        const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_6__.getIronSession)(cookieStore, _lib_session__WEBPACK_IMPORTED_MODULE_4__.sessionOptions);\n        session.userId = userId;\n        session.email = email;\n        await session.save();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            userId\n        });\n    } catch (error) {\n        console.error('Registration error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Error en el servidor'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQzVCO0FBQ0E7QUFDRjtBQUNvQjtBQUNDO0FBQ1I7QUFFaEMsZUFBZU8sS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRixJQUFJRyxJQUFJO1FBRTFDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxVQUFVO1lBQ3ZCLE9BQU9WLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZ0MsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JGO1FBRUEsdUJBQXVCO1FBQ3ZCLE1BQU1DLFdBQVdYLCtDQUFFQSxDQUFDWSxPQUFPLENBQUMsdUNBQXVDQyxHQUFHLENBQUNQO1FBQ3ZFLElBQUlLLFVBQVU7WUFDWixPQUFPZCxxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQThCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNuRjtRQUVBLE1BQU1JLGlCQUFpQixNQUFNZixrREFBVyxDQUFDUSxVQUFVO1FBQ25ELE1BQU1TLFNBQVNsQix3REFBaUI7UUFFaENFLCtDQUFFQSxDQUFDWSxPQUFPLENBQUMsNERBQTRETSxHQUFHLENBQ3hFRixRQUNBVixPQUNBUTtRQUdGLGFBQWE7UUFDYixNQUFNSyxjQUFjLE1BQU1oQixxREFBT0E7UUFDakMsTUFBTWlCLFVBQVUsTUFBTW5CLDREQUFjQSxDQUFNa0IsYUFBYWpCLHdEQUFjQTtRQUNyRWtCLFFBQVFKLE1BQU0sR0FBR0E7UUFDakJJLFFBQVFkLEtBQUssR0FBR0E7UUFDaEIsTUFBTWMsUUFBUUMsSUFBSTtRQUVsQixPQUFPeEIscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFYyxTQUFTO1lBQU1OO1FBQU87SUFDbkQsRUFBRSxPQUFPUCxPQUFPO1FBQ2RjLFFBQVFkLEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3JDLE9BQU9aLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF1QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM1RTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXENhc2FcXERlc2t0b3BcXEdvcmUgQm9va3NcXHNyY1xcYXBwXFxhcGlcXHJlZ2lzdGVyXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IGRiIGZyb20gJ0AvbGliL2RiJztcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSAnaXJvbi1zZXNzaW9uJztcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zIH0gZnJvbSAnQC9saWIvc2Vzc2lvbic7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRW1haWwgeSBjb250cmFzZcOxYSByZXF1ZXJpZG9zJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHVzZXIgZXhpc3RzXG4gICAgY29uc3QgZXhpc3RpbmcgPSBkYi5wcmVwYXJlKCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGVtYWlsID0gPycpLmdldChlbWFpbCkgYXMgYW55O1xuICAgIGlmIChleGlzdGluZykge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdFbCBlbWFpbCB5YSBlc3TDoSByZWdpc3RyYWRvJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICBjb25zdCB1c2VySWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXG4gICAgZGIucHJlcGFyZSgnSU5TRVJUIElOVE8gdXNlcnMgKGlkLCBlbWFpbCwgcGFzc3dvcmQpIFZBTFVFUyAoPywgPywgPyknKS5ydW4oXG4gICAgICB1c2VySWQsXG4gICAgICBlbWFpbCxcbiAgICAgIGhhc2hlZFBhc3N3b3JkXG4gICAgKTtcblxuICAgIC8vIEF1dG8tbG9naW5cbiAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0SXJvblNlc3Npb248YW55Pihjb29raWVTdG9yZSwgc2Vzc2lvbk9wdGlvbnMpO1xuICAgIHNlc3Npb24udXNlcklkID0gdXNlcklkO1xuICAgIHNlc3Npb24uZW1haWwgPSBlbWFpbDtcbiAgICBhd2FpdCBzZXNzaW9uLnNhdmUoKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHVzZXJJZCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdSZWdpc3RyYXRpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRXJyb3IgZW4gZWwgc2Vydmlkb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjcnlwdG8iLCJiY3J5cHQiLCJkYiIsImdldElyb25TZXNzaW9uIiwic2Vzc2lvbk9wdGlvbnMiLCJjb29raWVzIiwiUE9TVCIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJleGlzdGluZyIsInByZXBhcmUiLCJnZXQiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJ1c2VySWQiLCJyYW5kb21VVUlEIiwicnVuIiwiY29va2llU3RvcmUiLCJzZXNzaW9uIiwic2F2ZSIsInN1Y2Nlc3MiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/register/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initDB: () => (/* binding */ initDB)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DB_PATH = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'gorebooks.db');\n// Ensure database directory exists (if it were in a subfolder)\n// In this case it's in the root.\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())(DB_PATH);\ndb.pragma('journal_mode = WAL');\n// Initialize Tables\nfunction initDB() {\n    // Users Table\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS users (\n      id TEXT PRIMARY KEY,\n      email TEXT UNIQUE NOT NULL,\n      password TEXT NOT NULL,\n      role TEXT DEFAULT 'user',\n      created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )\n  `);\n    // Orders Table (Sensitive fields will be stored encrypted)\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS orders (\n      id TEXT PRIMARY KEY,\n      user_id TEXT,\n      book_id TEXT,\n      book_title TEXT,\n      format TEXT,\n      price TEXT,\n      full_name_enc TEXT,\n      address_enc TEXT,\n      portal_enc TEXT,\n      piso_enc TEXT,\n      zip_enc TEXT,\n      city_enc TEXT,\n      province_enc TEXT,\n      phone_enc TEXT,\n      delivery_time_enc TEXT,\n      notes_enc TEXT,\n      status TEXT DEFAULT 'pending',\n      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,\n      FOREIGN KEY(user_id) REFERENCES users(id)\n    )\n  `);\n    // Site Config Table (Wordpress-style CMS)\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS site_config (\n      key TEXT PRIMARY KEY,\n      value TEXT,\n      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )\n  `);\n    // Books Table\n    db.exec(`\n    CREATE TABLE IF NOT EXISTS books (\n      id TEXT PRIMARY KEY,\n      slug TEXT UNIQUE,\n      title TEXT,\n      author TEXT,\n      price TEXT,\n      ebook_price TEXT,\n      pack_price TEXT,\n      image TEXT,\n      description TEXT,\n      category TEXT,\n      is_pack INTEGER DEFAULT 0,\n      is_new INTEGER DEFAULT 0,\n      created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )\n  `);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNkO0FBR3hCLE1BQU1FLFVBQVVELGdEQUFTLENBQUNHLFFBQVFDLEdBQUcsSUFBSTtBQUV6QywrREFBK0Q7QUFDL0QsaUNBQWlDO0FBRWpDLE1BQU1DLEtBQUssSUFBSU4sdURBQVFBLENBQUNFO0FBQ3hCSSxHQUFHQyxNQUFNLENBQUM7QUFFVixvQkFBb0I7QUFDYixTQUFTQztJQUNkLGNBQWM7SUFDZEYsR0FBR0csSUFBSSxDQUFDLENBQUM7Ozs7Ozs7O0VBUVQsQ0FBQztJQUVELDJEQUEyRDtJQUMzREgsR0FBR0csSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQlQsQ0FBQztJQUVELDBDQUEwQztJQUMxQ0gsR0FBR0csSUFBSSxDQUFDLENBQUM7Ozs7OztFQU1ULENBQUM7SUFFRCxjQUFjO0lBQ2RILEdBQUdHLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JULENBQUM7QUFDSDtBQUVBLGlFQUFlSCxFQUFFQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXENhc2FcXERlc2t0b3BcXEdvcmUgQm9va3NcXHNyY1xcbGliXFxkYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YWJhc2UgZnJvbSAnYmV0dGVyLXNxbGl0ZTMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCBEQl9QQVRIID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdnb3JlYm9va3MuZGInKTtcblxuLy8gRW5zdXJlIGRhdGFiYXNlIGRpcmVjdG9yeSBleGlzdHMgKGlmIGl0IHdlcmUgaW4gYSBzdWJmb2xkZXIpXG4vLyBJbiB0aGlzIGNhc2UgaXQncyBpbiB0aGUgcm9vdC5cblxuY29uc3QgZGIgPSBuZXcgRGF0YWJhc2UoREJfUEFUSCk7XG5kYi5wcmFnbWEoJ2pvdXJuYWxfbW9kZSA9IFdBTCcpO1xuXG4vLyBJbml0aWFsaXplIFRhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIGluaXREQigpIHtcbiAgLy8gVXNlcnMgVGFibGVcbiAgZGIuZXhlYyhgXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXNlcnMgKFxuICAgICAgaWQgVEVYVCBQUklNQVJZIEtFWSxcbiAgICAgIGVtYWlsIFRFWFQgVU5JUVVFIE5PVCBOVUxMLFxuICAgICAgcGFzc3dvcmQgVEVYVCBOT1QgTlVMTCxcbiAgICAgIHJvbGUgVEVYVCBERUZBVUxUICd1c2VyJyxcbiAgICAgIGNyZWF0ZWRfYXQgREFURVRJTUUgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUFxuICAgIClcbiAgYCk7XG5cbiAgLy8gT3JkZXJzIFRhYmxlIChTZW5zaXRpdmUgZmllbGRzIHdpbGwgYmUgc3RvcmVkIGVuY3J5cHRlZClcbiAgZGIuZXhlYyhgXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgb3JkZXJzIChcbiAgICAgIGlkIFRFWFQgUFJJTUFSWSBLRVksXG4gICAgICB1c2VyX2lkIFRFWFQsXG4gICAgICBib29rX2lkIFRFWFQsXG4gICAgICBib29rX3RpdGxlIFRFWFQsXG4gICAgICBmb3JtYXQgVEVYVCxcbiAgICAgIHByaWNlIFRFWFQsXG4gICAgICBmdWxsX25hbWVfZW5jIFRFWFQsXG4gICAgICBhZGRyZXNzX2VuYyBURVhULFxuICAgICAgcG9ydGFsX2VuYyBURVhULFxuICAgICAgcGlzb19lbmMgVEVYVCxcbiAgICAgIHppcF9lbmMgVEVYVCxcbiAgICAgIGNpdHlfZW5jIFRFWFQsXG4gICAgICBwcm92aW5jZV9lbmMgVEVYVCxcbiAgICAgIHBob25lX2VuYyBURVhULFxuICAgICAgZGVsaXZlcnlfdGltZV9lbmMgVEVYVCxcbiAgICAgIG5vdGVzX2VuYyBURVhULFxuICAgICAgc3RhdHVzIFRFWFQgREVGQVVMVCAncGVuZGluZycsXG4gICAgICBjcmVhdGVkX2F0IERBVEVUSU1FIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVAsXG4gICAgICBGT1JFSUdOIEtFWSh1c2VyX2lkKSBSRUZFUkVOQ0VTIHVzZXJzKGlkKVxuICAgIClcbiAgYCk7XG5cbiAgLy8gU2l0ZSBDb25maWcgVGFibGUgKFdvcmRwcmVzcy1zdHlsZSBDTVMpXG4gIGRiLmV4ZWMoYFxuICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHNpdGVfY29uZmlnIChcbiAgICAgIGtleSBURVhUIFBSSU1BUlkgS0VZLFxuICAgICAgdmFsdWUgVEVYVCxcbiAgICAgIHVwZGF0ZWRfYXQgREFURVRJTUUgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUFxuICAgIClcbiAgYCk7XG5cbiAgLy8gQm9va3MgVGFibGVcbiAgZGIuZXhlYyhgXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgYm9va3MgKFxuICAgICAgaWQgVEVYVCBQUklNQVJZIEtFWSxcbiAgICAgIHNsdWcgVEVYVCBVTklRVUUsXG4gICAgICB0aXRsZSBURVhULFxuICAgICAgYXV0aG9yIFRFWFQsXG4gICAgICBwcmljZSBURVhULFxuICAgICAgZWJvb2tfcHJpY2UgVEVYVCxcbiAgICAgIHBhY2tfcHJpY2UgVEVYVCxcbiAgICAgIGltYWdlIFRFWFQsXG4gICAgICBkZXNjcmlwdGlvbiBURVhULFxuICAgICAgY2F0ZWdvcnkgVEVYVCxcbiAgICAgIGlzX3BhY2sgSU5URUdFUiBERUZBVUxUIDAsXG4gICAgICBpc19uZXcgSU5URUdFUiBERUZBVUxUIDAsXG4gICAgICBjcmVhdGVkX2F0IERBVEVUSU1FIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVBcbiAgICApXG4gIGApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJEYXRhYmFzZSIsInBhdGgiLCJEQl9QQVRIIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYiIsInByYWdtYSIsImluaXREQiIsImV4ZWMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/uncrypto","vendor-chunks/iron-webcrypto","vendor-chunks/iron-session","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();