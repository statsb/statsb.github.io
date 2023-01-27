(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(4186)}])},4186:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return i}});var r=l(5893),a=l(7294),t=l(469),c=l.n(t);function n(e){let{data:s,threshold:l,filtered:a}=e;return(0,r.jsxs)("table",{className:"table table-hover",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"##"}),(0,r.jsx)("th",{scope:"col",children:"buySellRatio"}),(0,r.jsx)("th",{scope:"col",children:"buyVol"}),(0,r.jsx)("th",{scope:"col",children:"sellVol"}),(0,r.jsx)("th",{scope:"col",children:"timestamp"})]})}),(0,r.jsx)("tbody",{children:s.map((e,s)=>{let{buySellRatio:t,buyVol:c,sellVol:n,timestamp:i}=e,o=t<=l;return a&&!o?null:(0,r.jsxs)("tr",{className:o?"table-danger":"",children:[(0,r.jsx)("th",{scope:"row",children:s+1}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{className:o?"badge bg-danger":"",children:t})}),(0,r.jsx)("td",{children:c}),(0,r.jsx)("td",{children:n}),(0,r.jsx)("td",{children:"".concat(new Date(i).toLocaleTimeString(),", ").concat(new Date(i).toLocaleDateString())})]},s)})})]})}function i(){let[e,s]=(0,a.useState)(!1),[l,t]=(0,a.useState)("BTCUSDT"),[i,o]=(0,a.useState)("15m"),[d,h]=(0,a.useState)(100),[m,u]=(0,a.useState)(.8),[x,j]=(0,a.useState)(.5),b=(0,a.useRef)(.5),[p,v]=(0,a.useState)(0),g=(0,a.useRef)(0),[N,f]=(0,a.useState)(!1),[w,y]=(0,a.useState)([]),_=e=>{f(!N)},S=e=>{t(e.currentTarget.value)},T=e=>{o(e.currentTarget.value)},k=e=>{u(Number(e.currentTarget.value))},C=e=>{j(Number(e.currentTarget.value)),b.current=Number(e.currentTarget.value),g.current=0,v(0)},F=e=>{h(Number(e.currentTarget.value))},D=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(g.current=60*b.current,v(60*b.current)),setTimeout(()=>{let e=Math.max(g.current-1,0);0===e?(E(),v(e)):(g.current=e,v(e),D())},1e3)},E=async()=>{try{s(!0);let e=await fetch("https://fapi.binance.com/futures/data/takerlongshortRatio?symbol=".concat(l,"&period=").concat(i,"&limit=").concat(d),{headers:{"X-MBX-APIKEY":"1sqj86AlSZsVw19qzAcda7iJ3qbBDX8sZsgob8SEWFBVhFxwK5NcLPDXeZwXryEp"}}),r=await e.json();console.log(r),y(r),D(!0)}catch(e){console.log(e),document.write(JSON.stringify(null==e?void 0:e.message))}finally{s(!1)}},X=e=>{e.preventDefault(),E()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow",children:(0,r.jsx)("h5",{className:"my-0 mr-md-auto font-weight-normal",children:(0,r.jsx)("strong",{children:"statsb"})})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm mb-5",children:(0,r.jsx)("div",{className:"card",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h5",{className:"card-title",children:"Taker Buy/Sell Volume"}),(0,r.jsx)("h6",{className:"card-subtitle mb-4 text-muted",children:(0,r.jsx)("code",{children:"GET /futures/data/takerlongshortRatio"})}),(0,r.jsxs)("form",{onSubmit:X,children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"symbol",children:"Symbol"}),(0,r.jsx)("input",{value:l,onChange:S,type:"text",className:"form-control",id:"symbol","aria-describedby":"symbolHelp",placeholder:"symbol e.g. BTCUSDT"})]}),(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"period",children:"Period"}),(0,r.jsxs)("select",{value:i,onChange:T,className:"form-control",id:"period",children:[(0,r.jsx)("option",{children:"5m"}),(0,r.jsx)("option",{children:"15m"}),(0,r.jsx)("option",{children:"30m"}),(0,r.jsx)("option",{children:"1h"}),(0,r.jsx)("option",{children:"2h"}),(0,r.jsx)("option",{children:"4h"}),(0,r.jsx)("option",{children:"6h"}),(0,r.jsx)("option",{children:"12h"}),(0,r.jsx)("option",{children:"1d"})]})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"threshold",children:"Limit"}),(0,r.jsx)("input",{value:d,onChange:F,type:"number",className:"form-control",id:"limit","aria-describedby":"limitHelp",placeholder:"limit (30 - 500)"})]}),(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"threshold",children:"Threshold"}),(0,r.jsx)("input",{value:m,onChange:k,type:"number",className:"form-control",id:"threshold","aria-describedby":"thresholdHelp",placeholder:"warning threshold"})]})]}),(0,r.jsx)("div",{className:"d-grid gap-2",children:(0,r.jsx)("button",{disabled:e,type:"submit",className:"btn btn-block btn-warning mb-2",children:"Submit"})})]})]})})}),(0,r.jsx)("div",{className:"col-sm mb-5",children:!!w.length&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"gap",children:"Make requests every:"}),(0,r.jsxs)("select",{value:x,onChange:C,className:"form-control",id:"gap",children:[(0,r.jsx)("option",{value:.5,children:"30s"}),(0,r.jsx)("option",{value:1,children:"1m"}),(0,r.jsx)("option",{value:2,children:"2m"}),(0,r.jsx)("option",{value:3,children:"3m"}),(0,r.jsx)("option",{value:5,children:"5m"}),(0,r.jsx)("option",{value:15,children:"15m"}),(0,r.jsx)("option",{value:30,children:"30m"}),(0,r.jsx)("option",{value:60,children:"1h"})]})]}),(0,r.jsx)("div",{className:"col"})]}),"next request in ",(0,r.jsxs)("b",{children:["(",p,"s)"]}),":",(0,r.jsx)("div",{className:"progress mb-5",children:(0,r.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":75,"aria-valuemin":0,"aria-valuemax":100,style:{width:"".concat(Math.floor(p/(60*x)*100),"%")}})}),(0,r.jsx)("div",{className:"d-flex flex-row-reverse",children:(0,r.jsxs)("div",{className:"form-check pt-5",children:[(0,r.jsx)("input",{checked:N,onChange:_,type:"checkbox",className:c().checkbox+" form-check-input",id:"filtered"}),(0,r.jsx)("label",{className:c().biglabel+" form-check-label",htmlFor:"filtered",children:"Filtered"})]})})]})})]})}),(0,r.jsxs)("div",{className:c().relative+" container",children:[e&&(0,r.jsx)("div",{className:c().loader,children:(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("div",{className:"spinner-border",role:"status",children:(0,r.jsx)("span",{className:"sr-only"})})})}),!!w.length&&(0,r.jsx)(n,{data:w,threshold:m,filtered:N})]})]})}},469:function(e){e.exports={relative:"Theme_relative__padMm",loader:"Theme_loader__iUKJC",checkbox:"Theme_checkbox__Dx9mp",biglabel:"Theme_biglabel__MuilI"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);