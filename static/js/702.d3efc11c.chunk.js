"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[702],{1616:function(n,t,e){e.d(t,{j:function(){return a}});var r,i=e(168),u=e(6444).ZP.p(r||(r=(0,i.Z)(["\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semibold})),o=e(184),a=function(n){var t=n.children;return(0,o.jsx)(u,{children:t})}},3174:function(n,t,e){e.d(t,{O:function(){return h}});var r,i,u=e(1578),o=e(7689),a=e(168),c=e(1087),s=e(6444),f=s.ZP.ul(r||(r=(0,a.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),l=(0,s.ZP)(c.OL)(i||(i=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  padding: ","px;\n  width: 100%;\n  height: 40px;\n\n  text-decoration: none;\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n  background-color: ",";\n  border-radius: ",";\n\n  transform: scale(1);\n  box-shadow: none;\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n    transform: scale(1.03);\n    box-shadow: ",";\n  }\n\n  > svg {\n    margin-right: ","px;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.radii.minimal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.shadows.first}),(function(n){return n.theme.space[4]})),p=e(184),h=function(n){var t=n.movies,e=(0,o.TH)();return(0,p.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.original_title;return(0,p.jsx)("li",{children:(0,p.jsxs)(l,{to:"/movies/".concat(t),state:{from:e},children:[(0,p.jsx)(u.hlg,{size:24})," ",r]})},t)}))})}},8702:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,i=e(5861),u=e(9439),o=e(7757),a=e.n(o),c=e(2791),s=e(8565),f=e(3174),l=e(168),p=e(6444).ZP.h1(r||(r=(0,l.Z)(["\n  margin-bottom: ","px;\n\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.fontWeights.bold})),h=e(184),d=function(n){var t=n.title;return(0,h.jsx)(p,{children:t})},m=e(1616),g=function(){var n=(0,c.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],o=(0,c.useState)(null),l=(0,u.Z)(o,2),p=l[0],g=l[1];return(0,c.useEffect)((function(){g(null);var n=function(){var n=(0,i.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Df)();case 3:t=n.sent,e=t.results.map((function(n){return{id:n.id,original_title:n.original_title}})),r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),g("Something went wrong");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)("main",{children:[p&&(0,h.jsx)(m.j,{children:p}),(null===e||void 0===e?void 0:e.length)>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{title:"Trending today"}),(0,h.jsx)(f.O,{movies:e})]})]})}},8565:function(n,t,e){e.d(t,{Df:function(){return c},TP:function(){return p},iN:function(){return d},qF:function(){return f},tx:function(){return g}});var r=e(5861),i=e(7757),u=e.n(i),o=e(2388),a="86c51b00b5bb8cfadb7d5efaffb91bf1";function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var t,e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/week?api_key=".concat(a),n.next=3,o.Z.get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){var e,r,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="search/movie?api_key=".concat(a,"&query=").concat(t,"&language=en-US&include_adult=false"),n.next=3,o.Z.get(e);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t){var e,r,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"?api_key=").concat(a,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(t){var e,r,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits?api_key=").concat(a,"&language=en-US"),n.next=3,o.Z.get(e);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t){var e,r,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews?api_key=").concat(a,"&language=en-US&page=1"),n.next=3,o.Z.get(e);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=702.d3efc11c.chunk.js.map