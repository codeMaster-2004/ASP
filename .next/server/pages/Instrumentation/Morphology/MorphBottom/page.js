(()=>{var e={};e.id=550,e.ids=[550,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,o){return o in t?t[o]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,o)):"function"==typeof t&&"default"===o?t:void 0}}})},4999:e=>{e.exports={btn:"Button_btn__ZhBdF",btnPrimary:"Button_btnPrimary___k8tx",btnOutline:"Button_btnOutline__E8XrF",btnAerosol:"Button_btnAerosol__5Y7NF",btnBattery:"Button_btnBattery__aX2Jo",btnSubmit:"Button_btnSubmit__b5ltK",btnLearn:"Button_btnLearn__ceVik",btnMedium:"Button_btnMedium__4kX8e",btnLarge:"Button_btnLarge__sMHaV",btnExtralarge:"Button_btnExtralarge__ILOhB"}},458:e=>{e.exports={morphBottomContainer:"page_morphBottomContainer__Ok3El",morphBottomAgglomeratedEffects:"page_morphBottomAgglomeratedEffects__VgPln",morphBottomAgglomeratedText:"page_morphBottomAgglomeratedText__OF7bL",cmpEffects:"page_cmpEffects__Pj4ts",morphBottomAgglomeratedEffectsImage:"page_morphBottomAgglomeratedEffectsImage__y6IR8",cmpEffectsImages:"page_cmpEffectsImages__gqq3i",nanoparticlesEffects:"page_nanoparticlesEffects__I1vPW",morphOthers:"page_morphOthers__9dJb7",morphOthersImages:"page_morphOthersImages__fpcTo",morphOthersImagesLeft:"page_morphOthersImagesLeft__fVczz",morphOthersImagesLeftTop:"page_morphOthersImagesLeftTop__2X0D3",morphOthersImagesLeftBottom:"page_morphOthersImagesLeftBottom__gyAoz",morphOthersImagesRightTop:"page_morphOthersImagesRightTop__QHQc6",morphOthersImagesRightBottom:"page_morphOthersImagesRightBottom__HWpNj",morphOthersImagesLeftTopText:"page_morphOthersImagesLeftTopText__5YVAz",morphOthersImagesLeftBottomText:"page_morphOthersImagesLeftBottomText__bwYir",morphOthersImagesRightTopText:"page_morphOthersImagesRightTopText__FrZR1",morphOthersImagesRightBottomText:"page_morphOthersImagesRightBottomText__CkTYr",morphOthersImagesLeftTopButton:"page_morphOthersImagesLeftTopButton__elLPV",morphOthersImagesLeftBottomButton:"page_morphOthersImagesLeftBottomButton__jT3GV",morphOthersImagesRight:"page_morphOthersImagesRight__0_a7l",morphOthersImagesRightTopButton:"page_morphOthersImagesRightTopButton__7_Mfl",morphOthersImagesRightBottomButton:"page_morphOthersImagesRightBottomButton__7F421"}},9791:(e,t,o)=>{"use strict";o.a(e,async(e,r)=>{try{o.r(t),o.d(t,{config:()=>f,default:()=>d,getServerSideProps:()=>g,getStaticPaths:()=>u,getStaticProps:()=>p,reportWebVitals:()=>b,routeModule:()=>O,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>_});var s=o(7093),a=o(5244),i=o(1323),n=o(2899),l=o.n(n),m=o(3414),c=o(3620),h=e([m]);m=(h.then?(await h)():h)[0];let d=(0,i.l)(c,"default"),p=(0,i.l)(c,"getStaticProps"),u=(0,i.l)(c,"getStaticPaths"),g=(0,i.l)(c,"getServerSideProps"),f=(0,i.l)(c,"config"),b=(0,i.l)(c,"reportWebVitals"),_=(0,i.l)(c,"unstable_getStaticProps"),x=(0,i.l)(c,"unstable_getStaticPaths"),y=(0,i.l)(c,"unstable_getStaticParams"),j=(0,i.l)(c,"unstable_getServerProps"),v=(0,i.l)(c,"unstable_getServerSideProps"),O=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/Instrumentation/Morphology/MorphBottom/page",pathname:"/Instrumentation/Morphology/MorphBottom/page",bundlePath:"",filename:""},components:{App:m.default,Document:l()},userland:c});r()}catch(e){r(e)}})},1780:(e,t,o)=>{"use strict";o.d(t,{z:()=>c});var r=o(997);o(6689);var s=o(4999),a=o.n(s),i=o(2011);let n=["btnPrimary","btnOutline","btnTest","btnAerosol","btnBattery","btnSubmit","btnLearn"],l=["btnMedium","btnLarge","btnExtralarge"],m={aerosol:"/aerocapture",contact:"/contact-us",client:"/clients",dustMitigation:"/dust-mitigation",concentration:"/aerosol-concentration",batterythermal:"/battery-thermal-management",batterythermaldetection:"/battery-thermal-runaway-detection-prevention",batterysafety:"/batterysafety",Morphology:"/morphology-characterization-optical-extinction-spectroscopy",Polarized:"/polarized-light-scattering",SPS:"/sedimentation-based-particle-sizing",Optical:"/optical-instrumentation",electro:"/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field",facility:"/facilities"},c=({children:e,type:t,onClick:o,buttonStyle:s,buttonSize:c,buttonType:h})=>{let d=n.includes(s)?s:n[0],p=l.includes(c)?c:l[0],u=m[h]?m[h]:m.contact;return r.jsx(i.Z,{to:u,children:r.jsx("button",{className:`${a().btn} ${a()[d]} ${a()[p]}`,type:t,onClick:e=>{o&&o(e)},children:e})})}},2011:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(997);o(6689);var s=o(4661);let a=({to:e,children:t,...o})=>{let a=e.startsWith("http")||e.startsWith("mailto:")||e.startsWith("tel:"),i=e=>{o.onClick&&o.onClick(e),a||setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},100)};if(a)return r.jsx("a",{href:e,...o,onClick:i,children:t});let n=e.startsWith("/")?e:`/${e}`;return r.jsx(s.Link,{to:n,...o,onClick:i,children:t})}},290:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(997);o(6689);let s=()=>r.jsx("div",{style:{backgroundColor:"#FF4E0D",width:"100%",height:"5px"}})},8864:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{default:function(){return l},noSSR:function(){return n}});let r=o(167),s=o(997);o(6689);let a=r._(o(4830));function i(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){delete t.webpack,delete t.modules;let o=t.loading;return()=>(0,s.jsx)(o,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function l(e,t){let o=a.default,r={loading:e=>{let{error:t,isLoading:o,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let s=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?o({...r,loader:()=>null!=s?s().then(i):Promise.resolve(i(()=>null))}):(delete r.webpack,delete r.modules,n(o,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3620:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var r=o(997);o(6689);var s=o(290),a=o(458),i=o.n(a),n=o(1780);let l=function(){return(0,r.jsxs)("div",{className:i().morphBottomContainer,children:[(0,r.jsxs)("div",{className:i().morphBottomAgglomeratedEffects,children:[r.jsx("h1",{children:"Effects of Sonication on Breaking Agglomerated Nanoparticles"}),r.jsx("p",{children:"Addition of surfactants and high intensity sonication are commonly used to break up agglomerated particles in various applications like chemical mechanical planarization (CMP). In order to examine this further, we measured the morphology of CMP slurry samples subjected to sonication. Sample results for silica CMP slurries are presented in the figure below. Here we present the equivalent spherical particle size distribution for simplicity."}),r.jsx("p",{children:"The virgin sample (without sonication) exhibited a particle size range of 80 to 300 nm with a mode of about 180 nm. 8 minutes of sonication reduced the particle size range to 50 to 280 nm with a bimodal distribution with modes of about 60 nm and 160 nm, while 15 minutes of sonication changed the distribution to trimodal with modes of 75 nm, 120 nm, and 225 nm. A closer examination of the three distributions suggests that an increase in sonication duration increases the proportion of smaller particles in the sample. This clearly shows that the nanoparticles do undergo agglomeration in silica CMP slurries and that sonication is an effective strategy to break up the agglomerates."})]}),r.jsx(s.Z,{}),(0,r.jsxs)("div",{className:i().morphBottomAgglomeratedEffectsImage,children:[r.jsx("img",{src:"./images/agloeffects.png",alt:"effects",width:"100%",height:"100%"}),r.jsx("p",{children:"Effect of sonication on breaking up the agglomerates to improve dispersion of silica nanoparticles."})]}),(0,r.jsxs)("div",{className:i().morphBottomAgglomeratedText,children:[r.jsx("p",{children:"Here we present the equivalent spherical particle size distribution for simplicity. The virgin sample (without sonication) exhibited a particle size range of 80 to 300 nm with a mode of about 180 nm. 8 minutes of sonication reduced the particle size range to 50 to 280 nm with a bimodal distribution with modes of about 60 nm and 160 nm, while 15 minutes of sonication changed the distribution to trimodal with modes of 75 nm, 120 nm, and 225 nm."}),r.jsx("p",{children:"A closer examination of the three distributions suggests that an increase in sonication duration increases the proportion of smaller particles in the sample. This clearly shows that the nanoparticles do undergo agglomeration in silica CMP slurries and that sonication is an effective strategy to break up the agglomerates."}),r.jsx("p",{children:"We performed a similar study on alumina CMP slurries. We measured the fractal dimension of the particles in the suspension after subjecting to sonication for different periods of time. The virgin sample (with no sonication) yielded a fractal dimension of 2.63. Intense sonication for 1 minute lowered the fractal dimension significantly to about 1.92. Additional sonication led to fractal dimensions in the range of 1.5 to 1.81."})]}),r.jsx(s.Z,{}),(0,r.jsxs)("div",{className:i().cmpEffectsImages,children:[r.jsx("img",{src:"./images/CMP.png",alt:"effects",width:"100%",height:"100%"}),r.jsx("p",{children:"Effect of sonication on the fractal dimension of alumina CMP slurries."})]}),(0,r.jsxs)("div",{className:i().cmpEffects,children:[r.jsx("p",{children:"In order to understand the implications of the above result, the size distribution of equivalent spheres in the CMP alumina suspension with no sonication and after 3 minutes of sonication are compared in the figure below. The virgin sample had some particles that were finer than 100 nm, but it also had noticeable amounts of particles in the size range of 500 to 1600 nm. 3 minutes of sonication broke up most of the larger particles which reduced the primary size range of particles to 90 – 250 nm."}),r.jsx("p",{children:"This clearly shows that sonication is effective in breaking up the agglomerated particles and in increasing the uniformity of particle sizes in the suspension."})]}),r.jsx(s.Z,{}),(0,r.jsxs)("div",{className:i().nanoparticlesEffects,children:[r.jsx("img",{src:"./images/particlesize.png",alt:"primaryparticlesize",width:"100%",height:"100%"}),r.jsx("p",{children:"Effect of sonication on reducing the particle size range of alumina nanoparticles."})]}),(0,r.jsxs)("div",{className:i().morphOthers,children:[r.jsx("h1",{children:"Other Topics"}),(0,r.jsxs)("div",{className:i().morphOthersImages,children:[(0,r.jsxs)("div",{className:i().morphOthersImagesLeft,children:[(0,r.jsxs)("div",{className:i().morphOthersImagesLeftTop,children:[r.jsx("div",{className:i().morphOthersImagesLeftTopText,children:r.jsx("h1",{children:"Aerosol Concentration"})}),r.jsx("div",{className:i().morphOthersImagesLeftTopButton,children:r.jsx(n.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"concentration",children:"View"})})]}),(0,r.jsxs)("div",{className:i().morphOthersImagesLeftBottom,children:[r.jsx("div",{className:i().morphOthersImagesLeftBottomText,children:r.jsx("h1",{children:"Polarized Light Scattering"})}),r.jsx("div",{className:i().morphOthersImagesLeftBottomButton,children:r.jsx(n.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"Polarized",children:"View"})})]})]}),(0,r.jsxs)("div",{className:i().morphOthersImagesRight,children:[(0,r.jsxs)("div",{className:i().morphOthersImagesRightTop,children:[r.jsx("div",{className:i().morphOthersImagesRightTopText,children:r.jsx("h1",{children:"Optical Instrumentation"})}),r.jsx("div",{className:i().morphOthersImagesRightTopButton,children:r.jsx(n.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"Optical",children:"View"})})]}),(0,r.jsxs)("div",{className:i().morphOthersImagesRightBottom,children:[r.jsx("div",{className:i().morphOthersImagesRightBottomText,children:r.jsx("h1",{children:"Sedimentation based particle sizing"})}),r.jsx("div",{className:i().morphOthersImagesRightBottomButton,children:r.jsx(n.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"SPS",children:"View"})})]})]})]})]})]})}},3414:(e,t,o)=>{"use strict";o.a(e,async(e,r)=>{try{o.r(t),o.d(t,{default:()=>p});var s=o(997);o(5800),o(5833),o(8363);var a=o(6689),i=o(5152),n=o.n(i),l=o(86),m=o(4563),c=o(303),h=e([l,m,c]);[l,m,c]=h.then?(await h)():h,l.config.autoAddCss=!1,l.library.add(m.fas,c.fab);let d=n()(()=>Promise.resolve().then(o.t.bind(o,4661,23)).then(e=>e.HashRouter),{loadableGenerated:{modules:["pages/_app.js -> react-router-dom"]},ssr:!1}),p=function({Component:e,pageProps:t}){let[o,r]=(0,a.useState)(!1);return o?s.jsx(d,{children:s.jsx("div",{className:"App",children:s.jsx(e,{...t})})}):null};r()}catch(e){r(e)}})},5800:()=>{},5833:()=>{},8363:()=>{},5244:(e,t)=>{"use strict";var o;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return o}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(o||(o={}))},4830:(e,t,o)=>{"use strict";e.exports=o(7093).vendored.contexts.Loadable},5152:(e,t,o)=>{e.exports=o(8864)},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},4661:e=>{"use strict";e.exports=require("react-router-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},86:e=>{"use strict";e.exports=import("@fortawesome/fontawesome-svg-core")},303:e=>{"use strict";e.exports=import("@fortawesome/free-brands-svg-icons")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[899],()=>o(9791));module.exports=r})();