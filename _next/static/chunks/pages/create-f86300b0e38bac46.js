(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{9782:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return s(1017)}])},1017:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return o}});var t=s(5893),n=s(7294),r=s(1163);function c(){let[e,l]=(0,n.useState)([{symbol:"BTCUSDT",period:"5m",limit:30,lowerThreshold:.8,upperThreshold:1.2,gap:5,filtered:!0,notify:!1}]),s=(0,n.useRef)([]),[r,c]=(0,n.useState)(!1),[o,i]=(0,n.useState)(!1),a=e=>{localStorage.setItem("QUERY_ARRAY",JSON.stringify(e))},d=e=>{l(e),a(e)},h=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?document.body.setAttribute("data-bs-theme","dark"):document.body.removeAttribute("data-bs-theme")};(0,n.useEffect)(()=>{let e=localStorage.getItem("QUERY_ARRAY"),s=localStorage.getItem("DARK_THEME");if(e){let s=JSON.parse(e);l(s)}"1"===s&&(i(!0),h(!0))},[]);let x=()=>{let l=JSON.parse(JSON.stringify(e));l.unshift({symbol:"",period:"5m",limit:30,lowerThreshold:"",upperThreshold:"",gap:5,filtered:!0,notify:!1}),d(l)},m=l=>{let s=JSON.parse(JSON.stringify(e));s.splice(l,1),d(s)},p=(l,s,t)=>{let n=JSON.parse(JSON.stringify(e));n[l][s]=t,d(n)},u=()=>{window.localStorage.removeItem("APIKEY"),window.location.reload()},j=()=>{var l;(null===(l=s.current)||void 0===l?void 0:l.length)>100&&(s.current=[]),e.forEach(e=>{let{symbol:l,period:t,limit:n,lowerThreshold:r,upperThreshold:c,gap:o,filtered:i,notify:a}=e;if(!l||!r||!c)return;let d=window.open("/query#/".concat(l,"/").concat(t,"/").concat(n,"/").concat(r,"/").concat(c,"/").concat(o,"/").concat(Number(i),"/").concat(Number(a)),"_blank");s.current.push(d)}),c(!0)},g=()=>{var e;(null===(e=s.current)||void 0===e?void 0:e.length)&&(s.current.forEach(e=>{null==e||e.close()}),c(!1))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("nav",{className:"navbar navbar-dark bg-dark mb-5 p-3 shadow-sm",children:(0,t.jsxs)("div",{className:"container-fluid",children:[(0,t.jsx)("a",{href:"/",children:(0,t.jsx)("strong",{className:"navbar-brand",children:"TEAM CRYPTO WHALE"})}),(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsxs)("div",{className:"form-group toggle-box mr-50",children:[(0,t.jsx)("span",{className:"fs-5 p-1",children:"\uD83D\uDD06"}),(0,t.jsx)("input",{checked:o,onChange:e=>{h(!o),localStorage.setItem("DARK_THEME",o?"0":"1"),i(!o)},type:"checkbox",className:"form-check-input",id:"darkTheme"}),(0,t.jsx)("span",{className:"fs-5 p-1 invert",children:"\uD83C\uDF19"})]}),(0,t.jsx)("button",{className:"btn btn-outline-warning",onClick:u,children:"Logout"})]})]})}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("table",{className:"table table-lg ".concat(o?"table-dark":""),children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"col",children:"#"}),(0,t.jsx)("th",{scope:"col",children:"Symbol"}),(0,t.jsx)("th",{scope:"col",children:"Period"}),(0,t.jsx)("th",{scope:"col",children:"Limit"}),(0,t.jsx)("th",{scope:"col",children:"LT"}),(0,t.jsx)("th",{scope:"col",children:"UT"}),(0,t.jsx)("th",{scope:"col",children:"Refresh Interval"}),(0,t.jsx)("th",{scope:"col",children:"Filtered"}),(0,t.jsx)("th",{scope:"col",children:"Notify"}),(0,t.jsx)("th",{scope:"col",children:(0,t.jsx)("div",{className:"d-flex flex-row-reverse",children:(0,t.jsx)("button",{onClick:x,type:"button",className:"btn btn-outline-dark btn-sm",children:(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="19" height="19" x="0" y="0" viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g fill="#4caf50"><path d="M437.332 192H32c-17.664 0-32 14.336-32 32v21.332c0 17.664 14.336 32 32 32h405.332c17.664 0 32-14.336 32-32V224c0-17.664-14.336-32-32-32zm0 0" fill="#4caf50" data-original="#4caf50" class=""></path><path d="M192 32v405.332c0 17.664 14.336 32 32 32h21.332c17.664 0 32-14.336 32-32V32c0-17.664-14.336-32-32-32H224c-17.664 0-32 14.336-32 32zm0 0" fill="#4caf50" data-original="#4caf50" class=""></path></g></g></svg>'}})})})})]})}),(0,t.jsx)("tbody",{children:e.map((e,l)=>{let{symbol:s,period:n,limit:r,lowerThreshold:c,upperThreshold:o,gap:i,filtered:a,notify:d}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsxs)("th",{scope:"row",children:[l+1,s&&c&&o?"✅":""]}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"150px"},children:(0,t.jsx)("input",{value:s,onChange:e=>{p(l,"symbol",e.target.value)},type:"text",className:"form-control",id:"symbol","aria-describedby":"symbolHelp",placeholder:"symbol e.g. BTCUSDT"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",children:(0,t.jsxs)("select",{value:n,onChange:e=>{p(l,"period",e.target.value)},className:"form-control",id:"period",children:[(0,t.jsx)("option",{children:"5m"}),(0,t.jsx)("option",{children:"15m"}),(0,t.jsx)("option",{children:"30m"}),(0,t.jsx)("option",{children:"1h"}),(0,t.jsx)("option",{children:"2h"}),(0,t.jsx)("option",{children:"4h"}),(0,t.jsx)("option",{children:"6h"}),(0,t.jsx)("option",{children:"12h"}),(0,t.jsx)("option",{children:"1d"})]})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"70px"},children:(0,t.jsx)("input",{value:r,onChange:e=>{p(l,"limit",e.target.value)},type:"text",className:"form-control",id:"limit","aria-describedby":"limitHelp",placeholder:"limit e.g. 30"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"70px"},children:(0,t.jsx)("input",{value:c,onChange:e=>{p(l,"lowerThreshold",e.target.value)},type:"text",className:"form-control",id:"lowerThreshold","aria-describedby":"lowerThresholdHelp",placeholder:"e.g. 0.8"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"70px"},children:(0,t.jsx)("input",{value:o,onChange:e=>{p(l,"upperThreshold",e.target.value)},type:"text",className:"form-control",id:"upperThreshold","aria-describedby":"upperThresholdHelp",placeholder:"e.g. 1.2"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"150px"},children:(0,t.jsxs)("select",{value:i,onChange:e=>{p(l,"gap",e.target.value)},className:"form-control",id:"gap",children:[(0,t.jsx)("option",{value:.5,children:"30s"}),(0,t.jsx)("option",{value:1,children:"1m"}),(0,t.jsx)("option",{value:2,children:"2m"}),(0,t.jsx)("option",{value:3,children:"3m"}),(0,t.jsx)("option",{value:5,children:"5m"}),(0,t.jsx)("option",{value:15,children:"15m"}),(0,t.jsx)("option",{value:30,children:"30m"}),(0,t.jsx)("option",{value:60,children:"1h"})]})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group toggle-box",children:(0,t.jsx)("input",{checked:a,onChange:e=>{p(l,"filtered",!a)},type:"checkbox",className:"form-check-input",id:"filtered"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group toggle-box",children:(0,t.jsx)("input",{checked:d,onChange:e=>{p(l,"notify",!d)},type:"checkbox",className:"form-check-input",id:"notify"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"d-flex flex-row-reverse",children:(0,t.jsx)("button",{onClick:()=>m(l),type:"button",className:"btn btn-outline-dark btn-sm",children:"❌"})})})]},l)})})]})})}),(0,t.jsxs)("div",{className:"text-center mt-5",children:[(0,t.jsx)("button",{onClick:j,type:"button",disabled:!(null==e?void 0:e.length),className:"btn btn-primary btn-lg",children:(0,t.jsx)("b",{children:"Start Monitoring \uD83D\uDE80"})}),r&&(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsx)("button",{onClick:g,disabled:!(null==e?void 0:e.length),className:"btn btn-link",children:(0,t.jsx)("b",{children:"close all open windows"})})})]})]})]})}function o(){let e=(0,r.useRouter)(),[l,s]=(0,n.useState)("PENDING");if((0,n.useEffect)(()=>{let e=localStorage.getItem("APIKEY");e?s("LOGGED_IN"):s("LOGGED_OUT")},[]),"PENDING"===l)return(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("div",{className:"spinner-border",role:"status",children:(0,t.jsx)("span",{className:"sr-only"})})});if("LOGGED_OUT"===l)e.replace("/login");else if("LOGGED_IN"===l)return(0,t.jsx)(c,{});return null}},1163:function(e,l,s){e.exports=s(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9782)}),_N_E=e.O()}]);