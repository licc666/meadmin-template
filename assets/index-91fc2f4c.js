import"./mock-d5a52175.js";import{S as X,r as V,v as D,s as L,o as S,_ as T,av as Y,aw as B,w as k,ac as R,W as q}from"./core-d086e217.js";import{_ as N}from"./index-391c66f0.js";import{E as O}from"./index-96f15593.js";const I=e=>{if(e.fullscreen!==void 0)return;const v=new CustomEvent("drag-resize",{detail:"尺寸变化",bubbles:!1});e.fullscreen=!1;let u=e.offsetWidth,n=e.offsetHeight;const r=Math.min(u,300),g=Math.min(n,300);let i="0";const t=e.querySelector(".el-dialog__header"),o=e;let w="",H="";const h=(a,c)=>{o.style.maxHeight="unset",a&&(w=a,o.style.width=a),c&&(H=c,o.style.height=c)};h(u+"px",n+"px"),t.onselectstart=()=>!1,t.style.cursor="move";const y=window.getComputedStyle(o,null),M='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path></svg>',C='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"></path><path fill="currentColor" d="M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"></path></svg>',l=document.createElement("button");l.className="el-dialog__headerbtn",l.style.color="var(--el-color-info)",l.onmouseover=function(){l.style.color="var(--el-color-primary)"},l.onmouseout=function(){l.style.color="var(--el-color-info)"},t.querySelector(".el-dialog__close")&&(l.style.right=t.querySelector(".el-dialog__close").parentElement.clientWidth+"px");const p=document.createElement("i");l.appendChild(p),p.style.fontSize="inherit",p.className="el-icon",p.innerHTML=e.fullscreen?C:M,t.appendChild(l);const z=a=>{var c,x;const _=(c=a.clientX)!==null&&c!==void 0?c:0-t.offsetLeft,d=(x=a.clientY)!==null&&x!==void 0?x:0-t.offsetTop;let m,f;y.left.includes("%")?(m=+document.body.clientWidth*(+y.left.replace(/%/g,"")/100),f=+document.body.clientHeight*(+y.top.replace(/%/g,"")/100)):(m=+y.left.replace(/\px/g,""),f=+y.top.replace(/\px/g,"")),document.onmousemove=function($){const b=$.clientX-_,W=$.clientY-d;o.style.left=`${b+m}px`,o.style.top=`${W+f}px`},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}};t.onmousedown=z;const E=()=>{e.fullscreen?(p.innerHTML=M,h(u+"px",n+"px"),o.style.marginTop=i,o.style.position="relative",e.fullscreen=!1,t.style.cursor="move",t.onmousedown=z):(p.innerHTML=C,n=o.clientHeight,u=o.clientWidth,i=o.style.marginTop,o.style.left="0",o.style.top="0",h("100vw","100vh"),o.style.marginTop="0",o.style.position="fixed",e.fullscreen=!0,t.style.cursor="initial",t.onmousedown=null),l.style.color="var(--el-color-info)",e.dispatchEvent(v)};l.onclick=E,t.ondblclick=E;const s=document.createElement("div");return o.appendChild(s),s.style.cursor="se-resize",s.style.position="absolute",s.style.height="10px",s.style.width="10px",s.style.right="0px",s.style.bottom="0px",s.style.zIndex="1999",s.onmousedown=a=>{const c=a.clientX,x=a.clientX-s.offsetLeft,_=a.clientY-s.offsetTop;document.onmousemove=function(d){d.preventDefault();const m=d.clientX-x+(d.clientX-c),f=d.clientY-_;h(m>r?`${m}px`:r+"px",f>g?`${f}px`:g+"px")},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null,e.dispatchEvent(v)}},{resetWH:()=>h(w,H)}},j={full:{type:Boolean,default:!0},maxHeight:{type:String,default:"60vh"}},A=["open"],F=X({name:"MeDialog",props:j,emits:A,setup(e,{expose:v,emit:u}){const n=V();let r;D([()=>{var i;return(i=n.value)==null?void 0:i.dialogContentRef},()=>e.full],async()=>{var i,t;(i=n.value)!=null&&i.dialogContentRef&&e.full&&(await L(),r=(t=I(n.value.dialogContentRef.$el))==null?void 0:t.resetWH)},{immediate:!0});const g=()=>{r==null||r(),u("open")};return v({elDialogRef:n}),{elDialogRef:n,openHandle:g}}});function G(e,v,u,n,r,g){const i=O;return S(),T(i,{ref:"elDialogRef",class:"me-dialog",style:q({maxHeight:e.maxHeight}),onOpen:e.openHandle},Y({_:2},[B(e.$slots,(t,o)=>({name:o,fn:k(()=>[(S(),T(R(t)))])}))]),1032,["style","onOpen"])}const U=N(F,[["render",G]]);export{U as _};
