import{D as k}from"./index-6121b3d8.js";import{g as B,h as R,q as y,r as m,o as c,c as N,f as g,w as o,a as t,b as n,R as C,u as r,i as b,l as h,x as D}from"./index-2063e8c9.js";const U={class:"buttons"},F=B({__name:"index",props:{modelValue:{type:Boolean,default:!1},mode:{},id:{}},emits:["update:modelValue","success"],setup(x,{emit:v}){const l=x,f=v,d=R(),e=y({get(){return l.modelValue},set(V){f("update:modelValue",V)}}),p=y(()=>l.id===""?"新增运费模板":"编辑运费模板");function _(){d.value.submit().then(()=>{f("success"),i()})}function i(){e.value=!1}return(V,a)=>{const s=m("el-button"),w=m("el-dialog"),z=m("el-drawer");return c(),N("div",null,[l.mode==="dialog"?(c(),g(w,{key:0,modelValue:r(e),"onUpdate:modelValue":a[0]||(a[0]=u=>b(e)?e.value=u:null),title:r(p),width:"800px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:o(()=>[t(s,{size:"large",onClick:i},{default:o(()=>[n(" 取消 ")]),_:1}),t(s,{type:"primary",size:"large",onClick:_},{default:o(()=>[n(" 确定 ")]),_:1})]),default:o(()=>[t(k,C({ref_key:"formRef",ref:d},l),null,16)]),_:1},8,["modelValue","title"])):l.mode==="drawer"?(c(),g(z,{key:1,modelValue:r(e),"onUpdate:modelValue":a[1]||(a[1]=u=>b(e)?e.value=u:null),title:r(p),size:"800px","close-on-click-modal":!1,"destroy-on-close":""},{default:o(()=>[t(k,C({ref_key:"formRef",ref:d},l),null,16),h("div",U,[t(s,{size:"large",onClick:i},{default:o(()=>[n(" 取消 ")]),_:1}),t(s,{type:"primary",size:"large",onClick:_},{default:o(()=>[n(" 确定 ")]),_:1})])]),_:1},8,["modelValue","title"])):D("",!0)])}}});export{F as _};
