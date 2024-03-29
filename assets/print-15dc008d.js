import{aE as L,g as I,h as D,r as M,o as B,c as U,a as g,w as E,l as R,b as S,u as W,k as _,P as H,e as N,d as P}from"./index-2063e8c9.js";import K from"./alert-d8769c35.js";var T={exports:{}};(function(O,w){(function(f,n){O.exports=n()})(window,function(){return function(m){var f={};function n(o){if(f[o])return f[o].exports;var a=f[o]={i:o,l:!1,exports:{}};return m[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=m,n.c=f,n.d=function(o,a,d){n.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:d})},n.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,a){if(a&1&&(o=n(o)),a&8||a&4&&typeof o=="object"&&o&&o.__esModule)return o;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:o}),a&2&&typeof o!="string")for(var p in o)n.d(d,p,(function(l){return o[l]}).bind(null,p));return d},n.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(a,"a",a),a},n.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},n.p="",n(n.s=0)}({"./src/index.js":function(m,f,n){n.r(f),n("./src/sass/index.scss");var o=n("./src/js/init.js"),a=o.default.init;typeof window<"u"&&(window.printJS=a),f.default=a},"./src/js/browser.js":function(m,f,n){n.r(f);var o={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!o.isIE()&&!!window.StyleMedia},isChrome:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!d.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};f.default=o},"./src/js/functions.js":function(m,f,n){n.r(f),n.d(f,"addWrapper",function(){return p}),n.d(f,"capitalizePrint",function(){return l}),n.d(f,"collectStyles",function(){return i}),n.d(f,"addHeader",function(){return e}),n.d(f,"cleanUp",function(){return c}),n.d(f,"isRawHTML",function(){return y});var o=n("./src/js/modal.js"),a=n("./src/js/browser.js");function d(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(u){return typeof u}:d=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},d(t)}function p(t,s){var u="font-family:"+s.font+" !important; font-size: "+s.font_size+" !important; width:100%;";return'<div style="'+u+'">'+t+"</div>"}function l(t){return t.charAt(0).toUpperCase()+t.slice(1)}function i(t,s){for(var u=document.defaultView||window,h="",b=u.getComputedStyle(t,""),v=0;v<b.length;v++)(s.targetStyles.indexOf("*")!==-1||s.targetStyle.indexOf(b[v])!==-1||r(s.targetStyles,b[v]))&&b.getPropertyValue(b[v])&&(h+=b[v]+":"+b.getPropertyValue(b[v])+";");return h+="max-width: "+s.maxWidth+"px !important; font-size: "+s.font_size+" !important;",h}function r(t,s){for(var u=0;u<t.length;u++)if(d(s)==="object"&&s.indexOf(t[u])!==-1)return!0;return!1}function e(t,s){var u=document.createElement("div");if(y(s.header))u.innerHTML=s.header;else{var h=document.createElement("h1"),b=document.createTextNode(s.header);h.appendChild(b),h.setAttribute("style",s.headerStyle),u.appendChild(h)}t.insertBefore(u,t.childNodes[0])}function c(t){t.showModal&&o.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var s="mouseover";(a.default.isChrome()||a.default.isFirefox())&&(s="focus");var u=function h(){window.removeEventListener(s,h),t.onPrintDialogClose();var b=document.getElementById(t.frameId);b&&b.remove()};window.addEventListener(s,u)}function y(t){var s=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return s.test(t)}},"./src/js/html.js":function(m,f,n){n.r(f);var o=n("./src/js/functions.js"),a=n("./src/js/print.js");function d(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(e){return typeof e}:d=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(i)}f.default={print:function(r,e){var c=l(r.printable)?r.printable:document.getElementById(r.printable);if(!c){window.console.error("Invalid HTML element id: "+r.printable);return}r.printableElement=p(c,r),r.header&&Object(o.addHeader)(r.printableElement,r),a.default.send(r,e)}};function p(i,r){for(var e=i.cloneNode(),c=Array.prototype.slice.call(i.childNodes),y=0;y<c.length;y++)if(r.ignoreElements.indexOf(c[y].id)===-1){var t=p(c[y],r);e.appendChild(t)}switch(r.scanStyles&&i.nodeType===1&&e.setAttribute("style",Object(o.collectStyles)(i,r)),i.tagName){case"SELECT":e.value=i.value;break;case"CANVAS":e.getContext("2d").drawImage(i,0,0);break}return e}function l(i){return d(i)==="object"&&i&&(i instanceof HTMLElement||i.nodeType===1)}},"./src/js/image.js":function(m,f,n){n.r(f);var o=n("./src/js/functions.js"),a=n("./src/js/print.js"),d=n("./src/js/browser.js");f.default={print:function(l,i){l.printable.constructor!==Array&&(l.printable=[l.printable]),l.printableElement=document.createElement("div"),l.printable.forEach(function(r){var e=document.createElement("img");if(e.setAttribute("style",l.imageStyle),e.src=r,d.default.isFirefox()){var c=e.src;e.src=c}var y=document.createElement("div");y.appendChild(e),l.printableElement.appendChild(y)}),l.header&&Object(o.addHeader)(l.printableElement,l),a.default.send(l,i)}}},"./src/js/init.js":function(m,f,n){n.r(f);var o=n("./src/js/browser.js"),a=n("./src/js/modal.js"),d=n("./src/js/pdf.js"),p=n("./src/js/html.js"),l=n("./src/js/raw-html.js"),i=n("./src/js/image.js"),r=n("./src/js/json.js");function e(y){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(s){return typeof s}:e=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},e(y)}var c=["pdf","html","image","json","raw-html"];f.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(x){throw x},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},s=arguments[0];if(s===void 0)throw new Error("printJS expects at least 1 attribute.");switch(e(s)){case"string":t.printable=encodeURI(s),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=s.printable,t.fallbackPrintable=typeof s.fallbackPrintable<"u"?s.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var u in t)u==="printable"||u==="fallbackPrintable"||(t[u]=typeof s[u]<"u"?s[u]:t[u]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+e(s))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||c.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&a.default.show(t),t.onLoadingStart&&t.onLoadingStart();var h=document.getElementById(t.frameId);h&&h.parentNode.removeChild(h);var b=document.createElement("iframe");switch(o.default.isFirefox()?b.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):b.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),b.setAttribute("id",t.frameId),t.type!=="pdf"&&(b.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(j){b.srcdoc+='<link rel="stylesheet" href="'+j+'">'})),b.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(o.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var v=window.open(t.fallbackPrintable,"_blank");v.focus(),t.onIncompatibleBrowser()}catch(j){t.onError(j)}finally{t.showModal&&a.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else d.default.print(t,b);break;case"image":i.default.print(t,b);break;case"html":p.default.print(t,b);break;case"raw-html":l.default.print(t,b);break;case"json":r.default.print(t,b);break}}}},"./src/js/json.js":function(m,f,n){n.r(f);var o=n("./src/js/functions.js"),a=n("./src/js/print.js");function d(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(r){return typeof r}:d=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},d(l)}f.default={print:function(i,r){if(d(i.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof i.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!i.properties||!Array.isArray(i.properties))throw new Error("Invalid properties array for your JSON data.");i.properties=i.properties.map(function(e){return{field:d(e)==="object"?e.field:e,displayName:d(e)==="object"?e.displayName:e,columnSize:d(e)==="object"&&e.columnSize?e.columnSize+";":100/i.properties.length+"%;"}}),i.printableElement=document.createElement("div"),i.header&&Object(o.addHeader)(i.printableElement,i),i.printableElement.innerHTML+=p(i),a.default.send(i,r)}};function p(l){var i=l.printable,r=l.properties,e='<table style="border-collapse: collapse; width: 100%;">';l.repeatTableHeader&&(e+="<thead>"),e+="<tr>";for(var c=0;c<r.length;c++)e+='<th style="width:'+r[c].columnSize+";"+l.gridHeaderStyle+'">'+Object(o.capitalizePrint)(r[c].displayName)+"</th>";e+="</tr>",l.repeatTableHeader&&(e+="</thead>"),e+="<tbody>";for(var y=0;y<i.length;y++){e+="<tr>";for(var t=0;t<r.length;t++){var s=i[y],u=r[t].field.split(".");if(u.length>1)for(var h=0;h<u.length;h++)s=s[u[h]];else s=s[r[t].field];e+='<td style="width:'+r[t].columnSize+l.gridStyle+'">'+s+"</td>"}e+="</tr>"}return e+="</tbody></table>",e}},"./src/js/modal.js":function(m,f,n){n.r(f);var o={show:function(d){var p="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",l=document.createElement("div");l.setAttribute("style",p),l.setAttribute("id","printJS-Modal");var i=document.createElement("div");i.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),i.appendChild(r);var e=document.createElement("span");e.setAttribute("class","printSpinner"),i.appendChild(e);var c=document.createTextNode(d.modalMessage);i.appendChild(c),l.appendChild(i),document.getElementsByTagName("body")[0].appendChild(l),document.getElementById("printClose").addEventListener("click",function(){o.close()})},close:function(){var d=document.getElementById("printJS-Modal");d&&d.parentNode.removeChild(d)}};f.default=o},"./src/js/pdf.js":function(m,f,n){n.r(f);var o=n("./src/js/print.js"),a=n("./src/js/functions.js");f.default={print:function(l,i){if(l.base64){var r=Uint8Array.from(atob(l.printable),function(c){return c.charCodeAt(0)});d(l,i,r);return}l.printable=/^(blob|http|\/\/)/i.test(l.printable)?l.printable:window.location.origin+(l.printable.charAt(0)!=="/"?"/"+l.printable:l.printable);var e=new window.XMLHttpRequest;e.responseType="arraybuffer",e.addEventListener("error",function(){Object(a.cleanUp)(l),l.onError(e.statusText,e)}),e.addEventListener("load",function(){if([200,201].indexOf(e.status)===-1){Object(a.cleanUp)(l),l.onError(e.statusText,e);return}d(l,i,e.response)}),e.open("GET",l.printable,!0),e.send()}};function d(p,l,i){var r=new window.Blob([i],{type:"application/pdf"});r=window.URL.createObjectURL(r),l.setAttribute("src",r),o.default.send(p,l)}},"./src/js/print.js":function(m,f,n){n.r(f);var o=n("./src/js/browser.js"),a=n("./src/js/functions.js"),d={send:function(e,c){document.getElementsByTagName("body")[0].appendChild(c);var y=document.getElementById(e.frameId);y.onload=function(){if(e.type==="pdf"){o.default.isFirefox()?setTimeout(function(){return p(y,e)},1e3):p(y,e);return}var t=y.contentWindow||y.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),e.type!=="pdf"&&e.style){var s=document.createElement("style");s.innerHTML=e.style,t.head.appendChild(s)}var u=t.getElementsByTagName("img");u.length>0?l(Array.from(u)).then(function(){return p(y,e)}):p(y,e)}}};function p(r,e){try{if(r.focus(),o.default.isEdge()||o.default.isIE())try{r.contentWindow.document.execCommand("print",!1,null)}catch{r.contentWindow.print()}else r.contentWindow.print()}catch(c){e.onError(c)}finally{o.default.isFirefox()&&(r.style.visibility="hidden",r.style.left="-1px"),Object(a.cleanUp)(e)}}function l(r){var e=r.map(function(c){if(c.src&&c.src!==window.location.href)return i(c)});return Promise.all(e)}function i(r){return new Promise(function(e){var c=function y(){!r||typeof r.naturalWidth>"u"||r.naturalWidth===0||!r.complete?setTimeout(y,500):e()};c()})}f.default=d},"./src/js/raw-html.js":function(m,f,n){n.r(f);var o=n("./src/js/print.js");f.default={print:function(d,p){d.printableElement=document.createElement("div"),d.printableElement.setAttribute("style","width:100%"),d.printableElement.innerHTML=d.printable,o.default.send(d,p)}}},"./src/sass/index.scss":function(m,f,n){},0:function(m,f,n){m.exports=n("./src/index.js")}}).default})})(T);var z=T.exports;const C=L(z),A=""+new URL("login-banner-a565fac8.png",import.meta.url).href,J={style:{"margin-bottom":"0"}},F=I({__name:"print",setup(O){const w=D([{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]);function m(n){n==="json"?C({printable:w.value,properties:["date","name","address"],type:"json",gridHeaderStyle:"color: red; border: 1px solid #3971A5;",gridStyle:"border: 1px solid #3971A5;"}):n==="image"&&C({printable:[A,A],type:"image",imageStyle:"width: 50%; margin-bottom: 20px;"})}function f(n){window.open(n,"_blank")}return(n,o)=>{const a=M("el-tag"),d=_,p=M("el-button"),l=H,i=M("el-table-column"),r=M("el-table"),e=N;return B(),U("div",null,[g(K),g(l,{title:"打印"},{content:E(()=>[R("p",J,[S(" 安装命令："),g(a,null,{default:E(()=>[S("pnpm add print-js")]),_:1})])]),default:E(()=>[g(p,{onClick:o[0]||(o[0]=c=>f("https://github.com/crabbly/print.js"))},{icon:E(()=>[g(d,{name:"ep:link"})]),default:E(()=>[S(" 访问 print.js ")]),_:1})]),_:1}),g(e,{title:"打印JSON"},{default:E(()=>[g(r,{data:W(w),stripe:"",border:"",style:{width:"100%"}},{default:E(()=>[g(i,{prop:"date",label:"日期",width:"180"}),g(i,{prop:"name",label:"姓名",width:"180"}),g(i,{prop:"address",label:"地址"})]),_:1},8,["data"]),g(p,{onClick:o[1]||(o[1]=c=>m("json"))},{default:E(()=>[S(" 打印 ")]),_:1})]),_:1}),g(e,{title:"打印图片"},{default:E(()=>[g(p,{onClick:o[2]||(o[2]=c=>m("image"))},{default:E(()=>[S(" 打印 ")]),_:1})]),_:1})])}}});typeof P=="function"&&P(F);export{F as default};
