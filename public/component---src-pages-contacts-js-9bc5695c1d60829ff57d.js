"use strict";(self.webpackChunkmyportefolioremarkesite=self.webpackChunkmyportefolioremarkesite||[]).push([[98],{5326:function(e,t,a){var n=a(7294);t.Z=function(e){let{entercontactlinked:t=!1,entercontactemail:a=!1}=e;const r=(0,n.useRef)(null),s=(0,n.useRef)(null),o=(0,n.useRef)({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:1});return(0,n.useEffect)((()=>{null!==r.current&&null!==s.current&&document.addEventListener("mousemove",(e=>{const{clientX:t,clientY:a}=e,n=t,c=a;try{o.current.mouseX=n-s.current.clientWidth/2,o.current.mouseY=c-s.current.clientHeight/2,r.current.style.transform="translate3d("+(n-r.current.clientWidth/2)+"px , "+(c-r.current.clientWidth/2)+"px, 0px)"}catch(l){console.log(l)}}))}),[]),(0,n.useEffect)((()=>{const e=()=>{if(null!==r.current&&null!==s.current){o.current.key=requestAnimationFrame(e);const{mouseX:t,mouseY:a,destinationX:n,destinationY:r,distanceX:c,distanceY:l}=o.current;!n|!r?(o.current.destinationX=t,o.current.destinationY=a):(o.current.distanceX=.02*(t-n),o.current.distanceY=.02*(a-r),Math.abs(o.current.distanceX)+Math.abs(o.current.distanceY)<.1?(o.current.destinationX=t,o.current.destinationY=a):(o.current.destinationX+=c,o.current.destinationY+=l)),s.current.style.transform="translate3d("+n+"px , "+r+"px, 0px)"}};e()}),[]),n.createElement("div",null,n.createElement("div",{className:"app-cusor",ref:s}),n.createElement("div",{className:"app-minicusor",style:{width:a||t?"400px":"10px",height:a||t?"400px":"10px"},ref:r},n.createElement("div",{className:"cursor-text",style:{opacity:a||t?1:0}},t&&"linkedin/adikpeto-aristide",a&&"adikpetoaristidezeus@gmail.com")))}},7994:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i}});var n=a(7294),r=a(7185),s=a(5716),o=a(5326);const c={parallaxPos:{x:0,y:0},parallaxPosCtn:{x:0,y:0}};function l(e,t){switch(t.type){case"CHANGE/COORDINATES":return{...e,parallaxPos:t.payload};case"CHANGE/COORDINATESCTN":return{...e,parallaxPosCtn:t.payload};default:throw new Error("Message")}}const i=()=>n.createElement("title",null,"Contacts page");t.default=()=>{var e,t,a,i,d,m,u,p,v,x,E,f;const{0:y,1:N}=(0,n.useReducer)(l,c),h=(0,n.useRef)(),C=(0,n.useRef)(),P=(0,n.useRef)(),{0:k,1:g}=(0,n.useState)(!1),{0:w,1:Y}=(0,n.useState)(!1),X=e=>{const t=(window.innerWidth-5*e.pageX)/100,a=(window.innerHeight-5*e.pageY)/100;N({type:"CHANGE/COORDINATESCTN",payload:{x:t,y:a}})},A=e=>{const t=(window.innerWidth- -2*e.pageX)/100,a=(window.innerHeight- -2*e.pageY)/100;N({type:"CHANGE/COORDINATES",payload:{x:t,y:a}})};return(0,n.useLayoutEffect)((()=>{const e=s.ZP.context((()=>{C.current=s.ZP.timeline().from(".contacts-text-top-title",{delay:.5,duration:.8,y:200,skewY:20,opacity:0}).from(".contacts-from-title",{duration:.8,y:200,skewY:20,opacity:0},"-=1.5")}),h);return()=>{e.revert()}}),[h]),n.createElement(n.Fragment,null,n.createElement(o.Z,{entercontactemail:k,entercontactlinked:w}),n.createElement(r.Z,null,n.createElement("div",{ref:h,onMouseEnter:()=>{h.current.addEventListener("mousemove",A)},onMouseLeave:()=>(h.current.removeEventListener("mousemove",A),void N({type:"CHANGE/COORDINATES",payload:c.parallaxPos})),className:"contacts-container"},n.createElement("div",{className:"contacts-form-container"},n.createElement("div",{className:"contacts-form"},n.createElement("div",{className:"contacts-hidden"},n.createElement("div",{className:"contacts-from-title"},"Envoyez moi un message.")),n.createElement("div",{className:"contacts-from-text"}," Dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la ré"),n.createElement("input",{className:"contacts-from-input",placeholder:"Votre mail "}),n.createElement("input",{className:"contacts-from-input",placeholder:"Objet "}),n.createElement("textarea",{className:"contacts-from-input",placeholder:"Message"}),n.createElement("div",{style:{transform:"translate3D("+(null===(e=y.parallaxPos)||void 0===e?void 0:e.x)+"px , "+(null===(t=y.parallaxPos)||void 0===t?void 0:t.y)+"px, 0px)"},className:"btn-form"},"Envoyer"))),n.createElement("div",{className:"contacts-text-container",ref:P,onMouseEnter:()=>{P.current.addEventListener("mousemove",X)},onMouseLeave:()=>{P.current.removeEventListener("mousemove",X),N({type:"CHANGE/COORDINATESCTN",payload:c.parallaxPosCtn}),g(!1),Y(!1)}},n.createElement("div",{className:"contacts-text-top"},n.createElement("div",{className:"contacts-hidden transition",style:{transform:"translate3D("+1.5*(null===(a=y.parallaxPosCtn)||void 0===a?void 0:a.x)+"px , "+1.5*(null===(i=y.parallaxPosCtn)||void 0===i?void 0:i.y)+"px, 0px)"}},n.createElement("div",{className:"contacts-text-top-title"},"me contacter")),n.createElement("div",{className:"contacts-text-top-text transition",style:{transform:"translate3D("+1.1*(null===(d=y.parallaxPosCtn)||void 0===d?void 0:d.x)+"px , "+.9*(null===(m=y.parallaxPosCtn)||void 0===m?void 0:m.y)+"px, 0px)"}},"Pages et applications à l’aide de ma connaissance du développement frondans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à votre entreprise et travailler"),n.createElement("div",{className:"contacts-text-top-other-contacts transition",style:{transform:"translate3D("+.3*(null===(u=y.parallaxPosCtn)||void 0===u?void 0:u.x)+"px , "+.3*(null===(p=y.parallaxPosCtn)||void 0===p?void 0:p.y)+"px, 0px)"}},"autre contacts"),n.createElement("div",{className:"contacts-other-container transition",style:{transform:"translate3D("+(null===(v=y.parallaxPosCtn)||void 0===v?void 0:v.x)+"px , "+(null===(x=y.parallaxPosCtn)||void 0===x?void 0:x.y)+"px, 0px)"}},n.createElement("a",{target:"__blank",href:"https://linkedin.com/adikpeto-aristide-878757",className:"contacts-other",onMouseEnter:()=>{Y(!0),g(!1)}},"linkedin")),n.createElement("div",{className:"contacts-other-container transition",style:{transform:"translate3D("+.5*(null===(E=y.parallaxPosCtn)||void 0===E?void 0:E.x)+"px , "+.5*(null===(f=y.parallaxPosCtn)||void 0===f?void 0:f.y)+"px, 0px)"}},n.createElement("a",{href:"mailto:adikpetoaristidezeus@gmail.com",className:"contacts-other",onMouseEnter:()=>{Y(!1),g(!0)}},"email"))),n.createElement("div",{className:"contacts-text-footer"},n.createElement("div",{className:"contacts-text-num"},"+229 54 17 26 84"))))))}}}]);
//# sourceMappingURL=component---src-pages-contacts-js-9bc5695c1d60829ff57d.js.map