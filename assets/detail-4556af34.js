import{_ as h}from"./index-67f68a56.js";import{g as v,n as w,z as y,p as B,h as E,r as a,o as M,c as z,a as e,w as t,b as s,u,ab as R,k as S,P as T,e as L,d as c}from"./index-2063e8c9.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-741434f0.js";import{u as P}from"./useTabbar-4ad52ae9.js";const V=v({name:"PagesExampleFormModeDetail",__name:"detail",setup($){const l=w(),i=y(),m=P(),_=B(),r=E();function p(){r.value.submit().then(()=>{R.emit("get-data-list"),n()})}function d(){n()}function n(){_.settings.tabbar.enable&&_.settings.tabbar.mergeTabsBy!=="activeMenu"?m.close({name:"standardModuleExampleList"}):i.push({name:"standardModuleExampleList"})}return(D,F)=>{const f=S,o=a("el-button"),g=T,b=a("el-col"),k=a("el-row"),x=L,C=h;return M(),z("div",null,[e(g,{title:u(l).name==="standardModuleExampleCreate"?"新增":"编辑"},{default:t(()=>[e(o,{size:"default",round:"",onClick:n},{icon:t(()=>[e(f,{name:"ep:arrow-left"})]),default:t(()=>[s(" 返回 ")]),_:1})]),_:1},8,["title"]),e(x,null,{default:t(()=>[e(k,null,{default:t(()=>[e(b,{md:24,lg:16},{default:t(()=>[e(N,{id:u(l).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(o,{type:"primary",size:"large",onClick:p},{default:t(()=>[s(" 提交 ")]),_:1}),e(o,{size:"large",onClick:d},{default:t(()=>[s(" 取消 ")]),_:1})]),_:1})])}}});typeof c=="function"&&c(V);export{V as default};
