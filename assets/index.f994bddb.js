import{B as h,r as a,j as v,D as y,F as x,w,a6 as H,J as S,L as f,u as e,Y as u,aN as R}from"./vendor.bf608252.js";import{u as z}from"./useWindowSizeFn.011a8160.js";import{p as B,a as C,_ as L}from"./index.9c6ac897.js";import{a as k}from"./useContentViewHeight.b3c0e18f.js";const F=["src"],N=h({props:{frameSrc:B.string.def("")},setup(p){const n=a(!0),m=a(50),r=a(window.innerHeight),i=a(),{headerHeightRef:d}=k(),{prefixCls:o}=C("iframe-page");z(l,150,{immediate:!0});const c=v(()=>({height:`${e(r)}px`}));function l(){const s=e(i);if(!s)return;const t=d.value;m.value=t,r.value=window.innerHeight-t;const g=document.documentElement.clientHeight-t;s.style.height=`${g}px`}function _(){n.value=!1,l()}return(s,t)=>(y(),x("div",{class:f(e(o)),style:u(e(c))},[w(e(R),{spinning:n.value,size:"large",style:u(e(c))},{default:H(()=>[S("iframe",{src:p.frameSrc,class:f(`${e(o)}__main`),ref_key:"frameRef",ref:i,onLoad:_},null,42,F)]),_:1},8,["spinning","style"])],6))}});var W=L(N,[["__scopeId","data-v-3a022d43"]]);export{W as default};
