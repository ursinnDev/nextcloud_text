(self["webpackChunktext"] = self["webpackChunktext"] || []).push([["highlight/leaf"],{

/***/ "./node_modules/highlight.js/lib/languages/leaf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/leaf.js ***!
  \*********************************************************/
/***/ ((module) => {

/*
Language: Leaf
Author: Hale Chan <halechan@qq.com>
Description: Based on the Leaf reference from https://vapor.github.io/documentation/guide/leaf.html.
*/

function leaf(hljs) {
  return {
    name: 'Leaf',
    contains: [
      {
        className: 'function',
        begin: '#+' + '[A-Za-z_0-9]*' + '\\(',
        end: / \{/,
        returnBegin: true,
        excludeEnd: true,
        contains: [
          {
            className: 'keyword',
            begin: '#+'
          },
          {
            className: 'title',
            begin: '[A-Za-z_][A-Za-z_0-9]*'
          },
          {
            className: 'params',
            begin: '\\(',
            end: '\\)',
            endsParent: true,
            contains: [
              {
                className: 'string',
                begin: '"',
                end: '"'
              },
              {
                className: 'variable',
                begin: '[A-Za-z_][A-Za-z_0-9]*'
              }
            ]
          }
        ]
      }
    ]
  };
}

module.exports = leaf;


/***/ })

}]);
//# sourceMappingURL=leaf.js.map?v=71848d2e894971438d98