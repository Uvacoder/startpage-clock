(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8801:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return U}});var t=n(7294),s=n(4942);function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){(0,s.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function c(e,i){switch(i.type){case"isHidingClock":return o(o({},e),{},{isHidingClock:!e.isHidingClock});case"is24Hour":return o(o({},e),{},{is24Hour:!e.is24Hour});case"isHidingSeconds":return o(o({},e),{},{isHidingSeconds:!e.isHidingSeconds});case"isUppercaseAM":return o(o({},e),{},{isUppercaseAM:!e.isUppercaseAM});case"isHidingAM":return o(o({},e),{},{isHidingAM:!e.isHidingAM});case"isBurnInReduction":return o(o({},e),{},{isBurnInReduction:!e.isBurnInReduction});case"isHidingDate":return o(o({},e),{},{isHidingDate:!e.isHidingDate});default:throw new Error("Not implemented")}}var a={isHidingClock:!1,is24Hour:!1,isHidingSeconds:!1,isUppercaseAM:!1,isHidingAM:!1,isBurnInReduction:!1,isHidingDate:!1},d=n(8017),u=n(4115),l=n(7484),F=n.n(l),f=n(5893);function h(e){var i=e.options,n=i.isHidingClock,s=i.is24Hour,r=i.isHidingSeconds,o=i.isUppercaseAM,c=i.isHidingAM,a=(i.isBurnInReduction,i.isHidingDate),l=(0,t.useState)(""),h=l[0],p=l[1],g=(0,t.useState)(""),H=g[0],C=g[1],x=function(){p(F()().format()),C(F()().format("dddd, MMMM D, YYYY"))};(0,t.useEffect)((function(){x();var e=setInterval(x,1e3);return function(){return clearInterval(e)}}),[]);var E=a||n?4:8;return(0,f.jsxs)(d.xu,{as:"section",textAlign:"center",fontFamily:"Varela Round",mb:E,children:[!n&&(0,f.jsx)(u.x,{fontSize:"12vw",children:h?function(e){var i=s?"HH":"h",n=r?"":":ss",t=s||c?"":o?" A":" a";return F()(e).format(i+":mm"+n+t)}(h):""}),!a&&(0,f.jsx)(u.x,{fontSize:n?"6vw":"3vw",children:H||""})]})}var p=n(155),g=n(577),H=n.n(g);function C(){var e=(0,t.useState)(!1),i=e[0],n=e[1];return(0,f.jsx)(p.z,{variant:"ghost",onClick:function(){H().isEnabled&&(H().toggle(),H().on("change",(function(){n(H().isFullscreen)})))},children:i?(0,f.jsx)("svg",{style:{width:"24px",height:"24px"},viewBox:"0 0 24 24",children:(0,f.jsx)("path",{fill:"currentColor",d:"M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z"})}):(0,f.jsx)("svg",{style:{width:"24px",height:"24px"},viewBox:"0 0 24 24",children:(0,f.jsx)("path",{fill:"currentColor",d:"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"})})})}var x,E=n(168),j=n(4382),b=n.n(j),v=n(1194),A=[["#1CD8D2","#93EDC7"],["#A1FFCE","#FAFFD1"],["#a3fc9c","#4ef5ff"],["#00d2ff","#3a7bd5"],["#4776E6","#8E54E9"],["#FFEDBC","#ff1c97"],["#f857a6","#ff5858"],["#FFB88C","#FFEDBC"],["#FF8008","#FFC837"],["#93F9B9","#1D976C"],["#A6FFCB","#12D8FA"],["#EA52F8","#0066FF"],["#FF6F61","#FDA198"],["#FF7A72","#FFB6B6"],["#FF8886","#FCF6CF"],["#FF886A","#FF1001"],["#FFF06F","#FFC107"],["#5B507A","#9EADC8"],["#355C7D","#C06C84"],["#ECD3A1","#FCEDD8"],["#FFC700","#FF1F01"],["#FBF33C","#04B46D"],["#A7BFE8","#6190E8"],["#BA5370","#F4E2D8"],["#904E95","#E96442"],["#FFAFBD","#FFC3A0"],["#11A49B","#90FC8E"],["#B1E0B0","#ACB4E7"],["#DA22FF","#9733EE"],["#FFA5FF","#B9E28C"],["#F09819","#EDDE5D"],["#FF512F","#F09819"],["#A18CD1","#FBC2EB"],["#FC67FA","#F4C4F3"],["#F9F4F0","#D3CCE3"],["#FF4B2B","#FF416C"],["#0083B0","#00B4DB"],["#29FFC6","#0CEBEB"],["#86FDE8","#ACB6E5"],["#00CDAC","#02AAB0"],["#FF7E5F","#FEB47B"],["#EB3349","#F45C43"],["#2BC0E4","#EAECC6"],["#1FA2FF","#00CDAC"],["#E1F5C4","#EDE574"],["#FFEEEE","#fc6767"],["#fbc7d4","#ee9ca7"],["#6fb1fc","#9796f0"],["#86A8E7","#eaafc8"],["#a8c0ff","#91EAE4"],["#FFEEEE","#DDEFBB"]],D=v.Z.canvas(x||(x=(0,E.Z)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n"])));function B(){return(0,t.useEffect)((function(){new(b())({element:"#g-canvas",direction:"diagonal",stateTransitionSpeed:2e3,states:{"default-state":{gradients:A}}})}),[]),(0,f.jsx)(D,{id:"g-canvas"})}var m=n(4096);function y(e){var i=e.title,n=e.children;return(0,f.jsxs)(m.k,{as:"header",position:"absolute",top:"0",left:"0",right:"0",align:"center",justify:"space-between",px:6,py:4,className:"animated-header",children:[(0,f.jsx)(u.x,{fontSize:"xl",fontWeight:"semibold",children:i}),(0,f.jsx)(d.xu,{children:n})]})}var M=n(3073),V=n(51),w=n(5861);function k(e){var i=e.label,n=e.value,t=e.onChange,s=e.disabled;return(0,f.jsxs)(m.k,{direction:"row",justify:"space-between",children:[(0,f.jsx)(u.x,{fontSize:"sm",fontWeight:"semibold",as:"label",htmlFor:i,children:i}),(0,f.jsx)(w.r,{isChecked:n,onChange:t,isDisabled:s,id:i})]})}function O(e){var i=e.options,n=e.dispatch;return(0,f.jsxs)(M.J2,{placement:"bottom-end",children:[(0,f.jsx)(M.xo,{children:(0,f.jsx)(p.z,{variant:"ghost",children:(0,f.jsx)("svg",{style:{width:"24px",height:"24px"},viewBox:"0 0 24 24",children:(0,f.jsx)("path",{fill:"currentColor",d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"})})})}),(0,f.jsxs)(M.yk,{children:[(0,f.jsx)(M.Yt,{pl:4,fontWeight:"semibold",children:"Options"}),(0,f.jsx)(M.us,{mt:1}),(0,f.jsxs)(M.b,{children:[(0,f.jsxs)(V.Kq,{px:1,py:1,children:[(0,f.jsx)(u.x,{fontSize:"sm",fontWeight:"semibold",color:"gray.500",children:"Time Options"}),(0,f.jsx)(k,{label:"Hide clock",value:i.isHidingClock,onChange:function(){return n({type:"isHidingClock"})}}),(0,f.jsx)(k,{label:"24-hour clock",value:i.is24Hour,onChange:function(){return n({type:"is24Hour"})},disabled:i.isHidingClock}),(0,f.jsx)(k,{label:"Hide seconds",value:i.isHidingSeconds,onChange:function(){return n({type:"isHidingSeconds"})},disabled:i.isHidingClock}),(0,f.jsx)(k,{label:"Uppercase am/pm",value:i.isUppercaseAM,onChange:function(){return n({type:"isUppercaseAM"})},disabled:i.isHidingClock||i.is24Hour||i.isHidingAM}),(0,f.jsx)(k,{label:"Hide am/pm",value:i.isHidingAM,onChange:function(){return n({type:"isHidingAM"})},disabled:i.isHidingClock||i.is24Hour})]}),(0,f.jsxs)(V.Kq,{px:1,py:1,mt:3,children:[(0,f.jsx)(u.x,{fontSize:"sm",fontWeight:"semibold",color:"gray.500",children:"Date Options"}),(0,f.jsx)(k,{label:"Hide date",value:i.isHidingDate,onChange:function(){return n({type:"isHidingDate"})}})]})]})]})]})}var S,_=n(6030),P=n(8448);function z(e){var i=(0,t.useState)(!1),n=i[0],s=i[1],r=function(){n||(0,_.Z)({targets:[".animated-header"],opacity:1,duration:500,easing:"easeOutExpo",begin:function(){s(!0)}}),clearTimeout(S),S=setTimeout((function(){(0,_.Z)({targets:[".animated-header"],opacity:0,duration:500,easing:"easeOutExpo",complete:function(){s(!1)}})}),4e3)};return(0,t.useEffect)((function(){r()}),[]),(0,f.jsx)(P.M,{as:"main",minHeight:"100vh",onMouseMove:r,onClick:r,children:e.children})}function U(){var e=(0,t.useReducer)(c,a),i=e[0],n=e[1];return(0,t.useEffect)((function(){console.log("Hey there."),console.log("https://github.com/FestiveAkp/clock")}),[]),(0,f.jsxs)(z,{children:[(0,f.jsx)(B,{}),(0,f.jsxs)(y,{title:"Gradient Clock",children:[(0,f.jsx)(C,{}),(0,f.jsx)(O,{options:i,dispatch:n})]}),(0,f.jsx)(h,{options:i})]})}},5301:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8801)}])}},function(e){e.O(0,[962,774,888,179],(function(){return i=5301,e(e.s=i);var i}));var i=e.O();_N_E=i}]);