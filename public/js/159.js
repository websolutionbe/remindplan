(self.webpackChunk=self.webpackChunk||[]).push([[159],{4387:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o="/images/exit.svg?f24c4920cd62a5e6aa494a8794fee02b"},8049:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o="/images/logo-full-color.svg?3bd17b5921115e63194a354cff8417b4"},5127:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o="/images/logo-full.svg?f17d895dc4994da009999c509e7ae4a7"},1336:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o="/images/logo.svg?d8829030d36fb41beef60a2fe22b4c5d"},1054:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o="/images/small-arrow-left.svg?0742e961011dff69d9f82575e0532571"},1159:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>re});var o=t(821),r=(0,o.createElementVNode)("title",null,"Koekoek",-1),l=(0,o.createElementVNode)("meta",{name:"description",content:"Your page description"},null,-1),a=(0,o.createElementVNode)("h1",null,"hey ooo",-1);var c={id:"banner"},s=[(0,o.createElementVNode)("div",{class:"container"},[(0,o.createElementVNode)("h1",null,"banner")],-1)];const i={name:"Banner"};var d=t(3744);const m=(0,d.Z)(i,[["render",function(e,n,t,r,l,a){return(0,o.openBlock)(),(0,o.createElementBlock)("section",c,s)}]]);var u={id:"services"},v=[(0,o.createElementVNode)("div",{class:"container"},null,-1)];const f={name:"Services"},p=(0,d.Z)(f,[["render",function(e,n,t,r,l,a){return(0,o.openBlock)(),(0,o.createElementBlock)("section",u,v)}]]);var g={id:"projects"},N=[(0,o.createElementVNode)("div",{class:"container"},null,-1)];const V={name:"Projects"},k=(0,d.Z)(V,[["render",function(e,n,t,r,l,a){return(0,o.openBlock)(),(0,o.createElementBlock)("section",g,N)}]]);var h={id:"testimonials"},E=[(0,o.createElementVNode)("div",{class:"container"},null,-1)];const B={name:"Testimonials"},b=(0,d.Z)(B,[["render",function(e,n,t,r,l,a){return(0,o.openBlock)(),(0,o.createElementBlock)("section",h,E)}]]);var C={id:"process"},w=[(0,o.createElementVNode)("div",{class:"container"},null,-1)];const x={name:"Process"},Z=(0,d.Z)(x,[["render",function(e,n,t,r,l,a){return(0,o.openBlock)(),(0,o.createElementBlock)("section",C,w)}]]);var y=t(9038),H=(0,o.createElementVNode)("footer",null," footer ",-1);var O={class:"container header-wrap"},S=["href"],T={key:0,id:"desktop-navigation"},j={key:0,id:"mobile-navigation"},F={class:"container mobile-navigation-wrap"},I={class:"full-logo-wrap"};var P=t(4952);const L={name:"SvgInline",components:{InlineSvg:t.n(P)()},props:{path:{type:String,required:!0}},mounted:function(){console.log(t(619)("./".concat(this.path)).default)}},_=(0,d.Z)(L,[["render",function(e,n,r,l,a,c){var s=(0,o.resolveComponent)("inline-svg");return(0,o.openBlock)(),(0,o.createBlock)(s,{src:t(619)("./".concat(r.path)).default},null,8,["src"])}]]);var D=[(0,o.createElementVNode)("span",null,null,-1),(0,o.createElementVNode)("span",null,null,-1)];const M={name:"Hamburger",methods:{}},$=(0,d.Z)(M,[["render",function(e,n,t,r,l,a){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{id:"hamburger",onClick:n[0]||(n[0]=function(n){return e.$emit("clicked")})},D)}]]);const U={name:"ExitMobileButton",components:{SvgInline:_}},q=(0,d.Z)(U,[["render",function(e,n,t,r,l,a){var c=(0,o.resolveComponent)("svg-inline");return(0,o.openBlock)(),(0,o.createElementBlock)("button",{class:"reset exit-button",onClick:n[0]||(n[0]=function(n){return e.$emit("clicked")})},[(0,o.createVNode)(c,{path:"exit.svg"})])}]]);var K={class:"navigation"},W=["href"],Y=(0,o.createTextVNode)(" Home "),z=["href"],A=(0,o.createTextVNode)(" Over "),G=["href"],J=(0,o.createTextVNode)(" Projecten "),Q=["href"],R=(0,o.createTextVNode)(" Diensten "),X=["href"];const ee={name:"Navigation",components:{SvgInline:_}},ne={name:"THeader",data:function(){return{mobileNavOpen:!1}},components:{Navigation:(0,d.Z)(ee,[["render",function(e,n,t,r,l,a){var c=(0,o.resolveComponent)("svg-inline");return(0,o.openBlock)(),(0,o.createElementBlock)("ul",K,[(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",{href:e.route("home")},[Y,(0,o.createVNode)(c,{path:"small-arrow-left.svg"})],8,W)]),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",{href:e.route("home")},[A,(0,o.createVNode)(c,{path:"small-arrow-left.svg"})],8,z)]),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",{href:e.route("home")},[J,(0,o.createVNode)(c,{path:"small-arrow-left.svg"})],8,G)]),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",{href:e.route("home")},[R,(0,o.createVNode)(c,{path:"small-arrow-left.svg"})],8,Q)]),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("a",{class:"cta btn btn--primary",href:e.route("contact")}," Contact ",8,X)])])}]]),SvgInline:_,Hamburger:$,ExitMobileButton:q}},te={name:"Layout",components:{Header:(0,d.Z)(ne,[["render",function(e,n,t,r,l,a){var c=(0,o.resolveComponent)("svg-inline"),s=(0,o.resolveComponent)("navigation"),i=(0,o.resolveComponent)("hamburger"),d=(0,o.resolveComponent)("exit-mobile-button");return(0,o.openBlock)(),(0,o.createElementBlock)("header",null,[(0,o.createElementVNode)("div",O,[(0,o.createElementVNode)("a",{class:"home-logo-link",href:e.route("home")},[(0,o.createVNode)(c,{path:"logo.svg"}),(0,o.createVNode)(c,{path:"logo-full-color.svg"})],8,S),(0,o.createElementVNode)("nav",null,[this.windowWidth>=720?((0,o.openBlock)(),(0,o.createElementBlock)("div",T,[(0,o.createVNode)(s)])):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[(0,o.createVNode)(i,{onClicked:n[0]||(n[0]=function(e){return l.mobileNavOpen=!0})}),l.mobileNavOpen?((0,o.openBlock)(),(0,o.createElementBlock)("div",j,[(0,o.createElementVNode)("div",F,[(0,o.createElementVNode)("div",I,[(0,o.createVNode)(c,{path:"logo-full.svg"})]),(0,o.createVNode)(d,{onClicked:n[1]||(n[1]=function(e){return l.mobileNavOpen=!1})}),(0,o.createVNode)(s)])])):(0,o.createCommentVNode)("",!0)],64))])])])}]])}},oe={name:"Home",components:{Layout:(0,d.Z)(te,[["render",function(e,n,t,r,l,a){var c=(0,o.resolveComponent)("Header");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(c),(0,o.renderSlot)(e.$slots,"default"),H],64)}]]),Process:Z,Testimonials:b,Projects:k,Services:p,Banner:m,Head:y.Fb}},re=(0,d.Z)(oe,[["render",function(e,n,t,c,s,i){var d=(0,o.resolveComponent)("Head"),m=(0,o.resolveComponent)("banner"),u=(0,o.resolveComponent)("services"),v=(0,o.resolveComponent)("projects"),f=(0,o.resolveComponent)("testimonials"),p=(0,o.resolveComponent)("process"),g=(0,o.resolveComponent)("Layout");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(d,null,{default:(0,o.withCtx)((function(){return[r,l]})),_:1}),(0,o.createVNode)(g,null,{default:(0,o.withCtx)((function(){return[a,(0,o.createVNode)(m),(0,o.createVNode)(u),(0,o.createVNode)(v),(0,o.createVNode)(f),(0,o.createVNode)(p)]})),_:1})],64)}]])},619:(e,n,t)=>{var o={"./exit.svg":4387,"./logo-full-color.svg":8049,"./logo-full.svg":5127,"./logo.svg":1336,"./small-arrow-left.svg":1054};function r(e){var n=l(e);return t(n)}function l(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=l,e.exports=r,r.id=619}}]);