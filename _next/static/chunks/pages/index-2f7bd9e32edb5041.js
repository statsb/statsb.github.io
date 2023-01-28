(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(4186)}])},4186:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return d}});var a=l(5893),r=l(7294),t=l(469),c=l.n(t);function n(e){let{data:s,lowerThreshold:l,upperThreshold:r,filtered:t}=e;return(0,a.jsxs)("table",{className:"table table-hover table-sm",children:[(0,a.jsx)("thead",{className:"table-light",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:c().th,children:"#"}),(0,a.jsx)("th",{scope:"col",className:c().th,children:"buySellRatio"}),(0,a.jsx)("th",{scope:"col",className:c().th,children:"buyVol"}),(0,a.jsx)("th",{scope:"col",className:c().th,children:"sellVol"}),(0,a.jsx)("th",{scope:"col",className:c().th,children:"timestamp"})]})}),(0,a.jsx)("tbody",{children:s.map((e,s)=>{let{buySellRatio:c,buyVol:n,sellVol:i,timestamp:o}=e,d=c<=l,h=c>=r;if(t&&!d&&!h)return null;let m=d?"danger":h?"success":"";return(0,a.jsxs)("tr",{className:m?"table-".concat(m):"",children:[(0,a.jsx)("th",{scope:"row",children:s+1}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:m?"badge bg-".concat(m):"",children:c})}),(0,a.jsx)("td",{children:n}),(0,a.jsx)("td",{children:i}),(0,a.jsx)("td",{className:"small",children:"".concat(new Date(o).toLocaleTimeString().replace(":00 AM"," am").replace(":00 PM"," pm"),", ").concat(new Date(o).toLocaleDateString())})]},s)})})]})}function i(e){let{apikey:s}=e,[l,t]=(0,r.useState)(!1),[i,o]=(0,r.useState)("BTCUSDT"),[d,h]=(0,r.useState)("15m"),[m,u]=(0,r.useState)(100),[x,p]=(0,r.useState)(.8),j=(0,r.useRef)(.8),[b,N]=(0,r.useState)(1.2),v=(0,r.useRef)(1.2),[g,f]=(0,r.useState)(.5),w=(0,r.useRef)(.5),[y,T]=(0,r.useState)(0),S=(0,r.useRef)(0),[_,D]=(0,r.useState)(!1),[k,E]=(0,r.useState)([]),C=()=>{D(!_)},P=e=>{o(e.currentTarget.value)},F=e=>{h(e.currentTarget.value)},O=e=>{let s=Number(e.currentTarget.value);p(s),j.current=s},I=e=>{let s=Number(e.currentTarget.value);N(Number(e.currentTarget.value)),v.current=s},G=e=>{f(Number(e.currentTarget.value)),w.current=Number(e.currentTarget.value),S.current=0,T(0)},L=e=>{u(Number(e.currentTarget.value))},M=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(S.current=60*w.current,T(60*w.current)),setTimeout(()=>{let e=Math.max(S.current-1,0);0===e?(R(),T(e)):(S.current=e,T(e),M())},1e3)},U=e=>{let s=0,l=0,a=JSON.parse(JSON.stringify(e));a.forEach(e=>{let{buySellRatio:a}=e;a<=j.current?s+=1:a>=v.current&&(l+=1)}),"undefined"!=typeof document&&(document.title="".concat(i," \uD83D\uDD34").concat(s," \uD83D\uDFE2").concat(l))},R=async()=>{try{t(!0);let e=await fetch("https://fapi.binance.com/futures/data/takerlongshortRatio?symbol=".concat(i,"&period=").concat(d,"&limit=").concat(m),{headers:{"X-MBX-APIKEY":s}}),l=await e.json();console.log(l),E(l),M(!0),U(l)}catch(e){console.log(e),document.write(JSON.stringify(null==e?void 0:e.message))}finally{t(!1)}},H=e=>{e.preventDefault(),R()},A=()=>{window.localStorage.removeItem("APIKEY"),window.location.reload()};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("nav",{className:"navbar navbar-light bg-light mb-5 p-3 shadow-sm",children:(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsx)("strong",{className:"navbar-brand",children:"statsb"}),(0,a.jsx)("div",{className:"d-flex",children:(0,a.jsx)("button",{className:"btn btn-dark",onClick:A,children:"Logout"})})]})}),(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-sm mb-5",children:(0,a.jsx)("div",{className:"card",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h5",{className:"card-title",children:"Taker Buy/Sell Volume"}),(0,a.jsx)("h6",{className:"card-subtitle mb-4 text-muted",children:(0,a.jsx)("code",{children:"GET /futures/data/takerlongshortRatio"})}),(0,a.jsxs)("form",{onSubmit:H,children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col form-group mb-3",children:[(0,a.jsx)("label",{htmlFor:"symbol",children:"Symbol"}),(0,a.jsx)("input",{value:i,onChange:P,type:"text",className:"form-control",id:"symbol","aria-describedby":"symbolHelp",placeholder:"symbol e.g. BTCUSDT"})]}),(0,a.jsxs)("div",{className:"col form-group mb-3",children:[(0,a.jsx)("label",{htmlFor:"period",children:"Period"}),(0,a.jsxs)("select",{value:d,onChange:F,className:"form-control",id:"period",children:[(0,a.jsx)("option",{children:"5m"}),(0,a.jsx)("option",{children:"15m"}),(0,a.jsx)("option",{children:"30m"}),(0,a.jsx)("option",{children:"1h"}),(0,a.jsx)("option",{children:"2h"}),(0,a.jsx)("option",{children:"4h"}),(0,a.jsx)("option",{children:"6h"}),(0,a.jsx)("option",{children:"12h"}),(0,a.jsx)("option",{children:"1d"})]})]})]}),(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col form-group mb-3",children:[(0,a.jsx)("label",{htmlFor:"lowerThreshold",children:"Limit"}),(0,a.jsx)("input",{value:m,onChange:L,type:"number",className:"form-control",id:"limit","aria-describedby":"limitHelp",placeholder:"limit (30 - 500)"})]})}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col form-group mb-3",children:[(0,a.jsx)("label",{htmlFor:"lowerThreshold",children:"Lower Threshold"}),(0,a.jsx)("input",{value:x,onChange:O,type:"number",className:"form-control",id:"lowerThreshold","aria-describedby":"lowerThresholdHelp",placeholder:"lowerThreshold"})]}),(0,a.jsxs)("div",{className:"col form-group mb-3",children:[(0,a.jsx)("label",{htmlFor:"upperThreshold",children:"Upper Threshold"}),(0,a.jsx)("input",{value:b,onChange:I,type:"number",className:"form-control",id:"upperThreshold","aria-describedby":"upperThresholdHelp",placeholder:"upperThreshold"})]})]}),(0,a.jsx)("div",{className:"d-grid gap-2",children:(0,a.jsx)("button",{disabled:l,type:"submit",className:"btn btn-block btn-warning mb-2",children:"Submit"})})]})]})})}),(0,a.jsx)("div",{className:"col-sm mb-5",children:!!k.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col form-group mb-3",children:[(0,a.jsx)("label",{htmlFor:"gap",children:"Make requests every:"}),(0,a.jsxs)("select",{value:g,onChange:G,className:"form-control",id:"gap",children:[(0,a.jsx)("option",{value:.5,children:"30s"}),(0,a.jsx)("option",{value:1,children:"1m"}),(0,a.jsx)("option",{value:2,children:"2m"}),(0,a.jsx)("option",{value:3,children:"3m"}),(0,a.jsx)("option",{value:5,children:"5m"}),(0,a.jsx)("option",{value:15,children:"15m"}),(0,a.jsx)("option",{value:30,children:"30m"}),(0,a.jsx)("option",{value:60,children:"1h"})]})]}),(0,a.jsx)("div",{className:"col"})]}),"next request in ",(0,a.jsxs)("b",{children:["(",y,"s)"]}),":",(0,a.jsx)("div",{className:"progress mb-5",children:(0,a.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":75,"aria-valuemin":0,"aria-valuemax":100,style:{width:"".concat(Math.floor(y/(60*g)*100),"%")}})}),(0,a.jsx)("div",{className:"d-flex flex-row-reverse",children:(0,a.jsxs)("div",{className:"form-check pt-5",children:[(0,a.jsx)("input",{checked:_,onChange:C,type:"checkbox",className:c().checkbox+" form-check-input",id:"filtered"}),(0,a.jsx)("label",{className:c().biglabel+" form-check-label",htmlFor:"filtered",children:"Filtered"})]})})]})})]})}),(0,a.jsxs)("div",{className:c().relative+" container",children:[l&&(0,a.jsx)("div",{className:c().loader,children:(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("div",{className:"spinner-border",role:"status",children:(0,a.jsx)("span",{className:"sr-only"})})})}),!!k.length&&(0,a.jsx)(n,{data:k,lowerThreshold:x,upperThreshold:b,filtered:_})]})]})}function o(){let[e,s]=(0,r.useState)(""),[l,t]=(0,r.useState)(""),[n,i]=(0,r.useState)(!1),[o,d]=(0,r.useState)(""),h=e=>{s(e.currentTarget.value)},m=e=>{t(e.currentTarget.value)},u=async s=>{if(s.preventDefault(),d(""),i(!0),!e||!l){d("Username and Password are mandatory!"),i(!1);return}try{let s=await fetch("https://aliveapi.cyclic.app/statsblogin",{headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:l}),method:"POST"}),{success:a,error:r,key:t}=await s.json();if(a)a&&t&&(window.localStorage.setItem("APIKEY",t),window.location.reload());else{d(r+", please try again..");return}}catch(e){d((null==e?void 0:e.message)+", please try again..")}finally{i(!1)}};return(0,a.jsx)("div",{className:c().mt150+" container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-sm"}),(0,a.jsx)("div",{className:"col-sm",children:(0,a.jsxs)("form",{onSubmit:u,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),(0,a.jsx)("input",{value:e,onChange:h,type:"text",className:"form-control",id:"username","aria-describedby":"usernameHelp"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),(0,a.jsx)("input",{value:l,onChange:m,type:"password",className:"form-control",id:"password"})]}),(0,a.jsx)("div",{className:"d-grid gap-2 mb-2",children:(0,a.jsx)("button",{type:"submit",disabled:n,className:"btn btn-warning",children:"Login"})}),!!o&&(0,a.jsx)("div",{className:"text-danger",children:o})]})}),(0,a.jsx)("div",{className:"col-sm"})]})})}function d(){let[e,s]=(0,r.useState)("PENDING"),[l,t]=(0,r.useState)("");return((0,r.useEffect)(()=>{let e=localStorage.getItem("APIKEY");e?(t(e),s("LOGGED_IN")):s("LOGGED_OUT")},[]),"PENDING"===e)?(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("div",{className:"spinner-border",role:"status",children:(0,a.jsx)("span",{className:"sr-only"})})}):"LOGGED_OUT"===e?(0,a.jsx)(o,{}):"LOGGED_IN"===e?(0,a.jsx)(i,{apikey:l}):null}},469:function(e){e.exports={relative:"Theme_relative__padMm",loader:"Theme_loader__iUKJC",checkbox:"Theme_checkbox__Dx9mp",biglabel:"Theme_biglabel__MuilI",mt150:"Theme_mt150__Pdo46",th:"Theme_th__84THv"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);