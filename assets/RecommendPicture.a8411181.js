import{_ as a,d as e,r as l,B as t,b as s,k as i,f as r,g as u,w as n,F as v,o as c,K as o,R as p,W as d,l as m,x as b,v as g,V as h}from"./index.f259aa9c.js";const k={key:0,class:"wrapper"},y={class:"tab-title-wrapper"},w={class:"tab-container"},f={key:0,class:"text"},C={key:1,class:"text"},x={key:2,class:"item-wrapper"},$=["onClick"],_={class:"img-wrapper"},j=["src"],z={class:"tab-container"},A={key:0,class:"text"},E={key:1,class:"text"},L={key:2,class:"item-wrapper"},S=["onClick"],O={class:"img-wrapper"},I=["src"],B={class:"sub-tab-container"},D=["onClick"],H={class:"tab-container"},N={class:"item-wrapper"},R=["onClick"],W={class:"img-wrapper"},q=["src"],K={class:"load-more"},M=["loading"];var P=a(e({emits:["submit"],setup(a,{emit:e}){const P=l(!1),U=l(),F=l(1),G=l(!1),T=l(!1),V=l([]),J=l([]),Q=l([]),X=l(1),Y=[{label:"风景",value:9},{label:"4K",value:36},{label:"清新",value:15},{label:"萌宠",value:14},{label:"游戏",value:5},{label:"汽车",value:12},{label:"时尚",value:10},{label:"体育",value:16}],Z=l(9),aa=async(a=!1)=>{a&&(Q.value=[],X.value=1);try{G.value=!0,T.value=!1;const a=await fetch(`${h}/api/360img?cid=${Z.value}&page=${X.value}&pageSize=18`),{errno:e,data:l}=await a.json();if(0!==e)throw new Error("Api server error");Q.value=[...Q.value,...l.list.map((a=>({url:a.url.replace("http","https"),thumb:`${a.url.replace("http","https")}?x-oss-process=image/resize,w_300/quality,q_90`})))]}catch(e){T.value=!0,console.error(e)}finally{G.value=!1}},ea=()=>{U.value.open(),P.value||(P.value=!0)};t((()=>[P.value,F.value,Z.value]),(()=>{1===F.value?V.value&&0!==V.value.length||(async()=>{try{G.value=!0,T.value=!1;const a=encodeURIComponent("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=zh-CN"),e=await fetch(`${h}/api/transfer?target=${a}&noHeaders=1`,{headers:{"content-type":"application/json; charset=utf-8"}}),{images:l}=await e.json();if(!(l&&l.length>0))throw new Error("Api server error");V.value=l.map((a=>({url:`https://cn.bing.com/${a.url}`,thumb:`https://cn.bing.com/${a.urlbase}_320x240.jpg&rf=LaDigue_1920x1080.jpg&pid=hp`})))}catch(a){T.value=!0,console.error(a)}finally{G.value=!1}})():2===F.value?J.value&&0!==J.value.length||(async()=>{try{G.value=!0,T.value=!1;const a=await fetch(`${h}/photos?pageSize=18`),{errCode:e,data:l}=await a.json();if(200!==e)throw new Error("Api server error");J.value=l.list.map((a=>({url:a.urls.raw,thumb:a.urls.thumb})))}catch(a){T.value=!0,console.error(a)}finally{G.value=!1}})():3===F.value&&aa(!0)}));const la=()=>{X.value++,aa()},ta=()=>{},sa=a=>{e("submit",a),U.value.close()};return(a,e)=>{const l=s("animation-dialog");return c(),i(v,null,[r("button",{type:"button",class:"btn btn-small btn-primary",style:{margin:"0","margin-right":"5px"},onClick:ea},"今日壁纸推荐"),u(l,{ref_key:"dialog",ref:U,animationMode:"",customWrapperClass:"backdrop-blur recommend-picture",title:"今日壁纸推荐",width:"min(760px, 94vw)",height:"min(520px, 80vh)",appendToBody:"",closeOnClickOutside:!1,listenWindowSizeChange:!0,onBeforeClose:ta},{default:n((()=>[P.value?(c(),i("div",k,[r("div",y,[r("div",{class:o(["title",1===F.value&&"active"]),onClick:e[0]||(e[0]=a=>F.value=1)},"必应壁纸",2),r("div",{class:o(["title",3===F.value&&"active"]),onClick:e[1]||(e[1]=a=>F.value=3)},"360壁纸",2),r("div",{class:o(["title",2===F.value&&"active"]),onClick:e[2]||(e[2]=a=>F.value=2)},"UNSPLAH",2)]),p(r("div",w,[G.value?(c(),i("div",f,"Loading...")):T.value?(c(),i("div",C,"Something Error...")):(c(),i("div",x,[(c(!0),i(v,null,m(V.value,(a=>(c(),i("div",{class:"item",key:a.url,onClick:e=>sa(a.url)},[r("div",_,[a.url?(c(),i("img",{key:0,src:a.thumb,loading:"lazy"},null,8,j)):b("",!0)])],8,$)))),128)),(c(),i(v,null,m(4,(a=>r("div",{class:"item-fake",key:a}))),64))]))],512),[[d,1===F.value]]),p(r("div",z,[G.value?(c(),i("div",A,"Loading...")):T.value?(c(),i("div",E,"Something Error...")):(c(),i("div",L,[(c(!0),i(v,null,m(J.value,(a=>(c(),i("div",{class:"item",key:a.url,onClick:e=>sa(a.url)},[r("div",O,[a.url?(c(),i("img",{key:0,src:a.thumb,loading:"lazy"},null,8,I)):b("",!0)])],8,S)))),128)),(c(),i(v,null,m(4,(a=>r("div",{class:"item-fake",key:a}))),64))]))],512),[[d,2===F.value]]),p(r("div",B,[(c(),i(v,null,m(Y,(a=>r("div",{class:o(["sub-tab-title",Z.value===a.value&&"active"]),key:a.value,onClick:e=>Z.value=a.value},g(a.label),11,D))),64))],512),[[d,3===F.value]]),p(r("div",H,[r("div",N,[(c(!0),i(v,null,m(Q.value,(a=>(c(),i("div",{class:"item",key:a.url,onClick:e=>sa(a.url)},[r("div",W,[a.url?(c(),i("img",{key:0,src:a.thumb,loading:"lazy"},null,8,q)):b("",!0)])],8,R)))),128)),(c(),i(v,null,m(4,(a=>r("div",{class:"item-fake",key:a}))),64))]),r("div",K,[r("button",{class:"btn btn-warning",loading:G.value,onClick:la},g(G.value?"LOADING...":"LOAD MORE"),9,M)])],512),[[d,3===F.value]])])):b("",!0)])),_:1},512)],64)}}}),[["__scopeId","data-v-7e621738"]]);export{P as default};