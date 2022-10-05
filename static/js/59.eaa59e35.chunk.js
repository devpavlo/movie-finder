"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[59],{59:function(t,e,n){n.r(e),n.d(e,{Movies:function(){return Ct}});var o=n(885),r=n(731),a=n(689),i=n(791),s=n(942),l=n(413);function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=n(982);function d(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=d(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var f=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=d(t))&&(o&&(o+=" "),o+=e);return o},p=["theme","type"],m=["delay","staleId"];function g(t){return"number"===typeof t&&!isNaN(t)}function v(t){return"boolean"===typeof t}function h(t){return"string"===typeof t}function y(t){return"function"===typeof t}function T(t){return h(t)||y(t)?t:null}function b(t){return null!=t}function E(t){return(0,i.isValidElement)(t)||h(t)||y(t)||g(t)}var x={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Z={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function _(t){var e=t.enter,n=t.exit,o=t.appendPosition,r=void 0!==o&&o,a=t.collapse,s=void 0===a||a,l=t.collapseDuration,c=void 0===l?300:l;return function(t){var o=t.children,a=t.position,l=t.preventExitTransition,d=t.done,f=t.nodeRef,p=t.isIn,m=r?e+"--"+a:e,g=r?n+"--"+a:n,v=(0,i.useRef)(0);return(0,i.useLayoutEffect)((function(){var t=f.current,e=m.split(" "),n=function n(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",n),t.removeEventListener("animationcancel",n),0===v.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,u.Z)(e)))};!function(){var o;(o=t.classList).add.apply(o,(0,u.Z)(e)),t.addEventListener("animationend",n),t.addEventListener("animationcancel",n)}()}),[]),(0,i.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),s?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,d,c):d()};p||(l?e():(v.current=1,t.className+=" "+g,t.addEventListener("animationend",e)))}),[p]),i.createElement(i.Fragment,null,o)}}function C(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var O={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(r)}))}},I=function(t){var e=t.theme,n=t.type,o=c(t,p);return i.createElement("svg",(0,l.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var L={info:function(t){return i.createElement(I,(0,l.Z)({},t),i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return i.createElement(I,(0,l.Z)({},t),i.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return i.createElement(I,(0,l.Z)({},t),i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return i.createElement(I,(0,l.Z)({},t),i.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return i.createElement("div",{className:"Toastify__spinner"})}};function w(t){var e=t.theme,n=t.type,o=t.isLoading,r=t.icon,a=null,s={theme:e,type:n};return!1===r||(y(r)?a=r(s):(0,i.isValidElement)(r)?a=(0,i.cloneElement)(r,s):h(r)||g(r)?a=r:o?a=L.spinner():function(t){return t in L}(n)&&(a=L[n](s))),a}function k(t){var e=(0,i.useReducer)((function(t){return t+1}),0),n=(0,o.Z)(e,2)[1],r=(0,i.useState)([]),a=(0,o.Z)(r,2),s=a[0],l=a[1],d=(0,i.useRef)(null),f=(0,i.useRef)(new Map).current,p=function(t){return-1!==s.indexOf(t)},x=(0,i.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:p,getToast:function(t){return f.get(t)}}).current;function Z(t){var e=t.containerId;!x.props.limit||e&&x.containerId!==e||(x.count-=x.queue.length,x.queue=[])}function _(t){l((function(e){return b(t)?e.filter((function(e){return e!==t})):[]}))}function I(){var t=x.queue.shift();k(t.toastContent,t.toastProps,t.staleId)}function L(t,e){var o=e.delay,r=e.staleId,a=c(e,m);if(E(t)&&!function(t){return!d.current||x.props.enableMultiContainer&&t.containerId!==x.props.containerId||f.has(t.toastId)&&null==t.updateId}(a)){var s=a.toastId,l=a.updateId,u=a.data,p=x.props,Z=function(){return _(s)},L=null==l;L&&x.count++;var N,R,P={toastId:s,updateId:l,data:u,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||p.theme,icon:null!=a.icon?a.icon:p.icon,isIn:!1,key:a.key||x.toastKey++,type:a.type,closeToast:Z,closeButton:a.closeButton,rtl:p.rtl,position:a.position||p.position,transition:a.transition||p.transition,className:T(a.className||p.toastClassName),bodyClassName:T(a.bodyClassName||p.bodyClassName),style:a.style||p.toastStyle,bodyStyle:a.bodyStyle||p.bodyStyle,onClick:a.onClick||p.onClick,pauseOnHover:v(a.pauseOnHover)?a.pauseOnHover:p.pauseOnHover,pauseOnFocusLoss:v(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:p.pauseOnFocusLoss,draggable:v(a.draggable)?a.draggable:p.draggable,draggablePercent:a.draggablePercent||p.draggablePercent,draggableDirection:a.draggableDirection||p.draggableDirection,closeOnClick:v(a.closeOnClick)?a.closeOnClick:p.closeOnClick,progressClassName:T(a.progressClassName||p.progressClassName),progressStyle:a.progressStyle||p.progressStyle,autoClose:!a.isLoading&&(N=a.autoClose,R=p.autoClose,!1===N||g(N)&&N>0?N:R),hideProgressBar:v(a.hideProgressBar)?a.hideProgressBar:p.hideProgressBar,progress:a.progress,role:a.role||p.role,deleteToast:function(){var t=C(f.get(s),"removed");f.delete(s),O.emit(4,t);var e=x.queue.length;if(x.count=b(s)?x.count-1:x.count-x.displayedToast,x.count<0&&(x.count=0),e>0){var o=b(s)?1:x.props.limit;if(1===e||1===o)x.displayedToast++,I();else{var r=o>e?e:o;x.displayedToast=r;for(var a=0;a<r;a++)I()}}else n()}};P.iconOut=w(P),y(a.onOpen)&&(P.onOpen=a.onOpen),y(a.onClose)&&(P.onClose=a.onClose),P.closeButton=p.closeButton,!1===a.closeButton||E(a.closeButton)?P.closeButton=a.closeButton:!0===a.closeButton&&(P.closeButton=!E(p.closeButton)||p.closeButton);var M=t;(0,i.isValidElement)(t)&&!h(t.type)?M=(0,i.cloneElement)(t,{closeToast:Z,toastProps:P,data:u}):y(t)&&(M=t({closeToast:Z,toastProps:P,data:u})),p.limit&&p.limit>0&&x.count>p.limit&&L?x.queue.push({toastContent:M,toastProps:P,staleId:r}):g(o)?setTimeout((function(){k(M,P,r)}),o):k(M,P,r)}}function k(t,e,n){var o=e.toastId;n&&f.delete(n);var r={content:t,props:e};f.set(o,r),l((function(t){return[].concat((0,u.Z)(t),[o]).filter((function(t){return t!==n}))})),O.emit(4,C(r,null==r.props.updateId?"added":"updated"))}return(0,i.useEffect)((function(){return x.containerId=t.containerId,O.cancelEmit(3).on(0,L).on(1,(function(t){return d.current&&_(t)})).on(5,Z).emit(2,x),function(){f.clear(),O.emit(3,x)}}),[]),(0,i.useEffect)((function(){x.props=t,x.isToastActive=p,x.displayedToast=s.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(f.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:d,isToastActive:p}}function N(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function R(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function P(t){var e=(0,i.useState)(!1),n=(0,o.Z)(e,2),r=n[0],a=n[1],s=(0,i.useState)(!1),l=(0,o.Z)(s,2),c=l[0],u=l[1],d=(0,i.useRef)(null),f=(0,i.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,i.useRef)(t),m=t.autoClose,g=t.pauseOnHover,v=t.closeToast,h=t.onClick,T=t.closeOnClick;function b(e){if(t.draggable){f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",C),document.addEventListener("touchmove",_),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=N(e.nativeEvent),f.y=R(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function E(){if(f.boundingRect){var e=f.boundingRect,n=e.top,o=e.bottom,r=e.left,a=e.right;t.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?Z():x()}}function x(){a(!0)}function Z(){a(!1)}function _(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&Z(),f.x=N(e),f.y=R(e),"x"===t.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+t.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",C);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate"+t.draggableDirection+"(0)",e.style.opacity="1"}}(0,i.useEffect)((function(){p.current=t})),(0,i.useEffect)((function(){return d.current&&d.current.addEventListener("d",x,{once:!0}),y(t.onOpen)&&t.onOpen((0,i.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;y(t.onClose)&&t.onClose((0,i.isValidElement)(t.children)&&t.children.props)}}),[]),(0,i.useEffect)((function(){return t.pauseOnFocusLoss&&function(){document.hasFocus()||Z();window.addEventListener("focus",x),window.addEventListener("blur",Z)}(),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",Z))}}),[t.pauseOnFocusLoss]);var O={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&g&&(O.onMouseEnter=Z,O.onMouseLeave=x),T&&(O.onClick=function(t){h&&h(t),f.canCloseOnClick&&v()}),{playToast:x,pauseToast:Z,isRunning:r,preventExitTransition:c,toastRef:d,eventHandlers:O}}function M(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,r=void 0===o?"close":o;return i.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":r},i.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function A(t){var e=t.delay,n=t.isRunning,o=t.closeToast,r=t.type,a=t.hide,c=t.className,u=t.style,d=t.controlledProgress,p=t.progress,m=t.rtl,g=t.isIn,v=t.theme,h=(0,l.Z)((0,l.Z)({},u),{},{animationDuration:e+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});d&&(h.transform="scaleX("+p+")");var T=f("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+r,(0,s.Z)({},"Toastify__progress-bar--rtl",m)),b=y(c)?c({rtl:m,type:r,defaultClassName:T}):f(T,c),E=(0,s.Z)({},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){g&&o()});return i.createElement("div",(0,l.Z)({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:b,style:h},E))}A.defaultProps={type:Z.DEFAULT,hide:!1};var B=function(t){var e=P(t),n=e.isRunning,o=e.preventExitTransition,r=e.toastRef,a=e.eventHandlers,c=t.closeButton,u=t.children,d=t.autoClose,p=t.onClick,m=t.type,g=t.hideProgressBar,v=t.closeToast,h=t.transition,T=t.position,b=t.className,E=t.style,x=t.bodyClassName,Z=t.bodyStyle,_=t.progressClassName,C=t.progressStyle,O=t.updateId,I=t.role,L=t.progress,w=t.rtl,k=t.toastId,N=t.deleteToast,R=t.isIn,B=t.isLoading,S=t.iconOut,D=t.theme,j=f("Toastify__toast","Toastify__toast-theme--"+D,"Toastify__toast--"+m,(0,s.Z)({},"Toastify__toast--rtl",w)),z=y(b)?b({rtl:w,position:T,type:m,defaultClassName:j}):f(j,b),F=!!L,H={closeToast:v,type:m,theme:D},q=null;return!1===c||(q=y(c)?c(H):i.isValidElement(c)?i.cloneElement(c,H):M(H)),i.createElement(h,{isIn:R,done:N,position:T,preventExitTransition:o,nodeRef:r},i.createElement("div",(0,l.Z)((0,l.Z)({id:k,onClick:p,className:z},a),{},{style:E,ref:r}),i.createElement("div",(0,l.Z)((0,l.Z)({},R&&{role:I}),{},{className:y(x)?x({type:m}):f("Toastify__toast-body",x),style:Z}),null!=S&&i.createElement("div",{className:f("Toastify__toast-icon",(0,s.Z)({},"Toastify--animate-icon Toastify__zoom-enter",!B))},S),i.createElement("div",null,u)),q,(d||F)&&i.createElement(A,(0,l.Z)((0,l.Z)({},O&&!F?{key:"pb-"+O}:{}),{},{rtl:w,theme:D,delay:d,isRunning:n,isIn:R,closeToast:v,hide:g,type:m,style:C,className:_,controlledProgress:F,progress:L}))))},S=_({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),D=(_({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),_({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),_({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,i.forwardRef)((function(t,e){var n=k(t),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,c=t.className,u=t.style,d=t.rtl,p=t.containerId;function m(t){var e=f("Toastify__toast-container","Toastify__toast-container--"+t,(0,s.Z)({},"Toastify__toast-container--rtl",d));return y(c)?c({position:t,rtl:d,defaultClassName:e}):f(e,T(c))}return(0,i.useEffect)((function(){e&&(e.current=r.current)}),[]),i.createElement("div",{ref:r,className:"Toastify",id:p},o((function(t,e){var n=e.length?(0,l.Z)({},u):(0,l.Z)((0,l.Z)({},u),{},{pointerEvents:"none"});return i.createElement("div",{className:m(t),style:n,key:"container-"+t},e.map((function(t,n){var o=t.content,r=t.props;return i.createElement(B,(0,l.Z)((0,l.Z)({},r),{},{isIn:a(r.toastId),style:(0,l.Z)((0,l.Z)({},r.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-"+r.key}),o)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:x.TOP_RIGHT,transition:S,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:M,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var j,z=new Map,F=[];function H(){return Math.random().toString(36).substring(2,9)}function q(t){return t&&(h(t.toastId)||g(t.toastId))?t.toastId:H()}function Q(t,e){return z.size>0?O.emit(0,t,e):F.push({content:t,options:e}),e.toastId}function U(t,e){return(0,l.Z)((0,l.Z)({},e),{},{type:e&&e.type||t,toastId:q(e)})}function V(t){return function(e,n){return Q(e,U(t,n))}}function G(t,e){return Q(t,U(Z.DEFAULT,e))}G.loading=function(t,e){return Q(t,U(Z.DEFAULT,(0,l.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},G.promise=function(t,e,n){var o,r=e.pending,a=e.error,i=e.success;r&&(o=h(r)?G.loading(r,n):G.loading(r.render,(0,l.Z)((0,l.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(t,e,r){if(null!=e){var a=(0,l.Z)((0,l.Z)((0,l.Z)({type:t},s),n),{},{data:r}),i=h(e)?{render:e}:e;return o?G.update(o,(0,l.Z)((0,l.Z)({},a),i)):G(i.render,(0,l.Z)((0,l.Z)({},a),i)),r}G.dismiss(o)},u=y(t)?t():t;return u.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),u},G.success=V(Z.SUCCESS),G.info=V(Z.INFO),G.error=V(Z.ERROR),G.warning=V(Z.WARNING),G.warn=G.warning,G.dark=function(t,e){return Q(t,U(Z.DEFAULT,(0,l.Z)({theme:"dark"},e)))},G.dismiss=function(t){z.size>0?O.emit(1,t):F=F.filter((function(e){return b(t)&&e.options.toastId!==t}))},G.clearWaitingQueue=function(t){return void 0===t&&(t={}),O.emit(5,t)},G.isActive=function(t){var e=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},G.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=z.get(n||j);return o?o.getToast(t):null}(t,e);if(n){var o=n.props,r=n.content,a=(0,l.Z)((0,l.Z)((0,l.Z)({},o),e),{},{toastId:e.toastId||t,updateId:H()});a.toastId!==t&&(a.staleId=t);var i=a.render||r;delete a.render,Q(i,a)}}),0)},G.done=function(t){G.update(t,{progress:1})},G.onChange=function(t){return O.on(4,t),function(){O.off(4,t)}},G.POSITION=x,G.TYPE=Z,O.on(2,(function(t){j=t.containerId||t,z.set(j,t),F.forEach((function(t){O.emit(0,t.content,t.options)})),F=[]})).on(3,(function(t){z.delete(t.containerId||t),0===z.size&&O.off(0).off(1).off(5)}));var W,K,X,Y,$,J,tt,et,nt,ot,rt,at,it=n(26),st=n(168),lt=n(842),ct=lt.Z.input(W||(W=(0,st.Z)(["\n\twidth: 600px;\n\tdisplay: block;\n\tpadding: 4px;\n\theight: 28px;\n\tborder-right: transparent;\n\tborder-bottom-left-radius: 4px;\n\tborder-top-left-radius: 4px;\n\tborder: 1px solid rgb(255, 165, 0);\n\tbackground-color: lightgoldenrodyellow;\n\t:hover,\n\t:focus {\n\t\toutline: 1px solid white;\n\t\tborder: 1px solid rgb(255, 165, 0);\n\t}\n"]))),ut=n(184),dt=function(t){var e=t.onChange;return(0,ut.jsx)(ct,{name:"searchQuery",onChange:function(t){return e(t.target.value)}})},ft=n(639),pt=n(983);var mt=lt.Z.main(K||(K=(0,st.Z)(["\n\tmargin: 0px auto;\n"]))),gt=lt.Z.section(X||(X=(0,st.Z)(["\n\tpadding: 40px 0px;\n"]))),vt=lt.Z.div(Y||(Y=(0,st.Z)(["\n\twidth: 1200px;\n\tmargin: 0px auto;\n\tpadding: 0px 15px;\n"]))),ht=lt.Z.form($||($=(0,st.Z)(["\n\tmargin: 0px auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),yt=lt.Z.label(J||(J=(0,st.Z)([""]))),Tt=lt.Z.button(tt||(tt=(0,st.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 18px;\n\twidth: 40px;\n\theight: 40px;\n\tgap: 16px;\n\tborder-radius: 4px;\n\tborder-bottom-left-radius: 0px;\n\tborder-top-left-radius: 0px;\n\ttext-decoration: none;\n\tborder: none;\n\n\tcolor: rgb(0, 0, 0);\n\tbackground-color: rgb(255, 165, 0);\n\n\ttransition: 250ms color ease-in-out, 250ms background-color ease-in-out,\n\t\t250ms border ease-in-out, 250ms transform ease-in-out;\n\t:hover {\n\t\tcolor: rgb(255, 165, 0);\n\t\tbackground-color: rgb(0, 0, 0);\n\n\t\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,\n\t\t\trgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n\t}\n"]))),bt=(0,lt.Z)((function(t){return(0,pt.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M20.94 11A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}}]})(t)}))(et||(et=(0,st.Z)(["\n\twidth: 100%;\n\theight: 100%;\n\tfill: rgb(0, 0, 0);\n\ttransition: 250ms fill ease-in;\n\t:hover {\n\t\tfill: rgb(255, 165, 0);\n\t}\n"]))),Et=lt.Z.ul(nt||(nt=(0,st.Z)(["\n\tlist-style: none;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tgap: 32px;\n"]))),xt=lt.Z.li(ot||(ot=(0,st.Z)(["\n\tdisplay: block;\n\twidth: 300px;\n\theight: 400px;\n"]))),Zt=lt.Z.img(rt||(rt=(0,st.Z)(["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\n\ttransition: 250ms transform ease-in-out, 250ms filter ease-in-out;\n\n\t:hover {\n\t\ttransform: scale(1.05);\n\t\tfilter: brightness(115%);\n\t}\n"]))),_t=lt.Z.h2(at||(at=(0,st.Z)(["\n\tcolor: orange;\n\tfont-weight: 600;\n\tfont-size: 18px;\n"]))),Ct=function(){var t=(0,i.useState)(null),e=(0,o.Z)(t,2),n=e[0],s=e[1],l=(0,i.useState)([]),c=(0,o.Z)(l,2),u=c[0],d=c[1],f=(0,r.lr)(),p=(0,o.Z)(f,2),m=p[0],g=p[1],v=(0,i.useState)(!1),h=(0,o.Z)(v,2),y=h[0],T=h[1],b=(0,a.TH)(),E=m.get("query");return(0,i.useEffect)((function(){E&&(T(!0),(0,it.Kv)(E).then((function(t){d(t.results)})).catch((function(t){return console.log(t)})).finally(T(!1)),setTimeout((function(){setTimeout((function(){0===u.length&&G("Please enter valid Movie Name !")}),1e3)}),2e3))}),[E]),(0,ut.jsxs)(mt,{children:[(0,ut.jsxs)(gt,{children:[y&&(0,ut.jsx)(ft.$,{}),(0,ut.jsx)(vt,{children:(0,ut.jsxs)(ht,{onSubmit:function(t){t.preventDefault(),g(n),t.target.reset()},children:[(0,ut.jsx)(yt,{htmlFor:"searchQuery",children:(0,ut.jsx)(dt,{onChange:function(t){s(""!==t?{query:t}:{})}})}),(0,ut.jsx)(Tt,{type:"submit",children:(0,ut.jsx)(bt,{})})]})})]}),(0,ut.jsx)(gt,{children:(0,ut.jsx)(vt,{children:(0,ut.jsx)(Et,{children:null!==u&&void 0!==u&&u.length?u.map((function(t){var e=t.id,n=t.poster_path,o=t.title,a="".concat(it.Zm).concat(n);return(0,ut.jsx)(xt,{children:(0,ut.jsx)(r.rU,{to:"/movies/".concat(e),state:{from:b},children:(0,ut.jsx)(Zt,{src:a,alt:o})})},e)})):(0,ut.jsx)(_t,{children:"Please enter the search query"})})})}),(0,ut.jsx)(D,{})]})}}}]);
//# sourceMappingURL=59.eaa59e35.chunk.js.map