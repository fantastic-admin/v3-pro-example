import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-2d102f7d.js";import{g as B,h as R,q as y,r as m,o as c,c as N,f as g,w as o,a as t,b as n,R as C,u as r,i as b,l as h,x as U}from"./index-2063e8c9.js";const q={class:"buttons"},S=B({__name:"index",props:{modelValue:{type:Boolean,default:!1},mode:{},id:{}},emits:["update:modelValue","success"],setup(x,{emit:v}){const l=x,f=v,d=R(),e=y({get(){return l.modelValue},set(V){f("update:modelValue",V)}}),p=y(()=>l.id===""?"新增部门":"编辑部门");function _(){d.value.submit().then(()=>{f("success"),i()})}function i(){e.value=!1}return(V,a)=>{const s=m("el-button"),w=m("el-dialog"),z=m("el-drawer");return c(),N("div",null,[l.mode==="dialog"?(c(),g(w,{key:0,modelValue:r(e),"onUpdate:modelValue":a[0]||(a[0]=u=>b(e)?e.value=u:null),title:r(p),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:o(()=>[t(s,{size:"large",onClick:i},{default:o(()=>[n(" 取消 ")]),_:1}),t(s,{type:"primary",size:"large",onClick:_},{default:o(()=>[n(" 确定 ")]),_:1})]),default:o(()=>[t(k,C({ref_key:"formRef",ref:d},l),null,16)]),_:1},8,["modelValue","title"])):l.mode==="drawer"?(c(),g(z,{key:1,modelValue:r(e),"onUpdate:modelValue":a[1]||(a[1]=u=>b(e)?e.value=u:null),title:r(p),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{default:o(()=>[t(k,C({ref_key:"formRef",ref:d},l),null,16),h("div",q,[t(s,{size:"large",onClick:i},{default:o(()=>[n(" 取消 ")]),_:1}),t(s,{type:"primary",size:"large",onClick:_},{default:o(()=>[n(" 确定 ")]),_:1})])]),_:1},8,["modelValue","title"])):U("",!0)])}}});export{S as _};
