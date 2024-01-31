/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stream-shift";
exports.ids = ["vendor-chunks/stream-shift"];
exports.modules = {

/***/ "(ssr)/./node_modules/stream-shift/index.js":
/*!********************************************!*\
  !*** ./node_modules/stream-shift/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = shift\n\nfunction shift (stream) {\n  var rs = stream._readableState\n  if (!rs) return null\n  return (rs.objectMode || typeof stream._duplexState === 'number') ? stream.read() : stream.read(getStateLength(rs))\n}\n\nfunction getStateLength (state) {\n  if (state.buffer.length) {\n    // Since node 6.3.0 state.buffer is a BufferList not an array\n    if (state.buffer.head) {\n      return state.buffer.head.data.length\n    }\n\n    return state.buffer[0].length\n  }\n\n  return state.length\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RyZWFtLXNoaWZ0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lvdF9jaGVjay8uL25vZGVfbW9kdWxlcy9zdHJlYW0tc2hpZnQvaW5kZXguanM/N2NhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHNoaWZ0XG5cbmZ1bmN0aW9uIHNoaWZ0IChzdHJlYW0pIHtcbiAgdmFyIHJzID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlXG4gIGlmICghcnMpIHJldHVybiBudWxsXG4gIHJldHVybiAocnMub2JqZWN0TW9kZSB8fCB0eXBlb2Ygc3RyZWFtLl9kdXBsZXhTdGF0ZSA9PT0gJ251bWJlcicpID8gc3RyZWFtLnJlYWQoKSA6IHN0cmVhbS5yZWFkKGdldFN0YXRlTGVuZ3RoKHJzKSlcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdGVMZW5ndGggKHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5idWZmZXIubGVuZ3RoKSB7XG4gICAgLy8gU2luY2Ugbm9kZSA2LjMuMCBzdGF0ZS5idWZmZXIgaXMgYSBCdWZmZXJMaXN0IG5vdCBhbiBhcnJheVxuICAgIGlmIChzdGF0ZS5idWZmZXIuaGVhZCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmJ1ZmZlci5oZWFkLmRhdGEubGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlLmJ1ZmZlclswXS5sZW5ndGhcbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5sZW5ndGhcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stream-shift/index.js\n");

/***/ })

};
;