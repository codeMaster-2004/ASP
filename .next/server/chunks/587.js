exports.id=587,exports.ids=[587],exports.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},6118:e=>{e.exports={btn:"Button_btn__hjy7w",btnPrimary:"Button_btnPrimary__vpVeT",btnOutline:"Button_btnOutline__iHwjK",btnAerosol:"Button_btnAerosol__jn4to",btnBattery:"Button_btnBattery___d08M",btnSubmit:"Button_btnSubmit__PlKuY",btnLearn:"Button_btnLearn__saVMO",btnMedium:"Button_btnMedium__sUL0b",btnLarge:"Button_btnLarge__jw3U_",btnExtralarge:"Button_btnExtralarge__NcUYe"}},8057:e=>{e.exports={batteryBotContainer:"page_batteryBotContainer__XzDvn",titleTextBat:"page_titleTextBat__Y3T_i",batterySeparator:"page_batterySeparator__j1Yyh",batteryBottomText:"page_batteryBottomText__JE2Nr",batteryOthers:"page_batteryOthers__ARxFF",safetyImages:"page_safetyImages__cOpDE",safetyImagesLeft:"page_safetyImagesLeft___aaha",safetyImagesRight:"page_safetyImagesRight__VM4vW",batteryCardTitleManagement:"page_batteryCardTitleManagement__TnWPv",batteryCardTitleDetection:"page_batteryCardTitleDetection__QsCFh",batteryButton:"page_batteryButton__0sARO",btnMobile:"page_btnMobile__59CgK"}},8864:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return s},noSSR:function(){return l}});let n=a(167),r=a(997);a(6689);let i=n._(a(4830));function o(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){delete t.webpack,delete t.modules;let a=t.loading;return()=>(0,r.jsx)(a,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function s(e,t){let a=i.default,n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let r=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?a({...n,loader:()=>null!=r?r().then(o):Promise.resolve(o(()=>null))}):(delete n.webpack,delete n.modules,l(a,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6394:(e,t,a)=>{"use strict";a.d(t,{z:()=>d});var n=a(997);a(6689);var r=a(6118),i=a.n(r),o=a(6570);let l=["btnPrimary","btnOutline","btnTest","btnAerosol","btnBattery","btnSubmit","btnLearn"],s=["btnMedium","btnLarge","btnExtralarge"],c={aerosol:"/aerocapture",contact:"/contact-us",client:"/clients",dustMitigation:"/dust-mitigation",concentration:"/aerosol-concentration",batterythermal:"/battery-thermal-management",batterythermaldetection:"/battery-thermal-runaway-detection-prevention",batterysafety:"/batterysafety",Morphology:"/morphology-characterization-optical-extinction-spectroscopy",Polarized:"/polarized-light-scattering",SPS:"/sedimentation-based-particle-sizing",Optical:"/optical-instrumentation",electro:"/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field",facility:"/facilities"},d=({children:e,type:t,onClick:a,buttonStyle:r,buttonSize:d,buttonType:u})=>{let b=l.includes(r)?r:l[0],y=s.includes(d)?d:s[0],h=c[u]?c[u]:c.contact;return n.jsx(o.Z,{to:h,children:n.jsx("button",{className:`${i().btn} ${i()[b]} ${i()[y]}`,type:t,onClick:e=>{a&&a(e)},children:e})})}},6570:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(997);a(6689);var r=a(4661);let i=({to:e,children:t,...a})=>{let i=e.startsWith("http")||e.startsWith("mailto:")||e.startsWith("tel:"),o=e=>{a.onClick&&a.onClick(e),i||setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},100)};if(i)return n.jsx("a",{href:e,...a,onClick:o,children:t});let l=e.startsWith("/")?e:`/${e}`;return n.jsx(r.Link,{to:l,...a,onClick:o,children:t})}},8099:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(997);a(6689);let r=()=>n.jsx("div",{style:{backgroundColor:"#FF4E0D",width:"100%",height:"5px"}})},7146:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(997);a(6689);var r=a(6394),i=a(8057),o=a.n(i),l=a(6570),s=a(8099);let c=function(){return(0,n.jsxs)("div",{className:o().batteryBotContainer,children:[(0,n.jsxs)("div",{className:o().titleTextBat,children:[n.jsx("p",{children:"Lithium-ion batteries are increasingly being used in several applications like electric vehicles (EVs), aircraft, stationary battery energy storage systems (BESS), micro mobility devices, medical devices, power tools and electronics. When maintained within an optimal temperature window, these batteries provide exceptional energy storage capacity and performance. Abnormal deviations from this range cause the battery to deteriorate and may even cause it to fail irreversibly and catch fire."}),n.jsx(s.Z,{})]}),n.jsx("img",{src:"/images/batterysafetybottom.png",alt:"batterysafety",width:"100%",height:"100%"}),(0,n.jsxs)("div",{className:o().batteryBottomText,children:[n.jsx("p",{children:"Large battery packs for power intensive applications are constructed by connecting a large number of smaller individual cells. Thermal runaway in one cell can generate and discharge enough energy to propagate the failure throughout the battery pack exposing the entire system to fire. ASP developed a patent-pending cell-agnostic technology that provides several key functions including:"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[n.jsx(l.Z,{to:"/battery-thermal-management",children:"Thermal management of the battery pack"})," ensuring that each cell remains within the optimal temperature window during routine operation."]}),(0,n.jsxs)("li",{children:[n.jsx(l.Z,{to:"/battery-thermal-runaway-detection-prevention",children:"Passive and on-demand thermal runaway detection and activation of thermal runaway prevention"})," system that addresses the problem at the root cause."]}),(0,n.jsxs)("li",{children:[n.jsx(l.Z,{to:"/battery-thermal-runaway-detection-prevention",children:"Prevention of thermal runaway and fire propagation"})," from the failed cell to the neighboring cells as well as prevention of fire propagation in the battery pack."]})]})]}),(0,n.jsxs)("div",{className:o().batteryOthers,children:[n.jsx("h1",{children:"Other Topics:"}),(0,n.jsxs)("div",{className:o().safetyImages,children:[(0,n.jsxs)("div",{className:o().safetyImagesLeft,children:[n.jsx("div",{className:o().batteryCardTitleManagement,children:n.jsx("h1",{children:"Battery Thermal Management"})}),n.jsx("div",{className:o().batteryButton,children:n.jsx(r.z,{buttonStyle:"btnBattery",buttonSize:"btnLarge",buttonType:"batterythermal",children:"View"})})]}),(0,n.jsxs)("div",{className:o().safetyImagesRight,children:[n.jsx("div",{className:o().batteryCardTitleDetection,children:n.jsx("h1",{children:"Battery Thermal Runaway Detection and Prevention"})}),n.jsx("div",{className:o().batteryButton,children:n.jsx(r.z,{buttonStyle:"btnBattery",buttonSize:"btnLarge",buttonType:"batterythermaldetection",children:"View"})})]})]})]})]})}},9413:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(997);a(5833),a(8363);var r=a(6689),i=a(5152);let o=a.n(i)()(()=>Promise.resolve().then(a.t.bind(a,4661,23)).then(e=>e.HashRouter),{loadableGenerated:{modules:["pages/_app.js -> react-router-dom"]},ssr:!1}),l=function({Component:e,pageProps:t}){let[a,i]=(0,r.useState)(!1);return a?n.jsx(o,{children:n.jsx("div",{className:"App",children:n.jsx(e,{...t})})}):null}},5833:()=>{},8363:()=>{},5244:(e,t)=>{"use strict";var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},4830:(e,t,a)=>{"use strict";e.exports=a(7093).vendored.contexts.Loadable},5152:(e,t,a)=>{e.exports=a(8864)}};