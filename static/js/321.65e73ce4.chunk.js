"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[321],{321:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var i,o,r,a,p,c=t(439),d=t(791),l=t(87),s=t(689),u=t(168),x=t(529),h=t(135),f=t(340),g=t(184),b=(0,f.uS)((0,g.jsx)(h.U41,{})),m="data:image/svg+xml;base64,".concat(btoa(b)),v=x.Z.div(i||(i=(0,u.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),y=x.Z.form(o||(o=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),w=x.Z.button(r||(r=(0,u.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('","');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"])),m),Z=(x.Z.label(a||(a=(0,u.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),x.Z.input(p||(p=(0,u.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])))),k=t(931),j=t(742),_=function(){var n,e=(0,d.useState)(""),t=(0,c.Z)(e,2),i=t[0],o=t[1],r=(0,d.useState)([]),a=(0,c.Z)(r,2),p=a[0],u=a[1],x=(0,d.useState)(!1),h=(0,c.Z)(x,2),f=h[0],b=h[1],m=(0,l.lr)(),_=(0,c.Z)(m,2),S=_[0],q=_[1],z=null!==(n=S.get("query"))&&void 0!==n?n:"";(0,d.useEffect)((function(){z&&(0,k.V0)(z).then((function(n){u(n.results)}))}),[z]);var C=(0,s.TH)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{children:(0,g.jsxs)(y,{onSubmit:function(n){n.preventDefault(),q(""!==i?{query:i}:{}),j.Loading.circle("Loading..."),(0,k.V0)(i).then((function(n){u(n.results),b(!0)})),o(""),j.Loading.remove()},children:[(0,g.jsx)(w,{type:"submit"}),(0,g.jsx)(Z,{onChange:function(n){o(n.currentTarget.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"query",value:i,required:!0})]})}),f&&0===p.length&&(0,g.jsx)("p",{children:"We don't have any movies for this query"}),(0,g.jsx)("ul",{children:p.length>1&&p.map((function(n){var e=n.id,t=n.title;return(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{to:"/movies/".concat(e),state:{from:C},children:t})},e)}))})]})}}}]);
//# sourceMappingURL=321.65e73ce4.chunk.js.map