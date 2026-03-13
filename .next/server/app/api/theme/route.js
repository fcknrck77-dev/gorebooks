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
exports.id = "app/api/theme/route";
exports.ids = ["app/api/theme/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftheme%2Froute&page=%2Fapi%2Ftheme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftheme%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftheme%2Froute&page=%2Fapi%2Ftheme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftheme%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Casa_Desktop_Gore_Books_src_app_api_theme_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/theme/route.ts */ \"(rsc)/./src/app/api/theme/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/theme/route\",\n        pathname: \"/api/theme\",\n        filename: \"route\",\n        bundlePath: \"app/api/theme/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Casa\\\\Desktop\\\\Gore Books\\\\src\\\\app\\\\api\\\\theme\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Casa_Desktop_Gore_Books_src_app_api_theme_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0aGVtZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdGhlbWUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0aGVtZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDYXNhJTVDRGVza3RvcCU1Q0dvcmUlMjBCb29rcyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQ2FzYSU1Q0Rlc2t0b3AlNUNHb3JlJTIwQm9va3MmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ29CO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxDYXNhXFxcXERlc2t0b3BcXFxcR29yZSBCb29rc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0aGVtZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGhlbWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90aGVtZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdGhlbWUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxDYXNhXFxcXERlc2t0b3BcXFxcR29yZSBCb29rc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0aGVtZVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftheme%2Froute&page=%2Fapi%2Ftheme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftheme%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/theme/route.ts":
/*!************************************!*\
  !*** ./src/app/api/theme/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n// Serves a CSS stylesheet of custom properties from the database\n// Include <link rel=\"stylesheet\" href=\"/api/theme\"> in your layout\nasync function GET() {\n    try {\n        const config = _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prepare('SELECT key, value FROM site_config').all();\n        const configMap = config.reduce((acc, item)=>{\n            acc[item.key] = item.value;\n            return acc;\n        }, {});\n        const css = `\n      :root {\n        --theme-accent: ${configMap.color_accent || '#a00000'};\n        --theme-accent-gold: ${configMap.color_gold || '#c9a84c'};\n        --theme-bg-deep: ${configMap.color_bg || '#050505'};\n        --theme-text-primary: ${configMap.color_text || '#e8e6e1'};\n      }\n    `.trim();\n        return new Response(css, {\n            headers: {\n                'Content-Type': 'text/css',\n                'Cache-Control': 'no-store, must-revalidate'\n            }\n        });\n    } catch (e) {\n        return new Response(':root {}', {\n            headers: {\n                'Content-Type': 'text/css'\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90aGVtZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUMwQjtBQUUxQixpRUFBaUU7QUFDakUsbUVBQW1FO0FBQzVELGVBQWVDO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxTQUFTRiwrQ0FBRUEsQ0FBQ0csT0FBTyxDQUFDLHNDQUFzQ0MsR0FBRztRQUNuRSxNQUFNQyxZQUFZSCxPQUFPSSxNQUFNLENBQUMsQ0FBQ0MsS0FBVUM7WUFDekNELEdBQUcsQ0FBQ0MsS0FBS0MsR0FBRyxDQUFDLEdBQUdELEtBQUtFLEtBQUs7WUFDMUIsT0FBT0g7UUFDVCxHQUFHLENBQUM7UUFFSixNQUFNSSxNQUFNLENBQUM7O3dCQUVPLEVBQUVOLFVBQVVPLFlBQVksSUFBSSxVQUFVOzZCQUNqQyxFQUFFUCxVQUFVUSxVQUFVLElBQUksVUFBVTt5QkFDeEMsRUFBRVIsVUFBVVMsUUFBUSxJQUFJLFVBQVU7OEJBQzdCLEVBQUVULFVBQVVVLFVBQVUsSUFBSSxVQUFVOztJQUU5RCxDQUFDLENBQUNDLElBQUk7UUFFTixPQUFPLElBQUlDLFNBQVNOLEtBQUs7WUFDdkJPLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixpQkFBaUI7WUFDbkI7UUFDRjtJQUNGLEVBQUUsT0FBT0MsR0FBRztRQUNWLE9BQU8sSUFBSUYsU0FBUyxZQUFZO1lBQUVDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQVc7UUFBRTtJQUM1RTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXENhc2FcXERlc2t0b3BcXEdvcmUgQm9va3NcXHNyY1xcYXBwXFxhcGlcXHRoZW1lXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgZGIgZnJvbSAnQC9saWIvZGInO1xuXG4vLyBTZXJ2ZXMgYSBDU1Mgc3R5bGVzaGVldCBvZiBjdXN0b20gcHJvcGVydGllcyBmcm9tIHRoZSBkYXRhYmFzZVxuLy8gSW5jbHVkZSA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9hcGkvdGhlbWVcIj4gaW4geW91ciBsYXlvdXRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29uZmlnID0gZGIucHJlcGFyZSgnU0VMRUNUIGtleSwgdmFsdWUgRlJPTSBzaXRlX2NvbmZpZycpLmFsbCgpIGFzIGFueVtdO1xuICAgIGNvbnN0IGNvbmZpZ01hcCA9IGNvbmZpZy5yZWR1Y2UoKGFjYzogYW55LCBpdGVtOiBhbnkpID0+IHtcbiAgICAgIGFjY1tpdGVtLmtleV0gPSBpdGVtLnZhbHVlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG5cbiAgICBjb25zdCBjc3MgPSBgXG4gICAgICA6cm9vdCB7XG4gICAgICAgIC0tdGhlbWUtYWNjZW50OiAke2NvbmZpZ01hcC5jb2xvcl9hY2NlbnQgfHwgJyNhMDAwMDAnfTtcbiAgICAgICAgLS10aGVtZS1hY2NlbnQtZ29sZDogJHtjb25maWdNYXAuY29sb3JfZ29sZCB8fCAnI2M5YTg0Yyd9O1xuICAgICAgICAtLXRoZW1lLWJnLWRlZXA6ICR7Y29uZmlnTWFwLmNvbG9yX2JnIHx8ICcjMDUwNTA1J307XG4gICAgICAgIC0tdGhlbWUtdGV4dC1wcmltYXJ5OiAke2NvbmZpZ01hcC5jb2xvcl90ZXh0IHx8ICcjZThlNmUxJ307XG4gICAgICB9XG4gICAgYC50cmltKCk7XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGNzcywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvY3NzJyxcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZScsXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnOnJvb3Qge30nLCB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2NzcycgfSB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiIiwiR0VUIiwiY29uZmlnIiwicHJlcGFyZSIsImFsbCIsImNvbmZpZ01hcCIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJrZXkiLCJ2YWx1ZSIsImNzcyIsImNvbG9yX2FjY2VudCIsImNvbG9yX2dvbGQiLCJjb2xvcl9iZyIsImNvbG9yX3RleHQiLCJ0cmltIiwiUmVzcG9uc2UiLCJoZWFkZXJzIiwiZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/theme/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftheme%2Froute&page=%2Fapi%2Ftheme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftheme%2Froute.ts&appDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCasa%5CDesktop%5CGore%20Books&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();