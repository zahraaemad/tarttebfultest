(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8950],{1163:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),c=n(94780),u=n(36622),l=n(67074),s=n(78884),f=n(40011),p=n(84771),d=n(29630),m=n(1588),v=n(34867);function y(e){return(0,v.Z)("MuiLink",e)}let g=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var b=n(54844),h=n(41796);let w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},D=e=>w[e]||e,x=({theme:e,ownerState:t})=>{let n=D(t.color),r=(0,b.D)(e,`palette.${n}`,!1)||t.color,o=(0,b.D)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,h.Fq)(r,.4)};var O=n(85893);let j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],A=e=>{let{classes:t,component:n,focusVisible:r,underline:o}=e,i={root:["root",`underline${(0,u.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,c.Z)(i,y,t)},k=(0,l.ZP)(d.Z,{name:"MuiLink",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,t[`underline${(0,u.Z)(n.underline)}`],"button"===n.component&&t.button]}})(({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:x({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.focusVisible}`]:{outline:"auto"}})),E=i.forwardRef(function(e,t){let n=(0,s.Z)({props:e,name:"MuiLink"}),{className:c,color:u="primary",component:l="a",onBlur:d,onFocus:m,TypographyClasses:v,underline:y="always",variant:g="inherit",sx:b}=n,h=(0,r.Z)(n,j),{isFocusVisibleRef:D,onBlur:x,onFocus:E,ref:F}=(0,f.Z)(),[S,C]=i.useState(!1),P=(0,p.Z)(t,F),R=e=>{x(e),!1===D.current&&C(!1),d&&d(e)},z=e=>{E(e),!0===D.current&&C(!0),m&&m(e)},T=(0,o.Z)({},n,{color:u,component:l,focusVisible:S,underline:y,variant:g}),I=A(T);return(0,O.jsx)(k,(0,o.Z)({color:u,className:(0,a.Z)(I.root,c),classes:v,component:l,onBlur:R,onFocus:z,ref:P,ownerState:T,variant:g,sx:[...Object.keys(w).includes(u)?[]:[{color:u}],...Array.isArray(b)?b:[b]]},h))});var F=E},58363:function(e,t){"use strict";t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t})}return!0}},66485:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}async function n(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}async function r(e){let n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);let r=window.getSelection(),o=window.document.createRange();r.removeAllRanges(),o.selectNode(n),r.addRange(o);let i=!1;try{i=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(n)}if(!i)throw t()}async function o(e){try{await n(e)}catch(i){try{await r(e)}catch(o){throw o||i||t()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ e.exports=o},32512:function(e,t,n){"use strict";n.d(t,{uI:function(){return Q}});var r=n(67294),o=n(45697),i=n.n(o),a=n(70655),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function u(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=c.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"==typeof e&&null!==e}function f(e){return e.filter(function(e){return -1===l.indexOf(e.name)})}function p(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function d(e){if("function"!=typeof e.webkitGetAsEntry)return m(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?y(t):m(e)}function m(e){var t=e.getAsFile();return t?Promise.resolve(u(t)):Promise.reject("".concat(e," is not a File"))}function v(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){return[2,e.isDirectory?y(e):function(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){return[2,new Promise(function(t,n){e.file(function(n){t(u(n,e.fullPath))},function(e){n(e)})})]})})}(e)]})})}function y(e){var t=e.createReader();return new Promise(function(e,n){var r=[];!function o(){var i=this;t.readEntries(function(t){return(0,a.mG)(i,void 0,void 0,function(){var i;return(0,a.Jh)(this,function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return e(a.sent()),[3,4];case 3:return n(a.sent()),[3,4];case 4:return[3,6];case 5:i=Promise.all(t.map(v)),r.push(i),o(),a.label=6;case 6:return[2]}})})},function(e){n(e)})}()})}var g=n(58363);function b(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||O(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){D(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,r=u}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||O(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var A=function(e){var t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},k=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},E=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},F={code:"too-many-files",message:"Too many files"};function S(e,t){var n="application/x-moz-file"===e.type||(0,g.Z)(e,t);return[n,n?null:A(t)]}function C(e,t,n){if(P(e.size)){if(P(t)&&P(n)){if(e.size>n)return[!1,k(n)];if(e.size<t)return[!1,E(t)]}else if(P(t)&&e.size<t)return[!1,E(t)];else if(P(n)&&e.size>n)return[!1,k(n)]}return[!0,null]}function P(e){return null!=e}function R(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function z(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}function T(e){e.preventDefault()}function I(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some(function(t){return!R(e)&&t&&t.apply(void 0,[e].concat(r)),R(e)})}}function M(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function _(e){return/^.*\.[\w]+$/.test(e)}var Z=["children"],L=["open"],B=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],$=["refKey","onChange","onClick"];function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,r=u}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||K(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach(function(t){W(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var q=(0,r.forwardRef)(function(e,t){var n=e.children,o=Q(H(e,Z)),i=o.open,a=H(o,L);return(0,r.useImperativeHandle)(t,function(){return{open:i}},[i]),r.createElement(r.Fragment,null,n(U(U({},a),{},{open:i})))});q.displayName="Dropzone";var V={disabled:!1,getFilesFromEvent:function(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){return s(e)&&s(e.dataTransfer)?[2,function(e,t){return(0,a.mG)(this,void 0,void 0,function(){var n;return(0,a.Jh)(this,function(r){switch(r.label){case 0:if(!e.items)return[3,2];if(n=p(e.items).filter(function(e){return"file"===e.kind}),"drop"!==t)return[2,n];return[4,Promise.all(n.map(d))];case 1:return[2,f(function e(t){return t.reduce(function(t,n){return(0,a.ev)((0,a.ev)([],(0,a.CR)(t),!1),(0,a.CR)(Array.isArray(n)?e(n):[n]),!1)},[])}(r.sent()))];case 2:return[2,f(p(e.files).map(function(e){return u(e)}))]}})})}(e.dataTransfer,e.type)]:s(e)&&s(e.target)?[2,p(e.target.files).map(function(e){return u(e)})]:Array.isArray(e)&&e.every(function(e){return"getFile"in e&&"function"==typeof e.getFile})?[2,function(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return e.getFile()}))];case 1:return[2,t.sent().map(function(e){return u(e)})]}})})}(e)]:[2,[]]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};q.defaultProps=V,q.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var Y={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=U(U({},V),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,m=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,g=t.onFileDialogOpen,h=t.useFsAccessApi,O=t.autoFocus,j=t.preventDropOnDocument,A=t.noClick,k=t.noKeyboard,E=t.noDrag,Z=t.noDragEventsBubbling,L=t.onError,J=t.validator,q=(0,r.useMemo)(function(){return function(e){if(P(e))return Object.entries(e).reduce(function(e,t){var n=x(t,2),r=n[0],o=n[1];return[].concat(b(e),[r],b(o))},[]).filter(function(e){return M(e)||_(e)}).join(",")}(n)},[n]),Q=(0,r.useMemo)(function(){return P(n)?[{description:"Files",accept:Object.entries(n).filter(function(e){var t=x(e,2),n=t[0],r=t[1],o=!0;return M(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(_)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(e,t){var n=x(t,2),r=n[0],o=n[1];return w(w({},e),{},D({},r,o))},{})}]:n},[n]),et=(0,r.useMemo)(function(){return"function"==typeof g?g:ee},[g]),en=(0,r.useMemo)(function(){return"function"==typeof y?y:ee},[y]),er=(0,r.useRef)(null),eo=(0,r.useRef)(null),ei=G((0,r.useReducer)(X,Y),2),ea=ei[0],ec=ei[1],eu=ea.isFocused,el=ea.isFileDialogActive,es=(0,r.useRef)("undefined"!=typeof window&&window.isSecureContext&&h&&"showOpenFilePicker"in window),ef=function(){!es.current&&el&&setTimeout(function(){eo.current&&!eo.current.files.length&&(ec({type:"closeDialog"}),en())},300)};(0,r.useEffect)(function(){return window.addEventListener("focus",ef,!1),function(){window.removeEventListener("focus",ef,!1)}},[eo,el,en,es]);var ep=(0,r.useRef)([]),ed=function(e){er.current&&er.current.contains(e.target)||(e.preventDefault(),ep.current=[])};(0,r.useEffect)(function(){return j&&(document.addEventListener("dragover",T,!1),document.addEventListener("drop",ed,!1)),function(){j&&(document.removeEventListener("dragover",T),document.removeEventListener("drop",ed))}},[er,j]),(0,r.useEffect)(function(){return!o&&O&&er.current&&er.current.focus(),function(){}},[er,O,o]);var em=(0,r.useCallback)(function(e){L?L(e):console.error(e)},[L]),ev=(0,r.useCallback)(function(e){var t;e.preventDefault(),e.persist(),eF(e),ep.current=[].concat(function(e){if(Array.isArray(e))return N(e)}(t=ep.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||K(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),z(e)&&Promise.resolve(i(e)).then(function(t){if(!R(e)||Z){var n,r,o,i,f,p,d,m,v=t.length,y=v>0&&(r=(n={files:t,accept:q,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:J}).files,o=n.accept,i=n.minSize,f=n.maxSize,p=n.multiple,d=n.maxFiles,m=n.validator,(!!p||!(r.length>1))&&(!p||!(d>=1)||!(r.length>d))&&r.every(function(e){var t=x(S(e,o),1)[0],n=x(C(e,i,f),1)[0],r=m?m(e):null;return t&&n&&!r}));ec({isDragAccept:y,isDragReject:v>0&&!y,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}}).catch(function(e){return em(e)})},[i,s,em,Z,q,c,a,u,l,J]),ey=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eF(e);var t=z(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1},[p,Z]),eg=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eF(e);var t=ep.current.filter(function(e){return er.current&&er.current.contains(e)}),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ep.current=t,!(t.length>0)&&(ec({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),z(e)&&f&&f(e))},[er,f,Z]),eb=(0,r.useCallback)(function(e,t){var n=[],r=[];e.forEach(function(e){var t=G(S(e,q),2),o=t[0],i=t[1],u=G(C(e,c,a),2),l=u[0],s=u[1],f=J?J(e):null;if(o&&l&&!f)n.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter(function(e){return e})})}}),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach(function(e){r.push({file:e,errors:[F]})}),n.splice(0)),ec({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&v&&v(r,t),n.length>0&&m&&m(n,t)},[ec,u,q,c,a,l,d,m,v,J]),eh=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eF(e),ep.current=[],z(e)&&Promise.resolve(i(e)).then(function(t){(!R(e)||Z)&&eb(t,e)}).catch(function(e){return em(e)}),ec({type:"reset"})},[i,eb,em,Z]),ew=(0,r.useCallback)(function(){if(es.current){ec({type:"openDialog"}),et(),window.showOpenFilePicker({multiple:u,types:Q}).then(function(e){return i(e)}).then(function(e){eb(e,null),ec({type:"closeDialog"})}).catch(function(e){e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)?(en(e),ec({type:"closeDialog"})):e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)?(es.current=!1,eo.current?(eo.current.value=null,eo.current.click()):em(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):em(e)});return}eo.current&&(ec({type:"openDialog"}),et(),eo.current.value=null,eo.current.click())},[ec,et,en,h,eb,em,Q,u]),eD=(0,r.useCallback)(function(e){er.current&&er.current.isEqualNode(e.target)&&(" "===e.key||"Enter"===e.key||32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),ew())},[er,ew]),ex=(0,r.useCallback)(function(){ec({type:"focus"})},[]),eO=(0,r.useCallback)(function(){ec({type:"blur"})},[]),ej=(0,r.useCallback)(function(){A||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return -1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/")}()?setTimeout(ew,0):ew())},[A,ew]),eA=function(e){return o?null:e},ek=function(e){return k?null:eA(e)},eE=function(e){return E?null:eA(e)},eF=function(e){Z&&e.stopPropagation()},eS=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.role,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=H(e,B);return U(U(W({onKeyDown:ek(I(r,eD)),onFocus:ek(I(i,ex)),onBlur:ek(I(a,eO)),onClick:eA(I(c,ej)),onDragEnter:eE(I(u,ev)),onDragOver:eE(I(l,ey)),onDragLeave:eE(I(s,eg)),onDrop:eE(I(f,eh)),role:"string"==typeof n&&""!==n?n:"presentation"},void 0===t?"ref":t,er),o||k?{}:{tabIndex:0}),p)}},[er,eD,ex,eO,ej,ev,ey,eg,eh,k,E,o]),eC=(0,r.useCallback)(function(e){e.stopPropagation()},[]),eP=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.onChange,r=e.onClick,o=H(e,$);return U(U({},W({accept:q,multiple:u,type:"file",style:{display:"none"},onChange:eA(I(n,eh)),onClick:eA(I(r,eC)),tabIndex:-1},void 0===t?"ref":t,eo)),o)}},[eo,n,u,eh,o]);return U(U({},ea),{},{isFocused:eu&&!o,getRootProps:eS,getInputProps:eP,rootRef:er,inputRef:eo,open:eA(ew)})}function X(e,t){switch(t.type){case"focus":return U(U({},e),{},{isFocused:!0});case"blur":return U(U({},e),{},{isFocused:!1});case"openDialog":return U(U({},Y),{},{isFileDialogActive:!0});case"closeDialog":return U(U({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return U(U({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return U(U({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return U({},Y);default:return e}}function ee(){}},70655:function(e,t,n){"use strict";n.d(t,{CR:function(){return u},Jh:function(){return c},ZT:function(){return o},ev:function(){return l},mG:function(){return a},pi:function(){return i}});var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,c)}u((r=r.apply(e,t||[])).next())})}function c(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(u){c=[6,u],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function l(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}}}]);