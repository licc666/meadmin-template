import{e as k,av as y,h,E as v,k as b,w as E}from"./index-391c66f0.js";import{S as u,B as C,o as a,c as i,_ as r,w as _,ac as w,A as l,$ as t,V as c,T as d}from"./core-d086e217.js";const B=k({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:y}}),g={click:o=>o instanceof MouseEvent},$=["href"],S=u({name:"ElLink"}),L=u({...S,props:B,emits:g,setup(o,{emit:p}){const s=o,n=h("link"),f=C(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function m(e){s.disabled||p("click",e)}return(e,I)=>(a(),i("a",{class:c(l(f)),href:e.disabled||!e.href?void 0:e.href,onClick:m},[e.icon?(a(),r(l(v),{key:0},{default:_(()=>[(a(),r(w(e.icon)))]),_:1})):t("v-if",!0),e.$slots.default?(a(),i("span",{key:1,class:c(l(n).e("inner"))},[d(e.$slots,"default")],2)):t("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):t("v-if",!0)],10,$))}});var P=b(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const V=E(P);export{V as E};
