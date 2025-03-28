(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{5181:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(7876),o=r(7328),a=r.n(o),i=r(4232);class l extends i.Component{render(){let{dragActive:e}=this.state,{className:t,activeClassName:r,passiveClassName:o,children:a}=this.props,i="".concat(null!=t?t:""," ").concat(e?null!=r?r:"":null!=o?o:"");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"file",style:{display:"none"},ref:this.fileInput,multiple:!1,onChange:this.onUploadFile}),(0,n.jsx)("div",{className:i,onDrop:this.onDropFile,onDragOver:this.onDragOver,onDragExit:this.onDragExit,onClick:this.onClick,children:a?a(e):null})]})}constructor(...e){super(...e),this.state={dragActive:!1},this.onDropFile=e=>{e.preventDefault(),this.setState({dragActive:!1});let{dataTransfer:{files:t}}=e;0!==t.length&&this.props.onDropFile(t.item(0))},this.onDragOver=e=>{e.preventDefault(),this.setState({dragActive:!0})},this.onDragExit=e=>{e.preventDefault(),this.setState({dragActive:!1})},this.onClick=e=>{e.preventDefault(),this.fileInput.current.click()},this.onUploadFile=e=>{e.preventDefault();let t=this.fileInput.current.files;t&&0!=t.length&&0!==t.length&&this.props.onDropFile(t.item(0))},this.fileInput=i.createRef()}}var s=r(8447),c=r(5337),u=r.n(c);function p(e){let{type:t,data:r}=e,o={type:t,data:r},a=f(o),i=d("a","href",o,{},"Link Text"),l=d("img","src",o),s=d("link","href",o,{rel:"stylesheet"}),c=d("script","src",o),p='url("'.concat(CSS.escape(a),'")');return(0,n.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,n.jsxs)("table",{className:u().Output,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{style:{width:"30%"}}),(0,n.jsx)("th",{style:{width:"60%"}}),(0,n.jsx)("th",{style:{width:"10%"}})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)(h,{id:"uri",value:a,children:["URI \xa0",(0,n.jsxs)("small",{children:["(",(0,n.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"Open As URL"})," *)"]})]}),(0,n.jsx)(h,{label:"<a href=>",id:"link",value:i}),(0,n.jsx)(h,{label:"<script>",id:"js",value:c}),(0,n.jsx)(h,{label:"<img>",id:"img",value:l}),(0,n.jsx)(h,{label:"CSS url()",id:"css_url",value:p}),(0,n.jsx)(h,{label:"<link rel=stylesheet>",id:"css_link",value:s})]})]}),(0,n.jsx)("hr",{}),(0,n.jsx)("small",{children:"*) Not all Browsers Support opening all links. If it does not work try copy pasting the URL manually."})]})}function d(e,t,r,n,o){let a=document.createElement(e);return n&&Object.entries(n).forEach(e=>{let[t,r]=e;return a.setAttribute(t,r)}),a.setAttribute(t,f(r)),o&&a.append(document.createTextNode(o)),a.outerHTML}function f(e){let{data:t,type:r}=e;return"data:".concat(r,";base64,").concat(t)}function h(e){let{value:t,label:r,id:o,children:a}=e,[l,c]=i.useState(!1),[p,d]=i.useState(null),f=i.useRef(!1);return i.useEffect(()=>(f.current=!0,()=>{f.current=!1})),(0,n.jsxs)("tr",{className:u().Output,children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{htmlFor:o,children:null!=r?r:a})}),(0,n.jsx)("td",{children:(0,n.jsx)("input",{type:"text",readOnly:!0,value:t,id:o})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.CopyToClipboard,{text:t,onCopy:()=>{p&&clearTimeout(p),d(setTimeout(()=>{f.current&&(d(null),c(!1))},1e3)),c(!0)},children:(0,n.jsx)("button",{children:l?"Copied":"Copy"})})})]})}var y=r(5855),b=r.n(y);class m extends i.Component{render(){let{forceType:e,type:t,base64:r}=this.state;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"Convert File To Base64"})}),(0,n.jsx)("h1",{children:"Convert File To Base64"}),(0,n.jsxs)("div",{className:b().input,children:[(0,n.jsxs)("p",{children:["This page allows you to convert a file to a ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("code",{children:"Base64 Data URI"})}),". Such a URL allows you to embed (small) files directly into other files. This approach is ",(0,n.jsx)("a",{href:"https://caniuse.com/datauri",target:"_blank",rel:"noopener noreferrer",children:"supported by all major browsers"}),", although there are file size limits."]}),(0,n.jsx)("p",{children:"All data on this page is processed locally and never reaches any server that could perform logging."}),(0,n.jsx)(l,{onDropFile:this.handleDroppedFile,className:b().dropZone,activeClassName:b().active,children:e=>e?"Drop File To Convert":"Drag A File Here Or Click To Open"}),(0,n.jsxs)("form",{onSubmit:this.onSubmitForm,className:b().form,children:[(0,n.jsx)("input",{type:"checkbox",checked:e,onChange:this.onChangeCheckbox}),(0,n.jsxs)("span",{className:e?b().active:b().passive,children:["Force ",(0,n.jsx)("code",{children:"Content-Type"})," \xa0",(0,n.jsx)("input",{type:"text",disabled:!e,value:t,onChange:this.onChangeText})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h2",{children:["Results \xa0 ",(0,n.jsx)("button",{disabled:!r,onClick:this.onClearResults,children:"Clear Results"})]}),r?(0,n.jsx)(p,{data:r,type:t}):"There are no results yet. Pick a file to begin. "]})]})}constructor(...e){super(...e),this.state={forceType:!1,type:"text/plain",base64:void 0},this.handleDroppedFile=async e=>{let{data:t,type:r}=await x(e);this.setState(e=>{let{forceType:n}=e;return n?{base64:t}:{type:r,base64:t}})},this.onSubmitForm=e=>{e.preventDefault()},this.onChangeCheckbox=e=>{this.setState({forceType:e.target.checked})},this.onChangeText=e=>{this.setState({type:e.target.value})},this.onClearResults=e=>{e.preventDefault(),this.setState({base64:void 0})}}}async function x(e){let t=(await new Promise((t,r)=>{let n=new FileReader;n.onload=()=>t(n.result),n.onerror=r,n.readAsDataURL(e)})).match(/^data:([^;]+);base64,(.*)$/i);if(!t)throw Error("not a valid data URI");return{type:t[1],data:t[2]}}},5337:e=>{e.exports={Output:"ResultsDisplay_Output__yL39d"}},5855:e=>{e.exports={dropZone:"index_dropZone__QC2UM",active:"index_active__s6fVP",passive:"index_passive__myR9f",input:"index_input__VfcNh",form:"index_form__E_iNs"}},6269:(e,t,r)=>{"use strict";var n=r(9680),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,i,l,s,c,u,p,d=!1;t||(t={}),i=t.debug||!1;try{if(s=n(),c=document.createRange(),u=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=o[t.format]||o.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(p),c.selectNodeContents(p),u.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(n){i&&console.error("unable to copy using execCommand: ",n),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(n){i&&console.error("unable to copy using clipboardData: ",n),i&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=r.replace(/#{\s*key\s*}/g,a),window.prompt(l,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(c):u.removeAllRanges()),p&&document.body.removeChild(p),s()}return d}},6760:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5181)}])},6852:(e,t,r)=>{"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=l(r(4232)),a=l(r(6269)),i=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(s,e);var t,r,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=d(s);return e=t?Reflect.construct(r,arguments,d(this).constructor):r.apply(this,arguments),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function s(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return f(p(e=l.call.apply(l,[this].concat(r))),"onClick",function(t){var r=e.props,n=r.text,i=r.onCopy,l=r.children,s=r.options,c=o.default.Children.only(l),u=(0,a.default)(n,s);i&&i(n,u),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(t)}),e}return r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),n=o.default.Children.only(t);return o.default.cloneElement(n,c(c({},r),{},{onClick:this.onClick}))}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(s.prototype,r),Object.defineProperty(s,"prototype",{writable:!1}),s}(o.default.PureComponent);t.CopyToClipboard=h,f(h,"defaultProps",{onCopy:void 0,options:void 0})},7328:(e,t,r)=>{e.exports=r(9836)},8447:(e,t,r)=>{"use strict";var n=r(6852).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},9680:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6760)),_N_E=e.O()}]);