(()=>{var e={};e.id=395,e.ids=[395,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4999:e=>{e.exports={btn:"Button_btn__ZhBdF",btnPrimary:"Button_btnPrimary___k8tx",btnOutline:"Button_btnOutline__E8XrF",btnAerosol:"Button_btnAerosol__5Y7NF",btnBattery:"Button_btnBattery__aX2Jo",btnSubmit:"Button_btnSubmit__b5ltK",btnLearn:"Button_btnLearn__ceVik",btnMedium:"Button_btnMedium__4kX8e",btnLarge:"Button_btnLarge__sMHaV",btnExtralarge:"Button_btnExtralarge__ILOhB"}},982:e=>{e.exports={electrodynamic:"page_electrodynamic__8nnIZ",electrodynamicContainer:"page_electrodynamicContainer__zBmta",orangeText:"page_orangeText__omHqO",textAfterBigField:"page_textAfterBigField__agYia",supplySystem:"page_supplySystem__i6ekB",fieldMitigationGraph:"page_fieldMitigationGraph__BAcVm",fieldAfterText:"page_fieldAfterText__8AHkJ",electroOthers:"page_electroOthers__EJnBi",electroOthersImages:"page_electroOthersImages__SENvN",electroOthersImagesLeft:"page_electroOthersImagesLeft__FXOIE",electroOthersImagesLeftTop:"page_electroOthersImagesLeftTop__1EoHz",electroOthersImagesLeftBottom:"page_electroOthersImagesLeftBottom__1K3Uk",electroOthersImagesRightTop:"page_electroOthersImagesRightTop__035Ab",electroOthersImagesLeftTopText:"page_electroOthersImagesLeftTopText__xxjts",electroOthersImagesLeftBottomText:"page_electroOthersImagesLeftBottomText__ETj2n",electroOthersImagesRightTopText:"page_electroOthersImagesRightTopText__K75Hp",electroOthersImagesLeftTopButton:"page_electroOthersImagesLeftTopButton__Vk7U4",electroOthersImagesLeftBottomButton:"page_electroOthersImagesLeftBottomButton__ltw_W",electroOthersImagesRight:"page_electroOthersImagesRight__imwq3",electroOthersImagesRightTopButton:"page_electroOthersImagesRightTopButton___kxIy"}},8374:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>f,default:()=>h,getServerSideProps:()=>p,getStaticPaths:()=>g,getStaticProps:()=>m,reportWebVitals:()=>_,routeModule:()=>O,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>b});var s=r(7093),o=r(5244),i=r(1323),n=r(2899),l=r.n(n),c=r(3414),d=r(7314),u=e([c]);c=(u.then?(await u)():u)[0];let h=(0,i.l)(d,"default"),m=(0,i.l)(d,"getStaticProps"),g=(0,i.l)(d,"getStaticPaths"),p=(0,i.l)(d,"getServerSideProps"),f=(0,i.l)(d,"config"),_=(0,i.l)(d,"reportWebVitals"),b=(0,i.l)(d,"unstable_getStaticProps"),x=(0,i.l)(d,"unstable_getStaticPaths"),y=(0,i.l)(d,"unstable_getStaticParams"),v=(0,i.l)(d,"unstable_getServerProps"),j=(0,i.l)(d,"unstable_getServerSideProps"),O=new s.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/AerosolCapture/ElectrodynamicField/page",pathname:"/AerosolCapture/ElectrodynamicField/page",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:d});a()}catch(e){a(e)}})},1780:(e,t,r)=>{"use strict";r.d(t,{z:()=>d});var a=r(997);r(6689);var s=r(4999),o=r.n(s),i=r(2011);let n=["btnPrimary","btnOutline","btnTest","btnAerosol","btnBattery","btnSubmit","btnLearn"],l=["btnMedium","btnLarge","btnExtralarge"],c={aerosol:"/aerocapture",contact:"/contact-us",client:"/clients",dustMitigation:"/dust-mitigation",concentration:"/aerosol-concentration",batterythermal:"/battery-thermal-management",batterythermaldetection:"/battery-thermal-runaway-detection-prevention",batterysafety:"/batterysafety",Morphology:"/morphology-characterization-optical-extinction-spectroscopy",Polarized:"/polarized-light-scattering",SPS:"/sedimentation-based-particle-sizing",Optical:"/optical-instrumentation",electro:"/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field",facility:"/facilities"},d=({children:e,type:t,onClick:r,buttonStyle:s,buttonSize:d,buttonType:u})=>{let h=n.includes(s)?s:n[0],m=l.includes(d)?d:l[0],g=c[u]?c[u]:c.contact;return a.jsx(i.Z,{to:g,children:a.jsx("button",{className:`${o().btn} ${o()[h]} ${o()[m]}`,type:t,onClick:e=>{r&&r(e)},children:e})})}},2011:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(997);r(6689);var s=r(4661);let o=({to:e,children:t,...r})=>{let o=e.startsWith("http")||e.startsWith("mailto:")||e.startsWith("tel:"),i=e=>{r.onClick&&r.onClick(e),o||setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},100)};if(o)return a.jsx("a",{href:e,...r,onClick:i,children:t});let n=e.startsWith("/")?e:`/${e}`;return a.jsx(s.Link,{to:n,...r,onClick:i,children:t})}},290:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(997);r(6689);let s=()=>a.jsx("div",{style:{backgroundColor:"#FF4E0D",width:"100%",height:"5px"}})},8864:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},noSSR:function(){return n}});let a=r(167),s=r(997);r(6689);let o=a._(r(4830));function i(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){delete t.webpack,delete t.modules;let r=t.loading;return()=>(0,s.jsx)(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function l(e,t){let r=o.default,a={loading:e=>{let{error:t,isLoading:r,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e});let s=(a={...a,...t}).loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?r({...a,loader:()=>null!=s?s().then(i):Promise.resolve(i(()=>null))}):(delete a.webpack,delete a.modules,n(r,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7314:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(997);r(6689),r(7518);var s=r(290),o=r(982),i=r.n(o),n=r(2011),l=r(1780);let c=function(){return a.jsx("div",{className:i().electrodynamic,children:(0,a.jsxs)("div",{className:i().electrodynamicContainer,children:[a.jsx(n.Z,{to:"/aerocapture",style:{textDecoration:"none"},children:a.jsx("p",{className:i().orangeText,children:"Aerosol Capture"})}),a.jsx("h1",{children:"Numerical Simulation of Electrodynamic Field"}),a.jsx("img",{src:"./images/electromain.png",alt:"main",width:"100%",height:"100%"}),(0,a.jsxs)("div",{className:i().textAfterBigField,children:[a.jsx("p",{children:"The effectiveness of our electrodynamic dust mitigation and aerosol capture devices depend strongly on the strength of the imposed electrical field near the conducting surface. We examined this through a combination of numerical computations and qualitative analysis."}),a.jsx("p",{children:"Dr. Keith Forward, Interim Associate Vice President of California State Polytechnic Institute and an expert in electrostatics, performed numerical computations with the COMSOL package to determine the electrical fields near the conductive wires that comprise our dust mitigation system."})]}),(0,a.jsxs)("div",{className:i().supplySystem,children:[a.jsx("h1",{children:"Electric Field Distribution in a High Voltage AC Power Supply System"}),a.jsx("p",{children:"Our device consists of two conductive surfaces out of which one (represented by the filled circles on the left side of figure below) is connected to a high voltage AC power supply and the other (represented by the open circles on the right side) is connected to ground. For an applied voltage of 1000 VAC, we calculated the field strength near the wires. The logarithm (base 10) of electric field strength obtained from COMSOL simulations is plotted versus radial (x-axis) and axial (y-axis) coordinates in the figure below. The field strength between the inner and outer surfaces is extremely high (106 to 107 V/m), as expected. The field strength decreases away from the conductive surfaces as we move towards the left of the surface connected to high voltage power supply."})]}),a.jsx(s.Z,{}),(0,a.jsxs)("div",{className:i().fieldMitigationGraph,children:[a.jsx("img",{src:"./images/logarithmicfieldstrength.png",alt:"logfields",width:"100%",height:"100%"}),a.jsx("p",{children:"Computed logarithmic (base 10) electrical field strength in the vicinity of inner and outer conductive wires near the ASP dust mitigation system."})]}),a.jsx("div",{className:i().fieldAfterText,children:a.jsx("p",{children:"A strong electrical field with a strength of 1.6\xd7105 V/cm exists immediately to the left of the left surface connected to high voltage. The field strength decreases from 1.6\xd7105 V/cm right at the left surface to ~5\xd7103 V/cm about 1 mm away from that surface and continues to decrease as we move further away. The above computational results clearly demonstrate that a finite electrical field strength exists near the conductive surfaces of our dust mitigation system. The concentrated electrical field in the vicinity of the conducting surface is adequate to affect the trajectory of the charged aerosol particles. The time varying electrodynamic field prevents the fine particles from punching through the gaps between the conductive wires."})}),(0,a.jsxs)("div",{className:i().electroOthers,children:[a.jsx("h1",{children:"Other Topics"}),(0,a.jsxs)("div",{className:i().electroOthersImages,children:[(0,a.jsxs)("div",{className:i().electroOthersImagesLeft,children:[(0,a.jsxs)("div",{className:i().electroOthersImagesLeftTop,children:[a.jsx("div",{className:i().electroOthersImagesLeftTopText,children:a.jsx("h1",{children:"Aerosol Separation and Capture"})}),a.jsx("div",{className:i().electroOthersImagesLeftTopButton,children:a.jsx(l.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"aerosol",children:"View"})})]}),(0,a.jsxs)("div",{className:i().electroOthersImagesLeftBottom,children:[a.jsx("div",{className:i().electroOthersImagesLeftBottomText,children:a.jsx("h1",{children:"Dust Mitigation"})}),a.jsx("div",{className:i().electroOthersImagesLeftBottomButton,children:a.jsx(l.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"dustMitigation",children:"View"})})]})]}),a.jsx("div",{className:i().electroOthersImagesRight,children:(0,a.jsxs)("div",{className:i().electroOthersImagesRightTop,children:[a.jsx("div",{className:i().electroOthersImagesRightTopText,children:a.jsx("h1",{children:"Aerosol Concentration"})}),a.jsx("div",{className:i().electroOthersImagesRightTopButton,children:a.jsx(l.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"concentration",children:"View"})})]})})]})]})]})})}},3414:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>m});var s=r(997);r(5800),r(5833),r(8363);var o=r(6689),i=r(5152),n=r.n(i),l=r(86),c=r(4563),d=r(303),u=e([l,c,d]);[l,c,d]=u.then?(await u)():u,l.config.autoAddCss=!1,l.library.add(c.fas,d.fab);let h=n()(()=>Promise.resolve().then(r.t.bind(r,4661,23)).then(e=>e.HashRouter),{loadableGenerated:{modules:["pages/_app.js -> react-router-dom"]},ssr:!1}),m=function({Component:e,pageProps:t}){let[r,a]=(0,o.useState)(!1);return r?s.jsx(h,{children:s.jsx("div",{className:"App",children:s.jsx(e,{...t})})}):null};a()}catch(e){a(e)}})},5800:()=>{},5833:()=>{},8363:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},4830:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.Loadable},5152:(e,t,r)=>{e.exports=r(8864)},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},4661:e=>{"use strict";e.exports=require("react-router-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},86:e=>{"use strict";e.exports=import("@fortawesome/fontawesome-svg-core")},303:e=>{"use strict";e.exports=import("@fortawesome/free-brands-svg-icons")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[899],()=>r(8374));module.exports=a})();