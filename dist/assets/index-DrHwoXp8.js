(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function yv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lm={exports:{}},Cl={},cm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),Sv=Symbol.for("react.portal"),Mv=Symbol.for("react.fragment"),Ev=Symbol.for("react.strict_mode"),wv=Symbol.for("react.profiler"),Tv=Symbol.for("react.provider"),Av=Symbol.for("react.context"),Cv=Symbol.for("react.forward_ref"),bv=Symbol.for("react.suspense"),Rv=Symbol.for("react.memo"),Pv=Symbol.for("react.lazy"),qf=Symbol.iterator;function Lv(t){return t===null||typeof t!="object"?null:(t=qf&&t[qf]||t["@@iterator"],typeof t=="function"?t:null)}var um={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dm=Object.assign,fm={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=fm,this.updater=n||um}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hm(){}hm.prototype=Ns.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=fm,this.updater=n||um}var Od=Fd.prototype=new hm;Od.constructor=Fd;dm(Od,Ns.prototype);Od.isPureReactComponent=!0;var Kf=Array.isArray,pm=Object.prototype.hasOwnProperty,kd={current:null},mm={key:!0,ref:!0,__self:!0,__source:!0};function gm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pm.call(e,i)&&!mm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Uo,type:t,key:s,ref:o,props:r,_owner:kd.current}}function Nv(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function Dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zf=/\/+/g;function Yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dv(""+t.key):e.toString(36)}function Oa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case Sv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Yl(o,0):i,Kf(r)?(n="",t!=null&&(n=t.replace(Zf,"$&/")+"/"),Oa(r,e,n,"",function(c){return c})):r!=null&&(zd(r)&&(r=Nv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Zf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Kf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Yl(s,a);o+=Oa(s,e,n,l,r)}else if(l=Lv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Yl(s,a++),o+=Oa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $o(t,e,n){if(t==null)return t;var i=[],r=0;return Oa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Uv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},ka={transition:null},Iv={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:ka,ReactCurrentOwner:kd};function vm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Ns;Ve.Fragment=Mv;Ve.Profiler=wv;Ve.PureComponent=Fd;Ve.StrictMode=Ev;Ve.Suspense=bv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;Ve.act=vm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=dm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pm.call(e,l)&&!mm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Uo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:Av,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tv,_context:t},t.Consumer=t};Ve.createElement=gm;Ve.createFactory=function(t){var e=gm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:Cv,render:t}};Ve.isValidElement=zd;Ve.lazy=function(t){return{$$typeof:Pv,_payload:{_status:-1,_result:t},_init:Uv}};Ve.memo=function(t,e){return{$$typeof:Rv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};Ve.unstable_act=vm;Ve.useCallback=function(t,e){return jt.current.useCallback(t,e)};Ve.useContext=function(t){return jt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return jt.current.useEffect(t,e)};Ve.useId=function(){return jt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return jt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};Ve.useRef=function(t){return jt.current.useRef(t)};Ve.useState=function(t){return jt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return jt.current.useTransition()};Ve.version="18.3.1";cm.exports=Ve;var ke=cm.exports;const Fv=yv(ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov=ke,kv=Symbol.for("react.element"),zv=Symbol.for("react.fragment"),Bv=Object.prototype.hasOwnProperty,Hv=Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vv={key:!0,ref:!0,__self:!0,__source:!0};function _m(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Bv.call(e,i)&&!Vv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kv,type:t,key:s,ref:o,props:r,_owner:Hv.current}}Cl.Fragment=zv;Cl.jsx=_m;Cl.jsxs=_m;lm.exports=Cl;var M=lm.exports,eu={},xm={exports:{}},fn={},ym={exports:{}},Sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,W){var Q=N.length;N.push(W);e:for(;0<Q;){var le=Q-1>>>1,Se=N[le];if(0<r(Se,W))N[le]=W,N[Q]=Se,Q=le;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var W=N[0],Q=N.pop();if(Q!==W){N[0]=Q;e:for(var le=0,Se=N.length,Ge=Se>>>1;le<Ge;){var $=2*(le+1)-1,ie=N[$],_e=$+1,ae=N[_e];if(0>r(ie,Q))_e<Se&&0>r(ae,ie)?(N[le]=ae,N[_e]=Q,le=_e):(N[le]=ie,N[$]=Q,le=$);else if(_e<Se&&0>r(ae,Q))N[le]=ae,N[_e]=Q,le=_e;else break e}}return W}function r(N,W){var Q=N.sortIndex-W.sortIndex;return Q!==0?Q:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=N)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function S(N){if(y=!1,_(N),!g)if(n(l)!==null)g=!0,q(L);else{var W=n(c);W!==null&&ee(S,W.startTime-N)}}function L(N,W){g=!1,y&&(y=!1,u(R),R=-1),p=!0;var Q=f;try{for(_(W),h=n(l);h!==null&&(!(h.expirationTime>W)||N&&!P());){var le=h.callback;if(typeof le=="function"){h.callback=null,f=h.priorityLevel;var Se=le(h.expirationTime<=W);W=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),_(W)}else i(l);h=n(l)}if(h!==null)var Ge=!0;else{var $=n(c);$!==null&&ee(S,$.startTime-W),Ge=!1}return Ge}finally{h=null,f=Q,p=!1}}var b=!1,C=null,R=-1,A=5,E=-1;function P(){return!(t.unstable_now()-E<A)}function Y(){if(C!==null){var N=t.unstable_now();E=N;var W=!0;try{W=C(!0,N)}finally{W?V():(b=!1,C=null)}}else b=!1}var V;if(typeof v=="function")V=function(){v(Y)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Z=K.port2;K.port1.onmessage=Y,V=function(){Z.postMessage(null)}}else V=function(){m(Y,0)};function q(N){C=N,b||(b=!0,V())}function ee(N,W){R=m(function(){N(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,q(L))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var Q=f;f=W;try{return N()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=f;f=N;try{return W()}finally{f=Q}},t.unstable_scheduleCallback=function(N,W,Q){var le=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,N={id:d++,callback:W,priorityLevel:N,startTime:Q,expirationTime:Se,sortIndex:-1},Q>le?(N.sortIndex=Q,e(c,N),n(l)===null&&N===n(c)&&(y?(u(R),R=-1):y=!0,ee(S,Q-le))):(N.sortIndex=Se,e(l,N),g||p||(g=!0,q(L))),N},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(N){var W=f;return function(){var Q=f;f=W;try{return N.apply(this,arguments)}finally{f=Q}}}})(Sm);ym.exports=Sm;var Gv=ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=ke,dn=Gv;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mm=new Set,go={};function Lr(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(go[t]=e,t=0;t<e.length;t++)Mm.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=Object.prototype.hasOwnProperty,jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qf={},Jf={};function Xv(t){return tu.call(Jf,t)?!0:tu.call(Qf,t)?!1:jv.test(t)?Jf[t]=!0:(Qf[t]=!0,!1)}function $v(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yv(t,e,n,i){if(e===null||typeof e>"u"||$v(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function Hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bd,Hd);Lt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bd,Hd);Lt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bd,Hd);Lt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,i){var r=Lt.hasOwnProperty(e)?Lt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yv(e,n,r,i)&&(n=null),i||r===null?Xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),nu=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),wm=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),ru=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),Tm=Symbol.for("react.offscreen"),eh=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,ql;function eo(t){if(ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ql=e&&e[1]||""}return`
`+ql+t}var Kl=!1;function Zl(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function qv(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case nu:return"Profiler";case Gd:return"StrictMode";case iu:return"Suspense";case ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wm:return(t.displayName||"Context")+".Consumer";case Em:return(t._context.displayName||"Context")+".Provider";case Wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jd:return e=t.displayName||null,e!==null?e:su(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return su(t(e))}catch{}}return null}function Kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return su(e);case 8:return e===Gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Am(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zv(t){var e=Am(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qo(t){t._valueTracker||(t._valueTracker=Zv(t))}function Cm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Am(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ou(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function th(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bm(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function au(t,e){bm(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&lu(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lu(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ih(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(to(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function Rm(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,Lm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qv=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){Qv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function Nm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function Dm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Nm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Jv=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function du(t,e){if(e){if(Jv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hu=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pu=null,ds=null,fs=null;function sh(t){if(t=Oo(t)){if(typeof pu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Nl(e),pu(t.stateNode,t.type,e))}}function Um(t){ds?fs?fs.push(t):fs=[t]:ds=t}function Im(){if(ds){var t=ds,e=fs;if(fs=ds=null,sh(t),e)for(t=0;t<e.length;t++)sh(e[t])}}function Fm(t,e){return t(e)}function Om(){}var Ql=!1;function km(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return Fm(t,e,n)}finally{Ql=!1,(ds!==null||fs!==null)&&(Om(),Im())}}function _o(t,e){var n=t.stateNode;if(n===null)return null;var i=Nl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var mu=!1;if(mi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{mu=!1}function e_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ao=!1,nl=null,il=!1,gu=null,t_={onError:function(t){ao=!0,nl=t}};function n_(t,e,n,i,r,s,o,a,l){ao=!1,nl=null,e_.apply(t_,arguments)}function i_(t,e,n,i,r,s,o,a,l){if(n_.apply(this,arguments),ao){if(ao){var c=nl;ao=!1,nl=null}else throw Error(te(198));il||(il=!0,gu=c)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oh(t){if(Nr(t)!==t)throw Error(te(188))}function r_(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return oh(r),t;if(s===i)return oh(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Bm(t){return t=r_(t),t!==null?Hm(t):null}function Hm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hm(t);if(e!==null)return e;t=t.sibling}return null}var Vm=dn.unstable_scheduleCallback,ah=dn.unstable_cancelCallback,s_=dn.unstable_shouldYield,o_=dn.unstable_requestPaint,vt=dn.unstable_now,a_=dn.unstable_getCurrentPriorityLevel,$d=dn.unstable_ImmediatePriority,Gm=dn.unstable_UserBlockingPriority,rl=dn.unstable_NormalPriority,l_=dn.unstable_LowPriority,Wm=dn.unstable_IdlePriority,bl=null,qn=null;function c_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:f_,u_=Math.log,d_=Math.LN2;function f_(t){return t>>>=0,t===0?32:31-(u_(t)/d_|0)|0}var Zo=64,Qo=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=no(a):(s&=o,s!==0&&(i=no(s)))}else o=n&~r,o!==0?i=no(o):s!==0&&(i=no(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function h_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=h_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jm(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function m_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function Xm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $m,qd,Ym,qm,Km,_u=!1,Jo=[],zi=null,Bi=null,Hi=null,xo=new Map,yo=new Map,Ii=[],g_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lh(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oo(e),e!==null&&qd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function v_(t,e,n,i,r){switch(e){case"focusin":return zi=Hs(zi,t,e,n,i,r),!0;case"dragenter":return Bi=Hs(Bi,t,e,n,i,r),!0;case"mouseover":return Hi=Hs(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xo.set(s,Hs(xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,yo.set(s,Hs(yo.get(s)||null,t,e,n,i,r)),!0}return!1}function Zm(t){var e=gr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=zm(n),e!==null){t.blockedOn=e,Km(t.priority,function(){Ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hu=i,n.target.dispatchEvent(i),hu=null}else return e=Oo(n),e!==null&&qd(e),t.blockedOn=n,!1;e.shift()}return!0}function ch(t,e,n){za(t)&&n.delete(e)}function __(){_u=!1,zi!==null&&za(zi)&&(zi=null),Bi!==null&&za(Bi)&&(Bi=null),Hi!==null&&za(Hi)&&(Hi=null),xo.forEach(ch),yo.forEach(ch)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,_u||(_u=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,__)))}function So(t){function e(r){return Vs(r,t)}if(0<Jo.length){Vs(Jo[0],t);for(var n=1;n<Jo.length;n++){var i=Jo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&Vs(zi,t),Bi!==null&&Vs(Bi,t),Hi!==null&&Vs(Hi,t),xo.forEach(e),yo.forEach(e),n=0;n<Ii.length;n++)i=Ii[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ii.length&&(n=Ii[0],n.blockedOn===null);)Zm(n),n.blockedOn===null&&Ii.shift()}var hs=Mi.ReactCurrentBatchConfig,ol=!0;function x_(t,e,n,i){var r=Qe,s=hs.transition;hs.transition=null;try{Qe=1,Kd(t,e,n,i)}finally{Qe=r,hs.transition=s}}function y_(t,e,n,i){var r=Qe,s=hs.transition;hs.transition=null;try{Qe=4,Kd(t,e,n,i)}finally{Qe=r,hs.transition=s}}function Kd(t,e,n,i){if(ol){var r=xu(t,e,n,i);if(r===null)cc(t,e,i,al,n),lh(t,i);else if(v_(r,t,e,n,i))i.stopPropagation();else if(lh(t,i),e&4&&-1<g_.indexOf(t)){for(;r!==null;){var s=Oo(r);if(s!==null&&$m(s),s=xu(t,e,n,i),s===null&&cc(t,e,i,al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cc(t,e,i,null,n)}}var al=null;function xu(t,e,n,i){if(al=null,t=Xd(i),t=gr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function Qm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a_()){case $d:return 1;case Gm:return 4;case rl:case l_:return 16;case Wm:return 536870912;default:return 16}default:return 16}}var Oi=null,Zd=null,Ba=null;function Jm(){if(Ba)return Ba;var t,e=Zd,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ba=r.slice(t,1<i?1-i:void 0)}function Ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function uh(){return!1}function hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ea:uh,this.isPropagationStopped=uh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=hn(Ds),Fo=pt({},Ds,{view:0,detail:0}),S_=hn(Fo),ec,tc,Gs,Rl=pt({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(ec=t.screenX-Gs.screenX,tc=t.screenY-Gs.screenY):tc=ec=0,Gs=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),dh=hn(Rl),M_=pt({},Rl,{dataTransfer:0}),E_=hn(M_),w_=pt({},Fo,{relatedTarget:0}),nc=hn(w_),T_=pt({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),A_=hn(T_),C_=pt({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b_=hn(C_),R_=pt({},Ds,{data:0}),fh=hn(R_),P_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N_[t])?!!e[t]:!1}function Jd(){return D_}var U_=pt({},Fo,{key:function(t){if(t.key){var e=P_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(t){return t.type==="keypress"?Ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I_=hn(U_),F_=pt({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=hn(F_),O_=pt({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),k_=hn(O_),z_=pt({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),B_=hn(z_),H_=pt({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),V_=hn(H_),G_=[9,13,27,32],ef=mi&&"CompositionEvent"in window,lo=null;mi&&"documentMode"in document&&(lo=document.documentMode);var W_=mi&&"TextEvent"in window&&!lo,eg=mi&&(!ef||lo&&8<lo&&11>=lo),ph=" ",mh=!1;function tg(t,e){switch(t){case"keyup":return G_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ng(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function j_(t,e){switch(t){case"compositionend":return ng(e);case"keypress":return e.which!==32?null:(mh=!0,ph);case"textInput":return t=e.data,t===ph&&mh?null:t;default:return null}}function X_(t,e){if(Jr)return t==="compositionend"||!ef&&tg(t,e)?(t=Jm(),Ba=Zd=Oi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eg&&e.locale!=="ko"?null:e.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$_[t.type]:e==="textarea"}function ig(t,e,n,i){Um(i),e=ll(e,"onChange"),0<e.length&&(n=new Qd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var co=null,Mo=null;function Y_(t){pg(t,0)}function Pl(t){var e=ns(t);if(Cm(e))return t}function q_(t,e){if(t==="change")return e}var rg=!1;if(mi){var ic;if(mi){var rc="oninput"in document;if(!rc){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),rc=typeof vh.oninput=="function"}ic=rc}else ic=!1;rg=ic&&(!document.documentMode||9<document.documentMode)}function _h(){co&&(co.detachEvent("onpropertychange",sg),Mo=co=null)}function sg(t){if(t.propertyName==="value"&&Pl(Mo)){var e=[];ig(e,Mo,t,Xd(t)),km(Y_,e)}}function K_(t,e,n){t==="focusin"?(_h(),co=e,Mo=n,co.attachEvent("onpropertychange",sg)):t==="focusout"&&_h()}function Z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(Mo)}function Q_(t,e){if(t==="click")return Pl(e)}function J_(t,e){if(t==="input"||t==="change")return Pl(e)}function ex(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:ex;function Eo(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tu.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yh(t,e){var n=xh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xh(n)}}function og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ag(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tx(t){var e=ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&og(n.ownerDocument.documentElement,n)){if(i!==null&&tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=yh(n,s);var o=yh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nx=mi&&"documentMode"in document&&11>=document.documentMode,es=null,yu=null,uo=null,Su=!1;function Sh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||es==null||es!==tl(i)||(i=es,"selectionStart"in i&&tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),uo&&Eo(uo,i)||(uo=i,i=ll(yu,"onSelect"),0<i.length&&(e=new Qd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=es)))}function ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},sc={},lg={};mi&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Ll(t){if(sc[t])return sc[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lg)return sc[t]=e[n];return t}var cg=Ll("animationend"),ug=Ll("animationiteration"),dg=Ll("animationstart"),fg=Ll("transitionend"),hg=new Map,Mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){hg.set(t,e),Lr(e,[t])}for(var oc=0;oc<Mh.length;oc++){var ac=Mh[oc],ix=ac.toLowerCase(),rx=ac[0].toUpperCase()+ac.slice(1);Qi(ix,"on"+rx)}Qi(cg,"onAnimationEnd");Qi(ug,"onAnimationIteration");Qi(dg,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(fg,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function Eh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,i_(i,e,void 0,t),t.currentTarget=null}function pg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Eh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Eh(r,a,c),s=l}}}if(il)throw t=gu,il=!1,gu=null,t}function lt(t,e){var n=e[Au];n===void 0&&(n=e[Au]=new Set);var i=t+"__bubble";n.has(i)||(mg(e,t,2,!1),n.add(i))}function lc(t,e,n){var i=0;e&&(i|=4),mg(n,t,i,e)}var na="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[na]){t[na]=!0,Mm.forEach(function(n){n!=="selectionchange"&&(sx.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[na]||(e[na]=!0,lc("selectionchange",!1,e))}}function mg(t,e,n,i){switch(Qm(e)){case 1:var r=x_;break;case 4:r=y_;break;default:r=Kd}n=r.bind(null,e,n,t),r=void 0,!mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}km(function(){var c=s,d=Xd(n),h=[];e:{var f=hg.get(t);if(f!==void 0){var p=Qd,g=t;switch(t){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":p=I_;break;case"focusin":g="focus",p=nc;break;case"focusout":g="blur",p=nc;break;case"beforeblur":case"afterblur":p=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=E_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=k_;break;case cg:case ug:case dg:p=A_;break;case fg:p=B_;break;case"scroll":p=S_;break;case"wheel":p=V_;break;case"copy":case"cut":case"paste":p=b_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hh}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,u!==null&&(S=_o(v,u),S!=null&&y.push(To(v,S,_)))),m)break;v=v.return}0<y.length&&(f=new p(f,g,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==hu&&(g=n.relatedTarget||n.fromElement)&&(gr(g)||g[gi]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?gr(g):null,g!==null&&(m=Nr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=dh,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=hh,S="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?f:ns(p),_=g==null?f:ns(g),f=new y(S,v+"leave",p,n,d),f.target=m,f.relatedTarget=_,S=null,gr(d)===c&&(y=new y(u,v+"enter",g,n,d),y.target=_,y.relatedTarget=m,S=y),m=S,p&&g)t:{for(y=p,u=g,v=0,_=y;_;_=Fr(_))v++;for(_=0,S=u;S;S=Fr(S))_++;for(;0<v-_;)y=Fr(y),v--;for(;0<_-v;)u=Fr(u),_--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Fr(y),u=Fr(u)}y=null}else y=null;p!==null&&wh(h,f,p,y,!1),g!==null&&m!==null&&wh(h,m,g,y,!0)}}e:{if(f=c?ns(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var L=q_;else if(gh(f))if(rg)L=J_;else{L=Z_;var b=K_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=Q_);if(L&&(L=L(t,c))){ig(h,L,n,d);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&lu(f,"number",f.value)}switch(b=c?ns(c):window,t){case"focusin":(gh(b)||b.contentEditable==="true")&&(es=b,yu=c,uo=null);break;case"focusout":uo=yu=es=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Sh(h,n,d);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":Sh(h,n,d)}var C;if(ef)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Jr?tg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(eg&&n.locale!=="ko"&&(Jr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Jr&&(C=Jm()):(Oi=d,Zd="value"in Oi?Oi.value:Oi.textContent,Jr=!0)),b=ll(c,R),0<b.length&&(R=new fh(R,t,null,n,d),h.push({event:R,listeners:b}),C?R.data=C:(C=ng(n),C!==null&&(R.data=C)))),(C=W_?j_(t,n):X_(t,n))&&(c=ll(c,"onBeforeInput"),0<c.length&&(d=new fh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=C))}pg(h,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_o(t,n),s!=null&&i.unshift(To(t,s,r)),s=_o(t,e),s!=null&&i.push(To(t,s,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=_o(n,s),l!=null&&o.unshift(To(n,l,a))):r||(l=_o(n,s),l!=null&&o.push(To(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ox=/\r\n?/g,ax=/\u0000|\uFFFD/g;function Th(t){return(typeof t=="string"?t:""+t).replace(ox,`
`).replace(ax,"")}function ia(t,e,n){if(e=Th(e),Th(t)!==e&&n)throw Error(te(425))}function cl(){}var Mu=null,Eu=null;function wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,lx=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(t){return Ah.resolve(null).then(t).catch(ux)}:Tu;function ux(t){setTimeout(function(){throw t})}function uc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),So(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);So(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ch(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Us,Ao="__reactProps$"+Us,gi="__reactContainer$"+Us,Au="__reactEvents$"+Us,dx="__reactListeners$"+Us,fx="__reactHandles$"+Us;function gr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ch(t);t!==null;){if(n=t[Xn])return n;t=Ch(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Xn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Nl(t){return t[Ao]||null}var Cu=[],is=-1;function Ji(t){return{current:t}}function ct(t){0>is||(t.current=Cu[is],Cu[is]=null,is--)}function rt(t,e){is++,Cu[is]=t.current,t.current=e}var Ki={},zt=Ji(Ki),Jt=Ji(!1),wr=Ki;function ys(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function ul(){ct(Jt),ct(zt)}function bh(t,e,n){if(zt.current!==Ki)throw Error(te(168));rt(zt,e),rt(Jt,n)}function gg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Kv(t)||"Unknown",r));return pt({},n,i)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,wr=zt.current,rt(zt,t),rt(Jt,Jt.current),!0}function Rh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=gg(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,ct(Jt),ct(zt),rt(zt,t)):ct(Jt),rt(Jt,n)}var ai=null,Dl=!1,dc=!1;function vg(t){ai===null?ai=[t]:ai.push(t)}function hx(t){Dl=!0,vg(t)}function er(){if(!dc&&ai!==null){dc=!0;var t=0,e=Qe;try{var n=ai;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Dl=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Vm($d,er),r}finally{Qe=e,dc=!1}}return null}var rs=[],ss=0,fl=null,hl=0,_n=[],xn=0,Tr=null,ci=1,ui="";function cr(t,e){rs[ss++]=hl,rs[ss++]=fl,fl=t,hl=e}function _g(t,e,n){_n[xn++]=ci,_n[xn++]=ui,_n[xn++]=Tr,Tr=t;var i=ci;t=ui;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ci=1<<32-On(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function nf(t){t.return!==null&&(cr(t,1),_g(t,1,0))}function rf(t){for(;t===fl;)fl=rs[--ss],rs[ss]=null,hl=rs[--ss],rs[ss]=null;for(;t===Tr;)Tr=_n[--xn],_n[xn]=null,ui=_n[--xn],_n[xn]=null,ci=_n[--xn],_n[xn]=null}var cn=null,ln=null,ut=!1,Un=null;function xg(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ph(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,ln=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,ln=null,!0):!1;default:return!1}}function bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ru(t){if(ut){var e=ln;if(e){var n=e;if(!Ph(t,e)){if(bu(t))throw Error(te(418));e=Vi(n.nextSibling);var i=cn;e&&Ph(t,e)?xg(i,n):(t.flags=t.flags&-4097|2,ut=!1,cn=t)}}else{if(bu(t))throw Error(te(418));t.flags=t.flags&-4097|2,ut=!1,cn=t}}}function Lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function ra(t){if(t!==cn)return!1;if(!ut)return Lh(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wu(t.type,t.memoizedProps)),e&&(e=ln)){if(bu(t))throw yg(),Error(te(418));for(;e;)xg(t,e),e=Vi(e.nextSibling)}if(Lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=cn?Vi(t.stateNode.nextSibling):null;return!0}function yg(){for(var t=ln;t;)t=Vi(t.nextSibling)}function Ss(){ln=cn=null,ut=!1}function sf(t){Un===null?Un=[t]:Un.push(t)}var px=Mi.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function sa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nh(t){var e=t._init;return e(t._payload)}function Sg(t){function e(u,v){if(t){var _=u.deletions;_===null?(u.deletions=[v],u.flags|=16):_.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Xi(u,v),u.index=0,u.sibling=null,u}function s(u,v,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<v?(u.flags|=2,v):_):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,_,S){return v===null||v.tag!==6?(v=_c(_,u.mode,S),v.return=u,v):(v=r(v,_),v.return=u,v)}function l(u,v,_,S){var L=_.type;return L===Qr?d(u,v,_.props.children,S,_.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Di&&Nh(L)===v.type)?(S=r(v,_.props),S.ref=Ws(u,v,_),S.return=u,S):(S=Ya(_.type,_.key,_.props,null,u.mode,S),S.ref=Ws(u,v,_),S.return=u,S)}function c(u,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=xc(_,u.mode,S),v.return=u,v):(v=r(v,_.children||[]),v.return=u,v)}function d(u,v,_,S,L){return v===null||v.tag!==7?(v=Mr(_,u.mode,S,L),v.return=u,v):(v=r(v,_),v.return=u,v)}function h(u,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_c(""+v,u.mode,_),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yo:return _=Ya(v.type,v.key,v.props,null,u.mode,_),_.ref=Ws(u,null,v),_.return=u,_;case Zr:return v=xc(v,u.mode,_),v.return=u,v;case Di:var S=v._init;return h(u,S(v._payload),_)}if(to(v)||zs(v))return v=Mr(v,u.mode,_,null),v.return=u,v;sa(u,v)}return null}function f(u,v,_,S){var L=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return L!==null?null:a(u,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:return _.key===L?l(u,v,_,S):null;case Zr:return _.key===L?c(u,v,_,S):null;case Di:return L=_._init,f(u,v,L(_._payload),S)}if(to(_)||zs(_))return L!==null?null:d(u,v,_,S,null);sa(u,_)}return null}function p(u,v,_,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(_)||null,a(v,u,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Yo:return u=u.get(S.key===null?_:S.key)||null,l(v,u,S,L);case Zr:return u=u.get(S.key===null?_:S.key)||null,c(v,u,S,L);case Di:var b=S._init;return p(u,v,_,b(S._payload),L)}if(to(S)||zs(S))return u=u.get(_)||null,d(v,u,S,L,null);sa(v,S)}return null}function g(u,v,_,S){for(var L=null,b=null,C=v,R=v=0,A=null;C!==null&&R<_.length;R++){C.index>R?(A=C,C=null):A=C.sibling;var E=f(u,C,_[R],S);if(E===null){C===null&&(C=A);break}t&&C&&E.alternate===null&&e(u,C),v=s(E,v,R),b===null?L=E:b.sibling=E,b=E,C=A}if(R===_.length)return n(u,C),ut&&cr(u,R),L;if(C===null){for(;R<_.length;R++)C=h(u,_[R],S),C!==null&&(v=s(C,v,R),b===null?L=C:b.sibling=C,b=C);return ut&&cr(u,R),L}for(C=i(u,C);R<_.length;R++)A=p(C,u,R,_[R],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?R:A.key),v=s(A,v,R),b===null?L=A:b.sibling=A,b=A);return t&&C.forEach(function(P){return e(u,P)}),ut&&cr(u,R),L}function y(u,v,_,S){var L=zs(_);if(typeof L!="function")throw Error(te(150));if(_=L.call(_),_==null)throw Error(te(151));for(var b=L=null,C=v,R=v=0,A=null,E=_.next();C!==null&&!E.done;R++,E=_.next()){C.index>R?(A=C,C=null):A=C.sibling;var P=f(u,C,E.value,S);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(u,C),v=s(P,v,R),b===null?L=P:b.sibling=P,b=P,C=A}if(E.done)return n(u,C),ut&&cr(u,R),L;if(C===null){for(;!E.done;R++,E=_.next())E=h(u,E.value,S),E!==null&&(v=s(E,v,R),b===null?L=E:b.sibling=E,b=E);return ut&&cr(u,R),L}for(C=i(u,C);!E.done;R++,E=_.next())E=p(C,u,R,E.value,S),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?R:E.key),v=s(E,v,R),b===null?L=E:b.sibling=E,b=E);return t&&C.forEach(function(Y){return e(u,Y)}),ut&&cr(u,R),L}function m(u,v,_,S){if(typeof _=="object"&&_!==null&&_.type===Qr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:e:{for(var L=_.key,b=v;b!==null;){if(b.key===L){if(L=_.type,L===Qr){if(b.tag===7){n(u,b.sibling),v=r(b,_.props.children),v.return=u,u=v;break e}}else if(b.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Di&&Nh(L)===b.type){n(u,b.sibling),v=r(b,_.props),v.ref=Ws(u,b,_),v.return=u,u=v;break e}n(u,b);break}else e(u,b);b=b.sibling}_.type===Qr?(v=Mr(_.props.children,u.mode,S,_.key),v.return=u,u=v):(S=Ya(_.type,_.key,_.props,null,u.mode,S),S.ref=Ws(u,v,_),S.return=u,u=S)}return o(u);case Zr:e:{for(b=_.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(u,v.sibling),v=r(v,_.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=xc(_,u.mode,S),v.return=u,u=v}return o(u);case Di:return b=_._init,m(u,v,b(_._payload),S)}if(to(_))return g(u,v,_,S);if(zs(_))return y(u,v,_,S);sa(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,_),v.return=u,u=v):(n(u,v),v=_c(_,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return m}var Ms=Sg(!0),Mg=Sg(!1),pl=Ji(null),ml=null,os=null,of=null;function af(){of=os=ml=null}function lf(t){var e=pl.current;ct(pl),t._currentValue=e}function Pu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ps(t,e){ml=t,of=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(ml===null)throw Error(te(308));os=t,ml.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var vr=null;function cf(t){vr===null?vr=[t]:vr.push(t)}function Eg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cf(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,cf(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yd(t,n)}}function Dh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(f=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=pt({},h,f);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=h}}function Uh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var ko={},Kn=Ji(ko),Co=Ji(ko),bo=Ji(ko);function _r(t){if(t===ko)throw Error(te(174));return t}function df(t,e){switch(rt(bo,e),rt(Co,t),rt(Kn,ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uu(e,t)}ct(Kn),rt(Kn,e)}function Es(){ct(Kn),ct(Co),ct(bo)}function Tg(t){_r(bo.current);var e=_r(Kn.current),n=uu(e,t.type);e!==n&&(rt(Co,t),rt(Kn,n))}function ff(t){Co.current===t&&(ct(Kn),ct(Co))}var ft=Ji(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function hf(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Ga=Mi.ReactCurrentDispatcher,hc=Mi.ReactCurrentBatchConfig,Ar=0,ht=null,Mt=null,Ct=null,_l=!1,fo=!1,Ro=0,mx=0;function Dt(){throw Error(te(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function mf(t,e,n,i,r,s){if(Ar=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=t===null||t.memoizedState===null?xx:yx,t=n(i,r),fo){s=0;do{if(fo=!1,Ro=0,25<=s)throw Error(te(301));s+=1,Ct=Mt=null,e.updateQueue=null,Ga.current=Sx,t=n(i,r)}while(fo)}if(Ga.current=xl,e=Mt!==null&&Mt.next!==null,Ar=0,Ct=Mt=ht=null,_l=!1,e)throw Error(te(300));return t}function gf(){var t=Ro!==0;return Ro=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ht.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Tn(){if(Mt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Ct===null?ht.memoizedState:Ct.next;if(e!==null)Ct=e,Mt=t;else{if(t===null)throw Error(te(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Ct===null?ht.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Po(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ar&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ht.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Bn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Bn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ag(){}function Cg(t,e){var n=ht,i=Tn(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,vf(Pg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Lo(9,Rg.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(te(349));Ar&30||bg(n,e,r)}return r}function bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rg(t,e,n,i){e.value=n,e.getSnapshot=i,Lg(e)&&Ng(t)}function Pg(t,e,n){return n(function(){Lg(e)&&Ng(t)})}function Lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Ng(t){var e=vi(t,1);e!==null&&kn(e,t,1,-1)}function Ih(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=_x.bind(null,ht,t),[e.memoizedState,t]}function Lo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Dg(){return Tn().memoizedState}function Wa(t,e,n,i){var r=Wn();ht.flags|=t,r.memoizedState=Lo(1|e,n,void 0,i===void 0?null:i)}function Ul(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&pf(i,o.deps)){r.memoizedState=Lo(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Lo(1|e,n,s,i)}function Fh(t,e){return Wa(8390656,8,t,e)}function vf(t,e){return Ul(2048,8,t,e)}function Ug(t,e){return Ul(4,2,t,e)}function Ig(t,e){return Ul(4,4,t,e)}function Fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Og(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4,4,Fg.bind(null,e,t),n)}function _f(){}function kg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function zg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Bg(t,e,n){return Ar&21?(Bn(n,e)||(n=jm(),ht.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function gx(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=hc.transition;hc.transition={};try{t(!1),e()}finally{Qe=n,hc.transition=i}}function Hg(){return Tn().memoizedState}function vx(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Vg(t))Gg(e,n);else if(n=Eg(t,e,n,i),n!==null){var r=Gt();kn(n,t,i,r),Wg(n,e,i)}}function _x(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vg(t))Gg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(r.next=r,cf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Eg(t,e,r,i),n!==null&&(r=Gt(),kn(n,t,i,r),Wg(n,e,i))}}function Vg(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Gg(t,e){fo=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yd(t,n)}}var xl={readContext:wn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},xx={readContext:wn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:Fh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4194308,4,Fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wa(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vx.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Ih,useDebugValue:_f,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Ih(!1),e=t[0];return t=gx.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Wn();if(ut){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),bt===null)throw Error(te(349));Ar&30||bg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Fh(Pg.bind(null,i,s,t),[t]),i.flags|=2048,Lo(9,Rg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=bt.identifierPrefix;if(ut){var n=ui,i=ci;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yx={readContext:wn,useCallback:kg,useContext:wn,useEffect:vf,useImperativeHandle:Og,useInsertionEffect:Ug,useLayoutEffect:Ig,useMemo:zg,useReducer:pc,useRef:Dg,useState:function(){return pc(Po)},useDebugValue:_f,useDeferredValue:function(t){var e=Tn();return Bg(e,Mt.memoizedState,t)},useTransition:function(){var t=pc(Po)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Ag,useSyncExternalStore:Cg,useId:Hg,unstable_isNewReconciler:!1},Sx={readContext:wn,useCallback:kg,useContext:wn,useEffect:vf,useImperativeHandle:Og,useInsertionEffect:Ug,useLayoutEffect:Ig,useMemo:zg,useReducer:mc,useRef:Dg,useState:function(){return mc(Po)},useDebugValue:_f,useDeferredValue:function(t){var e=Tn();return Mt===null?e.memoizedState=t:Bg(e,Mt.memoizedState,t)},useTransition:function(){var t=mc(Po)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Ag,useSyncExternalStore:Cg,useId:Hg,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=ji(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(kn(e,t,r,i),Va(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=ji(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(kn(e,t,r,i),Va(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=ji(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(kn(e,t,i,n),Va(e,t,i))}};function Oh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,i)||!Eo(r,s):!0}function jg(t,e,n){var i=!1,r=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=en(e)?wr:zt.current,i=e.contextTypes,s=(i=i!=null)?ys(t,r):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function kh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function Nu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=en(e)?wr:zt.current,r.context=ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Il.enqueueReplaceState(r,r.state,null),gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",i=e;do n+=qv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Du(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function Xg(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sl||(Sl=!0,Gu=i),Du(t,e)},n}function $g(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Du(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Du(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Mx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fx.bind(null,t,e,n),e.then(t,t))}function Bh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var Ex=Mi.ReactCurrentOwner,Zt=!1;function Vt(t,e,n,i){e.child=t===null?Mg(e,null,n,i):Ms(e,t.child,n,i)}function Vh(t,e,n,i,r){n=n.render;var s=e.ref;return ps(e,r),i=mf(t,e,n,i,s,r),n=gf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ut&&n&&nf(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Gh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Yg(t,e,s,i,r)):(t=Ya(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(o,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Yg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Eo(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,_i(t,e,r)}return Uu(t,e,n,i,r)}function qg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ls,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(ls,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(ls,an),an|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(ls,an),an|=i;return Vt(t,e,r,n),e.child}function Kg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uu(t,e,n,i,r){var s=en(n)?wr:zt.current;return s=ys(e,s),ps(e,r),n=mf(t,e,n,i,s,r),i=gf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ut&&i&&nf(e),e.flags|=1,Vt(t,e,n,r),e.child)}function Wh(t,e,n,i,r){if(en(n)){var s=!0;dl(e)}else s=!1;if(ps(e,r),e.stateNode===null)ja(t,e),jg(e,n,i),Nu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=en(n)?wr:zt.current,c=ys(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&kh(e,o,i,c),Ui=!1;var f=e.memoizedState;o.state=f,gl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Jt.current||Ui?(typeof d=="function"&&(Lu(e,n,d,i),l=e.memoizedState),(a=Ui||Oh(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,wg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=en(n)?wr:zt.current,l=ys(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&kh(e,o,i,l),Ui=!1,f=e.memoizedState,o.state=f,gl(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||Jt.current||Ui?(typeof p=="function"&&(Lu(e,n,p,i),g=e.memoizedState),(c=Ui||Oh(e,n,c,i,f,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Iu(t,e,n,i,s,r)}function Iu(t,e,n,i,r,s){Kg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Rh(e,n,!1),_i(t,e,s);i=e.stateNode,Ex.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&Rh(e,n,!0),e.child}function Zg(t){var e=t.stateNode;e.pendingContext?bh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bh(t,e.context,!1),df(t,e.containerInfo)}function jh(t,e,n,i,r){return Ss(),sf(r),e.flags|=256,Vt(t,e,n,i),e.child}var Fu={dehydrated:null,treeContext:null,retryLane:0};function Ou(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qg(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ft,r&1),t===null)return Ru(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kl(o,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ou(n),e.memoizedState=Fu,t):xf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Xi(a,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ou(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fu,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xf(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oa(t,e,n,i){return i!==null&&sf(i),Ms(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gc(Error(te(422))),oa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kl({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=Ou(o),e.memoizedState=Fu,s);if(!(e.mode&1))return oa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=gc(s,i,void 0),oa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Zt||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),kn(i,t,r,-1))}return Tf(),i=gc(Error(te(421))),oa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ox.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Vi(r.nextSibling),cn=e,ut=!0,Un=null,t!==null&&(_n[xn++]=ci,_n[xn++]=ui,_n[xn++]=Tr,ci=t.id,ui=t.overflow,Tr=e),e=xf(e,i.children),e.flags|=4096,e)}function Xh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pu(t.return,e,n)}function vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Jg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,n,e);else if(t.tag===19)Xh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vc(e,!0,n,null,s);break;case"together":vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Tx(t,e,n){switch(e.tag){case 3:Zg(e),Ss();break;case 5:Tg(e);break;case 1:en(e.type)&&dl(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?Qg(t,e,n):(rt(ft,ft.current&1),t=_i(t,e,n),t!==null?t.sibling:null);rt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Jg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,qg(t,e,n)}return _i(t,e,n)}var e0,ku,t0,n0;e0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ku=function(){};t0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(Kn.current);var s=null;switch(n){case"input":r=ou(t,r),i=ou(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=cu(t,r),i=cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cl)}du(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(go.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(go.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};n0=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ax(t,e,n){var i=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return en(e.type)&&ul(),Ut(e),null;case 3:return i=e.stateNode,Es(),ct(Jt),ct(zt),hf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Xu(Un),Un=null))),ku(t,e),Ut(e),null;case 5:ff(e);var r=_r(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)t0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ut(e),null}if(t=_r(Kn.current),ra(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<io.length;r++)lt(io[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":th(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":ih(i,s),lt("invalid",i)}du(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ia(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ia(i.textContent,a,t),r=["children",""+a]):go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":qo(i),nh(i,s,!0);break;case"textarea":qo(i),rh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Xn]=e,t[Ao]=i,e0(t,e,!1,!1),e.stateNode=t;e:{switch(o=fu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<io.length;r++)lt(io[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":th(t,i),r=ou(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":ih(t,i),r=cu(t,i),lt("invalid",t);break;default:r=i}du(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vo(t,l):typeof l=="number"&&vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&Vd(t,s,l,o))}switch(n){case"input":qo(t),nh(t,i,!1);break;case"textarea":qo(t),rh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?us(t,!!i.multiple,s,!1):i.defaultValue!=null&&us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)n0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=_r(bo.current),_r(Kn.current),ra(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:ia(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ia(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Ut(e),null;case 13:if(ct(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&ln!==null&&e.mode&1&&!(e.flags&128))yg(),Ss(),e.flags|=98560,s=!1;else if(s=ra(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Xn]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Un!==null&&(Xu(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Et===0&&(Et=3):Tf())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return Es(),ku(t,e),t===null&&wo(e.stateNode.containerInfo),Ut(e),null;case 10:return lf(e.type._context),Ut(e),null;case 17:return en(e.type)&&ul(),Ut(e),null;case 19:if(ct(ft),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)js(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,js(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Ts&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=vl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Ut(e),null}else 2*vt()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ft.current,rt(ft,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?an&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Cx(t,e){switch(rf(e),e.tag){case 1:return en(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),ct(Jt),ct(zt),hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ff(e),null;case 13:if(ct(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ft),null;case 4:return Es(),null;case 10:return lf(e.type._context),null;case 22:case 23:return wf(),null;case 24:return null;default:return null}}var aa=!1,Ot=!1,bx=typeof WeakSet=="function"?WeakSet:Set,ye=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function zu(t,e,n){try{n()}catch(i){gt(t,e,i)}}var $h=!1;function Rx(t,e){if(Mu=ol,t=ag(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:t,selectionRange:n},ol=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return g=$h,$h=!1,g}function ho(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zu(e,n,s)}r=r.next}while(r!==i)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i0(t){var e=t.alternate;e!==null&&(t.alternate=null,i0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[Ao],delete e[Au],delete e[dx],delete e[fx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r0(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(t=t.child,t!==null))for(Hu(t,e,n),t=t.sibling;t!==null;)Hu(t,e,n),t=t.sibling}function Vu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Vu(t,e,n),t=t.sibling;t!==null;)Vu(t,e,n),t=t.sibling}var Rt=null,Dn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)s0(t,e,n),n=n.sibling}function s0(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Ot||as(n,e);case 6:var i=Rt,r=Dn;Rt=null,Ti(t,e,n),Rt=i,Dn=r,Rt!==null&&(Dn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Dn?(t=Rt,n=n.stateNode,t.nodeType===8?uc(t.parentNode,n):t.nodeType===1&&uc(t,n),So(t)):uc(Rt,n.stateNode));break;case 4:i=Rt,r=Dn,Rt=n.stateNode.containerInfo,Dn=!0,Ti(t,e,n),Rt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zu(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Ot&&(as(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,Ti(t,e,n),Ot=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function qh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(i){var r=kx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,Dn=!1;break e;case 3:Rt=a.stateNode.containerInfo,Dn=!0;break e;case 4:Rt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(Rt===null)throw Error(te(160));s0(s,o,r),Rt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o0(e,t),e=e.sibling}function o0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Gn(t),i&4){try{ho(3,t,t.return),Fl(3,t)}catch(y){gt(t,t.return,y)}try{ho(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:bn(e,t),Gn(t),i&512&&n!==null&&as(n,n.return);break;case 5:if(bn(e,t),Gn(t),i&512&&n!==null&&as(n,n.return),t.flags&32){var r=t.stateNode;try{vo(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bm(r,s),fu(a,o);var c=fu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Dm(r,h):d==="dangerouslySetInnerHTML"?Lm(r,h):d==="children"?vo(r,h):Vd(r,d,h,c)}switch(a){case"input":au(r,s);break;case"textarea":Rm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?us(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?us(r,!!s.multiple,s.defaultValue,!0):us(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ao]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(bn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(bn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:bn(e,t),Gn(t);break;case 13:bn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mf=vt())),i&4&&qh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||d,bn(e,t),Ot=c):bn(e,t),Gn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ye=t,d=t.child;d!==null;){for(h=ye=d;ye!==null;){switch(f=ye,p=f.child,f.tag){case 0:case 11:case 14:case 15:ho(4,f,f.return);break;case 1:as(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:as(f,f.return);break;case 22:if(f.memoizedState!==null){Zh(h);continue}}p!==null?(p.return=f,ye=p):Zh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nm("display",o))}catch(y){gt(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){gt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:bn(e,t),Gn(t),i&4&&qh(t);break;case 21:break;default:bn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(vo(r,""),i.flags&=-33);var s=Yh(t);Vu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Yh(t);Hu(t,a,o);break;default:throw Error(te(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Px(t,e,n){ye=t,a0(t)}function a0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||aa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=aa;var c=Ot;if(aa=o,(Ot=l)&&!c)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?Qh(r):l!==null?(l.return=o,ye=l):Qh(r);for(;s!==null;)ye=s,a0(s),s=s.sibling;ye=r,aa=a,Ot=c}Kh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):Kh(t)}}function Kh(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Fl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&So(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ot||e.flags&512&&Bu(e)}catch(f){gt(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Zh(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Qh(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{Bu(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{Bu(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var Lx=Math.ceil,yl=Mi.ReactCurrentDispatcher,yf=Mi.ReactCurrentOwner,Mn=Mi.ReactCurrentBatchConfig,$e=0,bt=null,St=null,Pt=0,an=0,ls=Ji(0),Et=0,No=null,Cr=0,Ol=0,Sf=0,po=null,Kt=null,Mf=0,Ts=1/0,oi=null,Sl=!1,Gu=null,Wi=null,la=!1,ki=null,Ml=0,mo=0,Wu=null,Xa=-1,$a=0;function Gt(){return $e&6?vt():Xa!==-1?Xa:Xa=vt()}function ji(t){return t.mode&1?$e&2&&Pt!==0?Pt&-Pt:px.transition!==null?($a===0&&($a=jm()),$a):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Qm(t.type)),t):1}function kn(t,e,n,i){if(50<mo)throw mo=0,Wu=null,Error(te(185));Io(t,n,i),(!($e&2)||t!==bt)&&(t===bt&&(!($e&2)&&(Ol|=n),Et===4&&Fi(t,Pt)),tn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ts=vt()+500,Dl&&er()))}function tn(t,e){var n=t.callbackNode;p_(t,e);var i=sl(t,t===bt?Pt:0);if(i===0)n!==null&&ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ah(n),e===1)t.tag===0?hx(Jh.bind(null,t)):vg(Jh.bind(null,t)),cx(function(){!($e&6)&&er()}),n=null;else{switch(Xm(i)){case 1:n=$d;break;case 4:n=Gm;break;case 16:n=rl;break;case 536870912:n=Wm;break;default:n=rl}n=m0(n,l0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l0(t,e){if(Xa=-1,$a=0,$e&6)throw Error(te(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=sl(t,t===bt?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=El(t,i);else{e=i;var r=$e;$e|=2;var s=u0();(bt!==t||Pt!==e)&&(oi=null,Ts=vt()+500,Sr(t,e));do try{Ux();break}catch(a){c0(t,a)}while(!0);af(),yl.current=s,$e=r,St!==null?e=0:(bt=null,Pt=0,e=Et)}if(e!==0){if(e===2&&(r=vu(t),r!==0&&(i=r,e=ju(t,r))),e===1)throw n=No,Sr(t,0),Fi(t,i),tn(t,vt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Nx(r)&&(e=El(t,i),e===2&&(s=vu(t),s!==0&&(i=s,e=ju(t,s))),e===1))throw n=No,Sr(t,0),Fi(t,i),tn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:ur(t,Kt,oi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Mf+500-vt(),10<e)){if(sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tu(ur.bind(null,t,Kt,oi),e);break}ur(t,Kt,oi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Lx(i/1960))-i,10<i){t.timeoutHandle=Tu(ur.bind(null,t,Kt,oi),i);break}ur(t,Kt,oi);break;case 5:ur(t,Kt,oi);break;default:throw Error(te(329))}}}return tn(t,vt()),t.callbackNode===n?l0.bind(null,t):null}function ju(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=El(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Xu(e)),t}function Xu(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function Nx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Sf,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function Jh(t){if($e&6)throw Error(te(327));ms();var e=sl(t,0);if(!(e&1))return tn(t,vt()),null;var n=El(t,e);if(t.tag!==0&&n===2){var i=vu(t);i!==0&&(e=i,n=ju(t,i))}if(n===1)throw n=No,Sr(t,0),Fi(t,e),tn(t,vt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Kt,oi),tn(t,vt()),null}function Ef(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ts=vt()+500,Dl&&er())}}function br(t){ki!==null&&ki.tag===0&&!($e&6)&&ms();var e=$e;$e|=1;var n=Mn.transition,i=Qe;try{if(Mn.transition=null,Qe=1,t)return t()}finally{Qe=i,Mn.transition=n,$e=e,!($e&6)&&er()}}function wf(){an=ls.current,ct(ls)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:Es(),ct(Jt),ct(zt),hf();break;case 5:ff(i);break;case 4:Es();break;case 13:ct(ft);break;case 19:ct(ft);break;case 10:lf(i.type._context);break;case 22:case 23:wf()}n=n.return}if(bt=t,St=t=Xi(t.current,null),Pt=an=e,Et=0,No=null,Sf=Ol=Cr=0,Kt=po=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vr=null}return t}function c0(t,e){do{var n=St;try{if(af(),Ga.current=xl,_l){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Ar=0,Ct=Mt=ht=null,fo=!1,Ro=0,yf.current=null,n===null||n.return===null){Et=1,No=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Bh(o);if(p!==null){p.flags&=-257,Hh(p,o,a,s,e),p.mode&1&&zh(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){zh(s,c,e),Tf();break e}l=Error(te(426))}}else if(ut&&a.mode&1){var m=Bh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Hh(m,o,a,s,e),sf(ws(l,a));break e}}s=l=ws(l,a),Et!==4&&(Et=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Xg(s,l,e);Dh(s,u);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Wi===null||!Wi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=$g(s,a,e);Dh(s,S);break e}}s=s.return}while(s!==null)}f0(n)}catch(L){e=L,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function u0(){var t=yl.current;return yl.current=xl,t===null?xl:t}function Tf(){(Et===0||Et===3||Et===2)&&(Et=4),bt===null||!(Cr&268435455)&&!(Ol&268435455)||Fi(bt,Pt)}function El(t,e){var n=$e;$e|=2;var i=u0();(bt!==t||Pt!==e)&&(oi=null,Sr(t,e));do try{Dx();break}catch(r){c0(t,r)}while(!0);if(af(),$e=n,yl.current=i,St!==null)throw Error(te(261));return bt=null,Pt=0,Et}function Dx(){for(;St!==null;)d0(St)}function Ux(){for(;St!==null&&!s_();)d0(St)}function d0(t){var e=p0(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?f0(t):St=e,yf.current=null}function f0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=Ax(n,e,an),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function ur(t,e,n){var i=Qe,r=Mn.transition;try{Mn.transition=null,Qe=1,Ix(t,e,n,i)}finally{Mn.transition=r,Qe=i}return null}function Ix(t,e,n,i){do ms();while(ki!==null);if($e&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(m_(t,s),t===bt&&(St=bt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||la||(la=!0,m0(rl,function(){return ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=Qe;Qe=1;var a=$e;$e|=4,yf.current=null,Rx(t,n),o0(n,t),tx(Eu),ol=!!Mu,Eu=Mu=null,t.current=n,Px(n),o_(),$e=a,Qe=o,Mn.transition=s}else t.current=n;if(la&&(la=!1,ki=t,Ml=r),s=t.pendingLanes,s===0&&(Wi=null),c_(n.stateNode),tn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,t=Gu,Gu=null,t;return Ml&1&&t.tag!==0&&ms(),s=t.pendingLanes,s&1?t===Wu?mo++:(mo=0,Wu=t):mo=0,er(),null}function ms(){if(ki!==null){var t=Xm(Ml),e=Mn.transition,n=Qe;try{if(Mn.transition=null,Qe=16>t?16:t,ki===null)var i=!1;else{if(t=ki,ki=null,Ml=0,$e&6)throw Error(te(331));var r=$e;for($e|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var d=ye;switch(d.tag){case 0:case 11:case 15:ho(8,d,s)}var h=d.child;if(h!==null)h.return=d,ye=h;else for(;ye!==null;){d=ye;var f=d.sibling,p=d.return;if(i0(d),d===c){ye=null;break}if(f!==null){f.return=p,ye=f;break}ye=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ye=u;break e}ye=s.return}}var v=t.current;for(ye=v;ye!==null;){o=ye;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ye=_;else e:for(o=v;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fl(9,a)}}catch(L){gt(a,a.return,L)}if(a===o){ye=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ye=S;break e}ye=a.return}}if($e=r,er(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(bl,t)}catch{}i=!0}return i}finally{Qe=n,Mn.transition=e}}return!1}function ep(t,e,n){e=ws(n,e),e=Xg(t,e,1),t=Gi(t,e,1),e=Gt(),t!==null&&(Io(t,1,e),tn(t,e))}function gt(t,e,n){if(t.tag===3)ep(t,t,n);else for(;e!==null;){if(e.tag===3){ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=ws(n,t),t=$g(e,t,1),e=Gi(e,t,1),t=Gt(),e!==null&&(Io(e,1,t),tn(e,t));break}}e=e.return}}function Fx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Pt&n)===n&&(Et===4||Et===3&&(Pt&130023424)===Pt&&500>vt()-Mf?Sr(t,0):Sf|=n),tn(t,e)}function h0(t,e){e===0&&(t.mode&1?(e=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):e=1);var n=Gt();t=vi(t,e),t!==null&&(Io(t,e,n),tn(t,n))}function Ox(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h0(t,n)}function kx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),h0(t,n)}var p0;p0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,Tx(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,ut&&e.flags&1048576&&_g(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ja(t,e),t=e.pendingProps;var r=ys(e,zt.current);ps(e,n),r=mf(null,e,i,t,r,n);var s=gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uf(e),r.updater=Il,e.stateNode=r,r._reactInternals=e,Nu(e,i,t,n),e=Iu(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&nf(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Bx(i),t=Nn(i,t),r){case 0:e=Uu(null,e,i,t,n);break e;case 1:e=Wh(null,e,i,t,n);break e;case 11:e=Vh(null,e,i,t,n);break e;case 14:e=Gh(null,e,i,Nn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Uu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Wh(t,e,i,r,n);case 3:e:{if(Zg(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,wg(t,e),gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ws(Error(te(423)),e),e=jh(t,e,i,n,r);break e}else if(i!==r){r=ws(Error(te(424)),e),e=jh(t,e,i,n,r);break e}else for(ln=Vi(e.stateNode.containerInfo.firstChild),cn=e,ut=!0,Un=null,n=Mg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),i===r){e=_i(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return Tg(e),t===null&&Ru(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,wu(i,r)?o=null:s!==null&&wu(i,s)&&(e.flags|=32),Kg(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&Ru(e),null;case 13:return Qg(t,e,n);case 4:return df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ms(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Vh(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(pl,i._currentValue),i._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===r.children&&!Jt.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ps(e,n),r=wn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Gh(t,e,i,r,n);case 15:return Yg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),ja(t,e),e.tag=1,en(i)?(t=!0,dl(e)):t=!1,ps(e,n),jg(e,i,r),Nu(e,i,r,n),Iu(null,e,i,!0,t,n);case 19:return Jg(t,e,n);case 22:return qg(t,e,n)}throw Error(te(156,e.tag))};function m0(t,e){return Vm(t,e)}function zx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new zx(t,e,n,i)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bx(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wd)return 11;if(t===jd)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ya(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qr:return Mr(n.children,r,s,e);case Gd:o=8,r|=8;break;case nu:return t=Sn(12,n,e,r|2),t.elementType=nu,t.lanes=s,t;case iu:return t=Sn(13,n,e,r),t.elementType=iu,t.lanes=s,t;case ru:return t=Sn(19,n,e,r),t.elementType=ru,t.lanes=s,t;case Tm:return kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Em:o=10;break e;case wm:o=9;break e;case Wd:o=11;break e;case jd:o=14;break e;case Di:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function kl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=Tm,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function xc(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,i,r,s,o,a,l){return t=new Hx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),t}function Vx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function g0(t){if(!t)return Ki;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(en(n))return gg(t,n,e)}return e}function v0(t,e,n,i,r,s,o,a,l){return t=Cf(n,i,!0,t,r,s,o,a,l),t.context=g0(null),n=t.current,i=Gt(),r=ji(n),s=hi(i,r),s.callback=e??null,Gi(n,s,r),t.current.lanes=r,Io(t,r,i),tn(t,i),t}function zl(t,e,n,i){var r=e.current,s=Gt(),o=ji(r);return n=g0(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,o),t!==null&&(kn(t,r,o,s),Va(t,r,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bf(t,e){tp(t,e),(t=t.alternate)&&tp(t,e)}function Gx(){return null}var _0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rf(t){this._internalRoot=t}Bl.prototype.render=Rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));zl(t,e,null,null)};Bl.prototype.unmount=Rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){zl(null,t,null,null)}),e[gi]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=qm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ii.length&&e!==0&&e<Ii[n].priority;n++);Ii.splice(n,0,t),n===0&&Zm(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function np(){}function Wx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wl(o);s.call(c)}}var o=v0(e,i,t,0,null,!1,!1,"",np);return t._reactRootContainer=o,t[gi]=o.current,wo(t.nodeType===8?t.parentNode:t),br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=wl(l);a.call(c)}}var l=Cf(t,0,!1,null,null,!1,!1,"",np);return t._reactRootContainer=l,t[gi]=l.current,wo(t.nodeType===8?t.parentNode:t),br(function(){zl(e,l,n,i)}),l}function Vl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=wl(o);a.call(l)}}zl(e,o,t,r)}else o=Wx(n,e,t,r,i);return wl(o)}$m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(Yd(e,n|1),tn(e,vt()),!($e&6)&&(Ts=vt()+500,er()))}break;case 13:br(function(){var i=vi(t,1);if(i!==null){var r=Gt();kn(i,t,1,r)}}),bf(t,1)}};qd=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Gt();kn(e,t,134217728,n)}bf(t,134217728)}};Ym=function(t){if(t.tag===13){var e=ji(t),n=vi(t,e);if(n!==null){var i=Gt();kn(n,t,e,i)}bf(t,e)}};qm=function(){return Qe};Km=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};pu=function(t,e,n){switch(e){case"input":if(au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nl(i);if(!r)throw Error(te(90));Cm(i),au(i,r)}}}break;case"textarea":Rm(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};Fm=Ef;Om=br;var jx={usingClientEntryPoint:!1,Events:[Oo,ns,Nl,Um,Im,Ef]},Xs={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xx={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bm(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||Gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{bl=ca.inject(Xx),qn=ca}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(te(200));return Vx(t,e,null,n)};fn.createRoot=function(t,e){if(!Pf(t))throw Error(te(299));var n=!1,i="",r=_0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,wo(t.nodeType===8?t.parentNode:t),new Rf(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Bm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return br(t)};fn.hydrate=function(t,e,n){if(!Hl(e))throw Error(te(200));return Vl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=_0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=v0(e,null,t,1,n??null,r,!1,s,o),t[gi]=e.current,wo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bl(e)};fn.render=function(t,e,n){if(!Hl(e))throw Error(te(200));return Vl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(te(40));return t._reactRootContainer?(br(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};fn.unstable_batchedUpdates=Ef;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Vl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function x0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x0)}catch(t){console.error(t)}}x0(),xm.exports=fn;var $x=xm.exports,ip=$x;eu.createRoot=ip.createRoot,eu.hydrateRoot=ip.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="170",Yx=0,rp=1,qx=2,y0=1,Kx=2,si=3,Zi=0,nn=1,$n=2,$i=0,gs=1,sp=2,op=3,ap=4,Zx=5,pr=100,Qx=101,Jx=102,ey=103,ty=104,ny=200,iy=201,ry=202,sy=203,$u=204,Yu=205,oy=206,ay=207,ly=208,cy=209,uy=210,dy=211,fy=212,hy=213,py=214,qu=0,Ku=1,Zu=2,As=3,Qu=4,Ju=5,ed=6,td=7,S0=0,my=1,gy=2,Yi=0,vy=1,_y=2,xy=3,yy=4,Sy=5,My=6,Ey=7,M0=300,Cs=301,bs=302,nd=303,id=304,Gl=306,rd=1e3,xr=1001,sd=1002,zn=1003,wy=1004,ua=1005,Qt=1006,yc=1007,yr=1008,xi=1009,E0=1010,w0=1011,Do=1012,Nf=1013,Rr=1014,di=1015,zo=1016,Df=1017,Uf=1018,Rs=1020,T0=35902,A0=1021,C0=1022,Fn=1023,b0=1024,R0=1025,vs=1026,Ps=1027,P0=1028,If=1029,L0=1030,Ff=1031,Of=1033,qa=33776,Ka=33777,Za=33778,Qa=33779,od=35840,ad=35841,ld=35842,cd=35843,ud=36196,dd=37492,fd=37496,hd=37808,pd=37809,md=37810,gd=37811,vd=37812,_d=37813,xd=37814,yd=37815,Sd=37816,Md=37817,Ed=37818,wd=37819,Td=37820,Ad=37821,Ja=36492,Cd=36494,bd=36495,N0=36283,Rd=36284,Pd=36285,Ld=36286,Ty=3200,Ay=3201,Cy=0,by=1,li="",vn="srgb",Dr="srgb-linear",Wl="linear",et="srgb",Or=7680,lp=519,Ry=512,Py=513,Ly=514,D0=515,Ny=516,Dy=517,Uy=518,Iy=519,cp=35044,up="300 es",fi=2e3,Tl=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=Math.PI/180,Nd=180/Math.PI;function Bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function Fy(t,e){return(t%e+e)%e}function Mc(t,e,n){return(1-n)*t+n*e}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,o,a,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],g=i[8],y=r[0],m=r[3],u=r[6],v=r[1],_=r[4],S=r[7],L=r[2],b=r[5],C=r[8];return s[0]=o*y+a*v+l*L,s[3]=o*m+a*_+l*b,s[6]=o*u+a*S+l*C,s[1]=c*y+d*v+h*L,s[4]=c*m+d*_+h*b,s[7]=c*u+d*S+h*C,s[2]=f*y+p*v+g*L,s[5]=f*m+p*_+g*b,s[8]=f*u+p*S+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,p=c*s-o*l,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ec.makeScale(e,n)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ec.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new Ie;function U0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Oy(){const t=Al("canvas");return t.style.display="block",t}const dp={};function ro(t){t in dp||(dp[t]=!0,console.warn(t))}function ky(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function zy(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function By(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===et&&(t.r=pi(t.r),t.g=pi(t.g),t.b=pi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===et&&(t.r=_s(t.r),t.g=_s(t.g),t.b=_s(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===li?Wl:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _s(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const fp=[.64,.33,.3,.6,.15,.06],hp=[.2126,.7152,.0722],pp=[.3127,.329],mp=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gp=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Dr]:{primaries:fp,whitePoint:pp,transfer:Wl,toXYZ:mp,fromXYZ:gp,luminanceCoefficients:hp,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:fp,whitePoint:pp,transfer:et,toXYZ:mp,fromXYZ:gp,luminanceCoefficients:hp,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}});let kr;class Hy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Al("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pi(n[i]/255)*255):n[i]=pi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vy=0;class I0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wc(r[o].image)):s.push(wc(r[o]))}else s=wc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function wc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Hy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gy=0;class Wt extends Is{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=xr,r=xr,s=Qt,o=yr,a=Fn,l=xi,c=Wt.DEFAULT_ANISOTROPY,d=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Bo(),this.name="",this.source=new I0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=M0;Wt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],g=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,L=(u+1)/2,b=(d+f)/4,C=(h+y)/4,R=(g+m)/4;return _>S&&_>L?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=C/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=R/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=C/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-y)/v,this.z=(f-d)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wy extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new I0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends Wy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class F0 extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jy extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(h!==y||l!==f||c!==p||d!==g){let m=1-a;const u=l*f+c*p+d*g+h*y,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const L=Math.sqrt(_),b=Math.atan2(L,u*v);m=Math.sin(m*b)/L,a=Math.sin(a*b)/L}const S=a*v;if(l=l*m+f*S,c=c*m+p*S,d=d*m+g*S,h=h*m+y*S,m===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+d*h+l*p-c*f,e[n+1]=l*g+d*f+c*h-a*p,e[n+2]=c*g+d*p+a*f-l*h,e[n+3]=d*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*p*g,this._y=c*p*h-f*d*g,this._z=c*d*g+f*p*h,this._w=c*d*h-f*p*g;break;case"YXZ":this._x=f*d*h+c*p*g,this._y=c*p*h-f*d*g,this._z=c*d*g-f*p*h,this._w=c*d*h+f*p*g;break;case"ZXY":this._x=f*d*h-c*p*g,this._y=c*p*h+f*d*g,this._z=c*d*g+f*p*h,this._w=c*d*h-f*p*g;break;case"ZYX":this._x=f*d*h-c*p*g,this._y=c*p*h+f*d*g,this._z=c*d*g-f*p*h,this._w=c*d*h+f*p*g;break;case"YZX":this._x=f*d*h+c*p*g,this._y=c*p*h+f*d*g,this._z=c*d*g-f*p*h,this._w=c*d*h-f*p*g;break;case"XZY":this._x=f*d*h-c*p*g,this._y=c*p*h-f*d*g,this._z=c*d*g+f*p*h,this._w=c*d*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new k,vp=new Ho;class Vo{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),fa.subVectors(this.max,Ys),zr.subVectors(e.a,Ys),Br.subVectors(e.b,Ys),Hr.subVectors(e.c,Ys),Ai.subVectors(Br,zr),Ci.subVectors(Hr,Br),nr.subVectors(zr,Hr);let n=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-nr.z,nr.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,nr.z,0,-nr.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-nr.y,nr.x,0];return!Ac(n,zr,Br,Hr,fa)||(n=[1,0,0,0,1,0,0,0,1],!Ac(n,zr,Br,Hr,fa))?!1:(ha.crossVectors(Ai,Ci),n=[ha.x,ha.y,ha.z],Ac(n,zr,Br,Hr,fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new k,new k,new k,new k,new k,new k,new k,new k],Rn=new k,da=new Vo,zr=new k,Br=new k,Hr=new k,Ai=new k,Ci=new k,nr=new k,Ys=new k,fa=new k,ha=new k,ir=new k;function Ac(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=n.dot(ir),d=i.dot(ir);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Xy=new Vo,qs=new k,Cc=new k;class kf{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Xy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Cc)),this.expandByPoint(qs.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new k,bc=new k,pa=new k,bi=new k,Rc=new k,ma=new k,Pc=new k;class $y{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bc.copy(e).add(n).multiplyScalar(.5),pa.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(bc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pa),a=bi.dot(this.direction),l=-bi.dot(pa),c=bi.lengthSq(),d=Math.abs(1-o*o);let h,f,p,g;if(d>0)if(h=o*l-a,f=o*a-l,g=s*d,h>=0)if(f>=-g)if(f<=g){const y=1/d;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bc).addScaledVector(pa,f),p}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Rc.subVectors(n,e),ma.subVectors(i,e),Pc.crossVectors(Rc,ma);let o=this.direction.dot(Pc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(bi,ma));if(l<0)return null;const c=a*this.direction.dot(Rc.cross(bi));if(c<0||l+c>o)return null;const d=-a*bi.dot(Pc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,p,g,y,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,p,g,y,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,p,g,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=g,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,g=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,g=c*d,y=c*h;n[0]=f+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-g,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,g=c*d,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*h,g=a*d,y=a*h;n[0]=l*d,n[4]=g*c-p,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*d,n[4]=y-f*h,n[8]=g*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*h+g,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=o*d,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yy,e,qy)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Ri.crossVectors(i,sn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Ri.crossVectors(i,sn)),Ri.normalize(),ga.crossVectors(sn,Ri),r[0]=Ri.x,r[4]=ga.x,r[8]=sn.x,r[1]=Ri.y,r[5]=ga.y,r[9]=sn.y,r[2]=Ri.z,r[6]=ga.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],g=i[2],y=i[6],m=i[10],u=i[14],v=i[3],_=i[7],S=i[11],L=i[15],b=r[0],C=r[4],R=r[8],A=r[12],E=r[1],P=r[5],Y=r[9],V=r[13],K=r[2],Z=r[6],q=r[10],ee=r[14],N=r[3],W=r[7],Q=r[11],le=r[15];return s[0]=o*b+a*E+l*K+c*N,s[4]=o*C+a*P+l*Z+c*W,s[8]=o*R+a*Y+l*q+c*Q,s[12]=o*A+a*V+l*ee+c*le,s[1]=d*b+h*E+f*K+p*N,s[5]=d*C+h*P+f*Z+p*W,s[9]=d*R+h*Y+f*q+p*Q,s[13]=d*A+h*V+f*ee+p*le,s[2]=g*b+y*E+m*K+u*N,s[6]=g*C+y*P+m*Z+u*W,s[10]=g*R+y*Y+m*q+u*Q,s[14]=g*A+y*V+m*ee+u*le,s[3]=v*b+_*E+S*K+L*N,s[7]=v*C+_*P+S*Z+L*W,s[11]=v*R+_*Y+S*q+L*Q,s[15]=v*A+_*V+S*ee+L*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],u=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*d-s*l*d)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],u=e[15],v=h*m*c-y*f*c+y*l*p-a*m*p-h*l*u+a*f*u,_=g*f*c-d*m*c-g*l*p+o*m*p+d*l*u-o*f*u,S=d*y*c-g*h*c+g*a*p-o*y*p-d*a*u+o*h*u,L=g*h*l-d*y*l-g*a*f+o*y*f+d*a*m-o*h*m,b=n*v+i*_+r*S+s*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*u-i*f*u)*C,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*C,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*C,e[4]=_*C,e[5]=(d*m*s-g*f*s+g*r*p-n*m*p-d*r*u+n*f*u)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*C,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*p+n*l*p)*C,e[8]=S*C,e[9]=(g*h*s-d*y*s-g*i*p+n*y*p+d*i*u-n*h*u)*C,e[10]=(o*y*s-g*a*s+g*i*c-n*y*c-o*i*u+n*a*u)*C,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*p-n*a*p)*C,e[12]=L*C,e[13]=(d*y*r-g*h*r+g*i*f-n*y*f-d*i*m+n*h*m)*C,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*C,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,p=s*d,g=s*h,y=o*d,m=o*h,u=a*h,v=l*c,_=l*d,S=l*h,L=i.x,b=i.y,C=i.z;return r[0]=(1-(y+u))*L,r[1]=(p+S)*L,r[2]=(g-_)*L,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(f+u))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(g+_)*C,r[9]=(m-v)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),a=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/s,d=1/o,h=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=d,Pn.elements[5]*=d,Pn.elements[6]*=d,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,n.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=fi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===fi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Tl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*d;let g,y;if(a===fi)g=(o+s)*h,y=-2*h;else if(a===Tl)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new k,Pn=new xt,Yy=new k(0,0,0),qy=new k(1,1,1),Ri=new k,ga=new k,sn=new k,_p=new xt,xp=new Ho;class yi{constructor(e=0,n=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _p.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_p,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xp.setFromEuler(this),this.setFromQuaternion(xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class O0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ky=0;const yp=new k,Gr=new Ho,ni=new xt,va=new k,Ks=new k,Zy=new k,Qy=new Ho,Sp=new k(1,0,0),Mp=new k(0,1,0),Ep=new k(0,0,1),wp={type:"added"},Jy={type:"removed"},Wr={type:"childadded",child:null},Lc={type:"childremoved",child:null};class un extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new k,n=new yi,i=new Ho,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ie}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Sp,e)}rotateY(e){return this.rotateOnAxis(Mp,e)}rotateZ(e){return this.rotateOnAxis(Ep,e)}translateOnAxis(e,n){return yp.copy(e).applyQuaternion(this.quaternion),this.position.add(yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sp,e)}translateY(e){return this.translateOnAxis(Mp,e)}translateZ(e){return this.translateOnAxis(Ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?va.copy(e):va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ks,va,this.up):ni.lookAt(va,Ks,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ni),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Jy),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new k(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new k,ii=new k,Nc=new k,ri=new k,jr=new k,Xr=new k,Tp=new k,Dc=new k,Uc=new k,Ic=new k,Fc=new _t,Oc=new _t,kc=new _t;class In{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),ii.subVectors(i,n),Nc.subVectors(e,n);const o=Ln.dot(Ln),a=Ln.dot(ii),l=Ln.dot(Nc),c=ii.dot(ii),d=ii.dot(Nc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*d)*f,g=(o*d-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Fc.setScalar(0),Oc.setScalar(0),kc.setScalar(0),Fc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,i),kc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fc,s.x),o.addScaledVector(Oc,s.y),o.addScaledVector(kc,s.z),o}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ii.subVectors(e,n),Ln.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;jr.subVectors(r,i),Xr.subVectors(s,i),Dc.subVectors(e,i);const l=jr.dot(Dc),c=Xr.dot(Dc);if(l<=0&&c<=0)return n.copy(i);Uc.subVectors(e,r);const d=jr.dot(Uc),h=Xr.dot(Uc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(jr,o);Ic.subVectors(e,s);const p=jr.dot(Ic),g=Xr.dot(Ic);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Xr,a);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Tp.subVectors(s,r),a=(h-d)/(h-d+(p-g)),n.copy(r).addScaledVector(Tp,a);const u=1/(m+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(jr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=Fy(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zc(o,s,e+1/3),this.g=zc(o,s,e),this.b=zc(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,n=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=vn){const i=k0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Xe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(kt(Ft.r*255,0,255))*65536+Math.round(kt(Ft.g*255,0,255))*256+Math.round(kt(Ft.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=vn){Xe.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(_a);const i=Mc(Pi.h,_a.h,n),r=Mc(Pi.s,_a.s,n),s=Mc(Pi.l,_a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new tt;tt.NAMES=k0;let eS=0;class jl extends Is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Bo(),this.name="",this.blending=gs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=Yu,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$u&&(i.blendSrc=this.blendSrc),this.blendDst!==Yu&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class z0 extends jl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=S0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new k,xa=new Je;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cp,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xa.fromBufferAttribute(this,n),xa.applyMatrix3(e),this.setXY(n,xa.x,xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cp&&(e.usage=this.usage),e}}class B0 extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class H0 extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Er extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let tS=0;const mn=new xt,Bc=new un,$r=new k,on=new Vo,Zs=new Vo,At=new k;class Ur extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?H0:B0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Er(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(on.min,Zs.min),on.expandByPoint(At),At.addVectors(on.max,Zs.max),on.expandByPoint(At)):(on.expandByPoint(Zs.min),on.expandByPoint(Zs.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)At.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(e,c),At.add($r)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new k,l[R]=new k;const c=new k,d=new k,h=new k,f=new Je,p=new Je,g=new Je,y=new k,m=new k;function u(R,A,E){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,E),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,E),d.sub(c),h.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),a[R].add(y),a[A].add(y),a[E].add(y),l[R].add(m),l[A].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,A=v.length;R<A;++R){const E=v[R],P=E.start,Y=E.count;for(let V=P,K=P+Y;V<K;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const _=new k,S=new k,L=new k,b=new k;function C(R){L.fromBufferAttribute(r,R),b.copy(L);const A=a[R];_.copy(A),_.sub(L.multiplyScalar(L.dot(A))).normalize(),S.crossVectors(b,A);const P=S.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,P)}for(let R=0,A=v.length;R<A;++R){const E=v[R],P=E.start,Y=E.count;for(let V=P,K=P+Y;V<K;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,d=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let u=0;u<d;u++)f[g++]=c[p++]}return new Zn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ur,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ap=new xt,rr=new $y,ya=new kf,Cp=new k,Sa=new k,Ma=new k,Ea=new k,Hc=new k,wa=new k,bp=new k,Ta=new k;class Yn extends un{constructor(e=new Ur,n=new z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Hc.fromBufferAttribute(h,e),o?wa.addScaledVector(Hc,d):wa.addScaledVector(Hc.sub(n),d))}n.add(wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(ya.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ya,Cp)===null||rr.origin.distanceToSquared(Cp)>(e.far-e.near)**2))&&(Ap.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Ap),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,L=_;S<L;S+=3){const b=a.getX(S),C=a.getX(S+1),R=a.getX(S+2);r=Aa(this,u,e,i,c,d,h,b,C,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Aa(this,o,e,i,c,d,h,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,L=_;S<L;S+=3){const b=S,C=S+1,R=S+2;r=Aa(this,u,e,i,c,d,h,b,C,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){const v=m,_=m+1,S=m+2;r=Aa(this,o,e,i,c,d,h,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function nS(t,e,n,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Zi,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ta);return c<n.near||c>n.far?null:{distance:c,point:Ta.clone(),object:t}}function Aa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Sa),t.getVertexPosition(l,Ma),t.getVertexPosition(c,Ea);const d=nS(t,e,n,i,Sa,Ma,Ea,bp);if(d){const h=new k;In.getBarycoord(bp,Sa,Ma,Ea,h),r&&(d.uv=In.getInterpolatedAttribute(r,a,l,c,h,new Je)),s&&(d.uv1=In.getInterpolatedAttribute(s,a,l,c,h,new Je)),o&&(d.normal=In.getInterpolatedAttribute(o,a,l,c,h,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};In.getNormal(Sa,Ma,Ea,f.normal),d.face=f,d.barycoord=h}return d}class Go extends Ur{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Er(c,3)),this.setAttribute("normal",new Er(d,3)),this.setAttribute("uv",new Er(h,2));function g(y,m,u,v,_,S,L,b,C,R,A){const E=S/C,P=L/R,Y=S/2,V=L/2,K=b/2,Z=C+1,q=R+1;let ee=0,N=0;const W=new k;for(let Q=0;Q<q;Q++){const le=Q*P-V;for(let Se=0;Se<Z;Se++){const Ge=Se*E-Y;W[y]=Ge*v,W[m]=le*_,W[u]=K,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[u]=b>0?1:-1,d.push(W.x,W.y,W.z),h.push(Se/C),h.push(1-Q/R),ee+=1}}for(let Q=0;Q<R;Q++)for(let le=0;le<C;le++){const Se=f+le+Z*Q,Ge=f+le+Z*(Q+1),$=f+(le+1)+Z*(Q+1),ie=f+(le+1)+Z*Q;l.push(Se,Ge,ie),l.push(Ge,$,ie),N+=6}a.addGroup(p,N,A),p+=N,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Ls(t[n]);for(const r in i)e[r]=i[r]}return e}function iS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function V0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const rS={clone:Ls,merge:Ht};var sS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends jl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sS,this.fragmentShader=oS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=iS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class G0 extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new k,Rp=new Je,Pp=new Je;class yn extends G0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,n){return this.getViewBounds(e,Rp,Pp),n.subVectors(Pp,Rp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,qr=1;class aS extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Yr,qr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Yr,qr,e,n);s.layers=this.layers,this.add(s);const o=new yn(Yr,qr,e,n);o.layers=this.layers,this.add(o);const a=new yn(Yr,qr,e,n);a.layers=this.layers,this.add(a);const l=new yn(Yr,qr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Yr,qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class W0 extends Wt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Cs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lS extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new W0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Go(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:$i});s.uniforms.tEquirect.value=n;const o=new Yn(r,s),a=n.minFilter;return n.minFilter===yr&&(n.minFilter=Qt),new aS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Vc=new k,cS=new k,uS=new Ie;class dr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vc.subVectors(i,n).cross(cS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Vc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||uS.getNormalMatrix(e),r=this.coplanarPoint(Vc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new kf,Ca=new k;class j0{constructor(e=new dr,n=new dr,i=new dr,r=new dr,s=new dr,o=new dr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],p=r[8],g=r[9],y=r[10],m=r[11],u=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-u).normalize(),i[1].setComponents(l+s,f+c,m+p,S+u).normalize(),i[2].setComponents(l+o,f+d,m+g,S+v).normalize(),i[3].setComponents(l-o,f-d,m-g,S-v).normalize(),i[4].setComponents(l-a,f-h,m-y,S-_).normalize(),n===fi)i[5].setComponents(l+a,f+h,m+y,S+_).normalize();else if(n===Tl)i[5].setComponents(a,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dS(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Wo extends Ur{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,p=[],g=[],y=[],m=[];for(let u=0;u<d;u++){const v=u*f-o;for(let _=0;_<c;_++){const S=_*h-s;g.push(S,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const _=v+c*u,S=v+c*(u+1),L=v+1+c*(u+1),b=v+1+c*u;p.push(_,S,b),p.push(S,L,b)}this.setIndex(p),this.setAttribute("position",new Er(g,3)),this.setAttribute("normal",new Er(y,3)),this.setAttribute("uv",new Er(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var fS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_S=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ES=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VS="gl_FragColor = linearToOutputTexel( gl_FragColor );",GS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,x1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:fS,alphahash_pars_fragment:hS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:vS,aomap_fragment:_S,aomap_pars_fragment:xS,batching_pars_vertex:yS,batching_vertex:SS,begin_vertex:MS,beginnormal_vertex:ES,bsdfs:wS,iridescence_fragment:TS,bumpmap_pars_fragment:AS,clipping_planes_fragment:CS,clipping_planes_pars_fragment:bS,clipping_planes_pars_vertex:RS,clipping_planes_vertex:PS,color_fragment:LS,color_pars_fragment:NS,color_pars_vertex:DS,color_vertex:US,common:IS,cube_uv_reflection_fragment:FS,defaultnormal_vertex:OS,displacementmap_pars_vertex:kS,displacementmap_vertex:zS,emissivemap_fragment:BS,emissivemap_pars_fragment:HS,colorspace_fragment:VS,colorspace_pars_fragment:GS,envmap_fragment:WS,envmap_common_pars_fragment:jS,envmap_pars_fragment:XS,envmap_pars_vertex:$S,envmap_physical_pars_fragment:rM,envmap_vertex:YS,fog_vertex:qS,fog_pars_vertex:KS,fog_fragment:ZS,fog_pars_fragment:QS,gradientmap_pars_fragment:JS,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:oM,lights_phong_fragment:aM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:dM,lights_fragment_maps:fM,lights_fragment_end:hM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:mM,logdepthbuf_pars_vertex:gM,logdepthbuf_vertex:vM,map_fragment:_M,map_pars_fragment:xM,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:EM,morphinstance_vertex:wM,morphcolor_vertex:TM,morphnormal_vertex:AM,morphtarget_pars_vertex:CM,morphtarget_vertex:bM,normal_fragment_begin:RM,normal_fragment_maps:PM,normal_pars_fragment:LM,normal_pars_vertex:NM,normal_vertex:DM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:OM,iridescence_pars_fragment:kM,opaque_fragment:zM,packing:BM,premultiplied_alpha_fragment:HM,project_vertex:VM,dithering_fragment:GM,dithering_pars_fragment:WM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:XM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:YM,shadowmap_vertex:qM,shadowmask_pars_fragment:KM,skinbase_vertex:ZM,skinning_pars_vertex:QM,skinning_vertex:JM,skinnormal_vertex:e1,specularmap_fragment:t1,specularmap_pars_fragment:n1,tonemapping_fragment:i1,tonemapping_pars_fragment:r1,transmission_fragment:s1,transmission_pars_fragment:o1,uv_pars_fragment:a1,uv_pars_vertex:l1,uv_vertex:c1,worldpos_vertex:u1,background_vert:d1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:p1,cube_vert:m1,cube_frag:g1,depth_vert:v1,depth_frag:_1,distanceRGBA_vert:x1,distanceRGBA_frag:y1,equirect_vert:S1,equirect_frag:M1,linedashed_vert:E1,linedashed_frag:w1,meshbasic_vert:T1,meshbasic_frag:A1,meshlambert_vert:C1,meshlambert_frag:b1,meshmatcap_vert:R1,meshmatcap_frag:P1,meshnormal_vert:L1,meshnormal_frag:N1,meshphong_vert:D1,meshphong_frag:U1,meshphysical_vert:I1,meshphysical_frag:F1,meshtoon_vert:O1,meshtoon_frag:k1,points_vert:z1,points_frag:B1,shadow_vert:H1,shadow_frag:V1,sprite_vert:G1,sprite_frag:W1},de={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},jn={basic:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ht([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ht([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ht([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ht([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ht([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ht([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ht([de.common,de.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ht([de.lights,de.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};jn.physical={uniforms:Ht([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ba={r:0,b:0,g:0},or=new yi,j1=new xt;function X1(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,d,h=null,f=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const S=g(v);S===null?u(a,l):S&&S.isColor&&(u(S,1),_=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===Gl)?(d===void 0&&(d=new Yn(new Go(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Ls(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),or.copy(_.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(or)),d.material.toneMapped=Xe.getTransfer(S.colorSpace)!==et,(h!==S||f!==S.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Yn(new Wo(2,2),new Si({name:"BackgroundMaterial",uniforms:Ls(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,_){v.getRGB(ba,V0(t)),i.buffers.color.setClear(ba.r,ba.g,ba.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:y,addToRenderList:m}}function $1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(E,P,Y,V,K){let Z=!1;const q=h(V,Y,P);s!==q&&(s=q,c(s.object)),Z=p(E,V,Y,K),Z&&g(E,V,Y,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(E,P,Y,V),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function h(E,P,Y){const V=Y.wireframe===!0;let K=i[E.id];K===void 0&&(K={},i[E.id]=K);let Z=K[P.id];Z===void 0&&(Z={},K[P.id]=Z);let q=Z[V];return q===void 0&&(q=f(l()),Z[V]=q),q}function f(E){const P=[],Y=[],V=[];for(let K=0;K<n;K++)P[K]=0,Y[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Y,attributeDivisors:V,object:E,attributes:{},index:null}}function p(E,P,Y,V){const K=s.attributes,Z=P.attributes;let q=0;const ee=Y.getAttributes();for(const N in ee)if(ee[N].location>=0){const Q=K[N];let le=Z[N];if(le===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;q++}return s.attributesNum!==q||s.index!==V}function g(E,P,Y,V){const K={},Z=P.attributes;let q=0;const ee=Y.getAttributes();for(const N in ee)if(ee[N].location>=0){let Q=Z[N];Q===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor));const le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),K[N]=le,q++}s.attributes=K,s.attributesNum=q,s.index=V}function y(){const E=s.newAttributes;for(let P=0,Y=E.length;P<Y;P++)E[P]=0}function m(E){u(E,0)}function u(E,P){const Y=s.newAttributes,V=s.enabledAttributes,K=s.attributeDivisors;Y[E]=1,V[E]===0&&(t.enableVertexAttribArray(E),V[E]=1),K[E]!==P&&(t.vertexAttribDivisor(E,P),K[E]=P)}function v(){const E=s.newAttributes,P=s.enabledAttributes;for(let Y=0,V=P.length;Y<V;Y++)P[Y]!==E[Y]&&(t.disableVertexAttribArray(Y),P[Y]=0)}function _(E,P,Y,V,K,Z,q){q===!0?t.vertexAttribIPointer(E,P,Y,K,Z):t.vertexAttribPointer(E,P,Y,V,K,Z)}function S(E,P,Y,V){y();const K=V.attributes,Z=Y.getAttributes(),q=P.defaultAttributeValues;for(const ee in Z){const N=Z[ee];if(N.location>=0){let W=K[ee];if(W===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(W=E.instanceColor)),W!==void 0){const Q=W.normalized,le=W.itemSize,Se=e.get(W);if(Se===void 0)continue;const Ge=Se.buffer,$=Se.type,ie=Se.bytesPerElement,_e=$===t.INT||$===t.UNSIGNED_INT||W.gpuType===Nf;if(W.isInterleavedBufferAttribute){const ae=W.data,be=ae.stride,Pe=W.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<N.locationSize;Ne++)u(N.location+Ne,ae.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<N.locationSize;Ne++)m(N.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Ne=0;Ne<N.locationSize;Ne++)_(N.location+Ne,le/N.locationSize,$,Q,be*ie,(Pe+le/N.locationSize*Ne)*ie,_e)}else{if(W.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)u(N.location+ae,W.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ae=0;ae<N.locationSize;ae++)m(N.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ae=0;ae<N.locationSize;ae++)_(N.location+ae,le/N.locationSize,$,Q,le*ie,le/N.locationSize*ae*ie,_e)}}else if(q!==void 0){const Q=q[ee];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(N.location,Q);break;case 3:t.vertexAttrib3fv(N.location,Q);break;case 4:t.vertexAttrib4fv(N.location,Q);break;default:t.vertexAttrib1fv(N.location,Q)}}}}v()}function L(){R();for(const E in i){const P=i[E];for(const Y in P){const V=P[Y];for(const K in V)d(V[K].object),delete V[K];delete P[Y]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const Y in P){const V=P[Y];for(const K in V)d(V[K].object),delete V[K];delete P[Y]}delete i[E.id]}function C(E){for(const P in i){const Y=i[P];if(Y[E.id]===void 0)continue;const V=Y[E.id];for(const K in V)d(V[K].object),delete V[K];delete Y[E.id]}}function R(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Y1(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];n.update(p,i,1)}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y]*f[y];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function q1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Fn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==xi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==di&&!R)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:L,maxSamples:b}}function K1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new dr,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,_=v*4;let S=u.clippingState||null;l.value=S,S=d(g,f,_,p);for(let L=0;L!==_;++L)S[L]=n[L];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const u=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,S=p;_!==y;++_,S+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Z1(t){let e=new WeakMap;function n(o,a){return a===nd?o.mapping=Cs:a===id&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nd||a===id)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Q1 extends G0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=4,Lp=[.125,.215,.35,.446,.526,.582],mr=20,Gc=new Q1,Np=new tt;let Wc=null,jc=0,Xc=0,$c=!1;const fr=(1+Math.sqrt(5))/2,Kr=1/fr,Dp=[new k(-fr,Kr,0),new k(fr,Kr,0),new k(-Kr,0,fr),new k(Kr,0,fr),new k(0,fr,-Kr),new k(0,fr,Kr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,jc,Xc),this._renderer.xr.enabled=$c,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:zo,format:Fn,colorSpace:Dr,depthBuffer:!1},r=Ip(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J1(s)),this._blurMaterial=eE(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Gc)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Np),d.toneMapping=Yi,d.autoClear=!1;const p=new z0({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Yn(new Go,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Np),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;Ra(r,v*_,u>2?_:0,_,_),d.setRenderTarget(r),y&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Cs||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ra(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Gc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dp[(r-s-1)%Dp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Yn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mr-1),y=s/g,m=isFinite(s)?1+Math.floor(d*y):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const u=[];let v=0;for(let C=0;C<mr;++C){const R=C/y,A=Math.exp(-R*R/2);u.push(A),C===0?v+=A:C<m&&(v+=2*A)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const S=this._sizeLods[r],L=3*S*(r>_-cs?r-_+cs:0),b=4*(this._cubeSize-S);Ra(n,L,b,3*S,2*S),l.setRenderTarget(n),l.render(h,Gc)}}function J1(t){const e=[],n=[],i=[];let r=t;const s=t-cs+1+Lp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-cs?l=Lp[o-t+cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,y=3,m=2,u=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),S=new Float32Array(u*g*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,R=b>2?0:-1,A=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];v.set(A,y*g*b),_.set(f,m*g*b);const E=[b,b,b,b,b,b];S.set(E,u*g*b)}const L=new Ur;L.setAttribute("position",new Zn(v,y)),L.setAttribute("uv",new Zn(_,m)),L.setAttribute("faceIndex",new Zn(S,u)),e.push(L),r>cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ip(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function eE(t,e,n){const i=new Float32Array(mr),r=new k(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Fp(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Op(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nd||l===id,d=l===Cs||l===bs;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Up(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Up(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function nE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ro("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,S=v.length;_<S;_+=3){const L=v[_+0],b=v[_+1],C=v[_+2];f.push(L,b,b,C,C,L)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const L=_+0,b=_+1,C=_+2;f.push(L,b,b,C,C,L)}}else return;const m=new(U0(f)?H0:B0)(f,1);m.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function rE(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function h(f,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v]*y[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function sE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oE(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,b=1;L>e.maxTextureSize&&(b=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*b*4*h),R=new F0(C,L,b,h);R.type=di,R.needsUpdate=!0;const A=S*4;for(let P=0;P<h;P++){const Y=u[P],V=v[P],K=_[P],Z=L*b*4*P;for(let q=0;q<Y.count;q++){const ee=q*A;g===!0&&(r.fromBufferAttribute(Y,q),C[Z+ee+0]=r.x,C[Z+ee+1]=r.y,C[Z+ee+2]=r.z,C[Z+ee+3]=0),y===!0&&(r.fromBufferAttribute(V,q),C[Z+ee+4]=r.x,C[Z+ee+5]=r.y,C[Z+ee+6]=r.z,C[Z+ee+7]=0),m===!0&&(r.fromBufferAttribute(K,q),C[Z+ee+8]=r.x,C[Z+ee+9]=r.y,C[Z+ee+10]=r.z,C[Z+ee+11]=K.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new Je(L,b)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function aE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class $0 extends Wt{constructor(e,n,i,r,s,o,a,l,c,d=vs){if(d!==vs&&d!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===vs&&(i=Rr),i===void 0&&d===Ps&&(i=Rs),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Y0=new Wt,kp=new $0(1,1),q0=new F0,K0=new jy,Z0=new W0,zp=[],Bp=[],Hp=new Float32Array(16),Vp=new Float32Array(9),Gp=new Float32Array(4);function Fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zp[r];if(s===void 0&&(s=new Float32Array(r),zp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=Bp[e];n===void 0&&(n=new Int32Array(e),Bp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function lE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function uE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function dE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function fE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Gp.set(i),t.uniformMatrix2fv(this.addr,!1,Gp),Tt(n,i)}}function hE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Vp.set(i),t.uniformMatrix3fv(this.addr,!1,Vp),Tt(n,i)}}function pE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Hp.set(i),t.uniformMatrix4fv(this.addr,!1,Hp),Tt(n,i)}}function mE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function gE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function vE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function xE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function SE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function ME(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function EE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(kp.compareFunction=D0,s=kp):s=Y0,n.setTexture2D(e||s,r)}function wE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||K0,r)}function TE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Z0,r)}function AE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||q0,r)}function CE(t){switch(t){case 5126:return lE;case 35664:return cE;case 35665:return uE;case 35666:return dE;case 35674:return fE;case 35675:return hE;case 35676:return pE;case 5124:case 35670:return mE;case 35667:case 35671:return gE;case 35668:case 35672:return vE;case 35669:case 35673:return _E;case 5125:return xE;case 36294:return yE;case 36295:return SE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return AE}}function bE(t,e){t.uniform1fv(this.addr,e)}function RE(t,e){const n=Fs(e,this.size,2);t.uniform2fv(this.addr,n)}function PE(t,e){const n=Fs(e,this.size,3);t.uniform3fv(this.addr,n)}function LE(t,e){const n=Fs(e,this.size,4);t.uniform4fv(this.addr,n)}function NE(t,e){const n=Fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DE(t,e){const n=Fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function UE(t,e){const n=Fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IE(t,e){t.uniform1iv(this.addr,e)}function FE(t,e){t.uniform2iv(this.addr,e)}function OE(t,e){t.uniform3iv(this.addr,e)}function kE(t,e){t.uniform4iv(this.addr,e)}function zE(t,e){t.uniform1uiv(this.addr,e)}function BE(t,e){t.uniform2uiv(this.addr,e)}function HE(t,e){t.uniform3uiv(this.addr,e)}function VE(t,e){t.uniform4uiv(this.addr,e)}function GE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Y0,s[o])}function WE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||K0,s[o])}function jE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Z0,s[o])}function XE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||q0,s[o])}function $E(t){switch(t){case 5126:return bE;case 35664:return RE;case 35665:return PE;case 35666:return LE;case 35674:return NE;case 35675:return DE;case 35676:return UE;case 5124:case 35670:return IE;case 35667:case 35671:return FE;case 35668:case 35672:return OE;case 35669:case 35673:return kE;case 5125:return zE;case 36294:return BE;case 36295:return HE;case 36296:return VE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return WE;case 35680:case 36300:case 36308:case 36293:return jE;case 36289:case 36303:case 36311:case 36292:return XE}}class YE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=CE(n.type)}}class qE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$E(n.type)}}class KE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Wp(t,e){t.seq.push(e),t.map[e.id]=e}function ZE(t,e,n){const i=t.name,r=i.length;for(Yc.lastIndex=0;;){const s=Yc.exec(i),o=Yc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wp(n,c===void 0?new YE(a,t,e):new qE(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new KE(a),Wp(n,h)),n=h}}}class el{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ZE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const QE=37297;let JE=0;function ew(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Xp=new Ie;function tw(t){Xe._getMatrix(Xp,Xe.workingColorSpace,t);const e=`mat3( ${Xp.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Wl:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $p(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ew(t.getShaderSource(e),o)}else return r}function nw(t,e){const n=tw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function iw(t,e){let n;switch(e){case vy:n="Linear";break;case _y:n="Reinhard";break;case xy:n="Cineon";break;case yy:n="ACESFilmic";break;case My:n="AgX";break;case Ey:n="Neutral";break;case Sy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pa=new k;function rw(){Xe.getLuminanceCoefficients(Pa);const t=Pa.x.toFixed(4),e=Pa.y.toFixed(4),n=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function ow(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function so(t){return t!==""}function Yp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(t){return t.replace(lw,uw)}const cw=new Map;function uw(t,e){let n=Oe[e];if(n===void 0){const i=cw.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dd(n)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(t){return t.replace(dw,fw)}function fw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===y0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Kx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function pw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Cs:case bs:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function gw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case S0:e="ENVMAP_BLENDING_MULTIPLY";break;case my:e="ENVMAP_BLENDING_MIX";break;case gy:e="ENVMAP_BLENDING_ADD";break}return e}function vw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function _w(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hw(n),c=pw(n),d=mw(n),h=gw(n),f=vw(n),p=sw(n),g=ow(s),y=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(so).join(`
`),u.length>0&&(u+=`
`)):(m=[Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),u=[Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Yi?iw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,nw("linearToOutputTexel",n.outputColorSpace),rw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(so).join(`
`)),o=Dd(o),o=Yp(o,n),o=qp(o,n),a=Dd(a),a=Yp(a,n),a=qp(a,n),o=Kp(o),a=Kp(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=v+m+o,S=v+u+a,L=jp(r,r.VERTEX_SHADER,_),b=jp(r,r.FRAGMENT_SHADER,S);r.attachShader(y,L),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(P){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(y).trim(),V=r.getShaderInfoLog(L).trim(),K=r.getShaderInfoLog(b).trim();let Z=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,L,b);else{const ee=$p(r,L,"vertex"),N=$p(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+ee+`
`+N)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(V===""||K==="")&&(q=!1);q&&(P.diagnostics={runnable:Z,programLog:Y,vertexShader:{log:V,prefix:m},fragmentShader:{log:K,prefix:u}})}r.deleteShader(L),r.deleteShader(b),R=new el(r,y),A=aw(r,y)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,QE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=b,this}let xw=0;class yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Sw(e),n.set(e,i)),i}}class Sw{constructor(e){this.id=xw++,this.code=e,this.usedTimes=0}}function Mw(t,e,n,i,r,s,o){const a=new O0,l=new yw,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,E,P,Y,V){const K=Y.fog,Z=V.geometry,q=A.isMeshStandardMaterial?Y.environment:null,ee=(A.isMeshStandardMaterial?n:e).get(A.envMap||q),N=ee&&ee.mapping===Gl?ee.image.height:null,W=g[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=Q!==void 0?Q.length:0;let Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let Ge,$,ie,_e;if(W){const Ze=jn[W];Ge=Ze.vertexShader,$=Ze.fragmentShader}else Ge=A.vertexShader,$=A.fragmentShader,l.update(A),ie=l.getVertexShaderID(A),_e=l.getFragmentShaderID(A);const ae=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Pe=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,st=!!A.map,We=!!A.matcap,dt=!!ee,I=!!A.aoMap,$t=!!A.lightMap,Be=!!A.bumpMap,He=!!A.normalMap,Ae=!!A.displacementMap,ce=!!A.emissiveMap,re=!!A.metalnessMap,T=!!A.roughnessMap,x=A.anisotropy>0,D=A.clearcoat>0,G=A.dispersion>0,j=A.iridescence>0,z=A.sheen>0,he=A.transmission>0,oe=x&&!!A.anisotropyMap,ue=D&&!!A.clearcoatMap,ze=D&&!!A.clearcoatNormalMap,ne=D&&!!A.clearcoatRoughnessMap,ge=j&&!!A.iridescenceMap,Ce=j&&!!A.iridescenceThicknessMap,Re=z&&!!A.sheenColorMap,xe=z&&!!A.sheenRoughnessMap,je=!!A.specularMap,Fe=!!A.specularColorMap,nt=!!A.specularIntensityMap,U=he&&!!A.transmissionMap,fe=he&&!!A.thicknessMap,X=!!A.gradientMap,J=!!A.alphaMap,ve=A.alphaTest>0,pe=!!A.alphaHash,De=!!A.extensions;let mt=Yi;A.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(mt=t.toneMapping);const Nt={shaderID:W,shaderType:A.type,shaderName:A.name,vertexShader:Ge,fragmentShader:$,defines:A.defines,customVertexShaderID:ie,customFragmentShaderID:_e,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&V.instanceColor!==null,instancingMorph:Pe&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Dr,alphaToCoverage:!!A.alphaToCoverage,map:st,matcap:We,envMap:dt,envMapMode:dt&&ee.mapping,envMapCubeUVHeight:N,aoMap:I,lightMap:$t,bumpMap:Be,normalMap:He,displacementMap:f&&Ae,emissiveMap:ce,normalMapObjectSpace:He&&A.normalMapType===by,normalMapTangentSpace:He&&A.normalMapType===Cy,metalnessMap:re,roughnessMap:T,anisotropy:x,anisotropyMap:oe,clearcoat:D,clearcoatMap:ue,clearcoatNormalMap:ze,clearcoatRoughnessMap:ne,dispersion:G,iridescence:j,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:z,sheenColorMap:Re,sheenRoughnessMap:xe,specularMap:je,specularColorMap:Fe,specularIntensityMap:nt,transmission:he,transmissionMap:U,thicknessMap:fe,gradientMap:X,opaque:A.transparent===!1&&A.blending===gs&&A.alphaToCoverage===!1,alphaMap:J,alphaTest:ve,alphaHash:pe,combine:A.combine,mapUv:st&&y(A.map.channel),aoMapUv:I&&y(A.aoMap.channel),lightMapUv:$t&&y(A.lightMap.channel),bumpMapUv:Be&&y(A.bumpMap.channel),normalMapUv:He&&y(A.normalMap.channel),displacementMapUv:Ae&&y(A.displacementMap.channel),emissiveMapUv:ce&&y(A.emissiveMap.channel),metalnessMapUv:re&&y(A.metalnessMap.channel),roughnessMapUv:T&&y(A.roughnessMap.channel),anisotropyMapUv:oe&&y(A.anisotropyMap.channel),clearcoatMapUv:ue&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:ze&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:xe&&y(A.sheenRoughnessMap.channel),specularMapUv:je&&y(A.specularMap.channel),specularColorMapUv:Fe&&y(A.specularColorMap.channel),specularIntensityMapUv:nt&&y(A.specularIntensityMap.channel),transmissionMapUv:U&&y(A.transmissionMap.channel),thicknessMapUv:fe&&y(A.thicknessMap.channel),alphaMapUv:J&&y(A.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(He||x),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(st||J),fog:!!K,useFog:A.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:st&&A.map.isVideoTexture===!0&&Xe.getTransfer(A.map.colorSpace)===et,decodeVideoTextureEmissive:ce&&A.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(A.emissiveMap.colorSpace)===et,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===$n,flipSided:A.side===nn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:De&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&A.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function u(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)E.push(P),E.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(v(E,A),_(E,A),E.push(t.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function v(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function _(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),A.push(a.mask)}function S(A){const E=g[A.type];let P;if(E){const Y=jn[E];P=rS.clone(Y.uniforms)}else P=A.uniforms;return P}function L(A,E){let P;for(let Y=0,V=d.length;Y<V;Y++){const K=d[Y];if(K.cacheKey===E){P=K,++P.usedTimes;break}}return P===void 0&&(P=new _w(t,E,A,s),d.push(P)),P}function b(A){if(--A.usedTimes===0){const E=d.indexOf(A);d[E]=d[d.length-1],d.pop(),A.destroy()}}function C(A){l.remove(A)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:L,releaseProgram:b,releaseShaderCache:C,programs:d,dispose:R}}function Ew(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ww(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,g,y,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=y,u.group=m),e++,u}function a(h,f,p,g,y,m){const u=o(h,f,p,g,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,f,p,g,y,m){const u=o(h,f,p,g,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||ww),i.length>1&&i.sort(f||Qp),r.length>1&&r.sort(f||Qp)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function Tw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jp,t.set(i,[o])):r>=s.length?(o=new Jp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Aw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new tt};break;case"SpotLight":n={position:new k,direction:new k,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function Cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bw=0;function Rw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Pw(t){const e=new Aw,n=Cw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new xt,o=new xt;function a(c){let d=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,y=0,m=0,u=0,v=0,_=0,S=0,L=0,b=0,C=0;c.sort(Rw);for(let A=0,E=c.length;A<E;A++){const P=c[A],Y=P.color,V=P.intensity,K=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=Y.r*V,h+=Y.g*V,f+=Y.b*V;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],V);C++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,N=n.get(P);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=q,p++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(Y).multiplyScalar(V),q.distance=K,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[y]=q;const ee=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,ee.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[y]=ee.matrix,P.castShadow){const N=n.get(P);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=Z,S++}y++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(Y).multiplyScalar(V),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const ee=P.shadow,N=n.get(P);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,N.shadowCameraNear=ee.camera.near,N.shadowCameraFar=ee.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(V),q.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[u]=q,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==S||R.numSpotMaps!==L||R.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+L-b,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,R.directionalLength=p,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=S,R.numSpotMaps=L,R.numLightProbes=C,i.version=bw++)}function l(c,d){let h=0,f=0,p=0,g=0,y=0;const m=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const _=c[u];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function em(t){const e=new Pw(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Lw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new em(t),e.set(r,[a])):s>=o.length?(a=new em(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Nw extends jl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dw extends jl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fw(t,e,n){let i=new j0;const r=new Je,s=new Je,o=new _t,a=new Nw({depthPacking:Ay}),l=new Dw,c={},d=n.maxTextureSize,h={[Zi]:nn,[nn]:Zi,[$n]:$n},f=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Uw,fragmentShader:Iw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ur;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Yn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y0;let u=this.type;this.render=function(b,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const A=t.getRenderTarget(),E=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending($i),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const V=u!==si&&this.type===si,K=u===si&&this.type!==si;for(let Z=0,q=b.length;Z<q;Z++){const ee=b[Z],N=ee.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const W=N.getFrameExtents();if(r.multiply(W),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/W.x),r.x=s.x*W.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/W.y),r.y=s.y*W.y,N.mapSize.y=s.y)),N.map===null||V===!0||K===!0){const le=this.type!==si?{minFilter:zn,magFilter:zn}:{};N.map!==null&&N.map.dispose(),N.map=new Pr(r.x,r.y,le),N.map.texture.name=ee.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Q=N.getViewportCount();for(let le=0;le<Q;le++){const Se=N.getViewport(le);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),Y.viewport(o),N.updateMatrices(ee,le),i=N.getFrustum(),S(C,R,N.camera,ee,this.type)}N.isPointLightShadow!==!0&&this.type===si&&v(N,R),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(A,E,P)};function v(b,C){const R=e.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pr(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,R,f,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,R,p,y,null)}function _(b,C,R,A){let E=null;const P=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)E=P;else if(E=R.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Y=E.uuid,V=C.uuid;let K=c[Y];K===void 0&&(K={},c[Y]=K);let Z=K[V];Z===void 0&&(Z=E.clone(),K[V]=Z,C.addEventListener("dispose",L)),E=Z}if(E.visible=C.visible,E.wireframe=C.wireframe,A===si?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=t.properties.get(E);Y.light=R}return E}function S(b,C,R,A,E){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===si)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const V=e.update(b),K=b.material;if(Array.isArray(K)){const Z=V.groups;for(let q=0,ee=Z.length;q<ee;q++){const N=Z[q],W=K[N.materialIndex];if(W&&W.visible){const Q=_(b,W,A,E);b.onBeforeShadow(t,b,C,R,V,Q,N),t.renderBufferDirect(R,null,V,Q,b,N),b.onAfterShadow(t,b,C,R,V,Q,N)}}}else if(K.visible){const Z=_(b,K,A,E);b.onBeforeShadow(t,b,C,R,V,Z,null),t.renderBufferDirect(R,null,V,Z,b,null),b.onAfterShadow(t,b,C,R,V,Z,null)}}const Y=b.children;for(let V=0,K=Y.length;V<K;V++)S(Y[V],C,R,A,E)}function L(b){b.target.removeEventListener("dispose",L);for(const R in c){const A=c[R],E=b.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}const Ow={[qu]:Ku,[Zu]:ed,[Qu]:td,[As]:Ju,[Ku]:qu,[ed]:Zu,[td]:Qu,[Ju]:As};function kw(t,e){function n(){let U=!1;const fe=new _t;let X=null;const J=new _t(0,0,0,0);return{setMask:function(ve){X!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),X=ve)},setLocked:function(ve){U=ve},setClear:function(ve,pe,De,mt,Nt){Nt===!0&&(ve*=mt,pe*=mt,De*=mt),fe.set(ve,pe,De,mt),J.equals(fe)===!1&&(t.clearColor(ve,pe,De,mt),J.copy(fe))},reset:function(){U=!1,X=null,J.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,X=null,J=null,ve=null;return{setReversed:function(pe){if(fe!==pe){const De=e.get("EXT_clip_control");fe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const mt=ve;ve=null,this.setClear(mt)}fe=pe},getReversed:function(){return fe},setTest:function(pe){pe?ae(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(pe){X!==pe&&!U&&(t.depthMask(pe),X=pe)},setFunc:function(pe){if(fe&&(pe=Ow[pe]),J!==pe){switch(pe){case qu:t.depthFunc(t.NEVER);break;case Ku:t.depthFunc(t.ALWAYS);break;case Zu:t.depthFunc(t.LESS);break;case As:t.depthFunc(t.LEQUAL);break;case Qu:t.depthFunc(t.EQUAL);break;case Ju:t.depthFunc(t.GEQUAL);break;case ed:t.depthFunc(t.GREATER);break;case td:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=pe}},setLocked:function(pe){U=pe},setClear:function(pe){ve!==pe&&(fe&&(pe=1-pe),t.clearDepth(pe),ve=pe)},reset:function(){U=!1,X=null,J=null,ve=null,fe=!1}}}function r(){let U=!1,fe=null,X=null,J=null,ve=null,pe=null,De=null,mt=null,Nt=null;return{setTest:function(Ze){U||(Ze?ae(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(Ze){fe!==Ze&&!U&&(t.stencilMask(Ze),fe=Ze)},setFunc:function(Ze,An,Qn){(X!==Ze||J!==An||ve!==Qn)&&(t.stencilFunc(Ze,An,Qn),X=Ze,J=An,ve=Qn)},setOp:function(Ze,An,Qn){(pe!==Ze||De!==An||mt!==Qn)&&(t.stencilOp(Ze,An,Qn),pe=Ze,De=An,mt=Qn)},setLocked:function(Ze){U=Ze},setClear:function(Ze){Nt!==Ze&&(t.clearStencil(Ze),Nt=Ze)},reset:function(){U=!1,fe=null,X=null,J=null,ve=null,pe=null,De=null,mt=null,Nt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,u=null,v=null,_=null,S=null,L=null,b=null,C=new tt(0,0,0),R=0,A=!1,E=null,P=null,Y=null,V=null,K=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(N)[1]),q=ee>=1):N.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),q=ee>=2);let W=null,Q={};const le=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Ge=new _t().fromArray(le),$=new _t().fromArray(Se);function ie(U,fe,X,J){const ve=new Uint8Array(4),pe=t.createTexture();t.bindTexture(U,pe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<X;De++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(fe+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return pe}const _e={};_e[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(As),Be(!1),He(rp),ae(t.CULL_FACE),I($i);function ae(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function be(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Pe(U,fe){return h[U]!==fe?(t.bindFramebuffer(U,fe),h[U]=fe,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ne(U,fe){let X=p,J=!1;if(U){X=f.get(fe),X===void 0&&(X=[],f.set(fe,X));const ve=U.textures;if(X.length!==ve.length||X[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,De=ve.length;pe<De;pe++)X[pe]=t.COLOR_ATTACHMENT0+pe;X.length=ve.length,J=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,J=!0);J&&t.drawBuffers(X)}function st(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const We={[pr]:t.FUNC_ADD,[Qx]:t.FUNC_SUBTRACT,[Jx]:t.FUNC_REVERSE_SUBTRACT};We[ey]=t.MIN,We[ty]=t.MAX;const dt={[ny]:t.ZERO,[iy]:t.ONE,[ry]:t.SRC_COLOR,[$u]:t.SRC_ALPHA,[uy]:t.SRC_ALPHA_SATURATE,[ly]:t.DST_COLOR,[oy]:t.DST_ALPHA,[sy]:t.ONE_MINUS_SRC_COLOR,[Yu]:t.ONE_MINUS_SRC_ALPHA,[cy]:t.ONE_MINUS_DST_COLOR,[ay]:t.ONE_MINUS_DST_ALPHA,[dy]:t.CONSTANT_COLOR,[fy]:t.ONE_MINUS_CONSTANT_COLOR,[hy]:t.CONSTANT_ALPHA,[py]:t.ONE_MINUS_CONSTANT_ALPHA};function I(U,fe,X,J,ve,pe,De,mt,Nt,Ze){if(U===$i){y===!0&&(be(t.BLEND),y=!1);return}if(y===!1&&(ae(t.BLEND),y=!0),U!==Zx){if(U!==m||Ze!==A){if((u!==pr||S!==pr)&&(t.blendEquation(t.FUNC_ADD),u=pr,S=pr),Ze)switch(U){case gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sp:t.blendFunc(t.ONE,t.ONE);break;case op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ap:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ap:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,_=null,L=null,b=null,C.set(0,0,0),R=0,m=U,A=Ze}return}ve=ve||fe,pe=pe||X,De=De||J,(fe!==u||ve!==S)&&(t.blendEquationSeparate(We[fe],We[ve]),u=fe,S=ve),(X!==v||J!==_||pe!==L||De!==b)&&(t.blendFuncSeparate(dt[X],dt[J],dt[pe],dt[De]),v=X,_=J,L=pe,b=De),(mt.equals(C)===!1||Nt!==R)&&(t.blendColor(mt.r,mt.g,mt.b,Nt),C.copy(mt),R=Nt),m=U,A=!1}function $t(U,fe){U.side===$n?be(t.CULL_FACE):ae(t.CULL_FACE);let X=U.side===nn;fe&&(X=!X),Be(X),U.blending===gs&&U.transparent===!1?I($i):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){E!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),E=U)}function He(U){U!==Yx?(ae(t.CULL_FACE),U!==P&&(U===rp?t.cullFace(t.BACK):U===qx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),P=U}function Ae(U){U!==Y&&(q&&t.lineWidth(U),Y=U)}function ce(U,fe,X){U?(ae(t.POLYGON_OFFSET_FILL),(V!==fe||K!==X)&&(t.polygonOffset(fe,X),V=fe,K=X)):be(t.POLYGON_OFFSET_FILL)}function re(U){U?ae(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function T(U){U===void 0&&(U=t.TEXTURE0+Z-1),W!==U&&(t.activeTexture(U),W=U)}function x(U,fe,X){X===void 0&&(W===null?X=t.TEXTURE0+Z-1:X=W);let J=Q[X];J===void 0&&(J={type:void 0,texture:void 0},Q[X]=J),(J.type!==U||J.texture!==fe)&&(W!==X&&(t.activeTexture(X),W=X),t.bindTexture(U,fe||_e[U]),J.type=U,J.texture=fe)}function D(){const U=Q[W];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function G(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){Ge.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ge.copy(U))}function xe(U){$.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function je(U,fe){let X=c.get(fe);X===void 0&&(X=new WeakMap,c.set(fe,X));let J=X.get(U);J===void 0&&(J=t.getUniformBlockIndex(fe,U.name),X.set(U,J))}function Fe(U,fe){const J=c.get(fe).get(U);l.get(fe)!==J&&(t.uniformBlockBinding(fe,J,U.__bindingPointIndex),l.set(fe,J))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},W=null,Q={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,u=null,v=null,_=null,S=null,L=null,b=null,C=new tt(0,0,0),R=0,A=!1,E=null,P=null,Y=null,V=null,K=null,Ge.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:be,bindFramebuffer:Pe,drawBuffers:Ne,useProgram:st,setBlending:I,setMaterial:$t,setFlipSided:Be,setCullFace:He,setLineWidth:Ae,setPolygonOffset:ce,setScissorTest:re,activeTexture:T,bindTexture:x,unbindTexture:D,compressedTexImage2D:G,compressedTexImage3D:j,texImage2D:ge,texImage3D:Ce,updateUBOMapping:je,uniformBlockBinding:Fe,texStorage2D:ze,texStorage3D:ne,texSubImage2D:z,texSubImage3D:he,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Re,viewport:xe,reset:nt}}function tm(t,e,n,i){const r=zw(i);switch(n){case A0:return t*e;case b0:return t*e;case R0:return t*e*2;case P0:return t*e/r.components*r.byteLength;case If:return t*e/r.components*r.byteLength;case L0:return t*e*2/r.components*r.byteLength;case Ff:return t*e*2/r.components*r.byteLength;case C0:return t*e*3/r.components*r.byteLength;case Fn:return t*e*4/r.components*r.byteLength;case Of:return t*e*4/r.components*r.byteLength;case qa:case Ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Za:case Qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ad:case cd:return Math.max(t,16)*Math.max(e,8)/4;case od:case ld:return Math.max(t,8)*Math.max(e,8)/2;case ud:case dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case _d:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case yd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Td:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ja:case Cd:case bd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case N0:case Rd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pd:case Ld:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zw(t){switch(t){case xi:case E0:return{byteLength:1,components:1};case Do:case w0:case zo:return{byteLength:2,components:1};case Df:case Uf:return{byteLength:2,components:4};case Rr:case Nf:case di:return{byteLength:4,components:1};case T0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Bw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):Al("canvas")}function y(T,x,D){let G=1;const j=re(T);if((j.width>D||j.height>D)&&(G=D/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const z=Math.floor(G*j.width),he=Math.floor(G*j.height);h===void 0&&(h=g(z,he));const oe=x?g(z,he):h;return oe.width=z,oe.height=he,oe.getContext("2d").drawImage(T,0,0,z,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+z+"x"+he+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){t.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(T,x,D,G,j=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let z=x;if(x===t.RED&&(D===t.FLOAT&&(z=t.R32F),D===t.HALF_FLOAT&&(z=t.R16F),D===t.UNSIGNED_BYTE&&(z=t.R8)),x===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.R8UI),D===t.UNSIGNED_SHORT&&(z=t.R16UI),D===t.UNSIGNED_INT&&(z=t.R32UI),D===t.BYTE&&(z=t.R8I),D===t.SHORT&&(z=t.R16I),D===t.INT&&(z=t.R32I)),x===t.RG&&(D===t.FLOAT&&(z=t.RG32F),D===t.HALF_FLOAT&&(z=t.RG16F),D===t.UNSIGNED_BYTE&&(z=t.RG8)),x===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.RG8UI),D===t.UNSIGNED_SHORT&&(z=t.RG16UI),D===t.UNSIGNED_INT&&(z=t.RG32UI),D===t.BYTE&&(z=t.RG8I),D===t.SHORT&&(z=t.RG16I),D===t.INT&&(z=t.RG32I)),x===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.RGB8UI),D===t.UNSIGNED_SHORT&&(z=t.RGB16UI),D===t.UNSIGNED_INT&&(z=t.RGB32UI),D===t.BYTE&&(z=t.RGB8I),D===t.SHORT&&(z=t.RGB16I),D===t.INT&&(z=t.RGB32I)),x===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(z=t.RGBA16UI),D===t.UNSIGNED_INT&&(z=t.RGBA32UI),D===t.BYTE&&(z=t.RGBA8I),D===t.SHORT&&(z=t.RGBA16I),D===t.INT&&(z=t.RGBA32I)),x===t.RGB&&D===t.UNSIGNED_INT_5_9_9_9_REV&&(z=t.RGB9_E5),x===t.RGBA){const he=j?Wl:Xe.getTransfer(G);D===t.FLOAT&&(z=t.RGBA32F),D===t.HALF_FLOAT&&(z=t.RGBA16F),D===t.UNSIGNED_BYTE&&(z=he===et?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(z=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(z=t.RGB5_A1)}return(z===t.R16F||z===t.R32F||z===t.RG16F||z===t.RG32F||z===t.RGBA16F||z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function S(T,x){let D;return T?x===null||x===Rr||x===Rs?D=t.DEPTH24_STENCIL8:x===di?D=t.DEPTH32F_STENCIL8:x===Do&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rr||x===Rs?D=t.DEPTH_COMPONENT24:x===di?D=t.DEPTH_COMPONENT32F:x===Do&&(D=t.DEPTH_COMPONENT16),D}function L(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==zn&&T.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){const x=T.target;x.removeEventListener("dispose",b),R(x),x.isVideoTexture&&d.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),E(x)}function R(T){const x=i.get(T);if(x.__webglInit===void 0)return;const D=T.source,G=f.get(D);if(G){const j=G[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(T),Object.keys(G).length===0&&f.delete(D)}i.remove(T)}function A(T){const x=i.get(T);t.deleteTexture(x.__webglTexture);const D=T.source,G=f.get(D);delete G[x.__cacheKey],o.memory.textures--}function E(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let j=0;j<x.__webglFramebuffer[G].length;j++)t.deleteFramebuffer(x.__webglFramebuffer[G][j]);else t.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)t.deleteFramebuffer(x.__webglFramebuffer[G]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=T.textures;for(let G=0,j=D.length;G<j;G++){const z=i.get(D[G]);z.__webglTexture&&(t.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(D[G])}i.remove(T)}let P=0;function Y(){P=0}function V(){const T=P;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function K(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Z(T,x){const D=i.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,T,x);return}}n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+x)}function q(T,x){const D=i.get(T);if(T.version>0&&D.__version!==T.version){$(D,T,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+x)}function ee(T,x){const D=i.get(T);if(T.version>0&&D.__version!==T.version){$(D,T,x);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+x)}function N(T,x){const D=i.get(T);if(T.version>0&&D.__version!==T.version){ie(D,T,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+x)}const W={[rd]:t.REPEAT,[xr]:t.CLAMP_TO_EDGE,[sd]:t.MIRRORED_REPEAT},Q={[zn]:t.NEAREST,[wy]:t.NEAREST_MIPMAP_NEAREST,[ua]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[yc]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},le={[Ry]:t.NEVER,[Iy]:t.ALWAYS,[Py]:t.LESS,[D0]:t.LEQUAL,[Ly]:t.EQUAL,[Uy]:t.GEQUAL,[Ny]:t.GREATER,[Dy]:t.NOTEQUAL};function Se(T,x){if(x.type===di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===yc||x.magFilter===ua||x.magFilter===yr||x.minFilter===Qt||x.minFilter===yc||x.minFilter===ua||x.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,W[x.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,W[x.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,W[x.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Q[x.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zn||x.minFilter!==ua&&x.minFilter!==yr||x.type===di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ge(T,x){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",b));const G=x.source;let j=f.get(G);j===void 0&&(j={},f.set(G,j));const z=K(x);if(z!==T.__cacheKey){j[z]===void 0&&(j[z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),j[z].usedTimes++;const he=j[T.__cacheKey];he!==void 0&&(j[T.__cacheKey].usedTimes--,he.usedTimes===0&&A(x)),T.__cacheKey=z,T.__webglTexture=j[z].texture}return D}function $(T,x,D){let G=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=t.TEXTURE_3D);const j=Ge(T,x),z=x.source;n.bindTexture(G,T.__webglTexture,t.TEXTURE0+D);const he=i.get(z);if(z.version!==he.__version||j===!0){n.activeTexture(t.TEXTURE0+D);const oe=Xe.getPrimaries(Xe.workingColorSpace),ue=x.colorSpace===li?null:Xe.getPrimaries(x.colorSpace),ze=x.colorSpace===li||oe===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ne=y(x.image,!1,r.maxTextureSize);ne=ce(x,ne);const ge=s.convert(x.format,x.colorSpace),Ce=s.convert(x.type);let Re=_(x.internalFormat,ge,Ce,x.colorSpace,x.isVideoTexture);Se(G,x);let xe;const je=x.mipmaps,Fe=x.isVideoTexture!==!0,nt=he.__version===void 0||j===!0,U=z.dataReady,fe=L(x,ne);if(x.isDepthTexture)Re=S(x.format===Ps,x.type),nt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Re,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,ge,Ce,null));else if(x.isDataTexture)if(je.length>0){Fe&&nt&&n.texStorage2D(t.TEXTURE_2D,fe,Re,je[0].width,je[0].height);for(let X=0,J=je.length;X<J;X++)xe=je[X],Fe?U&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,xe.width,xe.height,ge,Ce,xe.data):n.texImage2D(t.TEXTURE_2D,X,Re,xe.width,xe.height,0,ge,Ce,xe.data);x.generateMipmaps=!1}else Fe?(nt&&n.texStorage2D(t.TEXTURE_2D,fe,Re,ne.width,ne.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,Ce,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,ge,Ce,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Re,je[0].width,je[0].height,ne.depth);for(let X=0,J=je.length;X<J;X++)if(xe=je[X],x.format!==Fn)if(ge!==null)if(Fe){if(U)if(x.layerUpdates.size>0){const ve=tm(xe.width,xe.height,x.format,x.type);for(const pe of x.layerUpdates){const De=xe.data.subarray(pe*ve/xe.data.BYTES_PER_ELEMENT,(pe+1)*ve/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,pe,xe.width,xe.height,1,ge,De)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,ne.depth,ge,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Re,xe.width,xe.height,ne.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,ne.depth,ge,Ce,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Re,xe.width,xe.height,ne.depth,0,ge,Ce,xe.data)}else{Fe&&nt&&n.texStorage2D(t.TEXTURE_2D,fe,Re,je[0].width,je[0].height);for(let X=0,J=je.length;X<J;X++)xe=je[X],x.format!==Fn?ge!==null?Fe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,xe.width,xe.height,ge,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Re,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,xe.width,xe.height,ge,Ce,xe.data):n.texImage2D(t.TEXTURE_2D,X,Re,xe.width,xe.height,0,ge,Ce,xe.data)}else if(x.isDataArrayTexture)if(Fe){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Re,ne.width,ne.height,ne.depth),U)if(x.layerUpdates.size>0){const X=tm(ne.width,ne.height,x.format,x.type);for(const J of x.layerUpdates){const ve=ne.data.subarray(J*X/ne.data.BYTES_PER_ELEMENT,(J+1)*X/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ge,Ce,ve)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ce,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,ge,Ce,ne.data);else if(x.isData3DTexture)Fe?(nt&&n.texStorage3D(t.TEXTURE_3D,fe,Re,ne.width,ne.height,ne.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ce,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,ge,Ce,ne.data);else if(x.isFramebufferTexture){if(nt)if(Fe)n.texStorage2D(t.TEXTURE_2D,fe,Re,ne.width,ne.height);else{let X=ne.width,J=ne.height;for(let ve=0;ve<fe;ve++)n.texImage2D(t.TEXTURE_2D,ve,Re,X,J,0,ge,Ce,null),X>>=1,J>>=1}}else if(je.length>0){if(Fe&&nt){const X=re(je[0]);n.texStorage2D(t.TEXTURE_2D,fe,Re,X.width,X.height)}for(let X=0,J=je.length;X<J;X++)xe=je[X],Fe?U&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge,Ce,xe):n.texImage2D(t.TEXTURE_2D,X,Re,ge,Ce,xe);x.generateMipmaps=!1}else if(Fe){if(nt){const X=re(ne);n.texStorage2D(t.TEXTURE_2D,fe,Re,X.width,X.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ce,ne)}else n.texImage2D(t.TEXTURE_2D,0,Re,ge,Ce,ne);m(x)&&u(G),he.__version=z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ie(T,x,D){if(x.image.length!==6)return;const G=Ge(T,x),j=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+D);const z=i.get(j);if(j.version!==z.__version||G===!0){n.activeTexture(t.TEXTURE0+D);const he=Xe.getPrimaries(Xe.workingColorSpace),oe=x.colorSpace===li?null:Xe.getPrimaries(x.colorSpace),ue=x.colorSpace===li||he===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ze=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!ze&&!ne?ge[J]=y(x.image[J],!0,r.maxCubemapSize):ge[J]=ne?x.image[J].image:x.image[J],ge[J]=ce(x,ge[J]);const Ce=ge[0],Re=s.convert(x.format,x.colorSpace),xe=s.convert(x.type),je=_(x.internalFormat,Re,xe,x.colorSpace),Fe=x.isVideoTexture!==!0,nt=z.__version===void 0||G===!0,U=j.dataReady;let fe=L(x,Ce);Se(t.TEXTURE_CUBE_MAP,x);let X;if(ze){Fe&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,je,Ce.width,Ce.height);for(let J=0;J<6;J++){X=ge[J].mipmaps;for(let ve=0;ve<X.length;ve++){const pe=X[ve];x.format!==Fn?Re!==null?Fe?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,pe.width,pe.height,Re,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,pe.width,pe.height,Re,xe,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,je,pe.width,pe.height,0,Re,xe,pe.data)}}}else{if(X=x.mipmaps,Fe&&nt){X.length>0&&fe++;const J=re(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,je,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Re,xe,ge[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,ge[J].width,ge[J].height,0,Re,xe,ge[J].data);for(let ve=0;ve<X.length;ve++){const De=X[ve].image[J].image;Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,De.width,De.height,Re,xe,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,je,De.width,De.height,0,Re,xe,De.data)}}else{Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,xe,ge[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,Re,xe,ge[J]);for(let ve=0;ve<X.length;ve++){const pe=X[ve];Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Re,xe,pe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,je,Re,xe,pe.image[J])}}}m(x)&&u(t.TEXTURE_CUBE_MAP),z.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _e(T,x,D,G,j,z){const he=s.convert(D.format,D.colorSpace),oe=s.convert(D.type),ue=_(D.internalFormat,he,oe,D.colorSpace),ze=i.get(x),ne=i.get(D);if(ne.__renderTarget=x,!ze.__hasExternalTextures){const ge=Math.max(1,x.width>>z),Ce=Math.max(1,x.height>>z);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,z,ue,ge,Ce,x.depth,0,he,oe,null):n.texImage2D(j,z,ue,ge,Ce,0,he,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),He(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,j,ne.__webglTexture,0,Be(x)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,j,ne.__webglTexture,z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(T,x,D){if(t.bindRenderbuffer(t.RENDERBUFFER,T),x.depthBuffer){const G=x.depthTexture,j=G&&G.isDepthTexture?G.type:null,z=S(x.stencilBuffer,j),he=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=Be(x);He(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,z,x.width,x.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,z,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,T)}else{const G=x.textures;for(let j=0;j<G.length;j++){const z=G[j],he=s.convert(z.format,z.colorSpace),oe=s.convert(z.type),ue=_(z.internalFormat,he,oe,z.colorSpace),ze=Be(x);D&&He(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,ue,x.width,x.height):He(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,ue,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ue,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const j=G.__webglTexture,z=Be(x);if(x.depthTexture.format===vs)He(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(x.depthTexture.format===Ps)He(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const x=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=G}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");be(x.__webglFramebuffer,T)}else if(D){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=t.createRenderbuffer(),ae(x.__webglDepthbuffer[G],T,!1);else{const j=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,z),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ae(x.__webglDepthbuffer,T,!1);else{const G=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,G,t.RENDERBUFFER,j)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(T,x,D){const G=i.get(T);x!==void 0&&_e(G.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&Pe(T)}function st(T){const x=T.texture,D=i.get(T),G=i.get(x);T.addEventListener("dispose",C);const j=T.textures,z=T.isWebGLCubeRenderTarget===!0,he=j.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=x.version,o.memory.textures++),z){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let ue=0;ue<x.mipmaps.length;ue++)D.__webglFramebuffer[oe][ue]=t.createFramebuffer()}else D.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)D.__webglFramebuffer[oe]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(he)for(let oe=0,ue=j.length;oe<ue;oe++){const ze=i.get(j[oe]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&He(T)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const ue=j[oe];D.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[oe]);const ze=s.convert(ue.format,ue.colorSpace),ne=s.convert(ue.type),ge=_(ue.internalFormat,ze,ne,ue.colorSpace,T.isXRRenderTarget===!0),Ce=Be(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ge,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,D.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(D.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(z){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Se(t.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)_e(D.__webglFramebuffer[oe][ue],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else _e(D.__webglFramebuffer[oe],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(x)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let oe=0,ue=j.length;oe<ue;oe++){const ze=j[oe],ne=i.get(ze);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),Se(t.TEXTURE_2D,ze),_e(D.__webglFramebuffer,T,ze,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),m(ze)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,G.__webglTexture),Se(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)_e(D.__webglFramebuffer[ue],T,x,t.COLOR_ATTACHMENT0,oe,ue);else _e(D.__webglFramebuffer,T,x,t.COLOR_ATTACHMENT0,oe,0);m(x)&&u(oe),n.unbindTexture()}T.depthBuffer&&Pe(T)}function We(T){const x=T.textures;for(let D=0,G=x.length;D<G;D++){const j=x[D];if(m(j)){const z=v(T),he=i.get(j).__webglTexture;n.bindTexture(z,he),u(z),n.unbindTexture()}}}const dt=[],I=[];function $t(T){if(T.samples>0){if(He(T)===!1){const x=T.textures,D=T.width,G=T.height;let j=t.COLOR_BUFFER_BIT;const z=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(T),oe=x.length>1;if(oe)for(let ue=0;ue<x.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const ze=i.get(x[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,D,G,0,0,D,G,j,t.NEAREST),l===!0&&(dt.length=0,I.length=0,dt.push(t.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(z),I.push(z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,dt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<x.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const ze=i.get(x[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Be(T){return Math.min(r.maxSamples,T.samples)}function He(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ae(T){const x=o.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function ce(T,x){const D=T.colorSpace,G=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Dr&&D!==li&&(Xe.getTransfer(D)===et?(G!==Fn||j!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function re(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=Y,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=N,this.rebindTextures=Ne,this.setupRenderTarget=st,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=He}function Hw(t,e){function n(i,r=li){let s;const o=Xe.getTransfer(r);if(i===xi)return t.UNSIGNED_BYTE;if(i===Df)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Uf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===T0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===E0)return t.BYTE;if(i===w0)return t.SHORT;if(i===Do)return t.UNSIGNED_SHORT;if(i===Nf)return t.INT;if(i===Rr)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===zo)return t.HALF_FLOAT;if(i===A0)return t.ALPHA;if(i===C0)return t.RGB;if(i===Fn)return t.RGBA;if(i===b0)return t.LUMINANCE;if(i===R0)return t.LUMINANCE_ALPHA;if(i===vs)return t.DEPTH_COMPONENT;if(i===Ps)return t.DEPTH_STENCIL;if(i===P0)return t.RED;if(i===If)return t.RED_INTEGER;if(i===L0)return t.RG;if(i===Ff)return t.RG_INTEGER;if(i===Of)return t.RGBA_INTEGER;if(i===qa||i===Ka||i===Za||i===Qa)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===od||i===ad||i===ld||i===cd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===od)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ad)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ld)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ud||i===dd||i===fd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ud||i===dd)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hd||i===pd||i===md||i===gd||i===vd||i===_d||i===xd||i===yd||i===Sd||i===Md||i===Ed||i===wd||i===Td||i===Ad)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===md)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_d)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Md)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ed)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wd)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Td)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ad)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===Cd||i===bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ja)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===N0||i===Rd||i===Pd||i===Ld)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ld)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Vw extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gw={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Si({vertexShader:Ww,fragmentShader:jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new Wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $w extends Is{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,g=null;const y=new Xw,m=n.getContextAttributes();let u=null,v=null;const _=[],S=[],L=new Je;let b=null;const C=new yn;C.viewport=new _t;const R=new yn;R.viewport=new _t;const A=[C,R],E=new Vw;let P=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=_[$];return ie===void 0&&(ie=new qc,_[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=_[$];return ie===void 0&&(ie=new qc,_[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=_[$];return ie===void 0&&(ie=new qc,_[$]=ie),ie.getHandSpace()};function V($){const ie=S.indexOf($.inputSource);if(ie===-1)return;const _e=_[ie];_e!==void 0&&(_e.update($.inputSource,$.frame,c||o),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Z);for(let $=0;$<_.length;$++){const ie=S[$];ie!==null&&(S[$]=null,_[$].disconnect(ie))}P=null,Y=null,y.reset(),e.setRenderTarget(u),p=null,f=null,h=null,r=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Pr(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,_e=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?Ps:vs,_e=m.stencil?Rs:Rr);const be={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Pr(f.textureWidth,f.textureHeight,{format:Fn,type:xi,depthTexture:new $0(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z($){for(let ie=0;ie<$.removed.length;ie++){const _e=$.removed[ie],ae=S.indexOf(_e);ae>=0&&(S[ae]=null,_[ae].disconnect(_e))}for(let ie=0;ie<$.added.length;ie++){const _e=$.added[ie];let ae=S.indexOf(_e);if(ae===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=S.length){S.push(_e),ae=Pe;break}else if(S[Pe]===null){S[Pe]=_e,ae=Pe;break}if(ae===-1)break}const be=_[ae];be&&be.connect(_e)}}const q=new k,ee=new k;function N($,ie,_e){q.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const ae=q.distanceTo(ee),be=ie.projectionMatrix.elements,Pe=_e.projectionMatrix.elements,Ne=be[14]/(be[10]-1),st=be[14]/(be[10]+1),We=(be[9]+1)/be[5],dt=(be[9]-1)/be[5],I=(be[8]-1)/be[0],$t=(Pe[8]+1)/Pe[0],Be=Ne*I,He=Ne*$t,Ae=ae/(-I+$t),ce=Ae*-I;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ce),$.translateZ(Ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const re=Ne+Ae,T=st+Ae,x=Be-ce,D=He+(ae-ce),G=We*st/T*re,j=dt*st/T*re;$.projectionMatrix.makePerspective(x,D,G,j,re,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function W($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,_e=$.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),E.near=R.near=C.near=ie,E.far=R.far=C.far=_e,(P!==E.near||Y!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,Y=E.far),C.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,E.layers.mask=C.layers.mask|R.layers.mask;const ae=$.parent,be=E.cameras;W(E,ae);for(let Pe=0;Pe<be.length;Pe++)W(be[Pe],ae);be.length===2?N(E,C,R):E.projectionMatrix.copy(C.projectionMatrix),Q($,E,ae)};function Q($,ie,_e){_e===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Nd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let le=null;function Se($,ie){if(d=ie.getViewerPose(c||o),g=ie,d!==null){const _e=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let Pe=0;Pe<_e.length;Pe++){const Ne=_e[Pe];let st=null;if(p!==null)st=p.getViewport(Ne);else{const dt=h.getViewSubImage(f,Ne);st=dt.viewport,Pe===0&&(e.setRenderTargetTextures(v,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(v))}let We=A[Pe];We===void 0&&(We=new yn,We.layers.enable(Pe),We.viewport=new _t,A[Pe]=We),We.matrix.fromArray(Ne.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ne.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(st.x,st.y,st.width,st.height),Pe===0&&(E.matrix.copy(We.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(We)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Pe=h.getDepthInformation(_e[0]);Pe&&Pe.isValid&&Pe.texture&&y.init(e,Pe,r.renderState)}}for(let _e=0;_e<_.length;_e++){const ae=S[_e],be=_[_e];ae!==null&&be!==void 0&&be.update(ae,ie,c||o)}le&&le($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ge=new X0;Ge.setAnimationLoop(Se),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}}const ar=new yi,Yw=new xt;function qw(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,V0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,_,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===nn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===nn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),_=v.envMap,S=v.envMapRotation;_&&(m.envMap.value=_,ar.copy(S),ar.x*=-1,ar.y*=-1,ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(ar)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Kw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=r[v.id];S===void 0&&(g(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",m));const L=_.program;i.updateUBOMapping(v,L);const b=e.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function d(v){const _=h();v.__bindingPointIndex=_;const S=t.createBuffer(),L=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,L,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],S=v.uniforms,L=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let b=0,C=S.length;b<C;b++){const R=Array.isArray(S[b])?S[b]:[S[b]];for(let A=0,E=R.length;A<E;A++){const P=R[A];if(p(P,b,A,L)===!0){const Y=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let Z=0;Z<V.length;Z++){const q=V[Z],ee=y(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,Y+K,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,K),K+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,S,L){const b=v.value,C=_+"_"+S;if(L[C]===void 0)return typeof b=="number"||typeof b=="boolean"?L[C]=b:L[C]=b.clone(),!0;{const R=L[C];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return L[C]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(v){const _=v.uniforms;let S=0;const L=16;for(let C=0,R=_.length;C<R;C++){const A=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,P=A.length;E<P;E++){const Y=A[E],V=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,Z=V.length;K<Z;K++){const q=V[K],ee=y(q),N=S%L,W=N%ee.boundary,Q=N+W;S+=W,Q!==0&&L-Q<ee.storage&&(S+=L-Q),Y.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=ee.storage}}}const b=S%L;return b>0&&(S+=L-b),v.__size=S,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Zw{constructor(e={}){const{canvas:n=Oy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=Yi,this.toneMappingExposure=1;const S=this;let L=!1,b=0,C=0,R=null,A=-1,E=null;const P=new _t,Y=new _t;let V=null;const K=new tt(0);let Z=0,q=n.width,ee=n.height,N=1,W=null,Q=null;const le=new _t(0,0,q,ee),Se=new _t(0,0,q,ee);let Ge=!1;const $=new j0;let ie=!1,_e=!1;const ae=new xt,be=new xt,Pe=new k,Ne=new _t,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function dt(){return R===null?N:1}let I=i;function $t(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lf}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",pe,!1),I===null){const F="webgl2";if(I=$t(F,w),I===null)throw $t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,He,Ae,ce,re,T,x,D,G,j,z,he,oe,ue,ze,ne,ge,Ce,Re,xe,je,Fe,nt,U;function fe(){Be=new nE(I),Be.init(),Fe=new Hw(I,Be),He=new q1(I,Be,e,Fe),Ae=new kw(I,Be),He.reverseDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),ce=new sE(I),re=new Ew,T=new Bw(I,Be,Ae,re,He,Fe,ce),x=new Z1(S),D=new tE(S),G=new dS(I),nt=new $1(I,G),j=new iE(I,G,ce,nt),z=new aE(I,j,G,ce),Re=new oE(I,He,T),ne=new K1(re),he=new Mw(S,x,D,Be,He,nt,ne),oe=new qw(S,re),ue=new Tw,ze=new Lw(Be),Ce=new X1(S,x,D,Ae,z,p,l),ge=new Fw(S,z,He),U=new Kw(I,ce,He,Ae),xe=new Y1(I,Be,ce),je=new rE(I,Be,ce),ce.programs=he.programs,S.capabilities=He,S.extensions=Be,S.properties=re,S.renderLists=ue,S.shadowMap=ge,S.state=Ae,S.info=ce}fe();const X=new $w(S,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(q,ee,!1))},this.getSize=function(w){return w.set(q,ee)},this.setSize=function(w,F,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ee=F,n.width=Math.floor(w*N),n.height=Math.floor(F*N),B===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(q*N,ee*N).floor()},this.setDrawingBufferSize=function(w,F,B){q=w,ee=F,N=B,n.width=Math.floor(w*B),n.height=Math.floor(F*B),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,F,B,H){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,F,B,H),Ae.viewport(P.copy(le).multiplyScalar(N).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,F,B,H){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,F,B,H),Ae.scissor(Y.copy(Se).multiplyScalar(N).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(w){Ae.setScissorTest(Ge=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(w=!0,F=!0,B=!0){let H=0;if(w){let O=!1;if(R!==null){const se=R.texture.format;O=se===Of||se===Ff||se===If}if(O){const se=R.texture.type,me=se===xi||se===Rr||se===Do||se===Rs||se===Df||se===Uf,Me=Ce.getClearColor(),Ee=Ce.getClearAlpha(),Le=Me.r,Ue=Me.g,we=Me.b;me?(g[0]=Le,g[1]=Ue,g[2]=we,g[3]=Ee,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Le,y[1]=Ue,y[2]=we,y[3]=Ee,I.clearBufferiv(I.COLOR,0,y))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT),B&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ue.dispose(),ze.dispose(),re.dispose(),x.dispose(),D.dispose(),z.dispose(),nt.dispose(),U.dispose(),he.dispose(),X.dispose(),X.removeEventListener("sessionstart",Hf),X.removeEventListener("sessionend",Vf),tr.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=ce.autoReset,F=ge.enabled,B=ge.autoUpdate,H=ge.needsUpdate,O=ge.type;fe(),ce.autoReset=w,ge.enabled=F,ge.autoUpdate=B,ge.needsUpdate=H,ge.type=O}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){const F=w.target;F.removeEventListener("dispose",De),mt(F)}function mt(w){Nt(w),re.remove(w)}function Nt(w){const F=re.get(w).programs;F!==void 0&&(F.forEach(function(B){he.releaseProgram(B)}),w.isShaderMaterial&&he.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,B,H,O,se){F===null&&(F=st);const me=O.isMesh&&O.matrixWorld.determinant()<0,Me=vv(w,F,B,H,O);Ae.setMaterial(H,me);let Ee=B.index,Le=1;if(H.wireframe===!0){if(Ee=j.getWireframeAttribute(B),Ee===void 0)return;Le=2}const Ue=B.drawRange,we=B.attributes.position;let Ye=Ue.start*Le,it=(Ue.start+Ue.count)*Le;se!==null&&(Ye=Math.max(Ye,se.start*Le),it=Math.min(it,(se.start+se.count)*Le)),Ee!==null?(Ye=Math.max(Ye,0),it=Math.min(it,Ee.count)):we!=null&&(Ye=Math.max(Ye,0),it=Math.min(it,we.count));const ot=it-Ye;if(ot<0||ot===1/0)return;nt.setup(O,H,Me,B,Ee);let Yt,qe=xe;if(Ee!==null&&(Yt=G.get(Ee),qe=je,qe.setIndex(Yt)),O.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*dt()),qe.setMode(I.LINES)):qe.setMode(I.TRIANGLES);else if(O.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Ae.setLineWidth(Te*dt()),O.isLineSegments?qe.setMode(I.LINES):O.isLineLoop?qe.setMode(I.LINE_LOOP):qe.setMode(I.LINE_STRIP)}else O.isPoints?qe.setMode(I.POINTS):O.isSprite&&qe.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Te=O._multiDrawStarts,Jn=O._multiDrawCounts,Ke=O._multiDrawCount,Cn=Ee?G.get(Ee).bytesPerElement:1,Ir=re.get(H).currentProgram.getUniforms();for(let rn=0;rn<Ke;rn++)Ir.setValue(I,"_gl_DrawID",rn),qe.render(Te[rn]/Cn,Jn[rn])}else if(O.isInstancedMesh)qe.renderInstances(Ye,ot,O.count);else if(B.isInstancedBufferGeometry){const Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jn=Math.min(B.instanceCount,Te);qe.renderInstances(Ye,ot,Jn)}else qe.render(Ye,ot)};function Ze(w,F,B){w.transparent===!0&&w.side===$n&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,Xo(w,F,B),w.side=Zi,w.needsUpdate=!0,Xo(w,F,B),w.side=$n):Xo(w,F,B)}this.compile=function(w,F,B=null){B===null&&(B=w),u=ze.get(B),u.init(F),_.push(u),B.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),w!==B&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const H=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let me=0;me<se.length;me++){const Me=se[me];Ze(Me,B,O),H.add(Me)}else Ze(se,B,O),H.add(se)}),_.pop(),u=null,H},this.compileAsync=function(w,F,B=null){const H=this.compile(w,F,B);return new Promise(O=>{function se(){if(H.forEach(function(me){re.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){O(w);return}setTimeout(se,10)}Be.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let An=null;function Qn(w){An&&An(w)}function Hf(){tr.stop()}function Vf(){tr.start()}const tr=new X0;tr.setAnimationLoop(Qn),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(w){An=w,X.setAnimationLoop(w),w===null?tr.stop():tr.start()},X.addEventListener("sessionstart",Hf),X.addEventListener("sessionend",Vf),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,F,R),u=ze.get(w,_.length),u.init(F),_.push(u),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(be),_e=this.localClippingEnabled,ie=ne.init(this.clippingPlanes,_e),m=ue.get(w,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&$l(se,F,-1/0,S.sortObjects)}$l(w,F,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(W,Q),We=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,We&&Ce.addToRenderList(m,w),this.info.render.frame++,ie===!0&&ne.beginShadows();const B=u.state.shadowsArray;ge.render(B,w,F),ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(u.setupLights(),F.isArrayCamera){const se=F.cameras;if(O.length>0)for(let me=0,Me=se.length;me<Me;me++){const Ee=se[me];Wf(H,O,w,Ee)}We&&Ce.render(w);for(let me=0,Me=se.length;me<Me;me++){const Ee=se[me];Gf(m,w,Ee,Ee.viewport)}}else O.length>0&&Wf(H,O,w,F),We&&Ce.render(w),Gf(m,w,F);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(S,w,F),nt.resetDefaultState(),A=-1,E=null,_.pop(),_.length>0?(u=_[_.length-1],ie===!0&&ne.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function $l(w,F,B,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){H&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const me=z.update(w),Me=w.material;Me.visible&&m.push(w,me,Me,B,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const me=z.update(w),Me=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ne.copy(me.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(Me)){const Ee=me.groups;for(let Le=0,Ue=Ee.length;Le<Ue;Le++){const we=Ee[Le],Ye=Me[we.materialIndex];Ye&&Ye.visible&&m.push(w,me,Ye,B,Ne.z,we)}}else Me.visible&&m.push(w,me,Me,B,Ne.z,null)}}const se=w.children;for(let me=0,Me=se.length;me<Me;me++)$l(se[me],F,B,H)}function Gf(w,F,B,H){const O=w.opaque,se=w.transmissive,me=w.transparent;u.setupLightsView(B),ie===!0&&ne.setGlobalState(S.clippingPlanes,B),H&&Ae.viewport(P.copy(H)),O.length>0&&jo(O,F,B),se.length>0&&jo(se,F,B),me.length>0&&jo(me,F,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Wf(w,F,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Pr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?zo:xi,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const se=u.state.transmissionRenderTarget[H.id],me=H.viewport||P;se.setSize(me.z,me.w);const Me=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(K),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),We&&Ce.render(B);const Ee=S.toneMapping;S.toneMapping=Yi;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),ie===!0&&ne.setGlobalState(S.clippingPlanes,H),jo(w,B,H),T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let we=0,Ye=F.length;we<Ye;we++){const it=F[we],ot=it.object,Yt=it.geometry,qe=it.material,Te=it.group;if(qe.side===$n&&ot.layers.test(H.layers)){const Jn=qe.side;qe.side=nn,qe.needsUpdate=!0,jf(ot,B,H,Yt,qe,Te),qe.side=Jn,qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se))}S.setRenderTarget(Me),S.setClearColor(K,Z),Le!==void 0&&(H.viewport=Le),S.toneMapping=Ee}function jo(w,F,B){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,se=w.length;O<se;O++){const me=w[O],Me=me.object,Ee=me.geometry,Le=H===null?me.material:H,Ue=me.group;Me.layers.test(B.layers)&&jf(Me,F,B,Ee,Le,Ue)}}function jf(w,F,B,H,O,se){w.onBeforeRender(S,F,B,H,O,se),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(S,F,B,H,w,se),O.transparent===!0&&O.side===$n&&O.forceSinglePass===!1?(O.side=nn,O.needsUpdate=!0,S.renderBufferDirect(B,F,H,O,w,se),O.side=Zi,O.needsUpdate=!0,S.renderBufferDirect(B,F,H,O,w,se),O.side=$n):S.renderBufferDirect(B,F,H,O,w,se),w.onAfterRender(S,F,B,H,O,se)}function Xo(w,F,B){F.isScene!==!0&&(F=st);const H=re.get(w),O=u.state.lights,se=u.state.shadowsArray,me=O.state.version,Me=he.getParameters(w,O.state,se,F,B),Ee=he.getProgramCacheKey(Me);let Le=H.programs;H.environment=w.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(w.isMeshStandardMaterial?D:x).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",De),Le=new Map,H.programs=Le);let Ue=Le.get(Ee);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===me)return $f(w,Me),Ue}else Me.uniforms=he.getUniforms(w),w.onBeforeCompile(Me,S),Ue=he.acquireProgram(Me,Ee),Le.set(Ee,Ue),H.uniforms=Me.uniforms;const we=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=ne.uniform),$f(w,Me),H.needsLights=xv(w),H.lightsStateVersion=me,H.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Xf(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=el.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function $f(w,F){const B=re.get(w);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.batchingColor=F.batchingColor,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.instancingMorph=F.instancingMorph,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function vv(w,F,B,H,O){F.isScene!==!0&&(F=st),T.resetTextureUnits();const se=F.fog,me=H.isMeshStandardMaterial?F.environment:null,Me=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Dr,Ee=(H.isMeshStandardMaterial?D:x).get(H.envMap||me),Le=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,it=!!B.morphAttributes.color;let ot=Yi;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ot=S.toneMapping);const Yt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=Yt!==void 0?Yt.length:0,Te=re.get(H),Jn=u.state.lights;if(ie===!0&&(_e===!0||w!==E)){const pn=w===E&&H.id===A;ne.setState(H,w,pn)}let Ke=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Jn.state.version||Te.outputColorSpace!==Me||O.isBatchedMesh&&Te.batching===!1||!O.isBatchedMesh&&Te.batching===!0||O.isBatchedMesh&&Te.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Te.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Te.instancing===!1||!O.isInstancedMesh&&Te.instancing===!0||O.isSkinnedMesh&&Te.skinning===!1||!O.isSkinnedMesh&&Te.skinning===!0||O.isInstancedMesh&&Te.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Te.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Te.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Te.instancingMorph===!1&&O.morphTexture!==null||Te.envMap!==Ee||H.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==Ue||Te.morphTargets!==we||Te.morphNormals!==Ye||Te.morphColors!==it||Te.toneMapping!==ot||Te.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Te.__version=H.version);let Cn=Te.currentProgram;Ke===!0&&(Cn=Xo(H,F,O));let Ir=!1,rn=!1,Os=!1;const at=Cn.getUniforms(),Vn=Te.uniforms;if(Ae.useProgram(Cn.program)&&(Ir=!0,rn=!0,Os=!0),H.id!==A&&(A=H.id,rn=!0),Ir||E!==w){Ae.buffers.depth.getReversed()?(ae.copy(w.projectionMatrix),zy(ae),By(ae),at.setValue(I,"projectionMatrix",ae)):at.setValue(I,"projectionMatrix",w.projectionMatrix),at.setValue(I,"viewMatrix",w.matrixWorldInverse);const Ei=at.map.cameraPosition;Ei!==void 0&&Ei.setValue(I,Pe.setFromMatrixPosition(w.matrixWorld)),He.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&at.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,rn=!0,Os=!0)}if(O.isSkinnedMesh){at.setOptional(I,O,"bindMatrix"),at.setOptional(I,O,"bindMatrixInverse");const pn=O.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),at.setValue(I,"boneTexture",pn.boneTexture,T))}O.isBatchedMesh&&(at.setOptional(I,O,"batchingTexture"),at.setValue(I,"batchingTexture",O._matricesTexture,T),at.setOptional(I,O,"batchingIdTexture"),at.setValue(I,"batchingIdTexture",O._indirectTexture,T),at.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&at.setValue(I,"batchingColorTexture",O._colorsTexture,T));const ks=B.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&Re.update(O,B,Cn),(rn||Te.receiveShadow!==O.receiveShadow)&&(Te.receiveShadow=O.receiveShadow,at.setValue(I,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Vn.envMap.value=Ee,Vn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(Vn.envMapIntensity.value=F.environmentIntensity),rn&&(at.setValue(I,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&_v(Vn,Os),se&&H.fog===!0&&oe.refreshFogUniforms(Vn,se),oe.refreshMaterialUniforms(Vn,H,N,ee,u.state.transmissionRenderTarget[w.id]),el.upload(I,Xf(Te),Vn,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(el.upload(I,Xf(Te),Vn,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&at.setValue(I,"center",O.center),at.setValue(I,"modelViewMatrix",O.modelViewMatrix),at.setValue(I,"normalMatrix",O.normalMatrix),at.setValue(I,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const pn=H.uniformsGroups;for(let Ei=0,wi=pn.length;Ei<wi;Ei++){const Yf=pn[Ei];U.update(Yf,Cn),U.bind(Yf,Cn)}}return Cn}function _v(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function xv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,F,B){re.get(w.texture).__webglTexture=F,re.get(w.depthTexture).__webglTexture=B;const H=re.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const B=re.get(w);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,B=0){R=w,b=F,C=B;let H=!0,O=null,se=!1,me=!1;if(w){const Ee=re.get(w);if(Ee.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Ee.__hasExternalTextures)T.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const we=w.depthTexture;if(Ee.__boundDepthTexture!==we){if(we!==null&&re.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(me=!0);const Ue=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?O=Ue[F][B]:O=Ue[F],se=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?O=re.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[B]:O=Ue,P.copy(w.viewport),Y.copy(w.scissor),V=w.scissorTest}else P.copy(le).multiplyScalar(N).floor(),Y.copy(Se).multiplyScalar(N).floor(),V=Ge;if(Ae.bindFramebuffer(I.FRAMEBUFFER,O)&&H&&Ae.drawBuffers(w,O),Ae.viewport(P),Ae.scissor(Y),Ae.setScissorTest(V),se){const Ee=re.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,B)}else if(me){const Ee=re.get(w.texture),Le=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,B||0,Le)}A=-1},this.readRenderTargetPixels=function(w,F,B,H,O,se,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Ae.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Ee=w.texture,Le=Ee.format,Ue=Ee.type;if(!He.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&B>=0&&B<=w.height-O&&I.readPixels(F,B,H,O,Fe.convert(Le),Fe.convert(Ue),se)}finally{const Ee=R!==null?re.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,F,B,H,O,se,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){const Ee=w.texture,Le=Ee.format,Ue=Ee.type;if(!He.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-H&&B>=0&&B<=w.height-O){Ae.bindFramebuffer(I.FRAMEBUFFER,Me);const we=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(F,B,H,O,Fe.convert(Le),Fe.convert(Ue),0);const Ye=R!==null?re.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,Ye);const it=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ky(I,it,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(we),I.deleteSync(it),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,B=0){w.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-B),O=Math.floor(w.image.width*H),se=Math.floor(w.image.height*H),me=F!==null?F.x:0,Me=F!==null?F.y:0;T.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,me,Me,O,se),Ae.unbindTexture()},this.copyTextureToTexture=function(w,F,B=null,H=null,O=0){w.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],F=arguments[2],O=arguments[3]||0,B=null);let se,me,Me,Ee,Le,Ue,we,Ye,it;const ot=w.isCompressedTexture?w.mipmaps[O]:w.image;B!==null?(se=B.max.x-B.min.x,me=B.max.y-B.min.y,Me=B.isBox3?B.max.z-B.min.z:1,Ee=B.min.x,Le=B.min.y,Ue=B.isBox3?B.min.z:0):(se=ot.width,me=ot.height,Me=ot.depth||1,Ee=0,Le=0,Ue=0),H!==null?(we=H.x,Ye=H.y,it=H.z):(we=0,Ye=0,it=0);const Yt=Fe.convert(F.format),qe=Fe.convert(F.type);let Te;F.isData3DTexture?(T.setTexture3D(F,0),Te=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Te=I.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Te=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Jn=I.getParameter(I.UNPACK_ROW_LENGTH),Ke=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ir=I.getParameter(I.UNPACK_SKIP_ROWS),rn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue);const Os=w.isDataArrayTexture||w.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Vn=re.get(w),ks=re.get(F),pn=re.get(Vn.__renderTarget),Ei=re.get(ks.__renderTarget);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let wi=0;wi<Me;wi++)Os&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,re.get(w).__webglTexture,O,Ue+wi),w.isDepthTexture?(at&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,re.get(F).__webglTexture,O,it+wi),I.blitFramebuffer(Ee,Le,se,me,we,Ye,se,me,I.DEPTH_BUFFER_BIT,I.NEAREST)):at?I.copyTexSubImage3D(Te,O,we,Ye,it+wi,Ee,Le,se,me):I.copyTexSubImage2D(Te,O,we,Ye,it+wi,Ee,Le,se,me);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else at?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Te,O,we,Ye,it,se,me,Me,Yt,qe,ot.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,O,we,Ye,it,se,me,Me,Yt,ot.data):I.texSubImage3D(Te,O,we,Ye,it,se,me,Me,Yt,qe,ot):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,we,Ye,se,me,Yt,qe,ot.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,we,Ye,ot.width,ot.height,Yt,ot.data):I.texSubImage2D(I.TEXTURE_2D,O,we,Ye,se,me,Yt,qe,ot);I.pixelStorei(I.UNPACK_ROW_LENGTH,Jn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ir),I.pixelStorei(I.UNPACK_SKIP_IMAGES,rn),O===0&&F.generateMipmaps&&I.generateMipmap(Te),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,F,B=null,H=null,O=0){return w.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,B,H,O)},this.initRenderTarget=function(w){re.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){b=0,C=0,R=null,Ae.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}class Qw extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Jw extends Wt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Qt,this.magFilter=s!==void 0?s:Qt,this.generateMipmaps=!1;const d=this;function h(){d.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class eT{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],f=i[r+1]-d,p=(o-d)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Je:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new k,r=[],s=[],o=[],a=new k,l=new xt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(kt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(kt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Bf(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,h){let f=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,p*=d,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Na=new k,Kc=new Bf,Zc=new Bf,Qc=new Bf;class tT extends eT{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Na.subVectors(r[0],r[1]).add(r[0]),c=Na);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Na.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Na),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Kc.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,g,y,m),Zc.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,g,y,m),Qc.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,g,y,m)}else this.curveType==="catmullrom"&&(Kc.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Zc.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Qc.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(Kc.calc(l),Zc.calc(l),Qc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);const nT=[["Roadster 3D","https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/roadster-3d-car-landing.mp4"],["Living Portrait","https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/living-portrait-hero.mp4"],["Particle Self","https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/oraciteslArea.mp4"],["Robot Jellyfish","https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/medusa-jellyfish-hero.mp4"],["Ink Reveal","https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/ink-reveal-hover.mp4"],["Space Voyage","https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/space-voyage-video.mp4"],["Helion Dispatch","https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/helion-dispatch-landing.mp4"],["Honey Bee","https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/honey-bee-melli-landing.mp4"]],Ud=(t,e=0,n=1)=>Math.min(n,Math.max(e,t)),Da=(t,e,n)=>t+(e-t)*n,nm=t=>t*t*(3-2*t),im=t=>1-(1-t)**3,gn=(t,e,n)=>Ud((t-e)/(n-e)),hr=2.1,Ua=1.32,iT=.03,Qs=hr+iT,Ni=28,Js=3,Ia=1200,rT=-1.5,sT=Math.PI*2+1.35,rm=8,sm=.14,om=.63,oT=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`,aT=`
  uniform sampler2D map;
  uniform vec2 cover;
  uniform float aspect, ready, radius;
  varying vec2 vUv;
  void main() {
    vec2 q = (abs(vUv - .5) - .5) * vec2(aspect, 1.) + radius;
    float d = length(max(q, 0.)) + min(max(q.x, q.y), 0.) - radius;
    float px = fwidth(d), a = 1. - smoothstep(-px, px, d);
    if (a < .01) discard;
    vec2 uv = vUv;
    if (!gl_FrontFacing) uv.x = 1. - uv.x;
    vec3 c = mix(vec3(.075), texture2D(map, (uv - .5) * cover + .5).rgb, ready);
    float edge = smoothstep(-.012 - px, -.012, d);
    gl_FragColor = vec4(mix(c, vec3(1.), edge * .1), a);
  }
`,lT=()=>{const t=ke.useRef(null),e=ke.useRef(null),n=ke.useRef(null),i=ke.useRef(null),r=ke.useRef(null),s=ke.useRef(null),o=ke.useRef(null),a=ke.useRef(null),l=ke.useRef(null),c=ke.useRef(null),d=ke.useRef(null),h=ke.useRef(null),f=ke.useRef(null),p=ke.useRef(null),[g,y]=ke.useState(!1);ke.useEffect(()=>{const u=n.current,v=t.current,_=e.current;if(!u||!v||!_)return;let S;try{S=new Zw({canvas:u,antialias:!0,alpha:!0})}catch(ce){console.error("Unable to initialize the ALOKA ribbon experience.",ce),y(!0);return}S.setClearColor(0,0),S.outputColorSpace=Dr;const L=new Qw,b=new yn(35,1,.1,100),C=[],R=[],A=[];let E,P=1,Y=1,V=1,K=1,Z=3,q=2,ee=.3153,N=0,W=0,Q=0,le=!0,Se=!1;const Ge=new k,$=new k,ie=new k,_e=new k(0,1,0),ae=new k,be=()=>{const ce=[];for(let re=0;re<=160;re+=1){const T=re/160,x=Da(rT,sT,T),D=Math.cos(x),G=2*T-1,j=D>0?7.6+16.4*D**.9:7.6+2.2*D,z=.84+.5*gn(.14-T,0,.14)+.8*gn(T,.84,1);ce.push(new k(z*Math.sin(x)*j*.561,.5*Math.sign(G)*Math.abs(G)**1.4*j*.63,-j))}E=new tT(ce,!1,"centripetal"),E.arcLengthDivisions=1500,P=E.getLength(),C.length=0,R.length=0;for(let re=0;re<=Ia;re+=1){const T=re/Ia;C.push(E.getPointAt(T)),R.push(E.getTangentAt(T))}},Pe=(ce,re,T)=>{const x=Ud(ce/P)*Ia,D=Math.min(Ia-1,Math.floor(x)),G=x-D;re.lerpVectors(C[D],C[D+1],G),T.lerpVectors(R[D],R[D+1],G).normalize()},Ne=()=>{Y=window.innerWidth,V=window.innerHeight,K=Y/V,S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.setSize(Y,V,!1),b.aspect=K,b.fov=K<16/9?Math.atan(.561/K)*360/Math.PI:35,b.updateProjectionMatrix(),ee=Math.tan(b.fov*Math.PI/360),Z=K<.9?2:3,q=K<.9?3:2},st=ce=>{const re=2*rm*ee,T=re*K,x=T*(Z===3?.74:.88),D=x*.017,G=(x-D*(Z-1))/Z,j=G/(hr/Ua),z=ce%Z,he=Math.floor(ce/Z),oe=j*q+D*1.6*(q-1);return{x:-x/2+G/2+z*(G+D),y:oe/2-j/2-he*(j+D*1.6),w:G,h:j,vw:T,vh:re,col:z,row:he}},We=(ce,re)=>{const T=ce.geometry.attributes.position,x=re-ce.index*Qs;for(let D=0;D<=Js;D+=1)for(let G=0;G<=Ni;G+=1){const j=D*(Ni+1)+G,z=G/Ni-.5,he=.5-D/Js;Pe(x+z*hr,Ge,$),ie.copy(_e).addScaledVector($,-_e.dot($)).normalize(),ae.copy(Ge).addScaledVector(ie,he*Ua),T.setXYZ(j,ae.x,ae.y,ae.z)}T.needsUpdate=!0},dt=(ce,re)=>{const T=st(ce.index),x=ce.geometry.attributes.position,D=(T.col-(Z-1)/2)*1.2,G=T.row<q/2?1:-1,j=G*(T.col===1?.95:.34),z=D*T.vw*.62*(1-re),he=j*T.vh*(1-re),oe=(1-re)*.22*(T.col-1||.5)*G,ue=Math.cos(oe),ze=Math.sin(oe);for(let ne=0;ne<=Js;ne+=1)for(let ge=0;ge<=Ni;ge+=1){const Ce=ne*(Ni+1)+ge,Re=(ge/Ni-.5)*T.w,xe=(.5-ne/Js)*T.h;x.setXYZ(Ce,T.x+z+Re*ue-xe*ze,T.y+he+Re*ze+xe*ue,-rm-(1-re)*.6*Math.sin(ge/Ni*Math.PI))}x.needsUpdate=!0,ce.rect=T};nT.forEach(([ce,re],T)=>{const x=document.createElement("video");Object.assign(x,{crossOrigin:"anonymous",muted:!0,loop:!0,playsInline:!0,preload:"auto",src:re}),x.setAttribute("playsinline","");const D=new Jw(x);D.colorSpace=li,D.minFilter=Qt,D.magFilter=Qt,D.generateMipmaps=!1;const G=new Wo(1,1,Ni,Js),j=new Si({vertexShader:oT,fragmentShader:aT,transparent:!0,side:$n,uniforms:{map:{value:D},cover:{value:new Je(1,1)},aspect:{value:hr/Ua},ready:{value:0},radius:{value:.018}}}),z=new Yn(G,j);z.frustumCulled=!1,L.add(z);const he=()=>{if(!x.videoWidth||!x.videoHeight)return;const oe=x.videoWidth/x.videoHeight,ue=hr/Ua;j.uniforms.cover.value.set(oe>ue?ue/oe:1,oe>ue?1:oe/ue),j.uniforms.ready.value=1};x.addEventListener("loadeddata",he),A.push({index:T,title:ce,video:x,texture:D,geometry:G,material:j,mesh:z,onLoadedData:he,playPending:!1,rect:null})}),be(),Ne();const I=()=>{const ce=v.getBoundingClientRect().top+window.scrollY,re=v.offsetHeight-window.innerHeight;N=Ud((window.scrollY-ce)/re)},$t=()=>{const ce=1-im(gn(W,0,.12)),re=Da(-50,76,gn(W,0,.58));i.current&&(i.current.style.transform=`translate3d(${re}vw,${ce*34}vh,0)`),r.current&&(r.current.style.transform=`translate3d(${-re}vw,${ce*34}vh,0)`);const T=s.current;T&&(T.style.opacity=String(1-gn(W,.52,.57)),T.style.transform=`translate(-50%,calc(-50% + ${ce*34}vh))`);const x=o.current;if(x){const z=nm(gn(W,.01,.16));x.style.transform=`translate(-50%,calc(-50% - ${z*48}vh)) scale(${1-z*.4})`,x.style.opacity=String(1-gn(W,.14,.22))}const D=String(1-gn(W,0,.05));if([a.current,l.current,d.current,h.current].forEach(z=>{z&&(z.style.opacity=D)}),c.current){const z=gn(W,0,.06);c.current.style.opacity=String(1-z),c.current.style.transform=`translate(-50%,${z*10}px)`}f.current&&(f.current.style.transform=`scaleX(${nm(gn(W,.72,.86))})`);const G=gn(W,sm,om),j=Da(0,P+A.length*Qs,G);for(const z of A){const he=j-z.index*Qs,oe=P-hr;if(he<oe)z.mesh.visible=he>hr,z.rect=null,z.mesh.visible&&We(z,j);else if(z.index<Z*q){const ue=Da(sm,om,(oe+z.index*Qs)/(P+A.length*Qs)),ze=im(gn(W,ue,ue+.13));z.mesh.visible=ze>.001,z.mesh.visible&&dt(z,ze)}else z.mesh.visible=!1,z.rect=null}S.render(L,b)},Be=()=>{if(!Se){if(le){W+=(N-W)*.09,Math.abs(N-W)<5e-5&&(W=N);for(const ce of A)ce.mesh.visible&&ce.video.paused&&!ce.playPending?(ce.playPending=!0,ce.video.play().catch(re=>{re instanceof DOMException&&re.name==="AbortError"||console.warn(`Unable to play ribbon video "${ce.title}".`,re)}).finally(()=>{ce.playPending=!1})):!ce.mesh.visible&&(!ce.video.paused||ce.playPending)&&ce.video.pause();$t()}Q=window.requestAnimationFrame(Be)}},He=ce=>{const re=p.current;if(!re)return;let T=null;if(W>.86){const x=ce.clientX/Y-.5,D=.5-ce.clientY/V;for(const G of A){const j=G.rect;if(!j)continue;const z=x*j.vw,he=D*j.vh;Math.abs(z-j.x)<j.w/2&&Math.abs(he-j.y)<j.h/2&&(T=G)}}re.style.opacity=T?"1":"0",T&&(re.textContent=T.title,re.style.transform=`translate(${ce.clientX+14}px,${ce.clientY+16}px)`)},Ae=new IntersectionObserver(([ce])=>{le=ce.isIntersecting,le&&I()});return Ae.observe(v),window.addEventListener("resize",Ne),window.addEventListener("scroll",I,{passive:!0}),_.addEventListener("pointermove",He),I(),Q=window.requestAnimationFrame(Be),()=>{Se=!0,window.cancelAnimationFrame(Q),Ae.disconnect(),window.removeEventListener("resize",Ne),window.removeEventListener("scroll",I),_.removeEventListener("pointermove",He),A.forEach(ce=>{ce.video.pause(),ce.video.removeEventListener("loadeddata",ce.onLoadedData),ce.video.removeAttribute("src"),ce.video.load(),ce.texture.dispose(),ce.geometry.dispose(),ce.material.dispose()}),S.dispose()}},[]);const m=u=>{window.scrollBy({top:u*window.innerHeight,behavior:"smooth"})};return M.jsx("div",{className:"vante-track",id:"home",ref:t,children:M.jsxs("section",{className:"vante-stage",id:"stage",ref:e,"aria-label":"ALOKA portfolio introduction",children:[M.jsx("canvas",{ref:n,className:"vante-canvas","aria-hidden":"true"}),M.jsx("div",{className:"vante-brand-landing",ref:o,"aria-hidden":"true",children:M.jsxs("div",{className:"vante-brand-drop",children:[M.jsx("svg",{viewBox:"0 0 22 18",children:M.jsx("path",{d:"M11 0l11 18h-6.2L11 9.6 6.2 18H0z"})}),M.jsx("span",{children:"ALOKA"})]})}),M.jsxs("h1",{className:"vante-headline","aria-label":"We turn ideas into light",children:[M.jsx("div",{className:"vante-line",id:"l1",ref:i,"aria-hidden":"true",children:M.jsx("span",{children:"WE TURN"})}),M.jsx("div",{className:"vante-line",id:"l2",ref:r,"aria-hidden":"true",children:M.jsx("span",{children:"IDEAS INTO LIGHT"})})]}),M.jsx("div",{className:"vante-caption",id:"cap",ref:s,children:"At ALOKA, we bring ideas to life through technology, creativity and intelligent digital experiences."}),M.jsx("div",{className:"vante-glow",id:"glow",ref:h}),M.jsx("div",{className:"vante-cross",id:"cross",ref:d,children:M.jsx("i",{children:"+"})}),M.jsx("div",{className:"vante-rule",id:"rule",ref:f}),M.jsxs("a",{className:"vante-hint",id:"hint",ref:a,href:"#contact",children:[M.jsx("span",{className:"vante-hint-dot","aria-hidden":"true"}),M.jsx("span",{children:"LET'S START A PROJECT"}),M.jsx("span",{className:"vante-hint-arrow","aria-hidden":"true",children:"→"})]}),M.jsxs("header",{className:"vante-top",children:[M.jsxs("a",{className:"vante-logo",href:"#home","aria-label":"ALOKA home",children:[M.jsx("svg",{viewBox:"0 0 22 18","aria-hidden":"true",children:M.jsx("path",{d:"M11 0l11 18h-6.2L11 9.6 6.2 18H0z"})}),"ALOKA"]}),M.jsxs("div",{className:"vante-pager",id:"pager",ref:l,"aria-label":"Scroll controls",children:[M.jsx("button",{type:"button",title:"Previous screen","aria-label":"Scroll to the previous screen",onClick:()=>m(-1),children:"↑"}),M.jsx("button",{type:"button",title:"Next screen","aria-label":"Scroll to the next screen",onClick:()=>m(1),children:"↓"})]}),M.jsxs("nav",{className:"vante-actions","aria-label":"Main navigation",children:[M.jsxs("a",{href:"#contact",children:[M.jsx("i",{}),"LET'S TALK"]}),M.jsxs("a",{href:"#services",children:["MENU",M.jsx("b",{})]})]})]}),M.jsxs("footer",{className:"vante-bottom",children:[M.jsx("p",{children:"At ALOKA, we build meaningful solutions that move businesses forward."}),M.jsxs("div",{className:"vante-bottom-mid",children:["CAPABILITIES",M.jsx("s",{children:"/"}),"ABOUT",M.jsx("s",{children:"/"}),"WORK",M.jsx("s",{children:"/"}),"INSIGHTS"]}),M.jsx("a",{className:"vante-showreel",href:"#services",children:"EXPLORE WHAT WE DO"})]}),M.jsxs("div",{className:"vante-scroll-cue",ref:c,"aria-label":"Scroll to explore",children:[M.jsx("span",{children:"SCROLL TO EXPLORE"}),M.jsx("span",{className:"vante-scroll-track","aria-hidden":"true",children:M.jsx("i",{})})]}),g&&M.jsx("p",{className:"vante-webgl-error",role:"status",children:"The interactive showreel is unavailable in this browser. You can still explore all ALOKA sections below."}),M.jsx("div",{className:"vante-name",id:"name",ref:p,"aria-hidden":"true"})]})})},cT=[{id:"web-dev",number:"01",title:"Web Development",description:"Modern, responsive and high-performance digital experiences built with precision and architectural elegance.",tags:["React","Next.js","WebGL","Edge Architecture"],features:["Bespoke web applications with instant responsiveness","Interactive 3D and canvas-powered visual design","Accessible, SEO-optimized semantic foundations"]},{id:"ai-ml",number:"02",title:"AI & Machine Learning",description:"Intelligent solutions that transform data into useful insights, autonomous capabilities, and breakthrough products.",tags:["Generative AI","LLM Agents","Computer Vision","Predictive Systems"],features:["Tailored LLM workflows and custom agentic systems","Real-time inference and embedded intelligent pipelines","Responsible, private, and auditable AI systems"]},{id:"software-dev",number:"03",title:"Software Development",description:"Scalable software solutions designed around real business needs, engineered for resilience and velocity.",tags:["Cloud Native","Microservices","GraphQL","Distributed Systems"],features:["Robust cloud-native backends engineered to scale","Real-time data synchronization & zero-downtime APIs","Security-first architecture and automated compliance"]},{id:"design",number:"04",title:"UI/UX & Creative Design",description:"Thoughtful interfaces and memorable digital experiences that harmonize aesthetic beauty with intuitive clarity.",tags:["Design Systems","Motion Design","Spatial UI","User Research"],features:["Cohesive design systems built for cross-platform scale","Micro-interactions and cinematic motion choreography","Deep user psychology research and usability validation"]},{id:"digital-solutions",number:"05",title:"Digital Solutions",description:"Technology-driven solutions to simplify workflows, automate repetitive tasks, and elevate operational agility.",tags:["Workflow Automation","Cloud Migration","Integrations","DevOps"],features:["End-to-end operational pipeline orchestration","Legacy modernization with frictionless migration paths","Unified enterprise dashboards and observability"]},{id:"innovation-consulting",number:"06",title:"Innovation & Consulting",description:"Helping businesses discover, validate, and build the right technology solutions to lead in their industries.",tags:["Tech Strategy","R&D Prototyping","Architecture Audits","Venture Labs"],features:["Rapid prototype validation from concept to MVP in weeks","Technology stack audits and future-proof roadmapping","Strategic advisory on emerging tech adoption"]}],En=({size:t="md",isHovered:e=!1,className:n="",glowColor:i="rgba(168, 85, 247, 0.8)"})=>{const[r,s]=ke.useState(!1),o=e||r,a={sm:{box:"w-4 h-4",svg:16,core:3},md:{box:"w-6 h-6",svg:24,core:5},lg:{box:"w-8 h-8",svg:32,core:7},xl:{box:"w-12 h-12",svg:48,core:10}}[t];return M.jsxs("div",{className:`relative inline-flex items-center justify-center transition-transform duration-500 ${a.box} ${o?"scale-125":"scale-100"} ${n}`,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[M.jsx("div",{className:`absolute rounded-full transition-all duration-700 pointer-events-none ${o?"opacity-100 scale-175":"opacity-20 scale-100"}`,style:{width:"240%",height:"240%",background:`radial-gradient(circle, ${i} 0%, rgba(139, 92, 246, 0.25) 45%, transparent 70%)`}}),M.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`w-full h-full transition-all duration-500 ${o?"text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.9)] rotate-45":"text-purple-300/80 drop-shadow-[0_0_4px_rgba(168,85,247,0.3)]"}`,children:[M.jsx("path",{d:"M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z",fill:"currentColor"}),M.jsx("circle",{cx:"12",cy:"12",r:"2.5",fill:"#FFFFFF"})]}),o&&M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"absolute -top-1 -right-1 w-1 h-1 rounded-full bg-white animate-ping",style:{animationDuration:"1.2s"}}),M.jsx("span",{className:"absolute -bottom-1 -left-1 w-1 h-1 rounded-full bg-purple-300 animate-ping",style:{animationDuration:"1.6s",animationDelay:"0.2s"}})]})]})};/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function dT(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:uT(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=t=>{const e=fT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Jc(t){return t!=null}function pT(t,e={}){var f,p;const n=e.attributeNames??{},i=g=>n[g]??g,r=t.size??t.width??lr.width,s=t.size??t.height??lr.height,o=((f=t.aliases)==null?void 0:f.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],a=[...t.name?[`lucide-${t.name}`]:[],...o],l=((p=e.className)==null?void 0:p.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?Id(...l):Id("lucide",...a,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??lr["stroke-width"])*Number(t.size??t.width??lr.width)/Number(e.size??e.width??lr.width):e.strokeWidth??lr["stroke-width"];return["svg",{...Object.entries(lr).reduce((g,[y,m])=>(g[i(y)]=m,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Jc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Jc(e.width)&&{[i("width")]:e.width},..."height"in e&&Jc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:d,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(g=>{const[y,m,u]=g,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return u?[y,v,u]:[y,v]})]}/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function mT(t,e={}){return pT(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},vT=ke.createContext({}),_T=()=>ke.useContext(vT),xT=ke.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:o,className:a="",children:l,iconNode:c=[],icon:d={node:c,aliases:[],size:24},...h},f)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:y=!1,nonScalingStroke:m=!1,color:u="currentColor",className:v=""}=_T()??{},_=!!l||gT(h),[S,L,b=[]]=mT(d,{color:t??u,width:n??e??p,height:i??e??p,strokeWidth:r??g,absoluteStrokeWidth:s??y,nonScalingStroke:o??m,className:Id(v,a),hasA11yProp:_,attributes:h});return ke.createElement(S,{ref:f,...L},[...b.map(([C,R])=>ke.createElement(C,R)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Bt(t,e=[],n=[]){const i=typeof t=="string"?dT(t,e,n):t,r=ke.forwardRef(({className:s,...o},a)=>ke.createElement(xT,{ref:a,icon:i,className:s,...o}));return i.name&&(r.displayName=hT(i.name)),r}/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Q0.node;const yT=Bt(Q0);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};J0.node;const ev=Bt(J0);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};tv.node;const ST=Bt(tv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};nv.node;const iv=Bt(nv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};rv.node;const Fa=Bt(rv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};sv.node;const MT=Bt(sv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};ov.node;const ET=Bt(ov);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};av.node;const lv=Bt(av);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};cv.node;const wT=Bt(cv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};uv.node;const TT=Bt(uv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};dv.node;const am=Bt(dv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};fv.node;const AT=Bt(fv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};hv.node;const CT=Bt(hv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};pv.node;const bT=Bt(pv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};mv.node;const RT=Bt(mv);/**
 * @license lucide-react v1.74.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"sun-medium",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]};gv.node;const PT=Bt(gv),LT=({service:t})=>{const e=ke.useRef(null),[n,i]=ke.useState(!1),[r,s]=ke.useState(0),[o,a]=ke.useState({x:0,y:0}),l=h=>{if(!e.current)return;const f=e.current.getBoundingClientRect(),p=h.clientX-f.left,g=h.clientY-f.top;a({x:p,y:g});const y={x:44,y:44},m=Math.hypot(p-y.x,g-y.y),u=Math.hypot(f.width,f.height),v=Math.max(0,1-m/(u*.45));s(v)},c=()=>{i(!0)},d=()=>{i(!1),s(0)};return M.jsxs("div",{ref:e,onMouseMove:l,onMouseEnter:c,onMouseLeave:d,className:`service-card-shell group relative rounded-3xl p-8 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden ${n?"bg-[#121118]/85 -translate-y-2 shadow-[0_20px_50px_-15px_rgba(168,85,247,0.22)]":"bg-[#0d0d10]/60 hover:bg-[#111116]/80"}`,style:{backdropFilter:"blur(20px)",border:`1px solid ${n?"rgba(168, 85, 247, 0.45)":r>.3?`rgba(168, 85, 247, ${.15+r*.25})`:"rgba(255, 255, 255, 0.08)"}`},children:[n&&M.jsx("div",{className:"absolute pointer-events-none transition-opacity duration-300",style:{left:`${o.x}px`,top:`${o.y}px`,transform:"translate(-50%, -50%)",width:"280px",height:"280px",background:"radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(99, 102, 241, 0.04) 40%, transparent 70%)",borderRadius:"9999px"}}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center justify-between mb-8",children:[M.jsx("div",{className:"relative",children:M.jsx(En,{size:"lg",isHovered:n||r>.4,glowColor:r>.6?"rgba(192, 132, 252, 0.95)":"rgba(168, 85, 247, 0.7)"})}),M.jsx("span",{className:"font-mono text-sm tracking-widest text-zinc-500 group-hover:text-purple-300 transition-colors",children:t.number})]}),M.jsx("h3",{className:"text-2xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors tracking-tight",children:t.title}),M.jsx("p",{className:`text-sm leading-relaxed mb-6 transition-colors duration-300 ${n?"text-zinc-200":"text-zinc-400"}`,children:t.description}),M.jsx("ul",{className:"space-y-2.5 mb-8",children:t.features.map((h,f)=>M.jsxs("li",{className:"flex items-start gap-2.5 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors",children:[M.jsx(iv,{className:"w-3.5 h-3.5 text-purple-400/70 shrink-0 mt-0.5 group-hover:text-purple-400 transition-colors"}),M.jsx("span",{children:h})]},f))})]}),M.jsxs("div",{className:"pt-6 border-t border-white/[0.06] flex items-center justify-between mt-auto",children:[M.jsx("div",{className:"flex flex-wrap gap-1.5",children:t.tags.slice(0,2).map(h=>M.jsx("span",{className:"text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]",children:h},h))}),M.jsxs("a",{href:"#contact",className:"inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 group-hover:text-white transition-colors",children:[M.jsx("span",{children:"Explore"}),M.jsx(yT,{className:"w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"})]})]})]})};function NT({threshold:t=.15,rootMargin:e="0px 0px -60px 0px",triggerOnce:n=!0}={}){const i=ke.useRef(null),[r,s]=ke.useState(!1);return ke.useEffect(()=>{const o=i.current;if(!o)return;if(typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){s(!0);return}const a=new IntersectionObserver(([l])=>{l.isIntersecting?(s(!0),n&&a.unobserve(l.target)):n||s(!1)},{threshold:t,rootMargin:e});return a.observe(o),()=>{a.disconnect()}},[t,e,n]),{ref:i,isVisible:r}}const Hn=({children:t,className:e="",delay:n=0,direction:i="up",blur:r=!0})=>{const{ref:s,isVisible:o}=NT(),a=()=>o?"translateY(0)":i==="up"?"translateY(36px)":"none";return M.jsx("div",{ref:s,className:`transition-all duration-1000 ease-out ${e}`,style:{opacity:o?1:0,filter:r?o?"blur(0px)":"blur(8px)":"none",transform:a(),transitionDelay:`${n}ms`},children:t})},DT=()=>M.jsxs("section",{id:"services",className:"relative py-28 md:py-36 px-6 md:px-12 z-10",children:[M.jsx("div",{className:"absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 blur-[120px]",style:{background:"radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 70%)"}}),M.jsxs("div",{className:"max-w-7xl mx-auto",children:[M.jsxs(Hn,{className:"section-editorial-header grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] items-end gap-8 mb-14 md:mb-20",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-5",children:[M.jsx(En,{size:"sm",isHovered:!0,glowColor:"#a855f7"}),M.jsx("span",{className:"text-xs font-mono tracking-widest text-purple-300 uppercase",children:"CAPABILITIES & SERVICES"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white",children:["What We ",M.jsx("span",{className:"font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400",children:"Illuminate"})]})]}),M.jsx("p",{className:"section-editorial-copy text-base sm:text-lg text-zinc-400 max-w-2xl font-light",children:"Turning complex challenges into meaningful digital experiences. Approach each star to awaken its luminous potential."})]}),M.jsx("div",{className:"services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",children:cT.map((t,e)=>M.jsx(Hn,{delay:e*120,children:M.jsx(LT,{service:t,index:e})},t.id))})]})]}),UT=()=>{const t=[{icon:lv,title:"Our Vision",text:"To sculpt digital realms where human curiosity and advanced technology coalesce into intuitive, illuminating experiences."},{icon:TT,title:"Our Approach",text:"Balancing rigorous engineering discipline with unbounded artistic imagination, ensuring every product is both robust and inspiring."},{icon:wT,title:"Creative Technology",text:"Harnessing machine intelligence, modern graphics shaders, and cloud architectures to solve real-world problems with elegance."}];return M.jsxs("section",{id:"about",className:"relative py-28 md:py-36 px-6 md:px-12 z-10 overflow-hidden",children:[M.jsx("div",{className:"absolute top-1/3 right-10 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[140px]",style:{background:"radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(96, 165, 250, 0.15) 50%, transparent 70%)"}}),M.jsx("div",{className:"max-w-7xl mx-auto",children:M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center",children:[M.jsx("div",{className:"lg:col-span-6",children:M.jsxs(Hn,{children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6",children:[M.jsx(En,{size:"sm",isHovered:!0,glowColor:"#a855f7"}),M.jsx("span",{className:"text-xs font-mono tracking-widest text-purple-300 uppercase",children:"ABOUT ALOKA"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.12] mb-8",children:["A little ",M.jsx("span",{className:"font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400",children:"light"})," can change everything."]}),M.jsx("p",{className:"text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-6",children:"ALOKA is built around the belief that technology should create meaningful impact. We combine creativity, engineering and curiosity to turn ideas into practical digital experiences."}),M.jsxs("p",{className:"text-sm md:text-base text-zinc-400 leading-relaxed font-light mb-10",children:["In ancient philosophy, ",M.jsx("em",{children:"Aloka"})," signifies spiritual illumination and light that dispels darkness. We embody this principle in software design — transforming opaque complexities into radiant, seamless products that delight users and accelerate growth."]}),M.jsxs("div",{className:"flex items-center gap-6 pt-6 border-t border-white/[0.08]",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("div",{className:"w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center",children:M.jsx(RT,{className:"w-5 h-5 text-purple-400"})}),M.jsxs("div",{children:[M.jsx("div",{className:"text-xs font-mono text-zinc-500 uppercase tracking-wider",children:"FOUNDED ON"}),M.jsx("div",{className:"text-sm font-semibold text-white",children:"Innovation & Pure Craft"})]})]}),M.jsx("div",{className:"h-8 w-px bg-white/[0.08]"}),M.jsxs("div",{children:[M.jsx("div",{className:"text-xs font-mono text-zinc-500 uppercase tracking-wider",children:"PHILOSOPHY"}),M.jsx("div",{className:"text-sm font-semibold text-purple-300",children:"Light Awakens Action"})]})]})]})}),M.jsx("div",{className:"lg:col-span-6 space-y-5",children:t.map((e,n)=>{const i=e.icon;return M.jsx(Hn,{delay:n*150,children:M.jsx("div",{className:"about-pillar-card group relative rounded-2xl p-6 sm:p-8 bg-[#0e0e13]/60 hover:bg-[#14121c]/80 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(168,85,247,0.2)]",children:M.jsxs("div",{className:"flex items-start gap-5",children:[M.jsx("div",{className:"w-12 h-12 rounded-2xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-600/30 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110",children:M.jsx(i,{className:"w-6 h-6 text-purple-300 group-hover:text-white transition-colors"})}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors",children:e.title}),M.jsx("p",{className:"text-sm text-zinc-400 leading-relaxed font-light",children:e.text})]})]})})},e.title)})})]})})]})},IT=()=>{const[t,e]=ke.useState(0),n=[{number:"01",title:"Discover",tagline:"Understand the problem, goals and opportunities.",description:"We immerse ourselves in your vision, analyzing user behavior, architectural bottlenecks, and market dynamics to discover the foundational core.",icon:CT},{number:"02",title:"Imagine",tagline:"Explore ideas, concepts and possible solutions.",description:"We sketch creative paradigms, prototype interactive workflows, and evaluate emerging technologies to uncover the most elegant solution.",icon:lv},{number:"03",title:"Create",tagline:"Design, engineer and build the solution.",description:"We engineer with pristine craft — modular React architectures, fluid animations, robust cloud infrastructures, and rigorous automated tests.",icon:ET},{number:"04",title:"Illuminate",tagline:"Launch, improve and deliver meaningful impact.",description:"We deploy to production, monitor telemetry, iterate based on real feedback, and ensure your product radiates enduring business value.",icon:PT}];return M.jsxs("section",{id:"process",className:"relative py-28 md:py-36 px-6 md:px-12 z-10 overflow-hidden",children:[M.jsx("div",{className:"absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[130px]",style:{background:"radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)"}}),M.jsxs("div",{className:"max-w-7xl mx-auto",children:[M.jsxs(Hn,{className:"text-center max-w-3xl mx-auto mb-20 md:mb-24",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-4",children:[M.jsx(En,{size:"sm",isHovered:!0,glowColor:"#a855f7"}),M.jsx("span",{className:"text-xs font-mono tracking-widest text-purple-300 uppercase",children:"OUR METHODOLOGY"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-6 leading-tight",children:["From a spark to something ",M.jsx("span",{className:"font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400",children:"extraordinary"}),"."]}),M.jsx("p",{className:"text-base sm:text-lg text-zinc-400 font-light",children:"Our iterative four-phase journey illuminates clarity at each milestone, turning abstract thoughts into tangible reality."})]}),M.jsxs("div",{className:"hidden lg:block relative mb-12",children:[M.jsx("div",{className:"absolute top-[32px] left-12 right-12 h-0.5 bg-white/[0.08] -z-0"}),M.jsx("div",{className:"absolute top-[32px] left-12 h-0.5 bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-400 transition-all duration-700 -z-0 shadow-[0_0_12px_#a855f7]",style:{width:`${t/(n.length-1)*88}%`}}),M.jsx("div",{className:"grid grid-cols-4 gap-6 relative z-10",children:n.map((i,r)=>{const s=t===r,o=t>r,a=i.icon;return M.jsxs("div",{onMouseEnter:()=>e(r),className:"flex flex-col items-center cursor-pointer group",children:[M.jsx("div",{className:"relative mb-8 flex items-center justify-center",children:M.jsx("div",{className:`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border ${s?"bg-purple-950/80 border-purple-400 shadow-[0_0_28px_rgba(168,85,247,0.7)] scale-110":o?"bg-purple-900/30 border-purple-500/40":"bg-[#0a0a0d] border-white/10 group-hover:border-purple-500/30"}`,children:M.jsx(En,{size:"md",isHovered:s,glowColor:s?"rgba(192, 132, 252, 1)":"rgba(168, 85, 247, 0.4)"})})}),M.jsxs("div",{className:`process-step-panel w-full rounded-2xl p-6 transition-all duration-500 border text-left ${s?"bg-[#13111b]/80 border-purple-500/40 shadow-[0_12px_35px_-10px_rgba(168,85,247,0.25)] -translate-y-1":"bg-[#0a0a0d]/50 border-white/[0.06] hover:bg-[#100f17]/60 hover:border-white/[0.12]"}`,children:[M.jsxs("div",{className:"flex items-center justify-between mb-4",children:[M.jsxs("span",{className:`font-mono text-xs font-semibold tracking-wider ${s?"text-purple-300":"text-zinc-500"}`,children:["PHASE ",i.number]}),M.jsx(a,{className:`w-4 h-4 ${s?"text-purple-300":"text-zinc-500"}`})]}),M.jsx("h3",{className:"text-xl font-semibold text-white mb-2 tracking-tight",children:i.title}),M.jsx("p",{className:"text-xs font-medium text-purple-200/80 mb-3",children:i.tagline}),M.jsx("p",{className:"text-xs text-zinc-400 leading-relaxed font-light",children:i.description})]})]},i.number)})})]}),M.jsx("div",{className:"lg:hidden space-y-6",children:n.map((i,r)=>{const s=t===r,o=i.icon;return M.jsxs("div",{onClick:()=>e(r),className:`process-step-mobile relative rounded-2xl p-6 transition-all duration-300 border ${s?"bg-[#13111b]/90 border-purple-500/50 shadow-[0_8px_30px_rgba(168,85,247,0.2)]":"bg-[#0a0a0d]/70 border-white/[0.08]"}`,children:[M.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[M.jsx("div",{className:"w-12 h-12 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center shrink-0",children:M.jsx(En,{size:"sm",isHovered:s})}),M.jsxs("div",{children:[M.jsxs("span",{className:"font-mono text-xs text-purple-400 tracking-wider",children:["PHASE ",i.number]}),M.jsx("h3",{className:"text-xl font-semibold text-white",children:i.title})]}),M.jsx(o,{className:"w-5 h-5 ml-auto text-zinc-400"})]}),M.jsx("p",{className:"text-xs font-medium text-purple-200/90 mb-2",children:i.tagline}),M.jsx("p",{className:"text-xs text-zinc-400 leading-relaxed font-light",children:i.description})]},i.number)})})]})]})},FT=[{id:"lumina-nebula",title:"Aura Interactive Engine",category:"Spatial Web & Real-Time Graphics",description:"An interactive generative visual system mapping dynamic light arrays and sound frequencies in continuous browser canvas space.",accentColor:"#A855F7",gradient:"from-purple-900/40 via-violet-950/20 to-black",tags:["WebGL","GLSL","Spatial Audio"],year:"2025"},{id:"astral-agent",title:"Prism Intelligent Workspace",category:"AI Interfaces & Autonomous Systems",description:"An adaptive interface that translates multi-modal neural interactions into luminous contextual knowledge graphs.",accentColor:"#8B5CF6",gradient:"from-indigo-900/40 via-purple-950/20 to-black",tags:["Next.js","LLM Graphs","Reactive Canvas"],year:"2025"},{id:"synapse-flow",title:"Vesper Micro-Cloud Platform",category:"Cloud Architecture & Infrastructure",description:"High-throughput distributed event broker featuring sub-millisecond edge routing and luminous telemetry visualization.",accentColor:"#60A5FA",gradient:"from-blue-900/40 via-indigo-950/20 to-black",tags:["Rust Core","Edge Worker","Observability"],year:"2024"},{id:"celestial-identity",title:"Solstice Design System",category:"Design Systems & Motion Guidelines",description:"A dark-universe design token library engineered for next-generation astronomical instruments and spatial computing displays.",accentColor:"#C084FC",gradient:"from-fuchsia-900/40 via-purple-950/20 to-black",tags:["Design Tokens","Tailwind","Micro-interactions"],year:"2024"}],OT=({project:t})=>{const[e,n]=ke.useState(!1);return M.jsxs("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),className:"project-card-shell group relative rounded-3xl overflow-hidden bg-[#0c0c10]/80 border border-white/[0.08] hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.25)] hover:-translate-y-1.5",children:[M.jsxs("div",{className:"project-card-art relative h-60 sm:h-72 w-full overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-[#0e0a17] flex items-center justify-center p-8",children:[M.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40"}),M.jsxs("div",{className:`project-card-orbit relative w-44 h-44 rounded-full flex items-center justify-center transition-all duration-700 ease-out ${e?"scale-110 rotate-12":"scale-100 rotate-0"}`,children:[M.jsx("div",{className:"absolute inset-0 rounded-full blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100",style:{background:`radial-gradient(circle, ${t.accentColor} 0%, rgba(99, 102, 241, 0.2) 60%, transparent 80%)`}}),M.jsxs("svg",{className:"w-full h-full relative z-10",viewBox:"0 0 160 160",fill:"none",children:[M.jsx("circle",{cx:"80",cy:"80",r:"68",stroke:"rgba(255, 255, 255, 0.12)",strokeWidth:"1",strokeDasharray:"4 6"}),M.jsx("circle",{cx:"80",cy:"80",r:"48",stroke:"rgba(168, 85, 247, 0.35)",strokeWidth:"1.5"}),M.jsx("circle",{cx:"80",cy:"80",r:"28",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"1"}),M.jsx("circle",{cx:"80",cy:"80",r:"4",fill:"#FFFFFF",className:"drop-shadow-[0_0_8px_#ffffff]"}),M.jsx("circle",{cx:"80",cy:"80",r:"12",fill:t.accentColor,opacity:"0.3"})]}),M.jsx("div",{className:"absolute z-20",children:M.jsx(En,{size:"sm",isHovered:e,glowColor:t.accentColor})})]}),M.jsx("div",{className:"absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-400",children:t.year})]}),M.jsxs("div",{className:"p-8 flex flex-col justify-between flex-grow",children:[M.jsxs("div",{children:[M.jsx("div",{className:"text-xs font-mono tracking-widest text-purple-400 uppercase mb-2",children:t.category}),M.jsx("h3",{className:"text-2xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors",children:t.title}),M.jsx("p",{className:"text-sm text-zinc-400 leading-relaxed font-light mb-6",children:t.description}),M.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:t.tags.map(i=>M.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]",children:i},i))})]}),M.jsxs("div",{className:"pt-4 border-t border-white/[0.06] flex items-center justify-between",children:[M.jsx("span",{className:"text-xs font-medium text-zinc-300 group-hover:text-white transition-colors",children:"View Project Case"}),M.jsx("div",{className:"w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-purple-600 border border-white/10 group-hover:border-purple-500 flex items-center justify-center transition-all duration-300",children:M.jsx(ev,{className:"w-4 h-4 text-zinc-300 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})})]})]})]})},kT=()=>M.jsxs("section",{id:"work",className:"relative py-28 md:py-36 px-6 md:px-12 z-10",children:[M.jsx("div",{className:"absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[130px]",style:{background:"radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.1) 60%, transparent 75%)"}}),M.jsxs("div",{className:"max-w-7xl mx-auto",children:[M.jsxs(Hn,{className:"section-editorial-header grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] items-end gap-8 mb-14 md:mb-20",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-5",children:[M.jsx(En,{size:"sm",isHovered:!0,glowColor:"#a855f7"}),M.jsx("span",{className:"text-xs font-mono tracking-widest text-purple-300 uppercase",children:"SELECTED PROJECTS"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight",children:["Ideas brought ",M.jsx("span",{className:"font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400",children:"to life"}),"."]})]}),M.jsx("p",{className:"section-editorial-copy text-base sm:text-lg text-zinc-400 max-w-2xl font-light",children:"A curated collection of digital artifacts, intelligent interfaces, and software architectures designed to endure."})]}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10",children:FT.map((t,e)=>M.jsx(Hn,{delay:e*150,children:M.jsx(OT,{project:t})},t.id))})]})]}),zT=[{id:"light-responsive-interfaces",category:"Design Engineering",title:"The Poetics of Responsive Light in Modern Digital Interfaces",summary:"Exploring how subtle luminous feedback and spatial particle systems can deepen emotional connection without overwhelming human attention.",date:"February 2025",readTime:"5 min read",slug:"#insight-1"},{id:"next-gen-agentic-craft",category:"Applied AI",title:"Designing for Ambient Intelligence: Beyond Simple Prompt Bars",summary:"Why the future of software interaction relies on contextual presence, adaptive visual cues, and calm technology paradigms.",date:"January 2025",readTime:"7 min read",slug:"#insight-2"},{id:"webgl-performance-discipline",category:"Performance",title:"60 FPS in Deep Space: High-Performance Canvas Optimization",summary:"Techniques for rendering thousands of interactive cosmic particles, radial gradients, and light fields while keeping main-thread execution near zero.",date:"December 2024",readTime:"6 min read",slug:"#insight-3"}],BT=()=>M.jsxs("section",{id:"insights",className:"relative py-28 md:py-36 px-6 md:px-12 z-10",children:[M.jsx("div",{className:"absolute bottom-1/3 left-1/3 w-[450px] h-[450px] rounded-full pointer-events-none opacity-20 blur-[130px]",style:{background:"radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(96, 165, 250, 0.1) 60%, transparent 75%)"}}),M.jsxs("div",{className:"max-w-7xl mx-auto",children:[M.jsxs(Hn,{className:"section-editorial-header grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] items-end gap-8 mb-14 md:mb-20",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-5",children:[M.jsx(En,{size:"sm",isHovered:!0,glowColor:"#a855f7"}),M.jsx("span",{className:"text-xs font-mono tracking-widest text-purple-300 uppercase",children:"JOURNAL & FIELD NOTES"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight",children:["Thoughts, ideas and ",M.jsx("span",{className:"font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400",children:"discoveries"}),"."]})]}),M.jsx("p",{className:"section-editorial-copy text-base sm:text-lg text-zinc-400 max-w-2xl font-light",children:"Reflections on interaction design, generative algorithms, creative engineering, and the architecture of light."})]}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:zT.map((t,e)=>M.jsx(Hn,{delay:e*140,children:M.jsxs("article",{className:"insight-card-shell group h-full flex flex-col justify-between rounded-3xl p-8 bg-[#0c0c10]/70 hover:bg-[#121019]/80 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-10px_rgba(168,85,247,0.2)]",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-zinc-500 mb-6",children:[M.jsx("span",{className:"text-purple-400 font-semibold uppercase tracking-wider",children:t.category}),M.jsx("span",{children:t.readTime})]}),M.jsx("h3",{className:"text-xl font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors leading-snug",children:t.title}),M.jsx("p",{className:"text-sm text-zinc-400 font-light leading-relaxed mb-6",children:t.summary})]}),M.jsxs("div",{className:"pt-6 border-t border-white/[0.06] flex items-center justify-between mt-auto",children:[M.jsx("span",{className:"text-xs text-zinc-500 font-mono",children:t.date}),M.jsxs("a",{href:t.slug,className:"inline-flex items-center gap-1.5 text-xs font-medium text-purple-300 group-hover:text-white transition-colors",children:[M.jsx("span",{children:"Read Article"}),M.jsx(ev,{className:"w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]})]})},t.id))})]})]}),HT=()=>{const[t,e]=ke.useState({name:"",email:"",subject:"",message:""}),[n,i]=ke.useState({}),[r,s]=ke.useState(!1),[o,a]=ke.useState("idle"),l=()=>{const d={};return t.name.trim()||(d.name="Please provide your name."),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(d.email="Please provide a valid email format."):d.email="Please provide your email address.",t.subject.trim()||(d.subject="Please add a subject."),(!t.message.trim()||t.message.trim().length<10)&&(d.message="Please share a brief message (minimum 10 characters)."),d},c=d=>{d.preventDefault();const h=l();i(h),Object.keys(h).length===0&&(s(!0),setTimeout(()=>{s(!1),a("demo-sent")},700))};return M.jsxs("section",{id:"contact",className:"relative py-28 md:py-36 px-6 md:px-12 z-10 overflow-hidden",children:[M.jsx("div",{className:"absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25 blur-[140px]",style:{background:"radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 75%)"}}),M.jsx("div",{className:"max-w-7xl mx-auto",children:M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start",children:[M.jsx("div",{className:"lg:col-span-5",children:M.jsxs(Hn,{children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6",children:[M.jsx(En,{size:"sm",isHovered:!0,glowColor:"#a855f7"}),M.jsx("span",{className:"text-xs font-mono tracking-widest text-purple-300 uppercase",children:"START A CONVERSATION"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-6",children:["Have an idea? Let's bring it ",M.jsx("span",{className:"font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400",children:"to light"}),"."]}),M.jsx("p",{className:"text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-10",children:"Every meaningful creation begins with a spark. Tell us what you're thinking, and let's explore what's possible together."}),M.jsxs("div",{className:"space-y-4 pt-6 border-t border-white/[0.08]",children:[M.jsxs("div",{className:"flex items-center gap-4 text-sm text-zinc-300",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center shrink-0",children:M.jsx(am,{className:"w-4 h-4 text-purple-400"})}),M.jsxs("div",{children:[M.jsx("div",{className:"text-xs font-mono text-zinc-500 uppercase tracking-wider",children:"EMAIL US"}),M.jsx("a",{href:"mailto:hello@aloka.digital",className:"font-medium text-white hover:text-purple-300 transition-colors",children:"hello@aloka.digital"})]})]}),M.jsxs("div",{className:"flex items-center gap-4 text-sm text-zinc-300",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center shrink-0",children:M.jsx(AT,{className:"w-4 h-4 text-purple-400"})}),M.jsxs("div",{children:[M.jsx("div",{className:"text-xs font-mono text-zinc-500 uppercase tracking-wider",children:"HEADQUARTERS"}),M.jsx("span",{className:"text-white",children:"Global Remote Studio"})]})]}),M.jsxs("div",{className:"flex items-center gap-4 text-sm text-zinc-300",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center shrink-0",children:M.jsx(MT,{className:"w-4 h-4 text-purple-400"})}),M.jsxs("div",{children:[M.jsx("div",{className:"text-xs font-mono text-zinc-500 uppercase tracking-wider",children:"RESPONSE TIME"}),M.jsx("span",{className:"text-white",children:"Within 24 Hours"})]})]})]})]})}),M.jsx("div",{className:"lg:col-span-7",children:M.jsx(Hn,{delay:200,children:M.jsxs("div",{className:"contact-form-shell relative rounded-3xl p-8 sm:p-10 bg-[#0d0d12]/80 border border-white/[0.1] backdrop-blur-2xl shadow-2xl",children:[M.jsx("div",{className:"absolute top-6 right-6",children:M.jsx(En,{size:"md",isHovered:!0,glowColor:"rgba(168, 85, 247, 0.7)"})}),o==="demo-sent"?M.jsxs("div",{className:"py-12 flex flex-col items-center text-center",children:[M.jsx("div",{className:"w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(168,85,247,0.5)]",children:M.jsx(iv,{className:"w-8 h-8 text-purple-300"})}),M.jsx("h3",{className:"text-2xl font-semibold text-white mb-3",children:"Your Message is Ready"}),M.jsxs("p",{className:"text-sm text-zinc-300 max-w-md font-light leading-relaxed mb-6",children:["Thank you, ",M.jsx("strong",{className:"text-white",children:t.name}),"! Form validated successfully. To send directly via your local email client:"]}),M.jsxs("a",{href:`mailto:hello@aloka.digital?subject=${encodeURIComponent(t.subject||"Inquiry from ALOKA Website")}&body=${encodeURIComponent(`Name: ${t.name}
Email: ${t.email}

Message:
${t.message}`)}`,className:"inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)]",children:[M.jsx(am,{className:"w-4 h-4"}),M.jsx("span",{children:"Open Mail Client"})]}),M.jsx("button",{onClick:()=>a("idle"),className:"mt-6 text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition-colors",children:"Edit details or send another note"})]}):M.jsxs("form",{onSubmit:c,noValidate:!0,className:"space-y-6",children:[M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[M.jsxs("div",{children:[M.jsxs("label",{htmlFor:"name",className:"block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2",children:["Your Name ",M.jsx("span",{className:"text-purple-400",children:"*"})]}),M.jsx("input",{id:"name",type:"text",value:t.name,onChange:d=>e({...t,name:d.target.value}),placeholder:"e.g. Elena Rostova",className:`contact-field w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white text-sm border focus:outline-none transition-all placeholder:text-zinc-600 ${n.name?"border-red-500/60 focus:border-red-500":"border-white/[0.08] focus:border-purple-500/60 focus:bg-white/[0.05]"}`}),n.name&&M.jsxs("p",{className:"mt-1.5 text-xs text-red-400 flex items-center gap-1",children:[M.jsx(Fa,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:n.name})]})]}),M.jsxs("div",{children:[M.jsxs("label",{htmlFor:"email",className:"block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2",children:["Email Address ",M.jsx("span",{className:"text-purple-400",children:"*"})]}),M.jsx("input",{id:"email",type:"email",value:t.email,onChange:d=>e({...t,email:d.target.value}),placeholder:"elena@example.com",className:`contact-field w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white text-sm border focus:outline-none transition-all placeholder:text-zinc-600 ${n.email?"border-red-500/60 focus:border-red-500":"border-white/[0.08] focus:border-purple-500/60 focus:bg-white/[0.05]"}`}),n.email&&M.jsxs("p",{className:"mt-1.5 text-xs text-red-400 flex items-center gap-1",children:[M.jsx(Fa,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:n.email})]})]})]}),M.jsxs("div",{children:[M.jsxs("label",{htmlFor:"subject",className:"block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2",children:["Subject ",M.jsx("span",{className:"text-purple-400",children:"*"})]}),M.jsx("input",{id:"subject",type:"text",value:t.subject,onChange:d=>e({...t,subject:d.target.value}),placeholder:"e.g. Brand New Digital Product & Architecture",className:`contact-field w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white text-sm border focus:outline-none transition-all placeholder:text-zinc-600 ${n.subject?"border-red-500/60 focus:border-red-500":"border-white/[0.08] focus:border-purple-500/60 focus:bg-white/[0.05]"}`}),n.subject&&M.jsxs("p",{className:"mt-1.5 text-xs text-red-400 flex items-center gap-1",children:[M.jsx(Fa,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:n.subject})]})]}),M.jsxs("div",{children:[M.jsxs("label",{htmlFor:"message",className:"block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2",children:["Message ",M.jsx("span",{className:"text-purple-400",children:"*"})]}),M.jsx("textarea",{id:"message",rows:4,value:t.message,onChange:d=>e({...t,message:d.target.value}),placeholder:"Tell us about your project vision, timeline, and goals...",className:`contact-field w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white text-sm border focus:outline-none transition-all placeholder:text-zinc-600 resize-none ${n.message?"border-red-500/60 focus:border-red-500":"border-white/[0.08] focus:border-purple-500/60 focus:bg-white/[0.05]"}`}),n.message&&M.jsxs("p",{className:"mt-1.5 text-xs text-red-400 flex items-center gap-1",children:[M.jsx(Fa,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:n.message})]})]}),M.jsxs("button",{type:"submit",disabled:r,className:"contact-submit w-full relative group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] disabled:opacity-50",children:[M.jsx(bT,{className:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"}),M.jsx("span",{children:r?"Validating...":"Send Message"})]})]})]})})})]})})]})},VT=()=>{const t=new Date().getFullYear(),e=()=>{window.scrollTo({top:0,behavior:"smooth"})},n=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Services",href:"#services"},{name:"Our Work",href:"#work"},{name:"Insights",href:"#insights"},{name:"Contact",href:"#contact"}],i=["Web Development","AI & Machine Learning","Software Architecture","UI/UX & Creative Design","Digital Solutions","Innovation Consulting"],r=[{label:"X (formerly Twitter)",href:"https://twitter.com",svg:M.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:M.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})},{label:"GitHub",href:"https://github.com",svg:M.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:M.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})},{label:"LinkedIn",href:"https://linkedin.com",svg:M.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:M.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})})}];return M.jsx("footer",{className:"relative border-t border-white/[0.08] bg-[#030303]/90 backdrop-blur-xl z-10 pt-20 pb-12 px-6 md:px-12",children:M.jsxs("div",{className:"max-w-7xl mx-auto",children:[M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]",children:[M.jsxs("div",{className:"md:col-span-5 flex flex-col justify-between",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[M.jsx(En,{size:"sm",isHovered:!0,glowColor:"#a855f7"}),M.jsx("span",{className:"font-sans text-2xl font-bold tracking-[0.25em] text-white uppercase",children:"ALOKA"})]}),M.jsx("p",{className:"text-sm text-zinc-400 font-light max-w-sm leading-relaxed mb-6",children:"We turn ideas into light. Creating premium digital experiences, intelligent systems, and enduring creative technology."})]}),M.jsx("div",{className:"flex items-center gap-3",children:r.map(s=>M.jsx("a",{href:s.href,target:"_blank",rel:"noreferrer","aria-label":s.label,className:"w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/30 transition-all duration-300",children:s.svg},s.label))})]}),M.jsxs("div",{className:"md:col-span-3",children:[M.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6",children:"Navigation"}),M.jsx("ul",{className:"space-y-3",children:n.map(s=>M.jsx("li",{children:M.jsx("a",{href:s.href,className:"text-sm text-zinc-400 hover:text-purple-300 transition-colors",children:s.name})},s.name))})]}),M.jsxs("div",{className:"md:col-span-4",children:[M.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6",children:"Capabilities"}),M.jsx("ul",{className:"space-y-3",children:i.map(s=>M.jsx("li",{children:M.jsx("a",{href:"#services",className:"text-sm text-zinc-400 hover:text-purple-300 transition-colors",children:s})},s))})]})]}),M.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsxs("span",{children:["© ",t," ALOKA Studio Inc."]}),M.jsx("span",{children:"•"}),M.jsx("span",{children:"All rights reserved."})]}),M.jsxs("button",{onClick:e,className:"flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group cursor-pointer","aria-label":"Back to top",children:[M.jsx("span",{className:"uppercase tracking-wider text-[11px]",children:"Back to Apex"}),M.jsx("div",{className:"w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-purple-600 transition-colors",children:M.jsx(ST,{className:"w-3.5 h-3.5"})})]})]})]})})},GT=()=>M.jsxs("div",{className:"relative min-h-screen bg-[#030303] text-white selection:bg-purple-600/30 selection:text-purple-200",children:[M.jsxs("main",{className:"relative z-10 flex flex-col",children:[M.jsx(lT,{}),M.jsx(DT,{}),M.jsx(UT,{}),M.jsx(IT,{}),M.jsx(kT,{}),M.jsx(BT,{}),M.jsx(HT,{})]}),M.jsx(VT,{})]});eu.createRoot(document.getElementById("root")).render(M.jsx(Fv.StrictMode,{children:M.jsx(GT,{})}));
