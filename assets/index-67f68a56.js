import{g as s,h as l,N as d,al as a,o as i,c as r,y as _,ai as m,u,_ as p}from"./index-2063e8c9.js";const h=s({name:"FixedActionBar",__name:"index",setup(f){const n=l(!1);d(()=>{e(),window.addEventListener("scroll",e)}),a(()=>{window.removeEventListener("scroll",e)});function e(){const o=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,c=document.documentElement.scrollHeight||document.body.scrollHeight;n.value=Math.ceil(o+t)>=c}return(o,t)=>(i(),r("div",{class:m(["actionbar",{shadow:!u(n)}]),"data-fixed-calc-width":""},[_(o.$slots,"default",{},void 0,!0)],2))}});const v=p(h,[["__scopeId","data-v-e87338dd"]]);export{v as _};
