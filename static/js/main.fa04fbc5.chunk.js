(this["webpackJsonpcal-app"]=this["webpackJsonpcal-app"]||[]).push([[0],{68:function(e,t,c){},75:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(18),i=c.n(a),l=(c(68),c(7)),r=(c(53),c(1)),o=["January","February","March","April","May","June","July","August","September","October","November","December"],j=new Date;function d(e){Object(s.useEffect)((function(){m()}),[]);var t=Object(s.useState)([]),c=Object(l.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(e.selectedDate),d=Object(l.a)(i,2),h=d[0],b=d[1],x=new Date(h.getFullYear(),h.getMonth()+1,0).getDate();function O(t){0!==document.getElementsByClassName("selected-date").length&&document.getElementsByClassName("selected-date")[0].classList.remove("selected-date"),document.getElementById(t.target.id).classList.add("selected-date"),console.log(t.target.id),console.log(new Date(t.target.id));var c=t.target.id.split("/");e.updateSelectedDate(new Date(c[2],c[1],c[0]))}function m(){h.setDate(1);for(var e=new Date,t=[],c=h.getDay();c>0;c--)t.push(Object(r.jsx)("div",{className:"prev_date"}));for(var s=1;s<=x;s++)if(s===e.getDate()&&h.getMonth()===e.getMonth())t.push(Object(r.jsx)("div",{className:"today selected-date",children:s}));else if(s<e.getDate()&&h.getMonth()<=e.getMonth()||s>e.getDate()+15)t.push(Object(r.jsx)("div",{className:"disabled",children:s}));else if(s<e.getDate()&&h.getMonth()>e.getMonth())t.push(Object(r.jsx)("div",{children:s}));else{var n=s+"/"+h.getMonth()+"/"+h.getFullYear();t.push(Object(r.jsx)("div",{onClick:function(e){return O(e)},id:n,children:s}))}a(t),h.setDate(e.getDate())}function u(e){if("prev"===e){var t=new Date(h.setMonth(h.getMonth()-1));b(t)}else if("next"===e){var c=new Date(h.setMonth(h.getMonth()+1));b(c)}m()}function g(e){return x-j.getDate()<15?j.getMonth()===h.getMonth()?Object(r.jsxs)("div",{className:"month d-flex justify-content-between align-items-center",children:[Object(r.jsx)("span",{}),Object(r.jsx)("div",{children:Object(r.jsx)("h2",{id:"month",children:o[h.getMonth()]})}),Object(r.jsx)("div",{className:"next arrow",onClick:function(){return u("next")},children:Object(r.jsx)("span",{children:"\u276f"})})]}):Object(r.jsxs)("div",{className:"month d-flex justify-content-between align-items-center",children:[Object(r.jsx)("div",{className:"prev arrow",onClick:function(){return u("prev")},children:Object(r.jsx)("span",{children:"\u276e"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h2",{id:"month",children:o[h.getMonth()]})}),Object(r.jsx)("span",{})]}):Object(r.jsx)("div",{className:"month",style:{justifyContent:"center"},children:Object(r.jsx)("div",{children:Object(r.jsx)("h2",{id:"month",children:o[h.getMonth()]})})})}return Object(r.jsxs)("div",{className:"calender card",children:[Object(r.jsx)(g,{}),Object(r.jsxs)("div",{className:"weekdays",children:[Object(r.jsx)("div",{children:"Sun"}),Object(r.jsx)("div",{children:"Mon"}),Object(r.jsx)("div",{children:"Tue"}),Object(r.jsx)("div",{children:"Wed"}),Object(r.jsx)("div",{children:"Thu"}),Object(r.jsx)("div",{children:"Fri"}),Object(r.jsx)("div",{children:"Sat"})]}),Object(r.jsx)("div",{className:"days",children:n})]})}var h=c(85),b=c(59),x=c(83),O=c(60),m=c(13),u=c(19),g=c(56),v=c(54);function p(e){var t,c,n,a,i=Object(s.useState)(!1),o=Object(l.a)(i,2),j=o[0],d=o[1],p=Object(s.useState)(null),f=Object(l.a)(p,2),N=f[0],w=f[1];Object(s.useEffect)((function(){fetch("https://dev.thegrowingdeveloper.org/slots/getAvailableSlots",{method:"GET"}).then((function(e){return e.json()})).then((function(t){var c,s,n;w(t),console.log(N[(null===(c=e.date)||void 0===c?void 0:c.getDate())+"-"+((null===(s=e.date)||void 0===s?void 0:s.getMonth())+1)+"-"+(null===(n=e.date)||void 0===n?void 0:n.getFullYear())])})).catch((function(e){return console.log(e)}))}),[]);var y=(null===(t=e.date)||void 0===t?void 0:t.getDate())+"-"+((null===(c=e.date)||void 0===c?void 0:c.getMonth())+1)+"-"+(null===(n=e.date)||void 0===n?void 0:n.getFullYear());return Object(r.jsxs)("div",{children:[Object(r.jsxs)(h.a,{show:j,animation:!0,centered:!0,children:[Object(r.jsxs)(h.a.Body,{children:[Object(r.jsx)(b.a,{onClick:function(){return d(!1)},"aria-label":"Close"}),Object(r.jsx)(h.a.Title,{className:"text-center",children:"Write your query"}),Object(r.jsx)("div",{className:"appointment-form mx-4",children:Object(r.jsxs)(x.a,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(m.a,{icon:g.b,className:"form-icon"}),Object(r.jsx)(O.a,{placeholder:"Name"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(m.a,{icon:g.a,className:"form-icon"}),Object(r.jsx)(O.a,{placeholder:"Email"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(m.a,{icon:u.e,className:"form-icon"}),Object(r.jsx)(O.a,{placeholder:"Phone(WhatsApp preferred)"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(m.a,{icon:v.a,className:"form-icon ta-form-icon"}),Object(r.jsx)(x.a.Control,{as:"textarea",rows:4,placeholder:"Query"})]})]})})]}),Object(r.jsx)(h.a.Footer,{className:"form-footer",children:Object(r.jsx)("button",{className:"proceed modal-proceed",children:"Proceed to Payment"})})]}),Object(r.jsxs)("div",{className:"Slots",children:[Object(r.jsx)("h2",{children:y}),Object(r.jsx)("div",{className:"timings",children:null!=N&&null!=N[y]?null===(a=N[y][0])||void 0===a?void 0:a.map((function(e){return Object(r.jsxs)("button",{className:"available-slots",children:[e.start_time,"-",e.end_time]})})):"No Slots available"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"proceed slot-proceed mt-3",onClick:function(){return d(!0)},children:"Proceed"})})]})]})}var f=c(80),N=c.p+"static/media/brandlogo.9365775e.png",w=c.p+"static/media/TGDdark.e6165786.png";function y(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsxs)(f.a,{children:[Object(r.jsxs)("div",{className:"d-flex justify-content-start align-items-start",children:[Object(r.jsx)("img",{className:"img-fluid footer-logo mt-1 me-3",src:w,alt:""}),Object(r.jsxs)("div",{className:"footer-brandName",children:[Object(r.jsx)("h3",{children:"The Growing Developer"}),Object(r.jsx)("p",{children:'"Let\'s learn and Grow TOGETHER"'})]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"social d-lg-flex justify-content-between text-center",children:[Object(r.jsxs)("p",{children:["\xa9 Copyright ",Object(r.jsx)("span",{children:"The Growing Developer"}),". All Rights Reserved"]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{className:"social-icons",href:"https://twitter.com/thegrowingdev",children:Object(r.jsx)(m.a,{icon:u.d})}),Object(r.jsx)("a",{className:"social-icons",href:"https://www.facebook.com/thegrowingdeveloper/",children:Object(r.jsx)(m.a,{icon:u.a})}),Object(r.jsx)("a",{className:"social-icons",href:"https://www.youtube.com/c/TheGrowingDeveloper",children:Object(r.jsx)(m.a,{icon:u.f})}),Object(r.jsx)("a",{className:"social-icons",href:"https://www.linkedin.com/in/singh-saheb/",children:Object(r.jsx)(m.a,{icon:u.c})}),Object(r.jsx)("a",{className:"social-icons",href:"https://github.com/singh-saheb",children:Object(r.jsx)(m.a,{icon:u.b})})]})]})]})})}var D=c(84),M=c(82),S=c(81),C=c(61),T=c.p+"static/media/plugsLight.1e65ad01.png",k=c.p+"static/media/navlogo.5ec2f129.png",F=c.p+"static/media/email.ec2185e9.png";c(75);function G(e){return Object(r.jsxs)(D.a,{collapseOnSelect:!0,expand:"md",className:"topbar px-3 py-0 align-items-center",fixed:"top",children:[Object(r.jsx)(D.a.Brand,{href:"#home",children:Object(r.jsx)("img",{className:"img-fluid",src:k,width:"180px",alt:""})}),Object(r.jsx)(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(r.jsx)(D.a.Collapse,{id:"responsive-navbar-nav",children:Object(r.jsx)(M.a,{className:"ms-auto align-content-center",children:Object(r.jsx)(M.a.Link,{href:"https://www.youtube.com/c/TheGrowingDeveloper",children:Object(r.jsx)(m.a,{icon:u.f,className:"topbar-sub-button"})})})})]})}function B(e){return Object(r.jsx)("div",{className:"banner",children:Object(r.jsxs)("div",{className:"banner-text",children:[Object(r.jsx)("h1",{children:"Wanna get Pissed?"}),Object(r.jsx)("h5",{children:"You won't be disappointed"}),Object(r.jsx)("button",{className:"bookSlot",children:"Book Slot Now"})]})})}function E(){return Object(r.jsx)("div",{className:"yt-container px-1 mt-3",children:Object(r.jsx)(f.a,{children:Object(r.jsxs)("div",{className:"yt-container-text",children:[Object(r.jsxs)("h3",{children:["Follow ",Object(r.jsx)("span",{children:"The Growing Developer"})," on Youtube!"]}),Object(r.jsx)("p",{children:"Subscribe to The Growing Developer Youtube channel for amazing tutorials on the latest technologies"}),Object(r.jsx)("img",{className:"img-fluid tgd-logo",src:N,alt:"",width:"40px"}),Object(r.jsx)("button",{className:"yt-subs",children:Object(r.jsx)("a",{href:"https://www.youtube.com/c/TheGrowingDeveloper",children:"SUBSCRIBE"})})]})})})}function P(){return Object(r.jsxs)("div",{className:"promo-card buy-api mt-3",children:[Object(r.jsx)("h6",{children:"Full Fledged API to help you build a dummy ecommerce app"}),Object(r.jsx)("h4",{children:"Check out The Growing Developer API"}),Object(r.jsx)("img",{className:"img-fluid plugsBlack",src:T,alt:""})]})}function A(){return Object(r.jsxs)("div",{className:"promo-card contact-me d-flex align-items-center justify-content-around mt-3",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:"Contact Us"})}),Object(r.jsx)("img",{className:"img-fluid email",src:F,alt:""})]})}var L=function(e){var t=Object(s.useState)(new Date),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(G,{}),Object(r.jsx)(B,{}),Object(r.jsx)("div",{className:"main-container",children:Object(r.jsx)("div",{className:"container mx-auto",children:Object(r.jsxs)(S.a,{children:[Object(r.jsx)(C.a,{lg:7,children:Object(r.jsx)(d,{selectedDate:n,updateSelectedDate:function(e){a(e)}})}),Object(r.jsx)(C.a,{lg:5,className:"d-flex align-items-center justify-content-center mt-5",children:Object(r.jsx)(p,{date:n})})]})})}),Object(r.jsx)("div",{className:"promotion",children:Object(r.jsx)(f.a,{children:Object(r.jsxs)(S.a,{children:[Object(r.jsx)(C.a,{md:6,children:Object(r.jsx)(P,{})}),Object(r.jsxs)(C.a,{md:6,children:[Object(r.jsx)(S.a,{children:Object(r.jsx)(A,{className:"Contact"})}),Object(r.jsx)(S.a,{children:Object(r.jsx)(E,{})})]})]})})}),Object(r.jsx)(y,{})]})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),Y()}},[[78,1,2]]]);
//# sourceMappingURL=main.fa04fbc5.chunk.js.map