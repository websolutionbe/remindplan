import{_ as l,m as f,o,h as a,r,R as p,w as c,g as m}from"./app.0ade2b4a.js";const _={name:"Input",components:{UiInput:f}};function y(e,t,u,s,i,d){const n=r("ui-input");return o(),a(n,{class:"input--theme"})}const b=l(_,[["render",y]]),B={name:"Button",components:{UiButton:p},emits:["click"],props:{disabled:{type:Boolean,required:!1,default:null},el:{type:String,required:!1,default:"button"},outlined:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:"primary"},fullWidth:{type:Boolean,required:!1,default:!0},href:{type:String,required:!1,default:null},targetBlank:{type:Boolean,required:!1,default:null},submit:{type:Boolean,required:!1,default:null},loading:{type:Boolean,required:!1,default:null},icon:{type:String,required:!1,default:null},iconPosition:{type:String,required:!1,default:"left"},reset:{type:Boolean,required:!1,default:null},size:{type:String,required:!1,default:"medium"},pill:{type:Boolean,required:!1,default:!1}}};function q(e,t,u,s,i,d){const n=r("ui-button");return o(),a(n,{class:"btn--theme","v-bind":e.props,onClick:t[0]||(t[0]=$=>e.$emit("click"))},{default:c(()=>[m(e.$slots,"default")]),_:3},8,["v-bind"])}const S=l(B,[["render",q]]);export{S as B,b as I};
