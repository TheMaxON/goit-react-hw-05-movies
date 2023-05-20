"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[652],{8557:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,o,c=t(168),i=t(7402),u=i.Z.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  text-align: center;\n"]))),s=i.Z.h1(a||(a=(0,c.Z)(["\n  color: #d33a3a;\n"]))),l=i.Z.p(o||(o=(0,c.Z)(["\n  color: white;\n"]))),p=t(184),d=function(n){var e=n.error;return(0,p.jsxs)(u,{children:[(0,p.jsx)(s,{children:"The error has occured. Please try reloading the page..."}),(0,p.jsxs)(l,{children:["Error info: ",e]})]})}},4672:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a,o,c,i=t(7689),u=t(168),s=t(7402),l=t(1087),p=s.Z.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  margin-top: 80px;\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 30px;\n    margin-top: 140px;\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (min-width: 1750px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"]))),d=(0,s.Z)(l.rU)(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n"]))),f=s.Z.img(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),h=s.Z.h2(c||(c=(0,u.Z)(["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  color: var(--color-text);\n  padding: 13px;\n  font-size: 16px;\n  background-color: #01000adb;\n  backdrop-filter: blur(15px);\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n  }\n"]))),v=t(184),x=function(n){var e=n.movies,r=(0,i.TH)();return(0,v.jsx)(p,{children:e.map((function(n){var e=n.id,a=n.poster_path,o=n.title,c=n.original_title;return(0,v.jsxs)(d,{state:{from:r},to:"/movies/".concat(e),children:[(0,v.jsx)(f,{src:a?"https://image.tmdb.org/t/p/w400/"+a:t(479),loading:"lazy",alt:o||c}),(0,v.jsx)(h,{children:o||c})]},e)}))})}},4814:function(n,e,t){t.d(e,{$:function(){return i}});var r,a=t(168),o=t(7402).Z.section(r||(r=(0,a.Z)(["\n  width: 90%;\n  margin: 0 auto 30px auto;\n"]))),c=t(184),i=function(n){return(0,c.jsx)(o,{children:n.children})}},7652:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,o,c=t(5861),i=t(9439),u=t(4687),s=t.n(u),l=t(2791),p=t(1087),d=t(7596),f=t(4814),h=t(3757),v=t(719),x=t(168),m=t(7402),g=m.Z.form(r||(r=(0,x.Z)(["\n  display: flex;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n  border-radius: 50px;\n  overflow: hidden;\n"]))),Z=m.Z.button(a||(a=(0,x.Z)(["\n  width: 55px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: none;\n  outline: none;\n  background-color: var(--color-accent);\n  color: var(--color-text);\n  border-radius: 50px;\n  cursor: pointer;\n"]))),b=m.Z.input(o||(o=(0,x.Z)(["\n  width: 700px;\n  border: none;\n  outline: none;\n  padding: 15px 15px 15px 65px;\n  background-color: var(--color-primary);\n  font-size: 20px;\n  color: var(--color-text);\n"]))),w=t(184),k=function(n){var e=n.onSubmit,t=(0,l.useState)(""),r=(0,i.Z)(t,2),a=r[0],o=r[1];return(0,w.jsxs)(g,{onSubmit:function(n){n.preventDefault();var t=a.toLowerCase().trim();if(""===t)return d.Am.info("Please enter the movie you're looking for",{theme:"dark"});e(t),o("")},children:[(0,w.jsx)(Z,{type:"submit","aria-label":"Search",className:"button",children:(0,w.jsx)(v.wnI,{style:{width:25,height:25}})}),(0,w.jsx)(b,{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",value:a,onChange:function(n){o(n.target.value)}})]})},y=t(409),j=t(4672),_=t(1454),S=t(8557),C=function(){var n=(0,p.lr)(),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=t.get("query"),o=(0,l.useState)([]),u=(0,i.Z)(o,2),v=u[0],x=u[1],m=(0,l.useState)(!1),g=(0,i.Z)(m,2),Z=g[0],b=g[1],C=(0,l.useState)(null),z=(0,i.Z)(C,2),$=z[0],q=z[1];(0,l.useEffect)((function(){if(a){var n=function(){var n=(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,(0,y.gy)(a);case 4:if(e=n.sent,x(e),0!==e.length){n.next=8;break}return n.abrupt("return",d.Am.info("No movies found",{theme:"dark"}));case 8:n.next=15;break;case 10:return n.prev=10,n.t0=n.catch(0),d.Am.error("The error has occured. Error info: ",n.t0,{theme:"dark"}),console.log(n.t0),n.abrupt("return",q(n.t0));case 15:return n.prev=15,b(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,10,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}}),[a]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f.$,{children:(0,w.jsx)(h.Z,{title:"Search Movies"})}),(0,w.jsx)(f.$,{children:(0,w.jsx)(k,{onSubmit:function(n){r({query:n})}})}),Z&&(0,w.jsx)(_.Z,{}),$&&(0,w.jsx)(S.Z,{error:$}),!$&&(0,w.jsx)(f.$,{children:(0,w.jsx)(j.Z,{movies:v})})]})}},409:function(n,e,t){t.d(e,{Df:function(){return u},M1:function(){return l},gy:function(){return d},t2:function(){return s},tx:function(){return p}});var r=t(5861),a=t(4687),o=t.n(a),c=t(1243),i="a686af912263638c370a0fbfc3731476";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("trending/movie/day?api_key=".concat(i));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"?api_key=").concat(i));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},479:function(n,e,t){n.exports=t.p+"static/media/no-image-placeholder.db988b39267ae67f771b.png"}}]);
//# sourceMappingURL=652.94aa6df5.chunk.js.map