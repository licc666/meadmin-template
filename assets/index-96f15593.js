import{S as L,L as Y,B,o as I,c as q,a as R,T as D,V as g,A as e,t as le,k as O,w as k,_ as j,ac as se,$ as K,W as H,r as E,v as _,s as ae,q as te,n as ne,aH as re,R as ie,X as ue,U as de,av as ce,a1 as fe,a2 as me,a3 as pe}from"./core-d086e217.js";import{u as ye,a as ve,E as ge,b as be}from"./index-27e5bc6b.js";import{e as J,av as Ce,g as he,bs as ke,E as De,k as X,bx as Ee,f as Ie,U as Be,j as Ae,aY as W,by as we,bz as Fe,aD as Se,bA as Z,Y as Te,b7 as G,h as $e,aW as Pe,w as Re}from"./index-391c66f0.js";import{c as Oe}from"./refs-ae9aa695.js";import{U as Q}from"./event-9519ab40.js";const x=Symbol("dialogInjectionKey"),ee=J({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Ce},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Le={close:()=>!0},Me=["aria-label"],Ne=["id"],ze=L({name:"ElDialogContent"}),Ue=L({...ze,props:ee,emits:Le,setup(o){const u=o,{t:b}=he(),{Close:r}=Ee,{dialogRef:d,headerRef:m,bodyId:A,ns:a,style:t}=Y(x),{focusTrapRef:p}=Y(ke),c=Oe(p,d),y=B(()=>u.draggable);return ye(d,m,y),(s,i)=>(I(),q("div",{ref:e(c),class:g([e(a).b(),e(a).is("fullscreen",s.fullscreen),e(a).is("draggable",e(y)),e(a).is("align-center",s.alignCenter),{[e(a).m("center")]:s.center},s.customClass]),style:H(e(t)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:m,class:g(e(a).e("header"))},[D(s.$slots,"header",{},()=>[R("span",{role:"heading",class:g(e(a).e("title"))},le(s.title),3)]),s.showClose?(I(),q("button",{key:0,"aria-label":e(b)("el.dialog.close"),class:g(e(a).e("headerbtn")),type:"button",onClick:i[0]||(i[0]=T=>s.$emit("close"))},[O(e(De),{class:g(e(a).e("close"))},{default:k(()=>[(I(),j(se(s.closeIcon||e(r))))]),_:1},8,["class"])],10,Me)):K("v-if",!0)],2),R("div",{id:e(A),class:g(e(a).e("body"))},[D(s.$slots,"default")],10,Ne),s.$slots.footer?(I(),q("footer",{key:0,class:g(e(a).e("footer"))},[D(s.$slots,"footer")],2)):K("v-if",!0)],6))}});var Ve=X(Ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const qe=J({...ee,appendToBody:{type:Boolean,default:!1},beforeClose:{type:Ie(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),je={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Q]:o=>Be(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ke=(o,u)=>{const r=ne().emit,{nextZIndex:d}=Ae();let m="";const A=W(),a=W(),t=E(!1),p=E(!1),c=E(!1),y=E(o.zIndex||d());let s,i;const T=we("namespace",Fe),M=B(()=>{const n={},h=`--${T.value}-dialog`;return o.fullscreen||(o.top&&(n[`${h}-margin-top`]=o.top),o.width&&(n[`${h}-width`]=Se(o.width))),n}),N=B(()=>o.alignCenter?{display:"flex"}:{});function z(){r("opened")}function $(){r("closed"),r(Q,!1),o.destroyOnClose&&(c.value=!1)}function U(){r("close")}function P(){i==null||i(),s==null||s(),o.openDelay&&o.openDelay>0?{stop:s}=Z(()=>f(),o.openDelay):f()}function w(){s==null||s(),i==null||i(),o.closeDelay&&o.closeDelay>0?{stop:i}=Z(()=>S(),o.closeDelay):S()}function F(){function n(h){h||(p.value=!0,t.value=!1)}o.beforeClose?o.beforeClose(n):w()}function V(){o.closeOnClickModal&&F()}function f(){Te&&(t.value=!0)}function S(){t.value=!1}function l(){r("openAutoFocus")}function v(){r("closeAutoFocus")}function C(n){var h;((h=n.detail)==null?void 0:h.focusReason)==="pointer"&&n.preventDefault()}o.lockScroll&&ve(t);function oe(){o.closeOnPressEscape&&F()}return _(()=>o.modelValue,n=>{n?(p.value=!1,P(),c.value=!0,y.value=o.zIndex?y.value++:d(),ae(()=>{r("open"),u.value&&(u.value.scrollTop=0)})):t.value&&w()}),_(()=>o.fullscreen,n=>{u.value&&(n?(m=u.value.style.transform,u.value.style.transform=""):u.value.style.transform=m)}),te(()=>{o.modelValue&&(t.value=!0,c.value=!0,P())}),{afterEnter:z,afterLeave:$,beforeLeave:U,handleClose:F,onModalClick:V,close:w,doClose:S,onOpenAutoFocus:l,onCloseAutoFocus:v,onCloseRequested:oe,onFocusoutPrevented:C,titleId:A,bodyId:a,closed:p,style:M,overlayDialogStyle:N,rendered:c,visible:t,zIndex:y}},Ye=["aria-label","aria-labelledby","aria-describedby"],_e=L({name:"ElDialog",inheritAttrs:!1}),We=L({..._e,props:qe,emits:je,setup(o,{expose:u}){const b=o,r=re();G({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},B(()=>!!r.title)),G({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},B(()=>!!b.customClass));const d=$e("dialog"),m=E(),A=E(),a=E(),{visible:t,titleId:p,bodyId:c,style:y,overlayDialogStyle:s,rendered:i,zIndex:T,afterEnter:M,afterLeave:N,beforeLeave:z,handleClose:$,onModalClick:U,onOpenAutoFocus:P,onCloseAutoFocus:w,onCloseRequested:F,onFocusoutPrevented:V}=Ke(b,m);ie(x,{dialogRef:m,headerRef:A,bodyId:c,ns:d,rendered:i,style:y});const f=be(U),S=B(()=>b.draggable&&!b.fullscreen);return u({visible:t,dialogContentRef:a}),(l,v)=>(I(),j(pe,{to:"body",disabled:!l.appendToBody},[O(me,{name:"dialog-fade",onAfterEnter:e(M),onAfterLeave:e(N),onBeforeLeave:e(z),persisted:""},{default:k(()=>[ue(O(e(ge),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(T)},{default:k(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(p),"aria-describedby":e(c),class:g(`${e(d).namespace.value}-overlay-dialog`),style:H(e(s)),onClick:v[0]||(v[0]=(...C)=>e(f).onClick&&e(f).onClick(...C)),onMousedown:v[1]||(v[1]=(...C)=>e(f).onMousedown&&e(f).onMousedown(...C)),onMouseup:v[2]||(v[2]=(...C)=>e(f).onMouseup&&e(f).onMouseup(...C))},[O(e(Pe),{loop:"",trapped:e(t),"focus-start-el":"container",onFocusAfterTrapped:e(P),onFocusAfterReleased:e(w),onFocusoutPrevented:e(V),onReleaseRequested:e(F)},{default:k(()=>[e(i)?(I(),j(Ve,de({key:0,ref_key:"dialogContentRef",ref:a},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(S),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,onClose:e($)}),ce({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e($),titleId:e(p),titleClass:e(d).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ye)]),_:3},8,["mask","overlay-class","z-index"]),[[fe,e(t)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Ze=X(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const xe=Re(Ze);export{xe as E,je as a,qe as d,Ke as u};
