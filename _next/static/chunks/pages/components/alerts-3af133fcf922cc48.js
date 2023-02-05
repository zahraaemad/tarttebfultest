(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1498],{38391:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var i=t(87462),r=t(63366),s=t(67294),l=t(86010),o=t(94780),a=t(67074),c=t(78884),d=t(29630),u=t(1588),h=t(34867);function m(e){return(0,h.Z)("MuiAlertTitle",e)}(0,u.Z)("MuiAlertTitle",["root"]);var x=t(85893);let p=["className"],j=e=>{let{classes:n}=e;return(0,o.Z)({root:["root"]},m,n)},v=(0,a.ZP)(d.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),f=s.forwardRef(function(e,n){let t=(0,c.Z)({props:e,name:"MuiAlertTitle"}),{className:s}=t,o=(0,r.Z)(t,p),a=j(t);return(0,x.jsx)(v,(0,i.Z)({gutterBottom:!0,component:"div",ownerState:t,ref:n,className:(0,l.Z)(a.root,s)},o))});var g=f},19604:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var i=t(63366),r=t(87462),s=t(67294),l=t(86010),o=t(94780),a=t(41796),c=t(67074),d=t(78884),u=t(36622),h=t(70918),m=t(1588),x=t(34867);function p(e){return(0,x.Z)("MuiAlert",e)}let j=(0,m.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var v=t(80562),f=t(54235),g=t(85893),Z=(0,f.Z)((0,g.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),A=(0,f.Z)((0,g.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),y=(0,f.Z)((0,g.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),k=(0,f.Z)((0,g.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),C=t(96903);let w=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","variant"],T=e=>{let{variant:n,color:t,severity:i,classes:r}=e,s={root:["root",`${n}${(0,u.Z)(t||i)}`,`${n}`],icon:["icon"],message:["message"],action:["action"]};return(0,o.Z)(s,p,r)},b=(0,c.ZP)(h.Z,{name:"MuiAlert",slot:"Root",overridesResolver(e,n){let{ownerState:t}=e;return[n.root,n[t.variant],n[`${t.variant}${(0,u.Z)(t.color||t.severity)}`]]}})(({theme:e,ownerState:n})=>{let t="light"===e.palette.mode?a._j:a.$n,i="light"===e.palette.mode?a.$n:a._j,s=n.color||n.severity;return(0,r.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&"standard"===n.variant&&{color:e.vars?e.vars.palette.Alert[`${s}Color`]:t(e.palette[s].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${s}StandardBg`]:i(e.palette[s].light,.9),[`& .${j.icon}`]:e.vars?{color:e.vars.palette.Alert[`${s}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[s].main:e.palette[s].light}},s&&"outlined"===n.variant&&{color:e.vars?e.vars.palette.Alert[`${s}Color`]:t(e.palette[s].light,.6),border:`1px solid ${(e.vars||e).palette[s].light}`,[`& .${j.icon}`]:e.vars?{color:e.vars.palette.Alert[`${s}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[s].main:e.palette[s].light}},s&&"filled"===n.variant&&(0,r.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${s}FilledColor`],backgroundColor:e.vars.palette.Alert[`${s}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[s].dark:e.palette[s].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[s].dark:e.palette[s].main)}))}),S=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,n)=>n.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),B=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),I=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),N={success:(0,g.jsx)(Z,{fontSize:"inherit"}),warning:(0,g.jsx)(A,{fontSize:"inherit"}),error:(0,g.jsx)(y,{fontSize:"inherit"}),info:(0,g.jsx)(k,{fontSize:"inherit"})},z=s.forwardRef(function(e,n){var t,s;let o=(0,d.Z)({props:e,name:"MuiAlert"}),{action:a,children:c,className:u,closeText:h="Close",color:m,components:x={},componentsProps:p={},icon:j,iconMapping:f=N,onClose:Z,role:A="alert",severity:y="success",variant:k="standard"}=o,z=(0,i.Z)(o,w),M=(0,r.Z)({},o,{color:m,severity:y,variant:k}),O=T(M),E=null!=(t=x.CloseButton)?t:v.Z,R=null!=(s=x.CloseIcon)?s:C.Z;return(0,g.jsxs)(b,(0,r.Z)({role:A,elevation:0,ownerState:M,className:(0,l.Z)(O.root,u),ref:n},z,{children:[!1!==j?(0,g.jsx)(S,{ownerState:M,className:O.icon,children:j||f[y]||N[y]}):null,(0,g.jsx)(B,{ownerState:M,className:O.message,children:c}),null!=a?(0,g.jsx)(I,{ownerState:M,className:O.action,children:a}):null,null==a&&Z?(0,g.jsx)(I,{ownerState:M,className:O.action,children:(0,g.jsx)(E,(0,r.Z)({size:"small","aria-label":h,title:h,color:"inherit",onClick:Z},p.closeButton,{children:(0,g.jsx)(R,(0,r.Z)({fontSize:"small"},p.closeIcon))}))}):null]}))});var M=z},66485:function(e){function n(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(e){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(e)}async function i(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let i=window.getSelection(),r=window.document.createRange();i.removeAllRanges(),r.selectNode(t),i.addRange(r);let s=!1;try{s=window.document.execCommand("copy")}finally{i.removeAllRanges(),window.document.body.removeChild(t)}if(!s)throw n()}async function r(e){try{await t(e)}catch(s){try{await i(e)}catch(r){throw r||s||n()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ e.exports=r},80921:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts",function(){return t(58441)}])},39913:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var i=t(85893),r=t(67294),s=t(61953),l=t(49837),o=t(72389),a=t(44373),c=t(93481),d=t(80562),u=t(59742),h=t(91359),m=t(87054),x=t(61225),p=t(85390),j=t(21609),v=t(15660),f=t.n(v),g=t(86501),Z=t(66485),A=t.n(Z);let y=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName),k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,r.useRef)(null),t=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&y(n.current)&&n.current.select()},i=()=>{e.onError&&e.onError();let t=!1!==e.selectOnError;t&&y(n.current)&&n.current.select()},s=e=>{A()(e).then(t).catch(i)},l=(0,r.useCallback)(e=>{"string"==typeof e?s(e):n.current&&s(n.current.value)},[]);return{copy:l,target:n}},C=e=>{let{id:n,sx:t,code:v,title:Z,children:A,className:y}=e,[C,w]=(0,r.useState)(!1),[T,b]=(0,r.useState)(null!==v.tsx?"tsx":"jsx"),S=k(),B=(0,x.Z)(e=>e.breakpoints.down("md"));(0,r.useEffect)(()=>{f().highlightAll()},[C,T]);let I=()=>null!==v.tsx&&"tsx"===T?v.tsx.props.children.props.children:null!==v.jsx&&"jsx"===T?v.jsx.props.children.props.children:"",N=()=>{S.copy(I()),g.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,i.jsxs)(l.Z,{className:y,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...t},id:n||"card-snippet--".concat(Z.toLowerCase().replace(/ /g,"-")),children:[(0,i.jsx)(u.Z,{title:Z,...B?{}:{action:(0,i.jsx)(d.Z,{onClick:()=>w(!C),children:(0,i.jsx)(j.Z,{icon:"mdi:code-tags",fontSize:20})})}}),(0,i.jsx)(h.Z,{children:A}),B?null:(0,i.jsxs)(c.Z,{in:C,children:[(0,i.jsx)(a.Z,{sx:{my:"0 !important"}}),(0,i.jsxs)(h.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,i.jsx)(s.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,i.jsxs)(p.Z,{exclusive:!0,size:"small",color:"primary",value:T,onChange:(e,n)=>null!==n?b(n):null,children:[null!==v.tsx?(0,i.jsx)(m.Z,{value:"tsx",children:(0,i.jsx)(j.Z,{icon:"mdi:language-typescript",fontSize:20})}):null,null!==v.jsx?(0,i.jsx)(m.Z,{value:"jsx",children:(0,i.jsx)(j.Z,{icon:"mdi:language-javascript",fontSize:20})}):null]})}),(0,i.jsx)(o.Z,{title:"Copy the source",placement:"top",children:(0,i.jsx)(d.Z,{onClick:N,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,i.jsx)(j.Z,{icon:"mdi:content-copy",fontSize:20})})}),(0,i.jsx)("div",{children:null!==v[T]?v[T]:null})]})]})]})};var w=C},58441:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var i=t(85893),r=t(79072),s=t(29630),l=t(39913),o=t(19604);let a=()=>(0,i.jsxs)("div",{className:"demo-space-y",children:[(0,i.jsx)(o.Z,{severity:"error",children:"This is an error alert — check it out!"}),(0,i.jsx)(o.Z,{severity:"warning",children:"This is an warning alert — check it out!"}),(0,i.jsx)(o.Z,{severity:"info",children:"This is an info alert — check it out!"}),(0,i.jsx)(o.Z,{severity:"success",children:"This is an success alert — check it out!"})]}),c=()=>(0,i.jsxs)("div",{className:"demo-space-y",children:[(0,i.jsx)(o.Z,{variant:"filled",severity:"error",children:"This is an error alert — check it out!"}),(0,i.jsx)(o.Z,{variant:"filled",severity:"warning",children:"This is an warning alert — check it out!"}),(0,i.jsx)(o.Z,{variant:"filled",severity:"info",children:"This is an info alert — check it out!"}),(0,i.jsx)(o.Z,{variant:"filled",severity:"success",children:"This is an success alert — check it out!"})]});var d=t(54225);let u=()=>(0,i.jsxs)("div",{className:"demo-space-y",children:[(0,i.jsx)(o.Z,{onClose(e){e.preventDefault()},children:"This is a success alert — check it out!"}),(0,i.jsx)(o.Z,{action:(0,i.jsx)(d.Z,{color:"inherit",size:"small",children:"Undo"}),variant:"outlined",children:"This is a success alert — check it out!"}),(0,i.jsx)(o.Z,{action:(0,i.jsx)(d.Z,{color:"inherit",size:"small",children:"Undo"}),variant:"filled",children:"This is a success alert — check it out!"})]}),h=()=>(0,i.jsxs)("div",{className:"demo-space-y",children:[(0,i.jsx)(o.Z,{variant:"outlined",severity:"error",children:"This is an error alert — check it out!"}),(0,i.jsx)(o.Z,{variant:"outlined",severity:"warning",children:"This is an warning alert — check it out!"}),(0,i.jsx)(o.Z,{variant:"outlined",severity:"info",children:"This is an info alert — check it out!"}),(0,i.jsx)(o.Z,{variant:"outlined",severity:"success",children:"This is an success alert — check it out!"})]});var m=t(38391);let x=()=>(0,i.jsxs)("div",{className:"demo-space-y",children:[(0,i.jsxs)(o.Z,{severity:"error",children:[(0,i.jsx)(m.Z,{children:"Error"}),"This is an error alert — ",(0,i.jsx)("strong",{children:"check it out!"})]}),(0,i.jsxs)(o.Z,{severity:"warning",children:[(0,i.jsx)(m.Z,{children:"Warning"}),"This is an warning alert — ",(0,i.jsx)("strong",{children:"check it out!"})]}),(0,i.jsxs)(o.Z,{severity:"info",children:[(0,i.jsx)(m.Z,{children:"Info"}),"This is an info alert — ",(0,i.jsx)("strong",{children:"check it out!"})]}),(0,i.jsxs)(o.Z,{severity:"success",children:[(0,i.jsx)(m.Z,{children:"Success"}),"This is an success alert — ",(0,i.jsx)("strong",{children:"check it out!"})]})]});var p=t(67294),j=t(61953),v=t(9942),f=t(61760),g=t(25425),Z=t(93481),A=t(80562),y=t(21609);let k=()=>{let[e,n]=(0,p.useState)(!0),[t,r]=(0,p.useState)(!0),[s,l]=(0,p.useState)(!0),[a,c]=(0,p.useState)(!0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(j.Z,{sx:{mb:6},children:[(0,i.jsx)(Z.Z,{in:e,children:(0,i.jsx)(o.Z,{action:(0,i.jsx)(A.Z,{size:"small",color:"inherit","aria-label":"close",onClick:()=>n(!1),children:(0,i.jsx)(y.Z,{icon:"mdi:close",fontSize:"inherit"})}),children:"Close me!"})}),(0,i.jsx)(d.Z,{disabled:e,variant:"outlined",sx:{mt:2},onClick:()=>n(!0),children:"Open Collapse"})]}),(0,i.jsxs)(j.Z,{sx:{mb:6},children:[(0,i.jsx)(v.Z,{in:t,...t?{timeout:700}:{},children:(0,i.jsx)(o.Z,{action:(0,i.jsx)(A.Z,{size:"small",color:"inherit","aria-label":"close",onClick:()=>r(!1),children:(0,i.jsx)(y.Z,{icon:"mdi:close",fontSize:"inherit"})}),children:"Close me!"})}),(0,i.jsx)(d.Z,{disabled:t,variant:"outlined",sx:{mt:2},onClick:()=>r(!0),children:"Open Fade"})]}),(0,i.jsxs)(j.Z,{sx:{mb:6},children:[(0,i.jsx)(f.Z,{in:s,...s?{timeout:700}:{},children:(0,i.jsx)(o.Z,{action:(0,i.jsx)(A.Z,{size:"small",color:"inherit","aria-label":"close",onClick:()=>l(!1),children:(0,i.jsx)(y.Z,{icon:"mdi:close",fontSize:"inherit"})}),children:"Close me!"})}),(0,i.jsx)(d.Z,{disabled:s,variant:"outlined",sx:{mt:2},onClick:()=>l(!0),children:"Open Grow"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(g.Z,{in:a,direction:"left",...a?{timeout:500}:{},children:(0,i.jsx)(o.Z,{action:(0,i.jsx)(A.Z,{size:"small",color:"inherit","aria-label":"close",onClick:()=>c(!1),children:(0,i.jsx)(y.Z,{icon:"mdi:close",fontSize:"inherit"})}),children:"Close me!"})}),(0,i.jsx)(d.Z,{disabled:a,variant:"outlined",sx:{mt:2},onClick:()=>c(!0),children:"Open Slide"})]})]})},C=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport Button from '@mui/material/Button'\n\nconst AlertsBasic = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert\n        onClose={e => {\n          e.preventDefault()\n        }}\n      >\n        This is a success alert — check it out!\n      </Alert>\n      <Alert\n        action={\n          <Button color='inherit' size='small'>\n            Undo\n          </Button>\n        }\n        variant='outlined'\n      >\n        This is a success alert — check it out!\n      </Alert>\n      <Alert\n        action={\n          <Button color='inherit' size='small'>\n            Undo\n          </Button>\n        }\n        variant='filled'\n      >\n        This is a success alert — check it out!\n      </Alert>\n    </div>\n  )\n}\n\nexport default AlertsBasic\n"})}),w=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport AlertTitle from '@mui/material/AlertTitle'\n\nconst AlertsDescription = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert severity='error'>\n        <AlertTitle>Error</AlertTitle>\n        This is an error alert — <strong>check it out!</strong>\n      </Alert>\n      <Alert severity='warning'>\n        <AlertTitle>Warning</AlertTitle>\n        This is an warning alert — <strong>check it out!</strong>\n      </Alert>\n      <Alert severity='info'>\n        <AlertTitle>Info</AlertTitle>\n        This is an info alert — <strong>check it out!</strong>\n      </Alert>\n      <Alert severity='success'>\n        <AlertTitle>Success</AlertTitle>\n        This is an success alert — <strong>check it out!</strong>\n      </Alert>\n    </div>\n  )\n}\n\nexport default AlertsDescription\n"})}),T=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\n\nconst AlertsBasic = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert severity='error'>This is an error alert — check it out!</Alert>\n      <Alert severity='warning'>This is an warning alert — check it out!</Alert>\n      <Alert severity='info'>This is an info alert — check it out!</Alert>\n      <Alert severity='success'>This is an success alert — check it out!</Alert>\n    </div>\n  )\n}\n\nexport default AlertsBasic\n"})}),b=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\n\nconst AlertsFilled = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert variant='filled' severity='error'>\n        This is an error alert — check it out!\n      </Alert>\n      <Alert variant='filled' severity='warning'>\n        This is an warning alert — check it out!\n      </Alert>\n      <Alert variant='filled' severity='info'>\n        This is an info alert — check it out!\n      </Alert>\n      <Alert variant='filled' severity='success'>\n        This is an success alert — check it out!\n      </Alert>\n    </div>\n  )\n}\n\nexport default AlertsFilled\n"})}),S=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Fade from '@mui/material/Fade'\nimport Grow from '@mui/material/Grow'\nimport Alert from '@mui/material/Alert'\nimport Slide from '@mui/material/Slide'\nimport Button from '@mui/material/Button'\nimport Collapse from '@mui/material/Collapse'\nimport IconButton from '@mui/material/IconButton'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst AlertsDismissible = () => {\n  // ** States\n  const [open1, setOpen1] = useState(true)\n  const [open2, setOpen2] = useState(true)\n  const [open3, setOpen3] = useState(true)\n  const [open4, setOpen4] = useState(true)\n\n  return (\n    <>\n      <Box sx={{ mb: 6 }}>\n        <Collapse in={open1}>\n          <Alert\n            action={\n              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen1(false)}>\n                <Icon icon='mdi:close' fontSize='inherit' />\n              </IconButton>\n            }\n          >\n            Close me!\n          </Alert>\n        </Collapse>\n        <Button disabled={open1} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen1(true)}>\n          Open Collapse\n        </Button>\n      </Box>\n\n      <Box sx={{ mb: 6 }}>\n        <Fade in={open2} {...(open2 ? { timeout: 700 } : {})}>\n          <Alert\n            action={\n              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen2(false)}>\n                <Icon icon='mdi:close' fontSize='inherit' />\n              </IconButton>\n            }\n          >\n            Close me!\n          </Alert>\n        </Fade>\n        <Button disabled={open2} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen2(true)}>\n          Open Fade\n        </Button>\n      </Box>\n\n      <Box sx={{ mb: 6 }}>\n        <Grow in={open3} {...(open3 ? { timeout: 700 } : {})}>\n          <Alert\n            action={\n              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen3(false)}>\n                <Icon icon='mdi:close' fontSize='inherit' />\n              </IconButton>\n            }\n          >\n            Close me!\n          </Alert>\n        </Grow>\n        <Button disabled={open3} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen3(true)}>\n          Open Grow\n        </Button>\n      </Box>\n\n      <div>\n        <Slide in={open4} direction='left' {...(open4 ? { timeout: 500 } : {})}>\n          <Alert\n            action={\n              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen4(false)}>\n                <Icon icon='mdi:close' fontSize='inherit' />\n              </IconButton>\n            }\n          >\n            Close me!\n          </Alert>\n        </Slide>\n        <Button disabled={open4} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen4(true)}>\n          Open Slide\n        </Button>\n      </div>\n    </>\n  )\n}\n\nexport default AlertsDismissible\n"})}),B=(0,i.jsx)("pre",{className:"language-jsx",children:(0,i.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\n\nconst AlertsOutlined = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert variant='outlined' severity='error'>\n        This is an error alert — check it out!\n      </Alert>\n      <Alert variant='outlined' severity='warning'>\n        This is an warning alert — check it out!\n      </Alert>\n      <Alert variant='outlined' severity='info'>\n        This is an info alert — check it out!\n      </Alert>\n      <Alert variant='outlined' severity='success'>\n        This is an success alert — check it out!\n      </Alert>\n    </div>\n  )\n}\n\nexport default AlertsOutlined\n"})}),I=()=>(0,i.jsxs)(r.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(l.Z,{title:"Basic",code:{tsx:null,jsx:T},children:[(0,i.jsxs)(s.Z,{sx:{mb:4},children:["Use ",(0,i.jsxs)("code",{children:["severity=","{'error' | 'warning' | 'info' | 'success'}"]})," prop with"," ",(0,i.jsx)("code",{children:"<Alert>"})," component for different colored alerts."]}),(0,i.jsx)(a,{})]})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(l.Z,{title:"Outlined",code:{tsx:null,jsx:B},children:[(0,i.jsxs)(s.Z,{sx:{mb:4},children:["Use ",(0,i.jsx)("code",{children:"variant='outlined'"})," prop with ",(0,i.jsx)("code",{children:"<Alert>"})," component for outlined alerts."]}),(0,i.jsx)(h,{})]})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(l.Z,{title:"Filled",code:{tsx:null,jsx:b},children:[(0,i.jsxs)(s.Z,{sx:{mb:4},children:["Use ",(0,i.jsx)("code",{children:"variant='filled'"})," prop with ",(0,i.jsx)("code",{children:"<Alert>"})," component for filled alerts."]}),(0,i.jsx)(c,{})]})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(l.Z,{title:"Action",code:{tsx:null,jsx:C},children:[(0,i.jsxs)(s.Z,{sx:{mb:4},children:["To add a button, you need to use ",(0,i.jsx)("code",{children:"action"})," prop with ",(0,i.jsx)("code",{children:"<Alert>"})," component and pass a button inside this prop. To add a close button, you need to use ",(0,i.jsx)("code",{children:"onClose"})," prop with"," ",(0,i.jsx)("code",{children:"<Alert>"})," component."]}),(0,i.jsx)(u,{})]})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(l.Z,{title:"Description",code:{tsx:null,jsx:w},children:[(0,i.jsxs)(s.Z,{sx:{mb:4},children:["You can use the ",(0,i.jsx)("code",{children:"AlertTitle"})," component to display a formatted title above the content."]}),(0,i.jsx)(x,{})]})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(l.Z,{title:"Dismissible",code:{tsx:null,jsx:S},children:[(0,i.jsx)(s.Z,{sx:{mb:4},children:"You need to use one of the transition components (viz. Collapse, Fade, Grow and Slide) to make a dismissible alert."}),(0,i.jsx)(k,{})]})})]});var N=I}},function(e){e.O(0,[5307,9774,2888,179],function(){return e(e.s=80921)}),_N_E=e.O()}]);