(window.webpackJsonppaint=window.webpackJsonppaint||[]).push([[0],{102:function(e,t){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),c=n(60),l=n(136),u=n(128),s=n(134),d=n(130),f=n(131),h=n(132),v=n(133),p=n(135),w=n(55),g={loading:{state:!1,reducer:function(e,t){return t}}},m=n(37),b=n(19),E=n(56),j=n.n(E)()("https://javiscript-paint.herokuapp.com/");var k=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],o=t[1],i=Object(a.useRef)(),r=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return j.on("draw",(function(e){return function(e,t){if(2!==t.length)return;e.beginPath(),e.fillStyle="#000000",e.lineWidth=10;var n=Object(b.a)(t,2),a=n[0],o=n[1];e.moveTo.apply(e,Object(m.a)(a)),e.lineTo.apply(e,Object(m.a)(o)),e.stroke()}(i.current.getContext("2d"),e)})),function(){return j.off("draw")}}),[]),Object(a.useEffect)((function(){if(2===n.length){var e=Object(b.a)(n,2),t=e[0],a=e[1],o=i.current.width/i.current.clientWidth,r=i.current.height/i.current.clientHeight;j.emit("draw",[[o*t[0],r*t[1]],[o*a[0],r*a[1]]])}}),[n]),{canvas:i,toggleDrawing:function(e){return function(t){var n=t.nativeEvent;r.current=e;var a=n.offsetX,i=n.offsetY;e&&o([[a,i]])}},addPoint:function(e){var t=e.nativeEvent;if(r.current){var n=t.offsetX,a=t.offsetY;o((function(e){var t=Object(b.a)(e,2),o=t[0],i=t[1];return[i||o,[n,a]]}))}}}},y=n(57),O=Object(y.a)((function(){return{root:{position:"absolute",background:"black",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},container:{background:"white",position:"relative",maxWidth:"100%",maxHeight:"100%",width:"100%",height:"auto","@media (min-aspect-ratio: 16/9)":{width:"auto",height:"100%"}},svg:{display:"block",width:"100%",height:"auto","@media (min-aspect-ratio: 16/9)":{width:"auto",height:"100%"}},canvas:{position:"absolute",touchAction:"none",top:0,left:0,width:"100%",height:"100%",display:"block"}}})),C=function(){var e=O(),t=k(),n=t.canvas,a=t.toggleDrawing,i=t.addPoint;return o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.container},o.a.createElement("svg",{className:e.svg,width:"16",height:"9"}),o.a.createElement("canvas",{width:"1920",height:"1080",onPointerDown:a(!0),onPointerUp:a(!1),onPointerMove:i,ref:n,className:e.canvas})))};var W=function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){function e(e){var t=e.detail;o((function(){return function(){t.postMessage({type:"SKIP_WAITING"}),window.location.reload()}}))}return window.addEventListener("update",e),function(){return window.removeEventListener("update",e)}}),[]),{update:n,handleClose:function(e){return function(){e?n():o()}}}},P=Object(c.a)({spacing:function(e){return"".concat(.5*e,"rem")}}),A=function(){var e=W(),t=e.update,n=e.handleClose;return o.a.createElement(w.Store,{reducers:g},o.a.createElement(l.a,{theme:P},o.a.createElement(u.a,null),o.a.createElement(s.a,{onClose:n,open:!!t},o.a.createElement(d.a,null,"Nuevo contenido disponible"),o.a.createElement(f.a,null,o.a.createElement(h.a,null,'Pulsa "Actualizar" para obtener la \xfaltima versi\xf3n')),o.a.createElement(v.a,null,o.a.createElement(p.a,{onClick:n(!1),color:"secondary"},"Descartar"),o.a.createElement(p.a,{onClick:n(!0),color:"primary"},"Actualizar"))),o.a.createElement(C,null)))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/paint",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/paint","/service-worker.js");N?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}({onUpdate:function(e){window.dispatchEvent(new CustomEvent("update",{detail:e.waiting}))}})},66:function(e,t,n){e.exports=n(110)}},[[66,1,2]]]);
//# sourceMappingURL=main.bdf7473a.chunk.js.map