import{d as F,r as c,o as _,W as m,a as f,c as v,b as n,w as d,v as C,u as B,S as h,e as D,f as g,g as y,h as A,i as x}from"./vendor.b406e84e.js";const w=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function s(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerpolicy&&(o.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?o.credentials="include":u.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(u){if(u.ep)return;u.ep=!0;const o=s(u);fetch(u.href,o)}};w();const b=i=>{const t=new Map;for(const e of i)if(t.has(e)){const u=t.get(e);if(!u)continue;t.set(e,u+1)}else t.set(e,1);return Array.from(t).sort((e,u)=>u[1]-e[1])},k=i=>{const t=i.split(`
`),s=[];for(let e of t){const u=e.indexOf(" "),o=e.slice(0,u)||0,r=e.slice(u)||"";u>-1&&o&&r&&s.push([r,o])}return s};const S={class:"word-cloud"},L={class:"row",style:{"min-height":"480px"}},N={class:"btn btn-split"},O=["disabled"],V={class:"center"},W={style:{width:"320px"}},M=n("span",null,"\u8C03\u8282\u5B57\u4F53\u5927\u5C0F",-1),P={class:"center"},U={style:{width:"320px"}},$=["disabled"],j={class:"row center"},q=F({setup(i){const t=c(),s=c(`\u4E2D\u6587\u5206\u8BCD\u6307\u7684\u662F\u4E2D\u6587\u5728\u57FA\u672C\u6587\u6CD5\u4E0A\u6709\u5176\u7279\u6B8A\u6027\u800C\u5B58\u5728\u7684\u5206\u8BCD\u3002
\u5206\u8BCD\u5C31\u662F\u5C06\u8FDE\u7EED\u7684\u5B57\u5E8F\u5217\u6309\u7167\u4E00\u5B9A\u7684\u89C4\u8303\u91CD\u65B0\u7EC4\u5408\u6210\u8BCD\u5E8F\u5217\u7684\u8FC7\u7A0B\u3002\u6211\u4EEC\u77E5\u9053\uFF0C\u5728\u82F1\u6587\u7684\u884C\u6587\u4E2D\uFF0C\u5355\u8BCD\u4E4B\u95F4\u662F\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u81EA\u7136\u5206\u754C\u7B26\u7684\uFF0C\u800C\u4E2D\u6587\u53EA\u662F\u5B57\u3001\u53E5\u548C\u6BB5\u80FD\u901A\u8FC7\u660E\u663E\u7684\u5206\u754C\u7B26\u6765\u7B80\u5355\u5212\u754C\uFF0C\u552F\u72EC\u8BCD\u6CA1\u6709\u4E00\u4E2A\u5F62\u5F0F\u4E0A\u7684\u5206\u754C\u7B26\uFF0C\u867D\u7136\u82F1\u6587\u4E5F\u540C\u6837\u5B58\u5728\u77ED\u8BED\u7684\u5212\u5206\u95EE\u9898\uFF0C\u4E0D\u8FC7\u5728\u8BCD\u8FD9\u4E00\u5C42\u4E0A\uFF0C\u4E2D\u6587\u6BD4\u4E4B\u82F1\u6587\u8981\u590D\u6742\u5F97\u591A\u3001\u56F0\u96BE\u5F97\u591A\u3002`),e=c("");_(()=>{r()});const u=c(1),o=()=>{const l=B(new h).doSegment(s.value,{simple:!0,stripPunctuation:!0});console.log(l);const a=b(l).map(p=>`${p[1]} ${p[0]}`);console.log(a),e.value=a.join(`
`)},r=()=>{t.value&&e.value&&m(t.value,{list:k(e.value),weightFactor:u.value})};return(E,l)=>(f(),v("div",S,[n("article",L,[d(n("textarea",{type:"textarea",name:"text",placeholder:"\u8F93\u5165\u6587\u7AE0","onUpdate:modelValue":l[0]||(l[0]=a=>s.value=a)},null,512),[[C,s.value]]),n("div",N,[n("button",{onClick:o,disabled:!s.value},"\u5206\u8BCD",8,O)]),d(n("textarea",{type:"textarea",name:"text",placeholder:"\u6570\u91CF \u8BCD\u8BED","onUpdate:modelValue":l[1]||(l[1]=a=>e.value=a)},null,512),[[C,e.value]])]),n("div",V,[n("div",W,[M,d(n("input",{type:"number","onUpdate:modelValue":l[2]||(l[2]=a=>u.value=a),onChange:r},null,544),[[C,u.value]])])]),n("div",P,[n("div",U,[n("button",{onClick:r,disabled:!e.value},"\u751F\u6210",8,$)])]),n("div",j,[n("article",null,[n("canvas",{id:"canvas",ref_key:"canvas",ref:t,width:"640",height:"480"},null,512)])])]))}}),G=F({setup(i){return(t,s)=>{const e=y("content");return f(),D(e,null,{default:g(()=>[A(q)]),_:1})}}});x(G).mount("#app");