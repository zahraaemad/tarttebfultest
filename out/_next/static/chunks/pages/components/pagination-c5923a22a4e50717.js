(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4600],{54418:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/pagination",function(){return a(85438)}])},39913:function(n,e,a){"use strict";a.d(e,{Z:function(){return C}});var s=a(85893),t=a(67294),i=a(61953),o=a(49837),r=a(72389),l=a(44373),c=a(93481),d=a(80562),u=a(59742),x=a(91359),g=a(87054),p=a(61225),m=a(85390),h=a(21609),j=a(15660),P=a.n(j),Z=a(86501),f=a(66485),y=a.n(f);let v=n=>n&&("TEXTAREA"===n.nodeName||"INPUT"===n.nodeName),N=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,t.useRef)(null),a=()=>{n.onSuccess&&n.onSuccess(),n.selectOnCopy&&v(e.current)&&e.current.select()},s=()=>{n.onError&&n.onError();let a=!1!==n.selectOnError;a&&v(e.current)&&e.current.select()},i=n=>{y()(n).then(a).catch(s)},o=(0,t.useCallback)(n=>{"string"==typeof n?i(n):e.current&&i(e.current.value)},[]);return{copy:o,target:e}},b=n=>{let{id:e,sx:a,code:j,title:f,children:y,className:v}=n,[b,C]=(0,t.useState)(!1),[w,I]=(0,t.useState)(null!==j.tsx?"tsx":"jsx"),S=N(),B=(0,p.Z)(n=>n.breakpoints.down("md"));(0,t.useEffect)(()=>{P().highlightAll()},[b,w]);let U=()=>null!==j.tsx&&"tsx"===w?j.tsx.props.children.props.children:null!==j.jsx&&"jsx"===w?j.jsx.props.children.props.children:"",z=()=>{S.copy(U()),Z.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,s.jsxs)(o.Z,{className:v,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...a},id:e||"card-snippet--".concat(f.toLowerCase().replace(/ /g,"-")),children:[(0,s.jsx)(u.Z,{title:f,...B?{}:{action:(0,s.jsx)(d.Z,{onClick:()=>C(!b),children:(0,s.jsx)(h.Z,{icon:"mdi:code-tags",fontSize:20})})}}),(0,s.jsx)(x.Z,{children:y}),B?null:(0,s.jsxs)(c.Z,{in:b,children:[(0,s.jsx)(l.Z,{sx:{my:"0 !important"}}),(0,s.jsxs)(x.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,s.jsx)(i.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,s.jsxs)(m.Z,{exclusive:!0,size:"small",color:"primary",value:w,onChange:(n,e)=>null!==e?I(e):null,children:[null!==j.tsx?(0,s.jsx)(g.Z,{value:"tsx",children:(0,s.jsx)(h.Z,{icon:"mdi:language-typescript",fontSize:20})}):null,null!==j.jsx?(0,s.jsx)(g.Z,{value:"jsx",children:(0,s.jsx)(h.Z,{icon:"mdi:language-javascript",fontSize:20})}):null]})}),(0,s.jsx)(r.Z,{title:"Copy the source",placement:"top",children:(0,s.jsx)(d.Z,{onClick:z,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,s.jsx)(h.Z,{icon:"mdi:content-copy",fontSize:20})})}),(0,s.jsx)("div",{children:null!==j[w]?j[w]:null})]})]})]})};var C=b},85438:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return S}});var s=a(85893),t=a(67074),i=a(29630),o=a(79072),r=a(39913),l=a(65824);let c=()=>(0,s.jsxs)("div",{className:"demo-space-y",children:[(0,s.jsx)(l.Z,{count:10,size:"small"}),(0,s.jsx)(l.Z,{count:10,color:"primary"}),(0,s.jsx)(l.Z,{count:10,size:"large",color:"secondary"})]}),d=()=>(0,s.jsxs)("div",{className:"demo-space-y",children:[(0,s.jsx)(l.Z,{count:10}),(0,s.jsx)(l.Z,{count:10,color:"primary"}),(0,s.jsx)(l.Z,{count:10,color:"secondary"})]}),u=()=>(0,s.jsxs)("div",{className:"demo-space-y",children:[(0,s.jsx)(l.Z,{count:11,defaultPage:6,siblingCount:0}),(0,s.jsx)(l.Z,{count:11,defaultPage:6}),(0,s.jsx)(l.Z,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),(0,s.jsx)(l.Z,{count:11,defaultPage:6,boundaryCount:2})]}),x=()=>(0,s.jsxs)("div",{className:"demo-space-y",children:[(0,s.jsx)(l.Z,{count:10,shape:"rounded",color:"primary"}),(0,s.jsx)(l.Z,{count:10,variant:"outlined",shape:"rounded",color:"secondary"})]}),g=()=>(0,s.jsxs)("div",{className:"demo-space-y",children:[(0,s.jsx)(l.Z,{count:10,showFirstButton:!0,showLastButton:!0}),(0,s.jsx)(l.Z,{count:10,hidePrevButton:!0,hideNextButton:!0})]}),p=()=>(0,s.jsxs)("div",{className:"demo-space-y",children:[(0,s.jsx)(l.Z,{count:10,variant:"outlined"}),(0,s.jsx)(l.Z,{count:10,variant:"outlined",color:"primary"}),(0,s.jsx)(l.Z,{count:10,variant:"outlined",color:"secondary"})]}),m=()=>(0,s.jsxs)("div",{className:"demo-space-y",children:[(0,s.jsx)(l.Z,{count:10,disabled:!0}),(0,s.jsx)(l.Z,{count:10,variant:"outlined",disabled:!0})]});var h=a(67294);let j=()=>{let[n,e]=(0,h.useState)(1),a=(n,a)=>{e(a)};return(0,s.jsxs)("div",{children:[(0,s.jsxs)(i.Z,{sx:{mb:2},children:["Page: ",n]}),(0,s.jsx)(l.Z,{count:10,page:n,onChange:a})]})},P=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Pagination from '@mui/material/Pagination'\n\nconst PaginationButtons = () => {\n  return (\n    <div className='demo-space-y'>\n      <Pagination count={10} showFirstButton showLastButton />\n      <Pagination count={10} hidePrevButton hideNextButton />\n    </div>\n  )\n}\n\nexport default PaginationButtons\n"})}),Z=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Typography from '@mui/material/Typography'\nimport Pagination from '@mui/material/Pagination'\n\nconst PaginationControlled = () => {\n  // ** State\n  const [page, setPage] = useState(1)\n\n  const handleChange = (event, value) => {\n    setPage(value)\n  }\n\n  return (\n    <div>\n      <Typography sx={{ mb: 2 }}>Page: {page}</Typography>\n      <Pagination count={10} page={page} onChange={handleChange} />\n    </div>\n  )\n}\n\nexport default PaginationControlled\n"})}),f=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Pagination from '@mui/material/Pagination'\n\nconst PaginationRanges = () => {\n  return (\n    <div className='demo-space-y'>\n      <Pagination count={11} defaultPage={6} siblingCount={0} />\n      <Pagination count={11} defaultPage={6} />\n      <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />\n      <Pagination count={11} defaultPage={6} boundaryCount={2} />\n    </div>\n  )\n}\n\nexport default PaginationRanges\n"})}),y=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Pagination from '@mui/material/Pagination'\n\nconst PaginationOutlined = () => {\n  return (\n    <div className='demo-space-y'>\n      <Pagination count={10} variant='outlined' />\n      <Pagination count={10} variant='outlined' color='primary' />\n      <Pagination count={10} variant='outlined' color='secondary' />\n    </div>\n  )\n}\n\nexport default PaginationOutlined\n"})}),v=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Pagination from '@mui/material/Pagination'\n\nconst PaginationDisabled = () => {\n  return (\n    <div className='demo-space-y'>\n      <Pagination count={10} disabled />\n      <Pagination count={10} variant='outlined' disabled />\n    </div>\n  )\n}\n\nexport default PaginationDisabled\n"})}),N=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Pagination from '@mui/material/Pagination'\n\nconst PaginationSizes = () => {\n  return (\n    <div className='demo-space-y'>\n      <Pagination count={10} size='small' />\n      <Pagination count={10} color='primary' />\n      <Pagination count={10} size='large' color='secondary' />\n    </div>\n  )\n}\n\nexport default PaginationSizes\n"})}),b=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Pagination from '@mui/material/Pagination'\n\nconst PaginationRounded = () => {\n  return (\n    <div className='demo-space-y'>\n      <Pagination count={10} shape='rounded' color='primary' />\n      <Pagination count={10} variant='outlined' shape='rounded' color='secondary' />\n    </div>\n  )\n}\n\nexport default PaginationRounded\n"})}),C=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Pagination from '@mui/material/Pagination'\n\nconst PaginationSimple = () => {\n  return (\n    <div className='demo-space-y'>\n      <Pagination count={10} />\n      <Pagination count={10} color='primary' />\n      <Pagination count={10} color='secondary' />\n    </div>\n  )\n}\n\nexport default PaginationSimple\n"})}),w=(0,t.ZP)(o.ZP)(n=>{let{theme:e}=n;return{"& .demo-space-y > *":{marginBottom:e.spacing(5.2),"&:last-of-type":{marginBottom:0}}}}),I=()=>(0,s.jsxs)(w,{container:!0,spacing:6,className:"match-height",children:[(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{title:"Simple Pagination",code:{tsx:null,jsx:C},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use the following props with ",(0,s.jsx)("code",{children:"Pagination"})," component: ",(0,s.jsx)("code",{children:"count"})," prop for number of page items and ",(0,s.jsx)("code",{children:"color"})," prop for different colored pagination."]}),(0,s.jsx)(d,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{title:"Outlined Pagination",code:{tsx:null,jsx:y},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use ",(0,s.jsx)("code",{children:"variant='outlined'"})," prop for outlined pagination."]}),(0,s.jsx)(p,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{title:"Disabled Pagination",code:{tsx:null,jsx:v},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use ",(0,s.jsx)("code",{children:"disabled"})," prop with ",(0,s.jsx)("code",{children:"Pagination"})," component to disable the whole pagination."]}),(0,s.jsx)(m,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{title:"Rounded Pagination",code:{tsx:null,jsx:b},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use ",(0,s.jsx)("code",{children:"shape='rounded'"})," prop for rounded pagination."]}),(0,s.jsx)(x,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{title:"Sizes",code:{tsx:null,jsx:N},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use ",(0,s.jsxs)("code",{children:["size=","{'small' | 'large'}"]})," prop for different sizes of pagination."]}),(0,s.jsx)(c,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{title:"Buttons",code:{tsx:null,jsx:P},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use ",(0,s.jsx)("code",{children:"showFirstButton"})," & ",(0,s.jsx)("code",{children:"showLastButton"})," props to show first-page and last-page buttons and ",(0,s.jsx)("code",{children:"hidePrevButton"})," & ",(0,s.jsx)("code",{children:"hideNextButton"})," props to hide previous-page and next-page buttons."]}),(0,s.jsx)(g,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(r.Z,{title:"Controlled Pagination",code:{tsx:null,jsx:Z},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Manage ",(0,s.jsx)("code",{children:"page"})," and ",(0,s.jsx)("code",{children:"onChange"})," props with the help of a state."]}),(0,s.jsx)(j,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(r.Z,{title:"Pagination Ranges",code:{tsx:null,jsx:f},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["You can specify how many digits to display either side of current page with the ",(0,s.jsx)("code",{children:"siblingRange"})," ","prop, and adjacent to the start and end page number with the ",(0,s.jsx)("code",{children:"boundaryRange"})," prop."]}),(0,s.jsx)(u,{})]})})]});var S=I}},function(n){n.O(0,[5307,8593,9774,2888,179],function(){return n(n.s=54418)}),_N_E=n.O()}]);