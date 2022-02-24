(self["webpackChunktext"] = self["webpackChunktext"] || []).push([["highlight/vbscript-html"],{

/***/ "./node_modules/highlight.js/lib/languages/vbscript-html.js":
/*!******************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vbscript-html.js ***!
  \******************************************************************/
/***/ ((module) => {

/*
Language: VBScript in HTML
Requires: xml.js, vbscript.js
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Description: "Bridge" language defining fragments of VBScript in HTML within <% .. %>
Website: https://en.wikipedia.org/wiki/VBScript
Category: scripting
*/

function vbscriptHtml(hljs) {
  return {
    name: 'VBScript in HTML',
    subLanguage: 'xml',
    contains: [
      {
        begin: '<%',
        end: '%>',
        subLanguage: 'vbscript'
      }
    ]
  };
}

module.exports = vbscriptHtml;


/***/ })

}]);
//# sourceMappingURL=vbscript-html.js.map?v=aa1bec00b34cd4f3b3c2