import{S as ue,B as h,o as S,c as D,a as P,T as te,V as T,A as O,_ as B,w as I,k as ee,ad as U,$ as R,W as X,a2 as gl,L as ze,aA as qe,v as H,n as bl,a6 as ke,a9 as yl,P as sn,s as V,X as Se,a1 as Ol,t as le,r as z,q as Cl,x as Ll,O as se,aT as Ce,aU as cl,E as Il,C as Ql,R as jl,i as x,aE as rn,J as Re,aw as pl,az as k,aL as un,av as dn,ac as Al}from"./core-d086e217.js";import{b2 as cn,b0 as Pl,x as pn,b3 as Ml,b4 as $l,D as Dl,b5 as Bl,I as Kl,S as fl,J as fn,ap as Rl,b6 as vn,e as mn,aU as gn,h as re,E as hl,k as Te,w as Jl,B as F,a3 as Xl,g as Sl,b7 as hn,ak as bn,Y as yn,i as On,X as Vl,l as zl,Z as Cn,ac as Sn,av as ql,aj as Tn,b8 as wn,a7 as Yl}from"./index-391c66f0.js";import{i as En,E as Ln}from"./index-61c50de1.js";import{E as In}from"./index-8a321c97.js";import{d as Wl,a as An,e as Pn}from"./elIcon-e456a308.js";import{u as Zl,c as Mn}from"./index-bb6527ef.js";import{e as $n,C as Dn}from"./index-8842122b.js";import{U as ne,C as _l}from"./event-9519ab40.js";import{s as Bn}from"./scroll-62c8a58b.js";import{i as Kn}from"./validator-7045813a.js";var Rn="__lodash_hash_undefined__";function Vn(e){return this.__data__.set(e,Rn),this}function zn(e){return this.__data__.has(e)}function We(e){var l=-1,i=e==null?0:e.length;for(this.__data__=new cn;++l<i;)this.add(e[l])}We.prototype.add=We.prototype.push=Vn;We.prototype.has=zn;function qn(e,l){for(var i=-1,d=e==null?0:e.length;++i<d;)if(l(e[i],i,e))return!0;return!1}function Wn(e,l){return e.has(l)}var kn=1,Fn=2;function xl(e,l,i,d,p,a){var r=i&kn,c=e.length,s=l.length;if(c!=s&&!(r&&s>c))return!1;var b=a.get(e),m=a.get(l);if(b&&m)return b==l&&m==e;var f=-1,y=!0,E=i&Fn?new We:void 0;for(a.set(e,l),a.set(l,e);++f<c;){var C=e[f],o=l[f];if(d)var g=r?d(o,C,f,l,e,a):d(C,o,f,e,l,a);if(g!==void 0){if(g)continue;y=!1;break}if(E){if(!qn(l,function(w,L){if(!Wn(E,L)&&(C===w||p(C,w,i,d,a)))return E.push(L)})){y=!1;break}}else if(!(C===o||p(C,o,i,d,a))){y=!1;break}}return a.delete(e),a.delete(l),y}function Hn(e){var l=-1,i=Array(e.size);return e.forEach(function(d,p){i[++l]=[p,d]}),i}function Nn(e){var l=-1,i=Array(e.size);return e.forEach(function(d){i[++l]=d}),i}var Gn=1,Un=2,Qn="[object Boolean]",jn="[object Date]",Jn="[object Error]",Xn="[object Map]",Yn="[object Number]",Zn="[object RegExp]",_n="[object Set]",xn="[object String]",et="[object Symbol]",lt="[object ArrayBuffer]",nt="[object DataView]",kl=Pl?Pl.prototype:void 0,vl=kl?kl.valueOf:void 0;function tt(e,l,i,d,p,a,r){switch(i){case nt:if(e.byteLength!=l.byteLength||e.byteOffset!=l.byteOffset)return!1;e=e.buffer,l=l.buffer;case lt:return!(e.byteLength!=l.byteLength||!a(new Ml(e),new Ml(l)));case Qn:case jn:case Yn:return pn(+e,+l);case Jn:return e.name==l.name&&e.message==l.message;case Zn:case xn:return e==l+"";case Xn:var c=Hn;case _n:var s=d&Gn;if(c||(c=Nn),e.size!=l.size&&!s)return!1;var b=r.get(e);if(b)return b==l;d|=Un,r.set(e,l);var m=xl(c(e),c(l),d,p,a,r);return r.delete(e),m;case et:if(vl)return vl.call(e)==vl.call(l)}return!1}var ot=1,it=Object.prototype,at=it.hasOwnProperty;function st(e,l,i,d,p,a){var r=i&ot,c=$l(e),s=c.length,b=$l(l),m=b.length;if(s!=m&&!r)return!1;for(var f=s;f--;){var y=c[f];if(!(r?y in l:at.call(l,y)))return!1}var E=a.get(e),C=a.get(l);if(E&&C)return E==l&&C==e;var o=!0;a.set(e,l),a.set(l,e);for(var g=r;++f<s;){y=c[f];var w=e[y],L=l[y];if(d)var Y=r?d(L,w,y,l,e,a):d(w,L,y,e,l,a);if(!(Y===void 0?w===L||p(w,L,i,d,a):Y)){o=!1;break}g||(g=y=="constructor")}if(o&&!g){var Q=e.constructor,q=l.constructor;Q!=q&&"constructor"in e&&"constructor"in l&&!(typeof Q=="function"&&Q instanceof Q&&typeof q=="function"&&q instanceof q)&&(o=!1)}return a.delete(e),a.delete(l),o}var rt=1,Fl="[object Arguments]",Hl="[object Array]",Ve="[object Object]",ut=Object.prototype,Nl=ut.hasOwnProperty;function dt(e,l,i,d,p,a){var r=Dl(e),c=Dl(l),s=r?Hl:Bl(e),b=c?Hl:Bl(l);s=s==Fl?Ve:s,b=b==Fl?Ve:b;var m=s==Ve,f=b==Ve,y=s==b;if(y&&Kl(e)){if(!Kl(l))return!1;r=!0,m=!1}if(y&&!m)return a||(a=new fl),r||fn(e)?xl(e,l,i,d,p,a):tt(e,l,s,i,d,p,a);if(!(i&rt)){var E=m&&Nl.call(e,"__wrapped__"),C=f&&Nl.call(l,"__wrapped__");if(E||C){var o=E?e.value():e,g=C?l.value():l;return a||(a=new fl),p(o,g,i,d,a)}}return y?(a||(a=new fl),st(e,l,i,d,p,a)):!1}function en(e,l,i,d,p){return e===l?!0:e==null||l==null||!Rl(e)&&!Rl(l)?e!==e&&l!==l:dt(e,l,i,d,en,p)}function Gl(e,l){return en(e,l)}const ct=e=>vn[e||"default"],pt=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),ln=mn({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:gn,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),ft={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},vt=ue({name:"ElTag"}),mt=ue({...vt,props:ln,emits:ft,setup(e,{emit:l}){const i=e,d=Zl(),p=re("tag"),a=h(()=>{const{type:s,hit:b,effect:m,closable:f,round:y}=i;return[p.b(),p.is("closable",f),p.m(s),p.m(d.value),p.m(m),p.is("hit",b),p.is("round",y)]}),r=s=>{l("close",s)},c=s=>{l("click",s)};return(s,b)=>s.disableTransitions?(S(),D("span",{key:0,class:T(O(a)),style:X({backgroundColor:s.color}),onClick:c},[P("span",{class:T(O(p).e("content"))},[te(s.$slots,"default")],2),s.closable?(S(),B(O(hl),{key:0,class:T(O(p).e("close")),onClick:U(r,["stop"])},{default:I(()=>[ee(O(Wl))]),_:1},8,["class","onClick"])):R("v-if",!0)],6)):(S(),B(gl,{key:1,name:`${O(p).namespace.value}-zoom-in-center`,appear:""},{default:I(()=>[P("span",{class:T(O(a)),style:X({backgroundColor:s.color}),onClick:c},[P("span",{class:T(O(p).e("content"))},[te(s.$slots,"default")],2),s.closable?(S(),B(O(hl),{key:0,class:T(O(p).e("close")),onClick:U(r,["stop"])},{default:I(()=>[ee(O(Wl))]),_:1},8,["class","onClick"])):R("v-if",!0)],6)]),_:3},8,["name"]))}});var gt=Te(mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const ht=Jl(gt),nn=Symbol("ElSelectGroup"),Fe=Symbol("ElSelect");function bt(e,l){const i=ze(Fe),d=ze(nn,{disabled:!1}),p=h(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),a=h(()=>i.props.multiple?f(i.props.modelValue,e.value):y(e.value,i.props.modelValue)),r=h(()=>{if(i.props.multiple){const o=i.props.modelValue||[];return!a.value&&o.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),c=h(()=>e.label||(p.value?"":e.value)),s=h(()=>e.value||e.label||""),b=h(()=>e.disabled||l.groupDisabled||r.value),m=bl(),f=(o=[],g)=>{if(p.value){const w=i.props.valueKey;return o&&o.some(L=>qe(F(L,w))===F(g,w))}else return o&&o.includes(g)},y=(o,g)=>{if(p.value){const{valueKey:w}=i.props;return F(o,w)===F(g,w)}else return o===g},E=()=>{!e.disabled&&!d.disabled&&(i.hoverIndex=i.optionsArray.indexOf(m.proxy))};H(()=>c.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),H(()=>e.value,(o,g)=>{const{remote:w,valueKey:L}=i.props;if(Object.is(o,g)||(i.onOptionDestroy(g,m.proxy),i.onOptionCreate(m.proxy)),!e.created&&!w){if(L&&typeof o=="object"&&typeof g=="object"&&o[L]===g[L])return;i.setSelected()}}),H(()=>d.disabled,()=>{l.groupDisabled=d.disabled},{immediate:!0});const{queryChange:C}=qe(i);return H(C,o=>{const{query:g}=O(o),w=new RegExp($n(g),"i");l.visible=w.test(c.value)||e.created,l.visible||i.filteredOptionsCount--},{immediate:!0}),{select:i,currentLabel:c,currentValue:s,itemSelected:a,isDisabled:b,hoverItem:E}}const yt=ue({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=re("select"),i=h(()=>[l.be("dropdown","item"),l.is("disabled",O(r)),{selected:O(a),hover:O(m)}]),d=ke({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:p,itemSelected:a,isDisabled:r,select:c,hoverItem:s}=bt(e,d),{visible:b,hover:m}=yl(d),f=bl().proxy;c.onOptionCreate(f),sn(()=>{const E=f.value,{selected:C}=c,g=(c.props.multiple?C:[C]).some(w=>w.value===f.value);V(()=>{c.cachedOptions.get(E)===f&&!g&&c.cachedOptions.delete(E)}),c.onOptionDestroy(E,f)});function y(){e.disabled!==!0&&d.groupDisabled!==!0&&c.handleOptionSelect(f)}return{ns:l,containerKls:i,currentLabel:p,itemSelected:a,isDisabled:r,select:c,hoverItem:s,visible:b,hover:m,selectOptionClick:y,states:d}}});function Ot(e,l,i,d,p,a){return Se((S(),D("li",{class:T(e.containerKls),onMouseenter:l[0]||(l[0]=(...r)=>e.hoverItem&&e.hoverItem(...r)),onClick:l[1]||(l[1]=U((...r)=>e.selectOptionClick&&e.selectOptionClick(...r),["stop"]))},[te(e.$slots,"default",{},()=>[P("span",null,le(e.currentLabel),1)])],34)),[[Ol,e.visible]])}var Tl=Te(yt,[["render",Ot],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Ct=ue({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ze(Fe),l=re("select"),i=h(()=>e.props.popperClass),d=h(()=>e.props.multiple),p=h(()=>e.props.fitInputWidth),a=z("");function r(){var c;a.value=`${(c=e.selectWrapper)==null?void 0:c.offsetWidth}px`}return Cl(()=>{r(),Xl(e.selectWrapper,r)}),{ns:l,minWidth:a,popperClass:i,isMultiple:d,isFitInputWidth:p}}});function St(e,l,i,d,p,a){return S(),D("div",{class:T([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:X({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[te(e.$slots,"default")],6)}var Tt=Te(Ct,[["render",St],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function wt(e){const{t:l}=Sl();return ke({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,mouseEnter:!1})}let ml=!1;const Et=(e,l,i)=>{const{t:d}=Sl(),p=re("select");hn({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},h(()=>e.suffixTransition===!1));const a=z(null),r=z(null),c=z(null),s=z(null),b=z(null),m=z(null),f=z(null),y=z(null),E=z(-1),C=Ll({query:""}),o=Ll(""),g=z([]);let w=0;const{form:L,formItem:Y}=Mn(),Q=h(()=>!e.filterable||e.multiple||!l.visible),q=h(()=>e.disabled||(L==null?void 0:L.disabled)),He=h(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!q.value&&l.inputHovering&&n}),de=h(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ne=h(()=>p.is("reverse",de.value&&l.visible&&e.suffixTransition)),we=h(()=>e.remote?300:0),fe=h(()=>e.loading?e.loadingText||d("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||d("el.select.noMatch"):l.options.size===0?e.noDataText||d("el.select.noData"):null),M=h(()=>{const n=Array.from(l.options.values()),t=[];return g.value.forEach(u=>{const v=n.findIndex(A=>A.currentLabel===u);v>-1&&t.push(n[v])}),t.length?t:n}),Ge=h(()=>Array.from(l.cachedOptions.values())),Ue=h(()=>{const n=M.value.filter(t=>!t.created).some(t=>t.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),oe=Zl(),Qe=h(()=>["small"].includes(oe.value)?"small":"default"),je=h({get(){return l.visible&&fe.value!==!1},set(n){l.visible=n}});H([()=>q.value,()=>oe.value,()=>L==null?void 0:L.size],()=>{V(()=>{N()})}),H(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),H(()=>e.modelValue,(n,t)=>{e.multiple&&(N(),n&&n.length>0||r.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",Z(l.query))),ve(),e.filterable&&!e.multiple&&(l.inputLength=20),!Gl(n,t)&&e.validateEvent&&(Y==null||Y.validate("change").catch(u=>bn()))},{flush:"post",deep:!0}),H(()=>l.visible,n=>{var t,u,v,A,$;n?((u=(t=s.value)==null?void 0:t.updatePopper)==null||u.call(t),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(A=(v=c.value)==null?void 0:v.focus)==null||A.call(v),e.multiple?($=r.value)==null||$.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),Z(l.query),!e.multiple&&!e.remote&&(C.value.query="",Ce(C),Ce(o)))):(e.filterable&&(se(e.filterMethod)&&e.filterMethod(""),se(e.remoteMethod)&&e.remoteMethod("")),r.value&&r.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Je(),V(()=>{r.value&&r.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),H(()=>l.options.entries(),()=>{var n,t,u;if(!yn)return;(t=(n=s.value)==null?void 0:n.updatePopper)==null||t.call(n),e.multiple&&N();const v=((u=f.value)==null?void 0:u.querySelectorAll("input"))||[];Array.from(v).includes(document.activeElement)||ve(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Le()},{flush:"post"}),H(()=>l.hoverIndex,n=>{On(n)&&n>-1?E.value=M.value[n]||{}:E.value={},M.value.forEach(t=>{t.hover=E.value===t})});const N=()=>{V(()=>{var n,t;if(!a.value)return;const u=a.value.$el.querySelector("input");w=w||(u.clientHeight>0?u.clientHeight+2:0);const v=m.value,A=ct(oe.value||(L==null?void 0:L.size)),$=oe.value||A===w||w<=0?A:w;!(u.offsetParent===null)&&(u.style.height=`${(l.selected.length===0?$:Math.max(v?v.clientHeight+(v.clientHeight>$?6:0):0,$))-2}px`),l.visible&&fe.value!==!1&&((t=(n=s.value)==null?void 0:n.updatePopper)==null||t.call(n))})},Z=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(se(e.filterMethod)||se(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,V(()=>{var t,u;l.visible&&((u=(t=s.value)==null?void 0:t.updatePopper)==null||u.call(t))}),l.hoverIndex=-1,e.multiple&&e.filterable&&V(()=>{const t=r.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,t):t,Ee(),N()}),e.remote&&se(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):se(e.filterMethod)?(e.filterMethod(n),Ce(o)):(l.filteredOptionsCount=l.optionsCount,C.value.query=n,Ce(C),Ce(o)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await V(),Le())}},Ee=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=r.value.value?"":l.cachedPlaceHolder)},Le=()=>{const n=M.value.filter(v=>v.visible&&!v.disabled&&!v.states.groupDisabled),t=n.find(v=>v.created),u=n[0];l.hoverIndex=Me(M.value,t||u)},ve=()=>{var n;if(e.multiple)l.selectedLabel="";else{const u=Ie(e.modelValue);(n=u.props)!=null&&n.created?(l.createdLabel=u.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=u.currentLabel,l.selected=u,e.filterable&&(l.query=l.selectedLabel);return}const t=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(u=>{t.push(Ie(u))}),l.selected=t,V(()=>{N()})},Ie=n=>{let t;const u=cl(n).toLowerCase()==="object",v=cl(n).toLowerCase()==="null",A=cl(n).toLowerCase()==="undefined";for(let J=l.cachedOptions.size-1;J>=0;J--){const W=Ge.value[J];if(u?F(W.value,e.valueKey)===F(n,e.valueKey):W.value===n){t={value:n,currentLabel:W.currentLabel,isDisabled:W.isDisabled};break}}if(t)return t;const $=u?n.label:!v&&!A?n:"",j={value:n,currentLabel:$};return e.multiple&&(j.hitState=!1),j},Je=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(t=>M.value.findIndex(u=>F(u,n)===F(t,n)))):l.hoverIndex=-1:l.hoverIndex=M.value.findIndex(t=>pe(t)===pe(l.selected))},300)},Xe=()=>{var n,t;Ye(),(t=(n=s.value)==null?void 0:n.updatePopper)==null||t.call(n),e.multiple&&N()},Ye=()=>{var n;l.inputWidth=(n=a.value)==null?void 0:n.$el.offsetWidth},Ze=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,Z(l.query))},_e=Vl(()=>{Ze()},we.value),xe=Vl(n=>{Z(n.target.value)},we.value),ie=n=>{Gl(e.modelValue,n)||i.emit(_l,n)},ce=n=>{if(n.code!==zl.delete){if(n.target.value.length<=0&&!ge()){const t=e.modelValue.slice();t.pop(),i.emit(ne,t),ie(t)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},Ae=(n,t)=>{const u=l.selected.indexOf(t);if(u>-1&&!q.value){const v=e.modelValue.slice();v.splice(u,1),i.emit(ne,v),ie(v),i.emit("remove-tag",t.value)}n.stopPropagation()},Pe=n=>{n.stopPropagation();const t=e.multiple?[]:"";if(!Ql(t))for(const u of l.selected)u.isDisabled&&t.push(u.value);i.emit(ne,t),ie(t),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},me=n=>{var t;if(e.multiple){const u=(e.modelValue||[]).slice(),v=Me(u,n.value);v>-1?u.splice(v,1):(e.multipleLimit<=0||u.length<e.multipleLimit)&&u.push(n.value),i.emit(ne,u),ie(u),n.created&&(l.query="",Z(""),l.inputLength=20),e.filterable&&((t=r.value)==null||t.focus())}else i.emit(ne,n.value),ie(n.value),l.visible=!1;el(),!l.visible&&V(()=>{_(n)})},Me=(n=[],t)=>{if(!Il(t))return n.indexOf(t);const u=e.valueKey;let v=-1;return n.some((A,$)=>qe(F(A,u))===F(t,u)?(v=$,!0):!1),v},el=()=>{const n=r.value||a.value;n&&(n==null||n.focus())},_=n=>{var t,u,v,A,$;const j=Array.isArray(n)?n[0]:n;let J=null;if(j!=null&&j.value){const W=M.value.filter(Ke=>Ke.value===j.value);W.length>0&&(J=W[0].$el)}if(s.value&&J){const W=(A=(v=(u=(t=s.value)==null?void 0:t.popperRef)==null?void 0:u.contentRef)==null?void 0:v.querySelector)==null?void 0:A.call(v,`.${p.be("dropdown","wrap")}`);W&&Bn(W,J)}($=y.value)==null||$.handleScroll()},ll=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},nl=(n,t)=>{l.options.get(n)===t&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},tl=n=>{n.code!==zl.backspace&&ge(!1),l.inputLength=r.value.value.length*15+20,N()},ge=n=>{if(!Array.isArray(l.selected))return;const t=l.selected[l.selected.length-1];if(t)return n===!0||n===!1?(t.hitState=n,n):(t.hitState=!t.hitState,t.hitState)},ol=n=>{const t=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,V(()=>Z(t));else{const u=t[t.length-1]||"";l.isOnComposition=!En(u)}},il=()=>{V(()=>_(l.selected))},al=n=>{ml?ml=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},sl=()=>{var n,t,u;l.visible=!1,(n=a.value)==null||n.blur(),(u=(t=c.value)==null?void 0:t.blur)==null||u.call(t)},G=n=>{setTimeout(()=>{var t;if((t=s.value)!=null&&t.isFocusInsideContent()){ml=!0;return}l.visible&&be(),i.emit("blur",n)})},he=n=>{Pe(n)},be=()=>{l.visible=!1},ye=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},$e=n=>{var t;n&&!l.mouseEnter||q.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!s.value||!s.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((t=r.value||a.value)==null||t.focus()))},rl=()=>{l.visible?M.value[l.hoverIndex]&&me(M.value[l.hoverIndex]):$e()},pe=n=>Il(n.value)?F(n.value,e.valueKey):n.value,De=h(()=>M.value.filter(n=>n.visible).every(n=>n.disabled)),ul=h(()=>l.selected.slice(0,e.maxCollapseTags)),Oe=h(()=>l.selected.slice(e.maxCollapseTags)),Be=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!De.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const t=M.value[l.hoverIndex];(t.disabled===!0||t.states.groupDisabled===!0||!t.visible)&&Be(n),V(()=>_(E.value))}};return{optionList:g,optionsArray:M,selectSize:oe,handleResize:Xe,debouncedOnInputChange:_e,debouncedQueryChange:xe,deletePrevTag:ce,deleteTag:Ae,deleteSelected:Pe,handleOptionSelect:me,scrollToOption:_,readonly:Q,resetInputHeight:N,showClose:He,iconComponent:de,iconReverse:Ne,showNewOption:Ue,collapseTagSize:Qe,setSelected:ve,managePlaceholder:Ee,selectDisabled:q,emptyText:fe,toggleLastOptionHitState:ge,resetInputState:tl,handleComposition:ol,onOptionCreate:ll,onOptionDestroy:nl,handleMenuEnter:il,handleFocus:al,blur:sl,handleBlur:G,handleClearClick:he,handleClose:be,handleKeydownEscape:ye,toggleMenu:$e,selectOption:rl,getValueKey:pe,navigateOptions:Be,handleDeleteTooltipTag:(n,t)=>{var u,v;Ae(n,t),(v=(u=b.value)==null?void 0:u.updatePopper)==null||v.call(u)},dropMenuVisible:je,queryChange:C,groupQueryChange:o,showTagList:ul,collapseTagList:Oe,reference:a,input:r,iOSInput:c,tooltipRef:s,tagTooltipRef:b,tags:m,selectWrapper:f,scrollbar:y,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}};var Lt=ue({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:i}){let d=[];function p(a,r){if(a.length!==r.length)return!1;for(const[c]of a.entries())if(a[c]!=r[c])return!1;return!0}return()=>{var a,r;const c=(a=l.default)==null?void 0:a.call(l),s=[];function b(m){Array.isArray(m)&&m.forEach(f=>{var y,E,C,o;const g=(y=(f==null?void 0:f.type)||{})==null?void 0:y.name;g==="ElOptionGroup"?b(!Ql(f.children)&&!Array.isArray(f.children)&&se((E=f.children)==null?void 0:E.default)?(C=f.children)==null?void 0:C.default():f.children):g==="ElOption"?s.push((o=f.props)==null?void 0:o.label):Array.isArray(f.children)&&b(f.children)})}return c.length&&b((r=c[0])==null?void 0:r.children),p(s,d)||(d=s,i("update-options",s)),c}}});const Ul="ElSelect",It=ue({name:Ul,componentName:Ul,components:{ElInput:Ln,ElSelectMenu:Tt,ElOption:Tl,ElOptions:Lt,ElTag:ht,ElScrollbar:In,ElTooltip:Cn,ElIcon:hl},directives:{ClickOutside:Dn},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Kn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:Sn.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:ql,default:An},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:ql,default:Pn},tagType:{...ln.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:Tn,default:"bottom-start"}},emits:[ne,_l,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=re("select"),d=re("input"),{t:p}=Sl(),a=wt(e),{optionList:r,optionsArray:c,selectSize:s,readonly:b,handleResize:m,collapseTagSize:f,debouncedOnInputChange:y,debouncedQueryChange:E,deletePrevTag:C,deleteTag:o,deleteSelected:g,handleOptionSelect:w,scrollToOption:L,setSelected:Y,resetInputHeight:Q,managePlaceholder:q,showClose:He,selectDisabled:de,iconComponent:Ne,iconReverse:we,showNewOption:fe,emptyText:M,toggleLastOptionHitState:Ge,resetInputState:Ue,handleComposition:oe,onOptionCreate:Qe,onOptionDestroy:je,handleMenuEnter:N,handleFocus:Z,blur:Ee,handleBlur:Le,handleClearClick:ve,handleClose:Ie,handleKeydownEscape:Je,toggleMenu:Xe,selectOption:Ye,getValueKey:Ze,navigateOptions:_e,handleDeleteTooltipTag:xe,dropMenuVisible:ie,reference:ce,input:Ae,iOSInput:Pe,tooltipRef:me,tagTooltipRef:Me,tags:el,selectWrapper:_,scrollbar:ll,queryChange:nl,groupQueryChange:tl,handleMouseEnter:ge,handleMouseLeave:ol,showTagList:il,collapseTagList:al}=Et(e,a,l),{focus:sl}=pt(ce),{inputWidth:G,selected:he,inputLength:be,filteredOptionsCount:ye,visible:$e,selectedLabel:rl,hoverIndex:pe,query:De,inputHovering:ul,currentPlaceholder:Oe,menuVisibleOnFocus:Be,isOnComposition:wl,options:dl,cachedOptions:El,optionsCount:n,prefixWidth:t}=yl(a),u=h(()=>{const K=[i.b()],ae=O(s);return ae&&K.push(i.m(ae)),e.disabled&&K.push(i.m("disabled")),K}),v=h(()=>[i.e("tags"),i.is("disabled",O(de))]),A=h(()=>[i.b("tags-wrapper"),{"has-prefix":O(t)&&O(he).length}]),$=h(()=>[i.e("input"),i.is(O(s)),i.is("disabled",O(de))]),j=h(()=>[i.e("input"),i.is(O(s)),i.em("input","iOS")]),J=h(()=>[i.is("empty",!e.allowCreate&&!!O(De)&&O(ye)===0)]),W=h(()=>({maxWidth:`${O(G)-32}px`,width:"100%"})),Ke=h(()=>({maxWidth:`${O(G)>123?O(G)-123:O(G)-75}px`})),on=h(()=>({marginLeft:`${O(t)}px`,flexGrow:1,width:`${O(be)/(O(G)-32)}%`,maxWidth:`${O(G)-42}px`}));jl(Fe,ke({props:e,options:dl,optionsArray:c,cachedOptions:El,optionsCount:n,filteredOptionsCount:ye,hoverIndex:pe,handleOptionSelect:w,onOptionCreate:Qe,onOptionDestroy:je,selectWrapper:_,selected:he,setSelected:Y,queryChange:nl,groupQueryChange:tl})),Cl(()=>{a.cachedPlaceHolder=Oe.value=e.placeholder||(()=>p("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Oe.value=""),Xl(_,m),e.remote&&e.multiple&&Q(),V(()=>{const K=ce.value&&ce.value.$el;if(K&&(G.value=K.getBoundingClientRect().width,l.slots.prefix)){const ae=K.querySelector(`.${d.e("prefix")}`);t.value=Math.max(ae.getBoundingClientRect().width+11,30)}}),Y()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(ne,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(ne,"");const an=h(()=>{var K,ae;return(ae=(K=me.value)==null?void 0:K.popperRef)==null?void 0:ae.contentRef});return{isIOS:wn,onOptionsRendered:K=>{r.value=K},prefixWidth:t,selectSize:s,readonly:b,handleResize:m,collapseTagSize:f,debouncedOnInputChange:y,debouncedQueryChange:E,deletePrevTag:C,deleteTag:o,handleDeleteTooltipTag:xe,deleteSelected:g,handleOptionSelect:w,scrollToOption:L,inputWidth:G,selected:he,inputLength:be,filteredOptionsCount:ye,visible:$e,selectedLabel:rl,hoverIndex:pe,query:De,inputHovering:ul,currentPlaceholder:Oe,menuVisibleOnFocus:Be,isOnComposition:wl,options:dl,resetInputHeight:Q,managePlaceholder:q,showClose:He,selectDisabled:de,iconComponent:Ne,iconReverse:we,showNewOption:fe,emptyText:M,toggleLastOptionHitState:Ge,resetInputState:Ue,handleComposition:oe,handleMenuEnter:N,handleFocus:Z,blur:Ee,handleBlur:Le,handleClearClick:ve,handleClose:Ie,handleKeydownEscape:Je,toggleMenu:Xe,selectOption:Ye,getValueKey:Ze,navigateOptions:_e,dropMenuVisible:ie,focus:sl,reference:ce,input:Ae,iOSInput:Pe,tooltipRef:me,popperPaneRef:an,tags:el,selectWrapper:_,scrollbar:ll,wrapperKls:u,tagsKls:v,tagWrapperKls:A,inputKls:$,iOSInputKls:j,scrollbarKls:J,selectTagsStyle:W,nsSelect:i,tagTextStyle:Ke,inputStyle:on,handleMouseEnter:ge,handleMouseLeave:ol,showTagList:il,collapseTagList:al,tagTooltipRef:Me}}}),At=["disabled","autocomplete"],Pt=["disabled"],Mt={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function $t(e,l,i,d,p,a){const r=x("el-tag"),c=x("el-tooltip"),s=x("el-icon"),b=x("el-input"),m=x("el-option"),f=x("el-options"),y=x("el-scrollbar"),E=x("el-select-menu"),C=rn("click-outside");return Se((S(),D("div",{ref:"selectWrapper",class:T(e.wrapperKls),onMouseenter:l[21]||(l[21]=(...o)=>e.handleMouseEnter&&e.handleMouseEnter(...o)),onMouseleave:l[22]||(l[22]=(...o)=>e.handleMouseLeave&&e.handleMouseLeave(...o)),onClick:l[23]||(l[23]=U((...o)=>e.toggleMenu&&e.toggleMenu(...o),["stop"]))},[ee(c,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:I(()=>[P("div",{class:"select-trigger",onMouseenter:l[19]||(l[19]=o=>e.inputHovering=!0),onMouseleave:l[20]||(l[20]=o=>e.inputHovering=!1)},[e.multiple?(S(),D("div",{key:0,ref:"tags",class:T(e.tagsKls),style:X(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(S(),B(gl,{key:0,onAfterLeave:e.resetInputHeight},{default:I(()=>[P("span",{class:T(e.tagWrapperKls)},[(S(!0),D(Re,null,pl(e.showTagList,o=>(S(),B(r,{key:e.getValueKey(o),closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,hit:o.hitState,type:e.tagType,"disable-transitions":"",onClose:g=>e.deleteTag(g,o)},{default:I(()=>[P("span",{class:T(e.nsSelect.e("tags-text")),style:X(e.tagTextStyle)},le(o.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(S(),B(r,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:I(()=>[e.collapseTagsTooltip?(S(),B(c,{key:0,ref:"tagTooltipRef",disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:I(()=>[P("span",{class:T(e.nsSelect.e("tags-text"))},"+ "+le(e.selected.length-e.maxCollapseTags),3)]),content:I(()=>[P("div",{class:T(e.nsSelect.e("collapse-tags"))},[(S(!0),D(Re,null,pl(e.collapseTagList,o=>(S(),D("div",{key:e.getValueKey(o),class:T(e.nsSelect.e("collapse-tag"))},[ee(r,{class:"in-tooltip",closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,hit:o.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:g=>e.handleDeleteTooltipTag(g,o)},{default:I(()=>[P("span",{class:T(e.nsSelect.e("tags-text")),style:X({maxWidth:e.inputWidth-75+"px"})},le(o.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(S(),D("span",{key:1,class:T(e.nsSelect.e("tags-text"))},"+ "+le(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):R("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):R("v-if",!0),e.collapseTags?R("v-if",!0):(S(),B(gl,{key:1,onAfterLeave:e.resetInputHeight},{default:I(()=>[P("span",{class:T(e.tagWrapperKls),style:X(e.prefixWidth&&e.selected.length?{marginLeft:`${e.prefixWidth}px`}:"")},[(S(!0),D(Re,null,pl(e.selected,o=>(S(),B(r,{key:e.getValueKey(o),closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,hit:o.hitState,type:e.tagType,"disable-transitions":"",onClose:g=>e.deleteTag(g,o)},{default:I(()=>[P("span",{class:T(e.nsSelect.e("tags-text")),style:X({maxWidth:e.inputWidth-75+"px"})},le(o.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],6)]),_:1},8,["onAfterLeave"])),e.filterable&&!e.selectDisabled?Se((S(),D("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=o=>e.query=o),type:"text",class:T(e.inputKls),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:X(e.inputStyle),onFocus:l[1]||(l[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:l[2]||(l[2]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onKeyup:l[3]||(l[3]=(...o)=>e.managePlaceholder&&e.managePlaceholder(...o)),onKeydown:[l[4]||(l[4]=(...o)=>e.resetInputState&&e.resetInputState(...o)),l[5]||(l[5]=k(U(o=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=k(U(o=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=k((...o)=>e.handleKeydownEscape&&e.handleKeydownEscape(...o),["esc"])),l[8]||(l[8]=k(U((...o)=>e.selectOption&&e.selectOption(...o),["stop","prevent"]),["enter"])),l[9]||(l[9]=k((...o)=>e.deletePrevTag&&e.deletePrevTag(...o),["delete"])),l[10]||(l[10]=k(o=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionupdate:l[12]||(l[12]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionend:l[13]||(l[13]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onInput:l[14]||(l[14]=(...o)=>e.debouncedQueryChange&&e.debouncedQueryChange(...o))},null,46,At)),[[un,e.query]]):R("v-if",!0)],6)):R("v-if",!0),R(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(S(),D("input",{key:1,ref:"iOSInput",class:T(e.iOSInputKls),disabled:e.selectDisabled,type:"text"},null,10,Pt)):R("v-if",!0),ee(b,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[15]||(l[15]=o=>e.selectedLabel=o),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:T([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[16]||(l[16]=k(U(o=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[17]||(l[17]=k(U(o=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),k(U(e.selectOption,["stop","prevent"]),["enter"]),k(e.handleKeydownEscape,["esc"]),l[18]||(l[18]=k(o=>e.visible=!1,["tab"]))]},dn({suffix:I(()=>[e.iconComponent&&!e.showClose?(S(),B(s,{key:0,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:I(()=>[(S(),B(Al(e.iconComponent)))]),_:1},8,["class"])):R("v-if",!0),e.showClose&&e.clearIcon?(S(),B(s,{key:1,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:I(()=>[(S(),B(Al(e.clearIcon)))]),_:1},8,["class","onClick"])):R("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:I(()=>[P("div",Mt,[te(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:I(()=>[ee(E,null,{default:I(()=>[Se(ee(y,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:T(e.scrollbarKls)},{default:I(()=>[e.showNewOption?(S(),B(m,{key:0,value:e.query,created:!0},null,8,["value"])):R("v-if",!0),ee(f,{onUpdateOptions:e.onOptionsRendered},{default:I(()=>[te(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["wrap-class","view-class","class"]),[[Ol,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(S(),D(Re,{key:0},[e.$slots.empty?te(e.$slots,"empty",{key:0}):(S(),D("p",{key:1,class:T(e.nsSelect.be("dropdown","empty"))},le(e.emptyText),3))],64)):R("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[C,e.handleClose,e.popperPaneRef]])}var Dt=Te(It,[["render",$t],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const Bt=ue({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=re("select"),i=z(!0),d=bl(),p=z([]);jl(nn,ke({...yl(e)}));const a=ze(Fe);Cl(()=>{p.value=r(d.subTree)});const r=s=>{const b=[];return Array.isArray(s.children)&&s.children.forEach(m=>{var f;m.type&&m.type.name==="ElOption"&&m.component&&m.component.proxy?b.push(m.component.proxy):(f=m.children)!=null&&f.length&&b.push(...r(m))}),b},{groupQueryChange:c}=qe(a);return H(c,()=>{i.value=p.value.some(s=>s.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function Kt(e,l,i,d,p,a){return Se((S(),D("ul",{class:T(e.ns.be("group","wrap"))},[P("li",{class:T(e.ns.be("group","title"))},le(e.label),3),P("li",null,[P("ul",{class:T(e.ns.b("group"))},[te(e.$slots,"default")],2)])],2)),[[Ol,e.visible]])}var tn=Te(Bt,[["render",Kt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Qt=Jl(Dt,{Option:Tl,OptionGroup:tn}),jt=Yl(Tl),Jt=Yl(tn);export{jt as E,We as S,Qt as a,en as b,Wn as c,Jt as d,ht as e,Fe as f,Gl as i,Nn as s,ln as t};
