var t=Object.defineProperty,n=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(n,e,o)=>e in n?t(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,a=(t,a)=>{for(var s in a||(a={}))e.call(a,s)&&i(t,s,a[s]);if(n)for(var s of n(a))o.call(a,s)&&i(t,s,a[s]);return t};import{U as s}from"./Unset.110d4e1a.js";import{_ as c,d as r,r as p,c as m,f as l,e as u,w as d,A as S,a as g,t as v,b as f,g as y,E as w,n as b,m as j,o as x}from"./index.f26a186a.js";import{d as O}from"./dayjs.min.9d3883da.js";const h=r({name:"CountDown",components:{Unset:s},props:{componentSetting:{type:Object,required:!0}},setup(t){const n=p(0),e={"天":"day","小时":"hour","分钟":"minute"};function o(){const n=O(new Date),o=O(t.componentSetting.eventTime);console.log(e[t.componentSetting.unit]);return o.diff(n,e[t.componentSetting.unit])}const i=m((()=>"hour"===t.componentSetting.unit?12e5:"minute"===t.componentSetting.unit?3e4:432e5));let a;function s(){n.value=o(),"天"!==t.componentSetting.unit&&(a&&clearInterval(a),a=window.setInterval((()=>{n.value=o()}),i.value))}l((()=>s())),u((()=>window.clearInterval(a))),d((()=>[t.componentSetting,t.componentSetting.eventName,t.componentSetting.unit]),(()=>{s()}));const c=m((()=>j(t.componentSetting.position)));return{num:n,positionCSS:c}}}),I={key:0,class:"box"},C={key:0,class:"event-name"},U={class:"event-content"},k={class:"num"},F={class:"unit"};var N=c(h,[["render",function(t,n,e,o,i,s){const c=S("Unset");return x(),g("div",{class:"wrapper",style:b(a({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},t.positionCSS))},[t.componentSetting.eventTime?(x(),g("div",I,[t.componentSetting.eventName?(x(),g("div",C,v(t.componentSetting.eventName),1)):f("",!0),y("div",U,[y("div",k,v(t.num),1),y("div",F,v(t.componentSetting.unit),1)])])):(x(),w(c,{key:1,tips:"💫未配置目标时间，请进行配置"}))],4)}],["__scopeId","data-v-e18fc9f0"]]);export{N as default};
