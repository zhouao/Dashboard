import{t,a as e,p as n,s as r,G as i,H as s,n as o,S as a}from"./index.5c97a77e.js";import"./index.8933e305.js";import"./color.556e4bcb.js";const c=t=>Object.prototype.hasOwnProperty.call(t,"origin");class l extends Array{configure(t,e){const n=this.findIndex((e=>c(e)&&e.origin===t));return n<0||this.splice(n,1,t(e)),this}replace(t,e){const n=this.findIndex((e=>c(e)&&e.origin===t));return n<0||this.splice(n,1,e),this}remove(t){const e=this.findIndex((e=>c(e)&&e.origin===t));return e<0||this.splice(e,1),this}headless(){return this.filter(c).forEach((t=>{this.configure(t.origin,{headless:!0})})),this}static create(t){return new l(...t)}}const d=t=>{if(!t)return!1;if(Array.isArray(t))return!(t.length>1)&&d(t[0]);const e=t.content;return e?d(e):"text"===t.type},p=(r=>{const i=s=>{const o=n((n=>{const i=((n,r,i)=>{try{const e=r.get(t),o={ctx:r,getClassName:(s=null==i?void 0:i.className,(t,...e)=>{var n;const r=null!==(n=null==s?void 0:s(t))&&void 0!==n?n:e;return Array.isArray(r)?r.filter((t=>t)).join(" "):r}),getStyle:t=>(null==i?void 0:i.headless)?"":t(e)};return n(i,o)}catch(o){throw e()}var s})(r,n,s);return o.id=i.id,i.plugin}));return o.origin=i,o};return i})(((t,e)=>{const{ctx:n}=e,c=n.get(r),l=n.get(i),p=n.get(s);return{id:"clipboard",plugin:new o({props:{handlePaste:(t,e)=>{var n,r;const i=null===(r=(n=t.props).editable)||void 0===r?void 0:r.call(n,t.state),{clipboardData:s}=e;if(!i||!s)return!1;const o=s.getData("text/plain");if(s.getData("text/html").length>0)return!1;const c=l(o);if(!c||"string"==typeof c)return!1;const d=t.state.selection.content();return t.dispatch(t.state.tr.replaceSelection(new a(c.content,d.openStart,d.openEnd))),!0},clipboardTextSerializer:t=>{if(d(t.content.toJSON()))return t.content.textBetween(0,t.content.size,"\n\n");const e=c.topNodeType.createAndFill(void 0,t.content);if(!e)return"";return p(e)}}})}})),u=l.create([p()]);export{u as clipboard,p as clipboardPlugin};