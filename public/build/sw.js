if(!self.define){let s,e={};const r=(r,n)=>(r=new URL(r+".js",n).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(n,i)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>r(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.c920428b.css",revision:null},{url:"assets/app.ef00daf5.js",revision:null},{url:"assets/app.fb947a1c.css",revision:null},{url:"assets/Button.a663855d.js",revision:null},{url:"assets/Category.5def9731.js",revision:null},{url:"assets/Category.70e21abc.css",revision:null},{url:"assets/CategoryConfiguration.84bd8e41.css",revision:null},{url:"assets/CategoryConfiguration.f7a12b13.js",revision:null},{url:"assets/CategorySettings.638d4b79.js",revision:null},{url:"assets/CategorySettings.6fa84f8f.css",revision:null},{url:"assets/Dashboard.b672ea3c.css",revision:null},{url:"assets/Dashboard.e529b73e.js",revision:null},{url:"assets/DonutChart.06cc7ffd.js",revision:null},{url:"assets/DonutChart.fd1f89eb.css",revision:null},{url:"assets/Group.6d83458d.css",revision:null},{url:"assets/Group.6e2afc9e.js",revision:null},{url:"assets/Login.7d0e5662.js",revision:null},{url:"assets/Login.e4760341.css",revision:null},{url:"assets/Seo.a8a9235e.css",revision:null},{url:"assets/Seo.e21f1763.js",revision:null},{url:"assets/Settings.28f147a3.css",revision:null},{url:"assets/Settings.7b6b6056.js",revision:null},{url:"registerSW.js",revision:"2d094791c49e920331981a2d203b8cdb"},{url:"manifest.webmanifest",revision:"ad22b322bd29196cb4343d83aa3c658c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
