import{_ as k,z as d,N as L,aL as B,a as y,W as S}from"./index.73ff6715.js";import{B as D,c5 as v,j as f,a1 as o,D as n,F as w,w as P,a2 as u,ad as m,L as C,ab as E,u as r}from"./vendor.bf608252.js";import{c as T,u as F}from"./index.b0a98353.js";import I from"./SessionTimeoutLogin.c8275681.js";import"./index.c28c833d.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.a32936cd.js";/* empty css               *//* empty css               */import"./lock.8a384e03.js";import"./Login.df26f8da.js";import"./LoginForm.46a7d736.js";/* empty css              *//* empty css               */import"./LoginFormTitle.e50a00ff.js";const x=D({name:"LayoutFeatures",components:{BackTop:v,LayoutLockPage:T(()=>d(()=>import("./index.c3747b8f.js"),["assets/index.c3747b8f.js","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/LockPage.09a3982b.js","assets/LockPage.74e81a43.css","assets/index.73ff6715.js","assets/index.007abcad.css","assets/lock.8a384e03.js","assets/header.d801b988.js"])),SettingDrawer:T(()=>d(()=>import("./index.0761bf49.js").then(function(e){return e.i}),["assets/index.0761bf49.js","assets/index.17eb4c41.css","assets/index.d66f51c2.js","assets/index.5c7227e9.css","assets/index.00780982.css","assets/index.73ff6715.js","assets/index.007abcad.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.b0a98353.js","assets/index.f8c87140.css","assets/index.5aa8aa0e.css","assets/index.c28c833d.js","assets/index.bdbca534.css","assets/useWindowSizeFn.011a8160.js","assets/useContentViewHeight.a32936cd.js","assets/lock.8a384e03.js"])),SessionTimeoutLogin:I},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:c,getFullContent:g}=L(),_=B(),{prefixCls:l}=y("setting-drawer-feature"),{getShowHeader:s}=F(),a=f(()=>_.getSessionTimeout),i=f(()=>{if(!r(p))return!1;const t=r(c);return t===S.AUTO?!r(s)||r(g):t===S.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:i,prefixCls:l,getIsSessionTimeout:a}}});function O(e,p,c,g,_,l){const s=o("LayoutLockPage"),a=o("BackTop"),i=o("SettingDrawer"),t=o("SessionTimeoutLogin");return n(),w(E,null,[P(s),e.getUseOpenBackTop?(n(),u(a,{key:0,target:e.getTarget},null,8,["target"])):m("",!0),e.getIsFixedSettingDrawer?(n(),u(i,{key:1,class:C(e.prefixCls)},null,8,["class"])):m("",!0),e.getIsSessionTimeout?(n(),u(t,{key:2})):m("",!0)],64)}var J=k(x,[["render",O]]);export{J as default};
