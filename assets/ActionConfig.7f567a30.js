var a=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,o,l)=>o in t?a(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,c=(a,t)=>{for(var o in t||(t={}))e.call(t,o)&&n(a,o,t[o]);if(l)for(var o of l(t))i.call(t,o)&&n(a,o,t[o]);return a},r=(a,l)=>t(a,o(l));import{_ as s,d as u,S as m,u as d,r as f,a as p,B as k,b as C,c as b,w as V,e as D,o as g,f as v,g as y,C as h,x as S,k as w,m as x,T as _,F as O,l as T,z as U,A as J,t as F,M as N,D as j,E as P}from"./index.1027e746.js";import{_ as z}from"./index.48e490f1.js";import{d as A}from"./direction.933aa86d.js";const E=a=>(U("data-v-7ffd9595"),a=a(),J(),a),R={key:0,class:"action-component-setting"},Z=E((()=>v("div",{class:"title"},"Toggle组件配置",-1))),B={class:"flex-center-y"},I={class:"form-row-control"},M=E((()=>v("div",{class:"label"},"Width",-1))),W={class:"content"},X=E((()=>v("span",{class:"unit"},"PX",-1))),H={class:"form-row-control"},L=E((()=>v("div",{class:"label"},"Height",-1))),Y={class:"content"},q=E((()=>v("span",{class:"unit"},"PX",-1))),G={class:"form-row-control"},K=E((()=>v("div",{class:"label"},"方向",-1))),Q={class:"content"},$={class:"form-row-control"},aa=E((()=>v("div",{class:"label"},"阴影",-1))),ta={class:"content"},oa={class:"form-row-control"},la=E((()=>v("div",{class:"label"},"圆角",-1))),ea={class:"content"},ia=E((()=>v("span",{class:"font-control"},"px",-1))),na={class:"component-detail-setting"},ca=E((()=>v("div",{class:"label"},"组件配置",-1))),ra={class:"content"};var sa=s(u({setup(a,{expose:t}){const o={actionType:0,actionClickType:1,actionClickValue:{url:"",material:"Empty",w:375,h:400,background:"rgba(255, 255, 255, 0.95)",backgroundFilter:"brightness(0.8)",direction:8,boxShadow:"0 0 4px #89909c",borderRadius:4,componentSetting:JSON.parse(JSON.stringify(m.Empty.formData))}},l=d(),e=f(),i=f(),n=p({formData:JSON.parse(JSON.stringify(o)),actionClickFormConf:{}});let s,u=!1;const U=()=>{e.value.close(),u=!1};k((()=>n.formData.actionClickValue.material),(()=>{var a,t;if(u){if((null==(t=null==(a=null==s?void 0:s.actionSetting)?void 0:a.actionClickValue)?void 0:t.material)===n.formData.actionClickValue.material)return;const o=n.formData.actionClickValue.material;n.formData.actionClickValue.componentSetting=JSON.parse(JSON.stringify(m[o].formData)),n.actionClickFormConf=D("function"==typeof m[o].formConf?m[o].formConf(n.formData.actionClickValue.componentSetting):m[o].formConf)}}));const J=()=>{if(n.formData.actionType){if(1===n.formData.actionClickType)i.value.validate((a=>{if(!a)return!1;{const a=r(c({},s),{actionSetting:F(n.formData)});l.dispatch("editComponent",a),U()}}));else if(2===n.formData.actionClickType)if(/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(n.formData.actionClickValue.url)){/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(n.formData.actionClickValue.url)||(n.formData.actionClickValue.url="https://"+n.formData.actionClickValue.url);const a=r(c({},s),{actionSetting:F(n.formData)});l.dispatch("editComponent",a),U()}else alert("跳转目标URL不合法")}else{const a=r(c({},s),{actionSetting:null});l.dispatch("editComponent",a),U()}};return t({open:a=>{s=a,a.actionSetting&&a.actionSetting.actionType?n.formData=JSON.parse(JSON.stringify(a.actionSetting)):n.formData=JSON.parse(JSON.stringify(o));const t=n.formData.actionClickValue.material;n.actionClickFormConf=D("function"==typeof m[t].formConf?m[t].formConf(n.formData.actionClickValue.componentSetting):m[t].formConf),e.value.open(),setTimeout((()=>{u=!0}))},close:U}),(a,t)=>{const o=C("el-option"),l=C("el-select"),c=C("el-form-item"),r=C("el-input"),s=C("el-form"),u=C("el-input-number"),m=C("animation-dialog");return g(),b(m,{ref_key:"dialog",ref:e,customWrapperClass:"backdrop-blur",animationMode:"",title:"组件交互配置(Beta)",width:"min(480px, 98vw)",height:"min(520px, 90vh)",closeOnClickOutside:!1,listenWindowSizeChange:!0,appendToBody:"","animation-in":"flipInY"},{footer:V((()=>[v("div",{class:"footer",style:{"text-align":"right",padding:"12px"}},[v("button",{type:"button",class:"btn",onClick:U},"取消"),v("button",{type:"button",class:"btn btn-primary",onClick:J},"确认")])])),default:V((()=>[v("div",null,[y(s,null,{default:V((()=>[y(c,{label:"交互行为"},{default:V((()=>[y(l,{modelValue:h(n).formData.actionType,"onUpdate:modelValue":t[0]||(t[0]=a=>h(n).formData.actionType=a)},{default:V((()=>[y(o,{label:"无",value:0}),y(o,{label:"鼠标点击",value:1})])),_:1},8,["modelValue"])])),_:1}),1===h(n).formData.actionType?(g(),b(c,{key:0,label:"鼠标点击"},{default:V((()=>[y(l,{modelValue:h(n).formData.actionClickType,"onUpdate:modelValue":t[1]||(t[1]=a=>h(n).formData.actionClickType=a)},{default:V((()=>[y(o,{label:"显示新组件(Toggle)",value:1}),y(o,{label:"跳转链接",value:2}),y(o,{label:"运行Javascript脚本",value:3,disabled:""})])),_:1},8,["modelValue"])])),_:1})):S("",!0),1===h(n).formData.actionType&&2===h(n).formData.actionClickType?(g(),b(c,{key:1},{default:V((()=>[y(r,{modelValue:h(n).formData.actionClickValue.url,"onUpdate:modelValue":t[2]||(t[2]=a=>h(n).formData.actionClickValue.url=a),placeholder:"请输入一个可用的跳转链接"},null,8,["modelValue"])])),_:1})):S("",!0)])),_:1}),1===h(n).formData.actionType&&1===h(n).formData.actionClickType?(g(),w("div",R,[Z,y(s,{ref:"componentSettingForm",class:"setting-form1","label-position":"top"},{default:V((()=>[y(c,{label:"物料组件"},{default:V((()=>[v("div",B,[(g(),b(x(N),{modelValue:h(n).formData.actionClickValue.material,"onUpdate:modelValue":t[3]||(t[3]=a=>h(n).formData.actionClickValue.material=a)},null,8,["modelValue"])),y(_,{content:"更换物料会重置为默认配置，请谨慎操作"})])])),_:1}),y(c,{label:"尺寸"},{default:V((()=>[v("div",I,[M,v("div",W,[y(u,{modelValue:h(n).formData.actionClickValue.w,"onUpdate:modelValue":t[4]||(t[4]=a=>h(n).formData.actionClickValue.w=a),"controls-position":"right",min:40,max:1920,style:{width:"100px"}},null,8,["modelValue"]),X])]),v("div",H,[L,v("div",Y,[y(u,{modelValue:h(n).formData.actionClickValue.h,"onUpdate:modelValue":t[5]||(t[5]=a=>h(n).formData.actionClickValue.h=a),"controls-position":"right",min:40,max:1920,style:{width:"100px"}},null,8,["modelValue"]),q])])])),_:1}),y(c,{label:"Popover配置"},{default:V((()=>[v("div",G,[K,v("div",Q,[y(l,{modelValue:h(n).formData.actionClickValue.direction,"onUpdate:modelValue":t[6]||(t[6]=a=>h(n).formData.actionClickValue.direction=a)},{default:V((()=>[(g(!0),w(O,null,T(h(A),(a=>(g(),b(o,{label:a.label,value:a.value,key:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),v("div",$,[aa,v("div",ta,[y(r,{style:{width:"100%"},modelValue:h(n).formData.actionClickValue.boxShadow,"onUpdate:modelValue":t[7]||(t[7]=a=>h(n).formData.actionClickValue.boxShadow=a),clearable:"",placeholder:"请输入box-shadow值"},null,8,["modelValue"])])]),v("div",oa,[la,v("div",ea,[y(u,{modelValue:h(n).formData.actionClickValue.borderRadius,"onUpdate:modelValue":t[8]||(t[8]=a=>h(n).formData.actionClickValue.borderRadius=a),"controls-position":"right",min:0,max:100,style:{width:"100px"}},null,8,["modelValue"]),ia])])])),_:1}),y(c,{label:"背景"},{default:V((()=>[(g(),b(x(j),{background:h(n).formData.actionClickValue.background,"onUpdate:background":t[9]||(t[9]=a=>h(n).formData.actionClickValue.background=a),w:h(n).formData.actionClickValue.w,h:h(n).formData.actionClickValue.h,positionMode:2},null,8,["background","w","h"])),h(n).formData.actionClickValue.background.includes("url")?(g(),b(x(P),{key:0,filter:h(n).formData.actionClickValue.backgroundFilter,"onUpdate:filter":t[10]||(t[10]=a=>h(n).formData.actionClickValue.backgroundFilter=a)},null,8,["filter"])):S("",!0)])),_:1})])),_:1},512),v("div",na,[ca,v("div",ra,[(g(),b(x(h(z)),{formData:h(n).formData.actionClickValue.componentSetting,formConf:h(n).actionClickFormConf,ref_key:"componentDetailForm",ref:i,"label-width":"100px"},null,8,["formData","formConf"]))])])])):S("",!0)])])),_:1},512)}}}),[["__scopeId","data-v-7ffd9595"]]);export{sa as default};
