import{U as e}from"./Unset.7ca631c7.js";import{_ as t,d as s,L as r,b as n,k as a,c as o,x as c,n as i,o as p}from"./index.5125c0c7.js";const m=s({name:"Iframe",components:{Unset:e},props:{element:{type:Object,required:!0},componentSetting:{type:Object,required:!0}},setup:e=>({url:r((()=>/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(e.componentSetting.url)?e.componentSetting.url:"http://"+e.componentSetting.url))})}),d=["src"],l={key:2,class:"editing-mask"};var u=t(m,[["render",function(e,t,s,r,m,u){const b=n("Unset");return p(),a("div",{class:"wrapper",style:i({borderRadius:e.element.borderRadius+"px"})},[e.componentSetting.url?(p(),a("iframe",{key:0,src:e.url,style:{width:"100%",height:"100%"},frameborder:"0"},null,8,d)):(p(),o(b,{key:1,tips:"💫IFrame路径丢失，请进行配置"})),e.$store.state.isLock?c("",!0):(p(),a("div",l))],4)}],["__scopeId","data-v-1bc02ec2"]]);export{u as default};
