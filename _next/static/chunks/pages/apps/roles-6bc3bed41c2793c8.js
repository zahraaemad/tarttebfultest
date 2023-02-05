(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{86422:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/roles",function(){return t(79961)}])},10792:function(e,n,t){"use strict";var s=t(85893),a=t(79072);let l=e=>{let{title:n,subtitle:t}=e;return(0,s.jsxs)(a.ZP,{item:!0,xs:12,children:[n,t||null]})};n.Z=l},79961:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return $}});var s=t(85893),a=t(79072),l=t(29630),i=t(10792),r=t(67294),c=t(41664),o=t.n(c),d=t(61953),x=t(49837),h=t(78713),m=t(80562),p=t(21609),u=t(9473),j=t(7071),Z=t(92024),g=t(83552),f=t(83675),v=t(54225),y=t(31538),b=t(67836),w=t(3695),C=t(55343),P=t(53442);let S=e=>{let{plan:n,handlePlanChange:t,handleFilter:a,value:l}=e;return(0,s.jsxs)(d.Z,{sx:{p:5,pb:3,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(v.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",startIcon:(0,s.jsx)(p.Z,{icon:"mdi:export-variant"}),children:"Export"}),(0,s.jsxs)(d.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,s.jsx)(b.Z,{size:"small",value:l,placeholder:"Search User",sx:{mr:6,mb:2},onChange:e=>a(e.target.value)}),(0,s.jsxs)(C.Z,{size:"small",sx:{mb:2},children:[(0,s.jsx)(w.Z,{id:"plan-select",children:"Select Plan"}),(0,s.jsxs)(P.Z,{size:"small",value:n,id:"select-plan",label:"Select Plan",labelId:"plan-select",onChange:t,inputProps:{placeholder:"Select Plan"},children:[(0,s.jsx)(y.Z,{value:"",children:"Select Plan"}),(0,s.jsx)(y.Z,{value:"basic",children:"Basic"}),(0,s.jsx)(y.Z,{value:"company",children:"Company"}),(0,s.jsx)(y.Z,{value:"enterprise",children:"Enterprise"}),(0,s.jsx)(y.Z,{value:"team",children:"Team"})]})]})]})]})},z={admin:{icon:"mdi:laptop",color:"error.main"},author:{icon:"mdi:cog-outline",color:"warning.main"},editor:{icon:"mdi:pencil-outline",color:"info.main"},maintainer:{icon:"mdi:chart-donut",color:"success.main"},subscriber:{icon:"mdi:account-outline",color:"primary.main"}},k={active:"success",pending:"warning",inactive:"secondary"},W=e=>e.avatar.length?(0,s.jsx)(Z.Z,{src:e.avatar,sx:{mr:3,width:34,height:34}}):(0,s.jsx)(Z.Z,{skin:"light",color:e.avatarColor,sx:{mr:3,width:34,height:34,fontSize:"1rem"},children:(0,g.Q)(e.fullName?e.fullName:"John Doe")}),N=[{flex:.2,minWidth:230,field:"fullName",headerName:"User",renderCell(e){let{row:n}=e,{fullName:t,username:a}=n;return(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center"},children:[W(n),(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:[(0,s.jsx)(l.Z,{noWrap:!0,component:o(),variant:"subtitle2",href:"/apps/user/view/overview/",sx:{fontWeight:600,color:"text.primary",textDecoration:"none","&:hover":{color:"primary.main"}},children:t}),(0,s.jsx)(l.Z,{noWrap:!0,variant:"caption",children:"@".concat(a)})]})]})}},{flex:.2,minWidth:250,field:"email",headerName:"Email",renderCell(e){let{row:n}=e;return(0,s.jsx)(l.Z,{variant:"body2",noWrap:!0,children:n.email})}},{flex:.15,field:"role",minWidth:150,headerName:"Role",renderCell(e){let{row:n}=e;return(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center","& svg":{mr:3,color:z[n.role].color}},children:[(0,s.jsx)(p.Z,{icon:z[n.role].icon,fontSize:20}),(0,s.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.role})]})}},{flex:.15,minWidth:120,headerName:"Plan",field:"currentPlan",renderCell(e){let{row:n}=e;return(0,s.jsx)(l.Z,{noWrap:!0,variant:"subtitle1",sx:{textTransform:"capitalize"},children:n.currentPlan})}},{flex:.1,minWidth:110,field:"status",headerName:"Status",renderCell(e){let{row:n}=e;return(0,s.jsx)(j.Z,{skin:"light",size:"small",label:n.status,color:k[n.status],sx:{textTransform:"capitalize"}})}},{flex:.1,minWidth:100,sortable:!1,field:"actions",headerName:"Actions",renderCell:()=>(0,s.jsx)(m.Z,{component:o(),href:"/apps/user/view/overview/",children:(0,s.jsx)(p.Z,{icon:"mdi:eye-outline"})})}],A=()=>{let[e,n]=(0,r.useState)(""),[t,l]=(0,r.useState)(""),[i,c]=(0,r.useState)(10),o=(0,u.I0)(),d=(0,u.v9)(e=>e.user);(0,r.useEffect)(()=>{o((0,f.rQ)({role:"",q:t,status:"",currentPlan:e}))},[o,e,t]);let m=(0,r.useCallback)(e=>{l(e)},[]),p=(0,r.useCallback)(e=>{n(e.target.value)},[]);return(0,s.jsx)(a.ZP,{container:!0,spacing:6,children:(0,s.jsx)(a.ZP,{item:!0,xs:12,children:(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(S,{plan:e,value:t,handleFilter:m,handlePlanChange:p}),(0,s.jsx)(h._,{autoHeight:!0,rows:d.data,columns:N,checkboxSelection:!0,pageSize:i,disableSelectionOnClick:!0,rowsPerPageOptions:[10,25,50],onPageSizeChange:e=>c(e),sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}}})]})})})};var E=t(1163),R=t(90244),I=t(72347),_=t(1890),T=t(72389),M=t(75158),U=t(69417),D=t(39807),O=t(7272),F=t(93978),L=t(77745),H=t(54209),Q=t(91359),X=t(76779),q=t(95398),B=t(86777),G=t(22841);let J=[{totalUsers:4,title:"Administrator",avatars:["1.png","2.png","3.png","4.png"]},{totalUsers:7,title:"Manager",avatars:["5.png","6.png","7.png","8.png","1.png","2.png","3.png"]},{totalUsers:5,title:"Users",avatars:["4.png","5.png","6.png","7.png","8.png"]},{totalUsers:3,title:"Support",avatars:["1.png","2.png","3.png"]},{totalUsers:2,title:"Restricted User",avatars:["4.png","5.png"]}],K=["User Management","Content Management","Disputes Management","Database Management","Financial Management","Reporting","API Control","Repository Management","Payroll"],V=()=>{let[e,n]=(0,r.useState)(!1),[t,i]=(0,r.useState)("Add"),[c,o]=(0,r.useState)([]),[h,u]=(0,r.useState)(!1),j=()=>n(!0),Z=()=>{n(!1),o([]),u(!1)},g=e=>{c.includes(e)?(c.splice(c.indexOf(e),1),o([...c])):(c.push(e),o([...c]))},f=()=>{h?o([]):K.forEach(e=>{let n=e.toLowerCase().split(" ").join("-");g("".concat(n,"-read")),g("".concat(n,"-write")),g("".concat(n,"-create"))})};return(0,r.useEffect)(()=>{c.length>0&&c.length<3*K.length?u(!0):u(!1)},[c]),(0,s.jsxs)(a.ZP,{container:!0,spacing:6,className:"match-height",children:[J.map((e,n)=>(0,s.jsx)(a.ZP,{item:!0,xs:12,sm:6,lg:4,children:(0,s.jsx)(x.Z,{children:(0,s.jsxs)(Q.Z,{children:[(0,s.jsxs)(d.Z,{sx:{mb:3,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsx)(l.Z,{variant:"body2",children:"Total ".concat(e.totalUsers," users")}),(0,s.jsx)(H.Z,{max:4,sx:{"& .MuiAvatar-root":{width:40,height:40,fontSize:"0.875rem"}},children:e.avatars.map((n,t)=>(0,s.jsx)(I.Z,{alt:e.title,src:"/images/avatars/".concat(n)},t))})]}),(0,s.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},children:[(0,s.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)(l.Z,{variant:"h6",children:e.title}),(0,s.jsx)(l.Z,{href:"/",variant:"body2",component:E.Z,sx:{color:"primary.main"},onClick(e){e.preventDefault(),j(),i("Edit")},children:"Edit Role"})]}),(0,s.jsx)(m.Z,{sx:{color:"text.secondary"},children:(0,s.jsx)(p.Z,{icon:"mdi:content-copy",fontSize:20})})]})]})})},n)),(0,s.jsx)(a.ZP,{item:!0,xs:12,sm:6,lg:4,children:(0,s.jsx)(x.Z,{sx:{cursor:"pointer"},onClick(){j(),i("Add")},children:(0,s.jsxs)(a.ZP,{container:!0,sx:{height:"100%"},children:[(0,s.jsx)(a.ZP,{item:!0,xs:5,children:(0,s.jsx)(d.Z,{sx:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},children:(0,s.jsx)("img",{width:65,height:130,alt:"add-role",src:"/images/pages/add-new-role-illustration.png"})})}),(0,s.jsx)(a.ZP,{item:!0,xs:7,children:(0,s.jsx)(Q.Z,{children:(0,s.jsxs)(d.Z,{sx:{textAlign:"right"},children:[(0,s.jsx)(v.Z,{variant:"contained",sx:{mb:2.5,whiteSpace:"nowrap"},onClick(){j(),i("Add")},children:"Add Role"}),(0,s.jsx)(l.Z,{variant:"body2",children:"Add role, if it doesn't exist."})]})})})]})})}),(0,s.jsxs)(_.Z,{fullWidth:!0,maxWidth:"md",scroll:"body",onClose:Z,open:e,children:[(0,s.jsxs)(L.Z,{sx:{textAlign:"center"},children:[(0,s.jsx)(l.Z,{variant:"h5",component:"span",children:"".concat(t," Role")}),(0,s.jsx)(l.Z,{variant:"body2",children:"Set Role Permissions"})]}),(0,s.jsxs)(q.Z,{sx:{p:{xs:6,sm:12}},children:[(0,s.jsx)(d.Z,{sx:{my:4},children:(0,s.jsx)(C.Z,{fullWidth:!0,children:(0,s.jsx)(b.Z,{label:"Role Name",placeholder:"Enter Role Name"})})}),(0,s.jsx)(l.Z,{variant:"h6",children:"Role Permissions"}),(0,s.jsx)(B.Z,{children:(0,s.jsxs)(R.Z,{size:"small",children:[(0,s.jsx)(F.Z,{children:(0,s.jsxs)(U.Z,{children:[(0,s.jsx)(O.Z,{sx:{pl:"0 !important"},children:(0,s.jsxs)(d.Z,{sx:{display:"flex",fontSize:"0.875rem",whiteSpace:"nowrap",alignItems:"center",textTransform:"capitalize","& svg":{ml:1,cursor:"pointer"}},children:["Administrator Access",(0,s.jsx)(T.Z,{placement:"top",title:"Allows a full access to the system",children:(0,s.jsx)(d.Z,{sx:{display:"flex"},children:(0,s.jsx)(p.Z,{icon:"mdi:information-outline",fontSize:"1rem"})})})]})}),(0,s.jsx)(O.Z,{colSpan:3,children:(0,s.jsx)(G.Z,{label:"Select All",sx:{"& .MuiTypography-root":{textTransform:"capitalize"}},control:(0,s.jsx)(M.Z,{size:"small",onChange:f,indeterminate:h,checked:c.length===3*K.length})})})]})}),(0,s.jsx)(D.Z,{children:K.map((e,n)=>{let t=e.toLowerCase().split(" ").join("-");return(0,s.jsxs)(U.Z,{sx:{"& .MuiTableCell-root:first-of-type":{pl:"0 !important"}},children:[(0,s.jsx)(O.Z,{sx:{fontWeight:600,whiteSpace:"nowrap",color:e=>"".concat(e.palette.text.primary," !important")},children:e}),(0,s.jsx)(O.Z,{children:(0,s.jsx)(G.Z,{label:"Read",control:(0,s.jsx)(M.Z,{size:"small",id:"".concat(t,"-read"),onChange:()=>g("".concat(t,"-read")),checked:c.includes("".concat(t,"-read"))})})}),(0,s.jsx)(O.Z,{children:(0,s.jsx)(G.Z,{label:"Write",control:(0,s.jsx)(M.Z,{size:"small",id:"".concat(t,"-write"),onChange:()=>g("".concat(t,"-write")),checked:c.includes("".concat(t,"-write"))})})}),(0,s.jsx)(O.Z,{children:(0,s.jsx)(G.Z,{label:"Create",control:(0,s.jsx)(M.Z,{size:"small",id:"".concat(t,"-create"),onChange:()=>g("".concat(t,"-create")),checked:c.includes("".concat(t,"-create"))})})})]},n)})})]})})]}),(0,s.jsx)(X.Z,{sx:{pt:0,display:"flex",justifyContent:"center"},children:(0,s.jsxs)(d.Z,{className:"demo-space-x",children:[(0,s.jsx)(v.Z,{size:"large",type:"submit",variant:"contained",onClick:Z,children:"Submit"}),(0,s.jsx)(v.Z,{size:"large",color:"secondary",variant:"outlined",onClick:Z,children:"Cancel"})]})})]})]})},Y=()=>(0,s.jsxs)(a.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(i.Z,{title:(0,s.jsx)(l.Z,{variant:"h5",children:"Roles List"}),subtitle:(0,s.jsx)(l.Z,{variant:"body2",children:"A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need"})}),(0,s.jsx)(a.ZP,{item:!0,xs:12,sx:{mb:5},children:(0,s.jsx)(V,{})}),(0,s.jsx)(i.Z,{title:(0,s.jsx)(l.Z,{variant:"h5",children:"Total users with their roles"}),subtitle:(0,s.jsx)(l.Z,{variant:"body2",children:"Find all of your company’s administrator accounts and their associate roles."})}),(0,s.jsx)(a.ZP,{item:!0,xs:12,children:(0,s.jsx)(A,{})})]});var $=Y}},function(e){e.O(0,[2419,6294,8713,7780,9774,2888,179],function(){return e(e.s=86422)}),_N_E=e.O()}]);