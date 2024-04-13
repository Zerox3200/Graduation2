"use strict";(self.webpackChunkcameraman=self.webpackChunkcameraman||[]).push([[985],{5985:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});var s=n(2791),a=n(1775),i=n(5705),l=n(286),r=n(4330),o=n(2187),c=n(3770),u=n(2202),h=n(1087),m=n(9829);var d=n(9848),f=n(5403),p=n(5956),x=n(8771);const g=(0,n(1395).X)((()=>void 0!==window.ScrollTimeline));class j{constructor(e){this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){const t=this.animations.map((t=>{if(!g()||!t.attachTimeline)return t.pause(),function(e,t){let n;const s=()=>{const{currentTime:s}=t,a=(null===s?0:s.value)/100;n!==a&&e(a),n=a};return x.Wi.update(s,!0),()=>(0,x.Pn)(s)}((e=>{t.time=t.duration*e}),e);t.attachTimeline(e)}));return()=>{t.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}var v=n(5206),y=n(2781),N=n(1716),w=n(6373);function b(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=(0,y.v)(e)?new N.e(t,{enableHardwareAcceleration:!1}):new w.W(t,{enableHardwareAcceleration:!0});n.mount(e),f.R.set(e,n)}var A=n(5144),k=n(272),C=n(1642),P=n(4792);function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(0,k.S)({keyframes:[0,t],...e}),s=Math.min((0,C.i)(n),C.E);return{type:"keyframes",ease:e=>n.next(s*e).value/t,duration:(0,P.X)(s)}}var S=n(2755),_=n(9899),M=n(7258),T=n(1453);function F(e,t,n,s){var a;return"number"===typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?n:null!==(a=s.get(t))&&void 0!==a?a:e}const J=(e,t,n)=>{const s=t-e;return((n-e)%s+s)%s+e};var D=n(2573);function Q(e,t){return(0,D.N)(e)?e[J(0,e.length,t)]:e}var E=n(3898),B=n(3478);function W(e,t,n,s,a,i){!function(e,t,n){for(let s=0;s<e.length;s++){const a=e[s];a.at>t&&a.at<n&&((0,E.cl)(e,a),s--)}}(e,a,i);for(let l=0;l<t.length;l++)e.push({value:t[l],at:(0,B.C)(a,i,s[l]),easing:Q(n,l)})}function O(e,t){return e.at===t.at?null===e.value?1:null===t.value?-1:0:e.at-t.at}const q="easeInOut";function z(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function V(e,t){return t[e]||(t[e]=[]),t[e]}function G(e){return Array.isArray(e)?e:[e]}function I(e,t){return e[t]?{...e,...e[t]}:{...e}}const L=e=>"number"===typeof e,U=e=>e.every(L);function Y(e,t,n,s){const a=(0,d.I)(e,s),i=a.length;(0,p.k)(Boolean(i),"No valid element provided.");const l=[];for(let r=0;r<i;r++){const e=a[r];f.R.has(e)||b(e);const s=f.R.get(e),o={...n};"function"===typeof o.delay&&(o.delay=o.delay(r,i)),l.push(...(0,v.w)(s,{...t,transition:o},{}))}return new j(l)}function H(e,t,n){const s=[],a=function(e){let{defaultTransition:t={},...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0;const a=t.duration||.3,i=new Map,l=new Map,r={},o=new Map;let c=0,u=0,h=0;for(let m=0;m<e.length;m++){const n=e[m];if("string"===typeof n){o.set(n,u);continue}if(!Array.isArray(n)){o.set(n.name,F(u,n.at,c,o));continue}let[i,f,p={}]=n;void 0!==p.at&&(u=F(u,p.at,c,o));let x=0;const g=function(e,n,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;const r=G(e),{delay:o=0,times:c=(0,S.Y)(r),type:m="keyframes",...d}=n;let{ease:f=t.ease||"easeOut",duration:p}=n;const g="function"===typeof o?o(i,l):o,j=r.length;if(j<=2&&"spring"===m){let e=100;if(2===j&&U(r)){const t=r[1]-r[0];e=Math.abs(t)}const t={...d};void 0!==p&&(t.duration=(0,P.w)(p));const n=R(t,e);f=n.ease,p=n.duration}null!==p&&void 0!==p||(p=a);const v=u+g,y=v+p;1===c.length&&0===c[0]&&(c[1]=1);const N=c.length-r.length;N>0&&(0,_.c)(c,N),1===r.length&&r.unshift(null),W(s,r,f,c,v,y),x=Math.max(g+p,x),h=Math.max(y,h)};if((0,T.i)(i))g(f,p,V("default",z(i,l)));else{const e=(0,d.I)(i,s,r),t=e.length;for(let n=0;n<t;n++){const s=z(e[n],l);for(const e in f)g(f[e],I(p,e),V(e,s),n,t)}}c=u,u+=x}return l.forEach(((e,s)=>{for(const a in e){const l=e[a];l.sort(O);const r=[],o=[],c=[];for(let e=0;e<l.length;e++){const{at:t,value:n,easing:s}=l[e];r.push(n),o.push((0,M.Y)(0,h,t)),c.push(s||"easeOut")}0!==o[0]&&(o.unshift(0),r.unshift(r[0]),c.unshift(q)),1!==o[o.length-1]&&(o.push(1),r.push(null)),i.has(s)||i.set(s,{keyframes:{},transition:{}});const u=i.get(s);u.keyframes[a]=r,u.transition[a]={...t,duration:h,ease:c,times:o,...n}}})),i}(e,t,n);return a.forEach(((e,t)=>{let n,{keyframes:a,transition:i}=e;n=(0,T.i)(t)?(0,A.D)(t,a.default,i.default):Y(t,a,i),s.push(n)})),new j(s)}const X=e=>function(t,n,s){let a;var i;return i=t,a=Array.isArray(i)&&Array.isArray(i[0])?H(t,n,e):function(e){return"object"===typeof e&&!Array.isArray(e)}(n)?Y(t,n,s,e):(0,A.D)(t,n,s),e&&e.animations.push(a),a};X();function K(){const e=(0,m.h)((()=>({current:null,animations:[]}))),t=(0,m.h)((()=>X(e)));var n;return n=()=>{e.animations.forEach((e=>e.stop()))},(0,s.useEffect)((()=>()=>n()),[]),[e,t]}var Z=n(184);function $(){const[e,t]=K(),[n,a]=(0,s.useState)(!0);return(0,Z.jsxs)("div",{className:"ProfilesComponent w-100",children:[(0,Z.jsxs)("div",{className:"ProfilesComponent_Title",children:[(0,Z.jsxs)("div",{className:"ProfilesComponent_Title_1 d-flex align-items-center flex-wrap column-gap-3 p-3",children:[(0,Z.jsx)("img",{src:c,alt:"...",loading:"lazy",className:"col-md-3"}),(0,Z.jsxs)("div",{className:"RatingAndName col-md-9 px-2",children:[(0,Z.jsx)("h1",{className:"h6",children:"John Doe"}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"col-md-6",children:[(0,Z.jsx)(u.QJe,{}),(0,Z.jsx)(u.QJe,{}),(0,Z.jsx)(u.QJe,{}),(0,Z.jsx)(u.QJe,{}),(0,Z.jsx)(u.QJe,{})]}),(0,Z.jsx)("span",{className:"col-md-3 fw-bold",children:"100%"})]})]})]}),(0,Z.jsxs)("div",{className:"ProfilesComponent_Title_2 row w-100 justify-content-between align-items-center px-3",children:[(0,Z.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias tempore impedit maxime nesciunt. Sapiente, fuga, ipsam quo ab ut consectetur incidunt tenetur veritatis fugiat quam pariatur nostrum culpa sint."}),(0,Z.jsx)("span",{className:n?null:"Look",onClick:()=>(a((e=>!e)),void t(e.current,n?{height:"auto"}:{height:0},{duration:.5,type:"tween"})),children:(0,Z.jsx)(r.hjJ,{})})]})]}),(0,Z.jsxs)("div",{className:"ProfilesComponent_Details w-100 row column-gap-4",ref:e,children:[(0,Z.jsxs)("div",{className:"ProfilesComponent_Details_Main d-flex flex-column col-xl-4 col-md-4 px-4 py-3",children:[(0,Z.jsx)("img",{src:c,alt:"...",loading:"lazy",className:"align-self-center"}),(0,Z.jsxs)("div",{className:"d-flex flex-column justify-content-center mt-3 row-gap-2",children:[(0,Z.jsxs)("div",{className:"d-flex align-items-center justify-content-center column-gap-5 w-100",children:[(0,Z.jsxs)("div",{className:"",children:[(0,Z.jsx)(u.QJe,{}),(0,Z.jsx)(u.QJe,{}),(0,Z.jsx)(u.QJe,{}),(0,Z.jsx)(u.QJe,{}),(0,Z.jsx)(u.QJe,{})]}),(0,Z.jsx)("span",{className:"fw-bold",children:"214 Rate"})]}),(0,Z.jsxs)("div",{className:"Trust d-flex justify-content-center align-items-center column-gap-3",children:[(0,Z.jsx)("div",{className:"Loading",children:(0,Z.jsx)("span",{style:{width:"80%"}})}),(0,Z.jsx)("p",{className:"m-0 fw-bold",children:"80% trust"})]})]})]}),(0,Z.jsxs)("div",{className:"ProfilesComponent_Details_Details d-flex flex-column justify-content-evenly",children:[(0,Z.jsxs)("article",{children:[(0,Z.jsx)("h1",{className:"h4",children:"Anne Maria"}),(0,Z.jsx)("span",{className:"opacity-75",children:"Photographer"})]}),(0,Z.jsxs)("article",{className:"d-flex flex-column",children:[(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Date of Birth: "}),"5 Feb , 2001"]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Mobile Number: "}),"01030602579"]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Email Address: "}),"Anne@gmail.com"]})]})]}),(0,Z.jsxs)("div",{className:"ProfilesComponent_Footer w-100 d-flex align-items-center column-gap-3  px-3",children:[(0,Z.jsx)("button",{className:"btn",children:"Book"}),(0,Z.jsx)(h.rU,{className:"btn",to:"1",children:"View"})]})]})]})}function ee(){const[e,t]=(0,s.useState)(!1),n=(0,i.TA)({initialValues:{RangeNumber:"200",Rate:"5"},onSubmit:e=>{console.log(e)}}),c=()=>{t(!0!==e)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.J,{BackGround:!1}),e?(0,Z.jsx)("div",{className:"backdrop See"}):(0,Z.jsx)("div",{className:"backdrop hide"}),(0,Z.jsxs)("section",{className:e?"Profiles_filters p-3 Show":"Profiles_filters p-3",children:[(0,Z.jsx)("h1",{className:"h3",children:"Filters"}),(0,Z.jsxs)("form",{onSubmit:n.handleSubmit,className:"row px-3",children:[(0,Z.jsx)("h2",{htmlFor:"customRange1",className:"form-label h5",children:"Budget Range"}),(0,Z.jsx)("input",{type:"range",className:"form-range px-2",id:"customRange1",min:"200",max:"5000",name:"RangeNumber",onChange:n.handleChange}),(0,Z.jsx)("span",{className:"w-100",children:n.values.RangeNumber}),(0,Z.jsx)("label",{htmlFor:"Rating",className:"mt-3 fw-bold form-label",children:"The Rate you want"}),(0,Z.jsxs)("select",{className:"form-select","aria-label":"Default select example",name:"Rate",onChange:n.handleChange,children:[(0,Z.jsx)("option",{defaultValue:!0,children:"Photographers Rates"}),(0,Z.jsx)("option",{value:"1",children:"One"}),(0,Z.jsx)("option",{value:"2",children:"Two"}),(0,Z.jsx)("option",{value:"3",children:"Three"}),(0,Z.jsx)("option",{value:"4",children:"Four"}),(0,Z.jsx)("option",{value:"5",children:"Five"})]}),(0,Z.jsx)("input",{type:"submit",className:"btn mt-5",value:"Filter"})]}),(0,Z.jsxs)("div",{className:"User d-flex justify-content-start align-items-center column-gap-3 px-3",children:[(0,Z.jsx)("img",{src:l,alt:"..",className:"col-md-5",loading:"lazy"}),(0,Z.jsxs)("div",{className:"User_Details col-md-7",children:[(0,Z.jsx)("h1",{className:"h6 w-100",children:"Saul GoodMan"}),(0,Z.jsx)("span",{children:"Email123@gmail.com"})]})]})]}),(0,Z.jsx)("section",{className:"Profiles",children:(0,Z.jsxs)("div",{className:"Profiles_Show py-2",children:[(0,Z.jsx)("input",{type:"text",placeholder:"Find Your Photographer"}),e?(0,Z.jsx)(o.bjh,{onClick:c,className:"Menu Close"}):(0,Z.jsx)(r.tgG,{onClick:c,className:"Menu"}),(0,Z.jsx)(o.uFR,{className:"Search"}),(0,Z.jsx)("p",{className:"Search_Details w-100 mt-4 px-3",children:"Finding the perfect camera man for your project is made easy on our freelance platform. With our intuitive filtering system, you can refine your search based on a variety of criteria such as location, expertise, availability, equipment, and budget. Whether you're seeking a cinematographer proficient in aerial shots, a videographer skilled in documentary-style filming, or a photographer specialized in portrait sessions, our robust filtering options allow you to narrow down your choices and connect with professionals who best match your project requirements. Say goodbye to endless scrolling and hello to efficiently finding the ideal camera man for your next endeavor."}),(0,Z.jsx)($,{}),(0,Z.jsx)($,{}),(0,Z.jsx)($,{})]})})]})}}}]);
//# sourceMappingURL=985.87b96a92.chunk.js.map