(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5520],{85924:function(e,t,n){var r=n(5569)(Object.getPrototypeOf,Object);e.exports=r},68630:function(e,t,n){var r=n(44239),i=n(85924),a=n(37005),o=Object.prototype,s=Function.prototype.toString,l=o.hasOwnProperty,c=s.call(Object);e.exports=function(e){if(!a(e)||"[object Object]"!=r(e))return!1;var t=i(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==c}},75520:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return en}});var r=n(85893),i=n(61953),a=n(49837),o=n(59742),s=n(29630),l=n(91359),c=n(9253),u=n(36943),p=n(39277),d=n(81508),f=n(40048),m=n(18446),h=n.n(m),y=n(27361),v=n.n(y),A=n(68630),g=n.n(A),b=n(23560),x=n.n(b),j=n(14293),S=n.n(j),O=n(67294),E=n(74524),P=n(94184),k=n.n(P),R=n(48710),I=n(45108),w=n(33508),F=n(88169),Z=n(25048),L=n(2763),C=n(43815),N=n(52017),D=n(47523),T=n(69055),_=n(77718),K=n(6213),M=n(79896);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,n,r,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n,r=W(a);if(t){var i=W(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(e=n)&&("object"===B(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function a(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state=void 0,t.id=(0,T.EL)("recharts-pie-"),t.handleAnimationEnd=function(){var e=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),x()(e)&&e()},t.handleAnimationStart=function(){var e=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),x()(e)&&e()},t.state={isAnimationFinished:!e.isAnimationActive,prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId},t}return n=[{key:"isActiveIndex",value:function(e){var t=this.props.activeIndex;return Array.isArray(t)?-1!==t.indexOf(e):e===t}},{key:"hasActiveIndex",value:function(){var e=this.props.activeIndex;return Array.isArray(e)?0!==e.length:e||0===e}},{key:"renderLabels",value:function(e){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var t=this.props,n=t.label,r=t.labelLine,i=t.dataKey,o=t.valueKey,s=(0,M.L6)(this.props),l=(0,M.L6)(n),c=(0,M.L6)(r),u=n&&n.offsetRadius||20,p=e.map(function(e,t){var p=(e.startAngle+e.endAngle)/2,d=(0,f.op)(e.cx,e.cy,e.outerRadius+u,p),m=V(V(V(V({},s),e),{},{stroke:"none"},l),{},{index:t,textAnchor:a.getTextAnchor(d.x,e.cx)},d),h=V(V(V(V({},s),e),{},{fill:"none",stroke:e.fill},c),{},{index:t,points:[(0,f.op)(e.cx,e.cy,e.outerRadius,p),d],key:"line"}),y=i;return S()(i)&&S()(o)?y="value":S()(i)&&(y=o),O.createElement(R.m,{key:"label-".concat(t)},r&&a.renderLabelLineItem(r,h),a.renderLabelItem(n,m,(0,_.F$)(e,y)))});return O.createElement(R.m,{className:"recharts-pie-labels"},p)}},{key:"renderSectorsStatically",value:function(e){var t=this,n=this.props,r=n.activeShape,i=n.blendStroke,o=n.inactiveShape;return e.map(function(e,n){var s=o&&t.hasActiveIndex()?o:null,l=t.isActiveIndex(n)?r:s,c=V(V({},e),{},{stroke:i?e.fill:e.stroke});return O.createElement(R.m,$({className:"recharts-pie-sector"},(0,M.bw)(t.props,e,n),{key:"sector-".concat(n)}),a.renderSectorItem(l,c))})}},{key:"renderSectorsWithAnimation",value:function(){var e=this,t=this.props,n=t.sectors,r=t.isAnimationActive,i=t.animationBegin,a=t.animationDuration,o=t.animationEasing,s=t.animationId,l=this.state,c=l.prevSectors,u=l.prevIsAnimationActive;return O.createElement(E.ZP,{begin:i,duration:a,isActive:r,easing:o,from:{t:0},to:{t:1},key:"pie-".concat(s,"-").concat(u),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(t){var r=t.t,i=[],a=(n&&n[0]).startAngle;return n.forEach(function(e,t){var n=c&&c[t],o=t>0?v()(e,"paddingAngle",0):0;if(n){var s=(0,T.k4)(n.endAngle-n.startAngle,e.endAngle-e.startAngle),l=V(V({},e),{},{startAngle:a+o,endAngle:a+s(r)+o});i.push(l),a=l.endAngle}else{var u=e.endAngle,p=e.startAngle,d=(0,T.k4)(0,u-p)(r),f=V(V({},e),{},{startAngle:a+o,endAngle:a+d+o});i.push(f),a=f.endAngle}}),O.createElement(R.m,null,e.renderSectorsStatically(i))})}},{key:"renderSectors",value:function(){var e=this.props,t=e.sectors,n=e.isAnimationActive,r=this.state.prevSectors;return n&&t&&t.length&&(!r||!h()(r,t))?this.renderSectorsWithAnimation():this.renderSectorsStatically(t)}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.sectors,r=e.className,i=e.label,a=e.cx,o=e.cy,s=e.innerRadius,l=e.outerRadius,c=e.isAnimationActive,u=this.state.isAnimationFinished;if(t||!n||!n.length||!(0,T.hj)(a)||!(0,T.hj)(o)||!(0,T.hj)(s)||!(0,T.hj)(l))return null;var p=k()("recharts-pie",r);return O.createElement(R.m,{className:p},this.renderSectors(),i&&this.renderLabels(n),Z._.renderCallByParent(this.props,null,!1),(!c||u)&&L.e.renderCallByParent(this.props,n,!1))}}],r=[{key:"getDerivedStateFromProps",value:function(e,t){return t.prevIsAnimationActive!==e.isAnimationActive?{prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:[],isAnimationFinished:!0}:e.isAnimationActive&&e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:t.curSectors,isAnimationFinished:!0}:e.sectors!==t.curSectors?{curSectors:e.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(e,t){return e>t?"start":e<t?"end":"middle"}},{key:"renderLabelLineItem",value:function(e,t){return O.isValidElement(e)?O.cloneElement(e,t):x()(e)?e(t):O.createElement(w.H,$({},t,{type:"linear",className:"recharts-pie-label-line"}))}},{key:"renderLabelItem",value:function(e,t,n){if(O.isValidElement(e))return O.cloneElement(e,t);var r=n;return x()(e)&&(r=e(t),O.isValidElement(r))?r:O.createElement(F.x,$({},t,{alignmentBaseline:"middle",className:"recharts-pie-label-text"}),r)}},{key:"renderSectorItem",value:function(e,t){return O.isValidElement(e)?O.cloneElement(e,t):x()(e)?e(t):g()(e)?O.createElement(I.L,$({},t,e)):O.createElement(I.L,t)}}],n&&Y(a.prototype,n),r&&Y(a,r),a}(O.PureComponent);U.displayName="Pie",U.defaultProps={stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!D.x.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1},U.parseDeltaAngle=function(e,t){return(0,T.uY)(t-e)*Math.min(Math.abs(t-e),360)},U.getRealPieData=function(e){var t=e.props,n=t.data,r=t.children,i=(0,M.L6)(e.props),a=(0,N.NN)(r,C.b.displayName);return n&&n.length?n.map(function(e,t){return V(V(V({payload:e},i),e),a&&a[t]&&a[t].props)}):a&&a.length?a.map(function(e){return V(V({},i),e.props)}):[]},U.parseCoordinateOfPie=function(e,t){var n=t.top,r=t.left,i=t.width,a=t.height,o=(0,f.$4)(i,a);return{cx:r+(0,T.h1)(e.props.cx,i,i/2),cy:n+(0,T.h1)(e.props.cy,a,a/2),innerRadius:(0,T.h1)(e.props.innerRadius,o,0),outerRadius:(0,T.h1)(e.props.outerRadius,o,.8*o),maxRadius:e.props.maxRadius||Math.sqrt(i*i+a*a)/2}},U.getComposedData=function(e){var t,n,r=e.item,i=e.offset,a=U.getRealPieData(r);if(!a||!a.length)return null;var o=r.props,s=o.cornerRadius,l=o.startAngle,c=o.endAngle,u=o.paddingAngle,p=o.dataKey,d=o.nameKey,m=o.valueKey,h=o.tooltipType,y=Math.abs(r.props.minAngle),v=U.parseCoordinateOfPie(r,i),A=U.parseDeltaAngle(l,c),g=Math.abs(A),b=p;S()(p)&&S()(m)?((0,K.Z)(!1,'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'),b="value"):S()(p)&&((0,K.Z)(!1,'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'),b=m);var x=a.filter(function(e){return 0!==(0,_.F$)(e,b,0)}).length,j=g-x*y-(g>=360?x:x-1)*u,O=a.reduce(function(e,t){var n=(0,_.F$)(t,b,0);return e+((0,T.hj)(n)?n:0)},0);return O>0&&(t=a.map(function(e,t){var r,i=(0,_.F$)(e,b,0),a=(0,_.F$)(e,d,t),o=((0,T.hj)(i)?i:0)/O,c=(r=t?n.endAngle+(0,T.uY)(A)*u*(0!==i?1:0):l)+(0,T.uY)(A)*((0!==i?y:0)+o*j),p=(r+c)/2,m=(v.innerRadius+v.outerRadius)/2,g=[{name:a,value:i,payload:e,dataKey:b,type:h}],x=(0,f.op)(v.cx,v.cy,m,p);return n=V(V(V({percent:o,cornerRadius:s,name:a,tooltipPayload:g,midAngle:p,middleRadius:m,tooltipPosition:x},e),v),{},{value:(0,_.F$)(e,b),startAngle:r,endAngle:c,payload:e,paddingAngle:(0,T.uY)(A)*u})})),V(V({},v),{},{sectors:t,data:a})};var q=(0,u.z)({chartName:"PieChart",GraphicalChild:U,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:p.I},{axisType:"radiusAxis",AxisComp:d.S}],formatAxisMap:f.t9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),G=n(14888),J=n(21609);let Q=[{name:"R&D",value:50,color:"#00d4bd"},{name:"Operational",value:85,color:"#ffe700"},{name:"Networking",value:16,color:"#FFA1A1"},{name:"Hiring",value:50,color:"#826bf8"}],X=Math.PI/180,ee=e=>{let{cx:t,cy:n,midAngle:i,innerRadius:a,outerRadius:o,percent:s}=e,l=a+(o-a)*.5;return(0,r.jsx)("text",{x:t+l*Math.cos(-i*X),y:n+l*Math.sin(-i*X),fill:"#fff",textAnchor:"middle",dominantBaseline:"central",children:"".concat((100*s).toFixed(0),"%")})},et=()=>(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(o.Z,{title:"Expense Ratio",subheader:"Spending on various categories",subheaderTypographyProps:{sx:{color:e=>"".concat(e.palette.text.disabled," !important")}}}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{sx:{height:350},children:(0,r.jsx)(c.h,{children:(0,r.jsxs)(q,{height:350,style:{direction:"ltr"},children:[(0,r.jsx)(U,{data:Q,innerRadius:80,dataKey:"value",label:ee,labelLine:!1,children:Q.map((e,t)=>(0,r.jsx)(C.b,{fill:e.color},"cell-".concat(t)))}),(0,r.jsx)(G.u,{})]})})}),(0,r.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",mb:4,justifyContent:"center"},children:[(0,r.jsxs)(i.Z,{sx:{mr:6,display:"flex",alignItems:"center","& svg":{mr:1.5,color:"#00d4bd"}},children:[(0,r.jsx)(J.Z,{icon:"mdi:circle",fontSize:"0.75rem"}),(0,r.jsx)(s.Z,{variant:"body2",children:"R&D"})]}),(0,r.jsxs)(i.Z,{sx:{mr:6,display:"flex",alignItems:"center","& svg":{mr:1.5,color:"#ffe700"}},children:[(0,r.jsx)(J.Z,{icon:"mdi:circle",fontSize:"0.75rem"}),(0,r.jsx)(s.Z,{variant:"body2",children:"Operational"})]}),(0,r.jsxs)(i.Z,{sx:{mr:6,display:"flex",alignItems:"center","& svg":{mr:1.5,color:"#FFA1A1"}},children:[(0,r.jsx)(J.Z,{icon:"mdi:circle",fontSize:"0.75rem"}),(0,r.jsx)(s.Z,{variant:"body2",children:"Networking"})]}),(0,r.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center","& svg":{mr:1.5,color:"#826bf8"}},children:[(0,r.jsx)(J.Z,{icon:"mdi:circle",fontSize:"0.75rem"}),(0,r.jsx)(s.Z,{variant:"body2",children:"Hiring"})]})]})]})]});var en=et},43815:function(e,t,n){"use strict";n.d(t,{b:function(){return r}});var r=function(e){return null};r.displayName="Cell"}}]);