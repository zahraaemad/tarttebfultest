(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840,5269],{1163:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var n=r(63366),o=r(87462),l=r(67294),a=r(86010),i=r(94780),u=r(36622),s=r(67074),d=r(78884),c=r(40011),p=r(84771),f=r(29630),h=r(1588),m=r(34867);function b(e){return(0,m.Z)("MuiLink",e)}let y=(0,h.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var _=r(54844),g=r(41796);let v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=e=>v[e]||e,x=({theme:e,ownerState:t})=>{let r=Z(t.color),n=(0,_.D)(e,`palette.${r}`,!1)||t.color,o=(0,_.D)(e,`palette.${r}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,g.Fq)(n,.4)};var k=r(85893);let w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=e=>{let{classes:t,component:r,focusVisible:n,underline:o}=e,l={root:["root",`underline${(0,u.Z)(o)}`,"button"===r&&"button",n&&"focusVisible"]};return(0,i.Z)(l,b,t)},D=(0,s.ZP)(f.Z,{name:"MuiLink",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[`underline${(0,u.Z)(r.underline)}`],"button"===r.component&&t.button]}})(({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:x({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.focusVisible}`]:{outline:"auto"}})),O=l.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiLink"}),{className:i,color:u="primary",component:s="a",onBlur:f,onFocus:h,TypographyClasses:m,underline:b="always",variant:y="inherit",sx:_}=r,g=(0,n.Z)(r,w),{isFocusVisibleRef:Z,onBlur:x,onFocus:O,ref:M}=(0,c.Z)(),[A,P]=l.useState(!1),T=(0,p.Z)(t,M),j=e=>{x(e),!1===Z.current&&P(!1),f&&f(e)},E=e=>{O(e),!0===Z.current&&P(!0),h&&h(e)},L=(0,o.Z)({},r,{color:u,component:s,focusVisible:A,underline:b,variant:y}),R=C(L);return(0,k.jsx)(D,(0,o.Z)({color:u,className:(0,a.Z)(R.root,i),classes:m,component:s,onBlur:j,onFocus:E,ref:T,ownerState:L,variant:y,sx:[...Object.keys(v).includes(u)?[]:[{color:u}],...Array.isArray(_)?_:[_]]},g))});var M=O},37645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let r=l.default,o=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:r,pastDelay:n}=e;return null}};if(e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=n({},o,e)),(o=n({},o,t)).suspense&&(delete o.ssr,delete o.loading),o.loadableGenerated&&delete(o=n({},o,o.loadableGenerated)).loadableGenerated,"boolean"==typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,a(r,o);delete o.ssr}return r(o)},t.noSSR=a;var n=r(6495).Z,o=r(92648).Z,l=(o(r(67294)),o(r(14588)));function a(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(92648).Z)(r(67294));let o=n.default.createContext(null);t.LoadableContext=o},14588:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,o=(0,r(92648).Z)(r(67294)),l=r(33644);let{useSyncExternalStore:a}=r(67294),i=[],u=[],s=!1;function d(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function p(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=o.default.lazy(r.loader));let i=null;function d(){if(!i){let t=new c(e,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!s){let p=r.webpack?r.webpack():r.modules;p&&u.push(e=>{for(let t of p)if(-1!==e.indexOf(t))return d()})}function f(){d();let e=o.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}let h=r.suspense?function(e,t){return f(),o.default.createElement(r.lazy,n({},e,{ref:t}))}:function(e,t){f();let n=a(i.subscribe,i.getCurrentValue,i.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),o.default.useMemo(()=>{var t;return n.loading||n.error?o.default.createElement(r.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:i.retry}):n.loaded?o.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])};return h.preload=()=>d(),h.displayName="LoadableComponent",o.default.forwardRef(h)}(d,e)}function f(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}p.preloadAll=()=>new Promise((e,t)=>{f(i).then(e,t)}),p.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(s=!0,t());f(u,e).then(r,r)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},95828:function(){},5152:function(e,t,r){e.exports=r(37645)}}]);