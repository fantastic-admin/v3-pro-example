import{D as k}from"./index-63396930.js";import{g as R,h as B,q as y,r as m,o as c,c as N,f as g,w as e,a as t,b as n,R as C,u as r,i as x,x as D}from"./index-2063e8c9.js";const q=R({__name:"index",props:{modelValue:{type:Boolean,default:!1},mode:{},id:{}},emits:["update:modelValue","success"],setup(b,{emit:v}){const l=b,f=v,d=B(),o=y({get(){return l.modelValue},set(V){f("update:modelValue",V)}}),p=y(()=>l.id===""?"新增角色":"编辑角色");function _(){d.value.submit().then(()=>{f("success"),u()})}function u(){o.value=!1}return(V,a)=>{const s=m("el-button"),w=m("el-dialog"),z=m("el-drawer");return c(),N("div",null,[l.mode==="dialog"?(c(),g(w,{key:0,modelValue:r(o),"onUpdate:modelValue":a[0]||(a[0]=i=>x(o)?o.value=i:null),title:r(p),width:"1000px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:e(()=>[t(s,{size:"large",onClick:u},{default:e(()=>[n(" 取消 ")]),_:1}),t(s,{type:"primary",size:"large",onClick:_},{default:e(()=>[n(" 确定 ")]),_:1})]),default:e(()=>[t(k,C({ref_key:"formRef",ref:d},l),null,16)]),_:1},8,["modelValue","title"])):l.mode==="drawer"?(c(),g(z,{key:1,modelValue:r(o),"onUpdate:modelValue":a[1]||(a[1]=i=>x(o)?o.value=i:null),title:r(p),size:"1000px","close-on-click-modal":!1,"destroy-on-close":""},{footer:e(()=>[t(s,{size:"large",onClick:u},{default:e(()=>[n(" 取消 ")]),_:1}),t(s,{type:"primary",size:"large",onClick:_},{default:e(()=>[n(" 确定 ")]),_:1})]),default:e(()=>[t(k,C({ref_key:"formRef",ref:d},l),null,16)]),_:1},8,["modelValue","title"])):D("",!0)])}}});export{q as _};
