"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[738],{1616:function(n,t,e){e.d(t,{j:function(){return o}});var r,a=e(168),c=e(6444).ZP.p(r||(r=(0,a.Z)(["\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semibold})),u=e(184),o=function(n){var t=n.children;return(0,u.jsx)(c,{children:t})}},2738:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,u=e(5861),o=e(9439),i=e(7757),s=e.n(i),f=e(2791),p=e(7689),h=e(1616),d=e(8565),l=e(168),m=e(6444),v=m.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n\n  list-style: none;\n"])),(function(n){return n.theme.space[4]})),x=m.ZP.li(a||(a=(0,l.Z)(["\n  padding: ","px;\n\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.shadows.first})),b=m.ZP.p(c||(c=(0,l.Z)(["\n  margin-bottom: ","px;\n  padding: ","px 0;\n\n  font-size: ","px;\n  font-weight: ",";\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.colors.background})),g=e(184),w=function(){var n=(0,f.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(null),c=(0,o.Z)(a,2),i=c[0],l=c[1],m=(0,p.UO)().movieId;return(0,f.useEffect)((function(){var n=function(){var n=(0,u.Z)(s().mark((function n(){var t,e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.tx)(m);case 3:t=n.sent,e=t.results.map((function(n){return{id:n.id,author:n.author,content:n.content,created_at:n.created_at}})),r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),l("Something went wrong");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[m]),(0,g.jsxs)(g.Fragment,{children:[i&&(0,g.jsx)(h.j,{children:i}),(0,g.jsx)(v,{children:e.length>0?e.map((function(n){var t=n.id,e=n.author,r=n.content,a=n.created_at,c=new Date(a);return(0,g.jsxs)(x,{children:[(0,g.jsxs)(b,{children:[(0,g.jsx)("b",{children:"Author:"})," ",e," (",c.toLocaleDateString(),")"]}),(0,g.jsx)("p",{children:r})]},t)})):(0,g.jsx)("p",{children:"We don`t have any reviews for this movie."})})]})}},8565:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return d},iN:function(){return m},qF:function(){return p},tx:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),u=e(2388),o="86c51b00b5bb8cfadb7d5efaffb91bf1";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i={params:{language:"en-US"}};function s(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/day?api_key=".concat(o),n.next=3,u.Z.get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="search/movie?api_key=".concat(o,"&query=").concat(t,"&include_adult=false"),n.next=3,u.Z.get(e,i);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"?api_key=").concat(o),n.next=3,u.Z.get(e,i);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits?api_key=").concat(o),n.next=3,u.Z.get(e,i);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews?api_key=").concat(o,"&page=1"),n.next=3,u.Z.get(e,i);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=738.137de610.chunk.js.map