exports.id=192,exports.ids=[192],exports.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},6118:e=>{e.exports={btn:"Button_btn__hjy7w",btnPrimary:"Button_btnPrimary__vpVeT",btnOutline:"Button_btnOutline__iHwjK",btnAerosol:"Button_btnAerosol__jn4to",btnBattery:"Button_btnBattery___d08M",btnSubmit:"Button_btnSubmit__PlKuY",btnLearn:"Button_btnLearn__saVMO",btnMedium:"Button_btnMedium__sUL0b",btnLarge:"Button_btnLarge__jw3U_",btnExtralarge:"Button_btnExtralarge__NcUYe"}},345:e=>{e.exports={cfdContainer:"page_cfdContainer__nVqGk",cfd:"page_cfd__bsOIf",imageDesc:"page_imageDesc__hBVpr",managementOthers:"page_managementOthers__PS_LG",safetyImages:"page_safetyImages__4Y0T_",managementOthersImagesLeft:"page_managementOthersImagesLeft__ZXGNd",managementOthersImagesRight:"page_managementOthersImagesRight__xdc3k",managementOthersImagesLeftTitle:"page_managementOthersImagesLeftTitle__R0T_0",managementOthersImagesRightTitle:"page_managementOthersImagesRightTitle__5l7ox",batteryButton:"page_batteryButton__JfS_B"}},8864:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return l},noSSR:function(){return o}});let n=a(167),r=a(997);a(6689);let i=n._(a(4830));function s(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){delete t.webpack,delete t.modules;let a=t.loading;return()=>(0,r.jsx)(a,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function l(e,t){let a=i.default,n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let r=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?a({...n,loader:()=>null!=r?r().then(s):Promise.resolve(s(()=>null))}):(delete n.webpack,delete n.modules,o(a,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6394:(e,t,a)=>{"use strict";a.d(t,{z:()=>d});var n=a(997);a(6689);var r=a(6118),i=a.n(r),s=a(6570);let o=["btnPrimary","btnOutline","btnTest","btnAerosol","btnBattery","btnSubmit","btnLearn"],l=["btnMedium","btnLarge","btnExtralarge"],c={aerosol:"/aerocapture",contact:"/contact-us",client:"/clients",dustMitigation:"/dust-mitigation",concentration:"/aerosol-concentration",batterythermal:"/battery-thermal-management",batterythermaldetection:"/battery-thermal-runaway-detection-prevention",batterysafety:"/batterysafety",Morphology:"/morphology-characterization-optical-extinction-spectroscopy",Polarized:"/polarized-light-scattering",SPS:"/sedimentation-based-particle-sizing",Optical:"/optical-instrumentation",electro:"/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field",facility:"/facilities"},d=({children:e,type:t,onClick:a,buttonStyle:r,buttonSize:d,buttonType:m})=>{let u=o.includes(r)?r:o[0],h=l.includes(d)?d:l[0],f=c[m]?c[m]:c.contact;return n.jsx(s.Z,{to:f,children:n.jsx("button",{className:`${i().btn} ${i()[u]} ${i()[h]}`,type:t,onClick:e=>{a&&a(e)},children:e})})}},6570:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(997);a(6689);var r=a(4661);let i=({to:e,children:t,...a})=>{let i=e.startsWith("http")||e.startsWith("mailto:")||e.startsWith("tel:"),s=e=>{a.onClick&&a.onClick(e),i||setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},100)};if(i)return n.jsx("a",{href:e,...a,onClick:s,children:t});let o=e.startsWith("/")?e:`/${e}`;return n.jsx(r.Link,{to:o,...a,onClick:s,children:t})}},8099:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(997);a(6689);let r=()=>n.jsx("div",{style:{backgroundColor:"#FF4E0D",width:"100%",height:"5px"}})},2863:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(997);a(6689);var r=a(8099),i=a(345),s=a.n(i),o=a(6570),l=a(6394);let c=function(){return(0,n.jsxs)("div",{className:s().cfdContainer,children:[(0,n.jsxs)("div",{className:s().cfd,children:[n.jsx("h1",{children:"CFD Simulations for Thermal Management in a 16-Cell Battery Module"}),n.jsx("p",{children:"Dr. Ankur Jain from the University of Texas at Arlington performed CFD simulations with ANSYS to examine the effectiveness of our thermal management method. We considered a 16-cell battery module made from 18650 cells arranged in a 4 \xd7 4 pattern as shown in the figure below. We assumed that the liquid coolant flows counter-current at 0.4 L/s through the channels above and below the cells. If the cells support a load that draws power from the battery at a 1-C discharge rate, this battery module generates 10 W of heat due to resistive heating."}),n.jsx("p",{children:"Simulation results plotted in the figure below show a peak temperature differential of 2\xb0C in the cells (that is much lower than the 5\xb0C recommended by the Department of Energy for transportation batteries), while the coolant heats up by ~0.006\xb0C from the channel inlet to the outlet due to heat transfer from the cells. We calculated a heat transfer coefficient (h) of ~160 W/m2K for each cell in this system. Therefore, our simple heat exchanger design is adequate to extract the heat released by the battery. It is overdesigned, and the size/coolant flow rate can be reduced further to reduce the size and pumping power needed for thermal management of battery module."})]}),n.jsx(r.Z,{}),(0,n.jsxs)("div",{className:s().imageDesc,children:[n.jsx("img",{src:"/images/thermalbattery.png",alt:"batterysecond",height:"100%"}),n.jsx("p",{children:"Results from numerical simulations of the temperature distribution in the 16-cell battery module discharging at 1-C rate due to the coolant flowing through the channels above and below the cells."})]}),(0,n.jsxs)("p",{children:["The liquid heat exchanger can similarly heat the cells in the battery during cold weather operation. Maintaining the battery pack within an optimal temperature window ensures excellent performance, minimal energy loss, and minimal degradation (which in turn leads to long cycle life). The thermal management system can be implemented alone or on combination with the ",n.jsx(o.Z,{to:"/battery-thermal-runaway-detection-prevention",children:"thermal runaway detection and prevention technology"}),"."]}),(0,n.jsxs)("p",{children:["Our technology can improve the battery performance in any application that relies on batteries for energy storage and reuse. Examples include the vertical takeoff and landing systems with electric propulsion (eVTOL), electric vehicles (EVs), electric trucks, electric buses, battery energy storage systems (BESS) for residential and electric grid energy systems, aircraft, drones, micromobility systems (including Ebikes and scooters), medical devices, and power tools. We can customize the thermal management system to client battery pack design. For additional information contact us at ",n.jsx(o.Z,{to:"mailto:office@analyticalscientificproducts.com",children:"office@analyticalscientificproducts.com"}),"."]}),(0,n.jsxs)("div",{className:s().managementOthers,children:[n.jsx("h1",{children:"Other Topics"}),(0,n.jsxs)("div",{className:s().safetyImages,children:[(0,n.jsxs)("div",{className:s().managementOthersImagesLeft,children:[n.jsx("div",{className:s().managementOthersImagesLeftTitle,children:n.jsx("h1",{children:"Battery Safety"})}),n.jsx("div",{className:s().batteryButton,children:n.jsx(l.z,{buttonSize:"btnLarge",buttonStyle:"btnBattery",buttonType:"batterysafety",children:"View"})})]}),(0,n.jsxs)("div",{className:s().managementOthersImagesRight,children:[n.jsx("div",{className:s().managementOthersImagesRightTitle,children:n.jsx("h1",{children:"Battery Thermal Runaway Detection and Prevention"})}),n.jsx("div",{className:s().batteryButton,children:n.jsx(l.z,{buttonStyle:"btnBattery",buttonSize:"btnLarge",buttonType:"batterythermaldetection",children:"View"})})]})]})]})]})}},9413:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(997);a(5833),a(8363);var r=a(6689),i=a(5152);let s=a.n(i)()(()=>Promise.resolve().then(a.t.bind(a,4661,23)).then(e=>e.HashRouter),{loadableGenerated:{modules:["pages/_app.js -> react-router-dom"]},ssr:!1}),o=function({Component:e,pageProps:t}){let[a,i]=(0,r.useState)(!1);return a?n.jsx(s,{children:n.jsx("div",{className:"App",children:n.jsx(e,{...t})})}):null}},5833:()=>{},8363:()=>{},5244:(e,t)=>{"use strict";var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},4830:(e,t,a)=>{"use strict";e.exports=a(7093).vendored.contexts.Loadable},5152:(e,t,a)=>{e.exports=a(8864)}};