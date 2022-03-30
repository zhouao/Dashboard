var ne=Object.defineProperty;var K=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var D=(e,n,i)=>n in e?ne(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,O=(e,n)=>{for(var i in n||(n={}))te.call(n,i)&&D(e,i,n[i]);if(K)for(var i of K(n))oe.call(n,i)&&D(e,i,n[i]);return e};import{_ as ie,d as ae,u as se,r as g,G as y,x as le,y as re,k as l,g as c,E as h,L as E,j as d,t as f,N as T,O as ue,h as S,b as I,z as B,P as ce,H as de,Q as me,f as pe,o as r,R as V,F as U,m as J,D as ge,U as he}from"./index.298e38f6.js";import{g as ve}from"./images.627ffa78.js";const L=ae({name:"Search",props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0},isAction:{type:Boolean,default:!1}},setup(e){const n=se(),i=g(0),k=g(!1),u=g(""),s=g([]),a=g(-1),o=g(!1),v=g(),b=y(()=>e.componentSetting.engineList[i.value]||e.componentSetting.engineList[0]);let w;const M=t=>{i.value=t,k.value=!1},C=()=>{e.componentSetting.rememberHistory&&X(u.value);let t=b.value.link;/\[0\]/.test(t)?t=t.replace(/\[0\]/,encodeURIComponent(u.value)):t=t+encodeURIComponent(u.value),e.componentSetting.jumpType===2?window.location.href=t:window.open(t),u.value="",s.value=[],v.value.blur()},P=t=>{[9,13,38,40].includes(t.keyCode)?(t.keyCode===9&&(t.shiftKey?(i.value=i.value<=0?e.componentSetting.engineList.length-1:--i.value,t.preventDefault()):(i.value=i.value>=e.componentSetting.engineList.length-1?0:++i.value,t.preventDefault())),t.keyCode===13&&C(),t.keyCode===38&&(a.value=a.value<=0&&s.value.length>0?s.value.length-1:a.value-1,u.value=s.value[a.value]),t.keyCode===40&&(a.value=a.value<s.value.length-1&&s.value.length>0?a.value+1:0,u.value=s.value[a.value])):(w&&window.clearTimeout(w),w=window.setTimeout(()=>{H()},400))},A=y(()=>e.componentSetting.focusBgAnimation&&n.global.background.includes("url")),z=()=>{H(),e.componentSetting.showTabTips&&(!e.componentSetting.rememberHistory||e.componentSetting.rememberHistoryList.length===0)&&(o.value=!0),A.value&&n.updateState({key:"showBackgroundEffect",value:!0})},W=()=>{setTimeout(()=>{o.value=!1},200),s.value=[],A.value&&n.updateState({key:"showBackgroundEffect",value:!1})},q=()=>{o.value=!1;const t=JSON.parse(JSON.stringify(e.element));e.isAction?(t.actionSetting.actionClickValue.componentSetting.showTabTips=!1,n.updateActionElement(t)):t.componentSetting.showTabTips=!1,n.editComponent(t)},G=()=>{u.value=""},Q=t=>{s.value=[],a.value=-1,u.value=t,setTimeout(()=>{C()},200)};async function H(){if(!u.value){e.componentSetting.rememberHistory?s.value=e.componentSetting.rememberHistoryList||[]:s.value=[],a.value=-1;return}if(!!e.componentSetting.keywordLink)try{const t=await fetch(`${ce}/getAutomatedKeywords?s=${u.value}`),{errCode:m,data:p}=await t.json();if(m===200)o.value=!1,u.value&&(s.value=p);else throw new Error("403")}catch{s.value=[],a.value=-1}}function X(t){const m=JSON.parse(JSON.stringify(e.element)),p=m.componentSetting.rememberHistoryList||[];~p.indexOf(t)||(p.unshift(t),p.length>10&&(p.length=10),e.isAction?(m.actionSetting.actionClickValue.componentSetting.rememberHistoryList=p,n.updateActionElement(m)):m.componentSetting.rememberHistoryList=p,n.editComponent(m))}function Y(){const t=JSON.parse(JSON.stringify(e.element));e.isAction?(t.actionSetting.actionClickValue.componentSetting.rememberHistoryList=[],n.updateActionElement(t)):t.componentSetting.rememberHistoryList=[],n.editComponent(t)}const F=g();function $(t){k.value&&!F.value.contains(t.target)&&(k.value=!1)}le(()=>{o.value=e.element.showTabTips,document.addEventListener("click",$)}),re(()=>{document.removeEventListener("click",$)});const Z=y(()=>de(e.componentSetting.position)),N=y(()=>n.isLock),x=t=>{N.value&&t.stopPropagation()},_=y(()=>e.componentSetting.boxBackground||"rgba(255,255,255,0.9)"),ee=y(()=>e.componentSetting.textColor||"#464650");return{activeEngine:i,showEngine:k,searchKey:u,linkSearchArr:s,linkSearchArrActive:a,showTabTips:o,activeEngineItem:b,handleChangeEngine:M,handleInputKeyDown:P,handleInputFocus:z,handleInputBlur:W,hanldeNoShowMore:q,handleClear:G,handleLinkSearchJump:Q,handleSearchBtnClick:C,searchInput:v,engineSelector:F,positionCSS:Z,getTargetIcon:ve,clearHistory:Y,contextmenu:x,isLock:N,boxBackground:_,textColor:ee}}}),R=()=>{me(e=>({"0797283a":e.boxBackground,caa97c80:e.textColor}))},j=L.setup;L.setup=j?(e,n)=>(R(),j(e,n)):R;const fe=L,ye=["src"],Se=["src"],ke={key:2,class:"no-icon"},be={class:"search-input-box-wrapper"},we=["onClick"],Ce=["src"],Ee=["src"],Te={key:2,class:"no-icon"},Ie={class:"text"},Be=["onClick"],Le={key:0,class:"clear-history"},Ae={class:"tab-tooltips"},He={class:"main"};function Fe(e,n,i,k,u,s){const a=pe("Icon");return r(),l("div",{class:"wrapper",style:h(O({padding:e.componentSetting.padding+"px"},e.positionCSS))},[c("div",{class:"search-wrapper-box",style:h({maxWidth:`${e.componentSetting.maxWidth||600}px`,pointerEvents:e.isLock?"all":"none"}),onContextmenu:n[9]||(n[9]=(...o)=>e.contextmenu&&e.contextmenu(...o))},[c("div",{class:"search-main-box",style:h({boxShadow:e.componentSetting.boxShadow,borderRadius:`${e.componentSetting.boxRadius||4}px`,padding:`0 ${(e.componentSetting.boxRadius||4)/4}px`,backdropFilter:e.componentSetting.backdropBlur?"blur(5px)":"none"})},[c("div",{class:"search-engine-box",style:h({filter:e.componentSetting.backdropBlur?"drop-shadow(1px 2px 4px #262626)":"none"}),onClick:n[0]||(n[0]=E(o=>e.showEngine=!e.showEngine,["stop"]))},[e.activeEngineItem.iconType==="local"||e.activeEngineItem.iconType==="network"?(r(),l("img",{key:0,src:e.activeEngineItem.iconPath,alt:"icon",width:"24",height:"24"},null,8,ye)):d("",!0),e.activeEngineItem.iconType==="api"?(r(),l("img",{key:1,src:e.getTargetIcon(e.activeEngineItem.link),alt:"icon",width:"24",height:"24"},null,8,Se)):d("",!0),e.activeEngineItem.iconType==="text"?(r(),l("div",ke,f(e.activeEngineItem.name.slice(0,1)),1)):d("",!0)],4),c("div",be,[T(c("input",{class:"search-input-box",style:h({color:e.componentSetting.textColor}),ref:"searchInput","onUpdate:modelValue":n[1]||(n[1]=o=>e.searchKey=o),onKeydown:n[2]||(n[2]=E((...o)=>e.handleInputKeyDown&&e.handleInputKeyDown(...o),["stop"])),onFocus:n[3]||(n[3]=(...o)=>e.handleInputFocus&&e.handleInputFocus(...o)),onBlur:n[4]||(n[4]=(...o)=>e.handleInputBlur&&e.handleInputBlur(...o)),tabindex:"1"},null,36),[[ue,e.searchKey]]),e.searchKey?(r(),l("div",{key:0,class:"clear-btn",onClick:n[5]||(n[5]=(...o)=>e.handleClear&&e.handleClear(...o))},[S(a,{name:"close"})])):d("",!0)]),c("div",{class:"search-btn",style:h({color:e.componentSetting.textColor,filter:e.componentSetting.backdropBlur?"drop-shadow(1px 2px 4px #262626)":"none"}),onClick:n[6]||(n[6]=(...o)=>e.handleSearchBtnClick&&e.handleSearchBtnClick(...o))},[S(a,{name:"search"})],4)],4),S(B,{name:"fadeInUp"},{default:I(()=>[T(c("div",{ref:"engineSelector",class:"engine-selector",style:h({backdropFilter:e.componentSetting.backdropBlur?"blur(5px)":"none",filter:e.componentSetting.backdropBlur?"drop-shadow(1px 2px 4px #262626)":"none"})},[(r(!0),l(U,null,J(e.componentSetting.engineList,(o,v)=>(r(),l("div",{key:v,class:"engine-list-item",onClick:b=>e.handleChangeEngine(v)},[o.iconType==="local"||o.iconType==="network"?(r(),l("img",{key:0,src:o.iconPath,alt:"icon",width:"24",height:"24"},null,8,Ce)):d("",!0),o.iconType==="api"?(r(),l("img",{key:1,src:e.getTargetIcon(o.link),alt:"icon",width:"24",height:"24"},null,8,Ee)):d("",!0),o.iconType==="text"?(r(),l("div",Te,f(o.name.slice(0,1)),1)):d("",!0),c("div",Ie,f(o.name),1)],8,we))),128))],4),[[V,e.showEngine]])]),_:1}),S(B,{name:"fadeInUp"},{default:I(()=>[e.linkSearchArr.length>0?(r(),l("div",{key:0,class:"link-search-wrapper",style:h({backdropFilter:e.componentSetting.backdropBlur?"blur(5px)":"none"})},[(r(!0),l(U,null,J(e.linkSearchArr,(o,v)=>(r(),l("div",{class:ge(["link-search-item",{active:e.linkSearchArrActive===v}]),key:o,onClick:b=>e.handleLinkSearchJump(o)},f(o),11,Be))),128)),!e.searchKey&&e.componentSetting.rememberHistory?(r(),l("div",Le,[c("div",{class:"clear-history-btn",onClick:n[7]||(n[7]=(...o)=>e.clearHistory&&e.clearHistory(...o))},[S(a,{name:"delete",size:"1em",style:{"margin-right":"2px"}}),he(" "+f(e.$t("\u6E05\u7A7A\u5386\u53F2\u8BB0\u5F55")),1)])])):d("",!0)],4)):d("",!0)]),_:1}),S(B,{name:"fadeInUp"},{default:I(()=>[T(c("div",Ae,[c("div",He,f(e.$t("\u6309Tab\u952E\u53EF\u5FEB\u901F\u5207\u6362\u641C\u7D22\u5F15\u64CE")),1),c("div",{class:"no-more",onClick:n[8]||(n[8]=E((...o)=>e.hanldeNoShowMore&&e.hanldeNoShowMore(...o),["stop"]))},f(e.$t("\u4E0D\u518D\u63D0\u793A")),1)],512),[[V,e.showTabTips]])]),_:1})],36)],4)}var Oe=ie(fe,[["render",Fe],["__scopeId","data-v-69a17b46"]]);export{Oe as default};
