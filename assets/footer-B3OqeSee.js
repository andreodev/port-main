import{r as o,I as H,a as U,b as Y,d as S,j as s,u as q,T as O}from"./index-mbuVxyM9.js";const Q=(...e)=>{console!=null&&console.warn&&(x(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},I={},v=(...e)=>{x(e[0])&&I[e[0]]||(x(e[0])&&(I[e[0]]=new Date),Q(...e))},G=(e,t)=>()=>{if(e.isInitialized)t();else{const a=()=>{setTimeout(()=>{e.off("initialized",a)},0),t()};e.on("initialized",a)}},J=(e,t,a)=>{e.loadNamespaces(t,G(e,a))},R=(e,t,a,r)=>{x(a)&&(a=[a]),a.forEach(l=>{e.options.ns.indexOf(l)<0&&e.options.ns.push(l)}),e.loadLanguages(t,G(e,r))},W=(e,t,a={})=>!t.languages||!t.languages.length?(v("i18n.languages were undefined or empty",t.languages),!0):t.hasLoadedNamespace(e,{lng:a.lng,precheck:(r,l)=>{var n;if(((n=a.bindI18n)==null?void 0:n.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!l(r.isLanguageChangingTo,e))return!1}}),x=e=>typeof e=="string",D=e=>typeof e=="object"&&e!==null,P=(e,t)=>{const a=o.useRef();return o.useEffect(()=>{a.current=e},[e,t]),a.current},K=(e,t,a,r)=>e.getFixedT(t,a,r),Z=(e,t,a,r)=>o.useCallback(K(e,t,a,r),[e,t,a,r]),B=(e,t={})=>{var E,T,L,F;const{i18n:a}=t,{i18n:r,defaultNS:l}=o.useContext(H)||{},n=a||r||S();if(n&&!n.reportNamespaces&&(n.reportNamespaces=new U),!n){v("You will need to pass in an i18next instance by using initReactI18next");const c=(f,m)=>x(m)?m:D(m)&&x(m.defaultValue)?m.defaultValue:Array.isArray(f)?f[f.length-1]:f,u=[c,{},!1];return u.t=c,u.i18n={},u.ready=!1,u}(E=n.options.react)!=null&&E.wait&&v("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const h={...Y(),...n.options.react,...t},{useSuspense:A,keyPrefix:b}=h;let i=l||((T=n.options)==null?void 0:T.defaultNS);i=x(i)?[i]:i||["translation"],(F=(L=n.reportNamespaces).addUsedNamespaces)==null||F.call(L,i);const d=(n.isInitialized||n.initializedStoreOnce)&&i.every(c=>W(c,n,h)),X=Z(n,t.lng||null,h.nsMode==="fallback"?i:i[0],b),y=()=>X,N=()=>K(n,t.lng||null,h.nsMode==="fallback"?i:i[0],b),[k,j]=o.useState(y);let w=i.join();t.lng&&(w=`${t.lng}${w}`);const C=P(w),g=o.useRef(!0);o.useEffect(()=>{const{bindI18n:c,bindI18nStore:u}=h;g.current=!0,!d&&!A&&(t.lng?R(n,t.lng,i,()=>{g.current&&j(N)}):J(n,i,()=>{g.current&&j(N)})),d&&C&&C!==w&&g.current&&j(N);const f=()=>{g.current&&j(N)};return c&&(n==null||n.on(c,f)),u&&(n==null||n.store.on(u,f)),()=>{g.current=!1,n&&(c==null||c.split(" ").forEach(m=>n.off(m,f))),u&&n&&u.split(" ").forEach(m=>n.store.off(m,f))}},[n,w]),o.useEffect(()=>{g.current&&d&&j(y)},[n,b,d]);const p=[k,n,d];if(p.t=k,p.i18n=n,p.ready=d,d||!d&&!A)return p;throw new Promise(c=>{t.lng?R(n,t.lng,i,()=>c()):J(n,i,()=>c())})},V="/assets/icons-CU_g3uNj.png",$="data:image/png;base64,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",_="/assets/github-DMbEH1hR.png",ee="/assets/linkedin-DvbM5N3o.png";function te(){const{t:e}=B(),t=[{src:$,alt:"Discord",link:e("https://discord.gg/7Xw79guB")},{src:_,alt:"GitHub",link:e("https://github.com/andreowdev")},{src:ee,alt:"LinkedIn",link:e("https://www.linkedin.com/in/andreo-henrique/")}];return s.jsx("div",{children:s.jsxs("section",{className:"flex flex-col items-center md:flex-row md:items-start md:justify-between",children:[s.jsx("div",{className:"flex-shrink-0 md:mb-0",children:s.jsx("img",{src:V,alt:"icon-andreo",className:"w-64 h-64 md:w-68 md:h-64 object-cover clip-icon hidden md:block"})}),s.jsxs("div",{className:"text-white flex-shrink-1 w-full md:w-[500px] text-center md:text-left",children:[s.jsx("h1",{className:"font-bold text-2xl md:text-4xl",children:e("Info.name")}),s.jsx("p",{className:"font-bold text-lg md:text-xl",children:e("Info.dev")}),s.jsx("p",{className:"",children:e("Info.ativo")}),s.jsx("hr",{className:"mt-2 mb-4 border-white w-full md:w-2/3 lg:w-full "}),s.jsx("div",{className:"flex flex-wrap justify-center md:justify-start space-x-4 overflow-x-auto mb-4",children:t.map((a,r)=>s.jsx("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"transition-transform duration-200 hover:scale-75",children:s.jsx("img",{src:a.src,alt:a.alt,className:"w-10 h-10 md:w-12 md:h-12 object-cover"})},r))}),s.jsx("nav",{className:"bg-opacity-30 rounded-lg",children:s.jsxs("ul",{className:"flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 justify-center md:justify-start",children:[s.jsx("li",{children:s.jsx("a",{href:"#/",className:"hover:underline",children:e("nav.about")})}),s.jsx("li",{children:s.jsx("a",{href:"#/projetos",className:"hover:underline",children:e("nav.projects")})}),s.jsx("li",{children:s.jsx("a",{href:"#/contato",className:"hover:underline",children:e("nav.contact")})})]})})]})]})})}const se="/assets/hora-DmJYn973.jpg";function ne(){const e=new Date().getHours().toString().padStart(2,"0"),t=new Date().getMinutes().toString().padStart(2,"0");return s.jsxs("div",{className:"relative flex items-start justify-start w-20 h-20 sm:w-32 sm:h-[7.2rem] lg:w-36 lg:h-28 mb-5 ml-2",children:[s.jsx("img",{src:se,alt:"Hora",className:"w-full h-full object-cover rounded-md"}),s.jsxs("div",{className:"absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white font-bold",children:[e,":",t," ",s.jsx("br",{})," in Manaus - AM Brazil"]})]})}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),z=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var re={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:l="",children:n,iconNode:h,...A},b)=>o.createElement("svg",{ref:b,...re,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:z("lucide",l),...A},[...h.map(([i,d])=>o.createElement(i,d)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(e,t)=>{const a=o.forwardRef(({className:r,...l},n)=>o.createElement(ie,{ref:n,iconNode:t,className:z(`lucide-${ae(e)}`,r),...l}));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ce=M("LightbulbOff",oe);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],de=M("Lightbulb",le);function ue(){const{toggleTheme:e}=q(),[t,a]=o.useState(!1);function r(){a(!t),e()}return s.jsx("div",{className:"relative w-20 h-20 sm:w-32 sm:h-[7.2rem] lg:w-36 lg:h-28 mb-5 mx-auto flex items-center justify-center",children:s.jsx("button",{onClick:r,className:"w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full transition bg-gray-200 hover:bg-gray-300","aria-label":"Alternar Luz",children:t?s.jsx(ce,{size:40,className:"text-gray-500"}):s.jsx(de,{size:40,className:"text-yellow-500"})})})}function fe(){const{i18n:e}=B(),t=a=>{e.changeLanguage(a)};return s.jsx("div",{className:"flex flex-col items-center space-y-2",children:s.jsxs("div",{className:"flex justify-end mb-4",children:[s.jsx("button",{className:`mr-2 px-4 py-2 rounded-md text-white transition-colors ${e.language==="pt"?"bg-blue-700":"bg-blue-500 hover:bg-blue-700"}`,onClick:()=>t("pt"),children:"🇧🇷 Português"}),s.jsx("button",{className:`px-4 py-2 rounded-md text-white transition-colors ${e.language==="en"?"bg-green-700":"bg-green-500 hover:bg-green-700"}`,onClick:()=>t("en"),children:"🇺🇸 English"})]})})}function he(){return s.jsx(O,{children:s.jsxs("div",{className:"header-final-container ",children:[s.jsx(fe,{}),s.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-center  ",children:[s.jsx("div",{className:" items-center justify-center md:justify-start bg-opacity-custom person-header",children:s.jsx(te,{})}),s.jsxs("div",{className:"md:items-end mt-4",children:[s.jsx(ne,{}),s.jsx(ue,{})]})]})]})})}function ge(){return s.jsx("footer",{className:" text-white py-4 text-center  bottom-0 w-full",children:s.jsxs("p",{className:"text-sm mb-2",children:["© ",new Date().getFullYear()," Andreo Henrique. Todos os direitos reservados."]})})}export{ge as F,he as H,B as u};
