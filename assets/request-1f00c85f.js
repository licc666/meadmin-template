import{ab as c}from"./index-391c66f0.js";import{E as f}from"./index-bb6527ef.js";import{S as m,o as S,c as A,j as e,k as i,w as u,A as t,a as n,t as r}from"./core-d086e217.js";import"./mock-d5a52175.js";import"./elIcon-e456a308.js";function q(a){return c(s=>({url:"list",method:"get",params:s}),a)}function x(){return c(a=>({url:"list/info"+a,method:"get"}))}const B={class:"request"},J=m({setup:!0,name:"Request",getComponents:()=>[f]}),b=m({...J,__name:"request",setup(a){const{run:s,loading:p,error:g,data:_}=q({defaultParams:[{page:1,size:10}],manual:!1}),{runAsync:y,loading:N,error:k,data:v}=x(),C=async()=>{console.log(await y(1))};return(O,o)=>{const l=f;return S(),A("div",B,[e(" 请求示例 1 "),i(l,{onClick:o[0]||(o[0]=d=>t(s)({page:2,size:2,createTime:["2023-01-07","2023-01-08"]}))},{default:u(()=>[e("请求")]),_:1}),i(l,{onClick:o[1]||(o[1]=d=>t(s)({page:0,size:10}))},{default:u(()=>[e("error请求")]),_:1}),n("div",null,[e(" loading:"),n("code",null,r(t(p)),1),e(" error:"),n("code",null,r(JSON.stringify(t(g))),1),e(" data:"),n("code",null,r(JSON.stringify(t(_))),1)]),e(" 请求示例 2 "),i(l,{onClick:o[2]||(o[2]=d=>C())},{default:u(()=>[e("异常请求")]),_:1}),n("div",null,[e(" loading:"),n("code",null,r(t(N)),1),e(" error:"),n("code",null,r(JSON.stringify(t(k))),1),e(" data:"),n("code",null,r(JSON.stringify(t(v))),1)])])}}});export{b as default};
