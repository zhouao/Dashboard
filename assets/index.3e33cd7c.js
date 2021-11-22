var e=Object.defineProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,a=(e,a)=>{for(var s in a||(a={}))i.call(a,s)&&o(e,s,a[s]);if(t)for(var s of t(a))n.call(a,s)&&o(e,s,a[s]);return e};import{_ as s,d,u as r,L as l,a as c,r as u,G as y,H as g,b as p,k,f,F as v,l as m,n as S,g as C,w as b,N as I,C as h,V as w,t as x,o as K,K as M,v as O,O as A,x as E,P as T,U as j,Q as B,z as L,A as U}from"./index.5125c0c7.js";import{g as V,a as z}from"./images.ed298ffd.js";const R={tab:{span:1},Q:{keyCode:81},W:{keyCode:87},E:{keyCode:69},R:{keyCode:82},T:{keyCode:84},Y:{keyCode:89},U:{keyCode:85},I:{keyCode:73},O:{keyCode:79},P:{keyCode:80},brackets:{span:1},caps:{span:2},A:{keyCode:65},S:{keyCode:83},D:{keyCode:68},F:{keyCode:70},G:{keyCode:71},H:{keyCode:72},J:{keyCode:74},K:{keyCode:75},L:{keyCode:76},semi:{span:2},shift:{span:3},Z:{keyCode:90},X:{keyCode:88},C:{keyCode:67},V:{keyCode:86},B:{keyCode:66},N:{keyCode:78},M:{keyCode:77}};const N=d({name:"Collection",props:{componentSetting:{type:Object,required:!0},element:{type:Object,required:!0},isAction:{type:Boolean,default:!1}},setup(e){const t=r(),i=l((()=>e.componentSetting.userSettingKeyMap||{})),n=l((()=>I(e.componentSetting.position))),o=c({editingActive:!1,editingInfo:{key:"",url:"",remark:""}}),a=u(!1),s=n=>{if(!e.componentSetting.useKeyboardEvent)return;if(!t.state.isLock)return;if(document.querySelector("input:focus")||document.querySelector("textarea:focus")||document.querySelector(".ProseMirror-focused")||document.querySelector(".action-popover"))return;const o=n.keyCode,a=Object.keys(R).find((e=>R[e].keyCode===o));a&&i.value[a]&&v(i.value[a].url)};y((()=>{document.addEventListener("keydown",s)})),g((()=>{document.removeEventListener("keydown",s)}));const d=u(),p=()=>{o.editingInfo.key="",o.editingInfo.url="",o.editingInfo.remark="",o.editingActive=!1},k=u(!1),f=i=>{const n=JSON.parse(JSON.stringify(x(e.element)));e.isAction?(n.actionSetting.actionClickValue.componentSetting.userSettingKeyMap=i,t.commit("updateActionElement",n)):n.componentSetting.userSettingKeyMap=i,t.commit("editComponent",n)},v=t=>{2===e.componentSetting.jumpType?window.location.href=t:window.open(t)};return{keyboardMap:R,userSettingKeyMap:i,handleKeyClick:(e,t)=>{t&&i.value[t]?v(i.value[t].url):(d.value.open(e.currentTarget),o.editingInfo.key=t,setTimeout((()=>{o.editingActive=!0,a.value=!0}),200))},handleDialogClose:p,showDialog:(e,t)=>{var n,s;const r=null==(s=null==(n=null==e?void 0:e.currentTarget)?void 0:n.parentNode)?void 0:s.parentNode;d.value.open(r),o.editingInfo.key=t;const{url:l,remark:c}=i.value[t];o.editingInfo.url=l,o.editingInfo.remark=c,setTimeout((()=>{o.editingActive=!0,a.value=!0}),200)},editState:o,clearEidtInfo:()=>{if(o.editingInfo.url&&o.editingInfo.remark&&confirm("确定清除该按键绑定的网页吗?")){o.editingInfo.url="",o.editingInfo.remark="";const e=h(i);delete e[o.editingInfo.key],f(e),p(),d.value.close()}},handleImgError:e=>{const t=e.currentTarget;t.style.visibility="hidden",t.nextElementSibling.style.visibility="inherit"},handleUserKeySave:async()=>{if(o.editingInfo.url&&o.editingInfo.remark)if(/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(o.editingInfo.url)){/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(o.editingInfo.url)||(o.editingInfo.url="https://"+o.editingInfo.url),k.value=!0;let[e,t]=await w(z(o.editingInfo.url));if(e){t=`${new URL(o.editingInfo.url).origin}/favicon.ico`}const n=JSON.parse(JSON.stringify(i.value));n[o.editingInfo.key]={url:o.editingInfo.url,remark:o.editingInfo.remark,icon:t},f(n),setTimeout((()=>{p(),k.value=!1,d.value.close()}),400)}else window.alert("URL地址不正确")},saveLoading:k,dialog:d,positionCSS:n,dialogFooterVisible:a,getTargetIcon:V}}}),_=e=>(L("data-v-f5adfd10"),e=e(),U(),e),q=["onClick"],P={class:"keys"},D={class:"keys-name"},F=["onClick"],J=[_((()=>f("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},[f("path",{d:"M231.08266667 509.49688889c-0.11377778 51.76888889-41.87022222 93.52533333-93.75288889 93.41155556-51.65511111-0.11377778-93.63911111-42.09777778-93.52533333-93.86666667 0-51.54133333 42.21155555-93.52533333 93.98044444-93.41155556 51.65511111 0.11377778 93.29777778 41.984 93.29777778 93.86666667z m656.49777778-93.75288889c51.76888889 0 93.86666667 41.87022222 93.86666666 93.52533333 0.11377778 51.65511111-41.87022222 93.75288889-93.63911111 93.75288889-51.88266667 0-93.75288889-41.64266667-93.75288889-93.52533333s41.64266667-93.75288889 93.52533334-93.75288889zM512.45511111 603.02222222c-51.65511111 0-93.98044445-42.43911111-93.75288889-93.75288889 0.34133333-51.76888889 42.21155555-93.52533333 93.98044445-93.52533333 51.65511111 0 93.86666667 42.21155555 93.63911111 93.75288889-0.11377778 51.65511111-42.09777778 93.52533333-93.86666667 93.52533333z"})],-1)))],Z={key:1,class:"plus-box"},H=[_((()=>f("svg",{class:"icon",viewBox:"0 0 1024 1024",width:"20",height:"20"},[f("path",{d:"M896 469.333333H554.666667V128a42.666667 42.666667 0 0 0-85.333334 0v341.333333H128a42.666667 42.666667 0 0 0 0 85.333334h341.333333v341.333333a42.666667 42.666667 0 0 0 85.333334 0V554.666667h341.333333a42.666667 42.666667 0 0 0 0-85.333334z"})],-1)))],G={key:2,class:"icon-box"},W=["src"],Q={class:"no-icon",style:{visibility:"hidden"}},$={key:3,class:"mark-text"},X={class:"keys-wrapper",style:{width:"9.08%"}},Y=[_((()=>f("div",{class:"keys"},null,-1)))],ee={class:"editing-key"},te=_((()=>f("div",{class:"label"},"URL",-1))),ie=_((()=>f("div",{class:"line"},null,-1))),ne=_((()=>f("div",{class:"label"},"Remark",-1))),oe=_((()=>f("div",{class:"line"},null,-1))),ae={key:0,class:"footer",style:{"text-align":"right",padding:"12px"}},se=["disabled"],de=["loading"];var re=s(N,[["render",function(e,t,i,n,o,s){const d=p("animation-dialog");return K(),k("div",{class:"wrapper",style:S(a({},e.positionCSS))},[f("div",{class:"keyboard-mode",style:S({maxWidth:e.componentSetting.keyboardMaxWidth+"px"})},[(K(!0),k(v,null,m(e.keyboardMap,((i,n)=>(K(),k("div",{class:M(["keys-wrapper",{hidden:i.span}]),key:n,style:S({width:(i.span?4.5*i.span:9)+"%",padding:`${e.componentSetting.keyGutter}px`})},[f("div",{class:"keys-box",onClick:t=>e.handleKeyClick(t,n),style:S({background:e.componentSetting.keyBackground,borderRadius:e.componentSetting.keyBorderRadius})},[f("div",P,[f("div",D,O(n),1),e.userSettingKeyMap[n]?(K(),k("div",{key:0,class:"edit-icon-box",onClick:A((t=>e.showDialog(t,n)),["stop"])},J,8,F)):E("",!0),e.userSettingKeyMap[n]?E("",!0):(K(),k("div",Z,H)),e.userSettingKeyMap[n]?(K(),k("div",G,[f("img",{class:"icon",src:e.userSettingKeyMap[n].icon||e.getTargetIcon(e.userSettingKeyMap[n].url),alt:"link",onError:t[0]||(t[0]=(...t)=>e.handleImgError&&e.handleImgError(...t))},null,40,W),f("div",Q,O(e.userSettingKeyMap[n].remark.slice(0,1)),1)])):E("",!0),e.userSettingKeyMap[n]&&e.userSettingKeyMap[n].remark?(K(),k("div",$,O(e.userSettingKeyMap[n].remark),1)):E("",!0)])],12,q)],6)))),128)),f("div",X,[f("div",{class:"keys-box",style:S({background:e.componentSetting.keyBackground,borderRadius:e.componentSetting.keyBorderRadius})},Y,4)])],4),C(d,{ref:"dialog",width:"300px",height:"330px",appendToBody:"",closeOnClickOutside:!1,onBeforeClose:t[6]||(t[6]=t=>e.dialogFooterVisible=!1),onClose:e.handleDialogClose},{footer:b((()=>[e.dialogFooterVisible?(K(),k("div",ae,[f("button",{type:"button",class:"btn",disabled:!e.editState.editingInfo.url&&!e.editState.editingInfo.remark,onClick:t[4]||(t[4]=(...t)=>e.clearEidtInfo&&e.clearEidtInfo(...t))},"清空",8,se),f("button",{type:"button",class:"btn btn-primary",loading:e.saveLoading,onClick:t[5]||(t[5]=(...t)=>e.handleUserKeySave&&e.handleUserKeySave(...t))},"确认",8,de)])):E("",!0)])),default:b((()=>[T(f("div",{class:"edit-content",onKeydown:t[3]||(t[3]=A((()=>{}),["stop"]))},[f("div",ee,O(e.editState.editingInfo.key),1),f("div",{class:M(["row-input",{active:e.editState.editingInfo.url.length>0}])},[T(f("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.editState.editingInfo.url=t)},null,512),[[B,e.editState.editingInfo.url]]),te,ie],2),f("div",{class:M(["row-input",{active:e.editState.editingInfo.remark.length>0}])},[T(f("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.editState.editingInfo.remark=t)},null,512),[[B,e.editState.editingInfo.remark]]),ne,oe],2)],544),[[j,e.editState.editingActive]])])),_:1},8,["onClose"])],4)}],["__scopeId","data-v-f5adfd10"]]);export{re as default};
