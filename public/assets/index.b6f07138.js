var r_=Object.defineProperty,i_=Object.defineProperties;var s_=Object.getOwnPropertyDescriptors;var Mf=Object.getOwnPropertySymbols;var o_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable;var Uf=(t,e,n)=>e in t?r_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,wu=(t,e)=>{for(var n in e||(e={}))o_.call(e,n)&&Uf(t,n,e[n]);if(Mf)for(var n of Mf(e))a_.call(e,n)&&Uf(t,n,e[n]);return t},_u=(t,e)=>i_(t,s_(e));const l_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};l_();var P={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zs=Symbol.for("react.element"),u_=Symbol.for("react.portal"),c_=Symbol.for("react.fragment"),h_=Symbol.for("react.strict_mode"),d_=Symbol.for("react.profiler"),f_=Symbol.for("react.provider"),p_=Symbol.for("react.context"),m_=Symbol.for("react.forward_ref"),g_=Symbol.for("react.suspense"),y_=Symbol.for("react.memo"),v_=Symbol.for("react.lazy"),Ff=Symbol.iterator;function w_(t){return t===null||typeof t!="object"?null:(t=Ff&&t[Ff]||t["@@iterator"],typeof t=="function"?t:null)}var Ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cg=Object.assign,Rg={};function ki(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Ig}ki.prototype.isReactComponent={};ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ag(){}Ag.prototype=ki.prototype;function $h(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Ig}var Mh=$h.prototype=new Ag;Mh.constructor=$h;Cg(Mh,ki.prototype);Mh.isPureReactComponent=!0;var jf=Array.isArray,xg=Object.prototype.hasOwnProperty,Uh={current:null},Ng={key:!0,ref:!0,__self:!0,__source:!0};function Pg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xg.call(e,r)&&!Ng.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zs,type:t,key:s,ref:o,props:i,_owner:Uh.current}}function __(t,e){return{$$typeof:Zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zs}function E_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bf=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E_(""+t.key):e.toString(36)}function ia(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zs:case u_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Eu(o,0):r,jf(i)?(n="",t!=null&&(n=t.replace(Bf,"$&/")+"/"),ia(i,e,n,"",function(u){return u})):i!=null&&(Fh(i)&&(i=__(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Eu(s,a);o+=ia(s,e,n,l,i)}else if(l=w_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Eu(s,a++),o+=ia(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Po(t,e,n){if(t==null)return t;var r=[],i=0;return ia(t,r,"","",function(s){return e.call(n,s,i++)}),r}function S_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ye={current:null},sa={transition:null},T_={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:sa,ReactCurrentOwner:Uh};z.Children={map:Po,forEach:function(t,e,n){Po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Po(t,function(){e++}),e},toArray:function(t){return Po(t,function(e){return e})||[]},only:function(t){if(!Fh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=ki;z.Fragment=c_;z.Profiler=d_;z.PureComponent=$h;z.StrictMode=h_;z.Suspense=g_;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xg.call(e,l)&&!Ng.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Zs,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:p_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:f_,_context:t},t.Consumer=t};z.createElement=Pg;z.createFactory=function(t){var e=Pg.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:m_,render:t}};z.isValidElement=Fh;z.lazy=function(t){return{$$typeof:v_,_payload:{_status:-1,_result:t},_init:S_}};z.memo=function(t,e){return{$$typeof:y_,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=sa.transition;sa.transition={};try{t()}finally{sa.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Ye.current.useCallback(t,e)};z.useContext=function(t){return Ye.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Ye.current.useDeferredValue(t)};z.useEffect=function(t,e){return Ye.current.useEffect(t,e)};z.useId=function(){return Ye.current.useId()};z.useImperativeHandle=function(t,e,n){return Ye.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Ye.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Ye.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Ye.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Ye.current.useReducer(t,e,n)};z.useRef=function(t){return Ye.current.useRef(t)};z.useState=function(t){return Ye.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Ye.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Ye.current.useTransition()};z.version="18.1.0";P.exports=z;var An=P.exports,Og={exports:{}},gt={},Dg={exports:{}},Lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,F){var B=N.length;N.push(F);e:for(;0<B;){var he=B-1>>>1,Se=N[he];if(0<i(Se,F))N[he]=F,N[B]=Se,B=he;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var F=N[0],B=N.pop();if(B!==F){N[0]=B;e:for(var he=0,Se=N.length,xo=Se>>>1;he<xo;){var Jn=2*(he+1)-1,vu=N[Jn],Zn=Jn+1,No=N[Zn];if(0>i(vu,B))Zn<Se&&0>i(No,vu)?(N[he]=No,N[Zn]=B,he=Zn):(N[he]=vu,N[Jn]=B,he=Jn);else if(Zn<Se&&0>i(No,B))N[he]=No,N[Zn]=B,he=Zn;else break e}}return F}function i(N,F){var B=N.sortIndex-F.sortIndex;return B!==0?B:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,y=!1,g=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=N)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function v(N){if(w=!1,m(N),!g)if(n(l)!==null)g=!0,gu(E);else{var F=n(u);F!==null&&yu(v,F.startTime-N)}}function E(N,F){g=!1,w&&(w=!1,p(T),T=-1),y=!0;var B=h;try{for(m(F),d=n(l);d!==null&&(!(d.expirationTime>F)||N&&!re());){var he=d.callback;if(typeof he=="function"){d.callback=null,h=d.priorityLevel;var Se=he(d.expirationTime<=F);F=t.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&r(l),m(F)}else r(l);d=n(l)}if(d!==null)var xo=!0;else{var Jn=n(u);Jn!==null&&yu(v,Jn.startTime-F),xo=!1}return xo}finally{d=null,h=B,y=!1}}var R=!1,_=null,T=-1,M=5,L=-1;function re(){return!(t.unstable_now()-L<M)}function vt(){if(_!==null){var N=t.unstable_now();L=N;var F=!0;try{F=_(!0,N)}finally{F?Gt():(R=!1,_=null)}}else R=!1}var Gt;if(typeof f=="function")Gt=function(){f(vt)};else if(typeof MessageChannel!="undefined"){var Qn=new MessageChannel,$f=Qn.port2;Qn.port1.onmessage=vt,Gt=function(){$f.postMessage(null)}}else Gt=function(){C(vt,0)};function gu(N){_=N,R||(R=!0,Gt())}function yu(N,F){T=C(function(){N(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,gu(E))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var B=h;h=F;try{return N()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=h;h=N;try{return F()}finally{h=B}},t.unstable_scheduleCallback=function(N,F,B){var he=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?he+B:he):B=he,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=B+Se,N={id:c++,callback:F,priorityLevel:N,startTime:B,expirationTime:Se,sortIndex:-1},B>he?(N.sortIndex=B,e(u,N),n(l)===null&&N===n(u)&&(w?(p(T),T=-1):w=!0,yu(v,B-he))):(N.sortIndex=Se,e(l,N),g||y||(g=!0,gu(E))),N},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(N){var F=h;return function(){var B=h;h=F;try{return N.apply(this,arguments)}finally{h=B}}}})(Lg);Dg.exports=Lg;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg=P.exports,ft=Dg.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $g=new Set,ws={};function Nr(t,e){hi(t,e),hi(t+"Capture",e)}function hi(t,e){for(ws[t]=e,t=0;t<e.length;t++)$g.add(e[t])}var ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),gc=Object.prototype.hasOwnProperty,k_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vf={},zf={};function I_(t){return gc.call(zf,t)?!0:gc.call(Vf,t)?!1:k_.test(t)?zf[t]=!0:(Vf[t]=!0,!1)}function C_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R_(t,e,n,r){if(e===null||typeof e=="undefined"||C_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new Qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new Qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new Qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new Qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new Qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new Qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new Qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new Qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new Qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var jh=/[\-:]([a-z])/g;function Bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jh,Bh);be[e]=new Qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jh,Bh);be[e]=new Qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jh,Bh);be[e]=new Qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new Qe(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new Qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R_(e,n,i,r)&&(n=null),r||i===null?I_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mn=bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),Mg=Symbol.for("react.provider"),Ug=Symbol.for("react.context"),Hh=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),Fg=Symbol.for("react.offscreen"),Hf=Symbol.iterator;function $i(t){return t===null||typeof t!="object"?null:(t=Hf&&t[Hf]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Su;function Yi(t){if(Su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Su=e&&e[1]||""}return`
`+Su+t}var Tu=!1;function ku(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yi(t):""}function A_(t){switch(t.tag){case 5:return Yi(t.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function _c(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ur:return"Fragment";case Mr:return"Portal";case yc:return"Profiler";case zh:return"StrictMode";case vc:return"Suspense";case wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ug:return(t.displayName||"Context")+".Consumer";case Mg:return(t._context.displayName||"Context")+".Provider";case Hh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wh:return e=t.displayName||null,e!==null?e:_c(t.type)||"Memo";case vn:e=t._payload,t=t._init;try{return _c(t(e))}catch{}}return null}function x_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _c(e);case 8:return e===zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function N_(t){var e=jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=N_(t))}function Bg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ec(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Wf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vg(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function Sc(t,e){Vg(t,e);var n=Fn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tc(t,e.type,Fn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tc(t,e,n){(e!=="number"||Ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qi=Array.isArray;function Jr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Qi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fn(n)}}function zg(t,e){var n=Fn(e.value),r=Fn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ic(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,Wg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P_=["Webkit","ms","Moz","O"];Object.keys(is).forEach(function(t){P_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),is[e]=is[t]})});function Kg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||is.hasOwnProperty(t)&&is[t]?(""+e).trim():e+"px"}function qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var O_=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cc(t,e){if(e){if(O_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function Kh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xc=null,Zr=null,ei=null;function Xf(t){if(t=no(t)){if(typeof xc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Al(e),xc(t.stateNode,t.type,e))}}function Gg(t){Zr?ei?ei.push(t):ei=[t]:Zr=t}function Xg(){if(Zr){var t=Zr,e=ei;if(ei=Zr=null,Xf(t),e)for(t=0;t<e.length;t++)Xf(e[t])}}function Yg(t,e){return t(e)}function Qg(){}var Iu=!1;function Jg(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return Yg(t,e,n)}finally{Iu=!1,(Zr!==null||ei!==null)&&(Qg(),Xg())}}function Es(t,e){var n=t.stateNode;if(n===null)return null;var r=Al(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Nc=!1;if(ln)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{Nc=!1}function D_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ss=!1,Ra=null,Aa=!1,Pc=null,L_={onError:function(t){ss=!0,Ra=t}};function b_(t,e,n,r,i,s,o,a,l){ss=!1,Ra=null,D_.apply(L_,arguments)}function $_(t,e,n,r,i,s,o,a,l){if(b_.apply(this,arguments),ss){if(ss){var u=Ra;ss=!1,Ra=null}else throw Error(S(198));Aa||(Aa=!0,Pc=u)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yf(t){if(Pr(t)!==t)throw Error(S(188))}function M_(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yf(i),t;if(s===r)return Yf(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function ey(t){return t=M_(t),t!==null?ty(t):null}function ty(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ty(t);if(e!==null)return e;t=t.sibling}return null}var ny=ft.unstable_scheduleCallback,Qf=ft.unstable_cancelCallback,U_=ft.unstable_shouldYield,F_=ft.unstable_requestPaint,fe=ft.unstable_now,j_=ft.unstable_getCurrentPriorityLevel,qh=ft.unstable_ImmediatePriority,ry=ft.unstable_UserBlockingPriority,xa=ft.unstable_NormalPriority,B_=ft.unstable_LowPriority,iy=ft.unstable_IdlePriority,kl=null,Bt=null;function V_(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:W_,z_=Math.log,H_=Math.LN2;function W_(t){return t>>>=0,t===0?32:31-(z_(t)/H_|0)|0}var bo=64,$o=4194304;function Ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Na(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ji(a):(s&=o,s!==0&&(r=Ji(s)))}else o=n&~i,o!==0?r=Ji(o):s!==0&&(r=Ji(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),i=1<<n,r|=t[n],e&=~i;return r}function K_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=K_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sy(){var t=bo;return bo<<=1,(bo&4194240)===0&&(bo=64),t}function Cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function G_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function oy(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ay,Xh,ly,uy,cy,Dc=!1,Mo=[],On=null,Dn=null,Ln=null,Ss=new Map,Ts=new Map,_n=[],X_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(e.pointerId)}}function Ui(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=no(e),e!==null&&Xh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Y_(t,e,n,r,i){switch(e){case"focusin":return On=Ui(On,t,e,n,r,i),!0;case"dragenter":return Dn=Ui(Dn,t,e,n,r,i),!0;case"mouseover":return Ln=Ui(Ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ss.set(s,Ui(Ss.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ts.set(s,Ui(Ts.get(s)||null,t,e,n,r,i)),!0}return!1}function hy(t){var e=rr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zg(n),e!==null){t.blockedOn=e,cy(t.priority,function(){ly(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ac=r,n.target.dispatchEvent(r),Ac=null}else return e=no(n),e!==null&&Xh(e),t.blockedOn=n,!1;e.shift()}return!0}function Zf(t,e,n){oa(t)&&n.delete(e)}function Q_(){Dc=!1,On!==null&&oa(On)&&(On=null),Dn!==null&&oa(Dn)&&(Dn=null),Ln!==null&&oa(Ln)&&(Ln=null),Ss.forEach(Zf),Ts.forEach(Zf)}function Fi(t,e){t.blockedOn===e&&(t.blockedOn=null,Dc||(Dc=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,Q_)))}function ks(t){function e(i){return Fi(i,t)}if(0<Mo.length){Fi(Mo[0],t);for(var n=1;n<Mo.length;n++){var r=Mo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(On!==null&&Fi(On,t),Dn!==null&&Fi(Dn,t),Ln!==null&&Fi(Ln,t),Ss.forEach(e),Ts.forEach(e),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)hy(n),n.blockedOn===null&&_n.shift()}var ti=mn.ReactCurrentBatchConfig,Pa=!0;function J_(t,e,n,r){var i=X,s=ti.transition;ti.transition=null;try{X=1,Yh(t,e,n,r)}finally{X=i,ti.transition=s}}function Z_(t,e,n,r){var i=X,s=ti.transition;ti.transition=null;try{X=4,Yh(t,e,n,r)}finally{X=i,ti.transition=s}}function Yh(t,e,n,r){if(Pa){var i=Lc(t,e,n,r);if(i===null)$u(t,e,r,Oa,n),Jf(t,r);else if(Y_(i,t,e,n,r))r.stopPropagation();else if(Jf(t,r),e&4&&-1<X_.indexOf(t)){for(;i!==null;){var s=no(i);if(s!==null&&ay(s),s=Lc(t,e,n,r),s===null&&$u(t,e,r,Oa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $u(t,e,r,null,n)}}var Oa=null;function Lc(t,e,n,r){if(Oa=null,t=Kh(r),t=rr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oa=t,null}function dy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j_()){case qh:return 1;case ry:return 4;case xa:case B_:return 16;case iy:return 536870912;default:return 16}default:return 16}}var xn=null,Qh=null,aa=null;function fy(){if(aa)return aa;var t,e=Qh,n=e.length,r,i="value"in xn?xn.value:xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return aa=i.slice(t,1<r?1-r:void 0)}function la(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function ep(){return!1}function yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:ep,this.isPropagationStopped=ep,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=yt(Ii),to=oe({},Ii,{view:0,detail:0}),eE=yt(to),Ru,Au,ji,Il=oe({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(Ru=t.screenX-ji.screenX,Au=t.screenY-ji.screenY):Au=Ru=0,ji=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),tp=yt(Il),tE=oe({},Il,{dataTransfer:0}),nE=yt(tE),rE=oe({},to,{relatedTarget:0}),xu=yt(rE),iE=oe({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),sE=yt(iE),oE=oe({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aE=yt(oE),lE=oe({},Ii,{data:0}),np=yt(lE),uE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hE[t])?!!e[t]:!1}function Zh(){return dE}var fE=oe({},to,{key:function(t){if(t.key){var e=uE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zh,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pE=yt(fE),mE=oe({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=yt(mE),gE=oe({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zh}),yE=yt(gE),vE=oe({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),wE=yt(vE),_E=oe({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EE=yt(_E),SE=[9,13,27,32],ed=ln&&"CompositionEvent"in window,os=null;ln&&"documentMode"in document&&(os=document.documentMode);var TE=ln&&"TextEvent"in window&&!os,py=ln&&(!ed||os&&8<os&&11>=os),ip=String.fromCharCode(32),sp=!1;function my(t,e){switch(t){case"keyup":return SE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function kE(t,e){switch(t){case"compositionend":return gy(e);case"keypress":return e.which!==32?null:(sp=!0,ip);case"textInput":return t=e.data,t===ip&&sp?null:t;default:return null}}function IE(t,e){if(Fr)return t==="compositionend"||!ed&&my(t,e)?(t=fy(),aa=Qh=xn=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return py&&e.locale!=="ko"?null:e.data;default:return null}}var CE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CE[t.type]:e==="textarea"}function yy(t,e,n,r){Gg(r),e=Da(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var as=null,Is=null;function RE(t){Ay(t,0)}function Cl(t){var e=Vr(t);if(Bg(e))return t}function AE(t,e){if(t==="change")return e}var vy=!1;if(ln){var Nu;if(ln){var Pu="oninput"in document;if(!Pu){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Pu=typeof ap.oninput=="function"}Nu=Pu}else Nu=!1;vy=Nu&&(!document.documentMode||9<document.documentMode)}function lp(){as&&(as.detachEvent("onpropertychange",wy),Is=as=null)}function wy(t){if(t.propertyName==="value"&&Cl(Is)){var e=[];yy(e,Is,t,Kh(t)),Jg(RE,e)}}function xE(t,e,n){t==="focusin"?(lp(),as=e,Is=n,as.attachEvent("onpropertychange",wy)):t==="focusout"&&lp()}function NE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(Is)}function PE(t,e){if(t==="click")return Cl(e)}function OE(t,e){if(t==="input"||t==="change")return Cl(e)}function DE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lt=typeof Object.is=="function"?Object.is:DE;function Cs(t,e){if(Lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gc.call(e,i)||!Lt(t[i],e[i]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cp(t,e){var n=up(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function _y(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_y(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ey(){for(var t=window,e=Ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ca(t.document)}return e}function td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LE(t){var e=Ey(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_y(n.ownerDocument.documentElement,n)){if(r!==null&&td(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cp(n,s);var o=cp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bE=ln&&"documentMode"in document&&11>=document.documentMode,jr=null,bc=null,ls=null,$c=!1;function hp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$c||jr==null||jr!==Ca(r)||(r=jr,"selectionStart"in r&&td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ls&&Cs(ls,r)||(ls=r,r=Da(bc,"onSelect"),0<r.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=jr)))}function Fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Br={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Ou={},Sy={};ln&&(Sy=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function Rl(t){if(Ou[t])return Ou[t];if(!Br[t])return t;var e=Br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sy)return Ou[t]=e[n];return t}var Ty=Rl("animationend"),ky=Rl("animationiteration"),Iy=Rl("animationstart"),Cy=Rl("transitionend"),Ry=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(t,e){Ry.set(t,e),Nr(e,[t])}for(var Du=0;Du<dp.length;Du++){var Lu=dp[Du],$E=Lu.toLowerCase(),ME=Lu[0].toUpperCase()+Lu.slice(1);Hn($E,"on"+ME)}Hn(Ty,"onAnimationEnd");Hn(ky,"onAnimationIteration");Hn(Iy,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(Cy,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function fp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$_(r,e,void 0,t),t.currentTarget=null}function Ay(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;fp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;fp(i,a,u),s=l}}}if(Aa)throw t=Pc,Aa=!1,Pc=null,t}function J(t,e){var n=e[Bc];n===void 0&&(n=e[Bc]=new Set);var r=t+"__bubble";n.has(r)||(xy(e,t,2,!1),n.add(r))}function bu(t,e,n){var r=0;e&&(r|=4),xy(n,t,r,e)}var jo="_reactListening"+Math.random().toString(36).slice(2);function Rs(t){if(!t[jo]){t[jo]=!0,$g.forEach(function(n){n!=="selectionchange"&&(UE.has(n)||bu(n,!1,t),bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jo]||(e[jo]=!0,bu("selectionchange",!1,e))}}function xy(t,e,n,r){switch(dy(e)){case 1:var i=J_;break;case 4:i=Z_;break;default:i=Yh}n=i.bind(null,e,n,t),i=void 0,!Nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $u(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Jg(function(){var u=s,c=Kh(n),d=[];e:{var h=Ry.get(t);if(h!==void 0){var y=Jh,g=t;switch(t){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":y=pE;break;case"focusin":g="focus",y=xu;break;case"focusout":g="blur",y=xu;break;case"beforeblur":case"afterblur":y=xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=nE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=yE;break;case Ty:case ky:case Iy:y=sE;break;case Cy:y=wE;break;case"scroll":y=eE;break;case"wheel":y=EE;break;case"copy":case"cut":case"paste":y=aE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=rp}var w=(e&4)!==0,C=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,m;f!==null;){m=f;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Es(f,p),v!=null&&w.push(As(f,v,m)))),C)break;f=f.return}0<w.length&&(h=new y(h,g,null,n,c),d.push({event:h,listeners:w}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==Ac&&(g=n.relatedTarget||n.fromElement)&&(rr(g)||g[un]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?rr(g):null,g!==null&&(C=Pr(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(w=tp,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=rp,v="onPointerLeave",p="onPointerEnter",f="pointer"),C=y==null?h:Vr(y),m=g==null?h:Vr(g),h=new w(v,f+"leave",y,n,c),h.target=C,h.relatedTarget=m,v=null,rr(c)===u&&(w=new w(p,f+"enter",g,n,c),w.target=m,w.relatedTarget=C,v=w),C=v,y&&g)t:{for(w=y,p=g,f=0,m=w;m;m=Dr(m))f++;for(m=0,v=p;v;v=Dr(v))m++;for(;0<f-m;)w=Dr(w),f--;for(;0<m-f;)p=Dr(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Dr(w),p=Dr(p)}w=null}else w=null;y!==null&&pp(d,h,y,w,!1),g!==null&&C!==null&&pp(d,C,g,w,!0)}}e:{if(h=u?Vr(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var E=AE;else if(op(h))if(vy)E=OE;else{E=NE;var R=xE}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=PE);if(E&&(E=E(t,u))){yy(d,E,n,c);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Tc(h,"number",h.value)}switch(R=u?Vr(u):window,t){case"focusin":(op(R)||R.contentEditable==="true")&&(jr=R,bc=u,ls=null);break;case"focusout":ls=bc=jr=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,hp(d,n,c);break;case"selectionchange":if(bE)break;case"keydown":case"keyup":hp(d,n,c)}var _;if(ed)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Fr?my(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(py&&n.locale!=="ko"&&(Fr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Fr&&(_=fy()):(xn=c,Qh="value"in xn?xn.value:xn.textContent,Fr=!0)),R=Da(u,T),0<R.length&&(T=new np(T,t,null,n,c),d.push({event:T,listeners:R}),_?T.data=_:(_=gy(n),_!==null&&(T.data=_)))),(_=TE?kE(t,n):IE(t,n))&&(u=Da(u,"onBeforeInput"),0<u.length&&(c=new np("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Ay(d,e)})}function As(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Da(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Es(t,n),s!=null&&r.unshift(As(t,s,i)),s=Es(t,e),s!=null&&r.push(As(t,s,i))),t=t.return}return r}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Es(n,s),l!=null&&o.unshift(As(n,l,a))):i||(l=Es(n,s),l!=null&&o.push(As(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FE=/\r\n?/g,jE=/\u0000|\uFFFD/g;function mp(t){return(typeof t=="string"?t:""+t).replace(FE,`
`).replace(jE,"")}function Bo(t,e,n){if(e=mp(e),mp(t)!==e&&n)throw Error(S(425))}function La(){}var Mc=null,Uc=null;function Fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,BE=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,VE=typeof queueMicrotask=="function"?queueMicrotask:typeof gp!="undefined"?function(t){return gp.resolve(null).then(t).catch(zE)}:jc;function zE(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ks(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ks(e)}function Qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Ci,xs="__reactProps$"+Ci,un="__reactContainer$"+Ci,Bc="__reactEvents$"+Ci,HE="__reactListeners$"+Ci,WE="__reactHandles$"+Ci;function rr(t){var e=t[Ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[un]||n[Ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yp(t);t!==null;){if(n=t[Ut])return n;t=yp(t)}return e}t=n,n=t.parentNode}return null}function no(t){return t=t[Ut]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Al(t){return t[xs]||null}var Vc=[],zr=-1;function Wn(t){return{current:t}}function Z(t){0>zr||(t.current=Vc[zr],Vc[zr]=null,zr--)}function Q(t,e){zr++,Vc[zr]=t.current,t.current=e}var jn={},Be=Wn(jn),st=Wn(!1),mr=jn;function di(t,e){var n=t.type.contextTypes;if(!n)return jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ot(t){return t=t.childContextTypes,t!=null}function ba(){Z(st),Z(Be)}function vp(t,e,n){if(Be.current!==jn)throw Error(S(168));Q(Be,e),Q(st,n)}function Ny(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,x_(t)||"Unknown",i));return oe({},n,r)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jn,mr=Be.current,Q(Be,t),Q(st,st.current),!0}function wp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Ny(t,e,mr),r.__reactInternalMemoizedMergedChildContext=t,Z(st),Z(Be),Q(Be,t)):Z(st),Q(st,n)}var Yt=null,xl=!1,Uu=!1;function Py(t){Yt===null?Yt=[t]:Yt.push(t)}function KE(t){xl=!0,Py(t)}function Kn(){if(!Uu&&Yt!==null){Uu=!0;var t=0,e=X;try{var n=Yt;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yt=null,xl=!1}catch(i){throw Yt!==null&&(Yt=Yt.slice(t+1)),ny(qh,Kn),i}finally{X=e,Uu=!1}}return null}var qE=mn.ReactCurrentBatchConfig;function At(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ma=Wn(null),Ua=null,Hr=null,nd=null;function rd(){nd=Hr=Ua=null}function id(t){var e=Ma.current;Z(Ma),t._currentValue=e}function zc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){Ua=t,nd=Hr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(rt=!0),t.firstContext=null)}function It(t){var e=t._currentValue;if(nd!==t)if(t={context:t,memoizedValue:e,next:null},Hr===null){if(Ua===null)throw Error(S(308));Hr=t,Ua.dependencies={lanes:0,firstContext:t}}else Hr=Hr.next=t;return e}var Ot=null,wn=!1;function sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bn(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,Ev(t)?(t=n.interleaved,t===null?(e.next=e,Ot===null?Ot=[n]:Ot.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}function _p(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fa(t,e,n,r){var i=t.updateQueue;wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,y=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,w=a;switch(h=e,y=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){d=g.call(y,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,h=typeof g=="function"?g.call(y,d,h):g,h==null)break e;d=oe({},d,h);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vr|=o,t.lanes=o,t.memoizedState=d}}function Ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Dy=new bg.Component().refs;function Hc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nl={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Mn(t),s=rn(r,i);s.payload=e,n!=null&&(s.callback=n),bn(t,s),e=kt(t,i,r),e!==null&&ua(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Mn(t),s=rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),bn(t,s),e=kt(t,i,r),e!==null&&ua(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ge(),r=Mn(t),i=rn(n,r);i.tag=2,e!=null&&(i.callback=e),bn(t,i),e=kt(t,r,n),e!==null&&ua(e,t,r)}};function Sp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Cs(n,r)||!Cs(i,s):!0}function Ly(t,e,n){var r=!1,i=jn,s=e.contextType;return typeof s=="object"&&s!==null?s=It(s):(i=ot(e)?mr:Be.current,r=e.contextTypes,s=(r=r!=null)?di(t,i):jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nl.enqueueReplaceState(e,e.state,null)}function Wc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Dy,sd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=It(s):(s=ot(e)?mr:Be.current,i.context=di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nl.enqueueReplaceState(i,i.state,null),Fa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var Wr=[],Kr=0,ja=null,Ba=0,_t=[],Et=0,gr=null,Jt=1,Zt="";function er(t,e){Wr[Kr++]=Ba,Wr[Kr++]=ja,ja=t,Ba=e}function by(t,e,n){_t[Et++]=Jt,_t[Et++]=Zt,_t[Et++]=gr,gr=t;var r=Jt;t=Zt;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jt=1<<32-Dt(e)+i|n<<i|r,Zt=s+t}else Jt=1<<s|n<<i|r,Zt=t}function od(t){t.return!==null&&(er(t,1),by(t,1,0))}function ad(t){for(;t===ja;)ja=Wr[--Kr],Wr[Kr]=null,Ba=Wr[--Kr],Wr[Kr]=null;for(;t===gr;)gr=_t[--Et],_t[Et]=null,Zt=_t[--Et],_t[Et]=null,Jt=_t[--Et],_t[Et]=null}var ht=null,tt=null,te=!1,Nt=null;function $y(t,e){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ht=t,tt=Qt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ht=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:Jt,overflow:Zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ht=t,tt=null,!0):!1;default:return!1}}function Kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qc(t){if(te){var e=tt;if(e){var n=e;if(!kp(t,e)){if(Kc(t))throw Error(S(418));e=Qt(n.nextSibling);var r=ht;e&&kp(t,e)?$y(r,n):(t.flags=t.flags&-4097|2,te=!1,ht=t)}}else{if(Kc(t))throw Error(S(418));t.flags=t.flags&-4097|2,te=!1,ht=t}}}function Ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ht=t}function Bi(t){if(t!==ht)return!1;if(!te)return Ip(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fc(t.type,t.memoizedProps)),e&&(e=tt)){if(Kc(t)){for(t=tt;t;)t=Qt(t.nextSibling);throw Error(S(418))}for(;e;)$y(t,e),e=Qt(e.nextSibling)}if(Ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=Qt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=ht?Qt(t.stateNode.nextSibling):null;return!0}function fi(){tt=ht=null,te=!1}function ld(t){Nt===null?Nt=[t]:Nt.push(t)}function Vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Dy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Vo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cp(t){var e=t._init;return e(t._payload)}function My(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Bn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,v){return f===null||f.tag!==6?(f=Hu(m,p.mode,v),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,v){var E=m.type;return E===Ur?c(p,f,m.props.children,v,m.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vn&&Cp(E)===f.type)?(v=i(f,m.props),v.ref=Vi(p,f,m),v.return=p,v):(v=pa(m.type,m.key,m.props,null,p.mode,v),v.ref=Vi(p,f,m),v.return=p,v)}function u(p,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Wu(m,p.mode,v),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,v,E){return f===null||f.tag!==7?(f=ur(m,p.mode,v,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Oo:return m=pa(f.type,f.key,f.props,null,p.mode,m),m.ref=Vi(p,null,f),m.return=p,m;case Mr:return f=Wu(f,p.mode,m),f.return=p,f;case vn:var v=f._init;return d(p,v(f._payload),m)}if(Qi(f)||$i(f))return f=ur(f,p.mode,m,null),f.return=p,f;Vo(p,f)}return null}function h(p,f,m,v){var E=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:return m.key===E?l(p,f,m,v):null;case Mr:return m.key===E?u(p,f,m,v):null;case vn:return E=m._init,h(p,f,E(m._payload),v)}if(Qi(m)||$i(m))return E!==null?null:c(p,f,m,v,null);Vo(p,m)}return null}function y(p,f,m,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,a(f,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oo:return p=p.get(v.key===null?m:v.key)||null,l(f,p,v,E);case Mr:return p=p.get(v.key===null?m:v.key)||null,u(f,p,v,E);case vn:var R=v._init;return y(p,f,m,R(v._payload),E)}if(Qi(v)||$i(v))return p=p.get(m)||null,c(f,p,v,E,null);Vo(f,v)}return null}function g(p,f,m,v){for(var E=null,R=null,_=f,T=f=0,M=null;_!==null&&T<m.length;T++){_.index>T?(M=_,_=null):M=_.sibling;var L=h(p,_,m[T],v);if(L===null){_===null&&(_=M);break}t&&_&&L.alternate===null&&e(p,_),f=s(L,f,T),R===null?E=L:R.sibling=L,R=L,_=M}if(T===m.length)return n(p,_),te&&er(p,T),E;if(_===null){for(;T<m.length;T++)_=d(p,m[T],v),_!==null&&(f=s(_,f,T),R===null?E=_:R.sibling=_,R=_);return te&&er(p,T),E}for(_=r(p,_);T<m.length;T++)M=y(_,p,T,m[T],v),M!==null&&(t&&M.alternate!==null&&_.delete(M.key===null?T:M.key),f=s(M,f,T),R===null?E=M:R.sibling=M,R=M);return t&&_.forEach(function(re){return e(p,re)}),te&&er(p,T),E}function w(p,f,m,v){var E=$i(m);if(typeof E!="function")throw Error(S(150));if(m=E.call(m),m==null)throw Error(S(151));for(var R=E=null,_=f,T=f=0,M=null,L=m.next();_!==null&&!L.done;T++,L=m.next()){_.index>T?(M=_,_=null):M=_.sibling;var re=h(p,_,L.value,v);if(re===null){_===null&&(_=M);break}t&&_&&re.alternate===null&&e(p,_),f=s(re,f,T),R===null?E=re:R.sibling=re,R=re,_=M}if(L.done)return n(p,_),te&&er(p,T),E;if(_===null){for(;!L.done;T++,L=m.next())L=d(p,L.value,v),L!==null&&(f=s(L,f,T),R===null?E=L:R.sibling=L,R=L);return te&&er(p,T),E}for(_=r(p,_);!L.done;T++,L=m.next())L=y(_,p,T,L.value,v),L!==null&&(t&&L.alternate!==null&&_.delete(L.key===null?T:L.key),f=s(L,f,T),R===null?E=L:R.sibling=L,R=L);return t&&_.forEach(function(vt){return e(p,vt)}),te&&er(p,T),E}function C(p,f,m,v){if(typeof m=="object"&&m!==null&&m.type===Ur&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:e:{for(var E=m.key,R=f;R!==null;){if(R.key===E){if(E=m.type,E===Ur){if(R.tag===7){n(p,R.sibling),f=i(R,m.props.children),f.return=p,p=f;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vn&&Cp(E)===R.type){n(p,R.sibling),f=i(R,m.props),f.ref=Vi(p,R,m),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}m.type===Ur?(f=ur(m.props.children,p.mode,v,m.key),f.return=p,p=f):(v=pa(m.type,m.key,m.props,null,p.mode,v),v.ref=Vi(p,f,m),v.return=p,p=v)}return o(p);case Mr:e:{for(R=m.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Wu(m,p.mode,v),f.return=p,p=f}return o(p);case vn:return R=m._init,C(p,f,R(m._payload),v)}if(Qi(m))return g(p,f,m,v);if($i(m))return w(p,f,m,v);Vo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Hu(m,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return C}var pi=My(!0),Uy=My(!1),ro={},Vt=Wn(ro),Ns=Wn(ro),Ps=Wn(ro);function ir(t){if(t===ro)throw Error(S(174));return t}function ud(t,e){switch(Q(Ps,e),Q(Ns,t),Q(Vt,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ic(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ic(e,t)}Z(Vt),Q(Vt,e)}function mi(){Z(Vt),Z(Ns),Z(Ps)}function Fy(t){ir(Ps.current);var e=ir(Vt.current),n=Ic(e,t.type);e!==n&&(Q(Ns,t),Q(Vt,n))}function cd(t){Ns.current===t&&(Z(Vt),Z(Ns))}var ie=Wn(0);function Va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function hd(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var ca=mn.ReactCurrentDispatcher,ju=mn.ReactCurrentBatchConfig,yr=0,se=null,ve=null,Ie=null,za=!1,us=!1,Os=0,GE=0;function Me(){throw Error(S(321))}function dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Lt(t[n],e[n]))return!1;return!0}function fd(t,e,n,r,i,s){if(yr=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ca.current=t===null||t.memoizedState===null?JE:ZE,t=n(r,i),us){s=0;do{if(us=!1,Os=0,25<=s)throw Error(S(301));s+=1,Ie=ve=null,e.updateQueue=null,ca.current=eS,t=n(r,i)}while(us)}if(ca.current=Ha,e=ve!==null&&ve.next!==null,yr=0,Ie=ve=se=null,za=!1,e)throw Error(S(300));return t}function pd(){var t=Os!==0;return Os=0,t}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?se.memoizedState=Ie=t:Ie=Ie.next=t,Ie}function Ct(){if(ve===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Ie===null?se.memoizedState:Ie.next;if(e!==null)Ie=e,ve=t;else{if(t===null)throw Error(S(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ie===null?se.memoizedState=Ie=t:Ie=Ie.next=t}return Ie}function Ds(t,e){return typeof e=="function"?e(t):e}function Bu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,se.lanes|=c,vr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Lt(r,e.memoizedState)||(rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Lt(s,e.memoizedState)||(rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function jy(){}function By(t,e){var n=se,r=Ct(),i=e(),s=!Lt(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,md(Hy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Ls(9,zy.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(S(349));(yr&30)!==0||Vy(n,e,i)}return i}function Vy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zy(t,e,n,r){e.value=n,e.getSnapshot=r,Wy(e)&&kt(t,1,-1)}function Hy(t,e,n){return n(function(){Wy(e)&&kt(t,1,-1)})}function Wy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lt(t,n)}catch{return!0}}function Rp(t){var e=Mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:t},e.queue=t,t=t.dispatch=QE.bind(null,se,t),[e.memoizedState,t]}function Ls(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ky(){return Ct().memoizedState}function ha(t,e,n,r){var i=Mt();se.flags|=t,i.memoizedState=Ls(1|e,n,void 0,r===void 0?null:r)}function Pl(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&dd(r,o.deps)){i.memoizedState=Ls(e,n,s,r);return}}se.flags|=t,i.memoizedState=Ls(1|e,n,s,r)}function Ap(t,e){return ha(8390656,8,t,e)}function md(t,e){return Pl(2048,8,t,e)}function qy(t,e){return Pl(4,2,t,e)}function Gy(t,e){return Pl(4,4,t,e)}function Xy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yy(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,Xy.bind(null,e,t),n)}function gd(){}function Qy(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jy(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zy(t,e,n){return(yr&21)===0?(t.baseState&&(t.baseState=!1,rt=!0),t.memoizedState=n):(Lt(n,e)||(n=sy(),se.lanes|=n,vr|=n,t.baseState=!0),e)}function XE(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=ju.transition;ju.transition={};try{t(!1),e()}finally{X=n,ju.transition=r}}function ev(){return Ct().memoizedState}function YE(t,e,n){var r=Mn(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tv(t)?nv(e,n):(rv(t,e,n),n=Ge(),t=kt(t,r,n),t!==null&&iv(t,e,r))}function QE(t,e,n){var r=Mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tv(t))nv(e,i);else{rv(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Lt(a,o))return}catch{}finally{}n=Ge(),t=kt(t,r,n),t!==null&&iv(t,e,r)}}function tv(t){var e=t.alternate;return t===se||e!==null&&e===se}function nv(t,e){us=za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rv(t,e,n){Ev(t)?(t=e.interleaved,t===null?(n.next=n,Ot===null?Ot=[e]:Ot.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function iv(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}var Ha={readContext:It,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},JE={readContext:It,useCallback:function(t,e){return Mt().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:Ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ha(4194308,4,Xy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return ha(4,2,t,e)},useMemo:function(t,e){var n=Mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YE.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=Mt();return t={current:t},e.memoizedState=t},useState:Rp,useDebugValue:gd,useDeferredValue:function(t){return Mt().memoizedState=t},useTransition:function(){var t=Rp(!1),e=t[0];return t=XE.bind(null,t[1]),Mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=Mt();if(te){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),_e===null)throw Error(S(349));(yr&30)!==0||Vy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ap(Hy.bind(null,r,s,t),[t]),r.flags|=2048,Ls(9,zy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mt(),e=_e.identifierPrefix;if(te){var n=Zt,r=Jt;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Os++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZE={readContext:It,useCallback:Qy,useContext:It,useEffect:md,useImperativeHandle:Yy,useInsertionEffect:qy,useLayoutEffect:Gy,useMemo:Jy,useReducer:Bu,useRef:Ky,useState:function(){return Bu(Ds)},useDebugValue:gd,useDeferredValue:function(t){var e=Ct();return Zy(e,ve.memoizedState,t)},useTransition:function(){var t=Bu(Ds)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:jy,useSyncExternalStore:By,useId:ev,unstable_isNewReconciler:!1},eS={readContext:It,useCallback:Qy,useContext:It,useEffect:md,useImperativeHandle:Yy,useInsertionEffect:qy,useLayoutEffect:Gy,useMemo:Jy,useReducer:Vu,useRef:Ky,useState:function(){return Vu(Ds)},useDebugValue:gd,useDeferredValue:function(t){var e=Ct();return ve===null?e.memoizedState=t:Zy(e,ve.memoizedState,t)},useTransition:function(){var t=Vu(Ds)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:jy,useSyncExternalStore:By,useId:ev,unstable_isNewReconciler:!1};function yd(t,e){try{var n="",r=e;do n+=A_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Gc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function sv(t,e,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ka||(Ka=!0,rh=r),Gc(t,e)},n}function ov(t,e,n){n=rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gc(t,e),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pS.bind(null,t,e,n),e.then(t,t))}function Np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rn(-1,1),e.tag=2,bn(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var av,Xc,lv,uv;av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xc=function(){};lv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ir(Vt.current);var s=null;switch(n){case"input":i=Ec(t,i),r=Ec(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=kc(t,i),r=kc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=La)}Cc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ws.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ws.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};uv=function(t,e,n,r){n!==r&&(e.flags|=4)};function zi(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ue(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nS(t,e,n){var r=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(e),null;case 1:return ot(e.type)&&ba(),Ue(e),null;case 3:return r=e.stateNode,mi(),Z(st),Z(Be),hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Nt!==null&&(oh(Nt),Nt=null))),Xc(t,e),Ue(e),null;case 5:cd(e);var i=ir(Ps.current);if(n=e.type,t!==null&&e.stateNode!=null)lv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ue(e),null}if(t=ir(Vt.current),Bi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ut]=e,r[xs]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Zi.length;i++)J(Zi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Wf(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":qf(r,s),J("invalid",r)}Cc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bo(r.textContent,a,t),i=["children",""+a]):ws.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Do(r),Kf(r,s,!0);break;case"textarea":Do(r),Gf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=La)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ut]=e,t[xs]=r,av(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rc(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zi.length;i++)J(Zi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Wf(t,r),i=Ec(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),J("invalid",t);break;case"textarea":qf(t,r),i=kc(t,r),J("invalid",t);break;default:i=r}Cc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_s(t,l):typeof l=="number"&&_s(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ws.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&Vh(t,s,l,o))}switch(n){case"input":Do(t),Kf(t,r,!1);break;case"textarea":Do(t),Gf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Jr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Jr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=La)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ue(e),null;case 6:if(t&&e.stateNode!=null)uv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=ir(Ps.current),ir(Vt.current),Bi(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ut]=e,(s=r.nodeValue!==n)&&(t=ht,t!==null))switch(t.tag){case 3:Bo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=e,e.stateNode=r}return Ue(e),null;case 13:if(Z(ie),r=e.memoizedState,te&&tt!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=tt;r;)r=Qt(r.nextSibling);return fi(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Bi(e),t===null){if(!r)throw Error(S(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(S(317));r[Ut]=e}else fi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return Ue(e),null}return Nt!==null&&(oh(Nt),Nt=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Bi(e):n=t.memoizedState!==null,r!==n&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ie.current&1)!==0?we===0&&(we=3):Td())),e.updateQueue!==null&&(e.flags|=4),Ue(e),null);case 4:return mi(),Xc(t,e),t===null&&Rs(e.stateNode.containerInfo),Ue(e),null;case 10:return id(e.type._context),Ue(e),null;case 17:return ot(e.type)&&ba(),Ue(e),null;case 19:if(Z(ie),s=e.memoizedState,s===null)return Ue(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zi(s,!1);else{if(we!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Va(t),o!==null){for(e.flags|=128,zi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>gi&&(e.flags|=128,r=!0,zi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Va(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Ue(e),null}else 2*fe()-s.renderingStartTime>gi&&n!==1073741824&&(e.flags|=128,r=!0,zi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=ie.current,Q(ie,r?n&1|2:n&1),e):(Ue(e),null);case 22:case 23:return Sd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(ut&1073741824)!==0&&(Ue(e),e.subtreeFlags&6&&(e.flags|=8192)):Ue(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}var rS=mn.ReactCurrentOwner,rt=!1;function He(t,e,n,r){e.child=t===null?Uy(e,null,n,r):pi(e,t.child,n,r)}function Op(t,e,n,r,i){n=n.render;var s=e.ref;return ni(e,i),r=fd(t,e,n,r,s,i),n=pd(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(te&&n&&od(e),e.flags|=1,He(t,e,r,i),e.child)}function Dp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cv(t,e,s,r,i)):(t=pa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Cs,n(o,r)&&t.ref===e.ref)return cn(t,e,i)}return e.flags|=1,t=Bn(s,r),t.ref=e.ref,t.return=e,e.child=t}function cv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Cs(s,r)&&t.ref===e.ref)if(rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(rt=!0);else return e.lanes=t.lanes,cn(t,e,i)}return Yc(t,e,n,r,i)}function hv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Gr,ut),ut|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Gr,ut),ut|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Gr,ut),ut|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Gr,ut),ut|=r;return He(t,e,i,n),e.child}function dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yc(t,e,n,r,i){var s=ot(n)?mr:Be.current;return s=di(e,s),ni(e,i),n=fd(t,e,n,r,s,i),r=pd(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(te&&r&&od(e),e.flags|=1,He(t,e,n,i),e.child)}function Lp(t,e,n,r,i){if(ot(n)){var s=!0;$a(e)}else s=!1;if(ni(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Ly(e,n,r),Wc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=ot(n)?mr:Be.current,u=di(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Tp(e,o,r,u),wn=!1;var h=e.memoizedState;o.state=h,Fa(e,r,o,i),l=e.memoizedState,a!==r||h!==l||st.current||wn?(typeof c=="function"&&(Hc(e,n,c,r),l=e.memoizedState),(a=wn||Sp(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Oy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:At(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=It(l):(l=ot(n)?mr:Be.current,l=di(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Tp(e,o,r,l),wn=!1,h=e.memoizedState,o.state=h,Fa(e,r,o,i);var g=e.memoizedState;a!==d||h!==g||st.current||wn?(typeof y=="function"&&(Hc(e,n,y,r),g=e.memoizedState),(u=wn||Sp(e,n,u,r,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Qc(t,e,n,r,s,i)}function Qc(t,e,n,r,i,s){dv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wp(e,n,!1),cn(t,e,s);r=e.stateNode,rS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=pi(e,t.child,null,s),e.child=pi(e,null,a,s)):He(t,e,a,s),e.memoizedState=r.state,i&&wp(e,n,!0),e.child}function fv(t){var e=t.stateNode;e.pendingContext?vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vp(t,e.context,!1),ud(t,e.containerInfo)}function bp(t,e,n,r,i){return fi(),ld(i),e.flags|=256,He(t,e,n,r),e.child}var zo={dehydrated:null,treeContext:null,retryLane:0};function Ho(t){return{baseLanes:t,cachePool:null,transitions:null}}function $p(t,e){return{baseLanes:t.baseLanes|e,cachePool:null,transitions:t.transitions}}function pv(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ie,i&1),t===null)return qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Xa(i,r,0,null),t=ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ho(n),e.memoizedState=zo,t):Jc(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,Wo(t,e,n,Error(S(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xa({mode:"visible",children:r.children},i,0,null),s=ur(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&pi(e,t.child,null,n),e.child.memoizedState=Ho(n),e.memoizedState=zo,s);if((e.mode&1)===0)e=Wo(t,e,n,null);else if(a.data==="$!")e=Wo(t,e,n,Error(S(419)));else if(r=(n&t.childLanes)!==0,rt||r){if(r=_e,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,kt(t,r,-1))}Td(),e=Wo(t,e,n,Error(S(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=mS.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,tt=Qt(a.nextSibling),ht=e,te=!0,Nt=null,n!==null&&(_t[Et++]=Jt,_t[Et++]=Zt,_t[Et++]=gr,Jt=n.id,Zt=n.overflow,gr=e),e=Jc(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=Up(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?Ho(n):$p(i,n),s.childLanes=t.childLanes&~n,e.memoizedState=zo,r):(n=Mp(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=Up(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?Ho(n):$p(i,n),s.childLanes=t.childLanes&~n,e.memoizedState=zo,r):(n=Mp(t,e,r.children,n),e.memoizedState=null,n)}function Jc(t,e){return e=Xa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mp(t,e,n,r){var i=t.child;return t=i.sibling,n=Bn(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function Up(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=Bn(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=Bn(o,r):(r=ur(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function Wo(t,e,n,r){return r!==null&&ld(r),pi(e,t.child,null,n),t=Jc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zc(t.return,e,n)}function zu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(He(t,e,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fp(t,n,e);else if(t.tag===19)Fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ie,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zu(e,!0,n,null,s);break;case"together":zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Bn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iS(t,e,n){switch(e.tag){case 3:fv(e),fi();break;case 5:Fy(e);break;case 1:ot(e.type)&&$a(e);break;case 4:ud(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Ma,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ie,ie.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?pv(t,e,n):(Q(ie,ie.current&1),t=cn(t,e,n),t!==null?t.sibling:null);Q(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return mv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return cn(t,e,n)}function sS(t,e){switch(ad(e),e.tag){case 1:return ot(e.type)&&ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mi(),Z(st),Z(Be),hd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return cd(e),null;case 13:if(Z(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ie),null;case 4:return mi(),null;case 10:return id(e.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var Ko=!1,Fe=!1,oS=typeof WeakSet=="function"?WeakSet:Set,A=null;function qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Zc(t,e,n){try{n()}catch(r){le(t,e,r)}}var jp=!1;function aS(t,e){if(Mc=Pa,t=Ey(),td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uc={focusedElem:t,selectionRange:n},Pa=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,C=g.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:At(e.type,w),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;if(m.nodeType===1)m.textContent="";else if(m.nodeType===9){var v=m.body;v!=null&&(v.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){le(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return g=jp,jp=!1,g}function cs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zc(e,n,s)}i=i.next}while(i!==r)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gv(t){var e=t.alternate;e!==null&&(t.alternate=null,gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ut],delete e[xs],delete e[Bc],delete e[HE],delete e[WE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yv(t){return t.tag===5||t.tag===3||t.tag===4}function Bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=La));else if(r!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}function nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}var xe=null,xt=!1;function gn(t,e,n){for(n=n.child;n!==null;)vv(t,e,n),n=n.sibling}function vv(t,e,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Fe||qr(n,e);case 6:var r=xe,i=xt;xe=null,gn(t,e,n),xe=r,xt=i,xe!==null&&(xt?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(xt?(t=xe,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),ks(t)):Mu(xe,n.stateNode));break;case 4:r=xe,i=xt,xe=n.stateNode.containerInfo,xt=!0,gn(t,e,n),xe=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Zc(n,e,o),i=i.next}while(i!==r)}gn(t,e,n);break;case 1:if(!Fe&&(qr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}gn(t,e,n);break;case 21:gn(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,gn(t,e,n),Fe=r):gn(t,e,n);break;default:gn(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oS),e.forEach(function(r){var i=gS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,xt=!1;break e;case 3:xe=a.stateNode.containerInfo,xt=!0;break e;case 4:xe=a.stateNode.containerInfo,xt=!0;break e}a=a.return}if(xe===null)throw Error(S(160));vv(s,o,i),xe=null,xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wv(e,t),e=e.sibling}function wv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rt(e,t),$t(t),r&4){try{cs(3,t,t.return),Ol(3,t)}catch(g){le(t,t.return,g)}try{cs(5,t,t.return)}catch(g){le(t,t.return,g)}}break;case 1:Rt(e,t),$t(t),r&512&&n!==null&&qr(n,n.return);break;case 5:if(Rt(e,t),$t(t),r&512&&n!==null&&qr(n,n.return),t.flags&32){var i=t.stateNode;try{_s(i,"")}catch(g){le(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vg(i,s),Rc(a,o);var u=Rc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?qg(i,d):c==="dangerouslySetInnerHTML"?Wg(i,d):c==="children"?_s(i,d):Vh(i,c,d,u)}switch(a){case"input":Sc(i,s);break;case"textarea":zg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Jr(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?Jr(i,!!s.multiple,s.defaultValue,!0):Jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[xs]=s}catch(g){le(t,t.return,g)}}break;case 6:if(Rt(e,t),$t(t),r&4){if(t.stateNode===null)throw Error(S(162));u=t.stateNode,c=t.memoizedProps;try{u.nodeValue=c}catch(g){le(t,t.return,g)}}break;case 3:if(Rt(e,t),$t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ks(e.containerInfo)}catch(g){le(t,t.return,g)}break;case 4:Rt(e,t),$t(t);break;case 13:Rt(e,t),$t(t),u=t.child,u.flags&8192&&u.memoizedState!==null&&(u.alternate===null||u.alternate.memoizedState===null)&&(_d=fe()),r&4&&Vp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(c=Fe)||u,Rt(e,t),Fe=c):Rt(e,t),$t(t),r&8192){c=t.memoizedState!==null;e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kg("display",o))}catch(g){le(t,t.return,g)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){le(t,t.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}if(c&&!u&&(t.mode&1)!==0)for(A=t,t=t.child;t!==null;){for(u=A=t;A!==null;){switch(c=A,d=c.child,c.tag){case 0:case 11:case 14:case 15:cs(4,c,c.return);break;case 1:if(qr(c,c.return),s=c.stateNode,typeof s.componentWillUnmount=="function"){h=c,y=c.return;try{i=h,s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(g){le(h,y,g)}}break;case 5:qr(c,c.return);break;case 22:if(c.memoizedState!==null){Hp(u);continue}}d!==null?(d.return=c,A=d):Hp(u)}t=t.sibling}}break;case 19:Rt(e,t),$t(t),r&4&&Vp(t);break;case 21:break;default:Rt(e,t),$t(t)}}function $t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_s(i,""),r.flags&=-33);var s=Bp(t);nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bp(t);th(t,a,o);break;default:throw Error(S(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lS(t,e,n){A=t,_v(t)}function _v(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ko;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=Ko;var u=Fe;if(Ko=o,(Fe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Wp(i):l!==null?(l.return=o,A=l):Wp(i);for(;s!==null;)A=s,_v(s),s=s.sibling;A=i,Ko=a,Fe=u}zp(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,A=s):zp(t)}}function zp(t){for(;A!==null;){var e=A;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Fe||Ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ep(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ks(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(S(163))}Fe||e.flags&512&&eh(e)}catch(h){le(e,e.return,h)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Hp(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Wp(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{eh(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{eh(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var uS=Math.ceil,Wa=mn.ReactCurrentDispatcher,vd=mn.ReactCurrentOwner,Tt=mn.ReactCurrentBatchConfig,K=0,_e=null,me=null,Oe=0,ut=0,Gr=Wn(0),we=0,bs=null,vr=0,Dl=0,wd=0,hs=null,et=null,_d=0,gi=1/0,Xt=null,Ka=!1,rh=null,$n=null,qo=!1,Nn=null,qa=0,ds=0,ih=null,da=-1,fa=0;function Ge(){return(K&6)!==0?fe():da!==-1?da:da=fe()}function Mn(t){return(t.mode&1)===0?1:(K&2)!==0&&Oe!==0?Oe&-Oe:qE.transition!==null?(fa===0&&(fa=sy()),fa):(t=X,t!==0||(t=window.event,t=t===void 0?16:dy(t.type)),t)}function kt(t,e,n){if(50<ds)throw ds=0,ih=null,Error(S(185));var r=Ll(t,e);return r===null?null:(eo(r,e,n),((K&2)===0||r!==_e)&&(r===_e&&((K&2)===0&&(Dl|=e),we===4&&En(r,Oe)),at(r,n),e===1&&K===0&&(t.mode&1)===0&&(gi=fe()+500,xl&&Kn())),r)}function Ll(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Ev(t){return(_e!==null||Ot!==null)&&(t.mode&1)!==0&&(K&2)===0}function at(t,e){var n=t.callbackNode;q_(t,e);var r=Na(t,t===_e?Oe:0);if(r===0)n!==null&&Qf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qf(n),e===1)t.tag===0?KE(Kp.bind(null,t)):Py(Kp.bind(null,t)),VE(function(){K===0&&Kn()}),n=null;else{switch(oy(r)){case 1:n=qh;break;case 4:n=ry;break;case 16:n=xa;break;case 536870912:n=iy;break;default:n=xa}n=xv(n,Sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sv(t,e){if(da=-1,fa=0,(K&6)!==0)throw Error(S(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=Na(t,t===_e?Oe:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ga(t,r);else{e=r;var i=K;K|=2;var s=kv();(_e!==t||Oe!==e)&&(Xt=null,gi=fe()+500,lr(t,e));do try{dS();break}catch(a){Tv(t,a)}while(1);rd(),Wa.current=s,K=i,me!==null?e=0:(_e=null,Oe=0,e=we)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=sh(t,i))),e===1)throw n=bs,lr(t,0),En(t,r),at(t,fe()),n;if(e===6)En(t,r);else{if(i=t.current.alternate,(r&30)===0&&!cS(i)&&(e=Ga(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=sh(t,s))),e===1))throw n=bs,lr(t,0),En(t,r),at(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:tr(t,et,Xt);break;case 3:if(En(t,r),(r&130023424)===r&&(e=_d+500-fe(),10<e)){if(Na(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jc(tr.bind(null,t,et,Xt),e);break}tr(t,et,Xt);break;case 4:if(En(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uS(r/1960))-r,10<r){t.timeoutHandle=jc(tr.bind(null,t,et,Xt),r);break}tr(t,et,Xt);break;case 5:tr(t,et,Xt);break;default:throw Error(S(329))}}}return at(t,fe()),t.callbackNode===n?Sv.bind(null,t):null}function sh(t,e){var n=hs;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=Ga(t,e),t!==2&&(e=et,et=n,e!==null&&oh(e)),t}function oh(t){et===null?et=t:et.push.apply(et,t)}function cS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Lt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function En(t,e){for(e&=~wd,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function Kp(t){if((K&6)!==0)throw Error(S(327));ri();var e=Na(t,0);if((e&1)===0)return at(t,fe()),null;var n=Ga(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=sh(t,r))}if(n===1)throw n=bs,lr(t,0),En(t,e),at(t,fe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,et,Xt),at(t,fe()),null}function Ed(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(gi=fe()+500,xl&&Kn())}}function wr(t){Nn!==null&&Nn.tag===0&&(K&6)===0&&ri();var e=K;K|=1;var n=Tt.transition,r=X;try{if(Tt.transition=null,X=1,t)return t()}finally{X=r,Tt.transition=n,K=e,(K&6)===0&&Kn()}}function Sd(){ut=Gr.current,Z(Gr)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BE(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ba();break;case 3:mi(),Z(st),Z(Be),hd();break;case 5:cd(r);break;case 4:mi();break;case 13:Z(ie);break;case 19:Z(ie);break;case 10:id(r.type._context);break;case 22:case 23:Sd()}n=n.return}if(_e=t,me=t=Bn(t.current,null),Oe=ut=e,we=0,bs=null,wd=Dl=vr=0,et=hs=null,Ot!==null){for(e=0;e<Ot.length;e++)if(n=Ot[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ot=null}return t}function Tv(t,e){do{var n=me;try{if(rd(),ca.current=Ha,za){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}za=!1}if(yr=0,Ie=ve=se=null,us=!1,Os=0,vd.current=null,n===null||n.return===null){we=1,bs=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Np(o);if(y!==null){y.flags&=-257,Pp(y,o,a,s,e),y.mode&1&&xp(s,u,e),e=y,l=u;var g=e.updateQueue;if(g===null){var w=new Set;w.add(l),e.updateQueue=w}else g.add(l);break e}else{if((e&1)===0){xp(s,u,e),Td();break e}l=Error(S(426))}}else if(te&&a.mode&1){var C=Np(o);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),Pp(C,o,a,s,e),ld(l);break e}}s=l,we!==4&&(we=2),hs===null?hs=[s]:hs.push(s),l=yd(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var p=sv(a,l,e);_p(a,p);break e;case 1:s=l;var f=a.type,m=a.stateNode;if((a.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($n===null||!$n.has(m)))){a.flags|=65536,e&=-e,a.lanes|=e;var v=ov(a,s,e);_p(a,v);break e}}a=a.return}while(a!==null)}Cv(n)}catch(E){e=E,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function kv(){var t=Wa.current;return Wa.current=Ha,t===null?Ha:t}function Td(){(we===0||we===3||we===2)&&(we=4),_e===null||(vr&268435455)===0&&(Dl&268435455)===0||En(_e,Oe)}function Ga(t,e){var n=K;K|=2;var r=kv();(_e!==t||Oe!==e)&&(Xt=null,lr(t,e));do try{hS();break}catch(i){Tv(t,i)}while(1);if(rd(),K=n,Wa.current=r,me!==null)throw Error(S(261));return _e=null,Oe=0,we}function hS(){for(;me!==null;)Iv(me)}function dS(){for(;me!==null&&!U_();)Iv(me)}function Iv(t){var e=Av(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?Cv(t):me=e,vd.current=null}function Cv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=nS(n,e,ut),n!==null){me=n;return}}else{if(n=sS(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,me=null;return}}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);we===0&&(we=5)}function tr(t,e,n){var r=X,i=Tt.transition;try{Tt.transition=null,X=1,fS(t,e,n,r)}finally{Tt.transition=i,X=r}return null}function fS(t,e,n,r){do ri();while(Nn!==null);if((K&6)!==0)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(G_(t,s),t===_e&&(me=_e=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||qo||(qo=!0,xv(xa,function(){return ri(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Tt.transition,Tt.transition=null;var o=X;X=1;var a=K;K|=4,vd.current=null,aS(t,n),wv(n,t),LE(Uc),Pa=!!Mc,Uc=Mc=null,t.current=n,lS(n),F_(),K=a,X=o,Tt.transition=s}else t.current=n;if(qo&&(qo=!1,Nn=t,qa=i),s=t.pendingLanes,s===0&&($n=null),V_(n.stateNode),at(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)r(e[n]);if(Ka)throw Ka=!1,t=rh,rh=null,t;return(qa&1)!==0&&t.tag!==0&&ri(),s=t.pendingLanes,(s&1)!==0?t===ih?ds++:(ds=0,ih=t):ds=0,Kn(),null}function ri(){if(Nn!==null){var t=oy(qa),e=Tt.transition,n=X;try{if(Tt.transition=null,X=16>t?16:t,Nn===null)var r=!1;else{if(t=Nn,Nn=null,qa=0,(K&6)!==0)throw Error(S(331));var i=K;for(K|=4,A=t.current;A!==null;){var s=A,o=s.child;if((A.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:cs(8,c,s)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var h=c.sibling,y=c.return;if(gv(c),c===u){A=null;break}if(h!==null){h.return=y,A=h;break}A=y}}}var g=s.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}A=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:cs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,A=m;else e:for(o=f;A!==null;){if(a=A,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(E){le(a,a.return,E)}if(a===o){A=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,A=v;break e}A=a.return}}if(K=i,Kn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(kl,t)}catch{}r=!0}return r}finally{X=n,Tt.transition=e}}return!1}function qp(t,e,n){e=yd(n,e),e=sv(t,e,1),bn(t,e),e=Ge(),t=Ll(t,1),t!==null&&(eo(t,1,e),at(t,e))}function le(t,e,n){if(t.tag===3)qp(t,t,n);else for(;e!==null;){if(e.tag===3){qp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){t=yd(n,t),t=ov(e,t,1),bn(e,t),t=Ge(),e=Ll(e,1),e!==null&&(eo(e,1,t),at(e,t));break}}e=e.return}}function pS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ge(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(Oe&n)===n&&(we===4||we===3&&(Oe&130023424)===Oe&&500>fe()-_d?lr(t,0):wd|=n),at(t,e)}function Rv(t,e){e===0&&((t.mode&1)===0?e=1:(e=$o,$o<<=1,($o&130023424)===0&&($o=4194304)));var n=Ge();t=Ll(t,e),t!==null&&(eo(t,e,n),at(t,n))}function mS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rv(t,n)}function gS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Rv(t,n)}var Av;Av=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)rt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return rt=!1,iS(t,e,n);rt=(t.flags&131072)!==0}else rt=!1,te&&(e.flags&1048576)!==0&&by(e,Ba,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=di(e,Be.current);ni(e,n),i=fd(null,e,r,t,i,n);var s=pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ot(r)?(s=!0,$a(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sd(e),i.updater=Nl,e.stateNode=i,i._reactInternals=e,Wc(e,r,t,n),e=Qc(null,e,r,!0,s,n)):(e.tag=0,te&&s&&od(e),He(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vS(r),t=At(r,t),i){case 0:e=Yc(null,e,r,t,n);break e;case 1:e=Lp(null,e,r,t,n);break e;case 11:e=Op(null,e,r,t,n);break e;case 14:e=Dp(null,e,r,At(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Yc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Lp(t,e,r,i,n);case 3:e:{if(fv(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Oy(t,e),Fa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(S(423)),e=bp(t,e,r,n,i);break e}else if(r!==i){i=Error(S(424)),e=bp(t,e,r,n,i);break e}else for(tt=Qt(e.stateNode.containerInfo.firstChild),ht=e,te=!0,Nt=null,n=Uy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fi(),r===i){e=cn(t,e,n);break e}He(t,e,r,n)}e=e.child}return e;case 5:return Fy(e),t===null&&qc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fc(r,i)?o=null:s!==null&&Fc(r,s)&&(e.flags|=32),dv(t,e),He(t,e,o,n),e.child;case 6:return t===null&&qc(e),null;case 13:return pv(t,e,n);case 4:return ud(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=pi(e,null,r,n):He(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Op(t,e,r,i,n);case 7:return He(t,e,e.pendingProps,n),e.child;case 8:return He(t,e,e.pendingProps.children,n),e.child;case 12:return He(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Ma,r._currentValue),r._currentValue=o,s!==null)if(Lt(s.value,o)){if(s.children===i.children&&!st.current){e=cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=rn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}He(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ni(e,n),i=It(i),r=r(i),e.flags|=1,He(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),Dp(t,e,r,i,n);case 15:return cv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,ot(r)?(t=!0,$a(e)):t=!1,ni(e,n),Ly(e,r,i),Wc(e,r,i,n),Qc(null,e,r,!0,t,n);case 19:return mv(t,e,n);case 22:return hv(t,e,n)}throw Error(S(156,e.tag))};function xv(t,e){return ny(t,e)}function yS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(t,e,n,r){return new yS(t,e,n,r)}function kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vS(t){if(typeof t=="function")return kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hh)return 11;if(t===Wh)return 14}return 2}function Bn(t,e){var n=t.alternate;return n===null?(n=St(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ur:return ur(n.children,i,s,e);case zh:o=8,i|=8;break;case yc:return t=St(12,n,e,i|2),t.elementType=yc,t.lanes=s,t;case vc:return t=St(13,n,e,i),t.elementType=vc,t.lanes=s,t;case wc:return t=St(19,n,e,i),t.elementType=wc,t.lanes=s,t;case Fg:return Xa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mg:o=10;break e;case Ug:o=9;break e;case Hh:o=11;break e;case Wh:o=14;break e;case vn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=St(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ur(t,e,n,r){return t=St(7,t,r,e),t.lanes=n,t}function Xa(t,e,n,r){return t=St(22,t,r,e),t.elementType=Fg,t.lanes=n,t.stateNode={},t}function Hu(t,e,n){return t=St(6,t,null,e),t.lanes=n,t}function Wu(t,e,n){return e=St(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cu(0),this.expirationTimes=Cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Id(t,e,n,r,i,s,o,a,l){return t=new wS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=St(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sd(s),t}function _S(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Nv(t){if(!t)return jn;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(ot(n))return Ny(t,n,e)}return e}function Pv(t,e,n,r,i,s,o,a,l){return t=Id(n,r,!0,t,i,s,o,a,l),t.context=Nv(null),n=t.current,r=Ge(),i=Mn(n),s=rn(r,i),s.callback=e!=null?e:null,bn(n,s),t.current.lanes=i,eo(t,i,r),at(t,r),t}function bl(t,e,n,r){var i=e.current,s=Ge(),o=Mn(i);return n=Nv(n),e.context===null?e.context=n:e.pendingContext=n,e=rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),bn(i,e),t=kt(i,o,s),t!==null&&ua(t,i,o),o}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cd(t,e){Gp(t,e),(t=t.alternate)&&Gp(t,e)}function ES(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rd(t){this._internalRoot=t}$l.prototype.render=Rd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));bl(t,e,null,null)};$l.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){bl(null,t,null,null)}),e[un]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=uy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_n.length&&e!==0&&e<_n[n].priority;n++);_n.splice(n,0,t),n===0&&hy(t)}};function Ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function SS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ya(o);s.call(u)}}var o=Pv(e,r,t,0,null,!1,!1,"",Xp);return t._reactRootContainer=o,t[un]=o.current,Rs(t.nodeType===8?t.parentNode:t),wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ya(l);a.call(u)}}var l=Id(t,0,!1,null,null,!1,!1,"",Xp);return t._reactRootContainer=l,t[un]=l.current,Rs(t.nodeType===8?t.parentNode:t),wr(function(){bl(e,l,n,r)}),l}function Ul(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ya(o);a.call(l)}}bl(e,o,t,i)}else o=SS(n,e,t,i,r);return Ya(o)}ay=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ji(e.pendingLanes);n!==0&&(Gh(e,n|1),at(e,fe()),(K&6)===0&&(gi=fe()+500,Kn()))}break;case 13:var r=Ge();wr(function(){return kt(t,1,r)}),Cd(t,1)}};Xh=function(t){if(t.tag===13){var e=Ge();kt(t,134217728,e),Cd(t,134217728)}};ly=function(t){if(t.tag===13){var e=Ge(),n=Mn(t);kt(t,n,e),Cd(t,n)}};uy=function(){return X};cy=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};xc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Al(r);if(!i)throw Error(S(90));Bg(r),Sc(r,i)}}}break;case"textarea":zg(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};Yg=Ed;Qg=wr;var TS={usingClientEntryPoint:!1,Events:[no,Vr,Al,Gg,Xg,Ed]},Hi={findFiberByHostInstance:rr,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},kS={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ey(t),t===null?null:t.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{kl=Go.inject(kS),Bt=Go}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(e))throw Error(S(200));return _S(t,e,null,n)};gt.createRoot=function(t,e){if(!Ad(t))throw Error(S(299));var n=!1,r="",i=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Id(t,1,!1,null,null,n,!1,r,i),t[un]=e.current,Rs(t.nodeType===8?t.parentNode:t),new Rd(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=ey(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return wr(t)};gt.hydrate=function(t,e,n){if(!Ml(e))throw Error(S(200));return Ul(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!Ad(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pv(e,null,t,1,n!=null?n:null,i,!1,s,o),t[un]=e.current,Rs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $l(e)};gt.render=function(t,e,n){if(!Ml(e))throw Error(S(200));return Ul(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(S(40));return t._reactRootContainer?(wr(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1};gt.unstable_batchedUpdates=Ed;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ml(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Ul(t,e,n,!1,r)};gt.version="18.1.0-next-22edb9f77-20220426";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(t){console.error(t)}}Dv(),Og.exports=gt;var Lv,IS=Og.exports;Lv=IS.createRoot;function Qa(){return Qa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qa.apply(this,arguments)}var sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sr||(sr={}));var Yp=function(t){return t},Qp="beforeunload",CS="popstate";function RS(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var _=r.location,T=_.pathname,M=_.search,L=_.hash,re=i.state||{};return[re.idx,Yp({pathname:T,search:M,hash:L,state:re.usr||null,key:re.key||"default"})]}var o=null;function a(){if(o)y.call(o),o=null;else{var _=sr.Pop,T=s(),M=T[0],L=T[1];if(y.length){if(M!=null){var re=c-M;re&&(o={action:_,location:L,retry:function(){E(re*-1)}},E(re))}}else f(_)}}r.addEventListener(CS,a);var l=sr.Pop,u=s(),c=u[0],d=u[1],h=Zp(),y=Zp();c==null&&(c=0,i.replaceState(Qa({},i.state,{idx:c}),""));function g(_){return typeof _=="string"?_:xS(_)}function w(_,T){return T===void 0&&(T=null),Yp(Qa({pathname:d.pathname,hash:"",search:""},typeof _=="string"?Ri(_):_,{state:T,key:AS()}))}function C(_,T){return[{usr:_.state,key:_.key,idx:T},g(_)]}function p(_,T,M){return!y.length||(y.call({action:_,location:T,retry:M}),!1)}function f(_){l=_;var T=s();c=T[0],d=T[1],h.call({action:l,location:d})}function m(_,T){var M=sr.Push,L=w(_,T);function re(){m(_,T)}if(p(M,L,re)){var vt=C(L,c+1),Gt=vt[0],Qn=vt[1];try{i.pushState(Gt,"",Qn)}catch{r.location.assign(Qn)}f(M)}}function v(_,T){var M=sr.Replace,L=w(_,T);function re(){v(_,T)}if(p(M,L,re)){var vt=C(L,c),Gt=vt[0],Qn=vt[1];i.replaceState(Gt,"",Qn),f(M)}}function E(_){i.go(_)}var R={get action(){return l},get location(){return d},createHref:g,push:m,replace:v,go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(T){return h.push(T)},block:function(T){var M=y.push(T);return y.length===1&&r.addEventListener(Qp,Jp),function(){M(),y.length||r.removeEventListener(Qp,Jp)}}};return R}function Jp(t){t.preventDefault(),t.returnValue=""}function Zp(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function AS(){return Math.random().toString(36).substr(2,8)}function xS(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Ri(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const bv=P.exports.createContext(null),xd=P.exports.createContext(null),Nd=P.exports.createContext({outlet:null,matches:[]});function Kt(t,e){if(!t)throw new Error(e)}function NS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ri(e):e,i=Mv(r.pathname||"/",n);if(i==null)return null;let s=$v(t);PS(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=jS(s[a],i);return o}function $v(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Kt(!1),o.relativePath=o.relativePath.slice(r.length));let a=cr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Kt(!1),$v(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:US(a,i.index),routesMeta:l})}),e}function PS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const OS=/^:\w+$/,DS=3,LS=2,bS=1,$S=10,MS=-2,em=t=>t==="*";function US(t,e){let n=t.split("/"),r=n.length;return n.some(em)&&(r+=MS),e&&(r+=LS),n.filter(i=>!em(i)).reduce((i,s)=>i+(OS.test(s)?DS:s===""?bS:$S),r)}function FS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jS(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=BS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:cr([i,c.pathname]),pathnameBase:Uv(cr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=cr([i,c.pathnameBase]))}return s}function BS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=zS(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function VS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function zS(t,e){try{return decodeURIComponent(t)}catch{return t}}function HS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ri(t):t;return{pathname:n?n.startsWith("/")?n:WS(n,e):e,search:qS(r),hash:GS(i)}}function WS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function KS(t,e,n){let r=typeof t=="string"?Ri(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=HS(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function Mv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),Uv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function io(){return P.exports.useContext(xd)!=null}function Fv(){return io()||Kt(!1),P.exports.useContext(xd).location}function jv(){io()||Kt(!1);let{basename:t,navigator:e}=P.exports.useContext(bv),{matches:n}=P.exports.useContext(Nd),{pathname:r}=Fv(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=P.exports.useRef(!1);return P.exports.useEffect(()=>{s.current=!0}),P.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=KS(a,JSON.parse(i),r);t!=="/"&&(u.pathname=cr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function XS(t,e){io()||Kt(!1);let{matches:n}=P.exports.useContext(Nd),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Fv(),a;if(e){var l;let h=typeof e=="string"?Ri(e):e;s==="/"||((l=h.pathname)==null?void 0:l.startsWith(s))||Kt(!1),a=h}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=NS(t,{pathname:c});return YS(d&&d.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:cr([s,h.pathname]),pathnameBase:h.pathnameBase==="/"?s:cr([s,h.pathnameBase])})),n)}function YS(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>P.exports.createElement(Nd.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function QS(t){let{to:e,replace:n,state:r}=t;io()||Kt(!1);let i=jv();return P.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function ma(t){Kt(!1)}function JS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:s,static:o=!1}=t;io()&&Kt(!1);let a=Uv(e),l=P.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ri(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:y="default"}=r,g=P.exports.useMemo(()=>{let w=Mv(u,a);return w==null?null:{pathname:w,search:c,hash:d,state:h,key:y}},[a,u,c,d,h,y]);return g==null?null:P.exports.createElement(bv.Provider,{value:l},P.exports.createElement(xd.Provider,{children:n,value:{location:g,navigationType:i}}))}function ZS(t){let{children:e,location:n}=t;return XS(ah(e),n)}function ah(t){let e=[];return P.exports.Children.forEach(t,n=>{if(!P.exports.isValidElement(n))return;if(n.type===P.exports.Fragment){e.push.apply(e,ah(n.props.children));return}n.type!==ma&&Kt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=ah(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eT(t){let{basename:e,children:n,window:r}=t,i=P.exports.useRef();i.current==null&&(i.current=RS({window:r}));let s=i.current,[o,a]=P.exports.useState({action:s.action,location:s.location});return P.exports.useLayoutEffect(()=>s.listen(a),[s]),P.exports.createElement(JS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}let tT={data:""},nT=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||tT,rT=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,iT=/\/\*[^]*?\*\/|  +/g,tm=/\n+/g,Sn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Sn(o,s):s+"{"+Sn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Sn(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Sn.p?Sn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Wi={},Bv=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Bv(t[n]);return e}return t},sT=(t,e,n,r,i)=>{let s=Bv(t),o=Wi[s]||(Wi[s]=(a=>{let l=0,u=11;for(;l<a.length;)u=101*u+a.charCodeAt(l++)>>>0;return"go"+u})(s));if(!Wi[o]){let a=s!==t?t:(l=>{let u,c,d=[{}];for(;u=rT.exec(l.replace(iT,""));)u[4]?d.shift():u[3]?(c=u[3].replace(tm," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][u[1]]=u[2].replace(tm," ").trim();return d[0]})(t);Wi[o]=Sn(i?{["@keyframes "+o]:a}:a,n?"":"."+o)}return((a,l,u)=>{l.data.indexOf(a)==-1&&(l.data=u?a+l.data:l.data+a)})(Wi[o],e,r),o},oT=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Sn(a,""):a===!1?"":a}return r+i+(o==null?"":o)},"");function Fl(t){let e=this||{},n=t.call?t(e.p):t;return sT(n.unshift?n.raw?oT(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,nT(e.target),e.g,e.o,e.k)}let Vv,lh,uh;Fl.bind({g:1});let hn=Fl.bind({k:1});function aT(t,e,n,r){Sn.p=e,Vv=t,lh=n,uh=r}function qn(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:lh&&lh()},a),n.o=/ *go\d+/.test(l),a.className=Fl.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),uh&&u[0]&&uh(a),Vv(u,a)}return e?e(i):i}}function ae(){return ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ae.apply(this,arguments)}function Ve(t,e){return e||(e=t.slice(0)),t.raw=e,t}var lT=function(e){return typeof e=="function"},Ja=function(e,n){return lT(e)?e(n):e},uT=function(){var t=0;return function(){return(++t).toString()}}(),cT=function(e){return function(n){n&&setTimeout(function(){var r=n.getBoundingClientRect();e(r)})}},zv=function(){var t=void 0;return function(){if(t===void 0&&typeof window!="undefined"){var e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}}(),hT=20,Te;(function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"})(Te||(Te={}));var ga=new Map,nm=function(e){if(!ga.has(e)){var n=setTimeout(function(){ga.delete(e),hr({type:Te.REMOVE_TOAST,toastId:e})},1e3);ga.set(e,n)}},dT=function(e){var n=ga.get(e);n&&clearTimeout(n)},fT=function t(e,n){switch(n.type){case Te.ADD_TOAST:return ae({},e,{toasts:[n.toast].concat(e.toasts).slice(0,hT)});case Te.UPDATE_TOAST:return n.toast.id&&dT(n.toast.id),ae({},e,{toasts:e.toasts.map(function(o){return o.id===n.toast.id?ae({},o,n.toast):o})});case Te.UPSERT_TOAST:var r=n.toast;return e.toasts.find(function(o){return o.id===r.id})?t(e,{type:Te.UPDATE_TOAST,toast:r}):t(e,{type:Te.ADD_TOAST,toast:r});case Te.DISMISS_TOAST:var i=n.toastId;return i?nm(i):e.toasts.forEach(function(o){nm(o.id)}),ae({},e,{toasts:e.toasts.map(function(o){return o.id===i||i===void 0?ae({},o,{visible:!1}):o})});case Te.REMOVE_TOAST:return n.toastId===void 0?ae({},e,{toasts:[]}):ae({},e,{toasts:e.toasts.filter(function(o){return o.id!==n.toastId})});case Te.START_PAUSE:return ae({},e,{pausedAt:n.time});case Te.END_PAUSE:var s=n.time-(e.pausedAt||0);return ae({},e,{pausedAt:void 0,toasts:e.toasts.map(function(o){return ae({},o,{pauseDuration:o.pauseDuration+s})})})}},ya=[],va={toasts:[],pausedAt:void 0},hr=function(e){va=fT(va,e),ya.forEach(function(n){n(va)})},pT={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mT=function(e){e===void 0&&(e={});var n=P.exports.useState(va),r=n[0],i=n[1];P.exports.useEffect(function(){return ya.push(i),function(){var o=ya.indexOf(i);o>-1&&ya.splice(o,1)}},[r]);var s=r.toasts.map(function(o){var a,l,u;return ae({},e,e[o.type],o,{duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||((l=e)==null?void 0:l.duration)||pT[o.type],style:ae({},e.style,(u=e[o.type])==null?void 0:u.style,o.style)})});return ae({},r,{toasts:s})},gT=function(e,n,r){return n===void 0&&(n="blank"),ae({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0},r,{id:(r==null?void 0:r.id)||uT()})},so=function(e){return function(n,r){var i=gT(n,e,r);return hr({type:Te.UPSERT_TOAST,toast:i}),i.id}},Ce=function(e,n){return so("blank")(e,n)};Ce.error=so("error");Ce.success=so("success");Ce.loading=so("loading");Ce.custom=so("custom");Ce.dismiss=function(t){hr({type:Te.DISMISS_TOAST,toastId:t})};Ce.remove=function(t){return hr({type:Te.REMOVE_TOAST,toastId:t})};Ce.promise=function(t,e,n){var r=Ce.loading(e.loading,ae({},n,n==null?void 0:n.loading));return t.then(function(i){return Ce.success(Ja(e.success,i),ae({id:r},n,n==null?void 0:n.success)),i}).catch(function(i){Ce.error(Ja(e.error,i),ae({id:r},n,n==null?void 0:n.error))}),t};var yT=function(e){var n=mT(e),r=n.toasts,i=n.pausedAt;P.exports.useEffect(function(){if(!i){var o=Date.now(),a=r.map(function(l){if(l.duration!==1/0){var u=(l.duration||0)+l.pauseDuration-(o-l.createdAt);if(u<0){l.visible&&Ce.dismiss(l.id);return}return setTimeout(function(){return Ce.dismiss(l.id)},u)}});return function(){a.forEach(function(l){return l&&clearTimeout(l)})}}},[r,i]);var s=P.exports.useMemo(function(){return{startPause:function(){hr({type:Te.START_PAUSE,time:Date.now()})},endPause:function(){i&&hr({type:Te.END_PAUSE,time:Date.now()})},updateHeight:function(a,l){return hr({type:Te.UPDATE_TOAST,toast:{id:a,height:l}})},calculateOffset:function(a,l){var u,c=l||{},d=c.reverseOrder,h=d===void 0?!1:d,y=c.gutter,g=y===void 0?8:y,w=c.defaultPosition,C=r.filter(function(v){return(v.position||w)===(a.position||w)&&v.height}),p=C.findIndex(function(v){return v.id===a.id}),f=C.filter(function(v,E){return E<p&&v.visible}).length,m=(u=C.filter(function(v){return v.visible})).slice.apply(u,h?[f+1]:[0,f]).reduce(function(v,E){return v+(E.height||0)+g},0);return m}}},[r,i]);return{toasts:r,handlers:s}};function Hv(){var t=Ve([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: `,`;
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`]);return Hv=function(){return t},t}function Wv(){var t=Ve([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return Wv=function(){return t},t}function Kv(){var t=Ve([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return Kv=function(){return t},t}function qv(){var t=Ve([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return qv=function(){return t},t}var vT=hn(qv()),wT=hn(Kv()),_T=hn(Wv()),ET=qn("div")(Hv(),function(t){return t.primary||"#ff4b4b"},vT,wT,function(t){return t.secondary||"#fff"},_T);function Gv(){var t=Ve([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return Gv=function(){return t},t}function Xv(){var t=Ve([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return Xv=function(){return t},t}var ST=hn(Xv()),TT=qn("div")(Gv(),function(t){return t.secondary||"#e0e0e0"},function(t){return t.primary||"#616161"},ST);function Yv(){var t=Ve([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: `,` 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: `,`;
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`]);return Yv=function(){return t},t}function Qv(){var t=Ve([`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`]);return Qv=function(){return t},t}function Jv(){var t=Ve([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return Jv=function(){return t},t}var kT=hn(Jv()),IT=hn(Qv()),CT=qn("div")(Yv(),function(t){return t.primary||"#61d345"},kT,IT,function(t){return t.secondary||"#fff"});function Zv(){var t=Ve([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return Zv=function(){return t},t}function e0(){var t=Ve([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return e0=function(){return t},t}function t0(){var t=Ve([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return t0=function(){return t},t}function n0(){var t=Ve([`
  position: absolute;
`]);return n0=function(){return t},t}var RT=qn("div")(n0()),AT=qn("div")(t0()),xT=hn(e0()),NT=qn("div")(Zv(),xT),PT=function(e){var n=e.toast,r=n.icon,i=n.type,s=n.iconTheme;return r!==void 0?typeof r=="string"?P.exports.createElement(NT,null,r):r:i==="blank"?null:P.exports.createElement(AT,null,P.exports.createElement(TT,Object.assign({},s)),i!=="loading"&&P.exports.createElement(RT,null,i==="error"?P.exports.createElement(ET,Object.assign({},s)):P.exports.createElement(CT,Object.assign({},s))))};function r0(){var t=Ve([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return r0=function(){return t},t}function i0(){var t=Ve([`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`]);return i0=function(){return t},t}var OT=function(e){return`
0% {transform: translate3d(0,`+e*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},DT=function(e){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+e*-150+`%,-1px) scale(.6); opacity:0;}
`},LT="0%{opacity:0;} 100%{opacity:1;}",bT="0%{opacity:1;} 100%{opacity:0;}",$T=qn("div",P.exports.forwardRef)(i0()),MT=qn("div")(r0()),UT=function(e,n){var r=e.includes("top"),i=r?1:-1,s=zv()?[LT,bT]:[OT(i),DT(i)],o=s[0],a=s[1];return{animation:n?hn(o)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":hn(a)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},FT=P.exports.memo(function(t){var e=t.toast,n=t.position,r=t.style,i=t.children,s=e!=null&&e.height?UT(e.position||n||"top-center",e.visible):{opacity:0},o=P.exports.createElement(PT,{toast:e}),a=P.exports.createElement(MT,Object.assign({},e.ariaProps),Ja(e.message,e));return P.exports.createElement($T,{className:e.className,style:ae({},s,r,e.style)},typeof i=="function"?i({icon:o,message:a}):P.exports.createElement(P.exports.Fragment,null,o,a))});function s0(){var t=Ve([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return s0=function(){return t},t}aT(P.exports.createElement);var jT=function(e,n){var r=e.includes("top"),i=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return ae({left:0,right:0,display:"flex",position:"absolute",transition:zv()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(r?1:-1)+"px)"},i,s)},BT=Fl(s0()),Xo=16,o0=function(e){var n=e.reverseOrder,r=e.position,i=r===void 0?"top-center":r,s=e.toastOptions,o=e.gutter,a=e.children,l=e.containerStyle,u=e.containerClassName,c=yT(s),d=c.toasts,h=c.handlers;return P.exports.createElement("div",{style:ae({position:"fixed",zIndex:9999,top:Xo,left:Xo,right:Xo,bottom:Xo,pointerEvents:"none"},l),className:u,onMouseEnter:h.startPause,onMouseLeave:h.endPause},d.map(function(y){var g=y.position||i,w=h.calculateOffset(y,{reverseOrder:n,gutter:o,defaultPosition:i}),C=jT(g,w),p=y.height?void 0:cT(function(f){h.updateHeight(y.id,f.height)});return P.exports.createElement("div",{ref:p,className:y.visible?BT:"",key:y.id,style:C},y.type==="custom"?Ja(y.message,y):a?a(y):P.exports.createElement(FT,{toast:y,position:g}))}))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},VT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},l0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(h=64)),r.push(n[c],n[d],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zT=function(t){const e=a0(t);return l0.encodeByteArray(e,!0)},u0=function(t){return zT(t).replace(/\./g,"")},HT=function(t){try{return l0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c0(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function h0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function d0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KT(){return Re().indexOf("Electron/")>=0}function f0(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qT(){return Re().indexOf("MSAppHost/")>=0}function GT(){return typeof indexedDB=="object"}function XT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=YT,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gn(i,a,r)}}function QT(t,e){return t.replace(JT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const JT=/\{\$([^}]+)}/g;function ZT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rm(s)&&rm(o)){if(!Za(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function es(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ts(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ek(t,e){const n=new tk(t,e);return n.subscribe.bind(n)}class tk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ku),i.error===void 0&&(i.error=Ku),i.complete===void 0&&(i.complete=Ku);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ku(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class im{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new p0(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new m0(this._db.createObjectStore(e,n))}close(){this._db.close()}}class p0{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new m0(this._transaction.objectStore(e))}}class m0{constructor(e){this._store=e}index(e){return new sm(this._store.index(e))}createIndex(e,n,r){return new sm(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return ns(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return ns(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return ns(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ns(e,"Error clearing IndexedDB object store")}}class sm{constructor(e){this._index=e}get(e){const n=this._index.get(e);return ns(n,"Error reading from IndexedDB")}}function rk(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new im(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new im(s.result),o.oldVersion,o.newVersion,new p0(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ok(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sk(t){return t===nr?void 0:t}function ok(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ik(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const lk={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},uk=G.INFO,ck={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},hk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ck[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=uk,this._logHandler=hk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ch="@firebase/app",om="0.7.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new Pd("@firebase/app"),pk="@firebase/app-compat",mk="@firebase/analytics-compat",gk="@firebase/analytics",yk="@firebase/app-check-compat",vk="@firebase/app-check",wk="@firebase/auth",_k="@firebase/auth-compat",Ek="@firebase/database",Sk="@firebase/database-compat",Tk="@firebase/functions",kk="@firebase/functions-compat",Ik="@firebase/installations",Ck="@firebase/installations-compat",Rk="@firebase/messaging",Ak="@firebase/messaging-compat",xk="@firebase/performance",Nk="@firebase/performance-compat",Pk="@firebase/remote-config",Ok="@firebase/remote-config-compat",Dk="@firebase/storage",Lk="@firebase/storage-compat",bk="@firebase/firestore",$k="@firebase/firestore-compat",Mk="firebase",Uk="9.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="[DEFAULT]",Fk={[ch]:"fire-core",[pk]:"fire-core-compat",[gk]:"fire-analytics",[mk]:"fire-analytics-compat",[vk]:"fire-app-check",[yk]:"fire-app-check-compat",[wk]:"fire-auth",[_k]:"fire-auth-compat",[Ek]:"fire-rtdb",[Sk]:"fire-rtdb-compat",[Tk]:"fire-fn",[kk]:"fire-fn-compat",[Ik]:"fire-iid",[Ck]:"fire-iid-compat",[Rk]:"fire-fcm",[Ak]:"fire-fcm-compat",[xk]:"fire-perf",[Nk]:"fire-perf-compat",[Pk]:"fire-rc",[Ok]:"fire-rc-compat",[Dk]:"fire-gcs",[Lk]:"fire-gcs-compat",[bk]:"fire-fst",[$k]:"fire-fst-compat","fire-js":"fire-js",[Mk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Map,hh=new Map;function jk(t,e){try{t.container.addComponent(e)}catch(n){Od.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _r(t){const e=t.name;if(hh.has(e))return Od.debug(`There were multiple attempts to register component ${e}.`),!1;hh.set(e,t);for(const n of el.values())jk(n,t);return!0}function jl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Er=new oo("app","Firebase",Bk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=Uk;function zk(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:g0,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Er.create("bad-app-name",{appName:String(r)});const i=el.get(r);if(i){if(Za(t,i.options)&&Za(n,i.config))return i;throw Er.create("duplicate-app",{appName:r})}const s=new ak(r);for(const a of hh.values())s.addComponent(a);const o=new Vk(t,n,s);return el.set(r,o),o}function Dd(t=g0){const e=el.get(t);if(!e)throw Er.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let i=(r=Fk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Od.warn(a.join(" "));return}_r(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="firebase-heartbeat-database",Wk=1,$s="firebase-heartbeat-store";let qu=null;function y0(){return qu||(qu=rk(Hk,Wk,(t,e)=>{switch(e){case 0:t.createObjectStore($s)}}).catch(t=>{throw Er.create("storage-open",{originalErrorMessage:t.message})})),qu}async function Kk(t){try{return(await y0()).transaction($s).objectStore($s).get(v0(t))}catch(e){throw Er.create("storage-get",{originalErrorMessage:e.message})}}async function am(t,e){try{const r=(await y0()).transaction($s,"readwrite");return await r.objectStore($s).put(e,v0(t)),r.complete}catch(n){throw Er.create("storage-set",{originalErrorMessage:n.message})}}function v0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=1024,Gk=30*24*60*60*1e3;class Xk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Gk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lm(),{heartbeatsToSend:n,unsentEntries:r}=Yk(this._heartbeatsCache.heartbeats),i=u0(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lm(){return new Date().toISOString().substring(0,10)}function Yk(t,e=qk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),um(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),um(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GT()?XT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function um(t){return u0(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t){_r(new Vn("platform-logger",e=>new dk(e),"PRIVATE")),_r(new Vn("heartbeat",e=>new Xk(e),"PRIVATE")),zt(ch,om,t),zt(ch,om,"esm2017"),zt("fire-js","")}Jk("");var Zk=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x,Ld=Ld||{},$=Zk||self;function tl(){}function dh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function eI(t){return Object.prototype.hasOwnProperty.call(t,Gu)&&t[Gu]||(t[Gu]=++tI)}var Gu="closure_uid_"+(1e9*Math.random()>>>0),tI=0;function nI(t,e,n){return t.call.apply(t.bind,arguments)}function rI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function De(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?De=nI:De=rI,De.apply(null,arguments)}function Yo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xn(){this.s=this.s,this.o=this.o}var iI=0,sI={};Xn.prototype.s=!1;Xn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),iI!=0)){var t=eI(this);delete sI[t]}};Xn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_0=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function oI(t){e:{var e=QI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function cm(t){return Array.prototype.concat.apply([],arguments)}function bd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function nl(t){return/^[\s\xa0]*$/.test(t)}var hm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function We(t,e){return t.indexOf(e)!=-1}function Xu(t,e){return t<e?-1:t>e?1:0}var Ke;e:{var dm=$.navigator;if(dm){var fm=dm.userAgent;if(fm){Ke=fm;break e}}Ke=""}function $d(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function E0(t){const e={};for(const n in t)e[n]=t[n];return e}var pm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<pm.length;s++)n=pm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Md(t){return Md[" "](t),t}Md[" "]=tl;function aI(t){var e=cI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lI=We(Ke,"Opera"),yi=We(Ke,"Trident")||We(Ke,"MSIE"),T0=We(Ke,"Edge"),fh=T0||yi,k0=We(Ke,"Gecko")&&!(We(Ke.toLowerCase(),"webkit")&&!We(Ke,"Edge"))&&!(We(Ke,"Trident")||We(Ke,"MSIE"))&&!We(Ke,"Edge"),uI=We(Ke.toLowerCase(),"webkit")&&!We(Ke,"Edge");function I0(){var t=$.document;return t?t.documentMode:void 0}var rl;e:{var Yu="",Qu=function(){var t=Ke;if(k0)return/rv:([^\);]+)(\)|;)/.exec(t);if(T0)return/Edge\/([\d\.]+)/.exec(t);if(yi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uI)return/WebKit\/(\S+)/.exec(t);if(lI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qu&&(Yu=Qu?Qu[1]:""),yi){var Ju=I0();if(Ju!=null&&Ju>parseFloat(Yu)){rl=String(Ju);break e}}rl=Yu}var cI={};function hI(){return aI(function(){let t=0;const e=hm(String(rl)).split("."),n=hm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Xu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Xu(i[2].length==0,s[2].length==0)||Xu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ph;if($.document&&yi){var mm=I0();ph=mm||parseInt(rl,10)||void 0}else ph=void 0;var dI=ph,fI=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",tl,e),$.removeEventListener("test",tl,e)}catch{}return t}();function je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};function Ms(t,e){if(je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(k0){e:{try{Md(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ms.Z.h.call(this)}}$e(Ms,je);var pI={2:"touch",3:"pen",4:"mouse"};Ms.prototype.h=function(){Ms.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var uo="closure_listenable_"+(1e6*Math.random()|0),mI=0;function gI(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++mI,this.ca=this.fa=!1}function Bl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Vl(t){this.src=t,this.g={},this.h=0}Vl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new gI(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function mh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=w0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Bl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Ud="closure_lm_"+(1e6*Math.random()|0),Zu={};function C0(t,e,n,r,i){if(r&&r.once)return A0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)C0(t,e[s],n,r,i);return null}return n=Bd(n),t&&t[uo]?t.N(e,n,lo(r)?!!r.capture:!!r,i):R0(t,e,n,!1,r,i)}function R0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=lo(i)?!!i.capture:!!i,a=jd(t);if(a||(t[Ud]=a=new Vl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)fI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(N0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yI(){function t(n){return e.call(t.src,t.listener,n)}var e=vI;return t}function A0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)A0(t,e[s],n,r,i);return null}return n=Bd(n),t&&t[uo]?t.O(e,n,lo(r)?!!r.capture:!!r,i):R0(t,e,n,!0,r,i)}function x0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)x0(t,e[s],n,r,i);else r=lo(r)?!!r.capture:!!r,n=Bd(n),t&&t[uo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gh(s,n,r,i),-1<n&&(Bl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=jd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gh(e,n,r,i)),(n=-1<t?e[t]:null)&&Fd(n))}function Fd(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[uo])mh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(N0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jd(e))?(mh(n,t),n.h==0&&(n.src=null,e[Ud]=null)):Bl(t)}}}function N0(t){return t in Zu?Zu[t]:Zu[t]="on"+t}function vI(t,e){if(t.ca)t=!0;else{e=new Ms(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Fd(t),t=n.call(r,e)}return t}function jd(t){return t=t[Ud],t instanceof Vl?t:null}var ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bd(t){return typeof t=="function"?t:(t[ec]||(t[ec]=function(e){return t.handleEvent(e)}),t[ec])}function Ae(){Xn.call(this),this.i=new Vl(this),this.P=this,this.I=null}$e(Ae,Xn);Ae.prototype[uo]=!0;Ae.prototype.removeEventListener=function(t,e,n,r){x0(this,t,e,n,r)};function Le(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new je(e,t);else if(e instanceof je)e.target=e.target||t;else{var i=e;e=new je(r,t),S0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Qo(o,r,!0,e)&&i}if(o=e.g=t,i=Qo(o,r,!0,e)&&i,i=Qo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Qo(o,r,!1,e)&&i}Ae.prototype.M=function(){if(Ae.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Bl(n[r]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ae.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&mh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vd=$.JSON.stringify;function wI(){var t=O0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _I{constructor(){this.h=this.g=null}add(e,n){const r=P0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var P0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new EI,t=>t.reset());class EI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SI(t){$.setTimeout(()=>{throw t},0)}function zd(t,e){yh||TI(),vh||(yh(),vh=!0),O0.add(t,e)}var yh;function TI(){var t=$.Promise.resolve(void 0);yh=function(){t.then(kI)}}var vh=!1,O0=new _I;function kI(){for(var t;t=wI();){try{t.h.call(t.g)}catch(n){SI(n)}var e=P0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vh=!1}function zl(t,e){Ae.call(this),this.h=t||1,this.g=e||$,this.j=De(this.kb,this),this.l=Date.now()}$e(zl,Ae);x=zl.prototype;x.da=!1;x.S=null;x.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Le(this,"tick"),this.da&&(Hd(this),this.start()))}};x.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hd(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}x.M=function(){zl.Z.M.call(this),Hd(this),delete this.g};function Wd(t,e,n){if(typeof t=="function")n&&(t=De(t,n));else if(t&&typeof t.handleEvent=="function")t=De(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function D0(t){t.g=Wd(()=>{t.g=null,t.i&&(t.i=!1,D0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class II extends Xn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:D0(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Us(t){Xn.call(this),this.h=t,this.g={}}$e(Us,Xn);var gm=[];function L0(t,e,n,r){Array.isArray(n)||(n&&(gm[0]=n.toString()),n=gm);for(var i=0;i<n.length;i++){var s=C0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function b0(t){$d(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fd(e)},t),t.g={}}Us.prototype.M=function(){Us.Z.M.call(this),b0(this)};Us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hl(){this.g=!0}Hl.prototype.Aa=function(){this.g=!1};function CI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Xr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xI(t,n)+(r?" "+r:"")})}function AI(t,e){t.info(function(){return"TIMEOUT: "+e})}Hl.prototype.info=function(){};function xI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vd(n)}catch{return e}}var Or={},ym=null;function Wl(){return ym=ym||new Ae}Or.Ma="serverreachability";function $0(t){je.call(this,Or.Ma,t)}$e($0,je);function Fs(t){const e=Wl();Le(e,new $0(e,t))}Or.STAT_EVENT="statevent";function M0(t,e){je.call(this,Or.STAT_EVENT,t),this.stat=e}$e(M0,je);function qe(t){const e=Wl();Le(e,new M0(e,t))}Or.Na="timingevent";function U0(t,e){je.call(this,Or.Na,t),this.size=e}$e(U0,je);function co(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Kl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},F0={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Kd(){}Kd.prototype.h=null;function vm(t){return t.h||(t.h=t.i())}function j0(){}var ho={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function qd(){je.call(this,"d")}$e(qd,je);function Gd(){je.call(this,"c")}$e(Gd,je);var wh;function ql(){}$e(ql,Kd);ql.prototype.g=function(){return new XMLHttpRequest};ql.prototype.i=function(){return{}};wh=new ql;function fo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Us(this),this.P=NI,t=fh?125:void 0,this.W=new zl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new B0}function B0(){this.i=null,this.g="",this.h=!1}var NI=45e3,_h={},il={};x=fo.prototype;x.setTimeout=function(t){this.P=t};function Eh(t,e,n){t.K=1,t.v=Xl(dn(e)),t.s=n,t.U=!0,V0(t,null)}function V0(t,e){t.F=Date.now(),po(t),t.A=dn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),X0(n.h,"t",r),t.C=0,n=t.l.H,t.h=new B0,t.g=mw(t.l,n?e:null,!t.s),0<t.O&&(t.L=new II(De(t.Ia,t,t.g),t.O)),L0(t.V,t.g,"readystatechange",t.gb),e=t.H?E0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Fs(1),CI(t.j,t.u,t.A,t.m,t.X,t.s)}x.gb=function(t){t=t.target;const e=this.L;e&&en(t)==3?e.l():this.Ia(t)};x.Ia=function(t){try{if(t==this.g)e:{const c=en(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>c)&&(c!=3||fh||this.g&&(this.h.h||this.g.ga()||Sm(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?Fs(3):Fs(2)),Gl(this);var n=this.g.ba();this.N=n;t:if(z0(this)){var r=Sm(this.g);t="";var i=r.length,s=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){or(this),fs(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,RI(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nl(a)){var u=a;break t}}u=null}if(n=u)Xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Sh(this,n);else{this.i=!1,this.o=3,qe(12),or(this),fs(this);break e}}this.U?(H0(this,c,o),fh&&this.i&&c==3&&(L0(this.V,this.W,"tick",this.fb),this.W.start())):(Xr(this.j,this.m,o,null),Sh(this,o)),c==4&&or(this),this.i&&!this.I&&(c==4?hw(this.l,this):(this.i=!1,po(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qe(12)):(this.o=0,qe(13)),or(this),fs(this)}}}catch{}finally{}};function z0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function H0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=PI(t,n),i==il){e==4&&(t.o=4,qe(14),r=!1),Xr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_h){t.o=4,qe(15),Xr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xr(t.j,t.m,i,null),Sh(t,i);z0(t)&&i!=il&&i!=_h&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),rf(e),e.L=!0,qe(11))):(Xr(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),fs(t))}x.fb=function(){if(this.g){var t=en(this.g),e=this.g.ga();this.C<e.length&&(Gl(this),H0(this,t,e),this.i&&t!=4&&po(this))}};function PI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?il:(n=Number(e.substring(n,r)),isNaN(n)?_h:(r+=1,r+n>e.length?il:(e=e.substr(r,n),t.C=r+n,e)))}x.cancel=function(){this.I=!0,or(this)};function po(t){t.Y=Date.now()+t.P,W0(t,t.P)}function W0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=co(De(t.eb,t),e)}function Gl(t){t.B&&($.clearTimeout(t.B),t.B=null)}x.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(AI(this.j,this.A),this.K!=2&&(Fs(3),qe(17)),or(this),this.o=2,fs(this)):W0(this,this.Y-t)};function fs(t){t.l.G==0||t.I||hw(t.l,t)}function or(t){Gl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Hd(t.W),b0(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Sh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Th(n.i,t))){if(n.I=t.N,!t.J&&Th(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ll(n),Jl(n);else break e;nf(n),qe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=co(De(n.ab,n),6e3));if(1>=J0(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ar(n,11)}else if((t.J||n.g==t)&&ll(n),!nl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const d=u[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const g=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(We(g,"spdy")||We(g,"quic")||We(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Qd(s,s.h),s.h=null))}if(r.D){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,ne(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=pw(r,r.H?r.la:null,r.W),o.J){Z0(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Gl(a),po(a)),r.g=o}else uw(r);0<n.l.length&&Zl(n)}else u[0]!="stop"&&u[0]!="close"||ar(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ar(n,7):tf(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Fs(4)}catch{}}function OI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(dh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Xd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dh(t)||typeof t=="string")_0(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(dh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=OI(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function xi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof xi)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}x=xi.prototype;x.R=function(){Yd(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};x.T=function(){return Yd(this),this.g.concat()};function Yd(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Sr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Sr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}x.get=function(t,e){return Sr(this.h,t)?this.h[t]:e};x.set=function(t,e){Sr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};x.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Sr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var K0=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function DI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Tr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Tr){this.g=e!==void 0?e:t.g,sl(this,t.j),this.s=t.s,ol(this,t.i),al(this,t.m),this.l=t.l,e=t.h;var n=new js;n.i=e.i,e.g&&(n.g=new xi(e.g),n.h=e.h),wm(this,n),this.o=t.o}else t&&(n=String(t).match(K0))?(this.g=!!e,sl(this,n[1]||"",!0),this.s=ps(n[2]||""),ol(this,n[3]||"",!0),al(this,n[4]),this.l=ps(n[5]||"",!0),wm(this,n[6]||"",!0),this.o=ps(n[7]||"")):(this.g=!!e,this.h=new js(null,this.g))}Tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rs(e,_m,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rs(e,_m,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(rs(n,n.charAt(0)=="/"?UI:MI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rs(n,jI)),t.join("")};function dn(t){return new Tr(t)}function sl(t,e,n){t.j=n?ps(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ol(t,e,n){t.i=n?ps(e,!0):e}function al(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wm(t,e,n){e instanceof js?(t.h=e,BI(t.h,t.g)):(n||(e=rs(e,FI)),t.h=new js(e,t.g))}function ne(t,e,n){t.h.set(e,n)}function Xl(t){return ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function LI(t){return t instanceof Tr?dn(t):new Tr(t,void 0)}function bI(t,e,n,r){var i=new Tr(null,void 0);return t&&sl(i,t),e&&ol(i,e),n&&al(i,n),r&&(i.l=r),i}function ps(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$I),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $I(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _m=/[#\/\?@]/g,MI=/[#\?:]/g,UI=/[#\?]/g,FI=/[#\?@]/g,jI=/#/g;function js(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yn(t){t.g||(t.g=new xi,t.h=0,t.i&&DI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=js.prototype;x.add=function(t,e){Yn(this),this.i=null,t=Ni(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function q0(t,e){Yn(t),e=Ni(t,e),Sr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Sr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Yd(t)))}function G0(t,e){return Yn(t),e=Ni(t,e),Sr(t.g.h,e)}x.forEach=function(t,e){Yn(this),this.g.forEach(function(n,r){_0(n,function(i){t.call(e,i,r,this)},this)},this)};x.T=function(){Yn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};x.R=function(t){Yn(this);var e=[];if(typeof t=="string")G0(this,t)&&(e=cm(e,this.g.get(Ni(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=cm(e,t[n])}return e};x.set=function(t,e){return Yn(this),this.i=null,t=Ni(this,t),G0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function X0(t,e,n){q0(t,e),0<n.length&&(t.i=null,t.g.set(Ni(t,e),bd(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ni(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BI(t,e){e&&!t.j&&(Yn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(q0(this,r),X0(this,i,n))},t)),t.j=e}var VI=class{constructor(t,e){this.h=t,this.g=e}};function Y0(t){this.l=t||zI,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zI=10;function Q0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function J0(t){return t.h?1:t.g?t.g.size:0}function Th(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qd(t,e){t.g?t.g.add(e):t.h=e}function Z0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Y0.prototype.cancel=function(){if(this.i=ew(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ew(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return bd(t.i)}function Jd(){}Jd.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Jd.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function HI(){this.g=new Jd}function WI(t,e,n){const r=n||"";try{Xd(t,function(i,s){let o=i;lo(i)&&(o=Vd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KI(t,e){const n=new Hl;if($.Image){const r=new Image;r.onload=Yo(Jo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Yo(Jo,n,r,"TestLoadImage: error",!1,e),r.onabort=Yo(Jo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Yo(Jo,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Jo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function mo(t){this.l=t.$b||null,this.j=t.ib||!1}$e(mo,Kd);mo.prototype.g=function(){return new Yl(this.l,this.j)};mo.prototype.i=function(t){return function(){return t}}({});function Yl(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Zd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Yl,Ae);var Zd=0;x=Yl.prototype;x.open=function(t,e){if(this.readyState!=Zd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bs(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=Zd};x.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bs(this)),this.g&&(this.readyState=3,Bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tw(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function tw(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}x.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?go(this):Bs(this),this.readyState==3&&tw(this)}};x.Ua=function(t){this.g&&(this.response=this.responseText=t,go(this))};x.Ta=function(t){this.g&&(this.response=t,go(this))};x.ha=function(){this.g&&go(this)};function go(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bs(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qI=$.JSON.parse;function ye(t){Ae.call(this),this.headers=new xi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nw,this.K=this.L=!1}$e(ye,Ae);var nw="",GI=/^https?$/i,XI=["POST","PUT"];x=ye.prototype;x.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wh.g(),this.C=this.u?vm(this.u):vm(wh),this.g.onreadystatechange=De(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Em(this,s);return}t=n||"";const i=new xi(this.headers);r&&Xd(r,function(s,o){i.set(o,s)}),r=oI(i.T()),n=$.FormData&&t instanceof $.FormData,!(0<=w0(XI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sw(this),0<this.B&&((this.K=YI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=De(this.pa,this)):this.A=Wd(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Em(this,s)}};function YI(t){return yi&&hI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function QI(t){return t.toLowerCase()=="content-type"}x.pa=function(){typeof Ld!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function Em(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rw(t),Ql(t)}function rw(t){t.D||(t.D=!0,Le(t,"complete"),Le(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),Ql(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ql(this,!0)),ye.Z.M.call(this)};x.Fa=function(){this.s||(this.F||this.v||this.l?iw(this):this.cb())};x.cb=function(){iw(this)};function iw(t){if(t.h&&typeof Ld!="undefined"&&(!t.C[1]||en(t)!=4||t.ba()!=2)){if(t.v&&en(t)==4)Wd(t.Fa,0,t);else if(Le(t,"readystatechange"),en(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(K0)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!GI.test(i?i.toLowerCase():"")}n=r}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var o=2<en(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",rw(t)}}finally{Ql(t)}}}}function Ql(t,e){if(t.g){sw(t);const n=t.g,r=t.C[0]?tl:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=r}catch{}}}function sw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function en(t){return t.g?t.g.readyState:0}x.ba=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}};x.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qI(e)}};function Sm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case nw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Da=function(){return this.m};x.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function JI(t){let e="";return $d(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ef(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=JI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ne(t,e,n))}function Ki(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ow(t){this.za=0,this.l=[],this.h=new Hl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ki("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ki("baseRetryDelayMs",5e3,t),this.$a=Ki("retryDelaySeedMs",1e4,t),this.Ya=Ki("forwardChannelMaxRetries",2,t),this.ra=Ki("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Y0(t&&t.concurrentRequestLimit),this.Ca=new HI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}x=ow.prototype;x.ma=8;x.G=1;function tf(t){if(aw(t),t.G==3){var e=t.V++,n=dn(t.F);ne(n,"SID",t.J),ne(n,"RID",e),ne(n,"TYPE","terminate"),yo(t,n),e=new fo(t,t.h,e,void 0),e.K=2,e.v=Xl(dn(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=mw(e.l,null),e.g.ea(e.v)),e.F=Date.now(),po(e)}fw(t)}x.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Jl(t){t.g&&(rf(t),t.g.cancel(),t.g=null)}function aw(t){Jl(t),t.u&&($.clearTimeout(t.u),t.u=null),ll(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function tc(t,e){t.l.push(new VI(t.Za++,e)),t.G==3&&Zl(t)}function Zl(t){Q0(t.i)||t.m||(t.m=!0,zd(t.Ha,t),t.C=0)}function ZI(t,e){return J0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=co(De(t.Ha,t,e),dw(t,t.C)),t.C++,!0)}x.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new fo(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=E0(s),S0(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lw(this,i,e),n=dn(this.F),ne(n,"RID",t),ne(n,"CVER",22),this.D&&ne(n,"X-HTTP-Session-Id",this.D),yo(this,n),this.o&&s&&ef(n,this.o,s),Qd(this.i,i),this.Ra&&ne(n,"TYPE","init"),this.ja?(ne(n,"$req",e),ne(n,"SID","null"),i.$=!0,Eh(i,n,null)):Eh(i,n,e),this.G=2}}else this.G==3&&(t?Tm(this,t):this.l.length==0||Q0(this.i)||Tm(this))};function Tm(t,e){var n;e?n=e.m:n=t.V++;const r=dn(t.F);ne(r,"SID",t.J),ne(r,"RID",n),ne(r,"AID",t.U),yo(t,r),t.o&&t.s&&ef(r,t.o,t.s),n=new fo(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=lw(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Qd(t.i,n),Eh(n,r,e)}function yo(t,e){t.j&&Xd({},function(n,r){ne(e,r,n)})}function lw(t,e,n){n=Math.min(t.l.length,n);var r=t.j?De(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{WI(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function uw(t){t.g||t.u||(t.Y=1,zd(t.Ga,t),t.A=0)}function nf(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=co(De(t.Ga,t),dw(t,t.A)),t.A++,!0)}x.Ga=function(){if(this.u=null,cw(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=co(De(this.bb,this),t)}};x.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,qe(10),Jl(this),cw(this))};function rf(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function cw(t){t.g=new fo(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=dn(t.oa);ne(e,"RID","rpc"),ne(e,"SID",t.J),ne(e,"CI",t.N?"0":"1"),ne(e,"AID",t.U),yo(t,e),ne(e,"TYPE","xmlhttp"),t.o&&t.s&&ef(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xl(dn(e)),n.s=null,n.U=!0,V0(n,t)}x.ab=function(){this.v!=null&&(this.v=null,Jl(this),nf(this),qe(19))};function ll(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function hw(t,e){var n=null;if(t.g==e){ll(t),rf(t),t.g=null;var r=2}else if(Th(t.i,e))n=e.D,Z0(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Wl(),Le(r,new U0(r,n,e,i)),Zl(t)}else uw(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&ZI(t,e)||r==2&&nf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function dw(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ar(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=De(t.jb,t);n||(n=new Tr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||sl(n,"https"),Xl(n)),KI(n.toString(),r)}else qe(2);t.G=0,t.j&&t.j.va(e),fw(t),aw(t)}x.jb=function(t){t?(this.h.info("Successfully pinged google.com"),qe(2)):(this.h.info("Failed to ping google.com"),qe(1))};function fw(t){t.G=0,t.I=-1,t.j&&((ew(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,bd(t.l),t.l.length=0),t.j.ua())}function pw(t,e,n){let r=LI(n);if(r.i!="")e&&ol(r,e+"."+r.i),al(r,r.m);else{const i=$.location;r=bI(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&$d(t.aa,function(i,s){ne(r,s,i)}),e=t.D,n=t.sa,e&&n&&ne(r,e,n),ne(r,"VER",t.ma),yo(t,r),r}function mw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ye(new mo({ib:!0})):new ye(t.qa),e.L=t.H,e}function gw(){}x=gw.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Oa=function(){};function ul(){if(yi&&!(10<=Number(dI)))throw Error("Environmental error: no available transport.")}ul.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Ae.call(this),this.g=new ow(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!nl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!nl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pi(this)}$e(pt,Ae);pt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),zd(De(t.hb,t,e))),qe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=pw(t,null,t.W),Zl(t)};pt.prototype.close=function(){tf(this.g)};pt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,tc(this.g,e)}else this.v?(e={},e.__data__=Vd(t),tc(this.g,e)):tc(this.g,t)};pt.prototype.M=function(){this.g.j=null,delete this.j,tf(this.g),delete this.g,pt.Z.M.call(this)};function yw(t){qd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(yw,qd);function vw(){Gd.call(this),this.status=1}$e(vw,Gd);function Pi(t){this.g=t}$e(Pi,gw);Pi.prototype.xa=function(){Le(this.g,"a")};Pi.prototype.wa=function(t){Le(this.g,new yw(t))};Pi.prototype.va=function(t){Le(this.g,new vw(t))};Pi.prototype.ua=function(){Le(this.g,"b")};ul.prototype.createWebChannel=ul.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Kl.NO_ERROR=0;Kl.TIMEOUT=8;Kl.HTTP_ERROR=6;F0.COMPLETE="complete";j0.EventType=ho;ho.OPEN="a";ho.CLOSE="b";ho.ERROR="c";ho.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.La;ye.prototype.getLastErrorCode=ye.prototype.Da;ye.prototype.getStatus=ye.prototype.ba;ye.prototype.getResponseJson=ye.prototype.Qa;ye.prototype.getResponseText=ye.prototype.ga;ye.prototype.send=ye.prototype.ea;var eC=function(){return new ul},tC=function(){return Wl()},nc=Kl,nC=F0,rC=Or,km={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},iC=mo,Zo=j0,sC=ye;const Im="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Pd("@firebase/firestore");function Cm(){return kr.logLevel}function D(t,...e){if(kr.logLevel<=G.DEBUG){const n=e.map(sf);kr.debug(`Firestore (${Oi}): ${t}`,...n)}}function Ir(t,...e){if(kr.logLevel<=G.ERROR){const n=e.map(sf);kr.error(`Firestore (${Oi}): ${t}`,...n)}}function Rm(t,...e){if(kr.logLevel<=G.WARN){const n=e.map(sf);kr.warn(`Firestore (${Oi}): ${t}`,...n)}}function sf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+t;throw Ir(e),new Error(e)}function Ee(t,e){t||q()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class lC{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new oC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Je(e)}}class uC{constructor(e,n,r){this.type="FirstParty",this.user=Je.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class cC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new uC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dC{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.p=n.token,new hC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ww.A=-1;class _w{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function vi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new Xe(0,0))}static max(){return new ge(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ew(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Vs{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const pC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Vs{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return pC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.fields=e,e.sort(nt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new fn(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new fn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fn.EMPTY_BYTE_STRING=new fn("");const mC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=mC.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zs(t){return typeof t=="string"?fn.fromBase64String(t):fn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cl(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Hs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){return t==null}function hl(t){return t===0&&1/t==-1/0}function vC(t){return typeof t=="number"&&Number.isInteger(t)&&!hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ue.fromString(e))}static fromName(e){return new j(ue.fromString(e).popFirst(5))}static empty(){return new j(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ue(e.slice()))}}function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gC(t)?4:wC(t)?9:10:q()}function qt(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cl(t).isEqual(cl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Cr(r.timestampValue),o=Cr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return zs(r.bytesValue).isEqual(zs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ne(r.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ne(r.integerValue)===Ne(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ne(r.doubleValue),o=Ne(i.doubleValue);return s===o?hl(s)===hl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Am(s)!==Am(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!qt(s[a],o[a])))return!1;return!0}(t,e);default:return q()}}function Ws(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function _i(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ne(i.integerValue||i.doubleValue),a=Ne(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return xm(t.timestampValue,e.timestampValue);case 4:return xm(cl(t),cl(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,s){const o=zs(i),a=zs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Y(o[l],a[l]);if(u!==0)return u}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Y(Ne(i.latitude),Ne(s.latitude));return o!==0?o:Y(Ne(i.longitude),Ne(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=_i(o[l],a[l]);if(u)return u}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=Y(a[c],u[c]);if(d!==0)return d;const h=_i(o[a[c]],l[u[c]]);if(h!==0)return h}return Y(a.length,u.length)}(t.mapValue,e.mapValue);default:throw q()}}function xm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Cr(t),r=Cr(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function ii(t){return Ih(t)}function Ih(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Cr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ih(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ih(r.fields[a])}`;return s+"}"}(t.mapValue):q();var e,n}function Ch(t){return!!t&&"integerValue"in t}function of(t){return!!t&&"arrayValue"in t}function wa(t){return!!t&&"mapValue"in t}function ms(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ms(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ms(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ms(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ms(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(ms(this.value))}}function Sw(t){const e=[];return vo(t.fields,(n,r)=>{const i=new nt([n]);if(wa(r)){const s=Sw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kh(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Pt(e,0,ge.min(),ge.min(),Ft.empty(),0)}static newFoundDocument(e,n,r){return new Pt(e,1,n,ge.min(),r,0)}static newNoDocument(e,n){return new Pt(e,2,n,ge.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,ge.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function _C(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ge.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Ei(i,j.empty(),e)}function EC(t){return new Ei(t.readTime,t.key,-1)}class Ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ei(ge.min(),j.empty(),-1)}static max(){return new Ei(ge.max(),j.empty(),-1)}}function SC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function Nm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new TC(t,e,n,r,i,s,o)}function af(t){const e=ee(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ii(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ii(r)).join(",")),e.P=n}return e.P}function kC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ii(r.value)}`;var r}).join(", ")}]`),wo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ii(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ii(n)).join(",")),`Target(${e})`}function lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!OC(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!qt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Om(t.startAt,e.startAt)&&Om(t.endAt,e.endAt)}class it extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new IC(e,n,r):n==="array-contains"?new AC(e,r):n==="in"?new xC(e,r):n==="not-in"?new NC(e,r):n==="array-contains-any"?new PC(e,r):new it(e,n,r)}static V(e,n,r){return n==="in"?new CC(e,r):new RC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(_i(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.v(_i(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class IC extends it{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.v(n)}}class CC extends it{constructor(e,n){super(e,"in",n),this.keys=Tw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RC extends it{constructor(e,n){super(e,"not-in",n),this.keys=Tw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class AC extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return of(n)&&Ws(n.arrayValue,this.value)}}class xC extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ws(this.value.arrayValue,n)}}class NC extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ws(this.value.arrayValue,n)}}class PC extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ws(this.value.arrayValue,r))}}class dl{constructor(e,n){this.position=e,this.inclusive=n}}class gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function OC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Pm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=_i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Om(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function DC(t,e,n,r,i,s,o,a){return new eu(t,e,n,r,i,s,o,a)}function LC(t){return new eu(t)}function bC(t){return!wo(t.limit)&&t.limitType==="F"}function $C(t){return!wo(t.limit)&&t.limitType==="L"}function MC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function UC(t){for(const e of t.filters)if(e.S())return e.field;return null}function FC(t){return t.collectionGroup!==null}function Ks(t){const e=ee(t);if(e.D===null){e.D=[];const n=UC(e),r=MC(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new gs(n)),e.D.push(new gs(nt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new gs(nt.keyField(),s))}}}return e.D}function fl(t){const e=ee(t);if(!e.C)if(e.limitType==="F")e.C=Nm(e.path,e.collectionGroup,Ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ks(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new gs(s.field,o))}const r=e.endAt?new dl(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new dl(e.startAt.position,!e.startAt.inclusive):null;e.C=Nm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function jC(t,e,n){return new eu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kw(t,e){return lf(fl(t),fl(e))&&t.limitType===e.limitType}function Iw(t){return`${af(fl(t))}|lt:${t.limitType}`}function Dm(t){return`Query(target=${kC(fl(t))}; limitType=${t.limitType})`}function Cw(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Pm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ks(n),r)||n.endAt&&!function(i,s,o){const a=Pm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ks(n),r))}(t,e)}function BC(t){return(e,n)=>{let r=!1;for(const i of Ks(t)){const s=VC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VC(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?_i(a,l):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hl(e)?"-0":e}}function Aw(t){return{integerValue:""+t}}function zC(t,e){return vC(e)?Aw(e):Rw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this._=void 0}}function HC(t,e,n){return t instanceof pl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof qs?Nw(t,e):t instanceof Gs?Pw(t,e):function(r,i){const s=xw(r,i),o=Lm(s)+Lm(r.k);return Ch(s)&&Ch(r.k)?Aw(o):Rw(r.M,o)}(t,e)}function WC(t,e,n){return t instanceof qs?Nw(t,e):t instanceof Gs?Pw(t,e):n}function xw(t,e){return t instanceof ml?Ch(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class pl extends tu{}class qs extends tu{constructor(e){super(),this.elements=e}}function Nw(t,e){const n=Ow(e);for(const r of t.elements)n.some(i=>qt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends tu{constructor(e){super(),this.elements=e}}function Pw(t,e){let n=Ow(e);for(const r of t.elements)n=n.filter(i=>!qt(i,r));return{arrayValue:{values:n}}}class ml extends tu{constructor(e,n){super(),this.M=e,this.k=n}}function Lm(t){return Ne(t.integerValue||t.doubleValue)}function Ow(t){return of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function KC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof qs&&r instanceof qs||n instanceof Gs&&r instanceof Gs?vi(n.elements,r.elements,qt):n instanceof ml&&r instanceof ml?qt(n.k,r.k):n instanceof pl&&r instanceof pl}(t.transform,e.transform)}class qC{constructor(e,n){this.version=e,this.transformResults=n}}class si{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new si}static exists(e){return new si(void 0,e)}static updateTime(e){return new si(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nu{}function GC(t,e,n){t instanceof ru?function(r,i,s){const o=r.value.clone(),a=Mm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _o?function(r,i,s){if(!_a(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Mm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Dw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Rh(t,e,n){t instanceof ru?function(r,i,s){if(!_a(r.precondition,i))return;const o=r.value.clone(),a=Um(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument($m(i),o).setHasLocalMutations()}(t,e,n):t instanceof _o?function(r,i,s){if(!_a(r.precondition,i))return;const o=Um(r.fieldTransforms,s,i),a=i.data;a.setAll(Dw(r)),a.setAll(o),i.convertToFoundDocument($m(i),a).setHasLocalMutations()}(t,e,n):function(r,i){_a(r.precondition,i)&&i.convertToNoDocument(ge.min())}(t,e)}function XC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xw(r.transform,i||null);s!=null&&(n==null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function bm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&vi(n,r,(i,s)=>KC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function $m(t){return t.isFoundDocument()?t.version:ge.min()}class ru extends nu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class _o extends nu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Dw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mm(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,WC(o,a,n[i]))}return r}function Um(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HC(s,o,e))}return r}class YC extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class QC extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,W;function JC(t){switch(t){default:return q();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function ZC(t){if(t===void 0)return Ir("GRPC error has no .code"),k.UNKNOWN;switch(t){case pe.OK:return k.OK;case pe.CANCELLED:return k.CANCELLED;case pe.UNKNOWN:return k.UNKNOWN;case pe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case pe.INTERNAL:return k.INTERNAL;case pe.UNAVAILABLE:return k.UNAVAILABLE;case pe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case pe.NOT_FOUND:return k.NOT_FOUND;case pe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case pe.ABORTED:return k.ABORTED;case pe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case pe.DATA_LOSS:return k.DATA_LOSS;default:return q()}}(W=pe||(pe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ew(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.comparator=e,this.root=n||Pe.EMPTY}insert(e,n){return new mt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new mt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ea(this.root,e,this.comparator,!0)}}class ea{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Pe.RED,this.left=i!=null?i:Pe.EMPTY,this.right=s!=null?s:Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Pe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Pe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fm(this.data.getIterator())}getIteratorFrom(e){return new Fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new mt(j.comparator);function jm(){return eR}const tR=new mt(j.comparator);function Bm(){return tR}function rc(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const nR=new mt(j.comparator),rR=new dt(j.comparator);function Rr(...t){let e=rR;for(const n of t)e=e.add(n);return e}const iR=new dt(Y);function sR(){return iR}class oR{constructor(e,n){this.databaseId=e,this.N=n}}function Ah(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aR(t,e){return t.N?e.toBase64():e.toUint8Array()}function lR(t,e){return Ah(t,e.toTimestamp())}function oi(t){return Ee(!!t),ge.fromTimestamp(function(e){const n=Cr(e);return new Xe(n.seconds,n.nanos)}(t))}function Lw(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function uR(t){const e=ue.fromString(t);return Ee(wR(e)),e}function xh(t,e){return Lw(t.databaseId,e.path)}function cR(t){const e=uR(t);return e.length===4?ue.emptyPath():dR(e)}function hR(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dR(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vm(t,e,n){return{name:xh(t,e),fields:n.value.mapValue.fields}}function fR(t,e){let n;if(e instanceof ru)n={update:Vm(t,e.key,e.value)};else if(e instanceof YC)n={delete:xh(t,e.key)};else if(e instanceof _o)n={update:Vm(t,e.key,e.data),updateMask:vR(e.fieldMask)};else{if(!(e instanceof QC))return q();n={verify:xh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof pl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Gs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ml)return{fieldPath:s.field.canonicalString(),increment:o.k};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:lR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(t,e.precondition)),n}function pR(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?oi(r.updateTime):oi(i);return s.isEqual(ge.min())&&(s=oi(i)),new qC(s,r.transformResults||[])}(n,e))):[]}function mR(t){let e=cR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=bw(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new gs(Yr(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,wo(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new dl(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new dl(h,d)}(n.endAt)),DC(e,i,o,s,a,"F",l,u)}function bw(t){return t?t.unaryFilter!==void 0?[yR(t)]:t.fieldFilter!==void 0?[gR(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>bw(e)).reduce((e,n)=>e.concat(n)):q():[]}function Yr(t){return nt.fromServerFormat(t.fieldPath)}function gR(t){return it.create(Yr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}function yR(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Yr(t.unaryFilter.field);return it.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Yr(t.unaryFilter.field);return it.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yr(t.unaryFilter.field);return it.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yr(t.unaryFilter.field);return it.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}function vR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ER{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function iu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GC(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Rh(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Rh(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(ge.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Rr())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,r)=>bm(n,r))&&vi(this.baseMutations,e.baseMutations,(n,r)=>bm(n,r))}}class uf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length);let i=nR;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new uf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.Jt=e}}function IR(t){const e=mR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jC(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.qe=new RR}addToCollectionParentIndex(e,n){return this.qe.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getFieldIndex(e,n){return I.resolve(null)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class RR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new dt(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new dt(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Si(0)}static yn(){return new Si(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==_R)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}qs(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(e,n.path):FC(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new j(n)).next(r=>{let i=Bm();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ws(e,n,r){const i=n.collectionGroup;let s=Bm();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new eu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.zs(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}zs(e,n,r){let i;return this.ds.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const l=a.key;let u=i.get(l);u==null&&(u=Pt.newInvalidDocument(l),i=i.insert(l,u)),Rh(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((s,o)=>{Cw(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=i}static Ys(e,n){let r=Rr(),i=Rr();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{Xs(e){this.Zs=e}Qs(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ge.min())?this.ti(e,n):this.Zs.Ks(e,i).next(s=>{const o=this.ei(n,s);return(bC(n)||$C(n))&&this.ni(n.limitType,o,i,r)?this.ti(e,n):(Cm()<=G.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dm(n)),this.Zs.Qs(e,n,_C(r,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let r=new dt(BC(e));return n.forEach((i,s)=>{Cw(e,s)&&(r=r.add(s))}),r}ni(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ti(e,n){return Cm()<=G.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Dm(n)),this.Zs.Qs(e,n,Ei.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,i){this.persistence=e,this.si=n,this.M=i,this.ii=new mt(Y),this.ri=new Di(s=>af(s),lf),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new xR(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function OR(t,e,n,r){return new PR(t,e,n,r)}async function Mw(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.Bs.getAllMutationBatches(r).next(s=>(i=s,n.ai(e),n.Bs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Rr();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.ci.Ks(r,l).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function DR(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=I.resolve();return d.forEach(y=>{h=h.next(()=>u.getEntry(a,y)).next(g=>{const w=l.docVersions.get(y);Ee(w!==null),g.version.compareTo(w)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),h.next(()=>o.Bs.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,i))})}function LR(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function bR(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return I.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:oi(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:IR(r.bundledQuery),readTime:oi(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.overlays=new mt(j.comparator),this.gi=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Xt(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.gi.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.gi.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=rc(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new mt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=rc(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=rc(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}Xt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const o=this.gi.get(i.largestBatchId).delete(r.key);this.gi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TR(n,r));let s=this.gi.get(n);s===void 0&&(s=Rr(),this.gi.set(n,s)),this.gi.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.yi=new dt(ke.pi),this.Ii=new dt(ke.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new ke(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new ke(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new j(new ue([])),r=new ke(n,e),i=new ke(n,e+1),s=[];return this.Ii.forEachInRange([r,i],o=>{this.Ai(o),s.push(o.key)}),s}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new j(new ue([])),r=new ke(n,e),i=new ke(n,e+1);let s=Rr();return this.Ii.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ke(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return j.comparator(e.key,n.key)||Y(e.vi,n.vi)}static Ti(e,n){return Y(e.vi,n.vi)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new dt(ke.pi)}checkEmpty(e){return I.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,i){const s=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new SR(s,n,r,i);this.Bs.push(o);for(const a of i)this.Di=this.Di.add(new ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.xi(r),s=i<0?0:i;return I.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return I.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ke(n,0),i=new ke(n,Number.POSITIVE_INFINITY),s=[];return this.Di.forEachInRange([r,i],o=>{const a=this.Ci(o.vi);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Y);return n.forEach(i=>{const s=new ke(i,0),o=new ke(i,Number.POSITIVE_INFINITY);this.Di.forEachInRange([s,o],a=>{r=r.add(a.vi)})}),I.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new ke(new j(s),0);let a=new dt(Y);return this.Di.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.vi)),!0)},o),I.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const i=this.Ci(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return I.forEach(n.mutations,i=>{const s=new ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new ke(n,0),i=this.Di.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,I.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.Mi=e,this.docs=new mt(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let r=jm();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pt.newInvalidDocument(i))}),I.resolve(r)}getAllFromCollection(e,n,r){let i=jm();const s=new j(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||SC(EC(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,i){q()}Oi(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jR(this)}getSize(e){return I.resolve(this.size)}}class jR extends AR{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.persistence=e,this.Fi=new Di(n=>af(n),lf),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.$i=0,this.Bi=new hf,this.targetCount=0,this.Li=Si.gn()}forEachTarget(e,n){return this.Fi.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),I.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new Si(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Tn(n),I.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n){this.Ui={},this.overlays={},this.es=new ww(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new BR(this),this.indexManager=new CR,this.ds=function(r){return new FR(r)}(r=>this.referenceDelegate.qi(r)),this.M=new kR(n),this._s=new $R(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new UR(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new zR(this.es.next());return this.referenceDelegate.Ki(),r(i).next(s=>this.referenceDelegate.Gi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Qi(e,n){return I.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class zR extends ER{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.ji=new hf,this.Wi=null}static zi(e){return new df(e)}get Hi(){if(this.Wi)return this.Wi;throw q()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),I.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(i=>this.Hi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Hi,r=>{const i=j.fromPath(r);return this.Ji(e,i).next(s=>{s||n.removeEntry(i,ge.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return I.or([()=>I.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class zm{constructor(){this.activeTargetIds=sR()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HR{constructor(){this.$r=new zm,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new zm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{Lr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,i,s){const o=this.uo(e,n);D("RestConnection","Sending: ",o,r);const a={};return this.ao(a,i,s),this.co(e,o,a,r).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw Rm("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ho(e,n,r,i,s){return this.oo(e,n,r,i,s)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Oi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}uo(e,n){const r=KR[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new sC;a.listenOnce(nC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case nc.NO_ERROR:const u=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(u)),s(u);break;case nc.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new U(k.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const h=function(y){const g=y.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(g)>=0?g:k.UNKNOWN}(d.status);o(new U(h,d.message))}else o(new U(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(k.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}lo(e,n,r){const i=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=eC(),o=tC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new iC({})),this.ao(a.initMessageHeaders,n,r),c0()||d0()||KT()||f0()||qT()||h0()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,d=!1;const h=new qR({Wr:g=>{d?D("Connection","Not sending because WebChannel is closed:",g):(c||(D("Connection","Opening WebChannel transport."),u.open(),c=!0),D("Connection","WebChannel sending:",g),u.send(g))},zr:()=>u.close()}),y=(g,w,C)=>{g.listen(w,p=>{try{C(p)}catch(f){setTimeout(()=>{throw f},0)}})};return y(u,Zo.EventType.OPEN,()=>{d||D("Connection","WebChannel transport opened.")}),y(u,Zo.EventType.CLOSE,()=>{d||(d=!0,D("Connection","WebChannel transport closed"),h.no())}),y(u,Zo.EventType.ERROR,g=>{d||(d=!0,Rm("Connection","WebChannel transport errored:",g),h.no(new U(k.UNAVAILABLE,"The operation could not be completed")))}),y(u,Zo.EventType.MESSAGE,g=>{var w;if(!d){const C=g.data[0];Ee(!!C);const p=C,f=p.error||((w=p[0])===null||w===void 0?void 0:w.error);if(f){D("Connection","WebChannel received error:",f);const m=f.status;let v=function(R){const _=pe[R];if(_!==void 0)return ZC(_)}(m),E=f.message;v===void 0&&(v=k.INTERNAL,E="Unknown error status: "+m+" with message "+f.message),d=!0,h.no(new U(v,E)),u.close()}else D("Connection","WebChannel received:",C),h.so(C)}}),y(o,rC.STAT_EVENT,g=>{g.stat===km.PROXY?D("Connection","Detected buffering proxy"):g.stat===km.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.eo()},0),h}}function ic(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){return new oR(t,!0)}class Uw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=i,this.wo=s,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,i,s,o,a,l){this.Yn=e,this.Ro=r,this.Po=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Uw(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Ir(n.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.qo(r,i)},r=>{e(()=>{const i=new U(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(i)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(i=>{r(()=>this.Ko(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YR extends XR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=pR(e.writeResults,e.commitTime),r=oi(e.commitTime);return this.listener.Yo(r,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=hR(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fR(this.M,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=i,this.tu=!1}eu(){if(this.tu)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.oo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(k.UNKNOWN,i.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ho(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(k.UNKNOWN,i.toString())})}terminate(){this.tu=!0}}class JR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Ir(n),this.iu=!1):D("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=s,this._u.Lr(o=>{r.enqueueAndForget(async()=>{So(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.fu.add(4),await Eo(l),l.wu.set("Unknown"),l.fu.delete(4),await ou(l)}(this))})}),this.wu=new JR(r,i)}}async function ou(t){if(So(t))for(const e of t.du)await e(!0)}async function Eo(t){for(const e of t.du)await e(!1)}function So(t){return ee(t).fu.size===0}async function Fw(t,e,n){if(!iu(e))throw e;t.fu.add(1),await Eo(t),t.wu.set("Offline"),n||(n=()=>LR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await ou(t)})}function jw(t,e){return e().catch(n=>Fw(t,n,e))}async function au(t){const e=ee(t),n=zn(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;eA(e);)try{const i=await bR(e.localStore,r);if(i===null){e.hu.length===0&&n.Mo();break}r=i.batchId,tA(e,i)}catch(i){await Fw(e,i)}Bw(e)&&Vw(e)}function eA(t){return So(t)&&t.hu.length<10}function tA(t,e){t.hu.push(e);const n=zn(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function Bw(t){return So(t)&&!zn(t).Co()&&t.hu.length>0}function Vw(t){zn(t).start()}async function nA(t){zn(t).Zo()}async function rA(t){const e=zn(t);for(const n of t.hu)e.Jo(n.mutations)}async function iA(t,e,n){const r=t.hu.shift(),i=uf.from(r,e,n);await jw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await au(t)}async function sA(t,e){e&&zn(t).Ho&&await async function(n,r){if(i=r.code,JC(i)&&i!==k.ABORTED){const s=n.hu.shift();zn(n).ko(),await jw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await au(n)}var i}(t,e),Bw(t)&&Vw(t)}async function Wm(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=So(n);n.fu.add(3),await Eo(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await ou(n)}async function oA(t,e){const n=ee(t);e?(n.fu.delete(2),await ou(n)):e||(n.fu.add(2),await Eo(n),n.wu.set("Unknown"))}function zn(t){return t.yu||(t.yu=function(e,n,r){const i=ee(e);return i.eu(),new YR(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:nA.bind(null,t),Yr:sA.bind(null,t),Xo:rA.bind(null,t),Yo:iA.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await au(t)):(await t.yu.stop(),t.hu.length>0&&(D("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ff(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zw(t,e){if(Ir("AsyncQueue",`${e}: ${t}`),iu(t))return new U(k.UNAVAILABLE,`${e}: ${t}`);throw t}class aA{constructor(){this.queries=new Di(e=>Iw(e),kw),this.onlineState="Unknown",this.Eu=new Set}}function lA(t){t.Eu.forEach(e=>{e.next()})}class uA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new Di(a=>Iw(a),kw),this.na=new Map,this.sa=new Set,this.ia=new mt(j.comparator),this.ra=new Map,this.oa=new hf,this.ua={},this.aa=new Map,this.ca=Si.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function cA(t,e,n){const r=pA(t);try{const i=await function(s,o){const a=ee(s),l=Xe.now(),u=o.reduce((d,h)=>d.add(h.key),Rr());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>a.ci.Ks(d,u).next(h=>{c=h;const y=[];for(const g of o){const w=XC(g,c.get(g.key));w!=null&&y.push(new _o(g.key,w,Sw(w.value.mapValue),si.exists(!0)))}return a.Bs.addMutationBatch(d,l,y,o)})).then(d=>(d.applyToLocalDocumentSet(c),{batchId:d.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ua[s.currentUser.toKey()];l||(l=new mt(Y)),l=l.insert(o,a),s.ua[s.currentUser.toKey()]=l}(r,i.batchId,n),await lu(r,i.changes),await au(r.remoteStore)}catch(i){const s=zw(i,"Failed to persist write");n.reject(s)}}function Km(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ea.forEach((s,o)=>{const a=o.view.Au(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Au(o)&&(l=!0)}),l&&lA(a)}(r.eventManager,e),i.length&&r.ta.Qo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hA(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await DR(n.localStore,e);Ww(n,r,null),Hw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lu(n,i)}catch(i){await $w(i)}}async function dA(t,e,n){const r=ee(t);try{const i=await function(s,o){const a=ee(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(c=>(Ee(c!==null),u=c.keys(),a.Bs.removeMutationBatch(l,c))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,u))})}(r.localStore,e);Ww(r,e,n),Hw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lu(r,i)}catch(i){await $w(i)}}function Hw(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function Ww(t,e,n){const r=ee(t);let i=r.ua[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ua[r.currentUser.toKey()]=i}}async function lu(t,e,n){const r=ee(t),i=[],s=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,l)=>{o.push(r.la(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=cf.Ys(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ta.Qo(i),await async function(a,l){const u=ee(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,d=>I.forEach(d.Hs,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>I.forEach(d.Js,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!iu(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.ii.get(d),y=h.snapshotVersion,g=h.withLastLimboFreeSnapshotVersion(y);u.ii=u.ii.insert(d,g)}}}(r.localStore,s))}async function fA(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await Mw(n.localStore,e);n.currentUser=e,function(i,s){i.aa.forEach(o=>{o.forEach(a=>{a.reject(new U(k.CANCELLED,s))})}),i.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lu(n,r.hi)}}function pA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dA.bind(null,e),e}class mA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=su(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return OR(this.persistence,new NR,e.initialUser,this.M)}wa(e){return new VR(df.zi,this.M)}_a(e){return new HR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Km(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fA.bind(null,this.syncEngine),await oA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aA}createDatastore(e){const n=su(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new GR(i));var i;return function(s,o,a,l){return new QR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Km(this.syncEngine,a,0),o=Hm.vt()?new Hm:new WR,new ZR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new uA(r,i,s,o,a,l);return u&&(c.ha=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);D("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Eo(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=_w.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zw(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vA(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _A(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Wm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Wm(e.remoteStore,s)),t.onlineComponents=e}async function _A(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await vA(t,new mA)),t.offlineComponents}async function EA(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await wA(t,new gA)),t.onlineComponents}function SA(t){return EA(t).then(e=>e.syncEngine)}const qm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e,n){if(!n)throw new U(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TA(t,e,n,r){if(e===!0&&r===!0)throw new U(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gm(t){if(!j.isDocumentKey(t))throw new U(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xm(t){if(j.isDocumentKey(t))throw new U(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function kA(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pf(t);throw new U(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,TA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ym({}),this._settingsFrozen=!1,e instanceof Hs?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new U(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(i.options.projectId)}(e))}get app(){if(!this._app)throw new U(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ym(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new aC;switch(n.type){case"gapi":const r=n.client;return Ee(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new cC(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new U(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=qm.get(e);n&&(D("ComponentProvider","Removing Datastore"),qm.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class gf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gf(this.firestore,e,this._query)}}class Un extends gf{constructor(e,n,r){super(e,n,LC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new j(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function IA(t,e,...n){if(t=lt(t),Kw("collection","path",e),t instanceof mf){const r=ue.fromString(e,...n);return Xm(r),new Un(t,null,r)}{if(!(t instanceof sn||t instanceof Un))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Xm(r),new Un(t.firestore,null,r)}}function CA(t,e,...n){if(t=lt(t),arguments.length===1&&(e=_w.R()),Kw("doc","path",e),t instanceof mf){const r=ue.fromString(e,...n);return Gm(r),new sn(t,null,new j(r))}{if(!(t instanceof sn||t instanceof Un))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Gm(r),new sn(t.firestore,t instanceof Un?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Uw(this,"async_queue_retry"),this.qa=()=>{const n=ic();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new dr;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!iu(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ir("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const i=ff.createAndSchedule(this,e,n,r,s=>this.ja(s));return this.Fa.push(i),i}Ka(){this.$a&&q()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}class qw extends mf{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new RA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Gw(this),this._firestoreClient.terminate()}}function AA(t=Dd()){return jl(t,"firestore").getImmediate()}function xA(t){return t._firestoreClient||Gw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new yC(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new yA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(fn.fromBase64String(e))}catch(n){throw new U(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(fn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=/^__.*__$/;class PA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _o(e,this.data,this.fieldMask,n,this.fieldTransforms):new ru(e,this.data,n,this.fieldTransforms)}}function Jw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class yf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.nc(e),i}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.Ya(),i}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return gl(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(Jw(this.Xa)&&NA.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class OA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||su(e)}ac(e,n,r,i=!1){return new yf({Xa:e,methodName:n,uc:r,path:nt.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function DA(t){const e=t._freezeSettings(),n=su(t._databaseId);return new OA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LA(t,e,n,r,i,s={}){const o=t.ac(s.merge||s.mergeFields?2:0,e,n,i);n1("Data must be an object, but it was:",o,r);const a=e1(r,o);let l,u;if(s.merge)l=new kh(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=bA(e,d,n);if(!o.contains(h))throw new U(k.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);UA(c,h)||c.push(h)}l=new kh(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new PA(new Ft(a),l,u)}function Zw(t,e){if(t1(t=lt(t)))return n1("Unsupported field value:",e,t),e1(t,e);if(t instanceof Yw)return function(n,r){if(!Jw(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Zw(o,r.ic(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zC(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Xe.fromDate(n);return{timestampValue:Ah(r.M,i)}}if(n instanceof Xe){const i=new Xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ah(r.M,i)}}if(n instanceof Qw)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xs)return{bytesValue:aR(r.M,n._byteString)};if(n instanceof sn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.rc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lw(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${pf(n)}`)}(t,e)}function e1(t,e){const n={};return Ew(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vo(t,(r,i)=>{const s=Zw(i,e.tc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function t1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Qw||t instanceof Xs||t instanceof sn||t instanceof Yw)}function n1(t,e,n){if(!t1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=pf(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function bA(t,e,n){if((e=lt(e))instanceof Xw)return e._internalPath;if(typeof e=="string")return MA(t,e);throw gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const $A=new RegExp("[~\\*/\\[\\]]");function MA(t,e,n){if(e.search($A)>=0)throw gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xw(...e.split("."))._internalPath}catch{throw gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(k.INVALID_ARGUMENT,a+t+l)}function UA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function jA(t,e){const n=kA(t.firestore,qw),r=CA(t),i=FA(t.converter,e);return BA(n,[LA(DA(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,si.exists(!1))]).then(()=>r)}function BA(t,e){return function(n,r){const i=new dr;return n.asyncQueue.enqueueAndForget(async()=>cA(await SA(n),r,i)),i.promise}(xA(t),e)}(function(t,e=!0){(function(n){Oi=n})(Ai),_r(new Vn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new qw(i,new lC(n.getProvider("auth-internal")),new dC(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),zt(Im,"3.4.8",t),zt(Im,"3.4.8","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="firebasestorage.googleapis.com",i1="storageBucket",VA=2*60*1e3,zA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends Gn{constructor(e,n){super(sc(e),`Firebase Storage: ${n} (${sc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ce.prototype)}_codeEquals(e){return sc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function sc(t){return"storage/"+t}function vf(){const t="An unknown error occurred, please check the error payload for server response.";return new ce("unknown",t)}function HA(t){return new ce("object-not-found","Object '"+t+"' does not exist.")}function WA(t){return new ce("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ce("unauthenticated",t)}function qA(){return new ce("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function GA(t){return new ce("unauthorized","User does not have permission to access '"+t+"'.")}function XA(){return new ce("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function s1(){return new ce("canceled","User canceled the upload/download.")}function YA(t){return new ce("invalid-url","Invalid URL '"+t+"'.")}function QA(t){return new ce("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function JA(){return new ce("no-default-bucket","No default bucket found. Did you set the '"+i1+"' property when initializing the app?")}function o1(){return new ce("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function ZA(){return new ce("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function ex(){return new ce("no-download-url","The given file does not have any download URLs.")}function Nh(t){return new ce("invalid-argument",t)}function a1(){return new ce("app-deleted","The Firebase app was deleted.")}function tx(t){return new ce("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ys(t,e){return new ce("invalid-format","String does not match format '"+t+"': "+e)}function qi(t){throw new ce("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ct.makeFromUrl(e,n)}catch{return new ct(e,"")}if(r.path==="")return r;throw QA(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",y=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),g={bucket:1,path:3},w=n===r1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${C}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:y,indices:g,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<m.length;v++){const E=m[v],R=E.regex.exec(e);if(R){const _=R[E.indices.bucket];let T=R[E.indices.path];T||(T=""),r=new ct(_,T),E.postModify(r);break}}if(r==null)throw YA(e);return r}}class nx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...C){u||(u=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,t(y,l())},C)}function h(){s&&clearTimeout(s)}function y(C,...p){if(u){h();return}if(C){h(),c.call(null,C,...p);return}if(l()||o){h(),c.call(null,C,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,d(m)}let g=!1;function w(C){g||(g=!0,h(),!u&&(i!==null?(C||(a=2),clearTimeout(i),d(0)):C||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function ix(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){return t!==void 0}function ox(t){return typeof t=="function"}function ax(t){return typeof t=="object"&&!Array.isArray(t)}function uu(t){return typeof t=="string"||t instanceof String}function Qm(t){return wf()&&t instanceof Blob}function wf(){return typeof Blob!="undefined"}function Jm(t,e,n,r){if(r<e)throw Nh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Nh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function l1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fr||(fr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n,r,i,s,o,a,l,u,c,d){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,y)=>{this.resolve_=h,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ta(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===fr.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===fr.ABORT;r(!1,new ta(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ta(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());sx(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=vf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?a1():s1();o(l)}else{const l=XA();o(l)}};this.canceled_?n(!1,new ta(!1,null,!0)):this.backoffId_=rx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ix(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class ta{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ux(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function hx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fx(t,e,n,r,i,s){const o=l1(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return hx(l,e),ux(l,n),cx(l,s),dx(l,r),new lx(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function mx(...t){const e=px();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(wf())return new Blob(t);throw new ce("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function gx(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class oc{constructor(e,n){this.data=e,this.contentType=n||null}}function vx(t,e){switch(t){case jt.RAW:return new oc(u1(e));case jt.BASE64:case jt.BASE64URL:return new oc(c1(t,e));case jt.DATA_URL:return new oc(_x(e),Ex(e))}throw vf()}function u1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function wx(t){let e;try{e=decodeURIComponent(t)}catch{throw ys(jt.DATA_URL,"Malformed data URL.")}return u1(e)}function c1(t,e){switch(t){case jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ys(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ys(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=yx(e)}catch{throw ys(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class h1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ys(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Sx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function _x(t){const e=new h1(t);return e.base64?c1(jt.BASE64,e.rest):wx(e.rest)}function Ex(t){return new h1(t).contentType}function Sx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){let r=0,i="";Qm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qm(this.data_)){const r=this.data_,i=gx(r,e,n);return i===null?null:new Tn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Tn(r,!0)}}static getBlob(...e){if(wf()){const n=e.map(r=>r instanceof Tn?r.data_:r);return new Tn(mx.apply(null,n))}else{const n=e.map(o=>uu(o)?vx(jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Tn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){let e;try{e=JSON.parse(t)}catch{return null}return ax(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function f1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e){return e}class ze{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Ix}}let na=null;function Cx(t){return!uu(t)||t.length<2?t:f1(t)}function p1(){if(na)return na;const t=[];t.push(new ze("bucket")),t.push(new ze("generation")),t.push(new ze("metageneration")),t.push(new ze("name","fullPath",!0));function e(s,o){return Cx(o)}const n=new ze("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ze("size");return i.xform=r,t.push(i),t.push(new ze("timeCreated")),t.push(new ze("updated")),t.push(new ze("md5Hash",null,!0)),t.push(new ze("cacheControl",null,!0)),t.push(new ze("contentDisposition",null,!0)),t.push(new ze("contentEncoding",null,!0)),t.push(new ze("contentLanguage",null,!0)),t.push(new ze("contentType",null,!0)),t.push(new ze("metadata","customMetadata",!0)),na=t,na}function Rx(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ct(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Ax(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Rx(r,t),r}function m1(t,e,n){const r=d1(e);return r===null?null:Ax(t,r,n)}function xx(t,e,n,r){const i=d1(e);if(i===null||!uu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),y=To(h,n,r),g=l1({alt:"media",token:u});return y+g})[0]}function g1(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Li{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t){if(!t)throw vf()}function _f(t,e){function n(r,i){const s=m1(t,i,e);return on(s!==null),s}return n}function Nx(t,e){function n(r,i){const s=m1(t,i,e);return on(s!==null),xx(s,i,t.host,t._protocol)}return n}function ko(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qA():i=KA():n.getStatus()===402?i=WA(t.bucket):n.getStatus()===403?i=GA(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function y1(t){const e=ko(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=HA(t.path)),s.serverResponse=i.serverResponse,s}return n}function Px(t,e,n){const r=e.fullServerUrl(),i=To(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Li(i,s,_f(t,n),o);return a.errorHandler=y1(e),a}function Ox(t,e,n){const r=e.fullServerUrl(),i=To(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Li(i,s,Nx(t,n),o);return a.errorHandler=y1(e),a}function Dx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function v1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Dx(null,e)),r}function Lx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let v=0;v<2;v++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=v1(e,r,i),c=g1(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",y=Tn.getBlob(d,r,h);if(y===null)throw o1();const g={name:u.fullPath},w=To(s,t.host,t._protocol),C="POST",p=t.maxUploadRetryTime,f=new Li(w,C,_f(t,n),p);return f.urlParams=g,f.headers=o,f.body=y.uploadData(),f.errorHandler=ko(e),f}class yl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Ef(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{on(!1)}return on(!!n&&(e||["active"]).indexOf(n)!==-1),n}function bx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=v1(e,r,i),a={name:o.fullPath},l=To(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=g1(o,n),h=t.maxUploadRetryTime;function y(w){Ef(w);let C;try{C=w.getResponseHeader("X-Goog-Upload-URL")}catch{on(!1)}return on(uu(C)),C}const g=new Li(l,u,y,h);return g.urlParams=a,g.headers=c,g.body=d,g.errorHandler=ko(e),g}function $x(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Ef(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{on(!1)}d||on(!1);const h=Number(d);return on(!isNaN(h)),new yl(h,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Li(n,o,s,a);return l.headers=i,l.errorHandler=ko(e),l}const Zm=256*1024;function Mx(t,e,n,r,i,s,o,a){const l=new yl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw ZA();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const d=l.current,h=d+c,g={"X-Goog-Upload-Command":c===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},w=r.slice(d,h);if(w===null)throw o1();function C(v,E){const R=Ef(v,["active","final"]),_=l.current+c,T=r.size();let M;return R==="final"?M=_f(e,s)(v,E):M=null,new yl(_,T,R==="final",M)}const p="POST",f=e.maxUploadRetryTime,m=new Li(n,p,C,f);return m.headers=g,m.body=w.uploadData(),m.progressCallback=a||null,m.errorHandler=ko(t),m}const Ze={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ac(t){switch(t){case"running":case"pausing":case"canceling":return Ze.RUNNING;case"paused":return Ze.PAUSED;case"success":return Ze.SUCCESS;case"canceled":return Ze.CANCELED;case"error":return Ze.ERROR;default:return Ze.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,r){if(ox(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Fx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw qi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jx extends Fx{initXhr(){this.xhr_.responseType="text"}}function $r(){return new jx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=p1(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=bx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,$r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=$x(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,$r,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Zm*this._chunkMultiplier,n=new yl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Mx(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,$r,i,s);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Zm*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Px(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,$r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Lx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,$r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=s1(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ac(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new Ux(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ac(this._state)){case Ze.SUCCESS:Lr(this._resolve.bind(null,this.snapshot))();break;case Ze.CANCELED:case Ze.ERROR:const n=this._reject;Lr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ac(this._state)){case Ze.RUNNING:case Ze.PAUSED:e.next&&Lr(e.next.bind(e,this.snapshot))();break;case Ze.SUCCESS:e.complete&&Lr(e.complete.bind(e))();break;case Ze.CANCELED:case Ze.ERROR:e.error&&Lr(e.error.bind(e,this._error))();break;default:e.error&&Lr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){this._service=e,n instanceof ct?this._location=n:this._location=ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ar(e,n)}get root(){const e=new ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return f1(this._location.path)}get storage(){return this._service}get parent(){const e=Tx(this._location.path);if(e===null)return null;const n=new ct(this._location.bucket,e);return new Ar(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tx(e)}}function Vx(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Bx(t,new Tn(e),n)}function zx(t){t._throwIfRoot("getDownloadURL");const e=Ox(t.storage,t._location,p1());return t.storage.makeRequestWithTokens(e,$r).then(n=>{if(n===null)throw ex();return n})}function Hx(t,e){const n=kx(t._location.path,e),r=new ct(t._location.bucket,n);return new Ar(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t){return/^[A-Za-z]+:\/\//.test(t)}function Kx(t,e){return new Ar(t,e)}function w1(t,e){if(t instanceof Sf){const n=t;if(n._bucket==null)throw JA();const r=new Ar(n,n._bucket);return e!=null?w1(r,e):r}else return e!==void 0?Hx(t,e):t}function qx(t,e){if(e&&Wx(e)){if(t instanceof Sf)return Kx(t,e);throw Nh("To use ref(service, url), the first argument must be a Storage instance.")}else return w1(t,e)}function eg(t,e){const n=e==null?void 0:e[i1];return n==null?null:ct.makeFromBucketSpec(n,t)}class Sf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=r1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VA,this._maxUploadRetryTime=zA,this._requests=new Set,i!=null?this._bucket=ct.makeFromBucketSpec(i,this._host):this._bucket=eg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ct.makeFromBucketSpec(this._url,e):this._bucket=eg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ar(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new nx(a1());{const s=fx(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const tg="@firebase/storage",ng="0.9.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="storage";function Gx(t,e,n){return t=lt(t),Vx(t,e,n)}function Xx(t){return t=lt(t),zx(t)}function Yx(t,e){return t=lt(t),qx(t,e)}function Qx(t=Dd(),e){return t=lt(t),jl(t,_1).getImmediate({identifier:e})}function Jx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Sf(n,r,i,e,Ai)}function Zx(){_r(new Vn(_1,Jx,"PUBLIC").setMultipleInstances(!0)),zt(tg,ng,""),zt(tg,ng,"esm2017")}Zx();var E1={exports:{}},eN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tN=eN,nN=tN;function S1(){}function T1(){}T1.resetWarningCache=S1;var rN=function(){function t(r,i,s,o,a,l){if(l!==nN){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:T1,resetWarningCache:S1};return n.PropTypes=n,n};E1.exports=rN();var H=E1.exports,iN=typeof Element!="undefined",sN=typeof Map=="function",oN=typeof Set=="function",aN=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ea(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Ea(t[r],e[r]))return!1;return!0}var s;if(sN&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!Ea(r.value[1],e.get(r.value[0])))return!1;return!0}if(oN&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(aN&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(iN&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Ea(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var lN=function(e,n){try{return Ea(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},uN=function(t,e,n,r,i,s,o,a){if(!t){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,o,a],c=0;l=new Error(e.replace(/%s/g,function(){return u[c++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},rg=uN,cN=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var c=o[u];if(!l(c))return!1;var d=e[c],h=n[c];if(s=r?r.call(i,d,h,c):void 0,s===!1||s===void 0&&d!==h)return!1}return!0};function de(){return de=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},de.apply(this,arguments)}function Tf(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ph(t,e)}function Ph(t,e){return Ph=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Ph(t,e)}function ig(t,e){if(t==null)return{};var n,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(i[n]=t[n]);return i}var O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},hN={rel:["amphtml","canonical","alternate"]},dN={type:["application/ld+json"]},fN={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},sg=Object.keys(O).map(function(t){return O[t]}),vl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},pN=Object.keys(vl).reduce(function(t,e){return t[vl[e]]=e,t},{}),ai=function(t,e){for(var n=t.length-1;n>=0;n-=1){var r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},mN=function(t){var e=ai(t,O.TITLE),n=ai(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,function(){return e});var r=ai(t,"defaultTitle");return e||r||void 0},gN=function(t){return ai(t,"onChangeClientState")||function(){}},lc=function(t,e){return e.filter(function(n){return n[t]!==void 0}).map(function(n){return n[t]}).reduce(function(n,r){return de({},n,r)},{})},yN=function(t,e){return e.filter(function(n){return n[O.BASE]!==void 0}).map(function(n){return n[O.BASE]}).reverse().reduce(function(n,r){if(!n.length)for(var i=Object.keys(r),s=0;s<i.length;s+=1){var o=i[s].toLowerCase();if(t.indexOf(o)!==-1&&r[o])return n.concat(r)}return n},[])},Gi=function(t,e,n){var r={};return n.filter(function(i){return!!Array.isArray(i[t])||(i[t]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof i[t]+'"'),!1)}).map(function(i){return i[t]}).reverse().reduce(function(i,s){var o={};s.filter(function(d){for(var h,y=Object.keys(d),g=0;g<y.length;g+=1){var w=y[g],C=w.toLowerCase();e.indexOf(C)===-1||h==="rel"&&d[h].toLowerCase()==="canonical"||C==="rel"&&d[C].toLowerCase()==="stylesheet"||(h=C),e.indexOf(w)===-1||w!=="innerHTML"&&w!=="cssText"&&w!=="itemprop"||(h=w)}if(!h||!d[h])return!1;var p=d[h].toLowerCase();return r[h]||(r[h]={}),o[h]||(o[h]={}),!r[h][p]&&(o[h][p]=!0,!0)}).reverse().forEach(function(d){return i.push(d)});for(var a=Object.keys(o),l=0;l<a.length;l+=1){var u=a[l],c=de({},r[u],o[u]);r[u]=c}return i},[]).reverse()},vN=function(t,e){if(Array.isArray(t)&&t.length){for(var n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},k1=function(t){return Array.isArray(t)?t.join(""):t},uc=function(t,e){return Array.isArray(t)?t.reduce(function(n,r){return function(i,s){for(var o=Object.keys(i),a=0;a<o.length;a+=1)if(s[o[a]]&&s[o[a]].includes(i[o[a]]))return!0;return!1}(r,e)?n.priority.push(r):n.default.push(r),n},{priority:[],default:[]}):{default:t}},og=function(t,e){var n;return de({},t,((n={})[e]=void 0,n))},wN=[O.NOSCRIPT,O.SCRIPT,O.STYLE],cc=function(t,e){return e===void 0&&(e=!0),e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ag=function(t){return Object.keys(t).reduce(function(e,n){var r=t[n]!==void 0?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},lg=function(t,e){return e===void 0&&(e={}),Object.keys(t).reduce(function(n,r){return n[vl[r]||r]=t[r],n},e)},Sa=function(t,e){return e.map(function(n,r){var i,s=((i={key:r})["data-rh"]=!0,i);return Object.keys(n).forEach(function(o){var a=vl[o]||o;a==="innerHTML"||a==="cssText"?s.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:s[a]=n[o]}),An.createElement(t,s)})},wt=function(t,e,n){switch(t){case O.TITLE:return{toComponent:function(){return i=e.titleAttributes,(s={key:r=e.title})["data-rh"]=!0,o=lg(i,s),[An.createElement(O.TITLE,o,r)];var r,i,s,o},toString:function(){return function(r,i,s,o){var a=ag(s),l=k1(i);return a?"<"+r+' data-rh="true" '+a+">"+cc(l,o)+"</"+r+">":"<"+r+' data-rh="true">'+cc(l,o)+"</"+r+">"}(t,e.title,e.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return lg(e)},toString:function(){return ag(e)}};default:return{toComponent:function(){return Sa(t,e)},toString:function(){return function(r,i,s){return i.reduce(function(o,a){var l=Object.keys(a).filter(function(d){return!(d==="innerHTML"||d==="cssText")}).reduce(function(d,h){var y=a[h]===void 0?h:h+'="'+cc(a[h],s)+'"';return d?d+" "+y:y},""),u=a.innerHTML||a.cssText||"",c=wN.indexOf(r)===-1;return o+"<"+r+' data-rh="true" '+l+(c?"/>":">"+u+"</"+r+">")},"")}(t,e,n)}}}},Oh=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,s=t.noscriptTags,o=t.styleTags,a=t.title,l=a===void 0?"":a,u=t.titleAttributes,c=t.linkTags,d=t.metaTags,h=t.scriptTags,y={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var g=function(w){var C=w.linkTags,p=w.scriptTags,f=w.encode,m=uc(w.metaTags,fN),v=uc(C,hN),E=uc(p,dN);return{priorityMethods:{toComponent:function(){return[].concat(Sa(O.META,m.priority),Sa(O.LINK,v.priority),Sa(O.SCRIPT,E.priority))},toString:function(){return wt(O.META,m.priority,f)+" "+wt(O.LINK,v.priority,f)+" "+wt(O.SCRIPT,E.priority,f)}},metaTags:m.default,linkTags:v.default,scriptTags:E.default}}(t);y=g.priorityMethods,c=g.linkTags,d=g.metaTags,h=g.scriptTags}return{priority:y,base:wt(O.BASE,e,r),bodyAttributes:wt("bodyAttributes",n,r),htmlAttributes:wt("htmlAttributes",i,r),link:wt(O.LINK,c,r),meta:wt(O.META,d,r),noscript:wt(O.NOSCRIPT,s,r),script:wt(O.SCRIPT,h,r),style:wt(O.STYLE,o,r),title:wt(O.TITLE,{title:l,titleAttributes:u},r)}},ra=[],Dh=function(t,e){var n=this;e===void 0&&(e=typeof document!="undefined"),this.instances=[],this.value={setHelmet:function(r){n.context.helmet=r},helmetInstances:{get:function(){return n.canUseDOM?ra:n.instances},add:function(r){(n.canUseDOM?ra:n.instances).push(r)},remove:function(r){var i=(n.canUseDOM?ra:n.instances).indexOf(r);(n.canUseDOM?ra:n.instances).splice(i,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=Oh({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},I1=An.createContext({}),_N=H.shape({setHelmet:H.func,helmetInstances:H.shape({get:H.func,add:H.func,remove:H.func})}),EN=typeof document!="undefined",Pn=function(t){function e(n){var r;return(r=t.call(this,n)||this).helmetData=new Dh(r.props.context,e.canUseDOM),r}return Tf(e,t),e.prototype.render=function(){return An.createElement(I1.Provider,{value:this.helmetData.value},this.props.children)},e}(P.exports.Component);Pn.canUseDOM=EN,Pn.propTypes={context:H.shape({helmet:H.shape()}),children:H.node.isRequired},Pn.defaultProps={context:{}},Pn.displayName="HelmetProvider";var br=function(t,e){var n,r=document.head||document.querySelector(O.HEAD),i=r.querySelectorAll(t+"[data-rh]"),s=[].slice.call(i),o=[];return e&&e.length&&e.forEach(function(a){var l=document.createElement(t);for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(u==="innerHTML"?l.innerHTML=a.innerHTML:u==="cssText"?l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText)):l.setAttribute(u,a[u]===void 0?"":a[u]));l.setAttribute("data-rh","true"),s.some(function(c,d){return n=d,l.isEqualNode(c)})?s.splice(n,1):o.push(l)}),s.forEach(function(a){return a.parentNode.removeChild(a)}),o.forEach(function(a){return r.appendChild(a)}),{oldTags:s,newTags:o}},hc=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-rh"),i=r?r.split(","):[],s=[].concat(i),o=Object.keys(e),a=0;a<o.length;a+=1){var l=o[a],u=e[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),i.indexOf(l)===-1&&i.push(l);var c=s.indexOf(l);c!==-1&&s.splice(c,1)}for(var d=s.length-1;d>=0;d-=1)n.removeAttribute(s[d]);i.length===s.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==o.join(",")&&n.setAttribute("data-rh",o.join(","))}},ug=function(t,e){var n=t.baseTag,r=t.htmlAttributes,i=t.linkTags,s=t.metaTags,o=t.noscriptTags,a=t.onChangeClientState,l=t.scriptTags,u=t.styleTags,c=t.title,d=t.titleAttributes;hc(O.BODY,t.bodyAttributes),hc(O.HTML,r),function(w,C){w!==void 0&&document.title!==w&&(document.title=k1(w)),hc(O.TITLE,C)}(c,d);var h={baseTag:br(O.BASE,n),linkTags:br(O.LINK,i),metaTags:br(O.META,s),noscriptTags:br(O.NOSCRIPT,o),scriptTags:br(O.SCRIPT,l),styleTags:br(O.STYLE,u)},y={},g={};Object.keys(h).forEach(function(w){var C=h[w],p=C.newTags,f=C.oldTags;p.length&&(y[w]=p),f.length&&(g[w]=h[w].oldTags)}),e&&e(),a(t,y,g)},Xi=null,wl=function(t){function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(r=t.call.apply(t,[this].concat(s))||this).rendered=!1,r}Tf(e,t);var n=e.prototype;return n.shouldComponentUpdate=function(r){return!cN(r,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var r,i,s=this.props.context,o=s.setHelmet,a=null,l=(r=s.helmetInstances.get().map(function(u){var c=de({},u.props);return delete c.context,c}),{baseTag:yN(["href"],r),bodyAttributes:lc("bodyAttributes",r),defer:ai(r,"defer"),encode:ai(r,"encodeSpecialCharacters"),htmlAttributes:lc("htmlAttributes",r),linkTags:Gi(O.LINK,["rel","href"],r),metaTags:Gi(O.META,["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Gi(O.NOSCRIPT,["innerHTML"],r),onChangeClientState:gN(r),scriptTags:Gi(O.SCRIPT,["src","innerHTML"],r),styleTags:Gi(O.STYLE,["cssText"],r),title:mN(r),titleAttributes:lc("titleAttributes",r),prioritizeSeoTags:vN(r,"prioritizeSeoTags")});Pn.canUseDOM?(i=l,Xi&&cancelAnimationFrame(Xi),i.defer?Xi=requestAnimationFrame(function(){ug(i,function(){Xi=null})}):(ug(i),Xi=null)):Oh&&(a=Oh(l)),o(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},e}(P.exports.Component);wl.propTypes={context:_N.isRequired},wl.displayName="HelmetDispatcher";var SN=["children"],TN=["children"],li=function(t){function e(){return t.apply(this,arguments)||this}Tf(e,t);var n=e.prototype;return n.shouldComponentUpdate=function(r){return!lN(og(this.props,"helmetData"),og(r,"helmetData"))},n.mapNestedChildrenToProps=function(r,i){if(!i)return null;switch(r.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:i};case O.STYLE:return{cssText:i};default:throw new Error("<"+r.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(r){var i,s=r.child,o=r.arrayTypeChildren;return de({},o,((i={})[s.type]=[].concat(o[s.type]||[],[de({},r.newChildProps,this.mapNestedChildrenToProps(s,r.nestedChildren))]),i))},n.mapObjectTypeChildren=function(r){var i,s,o=r.child,a=r.newProps,l=r.newChildProps,u=r.nestedChildren;switch(o.type){case O.TITLE:return de({},a,((i={})[o.type]=u,i.titleAttributes=de({},l),i));case O.BODY:return de({},a,{bodyAttributes:de({},l)});case O.HTML:return de({},a,{htmlAttributes:de({},l)});default:return de({},a,((s={})[o.type]=de({},l),s))}},n.mapArrayTypeChildrenToProps=function(r,i){var s=de({},i);return Object.keys(r).forEach(function(o){var a;s=de({},s,((a={})[o]=r[o],a))}),s},n.warnOnInvalidChildren=function(r,i){return rg(sg.some(function(s){return r.type===s}),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+sg.join(", ")+" are allowed. Helmet does not support rendering <"+r.type+"> elements. Refer to our API for more information."),rg(!i||typeof i=="string"||Array.isArray(i)&&!i.some(function(s){return typeof s!="string"}),"Helmet expects a string as a child of <"+r.type+">. Did you forget to wrap your children in braces? ( <"+r.type+">{``}</"+r.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(r,i){var s=this,o={};return An.Children.forEach(r,function(a){if(a&&a.props){var l=a.props,u=l.children,c=ig(l,SN),d=Object.keys(c).reduce(function(y,g){return y[pN[g]||g]=c[g],y},{}),h=a.type;switch(typeof h=="symbol"?h=h.toString():s.warnOnInvalidChildren(a,u),h){case O.FRAGMENT:i=s.mapChildrenToProps(u,i);break;case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:o=s.flattenArrayTypeChildren({child:a,arrayTypeChildren:o,newChildProps:d,nestedChildren:u});break;default:i=s.mapObjectTypeChildren({child:a,newProps:i,newChildProps:d,nestedChildren:u})}}}),this.mapArrayTypeChildrenToProps(o,i)},n.render=function(){var r=this.props,i=r.children,s=ig(r,TN),o=de({},s),a=s.helmetData;return i&&(o=this.mapChildrenToProps(i,o)),!a||a instanceof Dh||(a=new Dh(a.context,a.instances)),a?An.createElement(wl,de({},o,{context:a.value,helmetData:void 0})):An.createElement(I1.Consumer,null,function(l){return An.createElement(wl,de({},o,{context:l}))})},e}(P.exports.Component);li.propTypes={base:H.object,bodyAttributes:H.object,children:H.oneOfType([H.arrayOf(H.node),H.node]),defaultTitle:H.string,defer:H.bool,encodeSpecialCharacters:H.bool,htmlAttributes:H.object,link:H.arrayOf(H.object),meta:H.arrayOf(H.object),noscript:H.arrayOf(H.object),onChangeClientState:H.func,script:H.arrayOf(H.object),style:H.arrayOf(H.object),title:H.string,titleAttributes:H.object,titleTemplate:H.string,prioritizeSeoTags:H.bool,helmetData:H.object},li.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},li.displayName="Helmet";var kN="firebase",IN="9.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(kN,IN,"app");function kf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function C1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CN=C1,R1=new oo("auth","Firebase",C1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new Pd("@firebase/auth");function Ta(t,...e){cg.logLevel<=G.ERROR&&cg.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw If(t,...e)}function Ht(t,...e){return If(t,...e)}function RN(t,e,n){const r=Object.assign(Object.assign({},CN()),{[e]:n});return new oo("auth","Firebase",r).create(e,{appName:t.name})}function If(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return R1.create(t,...e)}function b(t,e,...n){if(!t)throw If(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ta(e),new Error(e)}function pn(t,e){t||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function nn(t){pn(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t,e){const n=jl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Za(s,e!=null?e:{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function xN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NN(){return dg()==="http:"||dg()==="https:"}function dg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NN()||h0()||"connection"in navigator)?navigator.onLine:!0}function ON(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=c0()||d0()}get(){return PN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=new Io(3e4,6e4);function cu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Co(t,e,n,r,i={}){return x1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ao(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),A1.fetch()(N1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function x1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DN),e);try{const i=new bN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw dc(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw RN(t,c,u);bt(t,c)}}catch(i){if(i instanceof Gn)throw i;bt(t,"network-request-failed")}}async function hu(t,e,n,r,i={}){const s=await Co(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function N1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cf(t.config,i):`${t.config.apiScheme}://${i}`}class bN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),LN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(t,e){return Co(t,"POST","/v1/accounts:delete",e)}async function MN(t,e){return Co(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UN(t,e=!1){const n=lt(t),r=await n.getIdToken(e),i=Rf(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vs(fc(i.auth_time)),issuedAtTime:vs(fc(i.iat)),expirationTime:vs(fc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fc(t){return Number(t)*1e3}function Rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ta("JWT malformed, contained fewer than 3 sections"),null;try{const i=HT(n);return i?JSON.parse(i):(Ta("Failed to decode base64 JWT payload"),null)}catch(i){return Ta("Caught error parsing JWT payload as JSON",i),null}}function FN(t){const e=Rf(t);return b(e,"internal-error"),b(typeof e.exp!="undefined","internal-error"),b(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&jN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ys(t,MN(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HN(s.providerUserInfo):[],a=zN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new P1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function VN(t){const e=lt(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HN(t){return t.map(e=>{var{providerId:n}=e,r=kf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(t,e){const n=await x1(t,{},async()=>{const r=ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=N1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken!="undefined","internal-error"),b(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):FN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qs;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){b(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new P1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UN(this,e)}reload(){return VN(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ys(this,$N(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:E,providerData:R,stsTokenManager:_}=n;b(m&&_,e,"internal-error");const T=Qs.fromJSON(this.name,_);b(typeof m=="string",e,"internal-error"),yn(d,e.name),yn(h,e.name),b(typeof v=="boolean",e,"internal-error"),b(typeof E=="boolean",e,"internal-error"),yn(y,e.name),yn(g,e.name),yn(w,e.name),yn(C,e.name),yn(p,e.name),yn(f,e.name);const M=new pr({uid:m,auth:e,email:h,emailVerified:v,displayName:d,isAnonymous:E,photoURL:g,phoneNumber:y,tenantId:w,stsTokenManager:T,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(M.providerData=R.map(L=>Object.assign({},L))),C&&(M._redirectEventId=C),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qs;i.updateFromServerResponse(n);const s=new pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _l(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O1.type="NONE";const fg=O1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(nn(fg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||nn(fg);const o=ka(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=pr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ui(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ui(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(D1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(M1(e))return"Blackberry";if(U1(e))return"Webos";if(Af(e))return"Safari";if((e.includes("chrome/")||L1(e))&&!e.includes("edge/"))return"Chrome";if($1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function D1(t=Re()){return/firefox\//i.test(t)}function Af(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L1(t=Re()){return/crios\//i.test(t)}function b1(t=Re()){return/iemobile/i.test(t)}function $1(t=Re()){return/android/i.test(t)}function M1(t=Re()){return/blackberry/i.test(t)}function U1(t=Re()){return/webos/i.test(t)}function du(t=Re()){return/iphone|ipad|ipod/i.test(t)}function KN(t=Re()){var e;return du(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qN(){return f0()&&document.documentMode===10}function F1(t=Re()){return du(t)||$1(t)||U1(t)||M1(t)||/windows phone/i.test(t)||b1(t)}function GN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e=[]){let n;switch(t){case"Browser":n=pg(Re());break;case"Worker":n=`${pg(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ON()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?lt(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function xf(t){return lt(t)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ek(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function YN(t,e){return Co(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,e){return hu(t,"POST","/v1/accounts:signInWithPassword",cu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){return hu(t,"POST","/v1/accounts:signInWithEmailLink",cu(t,e))}async function ZN(t,e){return hu(t,"POST","/v1/accounts:signInWithEmailLink",cu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends Nf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return QN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JN(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return YN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ZN(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e){return hu(t,"POST","/v1/accounts:signInWithIdp",cu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="http://localhost";class xr extends Nf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ci(e,n)}buildRequest(){const e={requestUri:eP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ao(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nP(t){const e=es(ts(t)).link,n=e?es(ts(e)).deep_link_id:null,r=es(ts(t)).deep_link_id;return(r?es(ts(r)).link:null)||r||n||e||t}class Pf{constructor(e){var n,r,i,s,o,a;const l=es(ts(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=tP((i=l.mode)!==null&&i!==void 0?i:null);b(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nP(e);try{return new Pf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return Js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pf.parseLink(n);return b(r,"argument-error"),Js._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends B1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ro{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ro{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ro{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pr._fromIdTokenResponse(e,r,i),o=gg(r);return new Ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gg(r);return new Ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new El(e,n,r,i)}}function V1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,s,e,r):s})}async function rP(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ys(t,V1(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=Rf(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),Ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(t,e,n=!1){const r="signIn",i=await V1(t,r,e),s=await Ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function sP(t,e){return z1(xf(t),e)}function oP(t,e,n){return sP(lt(t),bi.credential(e,n))}const Sl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(){const t=Re();return Af(t)||du(t)}const lP=1e3,uP=10;class W1 extends H1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aP()&&GN(),this.fallbackToPolling=F1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W1.type="LOCAL";const cP=W1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1 extends H1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}K1.type="SESSION";const q1=K1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await hP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Of("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function fP(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(){return typeof Wt().WorkerGlobalScope!="undefined"&&typeof Wt().importScripts=="function"}async function pP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gP(){return G1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="firebaseLocalStorageDb",yP=1,Tl="firebaseLocalStorage",Y1="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pu(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function vP(){const t=indexedDB.deleteDatabase(X1);return new Ao(t).toPromise()}function bh(){const t=indexedDB.open(X1,yP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:Y1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await vP(),e(await bh()))})})}async function yg(t,e,n){const r=pu(t,!0).put({[Y1]:e,value:n});return new Ao(r).toPromise()}async function wP(t,e){const n=pu(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function vg(t,e){const n=pu(t,!0).delete(e);return new Ao(n).toPromise()}const _P=800,EP=3;class Q1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fu._getInstance(gP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pP(),!this.activeServiceWorker)return;this.sender=new dP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bh();return await yg(e,Sl,"1"),await vg(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pu(i,!1).getAll();return new Ao(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Q1.type="LOCAL";const SP=Q1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TP().appendChild(r)})}function IP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t,e){return e?nn(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends Nf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RP(t){return z1(t.auth,new Df(t),t.bypassAuthState)}function AP(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),iP(n,new Df(t),t.bypassAuthState)}async function xP(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),rP(n,new Df(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RP;case"linkViaPopup":case"linkViaRedirect":return xP;case"reauthViaPopup":case"reauthViaRedirect":return AP;default:bt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=new Io(2e3,1e4);class Qr extends J1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,NP.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="pendingRedirect",pc=new Map;class OP extends J1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pc.get(this.auth._key());if(!e){try{const r=await DP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pc.set(this.auth._key(),e)}return this.bypassAuthState||pc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DP(t,e){const n=bP(e),r=LP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LP(t){return nn(t._redirectPersistence)}function bP(t){return ka(PP,t.config.apiKey,t.name)}async function $P(t,e,n=!1){const r=xf(t),i=CP(r,e),o=await new OP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=10*60*1e3;class UP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Z1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MP&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Z1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e={}){return Co(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VP=/^https?/;async function zP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jP(t);for(const n of e)try{if(HP(n))return}catch{}bt(t,"unauthorized-domain")}function HP(t){const e=Lh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VP.test(n))return!1;if(BP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=new Io(3e4,6e4);function _g(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KP(t){return new Promise((e,n)=>{var r,i,s;function o(){_g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_g(),n(Ht(t,"network-request-failed"))},timeout:WP.get()})}if(!((i=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wt().gapi)===null||s===void 0)&&s.load)o();else{const a=IP("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},kP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ia=null,e})}let Ia=null;function qP(t){return Ia=Ia||KP(t),Ia}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=new Io(5e3,15e3),XP="__/auth/iframe",YP="emulator/auth/iframe",QP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZP(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cf(e,YP):`https://${t.config.authDomain}/${XP}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=JP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ao(r).slice(1)}`}async function eO(t){const e=await qP(t),n=Wt().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:ZP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=Wt().setTimeout(()=>{s(o)},GP.get());function l(){Wt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nO=500,rO=600,iO="_blank",sO="http://localhost";class Eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oO(t,e,n,r=nO,i=rO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(a=L1(u)?iO:n),D1(u)&&(e=e||sO,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[y,g])=>`${h}${y}=${g},`,"");if(KN(u)&&a!=="_self")return aO(e||"",a),new Eg(null);const d=window.open(e||"",a,c);b(d,t,"popup-blocked");try{d.focus()}catch{}return new Eg(d)}function aO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="__/auth/handler",uO="emulator/auth/handler";function Sg(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof B1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ZT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ro){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cO(t)}?${ao(a).slice(1)}`}function cO({config:t}){return t.emulator?Cf(t,uO):`https://${t.authDomain}/${lO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class hO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q1,this._completeRedirectFn=$P}async _openPopup(e,n,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Sg(e,n,r,Lh(),i);return oO(e,o,Of())}async _openRedirect(e,n,r,i){return await this._originValidation(e),fP(Sg(e,n,r,Lh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eO(e),r=new UP(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mc];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return F1()||Af()||du()}}const dO=hO;var Tg="@firebase/auth",kg="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mO(t){_r(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),b(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j1(t)},c=new XN(a,l,u);return xN(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_r(new Vn("auth-internal",e=>{const n=xf(e.getProvider("auth").getImmediate());return(r=>new fO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Tg,kg,pO(t)),zt(Tg,kg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t=Dd()){const e=jl(t,"auth");return e.isInitialized()?e.getImmediate():AN(t,{popupRedirectResolver:dO,persistence:[SP,cP,q1]})}mO("Browser");const yO="AIzaSyDVUY0qmQNXvgENN8fTswJIRspqeIaikDc",vO="1:471743892676:web:fa66fbed3d462db7560d91",wO={apiKey:yO,authDomain:"anny-kaktus.firebaseapp.com",projectId:"anny-kaktus",storageBucket:"anny-kaktus.appspot.com",messagingSenderId:"471743892676",appId:vO},e_=zk(wO),_O=AA(e_),EO=IA(_O,"productos"),SO=gO(),TO=Qx(e_);var Lf={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kO=P.exports,IO=Symbol.for("react.element"),CO=Symbol.for("react.fragment"),RO=Object.prototype.hasOwnProperty,AO=kO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xO={key:!0,ref:!0,__self:!0,__source:!0};function t_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RO.call(e,r)&&!xO.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:IO,type:t,key:s,ref:o,props:i,_owner:AO.current}}mu.Fragment=CO;mu.jsx=t_;mu.jsxs=t_;Lf.exports=mu;const V=Lf.exports.jsx,an=Lf.exports.jsxs,NO=()=>{const t=P.exports.useId(),[e,n]=P.exports.useState(""),[r,i]=P.exports.useState(""),[s,o]=P.exports.useState(""),[a,l]=P.exports.useState(null);return an(Pn,{children:[V(li,{children:V("title",{children:"A\xF1adir productos"})}),an("div",{className:"h-screen w-screen bg-neutral-300 grid place-content-center place-self-center mt-4 md:mt-0 lg:mt-0",children:[V(o0,{}),an("form",{className:"p-6 border-[1px] border-gray-200 bg-slate-50 flex flex-col w-[350px] md:w-[540px] shadow-lg rounded-xl",onSubmit:async d=>{if(d.preventDefault(),e.length===0||s.length===0||r.length===0||a===null)return Ce.error("\xA1Debes llenar todos los campos!"),!1;console.log(e,s,r,a),await jA(EO,{title:e,price:s,description:r,url:a}).then(()=>{Ce.success("Producto a\xF1adido correctamente"),console.log({title:e,price:s,description:r,image:a})}).catch(()=>{Ce.error("Ocurri\xF3 un error...")})},children:[V("input",{type:"text",autoComplete:"off",id:t,placeholder:"T\xEDtulo",onChange:d=>n(d.target.value),value:e,className:"my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"}),V("input",{type:"number",autoComplete:"off",id:t,placeholder:"Precio",onChange:d=>o(d.target.value),value:s,className:"my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"}),V("textarea",{placeholder:"Descripci\xF3n",autoComplete:"off",id:t,maxLength:"155",onChange:d=>i(d.target.value),value:r,className:"my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"}),V("input",{type:"file",name:"imagen",id:t,multiple:!0,accept:"image/*",onChange:d=>{d.preventDefault(),console.log(d.target.files[0]);const h=Yx(TO,`productsImages/${Date.now()+d.target.files[0].name}`),y=Gx(h,d.target.files[0]);y.on("state_changed",g=>{const w=g.bytesTransferred/g.totalBytes*100;switch(console.log("Upload is "+w+"% done"),g.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},g=>{console.log(g)},()=>{Xx(y.snapshot.ref).then(g=>{console.log(`file available at ${g}`),l(g)})})},className:"h-14 text-flora-black file:transition-all file:duration-300 file:hover:text-flora-white file:hover:bg-flora-secondhover file:px-3 file:cursor-pointer file:text-flora-white file:h-full file:w-2/2 file:bg-flora-second file:border-0 rounded-md my-3 bg-flora-white"}),V("button",{type:"submit",className:"bg-flora-base p-4 rounded-md font-semibold text-flora-white transition-all duration-300 hover:bg-green-600",children:"Agregar"})]})]})]})},PO=(t,e)=>{switch(e.type){case"LOGIN":return{currentUser:e.payload};case"LOGOUT":return{currentUser:null};default:return t}},n_={currentUser:JSON.parse(localStorage.getItem("user"))||null},bf=P.exports.createContext(n_),OO=({children:t})=>{const[e,n]=P.exports.useReducer(PO,n_);return P.exports.useEffect(()=>{localStorage.setItem("user",JSON.stringify(e.currentUser))},[e.currentUser]),V(bf.Provider,{value:{currentUser:e.currentUser,dispatch:n},children:t})},DO=()=>{const t=P.exports.useId(),[e,n]=P.exports.useState({email:"",password:""}),r=jv(),{dispatch:i}=P.exports.useContext(bf);return an(Pn,{children:[V(li,{children:V("title",{children:"Iniciar sesi\xF3n"})}),V(o0,{}),V("div",{className:"bg-flora-base",children:V("form",{onSubmit:o=>{if(o.preventDefault(),e.email.length===0||e.password.length===0)return Ce.error("\xA1Debes llenar todos los campos!"),!1;oP(SO,e.email,e.password).then(a=>{const l=a.user;i({type:"LOGIN",payload:l}),Ce.success(`Bienvenido(a) ${l.email}`),r("/admin")}).catch(a=>{Ce.error("Error al iniciar sesi\xF3n")})},children:an("div",{className:"p-4 flex flex-col items-center h-screen",children:[V("h1",{className:"text-2xl font-bold my-4 uppercase text-flora-white",children:"Panel administrador"}),an("div",{className:"bg-neutral-100 border[1px] border-neutral-500 rounded-xl px-5 py-8 shadow-xl w-80",children:[V("label",{htmlFor:t,className:"block text-md font-bold text-flora-black",children:"Correo"}),V("input",{type:"email",placeholder:"correo@correo.com",id:t,autoComplete:"off",onChange:o=>n(_u(wu({},e),{email:o.target.value})),className:"rounded-md shadow-md border-2 w-full outline-flora-base border-neutral-500/5 p-2 my-4"}),V("label",{htmlFor:t+1,className:"block text-md font-bold text-flora-black",children:"Contrase\xF1a"}),V("input",{type:"password",placeholder:"********",id:t+1,autoComplete:"off",onChange:o=>n(_u(wu({},e),{password:o.target.value})),className:"rounded-md shadow-md border-2 w-full outline-flora-base border-neutral-500/5 p-2 my-4"}),V("div",{className:"flex justify-center w-full",children:V("button",{type:"submit",className:"bg-flora-second my-3 px-4 py-2 outline-none text-flora-white font-semibold rounded-lg transition-colors duration-300 hover:bg-red-700",children:"Iniciar sesi\xF3n"})})]})]})})})]})},LO=()=>an(Pn,{children:[V(li,{children:V("title",{children:"404 - Not Found"})}),an("div",{className:"h-screen flex flex-col items-center justify-center px-8",children:[V("span",{className:"text-xl",children:"404 No encontrado"}),V("h1",{className:"text-xl font-bold text-center md:text-2xl lg:text-3xl",children:"Lo sentimos... Por el momento no contamos con lo que buscas \u{1F331}"})]})]}),bO=()=>{const{currentUser:t}=P.exports.useContext(bf);return V(eT,{children:an(ZS,{children:[V(ma,{path:"/",element:V(DO,{})}),V(ma,{path:"/admin",element:V(({children:n})=>t?n:V(QS,{to:"/"}),{children:V(NO,{})})}),V(ma,{path:"*",element:V(LO,{})})]})})};Lv(document.getElementById("root")).render(V(OO,{children:V(bO,{})}));
