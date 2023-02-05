(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6498],{91359:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var l=r(87462),i=r(63366),n=r(67294),o=r(86010),s=r(94780),a=r(67074),d=r(78884),c=r(1588),u=r(34867);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var x=r(85893);let m=["className","component"],h=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)},Z=(0,a.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),j=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:s="div"}=r,a=(0,i.Z)(r,m),c=(0,l.Z)({},r,{component:s}),u=h(c);return(0,x.jsx)(Z,(0,l.Z)({as:s,className:(0,o.Z)(u.root,n),ownerState:c,ref:t},a))});var b=j},49837:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var l=r(87462),i=r(63366),n=r(67294),o=r(86010),s=r(94780),a=r(67074),d=r(78884),c=r(70918),u=r(1588),p=r(34867);function x(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var m=r(85893);let h=["className","raised"],Z=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},x,t)},j=(0,a.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),b=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCard"}),{className:n,raised:s=!1}=r,a=(0,i.Z)(r,h),c=(0,l.Z)({},r,{raised:s}),u=Z(c);return(0,m.jsx)(j,(0,l.Z)({className:(0,o.Z)(u.root,n),elevation:s?8:void 0,ref:t,ownerState:c},a))});var f=b},75158:function(e,t,r){"use strict";r.d(t,{Z:function(){return I}});var l=r(63366),i=r(87462),n=r(67294),o=r(86010),s=r(94780),a=r(41796),d=r(37743),c=r(54235),u=r(85893),p=(0,c.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=r(36622),Z=r(78884),j=r(67074),b=r(1588),f=r(34867);function y(e){return(0,f.Z)("MuiCheckbox",e)}let g=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),v=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],P=e=>{let{classes:t,indeterminate:r,color:l}=e,n={root:["root",r&&"indeterminate",`color${(0,h.Z)(l)}`]},o=(0,s.Z)(n,y,t);return(0,i.Z)({},t,o)},S=(0,j.ZP)(d.Z,{shouldForwardProp:e=>(0,j.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,h.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,a.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${g.checked}, &.${g.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${g.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),C=(0,u.jsx)(x,{}),M=(0,u.jsx)(p,{}),W=(0,u.jsx)(m,{}),w=n.forwardRef(function(e,t){var r,s;let a=(0,Z.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=C,color:c="primary",icon:p=M,indeterminate:x=!1,indeterminateIcon:m=W,inputProps:h,size:j="medium",className:b}=a,f=(0,l.Z)(a,v),y=x?m:p,g=x?m:d,w=(0,i.Z)({},a,{color:c,indeterminate:x,size:j}),I=P(w);return(0,u.jsx)(S,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":x},h),icon:n.cloneElement(y,{fontSize:null!=(r=y.props.fontSize)?r:j}),checkedIcon:n.cloneElement(g,{fontSize:null!=(s=g.props.fontSize)?s:j}),ownerState:w,ref:t,className:(0,o.Z)(I.root,b)},f,{classes:I}))});var I=w},84810:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/wizard-examples/property-listing",function(){return r(63150)}])},80945:function(e,t,r){"use strict";var l=r(85893),i=r(61953),n=r(79072),o=r(15497),s=r(29630),a=r(21609);let d=e=>{let{data:t,icon:r,name:d,selected:c,gridProps:u,iconProps:p,handleChange:x,color:m="primary"}=e,{title:h,value:Z,content:j}=t;return t?(0,l.jsx)(n.ZP,{item:!0,...u,children:(0,l.jsxs)(i.Z,{onClick:()=>x(Z),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"center",flexDirection:"column",border:e=>"1px solid ".concat(e.palette.divider),...c===Z?{borderColor:"".concat(m,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[r?(0,l.jsx)(a.Z,{icon:r,...p}):null,h?"string"==typeof h?(0,l.jsx)(s.Z,{sx:{fontWeight:500,...j?{mb:1}:{my:"auto"}},children:h}):h:null,j?"string"==typeof j?(0,l.jsx)(s.Z,{variant:"body2",sx:{my:"auto",textAlign:"center"},children:j}):j:null,(0,l.jsx)(o.Z,{name:d,size:"small",color:m,value:Z,onChange:x,checked:c===Z,sx:{mb:-2,...!r&&!h&&!j&&{mt:-2}}})]})}):null};t.Z=d},97966:function(e,t,r){"use strict";var l=r(61953),i=r(67074),n=r(41796);let o=(0,i.ZP)(l.Z)(e=>{let{theme:t}=e;return{[t.breakpoints.down("md")]:{"& .MuiStepper-horizontal:not(.MuiStepper-alternativeLabel)":{flexDirection:"column",alignItems:"flex-start"}},"& .MuiStep-root":{"& .step-label":{display:"flex",alignItems:"center",justifyContent:"center"},"& .step-number":{fontWeight:600,letterSpacing:.25,fontSize:"2.125rem",marginRight:t.spacing(2.5),color:t.palette.text.primary},"& .step-title":{fontWeight:500,fontSize:"0.875rem",letterSpacing:"0.1px",color:t.palette.text.primary},"& .step-subtitle":{fontWeight:400,fontSize:"0.75rem",letterSpacing:"0.4px",color:t.palette.text.secondary},"& .MuiStepLabel-root.Mui-disabled":{"& .step-number":{color:t.palette.text.disabled}},"& .Mui-error":{"& .MuiStepLabel-labelContainer, & .step-number, & .step-title, & .step-subtitle":{color:t.palette.error.main}}},"& .MuiStepConnector-root":{"& .MuiStepConnector-line":{borderWidth:3,borderRadius:3},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:t.palette.primary.main}},"&.Mui-disabled .MuiStepConnector-line":{borderColor:(0,n.Fq)(t.palette.primary.main,.3)}},"& .MuiStepper-alternativeLabel":{"& .MuiStepConnector-root":{top:10},"& .MuiStepLabel-labelContainer":{display:"flex",alignItems:"center",flexDirection:"column","& > * + *":{marginTop:t.spacing(1)}}},"& .MuiStepper-vertical":{"& .MuiStep-root":{"& .step-label":{justifyContent:"flex-start"},"& .MuiStepContent-root":{borderWidth:3,marginLeft:t.spacing(2.25),borderColor:t.palette.primary.main},"& .button-wrapper":{marginTop:t.spacing(4)},"&.active + .MuiStepConnector-root .MuiStepConnector-line":{borderColor:t.palette.primary.main}},"& .MuiStepConnector-root":{marginLeft:t.spacing(2.25),"& .MuiStepConnector-line":{borderRadius:0}}}}});t.Z=o},63150:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return K}});var l=r(85893),i=r(67294),n=r(61953),o=r(49837),s=r(54225),a=r(98948),d=r(67074),c=r(94071),u=r(29630),p=r(44044),x=r(91359),m=r(21609),h=r(73921),Z=r(79072),j=r(15497),b=r(67836),f=r(47546),y=r(41470),g=r(55343),v=r(9041),P=r(22841),S=r(9198),C=r.n(S);let M=(0,i.forwardRef)((e,t)=>{let{...r}=e,{label:i,readOnly:n}=r;return(0,l.jsx)(b.Z,{fullWidth:!0,...r,inputRef:t,label:i||"",...n&&{inputProps:{readOnly:!0}}})}),W=()=>{let[e,t]=(0,i.useState)(null);return(0,l.jsxs)(Z.ZP,{container:!0,spacing:5,children:[(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,type:"number",label:"Total Area",placeholder:"1000",InputProps:{endAdornment:(0,l.jsx)(v.Z,{position:"end",children:"sq-ft"})}})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,type:"number",label:"Carpet Area",placeholder:"800",InputProps:{endAdornment:(0,l.jsx)(v.Z,{position:"end",children:"sq-ft"})}})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,type:"number",label:"Plot Area",placeholder:"800",InputProps:{endAdornment:(0,l.jsx)(v.Z,{position:"end",children:"sq-yd"})}})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(C(),{selected:e,placeholderText:"YYY-MM-DD",onChange:e=>t(e),customInput:(0,l.jsx)(M,{label:"Available From"})})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(f.Z,{id:"possession-status-radio",sx:{fontWeight:500,fontSize:"0.875rem",lineHeight:"21px",letterSpacing:"0.1px"},children:"Possession Status"}),(0,l.jsxs)(y.Z,{name:"possession-status-group",defaultValue:"under-construction","aria-labelledby":"possession-status-radio",children:[(0,l.jsx)(P.Z,{value:"under-construction",control:(0,l.jsx)(j.Z,{}),label:"Under Construction"}),(0,l.jsx)(P.Z,{value:"ready-to-move",control:(0,l.jsx)(j.Z,{}),label:"Ready to Move"})]})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(f.Z,{id:"transaction-radio",sx:{fontWeight:500,fontSize:"0.875rem",lineHeight:"21px",letterSpacing:"0.1px"},children:"Transaction Type"}),(0,l.jsxs)(y.Z,{defaultValue:"new-property",name:"transaction-group","aria-labelledby":"transaction-radio",children:[(0,l.jsx)(P.Z,{value:"new-property",control:(0,l.jsx)(j.Z,{}),label:"New property"}),(0,l.jsx)(P.Z,{value:"resale",control:(0,l.jsx)(j.Z,{}),label:"Resale"})]})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(f.Z,{id:"main-road-radio",sx:{fontWeight:500,fontSize:"0.875rem",lineHeight:"21px",letterSpacing:"0.1px"},children:"Is Property Facing Main Road"}),(0,l.jsxs)(y.Z,{defaultValue:"yes",name:"main-road-group","aria-labelledby":"main-road-radio",children:[(0,l.jsx)(P.Z,{value:"yes",control:(0,l.jsx)(j.Z,{}),label:"Yes"}),(0,l.jsx)(P.Z,{value:"no",control:(0,l.jsx)(j.Z,{}),label:"no"})]})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(f.Z,{id:"gated-colony-radio",sx:{fontWeight:500,fontSize:"0.875rem",lineHeight:"21px",letterSpacing:"0.1px"},children:"Gated Colony"}),(0,l.jsxs)(y.Z,{defaultValue:"yes",name:"gated-colony-group","aria-labelledby":"gated-colony-radio",children:[(0,l.jsx)(P.Z,{value:"yes",control:(0,l.jsx)(j.Z,{}),label:"Yes"}),(0,l.jsx)(P.Z,{value:"no",control:(0,l.jsx)(j.Z,{}),label:"no"})]})]})})]})};var w=r(53442),I=r(75158),k=r(31538),A=r(3695);let F=()=>(0,l.jsxs)(Z.ZP,{container:!0,spacing:5,children:[(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,type:"number",placeholder:"25,000",label:"Expected Price",InputProps:{endAdornment:(0,l.jsx)(v.Z,{position:"end",children:(0,l.jsx)(m.Z,{icon:"mdi:currency-usd"})})}})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,type:"number",placeholder:"500",label:"Price Per SQFT",InputProps:{endAdornment:(0,l.jsx)(v.Z,{position:"end",children:(0,l.jsx)(m.Z,{icon:"mdi:currency-usd"})})}})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,type:"number",placeholder:"50",label:"Maintenance Charge",InputProps:{endAdornment:(0,l.jsx)(v.Z,{position:"end",children:(0,l.jsx)(m.Z,{icon:"mdi:currency-usd"})})}})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{fullWidth:!0,children:[(0,l.jsx)(A.Z,{id:"select-maintenance",children:"Maintenance Period"}),(0,l.jsxs)(w.Z,{labelId:"select-maintenance",label:"Maintenance Period",defaultValue:"",children:[(0,l.jsx)(k.Z,{value:"Monthly",children:"Monthly"}),(0,l.jsx)(k.Z,{value:"Quarterly",children:"Quarterly"}),(0,l.jsx)(k.Z,{value:"Yearly",children:"Yearly"}),(0,l.jsx)(k.Z,{value:"One-time",children:"One-time"}),(0,l.jsx)(k.Z,{value:"Per Sqft.Monthly",children:"Per Sqft.Monthly"})]})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,type:"number",placeholder:"250",label:"Booking/Token Amount",InputProps:{endAdornment:(0,l.jsx)(v.Z,{position:"end",children:(0,l.jsx)(m.Z,{icon:"mdi:currency-usd"})})}})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,type:"number",placeholder:"500",label:"Other Amount",InputProps:{endAdornment:(0,l.jsx)(v.Z,{position:"end",children:(0,l.jsx)(m.Z,{icon:"mdi:currency-usd"})})}})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(f.Z,{id:"price-radio",children:"Show Price As"}),(0,l.jsxs)(y.Z,{name:"price-group",defaultValue:"negotiable","aria-labelledby":"price-radio",children:[(0,l.jsx)(P.Z,{value:"negotiable",control:(0,l.jsx)(j.Z,{}),label:"Negotiable"}),(0,l.jsx)(P.Z,{value:"call-for-price",control:(0,l.jsx)(j.Z,{}),label:"Call For Price"})]})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{component:"fieldset",children:[(0,l.jsx)(f.Z,{component:"legend",children:"Price Includes"}),(0,l.jsx)(P.Z,{control:(0,l.jsx)(I.Z,{}),label:"Car Parking"}),(0,l.jsx)(P.Z,{control:(0,l.jsx)(I.Z,{}),label:"Club Membership"})]})})]});var z=r(62097),R=r(80945);let N=[{value:"sale",isSelected:!0,title:"Sell the property",content:(0,l.jsxs)(u.Z,{variant:"body2",sx:{my:"auto",textAlign:"center"},children:["Post your property for sale.",(0,l.jsx)("br",{}),"Unlimited free listing."]})},{value:"rent",title:"Rent the property",content:(0,l.jsxs)(u.Z,{variant:"body2",sx:{my:"auto",textAlign:"center"},children:["Post your property for rent.",(0,l.jsx)("br",{}),"Unlimited free listing."]})}],B=()=>{let e=N.filter(e=>e.isSelected)[N.filter(e=>e.isSelected).length-1].value,[t,r]=(0,i.useState)(e),n=(0,z.Z)(),o=[{icon:"mdi:home-outline",iconProps:{fontSize:"2rem",style:{marginBottom:4},color:n.palette.text.secondary}},{icon:"mdi:wallet-outline",iconProps:{fontSize:"2rem",style:{marginBottom:4},color:n.palette.text.secondary}}],s=e=>{"string"==typeof e?r(e):r(e.target.value)};return(0,l.jsxs)(Z.ZP,{container:!0,spacing:5,children:[N.map((e,r)=>(0,l.jsx)(R.Z,{data:N[r],icon:o[r].icon,selected:t,name:"custom-radios-property",gridProps:{sm:6,xs:12},handleChange:s,iconProps:o[r].iconProps},r)),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{fullWidth:!0,children:[(0,l.jsx)(A.Z,{htmlFor:"validation-property-select",children:"Property Type"}),(0,l.jsxs)(w.Z,{label:"Property Type",labelId:"validation-property-select",defaultValue:"",children:[(0,l.jsx)(k.Z,{value:"Residential",children:"Residential"}),(0,l.jsx)(k.Z,{value:"Commercial",children:"Commercial"})]})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(g.Z,{fullWidth:!0,children:(0,l.jsx)(b.Z,{type:"number",label:"Zip Code",placeholder:"99950","aria-describedby":"validation-zip-code"})})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{fullWidth:!0,children:[(0,l.jsx)(A.Z,{htmlFor:"country-select",children:"Country"}),(0,l.jsxs)(w.Z,{label:"Country",labelId:"country-select","aria-describedby":"country-select",defaultValue:"",children:[(0,l.jsx)(k.Z,{value:"UK",children:"UK"}),(0,l.jsx)(k.Z,{value:"USA",children:"USA"}),(0,l.jsx)(k.Z,{value:"India",children:"India"}),(0,l.jsx)(k.Z,{value:"Australia",children:"Australia"}),(0,l.jsx)(k.Z,{value:"Germany",children:"Germany"})]})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,label:"State",placeholder:"California"})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,label:"City",placeholder:"Los Angeles"})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,label:"Landmark",placeholder:"Nr. Hard Rock Cafe"})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,children:(0,l.jsx)(b.Z,{fullWidth:!0,multiline:!0,minRows:2,label:"Address"})})]})};var T=r(80562);let V=[{value:"builder",isSelected:!0,title:"I am the Builder",content:"List property as Builder, list your project and get highest reach."},{value:"owner",title:"I am the Owner",content:"Submit property as an Individual. Lease, Rent or Sell at the best price."},{value:"broker",title:"I am the Broker",content:"Earn highest commission by listing your clients properties at the best price."}],L=()=>{let e=V.filter(e=>e.isSelected)[V.filter(e=>e.isSelected).length-1].value,[t,r]=(0,i.useState)(!1),[n,o]=(0,i.useState)(e),s=(0,z.Z)(),a=[{icon:"mdi:office-building-outline",iconProps:{fontSize:"2rem",style:{marginBottom:4},color:s.palette.text.secondary}},{icon:"mdi:crown-outline",iconProps:{fontSize:"2rem",style:{marginBottom:4},color:s.palette.text.secondary}},{icon:"mdi:briefcase-outline",iconProps:{fontSize:"2rem",style:{marginBottom:4},color:s.palette.text.secondary}}],d=()=>{r(!t)},c=e=>{e.preventDefault()},u=e=>{"string"==typeof e?o(e):o(e.target.value)};return(0,l.jsxs)(Z.ZP,{container:!0,spacing:5,children:[V.map((e,t)=>(0,l.jsx)(R.Z,{data:V[t],name:"custom-radios",icon:a[t].icon,selected:n,gridProps:{sm:4,xs:12},handleChange:u,iconProps:a[t].iconProps},t)),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(g.Z,{fullWidth:!0,children:(0,l.jsx)(b.Z,{label:"First Name",placeholder:"John"})})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(g.Z,{fullWidth:!0,children:(0,l.jsx)(b.Z,{label:"Last Name",placeholder:"Doe"})})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,label:"Username",placeholder:"john.doe"})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,label:"Password",type:t?"text":"password",InputProps:{endAdornment:(0,l.jsx)(v.Z,{position:"end",children:(0,l.jsx)(T.Z,{edge:"end",onClick:d,"aria-label":"toggle password visibility",onMouseDown:c,children:(0,l.jsx)(m.Z,{icon:t?"mdi:eye-outline":"mdi:eye-off-outline"})})})}})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,type:"email",label:"Email",placeholder:"john.doe@email.com"})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,label:"Contact",placeholder:"202 555 0111",InputProps:{startAdornment:(0,l.jsx)(v.Z,{position:"start",children:"US (+1)"})}})})]})};var D=r(39063),E=r(7071);let H=["AC","TV","RO","Bed","WiFi","Sofa","Fridge","Cupboard","Microwave","Dining Table","Washing Machine"],O=()=>{let[e,t]=(0,i.useState)(["Fridge","AC","TV","Wifi"]),r=e=>{let{target:{value:r}}=e;t("string"==typeof r?r.split(","):r)};return(0,l.jsxs)(Z.ZP,{container:!0,spacing:5,children:[(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,label:"Bedrooms",placeholder:"3"})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,label:"Floor No",placeholder:"12"})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(b.Z,{fullWidth:!0,label:"Bathroom",placeholder:"4"})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{fullWidth:!0,children:[(0,l.jsx)(A.Z,{id:"select-furnished-status",children:"Furnished Status"}),(0,l.jsxs)(w.Z,{id:"demo-simple-select",label:"Furnished Status",labelId:"select-furnished-status",defaultValue:"",children:[(0,l.jsx)(k.Z,{value:"Fully Furnished",children:"Fully Furnished"}),(0,l.jsx)(k.Z,{value:"Furnished",children:"Furnished"}),(0,l.jsx)(k.Z,{value:"Semi Furnished",children:"Semi Furnished"}),(0,l.jsx)(k.Z,{value:"UnFurnished",children:"UnFurnished"})]})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,children:(0,l.jsxs)(g.Z,{fullWidth:!0,children:[(0,l.jsx)(A.Z,{id:"select-furnishing-details",children:"Furnishing Details"}),(0,l.jsx)(w.Z,{labelId:"select-furnishing-details",multiple:!0,onChange:r,value:e,input:(0,l.jsx)(D.Z,{label:"Furnishing Details"}),renderValue:e=>(0,l.jsx)(n.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map(e=>(0,l.jsx)(E.Z,{label:e,skin:"light"},e))}),children:H.map(e=>(0,l.jsx)(k.Z,{value:e,children:e},e))})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(f.Z,{id:"common-area-radio",sx:{fontWeight:500,fontSize:"0.875rem",lineHeight:"21px",letterSpacing:"0.1px"},children:"Is There Any Common Area"}),(0,l.jsxs)(y.Z,{defaultValue:"yes",name:"common-area-group","aria-labelledby":"common-area-radio",children:[(0,l.jsx)(P.Z,{value:"yes",control:(0,l.jsx)(j.Z,{}),label:"Yes"}),(0,l.jsx)(P.Z,{value:"no",control:(0,l.jsx)(j.Z,{}),label:"No"})]})]})}),(0,l.jsx)(Z.ZP,{item:!0,xs:12,md:6,children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(f.Z,{id:"balcony-radio",sx:{fontWeight:500,fontSize:"0.875rem",lineHeight:"21px",letterSpacing:"0.1px"},children:"Is There Any Attached Balcony"}),(0,l.jsxs)(y.Z,{defaultValue:"yes",name:"balcony-group","aria-labelledby":"balcony-radio",children:[(0,l.jsx)(P.Z,{value:"yes",control:(0,l.jsx)(j.Z,{}),label:"Yes"}),(0,l.jsx)(P.Z,{value:"no",control:(0,l.jsx)(j.Z,{}),label:"No"})]})]})})]})};var _=r(97966);let U=[{title:"Personal Details",subtitle:"Your Name/Email",icon:"mdi:account-outline"},{icon:"mdi:home-outline",title:"Property Details",subtitle:"Property Type"},{icon:"mdi:star-outline",title:"Property Features",subtitle:"Bedrooms/Floor No"},{title:"Property Area",subtitle:"Covered Area",icon:"mdi:map-marker-outline"},{title:"Price Details",icon:"mdi:currency-usd",subtitle:"Expected Price"}],Y=(0,d.ZP)(p.Z)(e=>{let{theme:t}=e;return{"&:not(:last-of-type)":{marginBottom:t.spacing(4)},"& .MuiStepLabel-root":{padding:0}}}),q=(0,d.ZP)(x.Z)(e=>{let{theme:t}=e;return{minWidth:300,borderRight:"1px solid ".concat(t.palette.divider),[t.breakpoints.down("lg")]:{borderRight:0,borderBottom:"1px solid ".concat(t.palette.divider)}}}),$=()=>{let[e,t]=(0,i.useState)(0),r=()=>{t(e+1)},d=()=>{0!==e&&t(e-1)};return(0,l.jsxs)(o.Z,{sx:{display:"flex",flexDirection:{xs:"column",lg:"row"}},children:[(0,l.jsx)(q,{children:(0,l.jsx)(_.Z,{sx:{height:"100%","& .MuiStepLabel-label":{cursor:"pointer"}},children:(0,l.jsx)(a.Z,{connector:(0,l.jsx)(l.Fragment,{}),activeStep:e,orientation:"vertical",children:U.map((e,r)=>(0,l.jsx)(Y,{onClick:()=>t(r),sx:{"&.Mui-completed + svg":{color:"primary.main"}},children:(0,l.jsx)(c.Z,{StepIconComponent:h.Z,children:(0,l.jsxs)("div",{className:"step-label",children:[(0,l.jsx)(u.Z,{className:"step-number",children:"0".concat(r+1)}),(0,l.jsxs)("div",{children:[(0,l.jsx)(u.Z,{className:"step-title",children:e.title}),(0,l.jsx)(u.Z,{className:"step-subtitle",children:e.subtitle})]})]})})},r))})})}),(0,l.jsx)("div",{children:(0,l.jsxs)(x.Z,{children:[(e=>{switch(e){case 0:return(0,l.jsx)(L,{});case 1:return(0,l.jsx)(B,{});case 2:return(0,l.jsx)(O,{});case 3:return(0,l.jsx)(W,{});case 4:return(0,l.jsx)(F,{});default:return null}})(e),(()=>{let t=e===U.length-1;return(0,l.jsxs)(n.Z,{sx:{mt:4,display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)(s.Z,{color:"secondary",variant:"outlined",onClick:d,disabled:0===e,startIcon:(0,l.jsx)(m.Z,{icon:"mdi:arrow-left"}),children:"Previous"}),(0,l.jsx)(s.Z,{variant:"contained",color:t?"success":"primary",...t?{}:{endIcon:(0,l.jsx)(m.Z,{icon:"mdi:arrow-right"})},onClick:()=>t?alert("Submitted..!!"):r(),children:t?"Submit":"Next"})]})})()]})})]})};var G=r(64488);let Q=()=>(0,l.jsx)(G.Z,{children:(0,l.jsx)($,{})});var K=Q},73921:function(e,t,r){"use strict";var l=r(85893),i=r(61953),n=r(67074),o=r(62097),s=r(41796),a=r(21609);let d=(0,n.ZP)(i.Z)(()=>({width:20,height:20,borderWidth:3,borderRadius:"50%",borderStyle:"solid"})),c=e=>{let{active:t,completed:r,error:i}=e,n=(0,o.Z)();return i?(0,l.jsx)(a.Z,{icon:"mdi:alert",fontSize:20,color:n.palette.error.main,transform:"scale(1.2)"}):r?(0,l.jsx)(a.Z,{icon:"mdi:check-circle",fontSize:20,color:n.palette.primary.main,transform:"scale(1.2)"}):(0,l.jsx)(d,{sx:{borderColor:t?"primary.main":(0,s.Fq)(n.palette.primary.main,.3)}})};t.Z=c},95828:function(){}},function(e){e.O(0,[9198,4661,8318,4488,9774,2888,179],function(){return e(e.s=84810)}),_N_E=e.O()}]);