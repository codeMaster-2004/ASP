(()=>{var e={};e.id=583,e.ids=[583,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},6938:e=>{e.exports={facilities:"page_facilities__Q6e_K",facilitiesContainer:"page_facilitiesContainer__75UYF",homeLink:"page_homeLink__vcIYb",facilitiesContainerAfterText:"page_facilitiesContainerAfterText__GNVqD",particleCharacter:"page_particleCharacter__xBlVN",aeroTesting:"page_aeroTesting__DuvKb",textAfterEquipment:"page_textAfterEquipment__m56bQ",acDc:"page_acDc__wBSTT",thermalTestingFacility:"page_thermalTestingFacility__lEabh",facilityLastText:"page_facilityLastText__cZADW",facilityImageFirstCollection:"page_facilityImageFirstCollection__xwerp",imagesCollection:"page_imagesCollection__w_k4d",imagesCollectionTwo:"page_imagesCollectionTwo__CyMYb"}},7461:(e,t,a)=>{"use strict";a.a(e,async(e,i)=>{try{a.r(t),a.d(t,{config:()=>f,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>h,reportWebVitals:()=>v,routeModule:()=>w,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>x});var r=a(7093),s=a(5244),n=a(1323),o=a(2899),l=a.n(o),c=a(3414),d=a(2134),u=e([c]);c=(u.then?(await u)():u)[0];let p=(0,n.l)(d,"default"),h=(0,n.l)(d,"getStaticProps"),m=(0,n.l)(d,"getStaticPaths"),g=(0,n.l)(d,"getServerSideProps"),f=(0,n.l)(d,"config"),v=(0,n.l)(d,"reportWebVitals"),x=(0,n.l)(d,"unstable_getStaticProps"),b=(0,n.l)(d,"unstable_getStaticPaths"),y=(0,n.l)(d,"unstable_getStaticParams"),_=(0,n.l)(d,"unstable_getServerProps"),j=(0,n.l)(d,"unstable_getServerSideProps"),w=new r.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/Products&Facilities/Facilities/page",pathname:"/Products&Facilities/Facilities/page",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:d});i()}catch(e){i(e)}})},2011:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var i=a(997);a(6689);var r=a(4661);let s=({to:e,children:t,...a})=>{let s=e.startsWith("http")||e.startsWith("mailto:")||e.startsWith("tel:"),n=e=>{a.onClick&&a.onClick(e),s||setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},100)};if(s)return i.jsx("a",{href:e,...a,onClick:n,children:t});let o=e.startsWith("/")?e:`/${e}`;return i.jsx(r.Link,{to:o,...a,onClick:n,children:t})}},290:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var i=a(997);a(6689);let r=()=>i.jsx("div",{style:{backgroundColor:"#FF4E0D",width:"100%",height:"5px"}})},8864:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return l},noSSR:function(){return o}});let i=a(167),r=a(997);a(6689);let s=i._(a(4830));function n(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){delete t.webpack,delete t.modules;let a=t.loading;return()=>(0,r.jsx)(a,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function l(e,t){let a=s.default,i={loading:e=>{let{error:t,isLoading:a,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e});let r=(i={...i,...t}).loader;return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?a({...i,loader:()=>null!=r?r().then(n):Promise.resolve(n(()=>null))}):(delete i.webpack,delete i.modules,o(a,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2134:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var i=a(997);a(6689);var r=a(6938),s=a.n(r),n=a(2011),o=a(290);let l=function(){return i.jsx("div",{className:s().facilities,children:(0,i.jsxs)("div",{className:s().facilitiesContainer,children:[i.jsx("a",{href:"/ASP",className:s().homeLink,children:"Home"}),i.jsx("h1",{children:"Facilities and Equipment"}),(0,i.jsxs)("div",{className:s().facilitiesContainerAfterText,children:[i.jsx("p",{children:"Our vision is to develop simple and innovative solutions to complex problems plaguing the industry currently by leveraging on our senior staff members' vast domain expertise. In support of this vision, our strategy has been to develop/acquire niche software resources and build/purchase one-of-a-kind test equipment in-house, and outsource routine measurements, hazardous/one-off tests involving expensive equipment to our partner organizations."}),i.jsx("p",{children:"We have strategic partnerships with universities, national labs, and government facilities where we can access such one-of-a-kind equipment and test capabilities. A partial list of the equipment and instrumentation that we have in-house is provided below."})]}),(0,i.jsxs)("div",{className:s().particleCharacter,children:[i.jsx("h1",{children:"Fine Particle Characterization"}),i.jsx("p",{children:"We have a prototype of the Triple-S instrument developed for morphology characterization of spherical, cylindrical, ellipsoidal, and platelet shaped nanoparticles based on polarized light scattering. We have several well characterized nanoparticle samples including the NIST certified polystyrene particle size standards that can be used to calibrate/validate particle sizing instrumentation. In addition, we have a functional wet chemistry lab consisting of glassware, dispersion aids, micropipettes, sonicator, autoclave, and a vortexer that can be used to prepare nanoparticle suspensions."}),i.jsx("p",{children:"Large battery packs for power intensive applications are constructed by connecting a large number of smaller individual cells. Thermal runaway in one cell can generate and discharge enough energy to propagate the failure throughout the battery pack exposing the entire system to fire. ASP developed a patent-pending cell-agnostic technology that provides several key functions including:"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[i.jsx(n.Z,{to:"/battery-thermal-management",children:"Thermal management of the battery pack"})," ensuring that each cell remains within the optimal temperature window during routine operation."]}),(0,i.jsxs)("li",{children:[i.jsx(n.Z,{to:"/battery-thermal-runaway-detection-prevention",children:"Passive and on-demand thermal runaway detection and activation of thermal runaway prevention"})," system that addresses the problem at the root cause."]}),(0,i.jsxs)("li",{children:[i.jsx(n.Z,{to:"/battery-thermal-runaway-detection-prevention",children:"Prevention of thermal runaway and fire propagation"})," from the failed cell to the neighboring cells as well as prevention of fire propagation in the battery pack."]})]})]}),i.jsx(o.Z,{}),(0,i.jsxs)("div",{className:s().facilityImageFirstCollection,children:[i.jsx("img",{src:"./images/Machine.png",alt:"products main",width:"48.3%",height:"45%"}),i.jsx("img",{src:"./images/dabbalobokka.png",alt:"products main",width:"48.3%",height:"100%"})]}),(0,i.jsxs)("div",{className:s().aeroTesting,children:[i.jsx("h1",{children:"Aerosol Testing"}),i.jsx("p",{children:"We have an instrumented portable flow through dust cloud chamber equipped with dust aerosolizers, a flowmeter, and dust concentration analyzers to test the performance of dust filters. This system is configured to operate at atmospheric pressure. Efforts are currently under way to add the capability to test this system in vacuum. We have several types of dust simulants including size segregated Talc, Martian and Lunar surface dust simulants."})]}),i.jsx(o.Z,{}),i.jsx("img",{src:"./images/equipmentshowcase.png",alt:"products main",width:"100%",height:"100%"}),i.jsx("p",{className:s().textAfterEquipment,children:"We have a high efficiency air compressor and a vacuum pump that can be integrated into the aerosol test apparatus in the future."}),(0,i.jsxs)("div",{className:s().acDc,children:[i.jsx("h1",{children:"High Voltage DC/AC Power Supplies"}),i.jsx("p",{children:"We have an assortment of power supplies from third party vendors including: (1) a Keithley high voltage DC power supply from Tektronix that can provide voltages up to 5 kV, (2) a Matsusada function generator that can generate sine, square and triangular waves with amplitudes up to 10 V and frequencies up to several MHz, and (3) a Matsusada high voltage amplifier that can generate amplified voltages up to 10,000 V."})]}),i.jsx(o.Z,{}),i.jsx("div",{className:s().imagesCollection,children:i.jsx("img",{src:"./images/facility-collection.png",alt:"",width:"100%",height:"100%"})}),(0,i.jsxs)("div",{className:s().thermalTestingFacility,children:[i.jsx("h1",{children:"Thermal Testing"}),i.jsx("p",{children:"We have a temperature-controlled oven that can be used to subject the Li ion cells to well defined temperature-time histories to simulate thermal abuse. We also have an assortment of heating tapes, heating cartridges, thermocouples and readouts to accomplish the same."})]}),i.jsx(o.Z,{}),(0,i.jsxs)("div",{className:s().imagesCollectionTwo,children:[i.jsx("img",{src:"./images/tisAfridge.png",alt:"",width:"49.34%",height:"100%"}),i.jsx("img",{src:"./images/notafridge.png",alt:"",width:"49.34%",height:"100%"})]}),i.jsx("p",{className:s().facilityLastText,children:"We have a functional wet chemistry lab equipped with sonicators, vortexer, autoclave, precision pipettes, high precision balance, hot plate, magnetic stirrer, temperature controller, pumps, flowmeters, compressed gas tanks, and power supplies. We also have several optical equipment including optical breadboards, optic rails, lasers, photometers, polarizers, analyzers, lenses, mirrors and beam splitters that can be used to build custom optical instrumentation."})]})})}},3414:(e,t,a)=>{"use strict";a.a(e,async(e,i)=>{try{a.r(t),a.d(t,{default:()=>h});var r=a(997);a(5800),a(5833),a(8363);var s=a(6689),n=a(5152),o=a.n(n),l=a(86),c=a(4563),d=a(303),u=e([l,c,d]);[l,c,d]=u.then?(await u)():u,l.config.autoAddCss=!1,l.library.add(c.fas,d.fab);let p=o()(()=>Promise.resolve().then(a.t.bind(a,4661,23)).then(e=>e.HashRouter),{loadableGenerated:{modules:["pages/_app.js -> react-router-dom"]},ssr:!1}),h=function({Component:e,pageProps:t}){let[a,i]=(0,s.useState)(!1);return a?r.jsx(p,{children:r.jsx("div",{className:"App",children:r.jsx(e,{...t})})}):null};i()}catch(e){i(e)}})},5800:()=>{},5833:()=>{},8363:()=>{},5244:(e,t)=>{"use strict";var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},4830:(e,t,a)=>{"use strict";e.exports=a(7093).vendored.contexts.Loadable},5152:(e,t,a)=>{e.exports=a(8864)},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},4661:e=>{"use strict";e.exports=require("react-router-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},86:e=>{"use strict";e.exports=import("@fortawesome/fontawesome-svg-core")},303:e=>{"use strict";e.exports=import("@fortawesome/free-brands-svg-icons")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[899],()=>a(7461));module.exports=i})();