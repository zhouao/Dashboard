import{R as t}from"./index.021006ce.js";function e(t){return new Promise(((e,n)=>{(function(t,e="image/png",a,n){return new Promise(((o,r)=>{const s=new XMLHttpRequest;s.open("GET",t,!0),s.responseType="arraybuffer",n&&(s.timeout=n),s.onload=()=>{if(200===s.status){const t=new Uint8Array(s.response);let a=t.length;const n=new Array(a);for(;a--;)n[a]=String.fromCharCode(t[a]);const r=n.join(""),i=window.btoa(r);o("data:"+(e||"image/png")+";base64,"+i)}},s.onerror=t=>{r(t)},s.onprogress=t=>{a&&a(t)},n&&(s.ontimeout=t=>{s.abort(),r(t)}),s.send()}))})(a(t,"source"),"image/x-icon",null,5e3).then((t=>{const a=new Image;a.src=t,a.onload=()=>{const t=document.createElement("canvas"),n=t.getContext("2d"),o=a.width>32?32:a.width,r=a.height>32?32:a.height;t.width=o,t.height=r,n.drawImage(a,0,0,o,r);const s=n.getImageData(0,0,o,r),[i,c,d,g]=[255,255,255,255];for(let e=0;e<s.data.length;e+=4){const t=s.data[e],a=s.data[e+1],n=s.data[e+2],o=s.data[e+3];Math.sqrt((t-i)**2+(a-c)**2+(n-d)**2+(o-g)**2)<=0&&(s.data[e]=0,s.data[e+1]=0,s.data[e+2]=0,s.data[e+3]=0)}n.putImageData(s,0,0);const m=t.toDataURL("image/png");e(m)},a.onerror=t=>{n(t)}}),(t=>{n(t)}))}))}function a(e,a="redirect",n=!1){let o=`${t}/api/icon?url=${encodeURIComponent(e.replace(/http(s)?:\/\//,""))}`;return"source"===a?o+="&type=source":"link"===a&&(o+="&type=link"),n&&(o+="&disabledCache=1"),o}export{e as a,a as g};
