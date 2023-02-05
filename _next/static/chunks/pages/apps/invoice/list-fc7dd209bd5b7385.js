(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8774],{91359:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(87462),a=n(63366),r=n(67294),l=n(86010),o=n(94780),s=n(67074),d=n(78884),c=n(1588),u=n(34867);function h(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var x=n(85893);let p=["className","component"],m=e=>{let{classes:t}=e;return(0,o.Z)({root:["root"]},h,t)},Z=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=r.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:r,component:o="div"}=n,s=(0,a.Z)(n,p),c=(0,i.Z)({},n,{component:o}),u=m(c);return(0,x.jsx)(Z,(0,i.Z)({as:o,className:(0,l.Z)(u.root,r),ownerState:c,ref:t},s))});var g=f},59742:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var i=n(63366),a=n(87462),r=n(67294),l=n(86010),o=n(94780),s=n(29630),d=n(78884),c=n(67074),u=n(1588),h=n(34867);function x(e){return(0,h.Z)("MuiCardHeader",e)}let p=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var m=n(85893);let Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=e=>{let{classes:t}=e;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)},g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.Z)({[`& .${p.title}`]:t.title,[`& .${p.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),b=r.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:r,avatar:o,className:c,component:u="div",disableTypography:h=!1,subheader:x,subheaderTypographyProps:p,title:b,titleTypographyProps:C}=n,w=(0,i.Z)(n,Z),S=(0,a.Z)({},n,{component:u,disableTypography:h}),P=f(S),z=b;null==z||z.type===s.Z||h||(z=(0,m.jsx)(s.Z,(0,a.Z)({variant:o?"body2":"h5",className:P.title,component:"span",display:"block"},C,{children:z})));let D=x;return null==D||D.type===s.Z||h||(D=(0,m.jsx)(s.Z,(0,a.Z)({variant:o?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},p,{children:D}))),(0,m.jsxs)(g,(0,a.Z)({className:(0,l.Z)(P.root,c),as:u,ref:t,ownerState:S},w,{children:[o&&(0,m.jsx)(v,{className:P.avatar,ownerState:S,children:o}),(0,m.jsxs)(y,{className:P.content,ownerState:S,children:[z,D]}),r&&(0,m.jsx)(j,{className:P.action,ownerState:S,children:r})]}))});var C=b},7272:function(e,t,n){"use strict";var i=n(63366),a=n(87462),r=n(67294),l=n(86010),o=n(94780),s=n(41796),d=n(36622),c=n(21109),u=n(80858),h=n(78884),x=n(67074),p=n(84026),m=n(85893);let Z=["align","className","component","padding","scope","size","sortDirection","variant"],f=e=>{let{classes:t,variant:n,align:i,padding:a,size:r,stickyHeader:l}=e,s={root:["root",n,l&&"stickyHeader","inherit"!==i&&`align${(0,d.Z)(i)}`,"normal"!==a&&`padding${(0,d.Z)(a)}`,`size${(0,d.Z)(r)}`]};return(0,o.Z)(s,p.U,t)},g=(0,x.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,t[n.variant],t[`size${(0,d.Z)(n.size)}`],"normal"!==n.padding&&t[`padding${(0,d.Z)(n.padding)}`],"inherit"!==n.align&&t[`align${(0,d.Z)(n.align)}`],n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${"light"===e.palette.mode?(0,s.$n)((0,s.Fq)(e.palette.divider,1),.88):(0,s._j)((0,s.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${p.Z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),v=r.forwardRef(function(e,t){let n;let o=(0,h.Z)({props:e,name:"MuiTableCell"}),{align:s="inherit",className:d,component:x,padding:p,scope:v,size:j,sortDirection:y,variant:b}=o,C=(0,i.Z)(o,Z),w=r.useContext(c.Z),S=r.useContext(u.Z),P=S&&"head"===S.variant;n=x||(P?"th":"td");let z=v;!z&&P&&(z="col");let D=b||S&&S.variant,k=(0,a.Z)({},o,{align:s,component:n,padding:p||(w&&w.padding?w.padding:"normal"),size:j||(w&&w.size?w.size:"medium"),sortDirection:y,stickyHeader:"head"===D&&w&&w.stickyHeader,variant:D}),M=f(k),N=null;return y&&(N="asc"===y?"ascending":"descending"),(0,m.jsx)(g,(0,a.Z)({as:n,ref:t,className:(0,l.Z)(M.root,d),"aria-sort":N,scope:z,ownerState:k},C))});t.Z=v},84026:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var i=n(1588),a=n(34867);function r(e){return(0,a.Z)("MuiTableCell",e)}let l=(0,i.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);t.Z=l},21109:function(e,t,n){"use strict";var i=n(67294);let a=i.createContext();t.Z=a},80858:function(e,t,n){"use strict";var i=n(67294);let a=i.createContext();t.Z=a},60376:function(e,t,n){"use strict";n(67294);var i=n(54235),a=n(85893);t.Z=(0,i.Z)((0,a.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},79476:function(e,t,n){"use strict";n(67294);var i=n(54235),a=n(85893);t.Z=(0,i.Z)((0,a.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},96557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/invoice/list",function(){return n(13117)}])},13117:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var i=n(85893),a=n(67294),r=n(41664),l=n.n(r),o=n(61953),s=n(79072),d=n(49837),c=n(72389),u=n(67074),h=n(31538),x=n(67836),p=n(59742),m=n(80562),Z=n(3695),f=n(29630),g=n(55343),v=n(91359),j=n(78713),y=n(53442),b=n(21609),C=n(42298),w=n(9198),S=n.n(w),P=n(9473),z=n(80822),D=n(83552),k=n(7071),M=n(92024),N=n(4560),R=n(54225);let W=e=>{let{value:t,selectedRows:n,handleFilter:a}=e;return(0,i.jsxs)(o.Z,{sx:{p:5,pb:3,width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsxs)(y.Z,{size:"small",displayEmpty:!0,defaultValue:"",sx:{mr:4,mb:2},disabled:n&&0===n.length,renderValue:e=>0===e.length?"Actions":e,children:[(0,i.jsx)(h.Z,{disabled:!0,children:"Actions"}),(0,i.jsx)(h.Z,{value:"Delete",children:"Delete"}),(0,i.jsx)(h.Z,{value:"Edit",children:"Edit"}),(0,i.jsx)(h.Z,{value:"Send",children:"Send"})]}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,i.jsx)(x.Z,{size:"small",value:t,placeholder:"Search Invoice",sx:{mr:4,mb:2,maxWidth:"180px"},onChange:e=>a(e.target.value)}),(0,i.jsx)(R.Z,{sx:{mb:2},component:l(),variant:"contained",href:"/apps/invoice/add",children:"Create Invoice"})]})]})};var H=n(64488);let I=(0,u.ZP)(l())(e=>{let{theme:t}=e;return{textDecoration:"none",color:t.palette.primary.main}}),T={Sent:{color:"secondary",icon:"mdi:send"},Paid:{color:"success",icon:"mdi:check"},Draft:{color:"primary",icon:"mdi:content-save-outline"},"Partial Payment":{color:"warning",icon:"mdi:chart-pie"},"Past Due":{color:"error",icon:"mdi:information-outline"},Downloaded:{color:"info",icon:"mdi:arrow-down"}},_=e=>e.avatar.length?(0,i.jsx)(M.Z,{src:e.avatar,sx:{mr:3,width:34,height:34}}):(0,i.jsx)(M.Z,{skin:"light",color:e.avatarColor||"primary",sx:{mr:3,fontSize:"1rem",width:34,height:34},children:(0,D.Q)(e.name||"John Doe")}),A=[{flex:.1,field:"id",minWidth:80,headerName:"#",renderCell(e){let{row:t}=e;return(0,i.jsx)(I,{href:"/apps/invoice/preview/".concat(t.id),children:"#".concat(t.id)})}},{flex:.1,minWidth:80,field:"invoiceStatus",renderHeader:()=>(0,i.jsx)(o.Z,{sx:{display:"flex",color:"action.active"},children:(0,i.jsx)(b.Z,{icon:"mdi:trending-up",fontSize:20})}),renderCell(e){let{row:t}=e,{dueDate:n,balance:a,invoiceStatus:r}=t,l=T[r]?T[r].color:"primary";return(0,i.jsx)(c.Z,{title:(0,i.jsxs)("div",{children:[(0,i.jsx)(f.Z,{variant:"caption",sx:{color:"common.white",fontWeight:600},children:r}),(0,i.jsx)("br",{}),(0,i.jsx)(f.Z,{variant:"caption",sx:{color:"common.white",fontWeight:600},children:"Balance:"})," ",a,(0,i.jsx)("br",{}),(0,i.jsx)(f.Z,{variant:"caption",sx:{color:"common.white",fontWeight:600},children:"Due Date:"})," ",n]}),children:(0,i.jsx)(M.Z,{skin:"light",color:l,sx:{width:34,height:34},children:(0,i.jsx)(b.Z,{icon:T[r].icon,fontSize:"1.25rem"})})})}},{flex:.25,field:"name",minWidth:300,headerName:"Client",renderCell(e){let{row:t}=e,{name:n,companyEmail:a}=t;return(0,i.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[_(t),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(f.Z,{noWrap:!0,variant:"body2",sx:{color:"text.primary",fontWeight:500,lineHeight:"22px",letterSpacing:".1px"},children:n}),(0,i.jsx)(f.Z,{noWrap:!0,variant:"caption",children:a})]})]})}},{flex:.1,minWidth:90,field:"total",headerName:"Total",renderCell(e){let{row:t}=e;return(0,i.jsx)(f.Z,{variant:"body2",children:"$".concat(t.total||0)})}},{flex:.15,minWidth:125,field:"issuedDate",headerName:"Issued Date",renderCell(e){let{row:t}=e;return(0,i.jsx)(f.Z,{variant:"body2",children:t.issuedDate})}},{flex:.1,minWidth:90,field:"balance",headerName:"Balance",renderCell(e){let{row:t}=e;return 0!==t.balance?(0,i.jsx)(f.Z,{variant:"body2",sx:{color:"text.primary"},children:t.balance}):(0,i.jsx)(k.Z,{size:"small",skin:"light",color:"success",label:"Paid"})}}],$=(0,a.forwardRef)((e,t)=>{let n=null!==e.start?(0,C.default)(e.start,"MM/dd/yyyy"):"",a=null!==e.end?" - ".concat((0,C.default)(e.end,"MM/dd/yyyy")):null,r="".concat(n).concat(null!==a?a:"");null===e.start&&e.dates.length&&e.setDates&&e.setDates([]);let l={...e};return delete l.setDates,(0,i.jsx)(x.Z,{fullWidth:!0,inputRef:t,...l,label:e.label||"",value:r})}),E=()=>{let[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(""),[u,x]=(0,a.useState)(10),[f,C]=(0,a.useState)(""),[w,D]=(0,a.useState)(null),[k,M]=(0,a.useState)([]),[R,I]=(0,a.useState)(null),T=(0,P.I0)(),_=(0,P.v9)(e=>e.invoice);(0,a.useEffect)(()=>{T((0,z.rQ)({dates:e,q:n,status:f}))},[T,f,n,e]);let E=e=>{r(e)},B=e=>{C(e.target.value)},O=e=>{let[n,i]=e;null!==n&&null!==i&&t(e),I(n),D(i)},F=[...A,{flex:.1,minWidth:130,sortable:!1,field:"actions",headerName:"Actions",renderCell(e){let{row:t}=e;return(0,i.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(c.Z,{title:"Delete Invoice",children:(0,i.jsx)(m.Z,{size:"small",sx:{mr:.5},onClick:()=>T((0,z.Wu)(t.id)),children:(0,i.jsx)(b.Z,{icon:"mdi:delete-outline"})})}),(0,i.jsx)(c.Z,{title:"View",children:(0,i.jsx)(m.Z,{size:"small",component:l(),sx:{mr:.5},href:"/apps/invoice/preview/".concat(t.id),children:(0,i.jsx)(b.Z,{icon:"mdi:eye-outline"})})}),(0,i.jsx)(N.Z,{iconProps:{fontSize:20},iconButtonProps:{size:"small"},menuProps:{sx:{"& .MuiMenuItem-root svg":{mr:2}}},options:[{text:"Download",icon:(0,i.jsx)(b.Z,{icon:"mdi:download",fontSize:20})},{text:"Edit",href:"/apps/invoice/edit/".concat(t.id),icon:(0,i.jsx)(b.Z,{icon:"mdi:pencil-outline",fontSize:20})},{text:"Duplicate",icon:(0,i.jsx)(b.Z,{icon:"mdi:content-copy",fontSize:20})}]})]})}}];return(0,i.jsx)(H.Z,{children:(0,i.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(p.Z,{title:"Filters"}),(0,i.jsx)(v.Z,{children:(0,i.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsxs)(g.Z,{fullWidth:!0,children:[(0,i.jsx)(Z.Z,{id:"invoice-status-select",children:"Invoice Status"}),(0,i.jsxs)(y.Z,{fullWidth:!0,value:f,sx:{mr:4,mb:2},label:"Invoice Status",onChange:B,labelId:"invoice-status-select",children:[(0,i.jsx)(h.Z,{value:"",children:"none"}),(0,i.jsx)(h.Z,{value:"downloaded",children:"Downloaded"}),(0,i.jsx)(h.Z,{value:"draft",children:"Draft"}),(0,i.jsx)(h.Z,{value:"paid",children:"Paid"}),(0,i.jsx)(h.Z,{value:"past due",children:"Past Due"}),(0,i.jsx)(h.Z,{value:"partial payment",children:"Partial Payment"})]})]})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(S(),{isClearable:!0,selectsRange:!0,monthsShown:2,endDate:w,selected:R,startDate:R,shouldCloseOnSelect:!1,id:"date-range-picker-months",onChange:O,customInput:(0,i.jsx)($,{dates:e,setDates:t,label:"Invoice Date",end:w,start:R})})})]})})]})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(W,{value:n,selectedRows:k,handleFilter:E}),(0,i.jsx)(j._,{autoHeight:!0,pagination:!0,rows:_.data,columns:F,checkboxSelection:!0,disableSelectionOnClick:!0,pageSize:Number(u),rowsPerPageOptions:[10,25,50],onSelectionModelChange:e=>M(e),onPageSizeChange:e=>x(e)})]})})]})})};var B=E},95828:function(){}},function(e){e.O(0,[9198,4661,6294,8713,4488,9774,2888,179],function(){return e(e.s=96557)}),_N_E=e.O()}]);