(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},4186:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var l=t(5893),n=t(7294);function r(e){let{data:s}=e;return(0,l.jsxs)("table",{className:"table table-hover",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",children:"##"}),(0,l.jsx)("th",{scope:"col",children:"buySellRatio"}),(0,l.jsx)("th",{scope:"col",children:"buyVol"}),(0,l.jsx)("th",{scope:"col",children:"sellVol"}),(0,l.jsx)("th",{scope:"col",children:"timestamp"})]})}),(0,l.jsx)("tbody",{children:s.map((e,s)=>{let{buySellRatio:t,buyVol:n,sellVol:r,timestamp:c}=e;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"row",children:s+1}),(0,l.jsx)("td",{className:t<=.8?"text-danger":"",children:t}),(0,l.jsx)("td",{children:n}),(0,l.jsx)("td",{children:r}),(0,l.jsx)("td",{children:"".concat(new Date(c).toLocaleTimeString(),", ").concat(new Date(c).toLocaleDateString())})]},s)})})]})}function c(){let[e,s]=(0,n.useState)(!1),[t,c]=(0,n.useState)("BTCUSDT"),[o,a]=(0,n.useState)("15m"),[i,d]=(0,n.useState)([]),h=e=>{c(e.currentTarget.value)},m=e=>{a(e.currentTarget.value)},x=async()=>{try{s(!0);let e=await fetch("https://fapi.binance.com/futures/data/takerlongshortRatio?symbol=".concat(t,"&period=").concat(o,"&limit=500"),{headers:{"X-MBX-APIKEY":"1sqj86AlSZsVw19qzAcda7iJ3qbBDX8sZsgob8SEWFBVhFxwK5NcLPDXeZwXryEp"}}),l=await e.json();console.log(l),d(l)}catch(e){console.log(e)}finally{s(!1)}},u=e=>{e.preventDefault(),x()};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow",children:(0,l.jsx)("h5",{className:"my-0 mr-md-auto font-weight-normal",children:(0,l.jsx)("strong",{children:"statsb"})})}),(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"card mb-5",style:{maxWidth:"25rem"},children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h5",{className:"card-title",children:"Taker Buy/Sell Volume"}),(0,l.jsx)("h6",{className:"card-subtitle mb-4 text-muted",children:(0,l.jsx)("code",{children:"GET /futures/data/takerlongshortRatio"})}),(0,l.jsxs)("form",{onSubmit:u,children:[(0,l.jsxs)("div",{className:"form-group mb-3",children:[(0,l.jsx)("label",{htmlFor:"symbol",children:"Symbol"}),(0,l.jsx)("input",{value:t,onChange:h,type:"text",className:"form-control",id:"symbol","aria-describedby":"symbolHelp",placeholder:"symbol e.g. BTCUSDT"})]}),(0,l.jsxs)("div",{className:"form-group mb-3",children:[(0,l.jsx)("label",{htmlFor:"period",children:"Period"}),(0,l.jsxs)("select",{value:o,onChange:m,className:"form-control",id:"period",children:[(0,l.jsx)("option",{children:"5m"}),(0,l.jsx)("option",{children:"15m"}),(0,l.jsx)("option",{children:"30m"}),(0,l.jsx)("option",{children:"1h"}),(0,l.jsx)("option",{children:"2h"}),(0,l.jsx)("option",{children:"4h"}),(0,l.jsx)("option",{children:"6h"}),(0,l.jsx)("option",{children:"12h"}),(0,l.jsx)("option",{children:"1d"})]})]}),(0,l.jsx)("button",{disabled:e,type:"submit",className:"btn btn-warning mb-2",children:"Submit"})]})]})}),e&&(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)("div",{className:"spinner-border",role:"status",children:(0,l.jsx)("span",{className:"sr-only"})})}),!!i.length&&(0,l.jsx)(r,{data:i})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);