import{ao as x}from"./core-d086e217.js";import{Y as C,a0 as E}from"./index-391c66f0.js";const T=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),B=e=>x(e),s=new Map;let d;C&&(document.addEventListener("mousedown",e=>d=e),document.addEventListener("mouseup",e=>{for(const t of s.values())for(const{documentHandler:n}of t)n(e,d)}));function u(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:E(t.arg)&&n.push(t.arg),function(o,a){const c=t.instance.popperRef,r=o.target,i=a==null?void 0:a.target,p=!t||!t.instance,f=!r||!i,m=e.contains(r)||e.contains(i),g=e===r,h=n.length&&n.some(l=>l==null?void 0:l.contains(r))||n.length&&n.includes(i),v=c&&(c.contains(r)||c.contains(i));p||f||m||g||h||v||t.value(o,a)}}const F={beforeMount(e,t){s.has(e)||s.set(e,[]),s.get(e).push({documentHandler:u(e,t),bindingFn:t.value})},updated(e,t){s.has(e)||s.set(e,[]);const n=s.get(e),o=n.findIndex(c=>c.bindingFn===t.oldValue),a={documentHandler:u(e,t),bindingFn:t.value};o>=0?n.splice(o,1,a):n.push(a)},unmounted(e){s.delete(e)}};export{F as C,B as c,T as e};
