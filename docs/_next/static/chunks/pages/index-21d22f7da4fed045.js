(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8566:function(e,t,n){"use strict";var i=n(930),r=n(5696),o=n(7980);t.default=function(e){var t,n=e.src,a=e.sizes,f=e.unoptimized,v=void 0!==f&&f,j=e.priority,S=void 0!==j&&j,k=e.loading,z=e.lazyRoot,O=void 0===z?null:z,A=e.lazyBoundary,_=void 0===A?"200px":A,E=e.className,P=e.quality,I=e.width,C=e.height,R=e.objectFit,N=e.objectPosition,q=e.onLoadingComplete,L=e.loader,M=void 0===L?x:L,D=e.placeholder,W=void 0===D?"empty":D,B=e.blurDataURL,U=function(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),F=c.useRef(null),H=c.useContext(d.ImageConfigContext),Z=c.useMemo((function(){var e=h||H||l.imageConfigDefault,t=[].concat(o(e.deviceSizes),o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:n})}),[H]),T=U,G=a?"responsive":"intrinsic";"layout"in T&&(T.layout&&(G=T.layout),delete T.layout);var J="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(n)){var V=y(n)?n.default:n;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(B=B||V.blurDataURL,J=V.src,(!G||"fill"!==G)&&(C=C||V.height,I=I||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}n="string"===typeof n?n:J;var X=w(I),Q=w(C),K=w(P),Y=!S&&("lazy"===k||"undefined"===typeof k);(n.startsWith("data:")||n.startsWith("blob:"))&&(v=!0,Y=!1);p.has(n)&&(Y=!1);0;var $,ee=u.useIntersection({rootRef:O,rootMargin:_,disabled:!Y}),te=r(ee,2),ne=te[0],ie=te[1],re=!Y||ie,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:N},le="blur"===W?{filter:"blur(20px)",backgroundSize:R||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:N||"0% 0%"}:{};if("fill"===G)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Q){var ue=Q/X,de=isNaN(ue)?"100%":"".concat(100*ue,"%");"responsive"===G?(oe.display="block",oe.position="relative",ce=!0,ae.paddingTop=de):"intrinsic"===G?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ce=!0,ae.maxWidth="100%",$="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===G&&(oe.display="inline-block",oe.position="relative",oe.width=X,oe.height=Q)}else 0;var fe={src:m,srcSet:void 0,sizes:void 0};re&&(fe=b({config:Z,src:n,unoptimized:v,layout:G,width:X,quality:K,sizes:a,loader:M}));var ge=n;0;0;var he=(i(t={},"imagesrcset",fe.srcSet),i(t,"imagesizes",fe.sizes),t),pe=c.default.useLayoutEffect,me=c.useRef(q);return c.useEffect((function(){me.current=q}),[q]),pe((function(){ne(F.current)}),[ne]),c.useEffect((function(){!function(e,t,n,i,r){var o=function(){var n=e.current;n&&(n.src!==m&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(p.add(t),"blur"===i&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),r.current)){var o=n.naturalWidth,a=n.naturalHeight;r.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(F,ge,0,W,me)}),[ge,G,W,re]),c.default.createElement("span",{style:oe},ce?c.default.createElement("span",{style:ae},$?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:$}):null):null,c.default.createElement("img",Object.assign({},T,fe,{decoding:"async","data-nimg":G,className:E,ref:F,style:g({},se,le)})),Y&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},T,b({config:Z,src:n,unoptimized:v,layout:G,width:X,quality:K,sizes:a,loader:M}),{decoding:"async","data-nimg":G,style:se,className:E,loading:k||"lazy"}))),S?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+fe.src+fe.srcSet+fe.sizes,rel:"preload",as:"image",href:fe.srcSet?void 0:fe.src},he))):null)};var a,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(a=n(2717))&&a.__esModule?a:{default:a},l=n(5809),u=n(639),d=n(9239);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){f(e,t,n[t])}))}return e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai"},p=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(j(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(j(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}function b(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,c=e.quality,s=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var c,s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(i);c)l.push(parseInt(c[2]));if(l.length){var u=.01*Math.min.apply(Math,l);return{widths:a.filter((function(e){return e>=r[0]*u})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,s),d=u.widths,f=u.kind,g=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,i){return"".concat(l({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:c,width:d[g]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",i=v.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(e){return"/"===e[0]?e.slice(1):e}},639:function(e,t,n){"use strict";var i=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!a,u=r.useRef(),d=r.useState(!1),f=i(d,2),g=f[0],h=f[1],p=r.useState(t?t.current:null),m=i(p,2),v=m[0],y=m[1],b=r.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||g||e&&e.tagName&&(u.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));i?t=c.get(i):(t=c.get(n),s.push(n));if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(r);var t=s.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:n}))}),[l,v,n,g]);return r.useEffect((function(){if(!a&&!g){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[g]),r.useEffect((function(){t&&y(t.current)}),[t]),[b,g]};var r=n(7294),o=n(6286),a="undefined"!==typeof IntersectionObserver;var c=new Map,s=[]},6462:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=n(7379),r=i.ZP.div.withConfig({displayName:"Logostyled__LogoStyled",componentId:"sc-hoczfv-0"})(["height:94vh;display:flex;background:#101010;justify-content:center;flex-direction:column;align-items:center;"]),o=n(5675),a=i.ZP.div.withConfig({displayName:"LogoContainerstyled__LogoContainer",componentId:"sc-xgv8m1-0"})(["background:#101010;height:30vh;width:30vw;min-width:300px;display:flex;justify-content:center;align-items:center;"]),c=i.ZP.div.withConfig({displayName:"ComingSoonstyled__ComingSoonStyled",componentId:"sc-uwpcgy-0"})(["# width:12vw;height:3vh;display:flex;align-items:center;justify-content:center;color:white;"]),s=i.ZP.h1.withConfig({displayName:"ComingSoonstyled__ComingSoonFontStyled",componentId:"sc-uwpcgy-1"})(["font-size:0.6rem;color:#808080;"]),l=n(5893);var u=function(e){return(0,l.jsxs)(r,{children:[(0,l.jsx)(a,{children:(0,l.jsx)(o.default,{src:"/spyke.png",width:"800vw",height:"800vh"})}),(0,l.jsx)(c,{children:(0,l.jsx)(s,{children:(0,l.jsx)("h1",{children:"Coming Soon \xb7 2022"})})})]})};function d(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u,{})})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6462)}])},5675:function(e,t,n){e.exports=n(8566)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);