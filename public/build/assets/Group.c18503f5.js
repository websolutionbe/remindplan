import{_ as m,H as d,L as f,c as o,b as r,w as h,F as l,r as _,o as n,d as s,t,e as y,n as g}from"./app.0ade2b4a.js";import{S as L,L as $}from"./Seo.6118f660.js";import{D as v}from"./DonutChart.5613712a.js";const C={name:"Category",components:{DonutChart:v,Seo:L,Layout:$,Head:d,Link:f},data(){return{users:this.$page.props.users}},mounted(){},methods:{}},k={class:"users"},B={class:"content"};function D(a,S,b,w,c,x){const i=_("seo"),p=_("Layout");return n(),o(l,null,[r(i,{meta:a.$page.props.meta},null,8,["meta"]),r(p,{title:a.__t("app.dashboard.title")},{default:h(()=>[s("h1",null,t(a.__t("group.title")),1),s("ul",k,[(n(!0),o(l,null,y(c.users,(e,u)=>(n(),o("li",{class:"user",key:`user_${u}`},[s("div",{class:g(["icon",e.color])},t(e.first_name.slice(0,1)+e.last_name.slice(0,1)),3),s("div",B,[s("span",null,t(e.first_name)+" "+t(e.last_name),1)])]))),128))])]),_:1},8,["title"])],64)}const N=m(C,[["render",D]]);export{N as default};
