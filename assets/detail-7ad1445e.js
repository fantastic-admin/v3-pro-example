import{_ as Re}from"./index-67f68a56.js";import{_ as Ee}from"./index-0ccd1521.js";import{_ as Me}from"./index-2ade9b29.js";import{g as $e,n as Ne,z as ze,p as Te,h as f,N as se,X as w,r as v,S as De,o as d,c as U,a as l,w as t,b as u,u as a,T as S,f as i,l as m,t as z,x as _,ag as P,ar as Ke,F as X,j as H,i as J,af as Q,ae as T,E as A,k as Oe,P as qe,$ as Le,a0 as je,_ as Fe,d as pe}from"./index-2063e8c9.js";import{S as Ge}from"./sortable.esm-0d19b1d3.js";import{a as W}from"./menu-b86efe06.js";import{u as Pe}from"./useTabbar-4ad52ae9.js";const g=B=>(Le("data-v-527d5f81"),B=B(),je(),B),Xe={class:"absolute-container"},He={class:"page-main"},Je=g(()=>m("span",{class:"label-tip"},"即 name ，系统唯一",-1)),Qe={class:"label-tip"},We={style:{display:"flex"}},Ye=g(()=>m("span",{class:"label-tip"},"请勿在带有参数的路由地址上开启该设置",-1)),Ze={class:"label-tip"},et={class:"label-tip"},tt=g(()=>m("span",{class:"label-tip"},"当缓存规则为“始终缓存”时生效",-1)),lt=g(()=>m("span",{class:"label-tip"},"如果子路由不在导航显示，则需要设置高亮的上级路由地址",-1)),at=g(()=>m("span",{class:"label-tip"},"不宜设置太长，建议控制在4个字符内",-1)),nt=g(()=>m("span",{class:"label-tip"},"请设置 http/https 开头的完整外链地址",-1)),ot=g(()=>m("span",{class:"label-tip"},"请勿与外链同时设置，同时设置时，本设置会失效",-1)),ut=g(()=>m("span",{class:"label-tip"},"请设置有效的长度单位，例如：px/em/rem等",-1)),dt=g(()=>m("p",null,"设置导航所具备的所有权限，权限池内的权限会用于角色管理",-1)),it=g(()=>m("p",{style:{"margin-bottom":"0"}}," 通常只在最子级导航上进行设置 ",-1)),st={class:"index"},re=$e({name:"PagesExampleMenuDetail",__name:"detail",setup(B){const D=Ne(),me=ze(),ce=Pe(),Y=Te(),K=f(!1),C=f(),e=f({id:D.params.id??"",parentId:D.query.parentId??"",path:"",redirect:"",name:"",component:"",meta:{title:"",icon:"",activeIcon:"",defaultOpened:!1,permanent:!1,auth:[],sidebar:!0,breadcrumb:!0,activeMenu:"",cache:[],noCache:[],badge:"",link:"",iframe:"",copyright:!1,paddingBottom:"0px"},auths:[]}),fe=f({path:[{required:!0,message:"请输入路由地址",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入显示名称",trigger:"blur"}]});se(()=>{e.value.id!==""&&_e()});function _e(){K.value=!0,W.detail(e.value.id).then(s=>{K.value=!1,e.value.id=s.data.id,e.value.parentId=s.data.parentId,e.value.path=s.data.path,e.value.redirect=s.data.redirect,e.value.name=s.data.name,e.value.component=s.data.component,Object.assign(e.value.meta,s.data.meta),e.value.auths=s.data.auths})}const y=f(""),O=f(!1),Z=f();function ve(s){e.value.meta.auth.splice(e.value.meta.auth.indexOf(s),1)}function be(){O.value=!0,w(()=>{Z.value.input.focus()})}function ee(){y.value&&(e.value.meta.auth.includes(y.value)?A.warning("标识已存在"):e.value.meta.auth.push(y.value)),O.value=!1,y.value=""}const V=f(""),q=f(!1),te=f();function he(s){typeof e.value.meta.cache=="object"&&e.value.meta.cache.splice(e.value.meta.cache.indexOf(s),1)}function ge(){q.value=!0,w(()=>{te.value.input.focus()})}function le(){V.value&&typeof e.value.meta.cache=="object"&&(e.value.meta.cache.includes(V.value)?A.warning("规则已存在"):e.value.meta.cache.push(V.value)),q.value=!1,V.value=""}const x=f(""),L=f(!1),ae=f();function ye(s){e.value.meta.noCache.splice(e.value.meta.noCache.indexOf(s),1)}function Ve(){L.value=!0,w(()=>{ae.value.input.focus()})}function ne(){x.value&&(e.value.meta.noCache.includes(x.value)?A.warning("规则已存在"):e.value.meta.noCache.push(x.value)),L.value=!1,x.value=""}const j=f(),oe=f(0);se(()=>{ue()});function xe(){e.value.auths.push({name:"",value:""}),w(()=>{j.value.setScrollTop(e.value.auths.length*50)})}function ke(s){e.value.auths.splice(s,1)}function ue(){const s=j.value.$el.querySelector(".el-table__body-wrapper tbody");Ge.create(s,{handle:".sortable",animation:300,ghostClass:"ghost",onEnd:({newIndex:o,oldIndex:b})=>{if(o===void 0||b===void 0)return;const h=e.value.auths.splice(b,1)[0];e.value.auths.splice(o,0,h),oe.value+=1,w(()=>ue())}})}function Ce(){e.value.id===""?C.value&&C.value.validate(s=>{s&&W.create(e.value).then(()=>{A.success({message:"模拟新增成功",center:!0}),R()})}):C.value&&C.value.validate(s=>{s&&W.edit(e.value).then(()=>{A.success({message:"模拟编辑成功",center:!0}),R()})})}function Ie(){R()}function R(){Y.settings.tabbar.enable&&Y.settings.tabbar.mergeTabsBy!=="activeMenu"?ce.close({name:"pagesExampleGeneralMenuList"}):me.push({name:"pagesExampleGeneralMenuList"})}return(s,o)=>{const b=Oe,h=v("el-button"),E=qe,c=v("el-input"),p=v("el-form-item"),r=v("el-col"),M=v("el-link"),de=v("el-row"),F=v("el-tooltip"),$=v("el-tag"),G=v("el-space"),ie=Me,I=v("el-switch"),N=v("el-table-column"),we=v("el-table"),Ue=Ee,Se=v("el-form"),Ae=Re,Be=De("loading");return d(),U("div",Xe,[l(E,{title:a(D).name==="pagesExampleGeneralMenuCreate"?"新增导航":"编辑导航"},{default:t(()=>[l(h,{size:"default",round:"",onClick:R},{icon:t(()=>[l(b,{name:"ep:arrow-left"})]),default:t(()=>[u(" 返回 ")]),_:1})]),_:1},8,["title"]),S((d(),U("div",He,[l(Se,{ref_key:"formRef",ref:C,model:a(e),rules:a(fe),"label-position":"top"},{default:t(()=>[l(Ue,{"right-side-width":"500px","hide-right-side-toggle":""},{rightSide:t(()=>[l(E,{title:"权限池"},{content:t(()=>[dt,it]),_:1}),(d(),i(we,{ref_key:"authsTableRef",ref:j,key:a(oe),data:a(e).auths,border:"",stripe:"","highlight-current-row":""},{default:t(()=>[l(N,{width:"60",align:"center",fixed:""},{header:t(()=>[l(h,{type:"primary",size:"small",plain:"",circle:"",onClick:xe},{icon:t(()=>[l(b,{name:"ep:plus"})]),_:1})]),default:t(n=>[m("span",st,z(n.$index+1),1),l(h,{type:"danger",size:"small",plain:"",circle:"",class:"delete",onClick:k=>ke(n.$index)},{icon:t(()=>[l(b,{name:"ep:delete"})]),_:2},1032,["onClick"])]),_:1}),l(N,{width:"80",align:"center",fixed:""},{header:t(()=>[u(" 排序 ")]),default:t(()=>[l($,{type:"info",class:"sortable"},{default:t(()=>[l(b,{name:"ep:d-caret"})]),_:1})]),_:1}),l(N,{label:"名称"},{default:t(n=>[l(c,{modelValue:n.row.name,"onUpdate:modelValue":k=>n.row.name=k},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(N,{label:"标识"},{default:t(n=>[l(c,{modelValue:n.row.value,"onUpdate:modelValue":k=>n.row.value=k},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data"]))]),default:t(()=>[a(e).parentId?(d(),i(E,{key:0,title:"基础配置",content:"标准路由配置，包含 path/redirect/name/component"})):_("",!0),a(e).parentId?(d(),i(de,{key:1,gutter:30,style:{padding:"20px"}},{default:t(()=>[l(r,{xl:12,lg:24},{default:t(()=>[l(p,{label:"路由地址",prop:"path"},{default:t(()=>[l(c,{modelValue:a(e).path,"onUpdate:modelValue":o[0]||(o[0]=n=>a(e).path=n),clearable:"",placeholder:"请输入路由地址"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{xl:12,lg:24},{default:t(()=>[l(p,{label:"重定向",prop:"redirect"},{default:t(()=>[l(c,{modelValue:a(e).redirect,"onUpdate:modelValue":o[1]||(o[1]=n=>a(e).redirect=n),clearable:"",placeholder:"请输入重定向地址"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{xl:12,lg:24},{default:t(()=>[l(p,{prop:"name"},{label:t(()=>[u(" 路由命名 "),Je]),default:t(()=>[l(c,{modelValue:a(e).name,"onUpdate:modelValue":o[2]||(o[2]=n=>a(e).name=n),clearable:"",placeholder:"请输入路由命名"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{xl:12,lg:24},{default:t(()=>[l(p,{prop:"component"},{label:t(()=>[u(" 组件路径 "),m("span",Qe,[u(" 顶级路由请设置“"),l(M,{type:"primary",underline:!1,onClick:o[3]||(o[3]=P(n=>a(e).component="Layout",["prevent"]))},{default:t(()=>[u("Layout")]),_:1}),u("”，中间层级路由无需设置 ")])]),default:t(()=>[l(c,{modelValue:a(e).component,"onUpdate:modelValue":o[4]||(o[4]=n=>a(e).component=n),clearable:"",placeholder:"请输入完整组件路径"},Ke({_:2},[a(e).component!=="Layout"?{name:"prepend",fn:t(()=>[u(" /src/views/ ")]),key:"0"}:void 0]),1032,["modelValue"])]),_:1})]),_:1})]),_:1})):_("",!0),l(E,{title:"扩展配置"},{content:t(()=>[m("div",We,[u(" 框架扩展配置，详细配置介绍请查看"),l(M,{type:"primary",href:"https://fantastic-admin.gitee.io/guide/router.html#%E5%AF%BC%E8%88%AA%E9%85%8D%E7%BD%AE",target:"_blank"},{default:t(()=>[u(" 框架文档 ")]),_:1})])]),_:1}),l(de,{gutter:30,style:{padding:"20px"}},{default:t(()=>[l(r,{xl:12,lg:24},{default:t(()=>[l(p,{label:"显示名称",prop:"meta.title"},{default:t(()=>[l(c,{modelValue:a(e).meta.title,"onUpdate:modelValue":o[5]||(o[5]=n=>a(e).meta.title=n),clearable:"",placeholder:"请输入显示名称"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{xl:12,lg:24},{default:t(()=>[l(p,{prop:"meta.auth"},{label:t(()=>[u(" 鉴权标识 "),l(F,{content:"当设置多个标识时，只要命中其中一个则鉴权通过",placement:"top"},{default:t(()=>[l(b,{name:"ri:question-line"})]),_:1})]),default:t(()=>[l(G,null,{default:t(()=>[(d(!0),U(X,null,H(a(e).meta.auth,n=>(d(),i($,{key:n,size:"large",closable:"","disable-transitions":!1,onClose:k=>ve(n)},{default:t(()=>[u(z(n),1)]),_:2},1032,["onClose"]))),128)),a(O)?(d(),i(c,{key:0,ref_key:"InputAuthRef",ref:Z,modelValue:a(y),"onUpdate:modelValue":o[6]||(o[6]=n=>J(y)?y.value=n:null),style:{width:"200px"},onKeyup:Q(ee,["enter"]),onBlur:ee},null,8,["modelValue","onKeyup"])):(d(),i(h,{key:1,onClick:be},{default:t(()=>[u(" 新增 ")]),_:1}))]),_:1})]),_:1})]),_:1}),l(r,{xl:12,lg:24},{default:t(()=>[l(p,{label:"默认图标",prop:"meta.icon"},{default:t(()=>[l(ie,{modelValue:a(e).meta.icon,"onUpdate:modelValue":o[7]||(o[7]=n=>a(e).meta.icon=n)},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{xl:12,lg:24},{default:t(()=>[l(p,{label:"激活图标",prop:"meta.activeIcon"},{default:t(()=>[l(ie,{modelValue:a(e).meta.activeIcon,"onUpdate:modelValue":o[8]||(o[8]=n=>a(e).meta.activeIcon=n)},null,8,["modelValue"])]),_:1})]),_:1}),a(e).parentId?(d(),i(r,{key:0,xl:12,lg:24},{default:t(()=>[l(p,{label:"默认展开",prop:"meta.defaultOpened"},{default:t(()=>[l(I,{modelValue:a(e).meta.defaultOpened,"onUpdate:modelValue":o[9]||(o[9]=n=>a(e).meta.defaultOpened=n),"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:1,xl:12,lg:24},{default:t(()=>[l(p,{prop:"meta.permanent"},{label:t(()=>[u(" 常驻标签页 "),Ye]),default:t(()=>[l(I,{modelValue:a(e).meta.permanent,"onUpdate:modelValue":o[10]||(o[10]=n=>a(e).meta.permanent=n),"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:2,xl:12,lg:24},{default:t(()=>[l(p,{label:"在导航显示",prop:"meta.sidebar"},{default:t(()=>[l(I,{modelValue:a(e).meta.sidebar,"onUpdate:modelValue":o[11]||(o[11]=n=>a(e).meta.sidebar=n),"inline-prompt":"","active-text":"显示","inactive-text":"隐藏"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:3,xl:12,lg:24},{default:t(()=>[l(p,{label:"在面包屑显示",prop:"meta.breadcrumb"},{default:t(()=>[l(I,{modelValue:a(e).meta.breadcrumb,"onUpdate:modelValue":o[12]||(o[12]=n=>a(e).meta.breadcrumb=n),"inline-prompt":"","active-text":"显示","inactive-text":"隐藏"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:4,xl:12,lg:24},{default:t(()=>[l(p,{prop:"meta.cache"},{label:t(()=>[u(" 缓存规则 "),l(F,{content:"当跳转到设置的路由时，则会对当前路由进行缓存",placement:"top"},{default:t(()=>[l(b,{name:"ri:question-line"})]),_:1}),S(m("span",Ze,[u("切换为"),l(M,{type:"primary",underline:!1,onClick:o[13]||(o[13]=P(n=>a(e).meta.cache=!0,["prevent"]))},{default:t(()=>[u("始终缓存")]),_:1})],512),[[T,typeof a(e).meta.cache=="object"]]),S(m("span",et,[u("切换为"),l(M,{type:"primary",underline:!1,onClick:o[14]||(o[14]=P(n=>a(e).meta.cache=[],["prevent"]))},{default:t(()=>[u("规则模式")]),_:1})],512),[[T,typeof a(e).meta.cache=="boolean"]])]),default:t(()=>[S(l(G,null,{default:t(()=>[(d(!0),U(X,null,H(a(e).meta.cache,n=>(d(),i($,{key:n,size:"large",closable:"","disable-transitions":!1,onClose:k=>he(n)},{default:t(()=>[u(z(n),1)]),_:2},1032,["onClose"]))),128)),a(q)?(d(),i(c,{key:0,ref_key:"InputCacheRef",ref:te,modelValue:a(V),"onUpdate:modelValue":o[15]||(o[15]=n=>J(V)?V.value=n:null),style:{width:"200px"},onKeyup:Q(le,["enter"]),onBlur:le},null,8,["modelValue","onKeyup"])):(d(),i(h,{key:1,onClick:ge},{default:t(()=>[u(" 新增 ")]),_:1}))]),_:1},512),[[T,typeof a(e).meta.cache=="object"]]),S(m("div",null," 始终缓存 ",512),[[T,typeof a(e).meta.cache=="boolean"]])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:5,xl:12,lg:24},{default:t(()=>[l(p,{prop:"meta.noCache"},{label:t(()=>[u(" 不缓存规则 "),l(F,{content:"当跳转到设置的路由时，则会对当前路由取消缓存",placement:"top"},{default:t(()=>[l(b,{name:"ri:question-line"})]),_:1}),tt]),default:t(()=>[l(G,null,{default:t(()=>[(d(!0),U(X,null,H(a(e).meta.noCache,n=>(d(),i($,{key:n,size:"large",closable:"","disable-transitions":!1,onClose:k=>ye(n)},{default:t(()=>[u(z(n),1)]),_:2},1032,["onClose"]))),128)),a(L)?(d(),i(c,{key:0,ref_key:"InputNoCacheRef",ref:ae,modelValue:a(x),"onUpdate:modelValue":o[16]||(o[16]=n=>J(x)?x.value=n:null),style:{width:"200px"},onKeyup:Q(ne,["enter"]),onBlur:ne},null,8,["modelValue","onKeyup"])):(d(),i(h,{key:1,onClick:Ve},{default:t(()=>[u(" 新增 ")]),_:1}))]),_:1})]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:6,xl:12,lg:24},{default:t(()=>[l(p,{prop:"meta.activeMenu"},{label:t(()=>[u(" 高亮导航 "),lt]),default:t(()=>[l(c,{modelValue:a(e).meta.activeMenu,"onUpdate:modelValue":o[17]||(o[17]=n=>a(e).meta.activeMenu=n),clearable:"",placeholder:"请输入高亮导航的完整路由地址"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:7,xl:12,lg:24},{default:t(()=>[l(p,{prop:"meta.badge"},{label:t(()=>[u(" 徽标 "),at]),default:t(()=>[l(c,{modelValue:a(e).meta.badge,"onUpdate:modelValue":o[18]||(o[18]=n=>a(e).meta.badge=n),clearable:"",placeholder:"请输入徽标显示内容"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:8,xl:12,lg:24},{default:t(()=>[l(p,{prop:"meta.link"},{label:t(()=>[u(" 访问外链 "),nt]),default:t(()=>[l(c,{modelValue:a(e).meta.link,"onUpdate:modelValue":o[19]||(o[19]=n=>a(e).meta.link=n),clearable:"",placeholder:"请输入网址"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:9,xl:12,lg:24},{default:t(()=>[l(p,{prop:"meta.iframe"},{label:t(()=>[u(" 内嵌网页 "),ot]),default:t(()=>[l(c,{modelValue:a(e).meta.iframe,"onUpdate:modelValue":o[20]||(o[20]=n=>a(e).meta.iframe=n),clearable:"",placeholder:"请输入网址"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:10,xl:12,lg:24},{default:t(()=>[l(p,{label:"底部版权",prop:"meta.copyright"},{default:t(()=>[l(I,{modelValue:a(e).meta.copyright,"onUpdate:modelValue":o[21]||(o[21]=n=>a(e).meta.copyright=n),"inline-prompt":"","active-text":"显示","inactive-text":"隐藏"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),a(e).parentId?(d(),i(r,{key:11,xl:12,lg:24},{default:t(()=>[l(p,{prop:"meta.paddingBottom"},{label:t(()=>[u(" 底部填充高度 "),ut]),default:t(()=>[l(c,{modelValue:a(e).meta.paddingBottom,"onUpdate:modelValue":o[22]||(o[22]=n=>a(e).meta.paddingBottom=n),clearable:"",placeholder:"请输入显示名称"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0)]),_:1})]),_:1})]),_:1},8,["model","rules"])])),[[Be,a(K)]]),l(Ae,null,{default:t(()=>[l(h,{type:"primary",size:"large",onClick:Ce},{default:t(()=>[u(" 提交 ")]),_:1}),l(h,{size:"large",onClick:Ie},{default:t(()=>[u(" 取消 ")]),_:1})]),_:1})])}}});typeof pe=="function"&&pe(re);const bt=Fe(re,[["__scopeId","data-v-527d5f81"]]);export{bt as default};
