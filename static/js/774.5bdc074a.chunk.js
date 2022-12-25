"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[774],{1616:function(n,e,t){t.d(e,{j:function(){return c}});var r,o=t(168),i=t(6444).ZP.p(r||(r=(0,o.Z)(["\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semibold})),u=t(184),c=function(n){var e=n.children;return(0,u.jsx)(i,{children:e})}},3174:function(n,e,t){t.d(e,{O:function(){return h}});var r,o,i=t(1578),u=t(7689),c=t(168),a=t(1087),s=t(6444),f=s.ZP.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),l=(0,s.ZP)(a.OL)(o||(o=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  padding: ","px;\n  width: 100%;\n  height: 40px;\n\n  text-decoration: none;\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n  background-color: ",";\n  border-radius: ",";\n\n  transform: scale(1);\n  box-shadow: none;\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n    transform: scale(1.03);\n    box-shadow: ",";\n  }\n\n  > svg {\n    margin-right: ","px;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.radii.minimal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.shadows.first}),(function(n){return n.theme.space[4]})),p=t(184),h=function(n){var e=n.movies,t=(0,u.TH)();return(0,p.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.original_title;return(0,p.jsx)("li",{children:(0,p.jsxs)(l,{to:"/movies/".concat(e),state:{from:t},children:[(0,p.jsx)(i.hlg,{size:24})," ",r]})},e)}))})}},8774:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,o,i,u=t(5861),c=t(9439),a=t(7757),s=t.n(a),f=t(2791),l=t(1087),p=t(9014),h=t(3174),d=t(168),m=t(6444),x=m.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  margin-bottom: ","px;\n  align-items: center;\n  background-color: ",";\n  gap: ","px;\n\n  overflow: hidden;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.space[3]})),g=m.ZP.input(o||(o=(0,d.Z)(["\n  padding: ","px;\n  width: 300px;\n  height: 40px;\n\n  font-size: ","px;\n\n  color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n\n  :hover,\n  :focus {\n    border: 1px solid ",";\n    outline-color: ",";\n  }\n\n  ::placeholder {\n    font: inherit;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary})),v=m.ZP.button(i||(i=(0,d.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 90px;\n  height: 40px;\n\n  text-transform: capitalize;\n  font-weight: ",";\n  color: ",";\n  background-color: ",";\n  border-radius: ",";\n  border: transparent;\n  opacity: 0.6;\n\n  cursor: pointer;\n  outline: none;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.radii.normal})),b=t(184),y=function(n){var e=n.onSubmit;return(0,b.jsxs)(x,{onSubmit:e,children:[(0,b.jsx)(g,{name:"search",type:"text",autoComplete:"off",placeholder:"Enter movie name"}),(0,b.jsx)(v,{children:"Search"})]})},w=t(8565),Z=t(1616),k=t(966),_=function(){var n,e=(0,f.useState)([]),t=(0,c.Z)(e,2),r=t[0],o=t[1],i=(0,f.useState)(!1),a=(0,c.Z)(i,2),d=a[0],m=a[1],x=(0,f.useState)(null),g=(0,c.Z)(x,2),v=g[0],_=g[1],j=(0,l.lr)(),S=(0,c.Z)(j,2),z=S[0],P=S[1],T=null!==(n=null===z||void 0===z?void 0:z.get("query"))&&void 0!==n?n:"";(0,f.useEffect)((function(){if(_(null),""!==T){var n=function(){var n=(0,u.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,w.qF)(T);case 4:e=n.sent,t=e.results.map((function(n){return{id:n.id,original_title:n.original_title}})),o(t),0===e.total_results&&_("We did not find anything"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),_("Something went wrong");case 13:return n.prev=13,m(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}}),[T]);return(0,b.jsxs)("main",{children:[(0,b.jsx)(y,{onSubmit:function(n){n.preventDefault();var e=n.target.search.value;if(""===e.trim())return p.ZP.error("Enter something to search!!!");P({query:e.toLowerCase()}),n.currentTarget.reset()}}),v&&(0,b.jsx)(Z.j,{children:v}),d&&(0,b.jsx)(k.a,{}),r.length>0&&(0,b.jsx)(h.O,{movies:r})]})}},8565:function(n,e,t){t.d(e,{Df:function(){return a},TP:function(){return p},iN:function(){return d},qF:function(){return f},tx:function(){return x}});var r=t(5861),o=t(7757),i=t.n(o),u=t(2388),c="86c51b00b5bb8cfadb7d5efaffb91bf1";function a(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var e,t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="trending/movie/week?api_key=".concat(c),n.next=3,u.Z.get(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&include_adult=false"),n.next=3,u.Z.get(t);case 3:return r=n.sent,o=r.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"?api_key=").concat(c,"&language=en-US"),n.next=3,u.Z.get(t);case 3:return r=n.sent,o=r.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"),n.next=3,u.Z.get(t);case 3:return r=n.sent,o=r.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),n.next=3,u.Z.get(t);case 3:return r=n.sent,o=r.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=774.5bdc074a.chunk.js.map