(()=>{var e={};e.id=156,e.ids=[156,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},4999:e=>{e.exports={btn:"Button_btn__ZhBdF",btnPrimary:"Button_btnPrimary___k8tx",btnOutline:"Button_btnOutline__E8XrF",btnAerosol:"Button_btnAerosol__5Y7NF",btnBattery:"Button_btnBattery__aX2Jo",btnSubmit:"Button_btnSubmit__b5ltK",btnLearn:"Button_btnLearn__ceVik",btnMedium:"Button_btnMedium__4kX8e",btnLarge:"Button_btnLarge__sMHaV",btnExtralarge:"Button_btnExtralarge__ILOhB"}},2437:e=>{e.exports={sedimentation:"page_sedimentation__Q71oU",sedimentationContainer:"page_sedimentationContainer__qE3XS",orangeText:"page_orangeText___z_ID",sedimentationText:"page_sedimentationText__D33e6",sedimentationImages:"page_sedimentationImages__f3PMM",sedimentationOthers:"page_sedimentationOthers__TeFLv",sedimentationOthersImages:"page_sedimentationOthersImages__HtXJZ",sedimentationOthersImagesLeft:"page_sedimentationOthersImagesLeft__TTjlm",sedimentationOthersImagesLeftTop:"page_sedimentationOthersImagesLeftTop__YpXhG",sedimentationOthersImagesLeftBottom:"page_sedimentationOthersImagesLeftBottom__6JTcT",sedimentationOthersImagesRightTop:"page_sedimentationOthersImagesRightTop__OdVEU",sedimentationOthersImagesRightBottom:"page_sedimentationOthersImagesRightBottom__qcy6L",sedimentationOthersImagesLeftTopText:"page_sedimentationOthersImagesLeftTopText__QXvbw",sedimentationOthersImagesLeftBottomText:"page_sedimentationOthersImagesLeftBottomText__jHANg",sedimentationOthersImagesRightTopText:"page_sedimentationOthersImagesRightTopText__FMBo_",sedimentationOthersImagesRightBottomText:"page_sedimentationOthersImagesRightBottomText__12_Ah",sedimentationOthersImagesLeftTopButton:"page_sedimentationOthersImagesLeftTopButton__tm242",sedimentationOthersImagesLeftBottomButton:"page_sedimentationOthersImagesLeftBottomButton__EYrfk",sedimentationOthersImagesRight:"page_sedimentationOthersImagesRight___5ps2",sedimentationOthersImagesRightTopButton:"page_sedimentationOthersImagesRightTopButton__iHxCB",sedimentationOthersImagesRightBottomButton:"page_sedimentationOthersImagesRightBottomButton__qLkY_"}},8752:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.r(t),n.d(t,{config:()=>_,default:()=>u,getServerSideProps:()=>p,getStaticPaths:()=>g,getStaticProps:()=>h,reportWebVitals:()=>b,routeModule:()=>j,unstable_getServerProps:()=>O,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>f});var s=n(7093),a=n(5244),r=n(1323),o=n(2899),l=n.n(o),d=n(3414),m=n(7833),c=e([d]);d=(c.then?(await c)():c)[0];let u=(0,r.l)(m,"default"),h=(0,r.l)(m,"getStaticProps"),g=(0,r.l)(m,"getStaticPaths"),p=(0,r.l)(m,"getServerSideProps"),_=(0,r.l)(m,"config"),b=(0,r.l)(m,"reportWebVitals"),f=(0,r.l)(m,"unstable_getStaticProps"),x=(0,r.l)(m,"unstable_getStaticPaths"),y=(0,r.l)(m,"unstable_getStaticParams"),O=(0,r.l)(m,"unstable_getServerProps"),v=(0,r.l)(m,"unstable_getServerSideProps"),j=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/Instrumentation/Sedimentation/page",pathname:"/Instrumentation/Sedimentation/page",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:m});i()}catch(e){i(e)}})},1780:(e,t,n)=>{"use strict";n.d(t,{z:()=>m});var i=n(997);n(6689);var s=n(4999),a=n.n(s),r=n(2011);let o=["btnPrimary","btnOutline","btnTest","btnAerosol","btnBattery","btnSubmit","btnLearn"],l=["btnMedium","btnLarge","btnExtralarge"],d={aerosol:"/aerocapture",contact:"/contact-us",client:"/clients",dustMitigation:"/dust-mitigation",concentration:"/aerosol-concentration",batterythermal:"/battery-thermal-management",batterythermaldetection:"/battery-thermal-runaway-detection-prevention",batterysafety:"/batterysafety",Morphology:"/morphology-characterization-optical-extinction-spectroscopy",Polarized:"/polarized-light-scattering",SPS:"/sedimentation-based-particle-sizing",Optical:"/optical-instrumentation",electro:"/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field",facility:"/facilities"},m=({children:e,type:t,onClick:n,buttonStyle:s,buttonSize:m,buttonType:c})=>{let u=o.includes(s)?s:o[0],h=l.includes(m)?m:l[0],g=d[c]?d[c]:d.contact;return i.jsx(r.Z,{to:g,children:i.jsx("button",{className:`${a().btn} ${a()[u]} ${a()[h]}`,type:t,onClick:e=>{n&&n(e)},children:e})})}},2011:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(997);n(6689);var s=n(4661);let a=({to:e,children:t,...n})=>{let a=e.startsWith("http")||e.startsWith("mailto:")||e.startsWith("tel:"),r=e=>{n.onClick&&n.onClick(e),a||setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},100)};if(a)return i.jsx("a",{href:e,...n,onClick:r,children:t});let o=e.startsWith("/")?e:`/${e}`;return i.jsx(s.Link,{to:o,...n,onClick:r,children:t})}},290:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(997);n(6689);let s=()=>i.jsx("div",{style:{backgroundColor:"#FF4E0D",width:"100%",height:"5px"}})},8864:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},noSSR:function(){return o}});let i=n(167),s=n(997);n(6689);let a=i._(n(4830));function r(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){delete t.webpack,delete t.modules;let n=t.loading;return()=>(0,s.jsx)(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function l(e,t){let n=a.default,i={loading:e=>{let{error:t,isLoading:n,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e});let s=(i={...i,...t}).loader;return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?n({...i,loader:()=>null!=s?s().then(r):Promise.resolve(r(()=>null))}):(delete i.webpack,delete i.modules,o(n,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7833:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var i=n(997);n(6689);var s=n(2437),a=n.n(s),r=n(2011);n(7518);var o=n(290),l=n(1780);let d=function(){return i.jsx("div",{className:a().sedimentation,children:(0,i.jsxs)("div",{className:a().sedimentationContainer,children:[i.jsx(r.Z,{to:"./optical-instrumentation",style:{textDecoration:"none"},children:i.jsx("p",{className:a().orangeText,children:"Instrumentation"})}),i.jsx("h1",{children:"Sedimentation based Particle Sizing"}),i.jsx("img",{src:"./images/sedimentation.png",alt:"main",width:"100%",height:"100%"}),(0,i.jsxs)("div",{className:a().sedimentationText,children:[i.jsx("p",{children:"This technique combines temporal optical extinction measurements with gravitational sedimentation analysis to determine the size distribution of particles dispersed in an optically non-absorbing medium. We used a laser beam to illuminate the particle suspension and collected the transmitted light versus time data using a power meter. We increased the size of the laser beam by passing it through an arrangement of cylindrical lenses."}),i.jsx("p",{children:"We calculated the particle sizes for different gravitational sedimentation timescales using fluid mechanics and combined these with the measured optical extinction data to determine the particle size distribution in the sample. The particle size distributions from two separate measurements on a suspension of a commercial powder in water are presented in the figure below."})]}),i.jsx(o.Z,{}),(0,i.jsxs)("div",{className:a().sedimentationImages,children:[i.jsx("img",{src:"./images/particlediamteregraph.png",alt:"graph",width:"100%",height:"100%"}),i.jsx("p",{children:"Particle size measured by combining optical extinction measurements with gravitational sedimentation analysis."})]}),(0,i.jsxs)("div",{className:a().sedimentationOthers,children:[i.jsx("h1",{children:"Other Topics"}),(0,i.jsxs)("div",{className:a().sedimentationOthersImages,children:[(0,i.jsxs)("div",{className:a().sedimentationOthersImagesLeft,children:[(0,i.jsxs)("div",{className:a().sedimentationOthersImagesLeftTop,children:[i.jsx("div",{className:a().sedimentationOthersImagesLeftTopText,children:i.jsx("h1",{children:"Aerosol Concentration"})}),i.jsx("div",{className:a().sedimentationOthersImagesLeftTopButton,children:i.jsx(l.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"concentration",children:"View"})})]}),(0,i.jsxs)("div",{className:a().sedimentationOthersImagesLeftBottom,children:[i.jsx("div",{className:a().sedimentationOthersImagesLeftBottomText,children:i.jsx("h1",{children:"Morphology Characterization with Optical Extinction Spectroscopy"})}),i.jsx("div",{className:a().sedimentationOthersImagesLeftBottomButton,children:i.jsx(l.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"Morphology",children:"View"})})]})]}),(0,i.jsxs)("div",{className:a().sedimentationOthersImagesRight,children:[(0,i.jsxs)("div",{className:a().sedimentationOthersImagesRightTop,children:[i.jsx("div",{className:a().sedimentationOthersImagesRightTopText,children:i.jsx("h1",{children:"Optical Instrumentation"})}),i.jsx("div",{className:a().sedimentationOthersImagesRightTopButton,children:i.jsx(l.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"Optical",children:"View"})})]}),(0,i.jsxs)("div",{className:a().sedimentationOthersImagesRightBottom,children:[i.jsx("div",{className:a().sedimentationOthersImagesRightBottomText,children:i.jsx("h1",{children:"Polarized Light Scattering"})}),i.jsx("div",{className:a().sedimentationOthersImagesRightBottomButton,children:i.jsx(l.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"Polarized",children:"View"})})]})]})]})]})]})})}},3414:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.r(t),n.d(t,{default:()=>h});var s=n(997);n(5800),n(5833),n(8363);var a=n(6689),r=n(5152),o=n.n(r),l=n(86),d=n(4563),m=n(303),c=e([l,d,m]);[l,d,m]=c.then?(await c)():c,l.config.autoAddCss=!1,l.library.add(d.fas,m.fab);let u=o()(()=>Promise.resolve().then(n.t.bind(n,4661,23)).then(e=>e.HashRouter),{loadableGenerated:{modules:["pages/_app.js -> react-router-dom"]},ssr:!1}),h=function({Component:e,pageProps:t}){let[n,i]=(0,a.useState)(!1);return n?s.jsx(u,{children:s.jsx("div",{className:"App",children:s.jsx(e,{...t})})}):null};i()}catch(e){i(e)}})},5800:()=>{},5833:()=>{},8363:()=>{},5244:(e,t)=>{"use strict";var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},4830:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.Loadable},5152:(e,t,n)=>{e.exports=n(8864)},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},4661:e=>{"use strict";e.exports=require("react-router-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},86:e=>{"use strict";e.exports=import("@fortawesome/fontawesome-svg-core")},303:e=>{"use strict";e.exports=import("@fortawesome/free-brands-svg-icons")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),i=t.X(0,[899],()=>n(8752));module.exports=i})();