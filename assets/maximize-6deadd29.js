import{g as m,p as u,r as p,o as r,c as g,a as e,w as n,b as d,t as f,u as x,l as a,P as S,e as h,d as o}from"./index-2063e8c9.js";import{u as P}from"./useMainPage-276e4482.js";import"./useTabbar-4ad52ae9.js";const b=a("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),k=a("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),z=m({__name:"maximize",setup(C){const t=u(),s=P();function i(){s.maximize(!t.mainPageMaximizeStatus)}return(B,M)=>{const _=S,c=p("el-button"),l=h;return r(),g("div",null,[e(_,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),e(l,null,{default:n(()=>[b,k,e(c,{onClick:i},{default:n(()=>[d(f(x(t).mainPageMaximizeStatus?"退出":"开启")+"最大化 ",1)]),_:1})]),_:1})])}}});typeof o=="function"&&o(z);export{z as default};
