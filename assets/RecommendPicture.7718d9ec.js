import{_ as a,d as e,r as l,A as s,a as t,g as r,i,j as n,F as o,o as c,q as u,b as v,t as p,x as d,y as m,l as h}from"./index.8933e305.js";const g=a=>(d("data-v-d1b2056a"),a=a(),m(),a),y={key:0,class:"wrapper"},k={class:"box"},b=g((()=>r("div",{class:"title-wrapper clear"},[r("span",{class:"title fl"},"必应壁纸")],-1))),f={key:0,class:"text"},w={key:1,class:"text"},x={key:2,class:"bing item-wrapper"},C=["onClick"],j={class:"img-wrapper"},_=["src"],$={class:"box"},z={class:"title-wrapper clear"},A=g((()=>r("span",{class:"title fl"},"Unsplash",-1))),E={key:0,class:"date fr"},I={key:0,class:"text"},L={key:1,class:"text"},S={key:2,class:"unsplash item-wrapper"},B=["onClick"],H={class:"img-wrapper"},O=["src"];var U=a(e({emits:["submit"],setup(a,{emit:e}){const d=l(!1),m=l(),g=l([]),U=l(!1),W=l(!1),q=l([]),D=l(""),F=l(!1),M=l(!1),N=()=>{m.value.open(),d.value||(d.value=!0),(M.value||0===q.value.length)&&(async()=>{try{F.value=!0,M.value=!1;const a=await fetch(`${h}/photos`),{errCode:e,data:l}=await a.json();if(200!==e)throw new Error("Api server error");q.value=l.list,D.value=l.date}catch(a){M.value=!0,console.error(a)}finally{F.value=!1}})(),(W.value||0===g.value.length)&&(async()=>{try{U.value=!0,W.value=!1;const a=encodeURIComponent("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=zh-CN"),e=await fetch(`${h}/api/transfer?target=${a}&noHeaders=1`,{headers:{"content-type":"application/json; charset=utf-8"}}),{images:l}=await e.json();if(!(l&&l.length>0))throw new Error("Api server error");g.value=l.map((a=>({url:`https://cn.bing.com/${a.url}`,thumb:`https://cn.bing.com/${a.urlbase}_320x240.jpg&rf=LaDigue_1920x1080.jpg&pid=hp`})))}catch(a){W.value=!0,console.error(a)}finally{U.value=!1}})()},P=()=>{},R=a=>{e("submit",a),m.value.close()};return(a,e)=>{const l=s("animation-dialog");return c(),t(o,null,[r("button",{type:"button",class:"btn btn-small btn-primary",style:{margin:"0","margin-right":"5px"},onClick:N},"今日壁纸推荐"),i(l,{ref:(a,e)=>{e.dialog=a,m.value=a},animationMode:"",customWrapperClass:"backdrop-blur",title:"今日壁纸推荐",width:"min(760px, 94vw)",height:"min(480px, 80vh)",appendToBody:"",closeOnClickOutside:!1,listenWindowSizeChange:!0,onBeforeClose:P},{default:n((()=>[d.value?(c(),t("div",y,[r("div",k,[b,U.value?(c(),t("div",f,"Loading...")):W.value?(c(),t("div",w,"Something Error...")):(c(),t("div",x,[(c(!0),t(o,null,u(g.value,(a=>(c(),t("div",{class:"item",key:a.url,onClick:e=>R(a.url)},[r("div",j,[a.url?(c(),t("img",{key:0,src:a.thumb,loading:"lazy"},null,8,_)):v("",!0)])],8,C)))),128)),(c(),t(o,null,u(4,(a=>r("div",{class:"item-fake",key:a}))),64))]))]),r("div",$,[r("div",z,[A,D.value?(c(),t("span",E,p(D.value),1)):v("",!0)]),F.value?(c(),t("div",I,"Loading...")):M.value?(c(),t("div",L,"Something Error...")):(c(),t("div",S,[(c(!0),t(o,null,u(q.value,(a=>(c(),t("div",{class:"item",key:a.id,onClick:e=>R(a.urls.raw)},[r("div",H,[a.urls.thumb?(c(),t("img",{key:0,src:a.urls.thumb,loading:"lazy"},null,8,O)):v("",!0)])],8,B)))),128)),(c(),t(o,null,u(4,(a=>r("div",{class:"item-fake",key:a}))),64))]))])])):v("",!0)])),_:1},512)],64)}}}),[["__scopeId","data-v-d1b2056a"]]);export{U as default};