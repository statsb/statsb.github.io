(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{881:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/debug",function(){return s(5999)}])},5999:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return i}});var t=s(5893),n=s(7294),r=s(1163);function o(){let[e,l]=(0,n.useState)([{symbol:"BTCUSDT",period:"5m",limit:30,lowerThreshold:.8,upperThreshold:1.2,gap:5,filtered:!0,notify:!1}]),s=(0,n.useRef)([]),[r,o]=(0,n.useState)(!1),i=e=>{localStorage.setItem("QUERY_ARRAY",JSON.stringify(e))},c=e=>{l(e),i(e)};(0,n.useEffect)(()=>{let e=localStorage.getItem("QUERY_ARRAY");if(e){let s=JSON.parse(e);l(s)}},[]);let a=()=>{let l=JSON.parse(JSON.stringify(e));l.unshift({symbol:"",period:"5m",limit:30,lowerThreshold:"",upperThreshold:"",gap:5,filtered:!0,notify:!1}),c(l)},d=l=>{let s=JSON.parse(JSON.stringify(e));s.splice(l,1),c(s)},h=(l,s,t)=>{let n=JSON.parse(JSON.stringify(e));n[l][s]=t,c(n)},x=()=>{window.localStorage.removeItem("APIKEY"),window.location.reload()},p=()=>{var l;(null===(l=s.current)||void 0===l?void 0:l.length)>100&&(s.current=[]),e.forEach(e=>{let{symbol:l,period:t,limit:n,lowerThreshold:r,upperThreshold:o,gap:i,filtered:c,notify:a}=e;if(!l||!r||!o)return;let d=window.open("/query#/".concat(l,"/").concat(t,"/").concat(n,"/").concat(r,"/").concat(o,"/").concat(i,"/").concat(Number(c),"/").concat(Number(a)),"_blank");s.current.push(d)}),o(!0)},u=()=>{var e;console.log(s.current),(null===(e=s.current)||void 0===e?void 0:e.length)&&(s.current.forEach(e=>{null==e||e.close()}),o(!1),console.log(s.current))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("nav",{className:"navbar navbar-dark bg-dark mb-5 p-3 shadow-sm",children:(0,t.jsxs)("div",{className:"container-fluid",children:[(0,t.jsx)("strong",{className:"navbar-brand",children:"statsb.github.io"}),(0,t.jsx)("div",{className:"d-flex",children:(0,t.jsx)("button",{className:"btn btn-outline-warning",onClick:x,children:"Logout"})})]})}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("table",{className:"table table-lg",children:[(0,t.jsx)("thead",{className:"table-light",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"col",children:"#"}),(0,t.jsx)("th",{scope:"col",children:"Symbol"}),(0,t.jsx)("th",{scope:"col",children:"Period"}),(0,t.jsx)("th",{scope:"col",children:"Limit"}),(0,t.jsx)("th",{scope:"col",children:"Lower Threshold"}),(0,t.jsx)("th",{scope:"col",children:"Upper Threshold"}),(0,t.jsx)("th",{scope:"col",children:"Refresh Interval"}),(0,t.jsx)("th",{scope:"col",children:"Filtered"}),(0,t.jsx)("th",{scope:"col",children:"Notify"}),(0,t.jsx)("th",{scope:"col",children:(0,t.jsx)("div",{className:"d-flex flex-row-reverse",children:(0,t.jsx)("button",{onClick:a,type:"button",className:"btn btn-outline-dark btn-sm",children:(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="19" height="19" x="0" y="0" viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g fill="#4caf50"><path d="M437.332 192H32c-17.664 0-32 14.336-32 32v21.332c0 17.664 14.336 32 32 32h405.332c17.664 0 32-14.336 32-32V224c0-17.664-14.336-32-32-32zm0 0" fill="#4caf50" data-original="#4caf50" class=""></path><path d="M192 32v405.332c0 17.664 14.336 32 32 32h21.332c17.664 0 32-14.336 32-32V32c0-17.664-14.336-32-32-32H224c-17.664 0-32 14.336-32 32zm0 0" fill="#4caf50" data-original="#4caf50" class=""></path></g></g></svg>'}})})})})]})}),(0,t.jsx)("tbody",{children:e.map((e,l)=>{let{symbol:s,period:n,limit:r,lowerThreshold:o,upperThreshold:i,gap:c,filtered:a,notify:x}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:s&&o&&i?"✅":""}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"150px"},children:(0,t.jsx)("input",{value:s,onChange:e=>{h(l,"symbol",e.target.value)},type:"text",className:"form-control",id:"symbol","aria-describedby":"symbolHelp",placeholder:"symbol e.g. BTCUSDT"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",children:(0,t.jsxs)("select",{value:n,onChange:e=>{h(l,"period",e.target.value)},className:"form-control",id:"period",children:[(0,t.jsx)("option",{children:"5m"}),(0,t.jsx)("option",{children:"15m"}),(0,t.jsx)("option",{children:"30m"}),(0,t.jsx)("option",{children:"1h"}),(0,t.jsx)("option",{children:"2h"}),(0,t.jsx)("option",{children:"4h"}),(0,t.jsx)("option",{children:"6h"}),(0,t.jsx)("option",{children:"12h"}),(0,t.jsx)("option",{children:"1d"})]})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"70px"},children:(0,t.jsx)("input",{value:r,onChange:e=>{h(l,"limit",e.target.value)},type:"text",className:"form-control",id:"limit","aria-describedby":"limitHelp",placeholder:"limit e.g. 30"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"150px"},children:(0,t.jsx)("input",{value:o,onChange:e=>{h(l,"lowerThreshold",e.target.value)},type:"text",className:"form-control",id:"lowerThreshold","aria-describedby":"lowerThresholdHelp",placeholder:"e.g. 0.8"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"150px"},children:(0,t.jsx)("input",{value:i,onChange:e=>{h(l,"upperThreshold",e.target.value)},type:"text",className:"form-control",id:"upperThreshold","aria-describedby":"upperThresholdHelp",placeholder:"e.g. 1.2"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group",style:{maxWidth:"150px"},children:(0,t.jsxs)("select",{value:c,onChange:e=>{h(l,"gap",e.target.value)},className:"form-control",id:"gap",children:[(0,t.jsx)("option",{value:.5,children:"30s"}),(0,t.jsx)("option",{value:1,children:"1m"}),(0,t.jsx)("option",{value:2,children:"2m"}),(0,t.jsx)("option",{value:3,children:"3m"}),(0,t.jsx)("option",{value:5,children:"5m"}),(0,t.jsx)("option",{value:15,children:"15m"}),(0,t.jsx)("option",{value:30,children:"30m"}),(0,t.jsx)("option",{value:60,children:"1h"})]})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group toggle-box",children:(0,t.jsx)("input",{checked:a,onChange:e=>{h(l,"filtered",!a)},type:"checkbox",className:"form-check-input",id:"filtered"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"form-group toggle-box",children:(0,t.jsx)("input",{checked:x,onChange:e=>{h(l,"notify",!x)},type:"checkbox",className:"form-check-input",id:"notify"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"d-flex flex-row-reverse",children:(0,t.jsx)("button",{onClick:()=>d(l),type:"button",className:"btn btn-outline-dark btn-sm",children:"❌"})})})]},l)})})]})})}),(0,t.jsxs)("div",{className:"text-center mt-5",children:[(0,t.jsx)("button",{onClick:p,type:"button",disabled:!(null==e?void 0:e.length),className:"btn btn-primary btn-lg",children:(0,t.jsx)("b",{children:"Start Monitoring \uD83D\uDE80"})}),r&&(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsx)("button",{onClick:u,disabled:!(null==e?void 0:e.length),className:"btn btn-link",children:(0,t.jsx)("b",{children:"close all open windows"})})})]})]})]})}function i(){let e=(0,r.useRouter)(),[l,s]=(0,n.useState)("PENDING");if((0,n.useEffect)(()=>{let e=localStorage.getItem("APIKEY");e?s("LOGGED_IN"):s("LOGGED_OUT")},[]),"PENDING"===l)return(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("div",{className:"spinner-border",role:"status",children:(0,t.jsx)("span",{className:"sr-only"})})});if("LOGGED_OUT"===l)e.replace("/login");else if("LOGGED_IN"===l)return(0,t.jsx)(o,{});return null}},1163:function(e,l,s){e.exports=s(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=881)}),_N_E=e.O()}]);