(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2947],{66485:function(e){function o(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(e){if(!navigator.clipboard)throw o();return navigator.clipboard.writeText(e)}async function l(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let l=window.getSelection(),n=window.document.createRange();l.removeAllRanges(),n.selectNode(t),l.addRange(n);let r=!1;try{r=window.document.execCommand("copy")}finally{l.removeAllRanges(),window.document.body.removeChild(t)}if(!r)throw o()}async function n(e){try{await t(e)}catch(r){try{await l(e)}catch(n){throw n||r||o()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ e.exports=n},92611:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/switch",function(){return t(25804)}])},39913:function(e,o,t){"use strict";t.d(o,{Z:function(){return F}});var l=t(85893),n=t(67294),r=t(61953),c=t(49837),a=t(72389),s=t(44373),i=t(93481),d=t(80562),m=t(59742),h=t(91359),u=t(87054),x=t(61225),p=t(85390),j=t(21609),b=t(15660),w=t.n(b),S=t(86501),f=t(66485),C=t.n(f);let g=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName),Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,n.useRef)(null),t=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&g(o.current)&&o.current.select()},l=()=>{e.onError&&e.onError();let t=!1!==e.selectOnError;t&&g(o.current)&&o.current.select()},r=e=>{C()(e).then(t).catch(l)},c=(0,n.useCallback)(e=>{"string"==typeof e?r(e):o.current&&r(o.current.value)},[]);return{copy:c,target:o}},k=e=>{let{id:o,sx:t,code:b,title:f,children:C,className:g}=e,[k,F]=(0,n.useState)(!1),[y,L]=(0,n.useState)(null!==b.tsx?"tsx":"jsx"),v=Z(),P=(0,x.Z)(e=>e.breakpoints.down("md"));(0,n.useEffect)(()=>{w().highlightAll()},[k,y]);let N=()=>null!==b.tsx&&"tsx"===y?b.tsx.props.children.props.children:null!==b.jsx&&"jsx"===y?b.jsx.props.children.props.children:"",M=()=>{v.copy(N()),S.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,l.jsxs)(c.Z,{className:g,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...t},id:o||"card-snippet--".concat(f.toLowerCase().replace(/ /g,"-")),children:[(0,l.jsx)(m.Z,{title:f,...P?{}:{action:(0,l.jsx)(d.Z,{onClick:()=>F(!k),children:(0,l.jsx)(j.Z,{icon:"mdi:code-tags",fontSize:20})})}}),(0,l.jsx)(h.Z,{children:C}),P?null:(0,l.jsxs)(i.Z,{in:k,children:[(0,l.jsx)(s.Z,{sx:{my:"0 !important"}}),(0,l.jsxs)(h.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,l.jsx)(r.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,l.jsxs)(p.Z,{exclusive:!0,size:"small",color:"primary",value:y,onChange:(e,o)=>null!==o?L(o):null,children:[null!==b.tsx?(0,l.jsx)(u.Z,{value:"tsx",children:(0,l.jsx)(j.Z,{icon:"mdi:language-typescript",fontSize:20})}):null,null!==b.jsx?(0,l.jsx)(u.Z,{value:"jsx",children:(0,l.jsx)(j.Z,{icon:"mdi:language-javascript",fontSize:20})}):null]})}),(0,l.jsx)(a.Z,{title:"Copy the source",placement:"top",children:(0,l.jsx)(d.Z,{onClick:M,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,l.jsx)(j.Z,{icon:"mdi:content-copy",fontSize:20})})}),(0,l.jsx)("div",{children:null!==b[y]?b[y]:null})]})]})]})};var F=k},25804:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return v}});var l=t(85893),n=t(79072),r=t(29630),c=t(39913),a=t(16056),s=t(22416),i=t(22841);let d=()=>(0,l.jsxs)(s.Z,{row:!0,children:[(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{defaultChecked:!0}),label:"Checked"}),(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{}),label:"Unchecked"}),(0,l.jsx)(i.Z,{disabled:!0,control:(0,l.jsx)(a.Z,{defaultChecked:!0}),label:"Disabled Checked"}),(0,l.jsx)(i.Z,{disabled:!0,control:(0,l.jsx)(a.Z,{}),label:"Disabled Unchecked"})]}),m=()=>(0,l.jsxs)(s.Z,{row:!0,children:[(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{size:"small"}),label:"Small"}),(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{}),label:"Default"})]}),h=()=>(0,l.jsxs)(s.Z,{row:!0,children:[(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{defaultChecked:!0}),label:"Primary"}),(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{defaultChecked:!0,color:"secondary"}),label:"Secondary"}),(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{defaultChecked:!0,color:"success"}),label:"Success"}),(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{defaultChecked:!0,color:"error"}),label:"Error"}),(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{defaultChecked:!0,color:"warning"}),label:"Warning"}),(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{defaultChecked:!0,color:"info"}),label:"Info"})]});var u=t(67074);let x=(0,u.ZP)(i.Z)(e=>{let{theme:o}=e;return{marginLeft:0,"& .MuiSwitch-root":{width:42,height:26,padding:0,marginRight:o.spacing(3),"& .MuiSwitch-switchBase":{padding:1,"&.Mui-checked":{transform:"translateX(16px)",color:o.palette.common.white,"& + .MuiSwitch-track":{opacity:1,border:"none",backgroundColor:"#52d869"}}},"& .MuiSwitch-thumb":{width:24,height:24},"& .MuiSwitch-track":{opacity:1,borderRadius:13,backgroundColor:"dark"===o.palette.mode?o.palette.action.selected:o.palette.grey[50],border:"1px solid ".concat(o.palette.grey[400]),transition:o.transitions.create(["background-color","border"])}}}}),p=()=>(0,l.jsx)(x,{label:"iOS Style",control:(0,l.jsx)(a.Z,{defaultChecked:!0})}),j=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)(a.Z,{defaultChecked:!0}),(0,l.jsx)(a.Z,{}),(0,l.jsx)(a.Z,{disabled:!0,defaultChecked:!0}),(0,l.jsx)(a.Z,{disabled:!0})]}),b=()=>(0,l.jsxs)("div",{children:[(0,l.jsxs)(s.Z,{row:!0,children:[(0,l.jsx)(i.Z,{value:"top",label:"Top",labelPlacement:"top",sx:{mr:8},control:(0,l.jsx)(a.Z,{})}),(0,l.jsx)(i.Z,{value:"bottom",control:(0,l.jsx)(a.Z,{}),label:"Bottom",labelPlacement:"bottom"})]}),(0,l.jsxs)(s.Z,{row:!0,sx:{mt:4},children:[(0,l.jsx)(i.Z,{value:"start",label:"Start",labelPlacement:"start",sx:{mr:4},control:(0,l.jsx)(a.Z,{})}),(0,l.jsx)(i.Z,{value:"end",control:(0,l.jsx)(a.Z,{}),label:"End",labelPlacement:"end"})]})]});var w=t(67294);let S=()=>{let[e,o]=(0,w.useState)(!1),t=e=>{o(e.target.checked)};return(0,l.jsxs)(s.Z,{row:!0,children:[(0,l.jsx)(i.Z,{label:"Controlled",control:(0,l.jsx)(a.Z,{checked:e,onChange:t})}),(0,l.jsx)(i.Z,{control:(0,l.jsx)(a.Z,{}),label:"Uncontrolled"})]})},f=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchesBasic = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel control={<Switch defaultChecked />} label='Checked' />\n      <FormControlLabel control={<Switch />} label='Unchecked' />\n      <FormControlLabel disabled control={<Switch defaultChecked />} label='Disabled Checked' />\n      <FormControlLabel disabled control={<Switch />} label='Disabled Unchecked' />\n    </FormGroup>\n  )\n}\n\nexport default SwitchesBasic\n"})}),C=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchesControlledUncontrolled = () => {\n  // ** State\n  const [checked, setChecked] = useState(false)\n\n  const handleChange = event => {\n    setChecked(event.target.checked)\n  }\n\n  return (\n    <FormGroup row>\n      <FormControlLabel label='Controlled' control={<Switch checked={checked} onChange={handleChange} />} />\n      <FormControlLabel control={<Switch />} label='Uncontrolled' />\n    </FormGroup>\n  )\n}\n\nexport default SwitchesControlledUncontrolled\n"})}),g=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport { styled } from '@mui/material/styles'\nimport MuiFormControlLabel from '@mui/material/FormControlLabel'\n\n// Styled FormControlLabel component\nconst FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({\n  marginLeft: 0,\n  '& .MuiSwitch-root': {\n    width: 42,\n    height: 26,\n    padding: 0,\n    marginRight: theme.spacing(3),\n    '& .MuiSwitch-switchBase': {\n      padding: 1,\n      '&.Mui-checked': {\n        transform: 'translateX(16px)',\n        color: theme.palette.common.white,\n        '& + .MuiSwitch-track': {\n          opacity: 1,\n          border: 'none',\n          backgroundColor: '#52d869'\n        }\n      }\n    },\n    '& .MuiSwitch-thumb': {\n      width: 24,\n      height: 24\n    },\n    '& .MuiSwitch-track': {\n      opacity: 1,\n      borderRadius: 13,\n      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.action.selected : theme.palette.grey[50],\n      border: 1px solid {theme.palette.grey[400]},\n      transition: theme.transitions.create(['background-color', 'border'])\n    }\n  }\n}))\nconst SwitchesCustomized = () => <FormControlLabel label='iOS Style' control={<Switch defaultChecked />} />\n\nexport default SwitchesCustomized\n"})}),Z=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchesColors = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel control={<Switch defaultChecked />} label='Primary' />\n      <FormControlLabel control={<Switch defaultChecked color='secondary' />} label='Secondary' />\n      <FormControlLabel control={<Switch defaultChecked color='success' />} label='Success' />\n      <FormControlLabel control={<Switch defaultChecked color='error' />} label='Error' />\n      <FormControlLabel control={<Switch defaultChecked color='warning' />} label='Warning' />\n      <FormControlLabel control={<Switch defaultChecked color='info' />} label='Info' />\n    </FormGroup>\n  )\n}\n\nexport default SwitchesColors\n"})}),k=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchedLabelPlacement = () => {\n  return (\n    <div>\n      <FormGroup row>\n        <FormControlLabel value='top' label='Top' labelPlacement='top' sx={{ mr: 8 }} control={<Switch />} />\n        <FormControlLabel value='bottom' control={<Switch />} label='Bottom' labelPlacement='bottom' />\n      </FormGroup>\n      <FormGroup row sx={{ mt: 4 }}>\n        <FormControlLabel value='start' label='Start' labelPlacement='start' sx={{ mr: 4 }} control={<Switch />} />\n        <FormControlLabel value='end' control={<Switch />} label='End' labelPlacement='end' />\n      </FormGroup>\n    </div>\n  )\n}\n\nexport default SwitchedLabelPlacement\n"})}),F=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\n\nconst SwitchesStandalone = () => {\n  return (\n    <div>\n      <Switch defaultChecked />\n      <Switch />\n      <Switch disabled defaultChecked />\n      <Switch disabled />\n    </div>\n  )\n}\n\nexport default SwitchesStandalone\n"})}),y=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Switch from '@mui/material/Switch'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst SwitchesSizes = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel control={<Switch size='small' />} label='Small' />\n      <FormControlLabel control={<Switch />} label='Default' />\n    </FormGroup>\n  )\n}\n\nexport default SwitchesSizes\n"})}),L=()=>(0,l.jsxs)(n.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,l.jsx)(n.ZP,{item:!0,xs:12,children:(0,l.jsx)(c.Z,{title:"Basic Switches",code:{tsx:null,jsx:f},children:(0,l.jsx)(d,{})})}),(0,l.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Controlled and Uncontrolled",code:{tsx:null,jsx:C},children:[(0,l.jsxs)(r.Z,{sx:{mb:2},children:["Manage ",(0,l.jsx)("code",{children:"checked"})," prop with the help of a state for controlled ",(0,l.jsx)("code",{children:"Switch"})," and use",(0,l.jsx)("code",{children:"defaultChecked"})," prop for uncontrolled ",(0,l.jsx)("code",{children:"Switch"}),"."]}),(0,l.jsx)(S,{})]})}),(0,l.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Label Placement",code:{tsx:null,jsx:k},children:[(0,l.jsxs)(r.Z,{sx:{mb:2},children:["Use ",(0,l.jsx)("code",{children:"labelPlacement"})," prop with ",(0,l.jsx)("code",{children:"FormControlLabel"})," component to change the placement of the label."]}),(0,l.jsx)(b,{})]})}),(0,l.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Colors",code:{tsx:null,jsx:Z},children:[(0,l.jsxs)(r.Z,{sx:{mb:2},children:["Use ",(0,l.jsx)("code",{children:"color"})," prop with ",(0,l.jsx)("code",{children:"Switch"})," component for different colored switch."]}),(0,l.jsx)(h,{})]})}),(0,l.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Customized Switches",code:{tsx:null,jsx:g},children:[(0,l.jsxs)(r.Z,{sx:{mb:4},children:["Use ",(0,l.jsx)("code",{children:"styled"})," hook to customize your switch."]}),(0,l.jsx)(p,{})]})}),(0,l.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(c.Z,{title:"Sizes",code:{tsx:null,jsx:y},children:[(0,l.jsxs)(r.Z,{sx:{mb:2},children:["Use ",(0,l.jsx)("code",{children:"size='small'"})," prop with ",(0,l.jsx)("code",{children:"Switch"})," component for small switch."]}),(0,l.jsx)(m,{})]})}),(0,l.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(c.Z,{title:"Standalone Switches",code:{tsx:null,jsx:F},children:(0,l.jsx)(j,{})})})]});var v=L}},function(e){e.O(0,[5307,9774,2888,179],function(){return e(e.s=92611)}),_N_E=e.O()}]);